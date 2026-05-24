import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "MangaViewer",
      formats: ["es", "iife"],
      fileName: (format) =>
        format === "iife" ? "manga-viewer.global.js" : "index.js"
    },
    rollupOptions: {
      output: {
        exports: "named"
      }
    }
  }
});
