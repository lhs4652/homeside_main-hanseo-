import {
  HiOutlinePhone,
  HiOutlineChatBubbleLeftRight,
  HiOutlineEnvelope,
} from "react-icons/hi2";
import { FaThreads } from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className='bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white pt-16 pb-8 mt-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-10 mb-12'>
          {/* 회사 정보 */}
          <div className='col-span-1 md:col-span-2'>
            <div className='flex items-center gap-3 mb-4'>
              <Image
                src='/logo.png'
                alt='부동산 내편 로고'
                width={36}
                height={36}
                className='w-9 h-9 rounded-lg bg-white object-contain'
                priority
              />
              <h3 className='text-2xl font-bold text-green-400'>부동산 내편</h3>
            </div>
            <p className='text-gray-300 mb-4'>
              안전하고 투명한 부동산 거래를 위한 전문가 매칭 서비스
            </p>
          </div>
          {/* 고객센터 */}
          <div>
            <h4 className='text-lg font-semibold mb-4 flex items-center gap-2'>
              <HiOutlinePhone className='w-5 h-5 text-green-400' />
              고객센터
            </h4>
            <div className='space-y-2 text-sm text-gray-300'>
              <p className='text-xl font-bold text-white'>010-2866-0097</p>
              <p>운영시간: 09:00~21:00</p>
              <p>평일 (월~금)</p>
              <p className='mt-3 flex items-center gap-2'>
                <HiOutlineEnvelope className='w-5 h-5 text-green-400' />
                <a
                  href='mailto:myside0097@naver.com'
                  className='text-green-300 hover:text-green-200 transition-colors'
                >
                  myside0097@naver.com
                </a>
              </p>
            </div>
          </div>
          {/* SNS 링크 */}
          <div>
            <h4 className='text-lg font-semibold mb-4 flex items-center gap-2'>
              <HiOutlineChatBubbleLeftRight className='w-5 h-5 text-green-400' />
              소셜미디어
            </h4>
            <div className='flex space-x-4'>
              <a
                href='https://www.threads.com/@yourside_home?igshid=NTc4MTIwNjQ2YQ=='
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-green-300 transition-colors'
                aria-label='Threads'
              >
                <FaThreads className='w-7 h-7' />
              </a>
            </div>
          </div>
        </div>
        {/* 하단 링크 및 저작권 */}
        <div className='border-t border-gray-800 mt-12 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <div className='flex space-x-6 mb-4 md:mb-0'>
              <a
                href='#'
                className='text-sm text-gray-400 hover:text-green-300 transition-colors'
              >
                개인정보처리방침
              </a>
              <a
                href='#'
                className='text-sm text-gray-400 hover:text-green-300 transition-colors'
              >
                이용약관
              </a>
              <a
                href='#'
                className='text-sm text-gray-400 hover:text-green-300 transition-colors'
              >
                사업자정보확인
              </a>
            </div>
            <p className='text-sm text-gray-500'>
              © 2024 부동산 내편. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
