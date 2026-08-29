'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldAlert, ArrowUp, Building2, HardHat, Landmark } from 'lucide-react';

interface FooterProps {
  onOpenPhoneModal: () => void;
}

export default function Footer({ onOpenPhoneModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070c1a] text-slate-400 text-xs py-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Info Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div className="flex items-center gap-4">
            <div className="relative h-9 sm:h-11 w-auto aspect-[2184/720] shrink-0 flex items-center">
              <Image
                src="/images/logo.png"
                alt="아크메르 동탄 푸터 로고"
                width={135}
                height={45}
                unoptimized
                className="h-full w-auto object-contain filter contrast-[1.05] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
              />
            </div>
            <div className="border-l border-slate-800 pl-4 hidden sm:block">
              <p className="text-slate-400 font-medium">동탄 그 이상의 위대함을 만나다</p>
              <p className="text-gold-400/90 text-[11px] font-mono">2026년 9월 GRAND OPEN</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPhoneModal}
              className="px-4 py-2 rounded-lg bg-[#0d162e] border border-slate-700 text-slate-200 hover:text-gold-400 hover:border-gold-500/50 transition-all font-semibold shadow-sm"
            >
              전화문의 (1600-**** 오픈예정)
            </button>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-[#0d162e] border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-all shadow-sm"
              title="맨 위로 이동"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Project Entities Information (시행 / 위탁 / 시공) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 rounded-2xl bg-[#091024]/90 border border-slate-800/90 shadow-sm text-xs">
          {/* 시행 */}
          <div className="space-y-1 sm:border-r sm:border-slate-800/80 sm:pr-4">
            <div className="flex items-center gap-1.5 text-gold-400 font-bold tracking-wider">
              <Landmark className="w-3.5 h-3.5 text-gold-400" />
              <span>시행</span>
            </div>
            <p className="text-white font-semibold text-sm pt-0.5 font-serif">
              KB부동산신탁㈜
            </p>
            <p className="text-[11px] text-slate-500">신뢰의 안전 자금관리 신탁사</p>
          </div>

          {/* 위탁 */}
          <div className="space-y-1 sm:border-r sm:border-slate-800/80 sm:pr-4">
            <div className="flex items-center gap-1.5 text-gold-400 font-bold tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-gold-400" />
              <span>위탁</span>
            </div>
            <p className="text-slate-200 font-medium text-sm pt-0.5">
              <span className="text-slate-400 text-xs">95번지 :</span> 신우개발㈜ <span className="mx-1 text-slate-600">|</span> <span className="text-slate-400 text-xs">99번지 :</span> 화우디앤씨㈜
            </p>
            <p className="text-[11px] text-slate-500">M1-1-2블록 & M1-2-2블록 시행위탁</p>
          </div>

          {/* 시공 */}
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-gold-400 font-bold tracking-wider">
              <HardHat className="w-3.5 h-3.5 text-gold-400" />
              <span>시공</span>
            </div>
            <p className="text-white font-semibold text-sm pt-0.5 font-serif">
              ㈜포스코이앤씨
            </p>
            <p className="text-[11px] text-slate-500">대한민국 1군 메이저 브랜드 책임시공</p>
          </div>
        </div>

        {/* Disclaimer Note (법적 필수 고지사항) */}
        <div className="space-y-2 text-[11px] text-slate-400 leading-relaxed bg-[#0b1226]/80 p-5 rounded-xl border border-slate-800 shadow-sm">
          <div className="flex items-center gap-1.5 text-gold-400 font-bold mb-1.5 text-xs">
            <ShieldAlert className="w-4 h-4 text-gold-400" /> 법적 유의사항 및 필수 고지사항
          </div>
          <p>
            ※ 본 사이트상의 조감도, CG, 영상, 입지도 및 이미지 등은 소비자의 이해를 돕기 위한 사전 홍보물로 실제 시공 및 인허가 과정에서 차이가 있을 수 있으므로 견본주택 및 현장 방문을 통해 확인하시기 바랍니다.
          </p>
          <p>
            ※ 사업개요 및 공급규모, 일정 등은 「주택공급에 관한 규칙」 등 관계 법령 및 인허가 과정에 따라 일부 변경될 수 있으며, 추후 발표될 입주자모집공고를 반드시 확인하시기 바랍니다.
          </p>
          <p>
            ※ 동탄~인덕원선 반송역(예정) 직결 및 광역교통 계획은 관계기관 자료에 기반한 계획 사항으로 인허가 과정에서 변경 또는 취소될 수 있습니다. (근거: 국토교통부고시 제2025-156호 수도권광역급행철도 A노선 민간투자사업 실시계획 등)
          </p>
          <p>
            ※ 시공 하자 담보책임 관련 사항은 「집합건물의 소유 및 관리에 관한 법률」 제9조의2·시행령 제5조, 「공동주택관리법」 제36조·시행령 제36조가 적용됩니다.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-2 pt-2 border-t border-slate-900">
          <p>© 2026 아크메르 동탄. All rights reserved.</p>
          <p className="font-mono text-slate-500 font-medium">PREMIUM RESIDENCE ARCHITECTURE</p>
        </div>
      </div>
    </footer>
  );
}
