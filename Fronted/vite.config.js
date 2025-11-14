import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // ✅ Base path — only needed if your app will be hosted in a subdirectory
  // For example: https://yourdomain.com/Parlour/
  // If developing locally, you can remove it or leave as "/"
  base: "/Parlour/",

  server: {
    // ✅ This proxy makes frontend API calls go to your backend automatically
    proxy: {
      "/api": {
        target: "http://127.0.0.1:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
