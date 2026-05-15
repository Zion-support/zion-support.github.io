// app/about/page.tsx
'use client';

export default function AboutPage() {
  const values = [
    { icon: '🎯', title: 'Results-Driven', desc: 'Every solution we deliver is designed to produce measurable business outcomes. We don\'t do vanity metrics.' },
    { icon: '🔒', title: 'Security First', desc: 'Security and compliance are built into every solution from day one, not bolted on as an afterthought.' },
    { icon: '⚡', title: 'Fast Delivery', desc: 'We move fast without cutting corners. Agile methodologies and automation ensure rapid, reliable delivery.' },
    { icon: '🤝', title: 'Partnership Mindset', desc: 'We become an extension of your team, fully invested in your long-term success.' },
    { icon: '💡', title: 'Innovation', desc: 'We stay at the forefront of AI and technology to bring cutting-edge solutions to your business.' },
    { icon: '📊', title: 'Data-Driven Decisions', desc: 'Every recommendation is backed by data, analysis, and proven methodologies.' },
  ];

  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">About Zion Tech Group</h1>
          <p className="section-subheading mx-auto">
            We are a technology consulting firm specializing in AI services, IT solutions, and Micro SAAS platforms.
            Based in Middletown, Delaware, we help businesses transform through intelligent technology.
          </p>
        </div>

        {/* Story */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="glass-card">
            <h2 className="text-2xl font-semibold text-white mb-4">Our Story</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Founded with a mission to make enterprise-grade technology accessible to businesses of all sizes,
              Zion Tech Group has grown into a trusted provider of AI, IT, and software solutions. Our team combines
              deep technical expertise with business acumen to deliver solutions that drive real results.
            </p>
            <p className="text-slate-300 leading-relaxed">
              We don't believe in one-size-fits-all. Every solution is custom-tailored to your specific needs,
              budget, and goals. From initial consultation to ongoing support, we're with you every step of the way.
            </p>
          </div>
          <div className="glass-card">
            <h2 className="text-2xl font-semibold text-white mb-4">By the Numbers</h2>
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="text-center p-6 bg-slate-900/50 rounded-xl border border-slate-700/50">
                <div className="text-3xl font-bold gradient-text">159+</div>
                <div className="text-sm text-slate-400 mt-1">Services Offered</div>
              </div>
              <div className="text-center p-6 bg-slate-900/50 rounded-xl border border-slate-700/50">
                <div className="text-3xl font-bold gradient-text">4</div>
                <div className="text-sm text-slate-400 mt-1">Core Domains</div>
              </div>
              <div className="text-center p-6 bg-slate-900/50 rounded-xl border border-slate-700/50">
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-slate-400 mt-1">Monitoring</div>
              </div>
              <div className="text-center p-6 bg-slate-900/50 rounded-xl border border-slate-700/50">
                <div className="text-3xl font-bold gradient-text">99.9%</div>
                <div className="text-sm text-slate-400 mt-1">SLA Uptime</div>
              </div>
            </div>
            <div className="mt-8 p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30">
              <p className="text-slate-300 italic">"We transform businesses through intelligent technology solutions."</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <h2 className="section-heading text-center mb-4">Our Values</h2>
        <p className="section-subheading text-center">The principles that guide everything we do</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {values.map((v, i) => (
            <div key={i} className="glass-card text-center">
              <div className="text-3xl mb-4">{v.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{v.title}</h3>
              <p className="text-slate-400 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <section className="cta-section">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Whether you need AI integration, IT infrastructure support, or a custom software solution,
            we're here to help. Reach out today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="btn-primary text-lg">
              ☎ +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="btn-secondary text-lg">
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <p className="text-slate-500 text-sm mt-6">
            📍 364 E Main St STE 1008, Middletown, DE 19709
          </p>
        </section>
      </div>
    </main>
  );
}