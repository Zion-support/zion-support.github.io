import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';

export default function ResearchDevelopment() {
  return (
    <>
      <SEO 
        title="Research & Development - Zion Tech Group"
        description="Explore our cutting-edge research in AI, quantum computing, and emerging technologies that drive innovation."
        canonical="/research-development"
        url="https://ziontechgroup.com/research-development"
      />
      
      <main className="min-h-screen bg-futuristic text-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-cyan-900/50 to-blue-900/50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Research & Development
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the future through cutting-edge research in AI, quantum computing, and emerging technologies
            </p>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Our Research Focus Areas
              </h2>
              <p className="text-gray-300 text-lg">
                We explore emerging technologies and translate them into practical solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Research */}
              <div className="bg-black/30 p-8 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">AI & Machine Learning</h3>
                <p className="text-gray-300 mb-6">
                  Advanced neural networks, autonomous systems, and next-generation AI architectures that push the boundaries of what's possible.
                </p>
                <ul className="text-gray-300 text-sm space-y-2 mb-6">
                  <li>• Neural architecture optimization</li>
                  <li>• Autonomous decision-making systems</li>
                  <li>• AI ethics and responsible development</li>
                  <li>• Multi-agent coordination</li>
                </ul>
              </div>

              {/* Quantum Computing */}
              <div className="bg-black/30 p-8 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Quantum Computing</h3>
                <p className="text-gray-300 mb-6">
                  Exploring quantum algorithms, quantum machine learning, and the intersection of quantum and classical computing.
                </p>
                <ul className="text-gray-300 text-sm space-y-2 mb-6">
                  <li>• Quantum algorithm development</li>
                  <li>• Quantum machine learning</li>
                  <li>• Quantum error correction</li>
                  <li>• Hybrid quantum-classical systems</li>
                </ul>
              </div>

              {/* Cybersecurity Research */}
              <div className="bg-black/30 p-8 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Cybersecurity</h3>
                <p className="text-gray-300 mb-6">
                  Next-generation security protocols, threat detection, and zero-trust architectures for the modern digital landscape.
                </p>
                <ul className="text-gray-300 text-sm space-y-2 mb-6">
                  <li>• Zero-trust security frameworks</li>
                  <li>• AI-powered threat detection</li>
                  <li>• Quantum-resistant cryptography</li>
                  <li>• Behavioral analysis systems</li>
                </ul>
              </div>

              {/* Edge Computing */}
              <div className="bg-black/30 p-8 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Edge Computing</h3>
                <p className="text-gray-300 mb-6">
                  Distributed computing architectures, IoT optimization, and real-time processing at the network edge.
                </p>
                <ul className="text-gray-300 text-sm space-y-2 mb-6">
                  <li>• Distributed AI systems</li>
                  <li>• IoT optimization</li>
                  <li>• Real-time processing</li>
                  <li>• Edge-cloud coordination</li>
                </ul>
              </div>

              {/* Data Science */}
              <div className="bg-black/30 p-8 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Data Science</h3>
                <p className="text-gray-300 mb-6">
                  Advanced analytics, predictive modeling, and data-driven insights that transform business intelligence.
                </p>
                <ul className="text-gray-300 text-sm space-y-2 mb-6">
                  <li>• Predictive analytics</li>
                  <li>• Big data processing</li>
                  <li>• Statistical modeling</li>
                  <li>• Data visualization</li>
                </ul>
              </div>

              {/* Emerging Technologies */}
              <div className="bg-black/30 p-8 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Emerging Tech</h3>
                <p className="text-gray-300 mb-6">
                  Exploring blockchain, AR/VR, and other cutting-edge technologies that will shape the future.
                </p>
                <ul className="text-gray-300 text-sm space-y-2 mb-6">
                  <li>• Blockchain applications</li>
                  <li>• AR/VR experiences</li>
                  <li>• Internet of Things</li>
                  <li>• 5G/6G technologies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Research Process */}
        <section className="py-20 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Our Research Process
              </h2>
              <p className="text-gray-300 text-lg">
                From ideation to implementation, we follow a systematic approach to innovation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-cyan-400">Discovery</h3>
                <p className="text-gray-300 text-sm">
                  Identify emerging trends and research opportunities through market analysis and technology scanning
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-cyan-400">Research</h3>
                <p className="text-gray-300 text-sm">
                  Conduct deep technical research, develop prototypes, and validate concepts through experimentation
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-cyan-400">Development</h3>
                <p className="text-gray-300 text-sm">
                  Transform research findings into practical solutions and scalable implementations
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-cyan-400">Implementation</h3>
                <p className="text-gray-300 text-sm">
                  Deploy solutions in real-world environments and continuously iterate based on feedback
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Publications & Resources */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Publications & Resources
              </h2>
              <p className="text-gray-300 text-lg">
                Access our research papers, technical publications, and educational resources
              </p>
            </div>

            <div className="bg-black/30 p-12 rounded-lg border border-cyan-500/20 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Research Library Coming Soon</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                We're building a comprehensive library of research papers, technical publications, and educational resources. 
                Check back soon to access our latest findings and insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Contact Research Team
                </Link>
                <Link 
                  to="/services" 
                  className="px-6 py-3 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-900/50 to-blue-900/50">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Partner with Our Research
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Collaborate with our research team to explore cutting-edge technologies and drive innovation together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Collaboration
              </Link>
              <Link 
                to="/request-quote" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Get Research Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
