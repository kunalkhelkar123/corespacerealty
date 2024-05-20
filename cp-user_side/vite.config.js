import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    proxy: {
      "/api": {
        target: "http://77.37.45.231/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
