'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import images from '../data/images.json'; // fichier JSON généré automatiquement

export default function PageGarde() {
  const [currentImage, setCurrentImage] = useState(0);

  /**
   * Change d'image toutes les 15 minutes (900_000 ms)
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 900000); // 15 minutes
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex flex-col items-center justify-center transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        color: 'white',
        textShadow: '0 0 10px rgba(0,0,0,0.7)', // assure la lisibilité
      }}
    >
      {/* Nom principal centré */}
      <h1 className="text-4xl md:text-6xl font-bold tracking-wide mb-6 text-center">
        VINCENT DUPIL BACLET
      </h1>

      {/* Lien animé vers la page d’accueil */}
      <Link href="/accueil">
        <span
          className="
            text-2xl md:text-3xl font-light cursor-pointer relative group
            transition-all duration-300 ease-in-out
            hover:text-white hover:brightness-110
          "
          style={{
            textShadow: '0 0 6px rgba(255, 255, 255, 0.4)',
          }}
        >
          PHOTOGRAPHIE
          <span
            className="
              absolute left-0 -bottom-1 w-0 h-[2px] bg-white
              transition-all duration-500 ease-out group-hover:w-full
            "
          />
        </span>
      </Link>
    </div>
  );
}