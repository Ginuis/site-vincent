import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Image from 'next/image';
import images from '../../data/galerie_images.json';

export default function Persona() {
  const monochrome = images.monochrome;
  const color = images["monosaïque"];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20 px-6 bg-gradient-to-br from-zinc-900 via-slate-800 to-black text-white">
        <h1 className="text-3xl font-bold mb-8 text-center tracking-widest">Galerie – Persona</h1>

        {/* Section noir & blanc */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold mb-4 text-gray-200">Monochrome</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {monochrome.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-md hover:scale-105 transition-transform duration-500">
                <Image
                  src={src}
                  alt={`Monochrome ${i + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition duration-700"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Section couleur */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-200">En Couleurs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {color.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-md hover:scale-105 transition-transform duration-500">
                <Image
                  src={src}
                  alt={`Couleur ${i + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover brightness-95 hover:brightness-110 transition duration-700"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}