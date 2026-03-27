"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionContainer from "../SectionContainer";
import { fadeUpVariants, useScrollReveal } from "@/components/animations";

export default function Section4() {
  const { ref, isInView } = useScrollReveal(0.25);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">

      {/* 배경 */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/04.Page.png"
          alt="section4"
          fill
          sizes="100vw"
          className="object-cover object-[75%_center] lg:object-center"
        />
      </div>

      <SectionContainer className="grid md:grid-cols-2 items-center">

        {/* LEFT — 텍스트 카드 */}
        <motion.div
          ref={ref}
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          className="w-fit rounded-2xl bg-white/35 px-5 py-6 lg:px-8 lg:py-8 backdrop-blur-md"
        >
          <div className="max-w-xs lg:max-w-md">
            <motion.h2
              variants={fadeUpVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.1}
              className="pb-6 text-2xl md:text-3xl lg:text-4xl fhd:text-5xl font-bold leading-[1.15] tracking-[-0.02em] text-slate-900"
            >
              찾고, 고르고, 주문까지
              <br />
              <span className="text-pink-500">빠르고 간편하게!</span>
            </motion.h2>

            <motion.p
              variants={fadeUpVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.22}
              className="text-base fhd:text-lg font-medium leading-[1.4]"
            >
              메뉴 선택부터 결제까지 복잡한 과정을
              줄이고 띵동이 더 편리한
              배달 경험을 제공합니다.
            </motion.p>
          </div>
        </motion.div>

        {/* RIGHT */}
        <div />

      </SectionContainer>
    </section>
  );
}