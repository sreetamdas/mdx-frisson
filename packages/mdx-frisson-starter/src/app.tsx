import { Deck } from "./components/Deck";
import { Layout } from "./components/shared";
import MDX from "./deck.mdx";

export const App = () => {
	return (
		<div className="app">
			<Deck>{MDX({ components: { Layout } })}</Deck>
		</div>
	);
};

export default App;
