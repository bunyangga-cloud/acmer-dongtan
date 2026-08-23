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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* 1. Dynamic Pan & Zoom Background Image (100% 선명한 조감도 원본 노출) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            x: [0, 10, -10, 0],
            y: [0, -6, 6, 0],
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
            className="object-cover object-center filter brightness-[0.75] contrast-[1.08]"
          />
        </motion.div>

        {/* 2. 시네마틱 비네팅 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

        {/* 3. 은은한 그라데이션 골드빛 사선 플로우 (Subtle Diagonal Golden Ray Stream) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* 첫 번째 사선 골드 앰비언트 광선 (부드럽고 넓은 골드빛) */}
          <motion.div
            initial={{ x: '-100%', y: '-100%', opacity: 0 }}
            animate={{
              x: ['-100%', '200%'],
              y: ['-100%', '200%'],
              opacity: [0, 0.45, 0.7, 0.45, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
              repeatDelay: 1.5,
            }}
            className="absolute top-0 left-0 w-[350px] sm:w-[500px] h-[300%] bg-gradient-to-r from-transparent via-amber-300/25 via-gold-200/30 to-transparent filter blur-3xl transform -rotate-45 origin-top-left"
          />

          {/* 두 번째 사선 샴페인 빛줄기 (섬세하고 맑은 햇살 플레어) */}
          <motion.div
            initial={{ x: '-120%', y: '-120%', opacity: 0 }}
            animate={{
              x: ['-120%', '180%'],
              y: ['-120%', '180%'],
              opacity: [0, 0.5, 0.8, 0.5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 4,
              repeatDelay: 2,
            }}
            className="absolute top-0 left-0 w-[160px] sm:w-[240px] h-[300%] bg-gradient-to-r from-transparent via-white/35 via-gold-300/30 to-transparent filter blur-2xl transform -rotate-45 origin-top-left"
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-gold-400/60 backdrop-blur-md mb-6 shadow-xl"
        >
          <Calendar className="w-4 h-4 text-gold-400" />
          <span className="text-xs sm:text-sm font-bold tracking-wide text-gold-300">
            2026년 9월 GRAND OPEN 예정
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping" />
        </motion.div>

        {/* Main Subtitle / Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-lg sm:text-xl md:text-2xl text-gold-200 font-light tracking-widest mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
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
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-white leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            아크메르{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-gold-200 to-amber-400 relative inline-block px-1 drop-shadow-[0_0_25px_rgba(212,175,55,0.6)]">
              동탄
              {/* Subtle Underline Spark Bar */}
              <motion.span
                animate={{ width: ['0%', '100%', '0%'], left: ['0%', '0%', '100%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-0 h-[3px] bg-gradient-to-r from-amber-300 via-white to-amber-500 rounded-full shadow-[0_0_12px_#D4AF37]"
              />
            </span>
          </h1>
        </motion.div>

        {/* Feature Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-xs sm:text-sm text-slate-100 mb-10"
        >
          <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-md">
            <Award className="w-4 h-4 text-gold-400" /> 랜드마크 조감도 뷰
          </span>
          <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-md">
            <Sparkles className="w-4 h-4 text-gold-400" /> 1,808세대 대단지
          </span>
          <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-md">
            <Calendar className="w-4 h-4 text-gold-400" /> 9월 분양 예정
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
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-gold-400 to-amber-600 text-navy-950 font-bold text-base hover:brightness-110 shadow-xl shadow-gold-500/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
          >
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>관심고객 우선 등록하기</span>
          </button>

          <button
            onClick={() => onNavigateSection('birdseye')}
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-black/50 border border-white/30 text-white font-medium text-base hover:bg-white/20 hover:border-gold-400 backdrop-blur-md transition-all text-center"
          >
            조감도 및 입지 보기
          </button>
        </motion.div>

        {/* Sub Info Box */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.75 }}
          className="mt-12 pt-6 border-t border-white/20 max-w-xl mx-auto text-xs text-slate-300 flex items-center justify-center gap-6"
        >
          <div>오픈 예정: <span className="text-gold-300 font-bold">2026.09</span></div>
          <div className="w-1 h-1 rounded-full bg-slate-500" />
          <div>문의: <span className="text-white font-mono">대표번호 오픈 직전 공개</span></div>
        </motion.div>
      </div>

      {/* Clickable Scroll Down Indicator */}
      <motion.button
        onClick={() => onNavigateSection('overview')}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-slate-300 hover:text-gold-300 text-xs transition-colors cursor-pointer group"
      >
        <span className="tracking-widest uppercase text-[10px] font-bold group-hover:text-gold-300">SCROLL DOWN</span>
        <ChevronDown className="w-4 h-4 text-gold-400 group-hover:translate-y-1 transition-transform" />
      </motion.button>
    </section>
  );
}
