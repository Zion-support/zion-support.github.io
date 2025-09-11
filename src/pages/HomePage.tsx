import React from 'react';
import { Helmet } from 'react-helmet-async';
import AnimatedSection from '../components/AnimatedSection';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Home - Zion Tech Group</title>
        <meta name="description" content="Leading provider of AI, blockchain, cloud computing, and cybersecurity solutions for modern businesses." />
      </Helmet>
      
      <div className="home-page">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Advanced Technology Solutions for the Future
            </h1>
            <p className="hero-subtitle">
              Empowering businesses with cutting-edge AI, blockchain, cloud computing, 
              and cybersecurity solutions that drive innovation and growth.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="tech-grid">
              <div className="tech-card">AI</div>
              <div className="tech-card">Blockchain</div>
              <div className="tech-card">Cloud</div>
              <div className="tech-card">Security</div>
            </div>
          </div>
        </section>

        <AnimatedSection animation="slideUp" delay={200}>
          <section className="features-section">
            <div className="container">
              <h2 className="section-title">Why Choose Zion Tech Group?</h2>
              <div className="features-grid">
                <AnimatedSection animation="fadeIn" delay={400}>
                  <div className="feature-card">
                    <div className="feature-icon">🚀</div>
                    <h3>Innovation First</h3>
                    <p>We stay ahead of technology trends to deliver solutions that give you a competitive edge.</p>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="fadeIn" delay={600}>
                  <div className="feature-card">
                    <div className="feature-icon">🔒</div>
                    <h3>Enterprise Security</h3>
                    <p>Bank-grade security measures protect your data and ensure compliance with industry standards.</p>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="fadeIn" delay={800}>
                  <div className="feature-card">
                    <div className="feature-icon">⚡</div>
                    <h3>High Performance</h3>
                    <p>Optimized solutions that scale with your business and deliver exceptional performance.</p>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="fadeIn" delay={1000}>
                  <div className="feature-card">
                    <div className="feature-icon">🎯</div>
                    <h3>Custom Solutions</h3>
                    <p>Tailored technology solutions designed specifically for your business needs and goals.</p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={200}>
          <section className="services-preview">
            <div className="container">
              <h2 className="section-title">Our Core Services</h2>
              <div className="services-grid">
                <AnimatedSection animation="slideLeft" delay={400}>
                  <div className="service-card">
                    <h3>Artificial Intelligence</h3>
                    <p>Machine learning, natural language processing, and AI automation solutions.</p>
                    <a href="/services#ai" className="service-link">Learn More →</a>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="slideLeft" delay={600}>
                  <div className="service-card">
                    <h3>Blockchain Technology</h3>
                    <p>Smart contracts, DeFi solutions, and blockchain infrastructure development.</p>
                    <a href="/services#blockchain" className="service-link">Learn More →</a>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="slideRight" delay={400}>
                  <div className="service-card">
                    <h3>Cloud Computing</h3>
                    <p>Scalable cloud infrastructure, migration services, and cloud-native applications.</p>
                    <a href="/services#cloud" className="service-link">Learn More →</a>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="slideRight" delay={600}>
                  <div className="service-card">
                    <h3>Cybersecurity</h3>
                    <p>Security audits, penetration testing, and comprehensive security solutions.</p>
                    <a href="/services#security" className="service-link">Learn More →</a>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={200}>
          <section className="promo-section">
            <div className="container">
              <div className="promo-card">
                <div className="promo-content">
                  <h2 className="section-title">New in September 2025</h2>
                  <p className="promo-text">Explore fresh offerings like AI RFP Response Copilot, SEO Change Monitor, and more—priced and packaged for fast ROI.</p>
                </div>
                <a href="/services-advertising" className="btn btn-primary">See What's New →</a>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="scale" delay={200}>
          <section className="cta-section">
            <div className="container">
              <div className="cta-content">
                <h2>Ready to Transform Your Business?</h2>
                <p>Let's discuss how our technology solutions can drive your success.</p>
                <button className="btn btn-primary btn-large">Contact Us Today</button>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </>
  );
};

export default HomePage;