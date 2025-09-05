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
  Layers,
  BarChart3,
  Database,
  Users,
  Target,
  Mail,
  MessageSquare,
  Globe,
  Code
} from 'lucide-react';

const pricingPlans = [
  {
    category: "AI Services",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    plans: [
      {
        name: "AI Starter",
        price: "$1,200",
        period: "per month",
        description: "Perfect for small businesses getting started with AI",
        features: [
          "Basic AI Chatbot (up to 1,000 conversations/month)",
          "Document Processing (up to 500 documents/month)",
          "Email Support",
          "Basic Analytics Dashboard",
          "Monthly Performance Reports",
          "API Access (1,000 calls/month)"
        ],
        popular: false
      },
      {
        name: "AI Professional",
        price: "$3,500",
        period: "per month",
        description: "Ideal for growing companies with advanced AI needs",
        features: [
          "Advanced AI Models & Custom Training",
          "Unlimited Document Processing",
          "24/7 Priority Support",
          "Real-time Analytics & Insights",
          "API Integration (10,000 calls/month)",
          "Dedicated Account Manager",
          "Custom AI Model Development"
        ],
        popular: true
      },
      {
        name: "AI Enterprise",
        price: "$8,500",
        period: "per month",
        description: "For large organizations requiring enterprise-grade AI",
        features: [
          "Quantum AI Solutions",
          "Custom AI Development & Training",
          "White-label AI Solutions",
          "On-premise Deployment Options",
          "Dedicated AI Team (5+ specialists)",
          "99.9% SLA Guarantee",
          "Unlimited API Access",
          "Advanced Security & Compliance"
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
        name: "IT Essentials",
        price: "$800",
        period: "per month",
        description: "Essential IT support for small businesses",
        features: [
          "Basic IT Support (8am-6pm EST)",
          "Network Monitoring & Management",
          "Email Support",
          "Basic Security (Firewall, Antivirus)",
          "Monthly Health Reports",
          "Remote Support (up to 10 devices)"
        ],
        popular: false
      },
      {
        name: "IT Professional",
        price: "$2,200",
        period: "per month",
        description: "Comprehensive IT solutions for growing businesses",
        features: [
          "24/7 IT Support & Monitoring",
          "Cloud Migration & Management",
          "Advanced Security Suite",
          "DevOps & CI/CD Services",
          "Priority Support Response",
          "Dedicated IT Manager",
          "Up to 50 devices",
          "Backup & Disaster Recovery"
        ],
        popular: true
      },
      {
        name: "IT Enterprise",
        price: "$5,500",
        period: "per month",
        description: "Full-scale IT transformation for large organizations",
        features: [
          "Dedicated IT Team (3+ specialists)",
          "Advanced Cloud & Hybrid Solutions",
          "Enterprise Security & Compliance",
          "Custom Infrastructure Design",
          "Data Center Solutions",
          "99.9% SLA Guarantee",
          "Unlimited devices",
          "24/7 On-site Support Available"
        ],
        popular: false
      }
    ]
  },
  {
    category: "Micro SaaS Development",
    icon: Cloud,
    color: "from-green-500 to-emerald-500",
    plans: [
      {
        name: "SaaS MVP",
        price: "$12,000",
        period: "one-time",
        description: "Minimum viable product to test your idea",
        features: [
          "Basic Web Application (React/Next.js)",
          "User Authentication & Authorization",
          "Database Design & Setup",
          "Basic API Development",
          "Responsive Design",
          "3 Months Post-Launch Support",
          "Basic Analytics Integration"
        ],
        popular: false
      },
      {
        name: "SaaS Complete",
        price: "$35,000",
        period: "one-time",
        description: "Full-featured software solution ready for market",
        features: [
          "Advanced Web Application",
          "Mobile App (iOS & Android)",
          "AI/ML Integration",
          "Payment Processing (Stripe/PayPal)",
          "Advanced Analytics Dashboard",
          "6 Months Post-Launch Support",
          "Admin Panel & User Management",
          "API Documentation"
        ],
        popular: true
      },
      {
        name: "SaaS Enterprise",
        price: "$75,000",
        period: "one-time",
        description: "Advanced enterprise solution with cutting-edge features",
        features: [
          "Multi-tenant Architecture",
          "Advanced AI Integration",
          "Blockchain/Web3 Features",
          "AR/VR Capabilities",
          "IoT Platform Integration",
          "White-label Solution",
          "12 Months Post-Launch Support",
          "Custom Integrations",
          "Enterprise Security & Compliance"
        ],
        popular: false
      }
    ]
  }
];

const additionalServices = [
  {
    name: "AI-Powered Customer Analytics Platform",
    icon: BarChart3,
    price: "$2,500/month",
    description: "Advanced customer behavior analysis and predictive insights"
  },
  {
    name: "Smart Document Processing Suite",
    icon: Database,
    price: "$1,800/month",
    description: "Intelligent document automation and processing"
  },
  {
    name: "Real-time Collaboration Workspace",
    icon: Users,
    price: "$3,200/month",
    description: "AI-powered team collaboration platform"
  },
  {
    name: "Intelligent Inventory Management",
    icon: Target,
    price: "$2,000/month",
    description: "AI-driven inventory optimization and supply chain management"
  },
  {
    name: "Advanced Email Marketing Automation",
    icon: Mail,
    price: "$1,500/month",
    description: "AI-powered email marketing with personalization"
  },
  {
    name: "Smart Financial Planning & Analytics",
    icon: BarChart3,
    price: "$2,200/month",
    description: "Comprehensive financial management and forecasting"
  },
  {
    name: "AI-Powered HR Management Suite",
    icon: Users,
    price: "$2,800/month",
    description: "Complete HR management with intelligent automation"
  },
  {
    name: "Intelligent Customer Support System",
    icon: MessageSquare,
    price: "$2,000/month",
    description: "Advanced customer service with AI chatbots"
  },
  {
    name: "Smart Social Media Management",
    icon: Globe,
    price: "$1,200/month",
    description: "AI-powered social media scheduling and analytics"
  },
  {
    name: "Advanced Lead Generation & CRM",
    icon: Target,
    price: "$2,500/month",
    description: "Intelligent lead generation and customer relationship management"
  },
  {
    name: "Smart Content Management System",
    icon: Code,
    price: "$1,800/month",
    description: "AI-powered content creation and optimization"
  },
  {
    name: "Intelligent Business Intelligence Dashboard",
    icon: BarChart3,
    price: "$3,000/month",
    description: "Comprehensive business analytics with AI insights"
  },
  {
    name: "Smart Compliance & Risk Management",
    icon: Shield,
    price: "$2,500/month",
    description: "Automated compliance monitoring and risk assessment"
  },
  {
    name: "Quantum Computing Solutions",
    icon: Rocket,
    price: "Starting at $15,000/month",
    description: "Next-generation quantum computing solutions and research"
  },
  {
    name: "Blockchain & Web3 Development",
    icon: Lock,
    price: "Starting at $8,000/month",
    description: "Decentralized applications and Web3 solutions"
  },
  {
    name: "IoT & Edge Computing",
    icon: Settings,
    price: "Starting at $5,000/month",
    description: "Internet of Things solutions and edge computing platforms"
  },
  {
    name: "AR/VR & Metaverse",
    icon: Layers,
    price: "Starting at $10,000/month",
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