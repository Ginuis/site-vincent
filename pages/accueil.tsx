import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import personaData from '@/data/personaImages.json';
import natureData from '@/data/natureImages.json';

export default function Accueil() {
  // ✅ Fusion des images (Persona + Nature)
  const allImages = [
    ...(personaData.monochrome || []),
    ...(personaData.couleur || []),
    ...(natureData.nature || []),
  ];

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      {/* ✅ Navbar transparente */}
      <div className="absolute top-0 left-0 w-full z-50 bg-transparent">
        <Navbar />
      </div>

      {/* ✅ Carrousel vertical plein écran mais avec un léger cadrage */}
      <div className="absolute inset-0 overflow-hidden px-4">
        <div className="animate-verticalScroll flex flex-col gap-4">
          {[...allImages, ...allImages].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Aperçu ${i + 1}`}
              className="w-full h-[90vh] object-cover rounded-md"
            />
          ))}
        </div>
      </div>

      {/* ✅ Footer transparent */}
      <div className="absolute bottom-0 left-0 w-full z-50 bg-transparent">
        <Footer ambiance="color" />
      </div>
    </div>
  );
}