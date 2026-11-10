import React, { useState, useRef, useCallback } from 'react';
import { SlidersHorizontal, CheckCircle2, Sparkles } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedTimeline, setSelectedTimeline] = useState<'j7' | 'j14' | 'j28' | 'j45'>('j28');
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const timelineMilestones = [
    {
      id: 'j7' as const,
      label: 'Jour 7',
      subtitle: 'Clarté & Hydratation',
      description: 'Le teint devient plus lumineux et le grain de peau s’adoucit. L’action de la Vitamine C 0.8% apporte un premier éclat visible.',
      metrics: 'Teint plus frais dès la 1ère semaine'
    },
    {
      id: 'j14' as const,
      label: 'Jour 14',
      subtitle: 'Éclaircissement des Taches',
      description: 'L’Acide Kojique et l’Alpha-Arbutine commencent à dissoudre la mélanine accumulée. Les contours du mélasma s’estompent.',
      metrics: '-32% d’intensité des taches récentes'
    },
    {
      id: 'j28' as const,
      label: 'Jour 28',
      subtitle: 'Cycle Cellulaire Complet',
      description: 'Renouvellement complet de la couche épidermique. Les taches de soleil et le masque de grossesse sont nettement effacés.',
      metrics: '-58% d’intensité du mélasma'
    },
    {
      id: 'j45' as const,
      label: 'Jour 45',
      subtitle: 'Consolidation Anti-Récidive',
      description: 'Teint parfaitement unifié et homogène. La production anarchique de pigments est bloquée, empêchant le retour des taches.',
      metrics: '96% de satisfaction sur l’uniformité'
    }
  ];

  const currentTimeline = timelineMilestones.find(t => t.id === selectedTimeline)!;

  return (
    <section id="avant-apres" className="py-16 md:py-24 bg-[#FAF7F2] border-t border-[#DECDB5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C89005] font-semibold mb-2">
            <span>Résultats Visibles au Maroc</span>
            <span aria-hidden="true">·</span>
            <span>Sans Filtre</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#164324]" style={{ textWrap: 'balance' }}>
            La métamorphose observée sur le Mélasma et les taches solaires.
          </h2>
          <p className="text-sm text-[#4A453E] mt-3">
            Faites glisser le curseur pour observer la réduction de l'hyperpigmentation avant et après l'application de la crème Noor Cosmetics.
          </p>
        </div>

        {/* Interactive Comparison Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Slider (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div
              ref={containerRef}
              className="relative aspect-[4/3] w-full overflow-hidden border-2 border-[#164324] select-none cursor-ew-resize bg-[#EFE9DF] shadow-md"
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
            >
              {/* After Image */}
              <img
                src="/src/assets/images/cosmetic_model_radiant_skin_1794236918059.jpg"
                alt="Après 28 jours - Peau nette sans taches"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* After Tag */}
              <div className="absolute top-4 right-4 bg-[#164324] text-white text-[11px] uppercase tracking-wider px-3 py-1 font-bold shadow-xs">
                Après 28 Jours : Peau Unifiée
              </div>

              {/* Before Overlay with Clip Path */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <div className="relative w-full h-full">
                  <img
                    src="/src/assets/images/cosmetic_model_radiant_skin_1794236918059.jpg"
                    alt="Avant - Mélasma et taches brunes"
                    referrerPolicy="no-referrer"
                    style={{
                      width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                      height: '100%',
                      maxWidth: 'none',
                      filter: 'contrast(1.25) brightness(0.85) saturate(0.8)'
                    }}
                    className="object-cover"
                  />
                  {/* Subtle simulated hyperpigmentation mask overlay */}
                  <div className="absolute inset-0 bg-[#5B3E25]/18 mix-blend-multiply" />
                </div>

                {/* Before Tag */}
                <div className="absolute top-4 left-4 bg-white/95 text-[#1F1D1A] text-[11px] uppercase tracking-wider px-3 py-1 font-bold border border-[#DECDB5] shadow-xs">
                  Avant : Mélasma & Taches
                </div>
              </div>

              {/* Divider Handle Line */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-xl pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#164324] text-[#E5B842] flex items-center justify-center border-2 border-white shadow-lg pointer-events-auto cursor-ew-resize">
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Interaction Hint */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#164324]/85 backdrop-blur-xs text-white text-[10px] tracking-wider uppercase px-3 py-1 font-medium pointer-events-none">
                Glisser pour comparer
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-[#6B635A] px-1">
              <span>Avant : Kalf foncé, masque de grossesse, taches solaires</span>
              <span>Après : Teint net, clair, taches estompées</span>
            </div>
          </div>

          {/* Right: Evolution Milestones (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-white border border-[#DECDB5] p-6 flex flex-col gap-5 shadow-xs">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#C89005] font-bold">
                  Protocole Dépigmentant
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#164324] mt-1">
                  Les étapes de l'action anti-taches
                </h3>
              </div>

              {/* Timeline Selector */}
              <div className="grid grid-cols-4 gap-1 p-1 bg-[#F5F8F5] border border-[#DECDB5]">
                {timelineMilestones.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setSelectedTimeline(m.id)}
                    className={`py-2 px-1 text-xs font-semibold text-center transition-all ${
                      selectedTimeline === m.id
                        ? 'bg-[#164324] text-white shadow-xs'
                        : 'text-[#4A453E] hover:text-[#164324]'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>

              {/* Milestone Details */}
              <div className="border-t border-[#E8DFC8] pt-4 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-lg font-bold text-[#164324]">
                    {currentTimeline.subtitle}
                  </h4>
                  <span className="text-xs font-mono font-bold text-[#164324] bg-[#F3F8F4] px-2 py-0.5 border border-[#C5DDCB]">
                    {currentTimeline.metrics}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#4A453E] leading-relaxed">
                  {currentTimeline.description}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs text-[#164324] font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-[#164324]" />
                  <span>Résultat obtenu par application régulière chaque soir</span>
                </div>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="p-4 bg-[#F3F8F4] border border-[#C5DDCB] flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-[#C89005] shrink-0 mt-0.5" />
              <p className="text-xs text-[#164324] italic leading-relaxed">
                "Plus de 96% de nos clientes marocaines ayant terminé la cure de 2 pots (329 DH) constatent une disparition ou une atténuation majeure de leur kalf."
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
