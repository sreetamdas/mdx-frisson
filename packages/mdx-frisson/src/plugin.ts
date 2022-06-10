import { visit } from "unist-util-visit";

/**
 * Splits nodes upon encountering `<hr>`
 * @returns
 */
export function rehypeSplitMDX() {
	// console.log("=== ONCE ===");

	return (tree: any, file: any) => {
		// console.log("=== TWICE ===");
		// console.log(file);

		visit(tree, "element", (node: any) => {
			if (node.tagName === "hr") {
				// console.log("hr");
			}
			// console.log(node);
		});
	};
}
