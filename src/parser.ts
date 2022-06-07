import { visit } from "unist-util-visit";

/**
 * Splits nodes upon encountering `<hr>`
 * @returns
 */
export function rehypeSplitMDX() {
	return (tree: any, file: any) => {
		visit(tree, "element", (node: any) => {
			if (node.tagName === "hr") {
				const { children } = node;
				const { value } = node.properties.get("class");
				const { value: type } = node.properties.get("data-type");
				const { value: id } = node.properties.get("data-id");
				const { value: title } = node.properties.get("data-title");
				const { value: description } = node.properties.get("data-description");
				const { value: image } = node.properties.get("data-image");
				const { value: link } = node.properties.get("data-link");
				const { value: linkText } = node.properties.get("data-link-text");
				const { value: linkTarget } = node.properties.get("data-link-target");
				const { value: linkRel } = node.properties.get("data-link-rel");
				const { value: linkClass } = node.properties.get("data-link-class");
				const { value: linkStyle } = node.properties.get("data-link-style");

				const newNode = {
					type: "element",
					tagName: "div",
					properties: {
						className: "mdx-split-hr",
						data: {
							type,
							id,
							title,
							description,
							image,
							link,
							linkText,
							linkTarget,
							linkRel,
							linkClass,
							linkStyle,
						},
					},
					children,
				};

				console.log(node);
			}
		});
	};
}
