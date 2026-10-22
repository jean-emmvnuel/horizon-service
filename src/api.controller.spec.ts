import { Test, TestingModule } from '@nestjs/testing';
import { ApiController } from './api.controller';
import { DatabaseService } from './database.service';

describe('ApiController (Endpoints Unit Tests)', () => {
  let controller: ApiController;
  let mockDb: any;

  beforeEach(async () => {
    mockDb = {
      query: jest.fn().mockReturnValue([]),
      get: jest.fn().mockReturnValue(null),
      run: jest.fn().mockReturnValue({ changes: 1 }),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiController],
      providers: [
        {
          provide: DatabaseService,
          useValue: mockDb,
        },
      ],
    }).compile();

    controller = module.get<ApiController>(ApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('GET /api/data', () => {
    it('should return initial payload containing users, comptes, profils, clients, abonnements, etc.', () => {
      mockDb.query.mockReturnValueOnce([{ id: 'u-1', email: 'emmanuelahossi667@gmail.com' }]);
      mockDb.query.mockReturnValueOnce([{ id: 'cpt-1', libelle: 'Compte 1' }]);
      mockDb.query.mockReturnValueOnce([]);
      mockDb.query.mockReturnValueOnce([]);
      mockDb.query.mockReturnValueOnce([]);
      mockDb.query.mockReturnValueOnce([]);
      mockDb.get.mockReturnValueOnce({ dernierPointageReel: 5000 });
      mockDb.query.mockReturnValueOnce([]);
      mockDb.get.mockReturnValueOnce({ value: JSON.stringify({ test: true }) });

      const res = controller.getAllData();
      expect(res).toBeDefined();
      expect(res.users).toBeDefined();
      expect(res.comptes).toBeDefined();
      expect(res.caisse).toBeDefined();
      expect(mockDb.query).toHaveBeenCalled();
    });
  });

  describe('COMPTES Endpoints (/api/comptes)', () => {
    it('POST /api/comptes: should successfully create a compte even without dateOuverture', () => {
      const payload = {
        libelle: 'Compte Test',
        email: 'test@netflix.com',
        motDePasse: 'secret123',
        dateReabonnement: '2026-11-27',
        coutRechargeMensuel: 7000,
        capacitePlaces: 15,
        maxProfils: 5,
      };
      const res = controller.createCompte(payload);
      expect(res.success).toBe(true);
      expect(res.id).toMatch(/^cpt-/);
      expect(mockDb.run).toHaveBeenCalled();
      const insertSql = mockDb.run.mock.calls[0][0];
      const insertParams = mockDb.run.mock.calls[0][1];
      expect(insertSql).toContain('INSERT INTO comptes');
      expect(insertParams[4]).toBeDefined(); // dateOuverture has default today
      expect(insertParams[1]).toBe('Compte Test');
    });

    it('PUT /api/comptes/:id: should safely update an existing compte', () => {
      mockDb.get.mockReturnValueOnce({
        id: 'cpt-1',
        libelle: 'Ancien Compte',
        email: 'old@netflix.com',
        mot_de_passe: 'oldpwd',
        date_ouverture: '2026-10-01',
        date_reabonnement: '2026-11-01',
        cout_recharge_mensuel: 6500,
        capacite_places: 15,
        max_profils: 5,
        statut: 'actif',
        notes: '',
      });

      const res = controller.updateCompte('cpt-1', { libelle: 'Nouveau Libellé' });
      expect(res.success).toBe(true);
      expect(mockDb.run).toHaveBeenCalled();
      const updateParams = mockDb.run.mock.calls[0][1];
      expect(updateParams[0]).toBe('Nouveau Libellé');
      expect(updateParams[ updateParams.length - 1 ]).toBe('cpt-1');
    });

    it('DELETE /api/comptes/:id: should delete a compte', () => {
      const res = controller.deleteCompte('cpt-1');
      expect(res.success).toBe(true);
      expect(mockDb.run).toHaveBeenCalledWith('DELETE FROM comptes WHERE id = ?', ['cpt-1']);
    });
  });

  describe('PROFILS Endpoints (/api/profils)', () => {
    it('POST /api/profils: should create a profile', () => {
      const res = controller.createProfil({ nom: 'Profil 1', compteId: 'cpt-1', codePin: '9999' });
      expect(res.success).toBe(true);
      expect(res.id).toMatch(/^prof-/);
      expect(mockDb.run).toHaveBeenCalled();
    });

    it('PUT /api/profils/:id: should update a profile', () => {
      mockDb.get.mockReturnValueOnce({ nom: 'Old Profil', code_pin: '1234', statut: 'ok' });
      const res = controller.updateProfil('prof-1', { nom: 'Renommé' });
      expect(res.success).toBe(true);
      expect(mockDb.run).toHaveBeenCalled();
    });

    it('DELETE /api/profils/:id: should delete a profile', () => {
      const res = controller.deleteProfil('prof-1');
      expect(res.success).toBe(true);
      expect(mockDb.run).toHaveBeenCalledWith('DELETE FROM profils WHERE id = ?', ['prof-1']);
    });
  });

  describe('CLIENTS Endpoints (/api/clients)', () => {
    it('POST /api/clients: should create a client', () => {
      const res = controller.createClient({ nom: 'John Doe', telephone: '+22507000000' });
      expect(res.success).toBe(true);
      expect(res.id).toMatch(/^cli-/);
      expect(mockDb.run).toHaveBeenCalled();
    });

    it('PUT /api/clients/:id: should update a client', () => {
      mockDb.get.mockReturnValueOnce({ nom: 'John', telephone: '+22507000000', notes: '' });
      const res = controller.updateClient('cli-1', { nom: 'John Updated' });
      expect(res.success).toBe(true);
      expect(mockDb.run).toHaveBeenCalled();
    });

    it('DELETE /api/clients/:id: should delete a client', () => {
      const res = controller.deleteClient('cli-1');
      expect(res.success).toBe(true);
      expect(mockDb.run).toHaveBeenCalledWith('DELETE FROM clients WHERE id = ?', ['cli-1']);
    });
  });

  describe('ABONNEMENTS Endpoints (/api/abonnements)', () => {
    it('POST /api/abonnements: should create an abonnement', () => {
      const res = controller.createAbonnement({ clientId: 'cli-1', profilId: 'prof-1', tarif: 1500 });
      expect(res.success).toBe(true);
      expect(res.id).toMatch(/^ab-/);
      expect(mockDb.run).toHaveBeenCalled();
    });

    it('PUT /api/abonnements/:id: should update an abonnement', () => {
      mockDb.get.mockReturnValueOnce({ client_id: 'cli-1', profil_id: 'prof-1', date_debut: '2026-10-01', date_fin: '2026-11-01', tarif: 1500, statut: 'actif' });
      const res = controller.updateAbonnement('ab-1', { tarif: 2000 });
      expect(res.success).toBe(true);
      expect(mockDb.run).toHaveBeenCalled();
    });

    it('POST /api/abonnements/:id/renew: should renew an existing abonnement for 1 month', () => {
      mockDb.get.mockReturnValueOnce({ id: 'ab-1', date_fin: '2026-10-22', statut: 'actif' });
      const res = controller.renewAbonnement('ab-1');
      expect(res.success).toBe(true);
      expect(res.dateFin).toBeDefined();
      expect(mockDb.run).toHaveBeenCalled();
    });

    it('DELETE /api/abonnements/:id: should delete an abonnement', () => {
      const res = controller.deleteAbonnement('ab-1');
      expect(res.success).toBe(true);
      expect(mockDb.run).toHaveBeenCalledWith('DELETE FROM abonnements WHERE id = ?', ['ab-1']);
    });
  });

  describe('CAISSE Endpoints (/api/caisse)', () => {
    it('POST /api/caisse/mouvements: should record a cash movement', () => {
      const res = controller.createMouvement({ type: 'recharge', beneficiaire: 'Compte 1', montant: 7000 });
      expect(res.success).toBe(true);
      expect(res.id).toMatch(/^mvt-/);
      expect(mockDb.run).toHaveBeenCalled();
    });

    it('PUT /api/caisse/mouvements/:id: should update a cash movement', () => {
      mockDb.get.mockReturnValueOnce({ type: 'recharge', beneficiaire: 'Compte 1', montant: 7000, date: '2026-10-22' });
      const res = controller.updateMouvement('mvt-1', { montant: 7500 });
      expect(res.success).toBe(true);
      expect(mockDb.run).toHaveBeenCalled();
    });

    it('DELETE /api/caisse/mouvements/:id: should delete a cash movement', () => {
      const res = controller.deleteMouvement('mvt-1');
      expect(res.success).toBe(true);
      expect(mockDb.run).toHaveBeenCalledWith('DELETE FROM mouvements_caisse WHERE id = ?', ['mvt-1']);
    });

    it('POST /api/caisse/pointage: should update pointage caisse', () => {
      const res = controller.updatePointage({ dernierPointageReel: 15000, notes: 'Pointage régulier' });
      expect(res.success).toBe(true);
      expect(mockDb.run).toHaveBeenCalled();
    });
  });

  describe('SETTINGS & AUDIT & USERS Endpoints', () => {
    it('POST /api/settings/relance: should update WhatsApp relance config', () => {
      const res = controller.updateRelanceConfig({ messageTemplate: 'Nouveau message' });
      expect(res.success).toBe(true);
      expect(mockDb.run).toHaveBeenCalled();
    });

    it('POST /api/audit: should record an audit log', () => {
      const res = controller.logAction({ userName: 'emmanuel', action: 'CREATION_COMPTE', detail: 'Compte 1 créé' });
      expect(res.success).toBe(true);
      expect(res.id).toMatch(/^log-/);
      expect(mockDb.run).toHaveBeenCalled();
    });

    it('PUT /api/users/:id/payment-link: should update payment link', () => {
      const res = controller.updateUserPaymentLink('u-1', { paymentLink: 'https://pay.wave.com/m/custom' });
      expect(res.success).toBe(true);
      expect(res.paymentLink).toBe('https://pay.wave.com/m/custom');
      expect(mockDb.run).toHaveBeenCalled();
    });

    it('GET /api/backup/sql: should export SQL backup stream', () => {
      const resMock = {
        setHeader: jest.fn(),
        send: jest.fn().mockImplementation((val) => val),
      };
      mockDb.get.mockReturnValue({ sql: 'CREATE TABLE dummy (id TEXT);' });
      mockDb.query.mockReturnValue([]);

      controller.getSqlBackup(resMock);
      expect(resMock.setHeader).toHaveBeenCalledWith('Content-Type', 'application/sql');
      expect(resMock.send).toHaveBeenCalled();
    });
  });
});
