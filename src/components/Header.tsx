import Link from "next/link";

export default function Header() {
  return (
    <header className="py-3 flex fixed w-full z-50 bg-white/80 justify-between items-center">
      {/* 왼쪽 그룹 */}
      <div className="flex items-center gap-6 pl-10">
        <Link href="/">
          <img
            src="00.companyLogo.svg"
            alt="Logo Image"
            className="h-fit w-fit"
          />
        </Link>

        <Link href="/about">About us</Link>
        <Link href="/organization">조직도</Link>
        <Link href="/download">다운로드</Link>
      </div>

      <div className="flex gap-4 items-center">
        <Link
          href="/test"
          className="px-8 py-3 rounded-full border-2 border-[#F43465] text-[#F43465] font-semibold
        hover:bg-pink-50 active:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2
        transition">
          입점 신청
        </Link>

        <Link
          href="/test"
          className="mr-4 px-8 py-3 rounded-full bg-[#F43465] text-white font-semibold hover:bg-pink-600 active:bg-pink-700
          focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 transition">
          사장님 POS
        </Link>
      </div>
    </header>
  );
}
