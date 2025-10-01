import React from 'react';
import { Helmet } from 'react-helmet-async';
import AnimatedSection from '../components/AnimatedSection';
import './HomePage.css';
import { BLOG_POSTS } from '../data/blog-posts';
import October2025FeaturedContentBanner from '../components/October2025FeaturedContentBanner';
import UnifiedPromotionalBanner from '../components/UnifiedPromotionalBanner';

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

      {/* Featured Content Advertising Banner */}
      <AnimatedSection animation="slideUp" delay={200}>
        <section className="featured-banner-section">
          <October2025FeaturedContentBanner />
        </section>
      </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={200}>
          <section className="promo-section">
            <div className="container">
              <div className="promo-card">
                <div className="promo-content">
                  <h2 className="section-title">🚀 October 2025 Updates</h2>
                  <p className="promo-text">Fresh insights on Multi-Agent AI Systems, Zero-Trust Architecture 2.0, Quantum-Safe Cryptography, Real-Time AI Training, Sustainable AI practices, Kubernetes Service Mesh comparisons, and Agentic Workflows. Plus: GenAI in production, privacy-first Edge AI, and incident-ready CI/CD playbooks.</p>
                </div>
                <a href="/blog" className="btn btn-primary">Explore the latest posts →</a>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Unified banner advertising newly added content */}
        <AnimatedSection animation="slideUp" delay={200}>
          <section className="promo-section">
            <div className="container">
              <UnifiedPromotionalBanner
                variant="premium"
                theme="purple"
                icon="rocket"
                badge="New"
                date={new Date().toLocaleDateString()}
                title="Just Published: Governed Agents, RAG v3, Cost v6"
                description="New enterprise guides: safe agentic automation, pragmatic RAG that lifts quality while cutting cost, and GenAI cost optimization v6."
                ctaText="Explore all posts"
                ctaLink="/blog"
                showCount={3}
                featuredItems={[
                  {
                    title: 'Governed Agentic Automation: Safe Tools, Fast Outcomes',
                    category: 'AI',
                    link: '/blog/governed-agentic-automation-2025-10-03',
                    metrics: '8 min • 2025-10-03'
                  },
                  {
                    title: 'Enterprise RAG Blueprint v3: 45% Quality ↑, 62% Cost ↓',
                    category: 'RAG',
                    link: '/blog/enterprise-rag-blueprint-v3-2025-10-03',
                    metrics: '9 min • 2025-10-03'
                  },
                  {
                    title: 'GenAI Cost Optimization v6: Quality Tiers, Coalesce, Distill',
                    category: 'Cloud',
                    link: '/blog/genai-cost-optimization-v6-2025-10-03',
                    metrics: '9 min • 2025-10-03'
                  }
                ]}
              />
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={200}>
          <section className="blog-preview">
            <div className="container">
              <h2 className="section-title">From the Blog</h2>
              <div className="blog-grid">
                {[...BLOG_POSTS]
                  .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
                  .slice(0, 4)
                  .map(post => (
                  <article key={post.id} className="blog-card">
                    <div className="blog-card-image" style={{ backgroundImage: `url(${post.featuredImage})` }} />
                    <div className="blog-card-content">
                      <div className="blog-meta">
                        <span className="blog-category">{post.category}</span>
                        <span className="blog-dot">•</span>
                        <span className="blog-date">{new Date(post.publishedAt).toLocaleDateString()}</span>
                        <span className="blog-dot">•</span>
                        <span className="blog-readtime">{post.readTime} min read</span>
                      </div>
                      <h3 className="blog-title">{post.title}</h3>
                      <p className="blog-excerpt">{post.excerpt}</p>
                      <a href="/blog" className="service-link">Read on the blog →</a>
                    </div>
                  </article>
                ))}
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