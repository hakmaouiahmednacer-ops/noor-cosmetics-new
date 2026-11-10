import React from 'react';
import { CLINICAL_STATS } from '../data/productData';

export const MetricsProof: React.FC = () => {
  return (
    <section className="bg-[#164324] text-[#FAF7F2] py-14 md:py-20 border-y border-[#245D35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[#E5B842] font-bold">
            Efficacité Testée & Approuvée
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal mt-2 text-white" style={{ textWrap: 'balance' }}>
            Des résultats visibles sur le Mélasma et les taches solaires au Maroc.
          </h2>
          <p className="text-sm text-[#D1DEC9] mt-3">
            Formulée spécifiquement pour répondre aux mélasmas récalcitrants et aux expositions solaires intenses du climat marocain.
          </p>
        </div>

        {/* 4-Column Clinical Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {CLINICAL_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#1A4C2A] border border-[#2B683D] flex flex-col justify-between shadow-xs"
            >
              <div>
                <span className="text-[11px] font-mono text-[#E5B842] tracking-wider block font-semibold">
                  RÉSULTAT 0{idx + 1}
                </span>
                <p className="font-serif text-4xl sm:text-5xl font-bold text-white mt-3 tabular-nums tracking-tight">
                  {stat.value}
                </p>
                <h3 className="text-base font-semibold text-[#F7F5EE] mt-2">
                  {stat.label}
                </h3>
              </div>
              <p className="text-xs text-[#BED2B6] mt-4 pt-4 border-t border-[#2B683D] leading-relaxed">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Local Reassurance Note */}
        <div className="mt-10 pt-6 border-t border-[#245D35] flex flex-col sm:flex-row items-center justify-between text-xs text-[#AEC7A6] gap-4">
          <p>
            Noor Cosmetics Maroc · Formule haute sécurité sans hydroquinone ni cortisone
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E5B842]" />
            <span className="text-white font-medium">Convient à toutes les carnations marocaines (peaux claires à mates)</span>
          </div>
        </div>

      </div>
    </section>
  );
};
