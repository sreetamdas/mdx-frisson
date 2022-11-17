import { Route, Switch } from "wouter";
import { Deck } from "./components/Deck";
import { PresenterMode } from "./components/Presenter";
import { Layout } from "./components/shared";
import MDX from "./deck.mdx";

export const App = () => {
	return (
		<div className="app">
			<Switch>
				<Route path="/presenter">
					<PresenterMode
						slides={MDX({ components: { Layout } })}
					></PresenterMode>
				</Route>
				<Route>
					<Deck>{MDX({ components: { Layout } })}</Deck>
				</Route>
			</Switch>
		</div>
	);
};

export default App;
