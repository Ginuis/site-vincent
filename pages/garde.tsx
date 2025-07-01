// pages/garde.tsx
import Head from 'next/head';
import Link from 'next/link';

export default function PageDeGarde() {
  return (
    <>
      <Head>
        <title>Vincent Photographie</title>
      </Head>

      <main
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/garde.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold font-geist tracking-wide mb-4">
            VINCENT
          </h1>

          <Link
            href="/accueil"
            className="text-4xl md:text-6xl font-light tracking-widest font-geist transition duration-300 hover:tracking-[0.5em] hover:text-gray-300"
          >
            PHOTOGRAPHIE
          </Link>
        </div>
      </main>
    </>
  );
}