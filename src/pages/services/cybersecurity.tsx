import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Shield, 
  Lock, 
  Eye, 
  Zap, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight,
  Users,
  Database,
  Network,
  Server,
  Globe
} from 'lucide-react';

export default function CybersecurityPage() {
  const features = [
    {
      icon: Shield,
      title: "Advanced Threat Protection",
      description: "Multi-layered security against evolving cyber threats",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Lock,
      title: "Data Encryption",
      description: "End-to-end encryption for sensitive information",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Eye,
      title: "24/7 Monitoring",
      description: "Continuous security monitoring and threat detection",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Incident Response",
      description: "Rapid response and recovery from security incidents",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const services = [
    {
      title: "Security Assessment",
      description: "Comprehensive security audit and vulnerability assessment",
      price: "$3,500",
      features: ["Penetration testing", "Vulnerability scanning", "Security audit report", "Remediation guidance"]
    },
    {
      title: "Managed Security",
      description: "24/7 security monitoring and incident response",
      price: "$2,800/month",
      features: ["Real-time monitoring", "Threat detection", "Incident response", "Security updates"]
    },
    {
      title: "Compliance & Governance",
      description: "Meet regulatory requirements and industry standards",
      price: "$4,200",
      features: ["GDPR compliance", "SOC 2 certification", "ISO 27001", "Regular audits"]
    }
  ];

  const securitySolutions = [
    {
      icon: Network,
      title: "Network Security",
      description: "Firewall management, intrusion detection, and network monitoring"
    },
    {
      icon: Database,
      title: "Data Protection",
      description: "Data loss prevention, backup security, and access controls"
    },
    {
      icon: Server,
      title: "Infrastructure Security",
      description: "Server hardening, cloud security, and endpoint protection"
    },
    {
      icon: Users,
      title: "Identity & Access",
      description: "Multi-factor authentication, role-based access, and user management"
    }
  ];

  return (
    <>
      <SEO 
        title="Cybersecurity Services - Zion Tech Group"
        description="Protect your business with enterprise-grade cybersecurity solutions. Advanced threat protection, compliance, and managed security services."
        keywords="cybersecurity, security services, threat protection, compliance, managed security, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10"></div>
          <div className="container-responsive relative z-10">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Cybersecurity Services
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Secure Your Business with{' '}
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Enterprise Security
                </span>
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Protect your digital assets with our comprehensive cybersecurity solutions. 
                From threat detection to compliance management, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="btn-neon px-8 py-4 text-lg"
                >
                  Get Security Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="btn-outline px-8 py-4 text-lg"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-zion-slate-dark">
          <div className="container-responsive">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our{' '}
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Cybersecurity
                </span>
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Our security experts provide comprehensive protection against evolving cyber threats
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-zion-slate to-zion-slate-dark p-8 rounded-2xl border border-zion-slate-light hover:border-red-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/25">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-zion-slate-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Solutions Section */}
        <section className="py-20 bg-zion-slate">
          <div className="container-responsive">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive{' '}
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Security Solutions
                </span>
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Protect every aspect of your digital infrastructure with our security expertise
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securitySolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-zion-slate-dark to-zion-slate p-8 rounded-2xl border border-zion-slate-light hover:border-red-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/25">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <solution.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                          {solution.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-zion-slate-light leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-zion-slate-dark">
          <div className="container-responsive">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Security Services
                </span>
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Professional cybersecurity services tailored to your business needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-zion-slate to-zion-slate-dark p-8 rounded-2xl border border-zion-slate-light hover:border-red-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/25">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-zion-slate-light mb-4">
                        {service.description}
                      </p>
                      <div className="text-3xl font-bold text-red-400">
                        {service.price}
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-zion-slate-light">
                          <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 group-hover:scale-105"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-500/20 to-orange-500/20">
          <div className="container-responsive text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Don't Wait Until It's Too Late
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Cyber threats are evolving rapidly. Protect your business today with 
                our comprehensive cybersecurity solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="btn-neon px-8 py-4 text-lg"
                >
                  Get Security Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/case-studies"
                  className="btn-outline px-8 py-4 text-lg"
                >
                  View Security Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}