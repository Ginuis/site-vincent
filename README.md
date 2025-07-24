# 📸 Site Vincent Dupil Baclet

---

## 🇫🇷 Présentation

Site officiel de **Vincent Dupil Baclet**, mettant en avant ses travaux artistiques (photographie, projets personnels, concept art).  
Le site est développé avec **Next.js 15**, **React 18**, **Tailwind CSS** et intègre un système dynamique de galeries.

### 🔥 Fonctionnalités principales
- **Page d'accueil** :
  - Carrousel vertical automatique avec défilement doux continu.
  - Navbar et Footer transparents synchronisés avec l'ambiance générale.
  
- **Page de garde** :
  - Texte "VINCENT DUPIL BACLET" avec effet fondu redirigeant automatiquement vers l’accueil.

- **Galeries dynamiques** :
  - **Persona** : mélange aléatoire d’images monochromes et couleur, ambiance dynamique (fond sombre ou clair).
  - **Nature** : ambiance naturelle et immersive.
  - Génération automatique des images via un script unique (`genGalleries.js`).

- **Responsive Design** : Compatible PC, tablette, smartphone.
- **Déploiement** : Intégré avec Vercel.

---

### 📂 Structure du projet

site-vincent/
├── components/          
├── pages/               
│   ├── garde.tsx
│   ├── accueil.tsx
│   ├── projets/
│   │   ├── persona.tsx
│   │   └── nature.tsx
├── public/images/       
│   ├── pg/              
│   ├── galerie/
│       ├── monochrome/  
│       ├── couleur/     
│       └── nature/      
├── data/
│   └── galleries.json   
├── scripts/
│   └── genGalleries.js  
├── next.config.mjs      
└── tailwind.config.js   

---

### ⚙️ Installation et utilisation

1. **Cloner le dépôt**
```bash
git clone https://github.com/<votre-utilisateur>/site-vincent.git
cd site-vincent
```
2. **Installer les dépendances**
```bash
npm install
```
3. **Générer les galeries**
```bash
npm run generate-galleries
```
4. **Lancer le serveur de développement**
```bash
npm run dev
```
Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

5. **Build pour la production**
```bash
npm run build
npm start
```

---

### 🛠️ Scripts disponibles

| Commande                 | Description |
|---------------------------|-------------|
| `npm run dev`            | Lancement du serveur local (avec génération des galeries). |
| `npm run build`          | Build optimisé pour la production. |
| `npm run generate-galleries` | Génère automatiquement le fichier `data/galleries.json`. |

---

### 🚀 Déploiement

- Le site est déployé automatiquement sur **Vercel** à chaque commit `main`.
- URL de production : **[à renseigner après déploiement]**

---

### 📌 Prochaines étapes

- Ajout d’un **CMS headless** pour la gestion dynamique des médias.
- Outil d’administration sécurisé pour gérer les galeries.
- Optimisation SEO et accessibilité.

---

## 🇬🇧 Presentation

Official website of **Vincent Dupil Baclet**, showcasing artistic works (photography, personal projects, concept art).  
Developed with **Next.js 15**, **React 18**, and **Tailwind CSS**, featuring dynamic galleries.

### 🔥 Key Features
- **Home Page:**
  - Automatic vertical carousel with smooth continuous scrolling.
  - Transparent Navbar and Footer synchronized with the global ambiance.

- **Landing Page:**
  - "VINCENT DUPIL BACLET" text with a fade-in effect redirecting to the home page.

- **Dynamic Galleries:**
  - **Persona**: random mix of monochrome and color images, dynamic ambiance (dark/light).
  - **Nature**: immersive natural ambiance.
  - Automatic generation of galleries with `genGalleries.js`.

- **Responsive Design**: Fully optimized for PC, tablet, and mobile.
- **Deployment**: Integrated with Vercel.

---

### 📂 Project Structure

site-vincent/
├── components/          
├── pages/               
│   ├── garde.tsx
│   ├── accueil.tsx
│   ├── projets/
│   │   ├── persona.tsx
│   │   └── nature.tsx
├── public/images/       
│   ├── pg/              
│   ├── galerie/
│       ├── monochrome/  
│       ├── couleur/     
│       └── nature/      
├── data/
│   └── galleries.json   
├── scripts/
│   └── genGalleries.js  
├── next.config.mjs      
└── tailwind.config.js   

---

### ⚙️ Installation & Usage

1. **Clone the repository**
```bash
git clone https://github.com/<your-username>/site-vincent.git
cd site-vincent
```
2. **Install dependencies**
```bash
npm install
```
3. **Generate galleries**
```bash
npm run generate-galleries
```
4. **Start development server**
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production**
```bash
npm run build
npm start
```

---

### 🛠️ Available Scripts

| Command                  | Description |
|--------------------------|-------------|
| `npm run dev`           | Start the local dev server (with gallery generation). |
| `npm run build`         | Build optimized for production. |
| `npm run generate-galleries` | Automatically generates `data/galleries.json`. |

---

### 🚀 Deployment

- Automatically deployed on **Vercel** for every `main` commit.
- Production URL: **[to fill after deployment]**

---

### 📌 Next Steps

- Add a **headless CMS** for dynamic media management.
- Secure admin panel for gallery management.
- SEO and accessibility optimization.
