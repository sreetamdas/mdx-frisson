import { Route, Switch } from "wouter";
import { Deck } from "./components/Deck";
import { Main } from "./components/Deck/styled";
import { PresenterMode, SpeakerNotes } from "./components/Presenter";
import { Layout } from "./components/shared";
import MDX from "./deck.mdx";

const components = {
	Layout,
	SpeakerNotes,
};

export const App = () => {
	return (
		<Switch>
			<Route path="/presenter/:slide*">
				{(routeProps) => (
					<PresenterMode
						slides={MDX({ components })}
						{...routeProps}
					></PresenterMode>
				)}
			</Route>
			<Route>
				<Main>
					<Deck>{MDX({ components })}</Deck>
				</Main>
			</Route>
		</Switch>
	);
};

export default App;
