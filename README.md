# Site vitrine – Vincent Dupil Baclet / Portfolio Website

Ce site est un portfolio artistique professionnel conçu pour Vincent Dupil Baclet.  
Il utilise **Next.js**, **Tailwind CSS** et **TypeScript**, avec un design immersif et des galeries dynamiques.

This website is a professional portfolio built for Vincent Dupil Baclet.  
It uses **Next.js**, **Tailwind CSS**, and **TypeScript**, with immersive design and dynamic galleries.

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
- Générer automatiquement les fichiers JSON pour les galeries (`images.json`, `personaImages.json`, `natureImages.json`)
- Démarrer le site sur : [http://localhost:3000](http://localhost:3000)

This will:
- Auto-generate gallery JSON files (`images.json`, `personaImages.json`, `natureImages.json`)
- Start the dev server at [http://localhost:3000](http://localhost:3000)

---

## 🔁 Génération automatique des galeries / Automatic Gallery Generation

Chaque dossier d’images est analysé automatiquement :

- `/public/images/pg/` → images d’arrière-plan (page de garde)
- `/public/images/galerie/nature/` → galerie *Nature*
- `/public/images/galerie/monochrome/` + `/galerie/couleur/` → galerie *Persona*

Résultat enregistré dans `/data/`.

---

## 📜 Scripts disponibles / Available Scripts

```bash
npm run dev                  # Dev + génération automatique des galeries
npm run build                # Build + génération automatique
npm run generate-galleries   # Génère uniquement tous les fichiers JSON
```

---

## 🎨 Identité visuelle & Pages / Visual Identity & Pages

- **Page de garde** : image plein écran, texte unique **“VINCENT DUPIL BACLET”** en fondu + redirection auto vers l’accueil.  
- **Accueil** :
  - Carrousel vertical immersif en défilement continu ultra lent (60s).
  - Navbar & Footer transparents pour une immersion totale.
- **Persona** :
  - Mélange aléatoire des images (monochrome + couleur).
  - Ambiance dynamique : sombre pour monochrome, claire pour couleur.
- **Nature** :
  - Ambiance verdoyante, style épuré et naturel.

**Typographie** : Fira Sans (équivalent Google Fonts de DIN Alternate).  
**Responsive design** : compatible mobile & desktop.

---

## 🧭 Navigation & Footer

### Barre de navigation / Navigation bar
- **Nom** : `VINCENT DUPIL BACLET` (MAJUSCULES, cliquable → `/accueil`)
- **Liens** : Concept Art, Projets (sous-menu Persona & Nature), Contact
- **Icônes** :
  - Instagram : [vincentdupilbaclet](https://www.instagram.com/vincentdupilbaclet?igsh=Zmo4Z21yNmt2aWJ3&utm_source=qr)
  - Facebook & X (liens placeholder)
- **Effets** : lien actif surbrillant, hover néon/holographique.

### Footer
- Petit footer translucide, centré : `© Vincent Dupil Baclet`

---

## 🚀 Déploiement / Deployment

Le site est déployé automatiquement via [Vercel](https://vercel.com).

- **Chaque push sur `main` → déploiement automatique.**  
- **Nom de domaine personnalisé possible** (70–90 €/an).

---

## 🧱 Stack & Structure du projet / Stack & Project Structure

- **Next.js** 13 (Pages Router)
- **TypeScript** (typage strict)
- **Tailwind CSS** (styles rapides & responsive)
- **React Icons** (icônes)
- **Scripts personnalisés Node.js** (génération automatique JSON)

```
.
├── components/        # Navbar, Footer, Galerie
├── pages/             # garde, accueil, projets/persona, projets/nature...
├── public/images/     # images des galeries
├── data/              # JSON générés (personaImages, natureImages…)
├── scripts/           # scripts de génération automatique
└── styles/            # globals.css, animations
```

---

## 📝 Journal de modifications / Changelog

Voir le fichier [`CHANGELOG.md`](./CHANGELOG.md) pour plus de détails.  
Dernière version : **v1.3.0 – Amélioration de l’accueil & galeries** (24/07/2025).

---

## © Crédits & Licence

Développé par **Splendeurs** pour l’artiste **Vincent Dupil Baclet**.  
Projet réalisé dans un cadre professionnel & artistique.  

Usage commercial ou distribution interdits sans autorisation.  
Utilisation pédagogique ou personnelle autorisée avec crédits.

---

Made with ❤️ in France.
