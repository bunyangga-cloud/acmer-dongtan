'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Train, TreePine, GraduationCap, Building, ZoomIn } from 'lucide-react';

export default function LocationSection() {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierData, setMagnifierData] = useState({
    x: 0,
    y: 0,
    bgX: 0,
    bgY: 0,
    zoomWidth: 0,
    zoomHeight: 0,
  });
  const containerRef = useRef<HTMLDivElement>(null);

  const ZOOM_LEVEL = 2.8; // 시원하게 2.8배 왕 확대!
  const LENS_SIZE = 240; // 240px 큼직한 돋보기 렌즈 알 크기

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

  // 정확한 물리 돋보기 수학 공식 계산 (전체 컨테이너 너비 기준 2.8배 확대 오프셋)
  const updateMagnifier = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;

    // 돋보기 렌즈 중심점에 들어올 배경 오프셋 좌표 (-x * ZOOM + LENS_SIZE / 2)
    const zoomWidth = width * ZOOM_LEVEL;
    const zoomHeight = height * ZOOM_LEVEL;
    const bgX = -(x * ZOOM_LEVEL - LENS_SIZE / 2);
    const bgY = -(y * ZOOM_LEVEL - LENS_SIZE / 2);

    setMagnifierData({
      x,
      y,
      bgX,
      bgY,
      zoomWidth,
      zoomHeight,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    updateMagnifier(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      updateMagnifier(e.touches[0].clientX, e.touches[0].clientY);
    }
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

        {/* 1. Corrected True 2.8X Magnifier Map Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border-2 border-gold-500/40 shadow-2xl bg-white p-2 sm:p-4 mb-12"
        >
          {/* Top Instruction Badge */}
          <div className="flex items-center justify-between px-3.5 py-2.5 bg-navy-950/90 rounded-xl mb-3 text-xs text-gold-300 border border-gold-500/30">
            <div className="flex items-center gap-2 font-medium">
              <ZoomIn className="w-4 h-4 text-gold-400 animate-pulse" />
              <span>지도 위에 마우스를 올리면 <strong>왕 돋보기 렌즈(2.8배)</strong>로 글씨와 도로가 큼직하게 짠!하고 돋아 보입니다.</span>
            </div>
            <span className="hidden sm:inline-block text-[11px] font-mono text-slate-400">2.8X REAL MAGNIFIER</span>
          </div>

          {/* Map Container with Magnifier Tracker */}
          <div
            ref={containerRef}
            onMouseEnter={() => setShowMagnifier(true)}
            onMouseLeave={() => setShowMagnifier(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={(e) => {
              setShowMagnifier(true);
              if (e.touches.length > 0) updateMagnifier(e.touches[0].clientX, e.touches[0].clientY);
            }}
            onTouchEnd={() => setShowMagnifier(false)}
            onTouchMove={handleTouchMove}
            className="relative w-full h-[380px] sm:h-[480px] md:h-[620px] lg:h-[720px] flex items-center justify-center overflow-hidden rounded-2xl bg-white cursor-crosshair select-none"
          >
            <Image
              src="/images/location.png?v=6"
              alt="아크메르 동탄 입지환경 광역 지도"
              fill
              unoptimized
              priority
              className="object-contain object-center filter brightness-100 contrast-105"
            />

            {/* True Scale 2.8X Circle Magnifier Lens */}
            {showMagnifier && (
              <div
                className="absolute pointer-events-none rounded-full border-4 border-gold-400 shadow-[0_0_35px_rgba(212,175,55,0.7)] bg-white overflow-hidden z-30"
                style={{
                  width: `${LENS_SIZE}px`,
                  height: `${LENS_SIZE}px`,
                  left: `${magnifierData.x - LENS_SIZE / 2}px`,
                  top: `${magnifierData.y - LENS_SIZE / 2}px`,
                  backgroundImage: 'url(/images/location.png?v=6)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: `${magnifierData.zoomWidth}px ${magnifierData.zoomHeight}px`,
                  backgroundPosition: `${magnifierData.bgX}px ${magnifierData.bgY}px`,
                }}
              >
                {/* Center Crosshair Target Ring */}
                <div className="absolute inset-0 flex items-center justify-center opacity-25">
                  <div className="w-6 h-6 rounded-full border-2 border-gold-500" />
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
