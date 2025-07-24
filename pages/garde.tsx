'use client';
import { useEffect, useState } from 'react';
import galleriesData from '@/data/galleries.json';

export default function PageGarde() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = galleriesData.pg || [];

  // ✅ Changement automatique d’image toutes les 15 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 900000);
    return () => clearInterval(interval);
  }, [images.length]);

  if (!images || images.length === 0) {
    return <p className="text-center text-gray-500">Aucune image à afficher.</p>;
  }

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex flex-col items-center justify-center transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        color: 'white',
        textShadow: '0 0 10px rgba(0,0,0,0.7)',
      }}
    >
      {/* ✅ Nom unique avec effet fondu */}
      <h1 className="text-5xl md:text-7xl font-bold tracking-wide text-center animate-fade-in">
        VINCENT DUPIL BACLET
      </h1>
    </div>
  );
}