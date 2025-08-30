import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Atom, 
  Zap, 
  Cpu, 
  Brain, 
  CheckCircle, 
  ArrowRight, 
  BarChart3,
  TrendingUp,
  Activity,
  Globe,
  Building,
  FileText,
  Monitor,
  Shield,
  Lock,
  Database,
  Network,
  Server,
  Code,
  Calculator,
  Microscope,
  Beaker,
  Target,
  Rocket,
  Star
} from 'lucide-react';

export default function QuantumComputing() {
  const services = [
    {
      title: "Quantum Algorithm Development",
      description: "Design and implement quantum algorithms for complex computational problems.",
      icon: Code,
      features: ["Quantum optimization", "Machine learning", "Cryptography", "Simulation algorithms"]
    },
    {
      title: "Quantum Software Development",
      description: "Build quantum applications using leading quantum computing frameworks.",
      icon: Cpu,
      features: ["Qiskit development", "Cirq applications", "Quantum circuits", "Hybrid classical-quantum"]
    },
    {
      title: "Quantum Machine Learning",
      description: "Leverage quantum computing for advanced machine learning applications.",
      icon: Brain,
      features: ["Quantum neural networks", "Feature selection", "Pattern recognition", "Optimization"]
    },
    {
      title: "Quantum Cryptography",
      description: "Implement quantum-safe cryptographic solutions for future-proof security.",
      icon: Shield,
      features: ["Post-quantum cryptography", "Quantum key distribution", "Secure communications", "Encryption"]
    },
    {
      title: "Quantum Simulation",
      description: "Simulate quantum systems for research and development applications.",
      icon: Microscope,
      features: ["Molecular modeling", "Material science", "Chemical reactions", "Physical systems"]
    },
    {
      title: "Quantum Consulting",
      description: "Strategic guidance on quantum computing adoption and implementation.",
      icon: Building,
      features: ["Technology assessment", "Use case identification", "Implementation strategy", "Training"]
    }
  ];

  const applications = [
    {
      title: "Financial Services",
      description: "Optimize portfolio management, risk assessment, and trading strategies.",
      icon: BarChart3,
      features: ["Portfolio optimization", "Risk modeling", "Option pricing", "Fraud detection"]
    },
    {
      title: "Healthcare & Pharmaceuticals",
      description: "Accelerate drug discovery and molecular modeling with quantum computing.",
      icon: Flask,
      features: ["Drug discovery", "Protein folding", "Molecular dynamics", "Clinical trials"]
    },
    {
      title: "Logistics & Supply Chain",
      description: "Solve complex optimization problems in transportation and logistics.",
      icon: Globe,
      features: ["Route optimization", "Inventory management", "Scheduling", "Resource allocation"]
    },
    {
      title: "Energy & Materials",
      description: "Optimize energy systems and discover new materials.",
      icon: Atom,
      features: ["Energy optimization", "Material discovery", "Catalyst design", "Battery research"]
    }
  ];

  const benefits = [
    {
      title: "Exponential Speedup",
      description: "Solve problems that are intractable for classical computers.",
      icon: Zap
    },
    {
      title: "Advanced Optimization",
      description: "Find optimal solutions for complex multi-variable problems.",
      icon: Target
    },
    {
      title: "Future-Proof Security",
      description: "Implement quantum-resistant cryptographic solutions.",
      icon: Shield
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead with cutting-edge quantum computing capabilities.",
      icon: Star
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      {/* Header */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
              <Atom className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Quantum Computing
            <span className="text-zion-cyan"> Solutions</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Harness the power of quantum computing to solve complex problems that are beyond 
            the reach of classical computers. Transform your business with quantum innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 hover:scale-105"
            >
              Explore Quantum
            </Link>
            <Link
              to="/request-quote"
              className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-xl font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Quantum Assessment
            </Link>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quantum Computing Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              From algorithm development to quantum software, we provide comprehensive quantum computing solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-zion-blue-dark border border-zion-purple/30 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-zion-slate-light mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Industry Applications */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Discover how quantum computing can transform your industry and solve complex challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((application, index) => {
              const Icon = application.icon;
              return (
                <div
                  key={index}
                  className="bg-zion-blue border border-zion-purple/30 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{application.title}</h3>
                  <p className="text-zion-slate-light mb-6">{application.description}</p>
                  <ul className="space-y-2">
                    {application.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Quantum Computing?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Experience the revolutionary benefits of quantum computing technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Go Quantum?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Let's explore how quantum computing can revolutionize your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/quantum-assessment"
              className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-xl font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Free Assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}