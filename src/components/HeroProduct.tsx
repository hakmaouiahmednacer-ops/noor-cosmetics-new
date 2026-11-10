import React, { useState } from 'react';
import { Star, Truck, ShieldCheck, Check, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { ProductPack } from '../types';
import { PRODUCT_PACKS, PRODUCT_IMAGE_PATH, PRODUCT_JAR_MOCKUP } from '../data/productData';
import cosmeticModel from '../assets/images/cosmetic_model_radiant_skin_1794236918059.jpg';
import botanicalIngredients from '../assets/images/botanical_ingredients_flatlay_1794236917874.jpg';
interface HeroProductProps {
  selectedPack: ProductPack;
  onSelectPack: (pack: ProductPack) => void;
  onScrollToOrder: () => void;
  onScrollToReviews: () => void;
}

const GALLERY_VIEWS = [
  {
    src: PRODUCT_IMAGE_PATH,
    label: 'Campagne Noor Cosmetics 50g',
    desc: 'Dites adieu aux taches, révélez votre éclat — Soin anti-mélasma certifié'
  },
  {
    src: PRODUCT_JAR_MOCKUP,
    label: 'Le Pot 50g en Détail',
    desc: 'Format généreux 50g — Texture crème fondante formulée pour tous types de peaux'
  },
  {
src: cosmeticModel,
    label: 'Résultat Peau Nette & Éclat',
    desc: 'Estompe le mélasma (kalf) et unifie le teint dès 14 à 28 jours d’utilisation'
  },
  {
src: botanicalIngredients,
    label: 'Formulation Sûre & Efficace',
    desc: 'Sans hydroquinone agressive, sans parabènes nocifs, sans effet rebond'
  }
];

export const HeroProduct: React.FC<HeroProductProps> = ({
  selectedPack,
  onSelectPack,
  onScrollToOrder,
  onScrollToReviews,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <section id="produit" className="pt-6 pb-14 md:pt-10 md:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 2-Column Split: Product Gallery (Left) & Purchasing Module (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Product Visuals (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          
          {/* Main Visual Display */}
          <div className="relative aspect-square sm:aspect-[4/3] bg-[#F7F5EE] overflow-hidden border border-[#DECDB5] flex items-center justify-center">
            <img
              src={GALLERY_VIEWS[activeImageIndex].src}
              alt={GALLERY_VIEWS[activeImageIndex].label}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
            />

            {/* Official Badge Tag */}
            <div className="absolute top-4 left-4 bg-[#164324] text-white px-3 py-1.5 text-[11px] uppercase tracking-wider font-semibold shadow-xs">
              Produit Officiel Noor Cosmetics · 50g
            </div>

            {/* Free Shipping Tag */}
            <div className="absolute top-4 right-4 bg-[#C89005] text-[#1F1D1A] px-3 py-1 text-[11px] uppercase tracking-wider font-bold shadow-xs">
              Livraison Gratuite Maroc 🇲🇦
            </div>

            {/* Caption */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 border border-[#E2D8C7] flex items-center justify-between text-xs">
              <div>
                <p className="font-serif font-semibold text-[#164324] text-sm">
                  {GALLERY_VIEWS[activeImageIndex].label}
                </p>
                <p className="text-[#6B635A] text-[11px] mt-0.5 line-clamp-1">
                  {GALLERY_VIEWS[activeImageIndex].desc}
                </p>
              </div>
              <span className="text-[11px] font-mono text-[#8C6D3E] font-medium shrink-0 ml-2">
                0{activeImageIndex + 1} / 04
              </span>
            </div>
          </div>

          {/* Thumbnail Gallery Row */}
          <div className="grid grid-cols-4 gap-3">
            {GALLERY_VIEWS.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={`relative aspect-[4/3] overflow-hidden border transition-all bg-white p-1 flex items-center justify-center ${
                  activeImageIndex === idx
                    ? 'border-[#164324] ring-2 ring-[#164324]'
                    : 'border-[#DECDB5] opacity-75 hover:opacity-100'
                }`}
                aria-label={img.label}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  referrerPolicy="no-referrer"
                  className="max-h-full max-w-full object-contain"
                />
                <span className="absolute bottom-0 inset-x-0 bg-[#164324]/85 text-white text-[9px] py-0.5 text-center truncate px-1">
                  {img.label}
                </span>
              </button>
            ))}
          </div>

          {/* Moroccan Trust Banner Strip */}
          <div className="grid grid-cols-3 gap-2 p-3 bg-white border border-[#DECDB5] text-center text-xs text-[#3D3731]">
            <div className="flex flex-col items-center">
              <span className="font-bold text-[#164324] text-sm">100% Sûr</span>
              <span className="text-[11px] text-[#6B635A]">Paiement à la livraison</span>
            </div>
            <div className="flex flex-col items-center border-x border-[#E2D8C7]">
              <span className="font-bold text-[#164324] text-sm">24h - 48h</span>
              <span className="text-[11px] text-[#6B635A]">Livraison gratuite</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-[#164324] text-sm">Vérification</span>
              <span className="text-[11px] text-[#6B635A]">Ouvrez avant de payer</span>
            </div>
          </div>

        </div>

        {/* Right Column: Contiguous Purchase Module (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          
          {/* Header Title & Subtitle */}
          <div className="border-b border-[#DECDB5] pb-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#C89005] font-semibold mb-1">
              <span>Noor Cosmetics</span>
              <span aria-hidden="true">·</span>
              <span>Tous types de peaux 50g</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#164324] leading-tight" style={{ textWrap: 'balance' }}>
              Crème Anti-Taches & Mélasma
            </h1>

            <p className="mt-2 text-sm text-[#4A453E] leading-relaxed">
              Une formule ciblée pour éliminer le mélasma (الكلف), les taches de soleil rebelles et les cicatrices d'acné tout en unifiant le teint.
            </p>

            {/* Social Proof */}
            <div className="mt-3 flex items-center gap-2.5">
              <div className="flex items-center gap-0.5 text-[#C89005]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-bold text-[#1F1D1A]">4.9 / 5</span>
              <span className="text-xs text-[#7A7165]" aria-hidden="true">·</span>
              <button
                type="button"
                onClick={onScrollToReviews}
                className="text-xs text-[#164324] font-medium underline underline-offset-2"
              >
                +2 840 clientes satisfaites au Maroc
              </button>
            </div>
          </div>

          {/* Key Actives Highlight */}
          <div className="p-3.5 bg-[#FAF7F2] border border-[#DECDB5] text-xs space-y-1.5">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8C6D3E] block">
              Trio d'Actifs Dépigmentants Puissants :
            </span>
            <div className="flex flex-wrap gap-2 text-[#1F1D1A]">
              <span className="bg-white px-2.5 py-1 border border-[#DECDB5] font-medium">Acide Kojique</span>
              <span className="bg-white px-2.5 py-1 border border-[#DECDB5] font-medium">Alpha-Arbutine</span>
              <span className="bg-white px-2.5 py-1 border border-[#DECDB5] font-medium">Vitamine C 0.8%</span>
            </div>
          </div>

          {/* Moroccan Packs Selection */}
          <div className="space-y-2.5">
            <label className="text-xs uppercase tracking-[0.14em] font-semibold text-[#164324] flex items-center justify-between">
              <span>Sélectionnez votre offre :</span>
              <span className="text-[11px] text-[#C89005] font-medium">Paiement à la livraison</span>
            </label>

            <div className="space-y-2">
              {PRODUCT_PACKS.map((pack) => {
                const isSelected = selectedPack.id === pack.id;
                return (
                  <button
                    key={pack.id}
                    type="button"
                    onClick={() => onSelectPack(pack)}
                    className={`w-full p-3.5 text-left border transition-all flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'border-[#164324] bg-[#F3F8F4] ring-2 ring-[#164324]'
                        : 'border-[#DECDB5] bg-white hover:bg-[#FAF7F2]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected ? 'border-[#164324] bg-[#164324]' : 'border-[#B8AC98]'
                      }`}>
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-[#1F1D1A]">
                            {pack.name}
                          </span>
                          {pack.badge && (
                            <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 bg-[#C89005] text-[#1F1D1A]">
                              {pack.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#6B635A] mt-0.5">
                          {pack.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="flex items-baseline gap-1.5 justify-end">
                        <span className="font-serif text-lg font-bold text-[#164324] tabular-nums">
                          {pack.price} DH
                        </span>
                        {pack.originalPrice && (
                          <span className="text-xs line-through text-[#998F82] tabular-nums">
                            {pack.originalPrice} DH
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] font-semibold text-[#164324] block">
                        {pack.savings}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Immediate Action Buttons */}
          <div className="space-y-3 pt-2">
            <button
              type="button"
              onClick={onScrollToOrder}
              className="w-full py-4 bg-[#164324] hover:bg-[#1E5631] active:scale-[0.99] text-white text-xs uppercase tracking-[0.16em] font-bold flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <span>Commander Maintenant</span>
              <span className="opacity-40" aria-hidden="true">·</span>
              <span className="font-serif font-normal text-base tabular-nums">
                {selectedPack.price} DH
              </span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            {/* WhatsApp Quick Consultation */}
            <a
              href="https://wa.me/212600000000?text=Salam%2C%20je%20souhaite%20commander%20la%20Cr%C3%A8me%20Anti-Taches%20Noor%20Cosmetics"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Commander rapidement par WhatsApp</span>
            </a>

            {/* Moroccan Guarantees */}
            <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] text-[#5C554E]">
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#164324] shrink-0" />
                <span>Livraison gratuite partout au Maroc</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#164324] shrink-0" />
                <span>Paiement en espèces à la livraison</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
