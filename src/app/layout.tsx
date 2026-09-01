import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://acmer-dongtan.vercel.app'),
  title: '아크메르 동탄',
  description: '아크메르 동탄ㅣ☎1600-0000 분양가ㅣ반송역 동탄인덕원선 초역세권ㅣ계약금ㅣ아크메르동탄 청약일정ㅣ사전청약의향서 접수ㅣ동탄 아크메르 모델하우스',
  keywords: '아크메르 동탄',
  icons: {
    icon: '/images/siteicon.png',
    shortcut: '/images/siteicon.png',
    apple: '/images/siteicon.png',
  },
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
        url: '/images/siteicon.png',
        width: 800,
        height: 800,
        alt: '아크메르 동탄 대표 썸네일',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: '아크메르 동탄',
    description: '아크메르 동탄ㅣ☎1600-0000 분양가ㅣ반송역 동탄인덕원선 초역세권ㅣ계약금ㅣ아크메르동탄 청약일정ㅣ사전청약의향서 접수ㅣ동탄 아크메르 모델하우스',
    images: ['/images/siteicon.png'],
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
        <link rel="icon" href="/images/siteicon.png" />
        <link rel="shortcut icon" href="/images/siteicon.png" />
        <link rel="apple-touch-icon" href="/images/siteicon.png" />
        <meta name="keywords" content="아크메르 동탄" />
        <meta name="description" content="아크메르 동탄ㅣ☎1600-0000 분양가ㅣ반송역 동탄인덕원선 초역세권ㅣ계약금ㅣ아크메르동탄 청약일정ㅣ사전청약의향서 접수ㅣ동탄 아크메르 모델하우스" />
        <meta property="og:title" content="아크메르 동탄" />
        <meta property="og:site_name" content="아크메르 동탄" />
        <meta property="og:description" content="아크메르 동탄ㅣ☎1600-0000 분양가ㅣ반송역 동탄인덕원선 초역세권ㅣ계약금ㅣ아크메르동탄 청약일정ㅣ사전청약의향서 접수ㅣ동탄 아크메르 모델하우스" />
        <meta property="og:image" content="https://acmer-dongtan.vercel.app/images/siteicon.png" />
        <meta property="og:image:secure_url" content="https://acmer-dongtan.vercel.app/images/siteicon.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:type" content="website" />
        <link rel="image_src" href="https://acmer-dongtan.vercel.app/images/siteicon.png" />
        <meta itemProp="image" content="https://acmer-dongtan.vercel.app/images/siteicon.png" />
        <meta name="naver-site-verification" content="f0e0c45ae8f3fa82bda81fa4e8f0bf7e794fcfe9" />
        {/* Naver & Google Schema.org JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: '아크메르 동탄',
              url: 'https://acmer-dongtan.vercel.app',
              image: 'https://acmer-dongtan.vercel.app/images/siteicon.png',
              description: '아크메르 동탄ㅣ☎1600-0000 분양가ㅣ반송역 동탄인덕원선 초역세권ㅣ계약금ㅣ아크메르동탄 청약일정ㅣ사전청약의향서 접수ㅣ동탄 아크메르 모델하우스',
            }),
          }}
        />
      </head>
      <body className="bg-navy-950 text-slate-100 antialiased selection:bg-gold-500 selection:text-navy-950">
        {children}
      </body>
    </html>
  );
}
