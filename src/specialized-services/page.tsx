'use client';
import React from 'react';
import { Brain, Shield, Cloud, Code, BarChart, Users, Zap, Target, CheckCircle, Star, Phone, Mail, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SpecializedServicesPage: React.FC = () => {
  const specializedServices = [
    {
      icon: Brain,
      title: 'AI-Powered Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI analytics and predictive modeling.',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom AI Models', 'Data Visualization'],
      price: 'Starting at $2,500/month',
      category: 'AI & Analytics',
      benefits: ['40% faster decision making', '60% cost reduction', '85% accuracy improvement'],
      color: 'text-purple-400'
    },
    {
      icon: Shield,
      title: 'Advanced Cybersecurity Solutions',
      description: 'Comprehensive security solutions with AI-powered threat detection and automated response.',
      features: ['AI Threat Detection', 'Automated Response', 'Compliance Management', 'Security Audits'],
      price: 'Starting at $3,000/month',
      category: 'Security',
      benefits: ['99.9% threat prevention', '50% faster response', 'Zero false positives'],
      color: 'text-red-400'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture & Migration',
      description: 'Expert cloud solutions with seamless migration and optimization for AWS, Azure, and GCP.',
      features: ['Cloud Migration', 'Architecture Design', 'Cost Optimization', 'Performance Tuning'],
      price: 'Starting at $2,000/month',
      category: 'Cloud Services',
      benefits: ['50% cost reduction', '99.9% uptime', '3x performance improvement'],
      color: 'text-blue-400'
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Bespoke software solutions tailored to your specific business needs and requirements.',
      features: ['Custom Applications', 'API Development', 'Integration Services', 'Maintenance & Support'],
      price: 'Starting at $150/hour',
      category: 'Development',
      benefits: ['100% customized solutions', 'Scalable architecture', 'Ongoing support'],
      color: 'text-green-400'
    },
    {
      icon: BarChart,
      title: 'Data Science & Analytics',
      description: 'Advanced data science solutions with machine learning and statistical analysis.',
      features: ['Machine Learning Models', 'Statistical Analysis', 'Data Mining', 'Predictive Modeling'],
      price: 'Starting at $2,200/month',
      category: 'Data Science',
      benefits: ['90% accuracy improvement', 'Real-time insights', 'Automated reporting'],
      color: 'text-teal-400'
    },
    {
      icon: Users,
      title: 'Digital Transformation Consulting',
      description: 'Strategic guidance for digital transformation initiatives and technology adoption.',
      features: ['Strategy Development', 'Technology Assessment', 'Change Management', 'Training Programs'],
      price: 'Starting at $200/hour',
      category: 'Consulting',
      benefits: ['Strategic alignment', 'Risk mitigation', 'ROI optimization'],
      color: 'text-orange-400'
    },
    {
      icon: Zap,
      title: 'Process Automation & Optimization',
      description: 'Intelligent automation solutions to streamline business processes and improve efficiency.',
      features: ['Workflow Automation', 'RPA Implementation', 'Process Optimization', 'Performance Monitoring'],
      price: 'Starting at $1,800/month',
      category: 'Automation',
      benefits: ['70% process efficiency', '80% time savings', 'Error reduction'],
      color: 'text-yellow-400'
    },
    {
      icon: Target,
      title: 'AI-Powered Marketing Solutions',
      description: 'Advanced marketing automation with AI-driven targeting and personalization.',
      features: ['AI Targeting', 'Personalization', 'Campaign Optimization', 'ROI Tracking'],
      price: 'Starting at $1,500/month',
      category: 'Marketing',
      benefits: ['200% engagement increase', '150% conversion improvement', '40% cost reduction'],
      color: 'text-pink-400'
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: '🏥', description: 'AI-powered medical solutions and healthcare automation' },
    { name: 'Finance', icon: '💰', description: 'Fintech solutions and financial AI applications' },
    { name: 'Manufacturing', icon: '🏭', description: 'Industrial AI and smart manufacturing solutions' },
    { name: 'Retail', icon: '🛒', description: 'E-commerce AI and retail automation' },
    { name: 'Education', icon: '🎓', description: 'Educational technology and learning AI' },
    { name: 'Real Estate', icon: '🏠', description: 'Property AI and real estate automation' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Specialized Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Expert solutions tailored to your industry and specific business needs. 
            Our specialized services combine cutting-edge technology with deep domain expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
            >
              Get Custom Quote
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              (302) 464-0950
            </a>
          </div>
        </section>

        {/* Specialized Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Specialized Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                <div className={`${service.color} mb-4`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400 mb-2">{service.price}</div>
                  <a
                    href="/contact"
                    className="inline-flex items-center text-sm font-medium text-cyan-400 hover:opacity-80 transition-opacity"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industries Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-slate-800/50 transition-all duration-300">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                <p className="text-gray-300 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready for Specialized Solutions?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our experts create a customized solution that perfectly fits your industry and business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                Get Custom Quote
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SpecializedServicesPage;