import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Run the app from the root path rather than a subdirectory
  base: "/",
  server: {
    proxy: {
      '/api':'http://localhost:8555'
    },
  },
});
