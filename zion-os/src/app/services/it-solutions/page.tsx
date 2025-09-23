"use client";

import { useState } from "react";

interface ITService {
  id: string;
  name: string;
  description: string;
  deliverables: string[];
  timeline: string;
  pricing: string;
  startingPrice: number;
  contactLink: string;
  icon: string;
  features: string[];
  technologies: string[];
  industries: string[];
}

export default function ItSolutionsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">IT Solutions</h1>
      <p className="text-gray-600">Comprehensive IT solutions for modern enterprises.</p>
    </main>
  );
}
