import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/**
 * GitHub Pages 子路径部署时改为仓库名，例如 base: "/resume/"
 * 用户页（username.github.io）根部署时用 base: "/"
 */
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
