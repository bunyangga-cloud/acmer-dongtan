'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, X, Calendar, BellRing } from 'lucide-react';

interface PhoneModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateRegister: () => void;
}

export default function PhoneModal({ isOpen, onClose, onNavigateRegister }: PhoneModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white border border-slate-200 p-6 md:p-8 shadow-2xl z-10 text-slate-900"
        >
          {/* Top Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 border border-amber-300 mb-6">
            <Lock className="w-8 h-8 text-amber-700 animate-pulse" />
          </div>

          {/* Header Text */}
          <div className="text-center space-y-2">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
              보안 및 비공개 안내
            </span>
            <h3 className="text-2xl font-serif font-bold text-slate-900 break-keep">
              대표 전화번호 안내
            </h3>
            <div className="text-xl font-bold tracking-wider text-amber-700 pt-1 font-mono">
              1600-**** (오픈 직전 공개)
            </div>
          </div>

          {/* Description */}
          <div className="mt-5 space-y-3 bg-slate-50 rounded-xl p-4 border border-slate-200 text-sm text-slate-700 leading-relaxed text-center break-keep font-normal">
            <p>
              아크메르 동탄은 현재 공식 오픈 준비 단계에 있습니다.<br />
              전화 상담 및 모델하우스 대표번호는 <strong className="text-amber-800 font-bold">2026년 9월 GRAND OPEN</strong> 시 공식 공개됩니다.
            </p>
            <div className="flex items-center justify-center gap-2 text-xs text-amber-800 font-semibold pt-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>오픈 예정일: 2026년 9월</span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={() => {
                onClose();
                onNavigateRegister();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-white font-bold hover:brightness-105 shadow-md shadow-amber-500/25 transition-all text-sm break-keep"
            >
              <BellRing className="w-4 h-4 shrink-0" />
              <span>관심고객 등록하고 오픈 알림 받기</span>
            </button>
            <button
              onClick={onClose}
              className="w-full py-2.5 px-4 rounded-xl border border-slate-300 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors text-sm font-semibold"
            >
              닫기
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
