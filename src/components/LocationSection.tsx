'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Train, 
  TreePine, 
  GraduationCap, 
  Building, 
  ZoomIn, 
  Compass, 
  ExternalLink, 
  Sparkles,
  MapPin
} from 'lucide-react';

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

  const ZOOM_LEVEL = 2.8; // 2.8배 고해상도 확대
  const LENS_SIZE = 440;  // 돋보기 크기 (440px)

  // 공식 조감 VR 360 파노라마 URL
  const VR_URL = 'https://sws360.com/2026/jpl/acmer_sky/index.htm';

  const locationFeatures = [
    {
      icon: Train,
      tag: "TRAFFIC",
      title: "쾌속 광역 교통망",
      desc: "동탄인덕원선 반송역 직결(추진), SRT 동탄역, GTX-A 및 동탄 트램(예정)으로 완성되는 특급 광역교통"
    },
    {
      icon: Building,
      tag: "NANO CITY",
      title: "삼성전자 직주근접",
      desc: "삼성전자 화성·기흥 캠퍼스 도보 및 셔틀 통근권, 고소득 배후수요를 품은 압도적 비즈니스 입지"
    },
    {
      icon: TreePine,
      tag: "ECO LIFE",
      title: "청정 힐링 자연환경",
      desc: "동탄 센트럴파크, 반석산 근린공원, 오산천 수변공원을 곁에 둔 도심 속 청정 에코 파노라마"
    },
    {
      icon: GraduationCap,
      tag: "EDUCATION",
      title: "명품 교육 & 원스톱 인프라",
      desc: "안심 도보 통학권, 명문 학원가, 롯데백화점, 스타필드마켓, 메타폴리스 상권을 누리는 생활 중심"
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

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
    <section id="location" className="py-20 sm:py-28 relative bg-white text-slate-900 overflow-hidden border-t border-slate-200">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* ========================================================= */}
        {/* 1. 카탈로그 감성 메인 헤더 & 입지VR 바로가기 CTA 배너 */}
        {/* ========================================================= */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-50 via-white to-amber-50/40 border border-slate-200/90 p-6 sm:p-10 md:p-12 shadow-xl shadow-slate-900/5 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* 좌측: 타이틀 카피 & [입지VR 바로가기] 버튼 */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-bold tracking-wider">
                <Compass className="w-4 h-4 text-amber-700 animate-spin-slow" />
                <span>LOCATION PREMIUM · 360° SKY VR</span>
              </div>

              {/* 브로셔 원본 헤드라인 카피 */}
              <div className="space-y-2">
                <p className="font-serif text-lg sm:text-2xl text-slate-700 font-normal tracking-tight">
                  동탄의 가장 완벽한 삶을 위해
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 tracking-tight leading-tight">
                  모든 것이 <span className="font-serif font-black text-slate-950 border-b-4 border-amber-500 pb-0.5 inline-block text-4xl sm:text-5xl md:text-6xl mx-1">완성</span>될 자리에 서다
                </h2>
              </div>

              {/* 브로셔 원본 바디 카피 */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed break-keep font-normal pt-2 border-t border-slate-200/80">
                광역교통망과 삼성전자 배후의 직주근접 입지,<br className="hidden sm:inline" />
                풍부한 생활 인프라와 쾌적한 자연,<br className="hidden sm:inline" />
                우수한 교육환경까지 모두 갖춘 동탄의 프리미엄 라이프.
              </p>

              {/* [입지VR 바로가기] 메인 CTA 버튼 (새창 열기) */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={VR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-[#172554] via-[#1e3a8a] to-[#0f172a] text-white font-bold text-sm sm:text-base shadow-xl shadow-blue-950/20 hover:shadow-2xl hover:shadow-amber-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-amber-400/50 cursor-pointer overflow-hidden"
                >
                  {/* Subtle Shimmer Effect */}
                  <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000" />
                  
                  <div className="w-8 h-8 rounded-xl bg-amber-400/20 border border-amber-400/60 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform">
                    <Compass className="w-4 h-4 text-amber-300" />
                  </div>
                  
                  <span className="tracking-wide">입지VR 바로가기</span>
                  <ExternalLink className="w-4 h-4 text-amber-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <div className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>360° 항공 조감 VR 파노라마 새창 연결</span>
                </div>
              </div>

            </div>

            {/* 우측: 카탈로그 입지 썸네일 & 바로가기 인터랙티브 카드 */}
            <div className="lg:col-span-5">
              <a
                href={VR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative rounded-2xl overflow-hidden border border-slate-300/80 shadow-lg hover:shadow-2xl hover:border-amber-500 transition-all duration-300 bg-white"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src="/images/location_catalog.png"
                    alt="아크메르 동탄 입지환경 브로셔 조감도"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay Tag */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                    <div className="flex items-center justify-between w-full text-white">
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-amber-300 font-bold uppercase block">
                          360° INTERACTIVE VR
                        </span>
                        <h4 className="text-sm font-bold">아크메르 동탄 조감VR 관람</h4>
                      </div>
                      <span className="px-3 py-1.5 rounded-xl bg-amber-500 text-navy-950 text-xs font-bold flex items-center gap-1 group-hover:bg-amber-400 transition-colors shadow-md">
                        <span>VR 체험</span>
                        <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* 2. 대형 돋보기 인터랙션 광역 지도 카드 (1:1 Precision Magnifier) */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-white p-3 sm:p-5"
        >
          {/* Top Instruction Badge & VR Link Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 py-3 bg-amber-50/90 rounded-2xl mb-4 text-xs text-amber-950 border border-amber-200/80">
            <div className="flex items-center gap-2 font-bold">
              <ZoomIn className="w-4 h-4 text-amber-600 animate-pulse shrink-0" />
              <span>지도 위에 마우스를 올리시면 <strong>마우스 위치 그대로 1:1 고해상도 돋보기로 선명하게 확대</strong>됩니다.</span>
            </div>
            
            <a
              href={VR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950 underline underline-offset-2 shrink-0 self-start sm:self-auto"
            >
              <Compass className="w-3.5 h-3.5 text-amber-700" />
              <span>[아크메르 동탄 조감VR] 360° 새창 보기 ➔</span>
            </a>
          </div>

          {/* Precision Image Container with 1:1 Magnifier */}
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
              src="/images/location_new.png"
              alt="아크메르 동탄 입지환경 광역 지도 원본"
              className="w-full h-auto object-contain block filter contrast-[1.08] sharpness-100"
              style={{
                imageRendering: '-webkit-optimize-contrast',
              }}
            />

            {/* 1:1 Precision Circle Gold Magnifier Lens */}
            {showMagnifier && (
              <div
                className="absolute pointer-events-none rounded-full border-4 border-amber-500 shadow-[0_0_35px_rgba(212,175,55,0.8)] bg-white overflow-hidden z-30"
                style={{
                  width: `${LENS_SIZE}px`,
                  height: `${LENS_SIZE}px`,
                  left: `${magnifierData.x - LENS_SIZE / 2}px`,
                  top: `${magnifierData.y - LENS_SIZE / 2}px`,
                  backgroundImage: 'url(/images/location_new.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: `${magnifierData.bgW}px ${magnifierData.bgH}px`,
                  backgroundPosition: `${magnifierData.bgX}px ${magnifierData.bgY}px`,
                }}
              >
                {/* Center Precision Target Dot */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <div className="w-4 h-4 rounded-full border border-amber-600 bg-amber-400/20" />
                </div>
              </div>
            )}
          </div>

          {/* 카탈로그 공식 법적 고지 / 상세 출처 각주 */}
          <div className="mt-5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-[11px] sm:text-xs text-slate-500 leading-relaxed space-y-1 break-keep">
            <p className="font-semibold text-slate-600">
              ※ 상기 이미지는 소비자의 이해를 돕기 위한 이미지로 실제와 상이할 수 있습니다.
            </p>
            <p>
              ※ 동탄~인덕원선 직결은 추후 사업 인허가 과정에서 변경 또는 취소될 수 있습니다.
            </p>
            <p>
              ※ 출처(이미지의 원본)는 관계기관의 홈페이지 등을 참조하여 작성된 것으로 사업계획 및 실정에 따라 달라지는 부분이며, 추후 변경될 수 있습니다.
            </p>
            <div className="pt-2 border-t border-slate-200/80 grid grid-cols-1 md:grid-cols-3 gap-1.5 text-[10px] sm:text-[11px] text-slate-400">
              <div>· <strong>반송역(예정, 가칭), 서동탄~동탄 연장(예정)</strong>: 국토교통부고시 제2026-63호</div>
              <div>· <strong>동탄도시철도(트램) 1·2호선(예정)</strong>: 대도시권광역교통위원회 고시 제2024-12호</div>
              <div>· <strong>고려대학교 동탄병원(계획, 가칭)</strong>: 화성특례시 보도자료(2026.03.25)</div>
            </div>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* 3. 4대 입지 프리미엄 핵심 카드 (교통·직주·자연·교육) */}
        {/* ========================================================= */}
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
                className="bg-slate-50/90 rounded-2xl p-6 border border-slate-200/80 hover:bg-white hover:border-amber-400 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-100/80 border border-amber-200 text-amber-800 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-mono font-bold tracking-widest text-amber-700 uppercase">
                    {item.tag}
                  </span>

                  <h4 className="text-lg font-bold font-serif text-slate-900 mt-1 mb-2 group-hover:text-amber-800 transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
