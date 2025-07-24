import { useState } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import FooterDynamic from '@/components/layout/FooterDynamic';
import type { GetStaticProps } from 'next';
import galleriesData from '@/data/galleries.json';

// ✅ Chargement dynamique
const FeaturedGallery = dynamic(() => import('@/components/FeaturedGallery'), { ssr: false });

type ImageData = {
  src: string;
  alt: string;
  type: 'monochrome' | 'color';
};

interface PersonaPageProps {
  shuffledImages: ImageData[];
}

export default function PersonaPage({ shuffledImages }: PersonaPageProps) {
  const [ambiance, setAmbiance] = useState<'monochrome' | 'color'>('color');

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
      <FooterDynamic ambiance={ambiance} />
    </div>
  );
}

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

  const shuffled = [...allImages];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return {
    props: { shuffledImages: shuffled },
  };
};