/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // ✅ Active la détection stricte pour React

  eslint: {
    // ✅ Empêche Vercel de bloquer le build si seules des erreurs de style apparaissent
    // (met à true seulement si nécessaire pour éviter des échecs inutiles)
    ignoreDuringBuilds: false,
  },

  images: {
    domains: [
      // ✅ Ajoute ici les domaines autorisés si tu charges des images externes
      // ex : "images.unsplash.com"
    ],
  },
};

export default nextConfig;