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

export default function AISolutionsPage() {
  const [services] = useState<AIService[]>([]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">AI Solutions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div key={service.id} className="p-6 rounded-lg bg-white/5 border border-white/10">
            <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
            <p className="opacity-80 mb-4">{service.description}</p>
            {/* CTA */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <a
                href={service.contactLink}
                className="w-full block text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold"
              >
                Get Started
              </a>
              <a
                href={`https://ziontechgroup.com/services/${service.id}`}
                className="w-full block text-center text-blue-400 hover:text-blue-300 text-sm underline"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* AI Capabilities Overview */}
      <div className="space-y-6 mt-12">
        <h2 className="text-3xl font-bold text-center">AI Capabilities Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="font-semibold mb-2">Natural Language Processing</h3>
            <p className="text-sm opacity-80">Advanced text analysis, generation, and understanding across multiple languages</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
            <div className="text-3xl mb-3">🔍</div>
            <h3 className="font-semibold mb-2">Computer Vision</h3>
            <p className="text-sm opacity-80">Image and video analysis, object detection, and visual content understanding</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white/5 border border-white/10">
            <div className="text-3xl mb-3">📈</div>
            <h3 className="font-semibold mb-2">Predictive Analytics</h3>
            <p className="text-sm opacity-80">Machine learning models for forecasting, trend analysis, and decision support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
