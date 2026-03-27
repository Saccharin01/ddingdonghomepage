"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionContainer from "../SectionContainer";
import { fadeUpVariants, useScrollReveal, ANIM_CONFIG } from "../animations";

const { stagger } = ANIM_CONFIG;

// ── 열 수 감지 훅 ──────────────────────────────────────────
// 그리드 컨테이너 너비를 ResizeObserver로 관찰해서 현재 열 수 반환
function useGridCols(breakpoints: { cols: number; minWidth: number }[]) {
  const ref = useRef<HTMLDivElement>(null);
  const [cols, setCols] = useState(1);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;
      // 넓은 것부터 순서대로 체크
      const matched = [...breakpoints]
        .sort((a, b) => b.minWidth - a.minWidth)
        .find((bp) => width >= bp.minWidth);
      setCols(matched?.cols ?? 1);
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, cols };
}

// ── 열 변경 시 카드 재등장 키 ─────────────────────────────
// cols가 바뀔 때마다 key가 바뀌어 카드가 unmount→remount → 스태거 재생
function useColsChangeKey(cols: number) {
  const [key, setKey] = useState(0);
  const prevCols = useRef(cols);

  useEffect(() => {
    if (prevCols.current !== cols) {
      prevCols.current = cols;
      setKey((k) => k + 1);
    }
  }, [cols]);

  return key;
}

type CardProps = {
  img: string;
  title: string;
  desc: string;
  index: number;
  isInView: boolean;
};

function Card({ img, title, desc, index, isInView }: CardProps) {
  return (
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={index * stagger}
      className="text-left"
    >
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover rounded-2xl"
        />
      </div>

      <div className="mt-4">
        <p className="font-semibold text-base md:text-lg">{title}</p>
        <p className="mt-2 text-sm text-gray-500">{desc}</p>
      </div>
    </motion.div>
  );
}

const cards = [
  {
    img: "/03.ImageAsset01.jpg",
    title: "주문 중개 수수료 0원",
    desc: "주문 중개 수수료 0원으로 국내 최저입니다.",
  },
  {
    img: "/03.ImageAsset02.jpg",
    title: "매달 본사 쿠폰 지급",
    desc: "띵동 고객님들을 위해 매달 쿠폰을 지급해드립니다.",
  },
  {
    img: "/03.ImageAsset03.jpg",
    title: "우리동네 무료배달",
    desc: "최소 1.0km부터 기본 적용됩니다.",
  },
];

// Tailwind 그리드 브레이크포인트와 동일하게 맞춤
// md: 768px → 2열 / lg: 1024px → 3열
const GRID_BREAKPOINTS = [
  { cols: 3, minWidth: 1024 },
  { cols: 2, minWidth: 768 },
];

export default function Section3() {
  const heading = useScrollReveal(0.2);
  const cardArea = useScrollReveal(0.15);

  const { ref: gridRef, cols } = useGridCols(GRID_BREAKPOINTS);
  const colsKey = useColsChangeKey(cols);

  return (
    <section className="min-h-screen w-full bg-white flex items-center">
      <SectionContainer className="py-20">

        {/* 제목 영역 */}
        <div ref={heading.ref} className="max-w-2xl">
          <motion.h2
            variants={fadeUpVariants}
            initial="hidden"
            animate={heading.isInView ? "visible" : "hidden"}
            custom={0}
            className="text-2xl md:text-4xl fhd:text-6xl font-bold leading-tight"
          >
            손님도 사장님도 웃는 배달,
            <br />
            <span className="text-pink-500">띵동</span>에서 시작하세요
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            initial="hidden"
            animate={heading.isInView ? "visible" : "hidden"}
            custom={stagger}
            className="mt-4 text-gray-500 text-sm md:text-base fhd:text-lg"
          >
            불필요한 수수료 부담은 줄이고
            <br />
            손님과 가게 모두에게 더 합리적인 배달 주문을 제공합니다.
          </motion.p>
        </div>

        {/* 카드 그리드
            - gridRef: ResizeObserver가 너비 감지
            - ref={cardArea.ref}: 스크롤 진입 감지
            - key={colsKey}: 열 수 변경 시 카드 전체 remount → 스태거 재실행
        */}
        <div
          ref={(el) => {
            // 두 ref를 하나의 div에 동시 부착
            (gridRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
            (cardArea.ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
          }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cards.map((card, i) => (
            <Card
              key={`${colsKey}-${card.title}`}
              {...card}
              index={i}
              isInView={cardArea.isInView}
            />
          ))}
        </div>

      </SectionContainer>
    </section>
  );
}