import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/generator-back": {
        target: "http://localhost:80",
        secure: true,
        changeOrigin: true,
        rewrite: (path) => path,
      },
    },
  },
  define: {
    "process.env": process.env,
  },
});
