import React from 'react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { servicesCatalog } from '../data/servicesCatalog';
import { 
  Code, Zap, Users, TrendingUp, Shield, Building, Cpu, BarChart3,
  Brain, Globe, ShoppingCart, Heart, GraduationCap, Home, Scale,
  Factory, Leaf, Truck, Eye, TestTube, Rocket, Lock, Database,
  Cloud, Network, Smartphone, Target, ChartLine, Lightbulb, Mail
} from 'lucide-react';

const categoryIcons: { [key: string]: React.ComponentType<any> } = {
  'Micro SaaS': Code,
  'AI Solutions': Brain,
  'IT Services': Cpu,
  'Cybersecurity': Shield,
  'Data & Analytics': BarChart3,
  'Cloud & DevOps': Cloud,
  'Quantum Computing': Rocket,
  'Blockchain & Web3': Lock,
  'IoT & Edge': Smartphone,
  'Green Tech': Leaf,
  'Space Tech': Rocket,
  'BioTech & Health': Heart,
  'FinTech & DeFi': ChartLine,
  'Metaverse & AR/VR': Eye,
  'Autonomous Systems': Target,
  'Advanced AI & ML': Brain,
  'Digital Marketing & SEO': Target,
  'E-commerce & Retail': ShoppingCart,
  'Healthcare & Telemedicine': Heart,
  'Education & E-Learning': GraduationCap,
  'Real Estate & Property': Home,
  'Legal & Compliance': Scale,
  'Manufacturing & Industry 4.0': Factory,
  'Energy & Sustainability': Leaf,
  'Transportation & Logistics': Truck
};

