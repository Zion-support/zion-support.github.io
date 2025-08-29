import React from 'react';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <div className="min-h-screen bg-futuristic text-white">
      <div className="container-responsive py-20">
        <h1 className="heading-responsive text-gradient mb-4">Products</h1>
        <p className="text-responsive text-gray-300 max-w-2xl">Explore our AI, SaaS, security and analytics products built for real business use-cases.</p>

        <div className="grid-responsive mt-10">
          <div className="card-futuristic">
            <h3 className="text-xl font-semibold">ZionAI Content Studio</h3>
            <p className="text-gray-300 mt-2">AI-powered content creation with SEO optimization and multi-platform publishing.</p>
            <div className="mt-4 flex gap-3">
              <Link to="/contact" className="btn-futuristic">Request Demo</Link>
              <Link to="/pricing" className="btn-neon">View Pricing</Link>
            </div>
          </div>
          <div className="card-futuristic">
            <h3 className="text-xl font-semibold">SecureShield Pro</h3>
            <p className="text-gray-300 mt-2">Advanced cybersecurity with real-time threat detection and automated response.</p>
            <div className="mt-4 flex gap-3">
              <Link to="/contact" className="btn-futuristic">Request Demo</Link>
              <Link to="/pricing" className="btn-neon">View Pricing</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 text-sm text-gray-400">
          Questions? Email <a className="underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a> or call <a className="underline" href="tel:+13024640950">+1 302 464 0950</a>.
        </div>
      </div>
    </div>
  );
}

