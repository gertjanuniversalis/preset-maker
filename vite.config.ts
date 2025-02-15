import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import typescript from "@rollup/plugin-typescript";
import ttsc from "ttsc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/preset-maker/",
  plugins: [
    react(),
    typescript({
      typescript: ttsc,
    }),
  ],
});
