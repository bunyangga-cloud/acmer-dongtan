'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, CalendarCheck, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenPhoneModal: () => void;
  onNavigateRegister: () => void;
}

export default function Header({ onOpenPhoneModal, onNavigateRegister }: HeaderProps) {
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
    { name: '사업개요', href: '#overview' },
    { name: '조감도 갤러리', href: '#birdseye' },
    { name: '입지환경', href: '#location' },
    { name: 'Q&A (자주묻는질문)', href: '#faq' },
    { name: '관심고객등록', href: '#register' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-2xl shadow-black/50'
          : 'bg-gradient-to-b from-navy-950/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Area */}
          <a href="#" className="group flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 via-gold-500 to-gold-700 flex items-center justify-center p-0.5 shadow-md shadow-gold-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-navy-950 rounded-[6px] flex items-center justify-center">
                <span className="font-serif text-gold-400 text-xl font-bold tracking-tighter">A</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-bold tracking-widest text-white group-hover:text-gold-300 transition-colors">
                ACMER <span className="text-gold-400">DONGTAN</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 uppercase -mt-1 font-sans">
                아크메르 동탄
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-gold-400 transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Phone Button (Hidden / Modal Trigger) */}
            <button
              onClick={onOpenPhoneModal}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-navy-900/80 border border-gold-500/30 text-xs text-gold-300 hover:bg-gold-500/10 hover:border-gold-400 transition-all shadow-sm group"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400 group-hover:rotate-12 transition-transform" />
              <span>전화문의 <strong className="text-white font-mono">1600-****</strong></span>
            </button>

            {/* Register CTA */}
            <button
              onClick={onNavigateRegister}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-bold text-xs hover:brightness-110 shadow-lg shadow-gold-500/20 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>9월 사전 관심고객등록</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenPhoneModal}
              className="p-2 rounded-lg bg-navy-900 border border-gold-500/30 text-gold-400"
              title="전화문의"
            >
              <Phone className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/60 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-b border-gold-500/20 px-4 pt-3 pb-6 mt-3 space-y-3">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-gold-400 py-2 border-b border-slate-800/60"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPhoneModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-navy-900 border border-gold-500/30 text-gold-400 text-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              <span>전화문의 (1600-**** 오픈예정)</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateRegister();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 font-bold text-sm"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>9월 오픈 관심고객 신청하기</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
