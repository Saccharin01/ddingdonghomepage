import Image from "next/image";

export default function Section4() {
  return (
    <section className="relative w-full min-h-screen">

      {/* 배경 */}
      <Image
        src="/04.Page.png"
        alt="section4"
        fill
        className="object-cover"
      />

      {/* 레이아웃 */}
      <div className="
        relative
        max-w-7xl mx-auto
        px-6 md:px-20
        h-full
        grid md:grid-cols-2
        items-center
      ">

        {/* 왼쪽 텍스트 */}
        <div className="max-w-md mt-90">

          <h2 className="text-2xl md:text-4xl font-bold">
            찾고, 고르고, 주문까지
            <br />
            <span className="text-pink-500">
              빠르고 간편하게
            </span>
          </h2>

          <p className="mt-4 text-gray-600 text-sm md:text-base">
            메뉴 선택부터 결제까지 복잡한 과정을 줄이고
            <br />
            띵동이 더 편리한 배달 경험을 제공합니다.
          </p>

        </div>

        {/* 오른쪽 공간 (비워둠) */}
        <div />

      </div>
    </section>
  );
}