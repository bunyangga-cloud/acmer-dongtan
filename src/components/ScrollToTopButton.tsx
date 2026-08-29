'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // 250px 이상 스크롤 시 버튼 표시
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-amber-500 via-gold-400 to-amber-600 text-navy-950 flex flex-col items-center justify-center shadow-2xl shadow-gold-500/50 border-2 border-amber-200 cursor-pointer group hover:scale-110 hover:-translate-y-1 hover:shadow-gold-400/70 transition-all duration-300 select-none"
          title="페이지 최상단으로 이동"
          aria-label="페이지 최상단으로 이동"
        >
          {/* Arrow Up Icon with subtle bouncing on hover */}
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] text-navy-950 group-hover:-translate-y-0.5 transition-transform" />
          <span className="text-[9px] sm:text-[10px] font-extrabold tracking-tight text-navy-950 uppercase font-mono -mt-0.5">
            TOP
          </span>

          {/* Glowing Ping Ring on Hover */}
          <span className="absolute inset-0 rounded-full bg-gold-400 opacity-0 group-hover:opacity-40 group-hover:animate-ping pointer-events-none" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
