"use client";

import { useInView, type Variants } from "framer-motion";
import { useRef } from "react";

// ── 공통 variants ──────────────────────────────────────────
// ease를 튜플 타입으로 명시 → Framer Motion Easing 타입 충족
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE,
      delay,
    },
  }),
};

// ── 스크롤 진입 감지 훅 ────────────────────────────────────
// once: true → 한 번 진입하면 다시 숨기지 않음
// amount: 섹션의 몇 % 가 뷰포트에 들어왔을 때 트리거할지 (0~1)
export function useScrollReveal(amount: number = 0.2) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });
  return { ref, isInView };
}