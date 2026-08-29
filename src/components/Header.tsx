'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Phone, CalendarCheck, Sparkles } from 'lucide-react';
import AudioPlayer from '@/components/AudioPlayer';

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
    { name: '핵심요약 6', targetId: 'core-summary' },
    { name: '조감도 갤러리', targetId: 'birdseye' },
    { name: '입지환경', targetId: 'location' },
    { name: 'Q&A (자주묻는질문)', targetId: 'faq' },
    { name: '관심고객등록', targetId: 'register' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#091024]/95 shadow-2xl shadow-black/50 backdrop-blur-md border-b border-gold-500/30 py-3'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Area */}
          <button onClick={() => onNavigateSection('top')} className="group flex items-center text-left">
            <div className="relative h-12 sm:h-[60px] w-auto aspect-[2172/724] shrink-0 flex items-center group-hover:scale-105 transition-transform">
              <Image
                src="/images/logo2.png"
                alt="아크메르 동탄 로고"
                width={210}
                height={70}
                unoptimized
                priority
                className="h-full w-auto object-contain drop-shadow-[0_2px_12px_rgba(255,255,255,0.25)] filter brightness-105"
              />
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.targetId}
                onClick={() => onNavigateSection(link.targetId)}
                className="text-sm font-semibold text-slate-200 hover:text-gold-400 transition-colors tracking-wide relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Desktop Right CTA & BGM Player */}
          <div className="hidden sm:flex items-center gap-3">
            <AudioPlayer />

            <button
              onClick={onOpenPhoneModal}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-navy-950/80 border border-slate-700 text-slate-200 hover:border-gold-500/50 hover:text-white transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>전화문의 <strong className="text-gold-400 font-bold">1600-****</strong></span>
            </button>

            <button
              onClick={() => onNavigateSection('register')}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 via-gold-400 to-amber-600 text-navy-950 hover:brightness-110 shadow-lg shadow-gold-500/25 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>관심고객등록</span>
            </button>
          </div>

          {/* Mobile Menu & BGM Toggle */}
          <div className="flex items-center sm:hidden gap-2">
            <AudioPlayer className="px-2 py-1 text-[10px]" />
            <button
              onClick={() => onNavigateSection('register')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-gold-500 text-navy-950"
            >
              등록
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-navy-900 border border-slate-800 text-slate-200 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#091024]/95 backdrop-blur-md border-t border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-4 shadow-2xl">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.targetId}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateSection(link.targetId);
                }}
                className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-gold-400 hover:bg-navy-900/60 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPhoneModal();
              }}
              className="w-full py-3 rounded-xl text-xs font-bold bg-navy-900 border border-gold-500/30 text-gold-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>대표번호 1600-**** 안내</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateSection('register');
              }}
              className="w-full py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-600 text-navy-950 flex items-center justify-center gap-2"
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
