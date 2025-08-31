import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Atom,
  Cloud,
  Shield,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Target,
  Rocket,
  Lightbulb,
  Code,
  Server,
  Network,
  Activity,
  FileText,
  MessageCircle,
  Search,
  Settings,
  Palette,
  Phone,
  Mail,
  MapPin,
  BarChart3,
  Zap,
  Workflow,
  Eye,
  Globe,
  Cpu,
  Database,
  Lock,
  Microscope,
  CircuitBoard,
  Building,
  ShoppingCart,
  Home,
  PieChart,
  Calculator,
  Receipt,
  CreditCard,
  PiggyBank,
  TrendingDown,
  ArrowUpDown,
  RefreshCw,
  AlertCircle,
  Info,
  HelpCircle,
  FileCheck,
  Scale,
  Gavel,
  BookOpen,
  Clipboard,
  Truck,
  Package,
  Route,
  Warehouse,
  Factory,
  Ship,
  Plane,
  Train,
  Car,
  Bike,
  Motorcycle,
  Bus
} from 'lucide-react';

const InnovativeServicesShowcase2025: React.FC = () => {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions for enterprise transformation",
      services: [
        {
          name: "AI Enterprise Intelligence Platform",
          description: "Comprehensive AI-powered business intelligence and analytics",
          href: "/services/ai-enterprise-intelligence-platform",
          icon: Brain,
          price: "$2,999/month",
          features: ["Predictive Analytics", "Business Intelligence", "Enterprise Security", "Process Automation"],
          benefits: ["30% efficiency improvement", "Real-time insights", "AI-powered decision making"]
        },
        {
          name: "AI Quantum Neural Network Platform",
          description: "Revolutionary quantum computing with AI integration",
          href: "/services/ai-quantum-neural-network-platform",
          icon: Atom,
          price: "$9,999/month",
          features: ["Quantum Neural Networks", "AI Quantum Algorithms", "Quantum Circuit Design", "Quantum Simulation"],
          benefits: ["1000x speedup", "Quantum advantage", "Exponential processing power"]
        },
        {
          name: "AI Sales Copilot",
          description: "Intelligent sales automation and lead management",
          href: "/services/ai-sales-copilot",
          icon: TrendingUp,
          price: "$299/month",
          features: ["AI Lead Scoring", "Email Automation", "Prospect Research", "Sales Analytics"],
          benefits: ["35% conversion increase", "50% faster lead qualification", "400% ROI"]
        }
      ]
    },
    {
      title: "Customer Success & Support",
      description: "AI-powered customer experience and support automation solutions",
      services: [
        {
          name: "AI Customer Success Automation",
          description: "Intelligent automation for customer success operations",
          href: "/services/ai-customer-success-automation",
          icon: Users,
          price: "$299/month",
          features: ["AI-Powered Insights", "Automated Workflows", "Performance Metrics", "Proactive Communication"],
          benefits: ["40% retention increase", "60% task reduction", "35% satisfaction improvement"]
        },
        {
          name: "AI Customer Support Automation",
          description: "Advanced AI-powered customer support and helpdesk automation",
          href: "/services/ai-customer-support-automation",
          icon: MessageCircle,
          price: "$199/month",
          features: ["24/7 Support", "Intelligent Routing", "Knowledge Base", "Sentiment Analysis"],
          benefits: ["70% faster resolution", "90% customer satisfaction", "50% cost reduction"]
        }
      ]
    },
    {
      title: "Supply Chain & Operations",
      description: "AI-powered optimization for supply chain and operational efficiency",
      services: [
        {
          name: "AI Supply Chain Optimization Enhanced",
          description: "Advanced AI-powered supply chain optimization and management",
          href: "/services/ai-supply-chain-optimization-enhanced",
          icon: Truck,
          price: "$499/month",
          features: ["Demand Forecasting", "Route Optimization", "Inventory Management", "Risk Management"],
          benefits: ["25-40% cost reduction", "95% delivery accuracy", "30% inventory cost reduction"]
        },
        {
          name: "AI Workflow Orchestrator",
          description: "Intelligent workflow automation and process optimization",
          href: "/services/ai-workflow-orchestrator",
          icon: Workflow,
          price: "$399/month",
          features: ["Process Automation", "Workflow Design", "Performance Monitoring", "Optimization Engine"],
          benefits: ["60% process efficiency", "45% time savings", "Real-time optimization"]
        }
      ]
    },
    {
      title: "Financial & Risk Management",
      description: "AI-powered financial services and risk management solutions",
      services: [
        {
          name: "AI Financial Risk Management Enhanced",
          description: "Comprehensive AI-powered financial risk assessment and monitoring",
          href: "/services/ai-financial-risk-management-enhanced",
          icon: Shield,
          price: "$399/month",
          features: ["Risk Assessment", "Real-time Monitoring", "Predictive Analytics", "Compliance Tracking"],
          benefits: ["40-60% loss reduction", "85% accuracy improvement", "75% compliance improvement"]
        },
        {
          name: "AI Financial Trading Risk Management",
          description: "Advanced risk management for financial trading operations",
          href: "/services/ai-financial-trading-risk-management",
          icon: TrendingUp,
          price: "$599/month",
          features: ["Portfolio Risk", "Market Risk", "Credit Risk", "Operational Risk"],
          benefits: ["30% risk-adjusted returns", "70% monitoring reduction", "90% compliance improvement"]
        }
      ]
    },
    {
      title: "Business Intelligence & Analytics",
      description: "AI-powered business intelligence and data analytics platforms",
      services: [
        {
          name: "AI Business Intelligence Dashboard",
          description: "Comprehensive business intelligence and analytics dashboard",
          href: "/services/ai-business-intelligence-dashboard",
          icon: BarChart3,
          price: "$399/month",
          features: ["Real-time Analytics", "Custom Dashboards", "Data Visualization", "Predictive Insights"],
          benefits: ["50% faster insights", "Real-time decision making", "Customizable reporting"]
        },
        {
          name: "AI Data Analytics Platform",
          description: "Advanced AI-powered data analytics and insights platform",
          href: "/services/ai-data-analytics-platform",
          icon: Database,
          price: "$599/month",
          features: ["Big Data Processing", "Machine Learning", "Predictive Analytics", "Data Mining"],
          benefits: ["100x faster processing", "90% accuracy improvement", "Real-time insights"]
        }
      ]
    },
    {
      title: "Project & Process Management",
      description: "AI-powered project management and process optimization solutions",
      services: [
        {
          name: "AI Project Management Platform",
          description: "Intelligent project management with AI-powered insights",
          href: "/services/ai-project-management-platform",
          icon: Clock,
          price: "$299/month",
          features: ["Task Automation", "Resource Optimization", "Risk Prediction", "Performance Analytics"],
          benefits: ["40% project efficiency", "30% time savings", "25% cost reduction"]
        },
        {
          name: "AI Predictive Maintenance",
          description: "AI-powered predictive maintenance and asset optimization",
          href: "/services/ai-predictive-maintenance",
          icon: Activity,
          price: "$399/month",
          features: ["Equipment Monitoring", "Failure Prediction", "Maintenance Scheduling", "Cost Optimization"],
          benefits: ["50% downtime reduction", "30% maintenance cost reduction", "90% failure prediction accuracy"]
        }
      ]
    },
    {
      title: "Marketing & Sales Automation",
      description: "AI-powered marketing and sales automation solutions",
      services: [
        {
          name: "AI Marketing Automation Platform",
          description: "Comprehensive AI-powered marketing automation and optimization",
          href: "/services/ai-marketing-automation-platform",
          icon: TrendingUp,
          price: "$299/month",
          features: ["Campaign Automation", "Lead Scoring", "Personalization", "Performance Analytics"],
          benefits: ["45% conversion increase", "60% time savings", "35% ROI improvement"]
        },
        {
          name: "AI HR Platform",
          description: "AI-powered human resources and talent management platform",
          href: "/services/ai-hr-platform",
          icon: Users,
          price: "$199/month",
          features: ["Recruitment AI", "Performance Analytics", "Employee Engagement", "Talent Development"],
          benefits: ["50% faster hiring", "40% retention improvement", "35% productivity increase"]
        }
      ]
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/10 border border-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Innovation Showcase 2025
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovative AI Services
              <span className="text-zion-cyan"> Showcase 2025</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Discover our comprehensive collection of AI-powered micro SAAS services, IT solutions, 
              and innovative technologies designed to transform your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-slate-900 font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {category.title}
                </h2>
                <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg p-6 hover:border-zion-cyan/50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-zion-cyan/10 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-zion-cyan" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-zion-cyan">{service.price}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                    <p className="text-zion-slate-light mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-zion-slate-light flex items-center">
                            <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-zion-cyan mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="text-sm text-zion-slate-light flex items-center">
                            <Star className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      to={service.href}
                      className="w-full py-3 px-6 bg-zion-cyan text-slate-900 font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors text-center block"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
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
            <p className="text-xl text-zion-slate-light mb-8">
              Choose from our comprehensive suite of AI-powered services and start your digital transformation journey today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-slate-900 font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center space-y-2">
              <Phone className="w-6 h-6 text-zion-cyan" />
              <span className="text-white">+1 302 464 0950</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Mail className="w-6 h-6 text-zion-cyan" />
              <span className="text-white">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="w-6 h-6 text-zion-cyan" />
              <span className="text-white text-center">364 E Main St STE 1008<br />Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2025;