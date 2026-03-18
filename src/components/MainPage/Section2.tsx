import Image from "next/image";

export default function Section2() {
  return (
    <section className="relative w-full min-h-screen">
      {/* 배경 */}
      <Image src="/02.Page.png" alt="section2" fill className="object-cover" />

      {/* 레이아웃 */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 h-full grid md:grid-cols-2 items-center">
        <div
          className="mt-32 md:mt-40 lg:mt-48 max-w-md md:max-w-lg lg:max-w-xl text-white space-y-6">
          <h2 className="w-150 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            배달 음식이 비싸진 이유,
            <br />
            생각해 보신 적 있나요?
          </h2>

          <p className="w-150 opacity-90 text-base md:text-2xl font-bold leading-relaxed">
            우리가 결제한 금액 중 일부는
            <br />
            음식이 아니라 중개 수수료로 사라집니다
          </p>

          <p className="w-150 opacity-90 text-base md:text-2xl font-bold leading-relaxed">
            그래서 손님은 더 비싼 가격을 내고
            <br />
            가게는 더 적은 수익을 가져갑니다
          </p>

          <p className="font-semibold text-lg mt-4">
            모두에게 더 좋은 방법은 없을까요?
          </p>
        </div>

        {/* 오른쪽 비움 */}
        <div />
      </div>
    </section>
  );
}
