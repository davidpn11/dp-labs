import typescript from "rollup-plugin-typescript2";
import external from "rollup-plugin-peer-deps-external";
import url from "rollup-plugin-url";
import svg from "rollup-plugin-svg";
import del from "rollup-plugin-delete";
import pkg from "./package.json";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const globals = {
  react: "React",
  "styled-components": "createGlobalStyle",
  // eslint-disable-next-line no-dupe-keys
  "styled-components": "styled",
};

export default [
  {
    plugins: [
      svg(),
      external({
        includeDependencies: true,
      }),
      del({ targets: ["dist/*"] }),
      typescript(),
      url({
        include: ["**/*.woff", "**/*.woff2"],
        // setting infinite limit will ensure that the files
        // are always bundled with the code, not copied to /dist
        limit: Infinity,
      }),
    ],
    preserveModules: true,
    input: "src/index.ts",
    output: [
      { dir: "dist", format: "cjs", name: "@dp-labs/ui-components", globals },
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
];
