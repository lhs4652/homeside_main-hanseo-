import { HiStar } from "react-icons/hi2";

interface Review {
  name: string;
  content: string;
  rating: number;
}

const reviews: Review[] = [
  {
    name: "김지영",
    content:
      "첫 신혼집 구하는거라 신중히 알아보려고 검색하다 부동산 내편을 알게되었어요:) 저희가 생각한 금액대, 동네, 역세권, 학교 등 몇가지 조건 알려드리니 맞춤형 매물을 바로 찾아서 보여주시더라구요 ! 매물 현장확인 할수있게 일정도 잡아주시고 동행해주셔서 손쉽게 신혼집을 구할 수 있었어요. 중간에 신경써야할 부분 챙겨봐주셔서 편했네요 😊 계약서 작성 특약사항도 꼼꼼히 티칭해주셔서 필요한 특약도 넣어갈수 있었어요 ! 덕분에 좋은 집 잘 구했습니다 ㅎㅎ 감사해요 :-)",
    rating: 5,
  },
  {
    name: "이준호",
    content:
      "이번에 개업을 진행하게 되어 상가를 알아보았습니다. 유동인구가 많으며, 주차가 편리하고, 눈에 잘 띄는 곳이였으면 하는 까다로운 조건에 부합하는 상가 찾기는 하늘에 별 따기 였습니다. 그러던 중 부동산내편을 알게되어 문의했더니, 몇 개 매물을 추려서 보여주시더군요. 제 마음에 쏙 드는 매물을 운명처럼 만나버렸습니다. 다만 예산 초과라 고민되었는데, 매도인과 중개서 설득으로 보증금과 월세를 조정해주셔서 입주가능하게 되었습니다. 정말 시작이 너무 좋습니다. 덕분에 좋은 상가에서 새로운 출발 잘 해보겠습니다. 하우스 가이드 화이팅 ! 대박나서 2호점 차리게되면 또 서비스 이용하려고 합니다. ^^",
    rating: 5,
  },
  {
    name: "박서연",
    content:
      "아파트 매매 하려고 알아보았습니다. 허위 매물도 많고, 이중계약 등 걱정이 되어서 부동산내편 서비스 SOS 했네요.~ 계약 전 집 상태도 꼼꼼하게 확인해주시고, 문제있는 부분은 매도인에게 고지해주셔서 수리 및 매매가 네고가 가능했네요.~ 대출 관련으로 어려움이 있었는데 계약 당일 잔금 치룰때도 같이 동행해주셔서 침착하게 잘할 수 있었어요. 고맙습니다.!!! ~^^",
    rating: 5,
  },
  {
    name: "최민수",
    content:
      '"부동산 내편 서비스"는 정말 제게 꼭 필요했던 서비스입니다 !!! 첫 자취를 시작하게 되며 매물을 찾아보다가 전세사기 때문에 걱정되었습니다. 검색 중에 이 서비스를 접하게 되었고, 긴가민가하며 상담을 요청했는데 친절한 설명과 빠른 매물 확인에 괜찮다 싶어 진행하게 되었습니다 ! 진행과정 중에 보증보험 가입 가능한 금액과 전세보증금액이 맞지 않았는데, 보증보험 가입가능 금액 확인과 반전세로 계약 금액 협의까지 해주셨습니다. 덕분에 계약이 안전하게 잘 마무리 되었네요 ! 첫 계약이라 미숙한 저 대신 매물 확인부터 계약까지 모든 과정에 동행해주셔서 정말 든든한 내편이라고 생각이 되고 든든했습니다. 덕분에 집 잘 구해서 너무 만족스럽습니다 ^^ 저같은 사회 초년생이나 , 부동산 거래를 많이 접해보지못하신 분들께 강추드립니다. 주변 지인들에게도 입소문 내고 있어요 ㅎㅎ',
    rating: 5,
  },
];

export default function ReviewSection() {
  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>고객 후기</h2>
          <p className='text-lg text-gray-600'>
            부동산 내편과 함께한 고객들의 생생한 후기를 확인해보세요
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {reviews.map((review, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300'
            >
              <div className='flex items-center mb-4'>
                <div className='flex-1'>
                  <h3 className='text-lg font-semibold text-gray-900'>
                    {review.name}
                  </h3>
                </div>
                <div className='flex items-center'>
                  {[...Array(review.rating)].map((_, i) => (
                    <HiStar
                      key={i}
                      className='w-5 h-5 text-yellow-400'
                    />
                  ))}
                </div>
              </div>
              <p className='text-gray-600 whitespace-pre-line'>
                {review.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
