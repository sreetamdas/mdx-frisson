/**
 * Presenter mode
 * - Preview the next slide
 * - Timer, slide summary at the bottom
 * - Speaker notes
 */

// import { Deck } from "@/components/Deck";
// import { Deck } from "@/components/Deck";
// import { Deck } from "../Deck";
// import { Deck } from "src/components/Deck";
// import { Deck } from ";
import { Deck } from "../Deck";
import { PresenterWrapper } from "./styled";

export const PresenterMode = ({ slides }) => {
	console.log({ slides });

	return (
		<PresenterWrapper>
			<Deck>{slides}</Deck>
		</PresenterWrapper>
	);
};
