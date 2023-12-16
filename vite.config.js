import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/generator-back": {
        target: "54.199.16.160",
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
