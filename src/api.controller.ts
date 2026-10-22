import { Controller, Get, Post, Put, Delete, Body, Param, Query, Res } from '@nestjs/common';
import { DatabaseService } from './database.service';
import * as crypto from 'crypto';

@Controller('api')
export class ApiController {
  constructor(private readonly db: DatabaseService) {}

  // -------------------------------------------------------------
  // BOOTSTRAP : Récupère l'intégralité des données en direct de SQLite
  // -------------------------------------------------------------
  @Get('data')
  getAllData() {
    const users = this.db.query('SELECT id, email, username, name, role, role_label as roleLabel, active, payment_link as paymentLink FROM users');
    const comptes = this.db.query(`
      SELECT id, libelle, email, mot_de_passe as motDePasse, date_ouverture as dateOuverture, 
             date_reabonnement as dateReabonnement, cout_recharge_mensuel as coutRechargeMensuel, 
             capacite_places as capacitePlaces, max_profils as maxProfils, statut, notes 
      FROM comptes
    `);
    const profils = this.db.query('SELECT id, nom, code_pin as codePin, statut, compte_id as compteId FROM profils');
    const clients = this.db.query('SELECT id, nom, telephone, ancien_id as ancienId, notes FROM clients');
    const abonnements = this.db.query(`
      SELECT id, client_id as clientId, profil_id as profilId, date_debut as dateDebut, 
             date_fin as dateFin, tarif, statut 
      FROM abonnements
    `);
    const mouvementsCaisse = this.db.query('SELECT id, type, beneficiaire, montant, date, motif FROM mouvements_caisse ORDER BY date DESC');
    const caissePointage = this.db.get(`
      SELECT dernier_pointage_reel as dernierPointageReel, date_dernier_pointage as dateDernierPointage, notes 
      FROM caisse_pointage WHERE id = 'caisse-singleton'
    `) || { dernierPointageReel: 10000, dateDernierPointage: '2026-10-22', notes: '' };
    const auditLogs = this.db.query('SELECT id, timestamp, user_name as userName, action, detail FROM audit_logs ORDER BY timestamp DESC');
    
    let relanceConfig = {
      messageTemplate: "Bonjour {nom}, votre abonnement Netflix Horizon Service arrive à échéance le {dateFin}.\n\nPour continuer à profiter de vos programmes sans coupure, vous pouvez effectuer le règlement de {tarif} FCFA via ce lien de paiement sécurisé :\n{lienPaiement}\n\nMerci pour votre fidélité !",
      lienPaiementDefaut: "https://pay.wave.com/m/horizon-service",
      lienPaiementEmmanuel: "https://pay.wave.com/m/horizon-service-emmanuel",
      lienPaiementMalan: "https://pay.wave.com/m/horizon-service-malan",
      numeroWhatsAppRelance: ""
    };
    const savedSetting = this.db.get<{ value: string }>('SELECT value FROM settings WHERE key = ?', ['relanceConfig']);
    if (savedSetting) {
      try { relanceConfig = JSON.parse(savedSetting.value); } catch (e) {}
    }

    return {
      users,
      comptes,
      profils,
      clients,
      abonnements,
      caisse: caissePointage,
      mouvementsCaisse,
      auditLogs,
      relanceConfig
    };
  }

