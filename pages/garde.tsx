'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import images from '@/data/images.json'; // JSON généré automatiquement

export default function PageGarde() {
  const [currentImage, setCurrentImage] = useState(0);
  const router = useRouter();

  // ✅ Changement d'image toutes les 15 minutes (inchangé)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 900_000); // 15 minutes
    return () => clearInterval(interval);
  }, []);

  // ✅ Redirection après 3 secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/accueil');
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex flex-col items-center justify-center transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      {/* ✅ Texte unique avec effet fondu */}
      <h1
        className="
          text-5xl md:text-7xl font-bold tracking-wide text-white
          drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]
          opacity-0 animate-fadeIn
        "
      >
        VINCENT DUPIL BACLET
      </h1>
    </div>
  );
}