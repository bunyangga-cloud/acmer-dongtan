'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import OverviewSection from '@/components/OverviewSection';
import BirdseyeSection from '@/components/BirdseyeSection';
import LocationSection from '@/components/LocationSection';
import FAQSection from '@/components/FAQSection';
import RegisterSection from '@/components/RegisterSection';
import PhoneModal from '@/components/PhoneModal';
import Footer from '@/components/Footer';

export default function Home() {
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);

  const scrollToRegister = () => {
    const el = document.getElementById('register');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-navy-950 text-white font-sans selection:bg-gold-500 selection:text-navy-950">
      {/* Navigation Bar */}
      <Header
        onOpenPhoneModal={() => setIsPhoneModalOpen(true)}
        onNavigateRegister={scrollToRegister}
      />

      {/* 1. Main Hero Visual */}
      <Hero onNavigateRegister={scrollToRegister} />

      {/* 2. Overview & Brand Section */}
      <OverviewSection />

      {/* 3. Bird's Eye View Gallery (dongtan.png) */}
      <BirdseyeSection />

      {/* 4. Location Environment Section (locations.png) */}
      <LocationSection />

      {/* 5. Q&A FAQ 5 Items (Placed Right Above Registration Section) */}
      <FAQSection />

      {/* 6. Interest Registration Form (Name, Phone -> y3974@naver.com) */}
      <RegisterSection />

      {/* Footer */}
      <Footer onOpenPhoneModal={() => setIsPhoneModalOpen(true)} />

      {/* Hidden Phone Number Modal (1600-0000 -> 9월 OPEN Notice) */}
      <PhoneModal
        isOpen={isPhoneModalOpen}
        onClose={() => setIsPhoneModalOpen(false)}
        onNavigateRegister={scrollToRegister}
      />
    </main>
  );
}
