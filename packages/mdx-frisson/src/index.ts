import { EvaluateOptions, evaluate } from "@mdx-js/mdx";
import type { ExportMap } from "@mdx-js/mdx/lib/evaluate";

import { rehypeBreakSplit } from "./plugin";

export { rehypeBreakSplit };

export type BundleMDXOptions = EvaluateOptions;
export async function bundleMDXDeck(
	rawInput: string,
	options: BundleMDXOptions,
): Promise<ExportMap> {
	const result = await evaluate(rawInput, {
		useDynamicImport: true,
		development: process.env.NODE_ENV === "development",
		rehypePlugins: [rehypeBreakSplit],
		...options,
	});

	return result;
}
