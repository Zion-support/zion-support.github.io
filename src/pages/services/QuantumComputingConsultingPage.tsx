// import React from 'react';

const QuantumComputingConsultingPage: React.FC = () => {
  const quantumServices = [
    {
      title: "Quantum Strategy Consulting",
      description: "Develop comprehensive quantum computing strategies aligned with your business objectives and technology roadmap.",
      icon: "🎯",
      features: ["Strategic Planning", "Technology Assessment", "ROI Analysis", "Implementation Roadmap"]
    },
    {
      title: "Quantum Algorithm Development",
      description: "Design and implement custom quantum algorithms to solve complex optimization and simulation problems.",
      icon: "⚛️",
      features: ["Algorithm Design", "Quantum Circuit Optimization", "Performance Tuning", "Hybrid Solutions"]
    },
    {
      title: "Quantum Software Integration",
      description: "Integrate quantum computing capabilities into your existing software infrastructure and workflows.",
      icon: "🔗",
      features: ["API Development", "System Integration", "Legacy System Support", "Hybrid Computing"]
    },
    {
      title: "Quantum Security Solutions",
      description: "Implement quantum-resistant cryptography and security measures to protect against future quantum threats.",
      icon: "🔒",
      features: ["Post-Quantum Cryptography", "Security Audits", "Migration Planning", "Compliance Support"]
    },
    {
      title: "Quantum Training & Education",
      description: "Comprehensive training programs to help your team understand and leverage quantum computing technologies.",
      icon: "🎓",
      features: ["Team Training", "Technical Workshops", "Best Practices", "Knowledge Transfer"]
    },
    {
      title: "Quantum Research & Development",
      description: "Collaborative R&D projects to explore quantum computing applications specific to your industry.",
      icon: "🔬",
      features: ["Research Partnerships", "Proof of Concepts", "Prototype Development", "Innovation Labs"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Quantum Computing Consulting - Zion Tech Group</title>
        <meta name="description" content="Expert quantum computing consulting services including strategy, algorithm development, and quantum security solutions from Zion Tech Group." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Quantum Computing Consulting</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Unlock the power of quantum computing with expert consulting services that prepare your organization for the quantum future.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {quantumServices.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className="text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quantum Applications */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quantum Computing Applications</h2>"
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">"
                Explore the transformative potential of quantum computing across industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">"
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl">"
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Optimization Problems</h3>"
                <ul className="space-y-2 text-gray-600">"
                  <li>• Supply chain optimization</li>
                  <li>• Portfolio optimization</li>
                  <li>• Route planning and logistics</li>
                  <li>• Resource allocation</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">"
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Machine Learning</h3>"
                <ul className="space-y-2 text-gray-600">"
                  <li>• Quantum machine learning algorithms</li>
                  <li>• Pattern recognition</li>
                  <li>• Quantum neural networks</li>
                  <li>• Data classification</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl">"
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Simulation & Modeling</h3>"
                <ul className="space-y-2 text-gray-600">"
                  <li>• Molecular simulation</li>
                  <li>• Financial modeling</li>
                  <li>• Climate modeling</li>
                  <li>• Drug discovery</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl">"
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cryptography</h3>"
                <ul className="space-y-2 text-gray-600">"
                  <li>• Quantum key distribution</li>
                  <li>• Post-quantum cryptography</li>
                  <li>• Secure communications</li>
                  <li>• Blockchain security</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Partners */}
        <section className="py-20 bg-gray-50">"
          <div className="container mx-auto px-6">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quantum Technology Partners</h2>"
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">"
                We work with leading quantum computing providers and platforms
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">"
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">"
                <h3 className="text-lg font-bold text-gray-900 mb-2">IBM Quantum</h3>"
                <p className="text-gray-600">Qiskit Platform</p>"
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">"
                <h3 className="text-lg font-bold text-gray-900 mb-2">Google Quantum AI</h3>"
                <p className="text-gray-600">Cirq Framework</p>"
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">"
                <h3 className="text-lg font-bold text-gray-900 mb-2">Microsoft Azure</h3>"
                <p className="text-gray-600">Quantum Development Kit</p>"
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">"
                <h3 className="text-lg font-bold text-gray-900 mb-2">Amazon Braket</h3>"
                <p className="text-gray-600">Quantum Computing Service</p>"
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-purple-600 text-white">"
          <div className="container mx-auto px-6 text-center">"
            <h2 className="text-4xl font-bold mb-4">Ready to Explore Quantum Computing?</h2>"
            <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">"
              Let's discuss how quantum computing can give your organization a competitive advantage.';
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <Link 
                to="/contact" 
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors
              >
                Start Your Quantum Journey
              </Link>
              <Link "
                to="/blog" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors
              >
                Read Our Quantum Blog
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
"
export default QuantumComputingConsultingPage;