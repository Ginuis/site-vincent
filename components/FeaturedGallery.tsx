import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// ✅ Type modifié : "type" devient optionnel
interface Props {
  images: {
    src: string;
    alt: string;
    type?: 'monochrome' | 'color'; // ✅ optionnel
  }[];
  onTypeChange?: (type: 'monochrome' | 'color') => void;
}

export default function FeaturedGallery({ images, onTypeChange }: Props) {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  if (!images || images.length === 0) {
    return <p className="text-center text-gray-500">Aucune image à afficher.</p>;
  }

  const currentImage = images[current];

  // ✅ Mise à jour ambiance seulement si type est défini
  useEffect(() => {
    if (currentImage.type && onTypeChange) {
      onTypeChange(currentImage.type);
    }
  }, [currentImage, onTypeChange]);

  // ✅ Changement automatique toutes les 5 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Image principale */}
      <div className="aspect-[3/2] relative rounded-xl overflow-hidden shadow-lg mb-6">
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 75vw"
        />
      </div>

      {/* Miniatures horizontales avec scroll doux + drag */}
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
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`relative h-20 w-32 rounded-lg overflow-hidden border-2 transition-transform duration-200 ${
              current === idx
                ? 'border-white scale-105 shadow-md'
                : 'border-transparent opacity-70 hover:opacity-100'
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover object-center"
              sizes="100px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}