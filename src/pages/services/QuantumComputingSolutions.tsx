import React from 'react';
import { SEO } from '../../components/SEO';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';

const QuantumComputingSolutions: React.FC = () => {
  const features = [
    {
      title: "Quantum Algorithm Development",
      description: "Custom quantum algorithms designed for your specific business challenges and optimization problems.",
      icon: "🧮",
      benefits: ["Exponential Speed Improvements", "Complex Problem Solving", "Optimized Resource Utilization", "Custom Algorithm Design"]
    },
    {
      title: "Quantum Machine Learning",
      description: "Advanced machine learning models that leverage quantum computing for enhanced pattern recognition and prediction.",
      icon: "🔮",
      benefits: ["Enhanced Pattern Recognition", "Faster Model Training", "Improved Accuracy", "Quantum Feature Engineering"]
    },
    {
      title: "Quantum Cryptography",
      description: "Unbreakable encryption solutions using quantum key distribution and quantum-resistant algorithms.",
      icon: "🔐",
      benefits: ["Unbreakable Security", "Quantum Key Distribution", "Future-Proof Encryption", "Secure Communication"]
    },
    {
      title: "Quantum Optimization",
      description: "Solve complex optimization problems across logistics, finance, and resource allocation with quantum computing.",
      icon: "⚡",
      benefits: ["Complex Problem Solving", "Resource Optimization", "Cost Reduction", "Efficiency Improvements"]
    },
    {
      title: "Quantum Simulation",
      description: "Simulate complex quantum systems for research, drug discovery, and materials science applications.",
      icon: "🌌",
      benefits: ["Molecular Simulation", "Drug Discovery", "Materials Research", "Scientific Modeling"]
    },
    {
      title: "Quantum Cloud Services",
      description: "Access quantum computing power through our secure cloud platform with pay-per-use pricing.",
      icon: "☁️",
      benefits: ["Scalable Access", "Cost-Effective", "No Hardware Investment", "Professional Support"]
    }
  ];

  const useCases = [
    {
      industry: "Financial Services",
      applications: ["Portfolio Optimization", "Risk Analysis", "Fraud Detection", "Algorithmic Trading"],
      impact: "30% improvement in risk assessment accuracy"
    },
    {
      industry: "Healthcare",
      applications: ["Drug Discovery", "Protein Folding", "Genomic Analysis", "Treatment Optimization"],
      impact: "50% faster drug discovery process"
    },
    {
      industry: "Manufacturing",
      applications: ["Supply Chain Optimization", "Quality Control", "Predictive Maintenance", "Resource Allocation"],
      impact: "25% reduction in operational costs"
    },
    {
      industry: "Logistics",
      applications: ["Route Optimization", "Fleet Management", "Warehouse Operations", "Demand Forecasting"],
      impact: "40% improvement in delivery efficiency"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Quantum Computing Solutions - Zion Tech Group"
        description="Revolutionary quantum computing solutions for businesses. Explore quantum algorithms, machine learning, cryptography, and optimization services."
        keywords="quantum computing, quantum algorithms, quantum machine learning, quantum cryptography, quantum optimization, quantum simulation"
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-cyan-400 font-semibold uppercase tracking-wider text-sm">
              Next-Generation Computing
            </span>
          </div>
          <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Quantum Computing Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Harness the power of quantum mechanics to solve complex problems that are impossible for classical computers. 
            Our quantum computing solutions deliver exponential performance improvements across industries.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-lg">
              Explore Quantum Solutions
            </Button>
            <Button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-lg">
              Schedule Consultation
            </Button>
          </div>
        </div>

        {/* Quantum Advantage Section */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-slate-700">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">The Quantum Advantage</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Quantum computing represents a paradigm shift in computational power, offering exponential speedups for specific problem classes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Exponential Speedup</h3>
              <p className="text-gray-300 text-sm">Solve problems in seconds that would take classical computers centuries</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Scientific Breakthroughs</h3>
              <p className="text-gray-300 text-sm">Enable discoveries in chemistry, physics, and materials science</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Unbreakable Security</h3>
              <p className="text-gray-300 text-sm">Quantum cryptography provides theoretically unbreakable encryption</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Quantum Computing Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105 h-full">
                <div className="p-6 h-full flex flex-col">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 flex-grow">{feature.description}</p>
                  <ul className="space-y-2 mb-6">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-slate-700 to-slate-600 text-white hover:from-slate-600 hover:to-slate-500 transition-all duration-300 mt-auto">
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Industry Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 hover:border-cyan-400 transition-all duration-300">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4">{useCase.industry}</h3>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">Key Applications:</h4>
                    <ul className="space-y-1">
                      {useCase.applications.map((app, appIndex) => (
                        <li key={appIndex} className="flex items-center text-sm text-gray-300">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-lg p-4 border border-cyan-400/20">
                    <p className="text-sm text-cyan-300 font-semibold">
                      Impact: {useCase.impact}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-slate-700">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Quantum Hardware</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  IBM Quantum System Two (1,000+ qubits)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Google Sycamore (70+ qubits)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  IonQ Aria (64+ qubits)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Rigetti Aspen-M (80+ qubits)
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Software Stack</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Qiskit (IBM Quantum)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Cirq (Google Quantum)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  PennyLane (Xanadu)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Custom Quantum Algorithms
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Quantum Computing Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 hover:border-cyan-400 transition-all duration-300">
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Explorer</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-4">$5,000<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-6 text-left">
                  <li>• 10 hours quantum compute time</li>
                  <li>• Basic quantum algorithms</li>
                  <li>• Standard support</li>
                  <li>• Educational resources</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-slate-700 to-slate-600 text-white hover:from-slate-600 hover:to-slate-500 transition-all duration-300">
                  Get Started
                </Button>
              </div>
            </Card>
            <Card className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400 hover:border-cyan-300 transition-all duration-300 transform scale-105">
              <div className="p-6 text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full mb-4 inline-block">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-4">$25,000<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-6 text-left">
                  <li>• 50 hours quantum compute time</li>
                  <li>• Advanced quantum algorithms</li>
                  <li>• Priority support</li>
                  <li>• Custom development</li>
                  <li>• Dedicated account manager</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Get Started
                </Button>
              </div>
            </Card>
            <Card className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 hover:border-cyan-400 transition-all duration-300">
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-4">Custom</div>
                <ul className="space-y-3 text-gray-300 mb-6 text-left">
                  <li>• Unlimited quantum compute time</li>
                  <li>• Custom quantum solutions</li>
                  <li>• 24/7 dedicated support</li>
                  <li>• On-premise deployment</li>
                  <li>• Research collaboration</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-slate-700 to-slate-600 text-white hover:from-slate-600 hover:to-slate-500 transition-all duration-300">
                  Contact Sales
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Enter the Quantum Era?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the quantum revolution and unlock unprecedented computational power for your business challenges. 
            Our experts are ready to guide you through your quantum computing journey.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-lg">
              Start Quantum Journey
            </Button>
            <Button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-lg">
              Download Whitepaper
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingSolutions;