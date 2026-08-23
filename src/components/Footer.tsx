'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldAlert, ArrowUp } from 'lucide-react';

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
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 shrink-0 flex items-center justify-center">
              <Image
                src="/images/intro_hd_transparent.png?v=6"
                alt="아크메르 동탄 푸터 로고"
                width={32}
                height={32}
                unoptimized
                className="w-full h-auto object-contain filter contrast-[1.1] drop-shadow-[0_0_6px_rgba(212,175,55,0.6)]"
              />
            </div>
            <div>
              <span className="font-serif text-xl font-bold text-white tracking-wider block">
                아크메르 동탄
              </span>
              <p className="text-slate-400 mt-0.5 font-medium">동탄 그 이상의 위대함을 만나다 - 2026년 9월 GRAND OPEN</p>
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

        {/* Disclaimer Note */}
        <div className="space-y-2 text-[11px] text-slate-400 leading-relaxed bg-[#0b1226]/80 p-4 rounded-xl border border-slate-800 shadow-sm">
          <div className="flex items-center gap-1.5 text-gold-400 font-bold mb-1">
            <ShieldAlert className="w-3.5 h-3.5 text-gold-400" /> 법적 유의사항 및 안내
          </div>
          <p>
            ※ 본 사이트상의 조감도, CG, 입지도, 구도 및 이미지 등은 소비자의 이해를 돕기 위한 것으로 실제 시공 및 인허가 과정에서 일부 변경될 수 있습니다.
          </p>
          <p>
            ※ 대표 전화번호(1600-0000) 및 견본주택 상세 주소는 2026년 9월 분양 승인 공고 후 정식으로 안내될 예정입니다.
          </p>
          <p>
            ※ 수집된 개인정보는 분양 안내 목적 외에는 타 용도로 일체 사용되지 않습니다.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-2">
          <p>© 2026 아크메르 동탄. All rights reserved.</p>
          <p className="font-mono text-slate-500 font-medium">PREMIUM RESIDENCE ARCHITECTURE</p>
        </div>
      </div>
    </footer>
  );
}
