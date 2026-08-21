'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroCurtainProps {
  version?: 'v1' | 'v2';
}

export default function IntroCurtain({ version = 'v2' }: IntroCurtainProps) {
  // stage: 'initial' (로고&원 생성) -> 'typing' (원/로고 안정화 후 타이핑) -> 'dissolve' (골드빛 디졸브) -> 'done'
  const [stage, setStage] = useState<'initial' | 'typing' | 'dissolve' | 'done'>('initial');
  const [typedText, setTypedText] = useState('');
  const fullText = '“동탄의 완벽한 삶을 위해”';
  const audioCtxRef = useRef<AudioContext | null>(null);

  // 타자기 키 사운드
  const playTypeSound = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioContextClass) {
          audioCtxRef.current = new AudioContextClass();
        }
      }

      if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
        const osc = audioCtxRef.current.createOscillator();
        const gain = audioCtxRef.current.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(750 + Math.random() * 250, audioCtxRef.current.currentTime);
        gain.gain.setValueAtTime(0.04, audioCtxRef.current.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtxRef.current.currentTime + 0.04);

        osc.connect(gain);
        gain.connect(audioCtxRef.current.destination);

        osc.start();
        osc.stop(audioCtxRef.current.currentTime + 0.04);
      }
    } catch {
      // 조용히 진행
    }
  };

  useEffect(() => {
    // 1단계: 로고와 원형 골드 링이 완전히 팽창하여 안착된 후 (1.1초 뒤) 타이핑 단계로 진입
    const timer1 = setTimeout(() => {
      setStage('typing');
    }, 1100);

    return () => clearTimeout(timer1);
  }, []);

  // 2단계: 원과 로고가 100% 완전히 생성/고정된 후 타이핑 시작
  useEffect(() => {
    if (stage === 'typing') {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setTypedText(fullText.slice(0, currentIndex + 1));
          playTypeSound();
          currentIndex++;
        } else {
          clearInterval(interval);
          // 타이핑 완료 후 문구를 읽을 수 있도록 1.0초간 유지 후 디졸브
          setTimeout(() => {
            setStage('dissolve');
          }, 1000);
          // 디졸브 완료 후 메인 진입
          setTimeout(() => {
            setStage('done');
          }, 2000);
        }
      }, 95);

      return () => clearInterval(interval);
    }
  }, [stage]);

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

  // ===== 버전 2 (v2) : 원과 로고가 완벽히 생성/안착된 후 타이핑 시작하는 시네마틱 인트로 =====
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
        {/* 1. 배경 황금빛 앰비언트 아우라 (초기 1초 동안 부드럽게 팽창하여 고정) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: stage === 'dissolve' ? 1.8 : 1.2,
            opacity: stage === 'dissolve' ? 1 : 0.6,
          }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="absolute w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] bg-gradient-to-r from-gold-300/30 via-gold-500/25 to-amber-400/30 rounded-full filter blur-[100px]"
        />

        {/* 2. 중앙 골드 렌즈 플레어 링 (초기 1.1초 동안 완벽히 생성된 후 안정적 고정) */}
        <motion.div
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{
            scale: stage === 'dissolve' ? 1.6 : 1.0,
            opacity: stage === 'dissolve' ? 0.9 : 0.75,
          }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="absolute w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full border border-gold-300/40 shadow-[0_0_50px_rgba(212,175,55,0.4)]"
        />

        {/* 3. 중앙 로고 (안정적으로 안착) 및 원 생성 후 시작되는 타이핑 */}
        <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
          {/* HD 선명 투명 로고 */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="max-w-[200px] sm:max-w-[250px] md:max-w-[290px] w-full"
          >
            <Image
              src="/images/intro_hd_transparent.png?v=8"
              alt="아크메르 동탄 시그니처 로고"
              width={290}
              height={290}
              unoptimized
              priority
              className="w-full h-auto object-contain filter contrast-[1.12] drop-shadow-[0_0_25px_rgba(255,240,208,0.5)]"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
            />
          </motion.div>

          {/* 원이 다 생성된 후 정지된 위치에서 시작되는 타자기 타이핑 */}
          <div className="mt-6 space-y-2 min-h-[56px] flex flex-col items-center justify-center">
            {stage !== 'initial' && (
              <p className="font-serif text-lg sm:text-2xl font-bold tracking-[0.25em] text-white drop-shadow-[0_0_15px_rgba(255,215,0,0.85)] flex items-center">
                <span>{typedText}</span>
                {stage === 'typing' && (
                  <span className="inline-block w-0.5 h-5 sm:h-6 bg-gold-400 ml-1 animate-pulse shadow-[0_0_8px_#ffd700]" />
                )}
              </p>
            )}

            {typedText.length > 4 && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '80px' }}
                transition={{ duration: 0.6 }}
                className="h-0.5 bg-gradient-to-r from-transparent via-gold-300 to-transparent mx-auto shadow-[0_0_8px_#ffd700]"
              />
            )}
          </div>
        </div>

        {/* 4. 디졸브 골드 라이트 블룸 */}
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
