import {
	Children,
	PropsWithChildren,
	useCallback,
	useEffect,
	useState,
} from "react";
import styled from "styled-components";
import { Slide } from "./Slide";

type Props = { children: { props: PropsWithChildren } };
export const Deck = ({
	children: {
		props: { children },
	},
}: Props) => {
	const allSlides = Children.toArray(children);
	const currentLocation = window.location.pathname;
	const indexFromURL = ~~(/^\/(\d{1,})/g.exec(currentLocation)?.[1] ?? "1");

	const [activeSlideIndex, setActiveSlideIndex] = useState(indexFromURL - 1);

	const handleNavigation = useCallback((event: KeyboardEvent) => {
		const { key } = event;
		if (key === "ArrowLeft") {
			setActiveSlideIndex((index) => index - 1);
		} else if (key === "ArrowRight") {
			setActiveSlideIndex((index) => index + 1);
		}
	}, []);

	useEffect(() => {
		if (window) {
			window.addEventListener("keydown", handleNavigation);

			return () => window.removeEventListener("keydown", handleNavigation);
		}
	}, [handleNavigation]);

	return (
		<StyledDeck>
			{allSlides.map((slide, index) => (
				<Slide
					key={index}
					id={`slide-${index}`}
					isActive={index === activeSlideIndex}
				>
					{slide}
				</Slide>
			))}
		</StyledDeck>
	);
};

export const StyledDeck = styled.main``;
