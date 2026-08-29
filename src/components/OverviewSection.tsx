'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Train, Sparkles, Building2, MapPin, Layers, Home, Hash, Maximize, FileText, CheckCircle2, Award, Briefcase, Trees } from 'lucide-react';

export default function OverviewSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSite, setActiveSite] = useState<'site95' | 'site99'>('site95');

  // 핵심 4대 프리미엄 카드 (제공해주신 소스 원본 완벽 반영)
  const highlights = [
    {
      icon: Building2,
      tag: "LANDMARK ARCHITECTURE",
      title: "최고 49층 역사적 랜드마크",
      subtitle: "㈜포스코이앤씨 시공 · 총 1,808세대",
      desc: "20년의 염원이 담긴 동탄의 중심, 1군 메이저 건설사 ㈜포스코이앤씨의 기술력과 최고 49층 압도적 스카이라인을 완성합니다.",
      featureBadges: [
        "최고 49층 시그니처 타워",
        "자나이나 미레이로 디자인 협업",
        "하이엔드 외관 마감재 특화"
      ],
      detailNote: "에르메스·샤넬·디올 협업 세계적 아티스트 '자나이나 미레이로(Janaïna Milheiro)' 외관 디자인 협업"
    },
    {
      icon: Train,
      tag: "SPEED TRAFFIC",
      title: "반송역 직결 쾌속 교통망",
      subtitle: "GTX-A 서울역 30분대 · SRT 동탄역",
      desc: "동탄~인덕원선 반송역(예정) 직결 계획과 GTX-A 전구간 개통(예정)으로 서울역 30분대 진입, 지역 내 최다 광역버스 노선을 누립니다.",
      featureBadges: [
        "동탄인덕원선 반송역 직결 계획",
        "GTX-A · SRT 동탄역 광역교통",
        "기흥동탄IC · 광역버스 최다 노선"
      ],
      detailNote: "※ 인동선 직결은 추후 사업 인허가 과정에서 변경/취소될 수 있습니다."
    },
    {
      icon: Briefcase,
      tag: "PERFECT LIFE",
      title: "삼성 나노시티 직주근접",
      subtitle: "도보·셔틀 통근 · 중심 쇼핑 인프라",
      desc: "삼성전자 화성·기흥 캠퍼스(NanoCity) 인접으로 압도적인 직주근접 프리미엄과 롯데백화점, 스타필드마켓 등 풍부한 중심 인프라를 누립니다.",
      featureBadges: [
        "삼성전자 화성·기흥 캠퍼스 인접",
        "롯데백화점 · 스타필드마켓",
        "동탄 프리미엄 아울렛 인프라"
      ],
      detailNote: "워라밸을 실현하는 삼성 통근 권역 및 동탄 최중심 원스톱 라이프"
    },
    {
      icon: Trees,
      tag: "CENTER OF NATURE",
      title: "센트럴파크 더블 파노라마",
      subtitle: "도심 속 힐링 숲세권 · 안심 신탁 시행",
      desc: "동탄 센트럴파크와 반석산 근린공원의 더블 파노라마 뷰(일부 세대)와 경부고속도로 지하화로 한층 더 쾌적해진 청정 주거 환경을 제공합니다.",
      featureBadges: [
        "센트럴파크 + 반석산 더블 뷰",
        "경부고속도로 지하화 쾌적성",
        "KB부동산신탁㈜ 신뢰 시행"
      ],
      detailNote: "홍상용 문화의거리, 동탄여울공원, 오산천 수변공원 인접"
    }
  ];

  const siteDetails = {
    site95: {
      name: '95번지 (M1-1-2블록)',
      location: '동탄(1) M1-1-2블록 (화성시 동탄구 반송동 95번지)',
      scale: '지하 3층 ~ 최고 49층 랜드마크',
      builder: '㈜포스코이앤씨',
      trustee: 'KB부동산신탁㈜ (위탁: 신우개발㈜)',
      area: '17,725.2000㎡',
      totalArea: '233,059.8402㎡',
      types: '84C·F / 116A·B / 128A / 129B / PH184B / PF188A',
      ratio: '53.19% / 796.58%',
      households: '총 812세대',
    },
    site99: {
      name: '99번지 (M1-2-2블록)',
      location: '동탄(1) M1-2-2블록 (화성시 동탄구 반송동 99번지)',
      scale: '지하 3층 ~ 최고 49층 랜드마크',
      builder: '㈜포스코이앤씨',
      trustee: 'KB부동산신탁㈜ (위탁: 화우디앤씨㈜)',
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
    }, 4500);
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-400/40 text-gold-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" /> 20년의 염원이 완성하는 역사적 랜드마크
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
            동탄의 새로운 상징, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-gold-200 to-amber-400">아크메르 동탄</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal break-keep">
            “20년의 염원이 담긴 동탄의 그 자리에, 삶의 모든 것을 소유하는 동탄의 새로운 상징이 될 역사적 랜드마크를 완성합니다.”
          </p>
        </div>

        {/* 4대 프리미엄 특장점 카드 (고도화 버전) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            const isActive = activeIndex === idx;

            return (
              <motion.div
                key={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                animate={{
                  scale: isActive ? 1.03 : 0.98,
                  y: isActive ? -6 : 0,
                }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className={`relative rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-b from-[#121f42] to-[#0c1630] border-2 border-gold-400 shadow-2xl shadow-gold-500/25 z-20'
                    : 'bg-[#0f1a36]/80 border border-slate-800/90 hover:border-slate-700 z-10'
                }`}
              >
                <div>
                  {/* Top Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-widest text-gold-400 font-bold uppercase">
                      {item.tag}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 font-bold">
                      0{idx + 1} / 04
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-br from-gold-400 to-gold-600 text-navy-950 shadow-lg shadow-gold-500/30 scale-105'
                        : 'bg-gold-500/10 border border-gold-500/30 text-gold-400'
                    }`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    className={`text-xl font-bold font-serif mb-1 transition-colors duration-300 break-keep ${
                      isActive ? 'text-gold-300' : 'text-white'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-400/90 mb-3 font-mono">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal break-keep mb-4">
                    {item.desc}
                  </p>

                  {/* Feature Checkpoints */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
                    {item.featureBadges.map((badge, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-gold-400' : 'text-slate-500'}`} />
                        <span className="break-keep">{badge}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Detail Note */}
                <div className="mt-5 pt-3 border-t border-slate-800 text-[10px] text-slate-400 leading-normal break-keep">
                  {item.detailNote}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 95번지 vs 99번지 상세 사업개요 탭 스펙 박스 (핵심 소스 반영) */}
        <div className="rounded-3xl border border-gold-500/30 p-6 sm:p-10 shadow-2xl bg-[#080e1e]/90 backdrop-blur-xl">
          {/* Header & Block Selector Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase mb-1">
                <FileText className="w-4 h-4" /> PROJECT SPECIFICATION & PARTNERS
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                아크메르 동탄 <span className="text-gold-300">상세 사업개요</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                최고 49층 랜드마크 · 총 1,808세대 대단지 · 1군 ㈜포스코이앤씨 시공
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
                95번지 (M1-1-2블록 · 812세대)
              </button>

              <button
                onClick={() => setActiveSite('site99')}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeSite === 'site99'
                    ? 'bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-navy-950 shadow-lg shadow-gold-500/25 scale-102'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                99번지 (M1-2-2블록 · 996세대)
              </button>
            </div>
          </div>

          {/* Animated 8-Grid Spec Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSite}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {/* 시공사 */}
              <div className="p-5 rounded-2xl bg-[#0f1933] border border-amber-500/30 space-y-1.5 hover:border-gold-400 transition-colors">
                <div className="flex items-center justify-between text-xs text-gold-400 font-medium">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Award className="w-3.5 h-3.5 text-gold-400" /> 시공사
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">BUILDER</span>
                </div>
                <p className="text-lg font-bold text-white font-serif">
                  {currentSite.builder}
                </p>
                <p className="text-[11px] text-slate-400">1군 메이저 브랜드 책임시공</p>
              </div>

              {/* 시행/위탁사 */}
              <div className="p-5 rounded-2xl bg-[#0f1933] border border-slate-800 space-y-1.5 hover:border-gold-500/30 transition-colors">
                <div className="flex items-center justify-between text-xs text-gold-400 font-medium">
                  <span className="flex items-center gap-1.5 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold-400" /> 시행 / 위탁
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">TRUSTEE</span>
                </div>
                <p className="text-sm font-bold text-white font-serif break-keep">
                  {currentSite.trustee}
                </p>
                <p className="text-[11px] text-slate-400">KB부동산신탁㈜ 자금관리 안심시행</p>
              </div>

              {/* 건축규모 */}
              <div className="p-5 rounded-2xl bg-[#0f1933] border border-slate-800 space-y-1.5 hover:border-gold-500/30 transition-colors">
                <div className="flex items-center justify-between text-xs text-gold-400 font-medium">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Building2 className="w-3.5 h-3.5 text-gold-400" /> 건축 규모
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">SCALE</span>
                </div>
                <p className="text-base font-bold text-white font-serif">
                  {currentSite.scale}
                </p>
                <p className="text-[11px] text-slate-400">스카이라인을 압도하는 주거 타워</p>
              </div>

              {/* 세대수 */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-gold-500/15 to-[#0f1933] border border-gold-400/50 space-y-1.5">
                <div className="flex items-center justify-between text-xs text-gold-400 font-medium">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Layers className="w-3.5 h-3.5 text-gold-400" /> 공급 세대수
                  </span>
                  <span className="text-[10px] font-mono text-gold-300">TOTAL UNITS</span>
                </div>
                <p className="text-xl font-bold text-gold-300 font-serif">
                  {currentSite.households}
                </p>
                <p className="text-[11px] text-gold-400/80">단지 합계 총 1,808세대 대단지</p>
              </div>

              {/* 대지위치 */}
              <div className="p-5 rounded-2xl bg-[#0f1933] border border-slate-800 space-y-1.5 hover:border-gold-500/30 transition-colors">
                <div className="flex items-center justify-between text-xs text-gold-400 font-medium">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> 대지위치
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">LOCATION</span>
                </div>
                <p className="text-sm font-bold text-white font-serif break-keep">
                  {currentSite.location}
                </p>
              </div>

              {/* 대지면적 */}
              <div className="p-5 rounded-2xl bg-[#0f1933] border border-slate-800 space-y-1.5 hover:border-gold-500/30 transition-colors">
                <div className="flex items-center justify-between text-xs text-gold-400 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Maximize className="w-3.5 h-3.5" /> 대지면적
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">SITE AREA</span>
                </div>
                <p className="text-base font-bold text-white font-mono">
                  {currentSite.area}
                </p>
              </div>

              {/* 연면적 */}
              <div className="p-5 rounded-2xl bg-[#0f1933] border border-slate-800 space-y-1.5 hover:border-gold-500/30 transition-colors">
                <div className="flex items-center justify-between text-xs text-gold-400 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" /> 연면적
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">GROSS AREA</span>
                </div>
                <p className="text-base font-bold text-white font-mono">
                  {currentSite.totalArea}
                </p>
              </div>

              {/* 건폐/용적률 */}
              <div className="p-5 rounded-2xl bg-[#0f1933] border border-slate-800 space-y-1.5 hover:border-gold-500/30 transition-colors">
                <div className="flex items-center justify-between text-xs text-gold-400 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Hash className="w-3.5 h-3.5" /> 건폐 / 용적률
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">RATIO</span>
                </div>
                <p className="text-base font-bold text-white font-mono">
                  {currentSite.ratio}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3대 신뢰 핵심 지표 요약 박스 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl bg-[#080e1e]/80 border border-gold-500/20 p-8 md:p-10 backdrop-blur-md shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="space-y-2 pt-4 md:pt-0">
              <div className="flex items-center justify-center gap-2 text-gold-400 text-sm font-medium">
                <Award className="w-4 h-4" /> 1군 책임시공 & 신탁시행
              </div>
              <p className="text-xl font-bold text-white font-serif">㈜포스코이앤씨 시공</p>
              <p className="text-xs text-slate-400">KB부동산신탁㈜ 안전 자금관리 신탁 시행</p>
            </div>

            <div className="space-y-2 pt-4 md:pt-0">
              <div className="flex items-center justify-center gap-2 text-gold-400 text-sm font-medium">
                <Building2 className="w-4 h-4" /> 최고 49층 랜드마크 규모
              </div>
              <p className="text-xl font-bold text-white font-serif">총 1,808 세대 대단지</p>
              <p className="text-xs text-slate-400">95번지(812세대) + 99번지(996세대)</p>
            </div>

            <div className="space-y-2 pt-4 md:pt-0">
              <div className="flex items-center justify-center gap-2 text-gold-400 text-sm font-medium">
                <Train className="w-4 h-4" /> 인동선 반송역 직결 계획
              </div>
              <p className="text-xl font-bold text-gold-300 font-serif">2026년 9월 GRAND OPEN</p>
              <p className="text-xs text-slate-400">GTX-A 서울역 30분대 · 초역세권 프리미엄</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
