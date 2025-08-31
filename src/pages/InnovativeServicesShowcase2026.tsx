import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  DollarSign, 
  Truck,
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Rocket,
  Target,
  Globe,
  Lock,
  Eye,
  TrendingUp,
  Cloud,
  Server,
  Atom,
  Satellite,
  Building2,
  Heart,
  Cpu,
  Database,
  Workflow,
  FileText,
  GraduationCap,
  Scale,
  Leaf,
  Gamepad2,
  Coins,
  MessageCircle,
  Star,
  Award,
  Clock,
  Calendar,
  ExternalLink
} from 'lucide-react';

export default function InnovativeServicesShowcase2026() {
  const serviceCategories = [
    {
      title: "AI & Automation",
      icon: Brain,
      color: "text-zion-cyan",
      bgColor: "bg-zion-cyan/20",
      services: [
        {
          name: "AI Autonomous Financial Advisor Platform",
          description: "Revolutionary AI-powered financial advisory with intelligent investment recommendations and portfolio optimization.",
          href: "/services/ai-autonomous-financial-advisor-platform",
          price: "From $99/month",
          features: ["AI investment analysis", "Portfolio optimization", "Risk management", "Automated trading"]
        },
        {
          name: "AI Autonomous Supply Chain Intelligence",
          description: "Transform supply chains with AI-powered demand forecasting and inventory optimization.",
          href: "/services/ai-autonomous-supply-chain-intelligence",
          price: "From $199/month",
          features: ["Demand forecasting", "Inventory optimization", "Risk management", "Logistics optimization"]
        },
        {
          name: "AI Autonomous Cybersecurity Intelligence",
          description: "Next-generation AI-powered cybersecurity with autonomous threat detection and response.",
          href: "/services/ai-autonomous-cybersecurity-intelligence",
          price: "From $299/month",
          features: ["AI threat detection", "Zero-day prevention", "Continuous monitoring", "Automated response"]
        }
      ]
    },
    {
      title: "IT & Infrastructure",
      icon: Server,
      color: "text-zion-purple",
      bgColor: "bg-zion-purple/20",
      services: [
        {
          name: "Cloud FinOps Optimizer",
          description: "Optimize cloud costs and performance with intelligent resource management.",
          href: "/services/cloud-finops-optimizer",
          price: "From $399/month",
          features: ["Cost optimization", "Performance monitoring", "Resource management", "Automated scaling"]
        },
        {
          name: "Quantum Edge Computing Solutions",
          description: "Harness quantum computing power at the edge for unprecedented performance.",
          href: "/services/quantum-edge-computing-solutions",
          price: "From $599/month",
          features: ["Quantum processing", "Edge deployment", "High performance", "Low latency"]
        }
      ]
    },
    {
      title: "Micro SaaS Solutions",
      icon: Rocket,
      color: "text-zion-blue",
      bgColor: "bg-zion-blue/20",
      services: [
        {
          name: "AI Legal Document Automation",
          description: "Automate legal document creation and analysis with AI-powered intelligence.",
          href: "/services/ai-legal-document-automation-platform",
          price: "From $149/month",
          features: ["Document automation", "Legal analysis", "Compliance checking", "Template management"]
        },
        {
          name: "AI Healthcare Analytics Platform",
          description: "Advanced healthcare analytics and predictive insights for better patient outcomes.",
          href: "/services/ai-healthcare-analytics-platform",
          price: "From $299/month",
          features: ["Patient analytics", "Predictive insights", "Clinical decision support", "Data integration"]
        }
      ]
    },
    {
      title: "Emerging Technologies",
      icon: Atom,
      color: "text-zion-green",
      bgColor: "bg-zion-green/20",
      services: [
        {
          name: "AI Space Technology Platform",
          description: "Revolutionary AI applications for space exploration and satellite operations.",
          href: "/services/ai-space-technology-platform",
          price: "From $799/month",
          features: ["Satellite optimization", "Space analytics", "Mission planning", "Data processing"]
        },
        {
          name: "AI Quantum Neural Network Platform",
          description: "Combine quantum computing with neural networks for breakthrough AI capabilities.",
          href: "/services/ai-quantum-neural-network-platform",
          price: "From $699/month",
          features: ["Quantum neural networks", "Advanced AI", "High performance", "Research tools"]
        }
      ]
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 40%",
    "Improve efficiency and productivity",
    "Access cutting-edge AI technology",
    "Scale your business operations",
    "Stay ahead of the competition",
    "Get enterprise-grade solutions at startup prices"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      company: "TechCorp Industries",
      content: "Zion Tech Group's AI services have transformed our operations. We've seen a 35% increase in efficiency and significant cost savings.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "VP Operations",
      company: "Global Supply Chain",
      content: "The AI supply chain intelligence platform has revolutionized our forecasting accuracy. We're now predicting demand with 95% accuracy.",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Chief Medical Officer",
      company: "HealthTech Solutions",
      content: "Our healthcare analytics have improved patient outcomes significantly. The AI platform provides insights we never had before.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Innovative Services Showcase 2026 | Zion Tech Group</title>
        <meta name="description" content="Discover our revolutionary AI-powered services and micro SaaS solutions launched in 2026. Transform your business with cutting-edge technology." />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-services-showcase-2026" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Innovation 2026
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovative Services
              <span className="text-zion-cyan"> Showcase 2026</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Discover our revolutionary AI-powered services and micro SaaS solutions that are transforming 
              industries and empowering businesses to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/90 transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Innovative Services 2026 Demo Request"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Services Launched in 2026
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Experience the future of business technology with our cutting-edge AI-powered solutions.
            </p>
          </div>
          
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-8">
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${category.bgColor} rounded-2xl mb-4`}>
                    <category.icon className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <h3 className={`text-3xl font-bold ${category.color} mb-2`}>{category.title}</h3>
                  <p className="text-zion-slate-light text-lg">Advanced solutions for modern businesses</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="p-8 bg-zion-slate-dark/50 border border-zion-purple/20 rounded-2xl hover:border-zion-cyan/40 transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-xl font-semibold text-white group-hover:text-zion-cyan transition-colors">
                          {service.name}
                        </h4>
                        <span className="text-zion-cyan font-semibold">{service.price}</span>
                      </div>
                      
                      <p className="text-zion-slate-light mb-6">{service.description}</p>
                      
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                            <span className="text-zion-slate-light text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <Link
                          to={service.href}
                          className="inline-flex items-center text-zion-cyan hover:text-zion-cyan/80 transition-colors font-medium"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                        <Link
                          to={service.href}
                          className="inline-flex items-center px-6 py-2 bg-zion-cyan/20 text-zion-cyan rounded-lg hover:bg-zion-cyan/30 transition-colors"
                        >
                          Get Started
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Innovative Services?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Transform your business with cutting-edge technology and proven results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-yellow-400 fill-current" />
                </div>
                <p className="text-zion-slate-light">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Real results from real businesses using our innovative services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-zion-slate-dark/30 border border-zion-purple/20 rounded-xl">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-zion-slate-light mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-zion-slate-light text-sm">{testimonial.role}</p>
                  <p className="text-zion-cyan text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Join the future of business technology with our innovative AI-powered services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Innovative Services 2026 Consultation"
              className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/90 transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Consultation
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-zion-purple/20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center space-y-2">
              <Phone className="w-6 h-6 text-zion-cyan" />
              <span className="text-zion-slate-light">+1 (302) 464-0950</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Mail className="w-6 h-6 text-zion-cyan" />
              <span className="text-zion-slate-light">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="w-6 h-6 text-zion-cyan" />
              <span className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
