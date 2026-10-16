'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building, 
  Layers, 
  Maximize2, 
  X, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight,
  Info
} from 'lucide-react';

interface UnitType {
  id: string;
  name: string;
  area: string;
  exclusive: string;
  supply: string;
  units: number;
  image: string;
  features: string[];
  isPenthouse?: boolean;
}

export default function UnitTypesSection() {
  const [activeBlock, setActiveBlock] = useState<'95' | '99'>('95');
  const [selectedType95, setSelectedType95] = useState<string>('84C');
  const [selectedType99, setSelectedType99] = useState<string>('84A');
  const [zoomModalImage, setZoomModalImage] = useState<string | null>(null);

  // 95번지 평면 목록 (총 812세대)
  const types95: UnitType[] = [
    {
      id: '84C',
      name: '84C 타입',
      area: '전용 84.9970㎡',
      exclusive: '84.9970㎡',
      supply: '115.5180㎡',
      units: 180,
      image: '/images/95/84c.webp',
      features: ['실용적인 타워형 구조', '거실 파노라마 조망', '현관 팬트리 & 드레스룸']
    },
    {
      id: '84F',
      name: '84F 타입',
      area: '전용 84.9998㎡',
      exclusive: '84.9998㎡',
      supply: '117.1346㎡',
      units: 90,
      image: '/images/95/84f.webp',
      features: ['채광 통풍 우수', '효율적 동선 분리', '침실 특화 설계']
    },
    {
      id: '116A',
      name: '116A 타입',
      area: '전용 116.9981㎡',
      exclusive: '116.9981㎡',
      supply: '156.6146㎡',
      units: 92,
      image: '/images/95/116a.webp',
      features: ['대형 럭셔리 평면', '와이드 거실 & 다이닝', '독립형 마스터존']
    },
    {
      id: '116B',
      name: '116B 타입',
      area: '전용 116.9987㎡',
      exclusive: '116.9987㎡',
      supply: '158.6444㎡',
      units: 180,
      image: '/images/95/116b.webp',
      features: ['광폭 거실 개방감', '풍부한 수납 시스템', '프라이빗 침실 배치']
    },
    {
      id: '128A',
      name: '128A 타입',
      area: '전용 128.9983㎡',
      exclusive: '128.9983㎡',
      supply: '174.3807㎡',
      units: 90,
      image: '/images/95/128a.webp',
      features: ['최상급 대형 주거', '호텔식 마스터 스위트', '대면형 아일랜드 주방']
    },
    {
      id: '129B',
      name: '129B 타입',
      area: '전용 129.9995㎡',
      exclusive: '129.9995㎡',
      supply: '177.3078㎡',
      units: 176,
      image: '/images/95/129b.webp',
      features: ['파노라마 더블뷰', '넉넉한 룸인룸 옵션', '고품격 인테리어 마감']
    },
    {
      id: 'PH184B',
      name: 'PH 184B (펜트)',
      area: '전용 184.9968㎡',
      exclusive: '184.9968㎡',
      supply: '253.7585㎡',
      units: 2,
      image: '/images/95/ph184b.webp',
      features: ['최고층 펜트하우스', '루프탑 야외 테라스', '단 2세대 희소가치'],
      isPenthouse: true
    },
    {
      id: 'PH188A',
      name: 'PH 188A (펜트)',
      area: '전용 188.9949㎡',
      exclusive: '188.9949㎡',
      supply: '260.2614㎡',
      units: 2,
      image: '/images/95/ph188a.webp',
      features: ['49층 시그니처 펜트', '동탄 360 파노라마 조망', '단 2세대 최상급 럭셔리'],
      isPenthouse: true
    }
  ];

  // 99번지 평면 목록 (총 996세대)
  const types99: UnitType[] = [
    {
      id: '84A',
      name: '84A 타입',
      area: '전용 84.9916㎡',
      exclusive: '84.9916㎡',
      supply: '124.1106㎡',
      units: 334,
      image: '/images/99/84a.webp',
      features: ['가장 선호도 높은 334세대', '4베이 판상형 맞통풍', '대형 드레스룸 & 팬트리']
    },
    {
      id: '84B',
      name: '84B 타입',
      area: '전용 84.9979㎡',
      exclusive: '84.9979㎡',
      supply: '124.5750㎡',
      units: 84,
      image: '/images/99/84b.webp',
      features: ['개방감 넘치는 거실', '주방-거실 일체형 공간감', '안락한 마스터룸']
    },
    {
      id: '84C',
      name: '84C 타입',
      area: '전용 84.9970㎡',
      exclusive: '84.9970㎡',
      supply: '123.3468㎡',
      units: 166,
      image: '/images/99/84c.webp',
      features: ['조망 특화 타워형', '수납공간 극대화', '트렌디한 주거 동선']
    },
    {
      id: '84D',
      name: '84D 타입',
      area: '전용 84.9948㎡',
      exclusive: '84.9948㎡',
      supply: '124.0810㎡',
      units: 164,
      image: '/images/99/84d.webp',
      features: ['채광 극대화 설계', '독립된 자녀방 배치', '다용도실 공간 확장']
    },
    {
      id: '84E',
      name: '84E 타입',
      area: '전용 84.9975㎡',
      exclusive: '84.9975㎡',
      supply: '124.8977㎡',
      units: 164,
      image: '/images/99/84e.webp',
      features: ['세련된 공간 분리', '수납 최적화 팬트리', '모던 하이엔드 인테리어']
    },
    {
      id: '99A',
      name: '99A 타입',
      area: '전용 99.9965㎡',
      exclusive: '99.9965㎡',
      supply: '146.2861㎡',
      units: 78,
      image: '/images/99/99a.webp',
      features: ['중대형 프리미엄 평면', '광폭 거실 & 다이닝', '고급스러운 마스터존']
    },
    {
      id: 'PH148E',
      name: 'PH 148E (펜트)',
      area: '전용 148.9945㎡',
      exclusive: '148.9945㎡',
      supply: '219.7294㎡',
      units: 1,
      image: '/images/99/ph148e.webp',
      features: ['최상층 펜트하우스 단 1세대', '루프탑 테라스 프리미엄', '독보적 스카이 뷰'],
      isPenthouse: true
    },
    {
      id: 'PH158D',
      name: 'PH 158D (펜트)',
      area: '전용 158.9937㎡',
      exclusive: '158.9937㎡',
      supply: '234.3860㎡',
      units: 1,
      image: '/images/99/ph158d.webp',
      features: ['최상층 펜트하우스 단 1세대', '광활한 테라스 & 라운지', '동탄 최정상 랜드마크'],
      isPenthouse: true
    },
    {
      id: 'PH162C',
      name: 'PH 162C (펜트)',
      area: '전용 162.9999㎡',
      exclusive: '162.9999㎡',
      supply: '241.1932㎡',
      units: 4,
      image: '/images/99/ph162c.webp',
      features: ['최상층 펜트하우스 총 4세대', '탁 트인 복층형 테라스 뷰', '하이엔드 라이프'],
      isPenthouse: true
    }
  ];

  const currentTypes = activeBlock === '95' ? types95 : types99;
  const currentSelectedId = activeBlock === '95' ? selectedType95 : selectedType99;
  const currentUnit = currentTypes.find((t) => t.id === currentSelectedId) || currentTypes[0];

  const handleSelectType = (id: string) => {
    if (activeBlock === '95') {
      setSelectedType95(id);
    } else {
      setSelectedType99(id);
    }
  };

  return (
    <section id="unit-types" className="py-20 sm:py-28 relative bg-white text-slate-900 overflow-hidden border-t border-slate-200">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-100/50 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-50/70 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs font-bold tracking-wider">
            <Layers className="w-4 h-4 text-amber-600" /> UNIT PLAN & INTERIOR
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
            아크메르 동탄 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700">세대 평면 및 타입 안내</span>
          </h2>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />

          <p className="text-slate-600 text-sm sm:text-base font-normal break-keep">
            1군 메이저 건설사 ㈜포스코이앤씨의 독보적 공간 설계와 하이엔드 감각이 돋보이는 95번지 및 99번지 전 타입을 직접 확인하세요.
          </p>
        </div>

        {/* 1. 단지 선택 (95번지 vs 99번지 대형 탭) */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-inner">
            <button
              onClick={() => setActiveBlock('95')}
              className={`flex items-center gap-2 px-6 sm:px-9 py-3 rounded-xl text-sm sm:text-base font-bold transition-all duration-300 cursor-pointer ${
                activeBlock === '95'
                  ? 'bg-gradient-to-r from-amber-500 via-gold-400 to-amber-600 text-navy-950 shadow-md shadow-amber-500/25 border border-amber-300 scale-102'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building className="w-4 h-4" />
              <span>95번지 (총 812세대)</span>
            </button>

            <button
              onClick={() => setActiveBlock('99')}
              className={`flex items-center gap-2 px-6 sm:px-9 py-3 rounded-xl text-sm sm:text-base font-bold transition-all duration-300 cursor-pointer ${
                activeBlock === '99'
                  ? 'bg-gradient-to-r from-amber-500 via-gold-400 to-amber-600 text-navy-950 shadow-md shadow-amber-500/25 border border-amber-300 scale-102'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building className="w-4 h-4" />
              <span>99번지 (총 996세대)</span>
            </button>
          </div>
        </div>

        {/* 2. 평형 타입 선택 버튼 그리드 */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto">
          {currentTypes.map((type) => {
            const isSelected = type.id === currentSelectedId;
            return (
              <button
                key={type.id}
                onClick={() => handleSelectType(type.id)}
                className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-amber-500 via-gold-400 to-amber-600 text-navy-950 shadow-md shadow-amber-500/30 scale-105 border border-amber-300'
                    : type.isPenthouse
                    ? 'bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-amber-400 hover:text-slate-950 shadow-sm'
                }`}
              >
                <span>{type.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                  isSelected ? 'bg-white/85 text-amber-950 font-bold border border-amber-300/50' : 'bg-slate-100 text-slate-500'
                }`}>
                  {type.units}세대
                </span>
              </button>
            );
          })}
        </div>

        {/* 3. 선택된 평면도 상세 캔버스 카드 */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-4 sm:p-8 shadow-xl relative overflow-hidden">
          
          {/* Top Info Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-sm">
                  {activeBlock}번지
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                  {currentUnit.name}
                </h3>
                <span className="text-sm font-semibold text-amber-700 font-mono">
                  총 {currentUnit.units}세대
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-slate-500 font-mono">
                <div>전용면적: <strong className="text-slate-800">{currentUnit.exclusive}</strong></div>
                <div>공급면적: <strong className="text-slate-800">{currentUnit.supply}</strong></div>
              </div>
            </div>

            {/* 특징 태그 & 확대 버튼 */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {currentUnit.features.map((feat, fIdx) => (
                <span
                  key={fIdx}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>{feat}</span>
                </span>
              ))}

              <button
                onClick={() => setZoomModalImage(currentUnit.image)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 via-gold-400 to-amber-600 text-navy-950 hover:brightness-105 text-xs font-bold transition-all shadow-md border border-amber-300 cursor-pointer ml-auto sm:ml-0"
                title="평면도 크게 보기"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>원본 확대</span>
              </button>
            </div>
          </div>

          {/* Floorplan Image Display with Zoom Hover */}
          <div
            onClick={() => setZoomModalImage(currentUnit.image)}
            className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 p-2 sm:p-6 flex items-center justify-center cursor-zoom-in min-h-[420px] sm:min-h-[600px]"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentUnit.image}
                src={currentUnit.image}
                alt={`${currentUnit.name} 평면도`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="max-h-[700px] w-auto max-w-full object-contain filter contrast-[1.03] group-hover:scale-[1.02] transition-transform duration-300"
              />
            </AnimatePresence>

            {/* Zoom Hint Floating Badge */}
            <div className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-md text-white text-xs px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg opacity-85 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
              <span>클릭 시 원본 고해상도 확대</span>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-4 flex items-start gap-2 text-[11px] text-slate-500 leading-relaxed">
            <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <p>
              ※ 상기 평면도, 아이소메트릭, 면적표 및 키맵은 소비자의 이해를 돕기 위한 것으로 인허가 과정이나 실제 시공 시 다소 변경될 수 있습니다. 자세한 사항은 입주자모집공고문을 확인하시기 바랍니다.
            </p>
          </div>
        </div>

      </div>

      {/* 4. 고해상도 전체화면 확대 모달 */}
      {zoomModalImage && (
        <div
          onClick={() => setZoomModalImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out animate-fadeIn"
        >
          <button
            onClick={() => setZoomModalImage(null)}
            className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <img
            src={zoomModalImage}
            alt="평면도 고해상도 원본"
            className="max-h-[92vh] max-w-[94vw] object-contain rounded-xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
