import { CompileOptions as MDXCompileOptions, compile } from "@mdx-js/mdx";

export function MDXDeck() {}

type CompileOptions = MDXCompileOptions & Required<{ baseUrl: string }>;
export async function bundleMDXDeck(rawInput: string, options: CompileOptions) {
	const result = await compile(rawInput, {
		outputFormat: "function-body",
		useDynamicImport: true,
		...options,
	});

	return String(result);
}
