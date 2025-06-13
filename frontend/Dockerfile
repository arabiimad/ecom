# Étape 1 : Utilisation de l'image node pour builder l'application
FROM node:18-alpine AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le contenu du projet dans l'image
COPY . .

# Builder l'application
RUN npm run build

# Étape 2 : Utilisation d'une image nginx pour servir l'application
FROM nginx:alpine

# Copier les fichiers générés dans le dossier /usr/share/nginx/html
COPY --from=builder /app/dist /usr/share/nginx/html

# Copier le fichier de configuration NGINX personnalisé (facultatif)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80
EXPOSE 80

# Commande pour démarrer NGINX
CMD ["nginx", "-g", "daemon off;"]
