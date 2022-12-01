import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import { rehypeBreakSplit } from "mdx-frisson";

/** @type {import('vite').UserConfig} */
export default defineConfig({
	optimizeDeps: {
		include: ["react/jsx-runtime"],
	},
	build: {
		target: "esnext",
	},
	plugins: [
		react(),
		mdx({
			rehypePlugins: [rehypeBreakSplit],
		}),
	],
});
