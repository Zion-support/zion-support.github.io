import React, { useState } from 'react.ts';
import { Link  } from 'react-router-dom.ts';
import { motion  } from 'framer-motion.ts';
import { Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  Users, 
  Globe, 
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
  Brain,
  Network,
  Server,
  Database,
  Key,
  Monitor,
  TrendingUp,
  Bot,
  Sparkles,
  Clock
 } from 'lucide-react.ts';
import { SEO  } from '@/components/SEO';

const CybersecurityServicesPage: React.FC = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const securityServices = [
    {
      id: 'threat-detection',
      title: 'AI-Powered Threat Detection',
      description: 'Advanced threat detection using machine learning and behavioral analysis',
      price: '$2,500/month',
      features: ['Real-time monitoring', 'AI threat analysis', 'Automated response', '24/7 SOC support'],
      icon: Eye,
      category: 'threat-detection'
    },
    {
      id: 'zero-trust',
      title: 'Zero Trust Security Framework',
      description: 'Implement comprehensive zero trust architecture for your organization',
      price: '$3,200/month',
      features: ['Identity verification', 'Access management', 'Network segmentation', 'Continuous monitoring'],
      icon: Lock,
      category: 'zero-trust'
    },
    {
      id: 'compliance',
      title: 'Compliance & Governance',
      description: 'Meet regulatory requirements with our compliance management platform',
      price: '$1,800/month',
      features: ['SOC2 compliance', 'GDPR compliance', 'HIPAA compliance', 'Audit trails'],
      icon: Shield,
      category: 'compliance'
    },
    {
      id: 'incident-response',
      title: 'Incident Response & Recovery',
      description: 'Rapid response and recovery services for security incidents',
      price: '$4,500/incident',
      features: ['24/7 response team', 'Forensic analysis', 'Recovery planning', 'Post-incident review'],
      icon: AlertTriangle,
      category: 'incident-response'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Shield },
    { id: 'threat-detection', name: 'Threat Detection', icon: Eye },
    { id: 'zero-trust', name: 'Zero Trust', icon: Lock },
    { id: 'compliance', name: 'Compliance', icon: Shield },
    { id: 'incident-response', name: 'Incident Response', icon: AlertTriangle }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? securityServices: securityServices.filter(service  => service.category === selectedCategory);

  return (
    <>
      <SEO 
        title="Cybersecurity Services | Zion Tech Group"
        description="Comprehensive cybersecurity solutions including zero trust security, threat detection, and compliance services to protect your business."
        keywords="cybersecurity, security services, threat detection, compliance, zero trust, incident response"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black">
        {/* Hero Section */}
        <section className="py-32 px-4 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-xl animate-pulse" />
            <div className="absolute top-40 right-20 w-24 h-24 bg-orange-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-40 left-20 w-20 h-20 bg-red-600/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }} />
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent">
                Cybersecurity
              </span>
              <br />
              <span className="text-white">That Never Sleeps</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Protect your business with enterprise-grade cybersecurity solutions. Our AI-powered security 
              platform provides 24/7 protection against evolving cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-xl hover:from-red-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/30 flex items-center">
                <Shield className="w-5 h-5 mr-2"/>
                Get Security Assessment
              </button>
              <button className="px-8 py-4 border border-red-400/50 text-red-400 font-semibold rounded-xl hover:bg-red-400/20 transition-all duration-300 flex items-center">
                <ArrowRight className="w-5 h-5 mr-2"/>
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center ${
                    selectedCategory === category.id
                      ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                      : 'bg-zinc-800/50 text-gray-300 hover:bg-zinc-700/50 border border-zinc-700/50'
                  }`}
                >
                  <category.icon className="w-5 h-5 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredServices.map((service, index)  => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl p-8 border border-zinc-700/50 hover:border-red-400/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-red-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-red-400 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-400">Starting price</div>
                  </div>
                  
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-400 hover:to-orange-400 transition-all duration-300">
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-zinc-800/30 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Zion Tech Group for Cybersecurity?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive approach to cybersecurity combines cutting-edge technology with expert human oversight.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Protection</h3>
                <p className="text-gray-300">
                  Advanced machine learning algorithms detect and respond to threats in real-time, 
                  providing proactive protection against emerging cyber risks.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">24/7 Monitoring</h3>
                <p className="text-gray-300">
                  Round-the-clock security operations center with expert analysts monitoring your 
                  systems and responding to incidents immediately.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Continuous Improvement</h3>
                <p className="text-gray-300">
                  Our security platform learns from every incident, continuously improving 
                  threat detection and response capabilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-12 rounded-3xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-400/50">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Ready to Secure Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Don't wait until it's too late. Get comprehensive cybersecurity protection today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-xl hover:from-red-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/30 flex items-center">
                  <Shield className="w-5 h-5 mr-2"/>
                  Get Security Assessment
                </button>
                <button className="px-8 py-4 border border-red-400/50 text-red-400 font-semibold rounded-xl hover:bg-red-400/20 transition-all duration-300 flex items-center">
                  <ArrowRight className="w-5 h-5 mr-2"/>
                  Schedule Demo
                </button>
              </div>
              
              <p className="text-sm text-gray-400 mt-6">
                Free security assessment • No commitment required • 30-day money-back guarantee
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 border-t border-zinc-700/50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-red-400 mb-4" />
                <h4 className="text-white font-semibold mb-2">Phone</h4>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-red-400 mb-4" />
                <h4 className="text-white font-semibold mb-2">Email</h4>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-red-400 mb-4" />
                <h4 className="text-white font-semibold mb-2">Address</h4>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CybersecurityServicesPage;