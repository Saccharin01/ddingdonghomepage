import Image from "next/image";
import Link from "next/link";
import SectionContainer from "../SectionContainer";

export default function Section1() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">

      {/* 배경 레이어 */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/01.Page.png"
          alt="bg"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <SectionContainer className="grid md:grid-cols-2 items-center">

        {/* LEFT */}
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl fhd:text-7xl font-bold leading-tight">
            배달앱,
            <br />
            수수료 때문에
            <br />
            고민하셨나요?
          </h1>

          <p className="mt-8 text-2xl md:text-4xl fhd:text-6xl text-[#F43465] font-semibold">
            띵동이 해결해<br className="hidden md:block lg:hidden" />드립니다!
          </p>

          <div className="flex gap-5 mt-8 items-center">
            <Link href="https://apps.apple.com/kr/app/%EB%9D%B5%EB%8F%99-%EC%9A%B0%EB%A6%AC%EB%8F%99%EB%84%A4-%EA%B2%BD%EC%A0%9C-%EC%82%B4%EB%A6%AC%EB%8A%94-%EB%B0%B0%EB%8B%AC%EC%95%B1/id6504663019">
              <img
                src="/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg"
                alt="App Store"
                className="h-16 w-auto"
              />
            </Link>

            <Link href="https://play.google.com/store/apps/details?id=com.buil.galmegi&hl=ko">
              <img
                src="/GetItOnGooglePlay_Badge_Web_color_English.svg"
                alt="Google Play"
                className="h-15 w-auto"
              />
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div />

      </SectionContainer>
    </section>
  );
}