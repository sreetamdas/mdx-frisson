import { PropsWithChildren } from "react";

export const Highlight = ({ children }: PropsWithChildren) => {
	return <span style={{ color: "#5b34da", fontSize: "2rem" }}>{children}</span>;
};

export const Layout = ({ children }: PropsWithChildren) => {
	return <div style={{ margin: "0px", padding: "15px" }}>{children}</div>;
};
