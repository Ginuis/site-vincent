import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import galleries from '@/data/galleries.json';
import FeaturedGallery from '@/components/FeaturedGallery';

type NatureImage = {
  src: string;
  alt: string;
};

export default function NaturePage() {
  // ✅ Construction des images sans "type"
  const natureImages: NatureImage[] = (galleries.nature || []).map(
    (src: string) => ({
      src,
      alt: 'Image Nature',
    })
  );

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <main className="pt-28 pb-12">
        <h1 className="text-3xl font-bold text-center mb-8">Galerie Nature</h1>
        <FeaturedGallery images={natureImages as any} onTypeChange={() => {}} />
      </main>
      <Footer />
    </div>
  );
}