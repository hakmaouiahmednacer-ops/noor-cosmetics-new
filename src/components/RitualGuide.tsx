import React from 'react';

export const RitualGuide: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Préparer',
      subtitle: 'La toile épidermique',
      desc: 'Nettoyez votre visage avec un soin doux. Laissez la peau très légèrement humide ou vaporisée d’hydrolat de rose pour optimiser la diffusion du Triple Acide Hyaluronique.'
    },
    {
      step: '02',
      title: 'Activer',
      subtitle: 'L’alchimie thermique',
      desc: 'Déposez 3 à 4 gouttes au creux des mains. Frottez délicatement vos paumes l’une contre l’autre pendant 3 secondes pour tiédir les précieux actifs botaniques.'
    },
    {
      step: '03',
      title: 'Lisser',
      subtitle: 'La gestuelle sensorielle',
      desc: 'Appliquez par effleurages amples et ascendants : du menton vers les tempes, du nez vers les oreilles, puis du bas du cou vers la mâchoire pour un effet tenseur immédiat.'
    },
    {
      step: '04',
      title: 'Sceller',
      subtitle: 'Le bouclier hydrique',
      desc: 'Attendez 30 secondes d’absorption complète, puis appliquez votre soin habituel ou crème de nuit pour sceller les nutriments au cœur de la barrière cutanée.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F5EFE6] border-y border-[#DECDB5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#7A7165] mb-2">
            <span>Le Rituel Quotidien</span>
            <span aria-hidden="true">·</span>
            <span>Gestuelle Sensorielle</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1F1D1A]" style={{ textWrap: 'balance' }}>
            Une gestuelle professionnelle de salon, chez vous en 60 secondes.
          </h2>
          <p className="text-sm text-[#5C554E] mt-3 leading-relaxed">
            Pour décupler les effets tenseurs du Bakuchiol et relancer la micro-circulation lymphatique, suivez les 4 temps de notre protocole cabine.
          </p>
        </div>

        {/* 4 Steps Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F2] p-6 border border-[#DECDB5] flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-[#8C6D3E] tracking-widest font-semibold block">
                  ÉTAPE {s.step}
                </span>
                <h3 className="font-serif text-2xl text-[#1F1D1A] mt-2">
                  {s.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#73695D] font-medium mt-0.5">
                  {s.subtitle}
                </p>
                <p className="text-xs text-[#5C554E] mt-4 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8DFC8] flex items-center justify-between text-[11px] text-[#7A7165]">
                <span>Matin & Soir</span>
                <span>~15 secondes</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
