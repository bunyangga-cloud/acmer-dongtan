'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Train, TreePine, GraduationCap, Building, Maximize2, X, Eye } from 'lucide-react';

export default function LocationSection() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const locationFeatures = [
    {
      icon: Train,
      tag: "TRAFFIC",
      title: "쾌속 광역 교통망",
      desc: "SRT 및 GTX-A 연계로 서울 쾌속 접근, 수도권 주요 도심을 빠르게 잇는 교통의 중심"
    },
    {
      icon: TreePine,
      tag: "NATURE",
      title: "청정 힐링 자연환경",
      desc: "단지 인근 대형 공원과 쾌적한 숲세권 라이프, 매일 누리는 파노라마 자연 뷰"
    },
    {
      icon: GraduationCap,
      tag: "EDUCATION",
      title: "우수한 명품 학군",
      desc: "도보 거리 내 안전한 초·중·고교 학군 및 동탄 명문 학원가 인접 교육 환경"
    },
    {
      icon: Building,
      tag: "INFRA",
      title: "풍부한 중심 인프라",
      desc: "대형 쇼핑몰, 문화시설, 의료기관 등 삶의 품격을 높여주는 완성된 도심 생활권"
    }
  ];

  return (
    <section id="location" className="py-24 relative bg-navy-950 text-white overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-gold-400 font-serif text-sm font-semibold tracking-widest uppercase">
            LOCATION PREMIUM
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
            모든 가치가 집약된 <span className="gold-gradient-text">동탄 최중심 입지</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            교통, 자연, 교육, 생활 인프라까지 미래 가치가 집중되는 아크메르 동탄의 입지 프리미엄을 확인하세요.
          </p>
        </div>

        {/* 1. White Background Clean Compact Image Card (Crisp & High Clarity) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative group rounded-3xl overflow-hidden border-2 border-gold-500/40 shadow-2xl bg-white p-3 sm:p-5 mb-12"
        >
          {/* Shorter Height Container with Object-contain Crisp White Background */}
          <div
            className="relative w-full h-[280px] sm:h-[380px] md:h-[440px] flex items-center justify-center cursor-pointer overflow-hidden rounded-2xl bg-white"
            onClick={() => setIsLightboxOpen(true)}
          >
            <Image
              src="/images/location.png?v=3"
              alt="아크메르 동탄 입지환경 광역 지도"
              fill
              unoptimized
              priority
              className="object-contain object-center group-hover:scale-102 transition-transform duration-500 filter brightness-100 contrast-105"
            />

            {/* Top Right Zoom Icon on White Card */}
            <div className="absolute top-4 right-4 p-3 rounded-full bg-navy-950/80 border border-gold-500/40 text-gold-400 shadow-lg group-hover:scale-110 transition-transform z-20">
              <Maximize2 className="w-5 h-5" />
            </div>

            {/* Bottom Floating Info Bar */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 md:p-4 rounded-2xl bg-navy-950/90 backdrop-blur-md border border-gold-500/30 text-white z-20 shadow-xl">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gold-500/20 border border-gold-400 flex items-center justify-center text-gold-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm sm:text-base text-white">
                    동탄 신도시 입지 프리미엄 광역 지도
                  </h3>
                  <p className="text-xs text-slate-300">
                    지도 이미지 클릭 시 100% 원본 고해상도로 크게 보실 수 있습니다.
                  </p>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLightboxOpen(true);
                }}
                className="self-start sm:self-auto flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 hover:brightness-110 transition-all text-xs font-bold shrink-0 shadow-md"
              >
                <Eye className="w-4 h-4" /> 지도 고해상도 확대보기
              </button>
            </div>
          </div>
        </motion.div>

        {/* 2. 4 Premium Feature Cards in Wide 4-column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locationFeatures.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-gold-500/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>

                <span className="text-[10px] font-mono font-semibold tracking-widest text-gold-400 uppercase">
                  {item.tag}
                </span>

                <h4 className="text-lg font-bold font-serif text-white mt-1 mb-2 group-hover:text-gold-300 transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal for Location Map (Pure White High-Contrast Lightbox) */}
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
              className="relative max-w-6xl w-full max-h-[90vh] aspect-[16/9] z-10 rounded-2xl overflow-hidden border-2 border-gold-500/50 shadow-2xl bg-white flex items-center justify-center p-2"
            >
              <Image
                src="/images/location.png?v=3"
                alt="아크메르 동탄 입지 지도 원본 고해상도"
                fill
                unoptimized
                className="object-contain"
              />
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 p-3 rounded-full bg-navy-950/80 text-white hover:text-gold-400 border border-gold-500/40 transition-colors z-30 shadow-lg"
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
