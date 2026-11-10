import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface StickyMobileBarProps {
  onQuickOrder: () => void;
  price: number;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({
  onQuickOrder,
  price,
}) => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#DECDB5] px-4 py-2.5 shadow-xl flex items-center justify-between gap-3 h-14">
      <div className="flex flex-col">
        <span className="font-serif text-sm font-bold text-[#164324] leading-tight truncate">
          Crème Anti-Taches Noor
        </span>
        <span className="text-xs text-[#5C554E]">
          Dès <strong className="text-[#164324] font-bold font-serif text-sm tabular-nums">{price} DH</strong> · Livraison Gratuite
        </span>
      </div>

      <button
        onClick={onQuickOrder}
        className="px-4 py-2 bg-[#164324] text-white text-xs uppercase tracking-wider font-bold flex items-center gap-1.5 shrink-0 active:scale-95 transition-transform shadow-xs"
      >
        <ShoppingBag className="w-3.5 h-3.5 text-[#E5B842]" />
        <span>Commander (COD)</span>
      </button>
    </div>
  );
};
