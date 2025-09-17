import "./globals.css";
import type { ReactNode } from "react";
import { Metadata } from "next";
import { AuthProvider } from "@/contexts/AuthContext";

export const metadata: Metadata = {
  title: "Zion OS - Launch Sovereign AI-Powered Digital Economies",
  description: "Unified deployment protocol for Zion ecosystems. Deploy AI-powered marketplaces, governance systems, and digital economies with one click.",
  keywords: "AI, blockchain, digital economy, marketplace, governance, deployment, Zion"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}