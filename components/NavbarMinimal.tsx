import { FaInstagram } from 'react-icons/fa';

export default function NavbarMinimal() {
  return (
    <nav className="w-full p-4 bg-gray-100 text-center">
      <div className="flex justify-between items-center">
        <span className="text-lg">Vincent Dupil Baclet</span>
        <FaInstagram className="text-pink-500 text-xl" />
      </div>
    </nav>
  );
}