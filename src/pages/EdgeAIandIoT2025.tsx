import React from 'react';

export default function EdgeAIandIoT2025(): JSX.Element {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full text-sm font-semibold mb-4">NEW • 2025</div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Edge AI and IoT 2025</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Real-time intelligence at the edge for manufacturing, logistics, energy, and cities.</p>
      </div>

      <section className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <div className="text-4xl mb-4">🏭</div>
          <h3 className="text-xl font-semibold mb-2">Predictive Maintenance</h3>
          <p className="text-gray-600">Edge models detect anomalies on equipment to prevent downtime.</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <div className="text-4xl mb-4">🚚</div>
          <h3 className="text-xl font-semibold mb-2">Fleet Optimization</h3>
          <p className="text-gray-600">On-device routing, fuel efficiency, and driver safety analytics.</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-xl font-semibold mb-2">Smart Grids</h3>
          <p className="text-gray-600">Balance loads and integrate renewables with edge control loops.</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow border border-gray-100">
          <div className="text-4xl mb-4">🏙️</div>
          <h3 className="text-xl font-semibold mb-2">Connected Cities</h3>
          <p className="text-gray-600">Traffic, safety, and environment insights with privacy by design.</p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-teal-50 to-emerald-100 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Reference Architecture</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Device SDKs with secure provisioning and OTA updates</li>
          <li>On-device models with quantization and acceleration</li>
          <li>Edge gateways for aggregation, filtering, and control</li>
          <li>Streaming pipelines, feature stores, and monitoring</li>
        </ul>
      </section>

      <div className="text-center mt-10">
        <a href="/pages/ComprehensiveServices2025" className="inline-block border border-emerald-600 text-emerald-700 px-8 py-3 rounded-lg hover:bg-emerald-50 transition-all font-semibold">Explore services</a>
      </div>
    </main>
  );
}

