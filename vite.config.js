import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  preview: {
    host: "0.0.0.0",
    port: 4173,
  },

  server: {
  proxy: {
    "/v1": { target: "https://zawawy-api-staging.onrender.com", changeOrigin: true },
  },
},
});
