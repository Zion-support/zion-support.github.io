import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Target, 
  MessageCircle, 
  BarChart3, 
  Users, 
  Shield, 
  Zap, 
  Cloud, 
  Server, 
  Lock, 
  Eye, 
  Atom, 
  Network, 
  TrendingUp, 
  ShoppingCart, 
  Star,
  ArrowRight,
  Play,
  CheckCircle,
  Globe,
  Cpu,
  Workflow,
  Heart,
  Clock,
  DollarSign
} from 'lucide-react';
import { SEO } from '../components/SEO';

const InnovativeServicesShowcase2025 = () => {
  const serviceCategories = [
    {
      title: "AI-Powered Business Solutions",
      description: "Transform your business operations with intelligent automation and insights",
      color: "from-cyan-500 to-blue-600",
      services: [
        {
          name: "AI Project Management",
          description: "AI-powered project management that optimizes workflows and predicts success",
          href: "/services/ai-project-management",
          icon: Target,
          price: "From $29/month",
          features: ["Task prioritization", "Team optimization", "Predictive analytics", "Workflow automation"]
        },
        {
          name: "AI Customer Support Automation",
          description: "24/7 intelligent support that never sleeps and always helps",
          href: "/services/ai-customer-support-automation",
          icon: MessageCircle,
          price: "From $39/month",
          features: ["24/7 availability", "Smart routing", "Multi-channel support", "Predictive insights"]
        },
        {
          name: "AI Financial Analytics",
          description: "Predictive financial insights for smarter business decisions",
          href: "/services/ai-financial-analytics",
          icon: BarChart3,
          price: "From $79/month",
          features: ["Financial forecasting", "Risk analysis", "Budget optimization", "Compliance support"]
        },
        {
          name: "AI Marketing Automation",
          description: "Personalized marketing campaigns that convert and engage",
          href: "/services/ai-marketing-automation",
          icon: Target,
          price: "From $59/month",
          features: ["Audience targeting", "Content personalization", "Campaign optimization", "Multi-channel orchestration"]
        }
      ]
    },
    {
      title: "Advanced AI & Machine Learning",
      description: "Cutting-edge AI solutions that drive innovation and growth",
      color: "from-purple-500 to-pink-600",
      services: [
        {
          name: "AI Business Intelligence",
          description: "Advanced analytics and ML insights for data-driven decisions",
          href: "/services/ai-business-intelligence",
          icon: Brain,
          price: "From $99/month",
          features: ["Predictive analytics", "Real-time insights", "Custom dashboards", "ML model training"]
        },
        {
          name: "AI Sales Copilot",
          description: "Intelligent sales optimization and lead qualification",
          href: "/services/ai-sales-copilot",
          icon: Users,
          price: "From $89/month",
          features: ["Lead scoring", "Sales forecasting", "Pipeline optimization", "Performance analytics"]
        },
        {
          name: "AI Compliance Assistant",
          description: "Automated regulatory compliance and risk management",
          href: "/services/ai-compliance-assistant",
          icon: Shield,
          price: "From $129/month",
          features: ["Regulatory monitoring", "Risk assessment", "Audit trails", "Compliance reporting"]
        }
      ]
    },
    {
      title: "Cloud & Infrastructure Solutions",
      description: "Scalable cloud infrastructure and DevOps automation",
      color: "from-green-500 to-emerald-600",
      services: [
        {
          name: "Cloud DevOps",
          description: "Infrastructure automation and scaling for modern applications",
          href: "/services/cloud-devops",
          icon: Cloud,
          price: "From $149/month",
          features: ["CI/CD pipelines", "Infrastructure as code", "Auto-scaling", "Monitoring & alerting"]
        },
        {
          name: "IT Infrastructure",
          description: "Enterprise infrastructure solutions and consulting",
          href: "/services/it-infrastructure",
          icon: Server,
          price: "From $199/month",
          features: ["Architecture design", "Performance optimization", "Security hardening", "24/7 support"]
        },
        {
          name: "FinOps Advisor",
          description: "Cloud cost optimization and financial operations",
          href: "/services/finops-advisor",
          icon: DollarSign,
          price: "From $79/month",
          features: ["Cost analysis", "Optimization recommendations", "Budget management", "ROI tracking"]
        }
      ]
    },
    {
      title: "Cybersecurity & Privacy",
      description: "Advanced security solutions for the digital age",
      color: "from-red-500 to-orange-600",
      services: [
        {
          name: "Zero Trust Network Access",
          description: "Modern security architecture for distributed workforces",
          href: "/services/zero-trust-network-access",
          icon: Lock,
          price: "From $159/month",
          features: ["Identity verification", "Access control", "Threat detection", "Compliance support"]
        },
        {
          name: "Security Headers & CSP",
          description: "Web security hardening and content security policies",
          href: "/services/security-headers-csp",
          icon: Shield,
          price: "From $49/month",
          features: ["Security headers", "CSP implementation", "Vulnerability scanning", "Security monitoring"]
        },
        {
          name: "DSR Privacy Portal",
          description: "GDPR/CCPA compliance and data subject rights",
          href: "/services/dsr-portal",
          icon: Shield,
          price: "From $89/month",
          features: ["Data subject requests", "Consent management", "Privacy compliance", "Audit trails"]
        }
      ]
    },
    {
      title: "Emerging Technologies",
      description: "Next-generation solutions for the future",
      color: "from-indigo-500 to-purple-600",
      services: [
        {
          name: "Quantum Computing",
          description: "Next-generation computational power and solutions",
          href: "/services/quantum-computing",
          icon: Atom,
          price: "From $299/month",
          features: ["Quantum algorithms", "Optimization problems", "Cryptography", "Research support"]
        },
        {
          name: "IoT Edge Computing",
          description: "Smart device networks and edge intelligence",
          href: "/services/iot-edge-computing",
          icon: Network,
          price: "From $179/month",
          features: ["Device management", "Edge analytics", "Real-time processing", "Scalable infrastructure"]
        },
        {
          name: "Digital Twin",
          description: "Virtual system replicas and simulation",
          href: "/services/digital-twin",
          icon: Eye,
          price: "From $249/month",
          features: ["3D modeling", "Real-time simulation", "Predictive maintenance", "Performance optimization"]
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "300% Higher ROI",
      description: "AI-powered solutions deliver measurable business impact"
    },
    {
      icon: Clock,
      title: "80% Time Savings",
      description: "Automate repetitive tasks and focus on what matters"
    },
    {
      icon: Target,
      title: "95% Accuracy",
      description: "Machine learning models improve performance over time"
    },
    {
      icon: Heart,
      title: "24/7 Availability",
      description: "AI solutions work around the clock without breaks"
    }
  ];

  return (
    <>
      <SEO 
        title="Innovative Services Showcase 2025 - Zion Tech Group"
        description="Discover our comprehensive suite of AI-powered business solutions, cloud infrastructure, cybersecurity, and emerging technology services designed to transform your business."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-400 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Innovative Services Showcase 2025
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                  Transform Your Business
                </span>
                <br />
                <span className="text-white">With AI-Powered Innovation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our comprehensive suite of cutting-edge AI services, cloud solutions, cybersecurity, 
                and emerging technologies designed to revolutionize your business operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Explore Services
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our innovative solutions deliver measurable results and transform how you do business
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Categories */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From AI-powered business solutions to cutting-edge emerging technologies
              </p>
            </motion.div>

            <div className="space-y-16">
              {serviceCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                >
                  <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-white mb-4">{category.title}</h3>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">{category.description}</p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.services.map((service, serviceIndex) => (
                      <motion.div
                        key={serviceIndex}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                        className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-2">{service.name}</h4>
                        <p className="text-gray-300 mb-4">{service.description}</p>
                        
                        <div className="mb-4">
                          <div className="text-cyan-400 font-semibold mb-2">{service.price}</div>
                          <ul className="space-y-1">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                                <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link
                          to={service.href}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our innovative solutions to drive growth and success
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InnovativeServicesShowcase2025;