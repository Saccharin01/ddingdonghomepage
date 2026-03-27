"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SectionContainer from "./SectionContainer";

const MOBILE_BREAKPOINT = 768;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (!ref.current) return;
      const height = ref.current.offsetHeight;
      document.documentElement.style.setProperty("--header-height", `${height}px`);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <header
        ref={ref}
        className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur"
      >
        <SectionContainer className="py-3 flex items-center justify-between">
          {/* 로고 */}
          <Link href="/" className="shrink-0" onClick={closeMenu}>
            <img
              src="/00.companyLogo.svg"
              alt="띵동 로고"
              className="h-10 w-auto md:h-12"
            />
          </Link>

          {/* 데스크탑 메뉴 */}
          <div className="hidden min-[770px]:flex items-center gap-3 lg:gap-4">
            <Link
              href="https://ceo.ddingdongcorp.com/v2/application"
              className="inline-flex items-center justify-center min-w-35 max-w-45 h-12 px-6 rounded-full border-2 border-[#F43465] text-[#F43465] font-semibold text-sm lg:text-base whitespace-nowrap hover:bg-pink-50 active:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 transition"
            >
              입점 신청
            </Link>

            <Link
              href="https://dingdongposdeploy.azurewebsites.net/publish/setup.exe"
              className="inline-flex items-center justify-center min-w-35 max-w-45 h-12 px-6 rounded-full bg-[#F43465] text-white font-semibold text-sm lg:text-base whitespace-nowrap hover:bg-pink-600 active:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 transition"
            >
              사장님 POS
            </Link>
          </div>

          {/* 모바일 햄버거 버튼 */}
          <button
            type="button"
            onClick={toggleMenu}
            className="min-[770px]:hidden relative inline-flex h-11 w-11 items-center justify-center rounded-md text-[#F43465] hover:bg-pink-50 active:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-300"
            aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={isOpen}
          >
            <span className="sr-only">{isOpen ? "메뉴 닫기" : "메뉴 열기"}</span>
            <span className="relative block h-5 w-5">
              <span className={`absolute left-0 top-1/2 h-0.5 w-5 bg-current transition-all duration-300 ease-in-out ${isOpen ? "rotate-45" : "-translate-y-2"}`} />
              <span className={`absolute left-0 top-1/2 h-0.5 w-5 bg-current transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 top-1/2 h-0.5 w-5 bg-current transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45" : "translate-y-2"}`} />
            </span>
          </button>
        </SectionContainer>
      </header>

      {/* 모바일 오버레이 */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 min-[770px]:hidden transition-opacity duration-300 ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      />

      {/* 모바일 드롭다운 */}
      <div
        className={`fixed left-0 top-(--header-height) w-full z-50 bg-white shadow-lg min-[770px]:hidden origin-top transition-all duration-300 ease-out ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100 scale-y-100"
            : "pointer-events-none -translate-y-2 opacity-0 scale-y-95"
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-3 items-center">
          <Link
            href="https://ceo.ddingdongcorp.com/v2/application"
            onClick={closeMenu}
            className="w-full min-h-12 max-h-14 max-w-60 inline-flex items-center justify-center px-4 py-3 rounded-full border-2 border-[#F43465] text-[#F43465] font-semibold text-sm whitespace-nowrap hover:bg-pink-50 active:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 transition"
          >
            입점 신청
          </Link>

          <Link
            href="https://dingdongposdeploy.azurewebsites.net/publish/setup.exe"
            onClick={closeMenu}
            className="w-full min-h-12 max-h-14 max-w-60 inline-flex items-center justify-center px-4 py-3 rounded-full bg-[#F43465] text-white font-semibold text-sm whitespace-nowrap hover:bg-pink-600 active:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 transition"
          >
            사장님 POS
          </Link>
        </div>
      </div>
    </>
  );
}