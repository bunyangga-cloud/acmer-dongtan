'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Phone, CalendarCheck, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenPhoneModal: () => void;
  onNavigateSection: (targetId: string) => void;
}

export default function Header({ onOpenPhoneModal, onNavigateSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '사업개요', targetId: 'overview' },
    { name: '조감도 갤러리', targetId: 'birdseye' },
    { name: '입지환경', targetId: 'location' },
    { name: 'Q&A (자주묻는질문)', targetId: 'faq' },
    { name: '관심고객등록', targetId: 'register' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 shadow-md shadow-slate-200/60 backdrop-blur-md border-b border-slate-200/80 py-3'
          : 'bg-gradient-to-b from-white/95 via-white/80 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Area (한글 '아크메르 동탄' 깔끔 배치) */}
          <button onClick={() => onNavigateSection('top')} className="group flex items-center gap-3 text-left">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Image
                src="/images/intro_hd_transparent.png?v=6"
                alt="아크메르 동탄 로고"
                width={40}
                height={40}
                unoptimized
                priority
                className="w-full h-auto object-contain filter contrast-[1.1] drop-shadow-[0_0_6px_rgba(212,175,55,0.4)]"
              />
            </div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-slate-900 group-hover:text-amber-700 transition-colors">
              아크메르 동탄
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.targetId}
                onClick={() => onNavigateSection(link.targetId)}
                className="text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors tracking-wide relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenPhoneModal}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-50 border border-slate-200 text-slate-700 hover:border-amber-400 hover:text-amber-700 transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>전화문의 <strong className="text-amber-600 font-bold">1600-****</strong></span>
            </button>

            <button
              onClick={() => onNavigateSection('register')}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-white hover:brightness-105 shadow-md shadow-amber-500/25 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>관심고객등록</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center sm:hidden gap-2">
            <button
              onClick={() => onNavigateSection('register')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500 text-white"
            >
              등록
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 pt-4 pb-6 mt-3 space-y-4 shadow-xl">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.targetId}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateSection(link.targetId);
                }}
                className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 hover:text-amber-600 hover:bg-amber-50 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPhoneModal();
              }}
              className="w-full py-3 rounded-xl text-xs font-bold bg-slate-50 border border-amber-300 text-amber-800 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>대표번호 1600-**** 안내</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateSection('register');
              }}
              className="w-full py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-600 text-white flex items-center justify-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>관심고객 사전등록 신청</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
