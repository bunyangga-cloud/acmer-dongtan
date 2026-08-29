'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, Film, CheckCircle2, Play, Maximize2 } from 'lucide-react';

export default function BirdseyeSection() {
  const [activeVideo, setActiveVideo] = useState<number>(0);

  // Vimeo 3대 시네마틱 조감도 영상 데이터
  const videos = [
    {
      id: 0,
      url: 'https://player.vimeo.com/video/1213879776?autoplay=1&muted=1&controls=0&autopause=0&loop=1',
      title: '아크메르 동탄 - 49층 랜드마크 시네마틱 조감도',
      subtitle: '동탄 스카이라인을 압도하는 주거 타워의 웅장한 입면 및 조감도 뷰',
      tag: 'CINEMATIC BIRD\'S EYE 01',
      shortTitle: '시네마틱 조감도 뷰',
    },
    {
      id: 1,
      url: 'https://player.vimeo.com/video/1213879798?autoplay=1&muted=1&controls=0&autopause=0&loop=1',
      title: '아크메르 동탄 - 반송역 초역세권 파노라마 뷰',
      subtitle: '동탄인덕원선 반송역 직결 계획 및 센트럴파크 연계 프리미엄 뷰',
      tag: 'STATION & PARK VIEW 02',
      shortTitle: '초역세권 파노라마 뷰',
    },
    {
      id: 2,
      url: 'https://player.vimeo.com/video/1216882442?autoplay=1&muted=1&controls=0&autopause=0&loop=1',
      title: '아크메르 동탄 - 하이엔드 건축 익스테리어 특화',
      subtitle: '자나이나 미레이로 디자인 협업 및 최고급 외관 마감재 시네마틱 뷰',
      tag: 'ARCHITECTURE & ART 03',
      shortTitle: '익스테리어 디자인 특화',
    },
  ];

  const handlePrev = () => {
    setActiveVideo((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveVideo((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const currentVideo = videos[activeVideo];

  return (
    <section id="birdseye" className="py-24 relative bg-[#070d1e] text-white overflow-hidden border-t border-slate-800">
      {/* Background Cinematic Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gold-500/10 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/50 text-gold-300 text-xs font-bold tracking-wider">
            <Film className="w-3.5 h-3.5 text-gold-400" /> BIRD'S EYE CINEMATIC ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
            아크메르 동탄 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-gold-200 to-amber-400">단지 시네마틱 조감도</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
          <p className="text-slate-300 text-sm sm:text-base font-normal break-keep">
            최고 49층 랜드마크의 압도적인 스케일과 예술적 감각이 살아 숨 쉬는 3대 특화 시네마틱 조감도를 직접 감상해 보세요.
          </p>
        </div>

        {/* 3대 영상 상단 탭 셀렉터 */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 max-w-2xl mx-auto">
          {videos.map((vid, idx) => {
            const isSelected = activeVideo === idx;
            return (
              <button
                key={vid.id}
                onClick={() => setActiveVideo(idx)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-navy-950 shadow-lg shadow-gold-500/30 scale-105'
                    : 'bg-navy-950/80 border border-slate-800 text-slate-300 hover:text-white hover:border-gold-500/40'
                }`}
              >
                <Play className={`w-3.5 h-3.5 ${isSelected ? 'fill-navy-950 text-navy-950' : 'text-gold-400'}`} />
                <span>0{idx + 1}. {vid.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Fullsize Cinematic Video Container */}
        <div className="relative group rounded-3xl overflow-hidden border-2 border-gold-500/40 shadow-2xl shadow-black/80 bg-[#050a17] p-2 sm:p-3.5 backdrop-blur-xl">
          {/* 16:9 Aspect Ratio Video Frame */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-inner">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeVideo}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                <iframe
                  src={currentVideo.url}
                  className="w-full h-full border-0 object-cover"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={currentVideo.title}
                />
              </motion.div>
            </AnimatePresence>

            {/* Left Navigation Arrow */}
            <button
              onClick={handlePrev}
              type="button"
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-black/90 text-white hover:text-gold-300 border border-white/25 hover:border-gold-400 shadow-2xl backdrop-blur-md transition-all duration-300 flex items-center justify-center cursor-pointer group/btn"
              title="이전 영상 보기"
              aria-label="이전 영상 보기"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 group-hover/btn:-translate-x-0.5 transition-transform" />
            </button>

            {/* Right Navigation Arrow */}
            <button
              onClick={handleNext}
              type="button"
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-black/90 text-white hover:text-gold-300 border border-white/25 hover:border-gold-400 shadow-2xl backdrop-blur-md transition-all duration-300 flex items-center justify-center cursor-pointer group/btn"
              title="다음 영상 보기"
              aria-label="다음 영상 보기"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Bottom Floating Info Bar with Dots Indicator */}
          <div className="mt-3.5 p-4 rounded-2xl bg-[#091124]/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold-400 to-amber-600 text-navy-950 flex items-center justify-center font-serif font-black text-sm shrink-0 shadow-md">
                0{activeVideo + 1}
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest text-gold-400 font-bold uppercase block">
                  {currentVideo.tag}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white break-keep">
                  {currentVideo.title}
                </h4>
                <p className="text-xs text-slate-400 mt-0.5 hidden md:block">
                  {currentVideo.subtitle}
                </p>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2 shrink-0">
              {videos.map((_, idx) => {
                const isActive = activeVideo === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveVideo(idx)}
                    type="button"
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'w-8 bg-gradient-to-r from-amber-400 to-gold-500 shadow-sm shadow-gold-400'
                        : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                    }`}
                    title={`영상 0${idx + 1} 선택`}
                    aria-label={`영상 0${idx + 1} 선택`}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* 3 Key Architectural Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="bg-[#0a1226]/80 rounded-2xl p-5 border border-slate-800 shadow-sm">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white text-base">최고 49층 랜드마크 타워</h4>
                <p className="text-xs text-slate-400 mt-1 font-normal">
                  동탄을 압도하는 스카이라인과 채광·통풍을 극대화한 특화 동배치 설계
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#0a1226]/80 rounded-2xl p-5 border border-slate-800 shadow-sm">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white text-base">반송역 초역세권 프리미엄</h4>
                <p className="text-xs text-slate-400 mt-1 font-normal">
                  동탄인덕원선 반송역 직결 계획 추진으로 더욱 편리한 광역 교통망
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#0a1226]/80 rounded-2xl p-5 border border-slate-800 shadow-sm">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white text-base">자나이나 미레이로 예술 특화</h4>
                <p className="text-xs text-slate-400 mt-1 font-normal">
                  에르메스·샤넬 협업 세계적 아티스트와의 하이엔드 외관 디자인 특화
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
