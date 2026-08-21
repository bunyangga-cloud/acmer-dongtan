'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroCurtainProps {
  version?: 'v1' | 'v2';
}

export default function IntroCurtain({ version = 'v2' }: IntroCurtainProps) {
  const [stage, setStage] = useState<'initial' | 'flare' | 'split' | 'done'>('initial');

  useEffect(() => {
    // 1단계: 로고 등장 & 대각선 별똥별 유성우 (1.0초)
    const timer1 = setTimeout(() => {
      setStage('flare');
    }, 1000);

    // 2단계: 중앙 세로선 틈새 골드 빛 뿜어냄 & 좌우 웅장 갈라짐 (2.2초)
    const timer2 = setTimeout(() => {
      setStage('split');
    }, 2200);

    // 3단계: 갈라짐 완벽히 열리고 종료 (3.4초)
    const timer3 = setTimeout(() => {
      setStage('done');
    }, 3400);

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

  // ===== 버전 2 (v2 - 하이엔드 2배 스케일업 엠블럼 + 대각선 별똥별 + 세로 기둥 틈새 골드빛 발현 스플릿) =====
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] overflow-hidden pointer-events-none select-none bg-navy-950">
        {/* Left Curtain Panel */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: stage === 'split' ? '-100%' : '0%' }}
          transition={{ duration: 1.25, ease: [0.77, 0, 0.175, 1] }}
          className="absolute top-0 bottom-0 left-0 w-1/2 bg-[#050a14] border-r border-gold-500/40 shadow-[15px_0_40px_rgba(0,0,0,0.95)] z-10"
        />

        {/* Right Curtain Panel */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: stage === 'split' ? '100%' : '0%' }}
          transition={{ duration: 1.25, ease: [0.77, 0, 0.175, 1] }}
          className="absolute top-0 bottom-0 right-0 w-1/2 bg-[#050a14] border-l border-gold-500/40 shadow-[-15px_0_40px_rgba(0,0,0,0.95)] z-10"
        />

        {/* Center Content: 2X Scaled Logo + Diagonal Shooting Stars + Central Split Burst */}
        <motion.div
          animate={{ opacity: stage === 'split' ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex flex-col items-center justify-center z-20"
        >
          {/* Diagonal Shooting Stars Streams (대각선 별똥별 유성우) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Shooting Star 1 - Top Left to Bottom Right */}
            <motion.div
              initial={{ x: '-30%', y: '-30%', opacity: 0 }}
              animate={{ x: '130%', y: '130%', opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, delay: 0.3, repeat: Infinity, repeatDelay: 1.0 }}
              className="absolute top-[10%] left-[10%] w-64 h-[2px] bg-gradient-to-r from-transparent via-gold-300 to-white filter drop-shadow-[0_0_12px_#fff0d0] transform -rotate-45"
            />

            {/* Shooting Star 2 - Top Right to Bottom Left */}
            <motion.div
              initial={{ x: '120%', y: '-20%', opacity: 0 }}
              animate={{ x: '-30%', y: '120%', opacity: [0, 1, 0] }}
              transition={{ duration: 1.7, delay: 0.7, repeat: Infinity, repeatDelay: 1.3 }}
              className="absolute top-[20%] right-[10%] w-72 h-[2px] bg-gradient-to-r from-transparent via-amber-300 to-white filter drop-shadow-[0_0_15px_#d4af37] transform rotate-45"
            />

            {/* Shooting Star 3 - Diagonal Burst across center */}
            <motion.div
              initial={{ x: '-20%', y: '20%', opacity: 0 }}
              animate={{ x: '120%', y: '100%', opacity: [0, 0.95, 0] }}
              transition={{ duration: 1.3, delay: 1.1, repeat: Infinity, repeatDelay: 1.6 }}
              className="absolute top-[35%] left-[5%] w-56 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-white filter drop-shadow-[0_0_10px_#fff0d0] transform -rotate-35"
            />
          </div>

          {/* Center Logo Container (2X Scaled Up, No Box, Seamless Fit) */}
          <div className="relative flex flex-col items-center justify-center p-4">
            {/* Ambient Gold Solar Flare Pulse behind intro.png */}
            <motion.div
              animate={{
                scale: stage === 'flare' || stage === 'split' ? [1, 2.2, 3.2] : 1,
                opacity: stage === 'flare' ? [0.25, 0.95, 0.4] : 0.3,
              }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="absolute w-[500px] h-[500px] bg-gradient-to-r from-gold-300 via-gold-500 to-amber-400 rounded-full filter blur-[90px] pointer-events-none"
            />

            {/* 2X Scaled intro.png Logo (No box borders, clean seamless rendering) */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="relative z-10 max-w-[340px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[620px] w-full"
            >
              <Image
                src="/images/intro.png"
                alt="ACMER DONGTAN 2X Scaled Signature Logo"
                width={620}
                height={620}
                priority
                className="w-full h-auto object-contain filter drop-shadow-[0_0_35px_rgba(212,175,55,0.6)]"
              />
            </motion.div>

            {/* Central Vertical Line (aligned with the tallest center tower line of intro.png) */}
            {/* Gold Light Burst Emitted from the Core Crack when Splitting */}
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{
                scaleY: stage === 'flare' || stage === 'split' ? 1 : 0.5,
                opacity: stage === 'split' ? 1 : 0.9,
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute top-[-30%] bottom-[-30%] w-[4px] bg-gradient-to-b from-transparent via-gold-300 to-transparent shadow-[0_0_35px_#fff0d0] z-20 pointer-events-none"
              style={{
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              {/* Intense Gold Light Burst from inside the splitting crack */}
              {stage === 'split' && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [1, 4, 6], opacity: [1, 0.8, 0] }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-96 bg-gradient-to-r from-gold-300 via-white to-gold-400 rounded-full filter blur-xl shadow-[0_0_80px_#fff0d0]"
                />
              )}

              {/* Pulsing Light Beam Sweep */}
              <motion.div
                animate={{
                  y: ['-100%', '200%'],
                  opacity: [0, 1, 0],
                }}
                transition={{ duration: 1.1, repeat: Infinity, repeatDelay: 0.4 }}
                className="w-full h-32 bg-gradient-to-b from-transparent via-white to-transparent filter blur-[1px]"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
