# DentaShop

This repository contains a React/TypeScript front‑end and several Spring Boot micro‑services configured via Docker Compose. It has been adapted as an e‑commerce platform for dental equipment and related consumables.

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
