import styled from "styled-components";
import { Main } from "../Deck/styled";

export const PresenterWrapper = styled(Main)`
	display: grid;
	grid-template-columns: 1fr minmax(200px, 30vw);
	grid-template-rows: 1fr minmax(50px, 10vh);
`;

export const SpeakerNotesWrapper = styled.section``;

export const MetadataWrapper = styled.section``;
