'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Compass, Sparkles, Building2, MapPin, Layers, Home, Hash, Maximize, FileText } from 'lucide-react';

export default function OverviewSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSite, setActiveSite] = useState<'site95' | 'site99'>('site95');

  const highlights = [
    {
      icon: Building2,
      title: "프리미엄 랜드마크",
      desc: "동탄을 대표하는 품격 있는 외관 디자인과 압도적 상징성"
    },
    {
      icon: Compass,
      title: "탁월한 입지 프리미엄",
      desc: "광역 교통망과 우수한 교육 환경, 풍부한 생활 인프라의 중심"
    },
    {
      icon: Sparkles,
      title: "하이엔드 라이프 공간",
      desc: "혁신적인 공간 설계와 최고급 특화 마감재로 완성하는 삶의 가치"
    },
    {
      icon: ShieldCheck,
      title: "안심 시공 및 신뢰",
      desc: "검증된 시공 노하우와 압도적인 기술력이 만드는 신뢰의 가치"
    }
  ];

  const siteDetails = {
    site95: {
      name: '95번지 (M1-1-2블록)',
      location: '동탄(1) M1-1-2블록 (동탄구 반송동 95번지)',
      area: '17,725.2000㎡',
      totalArea: '233,059.8402㎡',
      types: '84C·F / 116A·B / 128A / 129B / PH184B / PF188A',
      ratio: '53.19% / 796.58%',
      households: '총 812세대',
    },
    site99: {
      name: '99번지 (M1-2-2블록)',
      location: '동탄(1) M1-2-2블록 (동탄구 반송동 99번지)',
      area: '17,675.7000㎡',
      totalArea: '233,830.3794㎡',
      types: '84A·B·C·D·E / 99A / 148E / 158D / 162C',
      ratio: '53.87% / 793.5%',
      households: '총 996세대',
    },
  };

  // 3.2초마다 순환하며 한 개씩 활성화 (0 -> 1 -> 2 -> 3 -> 0)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % highlights.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [highlights.length]);

  const currentSite = siteDetails[activeSite];

  return (
    <section id="overview" className="py-24 relative bg-white text-slate-900 overflow-hidden border-t border-slate-100">
      {/* Background Subtle Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-amber-600 font-serif text-sm font-bold tracking-widest uppercase">
            OVERVIEW & BRAND
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-slate-900">
            동탄의 새로운 자부심, <span className="gold-gradient-text">아크메르 동탄</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            자연과 도시, 주거와 문화가 어우러지는 완벽한 밸런스.<br className="hidden sm:block" />
            9월, 당신만을 위한 시그니처 랜드마크가 드디어 펼쳐집니다.
          </p>
        </div>

        {/* Feature Cards Grid (Sequential Scale & Gold Gradient Border Animation) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            const isActive = activeIndex === idx;

            return (
              <motion.div
                key={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                animate={{
                  scale: isActive ? 1.04 : 0.98,
                  y: isActive ? -6 : 0,
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={`relative rounded-2xl p-6 transition-all duration-500 cursor-pointer flex flex-col justify-between overflow-hidden ${
                  isActive
                    ? 'bg-white shadow-xl shadow-amber-500/15 border-2 border-amber-400 z-20'
                    : 'bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-slate-300 z-10'
                }`}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-md shadow-amber-500/30 scale-105'
                        : 'bg-amber-50 border border-amber-200 text-amber-700'
                    }`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3
                    className={`text-xl font-bold font-serif mb-2 transition-colors duration-300 ${
                      isActive ? 'text-amber-800' : 'text-slate-900'
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-slate-400 font-bold">
                    0{idx + 1} / 04
                  </span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 95번지 vs 99번지 상세 사업개요 탭 스펙 박스 */}
        <div className="rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-lg bg-slate-50/60 backdrop-blur-md">
          {/* Header & Block Selector Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase mb-1">
                <FileText className="w-4 h-4" /> PROJECT SPECIFICATION
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900">
                아크메르 동탄 <span className="gold-gradient-text">상세 사업개요</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                95번지(M1-1-2블록) 및 99번지(M1-2-2블록) 블록별 사업 스펙 정보
              </p>
            </div>

            {/* Block Switch Buttons */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm shrink-0">
              <button
                onClick={() => setActiveSite('site95')}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeSite === 'site95'
                    ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-white shadow-md shadow-amber-500/25 scale-102'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                95번지 (M1-1-2블록)
              </button>

              <button
                onClick={() => setActiveSite('site99')}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeSite === 'site99'
                    ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-white shadow-md shadow-amber-500/25 scale-102'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                99번지 (M1-2-2블록)
              </button>
            </div>
          </div>

          {/* Animated 6-Grid Spec Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSite}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {/* 대지위치 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2 hover:border-amber-400 transition-colors">
                <div className="flex items-center justify-between text-xs text-amber-700 font-bold">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> 대지위치
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">LOCATION</span>
                </div>
                <p className="text-base font-bold text-slate-900 font-serif">
                  {currentSite.location}
                </p>
              </div>

              {/* 대지면적 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2 hover:border-amber-400 transition-colors">
                <div className="flex items-center justify-between text-xs text-amber-700 font-bold">
                  <span className="flex items-center gap-1.5">
                    <Maximize className="w-3.5 h-3.5" /> 대지면적
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">SITE AREA</span>
                </div>
                <p className="text-lg font-bold text-slate-900 font-mono">
                  {currentSite.area}
                </p>
              </div>

              {/* 연면적 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2 hover:border-amber-400 transition-colors">
                <div className="flex items-center justify-between text-xs text-amber-700 font-bold">
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" /> 연면적
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">GROSS FLOOR AREA</span>
                </div>
                <p className="text-lg font-bold text-slate-900 font-mono">
                  {currentSite.totalArea}
                </p>
              </div>

              {/* 주택형 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2 hover:border-amber-400 transition-colors">
                <div className="flex items-center justify-between text-xs text-amber-700 font-bold">
                  <span className="flex items-center gap-1.5">
                    <Home className="w-3.5 h-3.5" /> 주택형
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">TYPES</span>
                </div>
                <p className="text-sm font-bold text-amber-800 font-mono leading-relaxed">
                  {currentSite.types}
                </p>
              </div>

              {/* 건폐/용적률 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2 hover:border-amber-400 transition-colors">
                <div className="flex items-center justify-between text-xs text-amber-700 font-bold">
                  <span className="flex items-center gap-1.5">
                    <Hash className="w-3.5 h-3.5" /> 건폐 / 용적률
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">RATIO</span>
                </div>
                <p className="text-lg font-bold text-slate-900 font-mono">
                  {currentSite.ratio}
                </p>
              </div>

              {/* 세대수 */}
              <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-300 shadow-sm space-y-2">
                <div className="flex items-center justify-between text-xs text-amber-800 font-bold">
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" /> 세대수
                  </span>
                  <span className="text-[10px] font-mono text-amber-700">TOTAL UNITS</span>
                </div>
                <p className="text-xl font-bold text-amber-900 font-serif">
                  {currentSite.households}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Summary Details Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl bg-white border border-amber-200/80 p-8 md:p-10 shadow-md shadow-slate-200/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="space-y-2 pt-4 md:pt-0">
              <div className="flex items-center justify-center gap-2 text-amber-700 text-sm font-bold">
                <MapPin className="w-4 h-4" /> 사업 위치
              </div>
              <p className="text-xl font-bold text-slate-900 font-serif">경기도 화성시 동탄 신도시</p>
              <p className="text-xs text-slate-500 font-medium">반송동 95번지 & 99번지 핵심 랜드마크</p>
            </div>

            <div className="space-y-2 pt-4 md:pt-0">
              <div className="flex items-center justify-center gap-2 text-amber-700 text-sm font-bold">
                <Layers className="w-4 h-4" /> 총 세대수
              </div>
              <p className="text-xl font-bold text-slate-900 font-serif">총 1,808 세대 대단지</p>
              <p className="text-xs text-slate-500 font-medium">95번지(812세대) + 99번지(996세대)</p>
            </div>

            <div className="space-y-2 pt-4 md:pt-0">
              <div className="flex items-center justify-center gap-2 text-amber-700 text-sm font-bold">
                <Sparkles className="w-4 h-4" /> 분양 일정
              </div>
              <p className="text-xl font-bold text-amber-800 font-serif">2026년 9월 OPEN</p>
              <p className="text-xs text-slate-500 font-medium">사전 관심고객 알림 신청 접수 중</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
