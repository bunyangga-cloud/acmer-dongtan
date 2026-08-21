'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, ChevronDown, Award } from 'lucide-react';

interface HeroProps {
  onNavigateRegister: () => void;
}

export default function Hero({ onNavigateRegister }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Background Image Container with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/dongtan.png"
          alt="아크메르 동탄 조감도 메인 비주얼"
          fill
          priority
          className="object-cover object-center scale-105 filter brightness-[0.45] contrast-[1.05]"
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/40" />
        <div className="absolute inset-0 bg-radial-vignette opacity-80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/80 border border-gold-500/40 backdrop-blur-md mb-6 shadow-xl"
        >
          <Calendar className="w-4 h-4 text-gold-400" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-gold-300">
            2026년 9월 GRAND OPEN 예정
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping" />
        </motion.div>

        {/* Main Subtitle / Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-lg sm:text-xl md:text-2xl text-gold-200/90 font-light tracking-widest mb-3"
        >
          동탄 그 이상의 위대함을 만나다
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-white leading-tight mb-6"
        >
          아크메르 <span className="gold-gradient-text">동탄</span>
        </motion.h1>

        {/* Feature Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-xs sm:text-sm text-slate-300 mb-10"
        >
          <span className="flex items-center gap-1.5 bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-800">
            <Award className="w-4 h-4 text-gold-400" /> 랜드마크 조감도 뷰
          </span>
          <span className="flex items-center gap-1.5 bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-800">
            <Sparkles className="w-4 h-4 text-gold-400" /> 명품 라이프 스타일
          </span>
          <span className="flex items-center gap-1.5 bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-800">
            <Calendar className="w-4 h-4 text-gold-400" /> 9월 분양 예정
          </span>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <button
            onClick={onNavigateRegister}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-navy-950 font-bold text-base hover:brightness-110 shadow-xl shadow-gold-500/25 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
          >
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>관심고객 우선 등록하기</span>
          </button>
          <a
            href="#birdseye"
            className="w-full sm:w-auto px-6 py-4 rounded-xl glass-card text-slate-200 font-medium text-base hover:text-white hover:border-gold-500/40 transition-all text-center"
          >
            조감도 및 입지 보기
          </a>
        </motion.div>

        {/* Sub Info Box */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-12 pt-6 border-t border-slate-800/60 max-w-xl mx-auto text-xs text-slate-400 flex items-center justify-center gap-6"
        >
          <div>오픈 예정: <span className="text-gold-400 font-semibold">2026.09</span></div>
          <div className="w-1 h-1 rounded-full bg-slate-700" />
          <div>문의: <span className="text-slate-300 font-mono">대표번호 오픈 직전 공개</span></div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-slate-400 text-xs"
      >
        <span className="tracking-widest uppercase text-[10px]">SCROLL DOWN</span>
        <ChevronDown className="w-4 h-4 text-gold-400" />
      </motion.div>
    </section>
  );
}
