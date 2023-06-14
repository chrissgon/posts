// vite.config.js

import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    // Define lib configuration
    lib: {
      // Set the main file
      entry: resolve(__dirname, "main.js"),
      // Set the lib name
      name: "bootstrap",
    },
    rollupOptions: {
      output: {
        // Output JS and CSS filenames
        entryFileNames: "bootstrap.js",
        assetFileNames: "bootstrap.css",
      },
    },
  },
});
