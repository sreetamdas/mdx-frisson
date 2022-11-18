import { Route, Switch } from "wouter";
import { Deck } from "./components/Deck";
import { Main } from "./components/Deck/styled";
import { PresenterMode } from "./components/Presenter";
import { Layout } from "./components/shared";
import MDX from "./deck.mdx";

export const App = () => {
	return (
		<Switch>
			<Route path="/presenter">
				<PresenterMode slides={MDX({ components: { Layout } })}></PresenterMode>
			</Route>
			<Route>
				<Main>
					<Deck>{MDX({ components: { Layout } })}</Deck>
				</Main>
			</Route>
		</Switch>
	);
};

export default App;
