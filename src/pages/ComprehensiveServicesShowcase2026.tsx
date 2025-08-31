import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Server, 
  Rocket, 
  Zap, 
  Shield, 
  Users, 
  TrendingUp, 
  BarChart3, 
  Workflow, 
  Database, 
  Cloud, 
  Lock, 
  Target, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Leaf,
  Search,
  FileText,
  Scale,
  Building2,
  Factory,
  Heart,
  Bank,
  Store,
  Truck,
  Flask,
  Microscope,
  Satellite,
  Atom,
  Network,
  Wifi,
  Cpu,
  Monitor,
  Smartphone,
  Activity,
  Settings,
  Palette,
  Clock,
  DollarSign,
  Globe,
  Award,
  Lightbulb,
  Code,
  MessageCircle,
  UserCheck,
  Handshake,
  Briefcase,
  Scale as ScaleIcon,
  FileText as FileTextIcon,
  HelpCircle,
  Users2,
  PenTool,
  Calculator,
  Video,
  GraduationCap
} from 'lucide-react';

export default function ComprehensiveServicesShowcase2026() {
  const serviceCategories = [
    {
      title: "AI & Automation Services",
      icon: Brain,
      color: "text-zion-cyan",
      bgColor: "bg-zion-cyan/20",
      description: "Cutting-edge AI solutions that transform business operations",
      services: [
        {
          name: "AI Autonomous Legal Research Platform",
          description: "Revolutionary AI-powered legal research with 80% time savings",
          href: "/services/ai-autonomous-legal-research-platform",
          price: "$299/month",
          features: ["AI-powered case analysis", "Intelligent search & discovery", "Document analysis & summarization"]
        },
        {
          name: "AI Sustainability Management Platform",
          description: "Comprehensive environmental impact monitoring and optimization",
          href: "/services/ai-sustainability-management-platform",
          price: "$199/month",
          features: ["Carbon footprint tracking", "Environmental analytics", "Automated compliance"]
        },
        {
          name: "AI Business Intelligence Dashboard",
          description: "Advanced analytics and insights for data-driven decisions",
          href: "/services/ai-business-intelligence-dashboard",
          price: "$399/month",
          features: ["Real-time analytics", "Predictive insights", "Custom dashboards"]
        },
        {
          name: "AI Customer Support Automation",
          description: "Intelligent customer service with 24/7 availability",
          href: "/services/ai-customer-support-automation",
          price: "$249/month",
          features: ["Natural language processing", "Multi-language support", "Seamless escalation"]
        },
        {
          name: "AI Project Management Platform",
          description: "AI-powered project planning, tracking, and optimization",
          href: "/services/ai-project-management-platform",
          price: "$349/month",
          features: ["Smart scheduling", "Risk assessment", "Resource optimization"]
        },
        {
          name: "AI Marketing Automation Platform",
          description: "Intelligent marketing campaigns with personalized targeting",
          href: "/services/ai-marketing-automation-platform",
          price: "$299/month",
          features: ["Behavioral analysis", "A/B testing", "ROI optimization"]
        }
      ]
    },
    {
      title: "IT & Infrastructure Services",
      icon: Server,
      color: "text-zion-purple",
      bgColor: "bg-zion-purple/20",
      description: "Robust IT solutions for modern business infrastructure",
      services: [
        {
          name: "IT Infrastructure Management",
          description: "Comprehensive infrastructure monitoring and optimization",
          href: "/services/it-infrastructure-management",
          price: "$599/month",
          features: ["24/7 monitoring", "Performance optimization", "Scalability planning"]
        },
        {
          name: "Cloud & DevOps Solutions",
          description: "Modern cloud infrastructure and deployment automation",
          href: "/services/cloud-devops",
          price: "$499/month",
          features: ["Multi-cloud management", "CI/CD pipelines", "Infrastructure as code"]
        },
        {
          name: "Cybersecurity Services",
          description: "Advanced security solutions for enterprise protection",
          href: "/services/cybersecurity",
          price: "$799/month",
          features: ["Threat detection", "Vulnerability assessment", "Incident response"]
        },
        {
          name: "Blockchain Enterprise Solutions",
          description: "Secure blockchain infrastructure for business applications",
          href: "/services/blockchain-enterprise-solutions",
          price: "$899/month",
          features: ["Smart contracts", "Decentralized applications", "Security auditing"]
        }
      ]
    },
    {
      title: "Micro SaaS Solutions",
      icon: Rocket,
      color: "text-zion-blue",
      bgColor: "bg-zion-blue/20",
      description: "Specialized software solutions for specific business needs",
      services: [
        {
          name: "AI Workflow Orchestrator",
          description: "Intelligent workflow automation and process optimization",
          href: "/services/ai-workflow-orchestrator",
          price: "$399/month",
          features: ["Process automation", "Workflow optimization", "Integration management"]
        },
        {
          name: "AI HR Platform",
          description: "Comprehensive HR management with AI-powered insights",
          href: "/services/ai-hr-platform",
          price: "$299/month",
          features: ["Talent acquisition", "Performance management", "Employee analytics"]
        },
        {
          name: "AI Financial Risk Management",
          description: "Advanced risk assessment and financial planning tools",
          href: "/services/ai-financial-risk-management-enhanced",
          price: "$449/month",
          features: ["Risk modeling", "Compliance monitoring", "Financial forecasting"]
        },
        {
          name: "AI Supply Chain Optimization",
          description: "Intelligent supply chain management and optimization",
          href: "/services/ai-supply-chain-optimization-enhanced",
          price: "$549/month",
          features: ["Demand forecasting", "Inventory optimization", "Route planning"]
        }
      ]
    },
    {
      title: "Industry Solutions",
      icon: Building2,
      color: "text-zion-green",
      bgColor: "bg-zion-green/20",
      description: "Tailored solutions for specific industry requirements",
      services: [
        {
          name: "Healthcare Analytics Platform",
          description: "AI-powered healthcare data analysis and insights",
          href: "/services/ai-healthcare-analytics-platform",
          price: "$699/month",
          features: ["Patient analytics", "Clinical insights", "Compliance management"]
        },
        {
          name: "Financial Services Solutions",
          description: "Advanced financial technology and risk management",
          href: "/solutions/financial",
          price: "Custom pricing",
          features: ["Trading platforms", "Risk assessment", "Regulatory compliance"]
        },
        {
          name: "Manufacturing Solutions",
          description: "Smart manufacturing and industrial automation",
          href: "/solutions/manufacturing",
          price: "Custom pricing",
          features: ["Process optimization", "Quality control", "Predictive maintenance"]
        },
        {
          name: "Retail & E-commerce Solutions",
          description: "Digital transformation for retail businesses",
          href: "/solutions/retail",
          price: "Custom pricing",
          features: ["Omnichannel integration", "Customer analytics", "Inventory management"]
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and streamline operations for 40-80% time savings"
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Reduce operational costs by 30-60% through intelligent automation and optimization"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Enterprise-grade security with SOC2 compliance and advanced threat protection"
    },
    {
      icon: Users,
      title: "Improved Collaboration",
      description: "Seamless team collaboration with real-time updates and shared workspaces"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description: "Advanced analytics and AI-powered insights for better decision making"
    },
    {
      icon: Zap,
      title: "Scalable Solutions",
      description: "Cloud-native architecture that scales with your business growth"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic AI capabilities",
        "Standard support",
        "Core integrations",
        "Basic analytics"
      ],
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced AI features",
        "Priority support",
        "Full integrations",
        "Advanced analytics",
        "Custom workflows"
      ],
      popular: true,
      cta: "Get Started"
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large organizations",
      features: [
        "Custom AI models",
        "Dedicated support",
        "API access",
        "White-label solutions",
        "Custom compliance",
        "On-premise options"
      ],
      cta: "Contact Sales"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-8">
              <Star className="w-4 h-4 mr-2" />
              2026 Comprehensive Services Showcase
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Revolutionary AI, IT & Micro SaaS Solutions
            </h1>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Discover our comprehensive portfolio of cutting-edge services designed to transform your business. 
              From AI-powered automation to enterprise infrastructure, we provide the tools you need to succeed in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our comprehensive suite of services covers every aspect of modern business technology needs.
            </p>
          </div>
          
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-8">
                <div className="text-center">
                  <div className="inline-flex items-center space-x-3 mb-4">
                    <div className={`p-3 ${category.bgColor} rounded-lg`}>
                      <category.icon className={`w-8 h-8 ${category.color}`} />
                    </div>
                    <h3 className={`text-3xl font-bold ${category.color}`}>{category.title}</h3>
                  </div>
                  <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="p-6 bg-zion-slate-dark/50 rounded-xl border border-zion-purple/30 hover:border-zion-purple/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="mb-4">
                        <h4 className="text-xl font-semibold text-white mb-2">{service.name}</h4>
                        <p className="text-zion-slate-light text-sm mb-3">{service.description}</p>
                        <div className="text-zion-cyan font-semibold text-lg">{service.price}</div>
                      </div>
                      
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-sm text-zion-slate-light">
                            <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link
                        to={service.href}
                        className="w-full py-3 px-4 bg-zion-cyan/20 text-zion-cyan rounded-lg text-center font-medium hover:bg-zion-cyan hover:text-white transition-all duration-300 inline-block"
                      >
                        Learn More
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Experience the benefits of working with a technology leader committed to your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className={`p-4 ${benefit.icon === TrendingUp ? 'bg-zion-cyan/20' : benefit.icon === DollarSign ? 'bg-zion-green/20' : benefit.icon === Shield ? 'bg-zion-purple/20' : benefit.icon === Users ? 'bg-zion-blue/20' : benefit.icon === BarChart3 ? 'bg-zion-orange/20' : 'bg-zion-cyan/20'} rounded-lg w-fit mx-auto mb-4`}>
                  <benefit.icon className={`w-8 h-8 ${benefit.icon === TrendingUp ? 'text-zion-cyan' : benefit.icon === DollarSign ? 'text-zion-green' : benefit.icon === Shield ? 'text-zion-purple' : benefit.icon === Users ? 'text-zion-blue' : benefit.icon === BarChart3 ? 'text-zion-orange' : 'text-zion-cyan'}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the plan that fits your business needs and scale as you grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                tier.popular 
                  ? 'border-zion-cyan bg-zion-slate-dark/70 scale-105' 
                  : 'border-zion-purple/30 bg-zion-slate-dark/50 hover:border-zion-purple/50'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-zion-cyan">{tier.price}</span>
                    <span className="text-zion-slate-light ml-1">{tier.period}</span>
                  </div>
                  <p className="text-zion-slate-light mt-2">{tier.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:from-zion-cyan-light hover:to-zion-blue-light'
                      : 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center p-12 bg-gradient-to-r from-zion-purple/20 via-zion-cyan/20 to-zion-purple/20 rounded-2xl border border-zion-purple/30">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
              Join thousands of businesses already using our innovative solutions to drive growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                View Full Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Have questions about our services? Our team is here to help you find the perfect solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="p-3 bg-zion-cyan/20 rounded-lg w-fit mx-auto mb-4">
                <Phone className="w-6 h-6 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <a href="tel:+13024640950" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                +1 (302) 464-0950
              </a>
            </div>
            <div className="text-center p-6">
              <div className="p-3 bg-zion-cyan/20 rounded-lg w-fit mx-auto mb-4">
                <Mail className="w-6 h-6 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-center p-6">
              <div className="p-3 bg-zion-cyan/20 rounded-lg w-fit mx-auto mb-4">
                <MapPin className="w-6 h-6 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-slate-light">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
