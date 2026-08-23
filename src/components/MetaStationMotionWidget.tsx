'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Train, Building2, ChevronRight, Sparkles } from 'lucide-react';

interface MetaStationMotionWidgetProps {
  onNavigateSection: (targetId: string) => void;
}

/**
 * [메타역모션] - 동탄인덕원선 반송역(메타역) 도보 1분 라이브 측면 워킹 모션 위젯
 * - 역 명칭: 반송역(메타역) 예정
 * - 보행 애니메이션: 옆에서 바라본 두 발 교차 3D 보행 캐릭터 워킹 사이클
 */
export default function MetaStationMotionWidget({ onNavigateSection }: MetaStationMotionWidgetProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
      onClick={() => onNavigateSection('location')}
      className="absolute bottom-8 right-8 z-30 hidden md:flex flex-col w-[305px] rounded-2xl bg-[#091024]/92 backdrop-blur-xl border-2 border-gold-400/60 shadow-[0_10px_35px_rgba(0,0,0,0.85)] p-4 text-white cursor-pointer group hover:border-gold-300 hover:shadow-gold-500/20 transition-all duration-300 transform hover:-translate-y-1 select-none"
    >
      {/* Top Header Badge */}
      <div className="flex items-center justify-between pb-2.5 border-b border-slate-700/70 mb-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold-500" />
          </span>
          <span className="text-[11px] font-bold text-gold-300 tracking-wider font-mono">
            동탄인덕원선 반송역(메타역) 예정
          </span>
        </div>
        <Sparkles className="w-3.5 h-3.5 text-gold-400 group-hover:rotate-12 transition-transform" />
      </div>

      {/* Main Distance Info */}
      <div className="flex items-baseline justify-between mb-3.5">
        <div>
          <span className="text-xs text-slate-300 font-medium block">출구 바로 앞 단지 연결</span>
          <div className="flex items-baseline gap-1 mt-0.5">
            <span className="text-2xl font-black font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-gold-200 to-amber-400">
              도보 1분
            </span>
            <span className="text-xs text-slate-400 font-mono font-semibold">(약 80m)</span>
          </div>
        </div>

        <div className="px-2.5 py-1 rounded-lg bg-gold-500/20 border border-gold-400/50 text-[11px] font-bold text-gold-300">
          초역세권
        </div>
      </div>

      {/* Live Walking Animation Track (역 ➔ 단지 측면 두 발 걷기 시각화) */}
      <div className="relative w-full bg-[#050a17] rounded-xl p-3.5 border border-slate-800 overflow-hidden">
        {/* Track Line */}
        <div className="absolute top-[46%] left-8 right-8 h-[2px] bg-gradient-to-r from-gold-500/40 via-amber-400 to-gold-500/40 -translate-y-1/2 z-0" />

        {/* Start Station Icon */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-lg bg-[#0e1b3d] border border-gold-400/80 flex items-center justify-center text-gold-300 shadow-md">
              <Train className="w-4 h-4" />
            </div>
            <span className="text-[9px] text-slate-300 mt-1 font-bold tracking-tight">반송역(메타역)</span>
          </div>

          {/* Side-Profile 3D Walking Character (두 발 교차 보행 사이클 애니메이션) */}
          <div className="absolute left-10 right-10 top-[40%] -translate-y-1/2 h-10 pointer-events-none">
            <motion.div
              animate={{
                x: ['0%', '160%'],
                y: [0, -3, 0, -3, 0],
              }}
              transition={{
                x: { duration: 3.4, repeat: Infinity, ease: 'linear' },
                y: { duration: 0.35, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="relative w-7 h-9 flex items-center justify-center"
            >
              {/* Gold Glow Aura */}
              <div className="absolute inset-0 bg-gold-400/20 rounded-full filter blur-[4px]" />

              {/* Side Profile Human Walking SVG */}
              <svg
                viewBox="0 0 24 32"
                className="w-full h-full text-gold-300 drop-shadow-[0_0_8px_rgba(255,215,0,0.8)] fill-current"
              >
                {/* Head */}
                <circle cx="14" cy="5" r="3.5" fill="#ffd700" />

                {/* Torso */}
                <path
                  d="M11 9.5 C11 9 16 9 16 9.5 L14.5 18 C14.5 18 11.5 18 11.5 18 Z"
                  fill="#ffd700"
                />

                {/* Left Arm (Swinging) */}
                <motion.line
                  x1="13"
                  y1="11"
                  x2="9"
                  y2="17"
                  stroke="#ffdf6d"
                  strokeWidth="2"
                  strokeLinecap="round"
                  animate={{
                    x2: [9, 17, 9],
                    y2: [17, 15, 17],
                  }}
                  transition={{ duration: 0.7, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Right Arm (Swinging opposite) */}
                <motion.line
                  x1="13"
                  y1="11"
                  x2="17"
                  y2="15"
                  stroke="#cca300"
                  strokeWidth="2"
                  strokeLinecap="round"
                  animate={{
                    x2: [17, 9, 17],
                    y2: [15, 17, 15],
                  }}
                  transition={{ duration: 0.7, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Front Leg (Left Leg - Walking Forward/Back) */}
                <motion.path
                  d="M13 18 L16 25 L19 30"
                  stroke="#ffd700"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  animate={{
                    d: [
                      'M13 18 L17 24 L20 29',
                      'M13 18 L13 24 L13 30',
                      'M13 18 L8 24 L6 29',
                      'M13 18 L13 24 L13 30',
                      'M13 18 L17 24 L20 29',
                    ],
                  }}
                  transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
                />

                {/* Back Leg (Right Leg - Walking Alternating) */}
                <motion.path
                  d="M13 18 L8 24 L6 29"
                  stroke="#d4af37"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  animate={{
                    d: [
                      'M13 18 L8 24 L6 29',
                      'M13 18 L13 24 L13 30',
                      'M13 18 L17 24 L20 29',
                      'M13 18 L13 24 L13 30',
                      'M13 18 L8 24 L6 29',
                    ],
                  }}
                  transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
                />
              </svg>
            </motion.div>
          </div>

          {/* End Residence Icon */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-500 to-amber-600 border border-gold-300 flex items-center justify-center text-navy-950 shadow-md">
              <Building2 className="w-4 h-4" />
            </div>
            <span className="text-[9px] text-gold-300 mt-1 font-bold">아크메르</span>
          </div>
        </div>

        {/* Dynamic Walking Time Counter Bar */}
        <div className="mt-3 w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden">
          <motion.div
            animate={{ width: ['0%', '100%'] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: 'linear' }}
            className="h-full bg-gradient-to-r from-amber-400 to-gold-300 rounded-full"
          />
        </div>
      </div>

      {/* Bottom CTA Guide */}
      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 group-hover:text-gold-300 transition-colors pt-1">
        <span>광역 입지환경 상세 지도</span>
        <span className="flex items-center font-bold text-gold-400 group-hover:translate-x-1 transition-transform">
          확인하기 <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
        </span>
      </div>
    </motion.div>
  );
}
