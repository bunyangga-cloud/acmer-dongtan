'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroCurtainProps {
  version?: 'v1' | 'v2';
}

export default function IntroCurtain({ version = 'v2' }: IntroCurtainProps) {
  const [stage, setStage] = useState<'initial' | 'flare' | 'dissolve' | 'done'>('initial');

  useEffect(() => {
    // 1단계: 엠블럼 로고와 슬로건이 떠오르며 찬란한 골드 앰비언트 발광 (0.6초)
    const timer1 = setTimeout(() => {
      setStage('flare');
    }, 600);

    // 2단계: 황금빛 렌즈 플레어가 퍼져나가며 우아하게 빛으로 디졸브 (2.2초)
    const timer2 = setTimeout(() => {
      setStage('dissolve');
    }, 2200);

    // 3단계: 인트로 완료 후 메인화면 짠! (3.2초)
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

  // ===== 버전 1 (v1) : 기존 기본 분할 인트로 =====
  if (version === 'v1') {
    return (
      <AnimatePresence>
        <div className="fixed inset-0 z-[100] overflow-hidden pointer-events-none select-none">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: stage === 'dissolve' ? '-100%' : '0%' }}
            transition={{ duration: 1.1, ease: [0.77, 0, 0.175, 1] }}
            className="absolute top-0 bottom-0 left-0 w-1/2 bg-navy-950 border-r border-gold-500/20 shadow-2xl z-10"
          />
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: stage === 'dissolve' ? '100%' : '0%' }}
            transition={{ duration: 1.1, ease: [0.77, 0, 0.175, 1] }}
            className="absolute top-0 bottom-0 right-0 w-1/2 bg-navy-950 border-l border-gold-500/20 shadow-2xl z-10"
          />
          <motion.div
            animate={{ opacity: stage === 'dissolve' ? 0 : 1 }}
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

  // ===== 버전 2 (v2) : 최고급 시네마틱 골드 렌즈 블룸 & 빛 디졸브 (검은 분할선 완전 제거) =====
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: stage === 'dissolve' ? 0 : 1,
          scale: stage === 'dissolve' ? 1.05 : 1,
        }}
        transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1] }}
        className="fixed inset-0 z-[100] overflow-hidden pointer-events-none select-none bg-[#040814] flex items-center justify-center"
      >
        {/* 1. 배경 황금빛 앰비언트 아우라 (Cinema Atmosphere Glow) */}
        <motion.div
          animate={{
            scale: stage === 'flare' || stage === 'dissolve' ? [1, 1.8, 2.5] : 1,
            opacity: stage === 'flare' ? [0.3, 0.85, 0.4] : stage === 'dissolve' ? 1 : 0.3,
          }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="absolute w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-gradient-to-r from-gold-300/30 via-gold-500/25 to-amber-400/30 rounded-full filter blur-[100px]"
        />

        {/* 2. 중앙 골드 렌즈 플레어 링 (Solar Halo Ring) */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{
            scale: stage === 'flare' || stage === 'dissolve' ? [0.8, 1.4, 2.0] : 0.8,
            opacity: stage === 'flare' ? [0, 0.8, 0.3] : stage === 'dissolve' ? 0.9 : 0,
          }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full border border-gold-300/40 shadow-[0_0_50px_rgba(212,175,55,0.4)]"
        />

        {/* 3. 중앙 컴팩트 선명 HD 로고 및 시그니처 슬로건 */}
        <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
          {/* HD 선명 투명 로고 */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="max-w-[200px] sm:max-w-[250px] md:max-w-[290px] w-full"
          >
            <Image
              src="/images/intro_hd_transparent.png?v=5"
              alt="ACMER DONGTAN Signature Logo"
              width={290}
              height={290}
              unoptimized
              priority
              className="w-full h-auto object-contain filter contrast-[1.12] drop-shadow-[0_0_25px_rgba(255,240,208,0.5)]"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
            />
          </motion.div>

          {/* 슬로건: "동탄의 가장 완벽한 삶을 위해" */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 space-y-2"
          >
            <p className="font-serif text-base sm:text-xl font-bold tracking-[0.25em] text-white drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]">
              “동탄의 가장 완벽한 삶을 위해”
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-300 to-transparent mx-auto mt-2 shadow-[0_0_8px_#ffd700]" />
          </motion.div>
        </div>

        {/* 4. 디졸브 순간 화면 전체를 부드럽게 감싸는 골드 라이트 블룸 (Gold Light Dissolve Veil) */}
        {stage === 'dissolve' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.85, 0] }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="absolute inset-0 bg-gradient-to-t from-gold-500/20 via-gold-300/30 to-white/20 filter blur-2xl pointer-events-none z-30"
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
}
