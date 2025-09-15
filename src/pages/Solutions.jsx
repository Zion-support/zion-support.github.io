import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Target, Brain, Cloud, Shield, BarChart3, Building } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    { name: 'Enterprise Solutions', path: '/solutions', icon: Building, description: 'End-to-end solutions for large organizations' },
    { name: 'AI Solutions', path: '/ai-solutions', icon: Brain, description: 'Applied AI for real business outcomes' },
    { name: 'Cloud & DevOps', path: '/services/devops-cloud', icon: Cloud, description: 'Modernize delivery with DevOps and cloud' },
    { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield, description: 'Protect systems with AI-powered security' },
    { name: 'Data Analytics', path: '/services/data-analytics', icon: BarChart3, description: 'Turn data into decisions' },
  ];

  return (
    <div className="min-h-screen bg-zion-blue text-white">
      <SEO title="Solutions - Zion Tech Group" description="Industry and capability solutions by Zion Tech Group." canonical="https://ziontechgroup.com/solutions" />
      <Header />
      <section className="pt-24 pb-12 bg-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Solutions</h1>
          <p className="text-zion-slate-light max-w-3xl mx-auto">Explore our solutions across AI, Cloud, Security, and Analytics tailored for enterprises and startups.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s) => (
            <Link key={s.name} to={s.path} className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <s.icon className="w-6 h-6 text-zion-cyan" />
                <h3 className="text-xl font-semibold">{s.name}</h3>
              </div>
              <p className="text-zion-slate-light">{s.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

