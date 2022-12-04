import styled, { css } from "styled-components";

export const Highlight = styled.span`
	color: var(--color-highlight);
`;

export const Layout = styled.div`
	margin: 0px;
	padding: 100px 25px;

	height: 100%;
	width: 100%;
`;

export const Container = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	flex-direction: column;
`;

export const Title = styled.h1`
	font-size: 5rem;
	letter-spacing: -5px;
	font-family: "Iosevka";
`;

export const Spacer = styled.div<{ $size?: number }>`
	${({ $size = 100 }) =>
		$size &&
		css`
			height: ${$size}px;
		`}
`;
