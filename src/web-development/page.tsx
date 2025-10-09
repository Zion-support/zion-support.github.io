'use client';
import React from 'react';
import { Code, Globe, Smartphone, Zap, Shield, BarChart, CheckCircle, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const WebDevelopmentPage: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Modern, responsive web applications with cutting-edge technologies',
      price: '$1,200/month',
      features: ['React/Next.js', 'Vue.js/Angular', 'TypeScript', 'Responsive Design', 'Performance Optimization', 'SEO Optimization'],
      color: 'text-blue-400'
    },
    {
      icon: Globe,
      title: 'Backend Development',
      description: 'Scalable server-side applications and APIs',
      price: '$1,500/month',
      features: ['Node.js/Python', 'RESTful APIs', 'GraphQL', 'Database Design', 'Microservices', 'Cloud Integration'],
      color: 'text-green-400'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications for iOS and Android',
      price: '$2,000/month',
      features: ['React Native', 'Flutter', 'Native Development', 'App Store Optimization', 'Push Notifications', 'Offline Support'],
      color: 'text-purple-400'
    },
    {
      icon: Zap,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment integration',
      price: '$1,800/month',
      features: ['Shopify/WooCommerce', 'Custom E-commerce', 'Payment Gateways', 'Inventory Management', 'Order Processing', 'Analytics'],
      color: 'text-orange-400'
    },
    {
      icon: Shield,
      title: 'Security Implementation',
      description: 'Comprehensive security measures for web applications',
      price: '$1,000/month',
      features: ['SSL Certificates', 'Authentication', 'Authorization', 'Data Encryption', 'Security Audits', 'Compliance'],
      color: 'text-red-400'
    },
    {
      icon: BarChart,
      title: 'Performance Optimization',
      description: 'Speed and performance optimization for web applications',
      price: '$800/month',
      features: ['Code Optimization', 'CDN Setup', 'Caching Strategies', 'Image Optimization', 'Database Tuning', 'Monitoring'],
      color: 'text-cyan-400'
    }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend', icon: '⚛️' },
    { name: 'Next.js', category: 'Frontend', icon: '▲' },
    { name: 'Vue.js', category: 'Frontend', icon: '💚' },
    { name: 'Angular', category: 'Frontend', icon: '🅰️' },
    { name: 'Node.js', category: 'Backend', icon: '🟢' },
    { name: 'Python', category: 'Backend', icon: '🐍' },
    { name: 'PHP', category: 'Backend', icon: '🐘' },
    { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
    { name: 'MongoDB', category: 'Database', icon: '🍃' },
    { name: 'AWS', category: 'Cloud', icon: '☁️' },
    { name: 'Docker', category: 'DevOps', icon: '🐳' },
    { name: 'Kubernetes', category: 'DevOps', icon: '⚓' }
  ];

  const process = [
    {
      step: '1',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan',
      icon: '🔍'
    },
    {
      step: '2',
      title: 'Design & Prototyping',
      description: 'Create wireframes, mockups, and interactive prototypes',
      icon: '🎨'
    },
    {
      step: '3',
      title: 'Development',
      description: 'Build your application using modern technologies and best practices',
      icon: '💻'
    },
    {
      step: '4',
      title: 'Testing & Quality Assurance',
      description: 'Comprehensive testing to ensure reliability and performance',
      icon: '🧪'
    },
    {
      step: '5',
      title: 'Deployment & Launch',
      description: 'Deploy your application and ensure smooth launch',
      icon: '🚀'
    },
    {
      step: '6',
      title: 'Maintenance & Support',
      description: 'Ongoing support, updates, and maintenance services',
      icon: '🔧'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Web Development Services
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Modern, Scalable, and Secure Web Solutions
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Transform your digital presence with our comprehensive web development services. 
            From responsive websites to complex web applications, we deliver solutions that drive results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
              Start Your Project
            </a>
            <a href="tel:+13024640950" className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              <Phone className="w-5 h-5" />
              +1 302 464 0950
            </a>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Our Web Development Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <article key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className={`text-lg font-bold mb-2 neon-text ${service.color}`}>{service.price}</div>
                  <a 
                    href="/contact" 
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                  >
                    Get Started
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Technologies We Use
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-2">{tech.icon}</div>
                  <div className="text-sm text-gray-300">{tech.name}</div>
                  <div className="text-xs text-gray-500">{tech.category}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Our Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="text-2xl font-bold text-cyan-400 mb-2">{step.step}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Build Your Next Web Application?
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              Let our expert developers create a modern, scalable web solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Start Your Project
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WebDevelopmentPage;