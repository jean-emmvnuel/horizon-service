import { BadRequestException, Controller, Get, Post, Put, Delete, Body, Param, Query, Res } from '@nestjs/common';
import { DatabaseService } from './database.service';
import * as crypto from 'crypto';

@Controller('api')
export class ApiController {
  constructor(private readonly db: DatabaseService) {}

  // -------------------------------------------------------------
  // BOOTSTRAP : Récupère l'intégralité des données en direct de Supabase PostgreSQL
  // -------------------------------------------------------------
  @Get('data')
  async getAllData() {
    const users = await this.db.query('SELECT id, email, username, name, role, role_label as "roleLabel", active FROM users');
    const comptes = await this.db.query(`
      SELECT id, libelle, email, mot_de_passe as "motDePasse", date_ouverture as "dateOuverture", 
             date_reabonnement as "dateReabonnement", cout_recharge_mensuel as "coutRechargeMensuel", 
             capacite_places as "capacitePlaces", max_profils as "maxProfils", statut, notes 
      FROM comptes
    `);
    const profils = await this.db.query('SELECT id, nom, code_pin as "codePin", statut, compte_id as "compteId" FROM profils');
    const clients = await this.db.query('SELECT id, nom, telephone, ancien_id as "ancienId", notes FROM clients');
    const abonnements = await this.db.query(`
      SELECT id, client_id as "clientId", profil_id as "profilId", date_debut as "dateDebut", 
             date_fin as "dateFin", tarif, statut 
      FROM abonnements
    `);
    const mouvementsCaisse = await this.db.query('SELECT id, type, beneficiaire, montant, date, motif FROM mouvements_caisse ORDER BY date DESC');
    const caissePointage = (await this.db.get(`
      SELECT dernier_pointage_reel as "dernierPointageReel", date_dernier_pointage as "dateDernierPointage", notes 
      FROM caisse_pointage WHERE id = 'caisse-singleton'
    `)) || { dernierPointageReel: 10000, dateDernierPointage: '2026-10-22', notes: '' };
    const auditLogs = await this.db.query('SELECT id, timestamp, user_name as "userName", action, detail FROM audit_logs ORDER BY timestamp DESC');
    
    return {
      users,
      comptes,
      profils,
      clients,
      abonnements,
      caisse: caissePointage,
      mouvementsCaisse,
      auditLogs
    };
  }

