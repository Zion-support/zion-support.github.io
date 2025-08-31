import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Cpu, 
  Zap, 
  Shield, 
  Database, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Star,
  Award,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Lightbulb,
  Target,
  Activity,
  Eye,
  Search,
  Download,
  Share2,
  Settings,
  Bell,
  Clock,
  DollarSign,
  Brain,
  Globe,
  Lock,
  Network,
  Server,
  Code,
  BarChart3,
  TrendingUp,
  Rocket,
  Sparkles
} from 'lucide-react';

const QuantumComputingSolutionsPlatform: React.FC = () => {
  const features = [
    {
      title: 'Quantum Algorithm Development',
      description: 'Custom quantum algorithms for optimization, cryptography, and machine learning',
      icon: Code,
      benefits: ['Custom algorithm design', 'Performance optimization', 'Quantum advantage analysis', 'Hybrid classical-quantum solutions']
    },
    {
      title: 'Quantum Security & Cryptography',
      description: 'Post-quantum cryptography and quantum-resistant security solutions',
      icon: Shield,
      benefits: ['Post-quantum algorithms', 'Quantum key distribution', 'Security auditing', 'Compliance frameworks']
    },
    {
      title: 'Quantum Machine Learning',
      description: 'Quantum-enhanced ML models for complex pattern recognition and optimization',
      icon: Brain,
      benefits: ['Quantum neural networks', 'Feature selection', 'Optimization algorithms', 'Hybrid ML pipelines']
    },
    {
      title: 'Quantum Cloud Access',
      description: 'Access to leading quantum computers and simulators through cloud platforms',
      icon: Cloud,
      benefits: ['IBM Quantum', 'Google Quantum', 'Amazon Braket', 'Microsoft Azure Quantum']
    }
  ];

  const pricingPlans = [
    {
      name: 'Quantum Starter',
      price: '$1,999',
      period: '/month',
      description: 'Perfect for research institutions and startups',
      features: [
        'Up to 10 quantum algorithm runs',
        'Basic quantum simulator access',
        'Standard security protocols',
        'Email support',
        'Monthly consultation hours',
        'Basic documentation'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Quantum Professional',
      price: '$4,999',
      period: '/month',
      description: 'Ideal for growing companies and research teams',
      features: [
        'Up to 100 quantum algorithm runs',
        'Advanced quantum simulator access',
        'Custom security protocols',
        'Priority support',
        'Unlimited consultation hours',
        'Advanced documentation',
        'API access',
        'Custom integrations'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Quantum Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited quantum algorithm runs',
        'Dedicated quantum hardware access',
        'Custom security frameworks',
        'Dedicated support team',
        'On-premise deployment',
        'Custom algorithm development',
        'Advanced compliance',
        'SLA guarantee'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const useCases = [
    {
      industry: 'Financial Services',
      applications: ['Portfolio optimization', 'Risk assessment', 'Fraud detection', 'Algorithmic trading'],
      icon: DollarSign
    },
    {
      industry: 'Pharmaceuticals',
      applications: ['Drug discovery', 'Molecular modeling', 'Protein folding', 'Chemical optimization'],
      icon: Flask
    },
    {
      industry: 'Logistics & Supply Chain',
      applications: ['Route optimization', 'Inventory management', 'Scheduling optimization', 'Resource allocation'],
      icon: Truck
    },
    {
      industry: 'Cybersecurity',
      applications: ['Cryptographic analysis', 'Threat detection', 'Secure communications', 'Vulnerability assessment'],
      icon: Lock
    }
  ];

  const quantumTechnologies = [
    {
      name: 'Quantum Annealing',
      description: 'Specialized optimization for complex combinatorial problems',
      applications: ['Logistics optimization', 'Financial modeling', 'Machine learning training']
    },
    {
      name: 'Gate-Based Quantum Computing',
      description: 'Universal quantum computing for general-purpose algorithms',
      applications: ['Cryptography', 'Machine learning', 'Scientific simulations']
    },
    {
      name: 'Quantum Machine Learning',
      description: 'Quantum-enhanced algorithms for pattern recognition',
      applications: ['Image classification', 'Natural language processing', 'Predictive analytics']
    },
    {
      name: 'Post-Quantum Cryptography',
      description: 'Cryptographic algorithms resistant to quantum attacks',
      applications: ['Secure communications', 'Digital signatures', 'Key exchange protocols']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2" />
              Quantum Computing Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Unlock the Power of
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {' '}Quantum Computing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the revolutionary potential of quantum computing to solve complex problems 
              that are impossible for classical computers. Transform your business with quantum advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors"
              >
                <Eye className="w-5 h-5 mr-2" />
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Quantum Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our quantum computing platform combines cutting-edge research with practical applications 
              to deliver solutions that were previously impossible.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Quantum Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore the cutting-edge quantum technologies that power our solutions and drive innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {quantumTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{tech.name}</h3>
                <p className="text-gray-300 mb-4">{tech.description}</p>
                <h4 className="text-sm font-semibold text-purple-400 mb-2">Applications:</h4>
                <ul className="space-y-1">
                  {tech.applications.map((app, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-center">
                      <ArrowRight className="w-3 h-3 text-purple-400 mr-2 flex-shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Quantum Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your quantum computing needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-lg border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-purple-500 bg-purple-500/10' 
                    : 'border-white/10 hover:border-white/20'
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how leading organizations across industries leverage quantum computing 
              to solve previously intractable problems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{useCase.industry}</h3>
                <ul className="space-y-2">
                  {useCase.applications.map((app, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-center">
                      <ArrowRight className="w-3 h-3 text-purple-400 mr-2 flex-shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Harness Quantum Advantage?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum revolution and solve problems that were previously impossible. 
              Our expert team is ready to guide your quantum computing journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Quantum Experts
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors"
              >
                <Video className="w-5 h-5 mr-2" />
                Schedule Quantum Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div>
              <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputingSolutionsPlatform;