/**
 * Presenter mode
 * - Preview the next slide
 * - Timer, slide summary at the bottom
 * - Speaker notes
 */

import { MDXContent } from "mdx/types";
import { Deck } from "../Deck";
import {
	PresenterWrapper,
	SpeakerNotesWrapper,
	MetadataWrapper,
} from "./styled";

type Props = { slides: ReturnType<MDXContent> };
export const PresenterMode = ({ slides }: Props) => {
	return (
		<PresenterWrapper>
			<Deck>{slides}</Deck>
			<SpeakerNotesWrapper></SpeakerNotesWrapper>
			<MetadataWrapper></MetadataWrapper>
		</PresenterWrapper>
	);
};
