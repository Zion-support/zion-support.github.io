import React from 'react';
import Link from 'next/link';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Server, 
  Zap, 
  Globe, 
  Cpu, 
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions including machine learning models, natural language processing, and predictive analytics.',
      features: ['Custom AI Models', 'ML Pipeline Development', 'Predictive Analytics', 'Computer Vision'],
      link: '/services/ai',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure, automated deployment pipelines, and comprehensive DevOps solutions.',
      features: ['Cloud Migration', 'CI/CD Pipelines', 'Infrastructure as Code', 'Cloud Security'],
      link: '/services/cloud',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security solutions protecting your digital assets from evolving cyber threats.',
      features: ['Threat Detection', 'Security Audits', 'Incident Response', 'Compliance'],
      link: '/services/cybersecurity',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Server,
      title: 'IT Infrastructure',
      description: 'Robust and scalable infrastructure solutions designed for modern business needs.',
      features: ['Network Design', 'Server Management', 'Storage Solutions', 'Backup & Recovery'],
      link: '/services/infrastructure',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business operations.',
      features: ['Process Automation', 'Legacy Modernization', 'Digital Strategy', 'Change Management'],
      link: '/services/transformation',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Cpu,
      title: 'Quantum Computing',
      description: 'Next-generation quantum computing solutions for complex computational challenges.',
      features: ['Quantum Algorithms', 'Quantum Software', 'Research & Development', 'Consulting'],
      link: '/services/quantum',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const additionalServices = [
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
      link: '/services/data-analytics'
    },
    {
      icon: Network,
      title: 'Blockchain & Web3',
      description: 'Decentralized solutions and blockchain technology for the future of digital business.',
      link: '/services/blockchain'
    },
    {
      icon: Lock,
      title: 'Compliance & Governance',
      description: 'Ensure your business meets regulatory requirements with our compliance solutions.',
      link: '/services/compliance'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions designed specifically for your business requirements.',
      link: '/services/custom-development'
    }
  ];

  const industries = [
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Retail',
    'Education',
    'Government',
    'Energy',
    'Transportation'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions designed to drive innovation, enhance efficiency, and secure your digital future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Started
            </Link>
            <Link
              to="/comprehensive-pricing-2025"
              className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Core Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-700/70 transition-all duration-300 hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Additional Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-slate-700/50 hover:bg-slate-700/70 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-slate-700/50 hover:bg-slate-700/70 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Why Choose Zion Tech Group?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
              <p className="text-gray-300">We stay ahead of technology trends, ensuring your solutions are future-proof and cutting-edge.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Proven Expertise</h3>
              <p className="text-gray-300">15+ years of experience delivering successful technology solutions across industries.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Dedicated Support</h3>
              <p className="text-gray-300">24/7 support and maintenance to ensure your systems run smoothly and efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our services can help you achieve your technology goals and drive business success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get a Free Consultation
            </Link>
            <Link
              to="/case-studies"
              className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;