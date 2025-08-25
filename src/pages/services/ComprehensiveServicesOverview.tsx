import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Shield, 
  Heart, 
  Leaf, 
  Scale, 
  Truck, 
  TrendingUp, 
  Building, 
  GraduationCap, 
  Atom,
  Zap,
  Globe,
  Users,
  BarChart3,
  Target,
  Award,
  Workflow,
  MessageCircle,
  Link,
  Cpu,
  Eye,
  CheckCircle
} from 'lucide-react';

export default function ComprehensiveServicesOverview() {
  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      services: [
        {
          title: "AI Workflow Automation",
          description: "Transform business processes with AI-powered automation. Reduce manual tasks by 80%, increase efficiency by 60%, and achieve 45% cost savings.",
          price: "$299 - $2,499/month",
          features: ["Intelligent process discovery", "Smart decision making", "Real-time monitoring", "500+ integrations"],
          link: "/services/ai-workflow-automation",
          marketPrice: "$299 - $5,000/month",
          roi: "312% within 12 months"
        },
        {
          title: "AI Customer Experience Platform",
          description: "Deliver exceptional customer experiences with AI. Improve satisfaction by 85%, reduce support costs by 60%, and increase retention by 40%.",
          price: "$499 - $3,999/month",
          features: ["Intelligent chatbots", "Predictive analytics", "Personalized content", "Omnichannel management"],
          link: "/services/ai-customer-experience-platform",
          marketPrice: "$499 - $8,000/month",
          roi: "287% within 12 months"
        },
        {
          title: "AI Autonomous Systems",
          description: "Build intelligent autonomous systems that operate independently and adapt to changing conditions.",
          price: "$1,500 - $8,000/month",
          features: ["Self-learning algorithms", "Adaptive decision making", "Real-time optimization", "Predictive maintenance"],
          link: "/services/ai-autonomous-systems",
          marketPrice: "$1,500 - $15,000/month",
          roi: "400% within 18 months"
        }
      ]
    },
    {
      name: "Blockchain & Supply Chain",
      icon: Link,
      color: "from-blue-500 to-indigo-500",
      services: [
        {
          title: "Blockchain Supply Chain Transparency",
          description: "Achieve 100% supply chain visibility with blockchain technology. Reduce fraud risk by 60%, save 40% on costs, and ensure 3x faster compliance.",
          price: "$899 - $6,999/month",
          features: ["End-to-end traceability", "Smart contract automation", "Sustainability monitoring", "Quality assurance"],
          link: "/services/blockchain-supply-chain-transparency",
          marketPrice: "$899 - $15,000/month",
          roi: "450% within 18 months"
        },
        {
          title: "Autonomous Supply Chain Optimization",
          description: "AI-driven supply chain management that autonomously optimizes inventory, predicts demand, and manages logistics.",
          price: "$2,000 - $8,000/month",
          features: ["Autonomous inventory management", "AI demand forecasting", "Real-time optimization", "Risk assessment"],
          link: "/services/innovative-new-services",
          marketPrice: "$2,000 - $12,000/month",
          roi: "400% within 18 months"
        }
      ]
    },
    {
      name: "Cybersecurity & Compliance",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      services: [
        {
          title: "Quantum-Safe Cybersecurity",
          description: "Next-generation cybersecurity with post-quantum cryptography to protect against future quantum threats.",
          price: "$2,500 - $10,000/month",
          features: ["Post-quantum algorithms", "Zero-trust architecture", "Compliance automation", "Threat intelligence"],
          link: "/services/innovative-new-services",
          marketPrice: "$2,500 - $20,000/month",
          roi: "200% within 12 months"
        },
        {
          title: "SOC2 Compliance Automation",
          description: "Automate SOC2 compliance processes and maintain continuous compliance with automated monitoring.",
          price: "$1,200 - $5,000/month",
          features: ["Automated compliance", "Continuous monitoring", "Audit preparation", "Risk management"],
          link: "/soc2-compliance-automation",
          marketPrice: "$1,200 - $8,000/month",
          roi: "250% within 12 months"
        }
      ]
    },
    {
      name: "Healthcare & Life Sciences",
      icon: Heart,
      color: "from-green-500 to-teal-500",
      services: [
        {
          title: "AI Healthcare Diagnostics",
          description: "Advanced AI-powered medical diagnostics platform for accurate diagnoses and treatment recommendations.",
          price: "$1,500 - $5,000/month",
          features: ["Medical image analysis", "Symptom analysis", "Treatment recommendations", "Regulatory compliance"],
          link: "/services/innovative-new-services",
          marketPrice: "$1,500 - $10,000/month",
          roi: "300% within 18 months"
        },
        {
          title: "AI-Powered IT Asset Management",
          description: "Intelligent IT asset management with AI-driven insights and automated lifecycle management.",
          price: "$800 - $3,500/month",
          features: ["Asset discovery", "Lifecycle management", "Cost optimization", "Compliance tracking"],
          link: "/ai-powered-it-asset-management",
          marketPrice: "$800 - $6,000/month",
          roi: "280% within 12 months"
        }
      ]
    },
    {
      name: "Sustainability & Energy",
      icon: Leaf,
      color: "from-emerald-500 to-green-500",
      services: [
        {
          title: "Sustainable Energy Management",
          description: "AI-powered energy management system for sustainable business operations and cost reduction.",
          price: "$800 - $3,000/month",
          features: ["Real-time monitoring", "AI optimization", "Renewable integration", "Carbon tracking"],
          link: "/services/innovative-new-services",
          marketPrice: "$800 - $5,000/month",
          roi: "250% within 12 months"
        },
        {
          title: "Green IT Solutions",
          description: "Environmentally conscious IT solutions that reduce carbon footprint and promote sustainability.",
          price: "$600 - $2,500/month",
          features: ["Energy efficiency", "Carbon reduction", "Sustainable practices", "ESG compliance"],
          link: "/services/innovative-new-services",
          marketPrice: "$600 - $4,000/month",
          roi: "200% within 12 months"
        }
      ]
    },
    {
      name: "Financial Technology",
      icon: TrendingUp,
      color: "from-green-500 to-blue-500",
      services: [
        {
          title: "AI Financial Trading Platform",
          description: "Advanced AI-powered trading platform with machine learning algorithms and risk management.",
          price: "$3,000 - $15,000/month",
          features: ["AI market analysis", "Predictive algorithms", "Risk management", "Portfolio optimization"],
          link: "/services/innovative-new-services",
          marketPrice: "$3,000 - $25,000/month",
          roi: "500% within 24 months"
        },
        {
          title: "AI Legal Research Platform",
          description: "Intelligent legal research platform with AI-powered contract analysis and legal insights.",
          price: "$1,200 - $4,000/month",
          features: ["Contract analysis", "Legal research", "Compliance checking", "Risk assessment"],
          link: "/services/innovative-new-services",
          marketPrice: "$1,200 - $8,000/month",
          roi: "350% within 12 months"
        }
      ]
    },
    {
      name: "Smart Cities & Infrastructure",
      icon: Building,
      color: "from-gray-500 to-blue-500",
      services: [
        {
          title: "Smart City Infrastructure Management",
          description: "Comprehensive IoT and AI-powered platform for managing urban infrastructure and public services.",
          price: "$5,000 - $25,000/month",
          features: ["Traffic management", "Utility monitoring", "Public safety", "Environmental tracking"],
          link: "/services/innovative-new-services",
          marketPrice: "$5,000 - $50,000/month",
          roi: "300% within 24 months"
        },
        {
          title: "5G Enterprise Solutions",
          description: "Next-generation 5G solutions for enterprise connectivity and digital transformation.",
          price: "$2,000 - $8,000/month",
          features: ["High-speed connectivity", "Low latency", "IoT support", "Enterprise security"],
          link: "/5g-enterprise-solutions",
          marketPrice: "$2,000 - $15,000/month",
          roi: "350% within 18 months"
        }
      ]
    },
    {
      name: "Education & Training",
      icon: GraduationCap,
      color: "from-purple-500 to-blue-500",
      services: [
        {
          title: "AI Education & Learning Platform",
          description: "Intelligent educational platform with personalized learning paths and adaptive content delivery.",
          price: "$600 - $2,500/month",
          features: ["Personalized learning", "Adaptive content", "Progress tracking", "Collaborative tools"],
          link: "/services/innovative-new-services",
          marketPrice: "$600 - $5,000/month",
          roi: "350% within 12 months"
        },
        {
          title: "Zion Academy",
          description: "Comprehensive training and certification programs for technology professionals and organizations.",
          price: "$299 - $1,999/month",
          features: ["Professional certification", "Skill development", "Industry training", "Continuous learning"],
          link: "/zion-academy",
          marketPrice: "$299 - $3,000/month",
          roi: "200% within 12 months"
        }
      ]
    },
    {
      name: "Quantum Computing",
      icon: Atom,
      color: "from-indigo-500 to-purple-500",
      services: [
        {
          title: "Quantum Machine Learning Platform",
          description: "Cutting-edge platform combining quantum computing with machine learning for complex problem-solving.",
          price: "$8,000 - $50,000/month",
          features: ["Quantum algorithms", "Hybrid ML systems", "Optimization solving", "Research tools"],
          link: "/services/innovative-new-services",
          marketPrice: "$8,000 - $100,000/month",
          roi: "1000% within 36 months"
        },
        {
          title: "Quantum Neural Network Platform",
          description: "Revolutionary quantum neural networks for advanced AI applications and research.",
          price: "$5,000 - $30,000/month",
          features: ["Quantum neural networks", "Advanced AI", "Research capabilities", "Expert consultation"],
          link: "/quantum-neural-network-platform",
          marketPrice: "$5,000 - $50,000/month",
          roi: "800% within 24 months"
        }
      ]
    }
  ];

  const getCategoryIcon = (category: string) => {
    const cat = serviceCategories.find(c => c.name === category);
    return cat ? cat.icon : Globe;
  };

  const getCategoryColor = (category: string) => {
    const cat = serviceCategories.find(c => c.name === category);
    return cat ? cat.color : "from-gray-500 to-gray-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Comprehensive Services Overview - Zion Tech Group" 
        description="Explore our complete portfolio of innovative micro SAAS services, IT solutions, and AI innovations. From AI workflow automation to blockchain supply chain transparency."
        keywords="AI services, blockchain solutions, cybersecurity, healthcare technology, sustainability, fintech, smart cities, quantum computing, micro SAAS"
        canonical="https://ziontechgroup.com/services/comprehensive-services-overview"
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Services Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-zion-cyan mb-8">
              Discover our complete suite of innovative micro SAAS services, IT solutions, and AI innovations
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-zion-cyan/20 backdrop-blur-sm rounded-full px-6 py-3 border border-zion-cyan">
                <span className="text-zion-cyan font-semibold">AI-Powered Solutions</span>
              </div>
              <div className="bg-zion-purple/20 backdrop-blur-sm rounded-full px-6 py-3 border border-zion-purple">
                <span className="text-zion-purple font-semibold">Blockchain Technology</span>
              </div>
              <div className="bg-zion-green/20 backdrop-blur-sm rounded-full px-6 py-3 border border-zion-green">
                <span className="text-zion-green font-semibold">Sustainability</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services by Category */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Complete Service Portfolio
          </h2>
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
            Explore our comprehensive suite of innovative services organized by category and industry focus
          </p>
        </div>

        {serviceCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            <div className="text-center mb-12">
              <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${category.color} mb-4`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">{category.name}</h3>
              <p className="text-zion-cyan max-w-2xl mx-auto">
                Cutting-edge solutions designed specifically for {category.name.toLowerCase()} challenges and opportunities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="group relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-zion-cyan">
                          {service.price}
                        </div>
                        <div className="text-sm text-zion-cyan/70">
                          Market: {service.marketPrice}
                        </div>
                      </div>
                    </div>

                    {/* Service Title & Description */}
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-zion-cyan/80 mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h5>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-white/80">
                            <Zap className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ROI Information */}
                    <div className="mb-4 p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zion-cyan/70">ROI:</span>
                        <span className="text-green-400 font-semibold">{service.roi}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-6">
                      <a
                        href={service.link}
                        className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-blue hover:to-zion-cyan text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25 flex items-center justify-center"
                      >
                        <Users className="w-4 h-4 mr-2" />
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Why Choose Zion Tech Group */}
      <div className="bg-white/5 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver innovative solutions that drive real business value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI-First Approach</h3>
              <p className="text-zion-cyan/80">
                Leverage the latest AI technologies to gain competitive advantages and drive innovation
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-zion-purple to-zion-pink rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-zion-cyan/80">
                Built-in security and compliance features to protect your business and data
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-zion-green to-zion-teal rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proven ROI</h3>
              <p className="text-zion-cyan/80">
                Measurable business outcomes with rapid implementation and quick time-to-value
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-zion-orange to-zion-red rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Global Support</h3>
              <p className="text-zion-cyan/80">
                24/7 support and expertise from our global team of technology professionals
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-3xl mx-auto">
            Contact our team of experts to discuss how our innovative services can drive your digital transformation and business growth
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="bg-zion-cyan rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expert Consultation</h3>
              <p className="text-zion-cyan/80 mb-4">
                Get personalized advice from our technology experts
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Expert Consultation Request"
                className="text-zion-cyan hover:text-white transition-colors font-semibold"
              >
                Schedule Consultation →
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="bg-zion-purple rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">ROI Assessment</h3>
              <p className="text-zion-cyan/80 mb-4">
                Understand the potential return on your investment
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=ROI Assessment Request"
                className="text-zion-cyan hover:text-white transition-colors font-semibold"
              >
                Get Assessment →
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="bg-zion-green rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quick Start</h3>
              <p className="text-zion-cyan/80 mb-4">
                Begin your transformation journey immediately
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Quick Start Request"
                className="text-zion-cyan hover:text-white transition-colors font-semibold"
              >
                Start Now →
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Phone</h4>
                <p className="text-white">+1 302 464 0950</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Email</h4>
                <p className="text-white">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Website</h4>
                <p className="text-white">https://ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Address</h4>
                <p className="text-white">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}