import React from "react";
import Header from "@/components/Header";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function Search() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <Header />
      <SEO title="Search" description="Advanced search features" />
      <div className="container mx-auto px-4 py-12">
        <GradientHeading>Search Features</GradientHeading>
        <p className="text-zion-cyan text-center mt-4">
          Search functionality coming soon...
        </p>
      </div>
    </div>
  );
}