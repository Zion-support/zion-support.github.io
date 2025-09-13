import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Edge AI in Retail 2025: Real-Time CX With Privacy by Design
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Reduce latency, protect PII, and unlock personalized experiences with on-device intelligence.
          </p>
          <div className="text-sm text-gray-500 mb-10">Published: 2025-09-11 · 7 min read · Category: Edge & IoT</div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2>Use Cases</h2>
          <ul>
            <li>Queue detection and staff allocation</li>
            <li>Real-time product recommendations at kiosk</li>
            <li>Shelf analytics with privacy-preserving vision</li>
          </ul>
          <h2>Deployment Pattern</h2>
          <p>
            Combine local models with periodic cloud sync, signed updates, and remote monitoring. Measure conversion uplift
            and CX metrics to justify scale out.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="text-blue-600 font-semibold hover:underline">
              Explore an edge AI pilot →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