  // -------------------------------------------------------------
  // ABONNEMENTS
  // -------------------------------------------------------------
  @Post('abonnements')
  async createAbonnement(@Body() body: any) {
    const id = body.id || 'ab-' + crypto.randomUUID().slice(0, 8);
    const today = new Date().toISOString().split('T')[0];
    const nextMonth = new Date(Date.now() + 30 * 24 * 3600 * 1000).toISOString().split('T')[0];
    const dateDebut = body.dateDebut || today;
    const dateFin = body.dateFin || nextMonth;
    const tarif = Number(body.tarif) || 1500;
    const statut = body.statut || 'actif';

    await this.db.run(
      `INSERT INTO abonnements (id, client_id, profil_id, date_debut, date_fin, tarif, statut)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [id, body.clientId, body.profilId, dateDebut, dateFin, tarif, statut]
    );
    return { success: true, id };
  }

  @Put('abonnements/:id')
  async updateAbonnement(@Param('id') id: string, @Body() body: any) {
    const existing = await this.db.get<any>('SELECT * FROM abonnements WHERE id = ?', [id]);
    const clientId = body.clientId !== undefined ? body.clientId : existing?.client_id;
    const profilId = body.profilId !== undefined ? body.profilId : existing?.profil_id;
    const dateDebut = body.dateDebut !== undefined ? body.dateDebut : existing?.date_debut;
    const dateFin = body.dateFin !== undefined ? body.dateFin : existing?.date_fin;
    const tarif = body.tarif !== undefined ? Number(body.tarif) : (existing?.tarif || 1500);
    const statut = body.statut !== undefined ? body.statut : (existing?.statut || 'actif');

    await this.db.run(
      `UPDATE abonnements SET client_id = ?, profil_id = ?, date_debut = ?, date_fin = ?, tarif = ?, statut = ?
       WHERE id = ?`,
      [clientId, profilId, dateDebut, dateFin, tarif, statut, id]
    );
    return { success: true };
  }

  @Delete('abonnements/:id')
  async deleteAbonnement(@Param('id') id: string) {
    await this.db.run('DELETE FROM abonnements WHERE id = ?', [id]);
    return { success: true };
  }

  @Post('abonnements/:id/renew')
  async renewAbonnement(@Param('id') id: string) {
    const sub = await this.db.get<any>('SELECT * FROM abonnements WHERE id = ?', [id]);
    if (!sub) return { success: false, message: 'Abonnement introuvable' };

    const oldEnd = new Date(sub.date_fin);
    const newEnd = new Date(oldEnd);
    newEnd.setMonth(newEnd.getMonth() + 1);
    const dateFin = newEnd.toISOString().split('T')[0];

    await this.db.run(
      `UPDATE abonnements SET date_fin = ?, statut = 'actif' WHERE id = ?`,
      [dateFin, id]
    );
    return { success: true, dateFin };
  }

  // -------------------------------------------------------------
  // CLIENTS
  // -------------------------------------------------------------
  @Post('clients')
  async createClient(@Body() body: any) {
    const id = body.id || 'cli-' + crypto.randomUUID().slice(0, 8);
    const nom = String(body.nom || '').trim();
    const telephone = String(body.telephone || '').trim();
    const ancienId = String(body.ancienId || '').trim();
    const notes = String(body.notes || '').trim();

    await this.db.run(
      `INSERT INTO clients (id, nom, telephone, ancien_id, notes)
       VALUES (?, ?, ?, ?, ?)`,
      [id, nom, telephone, ancienId, notes]
    );
    return { success: true, id };
  }

  @Put('clients/:id')
  async updateClient(@Param('id') id: string, @Body() body: any) {
    const existing = await this.db.get<any>('SELECT * FROM clients WHERE id = ?', [id]);
    const nom = body.nom !== undefined ? String(body.nom || '').trim() : (existing?.nom || '');
    const telephone = body.telephone !== undefined ? String(body.telephone || '').trim() : (existing?.telephone || '');
    const ancienId = body.ancienId !== undefined ? String(body.ancienId || '').trim() : (existing?.ancien_id || '');
    const notes = body.notes !== undefined ? String(body.notes || '').trim() : (existing?.notes || '');

    await this.db.run(
      `UPDATE clients SET nom = ?, telephone = ?, ancien_id = ?, notes = ?
       WHERE id = ?`,
      [nom, telephone, ancienId, notes, id]
    );
    return { success: true };
  }

  @Delete('clients/:id')
  async deleteClient(@Param('id') id: string) {
    await this.db.run('DELETE FROM clients WHERE id = ?', [id]);
    return { success: true };
  }

  // -------------------------------------------------------------
  // COMPTES & PROFILS NETFLIX
  // -------------------------------------------------------------
  @Post('comptes')
  async createCompte(@Body() body: any) {
    const id = body.id || 'cpt-' + crypto.randomUUID().slice(0, 8);
    const today = new Date().toISOString().split('T')[0];
    const nextMonth = new Date(Date.now() + 30 * 24 * 3600 * 1000).toISOString().split('T')[0];
    const libelle = (body.libelle || 'Compte Netflix').trim();
    const email = (body.email || '').trim();
    const motDePasse = body.motDePasse || 'Hz#Nflx' + Math.floor(1000 + Math.random() * 9000);
    const dateOuverture = body.dateOuverture || today;
    const dateReabonnement = body.dateReabonnement || nextMonth;
    const coutRecharge = Number(body.coutRechargeMensuel) || 6500;
    const capacite = Number(body.capacitePlaces) || 15;
    const maxProfils = Number(body.maxProfils) || 5;
    const statut = body.statut || 'actif';
    const notes = (body.notes || '').trim();

    await this.db.run(
      `INSERT INTO comptes (id, libelle, email, mot_de_passe, date_ouverture, date_reabonnement, cout_recharge_mensuel, capacite_places, max_profils, statut, notes)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [id, libelle, email, motDePasse, dateOuverture, dateReabonnement, coutRecharge, capacite, maxProfils, statut, notes]
    );
    return { success: true, id };
  }

