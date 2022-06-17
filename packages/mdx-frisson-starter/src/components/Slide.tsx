import { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledSlide = styled.div`
	height: 100vh;
	margin: 0;
`;

export type SlideProps = PropsWithChildren<{
	id?: string;
}>;
export const Slide = ({ children }: SlideProps) => {
	return <StyledSlide>{children}</StyledSlide>;
};
