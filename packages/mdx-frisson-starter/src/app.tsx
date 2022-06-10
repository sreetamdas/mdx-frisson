import { MDXProvider } from "@mdx-js/react";
import { bundleMDXDeck } from "mdx-frisson";
import { run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

import Deck from "./deck.mdx?raw";
import { useEffect, useState } from "react";

async function getBundle() {
	const { default: Content } = await run(
		await bundleMDXDeck(Deck, {
			baseUrl: new URL("./content/deck.mdx", import.meta.url).href,
		}),
		runtime,
	);

	return Content;
}

export const App = () => {
	const [component, setComponent] = useState();
	async function load() {
		const res = await getBundle();
		console.log(res);

		setComponent(res);
	}

	useEffect(() => {
		load();
	}, []);

	// if (window) {
	console.log(window.location.href);
	// }

	return <div className="App">{component}</div>;
};

export default App;

/**
 * Get "a" or "an" based on the first letter of the string
 * @param word
 */
function getArticle(word: string) {
	//
}
