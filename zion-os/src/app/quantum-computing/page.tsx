import Link from 'next/link';

export const metadata ={
  title: 'Quantum Computing Solutions - Zion Tech Group',
  description: 'Cutting-edge quantum computing solutions for complex problem-solving, optimization, and advanced computational capabilities from Zion Tech Group.'};

export default function QuantumComputingPage() {
  const quantumSolutions = [
    {
      name: 'Quantum Neural Network Platform',
      description: 'Advanced platform combining quantum computing with neural networks for breakthrough performance in machine learning and AI applications.',
      icon: '🧠',
      features: [
        'Quantum-Classical Hybrid Algorithms',
        'Neural Network Optimization',
        'Quantum Feature Mapping',
        'Scalable Architecture'
      ],
      applications: ['Machine Learning', 'Pattern Recognition', 'Optimization Problems', 'AI Training']
    },
    {
      name: 'Quantum Cloud Infrastructure',
      description: 'Cloud-based quantum computing infrastructure accessible to businesses of all sizes, with API access and performance monitoring.',
      icon: '☁️',
      features: [
        'Quantum Processing Units (QPUs)',
        'Cloud Integration & API Access',
        'Performance Monitoring',
        'Scalable Resources'
      ],
      applications: ['Research & Development', 'Algorithm Testing', 'Educational Purposes', 'Proof of Concepts']
    },
    {
      name: 'Quantum Financial Trading',
      description: 'Quantum-powered trading algorithms for financial markets, offering superior risk assessment and portfolio optimization.',
      icon: '💹',
      features: [
        'Quantum Risk Assessment',
        'Portfolio Optimization',
        'Real-time Market Analysis',
        'Advanced Trading Strategies'
      ],
      applications: ['Risk Management', 'Portfolio Optimization', 'Algorithmic Trading', 'Market Analysis']
    },
    {
      name: 'Quantum Optimization Engine',
      description: 'Specialized quantum computing solution for solving complex optimization problems across various industries.',
      icon: '⚡',
      features: [
        'Combinatorial Optimization',
        'Quantum Annealing',
        'Multi-objective Optimization',
        'Real-time Solutions'
      ],
      applications: ['Supply Chain Optimization', 'Logistics Planning', 'Resource Allocation', 'Scheduling']
    }
  ];

  const quantumTechnologies = [
    {
      name: 'Quantum Gates',
      description: 'Fundamental building blocks of quantum circuits that manipulate qubits to perform quantum operations.',
      icon: '🔧'
    },
    {
      name: 'Quantum Circuits',
      description: 'Sequences of quantum gates that implement quantum algorithms and computational processes.',
      icon: '⚡'
    },
    {
      name: 'Quantum Algorithms',
      description: 'Specialized algorithms designed to leverage quantum mechanical properties for computational advantage.',
      icon: '📊'
    },
    {
      name: 'Quantum Error Correction',
      description: 'Techniques to protect quantum information from decoherence and other quantum noise sources.',
      icon: '🛡️'
    },
    {
      name: 'Quantum Entanglement',
      description: 'Quantum mechanical phenomenon where particles become correlated in ways not possible classically.',
      icon: '🔗'
    },
    {
      name: 'Quantum Superposition',
      description: 'Ability of quantum systems to exist in multiple states simultaneously until measured.',
      icon: '🌀'
    }
  ];

  const useCases = [
    {
      industry: 'Finance & Banking',
      applications: [
        'Portfolio Optimization',
        'Risk Assessment',
        'Fraud Detection',
        'Algorithmic Trading',
        'Credit Scoring'
      ],
      benefits: ['Faster Risk Calculations', 'Improved Portfolio Performance', 'Enhanced Security', 'Real-time Analysis']
    },
    {
      industry: 'Healthcare & Pharmaceuticals',
      applications: [
        'Drug Discovery',
        'Protein Folding',
        'Genomic Analysis',
        'Medical Imaging',
        'Treatment Optimization'
      ],
      benefits: ['Accelerated Research', 'Better Drug Design', 'Personalized Medicine', 'Improved Diagnostics']
    },
    {
      industry: 'Manufacturing & Logistics',
      applications: [
        'Supply Chain Optimization',
        'Production Scheduling',
        'Quality Control',
        'Inventory Management',
        'Route Optimization'
      ],
      benefits: ['Cost Reduction', 'Improved Efficiency', 'Better Resource Utilization', 'Faster Decision Making']
    },
    {
      industry: 'Energy & Utilities',
      applications: [
        'Grid Optimization',
        'Energy Trading',
        'Load Balancing',
        'Renewable Integration',
        'Infrastructure Planning'
      ],
      benefits: ['Grid Stability', 'Cost Optimization', 'Renewable Integration', 'Efficient Distribution']
    }
  ];

  const advantages = [
    {
      title: 'Exponential Speedup',
      description: 'Quantum computers can solve certain problems exponentially faster than classical computers.',
      icon: '🚀'
    },
    {
      title: 'Parallel Processing',
      description: 'Quantum systems can process multiple possibilities simultaneously through superposition.',
      icon: '⚡'
    },
    {
      title: 'Complex Optimization',
      description: 'Efficiently solve complex optimization problems that are intractable for classical computers.',
      icon: '🎯'
    },
    {
      title: 'Cryptography',
      description: 'Advanced cryptographic capabilities and quantum-resistant security solutions.',
      icon: '🔐'
    },
    {
      title: 'Machine Learning',
      description: 'Enhanced machine learning algorithms with quantum advantage for pattern recognition.',
      icon: '🤖'
    },
    {
      title: 'Scientific Discovery',
      description: 'Accelerate scientific research in physics, chemistry, and materials science.',
      icon: '🔬'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-90o0 via-indigo-90o0 to-blue-90o0 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Quantum Computing Solutions
          </h1>
          <p className="text-xl md:text-2xl text-blue-10o0 max-w-3xl mx-auto">
            Harness the power of quantum mechanics to solve complex problems and unlock 
            computational capabilities beyond classical computing.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="bg-purple-60o0 hover:bg-purple-70o0 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-20o0"
            >
              Explore Quantum Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-90o0 mb-6">The Future of Computing</h2>
              <p className="text-lg text-gray-60o0 mb-6">
                Quantum computing represents a paradigm shift in computational power, leveraging the principles 
                of quantum mechanics to process information in ways that classical computers cannot.
              </p>
              <p className="text-lg text-gray-60o0 mb-6">
                Our quantum computing solutions are designed to tackle the most complex computational challenges, 
                from optimization problems to machine learning applications, providing unprecedented speed and accuracy.
              </p>
              <div className="bg-purple-50 border-l-4 border-purple-50o0 p-6 rounded-r-lg">
                <p className="text-purple-80o0 font-medium">
                  "Quantum computing that unlocks computational possibilities beyond classical limits."
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-10o0 to-blue-10o0 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-90o0 mb-4">Quantum Advantage</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-purple-60o0 text-xl">⚛️</span>
                  <span className="text-gray-70o0">Exponential speedup for specific problems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-60o0 text-xl">⚛️</span>
                  <span className="text-gray-70o0">Parallel processing through superposition</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-60o0 text-xl">⚛️</span>
                  <span className="text-gray-70o0">Quantum entanglement for correlation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-60o0 text-xl">⚛️</span>
                  <span className="text-gray-70o0">Advanced cryptography and security</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-90o0 mb-4">Our Quantum Solutions</h2>
            <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">
              Comprehensive quantum computing solutions designed for enterprise applications and research
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {quantumSolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-30o0">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-bold text-gray-90o0 mb-4">{solution.name}</h3>
                <p className="text-gray-60o0 mb-6">{solution.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-80o0 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-60o0 flex items-center">
                        <span className="text-green-50o0 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-80o0 mb-3">Applications:</h4>
                  <ul className="space-y-2">
                    {solution.applications.map((application, appIndex) => (
                      <li key={appIndex} className="text-sm text-gray-60o0 flex items-center">
                        <span className="text-purple-50o0 mr-2">•</span>
                        {application}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center text-purple-60o0 hover:text-purple-70o0 font-semibold"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"  />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-90o0 mb-4">Core Quantum Technologies</h2>
            <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">
              Fundamental quantum computing technologies that power our solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quantumTechnologies.map((tech, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-30o0">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold text-gray-90o0 mb-4">{tech.name}</h3>
                <p className="text-gray-60o0">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-90o0 mb-4">Industry Applications</h2>
            <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">
              Discover how quantum computing is transforming industries across the globe
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-90o0 mb-4">{useCase.industry}</h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-80o0 mb-3">Applications:</h4>
                  <ul className="space-y-2">
                    {useCase.applications.map((application, appIndex) => (
                      <li key={appIndex} className="text-sm text-gray-60o0 flex items-start">
                        <span className="text-purple-50o0 mr-2 mt-1">•</span>
                        {application}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-80o0 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-60o0 flex items-center">
                        <span className="text-green-50o0 mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-90o0 mb-4">Quantum Computing Advantages</h2>
            <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">
              Why quantum computing represents the future of computational power
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-30o0">
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-bold text-gray-90o0 mb-4">{advantage.title}</h3>
                <p className="text-gray-60o0">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-90o0 mb-4">Implementation Process</h2>
            <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">
              Our methodology for successfully deploying quantum computing solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-60o0 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-90o0 mb-2">Problem Analysis</h3>
              <p className="text-gray-60o0">Identify quantum-suitable problems and assess computational requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-60o0 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-90o0 mb-2">Algorithm Design</h3>
              <p className="text-gray-60o0">Design quantum algorithms optimized for your specific use case</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-60o0 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-gray-90o0 mb-2">Implementation</h3>
              <p className="text-gray-60o0">Deploy quantum solutions with hybrid classical-quantum approaches</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-60o0 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold text-gray-90o0 mb-2">Optimization</h3>
              <p className="text-gray-60o0">Continuous optimization and performance tuning for maximum efficiency</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-90o0 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore Quantum Computing?</h2>
          <p className="text-xl text-purple-10o0 mb-8 max-w-2xl mx-auto">
            Discover how quantum computing can solve your most complex computational challenges. 
            Contact our team to discuss your quantum computing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-90o0 hover:bg-gray-10o0 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-20o0"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-90o0 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-20o0"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}