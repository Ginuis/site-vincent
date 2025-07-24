import { useState } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import galleriesData from '@/data/galleries.json';

// ✅ Chargement dynamique
const FeaturedGallery = dynamic(() => import('@/components/FeaturedGallery'), { ssr: false });

type ImageData = {
  src: string;
  alt: string;
  type: 'nature';
};

interface NaturePageProps {
  natureImages: ImageData[];
}

export default function NaturePage({ natureImages }: NaturePageProps) {
  const [ambiance] = useState<'nature'>('nature');

  // ✅ Ambiance spécifique "Nature"
  const ambianceClasses = {
    nature: 'bg-green-50 text-green-900',
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 ${ambianceClasses[ambiance]}`}>
      <Navbar />
      <main className="pt-28 pb-12">
        <h1 className="text-3xl font-bold text-center mb-8">Galerie Nature</h1>

        {/* ✅ Pas de changement d’ambiance dynamique ici */}
        <FeaturedGallery images={natureImages} onTypeChange={() => {}} />
      </main>
      <Footer ambiance="color" />
    </div>
  );
}

// ✅ Récupération des images Nature
export async function getStaticProps() {
  const natureImages: ImageData[] = (galleriesData.nature || []).map((src) => ({
    src,
    alt: 'Image Nature',
    type: 'nature' as const,
  }));

  return {
    props: {
      natureImages,
    },
  };
}