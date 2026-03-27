"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionContainer from "../SectionContainer";
import { fadeUpVariants, useScrollReveal, ANIM_CONFIG } from "../animations";

const { stagger } = ANIM_CONFIG;

const textItems = [
  "우리가 결제한 금액 중 일부는 음식이 아니라 중개 수수료로 사라집니다",
  "그래서 손님은 더 비싼 가격을 내고 가게는 더 적은 수익을 가져갑니다",
  "모두에게 더 좋은 방법은 없을까요?",
];

export default function Section2() {
  const { ref, isInView } = useScrollReveal(0.25);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">

      {/* 배경 */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/02.Page.png"
          alt="section2"
          fill
          sizes="100vw"
          className="object-cover object-[72%_center] lg:object-center"
        />
      </div>

      {/* 오버레이 */}
      <div className="absolute inset-0 -z-10 bg-[#F43465]/60 lg:bg-[#F43465]/20" />

      <SectionContainer>
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 items-center">

          {/* LEFT — 텍스트 */}
          <div className="text-white break-keep space-y-6">

            <motion.h2
              variants={fadeUpVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0}
              className="text-3xl md:text-5xl fhd:text-7xl font-bold leading-[1.15]"
            >
              배달 음식이 비싸진 이유,
              <br />
              생각해 보신 적 있나요?
            </motion.h2>

            {textItems.map((text, i) => (
              <motion.p
                key={i}
                variants={fadeUpVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={stagger * (i + 1)}
                className="text-lg md:text-2xl fhd:text-4xl font-bold leading-[1.4] opacity-95"
              >
                {text}
              </motion.p>
            ))}

          </div>

          {/* RIGHT */}
          <div className="hidden lg:block" />

        </div>
      </SectionContainer>
    </section>
  );
}