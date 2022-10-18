import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// fix process.env is undefined in vite.config.ts

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const processEnvValues = {
    "process.env": Object.entries(env).reduce((prev, [key, val]) => {
      return {
        ...prev,
        [key]: val,
      };
    }, {}),
  };

  return {
    plugins: [react()],
    define: processEnvValues,
  };
});
