// vite.config.js

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), svgr()],
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "") }],
    },
    server: {
      proxy: {
        "/api": env.VITE_APP_API_HOST,
      },
    },
  };
});
