'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Train, TreePine, GraduationCap, Building, ZoomIn } from 'lucide-react';

export default function LocationSection() {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierData, setMagnifierData] = useState({
    x: 0,
    y: 0,
    bgX: 0,
    bgY: 0,
    bgW: 0,
    bgH: 0,
  });
  const imgRef = useRef<HTMLImageElement>(null);

  const ZOOM_LEVEL = 2.5; // 2.5배 또렷한 고화질 확대
  const LENS_SIZE = 220;  // 돋보기 알 크기 (220px)

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

  // 마우스 커서 팁 좌표와 돋보기 렌즈가 바라보는 이미지 픽셀 1:1 완벽 정밀 매칭
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    
    // 마우스가 이미지 영역 내부 어디에 있는지 정확한 픽셀 계산
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // 마우스 커서가 이미지 영역 바깥으로 나가면 돋보기 숨김
    if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
      setShowMagnifier(false);
      return;
    }

    setShowMagnifier(true);

    const bgW = rect.width * ZOOM_LEVEL;
    const bgH = rect.height * ZOOM_LEVEL;
    const bgX = -(x * ZOOM_LEVEL - LENS_SIZE / 2);
    const bgY = -(y * ZOOM_LEVEL - LENS_SIZE / 2);

    setMagnifierData({
      x,
      y,
      bgX,
      bgY,
      bgW,
      bgH,
    });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!imgRef.current || e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = imgRef.current.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
      setShowMagnifier(false);
      return;
    }

    setShowMagnifier(true);

    const bgW = rect.width * ZOOM_LEVEL;
    const bgH = rect.height * ZOOM_LEVEL;
    const bgX = -(x * ZOOM_LEVEL - LENS_SIZE / 2);
    const bgY = -(y * ZOOM_LEVEL - LENS_SIZE / 2);

    setMagnifierData({
      x,
      y,
      bgX,
      bgY,
      bgW,
      bgH,
    });
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

        {/* 1. Original Uncolored Crisp Map Card with 1:1 Precision Magnifier */}
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
              <span>지도 위에 마우스를 올리시면 <strong>마우스 위치 그대로 1:1 정확하게 돋보기로 선명히 확대</strong>됩니다.</span>
            </div>
            <span className="hidden sm:inline-block text-[11px] font-mono text-slate-400">1:1 PRECISION MAGNIFIER</span>
          </div>

          {/* Precision Image Container */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setShowMagnifier(false)}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => setShowMagnifier(false)}
            className="relative w-full flex items-center justify-center overflow-hidden rounded-2xl bg-white cursor-crosshair select-none"
          >
            {/* Native HTML Img for Crisp Contrast & 1:1 Precise Pixel Ratio */}
            <img
              ref={imgRef}
              src="/images/location.png?v=7"
              alt="아크메르 동탄 입지환경 광역 지도 원본"
              className="w-full h-auto object-contain block filter contrast-[1.08] sharpness-100"
              style={{
                imageRendering: '-webkit-optimize-contrast',
              }}
            />

            {/* 1:1 Precision Circle Gold Magnifier Lens */}
            {showMagnifier && (
              <div
                className="absolute pointer-events-none rounded-full border-4 border-gold-400 shadow-[0_0_35px_rgba(212,175,55,0.8)] bg-white overflow-hidden z-30"
                style={{
                  width: `${LENS_SIZE}px`,
                  height: `${LENS_SIZE}px`,
                  left: `${magnifierData.x - LENS_SIZE / 2}px`,
                  top: `${magnifierData.y - LENS_SIZE / 2}px`,
                  backgroundImage: 'url(/images/location.png?v=7)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: `${magnifierData.bgW}px ${magnifierData.bgH}px`,
                  backgroundPosition: `${magnifierData.bgX}px ${magnifierData.bgY}px`,
                }}
              >
                {/* Center Precision Target Dot */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <div className="w-4 h-4 rounded-full border border-gold-500 bg-gold-400/20" />
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
