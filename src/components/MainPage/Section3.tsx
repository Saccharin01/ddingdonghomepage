import Image from "next/image";

type CardProps = {
  img: string;
  title: string;
  desc: string;
};


function Card({ img, title, desc }: CardProps) {
  return (
    <div className="text-left">

      {/* 이미지 */}
      <div className="relative min-w-80 min-h-80 w-full h-55 md:h-65">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover rounded-2xl"
        />
      </div>

      {/* 텍스트 */}
      <div className="mt-4">
        <p className="font-semibold text-base md:text-lg">
          {title}
        </p>

        <p className="mt-2 text-sm text-gray-500">
          {desc}
        </p>
      </div>

    </div>
  );
}

export default function Section3() {
  return (
    <section className="
      w-full
      min-h-screen
      bg-white
      flex items-center
    ">
      <div className="
        w-full
        max-w-7xl
        mx-auto
        md:
      ">

        {/* 상단 텍스트 */}
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            손님도 사장님도 웃는 배달,
            <br />
            <span className="text-pink-500">띵동</span>에서 시작하세요
          </h2>

          <p className="mt-4 text-gray-500 text-sm md:text-base">
            불필요한 수수료 부담은 줄이고
            <br />
            손님과 가게 모두에게 더 합리적인 배달 주문을 제공합니다.
          </p>
        </div>

        {/* 카드 영역 */}
        <div className="
          mt-12
          grid grid-cols-1 md:grid-cols-3
          gap-8
        ">
          <Card
            img="/03.ImageAsset01.jpg"
            title="주문 중개 수수료 0원"
            desc="주문 중개 수수료 0원으로 국내 최저입니다."
          />

          <Card
            img="/03.ImageAsset02.jpg"
            title="매달 본사 쿠폰 지급"
            desc="띵동 고객님들을 위해 매달 쿠폰을 지급해드립니다."
          />

          <Card
            img="/03.ImageAsset03.jpg"
            title="우리동네 무료배달"
            desc="최소 1.0km부터 기본 적용됩니다."
          />
        </div>

      </div>
    </section>
  );
}