import { Route, Switch } from "wouter";
import { Deck } from "./components/Deck";
import { Main } from "./components/Deck/styled";
import { Notes } from "./components/Presenter";
import { Layout } from "./components/shared";
import { Steps } from "./components/Steps";
import MDX from "./deck.mdx";

const components = {
	Layout,
	Notes,
	Steps,
};

export const App = () => {
	return (
		<Switch>
			{/* <Route path="/presenter/:slide*">
				{(routeProps) => (
					<PresenterMode
						slides={MDX({ components })}
						{...routeProps}
					></PresenterMode>
				)}
			</Route> */}
			<Route>
				<Main>
					{/* @ts-ignore */}
					<Deck>{MDX({ components })}</Deck>
				</Main>
			</Route>
		</Switch>
	);
};

export default App;
