import ExpertCard from "./ExpertCard";

// 더미 데이터
const expertsData = [
  {
    name: "손미정 전문가",
    title: "승인됨",
    description: "고객의 입장에서 최선을 다하겠습니다.",
    activity_area: ["경기 안양시", "군포시", "의왕시"],
    career_years: 5,
    projects_count: 1,
    tags: ["전세", "빌라", "오피스텔"],
    profile_image: "https://via.placeholder.com/150",
  },
  {
    name: "배정용 전문가",
    title: "승인됨",
    description: "믿고 맡기세요. 꼼꼼하게 도와드립니다.",
    activity_area: ["부산 해운대구"],
    career_years: 7,
    projects_count: 1,
    tags: ["전세", "아파트"],
    profile_image: "https://via.placeholder.com/150",
  },
  {
    name: "김회정 전문가",
    title: "승인됨",
    description: "전문적인 시각으로 꼼꼼하게 체크하겠습니다.",
    activity_area: ["제주도", "세종시", "인천"],
    career_years: 20,
    projects_count: 3,
    tags: ["월세", "전세", "단독주택"],
    profile_image: "https://via.placeholder.com/150",
  },
  {
    name: "김수강 정비사",
    title: "승인됨",
    description: "상세한 상담으로 최적의 거래를 안내합니다.",
    activity_area: ["경기 광명시", "서울", "구리시"],
    career_years: 7,
    projects_count: 11,
    tags: ["전세", "오피스텔"],
    profile_image: "https://via.placeholder.com/150",
  },
  {
    name: "송홍식 정비사",
    title: "승인됨",
    description: "고객의 눈높이에 맞는 상담으로 도움을 드리겠습니다.",
    activity_area: ["울산", "양산", "창원시"],
    career_years: 30,
    projects_count: 7,
    tags: ["전세", "빌라", "아파트"],
    profile_image: "https://via.placeholder.com/150",
  },
  {
    name: "권두승 정비사",
    title: "승인됨",
    description: "가족보다 더 꼼꼼하게 도움을 드리겠습니다.",
    activity_area: ["경기 고양시", "일산동구", "진흥원"],
    career_years: 29,
    projects_count: 4,
    tags: ["전세", "오피스텔"],
    profile_image: "https://via.placeholder.com/150",
  },
  {
    name: "강선호 정비사",
    title: "승인됨",
    description: "자세하고 쉬운 설명으로 도움드리겠습니다.",
    activity_area: ["강원", "성남시", "강릉"],
    career_years: 10,
    projects_count: 11,
    tags: ["전세", "빌라"],
    profile_image: "https://via.placeholder.com/150",
  },
  {
    name: "박덕규 정비사",
    title: "승인됨",
    description: "고객이 만족할 수 있는 상담을 해드리겠습니다.",
    activity_area: ["대구", "수성구", "강변경"],
    career_years: 30,
    projects_count: 7,
    tags: ["전세", "단독주택"],
    profile_image: "https://via.placeholder.com/150",
  },
  {
    name: "박승기 정비사",
    title: "예비 승인",
    description: "짚비지역방문으로 진주시원을 받아 최고로 작업합니다.",
    activity_area: ["전북"],
    career_years: 10,
    projects_count: 9,
    tags: ["전세", "빌라"],
    profile_image: "https://via.placeholder.com/150",
  },
];

export default function ExpertList() {
  return (
    <section
      id='expert-list'
      className='py-16 bg-gray-50'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* 섹션 제목 */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            검증된 전문가들을 만나보세요
          </h2>
          <p className='text-lg text-gray-600'>
            전문성과 신뢰성을 갖춘 부동산 전문가들이 여러분의 거래를
            도와드립니다.
          </p>
        </div>

        {/* 전문가 카드 그리드 (3열) */}
        <div className='grid grid-cols-1 gap-8 mb-12 opacity-40 pointer-events-none blur-sm'>
          {expertsData.slice(0, 9).map((expert, index) => (
            <ExpertCard
              key={index}
              expert={expert}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
