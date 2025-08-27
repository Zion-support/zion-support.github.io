import React, { useState, useEffect } from 'react';
import { SEO } from "../components/SEOHead";
import { Link } from 'react-router-dom';
import { Brain, Zap, Shield, Users, TrendingUp, Globe, Rocket, CheckCircle, ArrowRight, Phone, Mail, MapPin, ChevronRight, Clock, BarChart3, Cpu, ShieldCheck, Building2 } from 'lucide-react';
import ultimateInnovativeServices2025 from '../../data/2025-ultimate-innovative-services-expansion';
export default function UltimateHomepage2025() {
    const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setCurrentServiceIndex((prev) => (prev + 1) % ultimateInnovativeServices2025.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    const featuredServices = ultimateInnovativeServices2025.filter(service => service.popular).slice(0, 6);
    const allServices = ultimateInnovativeServices2025.slice(0, 9);
    const stats = [
        { number: '10+', label: 'Revolutionary Services', icon: Rocket },
        { number: '500+', label: 'Happy Customers', icon: Users },
        { number: '99.9%', label: 'Uptime Guarantee', icon: ShieldCheck },
        { number: '24/7', label: 'Expert Support', icon: Clock }
    ];
    const benefits = [
        {
            icon: Brain,
            title: 'AI-Powered Intelligence',
            description: 'Advanced artificial intelligence that learns, adapts, and optimizes your business processes automatically.',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Shield,
            title: 'Quantum-Secure Protection',
            description: 'Unbreakable security with quantum-resistant encryption and AI-powered threat detection.',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: Zap,
            title: 'Autonomous Operations',
            description: 'Self-managing systems that run your business operations with minimal human intervention.',
            color: 'from-purple-500 to-indigo-500'
        },
        {
            icon: BarChart3,
            title: 'Predictive Analytics',
            description: 'Forecast trends, identify opportunities, and make data-driven decisions with confidence.',
            color: 'from-orange-500 to-red-500'
        }
    ];
    const industries = [
        { name: 'Financial Services', icon: TrendingUp, color: 'from-emerald-500 to-teal-500' },
        { name: 'Healthcare', icon: Users, color: 'from-red-500 to-pink-500' },
        { name: 'Manufacturing', icon: Building2, color: 'from-blue-500 to-cyan-500' },
        { name: 'Retail & E-commerce', icon: Globe, color: 'from-yellow-500 to-orange-500' },
        { name: 'Technology', icon: Cpu, color: 'from-purple-500 to-indigo-500' },
        { name: 'Government', icon: Shield, color: 'from-gray-500 to-blue-500' }
    ];
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead title="Zion Tech Group - Revolutionary AI & Quantum Solutions 2025" description="Transform your business with our revolutionary AI-powered, quantum-secure, and autonomous business solutions. Leading the future of technology." keywords="AI services, quantum computing, autonomous systems, cybersecurity, business automation, Zion Tech Group, innovative solutions"/>
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Revolutionary
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI & Quantum
                </span>
                <br />
                <span className="text-white">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with cutting-edge AI-powered, quantum-secure, and autonomous solutions. 
                Lead the future of technology with Zion Tech Group.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/ultimate-services-showcase-2025" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  <Rocket className="w-5 h-5 mr-2"/>
                  Explore Services
                </Link>
                <a href="tel:+13024640950" className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300">
                  <Phone className="w-5 h-5 mr-2"/>
                  Call Now
                </a>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400"/>
                  <span>AI-Powered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400"/>
                  <span>Quantum-Secure</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400"/>
                  <span>Autonomous</span>
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Featured Service
                  </h3>
                  <p className="text-gray-400">Discover our revolutionary solutions</p>
                </div>
                {ultimateInnovativeServices2025[currentServiceIndex] && (<div className="text-center">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${ultimateInnovativeServices2025[currentServiceIndex].color} mb-4`}>
                      <span className="text-4xl">{ultimateInnovativeServices2025[currentServiceIndex].icon}</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {ultimateInnovativeServices2025[currentServiceIndex].name}
                    </h4>
                    <p className="text-gray-300 mb-4">
                      {ultimateInnovativeServices2025[currentServiceIndex].tagline}
                    </p>
                    <div className="text-3xl font-bold text-blue-400 mb-4">
                      {ultimateInnovativeServices2025[currentServiceIndex].price}
                      <span className="text-lg text-gray-400">{ultimateInnovativeServices2025[currentServiceIndex].period}</span>
                    </div>
                    <Link to={`/ultimate-services-showcase-2025`} className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-2"/>
                    </Link>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-y border-blue-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5 text-blue-400"/>
              <div>
                <p className="text-sm text-gray-300">Phone</p>
                <a href="tel:+13024640950" className="text-blue-400 font-semibold hover:text-blue-300">
                  +1 302 464 0950
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-5 h-5 text-purple-400"/>
              <div>
                <p className="text-sm text-gray-300">Email</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 font-semibold hover:text-purple-300">
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-5 h-5 text-pink-400"/>
              <div>
                <p className="text-sm text-gray-300">Address</p>
                <p className="text-pink-400 font-semibold">
                  364 E Main St STE 1008<br />Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (<div key={index} className="text-center">
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.icon === Rocket ? 'from-blue-500 to-purple-500' : stat.icon === Users ? 'from-green-500 to-emerald-500' : stat.icon === ShieldCheck ? 'from-purple-500 to-indigo-500' : 'from-orange-500 to-red-500'} mb-4`}>
                <stat.icon className="w-8 h-8 text-white"/>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine cutting-edge technology with proven business expertise to deliver 
            solutions that transform industries and drive unprecedented growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (<div key={index} className="text-center group">
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${benefit.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
            </div>))}
        </div>
      </div>

      {/* Featured Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Featured Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our most popular revolutionary solutions that are transforming businesses worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (<div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 group">
              <div className="flex items-start justify-between mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color}`}>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full">
                  Popular
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.tagline}
              </p>
              <div className="text-2xl font-bold text-blue-400 mb-4">
                {service.price}
                <span className="text-lg text-gray-400">{service.period}</span>
              </div>
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature, index) => (<li key={index} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0"/>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>))}
                </ul>
              </div>
              <Link to={`/ultimate-services-showcase-2025`} className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
              </Link>
            </div>))}
        </div>
        <div className="text-center mt-12">
          <Link to="/ultimate-services-showcase-2025" className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300">
            View All Services
            <ChevronRight className="w-5 h-5 ml-2"/>
          </Link>
        </div>
      </div>

      {/* Industries Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Industries We Transform
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our revolutionary solutions are designed to meet the unique challenges 
            and opportunities across diverse industries.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (<div key={index} className="text-center group">
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${industry.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <industry.icon className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                {industry.name}
              </h3>
            </div>))}
        </div>
      </div>

      {/* All Services Preview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Complete Service Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive range of AI-powered, quantum-secure, and autonomous solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allServices.map((service, index) => (<div key={service.id} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300 group">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${service.color}`}>
                  <span className="text-lg">{service.icon}</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-400">{service.category}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                {service.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-blue-400 font-semibold">{service.price}</span>
                <Link to={`/ultimate-services-showcase-2025`} className="text-blue-400 hover:text-blue-300 transition-colors">
                  <ChevronRight className="w-4 h-4"/>
                </Link>
              </div>
            </div>))}
        </div>
        <div className="text-center mt-12">
          <Link to="/ultimate-services-showcase-2025" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            <Rocket className="w-5 h-5 mr-2"/>
            Explore All Services
          </Link>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-t border-blue-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the future of business with our revolutionary AI-powered, quantum-secure, and autonomous solutions. 
              Get in touch today to discover how we can help you achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                <Rocket className="w-5 h-5 mr-2"/>
                Get Started Today
              </Link>
              <a href="tel:+13024640950" className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300">
                <Phone className="w-5 h-5 mr-2"/>
                Speak with an Expert
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>);
}
