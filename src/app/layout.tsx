import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://acmer-dongtan.vercel.app'),
  title: '아크메르 동탄',
  description: '아크메르 동탄ㅣ☎1600-0000 분양가ㅣ반송역 동탄인덕원선 초역세권ㅣ계약금ㅣ아크메르동탄 청약일정ㅣ사전청약의향서 접수ㅣ동탄 아크메르 모델하우스',
  keywords: '아크메르 동탄',
  other: {
    'naver-site-verification': 'f0e0c45ae8f3fa82bda81fa4e8f0bf7e794fcfe9',
  },
  openGraph: {
    title: '아크메르 동탄',
    description: '아크메르 동탄ㅣ☎1600-0000 분양가ㅣ반송역 동탄인덕원선 초역세권ㅣ계약금ㅣ아크메르동탄 청약일정ㅣ사전청약의향서 접수ㅣ동탄 아크메르 모델하우스',
    url: 'https://acmer-dongtan.vercel.app',
    siteName: '아크메르 동탄',
    images: [
      {
        url: '/images/dongtan.png',
        width: 1200,
        height: 630,
        alt: '아크메르 동탄',
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
      <head>
        <meta name="keywords" content="아크메르 동탄" />
        <meta name="description" content="아크메르 동탄ㅣ☎1600-0000 분양가ㅣ반송역 동탄인덕원선 초역세권ㅣ계약금ㅣ아크메르동탄 청약일정ㅣ사전청약의향서 접수ㅣ동탄 아크메르 모델하우스" />
        <meta property="og:title" content="아크메르 동탄" />
        <meta property="og:site_name" content="아크메르 동탄" />
        <meta property="og:description" content="아크메르 동탄ㅣ☎1600-0000 분양가ㅣ반송역 동탄인덕원선 초역세권ㅣ계약금ㅣ아크메르동탄 청약일정ㅣ사전청약의향서 접수ㅣ동탄 아크메르 모델하우스" />
        <meta name="naver-site-verification" content="f0e0c45ae8f3fa82bda81fa4e8f0bf7e794fcfe9" />
      </head>
      <body className="bg-navy-950 text-slate-100 antialiased selection:bg-gold-500 selection:text-navy-950">
        {children}
      </body>
    </html>
  );
}
