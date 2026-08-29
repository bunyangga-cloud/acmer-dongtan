'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

// 단일 전역 오디오 인스턴스 및 상태 브로드캐스트 (컴포넌트가 여러 개 있어도 완벽 동기화)
let globalAudio: HTMLAudioElement | null = null;
let globalIsPlaying = false;
const listeners = new Set<(playing: boolean) => void>();

function notifyListeners(playing: boolean) {
  globalIsPlaying = playing;
  listeners.forEach((listener) => listener(playing));
}

function getOrCreateAudio(): HTMLAudioElement {
  if (!globalAudio && typeof window !== 'undefined') {
    globalAudio = new Audio('https://theartdata.mycafe24.com/data/bgm/acmer/bgm.mp3');
    globalAudio.loop = true;
    globalAudio.volume = 0.45;

    globalAudio.addEventListener('play', () => notifyListeners(true));
    globalAudio.addEventListener('pause', () => notifyListeners(false));
    globalAudio.addEventListener('ended', () => notifyListeners(false));
  }
  return globalAudio!;
}

// 자동재생 시도 및 실패 시 전역 이벤트 리스너 망 가동
let autoplayInitiated = false;
function initAutoplay() {
  if (autoplayInitiated || typeof window === 'undefined') return;
  autoplayInitiated = true;

  const audio = getOrCreateAudio();

  // 1) 즉시 실행 시도
  audio
    .play()
    .then(() => {
      notifyListeners(true);
    })
    .catch(() => {
      // 2) 브라우저 첫 상호작용 보안 정책 대응: 스크롤, 마우스 이동, 터치, 클릭 등 첫 인터랙션 감지 즉시 재생
      const triggerInteractionPlay = () => {
        if (audio.paused) {
          audio
            .play()
            .then(() => {
              notifyListeners(true);
              removeInteractionListeners();
            })
            .catch(() => {});
        } else {
          removeInteractionListeners();
        }
      };

      const removeInteractionListeners = () => {
        window.removeEventListener('click', triggerInteractionPlay);
        window.removeEventListener('touchstart', triggerInteractionPlay);
        window.removeEventListener('pointerdown', triggerInteractionPlay);
        window.removeEventListener('scroll', triggerInteractionPlay);
        window.removeEventListener('wheel', triggerInteractionPlay);
        window.removeEventListener('mousemove', triggerInteractionPlay);
        window.removeEventListener('keydown', triggerInteractionPlay);
      };

      window.addEventListener('click', triggerInteractionPlay, { once: true, passive: true });
      window.addEventListener('touchstart', triggerInteractionPlay, { once: true, passive: true });
      window.addEventListener('pointerdown', triggerInteractionPlay, { once: true, passive: true });
      window.addEventListener('scroll', triggerInteractionPlay, { once: true, passive: true });
      window.addEventListener('wheel', triggerInteractionPlay, { once: true, passive: true });
      window.addEventListener('mousemove', triggerInteractionPlay, { once: true, passive: true });
      window.addEventListener('keydown', triggerInteractionPlay, { once: true, passive: true });
    });
}

interface AudioPlayerProps {
  className?: string;
  variant?: 'compact' | 'full';
}

export default function AudioPlayer({ className = '' }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(globalIsPlaying);

  useEffect(() => {
    // 상태 동기화 구독
    const handleStateChange = (playing: boolean) => {
      setIsPlaying(playing);
    };
    listeners.add(handleStateChange);
    setIsPlaying(globalIsPlaying);

    // 최초 1회 자동 재생 트리거
    initAutoplay();

    return () => {
      listeners.delete(handleStateChange);
    };
  }, []);

  const togglePlay = () => {
    const audio = getOrCreateAudio();

    if (globalIsPlaying) {
      audio.pause();
      notifyListeners(false);
    } else {
      audio
        .play()
        .then(() => {
          notifyListeners(true);
        })
        .catch((err) => {
          console.warn('Audio Play policy:', err);
        });
    }
  };

  return (
    <button
      onClick={togglePlay}
      type="button"
      className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md transition-all duration-300 select-none ${
        isPlaying
          ? 'bg-gold-500/20 border border-gold-400 text-gold-300 shadow-[0_0_15px_rgba(212,175,55,0.35)]'
          : 'bg-navy-950/70 border border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200'
      } ${className}`}
      title={isPlaying ? '배경음악 일시정지' : '배경음악 재생'}
      aria-label={isPlaying ? '배경음악 일시정지' : '배경음악 재생'}
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
