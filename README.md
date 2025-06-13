# DentaShop

DentaShop est une plateforme e‑commerce dédiée aux fournitures dentaires. Le projet regroupe une interface React/TypeScript et plusieurs micro‑services Spring Boot (produits, commandes, utilisateurs…) orchestrés via Docker Compose.

L'application propose une boutique en ligne avec gestion du panier, des commandes et un espace utilisateur. Une page "À propos" présente la société tandis qu'une page de contact permet d'envoyer des messages au support.

### Fonctionnalités principales

- Catalogue d'instruments, consommables et équipements dentaires
- Système d'authentification avec espace personnel
- Suivi des commandes et paiement simulé
- API REST modulaires pour les produits, utilisateurs et paiements

## Quick start

1. Install Docker and Node.js.
2. Launch all back‑end services:
   ```bash
   docker-compose up
   ```
3. In another terminal, start the front‑end:
   ```bash
   npm --prefix frontend install
   npm --prefix frontend run dev
   ```

The front‑end is served at `http://localhost:5173` by default and provides a small showcase page with a link to the boutique.
