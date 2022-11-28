/**
 * Presenter mode
 * - Preview the next slide
 * - Timer, slide summary at the bottom
 * - Speaker notes
 */

import { MDXContent } from "mdx/types";
import { useEffect } from "react";
import { Deck } from "../Deck";
import {
	PresenterWrapper,
	SpeakerNotesWrapper,
	MetadataWrapper,
} from "./styled";

type Props = { slides: ReturnType<MDXContent>; slide?: string };
export const PresenterMode = (props: Props) => {
	const { slides, slide: slideIndex } = props;

	useEffect(() => {
		// console.log("HERE");
		slides.props.children.forEach((element) => {
			element.props.children.forEach((el) => {
				if (el !== "\n") {
					// console.log(el.type);
					if (typeof el.type === "function") {
						console.log(el.type?.name);
					}
				}
			});
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<PresenterWrapper>
			<Deck prefix="presenter/">{slides}</Deck>
			<SpeakerNotesWrapper></SpeakerNotesWrapper>
			<MetadataWrapper></MetadataWrapper>
		</PresenterWrapper>
	);
};

export const SpeakerNotes = ({ children }) => {
	return <div>{children}</div>;
};
