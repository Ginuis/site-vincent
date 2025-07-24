import { readdirSync, writeFileSync } from "fs";
import { join } from "path";

const folders = {
  pg: "public/images/pg",
  monochrome: "public/images/galerie/monochrome",
  mosaic: "public/images/galerie/couleur",
  nature: "public/images/galerie/nature",
};

function getImages(dir, basePath) {
  return readdirSync(dir)
    .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
    .map((file) => `${basePath}/${file}`);
}

const data = {};

for (const [key, folder] of Object.entries(folders)) {
  const basePath = folder.replace("public", "");
  data[key] = getImages(join(process.cwd(), folder), basePath);
}

const outputPath = join(process.cwd(), "data/galleries.json");
writeFileSync(outputPath, JSON.stringify(data, null, 2));

console.log(`✅ galleries.json généré avec succès : ${outputPath}`);