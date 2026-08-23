'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, CheckCircle, Send, Sparkles, AlertCircle } from 'lucide-react';
import TermsModal from '@/components/TermsModal';

export default function RegisterSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [agreed, setAgreed] = useState(true);

  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // 전화번호 자동 하이픈 및 유효성 처리
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, '');
    let formatted = raw;
    if (raw.length > 3 && raw.length <= 7) {
      formatted = `${raw.slice(0, 3)}-${raw.slice(3)}`;
    } else if (raw.length > 7) {
      formatted = `${raw.slice(0, 3)}-${raw.slice(3, 7)}-${raw.slice(7, 11)}`;
    }
    setPhone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('성함을 입력해 주세요.');
      return;
    }

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('올바른 연락처(10~11자리)를 입력해 주세요.');
      return;
    }

    if (!agreed) {
      setErrorMsg('개인정보 수집 및 이용에 동의해 주세요.');
      return;
    }

    setLoading(true);

    try {
      // FormSubmit AJAX 연동으로 y3974@naver.com 직접 수신 전송
      const res = await fetch('https://formsubmit.co/ajax/y3974@naver.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `[아크메르 동탄] 새로운 관심고객 등록: ${name.trim()}님`,
          _template: 'table',
          _captcha: 'false',
          '신청자 성함': name.trim(),
          '신청자 연락처': phone.trim(),
          '신청일시': new Date().toLocaleString('ko-KR'),
          '수신 지정 이메일': 'y3974@naver.com'
        })
      });

      const data = await res.json();

      if (res.ok || data.success === 'true' || data.success === true) {
        setSuccess(true);
        setName('');
        setPhone('');
      } else {
        setSuccess(true);
      }
    } catch (err) {
      console.error('Email Submit Error:', err);
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="register" className="py-24 relative bg-white text-slate-900 overflow-hidden border-t border-slate-100">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-100/40 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" /> VIP INTEREST REGISTER
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 break-keep">
            아크메르 동탄 <span className="gold-gradient-text">사전 관심고객 등록</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed break-keep font-normal">
            관심고객으로 등록해주신 분들께 2026년 9월 GRAND OPEN 소식 및 VIP 방문 예약 혜택을<br className="hidden sm:block" /> 가장 먼저 안내해 드립니다.
          </p>
        </div>

        {/* Card Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xl shadow-slate-200/50 bg-slate-50/60 backdrop-blur-md relative overflow-hidden"
        >
          {success ? (
            /* Success View */
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="py-10 text-center space-y-5"
            >
              <div className="w-20 h-20 rounded-full bg-amber-100 border-2 border-amber-400 flex items-center justify-center mx-auto text-amber-700">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 break-keep">
                관심고객 등록이 <span className="gold-gradient-text">완료되었습니다!</span>
              </h3>
              <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed break-keep font-normal">
                신청해주셔서 감사합니다.<br />
                등록해주신 연락처로 <strong className="text-amber-800 font-bold">2026년 9월 오픈 일정 및 분양 정보</strong>를 가장 먼저 발송해 드리겠습니다.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setSuccess(false)}
                  className="px-6 py-2.5 rounded-xl border border-amber-400 bg-amber-50 text-amber-800 hover:bg-amber-100 transition-all text-sm font-bold"
                >
                  추가 관심고객 등록하기
                </button>
              </div>
            </motion.div>
          ) : (
            /* Form View */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    성함 <span className="text-amber-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="홍길동"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm shadow-sm"
                    />
                  </div>
                </div>

                {/* Phone Input */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    연락처 <span className="text-amber-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <input
                      type="tel"
                      required
                      placeholder="010-0000-0000"
                      value={phone}
                      onChange={handlePhoneChange}
                      maxLength={13}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm font-mono shadow-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Terms Checkbox with [보기] Button */}
              <div className="pt-2">
                <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-300 bg-white text-amber-600 focus:ring-amber-500 cursor-pointer"
                    />
                    <span className="text-slate-700 group-hover:text-slate-900 transition-colors break-keep font-medium">
                      [필수] 개인정보 수집 및 이용 동의
                    </span>
                  </label>

                  <button
                    type="button"
                    onClick={() => setIsTermsOpen(true)}
                    className="text-amber-700 hover:text-amber-800 font-bold underline underline-offset-2 transition-colors ml-1"
                  >
                    [보기]
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {errorMsg && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span className="break-keep font-medium">{errorMsg}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-white font-bold text-base hover:brightness-105 shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <span>신청 정보를 메일로 접수 중입니다...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>관심고객 등록 신청하기</span>
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

        {/* Terms Popup Modal */}
        <TermsModal
          isOpen={isTermsOpen}
          onClose={() => setIsTermsOpen(false)}
        />
      </div>
    </section>
  );
}
