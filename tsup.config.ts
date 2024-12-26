import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  format: ["cjs", "esm"],
  target: "esnext",
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
});
