import { visit } from "unist-util-visit";

/**
 * Splits nodes upon encountering `<hr>`
 * @returns
 */
export function rehypeSplitMDX() {
	return (tree: any, _file: any) => {
		visit(tree, "element", (node: any) => {
			if (node.tagName === "hr") {
			}
		});
	};
}
