'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, ChevronDown, Train } from 'lucide-react';
import MetaStationMotionWidget from '@/components/MetaStationMotionWidget';

interface HeroProps {
  onNavigateSection: (targetId: string) => void;
}

export default function Hero({ onNavigateSection }: HeroProps) {
  const [activeFeature, setActiveFeature] = useState(0);

  // 상단 3개 버튼 정의
  const heroFeatures = [
    {
      id: 0,
      icon: Train,
      text: '반송역 초역세권',
      targetId: 'location',
    },
    {
      id: 1,
      icon: Sparkles,
      text: '1,808세대 대단지',
      targetId: 'overview',
    },
    {
      id: 2,
      icon: Calendar,
      text: '9월 분양 예정',
      targetId: 'register',
    },
  ];

  // 2.4초마다 순차적으로 활성 버튼 이동 (0 -> 1 -> 2 -> 0)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % heroFeatures.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [heroFeatures.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* 1. Dynamic Pan & Zoom Background Image (100% 선명하고 깨끗한 조감도 원본 노출) */}
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

        {/* 4. 순차적으로 이동 및 배경색 변화하는 3개 버튼 박스 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-10"
        >
          {heroFeatures.map((item, idx) => {
            const IconComponent = item.icon;
            const isActive = activeFeature === idx;

            return (
              <button
                key={item.id}
                onClick={() => onNavigateSection(item.targetId)}
                onMouseEnter={() => setActiveFeature(idx)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl transition-all duration-500 cursor-pointer backdrop-blur-md ${
                  isActive
                    ? 'bg-black/80 text-gold-300 font-bold border-2 border-gold-400 shadow-[0_0_25px_rgba(212,175,55,0.5)] scale-105 -translate-y-1'
                    : 'bg-black/60 text-slate-300 border border-white/20 hover:border-gold-400/50 hover:text-white opacity-80 hover:opacity-100'
                }`}
              >
                <IconComponent className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'text-gold-400 scale-110' : 'text-slate-400'}`} />
                <span className="text-xs sm:text-sm tracking-wide">{item.text}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping" />
                )}
              </button>
            );
          })}
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
            className="w-auto px-6 py-3 sm:px-10 sm:py-4 rounded-xl bg-gradient-to-r from-amber-500 via-gold-400 to-amber-600 text-navy-950 font-bold text-sm sm:text-base hover:brightness-110 shadow-xl shadow-gold-500/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
            <span className="sm:hidden">관심고객등록</span>
            <span className="hidden sm:inline">관심고객 우선 등록하기</span>
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

      {/* [메타역모션] - PC 기준 우측 하단 여백 라이브 워킹 모션 위젯 (언제든지 토글/제거 가능) */}
      <MetaStationMotionWidget onNavigateSection={onNavigateSection} />

      {/* Clickable Scroll Down Indicator (완벽한 중앙 정렬 컨테이너) */}
      <div className="absolute bottom-4 inset-x-0 z-20 flex justify-center pointer-events-none">
        <motion.button
          onClick={() => onNavigateSection('overview')}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="pointer-events-auto flex flex-col items-center gap-1 text-slate-300 hover:text-gold-300 text-xs transition-colors cursor-pointer group"
        >
          <span className="tracking-widest uppercase text-[10px] font-bold group-hover:text-gold-300">SCROLL DOWN</span>
          <ChevronDown className="w-4 h-4 text-gold-400 group-hover:translate-y-1 transition-transform" />
        </motion.button>
      </div>
    </section>
  );
}
