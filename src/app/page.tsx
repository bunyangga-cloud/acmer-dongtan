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
import FadeTransitionOverlay from '@/components/FadeTransitionOverlay';
import IntroCurtain from '@/components/IntroCurtain';

export default function Home() {
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // 살며시 페이드 인/아웃 브릿지 이동 핸들러
  const handleNavigateSection = (targetId: string) => {
    setIsTransitioning(true);

    setTimeout(() => {
      if (targetId === 'top') {
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      } else {
        const el = document.getElementById(targetId);
        if (el) {
          const yOffset = -70; // 헤더 높이 보정
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'instant' as ScrollBehavior });
        }
      }

      // 화면 이동 후 페이드 인 효과로 원래 상태 복구
      setTimeout(() => {
        setIsTransitioning(false);
      }, 150);
    }, 280);
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-gold-400 selection:text-slate-950 relative">
      {/* Grand Split Curtain Intro Animation */}
      <IntroCurtain />

      {/* Smooth Fade Transition Overlay */}
      <FadeTransitionOverlay isTransitioning={isTransitioning} />

      {/* Navigation Bar */}
      <Header
        onOpenPhoneModal={() => setIsPhoneModalOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* 1. Main Hero Visual with Dynamic Pan & Zoom + Light Flares */}
      <Hero onNavigateSection={handleNavigateSection} />

      {/* 2. Overview & Brand Section (Includes 95 & 99 Block Specs) */}
      <OverviewSection />

      {/* 3. Bird's Eye View Gallery (dongtan.png & dongtan2.png Auto-Carousel) */}
      <BirdseyeSection />

      {/* 4. Location Environment Section (locations.png Wide 1-Column) */}
      <LocationSection />

      {/* 5. Q&A FAQ 5 Items */}
      <FAQSection />

      {/* 6. Interest Registration Form (y3974@naver.com Email Delivery) */}
      <RegisterSection />

      {/* Footer */}
      <Footer onOpenPhoneModal={() => setIsPhoneModalOpen(true)} />

      {/* Hidden Phone Number Modal */}
      <PhoneModal
        isOpen={isPhoneModalOpen}
        onClose={() => setIsPhoneModalOpen(false)}
        onNavigateRegister={() => handleNavigateSection('register')}
      />
    </main>
  );
}
