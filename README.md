# 🚀 Horizon Service — Backend API (NestJS)

API REST centralisée et sécurisée pour la gestion de la plateforme **Horizon Service** (Gestion des abonnements Netflix partagés, fichier clients CRM, équilibrage des profils, caisse et suivi financier, relances WhatsApp et traçabilité d'audit).

---

## 🛠️ Stack Technique

- **Framework** : [NestJS 11](https://nestjs.com/) (Node.js 22 LTS / TypeScript)
- **Base de données** : SQLite 3 haute performance via [`better-sqlite3`](https://github.com/WiseLibs/better-sqlite3) (Mode WAL actif) & [Prisma ORM](https://www.prisma.io/)
- **Authentification** : JWT (JSON Web Tokens) nominatif avec chiffrement des mots de passe en **bcrypt**
- **Documentation API** : OpenAPI 3.0 / [Swagger UI](http://localhost:3001/api/docs)
- **Sécurité** : Helmet (en-têtes HTTP sécurisés), CORS configuré, validation stricte des DTOs (`class-validator`, `class-transformer`)
- **Conteneurisation** : Docker Multi-stage build & Docker Compose

---

## 👥 Utilisateurs & Rôles

Le système fonctionne en mode multi-administrateurs avec traçabilité complète des actions :

| Nom | Email | Rôle | Privilèges |
| :--- | :--- | :--- | :--- |
| **Emmanuel** | `emmanuelahossi667@gmail.com` | **Fondateur** (`owner`) | Accès complet, pointage de caisse, audits, export SQL |
| **Malan Abdias** | `malanabdias@gmail.com` | **Associé** (`partner`) | Gestion des abonnements, relances, prélèvements |

---

## ⚙️ Configuration & Variables d'environnement

Créez un fichier `.env` à la racine (ou copiez `.env.example`) :

```bash
cp .env.example .env
```

Contenu de `.env` :
```env
PORT=3001
DATABASE_URL="file:./horizon.db"
JWT_SECRET="horizon_service_secret_key_2026_jwt_token_super_secure_abidjan"
FRONTEND_URL="http://localhost:8080"
```

---

## 💻 Démarrage Local (Sans Docker)

### 1. Installation des dépendances
```bash
npm install
```

### 2. Génération du client Prisma
```bash
npx prisma generate
```

### 3. Lancement en mode développement (Hot-Reload)
```bash
npm run start:dev
```
- **Serveur API** : `http://localhost:3001`
- **Swagger Docs** : `http://localhost:3001/api/docs`

### 4. Build de production local
```bash
npm run build
npm run start:prod
```

---

## 🐳 Déploiement avec Docker

Le projet intègre un **Dockerfile multi-stage** optimisé sur `node:22-alpine` :
- Compilation des dépendances natives C++ de SQLite.
- Suppression des dépendances de dev pour une image finale minimale (~180 Mo).
- Exécution sous utilisateur non-root `node` pour une sécurité renforcée.

### 1. Lancer avec Docker Compose (Recommandé)
```bash
docker compose up -d --build
```
> **Persistance** : Le volume `./horizon.db:/app/horizon.db` garantit la conservation des données et des utilisateurs même lors des redémarrages ou mises à jour du conteneur.

Pour voir les logs :
```bash
docker compose logs -f horizon-api
```

Pour arrêter le conteneur :
```bash
docker compose down
```

### 2. Build et Run manuel avec Docker CLI

**Construire l'image :**
```bash
docker build -t horizon-service-api .
```

**Lancer le conteneur :**
```bash
docker run -d \
  --name horizon-service-api \
  -p 3001:3001 \
  -v $(pwd)/horizon.db:/app/horizon.db \
  --env-file .env \
  --restart unless-stopped \
  horizon-service-api
```

---

## 📡 Documentation des Endpoints API

La documentation Swagger interactive complète est accessible en direct sur :  
👉 **`http://localhost:3001/api/docs`**

### Authentification (`/auth`)
- `POST /auth/login` : Connexion nominative (retourne le token JWT, profil et lien de paiement Wave)
- `POST /auth/register` : Création de compte administrateur
- `GET /auth/me` : Profil de l'utilisateur connecté (nécessite Bearer Token)

### Données Globales (`/api`)
- `GET /api/data` : Récupération consolidée en temps réel (utilisateurs, abonnements, comptes, profils, clients, caisse, mouvements, configuration de relance)

### Abonnements (`/api/abonnements`)
- `POST /api/abonnements` : Création d'un abonnement
- `PUT /api/abonnements/:id` : Modification d'un abonnement
- `DELETE /api/abonnements/:id` : Résiliation / Libération de place
- `POST /api/abonnements/:id/renew` : Renouvellement rapide (+1 mois)

### Clients & CRM (`/api/clients`)
- `POST /api/clients` : Création fiche client (nom, WhatsApp, notes)
- `PUT /api/clients/:id` : Modification fiche client
- `DELETE /api/clients/:id` : Suppression client

### Comptes Netflix & Profils (`/api/comptes` & `/api/profils`)
- `POST /api/comptes` : Création compte Netflix (gestion des places max)
- `PUT /api/comptes/:id` : Modification identifiants / dates de recharge
- `DELETE /api/comptes/:id` : Suppression compte
- `POST /api/profils` : Ajout de profil avec code PIN sécurisé
- `PUT /api/profils/:id` : Modification statut / code PIN
- `DELETE /api/profils/:id` : Suppression profil

### Caisse & Finances (`/api/caisse`)
- `POST /api/caisse/mouvements` : Enregistrement d'un prélèvement ou d'une dépense de recharge
- `PUT /api/caisse/mouvements/:id` : Édition d'un mouvement de caisse
- `DELETE /api/caisse/mouvements/:id` : Annulation d'un mouvement
- `POST /api/caisse/pointage` : Pointage physique de la caisse réelle et calcul d'écart

### Paramètres & Relances (`/api/settings`)
- `POST /api/settings/relance` : Enregistrement du modèle de message WhatsApp
- `PUT /api/users/:id/payment-link` : Mise à jour du lien de paiement Wave individuel

### Sauvegarde & Audit
- `GET /api/backup/sql` : Téléchargement instantané d'un dump SQL complet (.sql)
- `POST /api/audit` : Enregistrement d'une action dans le journal d'audit

---

## 🔒 Sécurité & Bonnes Pratiques
- **Secrets** : Aucun secret, mot de passe ou fichier `.env` n'est versionné sur Git.
- **Mots de passe** : Chiffrés avec un salage bcrypt (10 rounds).
- **SQLite WAL** : Mode Write-Ahead Logging actif pour des lectures et écritures concurrentes sans blocage.
