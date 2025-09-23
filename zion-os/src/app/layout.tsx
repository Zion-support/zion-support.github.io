import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
	title: "Zion OS",
	description: "Zion OS App",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
