import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  Globe,
  Atom,
  Network,
  Cpu,
  HardDrive,
  Lock,
  TrendingUp,
  DollarSign,
  BarChart3,
  Settings,
  Eye,
  CheckCircle2
} from 'lucide-react';

export default function QuantumCloudInfrastructure() {
  const features = [
    {
      icon: Atom,
      title: "Quantum-Enhanced Computing",
      description: "Next-generation quantum computing capabilities integrated with traditional cloud infrastructure for unprecedented processing power.",
      benefits: ["1000x faster complex calculations", "Quantum algorithm optimization", "Hybrid quantum-classical processing"]
    },
    {
      icon: Shield,
      title: "Zero-Trust Security Framework",
      description: "Military-grade security with quantum-resistant encryption, advanced threat detection, and comprehensive compliance.",
      benefits: ["Quantum-resistant encryption", "Real-time threat detection", "SOC2 & ISO27001 compliance"]
    },
    {
      icon: Zap,
      title: "AI-Optimized Resource Allocation",
      description: "Intelligent resource management that automatically scales and optimizes performance based on real-time demand patterns.",
      benefits: ["Auto-scaling infrastructure", "Cost optimization", "Performance monitoring"]
    },
    {
      icon: Network,
      title: "Edge Computing Integration",
      description: "Distributed edge computing network that reduces latency and improves performance for global applications.",
      benefits: ["90% latency reduction", "Global edge network", "Real-time processing"]
    }
  ];

  const pricingTiers = [
    {
      name: "Development",
      price: "$2,999/month",
      description: "Perfect for development and testing",
      features: [
        "Up to 10 virtual machines",
        "100GB quantum-secure storage",
        "Basic networking",
        "Standard security features",
        "Email support",
        "99.9% uptime SLA"
      ],
      popular: false
    },
    {
      name: "Production",
      price: "$7,999/month",
      description: "Ideal for production workloads",
      features: [
        "Up to 50 virtual machines",
        "1TB quantum-secure storage",
        "Advanced networking",
        "Enhanced security features",
        "Priority support",
        "99.99% uptime SLA",
        "Auto-scaling",
        "Load balancing"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$19,999/month",
      description: "For large-scale enterprises",
      features: [
        "Unlimited virtual machines",
        "Unlimited storage",
        "Full networking suite",
        "Complete security suite",
        "24/7 dedicated support",
        "99.999% uptime SLA",
        "Custom configurations",
        "On-premise integration"
      ],
      popular: false
    }
  ];

  const successMetrics = [
    { metric: "99.999%", description: "Uptime guarantee", icon: CheckCircle2 },
    { metric: "90%", description: "Latency reduction", icon: Zap },
    { metric: "60%", description: "Cost savings", icon: DollarSign },
    { metric: "300%", description: "Performance improvement", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Quantum Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Next-generation quantum-enhanced cloud infrastructure with AI optimization, zero-trust security, and 99.999% uptime guarantee." />
        <link rel="canonical" href="https://ziontechgroup.com/services/quantum-cloud-infrastructure" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
              <Atom className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Quantum-Enhanced Cloud</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Quantum Cloud Infrastructure
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Next-generation quantum-enhanced cloud infrastructure with AI optimization, 
              zero-trust security, and 99.999% uptime guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{metric.metric}</div>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Revolutionary Infrastructure Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technology that redefines cloud computing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
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

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing for quantum-enhanced cloud infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 ${tier.popular ? 'ring-2 ring-indigo-500' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="text-4xl font-bold text-indigo-600 mb-2">{tier.price}</div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    tier.popular 
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Quantum Cloud Infrastructure?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join forward-thinking enterprises already leveraging quantum-enhanced cloud computing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Migration
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a 
              href="tel:+13024640950" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-indigo-600 mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
              <a href="tel:+13024640950" className="text-gray-600 hover:text-indigo-600">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-indigo-600 mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-600 hover:text-indigo-600">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="w-8 h-8 text-indigo-600 mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
              <p className="text-gray-600 text-center">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}