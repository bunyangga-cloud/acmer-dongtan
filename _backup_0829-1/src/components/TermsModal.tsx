'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
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

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg max-h-[85vh] flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-2xl z-10 text-slate-900"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-700" />
              <h3 className="text-lg font-serif font-bold text-slate-900">
                개인정보 수집 및 이용 동의 약관
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Terms Content */}
          <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs text-slate-600 leading-relaxed font-sans font-normal">
            <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200/80 space-y-1">
              <p className="font-bold text-amber-900">
                아크메르 동탄 관심고객 등록을 위한 개인정보 처리방침
              </p>
              <p className="text-[11px] text-amber-800">
                수집된 개인정보는 분양 정보 안내 및 맞춤 상담 목적으로만 활용되며, 안전하게 관리됩니다.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-amber-700" /> 1. 개인정보 수집 및 이용 목적
              </h4>
              <ul className="list-disc pl-4 space-y-1 text-slate-600">
                <li>아크메르 동탄 2026년 9월 분양 일정 및 이벤트 정보 안내</li>
                <li>견본주택(모델하우스) VIP 사전 방문 예약 접수 및 안내</li>
                <li>청약 자격 및 분양 관련 1:1 맞춤형 고객 상담 서비스 제공</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-amber-700" /> 2. 수집하는 개인정보 항목
              </h4>
              <p className="text-slate-600">
                - 필수 항목: 성명(이름), 휴대전화번호(연락처)
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-amber-700" /> 3. 개인정보 보유 및 이용 기간
              </h4>
              <p className="text-slate-600">
                - 수집일로부터 분양 완료 및 관련 상담 종료 시까지 보관하며, 목적 달성 후 지체 없이 안전하게 파기합니다.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-amber-700" /> 4. 동의 거부 권리 및 불이익 안내
              </h4>
              <p className="text-slate-600">
                - 귀하는 개인정보 수집 및 이용 동의를 거부할 권리가 있습니다. 단, 동의 거부 시 사전 관심고객 등록 및 분양 우선 안내 서비스 이용에 제한이 있을 수 있습니다.
              </p>
            </div>
          </div>

          {/* Footer Action */}
          <div className="p-4 border-t border-slate-100 bg-slate-50">
            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold hover:brightness-105 transition-all text-sm shadow-md shadow-amber-500/20"
            >
              확인 및 닫기
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
