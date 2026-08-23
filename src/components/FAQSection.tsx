'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageSquareText, Sparkles } from 'lucide-react';
import { FAQ_ITEMS } from '@/lib/faqData';

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1); // 첫 번째 항목 기본 열림

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative bg-slate-50 text-slate-900 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-800 text-xs font-bold">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" /> FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            궁금하신 사항을 <span className="gold-gradient-text">확인해보세요</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
          <p className="text-slate-600 text-sm sm:text-base font-normal">
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
                    ? 'bg-white border-2 border-amber-400 shadow-md shadow-amber-500/10'
                    : 'bg-white border border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                {/* Question Row */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className={`w-8 h-8 rounded-lg font-serif font-bold text-sm flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      Q{item.id}
                    </span>
                    <div>
                      {item.category && (
                        <span className="text-[11px] text-amber-700 font-bold uppercase tracking-wider block mb-0.5">
                          [{item.category}]
                        </span>
                      )}
                      <h3 className={`text-base sm:text-lg font-bold transition-colors ${
                        isOpen ? 'text-amber-900' : 'text-slate-800'
                      }`}>
                        {item.question}
                      </h3>
                    </div>
                  </div>

                  <div className={`p-2 rounded-full transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 bg-amber-100 text-amber-700' : 'text-slate-400'
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
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 border-t border-slate-100">
                        <div className="mt-4 p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3 text-sm text-slate-800 leading-relaxed font-normal">
                          <MessageSquareText className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
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
        <div className="mt-12 text-center text-xs text-slate-600 flex items-center justify-center gap-2 font-medium">
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>추가적인 문의사항은 아래 관심고객등록 시 상세히 안내해 드립니다.</span>
        </div>
      </div>
    </section>
  );
}