  @Put('comptes/:id')
  async updateCompte(@Param('id') id: string, @Body() body: any) {
    const existing = await this.db.get<any>('SELECT * FROM comptes WHERE id = ?', [id]);
    const libelle = body.libelle !== undefined ? body.libelle.trim() : (existing?.libelle || '');
    const email = body.email !== undefined ? body.email.trim() : (existing?.email || '');
    const motDePasse = body.motDePasse !== undefined ? body.motDePasse : (existing?.mot_de_passe || '');
    const dateOuverture = body.dateOuverture !== undefined ? body.dateOuverture : (existing?.date_ouverture || '');
    const dateReabonnement = body.dateReabonnement !== undefined ? body.dateReabonnement : (existing?.date_reabonnement || '');
    const coutRecharge = body.coutRechargeMensuel !== undefined ? Number(body.coutRechargeMensuel) : (existing?.cout_recharge_mensuel || 6500);
    const capacite = body.capacitePlaces !== undefined ? Number(body.capacitePlaces) : (existing?.capacite_places || 15);
    const maxProfils = body.maxProfils !== undefined ? Number(body.maxProfils) : (existing?.max_profils || 5);
    const statut = body.statut !== undefined ? body.statut : (existing?.statut || 'actif');
    const notes = body.notes !== undefined ? body.notes : (existing?.notes || '');

    await this.db.run(
      `UPDATE comptes SET libelle = ?, email = ?, mot_de_passe = ?, date_ouverture = ?, date_reabonnement = ?, cout_recharge_mensuel = ?, capacite_places = ?, max_profils = ?, statut = ?, notes = ?
       WHERE id = ?`,
      [libelle, email, motDePasse, dateOuverture, dateReabonnement, coutRecharge, capacite, maxProfils, statut, notes, id]
    );
    return { success: true };
  }

  @Delete('comptes/:id')
  async deleteCompte(@Param('id') id: string) {
    await this.db.run('DELETE FROM comptes WHERE id = ?', [id]);
    return { success: true };
  }

  @Post('profils')
  async createProfil(@Body() body: any) {
    const id = body.id || 'prof-' + crypto.randomUUID().slice(0, 8);
    const nom = body.nom || 'Profil';
    const codePin = body.codePin || '1234';
    const statut = body.statut || 'ok';
    const compteId = body.compteId || '';

    await this.db.run(
      `INSERT INTO profils (id, nom, code_pin, statut, compte_id)
       VALUES (?, ?, ?, ?, ?)`,
      [id, nom, codePin, statut, compteId]
    );
    return { success: true, id };
  }

  @Put('profils/:id')
  async updateProfil(@Param('id') id: string, @Body() body: any) {
    const existing = await this.db.get<any>('SELECT * FROM profils WHERE id = ?', [id]);
    const nom = body.nom !== undefined ? body.nom : (existing?.nom || 'Profil');
    const codePin = body.codePin !== undefined ? body.codePin : (existing?.code_pin || '1234');
    const statut = body.statut !== undefined ? body.statut : (existing?.statut || 'ok');

    await this.db.run(
      `UPDATE profils SET nom = ?, code_pin = ?, statut = ?
       WHERE id = ?`,
      [nom, codePin, statut, id]
    );
    return { success: true };
  }

  @Delete('profils/:id')
  async deleteProfil(@Param('id') id: string) {
    await this.db.run('DELETE FROM profils WHERE id = ?', [id]);
    return { success: true };
  }

