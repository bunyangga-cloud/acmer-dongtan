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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % highlights.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [highlights.length]);

  const currentSite = siteDetails[activeSite];

  return (
    <section id="overview" className="py-24 relative bg-[#0b1329] text-white overflow-hidden border-t border-slate-800">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-gold-400 font-serif text-sm font-semibold tracking-widest uppercase">
            OVERVIEW & BRAND
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white">
            동탄의 새로운 자부심, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-gold-200 to-amber-400">아크메르 동탄</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            자연과 도시, 주거와 문화가 어우러지는 완벽한 밸런스.<br className="hidden sm:block" />
            9월, 당신만을 위한 시그니처 랜드마크가 드디어 펼쳐집니다.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            const isActive = activeIndex === idx;

            return (
              <motion.div
                key={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                animate={{
                  scale: isActive ? 1.05 : 0.98,
                  y: isActive ? -6 : 0,
                }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className={`relative rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-b from-navy-900 to-[#101b38] border-2 border-gold-400 shadow-2xl shadow-gold-500/20 z-20'
                    : 'bg-[#0f1a36]/80 border border-slate-800/80 hover:border-slate-700 z-10'
                }`}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-br from-gold-400 to-gold-600 text-navy-950 shadow-lg shadow-gold-500/30 scale-105'
                        : 'bg-gold-500/10 border border-gold-500/30 text-gold-400'
                    }`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3
                    className={`text-xl font-bold font-serif mb-2 transition-colors duration-300 ${
                      isActive ? 'text-gold-300' : 'text-white'
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-slate-400 font-bold">
                    0{idx + 1} / 04
                  </span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 95번지 vs 99번지 상세 사업개요 탭 스펙 박스 */}
        <div className="rounded-3xl border border-gold-500/30 p-6 sm:p-10 shadow-2xl bg-[#080e1e]/90 backdrop-blur-xl">
          {/* Header & Block Selector Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase mb-1">
                <FileText className="w-4 h-4" /> PROJECT SPECIFICATION
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">
                아크메르 동탄 <span className="text-gold-300">상세 사업개요</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                95번지(M1-1-2블록) 및 99번지(M1-2-2블록) 블록별 사업 스펙 정보
              </p>
            </div>

            {/* Block Switch Buttons */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-navy-950 border border-gold-500/30 shrink-0">
              <button
                onClick={() => setActiveSite('site95')}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeSite === 'site95'
                    ? 'bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-navy-950 shadow-lg shadow-gold-500/25 scale-102'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                95번지 (M1-1-2블록)
              </button>

              <button
                onClick={() => setActiveSite('site99')}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeSite === 'site99'
                    ? 'bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-navy-950 shadow-lg shadow-gold-500/25 scale-102'
                    : 'text-slate-400 hover:text-white'
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
              <div className="p-5 rounded-2xl bg-[#0f1933] border border-slate-800 space-y-2 hover:border-gold-500/30 transition-colors">
                <div className="flex items-center justify-between text-xs text-gold-400 font-medium">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> 대지위치
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">LOCATION</span>
                </div>
                <p className="text-base font-bold text-white font-serif">
                  {currentSite.location}
                </p>
              </div>

              {/* 대지면적 */}
              <div className="p-5 rounded-2xl bg-[#0f1933] border border-slate-800 space-y-2 hover:border-gold-500/30 transition-colors">
                <div className="flex items-center justify-between text-xs text-gold-400 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Maximize className="w-3.5 h-3.5" /> 대지면적
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">SITE AREA</span>
                </div>
                <p className="text-lg font-bold text-white font-mono">
                  {currentSite.area}
                </p>
              </div>

              {/* 연면적 */}
              <div className="p-5 rounded-2xl bg-[#0f1933] border border-slate-800 space-y-2 hover:border-gold-500/30 transition-colors">
                <div className="flex items-center justify-between text-xs text-gold-400 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" /> 연면적
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">GROSS FLOOR AREA</span>
                </div>
                <p className="text-lg font-bold text-white font-mono">
                  {currentSite.totalArea}
                </p>
              </div>

              {/* 주택형 */}
              <div className="p-5 rounded-2xl bg-[#0f1933] border border-slate-800 space-y-2 hover:border-gold-500/30 transition-colors">
                <div className="flex items-center justify-between text-xs text-gold-400 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Home className="w-3.5 h-3.5" /> 주택형
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">TYPES</span>
                </div>
                <p className="text-sm font-bold text-gold-300 font-mono leading-relaxed">
                  {currentSite.types}
                </p>
              </div>

              {/* 건폐/용적률 */}
              <div className="p-5 rounded-2xl bg-[#0f1933] border border-slate-800 space-y-2 hover:border-gold-500/30 transition-colors">
                <div className="flex items-center justify-between text-xs text-gold-400 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Hash className="w-3.5 h-3.5" /> 건폐 / 용적률
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">RATIO</span>
                </div>
                <p className="text-lg font-bold text-white font-mono">
                  {currentSite.ratio}
                </p>
              </div>

              {/* 세대수 */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-gold-500/10 to-[#0f1933] border border-gold-500/40 space-y-2">
                <div className="flex items-center justify-between text-xs text-gold-400 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" /> 세대수
                  </span>
                  <span className="text-[10px] font-mono text-gold-400">TOTAL UNITS</span>
                </div>
                <p className="text-xl font-bold text-gold-300 font-serif">
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
          className="rounded-2xl bg-[#080e1e]/80 border border-gold-500/20 p-8 md:p-10 backdrop-blur-md shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="space-y-2 pt-4 md:pt-0">
              <div className="flex items-center justify-center gap-2 text-gold-400 text-sm font-medium">
                <MapPin className="w-4 h-4" /> 사업 위치
              </div>
              <p className="text-xl font-bold text-white font-serif">경기도 화성시 동탄 신도시</p>
              <p className="text-xs text-slate-400">반송동 95번지 & 99번지 핵심 랜드마크</p>
            </div>

            <div className="space-y-2 pt-4 md:pt-0">
              <div className="flex items-center justify-center gap-2 text-gold-400 text-sm font-medium">
                <Layers className="w-4 h-4" /> 총 세대수
              </div>
              <p className="text-xl font-bold text-white font-serif">총 1,808 세대 대단지</p>
              <p className="text-xs text-slate-400">95번지(812세대) + 99번지(996세대)</p>
            </div>

            <div className="space-y-2 pt-4 md:pt-0">
              <div className="flex items-center justify-center gap-2 text-gold-400 text-sm font-medium">
                <Sparkles className="w-4 h-4" /> 분양 일정
              </div>
              <p className="text-xl font-bold text-gold-300 font-serif">2026년 9월 OPEN</p>
              <p className="text-xs text-slate-400">사전 관심고객 알림 신청 접수 중</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
