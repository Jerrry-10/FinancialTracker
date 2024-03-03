import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import RubyPlugin from "vite-plugin-ruby";

export default defineConfig({
  plugins: [react(), RubyPlugin()],
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  },
  build: {
    outDir: "../public",
    emptyOutDir: true,
  },
});