  // -------------------------------------------------------------
  // CAISSE & FINANCES
  // -------------------------------------------------------------
  @Post('caisse/mouvements')
  async createMouvement(@Body() body: any) {
    const id = body.id || 'mvt-' + crypto.randomUUID().slice(0, 8);
    const date = body.date || new Date().toISOString().split('T')[0];
    const type = body.type || 'recharge';
    const beneficiaire = body.beneficiaire || 'Horizon';
    const montant = Number(body.montant) || 0;
    const motif = String(body.motif || '').trim();

    if (type === 'depense_justifiee' && !motif) {
      throw new BadRequestException('Le motif est obligatoire pour une dépense justifiée.');
    }

    await this.db.run(
      `INSERT INTO mouvements_caisse (id, type, beneficiaire, montant, date, motif)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [id, type, beneficiaire, montant, date, motif]
    );
    return { success: true, id };
  }

  @Put('caisse/mouvements/:id')
  async updateMouvement(@Param('id') id: string, @Body() body: any) {
    const existing = await this.db.get<any>('SELECT * FROM mouvements_caisse WHERE id = ?', [id]);
    const date = body.date !== undefined ? body.date : (existing?.date || new Date().toISOString().split('T')[0]);
    const type = body.type !== undefined ? body.type : (existing?.type || 'recharge');
    const beneficiaire = body.beneficiaire !== undefined ? body.beneficiaire : (existing?.beneficiaire || 'Horizon');
    const montant = body.montant !== undefined ? Number(body.montant) : (existing?.montant || 0);
    const motif = body.motif !== undefined ? body.motif : (existing?.motif || '');

    if (type === 'depense_justifiee' && !String(motif || '').trim()) {
      throw new BadRequestException('Le motif est obligatoire pour une dépense justifiée.');
    }

    await this.db.run(
      `UPDATE mouvements_caisse SET type = ?, beneficiaire = ?, montant = ?, date = ?, motif = ?
       WHERE id = ?`,
      [type, beneficiaire, montant, date, motif, id]
    );
    return { success: true };
  }

  @Delete('caisse/mouvements/:id')
  async deleteMouvement(@Param('id') id: string) {
    await this.db.run('DELETE FROM mouvements_caisse WHERE id = ?', [id]);
    return { success: true };
  }

  @Post('caisse/pointage')
  async updatePointage(@Body() body: any) {
    const dernierPointageReel = body.dernierPointageReel !== undefined ? Number(body.dernierPointageReel) : 0;
    const dateDernierPointage = body.dateDernierPointage || new Date().toISOString().split('T')[0];
    const notes = body.notes || '';

    await this.db.run(
      `INSERT INTO caisse_pointage (id, dernier_pointage_reel, date_dernier_pointage, notes)
       VALUES ('caisse-singleton', ?, ?, ?)
       ON CONFLICT (id) DO UPDATE SET
         dernier_pointage_reel = EXCLUDED.dernier_pointage_reel,
         date_dernier_pointage = EXCLUDED.date_dernier_pointage,
         notes = EXCLUDED.notes`,
      [dernierPointageReel, dateDernierPointage, notes]
    );
    return { success: true };
  }

  // -------------------------------------------------------------
  // AUDIT LOGS
  // -------------------------------------------------------------
  @Post('audit')
  async logAction(@Body() body: any) {
    const id = 'log-' + crypto.randomUUID().slice(0, 8);
    await this.db.run(
      `INSERT INTO audit_logs (id, timestamp, user_name, action, detail)
       VALUES (?, CURRENT_TIMESTAMP, ?, ?, ?)`,
      [id, body.userName || 'Système', body.action || 'ACTION', body.detail || '']
    );
    return { success: true, id };
  }

  // -------------------------------------------------------------
  // BACKUP SQL
  // -------------------------------------------------------------
  @Get('backup/sql')
  async getSqlBackup(@Res() res: any) {
    const tables = ['users', 'comptes', 'profils', 'clients', 'abonnements', 'mouvements_caisse', 'caisse_pointage', 'audit_logs', 'settings'];
    let sqlDump = '-- =========================================================\n';
    sqlDump += '-- HORIZON SERVICE - SAUVEGARDE SQL (SUPABASE POSTGRESQL)\n';
    sqlDump += '-- Date: ' + new Date().toISOString() + '\n';
    sqlDump += '-- Utilisateurs enregistrés: Emmanuel (Fondateur) & Malan Abdias (Associé)\n';
    sqlDump += '-- =========================================================\n\n';

    for (const table of tables) {
      const rows = table === 'users'
        ? await this.db.query<any>('SELECT id, email, username, name, role, role_label, password, active, payment_link, created_at FROM users')
        : await this.db.query<any>('SELECT * FROM ' + table);
      if (rows && rows.length > 0) {
        sqlDump += '-- Données: ' + table + ' (' + rows.length + ' lignes)\n';
        for (const row of rows) {
          const cols = Object.keys(row);
          const vals = cols.map(c => {
            const v = row[c];
            if (v === null || v === undefined) return 'NULL';
            if (typeof v === 'number' || typeof v === 'boolean') return v;
            return "'" + String(v).replace(/'/g, "''") + "'";
          });
          sqlDump += 'INSERT INTO ' + table + ' (' + cols.join(', ') + ') VALUES (' + vals.join(', ') + ');\n';
        }
        sqlDump += '\n';
      }
    }
    sqlDump += '-- Fin de la sauvegarde\n';

    const dateStr = new Date().toISOString().split('T')[0];
    res.setHeader('Content-Type', 'application/sql');
    res.setHeader('Content-Disposition', `attachment; filename="horizon_service_backup_${dateStr}.sql"`);
    return res.send(sqlDump);
  }
}
