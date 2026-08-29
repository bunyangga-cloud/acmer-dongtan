'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  className?: string;
  variant?: 'compact' | 'full';
}

export default function AudioPlayer({ className = '', variant = 'compact' }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // 오디오 인스턴스 생성
    const audio = new Audio('https://theartdata.mycafe24.com/data/bgm/acmer/bgm.mp3');
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    // 언마운트 시 정리
    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('Audio Autoplay policy:', err);
        });
    }
  };

  return (
    <button
      onClick={togglePlay}
      type="button"
      className={`group relative flex items-center gap-2.5 px-3 py-1.5 rounded-full backdrop-blur-md transition-all duration-300 select-none ${
        isPlaying
          ? 'bg-gold-500/20 border border-gold-400 text-gold-300 shadow-[0_0_15px_rgba(212,175,55,0.35)]'
          : 'bg-navy-950/70 border border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200'
      } ${className}`}
      title={isPlaying ? '배경음악 끄기' : '배경음악 켜기'}
      aria-label={isPlaying ? '배경음악 끄기' : '배경음악 켜기'}
    >
      {/* Icon */}
      {isPlaying ? (
        <Volume2 className="w-3.5 h-3.5 text-gold-400 shrink-0 animate-pulse" />
      ) : (
        <VolumeX className="w-3.5 h-3.5 text-slate-400 shrink-0" />
      )}

      {/* Dynamic Animated Equalizer Bars */}
      <div className="flex items-end gap-[3px] h-3.5 w-4 justify-center">
        {[
          { key: 1, duration: 0.6, delay: 0.1, heights: [4, 14, 6, 12, 4] },
          { key: 2, duration: 0.8, delay: 0.25, heights: [8, 4, 14, 6, 8] },
          { key: 3, duration: 0.5, delay: 0.05, heights: [12, 6, 14, 4, 12] },
          { key: 4, duration: 0.7, delay: 0.18, heights: [6, 12, 4, 14, 6] },
        ].map((bar) => (
          <motion.span
            key={bar.key}
            animate={
              isPlaying
                ? { height: bar.heights.map((h) => `${h}px`) }
                : { height: '3px' }
            }
            transition={
              isPlaying
                ? {
                    duration: bar.duration,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: bar.delay,
                  }
                : { duration: 0.2 }
            }
            className={`w-[2.5px] rounded-full transition-colors ${
              isPlaying ? 'bg-gradient-to-t from-gold-400 to-amber-300' : 'bg-slate-500'
            }`}
          />
        ))}
      </div>

      {/* Label Text */}
      <span className="text-[11px] font-mono tracking-wider font-semibold">
        {isPlaying ? 'BGM ON' : 'BGM OFF'}
      </span>
    </button>
  );
}
