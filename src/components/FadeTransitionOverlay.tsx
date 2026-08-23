'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface FadeTransitionOverlayProps {
  isTransitioning: boolean;
}

export default function FadeTransitionOverlay({ isTransitioning }: FadeTransitionOverlayProps) {
  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-md flex items-center justify-center pointer-events-none"
        >
          {/* Center Brand Accent */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.05, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="relative w-10 h-10 shrink-0 flex items-center justify-center">
              <Image
                src="/images/intro_hd_transparent.png?v=6"
                alt="아크메르 동탄"
                width={40}
                height={40}
                unoptimized
                className="w-full h-auto object-contain filter contrast-[1.1]"
              />
            </div>
            <span className="font-serif text-sm font-bold tracking-widest text-slate-900">
              아크메르 동탄
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
