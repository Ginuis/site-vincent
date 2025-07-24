import Link from 'next/link';
import { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  let timeout: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(timeout);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeout = setTimeout(() => setShowDropdown(false), 150);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-2 md:px-6 lg:px-12 py-4 flex justify-between items-center text-sm font-light tracking-wide">
        {/* Nom à gauche, cliquable */}
        <Link
          href="/accueil"
          className="text-lg font-semibold uppercase hover:opacity-80 transition"
        >
          VINCENT DUPIL BACLET
        </Link>

        {/* Liens principaux */}
        <div className="flex items-center gap-6 text-base">
          <Link href="/concept-art" className="nav-link">Concept Art</Link>

          {/* Sous-menu Projets */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="nav-link cursor-pointer">Projets</span>

            {showDropdown && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-md rounded-md overflow-hidden min-w-[140px] animate-fade-in z-50">
                <Link href="/projets/persona" className="block px-4 py-2 hover:bg-neutral-100 transition">Persona</Link>
                <Link href="/projets/nature" className="block px-4 py-2 hover:bg-neutral-100 transition">Nature</Link>
              </div>
            )}
          </div>

          <Link href="/contact" className="nav-link">Contact</Link>

          {/* Réseaux sociaux */}
          <a href="https://www.instagram.com/vincentdupilbaclet?igsh=Zmo4Z21yNmt2aWJ3&utm_source=qr"
             target="_blank"
             rel="noopener noreferrer"
             aria-label="Instagram"><FaInstagram /></a>
        </div>
      </nav>
    </header>
  );
}