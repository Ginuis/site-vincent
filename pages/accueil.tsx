import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Accueil() {
  return (
    <>
      <Navbar />
      <main className="pt-24 px-6">
        <h1 className="text-2xl font-bold">Bienvenue sur la page d’accueil</h1>
        <p className="mt-4 text-gray-600">
          Cette section contiendra bientôt les derniers projets, un aperçu du portfolio et d'autres infos clés.
        </p>
      </main>
      <Footer />
    </>
  );
}