import React from 'react';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function CaseStudiesPage() {
  return (
    <UltraFuturisticBackground intensity="high" variant="quantum">
      <div className="container mx-auto px-4 py-16 text-white">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">;
          Case Studies
        </h1>
        <p className="mt-4 text-gray-300 max-w-3xl">
          Proven outcomes across AI, cloud, and automation projects.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">;
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4">AI-Powered Analytics Platform</h3>
            <p className="text-gray-300 mb-4">
              Delivered 40% improvement in data processing speed for enterprise client.
            </p>
            <div className="text-sm text-cyan-400">Technology: React, Node.js, AI/ML</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Cloud Migration Success</h3>
            <p className="text-gray-300 mb-4">
              Migrated legacy systems to AWS, reducing costs by 60%.
            </p>
            <div className="text-sm text-cyan-400">Technology: AWS, Docker, Kubernetes</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Automation Suite</h3>
            <p className="text-gray-300 mb-4">
              Built comprehensive automation reducing manual work by 80%.
            </p>
            <div className="text-sm text-cyan-400">Technology: Python, RPA, APIs</div>
          </div>
        </div>
      </div>
    </UltraFuturisticBackground>
  );
}