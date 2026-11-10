import React, { useState } from 'react';
import { Star, CheckCircle, Plus, X, MapPin } from 'lucide-react';
import { Review } from '../types';
import { MOROCCAN_REVIEWS } from '../data/productData';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(MOROCCAN_REVIEWS);
  const [activeFilter, setActiveFilter] = useState<'all' | 'melasma' | 'soleil' | 'acne' | 'teint'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // New review form
  const [newAuthor, setNewAuthor] = useState('');
  const [newCity, setNewCity] = useState('Casablanca');
  const [newRating, setNewRating] = useState(5);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const filteredReviews = activeFilter === 'all'
    ? reviews
    : reviews.filter((r) => r.tag === activeFilter);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newContent.trim()) return;

    const newRev: Review = {
      id: `rev-ma-${Date.now()}`,
      author: newAuthor.trim(),
      city: newCity,
      age: '30-45 ans',
      skinConcern: 'Taches brunes & Mélasma',
      rating: newRating,
      date: 'À l’instant',
      title: newTitle.trim() || 'Produit très efficace !',
      content: newContent.trim(),
      verified: true,
      tag: (activeFilter === 'all' ? 'melasma' : activeFilter) as any,
    };

    setReviews([newRev, ...reviews]);
    setIsModalOpen(false);
    setNewAuthor('');
    setNewTitle('');
    setNewContent('');
  };

  return (
    <section id="avis" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-[#DECDB5] pb-8">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C89005] font-semibold mb-2">
            <span>Témoignages Clientes au Maroc</span>
            <span aria-hidden="true">·</span>
            <span>Achats Vérifiés</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#164324]">
            Les avis de nos clientes au Maroc
          </h2>
          <p className="text-sm text-[#4A453E] mt-2">
            Découvrez les retours d'expérience de femmes de Casablanca, Rabat, Marrakech, Tanger et Fès.
          </p>
        </div>

        {/* Global Score Summary Block */}
        <div className="flex items-center gap-6 bg-white p-4 sm:p-5 border border-[#DECDB5] shadow-xs shrink-0">
          <div className="text-center">
            <span className="font-serif text-4xl sm:text-5xl font-bold text-[#164324] tabular-nums block">
              4.9
            </span>
            <div className="flex items-center gap-0.5 text-[#C89005] mt-1 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
          </div>
          <div className="border-l border-[#DECDB5] pl-6 text-xs text-[#5C554E] space-y-1">
            <p className="font-bold text-[#1F1D1A]">98% d'avis positifs</p>
            <p>Plus de 2 840 commandes livrées</p>
            <p className="text-[11px] text-[#164324] font-medium">Livrées partout au Maroc</p>
          </div>
        </div>
      </div>

      {/* Filter Tabs & "Write a Review" button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F5F8F5] border border-[#DECDB5]">
          {[
            { id: 'all', label: 'Tous les avis (Maroc)' },
            { id: 'melasma', label: 'Mélasma (الكلف)' },
            { id: 'soleil', label: 'Taches de Soleil' },
            { id: 'acne', label: 'Traces d’Acné' },
            { id: 'teint', label: 'Éclat & Teint' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap ${
                activeFilter === tab.id
                  ? 'bg-[#164324] text-white shadow-xs'
                  : 'text-[#4A453E] hover:text-[#164324]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 border border-[#164324] text-[#164324] hover:bg-[#164324] hover:text-white text-xs uppercase tracking-wider font-bold transition-colors shrink-0"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Partager votre expérience</span>
        </button>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredReviews.map((rev) => (
          <div
            key={rev.id}
            className="p-6 bg-white border border-[#DECDB5] flex flex-col justify-between shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-0.5 text-[#C89005]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-[#8F8578] font-mono">
                  {rev.date}
                </span>
              </div>

              <h4 className="font-serif text-lg text-[#164324] font-bold mb-2">
                "{rev.title}"
              </h4>

              <p className="text-xs sm:text-sm text-[#4A453E] leading-relaxed">
                {rev.content}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F0E8DC] flex items-center justify-between text-xs">
              <div>
                <p className="font-bold text-[#1F1D1A] flex items-center gap-1.5">
                  <span>{rev.author}</span>
                  <span className="text-[11px] text-[#164324] inline-flex items-center gap-0.5 font-semibold">
                    <CheckCircle className="w-3 h-3" />
                    Achat vérifié
                  </span>
                </p>
                <p className="text-[11px] text-[#6B635A] flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-[#C89005]" />
                  <span>{rev.city} · {rev.skinConcern}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Write a review modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF7F2] max-w-lg w-full p-6 sm:p-8 border border-[#DECDB5] shadow-2xl animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-[#DECDB5] pb-4 mb-6">
              <h3 className="font-serif text-2xl font-bold text-[#164324]">
                Votre avis sur Noor Cosmetics
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full border border-[#D8CEBE] flex items-center justify-center text-[#5C554E]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#3D3731] mb-1">
                  Note attribuée
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewRating(star)}
                      className="p-1 text-[#C89005]"
                    >
                      <Star className={`w-5 h-5 ${newRating >= star ? 'fill-current' : 'text-slate-300'}`} />
                    </button>
                  ))}
                  <span className="text-xs text-[#7A7165] ml-2 font-mono">
                    {newRating}/5 étoiles
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#3D3731] mb-1">
                  Votre Prénom & Nom (ou initiale)
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Fatima Z."
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#DECDB5] focus:outline-none focus:border-[#164324]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#3D3731] mb-1">
                  Votre Ville
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Casablanca, Rabat, Marrakech..."
                  value={newCity}
                  onChange={(e) => setNewCity(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#DECDB5] focus:outline-none focus:border-[#164324]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#3D3731] mb-1">
                  Titre de votre avis
                </label>
                <input
                  type="text"
                  placeholder="Ex: Mon kalf a disparu en 3 semaines !"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#DECDB5] focus:outline-none focus:border-[#164324]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#3D3731] mb-1">
                  Votre retour d'expérience
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Décrivez comment la crème a agi sur vos taches ou votre mélasma..."
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#DECDB5] focus:outline-none focus:border-[#164324]"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-[#DECDB5]">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs uppercase tracking-wider text-[#5C554E]"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#164324] text-white text-xs uppercase tracking-wider font-bold hover:bg-[#1E5631] transition-colors"
                >
                  Publier l'avis
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
