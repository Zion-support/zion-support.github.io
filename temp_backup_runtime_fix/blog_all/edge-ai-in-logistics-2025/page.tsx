// @ts-nocheck
import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Edge AI in Logistics 2025: Real-Time Ops With Privacy by Design
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            How leading logistics teams deploy on-device models for routing, ETA accuracy, and cold-chain monitoring
            without centralizing sensitive data.
          </p>
          <div className="text-sm text-gray-500 mb-10">Published: 2025-09-11 · 7 min read · Category: Edge AI</div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2>High-Impact Use Cases</h2>
          <ul>
            <li>On-device route planning with live constraints and traffic signals</li>
            <li>Cold-chain anomaly detection with threshold-based alerts</li>
            <li>Warehouse vision systems for pick accuracy and safety</li>
          </ul>
          <h2>Deployment Patterns</h2>
          <ul>
            <li>Model snapshots delivered via OTA updates and signed manifests</li>
            <li>Streaming telemetry with privacy-preserving aggregation</li>
            <li>Fallback behaviors and offline-first UX for reliability</li>
          </ul>
          <h2>Measuring ROI</h2>
          <p>
            Track on-time delivery, spoilage reduction, and cost per mile. Pilot in one region, expand based on clear
            thresholds.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="text-blue-600 font-semibold hover:underline">
              Design an edge AI pilot for your ops →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

