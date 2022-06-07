import { MDXProvider } from "@mdx-js/react";
import { compile } from "./compiler";
import Deck from "./deck.mdx";

export const App = () => {
	const compiled = compile();

	console.log(compiled);

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
