'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Eye, CheckCircle2, Sparkles } from 'lucide-react';

export default function BirdseyeSection() {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const slides = [
    {
      id: 0,
      src: '/images/dongtan.png',
      title: '아크메르 동탄 - 시그니처 랜드마크 뷰',
      subtitle: '동탄 스카이라인을 압도하는 주거 타워의 웅장한 입면 특화 설계',
      tag: 'SIGNATURE TOWER VIEW',
    },
    {
      id: 1,
      src: '/images/dongtan2.png',
      title: '아크메르 동탄 - 반송역 초역세권 프리미엄 뷰',
      subtitle: '동탄인덕원선 반송역 인접 도보 역세권 주거 중심지',
      tag: 'STATION & PARK VIEW',
    },
  ];

  // 5.5초 간격으로 부드럽게 자동 순환 (Auto-Carousel)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[activeSlide];

  return (
    <section id="birdseye" className="py-24 relative bg-slate-50 text-slate-900 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <span className="text-amber-700 font-serif text-sm font-bold tracking-widest uppercase">
            BIRD'S EYE VIEW & ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            아크메르 동탄 <span className="gold-gradient-text">단지 조감도</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            웅장함과 세련됨이 교차하는 미학적 건축 설계
          </p>
        </div>

        {/* 100% Fit Whole Image Container (No Clipping / Original Clean Render) */}
        <div className="relative group rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-white p-2 md:p-3.5">
          <div
            className="relative w-full h-[380px] sm:h-[480px] md:h-[580px] lg:h-[640px] flex items-center justify-center cursor-pointer overflow-hidden rounded-2xl bg-slate-100"
            onClick={() => setIsLightboxOpen(true)}
          >
            {/* Auto Crossfade Slider Images */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <Image
                  src={currentSlide.src}
                  alt={currentSlide.title}
                  fill
                  priority
                  className="object-contain object-center filter brightness-100 group-hover:brightness-105 transition-all duration-700"
                />
              </motion.div>
            </AnimatePresence>

            {/* Top Right Zoom Button */}
            <div className="absolute top-4 right-4 p-3 rounded-full bg-white/90 border border-slate-200 text-amber-700 shadow-md group-hover:scale-110 transition-transform z-20">
              <Maximize2 className="w-5 h-5" />
            </div>

            {/* Bottom Floating Info Bar */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 md:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg z-20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center font-serif font-bold text-xs shrink-0 shadow-sm">
                  0{activeSlide + 1}
                </div>
                <div>
                  <div className="flex items-center gap-2 text-amber-700 text-[10px] font-bold uppercase">
                    <Sparkles className="w-3 h-3" /> {currentSlide.tag}
                  </div>
                  <h4 className="text-sm md:text-base font-serif font-bold text-slate-900">
                    {currentSlide.title}
                  </h4>
                </div>
              </div>

              {/* Slide Indicator Dots */}
              <div className="flex items-center gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveSlide(idx);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      activeSlide === idx ? 'w-6 bg-amber-500' : 'w-2 bg-slate-300'
                    }`}
                  />
                ))}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLightboxOpen(true);
                  }}
                  className="ml-2 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-300 text-amber-800 hover:bg-amber-100 transition-colors text-xs font-bold"
                >
                  <Eye className="w-3.5 h-3.5" /> 확대보기
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Key Architectural Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 text-base">랜드마크 주거 타워</h4>
                <p className="text-xs text-slate-600 mt-1 font-normal">
                  탁 트인 조망권과 채광을 극대화한 특화 동배치 설계
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 text-base">친환경 조경 에코 단지</h4>
                <p className="text-xs text-slate-600 mt-1 font-normal">
                  단지 중앙을 가로지르는 산책로와 녹지 정원 조성
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 text-base">반송역 초역세권 프리미엄</h4>
                <p className="text-xs text-slate-600 mt-1 font-normal">
                  동탄인덕원선 반송역 인접 도보 역세권 주거 중심지
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLightboxOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[90vh] aspect-[16/9] z-10 rounded-2xl overflow-hidden border border-amber-400/50 shadow-2xl bg-white flex items-center justify-center"
            >
              <Image
                src={currentSlide.src}
                alt={currentSlide.title}
                fill
                className="object-contain"
              />
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 p-3 rounded-full bg-slate-900/80 text-white hover:text-amber-400 border border-slate-700 transition-colors z-30"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
