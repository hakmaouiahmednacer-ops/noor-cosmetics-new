 	
import React from 'react';
import noorAvantApres from '../assets/images/noor-avant-apres.png';

export const BeforeAfterSlider: React.FC = () => {
  return (
    <section
      id="avant-apres"
      className="py-16 md:py-24 bg-[#FAF7F2] border-t border-[#DECDB5]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs uppercase tracking-[0.2em] text-[#C89005] font-semibold mb-3">
            Noor Cosmetics
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#164324]">
            Découvrez notre visuel Avant / Après
          </h2>

          <p className="text-sm sm:text-base text-[#4A453E] mt-4 leading-relaxed">
            Découvrez notre présentation du soin anti-taches et de la crème
            Noor Cosmetics.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-2 sm:p-4 border border-[#DECDB5] shadow-lg">
          <img
            src={noorAvantApres}
            alt="Présentation Noor Cosmetics : comparaison avant et après"
            className="block w-full h-auto"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
};

export default BeforeAfterSlider;
