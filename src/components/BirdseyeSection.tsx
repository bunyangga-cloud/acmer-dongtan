'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, Film, CheckCircle2, Play } from 'lucide-react';

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
    <section id="birdseye" className="py-24 relative bg-slate-50 text-slate-900 overflow-hidden border-t border-slate-200">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-amber-100/60 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/70 border border-amber-300 text-amber-800 text-xs font-bold tracking-wider">
            <Film className="w-3.5 h-3.5 text-amber-600" /> BIRD'S EYE CINEMATIC ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-slate-900 leading-tight">
            아크메르 동탄 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700">단지 시네마틱 조감도</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
          <p className="text-slate-600 text-sm sm:text-base font-normal break-keep">
            최고 49층 랜드마크의 압도적인 스케일과 예술적 감각이 살아 숨 쉬는 3대 특화 시네마틱 조감도를 직접 감상해 보세요.
          </p>
        </div>

        {/* 3대 영상 상단 탭 셀렉터 (화이트 테마) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 max-w-2xl mx-auto">
          {videos.map((vid, idx) => {
            const isSelected = activeVideo === idx;
            return (
              <button
                key={vid.id}
                onClick={() => setActiveVideo(idx)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-amber-500 via-gold-400 to-amber-600 text-navy-950 shadow-md scale-105 font-extrabold'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-amber-400 shadow-sm'
                }`}
              >
                <Play className={`w-3.5 h-3.5 ${isSelected ? 'fill-navy-950 text-navy-950' : 'text-amber-600'}`} />
                <span>0{idx + 1}. {vid.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Fullsize Cinematic Video Container */}
        <div className="relative group rounded-3xl overflow-hidden border-2 border-slate-300/80 shadow-2xl bg-black p-2 sm:p-3.5">
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
          <div className="mt-3.5 p-4 rounded-2xl bg-white/95 border border-slate-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center font-serif font-black text-sm shrink-0 shadow-sm">
                0{activeVideo + 1}
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest text-amber-700 font-bold uppercase block">
                  {currentVideo.tag}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 break-keep">
                  {currentVideo.title}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5 hidden md:block">
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
                        ? 'w-8 bg-gradient-to-r from-amber-500 to-amber-600 shadow-sm'
                        : 'w-2.5 bg-slate-300 hover:bg-slate-400'
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
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-amber-300 transition-all">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 text-base">최고 49층 랜드마크 타워</h4>
                <p className="text-xs text-slate-600 mt-1 font-normal">
                  동탄을 압도하는 스카이라인과 채광·통풍을 극대화한 특화 동배치 설계
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-amber-300 transition-all">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 text-base">반송역 초역세권 프리미엄</h4>
                <p className="text-xs text-slate-600 mt-1 font-normal">
                  동탄인덕원선 반송역 직결 계획 추진으로 더욱 편리한 광역 교통망
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-amber-300 transition-all">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 text-base">자나이나 미레이로 예술 특화</h4>
                <p className="text-xs text-slate-600 mt-1 font-normal">
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
