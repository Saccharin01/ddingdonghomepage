import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100">

      <div className="
        max-w-7xl mx-auto
        px-6 md:px-20
        py-10
      ">

        {/* 상단 영역 */}
        <div className="
          flex flex-col md:flex-row
          md:items-center
          md:justify-between
          gap-4
        ">

          {/* 로고 */}
          <div>
            <Image
              src="/00.companyLogo.svg" // 👉 로고 이미지
              alt="logo"
              width={120}
              height={40}
            />
          </div>

          {/* 고객센터 */}
          <div className="
            text-sm md:text-base
            text-gray-800
          ">
            <span className="font-semibold">
              고객센터 1800-9991
            </span>
            <span className="ml-3 text-gray-500">
              평일 (10:00 - 19:00)
            </span>
          </div>

        </div>

        {/* 구분선 */}
        <div className="mt-6 border-t border-pink-500" />

        {/* 하단 정보 */}
        <div className="
          mt-6
          text-sm
          text-gray-500
          space-y-2
        ">

          <div className="text-gray-700 font-medium">
            주식회사 띵동
          </div>

          <div className="flex flex-col md:flex-row md:flex-wrap gap-x-4 gap-y-1">
            <span>대표 한영빈</span>
            <span>사업자등록번호 714-86-03513</span>
            <span>대전광역시 서구 갈마로 189 2층</span>
            <span>T. 1800-9991</span>
          </div>

        </div>

      </div>
    </footer>
  );
}