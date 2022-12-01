import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import { getKarmaTheme, rehypeBreakSplit } from "mdx-frisson";

import rehypePrettyCode from "rehype-pretty-code";

/** @type {import('vite').UserConfig} */
export default defineConfig(async () => {
	const { karmaThemeJSON } = await getKarmaTheme();

	const shikiOptions = {
		theme: karmaThemeJSON,
		onVisitLine(node) {
			// Prevent lines from collapsing in `display: grid` mode, and
			// allow empty lines to be copy/pasted
			if (node.children.length === 0) {
				node.children = [{ type: "text", value: " " }];
			}
		},
		// Feel free to add classNames that suit your docs
		onVisitHighlightedLine(node) {
			node.properties.className.push("highlighted");
		},
		onVisitHighlightedWord(node) {
			node.properties.className = ["word"];
		},
	};

	return {
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
				// remarkPlugins: [[remarkPrettyCode, { highlighter }]],
				rehypePlugins: [rehypeBreakSplit, [rehypePrettyCode, shikiOptions]],
			}),
		],
	};
});
