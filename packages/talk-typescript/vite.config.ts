import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import { rehypeBreakSplit } from "mdx-frisson";

// https://vitejs.dev/config/
export default defineConfig({
	optimizeDeps: {
		include: ["react/jsx-runtime"],
	},
	build: {
		target: "esnext",
	},
	server: {
		port: 8008,
	},
	plugins: [
		react(),
		mdx({
			rehypePlugins: [rehypeBreakSplit],
		}),
	],
});
