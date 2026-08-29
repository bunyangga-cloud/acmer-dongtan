'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageSquareText, Sparkles } from 'lucide-react';
import { FAQ_ITEMS } from '@/lib/faqData';

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative bg-[#0b1329] text-white border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" /> FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            궁금하신 사항을 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-gold-200 to-amber-400">확인해보세요</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
          <p className="text-slate-300 text-sm sm:text-base">
            아크메르 동탄 분양 일정 및 주요 궁금증에 대한 답변입니다.
          </p>
        </div>

        {/* FAQ Accordion List (5 Items) */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: item.id * 0.08 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#101b38] border-gold-400 shadow-xl shadow-gold-500/10'
                    : 'bg-[#0f1933]/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Question Row */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className={`w-8 h-8 rounded-lg font-serif font-bold text-sm flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-gold-500 text-navy-950' : 'bg-slate-800 text-gold-400'
                    }`}>
                      Q{item.id}
                    </span>
                    <div>
                      {item.category && (
                        <span className="text-[11px] text-gold-400 font-semibold uppercase tracking-wider block mb-0.5">
                          [{item.category}]
                        </span>
                      )}
                      <h3 className={`text-base sm:text-lg font-medium transition-colors ${
                        isOpen ? 'text-gold-300 font-semibold' : 'text-slate-200'
                      }`}>
                        {item.question}
                      </h3>
                    </div>
                  </div>

                  <div className={`p-2 rounded-full transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 bg-gold-500/20 text-gold-400' : 'text-slate-500'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Answer Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 border-t border-slate-800/80">
                        <div className="mt-4 p-4 rounded-xl bg-[#080e1e] border border-slate-800 flex items-start gap-3 text-sm text-slate-300 leading-relaxed font-normal">
                          <MessageSquareText className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                          <div>
                            <p>{item.answer}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center text-xs text-slate-400 flex items-center justify-center gap-2 font-medium">
          <Sparkles className="w-4 h-4 text-gold-400" />
          <span>추가적인 문의사항은 아래 관심고객등록 시 상세히 안내해 드립니다.</span>
        </div>
      </div>
    </section>
  );
}
