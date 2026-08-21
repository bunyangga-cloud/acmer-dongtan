'use client';

import React from 'react';
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
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-navy-950/95 backdrop-blur-lg flex items-center justify-center pointer-events-none"
        >
          {/* Subtle Center Brand Accent */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.05, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-10 h-10 rounded-full border border-gold-400/60 flex items-center justify-center p-1 shadow-lg shadow-gold-500/20">
              <span className="font-serif text-gold-400 font-bold text-lg">A</span>
            </div>
            <span className="font-serif text-xs tracking-widest text-gold-300 uppercase">
              ACMER DONGTAN
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
