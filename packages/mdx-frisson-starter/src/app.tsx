import * as runtime from "react/jsx-runtime";
import { run } from "@mdx-js/mdx";
import { bundleMDXDeck } from "mdx-frisson";

// ?raw to import as string
import Deck from "./deck.mdx?raw";

async function getBundle() {
	const { default: Content } = await run(
		await bundleMDXDeck(Deck, {
			baseUrl: new URL("./deck.mdx", import.meta.url).href,
		}),
		runtime,
	);

	return Content;
}

const Content = await getBundle();

export const App = () => {
	return (
		<div className="App">
			<Content />
		</div>
	);
};

export default App;
