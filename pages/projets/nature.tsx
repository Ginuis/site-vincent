import { useState } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import natureData from '@/data/natureImages.json';
import type { GetStaticProps } from 'next';

// Chargement dynamique du composant galerie (évite erreurs côté serveur)
const FeaturedGallery = dynamic(() => import('@/components/FeaturedGallery'), { ssr: false });

// Typage des images attendues
type ImageData = {
  src: string;
  alt: string;
  type: 'nature';
};

interface NaturePageProps {
  shuffledImages: ImageData[];
}

export default function NaturePage({ shuffledImages }: NaturePageProps) {
  // 🌿 Ambiance unique pour la nature (pas d'alternance comme Persona)
  const [ambiance] = useState<'nature'>('nature');

  const ambianceClasses = {
    nature: 'bg-green-50 text-green-900', // Fond clair vert naturel
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 ${ambianceClasses[ambiance]}`}>
      <Navbar />
      <main className="pt-28 pb-12">
        <h1 className="text-3xl font-bold text-center mb-8 text-green-700">
          Galerie Nature
        </h1>
        {/* Galerie Featured */}
        <FeaturedGallery
          images={shuffledImages}
          // Ici, pas de changement d'ambiance dynamique → on force toujours nature
          onTypeChange={() => {}}
        />
      </main>
      <Footer ambiance={'color' as any} /> 
      {/* Footer garde son style 'color' pour rester lisible sur fond vert */}
    </div>
  );
}

// ✅ getStaticProps → Mélange des images une seule fois côté serveur
export const getStaticProps: GetStaticProps<NaturePageProps> = async () => {
  const { nature = [] } = natureData;

  const allImages: ImageData[] = nature.map((src) => ({
    src,
    alt: 'Image Nature',
    type: 'nature',
  }));

  // Mélange simple (Fisher-Yates)
  const shuffled = [...allImages];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return {
    props: {
      shuffledImages: shuffled,
    },
  };
};