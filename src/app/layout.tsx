import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://acmer-dongtan.vercel.com'),
  title: '아크메르 동탄 | 공식 홈페이지 | 9월 GRAND OPEN',
  description: '동탄 그 이상의 위대함을 만나다 - 아크메르 동탄 2026년 9월 GRAND OPEN. 조감도, 입지환경, FAQ 및 사전 관심고객 등록.',
  keywords: ['아크메르 동탄', '아크메르', '동탄 분양', '동탄 모델하우스', '관심고객등록', '동탄 아파트'],
  openGraph: {
    title: '아크메르 동탄 | 공식 홈페이지',
    description: '동탄 그 이상의 위대함을 만나다. 2026년 9월 GRAND OPEN 사전 관심고객 모집',
    url: 'https://acmer-dongtan.vercel.com',
    siteName: '아크메르 동탄',
    images: [
      {
        url: '/images/dongtan.png',
        width: 1200,
        height: 630,
        alt: '아크메르 동탄 조감도',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="bg-navy-950 text-slate-100 antialiased selection:bg-gold-500 selection:text-navy-950">
        {children}
      </body>
    </html>
  );
}
