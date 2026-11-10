
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
import WhatsAppButton from './components/WhatsAppButton';
import { ProductPack } from './types';
import { PRODUCT_PACKS } from './data/productData';

export default function App() {
  const [selectedPack, setSelectedPack] = useState<ProductPack>(PRODUCT_PACKS[1]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FAF7F2] text-[#1F1D1A]">
      <Navbar
        onScrollToOrder={() => scrollToSection('commander')}
        onScrollToSection={scrollToSection}
      />

      <main className="flex-1">
        <HeroProduct
          selectedPack={selectedPack}
          onSelectPack={setSelectedPack}
          onScrollToOrder={() => scrollToSection('commander')}
          onScrollToReviews={() => scrollToSection('avis')}
        />

        <MetricsProof />

        <IngredientsSection />

        <BeforeAfterSlider />

        <CodOrderSection
          selectedPack={selectedPack}
          onSelectPack={setSelectedPack}
        />

        <ReviewsSection />

        <FaqSection />
      </main>

      <Footer />

      <WhatsAppButton />

      <StickyMobileBar
        price={PRODUCT_PACKS[0].price}
        onQuickOrder={() => scrollToSection('commander')}
      />
    </div>
  );
}
