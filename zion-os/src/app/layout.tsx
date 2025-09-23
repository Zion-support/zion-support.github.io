import "./globals.css";
import type { ReactNode } from "react";
import { AuthProvider } from "@/contexts/AuthContext";

export const metadata = {
  title: "Zion OS - Launch Sovereign AI-Powered Digital Economies",
  description: "Unified deployment protocol for Zion ecosystems.",
  keywords: "AI, blockchain, digital economy, marketplace, governance, deployment, Zion",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
        <AuthProvider>
          <main className="min-h-screen">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
