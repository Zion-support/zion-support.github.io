import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>Zion Tech Group — AI, Micro SaaS, IT Services</title>
        <meta name="description" content="We deliver AI solutions, micro SaaS products, and enterprise IT services." />
      </Helmet>
      <section style={{ background: 'linear-gradient(135deg,#0b1220,#1e293b)', color: 'white', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h1 style={{ fontSize: 48, fontWeight: 800, marginBottom: 16 }}>Build Smarter. Ship Faster. Scale Safely.</h1>
          <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 24 }}>AI, Micro SaaS and IT engineering that turn ideas into outcomes.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/services" style={{ background: '#22d3ee', color: '#0b1220', padding: '12px 20px', borderRadius: 8, fontWeight: 700, textDecoration: 'none' }}>Explore Services</Link>
            <Link to="/contact" style={{ border: '2px solid #22d3ee', color: 'white', padding: '12px 20px', borderRadius: 8, fontWeight: 700, textDecoration: 'none' }}>Get a Quote</Link>
          </div>
        </div>
      </section>
      <section style={{ padding: '64px 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, textAlign: 'center', marginBottom: 32 }}>Core Offerings</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20 }}>
            {[
              { title: 'AI Services', desc: 'GenAI, NLP, Vision, MLOps, Guardrails', link: '/ai-services' },
              { title: 'Micro SaaS', desc: 'Niche, revenue-ready micro products', link: '/micro-saas' },
              { title: 'IT Services', desc: 'Cloud, SRE, Security, Kubernetes', link: '/it-services' },
            ].map((c) => (
              <div key={c.title} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: 20 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{c.title}</h3>
                <p style={{ color: '#64748b', marginBottom: 12 }}>{c.desc}</p>
                <Link to={c.link} style={{ color: '#0ea5e9', fontWeight: 700, textDecoration: 'none' }}>Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

