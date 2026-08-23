'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, ChevronDown, Award } from 'lucide-react';

interface HeroProps {
  onNavigateSection: (targetId: string) => void;
}

export default function Hero({ onNavigateSection }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* 1. Dynamic Pan & Zoom Background Image Container (Bright & Vivid Architecture Rendering) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 15, -15, 0],
            y: [0, -8, 8, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/dongtan.png"
            alt="아크메르 동탄 조감도 메인 비주얼"
            fill
            priority
            className="object-cover object-center filter brightness-[0.85] contrast-[1.05]"
          />
        </motion.div>

        {/* 2. Soft Light Gradient Overlays for Clear Typography */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc] via-white/50 to-white/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-transparent to-white/70" />

        {/* Moving Warm Sun Beam Sweep */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="w-[50%] h-[200%] absolute -top-[50%] left-0 bg-gradient-to-r from-transparent via-amber-200/30 to-transparent blur-3xl transform rotate-12 animate-light-flare" />
          <div className="w-[500px] h-[500px] absolute top-1/4 right-10 bg-amber-100/40 rounded-full filter blur-[120px] animate-ambient-pulse" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-900">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-amber-300 backdrop-blur-md mb-6 shadow-md shadow-slate-200/50"
        >
          <Calendar className="w-4 h-4 text-amber-600" />
          <span className="text-xs sm:text-sm font-bold tracking-wide text-amber-900">
            2026년 9월 GRAND OPEN 예정
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
        </motion.div>

        {/* Main Subtitle / Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-lg sm:text-xl md:text-2xl text-amber-800 font-semibold tracking-widest mb-3"
        >
          동탄 그 이상의 위대함을 만나다
        </motion.p>

        {/* 3. Signature Title: "아크메르 동탄" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: 'easeOut' }}
          className="relative inline-block mb-6"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-slate-900 leading-tight">
            아크메르{' '}
            <span className="gold-gradient-text relative inline-block px-1">
              동탄
              {/* Subtle Underline Spark Bar */}
              <motion.span
                animate={{ width: ['0%', '100%', '0%'], left: ['0%', '0%', '100%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-0 h-[3px] bg-gradient-to-r from-amber-400 via-amber-200 to-amber-600 rounded-full shadow-[0_0_10px_#d4af37]"
              />
            </span>
          </h1>
        </motion.div>

        {/* Feature Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-xs sm:text-sm text-slate-700 mb-10"
        >
          <span className="flex items-center gap-1.5 bg-white/90 px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-sm font-medium">
            <Award className="w-4 h-4 text-amber-600" /> 랜드마크 조감도 뷰
          </span>
          <span className="flex items-center gap-1.5 bg-white/90 px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-sm font-medium">
            <Sparkles className="w-4 h-4 text-amber-600" /> 1,808세대 대단지
          </span>
          <span className="flex items-center gap-1.5 bg-white/90 px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-sm font-medium">
            <Calendar className="w-4 h-4 text-amber-600" /> 9월 분양 예정
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <button
            onClick={() => onNavigateSection('register')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-white font-bold text-base hover:brightness-105 shadow-xl shadow-amber-500/25 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
          >
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>관심고객 우선 등록하기</span>
          </button>

          <button
            onClick={() => onNavigateSection('birdseye')}
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/90 border border-slate-300 text-slate-800 font-semibold text-base hover:bg-white hover:border-amber-400 hover:text-amber-700 shadow-md shadow-slate-200/50 transition-all text-center"
          >
            조감도 및 입지 보기
          </button>
        </motion.div>

        {/* Sub Info Box */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.75 }}
          className="mt-12 pt-6 border-t border-slate-200 max-w-xl mx-auto text-xs text-slate-600 flex items-center justify-center gap-6 font-medium"
        >
          <div>오픈 예정: <span className="text-amber-700 font-bold">2026.09</span></div>
          <div className="w-1 h-1 rounded-full bg-slate-300" />
          <div>문의: <span className="text-slate-700 font-bold">대표번호 오픈 직전 공개</span></div>
        </motion.div>
      </div>

      {/* Clickable Scroll Down Indicator */}
      <motion.button
        onClick={() => onNavigateSection('overview')}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-slate-600 hover:text-amber-600 text-xs transition-colors cursor-pointer group"
      >
        <span className="tracking-widest uppercase text-[10px] font-bold group-hover:text-amber-600">SCROLL DOWN</span>
        <ChevronDown className="w-4 h-4 text-amber-600 group-hover:translate-y-1 transition-transform" />
      </motion.button>
    </section>
  );
}
