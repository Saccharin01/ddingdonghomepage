import Image from "next/image";
import SectionContainer from "../SectionContainer";

export default function Section2() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* 배경 */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/02.Page.png"
          alt="section2"
          fill
          className="object-cover"
        />
      </div>

      {/* 컨테이너 */}
        <SectionContainer
          className="
            h-full
            grid
            md:grid-cols-2
            items-center
          "
        >

        {/* LEFT */}
        <div className="max-w-md mt-70 text-white space-y-6 md:max-w-lg lg:max-w-xl">

          <h2 className="text-3xl md:text-5xl fhd:text-7xl font-bold leading-tight">
            배달 음식이 비싸진 이유,
            <br />
            생각해 보신 적 있나요?
          </h2>

          <p className="opacity-90 text-base md:text-2xl fhd:text-3xl font-bold leading-relaxed">
            우리가 결제한 금액 중 일부는
            <br />
            음식이 아니라 중개 수수료로 사라집니다
          </p>

          <p className="opacity-90 text-base md:text-2xl fhd:text-3xl font-bold leading-relaxed">
            그래서 손님은 더 비싼 가격을 내고
            <br />
            가게는 더 적은 수익을 가져갑니다
          </p>

          <p className="font-semibold text-lg md:text-xl fhd:text-2xl mt-4">
            모두에게 더 좋은 방법은 없을까요?
          </p>

        </div>

        {/* RIGHT */}
        <div />

      </SectionContainer>
    </section>
  );
}