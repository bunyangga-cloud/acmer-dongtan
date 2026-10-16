'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Coffee, Dumbbell, BookOpen, Users, Maximize2, X, Info } from 'lucide-react';

export default function CommunitySection() {
  const [activeBlock, setActiveBlock] = useState<'95' | '99'>('95');
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  const communities = {
    '95': {
      image: '/images/95/community95.webp',
      title: '아크메르 동탄 95번지 프리미엄 커뮤니티',
      subtitle: 'B1F 티하우스 · 작은도서관 · 독서실 · 골프연습장 / 2F 피트니스 · 사우나 · 게스트하우스 · 필라테스',
      highlights: [
        { icon: Coffee, title: '티하우스 & 라운지', desc: '입주민 전용 고품격 힐링 휴식 공간' },
        { icon: Dumbbell, title: '피트니스 & 사우나', desc: '탁 트인 조망의 피트니스와 호텔식 남녀 사우나' },
        { icon: BookOpen, title: '작은도서관 & 독서실', desc: '자녀들을 위한 아늑하고 쾌적한 스터디 공간' },
        { icon: Users, title: '게스트하우스 & 테라스', desc: '품격 높은 손님맞이를 위한 독립형 숙소' },
      ],
    },
    '99': {
      image: '/images/99/community99.webp',
      title: '아크메르 동탄 99번지 프리미엄 커뮤니티',
      subtitle: '골프클럽 · 피트니스클럽 · 사우나 · 북카페 · 게스트하우스 등 매머드급 원스톱 라이프',
      highlights: [
        { icon: Dumbbell, title: '매머드 피트니스 & GX', desc: '다채로운 운동 프로그램을 즐기는 대형 센터' },
        { icon: Coffee, title: '실내 골프클럽 & 퍼팅존', desc: '전 타석 스크린골프와 프라이빗 연습 타석' },
        { icon: BookOpen, title: '북카페 & 오픈 라이브러리', desc: '온 가족이 함께 독서와 여가를 누리는 복합 문화공간' },
        { icon: Users, title: '키즈라운지 & 맘스스테이션', desc: '자녀와 부모를 위한 안전하고 따뜻한 커뮤니티' },
      ],
    },
  };

  const currentCommunity = communities[activeBlock];

  return (
    <section id="community" className="py-20 sm:py-28 relative bg-white text-slate-900 overflow-hidden border-t border-slate-200">
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-100/50 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-50/70 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs font-bold tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-600" /> CLUB ACMER COMMUNITY
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
            아크메르 동탄 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700">하이엔드 커뮤니티 라이프</span>
          </h2>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />

          <p className="text-slate-600 text-sm sm:text-base font-normal break-keep">
            삶의 품격을 높여주는 다채로운 스포츠, 문화, 힐링 시설을 단지 안에서 원스톱으로 누리세요.
          </p>
        </div>

        {/* 단지 선택 탭 (95번지 vs 99번지) */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-inner">
            <button
              onClick={() => setActiveBlock('95')}
              className={`px-7 py-3 rounded-xl text-sm sm:text-base font-bold transition-all duration-300 cursor-pointer ${
                activeBlock === '95'
                  ? 'bg-gradient-to-r from-amber-500 via-gold-400 to-amber-600 text-navy-950 shadow-md shadow-amber-500/25 border border-amber-300 scale-102'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              95번지 커뮤니티 시설
            </button>
            <button
              onClick={() => setActiveBlock('99')}
              className={`px-7 py-3 rounded-xl text-sm sm:text-base font-bold transition-all duration-300 cursor-pointer ${
                activeBlock === '99'
                  ? 'bg-gradient-to-r from-amber-500 via-gold-400 to-amber-600 text-navy-950 shadow-md shadow-amber-500/25 border border-amber-300 scale-102'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              99번지 커뮤니티 시설
            </button>
          </div>
        </div>

        {/* 4대 특화 하이라이트 카드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentCommunity.highlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-amber-400 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-3 group-hover:bg-amber-500 group-hover:text-white transition-all shadow-sm">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base group-hover:text-amber-800 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* 대형 커뮤니티 상세 안내 이미지 카드 */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-4 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="mb-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-black bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-sm">
                  {activeBlock}번지
                </span>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-slate-900">
                  {currentCommunity.title}
                </h3>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                {currentCommunity.subtitle}
              </p>
            </div>

            <button
              onClick={() => setZoomImage(currentCommunity.image)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-gold-400 to-amber-600 text-navy-950 hover:brightness-105 text-xs font-bold transition-all shadow-md border border-amber-300 cursor-pointer shrink-0"
            >
              <Maximize2 className="w-3.5 h-3.5 text-navy-950" />
              <span>원본 크게보기</span>
            </button>
          </div>

          <div
            onClick={() => setZoomImage(currentCommunity.image)}
            className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 p-2 sm:p-4 flex items-center justify-center cursor-zoom-in"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentCommunity.image}
                src={currentCommunity.image}
                alt={currentCommunity.title}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-auto max-w-5xl mx-auto object-contain filter contrast-[1.02] group-hover:scale-[1.01] transition-transform duration-300"
              />
            </AnimatePresence>

            <div className="absolute bottom-4 right-4 bg-slate-900/85 backdrop-blur-md text-amber-300 text-xs px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-amber-400/30 opacity-90 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
              <span>클릭 시 원본 고해상도 확대</span>
            </div>
          </div>

          <div className="mt-4 flex items-start gap-2 text-[11px] text-slate-500 leading-relaxed px-2">
            <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <p>
              ※ 상기 커뮤니티 시설의 명칭, 구성, 배치 및 인테리어 계획 등은 인허가 과정이나 실제 시공 시 다소 변경될 수 있습니다.
            </p>
          </div>
        </div>

      </div>

      {/* 전체화면 확대 모달 */}
      {zoomImage && (
        <div
          onClick={() => setZoomImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out animate-fadeIn"
        >
          <button
            onClick={() => setZoomImage(null)}
            className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <img
            src={zoomImage}
            alt="커뮤니티 시설 원본 고해상도"
            className="max-h-[92vh] max-w-[94vw] object-contain rounded-xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
