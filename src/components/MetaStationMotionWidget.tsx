'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Train, Building2, Footprints, ChevronRight, Sparkles } from 'lucide-react';

interface MetaStationMotionWidgetProps {
  onNavigateSection: (targetId: string) => void;
}

/**
 * [메타역모션] - 동탄인덕원선 메타역 도보 1분 라이브 워킹 모션 위젯
 * 사용자가 언제든지 손쉽게 켜고 끌 수 있도록 독립 컴포넌트로 분리 관리
 */
export default function MetaStationMotionWidget({ onNavigateSection }: MetaStationMotionWidgetProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
      onClick={() => onNavigateSection('location')}
      className="absolute bottom-8 right-8 z-30 hidden md:flex flex-col w-[290px] rounded-2xl bg-[#091024]/92 backdrop-blur-xl border-2 border-gold-400/60 shadow-[0_10px_35px_rgba(0,0,0,0.85)] p-4 text-white cursor-pointer group hover:border-gold-300 hover:shadow-gold-500/20 transition-all duration-300 transform hover:-translate-y-1 select-none"
    >
      {/* Top Header Badge */}
      <div className="flex items-center justify-between pb-2.5 border-b border-slate-700/70 mb-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold-500" />
          </span>
          <span className="text-[11px] font-bold text-gold-300 tracking-wider font-mono uppercase">
            동탄인덕원선 메타역 (예정)
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

      {/* Live Walking Animation Track (역 ➔ 단지 보행 시각화) */}
      <div className="relative w-full bg-[#050a17] rounded-xl p-3 border border-slate-800 overflow-hidden">
        {/* Track Line */}
        <div className="absolute top-1/2 left-7 right-7 h-[2px] bg-gradient-to-r from-gold-500/40 via-amber-400 to-gold-500/40 -translate-y-1/2 z-0" />

        {/* Start Station Icon */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-lg bg-[#0e1b3d] border border-gold-400/80 flex items-center justify-center text-gold-300 shadow-md">
              <Train className="w-4 h-4" />
            </div>
            <span className="text-[9px] text-slate-400 mt-1 font-bold">메타역</span>
          </div>

          {/* Walking Person Animated Movement (Left to Right Loop) */}
          <div className="absolute left-9 right-9 top-1/2 -translate-y-1/2 h-8 pointer-events-none">
            <motion.div
              animate={{
                x: ['0%', '160%'],
                y: [0, -2, 0, -2, 0],
              }}
              transition={{
                x: { duration: 3.2, repeat: Infinity, ease: 'linear' },
                y: { duration: 0.4, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="flex items-center justify-center w-6 h-6 rounded-full bg-gold-400 text-navy-950 shadow-[0_0_12px_#ffd700]"
            >
              <Footprints className="w-3.5 h-3.5" />
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
        <div className="mt-2.5 w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden">
          <motion.div
            animate={{ width: ['0%', '100%'] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
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
