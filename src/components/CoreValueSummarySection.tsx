'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Train, 
  Briefcase, 
  Trees, 
  GraduationCap, 
  Palette, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface CoreValueSummarySectionProps {
  onNavigateRegister?: () => void;
}

export default function CoreValueSummarySection({ onNavigateRegister }: CoreValueSummarySectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const coreValues = [
    {
      id: 1,
      tag: "PROJECT OVERVIEW",
      badge: "프로젝트 개요",
      title: "최고 49층 · 총 1,808세대 역사적 랜드마크",
      subtitle: "㈜포스코이앤씨 책임시공 · KB부동산신탁㈜ 자금관리",
      icon: Building2,
      accentColor: "from-amber-400 to-gold-500",
      description: "20년의 염원이 담긴 동탄의 중심, 1군 메이저 건설사 ㈜포스코이앤씨의 독보적 기술력과 KB부동산신탁㈜의 안전한 자금관리로 완성되는 메머드급 상징 랜드마크 대단지입니다.",
      specs: [
        { label: "단지 규모", value: "지하 3층 ~ 최고 49층, 총 1,808세대" },
        { label: "시공사", value: "㈜포스코이앤씨 (1군 메이저 브랜드)" },
        { label: "시행 / 위탁", value: "KB부동산신탁㈜ / 95번지(신우개발), 99번지(화우디앤씨)" }
      ]
    },
    {
      id: 2,
      tag: "SPEED TRAFFIC",
      badge: "특급 광역 교통",
      title: "반송역 직결 계획 & GTX-A 서울역 30분대",
      subtitle: "동탄인덕원선 반송역 · SRT 동탄역 · 기흥동탄IC",
      icon: Train,
      accentColor: "from-blue-400 to-cyan-500",
      description: "동탄~인덕원선 반송역(예정) 직결 계획과 GTX-A 전구간 개통(예정) 시 서울역 30분대 쾌속 도달, SRT 동탄역 및 수도권 최다 광역버스 노선망을 품은 사통팔달 교통 허브입니다.",
      specs: [
        { label: "인동선 반송역", value: "단지 직결 계획 추진 (초역세권 프리미엄)" },
        { label: "GTX-A & SRT", value: "서울역 30분대 쾌속 연계 & 전국 광역철도" },
        { label: "도로망", value: "기흥동탄IC 및 지역 내 최다 광역버스 노선" }
      ],
      notice: "※ 인동선 직결은 추후 사업 인허가 과정에서 변경/취소될 수 있습니다."
    },
    {
      id: 3,
      tag: "PERFECT LIFE",
      badge: "삼성 직주근접 & 인프라",
      title: "삼성 나노시티 워라밸 & 중심 쇼핑 인프라",
      subtitle: "삼성전자 화성·기흥 캠퍼스 도보·셔틀 통근",
      icon: Briefcase,
      accentColor: "from-emerald-400 to-teal-500",
      description: "삼성전자 화성·기흥 캠퍼스(NanoCity, 디스플레이 등)와 바로 인접하여 도보 및 셔틀로 출퇴근 가능한 압도적 직주근접과 롯데백화점, 스타필드마켓의 편리한 일상을 선사합니다.",
      specs: [
        { label: "삼성 직주근접", value: "삼성전자 화성·기흥 캠퍼스 도보/셔틀권" },
        { label: "원스톱 쇼핑", value: "롯데백화점, 스타필드마켓, 프리미엄 아울렛" },
        { label: "생활 문화", value: "동탄 메타폴리스 상권 및 중심 문화 인프라" }
      ]
    },
    {
      id: 4,
      tag: "CENTER OF NATURE",
      badge: "파노라마 자연환경",
      title: "센트럴파크 & 반석산 근린공원 더블 뷰",
      subtitle: "경부고속도로 지하화로 더욱 쾌적해진 청정 힐링",
      icon: Trees,
      accentColor: "from-green-400 to-emerald-500",
      description: "동탄 센트럴파크와 반석산 근린공원의 광활한 더블 파노라마 뷰(일부 세대)를 품었으며, 경부고속도로 지하화 사업 완공으로 도심 속 독보적인 청정 에코 라이프를 누립니다.",
      specs: [
        { label: "더블 파노라마", value: "센트럴파크 + 반석산 근린공원 조망 (일부)" },
        { label: "지하화 쾌적성", value: "경부고속도로 상부 공원화 연결 및 주거 쾌적성 극대화" },
        { label: "수변·문화공원", value: "홍상용 문화의거리, 동탄여울공원, 오산천 수변공원" }
      ]
    },
    {
      id: 5,
      tag: "EXCELLENT EDU",
      badge: "명문 교육환경",
      title: "안심 도보 학군 & 명문 학원가 교육 인프라",
      subtitle: "동탄 1·2신도시를 아우르는 명품 교육 클러스터",
      icon: GraduationCap,
      accentColor: "from-violet-400 to-purple-500",
      description: "자녀의 안전한 통학 환경과 동탄 핵심 명문 학원가, 공공도서관이 인접하여 아이들의 미래를 밝혀주는 수준 높은 원스톱 교육 인프라가 갖추어져 있습니다.",
      specs: [
        { label: "교육 환경", value: "초·중·고교 안심 통학권 및 명문 학군 형성" },
        { label: "학원가 인프라", value: "동탄 중심 밀집 대형 학원가 및 스터디 인프라" },
        { label: "문화·교육시설", value: "복합문화센터, 시립도서관 등 풍부한 지식 공간" }
      ]
    },
    {
      id: 6,
      tag: "ART & DESIGN",
      badge: "건축 예술 특화",
      title: "세계적 아티스트 '자나이나 미레이로' 디자인 협업",
      subtitle: "에르메스·샤넬·디올 협업 디자이너의 하이엔드 외관",
      icon: Palette,
      accentColor: "from-pink-400 to-rose-500",
      description: "에르메스, 샤넬, 디올 등 세계 최정상 럭셔리 하우스와 협업해 온 세계적 텍스타일 아티스트 자나이나 미레이로(Janaïna Milheiro)와의 협업으로 외관 예술성을 극대화했습니다.",
      specs: [
        { label: "글로벌 협업", value: "자나이나 미레이로(Janaïna Milheiro) 디자인" },
        { label: "디자인 이력", value: "에르메스(Hermès) · 샤넬(Chanel) · 디올(Dior) 협업" },
        { label: "하이엔드 마감", value: "시간이 지나도 변치 않는 최고급 프리미엄 외관 마감재" }
      ]
    }
  ];

  // 3.2초마다 순차적으로 테두리 순환 이동 (1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 1)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % coreValues.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [coreValues.length]);

  return (
    <section id="core-summary" className="py-24 relative bg-[#060b18] text-white overflow-hidden border-t border-slate-800">
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gold-500/10 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/50 text-gold-300 text-xs font-bold tracking-wider">
            <Sparkles className="w-4 h-4 text-gold-400" /> ACMER DONGTAN CORE VALUE 6
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            아크메르 동탄 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-gold-200 to-amber-400">6대 핵심 가치 총정리</span>
          </h2>
          
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
          
          {/* Main Key Copy Quote Box */}
          <div className="mt-4 p-5 rounded-2xl bg-gradient-to-r from-navy-950 via-[#0d162e] to-navy-950 border border-gold-500/30 shadow-xl text-gold-200/90 font-serif text-sm sm:text-base leading-relaxed break-keep">
            “20년의 염원이 담긴 동탄의 그 자리에, 삶의 모든 것을 소유하는 동탄의 새로운 상징이 될 역사적 랜드마크를 완성합니다.”
          </div>
        </div>

        {/* 6 Core Value Cards Grid (순차적 골드 테두리 순환 이동 모션 적용) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {coreValues.map((item, idx) => {
            const IconComponent = item.icon;
            const isActive = activeIndex === idx;

            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => setActiveIndex(idx)}
                animate={{
                  scale: isActive ? 1.03 : 0.98,
                  y: isActive ? -8 : 0,
                }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-500 cursor-pointer relative overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-b from-[#121f42] to-[#0c1630] border-2 border-gold-400 shadow-[0_0_35px_rgba(212,175,55,0.35)] z-20'
                    : 'bg-[#0a1226]/85 border border-slate-800/90 hover:border-slate-700 opacity-90 hover:opacity-100 z-10'
                }`}
              >
                {/* Accent Top Border Glow when Active */}
                {isActive && (
                  <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-amber-400 via-gold-300 to-amber-400 animate-pulse" />
                )}

                <div>
                  {/* Top Category Badge & Index */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full border text-[11px] font-bold tracking-wide transition-colors ${
                        isActive
                          ? 'bg-gold-500/20 border-gold-400 text-gold-300'
                          : 'bg-navy-950 border-slate-700 text-slate-400'
                      }`}>
                        {item.badge}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider hidden sm:inline">
                        {item.tag}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
                      )}
                      <span className={`text-sm font-mono font-bold transition-colors ${
                        isActive ? 'text-gold-400 font-extrabold' : 'text-slate-600'
                      }`}>
                        0{item.id}
                      </span>
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 shadow-md ${
                      isActive
                        ? 'bg-gradient-to-br from-gold-400 to-gold-600 text-navy-950 scale-110 shadow-gold-500/40'
                        : 'bg-[#0f1b3b] border border-gold-500/30 text-gold-400'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className={`text-lg sm:text-xl font-bold font-serif transition-colors break-keep leading-snug ${
                        isActive ? 'text-gold-300' : 'text-white'
                      }`}>
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-amber-400/90 mt-1 font-mono">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal break-keep mb-6">
                    {item.description}
                  </p>

                  {/* Structured Spec Table List */}
                  <div className="space-y-2 pt-4 border-t border-slate-800/80">
                    {item.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start justify-between gap-3 text-xs">
                        <span className="text-slate-400 font-medium shrink-0 flex items-center gap-1.5">
                          <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-gold-400' : 'text-slate-500'}`} />
                          {spec.label}
                        </span>
                        <span className={`font-semibold text-right break-keep transition-colors ${
                          isActive ? 'text-white' : 'text-slate-300'
                        }`}>
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Optional Footnote Notice */}
                {item.notice && (
                  <div className="mt-5 pt-3 border-t border-slate-800/60 text-[10px] text-slate-500 leading-normal">
                    {item.notice}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0c1630] via-navy-950 to-[#0c1630] border border-gold-500/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-xl font-bold font-serif text-white">
              아크메르 동탄 공식 분양 일정 및 모델하우스 안내
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              인허가 및 모집공고 일정 확정 시 가장 빠른 1순위 VIP 확정 알림 문자를 발송해 드립니다.
            </p>
          </div>

          {onNavigateRegister && (
            <button
              onClick={onNavigateRegister}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-gold-400 to-amber-600 text-navy-950 font-bold text-sm hover:brightness-110 shadow-lg shadow-gold-500/30 transition-all flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <span>VIP 관심고객 등록하기</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
