import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";

type StyledSlideProps = { $active: boolean };
const StyledSlide = styled.div<StyledSlideProps>`
	height: 100vh;
	margin: 0;

	h1 {
		font-size: 10rem;
		letter-spacing: -5px;
	}

	${({ $active }) =>
		$active
			? css`
					display: flex;
					align-items: center;
					justify-content: center;
			  `
			: css`
					display: none;
			  `}
`;

export type SlideProps = PropsWithChildren<{
	id?: string;
	isActive: boolean;
}>;
export const Slide = ({ isActive, children, ...props }: SlideProps) => {
	return (
		<StyledSlide $active={isActive} {...props}>
			{children}
		</StyledSlide>
	);
};
