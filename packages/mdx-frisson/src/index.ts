import { CompileOptions as MDXCompileOptions, compile } from "@mdx-js/mdx";
import { VFile } from "vfile";
import { rehypeSplitMDX } from "./plugin";

export type CompileOptions = MDXCompileOptions & Required<{ baseUrl: string }>;
export async function bundleMDXDeck(
	rawInput: string,
	options: CompileOptions,
): Promise<VFile> {
	const result = await compile(rawInput, {
		outputFormat: "function-body",
		useDynamicImport: true,
		rehypePlugins: [rehypeSplitMDX],
		...options,
	});

	return result;
}
