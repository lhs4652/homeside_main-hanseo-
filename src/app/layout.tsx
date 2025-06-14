import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "부동산 내편 - 안전한 부동산 거래를 위한 전문가 동행 서비스",
    template: "%s | 부동산 내편",
  },
  description:
    "부동산 거래 경험이 부족한 분들을 위한 전문가 동행 및 AI 계약 리스크 검토 서비스. 검증된 전문가와 함께 안전하고 투명한 부동산 계약을 진행하세요.",
  keywords: [
    "부동산 내편",
    "부동산 전문가",
    "부동산 동행",
    "부동산 상담",
    "부동산 계약",
    "전세 계약",
    "월세 계약",
    "아파트 매매",
    "부동산 검증",
    "AI 계약 검토",
    "부동산 거래",
    "부동산 컨설팅",
    "안전한 부동산 거래",
    "부동산 리스크 관리",
  ],
  authors: [{ name: "부동산 내편" }],
  creator: "부동산 내편",
  publisher: "부동산 내편",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "부동산 내편 로고",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      "index": true,
      "follow": true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "부동산 내편 - 안전한 부동산 거래를 위한 전문가 동행 서비스",
    description:
      "부동산 거래 경험이 부족한 분들을 위한 전문가 동행 및 AI 계약 리스크 검토 서비스",
    images: ["/logo.png"],
    creator: "@homeside_kr",
  },
  verification: {
    google: "google-site-verification-code", // Google Search Console에서 발급받은 코드로 교체
  },
  alternates: {
    canonical: "https://homeside.co.kr",
  },
  category: "부동산 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <head>
        {/* 파비콘 추가 */}
        <link rel="icon" type="image/png" href="/logo.png" />
        {/* 추가 SEO 태그들 */}
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <meta
          name='theme-color'
          content='#10b981'
        />
        <meta
          name='format-detection'
          content='telephone=no'
        />

        {/* 구조화된 데이터 */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "부동산 내편",
              "description":
                "부동산 거래 경험이 부족한 분들을 위한 전문가 동행 및 AI 계약 리스크 검토 서비스",
              "url": "https://homeside.co.kr",
              "telephone": "1588-1234",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "KR",
                "addressRegion": "서울특별시",
                "addressLocality": "강남구",
                "streetAddress": "테헤란로 123",
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "37.5665",
                "longitude": "126.9780",
              },
              "serviceType": "부동산 컨설팅",
              "areaServed": "대한민국",
              "openingHours": "Mo-Fr 09:00-18:00",
              "sameAs": [
                "https://www.instagram.com/homeside_kr",
                "https://www.facebook.com/homeside.kr",
              ],
            }),
          }}
        />
        <meta name="google-site-verification" content="id764-i99btuEXyXFUMzRBsaPhKoLHtQvxL" />
        <meta name="naver-site-verification" content="099a1754c475f2ee41464f9d4bfd397d25d60abb" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        {/* 카카오톡 문의하기 플로팅 버튼 */}
        <a
          href="https://open.kakao.com/o/g3xAwIuh" // 실제 카카오톡 오픈채팅방 링크로 교체
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'fixed',
            right: '24px',
            bottom: '24px',
            zIndex: 1000,
            background: '#FEE500',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
          }}
          aria-label="카카오톡 문의하기"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="16" cy="16" rx="16" ry="16" fill="#FEE500"/>
            <path d="M16 8C10.477 8 6 11.582 6 15.778c0 2.19 1.41 4.14 3.6 5.44-.16.56-.58 2.04-.66 2.36 0 0-.01.09.04.13.05.04.13.02.13.02.17-.02 2.02-1.33 2.36-1.56.85.12 1.73.19 2.59.19 5.523 0 10-3.582 10-7.778S21.523 8 16 8z" fill="#391B1B"/>
          </svg>
        </a>
      </body>
    </html>
  );
}