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

	const handleNavigation = useCallback(
		(event: KeyboardEvent) => {
			setActiveSlideIndex(getSlide(event, activeSlideIndex, allSlides.length));
		},
		[activeSlideIndex, allSlides.length],
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
					isActive={index === activeSlideIndex}
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
function getSlide(
	event: KeyboardEvent,
	currentIndex: number,
	totalSlidesCount: number,
) {
	const { key } = event;
	let slideIndex = currentIndex;

	if (key === "ArrowLeft") {
		slideIndex = Math.max(currentIndex - 1, 0);
	} else if (key === "ArrowRight") {
		slideIndex = Math.min(currentIndex + 1, totalSlidesCount - 1);
	}

	return slideIndex;
}

export const StyledDeck = styled.main``;
