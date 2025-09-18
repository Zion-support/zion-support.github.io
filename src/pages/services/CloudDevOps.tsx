import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Cloud, Zap, Shield, Cpu } from 'lucide-react';

const CloudDevOps = () => {
  const services = [
    { icon: Cloud, title: 'Cloud Migration', desc: 'Plan and migrate with minimal downtime.' },
    { icon: Cpu, title: 'Infrastructure as Code', desc: 'Repeatable, versioned environments.' },
    { icon: Zap, title: 'CI/CD Pipelines', desc: 'Automated build, test, and deploy.' },
    { icon: Shield, title: 'Security & Compliance', desc: 'Hardened, auditable systems.' },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <Helmet>
        <title>Cloud & DevOps - Zion Tech Group</title>
        <meta name="description" content="Cloud migration, IaC, CI/CD and security best practices." />
        <link rel="canonical" href="https://ziontechgroup.com/services/cloud-devops" />
      </Helmet>
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Cloud & DevOps</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">Modernize infrastructure and ship faster with confidence.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-semibold">
              Get Started
            </Link>
            <Link to="/services" className="inline-flex items-center px-6 py-3 border border-gray-600 rounded-lg font-semibold">
              View Services
          </div>
        </div>
      </section>
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-300 text-sm">{s.desc}</p>
              </div>
            );
          })}
    </div>
  );
};
export default CloudDevOps;
