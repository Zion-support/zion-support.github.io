import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge artificial intelligence to transform your business operations and drive intelligent decision-making.',
    },
    {
      icon: '⚡',
      title: 'Quantum Computing',
      description: 'Harness the power of quantum computing for complex problem-solving and optimization challenges.',
    },
    {
      icon: '🌐',
      title: 'Global Reach',
      description: 'Connect with clients and partners worldwide through our comprehensive global network.',
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-grade security measures to protect your data and operations from evolving threats.',
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Advanced analytics to drive informed business decisions and optimize performance.',
    },
    {
      icon: '👥',
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools for distributed teams and remote work environments.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Countries Served' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-particles"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Welcome to{' '}
              <span className="hero-title-highlight">Zion Tech Group</span>
            </h1>
            <p className="hero-subtitle">
              Leading the future of technology with innovative AI solutions, 
              quantum computing research, and autonomous systems that transform businesses.
            </p>
            <div className="hero-actions">
              <Link to="/services" className="hero-button primary">
                Explore Services
              </Link>
              <Link to="/contact" className="hero-button secondary">
                Get Started
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-card-content">
                <div className="hero-card-icon">🚀</div>
                <h3>Innovation at Scale</h3>
                <p>Transforming ideas into reality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <div className="features-header">
            <h2 className="features-title">Why Choose Zion Tech Group?</h2>
            <p className="features-subtitle">
              We deliver cutting-edge technology solutions that drive innovation and growth.
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Business?</h2>
            <p className="cta-subtitle">
              Get in touch with our experts to discuss how we can help you achieve your technology goals.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="cta-button primary">
                Get Started
              </Link>
              <Link to="/about" className="cta-button secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
