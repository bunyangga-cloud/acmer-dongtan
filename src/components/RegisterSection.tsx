'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, CheckCircle, Send, Sparkles, AlertCircle, ShieldCheck, CalendarClock, BellRing } from 'lucide-react';
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

    const now = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
    const payload = {
      name: name.trim(),
      phone: phone.trim(),
      date: now,
      source: '아크메르 동탄 웹사이트',
    };

    // 1) 구글 스프레드시트 Webhook URL (발급받으신 Apps Script 웹 앱 주소)
    const googleSheetUrl =
      process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL ||
      'https://script.google.com/macros/s/AKfycbwltdIZbBGc_ny02Xz6gJzznSn2NGdF_y_dxIzflXNQILUFxRRQ3pSOqIGsvz85-L7X/exec';

    // 병렬 전송 태스크
    const tasks: Promise<any>[] = [
      // 네이버 메일 알림 전송
      fetch('https://formsubmit.co/ajax/y3974@naver.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `[아크메르 동탄] 새로운 관심고객 등록: ${name.trim()}님`,
          _template: 'table',
          _captcha: 'false',
          '신청자 성함': name.trim(),
          '신청자 연락처': phone.trim(),
          '신청일시': now,
          '수신 지정 이메일': 'y3974@naver.com',
        }),
      }),
    ];

    // 구글 시트 Webhook URL이 있을 경우 구글 시트에도 직접 전송
    if (googleSheetUrl) {
      tasks.push(
        fetch(googleSheetUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })
      );
    }

    try {
      await Promise.allSettled(tasks);
      setSuccess(true);
      setName('');
      setPhone('');
    } catch (err) {
      console.error('Submit Error:', err);
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
            아크메르 동탄은 불확실한 미확정 정보로 고객님께 혼선을 드리지 않습니다.<br className="hidden sm:block" />
            <strong className="text-slate-900 font-semibold">모델하우스 관람 가능 일자 및 공식 모집공고 일정</strong>이 확정되는 즉시 1순위 VIP 확정 알림을 발송해 드립니다.
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
            /* Success View (고객 안심 및 이탈 방지 메시지) */
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="py-6 text-center space-y-6"
            >
              <div className="w-20 h-20 rounded-full bg-amber-100 border-2 border-amber-400 flex items-center justify-center mx-auto text-amber-700 shadow-sm">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div>
                <span className="inline-block px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300 mb-2">
                  VIP 사전 알림 등록 접수 완료
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 break-keep">
                  관심고객 등록이 <span className="gold-gradient-text">완료되었습니다!</span>
                </h3>
              </div>

              {/* 일정 안내 및 이탈 방지 핵심 박스 */}
              <div className="max-w-xl mx-auto bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 text-left space-y-3.5 shadow-sm">
                <div className="flex items-center gap-2 font-bold text-amber-800 text-sm pb-2.5 border-b border-slate-100">
                  <CalendarClock className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>향후 일정 및 안내 발송 시점 안내</span>
                </div>
                
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed break-keep">
                  현재 아크메르 동탄은 공식 분양 승인 및 일정 조율 단계에 있습니다. <strong className="text-slate-900">확정되지 않은 정보로 섣불리 연락드려 혼선을 드리지 않기 위해, 무분별한 스팸성 영업 전화는 일체 드리지 않습니다.</strong>
                </p>
                
                <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs sm:text-sm text-amber-950 font-medium leading-relaxed">
                  📢 <strong>[모델하우스 관람 가능 일자]</strong> 및 <strong>[공식 입주자모집공고 일정]</strong>이 정식 확정되는 즉시, 등록해주신 연락처로 <strong>가장 빠른 1순위 VIP 확정 알림 문자</strong>를 발송해 드리겠습니다.
                </div>

                <div className="pt-1 text-[11px] text-slate-400 leading-relaxed">
                  ※ 타 사이트나 개인 블로그의 미확정 추측성 정보에 유의하시기 바라며, 공식 확정 소식은 본 등록처를 통해 가장 안전하고 정확하게 전달됩니다.
                </div>
              </div>

              {/* 확인 닫기 버튼 */}
              <div className="pt-2">
                <button
                  onClick={() => setSuccess(false)}
                  className="px-10 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-white hover:brightness-105 transition-all text-sm font-bold shadow-md shadow-amber-500/20"
                >
                  확인
                </button>
              </div>
            </motion.div>
          ) : (
            /* Form View (입력 전 안심 안내 포함) */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 입력 전 신뢰 안내 박스 */}
              <div className="p-4 rounded-2xl bg-amber-50/90 border border-amber-200/90 flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-950 font-bold block mb-0.5">
                    [사전 안내 원칙] 불필요한 영업 전화를 드리지 않습니다.
                  </strong>
                  <span className="text-slate-600 text-xs leading-normal">
                    미확정된 정보로 인한 혼란을 방지하기 위해, <strong>모델하우스 관람 가능 일자 및 모집공고 일정이 공식 확정되는 시점에 1순위 VIP 우선 알림 문자</strong>를 발송해 드립니다.
                  </span>
                </div>
              </div>

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
                  <span>신청 정보를 접수 중입니다...</span>
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
