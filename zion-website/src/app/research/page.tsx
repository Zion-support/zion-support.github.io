import React from 'react';

export default function ResearchPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-7xl px-6 pt-24">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Research & Development
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Cutting-edge research in AI, quantum computing, and autonomous systems.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">AI Research</h3>
              <p className="text-gray-300 mb-4">
                Advanced research in artificial intelligence, machine learning, and autonomous systems.
              </p>
              <a href="/research/ai" className="text-blue-400 hover:text-blue-300 font-semibold">
                Learn more →
              </a>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">Quantum Computing</h3>
              <p className="text-gray-300 mb-4">
                Pioneering work in quantum neural networks and hybrid classical-quantum systems.
              </p>
              <a href="/research/quantum" className="text-blue-400 hover:text-blue-300 font-semibold">
                Learn more →
              </a>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">Autonomous Systems</h3>
              <p className="text-gray-300 mb-4">
                Research into self-managing systems and intelligent automation frameworks.
              </p>
              <a href="/research/autonomous" className="text-blue-400 hover:text-blue-300 font-semibold">
                Learn more →
              </a>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4">Publications</h3>
              <p className="text-gray-300 mb-4">
                Peer-reviewed papers and technical publications from our research team.
              </p>
              <a href="/research/publications" className="text-blue-400 hover:text-blue-300 font-semibold">
                View all →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}