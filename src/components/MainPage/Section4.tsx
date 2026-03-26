import Image from "next/image";
import SectionContainer from "../SectionContainer";

export default function Section4() {
  return (
    <section className="relative w-full min-h-screen">
      <Image
        src="/04.Page.png"
        alt="section4"
        fill
        className="object-cover object-[75%_center] md:object-[85%_center] lg:object-center"
      />

      <SectionContainer
        className="
          relative
          h-full
          grid
          md:grid-cols-2
          items-center
        "
      >
        <div className="mt-90 justify-self-start w-fit rounded-2xl bg-[#ffffff]/35 px-5 py-4 md:px-5 md:py-4 lg:px-6 lg:py-5 backdrop-blur-md">
          <div className="max-w-70 md:max-w-76 lg:max-w-105">
            <h2 className="pb-8 text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.15] tracking-[-0.02em] text-slate-900">
              찾고, 고르고, 주문까지
              <br />
              <span className="text-pink-500">빠르고 간편하게!</span>
            </h2>

            <p className="pb-4 text-base font-medium leading-[1.4]">
              메뉴 선택부터 결제까지 복잡한 과정을 <br />
              줄이고 띵동이 더 편리한 <br />
              배달 경험을 제공합니다.
            </p>
          </div>
        </div>

        <div />
      </SectionContainer>
    </section>
  );
}