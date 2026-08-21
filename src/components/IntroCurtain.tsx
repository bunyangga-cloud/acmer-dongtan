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
    // 1단계: 상단에서 강렬하게 쏟아지는 빛과 카피 문구 등장 (0.8초)
    const timer1 = setTimeout(() => {
      setStage('flare');
    }, 800);

    // 2단계: 강력한 빛 폭발과 함께 액티브하고 빠른 좌우 갈라짐 (2.2초)
    const timer2 = setTimeout(() => {
      setStage('split');
    }, 2200);

    // 3단계: 갈라짐 완료 및 메인 화면 전환 (3.3초)
    const timer3 = setTimeout(() => {
      setStage('done');
    }, 3300);

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

  // ===== 버전 2 (v2) : 강력한 상단 하향 빔 + 액티브 스플릿 (세로선 완전 제거) =====
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] overflow-hidden pointer-events-none select-none bg-[#030712]">
        {/* Left Curtain Panel (세로선 border 완전 제거) */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: stage === 'split' ? '-100%' : '0%' }}
          transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 bottom-0 left-0 w-1/2 bg-[#040814] shadow-[30px_0_60px_rgba(0,0,0,0.95)] z-10 border-none"
        />

        {/* Right Curtain Panel (세로선 border 완전 제거) */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: stage === 'split' ? '100%' : '0%' }}
          transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 bottom-0 right-0 w-1/2 bg-[#040814] shadow-[-30px_0_60px_rgba(0,0,0,0.95)] z-10 border-none"
        />

        {/* Center Content & Powerful Top-Down Light Flare */}
        <motion.div
          animate={{ opacity: stage === 'split' ? 0 : 1 }}
          transition={{ duration: 0.45 }}
          className="absolute inset-0 flex flex-col items-center justify-center z-20"
        >
          {/* 1. 상단에서 강렬하게 쏟아지는 슈퍼 렌즈 플레어 & 라이트 샤워 */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full flex flex-col items-center pointer-events-none overflow-hidden h-full">
            {/* 상단 눈부신 광원 헤일로 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: stage === 'flare' || stage === 'split' ? [0.4, 1, 0.6] : 0.2,
                scale: stage === 'flare' || stage === 'split' ? [0.8, 1.6, 2.2] : 0.8,
              }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="absolute -top-32 w-[600px] sm:w-[900px] h-[350px] bg-gradient-to-b from-white via-gold-300 to-transparent rounded-full filter blur-[70px]"
            />

            {/* 상단에서 아래로 내리꽂히는 메가 빔 (와이드 광선) */}
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{
                scaleY: stage === 'flare' || stage === 'split' ? 1 : 0,
                opacity: stage === 'flare' ? [0.2, 0.95, 0.7] : stage === 'split' ? 0 : 0.2,
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="w-[120px] sm:w-[180px] h-full bg-gradient-to-b from-white/90 via-gold-300/40 to-transparent filter blur-xl origin-top"
            />
          </div>

          {/* 2. 대형 앰비언트 글로우 */}
          <motion.div
            animate={{
              scale: stage === 'flare' || stage === 'split' ? [1, 2.4, 3.6] : 1,
              opacity: stage === 'flare' ? [0.3, 0.95, 0.5] : 0.3,
            }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute w-[600px] h-[600px] bg-gradient-to-r from-gold-300 via-amber-400 to-gold-500 rounded-full filter blur-[110px] pointer-events-none"
          />

          {/* 3. HD 로고 및 문구 컨테이너 */}
          <div className="relative flex flex-col items-center justify-center p-4">
            {/* Pure HD Transparent Logo */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="relative z-10 max-w-[280px] sm:max-w-[380px] md:max-w-[460px] lg:max-w-[500px] w-full"
            >
              <Image
                src="/images/intro_hd_transparent.png?v=3"
                alt="ACMER DONGTAN HD Signature Logo"
                width={500}
                height={500}
                unoptimized
                priority
                className="w-full h-auto object-contain filter contrast-[1.08] drop-shadow-[0_0_25px_rgba(255,240,208,0.5)]"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />
            </motion.div>

            {/* 슬로건: "동탄의 가장 완벽한 삶을 위해" */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 z-10 text-center"
            >
              <p className="font-serif text-lg sm:text-2xl font-bold tracking-[0.25em] text-white drop-shadow-[0_0_20px_rgba(255,215,0,0.9)]">
                “동탄의 가장 완벽한 삶을 위해”
              </p>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-300 to-transparent mx-auto mt-3 shadow-[0_0_10px_#ffd700]" />
            </motion.div>

            {/* 4. 세로 중앙 레이저 빔 (상단에서 내리꽂히며 로고 중심 관통) */}
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{
                scaleY: stage === 'flare' || stage === 'split' ? 1 : 0.2,
                opacity: stage === 'split' ? 0 : 1, // 갈라질 때 세로선 흔적 없이 즉시 소멸
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="absolute -top-[50%] -bottom-[50%] w-[4px] sm:w-[6px] bg-gradient-to-b from-white via-gold-200 to-transparent shadow-[0_0_45px_#ffffff] z-20 pointer-events-none"
              style={{
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              {/* 내리꽂히는 초고속 수직 빛 플레어 스윕 */}
              <motion.div
                animate={{
                  y: ['-100%', '200%'],
                  opacity: [0, 1, 0],
                }}
                transition={{ duration: 0.9, repeat: Infinity, repeatDelay: 0.2 }}
                className="w-full h-48 bg-gradient-to-b from-transparent via-white to-transparent filter blur-[1px]"
              />
            </motion.div>

            {/* 5. 갈라질 때 중앙에서 터지는 빛 폭발 (Flash Explosion) */}
            {stage === 'split' && (
              <motion.div
                initial={{ scale: 0.2, opacity: 1 }}
                animate={{ scale: [1, 5, 8], opacity: [1, 0.7, 0] }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-[700px] bg-gradient-to-r from-gold-200 via-white to-gold-300 rounded-full filter blur-3xl shadow-[0_0_120px_#ffffff] pointer-events-none z-30"
              />
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
