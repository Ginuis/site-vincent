// scripts/genAll.ts
import fs from 'fs';
import path from 'path';

// Fonction utilitaire pour filtrer les extensions valides
const VALID_EXT = ['.jpg', '.jpeg', '.png', '.webp'];

// === 1. Génération images page de garde ===
function generatePageGardeImages() {
  const pgDir = path.join(process.cwd(), 'public', 'images', 'pg');
  const outputPg = path.join(process.cwd(), 'data', 'images.json');

  if (!fs.existsSync(pgDir)) {
    console.warn('⚠️ Dossier /images/pg/ introuvable.');
    fs.writeFileSync(outputPg, JSON.stringify([]));
    return;
  }

  const files = fs.readdirSync(pgDir)
    .filter(f => VALID_EXT.includes(path.extname(f).toLowerCase()))
    .map(f => `/images/pg/${f}`);

  fs.writeFileSync(outputPg, JSON.stringify(files, null, 2));
  console.log(`✅ ${files.length} image(s) enregistrée(s) dans ${outputPg}`);
}

// === 2. Génération images galeries ===
function generateGalerieImages() {
  const baseGallery = path.join(process.cwd(), 'public', 'images', 'galerie');
  const outputGallery = path.join(process.cwd(), 'data', 'galerie_images.json');
  const categories = ['nature', 'monochrome', 'monosaïque'];
  const gallery: Record<string, string[]> = {};

  for (const category of categories) {
    const folder = path.join(baseGallery, category);
    if (fs.existsSync(folder)) {
      const files = fs.readdirSync(folder)
        .filter(f => VALID_EXT.includes(path.extname(f).toLowerCase()))
        .map(f => `/images/galerie/${category}/${f}`);
      gallery[category] = files;
    } else {
      gallery[category] = [];
    }
  }

  fs.writeFileSync(outputGallery, JSON.stringify(gallery, null, 2));
  console.log(`✅ Galerie mise à jour dans ${outputGallery}`);
}

// === Appels ===
generatePageGardeImages();
generateGalerieImages();