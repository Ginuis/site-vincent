import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import type { GetStaticProps } from 'next';
import personaData from '@/data/personaImages.json';

// Chargement dynamique du composant slider (évite erreurs SSR)
const FeaturedGallery = dynamic(() => import('@/components/FeaturedGallery'), { ssr: false });

// Type d’image
type ImageData = {
  src: string;
  alt: string;
  type: 'monochrome' | 'color';
};

// Props de la page
interface PersonaPageProps {
  shuffledImages: ImageData[];
}

export default function PersonaPage({ shuffledImages }: PersonaPageProps) {
  const [ambiance, setAmbiance] = useState<'monochrome' | 'color'>('color');

  // Mapping ambiance → styles CSS
  const ambianceClasses = {
    monochrome: 'bg-neutral-900 text-gray-200',
    color: 'bg-white text-gray-800',
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 ${ambianceClasses[ambiance]}`}>
      <Navbar />
      <main className="pt-28 pb-12">
        <h1 className="text-3xl font-bold text-center mb-8">Galerie Persona</h1>
        <FeaturedGallery images={shuffledImages} onTypeChange={setAmbiance} />
      </main>
      <Footer ambiance={ambiance} />
    </div>
  );
}

// Fonction exécutée au build pour fusionner et mélanger les images
export const getStaticProps: GetStaticProps<PersonaPageProps> = async () => {
  const { monochrome = [], couleur = [] } = personaData;

  // Fusionner les deux tableaux en les typant
 const allImages: ImageData[] = [
    ...monochrome.map((src) => ({
      src,
      alt: 'Image Monochrome',
      type: 'monochrome' as const,
    })),
    ...couleur.map((src) => ({
      src,
      alt: 'Image Couleur',
      type: 'color' as const,
    })),
  ];

  // Mélanger aléatoirement (Fisher–Yates shuffle)
  const shuffled = [...allImages];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  console.log("✅ Images chargées :", allImages);
  return {
    props: {
      shuffledImages: shuffled,
    },
  };
};