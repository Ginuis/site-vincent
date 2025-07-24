// components/FeaturedGallery.tsx

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Props {
  images: {
    src: string;
    alt: string;
    type: 'monochrome' | 'color';
  }[];
  onTypeChange: (type: 'monochrome' | 'color') => void;
}

export default function FeaturedGallery({ images, onTypeChange }: Props) {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 💡 Si aucune image à afficher
  if (!images || images.length === 0) {
    return <p className="text-center text-gray-500">Aucune image à afficher.</p>;
  }

  const currentImage = images[current];

  // 🌗 Met à jour l'ambiance selon l'image en avant
  useEffect(() => {
    onTypeChange(currentImage.type);
  }, [currentImage, onTypeChange]);

  // ⏱️ Défilement automatique toutes les 5 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* 🖼️ Image principale */}
      <div className="aspect-[3/2] relative rounded-xl overflow-hidden shadow-lg mb-6">
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 75vw"
        />
      </div>

      {/* 📜 Scroll horizontal avec drag + clic pour changer l’image */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide cursor-grab active:cursor-grabbing"
        style={{ scrollBehavior: 'smooth' }}
        onMouseDown={(e) => {
          const el = containerRef.current;
          if (!el) return;
          const startX = e.pageX;
          const startScroll = el.scrollLeft;

          const onMouseMove = (moveEvent: MouseEvent) => {
            el.scrollLeft = startScroll - (moveEvent.pageX - startX);
          };

          const onMouseUp = () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
          };

          window.addEventListener('mousemove', onMouseMove);
          window.addEventListener('mouseup', onMouseUp);
        }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setCurrent(idx)}
            className="relative h-32 min-w-[160px] rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 border-2 border-transparent hover:border-white cursor-pointer"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover object-center"
              sizes="160px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}