  // -------------------------------------------------------------
  // ABONNEMENTS
  // -------------------------------------------------------------
  @Post('abonnements')
  createAbonnement(@Body() body: any) {
    const id = body.id || 'ab-' + crypto.randomUUID().slice(0, 8);
    this.db.run(
      `INSERT INTO abonnements (id, client_id, profil_id, date_debut, date_fin, tarif, statut)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [id, body.clientId, body.profilId, body.dateDebut, body.dateFin, body.tarif, body.statut || 'actif']
    );
    return { success: true, id };
  }

  @Put('abonnements/:id')
  updateAbonnement(@Param('id') id: string, @Body() body: any) {
    this.db.run(
      `UPDATE abonnements SET client_id = ?, profil_id = ?, date_debut = ?, date_fin = ?, tarif = ?, statut = ?
       WHERE id = ?`,
      [body.clientId, body.profilId, body.dateDebut, body.dateFin, body.tarif, body.statut || 'actif', id]
    );
    return { success: true };
  }

  @Delete('abonnements/:id')
  deleteAbonnement(@Param('id') id: string) {
    this.db.run('DELETE FROM abonnements WHERE id = ?', [id]);
    return { success: true };
  }

  @Post('abonnements/:id/renew')
  renewAbonnement(@Param('id') id: string) {
    const sub = this.db.get<any>('SELECT * FROM abonnements WHERE id = ?', [id]);
    if (!sub) return { success: false, message: 'Abonnement introuvable' };

    const oldEnd = new Date(sub.date_fin);
    const newEnd = new Date(oldEnd);
    newEnd.setMonth(newEnd.getMonth() + 1);
    const newDateFin = newEnd.toISOString().split('T')[0];

    this.db.run('UPDATE abonnements SET date_fin = ?, statut = ? WHERE id = ?', [newDateFin, 'actif', id]);
    return { success: true, dateFin: newDateFin };
  }

  // -------------------------------------------------------------
  // CLIENTS
  // -------------------------------------------------------------
  @Post('clients')
  createClient(@Body() body: any) {
    const id = body.id || 'cli-' + crypto.randomUUID().slice(0, 8);
    this.db.run(
      `INSERT INTO clients (id, nom, telephone, ancien_id, notes)
       VALUES (?, ?, ?, ?, ?)`,
      [id, body.nom, body.telephone, body.ancienId || '', body.notes || '']
    );
    return { success: true, id };
  }

  @Put('clients/:id')
  updateClient(@Param('id') id: string, @Body() body: any) {
    this.db.run(
      `UPDATE clients SET nom = ?, telephone = ?, ancien_id = ?, notes = ?
       WHERE id = ?`,
      [body.nom, body.telephone, body.ancienId || '', body.notes || '', id]
    );
    return { success: true };
  }

  @Delete('clients/:id')
  deleteClient(@Param('id') id: string) {
    this.db.run('DELETE FROM clients WHERE id = ?', [id]);
    return { success: true };
  }

  // -------------------------------------------------------------
  // COMPTES & PROFILS
  // -------------------------------------------------------------
  @Post('comptes')
  createCompte(@Body() body: any) {
    const id = body.id || 'cpt-' + crypto.randomUUID().slice(0, 8);
    this.db.run(
      `INSERT INTO comptes (id, libelle, email, mot_de_passe, date_ouverture, date_reabonnement, cout_recharge_mensuel, capacite_places, max_profils, statut, notes)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [id, body.libelle, body.email, body.motDePasse, body.dateOuverture, body.dateReabonnement, body.coutRechargeMensuel || 6500, body.capacitePlaces || 15, body.maxProfils || 5, body.statut || 'actif', body.notes || '']
    );
    return { success: true, id };
  }

  @Put('comptes/:id')
  updateCompte(@Param('id') id: string, @Body() body: any) {
    this.db.run(
      `UPDATE comptes SET libelle = ?, email = ?, mot_de_passe = ?, date_ouverture = ?, date_reabonnement = ?, cout_recharge_mensuel = ?, capacite_places = ?, max_profils = ?, statut = ?, notes = ?
       WHERE id = ?`,
      [body.libelle, body.email, body.motDePasse, body.dateOuverture, body.dateReabonnement, body.coutRechargeMensuel, body.capacitePlaces, body.maxProfils, body.statut, body.notes || '', id]
    );
    return { success: true };
  }

  @Delete('comptes/:id')
  deleteCompte(@Param('id') id: string) {
    this.db.run('DELETE FROM comptes WHERE id = ?', [id]);
    return { success: true };
  }

  @Post('profils')
  createProfil(@Body() body: any) {
    const id = body.id || 'prof-' + crypto.randomUUID().slice(0, 8);
    this.db.run(
      `INSERT INTO profils (id, nom, code_pin, statut, compte_id)
       VALUES (?, ?, ?, ?, ?)`,
      [id, body.nom, body.codePin || '1234', body.statut || 'ok', body.compteId]
    );
    return { success: true, id };
  }

  @Put('profils/:id')
  updateProfil(@Param('id') id: string, @Body() body: any) {
    this.db.run(
      `UPDATE profils SET nom = ?, code_pin = ?, statut = ?
       WHERE id = ?`,
      [body.nom, body.codePin, body.statut, id]
    );
    return { success: true };
  }

  @Delete('profils/:id')
  deleteProfil(@Param('id') id: string) {
    this.db.run('DELETE FROM profils WHERE id = ?', [id]);
    return { success: true };
  }

