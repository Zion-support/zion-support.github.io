import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  CheckCircle, 
  ArrowRight, 
  Star,
  Zap,
  Shield,
  Cloud,
  Brain,
  Cpu,
  Lock,
  Settings,
  Rocket,
  Layers
} from 'lucide-react';

const pricingPlans = [
  {
    category: "AI Services",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    plans: [
      {
        name: "Starter AI",
        price: "$2,500",
        period: "per month",
        description: "Perfect for small businesses",
        features: [
          "Basic AI Chatbot",
          "Document Processing",
          "Email Support",
          "Basic Analytics",
          "Monthly Reports"
        ],
        popular: false
      },
      {
        name: "Professional AI",
        price: "$7,500",
        period: "per month",
        description: "Ideal for growing companies",
        features: [
          "Advanced AI Models",
          "Custom ML Solutions",
          "24/7 Priority Support",
          "Real-time Analytics",
          "API Integration",
          "Dedicated Account Manager"
        ],
        popular: true
      },
      {
        name: "Enterprise AI",
        price: "Custom",
        period: "pricing",
        description: "For large organizations",
        features: [
          "Quantum AI Solutions",
          "Custom AI Development",
          "White-label Solutions",
          "On-premise Deployment",
          "Dedicated AI Team",
          "SLA Guarantee"
        ],
        popular: false
      }
    ]
  },
  {
    category: "IT Services",
    icon: Cpu,
    color: "from-blue-500 to-cyan-500",
    plans: [
      {
        name: "Basic IT",
        price: "$1,500",
        period: "per month",
        description: "Essential IT support",
        features: [
          "Basic IT Support",
          "Network Monitoring",
          "Email Support",
          "Basic Security",
          "Monthly Reports"
        ],
        popular: false
      },
      {
        name: "Professional IT",
        price: "$4,500",
        period: "per month",
        description: "Comprehensive IT solutions",
        features: [
          "24/7 IT Support",
          "Cloud Migration",
          "Advanced Security",
          "DevOps Services",
          "Priority Support",
          "Dedicated Manager"
        ],
        popular: true
      },
      {
        name: "Enterprise IT",
        price: "Custom",
        period: "pricing",
        description: "Full-scale IT transformation",
        features: [
          "Quantum Computing",
          "Blockchain Solutions",
          "IoT Implementation",
          "Data Center Solutions",
          "Dedicated Team",
          "SLA Guarantee"
        ],
        popular: false
      }
    ]
  },
  {
    category: "Micro SaaS",
    icon: Cloud,
    color: "from-green-500 to-emerald-500",
    plans: [
      {
        name: "MVP Development",
        price: "$15,000",
        period: "starting price",
        description: "Minimum viable product",
        features: [
          "Basic Web Application",
          "User Authentication",
          "Database Setup",
          "Basic API",
          "3 Months Support"
        ],
        popular: false
      },
      {
        name: "Full SaaS Platform",
        price: "$45,000",
        period: "starting price",
        description: "Complete software solution",
        features: [
          "Advanced Web App",
          "Mobile Application",
          "AI Integration",
          "Payment Processing",
          "Analytics Dashboard",
          "6 Months Support"
        ],
        popular: true
      },
      {
        name: "Enterprise SaaS",
        price: "Custom",
        period: "pricing",
        description: "Advanced enterprise solution",
        features: [
          "Quantum Computing SaaS",
          "Blockchain Integration",
          "AR/VR Applications",
          "IoT Platform",
          "White-label Solution",
          "12 Months Support"
        ],
        popular: false
      }
    ]
  }
];

const additionalServices = [
  {
    name: "Quantum Computing Solutions",
    icon: Rocket,
    price: "Starting at $50,000",
    description: "Next-generation quantum computing solutions and research"
  },
  {
    name: "Blockchain & Web3 Development",
    icon: Lock,
    price: "Starting at $25,000",
    description: "Decentralized applications and Web3 solutions"
  },
  {
    name: "IoT & Edge Computing",
    icon: Settings,
    price: "Starting at $20,000",
    description: "Internet of Things solutions and edge computing platforms"
  },
  {
    name: "AR/VR & Metaverse",
    icon: Layers,
    price: "Starting at $30,000",
    description: "Augmented and virtual reality applications"
  }
];

const benefits = [
  {
    icon: CheckCircle,
    title: "Free Consultation",
    description: "All plans include free consultation and custom implementation"
  },
  {
    icon: Shield,
    title: "SLA Guarantee",
    description: "Service level agreements with uptime guarantees"
  },
  {
    icon: Zap,
    title: "24/7 Support",
    description: "Round-the-clock technical support and monitoring"
  },
  {
    icon: Star,
    title: "Expert Team",
    description: "Certified professionals with years of experience"
  }
];

export default function PricingPage() {
  return (
    <Layout
      title="Pricing - Zion Tech Group"
      description="Transparent, competitive pricing for AI solutions, IT services, and Micro SaaS development. Choose the plan that fits your business needs."
      keywords="pricing, AI services pricing, IT services cost, micro SaaS development pricing, technology consulting rates"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transparent{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Choose the perfect plan for your business needs. All plans include free consultation and custom implementation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {pricingPlans.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  {category.category}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Comprehensive {category.category.toLowerCase()} solutions tailored to your business needs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {category.plans.map((plan, planIndex) => (
                  <motion.div
                    key={planIndex}
                    className={`bg-white rounded-2xl p-8 ${
                      plan.popular 
                        ? `bg-gradient-to-br ${category.color} text-white relative transform scale-105` 
                        : 'border-2 border-gray-200 hover:border-blue-500'
                    } transition-all duration-300`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: planIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                        {plan.name}
                      </h3>
                      <p className={`mb-4 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                        {plan.description}
                      </p>
                      <div className={`text-4xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-blue-600'}`}>
                        {plan.price}
                      </div>
                      <p className={`${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                        {plan.period}
                      </p>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className={`w-5 h-5 mr-3 flex-shrink-0 ${
                            plan.popular ? 'text-green-300' : 'text-green-500'
                          }`} />
                          <span className={`${plan.popular ? 'text-white' : 'text-gray-700'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className={`w-full py-3 px-6 rounded-lg transition-colors duration-300 text-center block font-semibold ${
                        plan.popular
                          ? 'bg-white text-blue-600 hover:bg-gray-100'
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                    >
                      Get Started
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Cutting-edge technology solutions for forward-thinking businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-2xl font-bold text-blue-600 mb-3">
                  {service.price}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              We deliver exceptional value through our expertise, innovation, and commitment to your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and custom quote tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              >
                Get Free Consultation
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}