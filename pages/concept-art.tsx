import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function ConceptArt() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-semibold mb-4">Concept Art</h1>
        <p className="text-gray-600">Cette section est en cours de conception. Revenez bientôt.</p>
      </main>
      <Footer />
    </>
  );
}