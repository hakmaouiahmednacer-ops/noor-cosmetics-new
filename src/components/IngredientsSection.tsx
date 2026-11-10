import React, { useState } from 'react';
import { Check, Shield, Sparkles, Droplets, Info } from 'lucide-react';
import { INGREDIENTS_LIST } from '../data/productData';

export const IngredientsSection: React.FC = () => {
  const [selectedIngredient, setSelectedIngredient] = useState(0);

  return (
    <section id="actifs" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#C89005] font-semibold mb-2">
          <span>Science Dépigmentante Ciblée</span>
          <span aria-hidden="true">·</span>
          <span>Formule Haute Tolérance</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#164324]" style={{ textWrap: 'balance' }}>
          Le trio d'actifs référence contre le Mélasma et l'hyperpigmentation.
        </h2>
        <p className="text-sm text-[#4A453E] mt-3 leading-relaxed">
          Pour éliminer le kalf sans irriter la peau, Noor Cosmetics associe l'Acide Kojique, l'Alpha-Arbutine et la Vitamine C à 0.8%. Une synergie biomoléculaire qui agit à tous les niveaux de la pigmentation.
        </p>
      </div>

      {/* Interactive Ingredients Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Ingredients Navigation List (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {INGREDIENTS_LIST.map((item, idx) => {
            const isSelected = selectedIngredient === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedIngredient(idx)}
                className={`p-4 text-left border transition-all flex flex-col gap-1.5 ${
                  isSelected
                    ? 'border-[#164324] bg-[#F3F8F4] shadow-sm ring-1 ring-[#164324]'
                    : 'border-[#DECDB5] bg-white hover:bg-[#FAF7F2]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#C89005]">
                    {item.concentration || 'ACTIF MAJEUR'}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-[#6B635A]">
                    {item.role}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#164324]">
                  {item.name}
                </h3>
                <span className="text-xs font-mono text-[#8C6D3E]">
                  INCI : {item.inci}
                </span>
              </button>
            );
          })}

          <div className="p-4 bg-[#F5F8F5] border border-[#DECDB5] text-xs text-[#4A453E] space-y-1">
            <p className="font-semibold text-[#164324]">🌱 Engagement Pureté Noor Cosmetics :</p>
            <p>0% hydroquinone toxique · 0% corticoïdes · 0% parabènes nocifs.</p>
          </div>
        </div>

        {/* Right Side: Deep-Dive Card of Active Ingredient (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-[#DECDB5] p-6 sm:p-8 flex flex-col gap-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E2D8C7] pb-5">
            <div>
              <span className="text-xs font-mono uppercase text-[#C89005] font-bold block">
                {INGREDIENTS_LIST[selectedIngredient].concentration ? `Concentration ${INGREDIENTS_LIST[selectedIngredient].concentration}` : 'Composant clé'}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#164324] mt-1">
                {INGREDIENTS_LIST[selectedIngredient].name}
              </h3>
            </div>
            <span className="text-xs uppercase tracking-wider text-[#164324] bg-[#F3F8F4] px-3 py-1.5 font-semibold self-start border border-[#C5DDCB]">
              {INGREDIENTS_LIST[selectedIngredient].role}
            </span>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#3D3731] mb-2">
              Action sur les taches et le mélasma :
            </h4>
            <p className="text-sm text-[#4A453E] leading-relaxed">
              {INGREDIENTS_LIST[selectedIngredient].description}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#3D3731] mb-3">
              Bénéfices constatés :
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {INGREDIENTS_LIST[selectedIngredient].benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-2 bg-[#FAF7F2] p-3 border border-[#E8DFC8] text-xs text-[#1F1D1A]">
                  <Check className="w-4 h-4 text-[#164324] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantees */}
          <div className="pt-2 border-t border-[#E8DFC8] grid grid-cols-3 gap-2 text-center text-xs text-[#5C554E]">
            <div className="p-2 bg-[#FAF7F2]">
              <span className="font-bold text-[#164324] block">50g</span>
              <span className="text-[11px]">Format généreux</span>
            </div>
            <div className="p-2 bg-[#FAF7F2]">
              <span className="font-bold text-[#164324] block">Tous types</span>
              <span className="text-[11px]">Même sensibles</span>
            </div>
            <div className="p-2 bg-[#FAF7F2]">
              <span className="font-bold text-[#164324] block">Sans rebond</span>
              <span className="text-[11px]">Résultats durables</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
