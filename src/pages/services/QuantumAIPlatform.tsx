import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Atom, 
  Brain, 
  Zap, 
  Cpu, 
  Lock, 
  CheckCircle, 
  Users, 
  BarChart3, 
  Globe, 
  Award,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Target,
  Network,
  Database,
  Key,
  Fingerprint,
  ShieldCheck,
  Activity,
  Clock,
  Calendar,
  DollarSign,
  CreditCard,
  Wallet,
  Rocket,
  Microscope,
  Beaker,
  TestTube,
  Calculator,
  Code,
  Server,
  Cloud,
  Circuit,
  Binary,
  Hexagon,
  Stethoscope,
  Pill,
  Syringe,
  Thermometer,
  Eye,
  Pulse,
  Monitor,
  Building,
  Shield
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const features = [
  {
    icon: Atom,
    title: "Quantum Algorithm Library",
    description: "Comprehensive collection of quantum algorithms for optimization, machine learning, and scientific computing",
    benefits: ["Pre-built quantum circuits", "Custom algorithm development", "Performance optimization", "Algorithm benchmarking"]
  },
  {
    icon: Brain,
    title: "AI-Powered Optimization",
    description: "Hybrid classical-quantum AI that solves complex optimization problems exponentially faster",
    benefits: ["Quantum machine learning", "Neural network acceleration", "Pattern recognition", "Predictive modeling"]
  },
  {
    icon: Cpu,
    title: "Hybrid Classical-Quantum Computing",
    description: "Seamless integration between classical and quantum computing resources for optimal performance",
    benefits: ["Resource optimization", "Hybrid workflows", "Performance scaling", "Cost efficiency"]
  },
  {
    icon: Zap,
    title: "Real-Time Quantum Simulations",
    description: "Advanced quantum simulation capabilities for research, testing, and development",
    benefits: ["Circuit simulation", "Error modeling", "Performance analysis", "Debugging tools"]
  },
  {
    icon: Code,
    title: "Custom Quantum Circuits",
    description: "Build and deploy custom quantum circuits with our intuitive development environment",
    benefits: ["Visual circuit builder", "Quantum programming", "Circuit optimization", "Deployment tools"]
  },
  {
    icon: Lock,
    title: "Enterprise Security Protocols",
    description: "Bank-grade security for quantum computing operations and data protection",
    benefits: ["Quantum-safe encryption", "Access control", "Audit trails", "Compliance standards"]
  }
];

const pricingPlans = [
  {
    name: "Research",
    price: 499,
    period: "month",
    description: "Perfect for research institutions and academic projects",
    features: [
      "Basic quantum algorithm library",
      "Quantum simulation access",
      "API access",
      "Email support",
      "Up to 100 quantum operations/month",
      "Basic documentation"
    ],
    popular: false,
    color: "from-blue-600 to-cyan-600"
  },
  {
    name: "Professional",
    price: 999,
    period: "month",
    description: "Ideal for growing companies and research teams",
    features: [
      "Full quantum algorithm library",
      "Advanced AI optimization",
      "Hybrid computing access",
      "Custom circuit development",
      "Up to 1000 quantum operations/month",
      "Priority support",
      "Advanced analytics",
      "Custom integrations"
    ],
    popular: true,
    color: "from-purple-600 to-pink-600"
  },
  {
    name: "Enterprise",
    price: 1999,
    period: "month",
    description: "For large organizations with complex quantum computing needs",
    features: [
      "Unlimited quantum operations",
      "Custom quantum algorithms",
      "Dedicated quantum experts",
      "24/7 phone support",
      "Custom quantum hardware access",
      "White-label solutions",
      "SLA guarantees",
      "Dedicated account manager"
    ],
    popular: false,
    color: "from-orange-600 to-red-600"
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: "1000x Faster Problem Solving",
    description: "Solve complex optimization problems exponentially faster than classical computers"
  },
  {
    icon: Rocket,
    title: "Revolutionary AI Capabilities",
    description: "Access to quantum machine learning and AI acceleration capabilities"
  },
  {
    icon: Target,
    title: "Future-Proof Technology",
    description: "Stay ahead with cutting-edge quantum computing technology"
  },
  {
    icon: Award,
    title: "Competitive Advantage",
    description: "Gain significant competitive advantage in research and development"
  }
];

const useCases = [
  {
    title: "Research Institutions",
    description: "Accelerate scientific research with quantum computing power",
    icon: Microscope,
    features: ["Drug discovery", "Material science", "Climate modeling", "Physics research"]
  },
  {
    title: "Pharmaceutical Companies",
    description: "Revolutionize drug discovery and molecular modeling",
    icon: Beaker,
    features: ["Molecular simulation", "Drug optimization", "Protein folding", "Clinical trials"]
  },
  {
    title: "Financial Services",
    description: "Advanced portfolio optimization and risk assessment",
    icon: DollarSign,
    features: ["Portfolio optimization", "Risk modeling", "Trading algorithms", "Fraud detection"]
  },
  {
    title: "Government Agencies",
    description: "National security and scientific advancement applications",
    icon: Shield,
    features: ["Cryptography", "Intelligence analysis", "Scientific research", "Defense applications"]
  }
];

const quantumAdvantages = [
  {
    title: "Quantum Supremacy",
    description: "Achieve computational power beyond classical computers for specific problems",
    icon: Rocket
  },
  {
    title: "Exponential Speedup",
    description: "Solve problems in minutes that would take classical computers years",
    icon: Zap
  },
  {
    title: "Quantum Entanglement",
    description: "Leverage quantum entanglement for secure communications and computing",
    icon: Network
  },
  {
    title: "Quantum Tunneling",
    description: "Access quantum tunneling for optimization and search algorithms",
    icon: Hexagon
  }
];

export default function QuantumAIPlatform() {
  return (
    <>
      <SEO 
        title="Quantum AI Platform Enterprise - Zion Tech Group"
        description="Next-generation quantum computing platform with AI integration for complex problem solving and optimization. Experience the future of computing technology."
        canonical="/services/quantum-ai-platform"
        url="https://ziontechgroup.com/services/quantum-ai-platform"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0">
              <Atom className="w-4 h-4 mr-2" />
              Quantum Computing
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent">
              Quantum AI Platform Enterprise
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of computing with our revolutionary quantum AI platform. Solve complex problems 1000x faster with quantum-powered intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                <Link to="/request-quote">
                  Start Quantum Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Demo
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quantum Advantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Power of Quantum Computing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how quantum computing revolutionizes problem-solving and computational power
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quantumAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Quantum AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive quantum platform combines cutting-edge quantum computing with advanced AI capabilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Quantum AI Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience revolutionary computing power that transforms how you solve complex problems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 text-lg">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how quantum computing transforms various industries and research fields
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quantum Computing Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access to revolutionary quantum computing technology at competitive prices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl p-8 border-2 ${
                  plan.popular ? 'ring-2 ring-purple-500 scale-105 border-purple-200' : 'border-slate-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  asChild 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600' 
                      : 'bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800'
                  }`}
                >
                  <Link to="/request-quote">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for the Quantum Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum computing revolution and solve problems that were previously impossible
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                <Link to="/request-quote">
                  Start Quantum Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Demo
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Get in Touch
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-purple-500 mb-4" />
                <p className="text-gray-900 font-semibold">Phone</p>
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-purple-500 mb-4" />
                <p className="text-gray-900 font-semibold">Email</p>
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-purple-500 mb-4" />
                <p className="text-gray-900 font-semibold">Address</p>
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}