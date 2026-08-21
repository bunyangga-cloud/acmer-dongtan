'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroCurtainProps {
  version?: 'v1' | 'v2'; // v1: 기존 버전, v2: 하이엔드 intro.png 별똥별 & 골드 스플릿 버전
}

export default function IntroCurtain({ version = 'v2' }: IntroCurtainProps) {
  const [stage, setStage] = useState<'initial' | 'flare' | 'split' | 'done'>('initial');

  useEffect(() => {
    // 1단계: 골드 빛 발광 및 별똥별 유성우 모션 (1.0초)
    const timer1 = setTimeout(() => {
      setStage('flare');
    }, 1000);

    // 2단계: 중앙 세로 기둥선 기점으로 좌우 커튼 갈라짐 시작 (2.2초)
    const timer2 = setTimeout(() => {
      setStage('split');
    }, 2200);

    // 3단계: 커튼이 완벽히 열리고 인트로 완료 (3.2초)
    const timer3 = setTimeout(() => {
      setStage('done');
    }, 3200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  if (stage === 'done') return null;

  // ===== 버전 1 (v1) : 기존 기본 인트로 =====
  if (version === 'v1') {
    return (
      <AnimatePresence>
        <div className="fixed inset-0 z-[100] overflow-hidden pointer-events-none select-none">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: stage === 'split' ? '-100%' : '0%' }}
            transition={{ duration: 1.1, ease: [0.77, 0, 0.175, 1] }}
            className="absolute top-0 bottom-0 left-0 w-1/2 bg-navy-950 border-r border-gold-500/20 shadow-2xl z-10"
          />
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: stage === 'split' ? '100%' : '0%' }}
            transition={{ duration: 1.1, ease: [0.77, 0, 0.175, 1] }}
            className="absolute top-0 bottom-0 right-0 w-1/2 bg-navy-950 border-l border-gold-500/20 shadow-2xl z-10"
          />
          <motion.div
            animate={{ opacity: stage === 'split' ? 0 : 1 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex flex-col items-center justify-center z-20"
          >
            <div className="w-16 h-16 rounded-2xl bg-gold-500/20 border border-gold-400 flex items-center justify-center">
              <span className="font-serif text-gold-400 text-3xl font-bold">A</span>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    );
  }

  // ===== 버전 2 (v2) : 하이엔드 intro.png 로고 + 중앙 세로선 골드 플레어 + 별똥별 유성 + 웅장 스플릿 =====
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] overflow-hidden pointer-events-none select-none bg-black">
        {/* Left Curtain Panel */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: stage === 'split' ? '-100%' : '0%' }}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          className="absolute top-0 bottom-0 left-0 w-1/2 bg-[#060a12] border-r border-gold-500/30 shadow-[10px_0_30px_rgba(0,0,0,0.9)] z-10"
        />

        {/* Right Curtain Panel */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: stage === 'split' ? '100%' : '0%' }}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          className="absolute top-0 bottom-0 right-0 w-1/2 bg-[#060a12] border-l border-gold-500/30 shadow-[-10px_0_30px_rgba(0,0,0,0.9)] z-10"
        />

        {/* Center Content: intro.png + Gold Light Sweep + Shooting Stars */}
        <motion.div
          animate={{ opacity: stage === 'split' ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex flex-col items-center justify-center z-20"
        >
          {/* Shooting Stars Background Orbits (별똥별 유성우 연출) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Shooting Star 1 */}
            <motion.div
              initial={{ x: '-20%', y: '-20%', opacity: 0 }}
              animate={{ x: '120%', y: '120%', opacity: [0, 1, 0] }}
              transition={{ duration: 1.4, delay: 0.2, repeat: Infinity, repeatDelay: 1.2 }}
              className="absolute w-40 h-[2px] bg-gradient-to-r from-transparent via-gold-300 to-white filter drop-shadow-[0_0_8px_#fff0d0] transform -rotate-45"
            />

            {/* Shooting Star 2 */}
            <motion.div
              initial={{ x: '100%', y: '-10%', opacity: 0 }}
              animate={{ x: '-20%', y: '110%', opacity: [0, 1, 0] }}
              transition={{ duration: 1.6, delay: 0.6, repeat: Infinity, repeatDelay: 1.5 }}
              className="absolute w-48 h-[2px] bg-gradient-to-r from-transparent via-amber-300 to-white filter drop-shadow-[0_0_10px_#d4af37] transform rotate-45"
            />

            {/* Shooting Star 3 (Center Flare Trail) */}
            <motion.div
              initial={{ x: '-10%', y: '30%', opacity: 0 }}
              animate={{ x: '110%', y: '90%', opacity: [0, 0.9, 0] }}
              transition={{ duration: 1.2, delay: 1.0, repeat: Infinity, repeatDelay: 2 }}
              className="absolute w-36 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-white filter drop-shadow-[0_0_6px_#fff0d0] transform -rotate-30"
            />
          </div>

          {/* Center Logo Container */}
          <div className="relative flex flex-col items-center justify-center p-6">
            {/* Ambient Gold Radial Flare Pulse behind intro.png */}
            <motion.div
              animate={{
                scale: stage === 'flare' ? [1, 1.8, 2.2] : 1,
                opacity: stage === 'flare' ? [0.2, 0.85, 0.3] : 0.3,
              }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="absolute w-80 h-80 bg-gradient-to-r from-gold-300 via-gold-500 to-amber-400 rounded-full filter blur-[70px] pointer-events-none"
            />

            {/* intro.png Image Logo rendered in crisp high-contrast center */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 max-w-[200px] sm:max-w-[260px] md:max-w-[300px] w-full"
            >
              <Image
                src="/images/intro.png"
                alt="ACMER DONGTAN Signature Logo"
                width={300}
                height={300}
                priority
                className="w-full h-auto object-contain filter drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              />
            </motion.div>

            {/* Central Vertical Gold Beam - Perfectly Aligned with the tallest tower stroke of intro.png */}
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{
                scaleY: stage === 'flare' || stage === 'split' ? 1 : 0.4,
                opacity: stage === 'split' ? 0 : 0.95,
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute top-[-20%] bottom-[-20%] w-[3px] bg-gradient-to-b from-transparent via-gold-300 to-transparent shadow-[0_0_25px_#fff0d0] z-20 pointer-events-none"
              style={{
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              {/* Pulsing Light Sweep Burst along the central line */}
              <motion.div
                animate={{
                  y: ['-100%', '200%'],
                  opacity: [0, 1, 0],
                }}
                transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.5 }}
                className="w-full h-24 bg-gradient-to-b from-transparent via-white to-transparent filter blur-[1px]"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
