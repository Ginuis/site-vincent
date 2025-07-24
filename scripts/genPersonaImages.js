const { readdirSync, writeFileSync } = require('fs');
const { join } = require('path');

const monoDir = join(process.cwd(), 'public/images/galerie/monochrome');
const colorDir = join(process.cwd(), 'public/images/galerie/couleur');

function getImages(dir, basePath) {
  return readdirSync(dir)
    .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
    .map((file) => `${basePath}/${file}`);
}

const data = {
  monochrome: getImages(monoDir, '/images/galerie/monochrome'),
  couleur: getImages(colorDir, '/images/galerie/couleur'),
};

const outputPath = join(process.cwd(), 'data/personaImages.json');
writeFileSync(outputPath, JSON.stringify(data, null, 2));
console.log(`✅ personaImages.json généré avec succès : ${outputPath}`);
console.log(`🖤 Monochrome : ${data.monochrome.length} images`);
console.log(`🎨 Couleur : ${data.couleur.length} images`);