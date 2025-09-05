import Link from &quot;next/link&quot;;

export const metadata = {
  title: &quot;Quantum Computing Services - Zion Tech Group | Advanced Quantum Solutions&quot;,
  description: &quot;Transform your business with Zion Tech Group's cutting-edge quantum computing services. From algorithm optimization to quantum machine learning, unlock unprecedented computational power.&quot;,
  keywords: &quot;quantum computing, quantum algorithms, quantum machine learning, quantum optimization, Zion Tech Group, quantum services&quot;};

export default function QuantumServicesPage() {
  return (
    <div className=&quot;min-h-screen&quot;>
      {/* Hero Section */}
      <section className=&quot;relative py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
          <h1 className=&quot;text-5xl md:text-6xl font-bold mb-6&quot;>
            <span className=&quot;gradient-text&quot;>Quantum Computing Services</span>
          </h1>
          <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed&quot;>
            Harness the power of quantum mechanics to solve complex problems that 
            are impossible for classical computers. Transform your business with 
            next-generation computational capabilities.
          </p>
        </div>
      </section>

      {/* Quantum Overview */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;card bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/30&quot;>
            <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-12 items-center&quot;>
              <div>
                <h2 className=&quot;text-3xl md:text-4xl font-bold mb-6&quot;>
                  The Future of Computing is Quantum
                </h2>
                <p className=&quot;text-gray-300 text-lg mb-6 leading-relaxed&quot;>
                  Quantum computing represents a paradigm shift in computational power. 
                  By leveraging quantum mechanical phenomena like superposition and 
                  entanglement, we can process information in ways that classical 
                  computers simply cannot match.
                </p>
                <div className=&quot;space-y-4 mb-6&quot;>
                  <div className=&quot;flex items-center&quot;>
                    <div className=&quot;w-6 h-6 bg-purple-500 rounded-full mr-3&quot;></div>
                    <span className=&quot;text-gray-300&quot;>Exponential speedup for specific problems</span>
                  </div>
                  <div className=&quot;flex items-center&quot;>
                    <div className=&quot;w-6 h-6 bg-purple-500 rounded-full mr-3&quot;></div>
                    <span className=&quot;text-gray-300&quot;>Revolutionary optimization capabilities</span>
                  </div>
                  <div className=&quot;flex items-center&quot;>
                    <div className=&quot;w-6 h-6 bg-purple-500 rounded-full mr-3&quot;></div>
                    <span className=&quot;text-gray-300&quot;>Breakthrough machine learning algorithms</span>
                  </div>
                  <div className=&quot;flex items-center&quot;>
                    <div className=&quot;w-6 h-6 bg-purple-500 rounded-full mr-3&quot;></div>
                    <span className=&quot;text-gray-300&quot;>Unprecedented simulation accuracy</span>
                  </div>
                </div>
                <Link href=&quot;/contact&quot; className=&quot;btn-primary&quot;>
                  Explore Quantum Solutions
                </Link>
              </div>
              <div className=&quot;relative&quot;>
                <div className=&quot;w-full h-80 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center&quot;>
                  <svg className=&quot;w-32 h-32 text-purple-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M13 10V3L4 14h7v7l9-11h-7z&quot; />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Quantum Services */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Core Quantum Services
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Comprehensive quantum computing solutions designed for enterprise applications
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {/* Quantum Algorithm Development */}
            <div className=&quot;card group hover:bg-purple-500/10 transition-colors&quot;>
              <div className=&quot;w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30&quot;>
                <svg className=&quot;w-8 h-8 text-purple-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Quantum Algorithm Development</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Custom quantum algorithms designed for your specific business problems, 
                from optimization challenges to complex simulations.
              </p>
              <ul className=&quot;space-y-2 mb-6 text-sm text-gray-400&quot;>
                <li>• Custom algorithm design</li>
                <li>• Problem-specific optimization</li>
                <li>• Hybrid classical-quantum approaches</li>
                <li>• Performance benchmarking</li>
              </ul>
              <Link href=&quot;/quantum-services/algorithm-development&quot; className=&quot;text-purple-400 hover:text-purple-300 text-sm font-medium&quot;>
                Learn More →
              </Link>
            </div>
            
            {/* Quantum Machine Learning */}
            <div className=&quot;card group hover:bg-blue-500/10 transition-colors&quot;>
              <div className=&quot;w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30&quot;>
                <svg className=&quot;w-8 h-8 text-blue-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Quantum Machine Learning</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Quantum-enhanced machine learning models that leverage quantum 
                superposition for faster training and better pattern recognition.
              </p>
              <ul className=&quot;space-y-2 mb-6 text-sm text-gray-400&quot;>
                <li>• Quantum neural networks</li>
                <li>• Quantum feature mapping</li>
                <li>• Quantum kernel methods</li>
                <li>• Hybrid ML pipelines</li>
              </ul>
              <Link href=&quot;/quantum-services/quantum-ml&quot; className=&quot;text-blue-400 hover:text-blue-300 text-sm font-medium&quot;>
                Learn More →
              </Link>
            </div>
            
            {/* Quantum Optimization */}
            <div className=&quot;card group hover:bg-green-500/10 transition-colors&quot;>
              <div className=&quot;w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/30&quot;>
                <svg className=&quot;w-8 h-8 text-green-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M13 10V3L4 14h7v7l9-11h-7z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Quantum Optimization</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Solve complex optimization problems with quantum algorithms that 
                can find global minima in exponentially large search spaces.
              </p>
              <ul className=&quot;space-y-2 mb-6 text-sm text-gray-400&quot;>
                <li>• Quantum annealing</li>
                <li>• Variational quantum algorithms</li>
                <li>• Combinatorial optimization</li>
                <li>• Supply chain optimization</li>
              </ul>
              <Link href=&quot;/quantum-services/quantum-optimization&quot; className=&quot;text-green-400 hover:text-green-300 text-sm font-medium&quot;>
                Learn More →
              </Link>
            </div>
            
            {/* Quantum Simulation */}
            <div className=&quot;card group hover:bg-indigo-500/10 transition-colors&quot;>
              <div className=&quot;w-16 h-16 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/30&quot;>
                <svg className=&quot;w-8 h-8 text-indigo-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Quantum Simulation</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Accurate simulation of quantum systems for materials science, 
                chemistry, and physics research applications.
              </p>
              <ul className=&quot;space-y-2 mb-6 text-sm text-gray-400&quot;>
                <li>• Molecular dynamics</li>
                <li>• Chemical reaction modeling</li>
                <li>• Material property prediction</li>
                <li>• Quantum chemistry</li>
              </ul>
              <Link href=&quot;/quantum-services/quantum-simulation&quot; className=&quot;text-indigo-400 hover:text-indigo-300 text-sm font-medium&quot;>
                Learn More →
              </Link>
            </div>
            
            {/* Quantum Error Correction */}
            <div className=&quot;card group hover:bg-red-500/10 transition-colors&quot;>
              <div className=&quot;w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/30&quot;>
                <svg className=&quot;w-8 h-8 text-red-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Quantum Error Correction</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Advanced error correction techniques to maintain quantum coherence 
                and ensure reliable quantum computations.
              </p>
              <ul className=&quot;space-y-2 mb-6 text-sm text-gray-400&quot;>
                <li>• Surface code implementation</li>
                <li>• Fault-tolerant quantum computing</li>
                <li>• Quantum memory protection</li>
                <li>• Noise mitigation strategies</li>
              </ul>
              <Link href=&quot;/quantum-services/error-correction&quot; className=&quot;text-red-400 hover:text-red-300 text-sm font-medium&quot;>
                Learn More →
              </Link>
            </div>
            
            {/* Quantum Consulting */}
            <div className=&quot;card group hover:bg-yellow-500/10 transition-colors&quot;>
              <div className=&quot;w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/30&quot;>
                <svg className=&quot;w-8 h-8 text-yellow-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Quantum Strategy Consulting</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Strategic guidance on quantum computing adoption, roadmap development, 
                and integration with existing IT infrastructure.
              </p>
              <ul className=&quot;space-y-2 mb-6 text-sm text-gray-400&quot;>
                <li>• Quantum readiness assessment</li>
                <li>• Implementation roadmap</li>
                <li>• Talent development</li>
                <li>• ROI analysis</li>
              </ul>
              <Link href=&quot;/quantum-services/consulting&quot; className=&quot;text-yellow-400 hover:text-yellow-300 text-sm font-medium&quot;>
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600/10 to-blue-600/10&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Industry Applications
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Discover how quantum computing is transforming industries across the globe
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            <div className=&quot;card&quot;>
              <div className=&quot;w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6&quot;>
                <svg className=&quot;w-8 h-8 text-blue-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Financial Services</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Portfolio optimization, risk assessment, and option pricing with 
                quantum algorithms that process complex financial models in seconds.
              </p>
              <div className=&quot;text-sm text-gray-400&quot;>
                <strong>Use Cases:</strong> Risk modeling, algorithmic trading, fraud detection
              </div>
            </div>
            
            <div className=&quot;card&quot;>
              <div className=&quot;w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-6&quot;>
                <svg className=&quot;w-8 h-8 text-green-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Healthcare & Pharma</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Drug discovery, protein folding, and personalized medicine through 
                quantum simulations that model molecular interactions with unprecedented accuracy.
              </p>
              <div className=&quot;text-sm text-gray-400&quot;>
                <strong>Use Cases:</strong> Drug discovery, genomics, medical imaging
              </div>
            </div>
            
            <div className=&quot;card&quot;>
              <div className=&quot;w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6&quot;>
                <svg className=&quot;w-8 h-8 text-purple-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Manufacturing & Logistics</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Supply chain optimization, production scheduling, and quality control 
                using quantum algorithms that solve complex logistical challenges.
              </p>
              <div className=&quot;text-sm text-gray-400&quot;>
                <strong>Use Cases:</strong> Supply chain optimization, production planning
              </div>
            </div>
            
            <div className=&quot;card&quot;>
              <div className=&quot;w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6&quot;>
                <svg className=&quot;w-8 h-8 text-red-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M12 19l9 2-9-18-9 18 9-2zm0 0v-8&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Energy & Utilities</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Grid optimization, renewable energy forecasting, and materials science 
                for next-generation energy storage and transmission systems.
              </p>
              <div className=&quot;text-sm text-gray-400&quot;>
                <strong>Use Cases:</strong> Grid optimization, battery design, climate modeling
              </div>
            </div>
            
            <div className=&quot;card&quot;>
              <div className=&quot;w-16 h-16 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6&quot;>
                <svg className=&quot;w-8 h-8 text-indigo-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Cybersecurity</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Post-quantum cryptography, threat detection, and secure communication 
                protocols that remain secure against quantum attacks.
              </p>
              <div className=&quot;text-sm text-gray-400&quot;>
                <strong>Use Cases:</strong> Post-quantum cryptography, threat detection
              </div>
            </div>
            
            <div className=&quot;card&quot;>
              <div className=&quot;w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6&quot;>
                <svg className=&quot;w-8 h-8 text-yellow-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Research & Development</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Academic research, scientific discovery, and breakthrough innovations 
                across physics, chemistry, and materials science.
              </p>
              <div className=&quot;text-sm text-gray-400&quot;>
                <strong>Use Cases:</strong> Scientific research, breakthrough innovations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Quantum Technology Stack
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              State-of-the-art quantum computing infrastructure and tools
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            <div className=&quot;card&quot;>
              <h3 className=&quot;text-xl font-semibold mb-4&quot;>Quantum Hardware</h3>
              <div className=&quot;space-y-4&quot;>
                <div className=&quot;flex items-center&quot;>
                  <div className=&quot;w-3 h-3 bg-purple-500 rounded-full mr-3&quot;></div>
                  <span className=&quot;text-gray-300&quot;>Superconducting qubits</span>
                </div>
                <div className=&quot;flex items-center&quot;>
                  <div className=&quot;w-3 h-3 bg-purple-500 rounded-full mr-3&quot;></div>
                  <span className=&quot;text-gray-300&quot;>Trapped ion systems</span>
                </div>
                <div className=&quot;flex items-center&quot;>
                  <div className=&quot;w-3 h-3 bg-purple-500 rounded-full mr-3&quot;></div>
                  <span className=&quot;text-gray-300&quot;>Photonic quantum computers</span>
                </div>
                <div className=&quot;flex items-center&quot;>
                  <div className=&quot;w-3 h-3 bg-purple-500 rounded-full mr-3&quot;></div>
                  <span className=&quot;text-gray-300&quot;>Quantum annealers</span>
                </div>
              </div>
            </div>
            
            <div className=&quot;card&quot;>
              <h3 className=&quot;text-xl font-semibold mb-4&quot;>Quantum Software</h3>
              <div className=&quot;space-y-4&quot;>
                <div className=&quot;flex items-center&quot;>
                  <div className=&quot;w-3 h-3 bg-blue-500 rounded-full mr-3&quot;></div>
                  <span className=&quot;text-gray-300&quot;>Qiskit framework</span>
                </div>
                <div className=&quot;flex items-center&quot;>
                  <div className=&quot;w-3 h-3 bg-blue-500 rounded-full mr-3&quot;></div>
                  <span className=&quot;text-gray-300&quot;>Cirq (Google)</span>
                </div>
                <div className=&quot;flex items-center&quot;>
                  <div className=&quot;w-3 h-3 bg-blue-500 rounded-full mr-3&quot;></div>
                  <span className=&quot;text-gray-300&quot;>PennyLane</span>
                </div>
                <div className=&quot;flex items-center&quot;>
                  <div className=&quot;w-3 h-3 bg-blue-500 rounded-full mr-3&quot;></div>
                  <span className=&quot;text-gray-300&quot;>Custom quantum algorithms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800/20 to-gray-900/20&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Quantum Success Stories
            </h2>
            <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
              Real-world results from our quantum computing implementations
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            <div className=&quot;card&quot;>
              <h3 className=&quot;text-xl font-semibold mb-4&quot;>Financial Portfolio Optimization</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                A major investment firm achieved 40% better portfolio performance 
                using our quantum optimization algorithms for asset allocation.
              </p>
              <div className=&quot;text-sm text-gray-400&quot;>
                <strong>Result:</strong> 40% improvement in portfolio performance
              </div>
            </div>
            
            <div className=&quot;card&quot;>
              <h3 className=&quot;text-xl font-semibold mb-4&quot;>Drug Discovery Acceleration</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Pharmaceutical company reduced drug discovery time from years to 
                months using quantum molecular simulation.
              </p>
              <div className=&quot;text-sm text-gray-400&quot;>
                <strong>Result:</strong> 10x faster drug discovery process
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <div className=&quot;card bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/30&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Ready to Go Quantum?
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Transform your business with the power of quantum computing. 
              Let's explore how quantum solutions can solve your most complex challenges.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Link href=&quot;/contact&quot; className=&quot;btn-primary text-lg px-8 py-4&quot;>
                Start Quantum Journey
              </Link>
              <Link href=&quot;/case-studies&quot; className=&quot;btn-secondary text-lg px-8 py-4&quot;>
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}