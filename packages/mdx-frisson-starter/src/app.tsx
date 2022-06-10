import { useEffect, useState } from "react";
import * as runtime from "react/jsx-runtime";
import { run } from "@mdx-js/mdx";
import { bundleMDXDeck } from "mdx-frisson";

// ?raw to import as string
import Deck from "./deck.mdx?raw";

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

		setComponent(res);
	}

	useEffect(() => {
		load();
	}, []);

	return <div className="App">{component}</div>;
};

export default App;
