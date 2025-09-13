import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AnimatedSection from '../components/AnimatedSection';
import { NeuralArchitectureFeatureGrid } from '../components/NeuralArchitecture2026PromotionBanner';
import './HomePage.css';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Home - Zion Tech Group</title>
        <meta name="description" content="Leading provider of AI, blockchain, cloud computing, and cybersecurity solutions for modern businesses." />
        <meta property="og:title" content="Zion Tech Group - Advanced Technology Solutions" />
        <meta property="og:description" content="Empowering businesses with cutting-edge AI, blockchain, cloud computing, and cybersecurity solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zion.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced Technology Solutions" />
        <meta name="twitter:description" content="Empowering businesses with cutting-edge AI, blockchain, cloud computing, and cybersecurity solutions." />
        <link rel="canonical" href="https://zion.app" />
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
              <button 
                className="btn btn-primary"
                onClick={() => window.location.href = '/contact'}
                aria-label="Get started with Zion Tech Group"
              >
                Get Started
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => window.location.href = '/services'}
                aria-label="Learn more about our services"
              >
                Learn More
              </button>
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

        {/* Neural Architecture 2026 Feature Grid */}
        <NeuralArchitectureFeatureGrid />

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
                  <h2 className="section-title">Revolutionary AI & Quantum Computing Content</h2>
                  <p className="promo-text">Discover our latest comprehensive guides on Generative AI Revolution, Quantum AI Superintelligence, and Fortune 500 transformation success stories—featuring $5B+ ROI case studies and cutting-edge implementation strategies.</p>
                </div>
                <div className="promo-actions">
                  <a href="/blog/ai-2025-generative-intelligence-revolution-complete-guide" className="btn btn-primary">AI Revolution Guide →</a>
                  <a href="/resources/quantum-ai-superintelligence-implementation-master-guide-2025" className="btn btn-secondary">Quantum AI Guide →</a>
                  <a href="/case-studies/fortune-500-quantum-ai-transformation-2025-ultimate-success-story-5-billion-roi" className="btn btn-accent">$5B ROI Case Study →</a>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="scale" delay={400}>
          <section className="featured-content-section">
            <div className="container">
              <h2 className="section-title">Featured Content: AI & Quantum Computing Mastery</h2>
              <div className="content-grid">
                <AnimatedSection animation="fadeIn" delay={600}>
                  <div className="content-card featured">
                    <div className="content-badge">Latest</div>
                    <h3>AI 2025: Generative Intelligence Revolution</h3>
                    <p>Complete implementation guide covering the paradigm shift from reactive to proactive AI systems, with real-world applications across healthcare, finance, and manufacturing.</p>
                    <div className="content-metrics">
                      <span className="metric">60% faster drug discovery</span>
                      <span className="metric">99.7% fraud detection accuracy</span>
                      <span className="metric">50% downtime reduction</span>
                    </div>
                    <a href="/blog/ai-2025-generative-intelligence-revolution-complete-guide" className="content-link">Read Full Guide →</a>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="fadeIn" delay={800}>
                  <div className="content-card featured">
                    <div className="content-badge">Advanced</div>
                    <h3>Quantum AI Superintelligence Implementation</h3>
                    <p>Master guide for implementing quantum-enhanced AI systems with 1000x speedup in optimization problems and enterprise-grade reliability.</p>
                    <div className="content-metrics">
                      <span className="metric">1000x ML training speedup</span>
                      <span className="metric">99.9% accuracy in simulations</span>
                      <span className="metric">50% computational cost reduction</span>
                    </div>
                    <a href="/resources/quantum-ai-superintelligence-implementation-master-guide-2025" className="content-link">Access Master Guide →</a>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="fadeIn" delay={1000}>
                  <div className="content-card featured">
                    <div className="content-badge">Success Story</div>
                    <h3>Fortune 500: $5.2B ROI Transformation</h3>
                    <p>Complete case study of a global manufacturing conglomerate achieving unprecedented success through quantum AI transformation in just 18 months.</p>
                    <div className="content-metrics">
                      <span className="metric">$5.2B total ROI</span>
                      <span className="metric">35% efficiency improvement</span>
                      <span className="metric">15 new materials discovered</span>
                    </div>
                    <a href="/case-studies/fortune-500-quantum-ai-transformation-2025-ultimate-success-story-5-billion-roi" className="content-link">View Case Study →</a>
                  </div>
                </AnimatedSection>
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
                <button 
                  className="btn btn-primary btn-large"
                  onClick={() => window.location.href = '/contact'}
                  aria-label="Contact us today to get started"
                >
                  Contact Us Today
                </button>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </>
  );
};

export default HomePage;