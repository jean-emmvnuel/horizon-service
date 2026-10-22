import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './app.module';

describe('Endpoints E2E Integration Suite', () => {
  let app: INestApplication;
  let authToken: string;
  let testCompteId: string;
  let testProfilId: string;
  let testClientId: string;
  let testAbonnementId: string;
  let testMvtId: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('1. GET / - racine', async () => {
    const res = await request(app.getHttpServer()).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toContain('Hello');
  });

  it('2. POST /auth/login - authentification valide (Emmanuel)', async () => {
    const res = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'emmanuelahossi667@gmail.com',
        password: 'backendGo@t667',
      });
    expect([200, 201]).toContain(res.status);
    expect(res.body.data?.token).toBeDefined();
    authToken = res.body.data.token;
  });

  it('3. GET /auth/me - route protégée avec token JWT', async () => {
    const res = await request(app.getHttpServer())
      .get('/auth/me')
      .set('Authorization', `Bearer ${authToken}`);
    expect(res.status).toBe(200);
    expect(res.body.email).toBe('emmanuelahossi667@gmail.com');
  });

  it('4. GET /api/data - synchronisation complète des données', async () => {
    const res = await request(app.getHttpServer()).get('/api/data');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.users)).toBe(true);
    expect(Array.isArray(res.body.comptes)).toBe(true);
    expect(Array.isArray(res.body.profils)).toBe(true);
    expect(Array.isArray(res.body.clients)).toBe(true);
    expect(Array.isArray(res.body.abonnements)).toBe(true);
    expect(res.body.caisse).toBeDefined();
  });

  it('5. POST /api/comptes - création d\'un compte Netflix sans dateOuverture (cas du formulaire)', async () => {
    const res = await request(app.getHttpServer())
      .post('/api/comptes')
      .send({
        libelle: 'Compte Netflix Integration Test',
        email: 'test.netflix@horizon.ci',
        motDePasse: 'NetflixP@ss2026',
        dateReabonnement: '2026-11-22',
        coutRechargeMensuel: 7000,
        capacitePlaces: 15,
        maxProfils: 5,
        statut: 'actif',
      });
    expect([200, 201]).toContain(res.status);
    expect(res.body.success).toBe(true);
    expect(res.body.id).toBeDefined();
    testCompteId = res.body.id;
  });

  it('6. PUT /api/comptes/:id - mise à jour du compte Netflix', async () => {
    const res = await request(app.getHttpServer())
      .put(`/api/comptes/${testCompteId}`)
      .send({
        libelle: 'Compte Netflix Renommé',
        coutRechargeMensuel: 6500,
      });
    expect([200, 201]).toContain(res.status);
    expect(res.body.success).toBe(true);
  });

  it('7. POST /api/profils - création d\'un profil associé', async () => {
    const res = await request(app.getHttpServer())
      .post('/api/profils')
      .send({
        nom: 'Profil Test 1',
        compteId: testCompteId,
        codePin: '4321',
        statut: 'ok',
      });
    expect([200, 201]).toContain(res.status);
    expect(res.body.success).toBe(true);
    testProfilId = res.body.id;
  });

  it('8. PUT /api/profils/:id - mise à jour du profil', async () => {
    const res = await request(app.getHttpServer())
      .put(`/api/profils/${testProfilId}`)
      .send({
        nom: 'Profil Test 1 Modifié',
        codePin: '9999',
      });
    expect([200, 201]).toContain(res.status);
    expect(res.body.success).toBe(true);
  });

  it('9. POST /api/clients - création d\'un client', async () => {
    const res = await request(app.getHttpServer())
      .post('/api/clients')
      .send({
        nom: 'Client Test Integration',
        telephone: '+2250701020304',
        notes: 'Client VIP',
      });
    expect([200, 201]).toContain(res.status);
    expect(res.body.success).toBe(true);
    testClientId = res.body.id;
  });

  it('10. PUT /api/clients/:id - mise à jour du client', async () => {
    const res = await request(app.getHttpServer())
      .put(`/api/clients/${testClientId}`)
      .send({
        nom: 'Client Test Renommé',
        telephone: '+2250505050505',
      });
    expect([200, 201]).toContain(res.status);
    expect(res.body.success).toBe(true);
  });

  it('11. POST /api/abonnements - création d\'un abonnement', async () => {
    const res = await request(app.getHttpServer())
      .post('/api/abonnements')
      .send({
        clientId: testClientId,
        profilId: testProfilId,
        tarif: 1500,
        statut: 'actif',
      });
    expect([200, 201]).toContain(res.status);
    expect(res.body.success).toBe(true);
    testAbonnementId = res.body.id;
  });

  it('12. PUT /api/abonnements/:id - mise à jour de l\'abonnement', async () => {
    const res = await request(app.getHttpServer())
      .put(`/api/abonnements/${testAbonnementId}`)
      .send({
        tarif: 2000,
      });
    expect([200, 201]).toContain(res.status);
    expect(res.body.success).toBe(true);
  });

  it('13. POST /api/abonnements/:id/renew - renouvellement pour 1 mois', async () => {
    const res = await request(app.getHttpServer())
      .post(`/api/abonnements/${testAbonnementId}/renew`);
    expect([200, 201]).toContain(res.status);
    expect(res.body.success).toBe(true);
    expect(res.body.dateFin).toBeDefined();
  });

  it('14. POST /api/caisse/mouvements - enregistrement mouvement de caisse', async () => {
    const res = await request(app.getHttpServer())
      .post('/api/caisse/mouvements')
      .send({
        type: 'recharge',
        beneficiaire: 'Compte Netflix Integration Test',
        montant: 7000,
        motif: 'Recharge mensuelle',
      });
    expect([200, 201]).toContain(res.status);
    expect(res.body.success).toBe(true);
    testMvtId = res.body.id;
  });

  it('15. PUT /api/caisse/mouvements/:id - modification mouvement', async () => {
    const res = await request(app.getHttpServer())
      .put(`/api/caisse/mouvements/${testMvtId}`)
      .send({
        montant: 7200,
      });
    expect([200, 201]).toContain(res.status);
    expect(res.body.success).toBe(true);
  });

  it('16. POST /api/caisse/pointage - mise à jour pointage caisse', async () => {
    const res = await request(app.getHttpServer())
      .post('/api/caisse/pointage')
      .send({
        dernierPointageReel: 25000,
        dateDernierPointage: '2026-10-22',
        notes: 'Pointage physique validé',
      });
    expect([200, 201]).toContain(res.status);
    expect(res.body.success).toBe(true);
  });

  it('17. POST /api/settings/relance - configuration relance WhatsApp', async () => {
    const res = await request(app.getHttpServer())
      .post('/api/settings/relance')
      .send({
        messageTemplate: 'Bonjour {nom}, rappel de votre abonnement {tarif} FCFA',
        lienPaiementDefaut: 'https://pay.wave.com/m/horizon-service',
      });
    expect([200, 201]).toContain(res.status);
    expect(res.body.success).toBe(true);
  });

  it('18. POST /api/audit - journalisation action', async () => {
    const res = await request(app.getHttpServer())
      .post('/api/audit')
      .send({
        userName: 'Emmanuel',
        action: 'TEST_INTEGRATION',
        detail: 'Exécution du test unitaire automatique',
      });
    expect([200, 201]).toContain(res.status);
    expect(res.body.success).toBe(true);
  });

  it('19. PUT /api/users/:id/payment-link - mise à jour lien paiement utilisateur', async () => {
    const res = await request(app.getHttpServer())
      .put('/api/users/u-1/payment-link')
      .send({
        paymentLink: 'https://pay.wave.com/m/horizon-service-emmanuel',
      });
    expect([200, 201]).toContain(res.status);
    expect(res.body.success).toBe(true);
  });

  it('20. GET /api/backup/sql - téléchargement sauvegarde SQL', async () => {
    const res = await request(app.getHttpServer()).get('/api/backup/sql');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toContain('sql');
    expect(res.text).toContain('HORIZON SERVICE');
  });

  it('21. Nettoyage des données de test (DELETE en cascade)', async () => {
    const resSub = await request(app.getHttpServer()).delete(`/api/abonnements/${testAbonnementId}`);
    expect(resSub.status).toBe(200);

    const resPrf = await request(app.getHttpServer()).delete(`/api/profils/${testProfilId}`);
    expect(resPrf.status).toBe(200);

    const resCli = await request(app.getHttpServer()).delete(`/api/clients/${testClientId}`);
    expect(resCli.status).toBe(200);

    const resCpt = await request(app.getHttpServer()).delete(`/api/comptes/${testCompteId}`);
    expect(resCpt.status).toBe(200);

    const resMvt = await request(app.getHttpServer()).delete(`/api/caisse/mouvements/${testMvtId}`);
    expect(resMvt.status).toBe(200);
  });
});
