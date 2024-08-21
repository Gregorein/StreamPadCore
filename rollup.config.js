import typescript from "@rollup/plugin-typescript"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import json from "@rollup/plugin-json"
import path from "path"

export default (controlPath, outputFile) => ({
  input: path.join(controlPath, "index.tsx"),
  output: {
    file: outputFile,
    format: "cjs",
    sourcemap: true,
    globals: {
      react: "React",
    }
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.rollup.json",
      sourceMap: true,
    }),
    json()
  ],
  external: []
})
