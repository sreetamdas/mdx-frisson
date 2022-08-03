import { visit } from "unist-util-visit";
import type { Parent, Node } from "unist-util-visit";
import findAllBetween from "unist-util-find-all-between";
import { findAllBefore } from "unist-util-find-all-before";
import { findAllAfter } from "unist-util-find-all-after";

function getWrappedPage(children: Node[]) {
	return {
		type: "mdxJsxFlowElement",
		name: "Layout",
		attributes: [],
		children,
	};
}

/**
 * Splits nodes upon encountering `---`
 * @returns
 */
export function rehypeBreakSplit() {
	return (tree: Parent) => {
		const pageBreakIndices: number[] = [];

		visit(tree, { type: "element", tagName: "hr" }, (_, i) => {
			if (i !== null) {
				pageBreakIndices.push(i);
			}
		});

		const children = pageBreakIndices.reduce((kinder, pageBreakIndex, i) => {
			if (i === 0) {
				const childrenBefore = findAllBefore(tree, pageBreakIndex);
				const wrappedPage = getWrappedPage(childrenBefore);
				kinder.push(wrappedPage);
			} else {
				const childrenBetween = findAllBetween(
					tree,
					pageBreakIndices[i - 1],
					pageBreakIndex,
				);
				const wrappedPage = getWrappedPage(childrenBetween);
				kinder.push(wrappedPage);
			}
			return kinder;
		}, [] as Node[]);

		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		children.push(getWrappedPage(findAllAfter(tree, pageBreakIndices.at(-1)!)));

		tree.children = children;
	};
}
