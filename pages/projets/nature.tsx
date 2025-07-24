import { useState } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import galleries from '@/data/galleries.json';

// ✅ Chargement dynamique
const FeaturedGallery = dynamic(() => import('@/components/FeaturedGallery'), { ssr: false });

type GalleryImage = {
  src: string;
  alt: string;
  type?: 'monochrome' | 'color'; // Optionnel pour compatibilité avec FeaturedGallery
};

export default function NaturePage() {
  const [ambiance] = useState<'nature'>('nature');

  // ✅ Ambiance spécifique à la page Nature
  const ambianceClasses = {
    nature: 'bg-green-50 text-green-900',
  };

  // ✅ Construction des images Nature
  const natureImages: GalleryImage[] = (galleries.nature || []).map((src: string) => ({
    src,
    alt: 'Image Nature',
  }));

  return (
    <div className={`min-h-screen transition-colors duration-700 ${ambianceClasses[ambiance]}`}>
      <Navbar />
      <main className="pt-28 pb-12">
        <h1 className="text-3xl font-bold text-center mb-8">Galerie Nature</h1>

        {/* ✅ Pas de changement d’ambiance dynamique ici */}
        <FeaturedGallery images={natureImages} onTypeChange={() => {}} />
      </main>
      <Footer />
    </div>
  );
}