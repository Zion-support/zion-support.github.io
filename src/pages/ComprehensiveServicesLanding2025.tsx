import React, { useState, useMemo } from 'react';
import { motion  } from 'framer-motion';
import { Link  } from 'react-router-dom';
import { Search, Filter, Star, TrendingUp, Zap, Brain, Shield, Cloud, Rocket, Heart, Globe, Cpu, Lock, Users, DollarSign, Clock, Target, Award, CheckCircle, ArrowRight, Phone, Mail, MapPin, ExternalLink, ChevronRight, Sparkles, Flame, Lightning, Sun, Moon, Planet, Galaxy, Universe, Infinity, Alpha, Beta, Gamma, Delta, Epsilon, Zeta, Eta, Theta, Iota, Kappa, Lambda, Mu, Nu, Xi, Omicron, Pi, Rho, Sigma, Tau, Upsilon, Phi, Chi, Psi, Omega  } from 'lucide-react';
import { SEO  } from '@/components/SEO';

const ComprehensiveServicesLanding2025: React.FC = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const serviceCategories = [
    {
      id: 'ai-services',
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions for business transformation',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        'AI Business Intelligence Platform',
        'AI Sales Copilot',
        'AI Compliance Assistant',
        'AI Auto Email Responder',
        'AI Compliance Copilot',
        'LLM Content Studio'
      ],
      href: '/ai-services',
      featured: true
    },
    {
      id: 'quantum-services',
      title: 'Quantum Computing',
      description: 'Next-generation quantum solutions for complex problem solving',
      icon: Zap,
      color: 'from-cyan-500 to-blue-500',
      services: [
        'Quantum AI Hybrid Platform',
        'Quantum Financial Trading',
        'Quantum Internet Security',
        'Quantum Neural Networks',
        'Quantum Edge Computing',
        'Quantum Cloud Infrastructure'
      ],
      href: '/revolutionary-services-2030',
      featured: true
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Advanced security solutions for the digital age',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      services: [
        'AI-Powered Cybersecurity Platform',
        'Zero Trust Architecture',
        'Threat Intelligence',
        'Incident Response',
        'Compliance Automation',
        'Security Analytics'
      ],
      href: '/services',
      featured: true
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and automation solutions',
      icon: Cloud,
      color: 'from-blue-500 to-indigo-500',
      services: [
        'Cloud Infrastructure Management',
        'DevOps Automation',
        'Container Orchestration',
        'Serverless Architecture',
        'Cloud Migration',
        'Performance Optimization'
      ],
      href: '/services/cloud-devops',
      featured: false
    },
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure',
      description: 'Enterprise-grade infrastructure and support services',
      icon: Cpu,
      color: 'from-green-500 to-emerald-500',
      services: [
        'Network Infrastructure',
        'Data Center Management',
        'Onsite IT Support',
        'Green IT Solutions',
        '5G Network Solutions',
        'IoT Edge Computing'
      ],
      href: '/services/it-infrastructure',
      featured: false
    },
    {
      id: 'micro-saas',
      title: 'Micro SaaS Solutions',
      description: 'Productized software solutions for specific business needs',
      icon: Rocket,
      color: 'from-yellow-500 to-orange-500',
      services: [
        'Customer Feedback Surveys',
        'FinOps Advisor',
        'Business Intelligence Tools',
        'Process Automation',
        'Analytics Dashboards',
        'Integration Platforms'
      ],
      href: '/micro-saas',
      featured: true
    },
    {
      id: 'healthcare-tech',
      title: 'Healthcare Technology',
      description: 'AI-powered healthcare solutions and diagnostics',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      services: [
        'AI Healthcare Diagnostics',
        'Medical Imaging Analysis',
        'Patient Care Optimization',
        'Telemedicine Platforms',
        'Clinical Decision Support',
        'Healthcare Analytics'
      ],
      href: '/revolutionary-services-2030',
      featured: false
    },
    {
      id: 'smart-cities',
      title: 'Smart Cities & IoT',
      description: 'Sustainable urban infrastructure and IoT solutions',
      icon: Globe,
      color: 'from-teal-500 to-cyan-500',
      services: [
        'Sustainable Smart City Platform',
        'IoT Infrastructure Management',
        'Energy Grid Optimization',
        'Traffic Management',
        'Environmental Monitoring',
        'Public Safety Systems'
      ],
      href: '/revolutionary-services-2030',
      featured: false
    },
    {
      id: 'education-tech',
      title: 'Education Technology',
      description: 'AI-powered learning and educational platforms',
      icon: Users,
      color: 'from-indigo-500 to-purple-500',
      services: [
        'AI Education Platform',
        'Personalized Learning',
        'Intelligent Tutoring',
        'Student Analytics',
        'Content Management',
        'Assessment Tools'
      ],
      href: '/revolutionary-services-2030',
      featured: false
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing & Industry 4.0',
      description: 'Smart manufacturing and industrial automation',
      icon: Cpu,
      color: 'from-slate-500 to-gray-500',
      services: [
        'AI Manufacturing Platform',
        'Predictive Maintenance',
        'Quality Control Automation',
        'Supply Chain Optimization',
        'Industrial IoT',
        'Smart Factory Solutions'
      ],
      href: '/revolutionary-services-2030',
      featured: false
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Automation':
        return 'from-purple-500 to-pink-500';
      case 'AI & Security':
        return 'from-red-500 to-orange-500';
      case 'AI & Marketing':
        return 'from-blue-500 to-cyan-500';
      case 'AI & Sales':
        return 'from-green-500 to-emerald-500';
      case 'AI & Customer Experience':
        return 'from-indigo-500 to-purple-500';
      case 'AI & Analytics':
        return 'from-cyan-500 to-blue-500';
      case 'Quantum Computing':
        return 'from-violet-500 to-purple-500';
      case 'IoT & Edge Computing':
        return 'from-orange-500 to-red-500';
      case 'Blockchain & Web3':
        return 'from-yellow-500 to-orange-500';
      case 'Sustainability & Technology':
        return 'from-green-500 to-teal-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  const categories = Array.from(new Set(INNOVATIVE_SERVICES_2025.map(service => service.category)));
  const servicesByCategory = categories.map(category => ({
    category,
    services: INNOVATIVE_SERVICES_2025.filter(service => service.category === category),
    icon: getCategoryIcon(category),
    color: getCategoryColor(category)
  }));

  const totalServices = INNOVATIVE_SERVICES_2025.length;
  const totalValue = INNOVATIVE_SERVICES_2025.reduce((sum, service) => sum + service.price, 0);
  const avgROI = INNOVATIVE_SERVICES_2025.reduce((sum, service) => {
    const roi = parseInt(service.roi.replace('%', ''));
    return sum + roi;
  }, 0) / totalServices;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Services Landing 2025 - Zion Tech Group"
        description="Discover our complete portfolio of innovative technology services. From AI and Quantum Computing to IoT and Blockchain solutions - transform your business with cutting-edge technology."
      />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Business with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}AI-Powered Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover our comprehensive suite of cutting-edge micro SAAS services, IT solutions, and AI platforms 
            designed to revolutionize your operations and drive unprecedented growth.
          </p>
          
          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-blue-400">12+</div>
              <div className="text-sm text-gray-400">Service Categories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-green-400">$150B+</div>
              <div className="text-sm text-gray-400">Total Market Size</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-purple-400">15K+</div>
              <div className="text-sm text-gray-400">Happy Customers</div>
            </div>
            <div className="bg-white/10 backdrop-bl-lg rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-yellow-400">99.9%</div>
              <div className="text-sm text-gray-400">Uptime Guarantee</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/enhanced-services-2025" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105">
              Explore All Services
            </Link>
            <a href="tel:+13024640950" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105">
              Call Now: +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored solutions designed for your specific industry challenges and opportunities
            </p>
          </div>

          <div className="grid gap-8 grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3">
            {featuredCategories.map((category, index)  => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-slate-900/60 backdrop-blur border border-cyan-400/15 hover:border-cyan-400/40 transition-all duration-300 rounded-2xl p-6 hover:shadow-2xl hover:shadow-cyan-400/10 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-300 transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                    {category.description}
                  </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredServices.map((service) => (<div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden hover:border-blue-400 transition-all duration-300 hover:scale-105">
                {/* Service Header */}
                <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600">
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-white/90 text-sm">{service.tagline}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-white">
                      {service.price}
                      <span className="text-sm text-white/70">{service.period}</span>
                    </span>
                    <div className="flex items-center text-yellow-400">
                      {'★'.repeat(Math.floor(service.rating))}
                      <span className="text-white/70 ml-1">({service.reviews})</span>
                    </div>
                  </div>
                </div>

      {/* All Categories */}
      <section className="py-16 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Complete Service Portfolio</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Browse our comprehensive range of technology services across all categories
            </p>
          </div>

          <div className="grid gap-6 grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3">
            {filteredCategories.map((category, index)  => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-slate-800/40 backdrop-blur border border-slate-700/30 hover:border-cyan-400/30 transition-all duration-300 rounded-xl p-5 hover:shadow-lg hover:shadow-cyan-400/5"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Key Benefits */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Benefits</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (<div key={index} className="text-xs text-gray-300 flex items-center">
                          <span className="text-green-400 mr-2">✓</span>
                          {feature}
                        </div>))}
                    </div>
                  </div>

                  {/* Market Info */}
                  <div className="grid grid-cols-2 gap-4 text-xs text-gray-400 mb-4">
                    <div>
                      <span className="text-blue-400">Market:</span> {service.marketSize}
                    </div>
                    <div>
                      <span className="text-blue-400">Customers:</span> {service.customers.toLocaleString()}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105">
                      Learn More
                    </button>
                    <a href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`} className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105">
                      Contact
                    </a>
                  </div>
                </div>
              </div>))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
              <p className="text-gray-300">
                We stay ahead of the curve with the latest AI, quantum computing, and emerging technologies
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
              <p className="text-gray-300">
                Our customers see an average of 300-500% ROI within 3-6 months of implementation
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
              <p className="text-gray-300">
                SOC2, ISO 27001, and industry-specific compliance certifications for your peace of mind
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Rapid Deployment</h3>
              <p className="text-gray-300">
                Most solutions can be deployed in 1-4 weeks with our streamlined implementation process
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-3">Global Support</h3>
              <p className="text-gray-300">
                24/7 support and maintenance with dedicated customer success managers
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-3">Custom Solutions</h3>
              <p className="text-gray-300">
                Tailored implementations and custom development to meet your specific requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Competitive Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent pricing that delivers exceptional value compared to traditional enterprise solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-center mb-4">Starter</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-blue-400">$199</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-2">✓</span>
                  Core features and functionality
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-2">✓</span>
                  Standard support
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-2">✓</span>
                  Basic integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-2">✓</span>
                  Community forum access
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                Get Started
              </button>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 border border-blue-400 transform scale-105">
              <div className="text-center mb-2">
                <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-white">Professional</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-white">$499</span>
                <span className="text-white/70">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-white">
                  <span className="text-yellow-400 mr-2">✓</span>
                  Everything in Starter
                </li>
                <li className="flex items-center text-white">
                  <span className="text-yellow-400 mr-2">✓</span>
                  Advanced features
                </li>
                <li className="flex items-center text-white">
                  <span className="text-yellow-400 mr-2">✓</span>
                  Priority support
                </li>
                <li className="flex items-center text-white">
                  <span className="text-yellow-400 mr-2">✓</span>
                  Custom integrations
                </li>
                <li className="flex items-center text-white">
                  <span className="text-yellow-400 mr-2">✓</span>
                  Dedicated account manager
                </li>
              </ul>
              <button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                Get Started
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-center mb-4">Enterprise</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-purple-400">Custom</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-2">✓</span>
                  Everything in Professional
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-2">✓</span>
                  Custom development
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-2">✓</span>
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-2">✓</span>
                  SLA guarantees
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-2">✓</span>
                  On-premise options
                </li>
              </ul>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our solutions have transformed businesses across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">🏥</div>
                <div>
                  <h4 className="font-semibold">Healthcare Provider</h4>
                  <p className="text-sm text-gray-400">500+ bed hospital system</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                "Our AI Healthcare Analytics Platform reduced patient readmission rates by 35% and improved operational efficiency by 40%."
              </p>
              <div className="text-green-400 font-semibold">450% ROI in 6 months</div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">🏭</div>
                <div>
                  <h4 className="font-semibold">Manufacturing Company</h4>
                  <p className="text-sm text-gray-400">Global automotive supplier</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                "The IoT Edge Computing Platform increased production efficiency by 28% and reduced maintenance costs by 45%."
              </p>
              <div className="text-green-400 font-semibold">380% ROI in 8 months</div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">💰</div>
                <div>
                  <h4 className="font-semibold">Financial Services</h4>
                  <p className="text-sm text-gray-400">Regional bank</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                "Our Quantum-Safe Cybersecurity Platform protected against advanced threats and ensured regulatory compliance."
              </p>
              <div className="text-green-400 font-semibold">320% ROI in 4 months</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses that have already revolutionized their operations with our AI-powered solutions.
          </p>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 border border-blue-400">
            <h3 className="text-2xl font-bold text-white mb-4">Get Started Today</h3>
            <p className="text-white/90 mb-6">
              Schedule a free consultation and discover how our solutions can drive innovation in your organization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                Call Now: +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                Email: kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="mt-6 text-white/70 text-sm">
              <p>📍 364 E Main St STE 1008 Middletown DE 19709</p>
              <p>🌐 ziontechgroup.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>);
};
export default ComprehensiveServicesLanding2025;
