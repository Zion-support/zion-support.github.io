"use client";

import { useState } from "react";

interface AIService {
  id: string;
  name: string;
  description: string;
  technicalSpecs: string[];
  useCases: string[];
  pricing: string;
  startingPrice: number;
  contactLink: string;
  icon: string;
  features: string[];
  integration: string[];
}

export default function AiSolutionsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">AI Solutions</h1>
      <p className="text-zinc-500">Explore our AI solution offerings.</p>
    </main>
  );
}
