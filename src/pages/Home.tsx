import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-6">
      <section className="card">
        <h2>Build with Zion Tech Group</h2>
        <p>
          We deliver real micro SaaS, IT, and AI solutions: from AI fraud detection and
          cloud infrastructure to zero-trust security, edge computing, and quantum services.
        </p>
        <div className="mt-4 flex gap-3 flex-wrap">
          <Link to="/services" className="px-4 py-2 rounded-md bg-blue-600 text-white">Explore Services</Link>
          <Link to="/contact" className="px-4 py-2 rounded-md border border-blue-600 text-blue-700">Talk to us</Link>
        </div>
      </section>
      <section className="grid gap-4 md:grid-cols-3">
        <div className="card">
          <h3 className="text-lg font-semibold mb-2">AI & ML</h3>
          <p>Churn prediction, fraud detection, content generation, BI insights.</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold mb-2">Cloud & DevOps</h3>
          <p>Multi-cloud management, Kubernetes, edge compute, API platforms.</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold mb-2">Security & Compliance</h3>
          <p>Zero trust, threat hunting, SOC2/ISO27001, PCI/HIPAA readiness.</p>
        </div>
      </section>
    </div>
  );
}

