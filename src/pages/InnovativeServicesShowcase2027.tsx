import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Truck, 
  Heart, 
  Shield, 
  Users, 
  Clock, 
  DollarSign,
  CheckCircle,
  Star,
  ArrowRight,
  MapPin,
  BarChart3,
  Cpu,
  Database,
  Cloud,
  Lock,
  Activity,
  Phone,
  Mail,
  TrendingUp,
  Target,
  Zap,
  Globe,
  Building2,
  Rocket,
  Lightbulb,
  Network,
  Server,
  Monitor,
  Smartphone,
  Wifi,
  Satellite,
  Atom,
  Flask,
  Microscope,
  Beaker,
  TestTube,
  Dna,
  Pill,
  Stethoscope,
  Eye,
  Car,
  Plane,
  Ship,
  Train,
  Factory,
  Warehouse,
  Store,
  Bank,
  Building,
  Leaf,
  Gamepad2,
  MessageCircle,
  Settings,
  Cog,
  Palette,
  Menu,
  X,
  Video,
  Calendar,
  UserCheck,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserHeart,
  UserStar,
  UserCheckCircle
} from 'lucide-react';

const InnovativeServicesShowcase2027 = () => {
  const serviceCategories = [
    {
      title: "AI Autonomous Platforms",
      description: "Cutting-edge autonomous AI systems that revolutionize business operations",
      services: [
        {
          name: "AI Autonomous Logistics Platform",
          description: "Revolutionize supply chain operations with AI-powered route optimization, predictive analytics, and autonomous fleet management.",
          icon: <Truck className="w-8 h-8 text-blue-500" />,
          link: "/services/ai-autonomous-logistics-platform",
          price: "From $299/month",
          features: ["Route Optimization", "Predictive Analytics", "Real-time Tracking", "Blockchain Security"]
        },
        {
          name: "AI Autonomous Financial Advisor",
          description: "Transform wealth management with AI-driven investment analysis, risk management, and personalized financial planning.",
          icon: <Brain className="w-8 h-8 text-green-500" />,
          link: "/services/ai-autonomous-financial-advisor-platform",
          price: "From $199/month",
          features: ["Investment Analysis", "Risk Management", "Portfolio Optimization", "24/7 Monitoring"]
        },
        {
          name: "AI Autonomous Healthcare Diagnostics",
          description: "Revolutionize medical diagnostics with AI-powered imaging analysis, predictive health analytics, and clinical decision support.",
          icon: <Heart className="w-8 h-8 text-red-500" />,
          link: "/services/ai-autonomous-healthcare-diagnostics-platform",
          price: "From $399/month",
          features: ["Medical Imaging", "Predictive Analytics", "Clinical Support", "Patient Monitoring"]
        }
      ]
    },
    {
      title: "AI-Powered Business Solutions",
      description: "Intelligent automation and optimization for modern enterprises",
      services: [
        {
          name: "AI Business Intelligence Dashboard",
          description: "Comprehensive business analytics with real-time insights, predictive modeling, and automated reporting.",
          icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
          link: "/services/ai-business-intelligence-dashboard",
          price: "From $199/month",
          features: ["Real-time Analytics", "Predictive Modeling", "Automated Reporting", "Custom Dashboards"]
        },
        {
          name: "AI Customer Support Automation",
          description: "Intelligent customer service with AI-powered chatbots, sentiment analysis, and automated ticket resolution.",
          icon: <MessageCircle className="w-8 h-8 text-cyan-500" />,
          link: "/services/ai-customer-support-automation",
          price: "From $149/month",
          features: ["AI Chatbots", "Sentiment Analysis", "Ticket Automation", "24/7 Support"]
        },
        {
          name: "AI Project Management Platform",
          description: "Smart project coordination with AI-driven task optimization, resource allocation, and risk prediction.",
          icon: <Target className="w-8 h-8 text-orange-500" />,
          link: "/services/ai-project-management-platform",
          price: "From $179/month",
          features: ["Task Optimization", "Resource Allocation", "Risk Prediction", "Team Collaboration"]
        }
      ]
    },
    {
      title: "Advanced IT & Infrastructure",
      description: "Next-generation technology solutions for enterprise infrastructure",
      services: [
        {
          name: "Quantum Edge Computing Solutions",
          description: "Revolutionary quantum computing integration with edge computing for unprecedented processing power.",
          icon: <Atom className="w-8 h-8 text-indigo-500" />,
          link: "/services/quantum-edge-computing-solutions",
          price: "From $999/month",
          features: ["Quantum Processing", "Edge Computing", "Hybrid Architecture", "Advanced Security"]
        },
        {
          name: "AI Cybersecurity Intelligence Platform",
          description: "Advanced threat detection and response with AI-powered security analytics and automated incident response.",
          icon: <Shield className="w-8 h-8 text-red-500" />,
          link: "/services/ai-cybersecurity-intelligence-platform",
          price: "From $399/month",
          features: ["Threat Detection", "AI Analytics", "Automated Response", "24/7 Monitoring"]
        },
        {
          name: "Blockchain Enterprise Solutions",
          description: "Secure, scalable blockchain infrastructure for enterprise applications and digital asset management.",
          icon: <Network className="w-8 h-8 text-green-500" />,
          link: "/services/blockchain-enterprise-solutions",
          price: "From $299/month",
          features: ["Smart Contracts", "Asset Management", "Supply Chain", "Digital Identity"]
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "Increased Efficiency",
      description: "AI automation reduces manual tasks by 60-80% and improves operational efficiency across all business functions."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Enhanced Security",
      description: "Advanced AI algorithms provide real-time threat detection and automated security responses for comprehensive protection."
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: "24/7 Operations",
      description: "Autonomous AI systems operate continuously, providing round-the-clock monitoring and instant response capabilities."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Personalized Solutions",
      description: "AI adapts to your specific business needs, providing customized recommendations and automated workflows."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Innovative Services 2027
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Revolutionary
              <span className="text-zion-cyan"> AI Services</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Discover our cutting-edge AI-powered solutions that are transforming industries and revolutionizing business operations worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-cyan/90 transition-colors flex items-center justify-center">
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/10 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Experience unprecedented efficiency, security, and innovation with our AI-powered solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 px-4 sm:px-6 lg:px-8 ${categoryIndex % 2 === 0 ? '' : 'bg-slate-800/30'}`}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {category.title}
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                {category.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <motion.div
                  key={serviceIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-zion-cyan/50 transition-colors"
                >
                  <div className="flex items-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                  <p className="text-zion-slate-light mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-zion-cyan font-semibold">{service.price}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={service.link}
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-cyan/90 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using our AI services to revolutionize their operations and achieve unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-cyan/90 transition-colors">
                Get Started Today
              </button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/10 transition-colors">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Contact */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-zion-slate-light mb-4">
            Questions about our innovative AI services?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-zion-cyan">
              <Phone className="w-4 h-4 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center text-zion-cyan">
              <Mail className="w-4 h-4 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center text-zion-cyan">
              <MapPin className="w-4 h-4 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2027;
