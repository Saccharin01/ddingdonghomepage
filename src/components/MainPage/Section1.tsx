import Image from "next/image";

export default function Section1() {
  return (
    <section className="relative w-full min-h-screen">

      {/* 배경 */}
      <Image
        src="/01.Page.png"
        alt="hero"
        fill
        priority
        className="object-cover"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* 레이아웃 */}
      <div className="
        relative z-10
        max-w-7xl mx-auto
        px-6 md:px-20
        h-full
        grid md:grid-cols-2
        items-center
      ">

        {/* 왼쪽 텍스트 */}
        <div className="mt-70 max-w-md text-white">
          <h1 className="text-3xl md:text-7xl font-bold leading-tight">
            배달앱,
            <br />
            수수료 때문에
            <br />
            고민하셨나요?
          </h1>

          <p className="mt-4 text-lg md:text-4xl text-[#F43465] font-semibold">
            띵동이 해결해 드립니다!
          </p>

          <div className="flex gap-3 mt-6">
            <Image src="/01.appStore.svg" alt="" width={120} height={40} />
            <Image src="/01.google.svg" alt="" width={120} height={40} />
          </div>
        </div>

        {/* 오른쪽 비움 (이미지 공간) */}
        <div />
      </div>
    </section>
  );
}