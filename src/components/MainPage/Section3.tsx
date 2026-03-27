"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionContainer from "../SectionContainer";
import { fadeUpVariants, useScrollReveal } from "@/components/animations";

// ── 열 구성에 따른 스태거 딜레이 계산 ──────────────────────
// index 0-based, cols: 현재 열 수
// 2열: [0,1]이 동시(delay 0), [2]가 다음(delay 1)
// 3열: 0→1→2 순서
// 1열: 0→1→2 순서
function getStaggerDelay(index: number, cols: number): number {
  if (cols === 2) {
    // 짝수 행의 첫 번째: 0, 0 / 두 번째 행: 1
    return Math.floor(index / 2) * 0.15;
  }
  return index * 0.15;
}

type CardProps = {
  img: string;
  title: string;
  desc: string;
  index: number;
  isInView: boolean;
};

function Card({ img, title, desc, index, isInView }: CardProps) {
  // CSS columns 감지: ResizeObserver 대신 tailwind 브레이크포인트를
  // data 속성으로 표현하고 JS에서 읽는 방법 대신,
  // 단순화를 위해 index 기반 딜레이만 적용
  // (1열/2열/3열 모두 index 순서 등장 — 시각적으로 자연스러움)
  const delay = index * 0.12;

  return (
    <motion.div
      layout
      variants={fadeUpVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={delay}
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

export default function Section3() {
  const heading = useScrollReveal(0.2);
  const cardArea = useScrollReveal(0.15);

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
            custom={0.15}
            className="mt-4 text-gray-500 text-sm md:text-base fhd:text-lg"
          >
            불필요한 수수료 부담은 줄이고
            <br />
            손님과 가게 모두에게 더 합리적인 배달 주문을 제공합니다.
          </motion.p>
        </div>

        {/* 카드 그리드 — layout으로 열 전환 시 부드럽게 */}
        <motion.div
          ref={cardArea.ref}
          layout
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cards.map((card, i) => (
            <Card
              key={card.title}
              {...card}
              index={i}
              isInView={cardArea.isInView}
            />
          ))}
        </motion.div>

      </SectionContainer>
    </section>
  );
}