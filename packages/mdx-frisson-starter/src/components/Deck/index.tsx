import { useLocation } from "wouter";
import {
	Children,
	PropsWithChildren,
	useCallback,
	useEffect,
	useState,
} from "react";

import { Slide } from "../Slide";
import { StyledDeck } from "./styled";

export type DeckProps = {
	prefix?: string;
	children: { props: PropsWithChildren };
};
export const Deck = ({
	prefix = "",
	children: {
		props: { children },
	},
}: DeckProps) => {
	const allSlides = Children.toArray(children);

	const [activeSlide, setActiveSlide] = useState(parseURL());
	const [_, setLocation] = useLocation();

	const handleNavigation = useCallback(
		(event: KeyboardEvent) => {
			const slideIndex = getSlideIndex(event, activeSlide, allSlides.length);

			if (slideIndex !== activeSlide) {
				setActiveSlide(slideIndex);
				setLocation(`/${prefix}${slideIndex}`);
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[activeSlide, allSlides.length],
	);

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
					isActive={index === activeSlide}
				>
					{slide}
				</Slide>
			))}
		</StyledDeck>
	);
};

/**
 * Get index for next slide
 * @param event
 * @param currentIndex
 * @param totalSlidesCount
 * @returns index for next slide
 */
function getSlideIndex(
	event: KeyboardEvent,
	currentIndex: number,
	totalSlidesCount: number,
) {
	const { key } = event;

	switch (key) {
		case "ArrowLeft":
			return Math.max(currentIndex - 1, 0);

		case "ArrowRight":
			return Math.min(currentIndex + 1, totalSlidesCount - 1);

		default:
			return currentIndex;
	}
}

function parseURL() {
	const currentLocation = window.location.pathname;
	return ~~(/^\/(\d{1,})/gi.exec(currentLocation)?.[1] ?? "0");
}
