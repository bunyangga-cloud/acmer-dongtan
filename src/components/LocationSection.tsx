'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Train, TreePine, GraduationCap, Building, ZoomIn } from 'lucide-react';

export default function LocationSection() {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPos, setMagnifierPos] = useState({ x: 0, y: 0, bgX: 0, bgY: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const locationFeatures = [
    {
      icon: Train,
      tag: "TRAFFIC",
      title: "쾌속 광역 교통망",
      desc: "SRT 및 GTX-A 연계로 서울 쾌속 접근, 수도권 주요 도심을 빠르게 잇는 교통의 중심"
    },
    {
      icon: TreePine,
      tag: "NATURE",
      title: "청정 힐링 자연환경",
      desc: "단지 인근 대형 공원과 쾌적한 숲세권 라이프, 매일 누리는 파노라마 자연 뷰"
    },
    {
      icon: GraduationCap,
      tag: "EDUCATION",
      title: "우수한 명품 학군",
      desc: "도보 거리 내 안전한 초·중·고교 학군 및 동탄 명문 학원가 인접 교육 환경"
    },
    {
      icon: Building,
      tag: "INFRA",
      title: "풍부한 중심 인프라",
      desc: "대형 쇼핑몰, 문화시설, 의료기관 등 삶의 품격을 높여주는 완성된 도심 생활권"
    }
  ];

  // 마우스 이동 시 돋보기 위치 및 확대 배경 좌표 실시간 계산 (2.5배 확대)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // 백분율 좌표 (0% ~ 100%)
    const bgX = (x / width) * 100;
    const bgY = (y / height) * 100;

    setMagnifierPos({ x, y, bgX, bgY });
  };

  // 모바일 터치 드래그 지원
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || e.touches.length === 0) return;
    const touch = e.touches[0];
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = touch.clientX - left;
    const y = touch.clientY - top;

    const bgX = (x / width) * 100;
    const bgY = (y / height) * 100;

    setMagnifierPos({ x, y, bgX, bgY });
  };

  return (
    <section id="location" className="py-24 relative bg-navy-950 text-white overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-gold-400 font-serif text-sm font-semibold tracking-widest uppercase">
            LOCATION PREMIUM
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
            모든 가치가 집약된 <span className="gold-gradient-text">동탄 최중심 입지</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            교통, 자연, 교육, 생활 인프라까지 미래 가치가 집중되는 아크메르 동탄의 입지 프리미엄을 확인하세요.
          </p>
        </div>

        {/* 1. Interactive Magnifier Map Card (Hover Glass Zooming) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border-2 border-gold-500/40 shadow-2xl bg-white p-2 sm:p-4 mb-12"
        >
          {/* Top Instruction Badge */}
          <div className="flex items-center justify-between px-3 py-2 bg-navy-950/90 rounded-xl mb-3 text-xs text-gold-300 border border-gold-500/30">
            <div className="flex items-center gap-2 font-medium">
              <ZoomIn className="w-4 h-4 text-gold-400 animate-pulse" />
              <span>지도 위에 마우스를 올리면 <strong>실시간 돋보기 확대</strong>로 상세 정보를 선명하게 보실 수 있습니다.</span>
            </div>
            <span className="hidden sm:inline-block text-[11px] font-mono text-slate-400">2.5X MAGNIFIER ZOOM</span>
          </div>

          {/* Map Container with Magnifier Tracker */}
          <div
            ref={containerRef}
            onMouseEnter={() => setShowMagnifier(true)}
            onMouseLeave={() => setShowMagnifier(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setShowMagnifier(true)}
            onTouchEnd={() => setShowMagnifier(false)}
            onTouchMove={handleTouchMove}
            className="relative w-full h-[380px] sm:h-[480px] md:h-[620px] lg:h-[720px] flex items-center justify-center overflow-hidden rounded-2xl bg-white cursor-crosshair select-none"
          >
            <Image
              src="/images/location.png?v=5"
              alt="아크메르 동탄 입지환경 광역 지도"
              fill
              unoptimized
              priority
              className="object-contain object-center filter brightness-100 contrast-105"
            />

            {/* Circle Magnifier Lens */}
            {showMagnifier && (
              <div
                className="absolute pointer-events-none rounded-full border-4 border-gold-400 shadow-[0_0_30px_rgba(212,175,55,0.6)] bg-white overflow-hidden z-30"
                style={{
                  width: '200px',
                  height: '200px',
                  left: `${magnifierPos.x - 100}px`,
                  top: `${magnifierPos.y - 100}px`,
                  backgroundImage: 'url(/images/location.png?v=5)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '250%', // 2.5배 실시간 확대
                  backgroundPosition: `${magnifierPos.bgX}% ${magnifierPos.bgY}%`,
                }}
              >
                {/* Crosshair Target Spec */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <div className="w-4 h-4 rounded-full border border-gold-500" />
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* 2. 4 Premium Feature Cards in Wide 4-column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locationFeatures.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-gold-500/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>

                <span className="text-[10px] font-mono font-semibold tracking-widest text-gold-400 uppercase">
                  {item.tag}
                </span>

                <h4 className="text-lg font-bold font-serif text-white mt-1 mb-2 group-hover:text-gold-300 transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
