import { MDXProvider } from "@mdx-js/react";
import Deck from "./deck.mdx";

export const App = () => {
	const components = {};
	return (
		<div className="App">
			<MDXProvider components={components}>
				<Deck />
			</MDXProvider>
		</div>
	);
};

export default App;
