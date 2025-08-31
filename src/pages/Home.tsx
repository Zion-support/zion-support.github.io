import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  ArrowRight, 
  Brain, 
  Shield, 
  Zap, 
  Cloud, 
  Globe, 
  Lock, 
  Cpu,
  Database,
  Network,
  Smartphone,
  Rocket,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Award,
  Target,
  Lightbulb,
  BarChart3,
  Shield as SecurityIcon,
  Globe as WorldIcon,
  Zap as SpeedIcon
} from 'lucide-react';

export default function Home() {
  // SEO data for the home page
  const seoData = {
    title: "Zion Tech Group - AI-Powered Business Solutions & Digital Transformation",
    description: "Transform your business with Zion Tech Group's cutting-edge AI solutions, micro SAAS platforms, and digital transformation services. Expert IT infrastructure and innovative technology solutions.",
    keywords: ["AI solutions", "digital transformation", "micro SAAS", "IT infrastructure", "business technology", "AI automation", "cybersecurity", "cloud computing"],
    canonical: "https://ziontechgroup.com",
    ogImage: "https://ziontechgroup.com/og-image.jpg",
    ogType: "website",
    twitterCard: "summary_large_image",
    structuredData: null,
    metaTags: {
      "robots": "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      "author": "Zion Tech Group",
      "viewport": "width=device-width, initial-scale=1.0",
      "theme-color": "#a855f7"
    }
  };

  const featuredServices = [
    {
      icon: Brain,
      title: "AI-Powered Customer Success Automation",
      description: "Intelligent platform that automates customer onboarding, success tracking, and churn prevention using predictive analytics.",
      category: "Micro SAAS",
      price: "$199/month",
      features: ["AI-driven health scoring", "Predictive churn detection", "Automated workflows", "Real-time insights"],
      path: "/services",
      gradient: "from-purple-500 to-pink-600",
      badge: "Most Popular"
    },
    {
      icon: Shield,
      title: "Quantum-Resistant Encryption SaaS",
      description: "Future-proof encryption solution that implements post-quantum cryptography to protect against quantum computing threats.",
      category: "Cybersecurity",
      price: "$499/month",
      features: ["Post-quantum algorithms", "Hybrid encryption", "Key management", "Compliance frameworks"],
      path: "/services",
      gradient: "from-blue-500 to-cyan-600",
      badge: "Enterprise Ready"
    },
    {
      icon: Cpu,
      title: "IoT Edge Computing Platform",
      description: "Distributed computing platform that processes data at the edge, reducing latency and improving real-time decision making.",
      category: "IoT & Edge",
      price: "$249/month",
      features: ["Edge data processing", "Real-time analytics", "Device management", "Scalable architecture"],
      path: "/services",
      gradient: "from-green-500 to-emerald-600",
      badge: "Innovation Leader"
    },
    {
      icon: Database,
      title: "AI-Powered Financial Fraud Detection",
      description: "Real-time fraud detection system using advanced machine learning to identify and prevent financial fraud.",
      category: "Financial Tech",
      price: "$399/month",
      features: ["Real-time detection", "Machine learning", "Multi-channel monitoring", "Risk scoring"],
      path: "/services",
      gradient: "from-red-500 to-orange-600",
      badge: "Industry Standard"
    }
  ];

  const stats = [
    { label: "Services Available", value: "25+", icon: Zap, description: "Comprehensive solution portfolio" },
    { label: "Innovation Levels", value: "4", icon: Star, description: "From advanced to revolutionary" },
    { label: "Market Coverage", value: "$50B+", icon: TrendingUp, description: "Addressable market size" },
    { label: "Support Levels", value: "3", icon: Users, description: "24/7 enterprise support" }
  ];

  const innovationLevels = [
    {
      level: "Revolutionary",
      description: "Breakthrough technologies that redefine industries",
      examples: ["Quantum Machine Learning", "Post-Quantum Cryptography"],
      color: "text-purple-400 border-purple-400",
      icon: Rocket,
      benefits: ["First-mover advantage", "Industry disruption", "Patent potential"]
    },
    {
      level: "Cutting-edge",
      description: "Advanced solutions using latest technologies",
      examples: ["AI-Powered Automation", "Blockchain Solutions"],
      color: "text-blue-400 border-blue-400",
      icon: Brain,
      benefits: ["Competitive edge", "Future-proofing", "Scalability"]
    },
    {
      level: "Advanced",
      description: "Sophisticated solutions with proven track records",
      examples: ["Predictive Analytics", "Edge Computing"],
      color: "text-green-400 border-green-400",
      icon: Target,
      benefits: ["Reliability", "Proven ROI", "Risk mitigation"]
    }
  ];

  const whyChooseUs = [
    {
      icon: Rocket,
      title: "Innovation First",
      description: "We stay ahead of technology trends to provide future-proof solutions that give you a competitive edge.",
      color: "from-purple-500 to-blue-500",
      metrics: ["15+ patents", "R&D investment: 20%", "Innovation labs: 3"]
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our certified professionals bring deep expertise in AI, cybersecurity, cloud computing, and emerging technologies.",
      color: "from-green-500 to-emerald-500",
      metrics: ["PhD holders: 40%", "Certifications: 15+", "Experience: 10+ years"]
    },
    {
      icon: SecurityIcon,
      title: "Enterprise Security",
      description: "We prioritize security and compliance, ensuring your data and systems are protected with industry-leading standards.",
      color: "from-blue-500 to-cyan-500",
      metrics: ["SOC2 Type II", "ISO 27001", "GDPR compliant"]
    },
    {
      icon: TrendingUp,
      title: "Proven ROI",
      description: "Our solutions deliver measurable business value with clear ROI metrics and performance improvements.",
      color: "from-orange-500 to-red-500",
      metrics: ["Avg ROI: 300%", "Time to value: 3 months", "Success rate: 95%"]
    },
    {
      icon: WorldIcon,
      title: "Global Reach",
      description: "We serve clients worldwide with scalable solutions that work across different markets and regulatory environments.",
      color: "from-pink-500 to-purple-500",
      metrics: ["Countries: 25+", "Languages: 12", "Time zones: 24"]
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock support and monitoring to ensure your systems run smoothly and efficiently.",
      color: "from-yellow-500 to-orange-500",
      metrics: ["Response time: <15min", "Uptime: 99.99%", "Support team: 50+"]
    }
  ];

  // Enhanced accessibility features
  useEffect(() => {
    // Add skip link functionality
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab' && e.target === document.body) {
        const skipLink = document.querySelector('.skip-link') as HTMLElement;
        if (skipLink) {
          skipLink.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <SEO data={seoData} pageType="home" />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Skip Link for Accessibility */}
        <a href="#main-content" className="skip-link sr-only focus:not-sr-only">
          Skip to main content
        </a>
        
        {/* Hero Section */}
        <section id="hero" className="relative overflow-hidden" aria-labelledby="hero-heading">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50"></div>
          <div className="relative container mx-auto px-4 py-24 lg:py-32">
            <div className="text-center max-w-5xl mx-auto">
              <h1 
                id="hero-heading"
                className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight"
              >
                Transform Your Business with
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Cutting-Edge Technology
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Zion Tech Group delivers innovative micro SAAS, IT infrastructure, and AI solutions that drive growth, 
                efficiency, and competitive advantage. From quantum-ready security to AI-powered automation, 
                we're your partner in digital transformation.
              </p>
              
              {/* Contact Information */}
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 mb-12 max-w-4xl mx-auto">
                <h2 className="sr-only">Contact Information</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="flex flex-col items-center">
                    <Phone className="w-10 h-10 text-purple-400 mb-3" aria-hidden="true" />
                    <p className="text-white font-semibold text-lg mb-2">Phone</p>
                    <a 
                      href="tel:+13024640950" 
                      className="text-purple-300 hover:text-purple-200 transition-colors text-lg"
                      aria-label="Call us at +1 302 464 0950"
                    >
                      +1 302 464 0950
                    </a>
                  </div>
                  <div className="flex flex-col items-center">
                    <Mail className="w-10 h-10 text-purple-400 mb-3" aria-hidden="true" />
                    <p className="text-white font-semibold text-lg mb-2">Email</p>
                    <a 
                      href="mailto:kleber@ziontechgroup.com" 
                      className="text-purple-300 hover:text-purple-200 transition-colors text-lg"
                      aria-label="Email us at kleber@ziontechgroup.com"
                    >
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                  <div className="flex flex-col items-center">
                    <MapPin className="w-10 h-10 text-purple-400 mb-3" aria-hidden="true" />
                    <p className="text-white font-semibold text-lg mb-2">Address</p>
                    <address className="text-purple-300 text-lg not-italic">
                      364 E Main St STE 1008<br />
                      Middletown DE 19709
                    </address>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/services"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center gap-2"
                  aria-label="Explore all our services"
                >
                  Explore All Services
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Business Consultation"
                  className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 border border-white/20 flex items-center justify-center gap-2"
                  aria-label="Get a free business consultation"
                >
                  <Mail className="w-5 h-5" aria-hidden="true" />
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-black/20" aria-labelledby="stats-heading">
          <div className="container mx-auto px-4">
            <h2 id="stats-heading" className="sr-only">Company Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-slate-400 mb-2">{stat.label}</div>
                  <p className="text-xs text-slate-500">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-24" aria-labelledby="services-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="services-heading" className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Featured Services
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Discover our most innovative solutions that are transforming businesses across industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredServices.map((service, index) => (
                <article
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
                >
                  {/* Badge */}
                  {service.badge && (
                    <div className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30 mb-4">
                      {service.badge}
                    </div>
                  )}
                  
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-10 h-10 text-white" aria-hidden="true" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" aria-hidden="true" />
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-slate-300 flex items-center gap-2">
                          <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-purple-400">{service.price}</div>
                    <Link
                      to={service.path}
                      className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center gap-2 group-hover:bg-purple-500"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl transition-all duration-300 border border-white/20 hover:scale-105"
                aria-label="View all our services"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* Innovation Levels */}
        <section className="py-24 bg-black/20" aria-labelledby="innovation-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="innovation-heading" className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Innovation Levels
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our services are categorized by innovation level to help you choose the right solution for your needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {innovationLevels.map((level, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 text-center hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className={`w-20 h-20 border-2 ${level.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <level.icon className="w-10 h-10 text-purple-400" aria-hidden="true" />
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-4 ${level.color.replace('border-', 'text-')}`}>
                    {level.level}
                  </h3>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {level.description}
                  </p>

                  <div className="text-left mb-6">
                    <h4 className="text-white font-semibold mb-3">Examples:</h4>
                    <ul className="space-y-2">
                      {level.examples.map((example, idx) => (
                        <li key={idx} className="text-slate-300 text-sm flex items-center gap-2">
                          <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-left">
                    <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {level.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-slate-300 text-sm flex items-center gap-2">
                          <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Zion Tech Group */}
        <section className="py-24" aria-labelledby="why-choose-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="why-choose-heading" className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with proven business expertise to deliver exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <reason.icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
                  <p className="text-slate-300 mb-4">
                    {reason.description}
                  </p>
                  
                  {/* Metrics */}
                  <div className="space-y-2">
                    {reason.metrics.map((metric, idx) => (
                      <div key={idx} className="text-sm text-slate-400 bg-white/5 rounded-lg p-2">
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-black/20" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 text-center">
            <h2 id="cta-heading" className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
              Let's discuss how our innovative solutions can drive growth, efficiency, and competitive advantage for your organization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center gap-2"
                aria-label="Schedule a business transformation consultation"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
                Schedule Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 border border-white/20 flex items-center justify-center gap-2"
                aria-label="Call us at +1 302 464 0950"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call +1 302 464 0950
              </a>
            </div>

            <div className="text-slate-400">
              <p className="text-lg">
                Visit us at: <a 
                  href="https://ziontechgroup.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-purple-400 hover:text-purple-300 underline"
                  aria-label="Visit our website (opens in new tab)"
                >
                  https://ziontechgroup.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
