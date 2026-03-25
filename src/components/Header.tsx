"use client"

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Header() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (!ref.current) return;

      const height = ref.current.offsetHeight;

      document.documentElement.style.setProperty(
        "--header-height",
        `${height}px`,
      );
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <header
      ref={ref}
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur"
    >
      <div className="max-w-7xl fhd:max-w-[1600px] mx-auto px-6 md:px-20 py-3 flex justify-between items-center">
        <Link href="/">
          <img src="00.companyLogo.svg" alt="Logo" />
        </Link>

        <div className="flex gap-4">
        <Link
          href="https://ceo.ddingdongcorp.com/v2/application"
          className="px-8 py-3 rounded-full border-2 border-[#F43465] text-[#F43465] font-semibold
        hover:bg-pink-50 active:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2
        transition">
          입점 신청
        </Link>

        <Link
          href="https://dingdongposdeploy.azurewebsites.net/publish/setup.exe"
          className="mr-20 px-8 py-3 rounded-full bg-[#F43465] text-white font-semibold hover:bg-pink-600 active:bg-pink-700
          focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 transition">
          사장님 POS
        </Link>
        </div>
      </div>
    </header>
  );
}
