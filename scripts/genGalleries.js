const { readdirSync, writeFileSync } = require('fs');
const { join } = require('path');

// ✅ Dictionnaire des galeries à générer
const galleries = {
  persona: {
    monochrome: 'public/images/galerie/monochrome',
    couleur: 'public/images/galerie/couleur',
  },
  nature: {
    nature: 'public/images/galerie/nature',
  },
};

// ✅ Fonction pour récupérer les images d'un dossier
function getImages(dir, basePath) {
  return readdirSync(dir)
    .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
    .map((file) => `${basePath}/${file}`);
}

// ✅ Génération pour chaque galerie
for (const [galleryName, folders] of Object.entries(galleries)) {
  const data = {};

  for (const [key, folderPath] of Object.entries(folders)) {
    const fullDir = join(process.cwd(), folderPath);
    const publicPath = folderPath.replace('public', '');
    data[key] = getImages(fullDir, publicPath);
  }

  const outputPath = join(process.cwd(), `data/${galleryName}Images.json`);
  writeFileSync(outputPath, JSON.stringify(data, null, 2));

  console.log(`✅ ${galleryName}Images.json généré avec succès → ${outputPath}`);
  for (const key of Object.keys(data)) {
    console.log(`📸 ${galleryName}/${key}: ${data[key].length} images`);
  }
}