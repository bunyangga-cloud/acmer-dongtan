'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroCurtainProps {
  version?: 'v1' | 'v2';
}

export default function IntroCurtain({ version = 'v2' }: IntroCurtainProps) {
  const [stage, setStage] = useState<'initial' | 'textIn' | 'dissolve' | 'done'>('initial');

  useEffect(() => {
    // 1단계: 엠블럼과 큼직한 원이 떠오른 후 슬로건 텍스트 부드럽게 페이드 인 (0.8초)
    const timer1 = setTimeout(() => {
      setStage('textIn');
    }, 800);

    // 2단계: 문구를 감상한 후 찬란한 화이트&골드 라이트 블룸 디졸브 시작 (2.2초)
    const timer2 = setTimeout(() => {
      setStage('dissolve');
    }, 2200);

    // 3단계: 디졸브 완료 후 밝고 화사한 메인 화면 진입 (3.2초)
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

  // ===== 버전 1 (v1) : 기본 분할 인트로 =====
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

  // ===== 버전 2 (v2) : 큼직한 웅장 골드 링 + 슬로건 페이드 인 + 화사한 라이트 블룸 디졸브 =====
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: stage === 'dissolve' ? 0 : 1,
          scale: stage === 'dissolve' ? 1.05 : 1,
        }}
        transition={{ duration: 0.95, ease: [0.4, 0, 0.2, 1] }}
        className="fixed inset-0 z-[100] overflow-hidden pointer-events-none select-none bg-[#040814] flex items-center justify-center"
      >
        {/* 1. 배경 대형 황금빛 앰비언트 아우라 */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            scale: stage === 'dissolve' ? 1.6 : 1.1,
            opacity: stage === 'dissolve' ? 1 : 0.65,
          }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute w-[600px] sm:w-[850px] h-[600px] sm:h-[850px] bg-gradient-to-r from-gold-300/30 via-gold-500/25 to-amber-400/30 rounded-full filter blur-[120px]"
        />

        {/* 2. 큼직하고 웅장한 대형 골드 렌즈 플레어 링 */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{
            scale: stage === 'dissolve' ? 1.4 : 1.0,
            opacity: stage === 'dissolve' ? 0.9 : 0.8,
          }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute w-[460px] sm:w-[620px] md:w-[720px] h-[460px] sm:h-[620px] md:h-[720px] rounded-full border border-gold-300/40 shadow-[0_0_60px_rgba(212,175,55,0.45)]"
        />

        {/* 3. 중앙 로고 & 자연스러운 슬로건 페이드 인 */}
        <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
          {/* HD 선명 투명 로고 */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="max-w-[200px] sm:max-w-[260px] md:max-w-[300px] w-full"
          >
            <Image
              src="/images/intro_hd_transparent.png?v=9"
              alt="아크메르 동탄 시그니처 로고"
              width={300}
              height={300}
              unoptimized
              priority
              className="w-full h-auto object-contain filter contrast-[1.12] drop-shadow-[0_0_25px_rgba(255,240,208,0.5)]"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
            />
          </motion.div>

          {/* 슬로건: 자연스러운 페이드 인 (Fade In) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: stage === 'textIn' || stage === 'dissolve' ? 1 : 0,
              y: stage === 'textIn' || stage === 'dissolve' ? 0 : 10,
            }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mt-6 space-y-2.5"
          >
            <p className="font-serif text-lg sm:text-2xl font-bold tracking-[0.25em] text-white drop-shadow-[0_0_15px_rgba(255,215,0,0.85)]">
              “동탄의 완벽한 삶을 위해”
            </p>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-300 to-transparent mx-auto shadow-[0_0_8px_#ffd700]" />
          </motion.div>
        </div>

        {/* 4. 밝고 환한 라이트 블룸 디졸브 (Bright Light Veil into White Luxury Theme) */}
        {stage === 'dissolve' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.95, 0] }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="absolute inset-0 bg-gradient-to-t from-amber-100/40 via-white/80 to-white/90 filter blur-xl pointer-events-none z-30"
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
}
