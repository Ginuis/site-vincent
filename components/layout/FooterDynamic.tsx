// components/layout/FooterDynamic.tsx

interface FooterDynamicProps {
  ambiance: 'monochrome' | 'color';
}

export default function FooterDynamic({ ambiance }: FooterDynamicProps) {
  return (
    <footer
      className={`text-center py-4 transition-colors duration-500 ${
        ambiance === 'monochrome'
          ? 'bg-neutral-900 text-gray-200'
          : 'bg-white text-gray-800'
      }`}
    >
      © Vincent Dupil Baclet
    </footer>
  );
}