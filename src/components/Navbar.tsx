import React from 'react';
import { ShoppingBag, PhoneCall, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onScrollToOrder: () => void;
  onScrollToSection: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onScrollToOrder,
  onScrollToSection,
}) => {
  return (
    <>
      {/* Moroccan Promotional Announcement Bar */}
      <div className="bg-[#164324] text-[#FAF7F2] text-xs py-2 px-4 text-center font-sans tracking-wide border-b border-[#245D35]">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
          <span className="font-semibold text-[#E5B842]">🇲🇦 Livraison 100% Gratuite Partout au Maroc</span>
          <span className="opacity-50 hidden sm:inline" aria-hidden="true">·</span>
          <span>Paiement à la Réception (الدفع عند الاستلام)</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2D8C7]/80 transition-all shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single element brand wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group"
          >
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.12em] text-[#164324] uppercase whitespace-nowrap shrink-0">
              Noor <span className="text-[#C89005] font-light">Cosmetics</span>
            </span>
          </a>

          {/* Zone 2: Clean single-line navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-[0.14em] font-medium text-[#4A453E]">
            <button
              onClick={() => onScrollToSection('produit')}
              className="hover:text-[#164324] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              La Crème Anti-Taches
            </button>
            <button
              onClick={() => onScrollToSection('actifs')}
              className="hover:text-[#164324] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Acide Kojique & Arbutine
            </button>
            <button
              onClick={() => onScrollToSection('avant-apres')}
              className="hover:text-[#164324] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Avant / Après
            </button>
            <button
              onClick={() => onScrollToSection('avis')}
              className="hover:text-[#164324] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Avis Clientes Maroc
            </button>
            <button
              onClick={() => onScrollToSection('faq')}
              className="hover:text-[#164324] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              FAQ Livraison
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onScrollToOrder}
              className="flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-[#164324] text-white hover:bg-[#1E5631] active:scale-[0.98] transition-all text-xs uppercase tracking-[0.12em] font-semibold whitespace-nowrap shrink-0 shadow-sm"
            >
              <ShoppingBag className="w-4 h-4 text-[#E5B842]" />
              <span>Commander (Dès 179 DH)</span>
            </button>
          </div>

        </div>
      </header>
    </>
  );
};
