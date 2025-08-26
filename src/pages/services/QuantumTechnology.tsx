import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Atom, 
  Zap, 
  Shield, 
  Database, 
  Network, 
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Globe,
  Clock,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Code,
  Lock,
  Cloud,
  Settings,
  Monitor,
  AlertTriangle,
  Eye,
  Heart,
  Star,
  Brain,
  Bot,
  Database as DatabaseIcon,
  ShieldCheck,
  Globe2,
  BarChart
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const QuantumTechnology: React.FC = () => {
  const features = [
    {
      icon: Atom,
      title: "Quantum Computing",
      description: "Harness the power of quantum bits (qubits) for exponentially faster computational capabilities."
    },
    {
      icon: Shield,
      title: "Quantum Security",
      description: "Unbreakable encryption using quantum key distribution and quantum-resistant algorithms."
    },
    {
      icon: Brain,
      title: "Quantum AI",
      description: "Quantum machine learning algorithms that solve complex problems beyond classical computing limits."
    },
    {
      icon: Network,
      title: "Quantum Networks",
      description: "Secure quantum communication networks for ultra-fast, unhackable data transmission."
    }
  ];

  const applications = [
    {
      title: "Financial Services",
      description: "Revolutionize risk assessment, portfolio optimization, and fraud detection with quantum algorithms.",
      icon: BarChart,
      benefits: ["Risk Modeling", "Portfolio Optimization", "Fraud Detection", "Algorithmic Trading"]
    },
    {
      title: "Drug Discovery",
      description: "Accelerate pharmaceutical research with quantum simulations of molecular interactions.",
      icon: Heart,
      benefits: ["Molecular Modeling", "Drug Design", "Protein Folding", "Clinical Trials"]
    },
    {
      title: "Logistics Optimization",
      description: "Solve complex routing and supply chain problems with quantum optimization algorithms.",
      icon: Network,
      benefits: ["Route Optimization", "Supply Chain", "Inventory Management", "Cost Reduction"]
    },
    {
      title: "Climate Modeling",
      description: "Advanced climate prediction and environmental modeling using quantum computational power.",
      icon: Globe2,
      benefits: ["Weather Forecasting", "Climate Analysis", "Environmental Impact", "Policy Planning"]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Exponential Speed",
      description: "Solve problems in minutes that would take classical computers years"
    },
    {
      icon: Shield,
      title: "Unbreakable Security",
      description: "Quantum encryption provides theoretically unbreakable data protection"
    },
    {
      icon: Brain,
      title: "Advanced AI",
      description: "Quantum machine learning enables breakthroughs in artificial intelligence"
    },
    {
      icon: Target,
      title: "Competitive Advantage",
      description: "Stay ahead of the curve with cutting-edge quantum technology"
    }
  ];

  const technologies = [
    "Quantum Gates & Circuits",
    "Quantum Error Correction",
    "Quantum Key Distribution",
    "Quantum Machine Learning",
    "Quantum Cryptography",
    "Quantum Sensors",
    "Quantum Memory",
    "Quantum Repeaters"
  ];

  const quantumComputingTypes = [
    {
      name: "Gate-based Quantum Computing",
      description: "Traditional quantum computing using quantum gates and circuits",
      applications: ["Algorithm Development", "Research & Development", "Proof of Concepts"]
    },
    {
      name: "Quantum Annealing",
      description: "Specialized quantum computing for optimization problems",
      applications: ["Supply Chain", "Logistics", "Financial Modeling"]
    },
    {
      name: "Quantum Simulation",
      description: "Simulating quantum systems for scientific research",
      applications: ["Chemistry", "Physics", "Material Science"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white">
      <SEOHead 
        title="Quantum Technology - Zion Tech Group"
        description="Explore the future of computing with our quantum technology solutions. From quantum computing to quantum security, unlock unprecedented computational power and security."
        keywords="quantum technology, quantum computing, quantum security, quantum AI, quantum networks, quantum cryptography"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
              <Cpu className="w-4 h-4 mr-2" />
              Quantum Technology
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              The Future of Computing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Unlock unprecedented computational power with quantum technology solutions that solve problems beyond classical computing limits
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Quantum Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum technology solutions leverage the fundamental principles of quantum mechanics to deliver breakthrough performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how quantum technology is transforming industries and solving previously intractable problems
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                    <application.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{application.title}</h3>
                    <p className="text-gray-300 mb-4">{application.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {application.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Computing Types Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Quantum Computing Approaches
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Different quantum computing paradigms for various problem types and applications
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {quantumComputingTypes.map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">{type.name}</h3>
                <p className="text-gray-300 mb-6">{type.description}</p>
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-gray-400 mb-3">Applications:</div>
                  {type.applications.map((app, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      {app}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Why Choose Quantum Technology?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the transformative benefits of quantum technology solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Core Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on cutting-edge quantum technologies that ensure reliability and performance
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <Cpu className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-700">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready for the Quantum Future?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Transform your business with the power of quantum technology and stay ahead of the competition
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumTechnology;