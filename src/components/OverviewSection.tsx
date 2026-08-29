'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Train, Sparkles, Building2, MapPin, Layers, Hash, Maximize, FileText, Award } from 'lucide-react';

export default function OverviewSection() {
  const [activeSite, setActiveSite] = useState<'site95' | 'site99'>('site95');

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

  const currentSite = siteDetails[activeSite];

  return (
    <section id="overview" className="py-24 relative bg-white text-slate-900 overflow-hidden border-t border-slate-200">
      {/* Subtle Background Lighting Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/50 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header (화이트 톤에 맞춘 선명한 타이포그래피) */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" /> 20년의 염원이 완성하는 역사적 랜드마크
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-slate-900 leading-tight">
            동탄의 새로운 상징, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700">아크메르 동탄</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal break-keep">
            “20년의 염원이 담긴 동탄의 그 자리에, 삶의 모든 것을 소유하는 동탄의 새로운 상징이 될 역사적 랜드마크를 완성합니다.”
          </p>
        </div>

        {/* 95번지 vs 99번지 상세 사업개요 탭 스펙 박스 (모던 화이트 & 럭셔리 골드) */}
        <div className="rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xl bg-slate-50/90 backdrop-blur-xl">
          {/* Header & Block Selector Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase mb-1">
                <FileText className="w-4 h-4" /> PROJECT SPECIFICATION & PARTNERS
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                아크메르 동탄 <span className="text-amber-600">상세 사업개요</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                최고 49층 랜드마크 · 총 1,808세대 대단지 · 1군 ㈜포스코이앤씨 시공
              </p>
            </div>

            {/* Block Switch Buttons */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm shrink-0">
              <button
                onClick={() => setActiveSite('site95')}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeSite === 'site95'
                    ? 'bg-gradient-to-r from-amber-500 via-gold-400 to-amber-600 text-navy-950 shadow-md scale-102 font-extrabold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                95번지 (M1-1-2블록 · 812세대)
              </button>

              <button
                onClick={() => setActiveSite('site99')}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeSite === 'site99'
                    ? 'bg-gradient-to-r from-amber-500 via-gold-400 to-amber-600 text-navy-950 shadow-md scale-102 font-extrabold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                99번지 (M1-2-2블록 · 996세대)
              </button>
            </div>
          </div>

          {/* Animated 8-Grid Spec Details (클린 화이트 카드) */}
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
              <div className="p-5 rounded-2xl bg-white border border-amber-300 shadow-sm space-y-1.5 hover:border-amber-500 hover:shadow-md transition-all">
                <div className="flex items-center justify-between text-xs text-amber-700 font-medium">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Award className="w-3.5 h-3.5 text-amber-600" /> 시공사
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">BUILDER</span>
                </div>
                <p className="text-lg font-bold text-slate-900 font-serif">
                  {currentSite.builder}
                </p>
                <p className="text-[11px] text-slate-500">1군 메이저 브랜드 책임시공</p>
              </div>

              {/* 시행/위탁사 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1.5 hover:border-amber-400 hover:shadow-md transition-all">
                <div className="flex items-center justify-between text-xs text-amber-700 font-medium">
                  <span className="flex items-center gap-1.5 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-600" /> 시행 / 위탁
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">TRUSTEE</span>
                </div>
                <p className="text-sm font-bold text-slate-900 font-serif break-keep">
                  {currentSite.trustee}
                </p>
                <p className="text-[11px] text-slate-500">KB부동산신탁㈜ 자금관리 안심시행</p>
              </div>

              {/* 건축규모 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1.5 hover:border-amber-400 hover:shadow-md transition-all">
                <div className="flex items-center justify-between text-xs text-amber-700 font-medium">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Building2 className="w-3.5 h-3.5 text-amber-600" /> 건축 규모
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">SCALE</span>
                </div>
                <p className="text-base font-bold text-slate-900 font-serif">
                  {currentSite.scale}
                </p>
                <p className="text-[11px] text-slate-500">스카이라인을 압도하는 주거 타워</p>
              </div>

              {/* 세대수 */}
              <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-400 shadow-sm space-y-1.5">
                <div className="flex items-center justify-between text-xs text-amber-800 font-medium">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Layers className="w-3.5 h-3.5 text-amber-700" /> 공급 세대수
                  </span>
                  <span className="text-[10px] font-mono text-amber-700">TOTAL UNITS</span>
                </div>
                <p className="text-xl font-bold text-amber-900 font-serif">
                  {currentSite.households}
                </p>
                <p className="text-[11px] text-amber-700/90 font-medium">단지 합계 총 1,808세대 대단지</p>
              </div>

              {/* 대지위치 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1.5 hover:border-amber-400 transition-all">
                <div className="flex items-center justify-between text-xs text-amber-700 font-medium">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> 대지위치
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">LOCATION</span>
                </div>
                <p className="text-sm font-bold text-slate-900 font-serif break-keep">
                  {currentSite.location}
                </p>
              </div>

              {/* 대지면적 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1.5 hover:border-amber-400 transition-all">
                <div className="flex items-center justify-between text-xs text-amber-700 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Maximize className="w-3.5 h-3.5" /> 대지면적
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">SITE AREA</span>
                </div>
                <p className="text-base font-bold text-slate-900 font-mono">
                  {currentSite.area}
                </p>
              </div>

              {/* 연면적 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1.5 hover:border-amber-400 transition-all">
                <div className="flex items-center justify-between text-xs text-amber-700 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" /> 연면적
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">GROSS AREA</span>
                </div>
                <p className="text-base font-bold text-slate-900 font-mono">
                  {currentSite.totalArea}
                </p>
              </div>

              {/* 건폐/용적률 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1.5 hover:border-amber-400 transition-all">
                <div className="flex items-center justify-between text-xs text-amber-700 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Hash className="w-3.5 h-3.5" /> 건폐 / 용적률
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">RATIO</span>
                </div>
                <p className="text-base font-bold text-slate-900 font-mono">
                  {currentSite.ratio}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3대 신뢰 핵심 지표 요약 박스 (밝은 톤 카드) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl bg-slate-50 border border-slate-200 p-8 md:p-10 shadow-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="space-y-2 pt-4 md:pt-0">
              <div className="flex items-center justify-center gap-2 text-amber-700 text-sm font-bold">
                <Award className="w-4 h-4 text-amber-600" /> 1군 책임시공 & 신탁시행
              </div>
              <p className="text-xl font-bold text-slate-900 font-serif">㈜포스코이앤씨 시공</p>
              <p className="text-xs text-slate-500">KB부동산신탁㈜ 안전 자금관리 신탁 시행</p>
            </div>

            <div className="space-y-2 pt-4 md:pt-0">
              <div className="flex items-center justify-center gap-2 text-amber-700 text-sm font-bold">
                <Building2 className="w-4 h-4 text-amber-600" /> 최고 49층 랜드마크 규모
              </div>
              <p className="text-xl font-bold text-slate-900 font-serif">총 1,808 세대 대단지</p>
              <p className="text-xs text-slate-500">95번지(812세대) + 99번지(996세대)</p>
            </div>

            <div className="space-y-2 pt-4 md:pt-0">
              <div className="flex items-center justify-center gap-2 text-amber-700 text-sm font-bold">
                <Train className="w-4 h-4 text-amber-600" /> 인동선 반송역 직결 계획
              </div>
              <p className="text-xl font-bold text-amber-800 font-serif">2026년 9월 GRAND OPEN</p>
              <p className="text-xs text-slate-500">GTX-A 서울역 30분대 · 초역세권 프리미엄</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