export default function ComprehensiveServicesShowcase2025() {
  const contact = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const benefits = [
    {
      title: "Cutting-Edge Technology",
      description: "Leverage the latest AI, quantum computing, and emerging technologies",
      icon: Lightbulb
    },
    {
      title: "Proven ROI",
      description: "Our solutions deliver measurable business impact and cost savings",
      icon: TrendingUp
    },
    {
      title: "Expert Support",
      description: "24/7 technical support and dedicated success managers",
      icon: Users
    },
    {
      title: "Scalable Solutions",
      description: "Grow with confidence using our enterprise-grade infrastructure",
      icon: Zap
    }
  ];

  const stats = [
    { number: "50+", label: "Micro SaaS Solutions" },
    { number: "25+", label: "AI & ML Services" },
    { number: "15+", label: "Industry Verticals" },
    { number: "99.9%", label: "Uptime Guarantee" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Comprehensive Services Showcase 2025 - Zion Tech Group"
        description="Explore our complete portfolio of innovative micro SaaS, AI solutions, and enterprise services. From cutting-edge AI to quantum computing, discover solutions that transform your business."
        keywords="micro SaaS, AI solutions, enterprise services, quantum computing, blockchain, IoT, cybersecurity, Zion Tech Group"
        canonical="https://ziontechgroup.com/comprehensive-services-showcase-2025"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Comprehensive Services
            <span className="block text-3xl md:text-5xl text-zion-cyan mt-2">
              Showcase 2025
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Discover our complete portfolio of innovative micro SaaS solutions, cutting-edge AI services, 
            and enterprise-grade technology solutions designed to transform your business and drive growth.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-zion-blue-dark/50 border border-zion-cyan/30 rounded-xl p-4">
                <div className="text-3xl font-bold text-zion-cyan">{stat.number}</div>
                <div className="text-zion-slate-light text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              to="/pricing" 
              className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose Zion Tech Group?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-zion-cyan/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Catalog */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Complete Service Portfolio
          </h2>
          
          <div className="space-y-16">
            {servicesCatalog.map(category => (
              <div key={category.slug} className="bg-zion-blue-dark/30 border border-zion-blue-light rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-8">
                  {categoryIcons[category.name] && (
                    <div className="bg-zion-cyan/20 w-12 h-12 rounded-lg flex items-center justify-center">
                      {React.createElement(categoryIcons[category.name], { 
                        className: "w-6 h-6 text-zion-cyan" 
                      })}
                    </div>
                  )}
                  <h3 className="text-2xl md:text-3xl font-semibold text-white">{category.name}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map(item => (
                    <div key={item.id} className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 hover:border-zion-cyan transition-all hover:shadow-lg hover:shadow-zion-cyan/20">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                          <p className="text-zion-slate-light text-sm mt-1">{item.description}</p>
                        </div>
                        <div className="text-right min-w-[100px]">
                          <div className="text-zion-cyan font-semibold text-lg">{item.price}</div>
                          <div className="text-zion-slate-light text-xs">
                            {item.billing === 'month' ? 'Monthly' : item.billing === 'hour' ? 'Hourly' : 'Project-based'}
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2 text-zion-slate-light text-sm list-disc list-inside mb-4">
                        {item.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>

                      <div className="flex items-center justify-between">
                        <Link 
                          to={item.href} 
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium py-2 px-4 rounded-lg border border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/20 transition-all"
                        >
                          <span>{item.ctaLabel}</span>
                        </Link>
                        <span className="text-zion-slate-light text-xs bg-zion-blue-light/20 px-2 py-1 rounded">
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

      {/* Industry Solutions */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Industry-Specific Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zion-blue-light/10 border border-zion-cyan/30 rounded-xl p-6 text-center">
              <div className="bg-zion-cyan/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Healthcare & Life Sciences</h3>
              <p className="text-zion-slate-light text-sm">
                AI-powered medical imaging, telemedicine platforms, and compliance solutions
              </p>
            </div>
            
            <div className="bg-zion-blue-light/10 border border-zion-cyan/30 rounded-xl p-6 text-center">
              <div className="bg-zion-cyan/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Manufacturing & Industry 4.0</h3>
              <p className="text-zion-slate-light text-sm">
                Smart factories, predictive maintenance, and quality control automation
              </p>
            </div>
            
            <div className="bg-zion-blue-light/10 border border-zion-cyan/30 rounded-xl p-6 text-center">
              <div className="bg-zion-cyan/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">E-commerce & Retail</h3>
              <p className="text-zion-slate-light text-sm">
                AI-driven pricing, inventory optimization, and customer experience enhancement
              </p>
            </div>
            
            <div className="bg-zion-blue-light/10 border border-zion-cyan/30 rounded-xl p-6 text-center">
              <div className="bg-zion-cyan/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Education & Training</h3>
              <p className="text-zion-slate-light text-sm">
                Personalized learning platforms and AI-powered educational content creation
              </p>
            </div>
            
            <div className="bg-zion-blue-light/10 border border-zion-cyan/30 rounded-xl p-6 text-center">
              <div className="bg-zion-cyan/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Real Estate & Property</h3>
              <p className="text-zion-slate-light text-sm">
                AI-powered property valuation and market analysis platforms
              </p>
            </div>
            
            <div className="bg-zion-blue-light/10 border border-zion-cyan/30 rounded-xl p-6 text-center">
              <div className="bg-zion-cyan/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Legal & Compliance</h3>
              <p className="text-zion-slate-light text-sm">
                Contract analysis, legal research, and compliance monitoring automation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Cutting-Edge Technology Stack
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-zion-cyan/20 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-10 h-10 text-zion-cyan" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI & Machine Learning</h3>
              <p className="text-zion-slate-light text-sm">
                TensorFlow, PyTorch, OpenAI, Custom Models
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-zion-cyan/20 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-10 h-10 text-zion-cyan" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quantum Computing</h3>
              <p className="text-zion-slate-light text-sm">
                IBM Q, Google Quantum, Custom Algorithms
              </p>
            </div>
            
            <div className="bg-zion-cyan/20 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Lock className="w-10 h-10 text-zion-cyan" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Blockchain & Web3</h3>
              <p className="text-zion-slate-light text-sm">
                Ethereum, Solana, Smart Contracts, DeFi
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-zion-cyan/20 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-10 h-10 text-zion-cyan" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Cloud & DevOps</h3>
              <p className="text-zion-slate-light text-sm">
                AWS, Azure, GCP, Kubernetes, Docker
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Ready to Transform Your Business?
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-zion-blue-light/10 border border-zion-cyan/30 rounded-xl p-6 text-center">
                <div className="bg-zion-cyan/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Expert Consultation</h3>
                <p className="text-zion-slate-light text-sm">
                  Get personalized recommendations from our technology experts
                </p>
              </div>
              
              <div className="bg-zion-blue-light/10 border border-zion-cyan/30 rounded-xl p-6 text-center">
                <div className="bg-zion-cyan/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Rapid Deployment</h3>
                <p className="text-zion-slate-light text-sm">
                  Quick implementation with our proven deployment methodologies
                </p>
              </div>
              
              <div className="bg-zion-blue-light/10 border border-zion-cyan/30 rounded-xl p-6 text-center">
                <div className="bg-zion-cyan/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Ongoing Support</h3>
                <p className="text-zion-slate-light text-sm">
                  24/7 technical support and continuous optimization
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                to="/contact" 
                className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
              >
                Start Your Transformation Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-8">
              Contact Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-zion-cyan/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-zion-cyan">{contact.mobile}</p>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-cyan/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-zion-cyan">{contact.email}</p>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-cyan/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-zion-slate-light text-sm">{contact.address}</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <a 
                href={contact.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zion-cyan hover:text-zion-cyan-light underline"
              >
                Visit our website: {contact.website}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
