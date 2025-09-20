import React from "react";
import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="404 - Page Not Found" description="The page you're looking for doesn't exist" />
      <Header />
      <main className="min-h-screen bg-zion-blue flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
          <p className="text-zion-slate-light mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <a 
            href="/" 
            className="bg-zion-cyan text-white px-6 py-3 rounded-lg font-semibold hover:bg-zion-cyan/80 transition-colors"
          >
            Go Home
          </a>
        </div>
      </main>
    </>
  );
}