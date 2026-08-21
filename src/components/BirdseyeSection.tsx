'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Eye, CheckCircle2, Sparkles, Layers } from 'lucide-react';

export default function BirdseyeSection() {
  const [activeTab, setActiveTab] = useState<'view1' | 'view2'>('view1');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const galleryData = {
    view1: {
      src: '/images/dongtan.png',
      title: '아크메르 동탄 - 시그니처 랜드마크 뷰',
      subtitle: '동탄 스카이라인을 압도하는 주거 타워의 웅장한 입면 특화 설계',
      tag: 'SIGNATURE TOWER VIEW',
    },
    view2: {
      src: '/images/dongtan2.png',
      title: '동탄을 이끄는 새로운 역사의 자리 - 반송역 프리미엄 뷰',
      subtitle: '동탄인덕원선 반송역 초역세권과 대자연의 쾌적함을 담은 명품 단지',
      tag: 'STATION & PARK VIEW',
    },
  };

  const currentView = galleryData[activeTab];

  return (
    <section id="birdseye" className="py-24 relative bg-slate-950 text-white border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3">
            <span className="text-gold-400 font-serif text-sm font-semibold tracking-widest uppercase">
              BIRD'S EYE VIEW & ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              아크메르 동탄 <span className="gold-gradient-text">단지 조감도 갤러리</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              웅장함과 세련됨이 교차하는 미학적 건축 설계. 동탄의 스카이라인을 새롭게 바꿀 명품 조감도를 감상해보세요.
            </p>
          </div>

          {/* Tab Selector Buttons */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-navy-900 border border-gold-500/30">
            <button
              onClick={() => setActiveTab('view1')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'view1'
                  ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 shadow-lg shadow-gold-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>조감도 뷰 1</span>
            </button>
            <button
              onClick={() => setActiveTab('view2')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'view2'
                  ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 shadow-lg shadow-gold-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>조감도 뷰 2 (반송역)</span>
            </button>
          </div>
        </div>

        {/* Main Interactive Birdseye Image Card */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative group rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl bg-navy-900"
        >
          <div className="relative aspect-[16/9] w-full cursor-pointer" onClick={() => setIsLightboxOpen(true)}>
            <Image
              src={currentView.src}
              alt={currentView.title}
              fill
              className="object-cover object-center group-hover:scale-103 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
            />
            {/* Hover Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

            {/* Top Right Zoom Icon */}
            <div className="absolute top-6 right-6 p-3 rounded-full bg-navy-950/80 border border-gold-500/40 text-gold-400 group-hover:scale-110 transition-transform">
              <Maximize2 className="w-5 h-5" />
            </div>

            {/* Floating Title Bar */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="bg-navy-950/85 backdrop-blur-md p-4 md:p-5 rounded-2xl border border-gold-500/30 max-w-2xl">
                <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase mb-1">
                  <Sparkles className="w-3.5 h-3.5" /> {currentView.tag}
                </div>
                <h3 className="text-lg md:text-2xl font-serif font-bold text-white">
                  {currentView.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-300 mt-1">
                  {currentView.subtitle}
                </p>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLightboxOpen(true);
                }}
                className="self-start md:self-auto flex items-center gap-2 px-5 py-3 rounded-xl bg-gold-500/20 border border-gold-400 text-gold-300 hover:text-white hover:bg-gold-500 transition-colors text-xs font-semibold shrink-0"
              >
                <Eye className="w-4 h-4" /> 고해상도 확대보기
              </button>
            </div>
          </div>
        </motion.div>

        {/* 3 Key Architectural Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
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
              className="relative max-w-6xl w-full max-h-[90vh] aspect-[16/9] z-10 rounded-2xl overflow-hidden border border-gold-500/40 shadow-2xl"
            >
              <Image
                src={currentView.src}
                alt={currentView.title}
                fill
                className="object-contain"
              />
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 p-3 rounded-full bg-black/70 text-white hover:text-gold-400 border border-slate-700 transition-colors"
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
