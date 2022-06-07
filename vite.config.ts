import { defineConfig } from "vite";
import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	optimizeDeps: {
		include: ["react/jsx-runtime"],
	},
	plugins: [
		mdx({
			rehypePlugins: [
				//
				// rehypeSplitMDX,
			],
		}),
		react(),
	],
});
