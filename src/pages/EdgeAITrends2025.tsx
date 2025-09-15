import React from 'react';

export default function EdgeAITrends2025(): JSX.Element {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full text-sm font-semibold mb-4">
          🔎 Research • 2025
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Edge AI Trends 2025</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Latency-aware intelligence at the edge: from micro-accelerators to on-device generative models and privacy-preserving analytics.
        </p>
      </div>

      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Hardware Acceleration</h2>
          <p className="text-gray-600">NPUs, TPUs, and RISC-V accelerators enabling real-time inference on-device.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-2">On-Device GenAI</h2>
          <p className="text-gray-600">Quantization, distillation, and memory optimizations for small LLMs and VLMs.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Privacy by Design</h2>
          <p className="text-gray-600">Federated learning, secure enclaves, and differential privacy techniques.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-2">MLOps at the Edge</h2>
          <p className="text-gray-600">OTA model delivery, A/B testing, shadow deployments, and telemetry.</p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-green-50 to-teal-100 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Download the full report</h2>
        <p className="text-gray-700 mb-4">Includes benchmarks, reference architectures, and vendor landscape.</p>
        <a href="/contact" className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700">Request report</a>
      </section>
    </main>
  );
}

