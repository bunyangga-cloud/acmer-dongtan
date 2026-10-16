'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Download, 
  Sparkles, 
  Bell, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Building2,
  Maximize2,
  X 
} from 'lucide-react';

export default function NoticeScheduleSection() {
  const [activeTab, setActiveTab] = useState<'calendar' | 'block95' | 'block99'>('calendar');
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  const keySchedules = [
    {
      date: '10.16 (금)',
      name: '입주자모집공고',
      desc: '오늘 공식 오픈 & 사이버 모델하우스 공개',
      highlight: true,
      badge: 'OPEN TODAY'
    },
    {
      date: '10.26 (월)',
      name: '특별공급 접수',
      desc: '청약Home 인터넷 접수 (09:00 ~ 17:30)',
      highlight: true,
      badge: '청약 1일차'
    },
    {
      date: '10.27 (화)',
      name: '일반공급 1순위',
      desc: '청약Home 인터넷 접수 (09:00 ~ 17:30)',
      highlight: true,
      badge: '1순위 청약'
    },
    {
      date: '10.28 (수)',
      name: '일반공급 2순위',
      desc: '청약Home 인터넷 접수 (09:00 ~ 17:30)',
      highlight: false,
      badge: '2순위 청약'
    },
    {
      date: '11.03 / 11.04',
      name: '당첨자 발표',
      desc: '95번지 11/3(화) · 99번지 11/4(수) ★중복청약 가능',
      highlight: true,
      badge: '중복청약 특권'
    },
    {
      date: '11.16 ~ 11.18',
      name: '정당 계약체결',
      desc: '아크메르 동탄 견본주택 방문 계약 (3일간)',
      highlight: false,
      badge: '계약체결'
    }
  ];

  return (
    <section id="schedule" className="py-20 sm:py-28 relative bg-white text-slate-900 overflow-hidden border-t border-slate-200">
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-100/50 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-50/70 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold tracking-wider shadow-sm animate-pulse">
            <Bell className="w-4 h-4 text-amber-600" /> 2026.10.16 오늘 공식 오픈!
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
            아크메르 동탄 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700">입주자모집공고 및 분양일정</span>
          </h2>
          
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed break-keep font-normal">
            오늘 발표된 공식 입주자모집공고 핵심 일정 및 분양가, 청약 체크포인트를 한눈에 확인하세요.
          </p>
        </div>

        {/* 핵심 중복청약 골든 베네핏 공지 카드 */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-50 via-amber-100/40 to-amber-50 border-2 border-amber-400/80 shadow-xl shadow-amber-900/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center shrink-0 font-bold shadow-lg shadow-amber-500/30">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-sm tracking-wide">
                  필독 호재
                </span>
                <h4 className="text-base sm:text-lg font-bold text-slate-900">
                  95번지 & 99번지 2개 단지 동시 중복 청약 가능!
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 break-keep">
                95번지(11/3 화)와 99번지(11/4 수)의 <strong>당첨자 발표일이 달라 두 단지 모두 청약이 가능</strong>하여 당첨 확률이 2배로 높아집니다.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 w-full md:w-auto">
            <a
              href="/docs/acmer_95_notice.pdf"
              download
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-amber-500 via-gold-400 to-amber-600 text-navy-950 hover:brightness-110 text-xs sm:text-sm font-extrabold transition-all shadow-md shadow-amber-500/25 border border-amber-300"
            >
              <Download className="w-4 h-4 text-navy-950" />
              <span>95 공고문 PDF</span>
            </a>
            <a
              href="/docs/acmer_99_notice.pdf"
              download
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-amber-500 via-gold-400 to-amber-600 text-navy-950 hover:brightness-110 text-xs sm:text-sm font-extrabold transition-all shadow-md shadow-amber-500/25 border border-amber-300"
            >
              <Download className="w-4 h-4 text-navy-950" />
              <span>99 공고문 PDF</span>
            </a>
          </div>
        </div>

        {/* 6대 핵심 청약 일정 타임라인 카드 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {keySchedules.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                item.highlight
                  ? 'bg-gradient-to-b from-amber-50 to-white border-2 border-amber-400 shadow-md scale-[1.02]'
                  : 'bg-slate-50 border border-slate-200 text-slate-700'
              }`}
            >
              {item.highlight && (
                <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500" />
              )}
              
              <div>
                <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold tracking-wide mb-2 ${
                  item.highlight ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-slate-200 text-slate-600'
                }`}>
                  {item.badge}
                </span>
                
                <h4 className="text-base sm:text-lg font-bold font-serif text-slate-900 tracking-tight">
                  {item.date}
                </h4>

                <p className={`text-xs sm:text-sm font-bold mt-1 ${item.highlight ? 'text-amber-800' : 'text-slate-800'}`}>
                  {item.name}
                </p>
              </div>

              <p className="text-[11px] text-slate-500 mt-3 pt-2 border-t border-slate-200 leading-snug break-keep">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 공고문 상세 뷰어 탭 네비게이션 */}
        <div className="pt-4 space-y-6">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <button
              onClick={() => setActiveTab('calendar')}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeTab === 'calendar'
                  ? 'bg-gradient-to-r from-amber-500 via-gold-400 to-amber-600 text-navy-950 shadow-lg shadow-gold-500/30 scale-105'
                  : 'bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:border-amber-400'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>분양일정 캘린더 & 청약가이드</span>
            </button>

            <button
              onClick={() => setActiveTab('block95')}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeTab === 'block95'
                  ? 'bg-gradient-to-r from-amber-500 via-gold-400 to-amber-600 text-navy-950 shadow-lg shadow-gold-500/30 scale-105'
                  : 'bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:border-amber-400'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>95번지(812세대) 분양가·공급표</span>
            </button>

            <button
              onClick={() => setActiveTab('block99')}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeTab === 'block99'
                  ? 'bg-gradient-to-r from-amber-500 via-gold-400 to-amber-600 text-navy-950 shadow-lg shadow-gold-500/30 scale-105'
                  : 'bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:border-amber-400'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>99번지(996세대) 분양가·공급표</span>
            </button>
          </div>

          {/* 탭 1: 분양일정 캘린더 & 청약 총정리 */}
          {activeTab === 'calendar' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-white p-3 sm:p-6 shadow-2xl overflow-hidden border border-slate-200"
            >
              <div className="mb-4 flex flex-col sm:flex-row items-center justify-between gap-3 px-2 text-slate-900">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-amber-500 animate-ping" />
                  <h3 className="font-serif font-bold text-lg sm:text-xl">아크메르 동탄 공식 분양일정 및 청약 총정리</h3>
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  클릭하거나 확대하여 고해상도로 선명하게 확인하실 수 있습니다.
                </div>
              </div>

              <div 
                onClick={() => setZoomImage('/images/cy99.webp')}
                className="group relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 p-2 sm:p-4 flex justify-center cursor-zoom-in"
              >
                <img
                  src="/images/cy99.webp"
                  alt="아크메르 동탄 분양일정 및 청약안내 총정리"
                  className="w-full h-auto object-contain max-w-5xl mx-auto filter contrast-[1.02] group-hover:scale-[1.01] transition-transform duration-300"
                />
                <div className="absolute bottom-4 right-4 bg-slate-900/85 backdrop-blur-md text-amber-300 text-xs px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-amber-400/30 opacity-90 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>클릭 시 원본 고해상도 확대</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* 탭 2: 95번지 공고 요약표 */}
          {activeTab === 'block95' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-white p-3 sm:p-6 shadow-2xl overflow-hidden border border-slate-200"
            >
              <div className="mb-4 flex flex-col sm:flex-row items-center justify-between gap-3 px-2 text-slate-900">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-xs font-black bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-sm">95번지</span>
                    <h3 className="font-serif font-bold text-lg sm:text-xl">아크메르 동탄 95 입주자모집공고 요약표 (총 812세대)</h3>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    화성특례시 동탄구 반송동 95번지 (M1-1-2블록) · 최고 49층 3개동 · 계약금 1천만원 정액제
                  </p>
                </div>

                <a
                  href="/docs/acmer_95_notice.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-gold-400 to-amber-600 text-navy-950 hover:brightness-105 font-extrabold text-xs shadow-md border border-amber-300 transition-all shrink-0"
                >
                  <Download className="w-3.5 h-3.5 text-navy-950" />
                  <span>95번지 공고문 전문 PDF 다운로드</span>
                </a>
              </div>

              <div 
                onClick={() => setZoomImage('/images/95/gg95.webp')}
                className="group relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 p-2 sm:p-4 flex justify-center cursor-zoom-in"
              >
                <img
                  src="/images/95/gg95.webp"
                  alt="아크메르 동탄 95번지 입주자모집공고 요약표"
                  className="w-full h-auto object-contain max-w-5xl mx-auto filter contrast-[1.02] group-hover:scale-[1.01] transition-transform duration-300"
                />
                <div className="absolute bottom-4 right-4 bg-slate-900/85 backdrop-blur-md text-amber-300 text-xs px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-amber-400/30 opacity-90 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>클릭 시 원본 고해상도 확대</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* 탭 3: 99번지 공고 요약표 */}
          {activeTab === 'block99' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-white p-3 sm:p-6 shadow-2xl overflow-hidden border border-slate-200"
            >
              <div className="mb-4 flex flex-col sm:flex-row items-center justify-between gap-3 px-2 text-slate-900">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-xs font-black bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-sm">99번지</span>
                    <h3 className="font-serif font-bold text-lg sm:text-xl">아크메르 동탄 99 입주자모집공고 요약표 (총 996세대)</h3>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    화성특례시 동탄구 반송동 99번지 (M1-2-2블록) · 최고 48층 4개동 · 계약금 1천만원 정액제
                  </p>
                </div>

                <a
                  href="/docs/acmer_99_notice.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-gold-400 to-amber-600 text-navy-950 hover:brightness-105 font-extrabold text-xs shadow-md border border-amber-300 transition-all shrink-0"
                >
                  <Download className="w-3.5 h-3.5 text-navy-950" />
                  <span>99번지 공고문 전문 PDF 다운로드</span>
                </a>
              </div>

              <div 
                onClick={() => setZoomImage('/images/99/gg99.webp')}
                className="group relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 p-2 sm:p-4 flex justify-center cursor-zoom-in"
              >
                <img
                  src="/images/99/gg99.webp"
                  alt="아크메르 동탄 99번지 입주자모집공고 요약표"
                  className="w-full h-auto object-contain max-w-5xl mx-auto filter contrast-[1.02] group-hover:scale-[1.01] transition-transform duration-300"
                />
                <div className="absolute bottom-4 right-4 bg-slate-900/85 backdrop-blur-md text-amber-300 text-xs px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-amber-400/30 opacity-90 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>클릭 시 원본 고해상도 확대</span>
                </div>
              </div>
            </motion.div>
          )}

        </div>

        {/* 하단 청약 자격 4대 핵심 가이드 카드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 text-amber-700 text-xs font-bold mb-2">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>청약통장 가입 24개월</span>
            </div>
            <h5 className="font-bold text-slate-900 text-sm">수도권 거주 만 19세 이상</h5>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              화성시 2년 이상(30%), 경기도 2년 이상(20%), 기타 수도권(50%) 우선공급 배정
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 text-amber-700 text-xs font-bold mb-2">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <span>전매제한 3년</span>
            </div>
            <h5 className="font-bold text-slate-900 text-sm">실거주의무기간 없음!</h5>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              소유권이전등기 완료 시 전매 가능하며, 실거주 의무기간이 없어 자금 운용이 유리합니다.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 text-amber-700 text-xs font-bold mb-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>계약금 1천만원 정액제</span>
            </div>
            <h5 className="font-bold text-slate-900 text-sm">1차 계약금 부담 완화</h5>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              계약 시 1천만원 납부 후 30일 이내에 잔여 계약금(10%)을 납부하는 정액제 조건
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 text-amber-700 text-xs font-bold mb-2">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>재당첨 제한 10년</span>
            </div>
            <h5 className="font-bold text-slate-900 text-sm">투기과열지구 규제 적용</h5>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              당첨 시 10년간 재당첨이 제한되므로 신중한 청약 전략이 필요합니다.
            </p>
          </div>
        </div>

      </div>

      {/* 고해상도 전체화면 확대 모달 */}
      {zoomImage && (
        <div
          onClick={() => setZoomImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out animate-fadeIn"
        >
          <button
            onClick={() => setZoomImage(null)}
            className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer z-50"
            title="닫기"
          >
            <X className="w-6 h-6" />
          </button>

          <img
            src={zoomImage}
            alt="공고문 고해상도 원본"
            className="max-h-[92vh] max-w-[94vw] object-contain rounded-xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
