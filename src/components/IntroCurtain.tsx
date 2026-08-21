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
    // 1단계: 오디세이 웅장한 아우라 빔 발광 & 카피 문구 등장 (1.0초)
    const timer1 = setTimeout(() => {
      setStage('flare');
    }, 1000);

    // 2단계: 로고 중앙 세로 기둥선 틈새 갈라짐 시작 (2.5초)
    const timer2 = setTimeout(() => {
      setStage('split');
    }, 2500);

    // 3단계: 갈라짐 완료 및 메인화면 진입 (3.7초)
    const timer3 = setTimeout(() => {
      setStage('done');
    }, 3700);

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

  // ===== 버전 2 (v2) : 영화 <오디세이> 스타일 - 2배 크기 박스없는 100% 투명 로고 + 강렬한 세로선 렌즈 플레어 + 카피문구 =====
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] overflow-hidden pointer-events-none select-none bg-[#030712]">
        {/* Left Curtain Panel */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: stage === 'split' ? '-100%' : '0%' }}
          transition={{ duration: 1.3, ease: [0.77, 0, 0.175, 1] }}
          className="absolute top-0 bottom-0 left-0 w-1/2 bg-[#040814] border-r border-gold-500/40 shadow-[20px_0_50px_rgba(0,0,0,0.95)] z-10"
        />

        {/* Right Curtain Panel */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: stage === 'split' ? '100%' : '0%' }}
          transition={{ duration: 1.3, ease: [0.77, 0, 0.175, 1] }}
          className="absolute top-0 bottom-0 right-0 w-1/2 bg-[#040814] border-l border-gold-500/40 shadow-[-20px_0_50px_rgba(0,0,0,0.95)] z-10"
        />

        {/* Center Odyssey Cinema Experience */}
        <motion.div
          animate={{ opacity: stage === 'split' ? 0 : 1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex flex-col items-center justify-center z-20"
        >
          {/* Odyssey Solar Core Atmosphere Light Glow */}
          <motion.div
            animate={{
              scale: stage === 'flare' || stage === 'split' ? [1, 2.5, 3.8] : 1,
              opacity: stage === 'flare' ? [0.2, 0.9, 0.4] : 0.2,
            }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            className="absolute w-[600px] h-[600px] bg-gradient-to-r from-gold-400 via-amber-500 to-gold-300 rounded-full filter blur-[100px] pointer-events-none"
          />

          {/* Center 2X Scaled Transparent Logo Container (Box-free Pure PNG) */}
          <div className="relative flex flex-col items-center justify-center p-4">
            {/* Pure Alpha Transparent 2X Scaled Logo */}
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.0, ease: 'easeOut' }}
              className="relative z-10 max-w-[340px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[620px] w-full"
            >
              <Image
                src="/images/intro_transparent.png"
                alt="ACMER DONGTAN 2X Scaled Transparent Signature Logo"
                width={620}
                height={620}
                priority
                className="w-full h-auto object-contain"
              />
            </motion.div>

            {/* Movie Slogan Text: "동탄의 가장 완벽한 삶을 위해" */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-6 z-10 text-center"
            >
              <p className="font-serif text-lg sm:text-2xl font-bold tracking-[0.25em] text-white drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]">
                “동탄의 가장 완벽한 삶을 위해”
              </p>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-3" />
            </motion.div>

            {/* Central Vertical Line (Aligned with the tallest center tower of intro_transparent.png) */}
            {/* Intense Solar Flare Rays Emitted from the Splitting Core Crack */}
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{
                scaleY: stage === 'flare' || stage === 'split' ? 1 : 0.4,
                opacity: stage === 'split' ? 1 : 0.95,
              }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="absolute top-[-40%] bottom-[-40%] w-[3px] bg-gradient-to-b from-transparent via-gold-300 to-transparent shadow-[0_0_40px_#fff0d0] z-20 pointer-events-none"
              style={{
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              {/* Intense Odyssey Light Burst inside the splitting crack */}
              {stage === 'split' && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [1, 4.5, 7], opacity: [1, 0.85, 0] }}
                  transition={{ duration: 1.0, ease: 'easeOut' }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-[500px] bg-gradient-to-r from-gold-300 via-white to-gold-400 rounded-full filter blur-2xl shadow-[0_0_100px_#fff0d0]"
                />
              )}

              {/* Odyssey Beam Light Sweep */}
              <motion.div
                animate={{
                  y: ['-100%', '200%'],
                  opacity: [0, 1, 0],
                }}
                transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.3 }}
                className="w-full h-40 bg-gradient-to-b from-transparent via-white to-transparent filter blur-[1px]"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
