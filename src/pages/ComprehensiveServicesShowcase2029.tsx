import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Shield,
  Heart,
  TrendingUp,
  BarChart3,
  Zap,
  Globe,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Target,
  Lightbulb,
  Database,
  Cpu,
  Network,
  Eye,
  Activity,
  Settings,
  Play,
  Phone,
  Mail,
  MapPin,
  Server,
  Wifi,
  AlertCircle,
  CheckSquare,
  XCircle,
  Info,
  HelpCircle,
  ExternalLink,
  Download,
  Upload,
  RefreshCw,
  Search,
  Filter,
  EyeOff,
  EyeOn,
  Lock,
  Unlock,
  Key,
  Fingerprint,
  Scan,
  Bug,
  Virus,
  Fire,
  Water,
  Earth,
  Wind,
  Lightning,
  Thunder,
  Cloud,
  Sun,
  Moon,
  Star as StarIcon,
  Shield as ShieldIcon,
  Sword,
  Armor,
  Helmet,
  Boots,
  Gloves,
  Belt,
  Cape,
  Bow,
  Arrow,
  Crossbow,
  Dagger,
  Axe,
  Hammer,
  Mace,
  Spear,
  Trident,
  Staff,
  Wand,
  Book,
  Scroll,
  Potion,
  Ring,
  Necklace,
  Bracelet,
  Earring,
  Crown,
  Tiara,
  Scepter,
  Orb,
  Crystal,
  Gem,
  Diamond,
  Ruby,
  Emerald,
  Sapphire,
  Pearl,
  Opal,
  Amethyst,
  Topaz,
  Garnet,
  Peridot,
  Aquamarine,
  Citrine,
  Moonstone,
  Sunstone,
  Labradorite,
  Obsidian,
  Onyx,
  Jasper,
  Agate,
  Chalcedony,
  Carnelian,
  Sardonyx,
  Chrysoprase,
  Bloodstone,
  Heliotrope,
  Plasma,
  Serpentine,
  Talc,
  Gypsum,
  Calcite,
  Fluorite,
  Apatite,
  Orthoclase,
  Quartz,
  Tourmaline,
  Beryl,
  Corundum,
  Spinel,
  Chrysoberyl,
  Zircon,
  Staurolite,
  Andalusite,
  Sillimanite,
  Kyanite,
  Topaz as TopazIcon,
  Garnet as GarnetIcon,
  Peridot as PeridotIcon,
  Aquamarine as AquamarineIcon,
  Citrine as CitrineIcon,
  Moonstone as MoonstoneIcon,
  Sunstone as SunstoneIcon,
  Labradorite as LabradoriteIcon,
  Obsidian as ObsidianIcon,
  Onyx as OnyxIcon,
  Jasper as JasperIcon,
  Agate as AgateIcon,
  Chalcedony as ChalcedonyIcon,
  Carnelian as CarnelianIcon,
  Sardonyx as SardonyxIcon,
  Chrysoprase as ChrysopraseIcon,
  Bloodstone as BloodstoneIcon,
  Heliotrope as HeliotropeIcon,
  Plasma as PlasmaIcon,
  Serpentine as SerpentineIcon,
  Talc as TalcIcon,
  Gypsum as GypsumIcon,
  Calcite as CalciteIcon,
  Fluorite as FluoriteIcon,
  Apatite as ApatiteIcon,
  Orthoclase as OrthoclaseIcon,
  Quartz as QuartzIcon,
  Tourmaline as TourmalineIcon,
  Beryl as BerylIcon,
  Corundum as CorundumIcon,
  Spinel as SpinelIcon,
  Chrysoberyl as ChrysoberylIcon,
  Zircon as ZirconIcon,
  Staurolite as StauroliteIcon,
  Andalusite as AndalusiteIcon,
  Sillimanite as SillimaniteIcon,
  Kyanite as KyaniteIcon
} from 'lucide-react';

