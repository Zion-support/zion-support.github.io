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
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
        {/* Header */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <h1 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Quantum Computing Consulting</h1>
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              Unlock the power of quantum computing with expert consulting services that prepare your organization for the quantum future.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
              {quantumServices.map((service, index) => (
                <div key={index} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                  <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{service.icon}</div>
                  <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{service.title}</h3>
                  <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">{service.description}</p>
                  <ul className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                        <span className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quantum Applications */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">"
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">"
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Quantum Computing Applications</h2>"
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">"
                Explore the transformative potential of quantum computing across industries
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">"
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">"
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Optimization Problems</h3>"
                <ul className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">"
                  <li>• Supply chain optimization</li>
                  <li>• Portfolio optimization</li>
                  <li>• Route planning and logistics</li>
                  <li>• Resource allocation</li>
                </ul>
              </div>
              
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">"
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Machine Learning</h3>"
                <ul className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">"
                  <li>• Quantum machine learning algorithms</li>
                  <li>• Pattern recognition</li>
                  <li>• Quantum neural networks</li>
                  <li>• Data classification</li>
                </ul>
              </div>
              
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">"
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Simulation & Modeling</h3>"
                <ul className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">"
                  <li>• Molecular simulation</li>
                  <li>• Financial modeling</li>
                  <li>• Climate modeling</li>
                  <li>• Drug discovery</li>
                </ul>
              </div>
              
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">"
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Cryptography</h3>"
                <ul className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">"
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
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">"
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">"
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">"
              <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Quantum Technology Partners</h2>"
              <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">"
                We work with leading quantum computing providers and platforms
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">"
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">"
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">IBM Quantum</h3>"
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Qiskit Platform</p>"
              </div>
              
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">"
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Google Quantum AI</h3>"
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Cirq Framework</p>"
              </div>
              
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">"
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Microsoft Azure</h3>"
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Quantum Development Kit</p>"
              </div>
              
              <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">"
                <h3 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Amazon Braket</h3>"
                <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Quantum Computing Service</p>"
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">"
          <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">"
            <h2 className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">Ready to Explore Quantum Computing?</h2>"
            <p className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">"
              Let's discuss how quantum computing can give your organization a competitive advantage.';
            </p>
            <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">"
              <Link 
                to="/contact" 
                className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
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