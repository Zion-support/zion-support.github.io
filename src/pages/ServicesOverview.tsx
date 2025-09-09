import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Atom, 
  Link as LinkIcon, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Users, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Star,
  Rocket,
  Cpu,
  Network,
  Lock,
  Eye,
  Building2,
  Smartphone,
  Cloud,
  Code,
  BarChart3,
  Palette,
  Camera,
  MessageSquare,
  FileText,
  ShoppingCart,
  CreditCard,
  Calendar,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

const ServicesOverview: React.FC = () => {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions",
      color: "from-cyan-500 to-blue-600",
      borderColor: "border-cyan-500",
      services: [
        {
          name: "AI Workflow Automation",
          description: "Intelligent process automation with machine learning",
          price: "From $299/month",
          features: ["Process mapping", "Smart automation", "Cross-platform integration", "Intelligent chatbots"],
          link: "/services/ai-workflow-automation",
          icon: Brain,
          popular: true
        },
        {
          name: "AI Content Generation",
          description: "AI-powered content creation and optimization",
          price: "From $199/month",
          features: ["Text generation", "Image creation", "SEO optimization", "Multi-language support"],
          link: "/services/ai-content-generation",
          icon: FileText,
          popular: false
        },
        {
          name: "AI Analytics Platform",
          description: "Advanced analytics powered by artificial intelligence",
          price: "From $399/month",
          features: ["Predictive analytics", "Real-time insights", "Custom dashboards", "Data visualization"],
          link: "/services/ai-analytics",
          icon: BarChart3,
          popular: false
        }
      ]
    },
    {
      title: "Quantum Computing",
      description: "Next-generation computational power",
      color: "from-purple-500 to-cyan-600",
      borderColor: "border-purple-500",
      services: [
        {
          name: "Quantum Data Analytics",
          description: "Revolutionary data processing with quantum algorithms",
          price: "From $1,299/month",
          features: ["Quantum ML", "Database optimization", "AI models", "Data encryption"],
          link: "/services/quantum-data-analytics",
          icon: Atom,
          popular: true
        },
        {
          name: "Quantum Financial Modeling",
          description: "Quantum-powered risk assessment and optimization",
          price: "From $2,499/month",
          features: ["Portfolio optimization", "Risk modeling", "Trading algorithms", "Market analysis"],
          link: "/services/quantum-financial",
          icon: TrendingUp,
          popular: false
        }
      ]
    },
    {
      title: "Blockchain & Web3",
      description: "Decentralized technology solutions",
      color: "from-green-500 to-emerald-600",
      borderColor: "border-green-500",
      services: [
        {
          name: "Blockchain Infrastructure",
          description: "Enterprise-grade blockchain development and deployment",
          price: "From $499/month",
          features: ["Smart contracts", "DeFi infrastructure", "Database solutions", "Layer 2 scaling"],
          link: "/services/blockchain-infrastructure",
          icon: LinkIcon,
          popular: true
        },
        {
          name: "NFT Marketplace Platform",
          description: "Complete NFT creation and trading platform",
          price: "From $799/month",
          features: ["NFT minting", "Marketplace", "Royalty system", "Multi-chain support"],
          link: "/services/nft-marketplace",
          icon: Palette,
          popular: false
        }
      ]
    },
    {
      title: "Cybersecurity & Privacy",
      description: "Advanced security and compliance solutions",
      color: "from-red-500 to-orange-600",
      borderColor: "border-red-500",
      services: [
        {
          name: "Zero Trust Security",
          description: "Comprehensive zero trust architecture implementation",
          price: "From $599/month",
          features: ["Identity verification", "Access control", "Network security", "Threat detection"],
          link: "/services/zero-trust-security",
          icon: Shield,
          popular: false
        },
        {
          name: "SOC 2 Compliance Automation",
          description: "Automated compliance and security monitoring",
          price: "From $899/month",
          features: ["Compliance automation", "Security monitoring", "Audit preparation", "Risk assessment"],
          link: "/services/soc2-compliance",
          icon: Lock,
          popular: true
        }
      ]
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable infrastructure and development",
      color: "from-blue-500 to-indigo-600",
      borderColor: "border-blue-500",
      services: [
        {
          name: "Cloud Migration Services",
          description: "Seamless cloud infrastructure migration",
          price: "From $1,999/month",
          features: ["AWS/Azure migration", "Cost optimization", "Performance tuning", "Security setup"],
          link: "/services/cloud-migration",
          icon: Cloud,
          popular: false
        },
        {
          name: "DevOps Automation",
          description: "Complete CI/CD pipeline automation",
          price: "From $699/month",
          features: ["CI/CD pipelines", "Infrastructure as code", "Monitoring", "Deployment automation"],
          link: "/services/devops-automation",
          icon: Code,
          popular: false
        }
      ]
    },
    {
      title: "Digital Transformation",
      description: "Business modernization and innovation",
      color: "from-pink-500 to-rose-600",
      borderColor: "border-pink-500",
      services: [
        {
          name: "Digital Marketing Automation",
          description: "AI-powered marketing campaign automation",
          price: "From $399/month",
          features: ["Campaign automation", "Lead scoring", "Analytics", "Multi-channel marketing"],
          link: "/services/digital-marketing",
          icon: MessageSquare,
          popular: false
        },
        {
          name: "E-commerce Solutions",
          description: "Modern e-commerce platform development",
          price: "From $599/month",
          features: ["Online store", "Payment processing", "Inventory management", "Customer analytics"],
          link: "/services/ecommerce",
          icon: ShoppingCart,
          popular: false
        }
      ]
    }
  ];

  const stats = [
    { value: "50+", label: "Micro SAAS Services", description: "Comprehensive solution portfolio" },
    { value: "99.9%", label: "Uptime Guarantee", description: "Reliable service delivery" },
    { value: "24/7", label: "Expert Support", description: "Round-the-clock assistance" },
    { value: "500+", label: "Global Clients", description: "Trusted worldwide" }
  ];

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+1 302 464 0950", href: "tel:+13024640950" },
    { icon: Mail, label: "Email", value: "kleber@ziontechgroup.com", href: "mailto:kleber@ziontechgroup.com" },
    { icon: MapPin, label: "Address", value: "364 E Main St STE 1008, Middletown DE 19709", href: "#" },
    { icon: Globe, label: "Website", value: "ziontechgroup.com", href: "https://ziontechgroup.com" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-green-500/10 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Complete Solution Portfolio
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-green-600 bg-clip-text text-transparent">
              Our Services
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive portfolio of innovative micro SAAS services, IT solutions, and AI-powered technologies
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of innovative solutions across multiple technology domains
            </p>
          </div>
          
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-12">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:scale-105 group ${
                        service.popular ? `border-${category.borderColor.split('-')[1]}-500` : 'border-slate-700'
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {service.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className={`bg-gradient-to-r ${category.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                            Popular
                          </span>
                        </div>
                      )}
                      
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h4 className="text-xl font-semibold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-400 mb-4">{service.description}</p>
                      
                      <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                      
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <Link 
                        to={service.link}
                        className={`inline-flex items-center justify-center w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r ${category.color} text-white hover:scale-105`}
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

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact our team to discuss your project requirements and get a personalized solution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{contact.label}</div>
                      <a 
                        href={contact.href} 
                        className="text-white hover:text-cyan-400 transition-colors duration-200"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Why Choose Zion Tech Group?</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  Industry-leading expertise in emerging technologies
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  Proven track record with 500+ global clients
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  Custom solutions tailored to your business needs
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  24/7 support and maintenance services
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesOverview;