'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import galleries from '@/data/galleries.json';

export default function PageGarde() {
  const router = useRouter();
  const [currentImage, setCurrentImage] = useState(0);
  const [redirectFailed, setRedirectFailed] = useState(false);

  const images = galleries.pg || [];

  // ✅ Changement d’image toutes les 15 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 900_000);
    return () => clearInterval(interval);
  }, [images.length]);

  // ✅ Redirection après 3 secondes (avec plan B si échec)
  useEffect(() => {
    if (typeof window === 'undefined') return; // ⛔ Ignore côté serveur

    const timer = setTimeout(() => {
      try {
        router.push('/accueil');
      } catch (error) {
        console.error("Redirection échouée :", error);
        setRedirectFailed(true); // ✅ Active le plan B
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex items-center justify-center transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        color: 'white',
        textShadow: '0 0 10px rgba(0,0,0,0.7)',
      }}
    >
      {redirectFailed ? (
        // ✅ Plan B : si la redirection automatique échoue, on affiche un lien
        <Link href="/accueil" className="text-5xl md:text-7xl font-bold tracking-wide text-center underline hover:text-gray-300">
          VINCENT DUPIL BACLET
        </Link>
      ) : (
        // ✅ Texte classique avant la redirection
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide text-center">
          VINCENT DUPIL BACLET
        </h1>
      )}
    </div>
  );
}