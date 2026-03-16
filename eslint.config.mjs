import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [

  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript"
  ),

  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },

  {
    rules: {

      /**
       * console 사용은 개발 단계에서 허용
       */
      "no-console": "warn",

      /**
       * any 타입 남용 방지
       */
      "@typescript-eslint/no-explicit-any": "warn",

      /**
       * 사용하지 않는 변수
       */
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" }
      ],

      /**
       * React hooks 규칙
       */
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      /**
       * Next 이미지 강제 규칙 완화
       */
      "@next/next/no-img-element": "off",

    },
  },
]

export default eslintConfig