  // -------------------------------------------------------------
  // CAISSE & FINANCES
  // -------------------------------------------------------------
  @Post('caisse/mouvements')
  createMouvement(@Body() body: any) {
    const id = body.id || 'mvt-' + crypto.randomUUID().slice(0, 8);
    const date = body.date || new Date().toISOString().split('T')[0];
    this.db.run(
      `INSERT INTO mouvements_caisse (id, type, beneficiaire, montant, date, motif)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [id, body.type, body.beneficiaire, body.montant, date, body.motif || '']
    );
    return { success: true, id };
  }

  @Put('caisse/mouvements/:id')
  updateMouvement(@Param('id') id: string, @Body() body: any) {
    const date = body.date || new Date().toISOString().split('T')[0];
    this.db.run(
      `UPDATE mouvements_caisse SET type = ?, beneficiaire = ?, montant = ?, date = ?, motif = ?
       WHERE id = ?`,
      [body.type, body.beneficiaire, body.montant, date, body.motif || '', id]
    );
    return { success: true };
  }

  @Delete('caisse/mouvements/:id')
  deleteMouvement(@Param('id') id: string) {
    this.db.run('DELETE FROM mouvements_caisse WHERE id = ?', [id]);
    return { success: true };
  }

  @Post('caisse/pointage')
  updatePointage(@Body() body: any) {
    this.db.run(
      `INSERT OR REPLACE INTO caisse_pointage (id, dernier_pointage_reel, date_dernier_pointage, notes)
       VALUES ('caisse-singleton', ?, ?, ?)`,
      [body.dernierPointageReel, body.dateDernierPointage, body.notes || '']
    );
    return { success: true };
  }

  // -------------------------------------------------------------
  // PARAMÈTRES & RELANCES
  // -------------------------------------------------------------
  @Post('settings/relance')
  updateRelanceConfig(@Body() body: any) {
    this.db.run(
      `INSERT OR REPLACE INTO settings (key, value)
       VALUES ('relanceConfig', ?)`,
      [JSON.stringify(body)]
    );
    return { success: true };
  }

  // -------------------------------------------------------------
  // AUDIT LOGS
  // -------------------------------------------------------------
  @Post('audit')
  logAction(@Body() body: any) {
    const id = 'log-' + crypto.randomUUID().slice(0, 8);
    this.db.run(
      `INSERT INTO audit_logs (id, timestamp, user_name, action, detail)
       VALUES (?, datetime('now'), ?, ?, ?)`,
      [id, body.userName || 'Système', body.action, body.detail]
    );
    return { success: true, id };
  }

  // -------------------------------------------------------------
  // BACKUP SQL
  // -------------------------------------------------------------
  
  // -------------------------------------------------------------
  // UTILISATEURS & LIENS DE PAIEMENT
  // -------------------------------------------------------------
  @Put('users/:id/payment-link')
  updateUserPaymentLink(@Param('id') id: string, @Body() body: any) {
    const paymentLink = body.paymentLink || '';
    this.db.run('UPDATE users SET payment_link = ? WHERE id = ?', [paymentLink, id]);
    return { success: true, paymentLink };
  }

  @Get('backup/sql')
  getSqlBackup(@Res() res: any) {
    const tables = ['users', 'comptes', 'profils', 'clients', 'abonnements', 'mouvements_caisse', 'caisse_pointage', 'audit_logs', 'settings'];
    let sqlDump = '-- =========================================================\n';
    sqlDump += '-- HORIZON SERVICE - SAUVEGARDE SQL OFFICIELLE (SQLITE / POSTGRES)\n';
    sqlDump += '-- Date: ' + new Date().toISOString() + '\n';
    sqlDump += '-- Utilisateurs enregistrés: Emmanuel (Fondateur) & Malan Abdias (Associé)\n';
    sqlDump += '-- =========================================================\n\n';
    sqlDump += 'PRAGMA foreign_keys = OFF;\n\n';

    for (const table of tables) {
      const tableDef = this.db.get<{ sql: string }>("SELECT sql FROM sqlite_master WHERE type='table' AND name = ?", [table]);
      if (tableDef && tableDef.sql) {
        sqlDump += '-- Structure: ' + table + '\n';
        sqlDump += 'DROP TABLE IF EXISTS ' + table + ';\n';
        sqlDump += tableDef.sql + ';\n\n';
      }
      const rows = this.db.query<any>('SELECT * FROM ' + table);
      if (rows && rows.length > 0) {
        sqlDump += '-- Données: ' + table + ' (' + rows.length + ' lignes)\n';
        for (const row of rows) {
          const cols = Object.keys(row);
          const vals = cols.map(c => {
            const v = row[c];
            if (v === null || v === undefined) return 'NULL';
            if (typeof v === 'number') return v;
            return '\x27' + String(v).replace(/'/g, "''") + '\x27';
          });
          sqlDump += 'INSERT INTO ' + table + ' (' + cols.join(', ') + ') VALUES (' + vals.join(', ') + ');\n';
        }
        sqlDump += '\n';
      }
    }
    sqlDump += 'PRAGMA foreign_keys = ON;\n';
    sqlDump += '-- Fin de la sauvegarde\n';

    const dateStr = new Date().toISOString().split('T')[0];
    res.setHeader('Content-Type', 'application/sql');
    res.setHeader('Content-Disposition', `attachment; filename="horizon_service_backup_${dateStr}.sql"`);
    return res.send(sqlDump);
  }

}
