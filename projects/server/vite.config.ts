import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        globals: true,
        include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        exclude: [
            "node_modules",
            "package.json",
            "pnpm-lock.yaml",
            ".eslintrc.cjs",
            ".prettierrc.json",
            "tsconfig.json",
            "vite.config.ts"
        ],
        environment: "node"
    }
});
