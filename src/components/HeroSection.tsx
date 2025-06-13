"use client";

import { useState } from "react";
import {
  HiOutlineMagnifyingGlass,
  HiOutlineMapPin,
  HiOutlineCalendar,
  HiOutlineUser,
} from "react-icons/hi2";
import Image from "next/image";

export default function HeroSection() {
  const [filters, setFilters] = useState({
    location: "",
    dealType: "",
    houseType: "",
    date: "",
    expertName: "",
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section
      id='hero'
      className='relative bg-gradient-to-b from-green-50 via-white to-white pt-16 pb-20 overflow-hidden'
    >
      {/* 배경 패턴/일러스트 */}
      <div className='absolute inset-0 pointer-events-none select-none opacity-10 bg-[url("/pattern.svg")] bg-repeat' />
      <div className='relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10'>
        {/* 서비스 안내 */}
        <div className='text-center mb-10'>
          <p className='text-base text-green-600 font-semibold mb-2 tracking-widest'>
            내집마련, 내편과 함께!
          </p>
          <h1 className='text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight'>
            내 <span className="font-bold">보금자리</span> 마련을 도와줄{" "}
            <span className='text-green-600'>전문가</span>를 만나보세요!
          </h1>
        </div>

        {/* 체크리스트 */}
        <div className='flex flex-wrap justify-center gap-6 mb-10'>
          <div className='flex items-center space-x-2 text-gray-700 text-base'>
            <HiOutlineMagnifyingGlass className='w-5 h-5 text-green-500' />
            <span>고객 맞춤형 주거지 탐색</span>
          </div>
          <div className='flex items-center space-x-2 text-gray-700 text-base'>
            <HiOutlineUser className='w-5 h-5 text-green-500' />
            <span>지역 전문 홈플래너 동행</span>
          </div>
          <div className='flex items-center space-x-2 text-gray-700 text-base'>
            <HiOutlineCalendar className='w-5 h-5 text-green-500' />
            <span>계약 전 꼼꼼한 리포트 제공</span>
          </div>
        </div>

        {/* 서비스 옵션 - 공사 로고 3개 */}
        <div className='bg-white/80 rounded-xl p-5 mb-8 shadow flex flex-wrap gap-4 justify-center'>
          <div className='flex flex-wrap justify-center gap-8 mt-4'>
            <Image
              src='/images/주택도시보증공사.svg'
              alt='주택도시보증공사'
              width={80}
              height={40}
              className='h-10 w-auto object-contain'
            />
            <Image
              src='/images/한국주택공사.svg'
              alt='한국주택공사'
              width={80}
              height={40}
              className='h-10 w-auto object-contain'
            />
            <Image
              src='/images/한국주택금융공사.svg'
              alt='한국주택금융공사'
              width={80}
              height={40}
              className='h-10 w-auto object-contain'
            />
          </div>
          <p className='text-sm text-gray-500 mt-4 text-center w-full'>
            부동산 내편은 공공기관의 전세보증 및 대출 데이터를 통해 안전한 거래를 지원합니다.
          </p>
        </div>

        {/* 검색 필터 */}
        <div className='bg-white/90 border border-gray-100 rounded-2xl p-8 shadow-lg'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            {/* 동행 지역 */}
            <div>
              <label className='flex items-center text-sm font-semibold text-gray-700 mb-2'>
                <HiOutlineMapPin className='w-4 h-4 text-green-500 mr-2' />
                동행 지역
              </label>
              <select
                className='w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent bg-gray-50 transition-all'
                value={filters.location}
                onChange={(e) => handleFilterChange("location", e.target.value)}
              >
                <option value=''>구 선택</option>
                <option value='중구'>중구</option>
                <option value='서구'>서구</option>
                <option value='동구'>동구</option>
                <option value='영도구'>영도구</option>
                <option value='부산진구'>부산진구</option>
                <option value='동래구'>동래구</option>
                <option value='남구'>남구</option>
                <option value='북구'>북구</option>
                <option value='해운대구'>해운대구</option>
                <option value='사하구'>사하구</option>
                <option value='금정구'>금정구</option>
                <option value='강서구'>강서구</option>
                <option value='연제구'>연제구</option>
                <option value='수영구'>수영구</option>
                <option value='사상구'>사상구</option>
                <option value='기장군'>기장군 (※ 유일한 군 단위 지역)</option>
              </select>
            </div>

            {/* 거래 방식 */}
            <div>
              <label className='flex items-center text-sm font-semibold text-gray-700 mb-2'>
                <HiOutlineCalendar className='w-4 h-4 text-green-500 mr-2' />
                거래 방식
              </label>
              <select
                className='w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent bg-gray-50 transition-all'
                value={filters.dealType || ""}
                onChange={(e) => handleFilterChange("dealType", e.target.value)}
              >
                <option value=''>거래 방식 선택</option>
                <option value='매매'>매매</option>
                <option value='전세'>전세</option>
                <option value='월세'>월세</option>
                <option value='반전세'>반전세</option>
              </select>
            </div>

            {/* 주거 형태 */}
            <div>
              <label className='flex items-center text-sm font-semibold text-gray-700 mb-2'>
                <HiOutlineUser className='w-4 h-4 text-green-500 mr-2' />
                주거 형태
              </label>
              <select
                className='w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent bg-gray-50 transition-all'
                value={filters.houseType || ""}
                onChange={(e) =>
                  handleFilterChange("houseType", e.target.value)
                }
              >
                <option value=''>주거 형태 선택</option>
                <option value='아파트'>아파트</option>
                <option value='오피스텔'>오피스텔</option>
                <option value='빌라'>빌라</option>
                <option value='원룸/투룸'>원룸/투룸</option>
                <option value='상가'>상가</option>
              </select>
            </div>

            {/* 검색 버튼 */}
            <div className='flex items-end'>
              <button
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/1mnkVyDJ7A63wX0gfIxQikXJclhwBl4QRY7Du2S-fJmo/viewform?ts=68249e7a&edit_requested=true",
                    "_blank"
                  )
                }
                className='w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:from-green-600 hover:to-emerald-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all text-base'
              >
                <HiOutlineMagnifyingGlass className='w-5 h-5' /> 전문가 찾기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
