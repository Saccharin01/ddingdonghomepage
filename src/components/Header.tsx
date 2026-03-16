import Link from "next/link"

export default function Header() {
  return (
    <header className="h-16 border-b flex items-center gap-10 px-8 sticky top-0 z-50 bg-white">

      <Link href="/" className="font-bold text-lg">
        DDingodng
      </Link>

      <nav className="flex gap-6 text-sm">

        <Link href="/about">About us</Link>

        <Link href="/organization">조직도</Link>

        <Link href="/download">다운로드</Link>

        <Link
          href="/join"
        >
          입점 신청
        </Link>

      </nav>

    </header>
  )
}