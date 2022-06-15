import { PropsWithChildren } from "react";

export const Highlight = ({ children }: PropsWithChildren) => {
	return <span style={{ color: "#5b34da", fontSize: "2rem" }}>{children}</span>;
};

export const Layout = ({ children }: PropsWithChildren) => {
	return (
		<div
			style={{ border: "2px solid #5b34da", margin: "10px", padding: "0 15px" }}
		>
			{children}
		</div>
	);
};
