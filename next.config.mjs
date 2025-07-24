/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Active strict mode React
  swcMinify: true,       // Optimisation des builds avec SWC
  images: {
    domains: [],         // Ajoute ici les domaines autorisés pour les images externes si besoin
  },
};

export default nextConfig;