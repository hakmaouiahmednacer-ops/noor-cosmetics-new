import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { MOROCCAN_FAQS } from '../data/productData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C89005] font-semibold mb-2">
          <span>Questions Fréquentes</span>
          <span aria-hidden="true">·</span>
          <span>Maroc & Livraison</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#164324]">
          Tout savoir sur la commande, la livraison et l'utilisation
        </h2>
        <p className="text-sm text-[#4A453E] mt-3">
          Une transparence totale sur notre formule et les conditions de livraison au Maroc.
        </p>
      </div>

      <div className="divide-y divide-[#E2D8C7] border-y border-[#E2D8C7]">
        {MOROCCAN_FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="py-5">
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full text-left flex items-center justify-between gap-4 text-base font-semibold text-[#1F1D1A] group"
                aria-expanded={isOpen}
              >
                <span className="font-serif text-lg group-hover:text-[#164324] transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#164324] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="mt-3 text-sm text-[#4A453E] leading-relaxed pr-6 animate-in fade-in duration-200">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* WhatsApp Help Banner */}
      <div className="mt-10 p-5 bg-[#FAF7F2] border border-[#DECDB5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4A453E]">
        <div>
          <span className="font-bold text-[#164324] block">Besoin d'un conseil personnalisé sur vos taches ?</span>
          <span>Notre équipe au Maroc est disponible sur WhatsApp pour vous orienter.</span>
        </div>
        <a
          href="https://wa.me/212600000000?text=Salam%20Noor%20Cosmetics%2C%20j%27ai%20une%20question%20concernant%20mes%20taches%20de%20m%C3%A9lasma."
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold flex items-center gap-2 shrink-0 transition-colors shadow-xs"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>Discuter sur WhatsApp</span>
        </a>
      </div>
    </section>
  );
};
