import { Link } from 'react-router-dom';
import { 
  Atom, 
  Brain, 
  Zap, 
  Target, 
  BarChart3, 
  Cpu, 
  CheckCircle,
  Star,
  Clock,
  DollarSign,
  ArrowRight,
  Server,
  Network,
  Database,
  Cloud,
  Lock,
  Globe,
  TrendingUp,
  Users,
  Shield
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const QuantumAIPlatform = () => {
  const features = [
    {
      icon: Atom,
      title: "Quantum Algorithm Library",
      description: "Comprehensive collection of quantum algorithms for optimization, machine learning, cryptography, and scientific computing.",
      benefits: ["Access to cutting-edge quantum algorithms", "Optimized for current quantum hardware", "Continuous algorithm updates"]
    },
    {
      icon: Brain,
      title: "Hybrid Quantum-Classical Computing",
      description: "Seamless integration of quantum and classical computing resources for optimal performance and practical applications.",
      benefits: ["Best of both worlds", "Practical quantum advantage", "Scalable solutions"]
    },
    {
      icon: Target,
      title: "Optimization Solvers",
      description: "Quantum-powered optimization for complex problems in logistics, finance, manufacturing, and research.",
      benefits: ["Solve previously intractable problems", "Faster optimization", "Better solutions"]
    },
    {
      icon: BarChart3,
      title: "Quantum Machine Learning",
      description: "Advanced quantum machine learning models for pattern recognition, classification, and predictive analytics.",
      benefits: ["Quantum advantage in ML", "Enhanced pattern recognition", "Improved predictions"]
    }
  ];

  const useCases = [
    {
      name: "Financial Services",
      description: "Portfolio optimization, risk assessment, and algorithmic trading with quantum advantage",
      icon: DollarSign,
      examples: ["Portfolio optimization", "Risk modeling", "Option pricing", "Fraud detection"]
    },
    {
      name: "Pharmaceutical Research",
      description: "Drug discovery, molecular modeling, and protein folding simulations",
      icon: Atom,
      examples: ["Drug discovery", "Molecular dynamics", "Protein folding", "Chemical reactions"]
    },
    {
      name: "Logistics & Supply Chain",
      description: "Route optimization, inventory management, and supply chain optimization",
      icon: Network,
      examples: ["Route optimization", "Inventory management", "Supply chain optimization", "Scheduling"]
    },
    {
      name: "Artificial Intelligence",
      description: "Quantum-enhanced machine learning, neural networks, and AI algorithms",
      icon: Brain,
      examples: ["Quantum neural networks", "Enhanced ML algorithms", "Pattern recognition", "AI optimization"]
    },
    {
      name: "Cryptography",
      description: "Quantum-resistant cryptography and secure communication protocols",
      icon: Lock,
      examples: ["Post-quantum cryptography", "Secure communication", "Key distribution", "Encryption"]
    },
    {
      name: "Scientific Research",
      description: "Physics simulations, climate modeling, and computational chemistry",
      icon: Globe,
      examples: ["Physics simulations", "Climate modeling", "Computational chemistry", "Material science"]
    }
  ];

  const pricingTiers = [
    {
      name: "Research",
      price: 999,
      period: "month",
      description: "For academic and research institutions",
      features: [
        "Up to 100 quantum operations/day",
        "Access to quantum algorithm library",
        "Basic quantum hardware access",
        "Research support",
        "Academic pricing",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 2499,
      period: "month",
      description: "For growing businesses and research teams",
      features: [
        "Up to 1000 quantum operations/day",
        "Advanced quantum features",
        "Hybrid quantum-classical computing",
        "Custom algorithm development",
        "Priority support",
        "API access",
        "Performance analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 4999,
      period: "month",
      description: "For large organizations with complex quantum needs",
      features: [
        "Unlimited quantum operations",
        "Custom quantum models",
        "Dedicated quantum hardware",
        "White-label options",
        "Dedicated support team",
        "Custom integrations",
        "SLA guarantees",
        "On-site deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Williams",
      role: "Research Director",
      company: "Quantum Research Institute",
      content: "The Quantum AI Platform has accelerated our research by orders of magnitude. We're solving problems that were previously impossible.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "Quantum Finance Corp",
      content: "Our portfolio optimization algorithms now run 100x faster with quantum enhancement. The ROI has been incredible.",
      rating: 5
    },
    {
      name: "Dr. Robert Johnson",
      role: "Lead Scientist",
      company: "PharmaTech Solutions",
      content: "Quantum machine learning has revolutionized our drug discovery process. We're finding new compounds in weeks instead of months.",
      rating: 5
    }
  ];

  const quantumAdvantages = [
    "Exponential speedup for specific problems",
    "Quantum parallelism",
    "Quantum entanglement benefits",
    "Quantum tunneling optimization",
    "Quantum superposition computing",
    "Quantum error correction"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Quantum AI Platform — Zion Tech Group | Next-Generation Quantum Computing"
        description="Revolutionary quantum computing platform for AI applications, optimization problems, and complex simulations. Access the future of computing today."
        keywords="quantum computing, quantum AI, quantum optimization, quantum machine learning, quantum algorithms"
        canonical="https://ziontechgroup.com/services/quantum-ai-platform"
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2"/>
              Quantum Computing
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum AI Platform
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Revolution</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Access the future of computing with our revolutionary quantum AI platform. Solve previously intractable problems, 
              accelerate research, and gain quantum advantage in optimization and machine learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
              >
                📞 Call +1 (302) 464-0950
              </a>
              <a 
                href="/request-quote" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              >
                Get Quantum Access
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Quantum AI Platform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quantum Advantage</h3>
              <p className="text-gray-300">Solve previously impossible problems</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Exponential Speedup</h3>
              <p className="text-gray-300">100x+ faster for specific problems</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI Enhancement</h3>
              <p className="text-gray-300">Quantum-powered machine learning</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Future-Proof</h3>
              <p className="text-gray-300">Stay ahead of the competition</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Revolutionary Quantum Features</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-8 hover:border-purple-500/50 transition-all">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"/>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Transformative Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white"/>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.examples.map((example, idx) => (
                    <li key={idx} className="text-gray-400 text-sm flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Advantages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Quantum Computing Advantages</h2>
          <div className="bg-slate-800/50 border border-white/10 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quantumAdvantages.map((advantage, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Atom className="w-8 h-8 text-white"/>
                  </div>
                  <p className="text-white font-semibold">{advantage}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-300">
                Quantum computing leverages the principles of quantum mechanics to provide computational advantages 
                that are impossible with classical computers, opening new possibilities in science, technology, and business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Quantum Access Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-slate-800/50 border rounded-xl p-8 relative ${
                tier.popular 
                  ? 'border-purple-500/50 bg-slate-800/70' 
                  : 'border-white/10'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">${tier.price}</span>
                    <span className="text-gray-400 ml-2">/{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"/>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="tel:+13024640950" 
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105'
                      : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Quantum Researchers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current"/>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Access the Future of Computing?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the quantum revolution and gain access to computational power that was previously impossible. 
            Transform your research, business, and technology with quantum advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
            >
              📞 Call +1 (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              ✉️ Email Us
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>📍 364 E Main St STE 1008 Middletown DE 19709</p>
            <p>🌐 <a href="https://ziontechgroup.com" className="text-purple-400 hover:text-purple-300">ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumAIPlatform;
