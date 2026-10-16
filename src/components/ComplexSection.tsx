'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, Map, Grid, Maximize2, X, Info } from 'lucide-react';

export default function ComplexSection() {
  const [activeBlock, setActiveBlock] = useState<'95' | '99'>('95');
  const [activeView, setActiveView] = useState<'layout' | 'dongho'>('layout');
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  const images = {
    '95': {
      layout: '/images/95/complex95.webp',
      dongho: '/images/95/dh95.webp',
      title: '95번지 (총 812세대 · 최고 49층)',
    },
    '99': {
      layout: '/images/99/complex99.webp',
      dongho: '/images/99/dh99.webp',
      title: '99번지 (총 996세대 · 최고 48층)',
    },
  };

  const currentImage = images[activeBlock][activeView];

  return (
    <section id="complex" className="py-20 sm:py-28 relative bg-[#070d1e] text-white overflow-hidden border-t border-slate-800">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-gold-500/10 rounded-full filter blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/50 text-gold-300 text-xs font-bold tracking-wider">
            <Building className="w-4 h-4 text-gold-400" /> COMPLEX MASTER PLAN
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
            아크메르 동탄 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-gold-200 to-amber-400">단지배치도 & 동호수배치도</span>
          </h2>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />

          <p className="text-slate-300 text-sm sm:text-base font-normal break-keep">
            최고 49층 스카이라인을 압도하는 주동 배치와 채광·조망을 극대화한 단지 및 동호수 배치를 확인하세요.
          </p>
        </div>

        {/* 1. 단지(95 vs 99) 및 보기(단지배치도 vs 동호수배치도) 듀얼 컨트롤러 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto">
          {/* 블록 선택 */}
          <div className="inline-flex p-1.5 rounded-2xl bg-navy-950 border border-slate-800 shadow-md">
            <button
              onClick={() => setActiveBlock('95')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeBlock === '95'
                  ? 'bg-gradient-to-r from-amber-500 via-gold-400 to-amber-600 text-navy-950 shadow-md scale-102'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>95번지 (812세대)</span>
            </button>
            <button
              onClick={() => setActiveBlock('99')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeBlock === '99'
                  ? 'bg-gradient-to-r from-amber-500 via-gold-400 to-amber-600 text-navy-950 shadow-md scale-102'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>99번지 (996세대)</span>
            </button>
          </div>

          {/* 뷰 선택 (단지배치 vs 동호수) */}
          <div className="inline-flex p-1.5 rounded-2xl bg-navy-950 border border-slate-800 shadow-md">
            <button
              onClick={() => setActiveView('layout')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeView === 'layout'
                  ? 'bg-white text-navy-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Map className="w-3.5 h-3.5" />
              <span>단지배치도</span>
            </button>
            <button
              onClick={() => setActiveView('dongho')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeView === 'dongho'
                  ? 'bg-white text-navy-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>동호수배치도</span>
            </button>
          </div>
        </div>

        {/* 2. 대형 캔버스 이미지 카드 */}
        <div className="rounded-3xl bg-white p-3 sm:p-6 shadow-2xl overflow-hidden border border-slate-200 text-slate-900">
          
          <div className="mb-4 flex flex-col sm:flex-row items-center justify-between gap-3 px-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-black bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-sm">
                {activeBlock}번지
              </span>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-slate-900">
                {images[activeBlock].title} - {activeView === 'layout' ? '단지배치도' : '동호수배치도'}
              </h3>
            </div>

            <button
              onClick={() => setZoomImage(currentImage)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-gold-400 to-amber-600 text-navy-950 hover:brightness-105 text-xs font-bold transition-all shadow-md border border-amber-300 cursor-pointer shrink-0"
            >
              <Maximize2 className="w-3.5 h-3.5 text-navy-950" />
              <span>원본 크게보기</span>
            </button>
          </div>

          <div
            onClick={() => setZoomImage(currentImage)}
            className="group relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 p-2 sm:p-4 flex items-center justify-center cursor-zoom-in"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={currentImage}
                alt={`${images[activeBlock].title} ${activeView === 'layout' ? '단지배치도' : '동호수배치도'}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-auto max-w-5xl mx-auto object-contain filter contrast-[1.02] group-hover:scale-[1.01] transition-transform duration-300"
              />
            </AnimatePresence>

            <div className="absolute bottom-4 right-4 bg-slate-900/85 backdrop-blur-md text-amber-300 text-xs px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-amber-400/30 opacity-90 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
              <span>클릭 시 원본 고해상도 확대</span>
            </div>
          </div>

          <div className="mt-4 flex items-start gap-2 text-[11px] text-slate-500 leading-relaxed px-2">
            <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <p>
              ※ 상기 단지배치도 및 동호수배치도는 소비자의 이해를 돕기 위한 것으로 실제 시공 시 다소 차이가 있을 수 있습니다.
            </p>
          </div>
        </div>

      </div>

      {/* 전체화면 확대 모달 */}
      {zoomImage && (
        <div
          onClick={() => setZoomImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out animate-fadeIn"
        >
          <button
            onClick={() => setZoomImage(null)}
            className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <img
            src={zoomImage}
            alt="단지배치도 원본 고해상도"
            className="max-h-[92vh] max-w-[94vw] object-contain rounded-xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
