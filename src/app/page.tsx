import { Metadata } from "next";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceIntro from "@/components/ServiceIntro";
import ExpertList from "@/components/ExpertList";
import ReviewSection from "@/components/ReviewSection";
import Footer from "@/components/Footer";
import Head from 'next/head';

export const metadata: Metadata = {
  title: "부동산 내편 - 전문가 동행으로 안전한 부동산 거래",
  description:
    "부동산 거래가 처음이신가요? 검증된 전문가와 함께 안전하고 투명한 부동산 계약을 진행하세요. 전세, 월세, 매매 모든 거래에서 AI 계약 리스크 검토까지!",
  openGraph: {
    title: "부동산 내편 - 전문가 동행으로 안전한 부동산 거래",
    description:
      "검증된 전문가와 함께하는 안전한 부동산 거래. 전세, 월세, 매매 상담부터 계약까지 한번에!",
    url: "https://homeside.co.kr",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "부동산 내편 - 전문가 리스트",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>부동산 내편 - 전문가 동행으로 안전한 부동산 거래</title>
        <meta name="description" content="전세, 월세, 매매 모든 거래에서 AI 계약 리스크 검토까지!" />
        <meta property="og:title" content="부동산 내편 - 전문가 동행으로 안전한 부동산 거래" />
        <meta property="og:description" content="전세, 월세, 매매 모든 거래에서 AI 계약 리스크 검토까지!" />
        <meta property="og:image" content="https://www.homeside.co.kr/logo.png" />
        <meta property="og:url" content="https://www.homeside.co.kr" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className='min-h-screen bg-white'>
        <Header />
        <HeroSection />
        <ServiceIntro />
        <ExpertList />
        <ReviewSection />
        <Footer />
      </div>
    </>
  );
}
