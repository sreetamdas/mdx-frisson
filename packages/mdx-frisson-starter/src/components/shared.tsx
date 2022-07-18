import { PropsWithChildren } from "react";
import styled from "styled-components";

export const Highlight = ({ children }: PropsWithChildren) => {
	return <span style={{ color: "#5b34da", fontSize: "2rem" }}>{children}</span>;
};

export const Layout = ({ children }: PropsWithChildren) => {
	return <div style={{ margin: "0px", padding: "15px" }}>{children}</div>;
};

export const Title = styled.h1`
	font-size: 10rem;
	letter-spacing: -5px;
`;
