import React, { useState } from 'react';
import './ServicesPage.css';

const ServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'quantum', name: 'Quantum Computing' },
    { id: 'autonomous', name: 'Autonomous Systems' },
    { id: 'enterprise', name: 'Enterprise Solutions' },
    { id: 'security', name: 'Cybersecurity' },
  ];

  const services = [
    {
      id: 1,
      category: 'ai',
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      features: ['Predictive Analytics', 'Real-time Processing', 'Custom Models', 'API Integration'],
      price: 'Starting at $5,000/month',
      icon: '🤖',
    },
    {
      id: 2,
      category: 'ai',
      title: 'Natural Language Processing',
      description: 'Build intelligent chatbots and language understanding systems for your business.',
      features: ['Chatbot Development', 'Sentiment Analysis', 'Language Translation', 'Text Generation'],
      price: 'Starting at $3,000/month',
      icon: '💬',
    },
    {
      id: 3,
      category: 'quantum',
      title: 'Quantum Algorithm Development',
      description: 'Leverage quantum computing power for complex optimization and simulation problems.',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Simulation Services', 'Research Support'],
      price: 'Starting at $10,000/month',
      icon: '⚡',
    },
    {
      id: 4,
      category: 'quantum',
      title: 'Quantum Security Solutions',
      description: 'Implement quantum-resistant cryptography to future-proof your security infrastructure.',
      features: ['Quantum Key Distribution', 'Post-Quantum Cryptography', 'Security Audits', 'Implementation Support'],
      price: 'Starting at $8,000/month',
      icon: '🔐',
    },
    {
      id: 5,
      category: 'autonomous',
      title: 'Autonomous Business Operations',
      description: 'Deploy self-managing systems that operate independently and adapt to changing conditions.',
      features: ['Process Automation', 'Self-Healing Systems', 'Predictive Maintenance', 'Continuous Optimization'],
      price: 'Starting at $7,000/month',
      icon: '🤖',
    },
    {
      id: 6,
      category: 'autonomous',
      title: 'Smart Infrastructure Management',
      description: 'Monitor and manage your infrastructure with intelligent autonomous systems.',
      features: ['Real-time Monitoring', 'Automated Responses', 'Resource Optimization', 'Performance Analytics'],
      price: 'Starting at $4,000/month',
      icon: '🏗️',
    },
    {
      id: 7,
      category: 'enterprise',
      title: 'Digital Transformation',
      description: 'Complete digital transformation solutions that modernize your business processes.',
      features: ['Process Modernization', 'Cloud Migration', 'System Integration', 'Change Management'],
      price: 'Starting at $15,000/month',
      icon: '🔄',
    },
    {
      id: 8,
      category: 'enterprise',
      title: 'Enterprise Integration',
      description: 'Seamlessly connect all your systems and applications for unified operations.',
      features: ['API Development', 'Data Synchronization', 'Workflow Automation', 'Legacy System Integration'],
      price: 'Starting at $6,000/month',
      icon: '🔗',
    },
    {
      id: 9,
      category: 'security',
      title: 'Advanced Threat Detection',
      description: 'Protect your organization with AI-powered threat detection and response systems.',
      features: ['Real-time Monitoring', 'Behavioral Analysis', 'Automated Response', 'Incident Management'],
      price: 'Starting at $5,000/month',
      icon: '🛡️',
    },
    {
      id: 10,
      category: 'security',
      title: 'Compliance & Governance',
      description: 'Ensure regulatory compliance with automated governance and audit systems.',
      features: ['Compliance Monitoring', 'Audit Automation', 'Risk Assessment', 'Policy Management'],
      price: 'Starting at $3,500/month',
      icon: '📋',
    },
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1 className="services-hero-title">Our Services</h1>
          <p className="services-hero-subtitle">
            Comprehensive technology solutions designed to transform your business and drive innovation.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="category-filter">
        <div className="category-filter-container">
          <div className="category-buttons">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="services-grid-container">
          <div className="services-grid">
            {filteredServices.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-card-header">
                  <div className="service-icon">{service.icon}</div>
                  <div className="service-price">{service.price}</div>
                </div>
                <div className="service-card-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, index) => (
                      <li key={index} className="service-feature">
                        <span className="feature-check">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="service-card-footer">
                  <button className="service-button primary">
                    Learn More
                  </button>
                  <button className="service-button secondary">
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="services-cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-subtitle">
              Contact our experts to discuss your specific needs and find the perfect solution for your business.
            </p>
            <div className="cta-actions">
              <button className="cta-button primary">
                Schedule Consultation
              </button>
              <button className="cta-button secondary">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

<<<<<<< HEAD
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export default ServicesPage;