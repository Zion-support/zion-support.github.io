import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Zap, Brain, Globe, Target, AlertTriangle } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function Cybersecurity() {
  const services = [
    {
      icon: <Shield className="w-12 h-12 text-cyan-400" />,
      title: "Zero Trust Security",
      description: "Comprehensive zero trust network architecture and security platform",
      href: "/zero-trust-security-platform"
    },
    {
      icon: <Lock className="w-12 h-12 text-blue-400" />,
      title: "Vulnerability Assessment",
      description: "Advanced penetration testing and security vulnerability analysis",
      href: "/vulnerability-assessment-penetration-testing"
    },
    {
      icon: <Eye className="w-12 h-12 text-purple-400" />,
      title: "SOC2 Compliance",
      description: "Automated SOC2 compliance and evidence management",
      href: "/soc2-compliance-automation"
    },
    {
      icon: <Zap className="w-12 h-12 text-green-400" />,
      title: "Incident Response",
      description: "AI-powered incident response and automation suite",
      href: "/incident-automation-suite"
    },
    {
      icon: <Brain className="w-12 h-12 text-yellow-400" />,
      title: "AI Security",
      description: "Intelligent threat detection and security analytics",
      href: "/quantum-cybersecurity-platform"
    },
    {
      icon: <Globe className="w-12 h-12 text-pink-400" />,
      title: "Cloud Security",
      description: "Multi-cloud security and disaster recovery solutions",
      href: "/multi-cloud-disaster-recovery"
    }
  ];

export default function Cybersecurity() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Cybersecurity Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Protecting your digital assets with cutting-edge cybersecurity solutions, 
                zero trust architecture, and AI-powered threat detection systems.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
                  onClick={() => window.location.href = service.href}
                >
                  <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-center">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Secure Your Digital Future</h2>
              <p className="text-xl text-gray-300 mb-8">
                Protect your business with our comprehensive cybersecurity solutions and expert security team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CybersecurityPage;
=======
import Head from 'next/head';
import Layout from '../components/layout/Layout';

import { Shield, CheckCircle, Lock, Activity } from 'lucide-react';

export default function CybersecurityPage() {
  const features = [
    'Zero Trust architectures and identity-first segmentation',
    'Cloud posture hardening, secrets management, and key rotation',
    'Threat detection, incident response playbooks, and tabletop exercises',
    'Compliance readiness: SOC 2, ISO 27001, HIPAA, GDPR',
  ];

  const solutions = [
    { name: 'Zero Trust Architecture', href: '/zero-trust-network-architecture' },
    { name: 'Domain & TLS Monitoring', href: '/domain-dns-monitor' },
    { name: 'Email Security (DMARC)', href: '/email-dmarc-analyzer' },
    { name: 'Vendor Risk Automation', href: '/vendor-risk-automation' },
  ];

  return (
    <Layout>
      <Head>
        <title>Cybersecurity | Zion Tech Group</title>
        <meta name="description" content="Zero Trust designs, cloud posture hardening, incident response, and compliance readiness." />
        <link rel="canonical" href="https://ziontechgroup.com/cybersecurity" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <header className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">Cybersecurity</h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">From strategy to operations: identity, data, networks, and workloads secured by design.</p>
            <div className="mt-2 text-sm text-gray-400">New: VAPT and MDM offerings below.</div>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="px-8 py-4">Security Assessment</a>
              <a href="/market-pricing" className="px-8 py-4">See Market Pricing</a>
            </div>
          </header>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Key Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-gray-700/60">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                  <span className="text-gray-200">{f}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Highlighted Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {solutions.map((s) => (
                <a key={s.name} href={s.href} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-colors">
                  <div className="text-gray-200 font-semibold mb-2">{s.name}</div>
                  <p className="text-gray-300 text-sm">Learn more</p>
                </a>
              ))}
              <a href="/vulnerability-assessment-penetration-testing" className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-colors">
                <div className="text-gray-200 font-semibold mb-2">Vulnerability Assessment & Pentest (VAPT)</div>
                <p className="text-gray-300 text-sm">Learn more</p>
              </a>
              <a href="/mobile-device-management" className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-colors">
                <div className="text-gray-200 font-semibold mb-2">Mobile Device Management (MDM)</div>
                <p className="text-gray-300 text-sm">Learn more</p>
              </a>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
>>>>>>> origin/auto/autonomy-17186719616
