import React from 'react';
import { Link } from 'react-router-dom';
import { revolutionaryMicroSaasServices2025, revolutionaryITServices2025, revolutionaryAIServices2025 } from '../data/revolutionaryServices2025';
import { Phone, Mail, Globe, MapPin, ArrowRight, Star, TrendingUp, Users, Zap, Shield, Cloud, Brain, CheckCircle, Clock, DollarSign, Target, Rocket } from 'lucide-react';

const RevolutionaryServicesLanding2025: React.FC = () => {
  const featuredServices = [
    revolutionaryMicroSaasServices2025[0], // AI Business Intelligence
    revolutionaryITServices2025[0], // AI Cybersecurity
    revolutionaryAIServices2025[0] // AI Enterprise Automation
  ];

  const stats = [
    { label: 'Total Services', value: '16', icon: <Users className="w-6 h-6" /> },
    { label: 'Micro SAAS', value: '10', icon: <Zap className="w-6 h-6" /> },
    { label: 'IT Services', value: '3', icon: <Shield className="w-6 h-6" /> },
    { label: 'AI Services', value: '3', icon: <Brain className="w-6 h-6" /> }
  ];

  const benefits = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Cutting-Edge Innovation',
      description: 'Stay ahead with the latest AI and technology advancements'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Proven ROI',
      description: 'Average 300%+ return on investment within 6 months'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Rapid Implementation',
      description: 'Get up and running in as little as 1-2 weeks'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Competitive Pricing',
      description: 'Affordable solutions that fit any business budget'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Revolutionary Services 2025
            </h1>
            <p className="text-2xl mb-8 leading-relaxed max-w-4xl mx-auto">
              Transform your business with our cutting-edge AI-powered micro SAAS, IT, and AI services. 
              Experience the future of technology with intelligent automation, advanced analytics, and innovative solutions.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/revolutionary-services-showcase-2025"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 text-lg group"
              >
                Explore All Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/revolutionary-pricing-guide-2025"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
              >
                <DollarSign className="w-5 h-5" />
                View Pricing
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div className="p-2 bg-white/20 rounded-lg">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Banner */}
      <div className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600">
                Contact our experts to discuss your needs and discover the perfect solution
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of revolutionary services designed to 
              transform your business operations and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Micro SAAS */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Micro SAAS Solutions</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered business applications that streamline operations and boost productivity
                </p>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {revolutionaryMicroSaasServices2025.length} Services
                </div>
                <div className="text-sm text-gray-500">
                  Starting from ${Math.min(...revolutionaryMicroSaasServices2025.map(s => s.price))}/month
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>AI Business Intelligence</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Customer Support Automation</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Content Creation Platform</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Project Management</span>
                </div>
              </div>

              <Link
                to="/revolutionary-services-showcase-2025"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium inline-flex items-center justify-center gap-2"
              >
                Explore Micro SAAS
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* IT Services */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">IT Infrastructure</h3>
                <p className="text-gray-600 mb-4">
                  Advanced cybersecurity, cloud optimization, and DevOps automation solutions
                </p>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {revolutionaryITServices2025.length} Services
                </div>
                <div className="text-sm text-gray-500">
                  Starting from ${Math.min(...revolutionaryITServices2025.map(s => s.price))}/month
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>AI Cybersecurity Suite</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Cloud Infrastructure Optimization</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>DevOps Automation Platform</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>24/7 Monitoring & Support</span>
                </div>
              </div>

              <Link
                to="/revolutionary-services-showcase-2025"
                className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors text-center font-medium inline-flex items-center justify-center gap-2"
              >
                Explore IT Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* AI Services */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">AI & Machine Learning</h3>
                <p className="text-gray-600 mb-4">
                  Enterprise automation, predictive analytics, and natural language processing
                </p>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {revolutionaryAIServices2025.length} Services
                </div>
                <div className="text-sm text-gray-500">
                  Starting from ${Math.min(...revolutionaryAIServices2025.map(s => s.price))}/month
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Enterprise Automation Platform</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Predictive Analytics</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Natural Language Processing</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Custom AI Models</span>
                </div>
              </div>

              <Link
                to="/revolutionary-services-showcase-2025"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors text-center font-medium inline-flex items-center justify-center gap-2"
              >
                Explore AI Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Featured Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular and innovative solutions that are transforming 
              businesses across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={service.id} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {index === 0 && <Brain className="w-8 h-8 text-blue-600" />}
                    {index === 1 && <Shield className="w-8 h-8 text-purple-600" />}
                    {index === 2 && <Rocket className="w-8 h-8 text-green-600" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    ${service.price}
                  </div>
                  <div className="text-sm text-gray-500">per {service.pricingModel}</div>
                </div>

                <div className="space-y-3 mb-6">
                  {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-3 text-sm text-gray-700">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <Link
                    to="/revolutionary-services-showcase-2025"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium inline-flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={`tel:${service.contactInfo.phone}`}
                    className="w-full border border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center font-medium inline-flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business expertise to deliver 
              solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses that have already transformed their operations 
            with our revolutionary AI-powered services. Get started today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/revolutionary-services-showcase-2025"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
            >
              Explore All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/revolutionary-pricing-guide-2025"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
            >
              <DollarSign className="w-5 h-5" />
              View Pricing
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">+1 302 464 0950</div>
              <div className="text-blue-100">Call us anytime</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-white mb-2">kleber@ziontechgroup.com</div>
              <div className="text-blue-100">Email our experts</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-white mb-2">https://ziontechgroup.com</div>
              <div className="text-blue-100">Visit our website</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Zion Tech Group</h3>
                  <p className="text-sm text-gray-400">Revolutionary Technology Solutions</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Pioneering the future of technology with AI-powered solutions that transform businesses 
                and empower innovation. We specialize in cutting-edge AI, IT infrastructure, and micro SAAS solutions.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/revolutionary-services-showcase-2025" className="hover:text-white transition-colors">Services Showcase</Link></li>
                <li><Link to="/revolutionary-pricing-guide-2025" className="hover:text-white transition-colors">Pricing Guide</Link></li>
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span>ziontechgroup.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-gray-400">
                <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
              </div>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RevolutionaryServicesLanding2025;