import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      events: "events", // browser polyfill
    },
  },
  optimizeDeps: {
    include: ["events"],
  },
  ssr: {
    external: [], // force  events not external 
  },
});
