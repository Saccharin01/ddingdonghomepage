import Image from "next/image";
import Link from "next/link";

export default function Section1() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* 배경 레이어 */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/01.Page.png"
          alt="bg"
          fill
          priority
          className="object-cover"
        />
      </div>

        {/* 컨텐츠 영역만 밀기 */}
        <div className="
          pt-(--header-height)
          max-w-7xl
          fhd:max-w-[1600px]
          mx-auto
          px-6 md:px-20 fhd:px-32
          h-full
          grid md:grid-cols-2
          items-center
        ">

        {/* LEFT */}
        <div className="max-w-md text-white fhd: mt-40">
          <h1 className="text-4xl md:text-5xl mt-20 fhd:text-7xl font-bold leading-tight">
            배달앱,
            <br />
            수수료 때문에
            <br />
            고민하셨나요?
          </h1>

          <p className="mt-15 text-lg md:text-4xl fhd:text-6xl text-[#F43465] font-semibold">
            띵동이 해결해 드립니다!
          </p>

          <div className="flex gap-5 mt-10 items-center">

            <Link href="https://apps.apple.com/...">
              <img
                src="/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg"
                alt="App Store"
                className="h-16 w-auto"
              />
            </Link>

            <Link href="https://play.google.com/...">
              <img
                src="/GetItOnGooglePlay_Badge_Web_color_English.svg"
                alt="Google Play"
                className="h-15 w-auto"
              />
            </Link>

          </div>
        </div>

        {/* RIGHT (비워두거나 추후 콘텐츠) */}
        <div />
      </div>
    </section>
  );
}