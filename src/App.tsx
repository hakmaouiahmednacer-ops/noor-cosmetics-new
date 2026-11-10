/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroProduct } from './components/HeroProduct';
import { MetricsProof } from './components/MetricsProof';
import { IngredientsSection } from './components/IngredientsSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { CodOrderSection } from './components/CodOrderSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { ProductPack } from './types';
import { PRODUCT_PACKS } from './data/productData';

export default function App() {
  const [selectedPack, setSelectedPack] = useState<ProductPack>(PRODUCT_PACKS[1]); // Default to 2 pots / 329 DH

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackAndScroll = (pack: ProductPack) => {
    setSelectedPack(pack);
    scrollToSection('commander');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FAF7F2] text-[#1F1D1A]">
      {/* Navigation Top Bar */}
      <Navbar
        onScrollToOrder={() => scrollToSection('commander')}
        onScrollToSection={scrollToSection}
      />

      <main className="flex-1">
        {/* Hero Section with Official Noor Cosmetics Mockup & Prices in DH */}
        <HeroProduct
          selectedPack={selectedPack}
          onSelectPack={setSelectedPack}
          onScrollToOrder={() => scrollToSection('commander')}
          onScrollToReviews={() => scrollToSection('avis')}
        />

        {/* Clinical Results on Melasma in Morocco */}
        <MetricsProof />

        {/* The 3 Core Actives: Kojic Acid, Alpha-Arbutin & Vitamin C 0.8% */}
        <IngredientsSection />

        {/* Interactive Before & After Slider */}
        <BeforeAfterSlider />

        {/* 1-Click Cash-on-Delivery Order Form (الدفع عند الاستلام) */}
        <CodOrderSection
          selectedPack={selectedPack}
          onSelectPack={setSelectedPack}
        />

        {/* Moroccan Customer Reviews & Testimonials */}
        <ReviewsSection />

        {/* FAQs regarding Delivery & Melasma */}
        <FaqSection />
      </main>

      {/* Brand Footer */}
      <Footer />

      {/* Mobile Sticky Buy Bar (Capped under 15% viewport height) */}
      <StickyMobileBar
        price={PRODUCT_PACKS[0].price}
        onQuickOrder={() => scrollToSection('commander')}
      />
    </div>
  );
}
