// scripts/genGalleryJson.ts
import fs from 'fs';
import path from 'path';

const GALLERY_DIR = path.join(process.cwd(), 'public', 'images', 'galerie');
const OUTPUT_PATH = path.join(process.cwd(), 'data', 'galerie_images.json');
const VALID_EXT = ['.jpg', '.jpeg', '.png', '.webp'];

const categories = ['nature', 'monochrome', 'monosaïque'];
const images: Record<string, string[]> = {};

for (const category of categories) {
  const folder = path.join(GALLERY_DIR, category);
  if (fs.existsSync(folder)) {
    const files = fs
      .readdirSync(folder)
      .filter((f) => VALID_EXT.includes(path.extname(f).toLowerCase()))
      .map((f) => `/images/galerie/${category}/${f}`);
    images[category] = files;
  } else {
    images[category] = [];
  }
}

fs.writeFileSync(OUTPUT_PATH, JSON.stringify(images, null, 2));
console.log(`✅ Galerie mise à jour dans ${OUTPUT_PATH}`);