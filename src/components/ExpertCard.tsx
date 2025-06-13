import Image from "next/image";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

interface Expert {
  name: string;
  title: string;
  description: string;
  activity_area: string[];
  career_years: number;
  projects_count: number;
  tags: string[];
  profile_image: string;
  avatar?: string; // 초기값 표시용
}

interface ExpertCardProps {
  expert: Expert;
}

export default function ExpertCard({ expert }: ExpertCardProps) {
  return (
    <div className='bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-200 overflow-hidden flex flex-col'>
      {/* 프로필 헤더 */}
      <div className='p-7 pb-4'>
        <div className='flex items-center space-x-5 mb-4'>
          {/* 프로필 이미지 */}
          <div className='w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden shadow-sm'>
            {expert.profile_image === "https://via.placeholder.com/150" ? (
              <div className='w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-white text-xl font-semibold'>
                {expert.name.charAt(0)}
              </div>
            ) : (
              <Image
                src={expert.profile_image}
                alt={expert.name}
                width={64}
                height={64}
                className='w-full h-full object-cover'
              />
            )}
          </div>
          {/* 이름과 승인 상태 */}
          <div className='flex-1'>
            <div className='flex items-center space-x-2 mb-1'>
              <h3 className='text-lg font-bold text-gray-900'>{expert.name}</h3>
              <span className='inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200'>
                {expert.title}
              </span>
            </div>
            {/* 설명 */}
            <p className='text-sm text-gray-600 line-clamp-2'>
              {expert.description}
            </p>
          </div>
        </div>
        {/* 활동 지역 */}
        <div className='flex items-center space-x-2 mb-4 text-xs text-gray-500'>
          <svg
            className='w-4 h-4 text-green-500'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path
              fillRule='evenodd'
              d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
              clipRule='evenodd'
            />
          </svg>
          <span>{expert.activity_area.join(" • ")}</span>
        </div>
      </div>
      {/* 통계 정보 */}
      <div className='px-7 py-4 bg-gray-50 border-t border-gray-100'>
        <div className='grid grid-cols-3 gap-4 text-center'>
          <div>
            <p className='text-xs text-gray-400 mb-1'>경력기간</p>
            <p className='text-xl font-bold text-gray-900'>
              {expert.career_years}
            </p>
            <p className='text-xs text-gray-500'>년</p>
          </div>
          <div>
            <p className='text-xs text-gray-400 mb-1'>프로젝트</p>
            <p className='text-xl font-bold text-gray-900'>
              {expert.projects_count}
            </p>
            <p className='text-xs text-gray-500'>건</p>
          </div>
          <div>
            <p className='text-xs text-gray-400 mb-1'>전문분야</p>
            <div className='flex flex-col items-center gap-1'>
              {expert.tags.slice(0, 2).map((tag, index) => (
                <span
                  key={index}
                  className='inline-block bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium border border-green-100'
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* 하단 버튼 */}
      <div className='px-7 pb-7 pt-3 mt-auto'>
        <a
          href='https://docs.google.com/forms/d/1mnkVyDJ7A63wX0gfIxQikXJclhwBl4QRY7Du2S-fJmo/viewform?ts=68249e7a&edit_requested=true'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2.5 px-4 rounded-full text-base font-semibold shadow-md hover:from-green-600 hover:to-emerald-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition-all duration-150'
        >
          <HiOutlineChatBubbleLeftRight className='w-5 h-5' /> 상담 신청하기
        </a>
      </div>
    </div>
  );
}
