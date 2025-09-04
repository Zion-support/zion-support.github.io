import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  return (
    <main style={{ padding: '40px 20px' }}>
      <Helmet>
        <title>Contact — Zion Tech Group</title>
        <meta name="description" content="Contact Zion Tech Group for AI, Micro SaaS and IT services." />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Helmet>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h1 style={{ fontSize: 34, fontWeight: 800, marginBottom: 16 }}>Contact</h1>
        <p style={{ marginBottom: 12 }}>We respond within 1 business day.</p>
        <ul style={{ lineHeight: 1.8 }}>
          <li><strong>Mobile:</strong> +1 302 464 0950</li>
          <li><strong>E-mail:</strong> kleber@ziontechgroup.com</li>
          <li><strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709</li>
        </ul>
        <p style={{ marginTop: 20 }}>Or email us directly at <a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>.</p>
      </div>
    </main>
  );
}