const ComprehensiveServicesShowcase2029: React.FC = () => {
  const serviceCategories = [
    {
      title: "AI Business Intelligence & Analytics",
      description: "Transform your business with intelligent data insights and predictive analytics",
      icon: Brain,
      color: "from-blue-600 to-indigo-600",
      services: [
        {
          name: "AI Autonomous Business Intelligence Platform",
          description: "Self-learning AI platform for real-time business insights and automated reporting",
          href: "/services/ai-autonomous-business-intelligence-platform",
          price: "From $299/month",
          features: ["Autonomous AI Analytics", "Real-time BI", "Predictive Analytics", "Automated Reporting"]
        },
        {
          name: "AI Customer Experience Analytics Platform",
          description: "Comprehensive customer journey analysis with AI-powered insights",
          href: "/services/ai-customer-experience-analytics-platform",
          price: "From $199/month",
          features: ["Customer Journey Mapping", "Sentiment Analysis", "Behavioral Insights", "ROI Optimization"]
        },
        {
          name: "AI Business Intelligence Platform",
          description: "Advanced analytics and reporting for data-driven decision making",
          href: "/services/ai-business-intelligence",
          price: "From $149/month",
          features: ["Data Visualization", "Custom Dashboards", "Real-time Analytics", "Performance Metrics"]
        }
      ]
    },
    {
      title: "AI Cybersecurity & Security Operations",
      description: "Protect your business with next-generation AI-powered security solutions",
      icon: Shield,
      color: "from-red-600 to-orange-600",
      services: [
        {
          name: "AI Cybersecurity Operations Center",
          description: "24/7 AI-powered security monitoring and threat response",
          href: "/services/ai-cybersecurity-operations-center",
          price: "From $499/month",
          features: ["AI Threat Detection", "24/7 Monitoring", "Zero-Day Prevention", "Automated Response"]
        },
        {
          name: "AI Autonomous Cybersecurity Platform",
          description: "Self-defending systems with autonomous threat detection and response",
          href: "/services/ai-autonomous-cybersecurity-platform",
          price: "From $399/month",
          features: ["Autonomous Defense", "Threat Intelligence", "Compliance Monitoring", "Incident Response"]
        },
        {
          name: "AI Cybersecurity Threat Intelligence",
          description: "Advanced threat detection and intelligence gathering",
          href: "/services/ai-cybersecurity-threat-intelligence",
          price: "From $299/month",
          features: ["Threat Hunting", "Risk Assessment", "Vulnerability Management", "Security Analytics"]
        }
      ]
    },
    {
      title: "AI Healthcare & Life Sciences",
      description: "Revolutionize healthcare delivery with AI-powered analytics and diagnostics",
      icon: Heart,
      color: "from-green-600 to-emerald-600",
      services: [
        {
          name: "AI Healthcare Analytics Platform",
          description: "Comprehensive healthcare analytics with predictive insights",
          href: "/services/ai-healthcare-analytics-platform",
          price: "From $399/month",
          features: ["AI Diagnosis Support", "Patient Monitoring", "Predictive Analytics", "HIPAA Compliance"]
        },
        {
          name: "AI Autonomous Healthcare Diagnostics",
          description: "AI-powered diagnostic tools for improved patient outcomes",
          href: "/services/ai-autonomous-healthcare-diagnostics",
          price: "From $299/month",
          features: ["Diagnostic AI", "Treatment Optimization", "Clinical Decision Support", "Research Tools"]
        },
        {
          name: "AI Healthcare Predictive Analytics",
          description: "Predictive models for disease prevention and treatment optimization",
          href: "/services/ai-healthcare-predictive-analytics",
          price: "From $199/month",
          features: ["Risk Assessment", "Outcome Prediction", "Resource Optimization", "Population Health"]
        }
      ]
    },
    {
      title: "AI Financial Services & Risk Management",
      description: "Optimize financial operations with AI-powered risk assessment and trading",
      icon: TrendingUp,
      color: "from-purple-600 to-pink-600",
      services: [
        {
          name: "AI Financial Risk Management Platform",
          description: "Comprehensive risk assessment and management with AI insights",
          href: "/services/ai-financial-risk-management-platform",
          price: "From $599/month",
          features: ["Risk Assessment", "Portfolio Optimization", "Compliance Monitoring", "Real-time Alerts"]
        },
        {
          name: "AI Financial Trading Platform",
          description: "AI-powered trading algorithms and market analysis",
          href: "/services/ai-financial-trading-platform",
          price: "From $499/month",
          features: ["Algorithmic Trading", "Market Analysis", "Risk Management", "Performance Analytics"]
        },
        {
          name: "AI Autonomous Financial Advisor",
          description: "Intelligent financial planning and investment recommendations",
          href: "/services/ai-autonomous-financial-advisor",
          price: "From $199/month",
          features: ["Financial Planning", "Investment Advice", "Portfolio Management", "Tax Optimization"]
        }
      ]
    },
    {
      title: "AI Supply Chain & Logistics",
      description: "Optimize your supply chain with intelligent automation and predictive analytics",
      icon: Globe,
      color: "from-teal-600 to-cyan-600",
      services: [
        {
          name: "AI Supply Chain Optimization Platform",
          description: "End-to-end supply chain optimization with AI insights",
          href: "/services/ai-supply-chain-optimization-platform",
          price: "From $399/month",
          features: ["Demand Forecasting", "Inventory Optimization", "Route Planning", "Cost Reduction"]
        },
        {
          name: "AI Autonomous Logistics Platform",
          description: "Intelligent logistics management and autonomous operations",
          href: "/services/ai-autonomous-logistics-platform",
          price: "From $299/month",
          features: ["Autonomous Operations", "Real-time Tracking", "Predictive Maintenance", "Efficiency Optimization"]
        },
        {
          name: "AI Supply Chain Risk Management",
          description: "Proactive risk identification and mitigation strategies",
          href: "/services/ai-supply-chain-risk-management",
          price: "From $199/month",
          features: ["Risk Assessment", "Disruption Prediction", "Contingency Planning", "Performance Monitoring"]
        }
      ]
    },
    {
      title: "AI Marketing & Customer Success",
      description: "Enhance customer engagement with AI-powered marketing and support solutions",
      icon: Users,
      color: "from-yellow-600 to-orange-600",
      services: [
        {
          name: "AI Content Marketing Studio",
          description: "AI-powered content creation and marketing optimization",
          href: "/services/ai-content-marketing-studio",
          price: "From $199/month",
          features: ["Content Generation", "SEO Optimization", "Performance Analytics", "Campaign Management"]
        },
        {
          name: "AI Customer Success Automation",
          description: "Automated customer success workflows and engagement",
          href: "/services/ai-customer-success-automation",
          price: "From $149/month",
          features: ["Customer Onboarding", "Success Tracking", "Automated Engagement", "Churn Prevention"]
        },
        {
          name: "AI-Powered SEO Platform",
          description: "Intelligent SEO optimization and performance tracking",
          href: "/services/ai-powered-seo",
          price: "From $99/month",
          features: ["Keyword Research", "Content Optimization", "Performance Tracking", "Competitive Analysis"]
        }
      ]
    },
    {
      title: "AI DevOps & Infrastructure",
      description: "Streamline development and operations with intelligent automation",
      icon: Cpu,
      color: "from-indigo-600 to-purple-600",
      services: [
        {
          name: "AI DevOps Automation Platform",
          description: "Intelligent automation for development and operations workflows",
          href: "/services/ai-devops-automation-platform",
          price: "From $299/month",
          features: ["CI/CD Automation", "Infrastructure Management", "Performance Monitoring", "Security Integration"]
        },
        {
          name: "AI Project Management Platform",
          description: "AI-powered project management and team collaboration",
          href: "/services/ai-project-management-platform",
          price: "From $199/month",
          features: ["Task Automation", "Resource Optimization", "Progress Tracking", "Risk Management"]
        },
        {
          name: "Cloud FinOps Optimizer",
          description: "Cost optimization and management for cloud infrastructure",
          href: "/services/cloud-finops-optimizer",
          price: "From $149/month",
          features: ["Cost Analysis", "Resource Optimization", "Budget Management", "Performance Monitoring"]
        }
      ]
    },
    {
      title: "Emerging Technologies & Innovation",
      description: "Explore cutting-edge technologies with AI integration",
      icon: Lightbulb,
      color: "from-pink-600 to-rose-600",
      services: [
        {
          name: "Quantum Edge Computing Solutions",
          description: "Next-generation computing with quantum and edge technologies",
          href: "/services/quantum-edge-computing-solutions",
          price: "From $799/month",
          features: ["Quantum Computing", "Edge Processing", "High Performance", "Low Latency"]
        },
        {
          name: "AI Space Technology Platform",
          description: "AI-powered solutions for space exploration and satellite operations",
          href: "/services/ai-space-technology-platform",
          price: "From $599/month",
          features: ["Satellite Operations", "Data Processing", "Mission Planning", "Earth Observation"]
        },
        {
          name: "AI Quantum Neural Network Platform",
          description: "Advanced neural networks with quantum computing capabilities",
          href: "/services/ai-quantum-neural-network-platform",
          price: "From $499/month",
          features: ["Quantum Neural Networks", "Advanced AI Models", "High Performance", "Research Tools"]
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Increased Efficiency",
      description: "AI automation reduces manual tasks by 60-80%, freeing your team to focus on strategic initiatives."
    },
    {
      icon: TrendingUp,
      title: "Better Decision Making",
      description: "Data-driven insights lead to 25-40% improvement in business outcomes and strategic decisions."
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "AI-powered security provides 99.9% threat detection and automated response capabilities."
    },
    {
      icon: Clock,
      title: "Faster Time to Market",
      description: "Streamlined processes and automation reduce development cycles by 30-50%."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Comprehensive AI Services Portfolio
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Comprehensive Services Showcase 2029
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Discover our complete portfolio of AI-powered services designed to transform every aspect of your business. 
              From business intelligence to cybersecurity, healthcare to finance - we have the solutions you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive AI services portfolio delivers measurable results across all business functions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete AI Services Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of AI-powered services organized by business function and industry.
            </p>
          </motion.div>

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mr-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-lg text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h4>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                      
                      <div className="mb-4">
                        <span className="text-lg font-bold text-blue-600">{service.price}</span>
                      </div>

                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Link
                        to={service.href}
                        className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
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
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose from our comprehensive portfolio of AI services and start your transformation journey today. 
              Our experts are ready to help you select the perfect solutions for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2029;