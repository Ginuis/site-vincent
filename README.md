# Site vitrine – Vincent Dupil Baclet / Portfolio Website

Ce site est un projet professionnel conçu pour l’artiste visuel Vincent Dupil Baclet.  
Il repose sur **Next.js**, **Tailwind CSS**, et **TypeScript**, avec génération dynamique d’images, design responsive, et une navigation fluide.

This website is a professional portfolio built for visual artist Vincent Dupil Baclet.  
It uses **Next.js**, **Tailwind CSS**, and **TypeScript**, with dynamic image loading, responsive design, and smooth navigation.

---

## 🚀 Installation & Démarrage / Setup & Run

### 💾 Installation des dépendances / Install dependencies

```bash
npm install
```

### 🧪 Lancer en mode développement / Start development server

```bash
npm run dev
```

Cela va :
- Générer automatiquement les fichiers `images.json` et `gallery.json`
- Démarrer le site sur : [http://localhost:3000](http://localhost:3000)

This will:
- Auto-generate `images.json` and `gallery.json`
- Start the dev server at [http://localhost:3000](http://localhost:3000)

---

## 🔁 Génération automatique d’images / Automatic Image Parsing

Chaque dossier d’images est analysé automatiquement pour générer les données JSON nécessaires :

- `/public/images/pg/` → images d’arrière-plan (page de garde)
- `/public/images/galerie/nature/` → galerie *Nature*
- `/public/images/galerie/monochrome/` et `/monosaïque/` → galerie *Persona*

Each folder is scanned to generate dynamic content:

- `/public/images/pg/` → landing page backgrounds
- `/public/images/galerie/nature/` → Nature gallery
- `/public/images/galerie/monochrome/` and `/monosaïque/` → Persona gallery

Le résultat est écrit dans `/data/gallery.json` et `/data/images.json`.

---

## 📜 Scripts disponibles / Available Scripts

```bash
npm run dev               # Dev + auto-génération d'images
npm run build             # Build + auto-génération
npm run generate-all      # Génère uniquement les fichiers JSON
```

---

## 🎨 Identité visuelle / Visual Identity

- **Nature** : tons verts, ambiance forêt
- **Persona** :
  - Monochrome → ambiance sobre
  - Couleurs → ambiance plus mosaïque, douce
- **Typographie** : Geist (via @font-face)
- **Responsive design** : mobile & desktop

---

## 🧭 Navigation & Footer

### Barre de navigation / Navigation bar
- Nom "Vincent Dupil Baclet" cliquable (redirige vers `/accueil`)
- Liens : Concept Art, Projets (avec sous-menu), Contact
- Sous-menu animé : *Projets → Persona*, *Nature*
- Icônes réseaux sociaux (Instagram, Facebook, X)
- Surbrillance lien actif + effet néon holographique au hover

### Footer
- Petit footer centré, texte : `© Vincent Dupil Baclet`
- Style translucide et discret

---

## 🚀 Déploiement sur Vercel / Deployment on Vercel

Le site est prévu pour un déploiement statique via [Vercel](https://vercel.com).

> Pour tester en ligne, chaque push vers `main` déploie automatiquement sur Vercel (préconfiguré).

**Configuration spéciale :**
- Image statique dans `/public/`
- Aucune API externe requise
- Aucune base de données

---

**Nom de domaine personnalisé :** possible (prévoir coût 70–90 € / an)

---

## 🧱 Stack & Structure du projet / Stack & Project Structure

- **Next.js** 13 (Pages Router)
- **TypeScript** pour typage strict
- **Tailwind CSS** pour les styles
- **React Icons** pour les icônes
- **Scripts TS personnalisés** pour auto-génération JSON

Structure :

```
.
├── components/        # Navbar, Footer
├── pages/             # garde, accueil, projets/...
├── public/images/     # images galerie
├── data/              # images.json, gallery.json
├── scripts/           # scripts de génération
└── styles/            # globals.css
```

---

## 📝 Journal de modifications / Changelog

### ✅ Version actuelle : `v0.2.0 – Phase test client` (03/07/2025)

- Création de la page de garde dynamique (image de fond toutes les 15 min)
- Mise en place d’un système automatique de génération des galeries
- Navigation fluide avec sous-menu animé
- Responsive design terminé (Navbar & pages)
- Préparation à l'intégration du contenu final pour /projets/persona et /nature
- Première version du `README.md` bilingue

### 🔜 À venir

- Mise en page complète des pages galerie
- Intégration du contenu réel pour "Persona" & "Nature"
- Mode galerie fullscreen avec lightbox (option premium ?)
- Animation entrée de page

---

## © Crédits & Licence

Développé par [Splendeurs](https://splendeurs.dev) pour l’artiste Vincent Dupil Baclet.  
Projet réalisé avec soin dans un cadre semi-professionnel.

Aucun usage commercial ou distribution sans autorisation.  
Le code peut être adapté dans un cadre pédagogique ou personnel.

---

Made with ❤️ in France.
