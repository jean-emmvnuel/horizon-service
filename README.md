# 🐳 NestJS Docker Learning Project

Ce projet est une application **NestJS** conçue dans le but de m'initier à **Docker** et aux concepts de conteneurisation moderne. L'objectif était de mettre en place un environnement de développement robuste et une configuration de production optimisée.

## 🚀 Objectifs d'apprentissage
- Mise au point d'un environnement de développement avec Docker.
- Gestion du **Hot Reload** (Rafraîchissement automatique) entre Windows et le conteneur Linux.
- Optimisation des images de production via le **Multi-stage Build**.
- Gestion des variables d'environnement et des secrets.
- Intégration de **Prisma ORM** dans un écosystème Docker.

## 🛠️ Installation & Développement

### Prérequis
- Docker Desktop installé.
- Un fichier `.env` à la racine (voir `.env.example`).

### Lancer l'environnement de développement
Pour coder avec le rafraîchissement automatique (Hot-reload) :
```bash
docker compose up --build
```
L'API sera accessible sur `http://localhost:3001`.

## 📦 Production

Le projet utilise un **Dockerfile multi-étape** pour garantir une image finale ultra-légère (environ 80% plus petite que l'image de dev).

### Build de l'image de production
```bash
docker build -t nest-docker-prod .
```

### Lancer l'image de production localement
```bash
docker run -p 3001:3001 --env-file .env nest-docker-prod
```

## 🌐 Déploiement (Render)
Ce projet est prêt à être déployé sur **Render** ou tout autre fournisseur Cloud supportant Docker.
- **Runtime** : Docker
- **Build Command** : Automatique via Dockerfile
- **Start Command** : `npx prisma migrate deploy && node dist/main.js`

---
*Projet réalisé pour apprendre à dompter la baleine !* 🐳
