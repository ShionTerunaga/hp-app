import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import path from "path";

export default defineConfig({
    plugins: [react(), vanillaExtractPlugin()],
    test: {
        environment: "jsdom",
        setupFiles: ["./src/__test__/setting/vitestSetup.ts"],
        include: [
            "./src/__test__/**/*.test.tsx",
            "./src/__test__/**/*.test.ts"
        ],
        globals: true
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    }
});
