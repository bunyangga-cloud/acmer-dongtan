'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Compass, Sparkles, Building2, MapPin, Layers } from 'lucide-react';

export default function OverviewSection() {
  const highlights = [
    {
      icon: Building2,
      title: "프리미엄 랜드마크",
      desc: "동탄을 대표하는 품격 있는 외관 디자인과 압도적 상징성"
    },
    {
      icon: Compass,
      title: "탁월한 입지 프리미엄",
      desc: "광역 교통망과 우수한 교육 환경, 풍부한 생활 인프라의 중심"
    },
    {
      icon: Sparkles,
      title: "하이엔드 라이프 공간",
      desc: "혁신적인 공간 설계와 최고급 특화 마감재로 완성하는 삶의 가치"
    },
    {
      icon: ShieldCheck,
      title: "안심 시공 및 신뢰",
      desc: "검증된 시공 노하우와 압도적인 기술력이 만드는 신뢰의 가치"
    }
  ];

  return (
    <section id="overview" className="py-24 relative bg-navy-950 text-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-gold-400 font-serif text-sm font-semibold tracking-widest uppercase">
            OVERVIEW & BRAND
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
            동탄의 새로운 자부심, <span className="gold-gradient-text">아크메르 동탄</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            자연과 도시, 주거와 문화가 어우러지는 완벽한 밸런스.<br className="hidden sm:block" />
            9월, 당신만을 위한 시그니처 랜드마크가 드디어 펼쳐집니다.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:border-gold-500/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mb-5 text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-serif mb-2 text-white group-hover:text-gold-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Summary Details Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 rounded-2xl bg-navy-900/60 border border-gold-500/20 p-8 md:p-10 backdrop-blur-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="space-y-2 pt-4 md:pt-0">
              <div className="flex items-center justify-center gap-2 text-gold-400 text-sm font-medium">
                <MapPin className="w-4 h-4" /> 사업 위치
              </div>
              <p className="text-xl font-bold text-white font-serif">경기도 화성시 동탄 신도시</p>
              <p className="text-xs text-slate-400">핵심 주거 및 문화 상업 중심지</p>
            </div>

            <div className="space-y-2 pt-4 md:pt-0">
              <div className="flex items-center justify-center gap-2 text-gold-400 text-sm font-medium">
                <Layers className="w-4 h-4" /> 브랜드 가치
              </div>
              <p className="text-xl font-bold text-white font-serif">ACMER PREMIUM</p>
              <p className="text-xs text-slate-400">희소성 높은 하이엔드 단지</p>
            </div>

            <div className="space-y-2 pt-4 md:pt-0">
              <div className="flex items-center justify-center gap-2 text-gold-400 text-sm font-medium">
                <Sparkles className="w-4 h-4" /> 분양 일정
              </div>
              <p className="text-xl font-bold text-gold-300 font-serif">2026년 9월 OPEN</p>
              <p className="text-xs text-slate-400">사전 관심고객 알림 신청 접수 중</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
