import { PropsWithChildren } from "react";

export const Highlight = ({ children }: PropsWithChildren) => {
	return <h3 style={{ color: "#5b34da", fontSize: "3rem" }}>{children}</h3>;
};
