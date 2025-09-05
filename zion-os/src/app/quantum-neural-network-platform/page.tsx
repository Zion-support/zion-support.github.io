import Link from &quot;next/link&quot;;

export const metadata = {
  title: &quot;Quantum Neural Network Platform - Zion Tech Group&quot;,
  description: &quot;Revolutionary quantum neural network platform that combines quantum computing with artificial intelligence to solve previously intractable problems.&quot;,
  keywords: &quot;quantum neural networks, quantum computing, AI, machine learning, quantum machine learning, Zion Tech Group&quot;};

export default function QuantumNeuralNetworkPlatformPage() {
  return (
    <div className=&quot;min-h-screen py-20 px-4 sm:px-6 lg:px-8&quot;>
      <div className=&quot;max-w-7xl mx-auto&quot;>
        {/* Hero Section */}
        <div className=&quot;text-center mb-16&quot;>
          <h1 className=&quot;text-4xl md:text-6xl font-bold mb-6&quot;>
            <span className=&quot;gradient-text&quot;>Quantum Neural Network Platform</span>
          </h1>
          <p className=&quot;text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed&quot;>
            The future of artificial intelligence meets quantum computing. Our platform enables unprecedented computational power 
            for solving complex problems that were previously impossible.
          </p>
        </div>

        {/* Overview Section */}
        <section className=&quot;mb-20&quot;>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-12 items-center&quot;>
            <div>
              <h2 className=&quot;text-3xl font-bold mb-6&quot;>Quantum Advantage in AI</h2>
              <p className=&quot;text-lg text-gray-300 mb-6&quot;>
                Our Quantum Neural Network Platform represents a paradigm shift in computational capabilities. 
                By harnessing quantum superposition and entanglement, we can process exponentially more information 
                than classical computers.
              </p>
              <p className=&quot;text-lg text-gray-300 mb-8&quot;>
                This platform is designed for researchers, enterprises, and innovators who need to tackle problems 
                in drug discovery, financial modeling, climate prediction, and beyond.
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4&quot;>
                <Link href=&quot;/contact&quot; className=&quot;btn-primary&quot;>
                  Get Access
                </Link>
                <Link href=&quot;/quantum-services&quot; className=&quot;btn-secondary&quot;>
                  Explore All Quantum Services
                </Link>
              </div>
            </div>
            <div className=&quot;card bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30 p-8&quot;>
              <h3 className=&quot;text-2xl font-bold mb-4&quot;>Quantum Capabilities</h3>
              <ul className=&quot;space-y-3 text-gray-300&quot;>
                <li className=&quot;flex items-center&quot;>
                  <svg className=&quot;w-5 h-5 text-purple-400 mr-3&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M13 10V3L4 14h7v7l9-11h-7z&quot; />
                  </svg>
                  Exponential speedup for optimization problems
                </li>
                <li className=&quot;flex items-center&quot;>
                  <svg className=&quot;w-5 h-5 text-purple-400 mr-3&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M13 10V3L4 14h7v7l9-11h-7z&quot; />
                  </svg>
                  Quantum advantage in machine learning
                </li>
                <li className=&quot;flex items-center&quot;>
                  <svg className=&quot;w-5 h-5 text-purple-400 mr-3&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M13 10V3L4 14h7v7l9-11h-7z&quot; />
                  </svg>
                  Advanced quantum algorithms
                </li>
                <li className=&quot;flex items-center&quot;>
                  <svg className=&quot;w-5 h-5 text-purple-400 mr-3&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                    <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M13 10V3L4 14h7v7l9-11h-7z&quot; />
                  </svg>
                  Hybrid quantum-classical computing
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className=&quot;mb-20&quot;>
          <h2 className=&quot;text-3xl font-bold text-center mb-12&quot;>Platform Features</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {/* Quantum Circuit Designer */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors&quot;>
                <svg className=&quot;w-6 h-6 text-purple-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z&quot; />
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M15 12a3 3 0 11-6 0 3 3 0 016 0z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Quantum Circuit Designer</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Visual drag-and-drop interface for designing quantum circuits with real-time simulation and validation.
              </p>
            </div>

            {/* Neural Network Training */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors&quot;>
                <svg className=&quot;w-6 h-6 text-blue-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Neural Network Training</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Train quantum neural networks using our advanced optimization algorithms and quantum backpropagation.
              </p>
            </div>

            {/* Quantum Simulator */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors&quot;>
                <svg className=&quot;w-6 h-6 text-green-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Quantum Simulator</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                High-performance quantum simulator supporting up to 100+ qubits with noise modeling and error correction.
              </p>
            </div>

            {/* API Integration */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-500/30 transition-colors&quot;>
                <svg className=&quot;w-6 h-6 text-yellow-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>API Integration</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                RESTful APIs and SDKs for seamless integration with existing applications and workflows.
              </p>
            </div>

            {/* Real Quantum Hardware */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/30 transition-colors&quot;>
                <svg className=&quot;w-6 h-6 text-red-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Real Quantum Hardware</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Access to real quantum computers from leading providers including IBM, Google, and our own quantum systems.
              </p>
            </div>

            {/* Advanced Analytics */}
            <div className=&quot;card group&quot;>
              <div className=&quot;w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 transition-colors&quot;>
                <svg className=&quot;w-6 h-6 text-indigo-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z&quot; />
                </svg>
              </div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Advanced Analytics</h3>
              <p className=&quot;text-gray-400 mb-4&quot;>
                Comprehensive analytics dashboard with performance metrics, optimization insights, and result visualization.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className=&quot;mb-20&quot;>
          <h2 className=&quot;text-3xl font-bold text-center mb-12&quot;>Applications & Use Cases</h2>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
            {/* Drug Discovery */}
            <div className=&quot;card bg-gradient-to-r from-blue-600/20 to-green-600/20 border-blue-500/30&quot;>
              <h3 className=&quot;text-2xl font-bold mb-4&quot;>Drug Discovery</h3>
              <p className=&quot;text-gray-300 mb-4&quot;>
                Accelerate pharmaceutical research by simulating molecular interactions and predicting drug efficacy 
                with quantum precision.
              </p>
              <ul className=&quot;text-sm text-gray-400 space-y-1&quot;>
                <li>• Molecular dynamics simulation</li>
                <li>• Protein folding prediction</li>
                <li>• Drug-target interaction modeling</li>
                <li>• Toxicity prediction</li>
              </ul>
            </div>

            {/* Financial Modeling */}
            <div className=&quot;card bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30&quot;>
              <h3 className=&quot;text-2xl font-bold mb-4&quot;>Financial Modeling</h3>
              <p className=&quot;text-gray-300 mb-4&quot;>
                Revolutionize risk assessment, portfolio optimization, and market prediction with quantum-enhanced 
                financial algorithms.
              </p>
              <ul className=&quot;text-sm text-gray-400 space-y-1&quot;>
                <li>• Risk assessment and management</li>
                <li>• Portfolio optimization</li>
                <li>• Market prediction models</li>
                <li>• Fraud detection</li>
              </ul>
            </div>

            {/* Climate Prediction */}
            <div className=&quot;card bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-500/30&quot;>
              <h3 className=&quot;text-2xl font-bold mb-4&quot;>Climate Prediction</h3>
              <p className=&quot;text-gray-300 mb-4&quot;>
                Model complex climate systems and predict weather patterns with unprecedented accuracy using 
                quantum computational power.
              </p>
              <ul className=&quot;text-sm text-gray-400 space-y-1&quot;>
                <li>• Weather pattern modeling</li>
                <li>• Climate change prediction</li>
                <li>• Atmospheric dynamics</li>
                <li>• Ocean current modeling</li>
              </ul>
            </div>

            {/* Logistics Optimization */}
            <div className=&quot;card bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border-yellow-500/30&quot;>
              <h3 className=&quot;text-2xl font-bold mb-4&quot;>Logistics Optimization</h3>
              <p className=&quot;text-gray-300 mb-4&quot;>
                Solve complex routing and scheduling problems in real-time with quantum optimization algorithms 
                that scale to enterprise levels.
              </p>
              <ul className=&quot;text-sm text-gray-400 space-y-1&quot;>
                <li>• Route optimization</li>
                <li>• Supply chain management</li>
                <li>• Resource allocation</li>
                <li>• Demand forecasting</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className=&quot;mb-20&quot;>
          <h2 className=&quot;text-3xl font-bold text-center mb-12&quot;>Quantum Technology Stack</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
            <div className=&quot;card text-center p-6&quot;>
              <h4 className=&quot;font-semibold mb-2&quot;>Quantum Gates</h4>
              <p className=&quot;text-sm text-gray-400&quot;>Universal set of quantum operations</p>
            </div>
            <div className=&quot;card text-center p-6&quot;>
              <h4 className=&quot;font-semibold mb-2&quot;>Quantum Circuits</h4>
              <p className=&quot;text-sm text-gray-400&quot;>Composable quantum operations</p>
            </div>
            <div className=&quot;card text-center p-6&quot;>
              <h4 className=&quot;font-semibold mb-2&quot;>Quantum Algorithms</h4>
              <p className=&quot;text-sm text-gray-400&quot;>Optimization and machine learning</p>
            </div>
            <div className=&quot;card text-center p-6&quot;>
              <h4 className=&quot;font-semibold mb-2&quot;>Error Correction</h4>
              <p className=&quot;text-sm text-gray-400&quot;>Quantum error correction codes</p>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className=&quot;mb-20&quot;>
          <h2 className=&quot;text-3xl font-bold text-center mb-12&quot;>Platform Access Tiers</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            {/* Starter */}
            <div className=&quot;card border border-gray-600&quot;>
              <div className=&quot;text-center p-6&quot;>
                <h3 className=&quot;text-2xl font-bold mb-2&quot;>Starter</h3>
                <p className=&quot;text-gray-400 mb-4&quot;>Perfect for researchers and students</p>
                <div className=&quot;text-3xl font-bold mb-6&quot;>$99<span className=&quot;text-lg text-gray-400&quot;>/month</span></div>
                <ul className=&quot;text-left space-y-2 text-sm text-gray-300 mb-6&quot;>
                  <li>• 10 qubit simulator access</li>
                  <li>• Basic quantum circuits</li>
                  <li>• Community support</li>
                  <li>• 100 API calls/month</li>
                </ul>
                <Link href=&quot;/contact&quot; className=&quot;btn-primary w-full&quot;>
                  Get Started
                </Link>
              </div>
            </div>

            {/* Professional */}
            <div className=&quot;card border border-purple-500 bg-gradient-to-b from-purple-600/10 to-transparent&quot;>
              <div className=&quot;text-center p-6&quot;>
                <h3 className=&quot;text-2xl font-bold mb-2&quot;>Professional</h3>
                <p className=&quot;text-gray-400 mb-4&quot;>For businesses and research teams</p>
                <div className=&quot;text-3xl font-bold mb-6&quot;>$499<span className=&quot;text-lg text-gray-400&quot;>/month</span></div>
                <ul className=&quot;text-left space-y-2 text-sm text-gray-300 mb-6&quot;>
                  <li>• 50 qubit simulator access</li>
                  <li>• Advanced quantum algorithms</li>
                  <li>• Priority support</li>
                  <li>• 1000 API calls/month</li>
                  <li>• Real quantum hardware access</li>
                </ul>
                <Link href=&quot;/contact&quot; className=&quot;btn-primary w-full&quot;>
                  Get Started
                </Link>
              </div>
            </div>

            {/* Enterprise */}
            <div className=&quot;card border border-blue-500&quot;>
              <div className=&quot;text-center p-6&quot;>
                <h3 className=&quot;text-2xl font-bold mb-2&quot;>Enterprise</h3>
                <p className=&quot;text-gray-400 mb-4&quot;>Custom solutions for large organizations</p>
                <div className=&quot;text-3xl font-bold mb-6&quot;>Custom</div>
                <ul className=&quot;text-left space-y-2 text-sm text-gray-300 mb-6&quot;>
                  <li>• Unlimited qubit access</li>
                  <li>• Custom quantum algorithms</li>
                  <li>• Dedicated support team</li>
                  <li>• Unlimited API access</li>
                  <li>• On-premise deployment</li>
                  <li>• Custom integrations</li>
                </ul>
                <Link href=&quot;/contact&quot; className=&quot;btn-primary w-full&quot;>
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=&quot;text-center&quot;>
          <div className=&quot;card bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30 max-w-4xl mx-auto&quot;>
            <h2 className=&quot;text-3xl font-bold mb-4&quot;>Ready to Experience Quantum Advantage?</h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Join the quantum revolution and unlock computational power that was previously impossible.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Link href=&quot;/contact&quot; className=&quot;btn-primary&quot;>
                Get Platform Access
              </Link>
              <Link href=&quot;/quantum-services&quot; className=&quot;btn-secondary&quot;>
                Explore All Quantum Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}