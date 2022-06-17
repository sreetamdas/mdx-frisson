import { Children, PropsWithChildren } from "react";
import styled from "styled-components";
import { Slide } from "./Slide";

type Props = { children: { props: PropsWithChildren } };
export const Deck = ({
	children: {
		props: { children },
	},
}: Props) => {
	const allSlides = Children.toArray(children);

	return (
		<StyledDeck>
			{allSlides.map((slide, index) => (
				<Slide key={index} id={`slide-${index}`}>
					{slide}
				</Slide>
			))}
		</StyledDeck>
	);
};

export const StyledDeck = styled.main``;
