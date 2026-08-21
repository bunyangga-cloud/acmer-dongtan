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

        {/* 1. Full-width Wide Location Map Image Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative group rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl bg-navy-900 mb-12"
        >
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full cursor-pointer" onClick={() => setIsLightboxOpen(true)}>
            <Image
              src="/images/locations.png"
              alt="아크메르 동탄 입지환경 광역 지도"
              fill
              className="object-cover object-center group-hover:scale-102 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
            />
            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

            {/* Top Right Zoom Icon */}
            <div className="absolute top-6 right-6 p-3 rounded-full bg-navy-950/80 border border-gold-500/40 text-gold-400 group-hover:scale-110 transition-transform">
              <Maximize2 className="w-5 h-5" />
            </div>

            {/* Bottom Floating Bar */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 md:p-5 rounded-2xl bg-navy-950/85 backdrop-blur-md border border-gold-500/30">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gold-400 shrink-0" />
                <div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-white">
                    동탄 신도시 입지 프리미엄 광역도
                  </h3>
                  <p className="text-xs text-slate-300">
                    클릭 시 고해상도 입지 지도를 확대하여 보실 수 있습니다.
                  </p>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLightboxOpen(true);
                }}
                className="self-start sm:self-auto flex items-center gap-2 px-4 py-2 rounded-xl bg-gold-500/20 border border-gold-400 text-gold-300 hover:text-white hover:bg-gold-500 transition-colors text-xs font-semibold"
              >
                <Eye className="w-4 h-4" /> 지도 확대보기
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
                className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-gold-500/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center shrink-0 text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-gold-400/90 font-bold uppercase block mb-1">
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-bold font-serif text-white group-hover:text-gold-300 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
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
                src="/images/locations.png"
                alt="아크메르 동탄 입지환경 고해상도 지도"
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
