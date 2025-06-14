"use client";
import {
  HiOutlineCheckCircle,
  HiOutlineUserGroup,
  HiOutlineLightBulb,
  HiOutlineShieldCheck,
  HiOutlineMagnifyingGlass,
  HiOutlineMapPin,
  HiOutlineExclamationTriangle,
  HiOutlineUser,
} from "react-icons/hi2";
import Image from "next/image";

export default function ServiceIntro() {
  return (
    <section
      id="service-intro"
      className="bg-gradient-to-b from-white via-green-50 to-white py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 서비스 소개 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 text-center whitespace-nowrap w-full overflow-x-auto">
            <span role="img" aria-label="집">
              🏡
            </span>{" "}
            <span className="text-xl md:text-4xl">이사, 아직도 혼자 준비하시나요?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <strong>
              복잡한 주거지 탐색부터 불안한 계약까지, 혼자서 해결하려니 막막하셨죠?
            </strong>
            <br />
            이젠 전문가가 처음부터 끝까지 함께합니다.
            <br />
            <strong>
              부동산 내편은 고객이 겪는 모든 스트레스를 덜어주는 지금까지 없었던, 전문가 동행 부동산 솔루션입니다
            </strong>
          </p>
          <p className="text-sm text-gray-400 mt-4">
            (결혼 준비에 웨딩플래너가, 중고차 구매에 동행 전문가가 있다면,&#39;이젠 집 구하기에도 믿을 수 있는 내편이 필요합니다)
          </p>
        </div>

        {/* 신혼집/홈플래너 이미지형 콘텐츠 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          {/* 이미지 영역 */}
          <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
            <Image
              src="/images/내집마련.png"
              alt="내집마련, 내편과 함께!"
              width={256}
              height={256}
              className="w-64 h-64 object-cover rounded-2xl border border-gray-200 shadow-sm"
              priority
            />
          </div>
          {/* 텍스트 및 리스트 */}
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              복잡한 부동산 거래,<br />홈 플래너와 함께 체계적으로 도와드려요
            </h3>
            <ul className="space-y-3 text-gray-700 text-base mb-4 flex flex-col items-center text-center">
              <li className="flex items-center gap-2 justify-center">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full" />
                라이프 스타일 맞춤형 상담
              </li>
              <li className="flex items-center gap-2 justify-center">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full" />
                지역 전문 홈플래너(전문가) 매칭
              </li>
              <li className="flex items-center gap-2 justify-center">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full" />
                집보기 현장 동행 및 리포트 제공
              </li>
              <li className="flex items-center gap-2 justify-center">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full" />
                계약 리스크 진단
              </li>
            </ul>
            <p className="text-sm text-gray-400 text-center">
              * 서비스 대상 지역 : 부산 / 전국확장 예정
            </p>
          </div>
        </div>

        {/* 4단계 안내 섹션 */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-10 text-center tracking-tight">
            이렇게 4단계로 도와드려요
          </h3>
          <div className="grid grid-cols-1 gap-10 max-w-2xl mx-auto">
            {/* 1단계 */}
            <div className="bg-white rounded-3xl shadow-lg p-8 flex gap-6 items-start border border-gray-100 hover:shadow-2xl transition-all duration-300 group relative">
              <div className="relative w-20 h-20 flex-shrink-0">
                <Image
                  src="/images/1.png"
                  alt="1단계"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded-full border-4 border-orange-100 shadow"
                  priority
                />
                <span className="absolute -top-2 -right-2 bg-gradient-to-br from-orange-400 to-yellow-300 text-white text-xs font-bold rounded-full px-3 py-1 shadow">
                  1
                </span>
              </div>
              <div className="flex flex-col items-start text-left w-full">
                <div className="font-bold text-lg md:text-xl text-gray-900 mb-2">
                  주거지 탐색 + 매물 검토까지 한 번에!
                </div>
                <div className="text-gray-600 text-base leading-relaxed md:leading-loose">
                  직장, 생활환경, 교통, 예산을 고려해 맞춤형 동네를 추천해드려요.<br />
                  <br />
                  선택한 매물 3건에 대해 등기부등본·건축물대장·보증보험 여부까지 사전 검토<br />
                </div>
              </div>
            </div>
            {/* 2단계 */}
            <div className="bg-white rounded-3xl shadow-lg p-8 flex gap-6 items-start border border-gray-100 hover:shadow-2xl transition-all duration-300 group relative">
              <div className="relative w-20 h-20 flex-shrink-0">
                <Image
                  src="/images/2.png"
                  alt="2단계"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded-full border-4 border-orange-100 shadow"
                  priority
                />
                <span className="absolute -top-2 -right-2 bg-gradient-to-br from-orange-400 to-yellow-300 text-white text-xs font-bold rounded-full px-3 py-1 shadow">
                  2
                </span>
              </div>
              <div>
                <div className="font-bold text-lg md:text-xl text-gray-900 mb-2">
                  집보러 갈 때, 혼자 가지 마세요
                </div>
                <div className="text-gray-600 text-base leading-relaxed md:leading-loose">
                  하자, 일조량, 구조, 층간소음까지<br />
                  홈플래너가 현장을 직접 방문해 체크리스트로 꼼꼼히 확인하고 집보기 리포트 제공
                </div>
              </div>
            </div>
            {/* 3단계 */}
            <div className="bg-white rounded-3xl shadow-lg p-8 flex gap-6 items-start border border-gray-100 hover:shadow-2xl transition-all duration-300 group relative">
              <div className="relative w-20 h-20 flex-shrink-0">
                <Image
                  src="/images/3.png"
                  alt="3단계"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded-full border-4 border-orange-100 shadow"
                  priority
                />
                <span className="absolute -top-2 -right-2 bg-gradient-to-br from-orange-400 to-yellow-300 text-white text-xs font-bold rounded-full px-3 py-1 shadow">
                  3
                </span>
              </div>
              <div>
                <div className="font-bold text-lg md:text-xl text-gray-900 mb-2">
                  계약 전 리스크는 전문가+AI가 검토 !
                </div>
                <div className="text-gray-600 text-base leading-relaxed md:leading-loose">
                  계약서 문구 하나가 수천만원의 손실을 부를 수 있습니다.<br />
                  AI가 등기부등본, 건축물대장, 특약사항을 분석해 위험요소를 한눈에!<br />
                  보증금·계약조건·보증보험 및 전세대출까지 꼼꼼하게 검토
                </div>
              </div>
            </div>
            {/* 4단계 */}
            <div className="bg-white rounded-3xl shadow-lg p-8 flex gap-6 items-start border border-gray-100 hover:shadow-2xl transition-all duration-300 group relative">
              <div className="relative w-20 h-20 flex-shrink-0">
                <Image
                  src="/images/4.png"
                  alt="4단계"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded-full border-4 border-orange-100 shadow"
                  priority
                />
                <span className="absolute -top-2 -right-2 bg-gradient-to-br from-orange-400 to-yellow-300 text-white text-xs font-bold rounded-full px-3 py-1 shadow">
                  4
                </span>
              </div>
              <div>
                <div className="font-bold text-lg md:text-xl text-gray-900 mb-2">
                  인테리어부터 이사·입주까지 한 번에!
                </div>
                <div className="text-gray-600 text-base leading-relaxed md:leading-loose">
                  웨딩플래너처럼 전담 매니저가 인테리어, 이사, 입주까지 토탈 관리<br />
                  입주 전 스타일링, 가전가구 설치, 입주청소, 공과금 처리 등 고객 맞춤형 &#39;입주 플래닝 서비스&#39;로 완벽한 마무리
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400 text-center mt-8">
            ※ 특정 매물 추천을 하거나 중개수수료를 요구하지 않습니다
          </p>
        </div>

        {/* 고객 대상 */}
        <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-10 mb-20 shadow-lg flex flex-col md:flex-row md:items-center md:justify-start md:gap-0 border border-green-100">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-300 shadow-md mb-4 md:mb-0 md:mr-6">
            <HiOutlineUserGroup className="w-12 h-12 text-white" />
          </div>
          <div className="flex-1 text-center md:text-left md:ml-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center break-keep">
              💡 이런 분들께 꼭 필요합니다
            </h3>
            <ul className="space-y-4 text-gray-700 text-base md:ml-0">
              <li className="flex items-center justify-center gap-2">
                <HiOutlineMapPin className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="block text-center w-full break-keep">어디에 살아야 할지 몰라<br />동네 정보부터 막막하신 분</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <HiOutlineExclamationTriangle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="block text-center w-full break-keep">인터넷 매물 정보만 믿고<br />계약하기 두려우신 분</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <HiOutlineShieldCheck className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="block text-center w-full break-keep">계약서 속 위험 문구를 놓치고 후회한 경험이 있으신 분</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <HiOutlineUser className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="block text-center w-full break-keep">혼자 발품 팔기 어렵고 믿을 만한 동행자가 필요한 분</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 서비스 프로세스 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            무엇을 할 수 있나요?
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 1단계: 주거지 탐색 */}
            <div className="relative bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -top-4 left-8">
                <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow animate-pulse">
                  1
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2 group">
                  <HiOutlineMagnifyingGlass className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform duration-300" />{" "}
                  <span className="group-hover:text-green-600 transition-colors duration-300">
                    주거지 탐색 및 매물조회
                  </span>
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-700 text-sm hover:text-green-600 transition-colors duration-300">
                    <HiOutlineCheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>고객의 여건에 맞는 생활권역 가이드(○○동)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 text-sm hover:text-green-600 transition-colors duration-300">
                    <HiOutlineCheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>
                      고객 선택 매물 3건 조회 서비스{" "}
                      <span className="text-gray-400">
                        (등기부등본, 건축물대장, 보증보험, 전세대출)
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2단계: 집보기 동행 */}
            <div className="relative bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -top-4 left-8">
                <div className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow animate-pulse">
                  2
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2 group">
                  <HiOutlineLightBulb className="w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />{" "}
                  <span className="group-hover:text-emerald-600 transition-colors duration-300">
                    집보기 현장 동행
                  </span>
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-700 text-sm hover:text-emerald-600 transition-colors duration-300">
                    <HiOutlineCheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>
                      집보기 체크리스트(Hug) 활용 점검<br />
                      (누수, 일조량, 구조, 층간소음 등)
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 text-sm hover:text-emerald-600 transition-colors duration-300">
                    <HiOutlineCheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>계약 전 체크리스트 리포트 제공 (협상용)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 3단계: AI 계약 검토 */}
            <div className="relative bg-gradient-to-br from-cyan-50 to-white rounded-2xl p-8 border border-cyan-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -top-4 left-8">
                <div className="bg-cyan-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow animate-pulse">
                  3
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2 group">
                  <HiOutlineShieldCheck className="w-5 h-5 text-cyan-500 group-hover:scale-110 transition-transform duration-300" />{" "}
                  <span className="group-hover:text-cyan-600 transition-colors duration-300">
                    AI 기반 계약 리스크 검토
                  </span>
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-700 text-sm hover:text-cyan-600 transition-colors duration-300">
                    <HiOutlineCheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>등기부등본·계약조건·보증보험 최종점검</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 text-sm hover:text-cyan-600 transition-colors duration-300">
                    <HiOutlineCheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>고객 맞춤 특약사항 검토</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 text-sm hover:text-cyan-600 transition-colors duration-300">
                    <HiOutlineCheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>AI 기반 위험 분석 및 진단</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 신뢰 지표 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            부동산 내편을 신뢰할 수 있는 이유
          </h3>
          <div className="bg-white rounded-2xl p-8 shadow flex flex-col md:flex-row items-stretch justify-center gap-8">
            <div className="flex flex-col items-center">
              <HiOutlineCheckCircle className="w-10 h-10 text-green-500 mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">
                철저하게 검증된 내편 전문가
              </h4>
              <p className="text-sm text-gray-500 text-center">
                공인중개사 자격 보유!<br />
                엄격한 기준을 통과한 전문가 구성
              </p>
            </div>
            <div className="flex flex-col items-center">
              <HiOutlineLightBulb className="w-10 h-10 text-emerald-500 mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">
                명확하고 투명한 요금 구조
              </h4>
              <p className="text-sm text-gray-500 text-center">
                사전 안내된 고정 요금제로<br />
                안심하고 이용하세요
              </p>
            </div>
            <div className="flex flex-col items-center">
              <HiOutlineShieldCheck className="w-10 h-10 text-cyan-500 mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">
                AI 기반 계약 리스크 분석
              </h4>
              <p className="text-sm text-gray-500 text-center">
                국토교통부 공공데이터 API 연동을 통해<br />
                사전, 위험 요소 분석 및 진단
              </p>
            </div>
            <div className="flex flex-col items-center">
              <HiOutlineUserGroup className="w-10 h-10 text-green-500 mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">개인 맞춤</h4>
              <p className="text-sm text-gray-500 text-center">
                고객 상황에 맞는 맞춤형 서비스
              </p>
            </div>
          </div>
        </div>

        {/* 신뢰 지표 아래 안내 콘텐츠 */}
        <div className="text-center my-12">
          <h3 className="text-2xl font-bold mb-2 text-black" style={{ color: "#111" }}>
            🎯 지금까지 없던, AI+전문가 동행형 부동산 솔루션
          </h3>
          <p className="text-lg text-gray-700">
            이제는 혼자 고생하지 마세요.<br />
            내가 찾는 집, 내가 안심할 계약,내 옆엔 언제나 &#39;부동산 내편&#39;이 함께합니다.
          </p>
        </div>

        {/* CTA 버튼 섹션 */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              지금 바로 신뢰할 수 있는 전문가를 만나보세요!
            </h3>
            <p className="text-green-100 mb-6">
              검증된 전문가들이 여러분의 안전한 부동산 거래를 도와드립니다.
            </p>
            <button
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/1mnkVyDJ7A63wX0gfIxQikXJclhwBl4QRY7Du2S-fJmo/viewform?ts=68249e7a&edit_requested=true",
                  "_blank"
                )
              }
              className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-lg text-base hover-blink"
            >
              👥 전문가 찾기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
