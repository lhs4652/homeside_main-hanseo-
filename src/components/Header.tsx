"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const scrollToService = () => {
    document.getElementById("service-intro")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className='w-full bg-white shadow-sm relative'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* 로고 */}
          <div className='flex-shrink-0'>
            <Link
              href='/'
              className='flex items-center space-x-3 hover:opacity-80 transition-opacity'
            >
              {/* 로고 이미지 */}
              <Image
                src='/logo.png'
                alt='부동산 내편 로고'
                width={32}
                height={32}
                className='w-8 h-8 rounded-lg object-contain bg-white'
                priority
              />
              {/* 로고 텍스트 */}
              <h1 className='text-2xl font-bold text-green-600'>부동산 내편</h1>
            </Link>
          </div>

          {/* 네비게이션 메뉴 */}
          <nav className='hidden md:flex space-x-8'>
            <button
              onClick={scrollToService}
              className='text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors'
            >
              서비스 소개
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/1mnkVyDJ7A63wX0gfIxQikXJclhwBl4QRY7Du2S-fJmo/viewform?ts=68249e7a&edit_requested=true",
                  "_blank"
                )
              }
              className='text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors'
            >
              전문가 찾기
            </button>

            <a
              href='https://docs.google.com/forms/d/1mnkVyDJ7A63wX0gfIxQikXJclhwBl4QRY7Du2S-fJmo/viewform?ts=68249e7a&edit_requested=true'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium'
            >
              협력안내
            </a>
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <div className='md:hidden'>
            <button className='text-gray-700 hover:text-blue-600 p-2'>
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* 세련된 하단 라인 */}
      <div className='absolute left-0 right-0 bottom-0 h-[2px] pointer-events-none'>
        <div className='w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent' />
        <div className='w-1/3 mx-auto h-[2px] bg-gradient-to-r from-green-400 via-green-500 to-green-400 rounded-full mt-[-2px] shadow-md' />
      </div>
    </header>
  );
}
