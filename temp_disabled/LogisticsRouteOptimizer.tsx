import React from 'react';
import { SEO } from '@/components/SEO';

const LogisticsRouteOptimizer: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SEO 
        title="Logistics Route Optimizer - Zion Tech Group"
        description="AI-driven route planning to reduce fuel cost and delivery time with constraints."
      />
      <section className="container mx-auto px-4 py-16 space-y-8">
        <header className="space-y-3">
          <h1 className="text-4xl font-bold">Logistics Route Optimizer</h1>
          <p className="text-slate-300 max-w-3xl">
            Solve vehicle routing with time windows, capacity, and traffic. Integrate telematics and live ETAs. Export dispatch plans via API.
          </p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <article className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            <h2 className="text-xl font-semibold mb-2">Benefits</h2>
            <ul className="list-disc ml-5 space-y-1 text-slate-300">
              <li>10–25% fuel and time savings</li>
              <li>Fewer failed deliveries</li>
              <li>CO2 impact reporting</li>
              <li>Driver mobile app ready</li>
            </ul>
          </article>
          <article className="p-6 rounded-xl bg-slate-900 border border-slate-800">
            <h2 className="text-xl font-semibold mb-2">Pricing</h2>
            <ul className="space-y-2 text-slate-300">
              <li>Starter: $69/mo – 2 vehicles</li>
              <li>Growth: $199/mo – 10 vehicles</li>
              <li>Pro: $599/mo – 50 vehicles</li>
              <li>Enterprise: Custom</li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
};

export default LogisticsRouteOptimizer;

