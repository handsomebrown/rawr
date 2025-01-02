import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import pkg from "./package.json" with { type: "json" };

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		dts({
			outDir: "./dist/types",
			tsconfigPath: "./tsconfig.build.json",
			rollupTypes: true,
		}),
		libInjectCss(),
	],
	build: {
		emptyOutDir: true,
		sourcemap: true,
		lib: {
			entry: "src/index.ts",
			name: pkg.name,
			fileName: (format) => `index.${format}.js`,
			formats: ["es", "cjs"],
		},
		minify: "terser",
		rollupOptions: {
			external: ["react/jsx-runtime", ...Object.keys(pkg.peerDependencies)],
			output: {
				globals: {
					react: "React",
					"react/jsx-runtime": "react/jsx-runtime",
					"react-dom": "ReactDOM",
				},
			},
		},
	},
});
