// scripts/generateImageList.js

const fs = require('fs');
const path = require('path');

// Dossier à scanner
const imageDir = path.join(__dirname, '../public/images/pg');

// Lire tous les fichiers d'image valides dans le dossier
const files = fs.readdirSync(imageDir)
  .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
  .map(file => `/images/pg/${file}`);

// Générer le fichier JSON de sortie
const outputPath = path.join(__dirname, '../data/images.json');
fs.writeFileSync(outputPath, JSON.stringify(files, null, 2));

console.log(`✅ Fichier images.json généré avec ${files.length} image(s).`);