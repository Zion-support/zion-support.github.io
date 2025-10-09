import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ServicesPage() {
  const services = [
    {
      category: 'AI Solutions',
      color: 'cyan',
      services: [
        {
          title: 'AI Analytics',
          description: 'Advanced data analytics powered by machine learning algorithms',
          href: '/ai-analytics',
          icon: '📊',
          features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards', 'Data Visualization']
        },
        {
          title: 'AI Automation',
          description: 'Streamline business processes with intelligent automation',
          href: '/ai-automation',
          icon: '🤖',
          features: ['Workflow Automation', 'Process Optimization', 'Smart Scheduling', 'Task Management']
        },
        {
          title: 'AI Healthcare',
          description: 'Revolutionary healthcare solutions powered by AI',
          href: '/ai-healthcare',
          icon: '🏥',
          features: ['Medical Diagnosis', 'Treatment Planning', 'Patient Monitoring', 'Drug Discovery']
        },
        {
          title: 'AI Marketing',
          description: 'Data-driven marketing strategies with AI optimization',
          href: '/ai-marketing',
          icon: '📈',
          features: ['Customer Segmentation', 'Campaign Optimization', 'ROI Analysis', 'Lead Generation']
        },
        {
          title: 'AI Customer Support',
          description: 'Intelligent customer service solutions',
          href: '/ai-customer-support',
          icon: '💬',
          features: ['Chatbots', 'Sentiment Analysis', '24/7 Support', 'Multi-language Support']
        },
        {
          title: 'AI Content Generation',
          description: 'Create compelling content with AI assistance',
          href: '/ai-content-generation',
          icon: '✍️',
          features: ['Content Writing', 'SEO Optimization', 'Multi-language Support', 'Brand Voice']
        }
      ]
    },
    {
      category: 'IT Services',
      color: 'purple',
      services: [
        {
          title: 'IT Consulting',
          description: 'Strategic IT planning and digital transformation',
          href: '/it-consulting',
          icon: '💼',
          features: ['Strategic Planning', 'Technology Assessment', 'Digital Roadmap', 'Change Management']
        },
        {
          title: 'Cloud Services',
          description: 'Scalable cloud infrastructure and migration',
          href: '/cloud-services',
          icon: '☁️',
          features: ['Cloud Migration', 'Infrastructure Setup', 'Cost Optimization', 'Security Management']
        },
        {
          title: 'Cybersecurity',
          description: 'Comprehensive security solutions for your business',
          href: '/cybersecurity',
          icon: '🔒',
          features: ['Threat Detection', 'Security Audits', 'Compliance Management', 'Incident Response']
        },
        {
          title: 'DevOps & CI/CD',
          description: 'Streamlined development and deployment processes',
          href: '/devops-cicd',
          icon: '⚙️',
          features: ['Automated Deployment', 'Continuous Integration', 'Monitoring', 'Infrastructure as Code']
        },
        {
          title: 'Database Management',
          description: 'Optimized database solutions and management',
          href: '/database-management',
          icon: '🗄️',
          features: ['Performance Tuning', 'Backup Solutions', 'Data Migration', 'Security Hardening']
        },
        {
          title: 'Digital Transformation',
          description: 'Complete digital transformation strategies',
          href: '/digital-transformation',
          icon: '🚀',
          features: ['Process Digitization', 'Technology Integration', 'Change Management', 'ROI Optimization']
        }
      ]
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your current systems, identify pain points, and understand your business objectives.',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'We develop a comprehensive strategy tailored to your specific needs and goals.',
      icon: '📋'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Our expert team implements the solution with minimal disruption to your operations.',
      icon: '⚡'
    },
    {
      step: '04',
      title: 'Optimization & Support',
      description: 'We continuously monitor, optimize, and provide ongoing support for your solutions.',
      icon: '🔄'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business and drive innovation
            </p>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      {services.map((category, categoryIndex) => (
        <section key={category.category} className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-slate-800/30' : 'bg-slate-800/50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className={`text-4xl font-bold text-${category.color}-400 mb-4`}>
                {category.category}
              </h2>
              <p className="text-xl text-gray-300">
                {category.category === 'AI Solutions' 
                  ? 'Cutting-edge artificial intelligence services' 
                  : 'Comprehensive technology solutions'
                }
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div
                  key={service.title}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <span className={`w-2 h-2 bg-${category.color}-400 rounded-full mr-3`}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.href}
                    className={`inline-flex items-center text-${category.color}-400 hover:text-${category.color}-300 font-medium transition-colors`}
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-16 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your specific needs and create a customized solution that drives real business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/case-studies"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}