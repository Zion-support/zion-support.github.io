import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { servicesCatalog } from '@/data/servicesCatalog';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe, 
  Cpu, 
  Brain,
  Rocket,
  Target,
  Award,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  BookOpen,
  Lightbulb,
  Code,
  Database,
  Cloud,
  Lock,
  BarChart3,
  Smartphone,
  Monitor,
  Server,
  Network,
  ShoppingCart,
  Home,
  Truck,
  Building,
  Leaf,
  Package
} from 'lucide-react';

export default function ServicesOverview() {
  const contact = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const benefits = [
    {
      icon: Zap,
      title: "Cutting-Edge Technology",
      description: "Leverage the latest AI, quantum computing, and emerging technologies for competitive advantage"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Bank-level security with SOC 2 compliance, encryption, and comprehensive threat protection"
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Built to grow with your business from startup to enterprise with flexible pricing models"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 technical support with dedicated account managers and comprehensive documentation"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Deploy anywhere with multi-cloud support and worldwide infrastructure coverage"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Trusted by Fortune 500 companies with measurable ROI and success metrics"
    }
  ];

  const stats = [
    { number: "100+", label: "AI-Powered Solutions" },
    { number: "50+", label: "Industry Verticals" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "24/7", label: "Expert Support" },
    { number: "500+", label: "Enterprise Clients" },
    { number: "95%", label: "Client Satisfaction" }
  ];

  const industries = [
    "Healthcare & Life Sciences",
    "Financial Services & Banking",
    "Manufacturing & Industrial",
    "Retail & E-commerce",
    "Education & Training",
    "Real Estate & Construction",
    "Energy & Utilities",
    "Transportation & Logistics",
    "Media & Entertainment",
    "Government & Public Sector"
  ];

  return (
    <>
      <SEO 
        title="Comprehensive Services Overview - Zion Tech Group" 
        description="Explore our complete portfolio of 200+ innovative micro SaaS, AI, IT, and emerging technology solutions. Transform your business with cutting-edge technology and expert support." 
        canonical="/services-overview" 
        url="https://ziontechgroup.com/services-overview"
      />

      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
          <div className="relative z-10 container mx-auto px-4 py-24 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Comprehensive Services
              <span className="block text-4xl md:text-5xl text-zion-cyan mt-4">
                Innovation Portfolio
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Discover our complete ecosystem of 200+ cutting-edge solutions across micro SaaS, AI, cybersecurity, 
              quantum computing, and emerging technologies. Transform your business with proven, scalable, 
              and innovative solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2"
              >
                <span>Start Your Transformation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="bg-transparent border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-zion-cyan mb-2">{stat.number}</div>
                  <div className="text-zion-slate-light text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-zion-blue-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                We combine cutting-edge technology with proven business expertise to deliver solutions that drive real results
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-zion-blue border border-zion-blue-light rounded-2xl p-8 hover:border-zion-cyan transition-all">
                  <div className="w-16 h-16 bg-zion-cyan/20 rounded-2xl flex items-center justify-center mb-6">
                    <benefit.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Complete Service Portfolio
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                From micro SaaS solutions to enterprise AI platforms, we cover every aspect of modern technology needs
              </p>
            </div>
            
            <div className="space-y-16">
              {servicesCatalog.map(category => (
                <div key={category.slug} className="bg-zion-blue-dark border border-zion-blue-light rounded-3xl p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-zion-cyan/20 rounded-xl flex items-center justify-center">
                      {getCategoryIcon(category.name)}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{category.name}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map(item => (
                      <div key={item.id} className="bg-zion-blue border border-zion-blue-light rounded-2xl p-6 hover:border-zion-cyan transition-all">
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                          <div className="text-right min-w-[100px]">
                            <div className="text-zion-cyan font-semibold text-lg">{item.price}</div>
                            <div className="text-zion-slate-light text-sm">
                              {item.billing === 'month' ? 'Monthly' : item.billing === 'hour' ? 'Hourly' : 'Project-based'}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-zion-slate-light mb-4 text-sm">{item.description}</p>
                        
                        <ul className="space-y-2 mb-6">
                          {item.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-zion-slate-light text-sm">
                              <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex items-center justify-between">
                          <Link 
                            to={item.href} 
                            target={item.external ? '_blank' : undefined} 
                            rel={item.external ? 'noopener noreferrer' : undefined} 
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium py-2 px-4 rounded-lg border border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/20 transition-all"
                          >
                            <span>{item.ctaLabel}</span>
                            {item.external && <ExternalLink className="w-4 h-4"/>}
                          </Link>
                          <span className="text-zion-slate-light text-xs bg-zion-blue-light px-2 py-1 rounded">
                            {item.category}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-zion-blue-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Industry Expertise
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                We serve clients across diverse industries with specialized solutions and deep domain knowledge
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-zion-blue border border-zion-blue-light rounded-2xl p-6 text-center hover:border-zion-cyan transition-all">
                  <div className="w-16 h-16 bg-zion-cyan/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-white font-semibold text-sm">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-zion-cyan to-zion-blue rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Join hundreds of companies already leveraging our innovative solutions to drive growth, 
                reduce costs, and stay ahead of the competition.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-zion-blue hover:bg-zion-slate-light px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/pricing" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-zion-blue px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  View Pricing Plans
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Our team of experts is ready to help you choose the right solutions and implement them successfully
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Call Us</h3>
                <p className="text-zion-cyan font-semibold text-lg">{contact.mobile}</p>
                <p className="text-zion-slate-light text-sm mt-2">Available 24/7</p>
              </div>
              
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Email Us</h3>
                <p className="text-zion-cyan font-semibold text-lg">{contact.email}</p>
                <p className="text-zion-slate-light text-sm mt-2">Response within 2 hours</p>
              </div>
              
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Visit Us</h3>
                <p className="text-zion-cyan font-semibold text-sm">{contact.address}</p>
                <p className="text-zion-slate-light text-sm mt-2">Headquarters</p>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function getCategoryIcon(categoryName) {
  const iconMap = {
    'Micro SaaS': <Code className="w-6 h-6 text-zion-cyan" />,
    'AI Solutions': <Brain className="w-6 h-6 text-zion-cyan" />,
    'IT Services': <Server className="w-6 h-6 text-zion-cyan" />,
    'Cybersecurity': <Shield className="w-6 h-6 text-zion-cyan" />,
    'Data & Analytics': <BarChart3 className="w-6 h-6 text-zion-cyan" />,
    'Cloud & DevOps': <Cloud className="w-6 h-6 text-zion-cyan" />,
    'Quantum Computing': <Cpu className="w-6 h-6 text-zion-cyan" />,
    'Blockchain & Web3': <Database className="w-6 h-6 text-zion-cyan" />,
    'IoT & Edge': <Network className="w-6 h-6 text-zion-cyan" />,
    'Green Tech': <Globe className="w-6 h-6 text-zion-cyan" />,
    'Space Tech': <Rocket className="w-6 h-6 text-zion-cyan" />,
    'BioTech & Health': <Users className="w-6 h-6 text-zion-cyan" />,
    'FinTech & DeFi': <TrendingUp className="w-6 h-6 text-zion-cyan" />,
    'Metaverse & AR/VR': <Monitor className="w-6 h-6 text-zion-cyan" />,
    'Autonomous Systems': <Smartphone className="w-6 h-6 text-zion-cyan" />,
    'Digital Marketing': <Target className="w-6 h-6 text-zion-cyan" />,
    'E-commerce Solutions': <ShoppingCart className="w-6 h-6 text-zion-cyan" />,
    'Remote Work Tools': <Users className="w-6 h-6 text-zion-cyan" />,
    'Legal Tech': <BookOpen className="w-6 h-6 text-zion-cyan" />,
    'EdTech': <Lightbulb className="w-6 h-6 text-zion-cyan" />,
    'Real Estate Tech': <Home className="w-6 h-6 text-zion-cyan" />,
    'Supply Chain Tech': <Truck className="w-6 h-6 text-zion-cyan" />,
    'Energy Tech': <Zap className="w-6 h-6 text-zion-cyan" />,
    'Smart Cities': <Building className="w-6 h-6 text-zion-cyan" />,
    'AgriTech': <Leaf className="w-6 h-6 text-zion-cyan" />,
    'Media & Entertainment': <Play className="w-6 h-6 text-zion-cyan" />,
    'Logistics Tech': <Package className="w-6 h-6 text-zion-cyan" />,
    'HR Tech': <Users className="w-6 h-6 text-zion-cyan" />,
    'Sales Tech': <TrendingUp className="w-6 h-6 text-zion-cyan" />,
    'Customer Experience': <Star className="w-6 h-6 text-zion-cyan" />,
    'Productivity Tools': <Zap className="w-6 h-6 text-zion-cyan" />
  };
  
  return iconMap[categoryName] || <Code className="w-6 h-6 text-zion-cyan" />;
}
