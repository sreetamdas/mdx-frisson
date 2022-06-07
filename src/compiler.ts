import { readFile } from "fs/promises";
import { compile as MDXCompile } from "@mdx-js/mdx";

export async function compile() {
	const fileContents = await readFile("deck.mdx");
	const compiled = await MDXCompile(fileContents);

	return compiled;
}
