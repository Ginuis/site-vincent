import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Image from 'next/image';
import images from '../../data/galerie_images.json';

export default function Nature() {
  const natureImages = images.nature;

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-6 bg-gradient-to-br from-green-100 via-emerald-50 to-white">
        <h1 className="text-3xl font-bold mb-6 text-emerald-900">Galerie – Nature</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {natureImages.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow hover:shadow-lg transition-all duration-300">
              <Image
                src={src}
                alt={`Nature ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}