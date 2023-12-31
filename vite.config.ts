import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      include: ["src/**/*.ts", "src/**/*.vue", "src/*.ts", "src/*.vue"],
    }),
  ],
  base: "./", // 将根路径换成相对路径
  resolve: {
    // 配置路径别名
    alias: {
      "@": "/src",
    },
  },
});
