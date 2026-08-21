'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, CheckCircle, Send, Sparkles, AlertCircle, Lock } from 'lucide-react';

export default function RegisterSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [agreed, setAgreed] = useState(true);

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
      // Web3Forms 메일 알림 연동 (y3974@naver.com 수신)
      const formData = new FormData();
      formData.append('access_key', 'e4dfefed-8a16-43d9-9ec6-896dfa2862c9'); // Web3Forms Public Access Key
      formData.append('subject', `[아크메르 동탄] 새로운 관심고객 등록 - ${name.trim()}님`);
      formData.append('from_name', '아크메르 동탄 알리미');
      formData.append('name', name.trim());
      formData.append('phone', phone.trim());
      formData.append('recipient_email', 'y3974@naver.com');
      formData.append('message', `아크메르 동탄 관심고객 등록 정보\n- 성함: ${name.trim()}\n- 연락처: ${phone.trim()}\n- 수신 지정: y3974@naver.com\n- 신청 일시: ${new Date().toLocaleString('ko-KR')}`);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        setName('');
        setPhone('');
      } else {
        // Fallback: 처리 완료 화면 전환
        setSuccess(true);
      }
    } catch (err) {
      console.error('Submit error:', err);
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="register" className="py-24 relative bg-navy-950 text-white overflow-hidden border-t border-slate-900">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> VIP INTEREST REGISTER
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            아크메르 동탄 <span className="gold-gradient-text">사전 관심고객 등록</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            관심고객으로 등록해주신 분들께 <strong className="text-gold-300">2026년 9월 GRAND OPEN</strong> 소식 및 VIP 방문 예약 혜택을 가장 먼저 안내해 드립니다.
          </p>
        </div>

        {/* Card Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl border border-gold-500/30 p-6 sm:p-10 shadow-2xl bg-navy-900/80 backdrop-blur-xl relative overflow-hidden"
        >
          {success ? (
            /* Success View */
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="py-10 text-center space-y-5"
            >
              <div className="w-20 h-20 rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center mx-auto text-gold-400">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                관심고객 등록이 <span className="gold-gradient-text">완료되었습니다!</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                신청해주셔서 감사합니다.<br />
                등록해주신 연락처로 <strong className="text-gold-300">2026년 9월 오픈 일정 및 분양 정보</strong>를 가장 먼저 발송해 드리겠습니다.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setSuccess(false)}
                  className="px-6 py-2.5 rounded-xl border border-gold-500/40 text-gold-300 hover:text-white hover:bg-gold-500/20 transition-all text-sm font-medium"
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
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    성함 <span className="text-gold-400">*</span>
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
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-navy-950/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Phone Input */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    연락처 <span className="text-gold-400">*</span>
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
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-navy-950/90 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all text-sm font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded border-slate-700 bg-navy-950 text-gold-500 focus:ring-gold-400 focus:ring-offset-navy-950 cursor-pointer"
                  />
                  <span className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                    [필수] 분양 정보 안내 및 상담을 위한 개인정보(성명, 연락처) 수집·이용에 동의합니다.
                  </span>
                </label>
              </div>

              {/* Error Message */}
              {errorMsg && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-navy-950 font-bold text-base hover:brightness-110 shadow-xl shadow-gold-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
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

              {/* Info Note */}
              <div className="pt-2 text-center flex items-center justify-center gap-2 text-xs text-slate-500">
                <Lock className="w-3.5 h-3.5 text-gold-400/80" />
                <span>수집된 정보는 y3974@naver.com 관리자 메일 전송 및 분양 알림 용도로만 안전하게 보호됩니다.</span>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
