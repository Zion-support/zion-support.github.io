import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Zion OS - Launch Sovereign AI-Powered Digital Economies",
  description:
    "Unified deployment protocol for Zion ecosystems. Deploy AI-powered marketplaces, governance systems, and digital economies with one click.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900 text-white">
        {children}
      </body>
    </html>
  );
}
