'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function IntroCurtain() {
  const [stage, setStage] = useState<'initial' | 'flare' | 'split' | 'done'>('initial');

  useEffect(() => {
    // 1단계: 엠블럼 및 골드빛 등장 (1.0초)
    const timer1 = setTimeout(() => {
      setStage('flare');
    }, 1000);

    // 2단계: 중앙 빛이 번지며 좌우 갈라짐 시작 (1.8초)
    const timer2 = setTimeout(() => {
      setStage('split');
    }, 1800);

    // 3단계: 커튼이 완벽히 열리고 인트로 제거 (2.8초)
    const timer3 = setTimeout(() => {
      setStage('done');
    }, 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  if (stage === 'done') return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] overflow-hidden pointer-events-none select-none">
        {/* Left Curtain Panel */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: stage === 'split' ? '-100%' : '0%' }}
          transition={{ duration: 1.1, ease: [0.77, 0, 0.175, 1] }}
          className="absolute top-0 bottom-0 left-0 w-1/2 bg-navy-950 border-r border-gold-500/20 shadow-2xl z-10"
        />

        {/* Right Curtain Panel */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: stage === 'split' ? '100%' : '0%' }}
          transition={{ duration: 1.1, ease: [0.77, 0, 0.175, 1] }}
          className="absolute top-0 bottom-0 right-0 w-1/2 bg-navy-950 border-l border-gold-500/20 shadow-2xl z-10"
        />

        {/* Center Content & Gold Light Burst */}
        <motion.div
          animate={{ opacity: stage === 'split' ? 0 : 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 flex flex-col items-center justify-center z-20"
        >
          {/* Central Gold Flare Light Glow Effect */}
          <div className="relative flex items-center justify-center">
            <motion.div
              animate={{
                scale: stage === 'flare' ? [1, 2.5, 3] : 1,
                opacity: stage === 'flare' ? [0.3, 0.9, 0] : 0.4,
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute w-64 h-64 bg-gradient-to-r from-gold-300 via-gold-500 to-amber-200 rounded-full filter blur-3xl pointer-events-none"
            />

            {/* Emblem Logo */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center gap-4 text-center z-10"
            >
              {/* Gold Tower Graphic Box */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400 via-gold-500 to-gold-700 p-0.5 shadow-2xl shadow-gold-500/40">
                <div className="w-full h-full bg-navy-950 rounded-[14px] flex items-center justify-center">
                  <span className="font-serif text-gold-400 text-3xl font-bold tracking-tighter">A</span>
                </div>
              </div>

              {/* Title & Slogan */}
              <div className="space-y-1">
                <span className="font-serif text-2xl sm:text-4xl font-bold tracking-widest text-white block">
                  ACMER <span className="gold-gradient-text">DONGTAN</span>
                </span>
                <p className="text-xs sm:text-sm font-serif text-gold-300 tracking-widest uppercase">
                  동탄 그 이상의 위대함을 만나다
                </p>
              </div>

              <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono tracking-widest mt-2">
                <Sparkles className="w-3 h-3 text-gold-400 animate-spin" />
                <span>2026.09 GRAND OPEN</span>
              </div>
            </motion.div>
          </div>

          {/* Central Vertical Gold Split Line Glow */}
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{
              scaleY: stage === 'flare' || stage === 'split' ? 1 : 0.6,
              opacity: stage === 'split' ? 0 : 0.8,
            }}
            transition={{ duration: 0.6 }}
            className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gold-400 to-transparent shadow-[0_0_15px_#D4AF37]"
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
