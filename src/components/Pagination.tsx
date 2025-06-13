"use client";

import { useState } from "react";

interface PaginationProps {
  totalPages?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}

export default function Pagination({
  totalPages = 6,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const [activePage, setActivePage] = useState(currentPage);

  const handlePageClick = (page: number) => {
    setActivePage(page);
    onPageChange?.(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`
            w-11 h-11 rounded-full font-semibold text-base transition-all duration-150 shadow-sm border
            ${
              activePage === i
                ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white border-green-400 shadow-lg scale-110"
                : "bg-white text-gray-700 hover:bg-green-50 border-gray-200 hover:shadow-md"
            }
          `}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className='py-10 bg-gradient-to-b from-white via-gray-50 to-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-center items-center space-x-3'>
          {/* 페이지 번호들 */}
          {renderPageNumbers()}

          {/* 다음 페이지 버튼 */}
          <button
            onClick={() =>
              activePage < totalPages && handlePageClick(activePage + 1)
            }
            disabled={activePage === totalPages}
            className={`
              w-11 h-11 rounded-full font-semibold text-base transition-all duration-150 shadow-sm border
              ${
                activePage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-100"
                  : "bg-white text-gray-700 hover:bg-green-50 border-gray-200 hover:shadow-md"
              }
            `}
          >
            <svg
              className='w-5 h-5 mx-auto'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
