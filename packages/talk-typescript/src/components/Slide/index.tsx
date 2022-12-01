import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";

type StyledSlideProps = { $active: boolean };
const StyledSlide = styled.div<StyledSlideProps>`
	height: 100%;
	margin: 0;

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
