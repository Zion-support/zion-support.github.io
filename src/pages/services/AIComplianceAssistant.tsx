import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import {

  Shield, 
  CheckCircle, 
  AlertTriangle, 
  FileText, 
  Users, 
  Zap, 
  Globe, 
  Lock, 
  Eye,
  BarChart3,
  TrendingUp,
  Clock,
  Award,
  Star,
  Cpu,
  Database,
  Search,
  Filter,
  Download,
  Share2'
} from 'lucide-react';

export default function AIComplianceAssistant() {
  const frameworks = ['
    'SOC 2',ISO 27001',HIPAA',GDPR',PCI DSS',NIST CSF',
  ];

  const features = [
    {

      icon: Shield,
      title: "Automated Compliance Monitoring","
      description: "24/7 monitoring of regulatory changes and automatic updates to compliance requirements."
    },
    {

      icon: CheckCircle,"
      title: "Risk Assessment & Scoring","
      description: "AI-powered risk analysis with real-time scoring and prioritization of compliance issues."
    },
    {

      icon: FileText,"
      title: "Document Management","
      description: "Centralized compliance document creation, storage, and version control with AI assistance."
    },
    {

      icon: AlertTriangle,"
      title: "Real-time Alerts","
      description: "Instant notifications for compliance violations, policy changes, and regulatory updates."
    },
    {

      icon: Users,"
      title: "Training & Certification","
      description: "Automated compliance training programs with progress tracking and certification management."
    },
    {

      icon: Clock,"
      title: "Audit Preparation","
      description: "Streamlined audit processes with automated documentation and compliance reporting."
    }
  ];

  const benefits = [
    {

      icon: Zap,"
      title: "Reduced Compliance Risk","
      description: "Minimize regulatory violations and associated penalties through proactive monitoring."
    },
    {

      icon: Globe,"
      title: "Multi-Regulatory Support","
      description: "Support for GDPR, CCPA, SOX, HIPAA, and other major regulatory frameworks."
    },
    {

      icon: Lock,"
      title: "Enhanced Security","
      description: "Built-in security features to protect sensitive compliance data and ensure privacy."
    },
    {

      icon: Eye,"
      title: "Transparency & Reporting","
      description: "Comprehensive reporting and dashboards for stakeholders and regulatory bodies."
    },
    {

      icon: BarChart3,"
      title: "Performance Analytics","
      description: "Track compliance metrics and identify areas for improvement with detailed analytics."
    },
    {

      icon: TrendingUp,"
      title: "Cost Optimization","
      description: "Reduce manual compliance efforts and associated costs through automation."
    }
  ];

  const regulations = [
    {
"
      name: "GDPR (General Data Protection Regulation)","
      description: "EU data protection and privacy regulation",
      icon: Shield
    },
    {
"
      name: "CCPA (California Consumer Privacy Act)","
      description: "California consumer privacy protection law",
      icon: Lock
    },
    {
"
      name: "SOX (Sarbanes-Oxley Act)","
      description: "Financial reporting and corporate governance regulation",
      icon: FileText
    },
    {
"
      name: "HIPAA (Health Insurance Portability and Accountability Act)","
      description: "Healthcare data privacy and security regulation",
      icon: Eye
    },
    {
"
      name: "PCI DSS (Payment Card Industry Data Security Standard)","
      description: "Payment card data security standards",
      icon: Cpu
    },
    {
"
      name: "ISO 27001","
      description: "Information security management system standard",
      icon: Database
    }
  ];

  const useCases = [
    {
"
      industry: "Financial Services","
      description: "Ensure compliance with SOX, PCI DSS, and financial regulations",
      icon: Shield
    },
    {
"
      industry: "Healthcare","
      description: "Maintain HIPAA compliance and patient data protection",
      icon: Users
    },
    {
"
      industry: "E-commerce","
      description: "Comply with GDPR, CCPA, and payment security standards",
      icon: Globe
    },
    {
"
      industry: "Technology","
      description: "Manage data privacy and security compliance requirements",
      icon: Cpu
    },
    {
"
      industry: "Manufacturing","
      description: "Ensure regulatory compliance and quality standards",
      icon: Shield
    },
    {
"
      industry: "Education","
      description: "Maintain student data privacy and educational compliance",
      icon: Award
    }
  ];

  return ("
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO"
        title="AI Compliance Assistant - Zion Tech Group"
        description="Automate regulatory compliance with our AI-powered compliance assistant. Monitor, assess, and maintain compliance across multiple regulatory frameworks."
      />
      
      {/* Hero Section */}"
      <section className="relative overflow-hidden py-20 lg:py-32">"
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-teal-900/20"></div>
        "
        <div className="relative max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >"
            <div className="inline-flex items-center px-4 py-2 bg-emerald-600/20 text-emerald-400 rounded-full text-sm font-medium mb-6">"
              <Shield className="w-4 h-4 mr-2" />
              AI-Powered Compliance
            </div>"
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
              AI Compliance"
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {' '}Assistant
              </span>
            </h1>"
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Automate regulatory compliance with intelligent monitoring, risk assessment, and policy management. 
              Stay ahead of regulatory changes and ensure your organization maintains compliance across all frameworks.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 text-lg flex items-center justify-center">"
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>"
              <button className="border border-emerald-500 text-emerald-400 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300 text-lg">"
                <Download className="w-5 h-5 mr-2 inline" />
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}"
      <section className="py-20 bg-slate-800/50">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}"
            className="text-center mb-16"
          >"
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Key Features
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Compliance Assistant provides comprehensive tools to automate and streamline 
              your compliance management processes.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}"
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-emerald-500/50"
              >
                {/* Icon */}"
                <div className="mb-6">"
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">"
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>"
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {feature.title}
                  </h3>"
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect */}"
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}"
      <section className="py-20">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}"
            className="text-center mb-16"
          >"
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Platform Benefits
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the advantages of AI-powered compliance management that drives 
              efficiency and reduces regulatory risk.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map(benefit: unknown, index: unknown (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}"
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-emerald-500/50"
              >
                {/* Icon */}"
                <div className="mb-6">"
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">"
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>"
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {benefit.title}
                  </h3>"
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Effect */}"
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulations Supported Section */}"
      <section className="py-20 bg-slate-800/50">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}"
            className="text-center mb-16"
          >"
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Regulations Supported
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform supports major regulatory frameworks across industries, 
              ensuring comprehensive compliance coverage.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regulations.map(regulation: unknown, index: unknown (
              <motion.div
                key={regulation.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}"
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-emerald-500/50"
              >
                {/* Icon */}"
                <div className="mb-6">"
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">"
                    <regulation.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>"
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {regulation.name}
                  </h3>"
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {regulation.description}
                  </p>
                </div>

                {/* Hover Effect */}"
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}"
      <section className="py-20">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}"
            className="text-center mb-16"
          >"
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Industry Use Cases
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how organizations across industries leverage our AI Compliance Assistant 
              to maintain regulatory compliance and reduce risk.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map(useCase: unknown, index: unknown (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}"
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-emerald-500/50"
              >
                {/* Icon */}"
                <div className="mb-6">"
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">"
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>"
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {useCase.industry}
                  </h3>"
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>

                {/* Hover Effect */}"
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}"
      <section className="py-20 bg-gradient-to-r from-emerald-900/20 to-teal-900/20">"
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >"
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Automate Your Compliance?
            </h2>"
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join organizations already leveraging AI-powered compliance management 
              to reduce risk and maintain regulatory standards.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 text-lg flex items-center justify-center">"
                <Star className="w-5 h-5 mr-2" />
                Get Started Today
              </button>"
              <button className="border border-emerald-500 text-emerald-400 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300 text-lg">"
                <Share2 className="w-5 h-5 mr-2 inline" />
                Schedule Demo
              </button>
            </div>"
            <ul className="space-y-3">
              {features.map((f) => ("
                <li key={f} className="flex items-center text-slate-300">"
                  <CheckCircle className="h-5 w-5 text-rose-400 mr-3" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
"
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">"
            <div className="flex items-center mb-4">"
              <div className="p-3 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg">"
                <Scale className="h-8 w-8 text-white" />
              </div>"
              <h3 className="ml-3 text-xl font-semibold text-white">Frameworks</h3>
            </div>"
            <div className="flex flex-wrap gap-2">
              {frameworks.map((fw) => ("
                <span key={fw} className="px-3 py-1 bg-slate-900/60 border border-slate-700/60 rounded-lg text-slate-300">{fw}</span>
              ))}
            </div>
          </div>
"
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">"
            <div className="flex items-center mb-4">"
              <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg">"
                <BookOpen className="h-8 w-8 text-white" />
              </div>"
              <h3 className="ml-3 text-xl font-semibold text-white">Pricing</h3>
            </div>"
            <ul className="space-y-3 text-slate-300">
              {pricing.map((p) => (<li key={p}>{p}</li>))}
            </ul>"
            <div className="mt-6 text-sm text-slate-400">
              References: {links.map((l, i) => ('"
                <a key={l.label} href={l.url} target="_blank" rel="noreferrer" className="text-rose-300 hover:underline mr-2">{l.label}{i < links.length - 1 ? ', : ''}</a>
              ))}
            </div>
          </div>
        </div>
      </section>;
    </div>
  );
}

'"