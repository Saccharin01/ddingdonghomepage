"use client";

import { useInView, type Variants } from "framer-motion";
import { useRef } from "react";

// ── 애니메이션 설정값 — 이 값만 조정하면 전체 반영 ────────
export const ANIM_CONFIG = {
  duration: 0.9,    // 애니메이션 재생 시간 (초)
  stagger: 0.3,    // 요소 간 딜레이 간격 (초) ← 여기서 속도 조절
  y: 40,            // 시작 위치 오프셋 (px)
  amount: 0.2,      // 뷰포트 진입 감지 기준 (0~1)
};

// ── ease 튜플 타입 명시 ────────────────────────────────────
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ── 공통 variants ──────────────────────────────────────────
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: ANIM_CONFIG.y },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIM_CONFIG.duration,
      ease: EASE,
      delay,
    },
  }),
};

// ── 스크롤 진입 감지 훅 ────────────────────────────────────
// once: false → 스크롤 업 시 다시 숨겨졌다가 재등장
export function useScrollReveal(amount: number = ANIM_CONFIG.amount) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount });
  return { ref, isInView };
}