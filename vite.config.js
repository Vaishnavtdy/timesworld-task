import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api-countries": {
        target: "https://www.apicountries.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api-countries/, ""),
      },
    },
  },
});
