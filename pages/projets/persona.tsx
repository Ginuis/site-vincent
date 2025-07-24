import { useState } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import type { GetStaticProps } from 'next';
import galleriesData from '@/data/galleries.json';

// ✅ Chargement dynamique pour éviter des erreurs SSR
const FeaturedGallery = dynamic(() => import('@/components/FeaturedGallery'), { ssr: false });

// ✅ Typage strict des images Persona
type ImageData = {
  src: string; // chemin public de l'image
  alt: string; // texte alternatif
  type: 'monochrome' | 'color'; // ambiance
};

interface PersonaPageProps {
  shuffledImages: ImageData[]; // images mélangées passées en props
}

export default function PersonaPage({ shuffledImages }: PersonaPageProps) {
  const [ambiance, setAmbiance] = useState<'monochrome' | 'color'>('color');

  // ✅ Définition des classes selon l’ambiance (mise à jour en direct)
  const ambianceClasses = {
    monochrome: 'bg-neutral-900 text-gray-200', // fond sombre
    color: 'bg-white text-gray-800', // fond clair
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 ${ambianceClasses[ambiance]}`}>
      <Navbar />
      <main className="pt-28 pb-12">
        <h1 className="text-3xl font-bold text-center mb-8">Galerie Persona</h1>

        {/* ✅ Galerie dynamique : envoie les images et récupère le type pour changer l’ambiance */}
        <FeaturedGallery images={shuffledImages} onTypeChange={setAmbiance} />
      </main>
      <Footer ambiance={ambiance} />
    </div>
  );
}

// ✅ Génération statique : fusion + mélange aléatoire des images Persona
export const getStaticProps: GetStaticProps<PersonaPageProps> = async () => {
  const { monochrome, mosaic } = galleriesData;

  const allImages: ImageData[] = [
    ...(monochrome || []).map((src) => ({
      src,
      alt: 'Image Monochrome',
      type: 'monochrome' as const,
    })),
    ...(mosaic || []).map((src) => ({
      src,
      alt: 'Image Couleur',
      type: 'color' as const,
    })),
  ];

  // ✅ Mélange aléatoire (Fisher-Yates)
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