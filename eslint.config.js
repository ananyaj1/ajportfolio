import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

const features = ["work", "about", "play"];

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    files: ["src/{components,data,types,utils,styles}/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: [
                "@/app/**",
                "@/features/**",
                "**/app/**",
                "**/features/**",
              ],
              message:
                "Shared modules must not depend on the application or features.",
            },
          ],
        },
      ],
    },
  },
  ...features.map((feature) => ({
    files: [`src/features/${feature}/**/*.{ts,tsx}`],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: [
                "@/app/**",
                "**/app/**",
                "@/features/**",
                ...features
                  .filter((other) => other !== feature)
                  .map((other) => `**/${other}/**`),
              ],
              message:
                "Use relative imports within a feature and compose different features in src/app.",
            },
          ],
        },
      ],
    },
  })),
]);
