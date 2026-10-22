# =============================================================
# HORIZON SERVICE API — DOCKERFILE MULTI-STAGE
# Node.js 22 LTS / NestJS 11 / Better-SQLite3 / Prisma
# =============================================================

# --- ÉTAPE 1 : Dépendances & Compilation (Builder) ---
FROM node:22-alpine AS builder

WORKDIR /app

# Outils requis pour la compilation C++ native de better-sqlite3 sur Alpine
RUN apk add --no-cache python3 make g++ sqlite

COPY package*.json ./
COPY prisma ./prisma/

RUN npm ci

COPY . .

# Génération des clients et compilation NestJS
RUN npx prisma generate
RUN npm run build

# --- ÉTAPE 2 : Dépendances de Production uniquement ---
FROM node:22-alpine AS prod-deps

WORKDIR /app

RUN apk add --no-cache python3 make g++ sqlite

COPY package*.json ./
COPY prisma ./prisma/

RUN npm ci --omit=dev
RUN npx prisma generate

# --- ÉTAPE 3 : Image Finale de Production (Légère & Sécurisée) ---
FROM node:22-alpine AS runner

WORKDIR /app

# Librairie SQLite d'exécution
RUN apk add --no-cache sqlite-libs

ENV NODE_ENV=production
ENV PORT=3001

# Copie des modules de production et du build
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/package*.json ./

# Copie de la base SQLite initiale (avec utilisateurs configurés)
COPY dev.db ./dev.db

# Définition des permissions pour l'utilisateur non-root
RUN chown -R node:node /app

USER node

EXPOSE 3001

# Lancement de l'API NestJS
CMD ["node", "dist/main.js"]
