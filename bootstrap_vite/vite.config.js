import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "main.js"),
      name: "bootstrap",
    },
    rollupOptions: {
      output: {
        entryFileNames: "bootstrap.js",
        assetFileNames: "bootstrap.css",
      },
    },
  },
});
