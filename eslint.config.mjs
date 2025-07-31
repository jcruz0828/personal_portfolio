import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Extend default Next.js configurations for core web vitals and TypeScript
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  
  // Add your custom rules to disable specific warnings/errors
  {
    rules: {
      // Disable unused variables rule
      '@typescript-eslint/no-unused-vars': 'off', // Ignore unused variables warnings

      // Disable the 'any' type rule
      '@typescript-eslint/no-explicit-any': 'off', // Ignore usage of 'any' type warnings

      // Disable Next.js warning for <img> elements (use next/image instead)
      '@next/next/no-img-element': 'off', // Ignore the <img> tag warning in Next.js

      // Disable React Hook dependency warning (missing dependencies in useEffect, useMemo)
      'react-hooks/exhaustive-deps': 'off', // Ignore missing dependencies in React Hooks

      // Disable "prefer-const" rule for variables that are never reassigned
      'prefer-const': 'off', // Ignore the prefer-const rule

      // Disable the unescaped entities rule (for JSX)
      'react/no-unescaped-entities': 'off', // Ignore unescaped entities in JSX
    },
  },
];

export default eslintConfig;
