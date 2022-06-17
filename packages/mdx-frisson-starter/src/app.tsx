import * as runtime from "react/jsx-runtime";
import { bundleMDXDeck } from "mdx-frisson";
import { Layout } from "./components/shared";
import { Deck } from "./components/Deck";

// ?raw to import as string
import MDX from "./deck.mdx?raw";

async function getBundle() {
	// @ts-ignore
	const { default: Content } = await bundleMDXDeck(MDX, {
		baseUrl: new URL("./deck.mdx", import.meta.url).href,
		...runtime,
	});

	return Content;
}
const Content = await getBundle();

export const App = () => {
	return (
		<div className="app">
			<Deck>{Content({ components: { Layout } })}</Deck>
		</div>
	);
};

export default App;
