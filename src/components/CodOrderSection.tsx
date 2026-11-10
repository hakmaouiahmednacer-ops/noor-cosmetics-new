import React, { useState } from 'react';
import { Truck, ShieldCheck, CheckCircle2, MessageCircle, Phone, MapPin, User, Package, Check, Sparkles } from 'lucide-react';
import { ProductPack, CodOrderDetails } from '../types';
import { PRODUCT_PACKS, MOROCCAN_CITIES, PRODUCT_IMAGE_PATH } from '../data/productData';

interface CodOrderSectionProps {
  selectedPack: ProductPack;
  onSelectPack: (pack: ProductPack) => void;
}

export const CodOrderSection: React.FC<CodOrderSectionProps> = ({
  selectedPack,
  onSelectPack,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Casablanca');
  const [customCity, setCustomCity] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !address.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generated = `NOOR-${Math.floor(10000 + Math.random() * 90000)}`;
      setOrderNumber(generated);
      setOrderConfirmed(true);
    }, 900);
  };

  const finalCity = city === 'Autre ville au Maroc' ? customCity || 'Autre ville' : city;

  return (
    <section id="commander" className="py-16 md:py-24 bg-[#F5F8F5] border-y border-[#DECDB5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#164324] text-[#FAF7F2] px-4 py-1.5 text-xs uppercase tracking-wider font-semibold mb-3">
            <span>🇲🇦 Formulaire Officiel de Commande au Maroc</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#164324]">
            Paiement à la Livraison & Livraison 100% Gratuite
          </h2>
          <p className="text-sm text-[#4A453E] mt-2 max-w-xl mx-auto">
            Remplissez simplement vos informations ci-dessous. Notre service client vous contacte par téléphone ou WhatsApp avant expédition.
          </p>
          <p className="text-xs font-semibold text-[#C89005] mt-1" dir="rtl">
            الدفع عند الاستلام — عاين منتجك وتأكد من جودته قبل الدفع
          </p>
        </div>

        {orderConfirmed ? (
          /* Confirmation Success Card */
          <div className="bg-white border-2 border-[#164324] p-8 sm:p-12 text-center shadow-xl space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-[#164324]/10 text-[#164324] rounded-full mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#C89005] font-bold block">
                Félicitations pour votre commande
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#164324] mt-1">
                Commande #{orderNumber} Confirmée !
              </h3>
              <p className="text-sm text-[#4A453E] mt-2 max-w-lg mx-auto">
                Merci <strong>{fullName}</strong>. Votre commande de <strong>{selectedPack.name}</strong> ({selectedPack.price} DH) a bien été enregistrée pour une livraison à <strong>{finalCity}</strong>.
              </p>
            </div>

            <div className="p-4 bg-[#F5F8F5] border border-[#DECDB5] max-w-md mx-auto text-left text-xs space-y-2 text-[#3D3731]">
              <div className="flex justify-between border-b border-[#E2D8C7] pb-1.5 font-semibold">
                <span>Détail :</span>
                <span className="text-[#164324] font-bold">{selectedPack.price} DH (Livraison Gratuite)</span>
              </div>
              <p>📍 <strong>Adresse :</strong> {address}, {finalCity}</p>
              <p>📞 <strong>Téléphone :</strong> {phone}</p>
              <p className="text-[#164324] font-medium">💵 <strong>Mode de règlement :</strong> Espèces au livreur après ouverture du colis</p>
              <p className="text-[#6B635A]">🚚 <strong>Délai estimé :</strong> 24h à 48h ouvrées</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a
                href={`https://wa.me/212600000000?text=Salam%20Noor%20Cosmetics%2C%20je%20viens%20de%20passer%20la%20commande%20${orderNumber}%20au%20nom%20de%20${encodeURIComponent(fullName)}%20(%C3%A0%20${encodeURIComponent(finalCity)}).`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Confirmer plus vite par WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => setOrderConfirmed(false)}
                className="px-6 py-3 border border-[#164324] text-[#164324] hover:bg-[#F5F8F5] text-xs uppercase tracking-wider font-bold"
              >
                Passer une autre commande
              </button>
            </div>
          </div>
        ) : (
          /* COD Order Form */
          <form onSubmit={handleSubmit} className="bg-white border border-[#DECDB5] p-6 sm:p-10 shadow-lg space-y-8">
            
            {/* Step 1: Pack Selection */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#164324] text-white text-xs font-bold flex items-center justify-center">1</span>
                <h3 className="font-serif text-lg font-bold text-[#164324]">
                  Choisissez votre offre promotionnelle :
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {PRODUCT_PACKS.map((pack) => {
                  const isSelected = selectedPack.id === pack.id;
                  return (
                    <button
                      key={pack.id}
                      type="button"
                      onClick={() => onSelectPack(pack)}
                      className={`relative p-4 text-left border-2 transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'border-[#164324] bg-[#F3F8F4] shadow-sm'
                          : 'border-[#E2D8C7] bg-[#FAF7F2] hover:bg-white'
                      }`}
                    >
                      {pack.badge && (
                        <span className="absolute -top-3 left-4 bg-[#C89005] text-[#1F1D1A] text-[10px] uppercase font-extrabold px-2 py-0.5 shadow-xs">
                          {pack.badge}
                        </span>
                      )}

                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-sm text-[#1F1D1A]">{pack.name}</span>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                            isSelected ? 'border-[#164324] bg-[#164324]' : 'border-[#B8AC98]'
                          }`}>
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                        </div>
                        <p className="text-[11px] text-[#6B635A]">{pack.subtitle}</p>
                      </div>

                      <div className="mt-3 pt-2 border-t border-[#DECDB5] flex items-baseline justify-between">
                        <span className="font-serif text-xl font-bold text-[#164324] tabular-nums">
                          {pack.price} DH
                        </span>
                        <span className="text-[10px] font-semibold text-[#164324]">
                          {pack.savings}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Customer Shipping Details */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-[#164324] text-white text-xs font-bold flex items-center justify-center">2</span>
                <h3 className="font-serif text-lg font-bold text-[#164324]">
                  Vos coordonnées pour la livraison :
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full name */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#3D3731] mb-1.5">
                    Nom & Prénom *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#8C6D3E] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Ex: Fatima Zahra El Idrissi"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-[#DECDB5] focus:outline-none focus:border-[#164324] focus:ring-1 focus:ring-[#164324]"
                    />
                  </div>
                </div>

                {/* WhatsApp Phone */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#3D3731] mb-1.5">
                    Numéro de Téléphone (WhatsApp) *
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs font-bold text-[#164324]">
                      <span>🇲🇦</span>
                      <span>+212</span>
                    </div>
                    <input
                      type="tel"
                      required
                      placeholder="06 XX XX XX XX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-20 pr-3 py-2.5 text-sm bg-white border border-[#DECDB5] focus:outline-none focus:border-[#164324] focus:ring-1 focus:ring-[#164324] font-mono"
                    />
                  </div>
                </div>

                {/* Moroccan City */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#3D3731] mb-1.5">
                    Ville de Livraison *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#8C6D3E] absolute left-3 top-1/2 -translate-y-1/2" />
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-[#DECDB5] focus:outline-none focus:border-[#164324] focus:ring-1 focus:ring-[#164324]"
                    >
                      {MOROCCAN_CITIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Custom City if other */}
                {city === 'Autre ville au Maroc' && (
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#3D3731] mb-1.5">
                      Précisez votre ville / commune *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Taza, Taroudant, Berkane..."
                      value={customCity}
                      onChange={(e) => setCustomCity(e.target.value)}
                      className="w-full px-3 py-2.5 text-sm bg-white border border-[#DECDB5] focus:outline-none focus:border-[#164324]"
                    />
                  </div>
                )}

                {/* Address */}
                <div className={city === 'Autre ville au Maroc' ? 'sm:col-span-2' : ''}>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#3D3731] mb-1.5">
                    Adresse complète ou quartier *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Quartier, Rue, N° de maison ou résidence"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3 py-2.5 text-sm bg-white border border-[#DECDB5] focus:outline-none focus:border-[#164324] focus:ring-1 focus:ring-[#164324]"
                  />
                </div>
              </div>

              {/* Delivery notes (optional) */}
              <div className="mt-4">
                <label className="block text-[11px] uppercase tracking-wider text-[#6B635A] mb-1">
                  Remarques pour le livreur (Optionnel)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Appelez-moi avant de passer / Livrer à mon bureau..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#DECDB5] focus:outline-none"
                />
              </div>
            </div>

            {/* Step 3: Total Recap & Confirmation Button */}
            <div className="pt-4 border-t border-[#DECDB5] space-y-4">
              <div className="p-4 bg-[#FAF7F2] border border-[#DECDB5] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#6B635A] block">Total à payer au livreur :</span>
                  <span className="font-serif text-2xl font-bold text-[#164324] tabular-nums">
                    {selectedPack.price} DH
                  </span>
                </div>
                <div className="text-right text-xs">
                  <span className="text-[#164324] font-bold block">🚚 Livraison Gratuite</span>
                  <span className="text-[11px] text-[#6B635A]">Paiement en espèces à la livraison</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#164324] hover:bg-[#1E5631] active:scale-[0.99] text-white text-sm uppercase tracking-[0.16em] font-bold flex items-center justify-center gap-2 shadow-lg transition-all disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>Enregistrement de votre commande...</span>
                ) : (
                  <>
                    <span>Confirmer Ma Commande — Paiement à la Réception</span>
                    <span className="font-serif font-normal text-base tabular-nums">
                      ({selectedPack.price} DH)
                    </span>
                  </>
                )}
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-[11px] text-center text-[#5C554E]">
                <div className="flex items-center justify-center gap-1">
                  <Check className="w-3.5 h-3.5 text-[#164324]" />
                  <span>Pas besoin de carte bancaire</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Check className="w-3.5 h-3.5 text-[#164324]" />
                  <span>Vérifiez le colis avant de payer</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Check className="w-3.5 h-3.5 text-[#164324]" />
                  <span>Service client WhatsApp 7j/7</span>
                </div>
              </div>
            </div>

          </form>
        )}

      </div>
    </section>
  );
};
