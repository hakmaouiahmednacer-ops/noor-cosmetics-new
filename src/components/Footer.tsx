import React from 'react';
import { MessageCircle, ShieldCheck, Truck, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#12361D] text-[#FAF7F2] pt-16 pb-20 md:pb-16 border-t border-[#1E5631]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Moroccan Guarantees Strip */}
        <div className="pb-12 border-b border-[#205530] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Truck className="w-6 h-6 text-[#E5B842] shrink-0" />
            <div>
              <span className="font-bold text-white text-sm block">Livraison Gratuite Partout au Maroc</span>
              <span className="text-xs text-[#BED2B6]">24h à 48h ouvrées (Casablanca, Rabat, Marrakech, etc.)</span>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <ShieldCheck className="w-6 h-6 text-[#E5B842] shrink-0" />
            <div>
              <span className="font-bold text-white text-sm block">Paiement à la Réception (COD)</span>
              <span className="text-xs text-[#BED2B6]">Ouvrez et vérifiez votre colis avant de payer</span>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Clock className="w-6 h-6 text-[#E5B842] shrink-0" />
            <div>
              <span className="font-bold text-white text-sm block">Assistance WhatsApp 7j/7</span>
              <span className="text-xs text-[#BED2B6]">Réponse rapide pour le suivi de votre commande</span>
            </div>
          </div>
        </div>

        {/* Middle Footer */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#205530]">
          <div className="md:col-span-6 space-y-3">
            <span className="font-serif text-2xl font-bold tracking-[0.12em] text-white uppercase block">
              Noor <span className="text-[#E5B842] font-light">Cosmetics</span>
            </span>
            <p className="text-xs sm:text-sm text-[#D1DEC9] leading-relaxed max-w-md">
              Marque cosmétique experte dans le traitement du mélasma (الكلف), des taches brunes de soleil et de l'hyperpigmentation cutanée. Formule active enrichie en Acide Kojique, Alpha-Arbutine et Vitamine C 0.8% adaptée aux peaux marocaines.
            </p>
          </div>

          <div className="md:col-span-3 space-y-2 text-xs text-[#BED2B6]">
            <span className="text-xs uppercase tracking-wider font-bold text-white block">
              Navigation
            </span>
            <ul className="space-y-1.5">
              <li><a href="#produit" className="hover:text-white transition-colors">La Crème Anti-Taches 50g</a></li>
              <li><a href="#actifs" className="hover:text-white transition-colors">Acide Kojique & Arbutine</a></li>
              <li><a href="#avant-apres" className="hover:text-white transition-colors">Résultats Avant / Après</a></li>
              <li><a href="#commander" className="hover:text-white transition-colors">Commander (Paiement à la livraison)</a></li>
              <li><a href="#avis" className="hover:text-white transition-colors">Avis Clientes au Maroc</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-wider font-bold text-white block">
              Contact & WhatsApp Maroc
            </span>
            <p className="text-xs text-[#D1DEC9]">
              Pour toute question ou commande directe :
            </p>
            <a
              href="https://wa.me/212600000000?text=Salam%20Noor%20Cosmetics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Contact WhatsApp Direct</span>
            </a>
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8BAE84] gap-4">
          <p>© {new Date().getFullYear()} Noor Cosmetics Maroc. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <span>Paiement en Dirhams (DH)</span>
            <span aria-hidden="true">·</span>
            <span>Livraison gratuite Royaume du Maroc</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
