import Link from "next/link";
export default function Header() {
  return (
    <header className="flex fixed top-0 left-0 w-full z-50 bg-white/80 py-3 pt-5">
      <Link href="/" className="font-bold text-lg">
        <img
        src="00.companyLogo.svg"
        alt="Logo Image"
        className="h-fit w-fit mr-10 pl-10"
        />
      </Link>

      <nav className="flex gap-6 text-sm text-center items-center justify-center">
        
        <Link href="/about">About us</Link>

        <Link href="/organization">조직도</Link>

        <Link href="/download">다운로드</Link>

        <Link href="/join">입점 신청</Link>
      </nav>

      <nav>
        
      </nav>

    </header>
  );
}
