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
      hasOverlayText: false,
    },
    {
      id: 1,
      src: '/images/dongtan2.png',
      title: '반송역 초역세권 프리미엄 뷰',
      subtitle: '동탄인덕원선 반송역 인접 도보 역세권 주거 중심지',
      tag: 'STATION & PARK VIEW',
      hasOverlayText: true,
    },
  ];

  // 3초 간격으로 조감도 1과 2가 자동으로 살며시 순환(Auto-Carousel)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[activeSlide];

  return (
    <section id="birdseye" className="py-24 relative bg-slate-950 text-white border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <span className="text-gold-400 font-serif text-sm font-semibold tracking-widest uppercase">
            BIRD'S EYE VIEW & ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            아크메르 동탄 <span className="gold-gradient-text">단지 조감도</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
          <p className="text-slate-400 text-sm sm:text-base">
            웅장함과 세련됨이 교차하는 미학적 건축 설계 (조감도가 3초 간격으로 자동 순환됩니다)
          </p>
        </div>

        {/* 100% Fit Whole Image Container (No Clipping / Entirely Visible on PC) */}
        <div className="relative group rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl bg-navy-950 p-2 md:p-4">
          <div
            className="relative w-full h-[380px] sm:h-[480px] md:h-[580px] lg:h-[640px] flex items-center justify-center cursor-pointer overflow-hidden rounded-2xl bg-slate-950"
            onClick={() => setIsLightboxOpen(true)}
          >
            {/* Auto Crossfade Slider Images */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="relative w-full h-full flex items-center justify-center"
              >
                {/* Image set to object-contain so PC screen displays 100% of image without cropping */}
                <Image
                  src={currentSlide.src}
                  alt={currentSlide.title}
                  fill
                  priority
                  className="object-contain object-center filter brightness-100 group-hover:brightness-105 transition-all duration-700"
                />

                {/* Overlaid Web Typography Text Layer for Slide 2 (Replaces original image text) */}
                {currentSlide.hasOverlayText && (
                  <>
                    {/* Clean Gradient Patch to hide original static text in the upper left of dongtan2.png */}
                    <div className="absolute top-[8%] left-[2%] w-[45%] md:w-[32%] h-[45%] bg-gradient-to-br from-[#dce8f5] via-[#eaf0f8] to-[#f4f7fc]/95 backdrop-blur-[6px] rounded-2xl opacity-95 pointer-events-none shadow-sm" />

                    {/* High-quality Web Typography Overlay */}
                    <div className="absolute top-[10%] left-[4%] max-w-[88%] sm:max-w-[40%] md:max-w-[34%] z-10 text-slate-900 p-3 sm:p-5 pointer-events-none font-serif">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-snug text-slate-900 mb-3 drop-shadow-sm">
                        동탄을 이끄는<br />
                        새로운 역사이자 영원한 상징
                      </h3>
                      <div className="space-y-2 text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
                        <p>
                          대자연의 쾌적함, 교통의 우월함, 공간의 우아함까지 20년의 염원이 담긴 동탄의 그 자리에
                        </p>
                        <p className="font-medium text-slate-900">
                          삶의 모든 것을 소유하는 동탄의 새로운 상징이 될 역사적 랜드마크를 완성합니다.
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Top Right Zoom Button */}
            <div className="absolute top-4 right-4 p-3 rounded-full bg-navy-950/80 border border-gold-500/40 text-gold-400 group-hover:scale-110 transition-transform z-20">
              <Maximize2 className="w-5 h-5" />
            </div>

            {/* Bottom Floating Info Bar */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 md:p-4 rounded-2xl bg-navy-950/85 backdrop-blur-md border border-gold-500/30 z-20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold-500/20 border border-gold-400 flex items-center justify-center text-gold-400 font-serif font-bold text-xs shrink-0">
                  0{activeSlide + 1}
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gold-400 text-[10px] font-semibold uppercase">
                    <Sparkles className="w-3 h-3" /> {currentSlide.tag}
                  </div>
                  <h4 className="text-sm md:text-base font-serif font-bold text-white">
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
                      activeSlide === idx ? 'w-6 bg-gold-400' : 'w-2 bg-slate-700'
                    }`}
                  />
                ))}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLightboxOpen(true);
                  }}
                  className="ml-2 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold-500/20 border border-gold-400 text-gold-300 hover:text-white transition-colors text-xs font-medium"
                >
                  <Eye className="w-3.5 h-3.5" /> 확대보기
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Key Architectural Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="glass-card rounded-xl p-5 border border-slate-800">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white text-base">랜드마크 주거 타워</h4>
                <p className="text-xs text-slate-400 mt-1">
                  탁 트인 조망권과 채광을 극대화한 특화 동배치 설계
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-xl p-5 border border-slate-800">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white text-base">친환경 조경 에코 단지</h4>
                <p className="text-xs text-slate-400 mt-1">
                  단지 중앙을 가로지르는 산책로와 녹지 정원 조성
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-xl p-5 border border-slate-800">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white text-base">반송역 초역세권 프리미엄</h4>
                <p className="text-xs text-slate-400 mt-1">
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
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[90vh] aspect-[16/9] z-10 rounded-2xl overflow-hidden border border-gold-500/40 shadow-2xl bg-slate-950 flex items-center justify-center"
            >
              <Image
                src={currentSlide.src}
                alt={currentSlide.title}
                fill
                className="object-contain"
              />
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 p-3 rounded-full bg-black/70 text-white hover:text-gold-400 border border-slate-700 transition-colors z-30"
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
