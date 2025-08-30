import React from 'react.ts';
import { motion  } from 'framer-motion.ts';
import { SEO  } from '@/components/SEO';
import { FileText, 
  Shield, 
  Clock, 
  Zap, 
  Search, 
  Eye,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  Users,
  BarChart3,
  Lock
 } from 'lucide-react.ts';

export default function AILegalDocumentAutomation(...args[]):  {
  const features = [
    {
      icon: FileText,
      title: "AI Document Generation",
      description: "Automatically generate legal documents with intelligent templates and compliance checks"
    },
    {
      icon: Shield,
      title: "Compliance Monitoring",
      description: "Real-time monitoring of legal compliance requirements and automatic updates"
    },
    {
      icon: Clock,
      title: "Instant Processing",
      description: "Process legal documents in seconds instead of hours with AI-powered automation"
    },
    {
      icon: Zap,
      title: "Smart Templates",
      description: "Intelligent document templates that adapt to your specific legal requirements"
    },
    {
      icon: Search,
      title: "Legal Research",
      description: "AI-powered legal research assistant with case law analysis and precedent tracking"
    },
    {
      icon: Eye,
      title: "Document Review",
      description: "Automated document review with risk assessment and compliance validation"
    }
  ];

  const servicePackages = [
    {
      name: "Contract Generation",
      price: "From $299/month",
      features[
        "AI-powered contract templates",
        "Automated compliance checks",
        "Custom clause generation",
        "Version control and tracking",
        "Electronic signature integration",
        "24/7 support"
      ]
    },
    {
      name: "Legal Research Assistant",
      price: "From $199/month",
      features[
        "Case law analysis",
        "Precedent tracking",
        "Regulatory updates",
        "Citation management",
        "Research summaries",
        "Expert consultation"
      ]
    },
    {
      name: "Document Review & Analysis",
      price: "From $399/month",
      features[
        "Automated risk assessment",
        "Compliance validation",
        "Legal precedent analysis",
        "Red flag identification",
        "Detailed reporting",
        "Priority recommendations"
      ]
    },
    {
      name: "Legal Workflow Automation",
      price: "From $599/month",
      features[
        "End-to-end workflow automation",
        "Task assignment and tracking",
        "Deadline management",
        "Integration with legal systems",
        "Performance analytics",
        "Custom automation rules"
      ]
    }
  ];

  const supportedDocuments = [
    "Contracts and Agreements",
    "Legal Briefs and Memos",
    "Compliance Reports",
    "Policy Documents",
    "Terms of Service",
    "Privacy Policies",
    "Employment Agreements",
    "NDAs and Confidentiality Agreements"
  ];

  const benefits = [
    'Reduce legal document creation time by 85%',
    'Minimize legal risks and compliance issues',
    'Cut legal costs by up to 60%',
    'Improve contract accuracy and consistency',
    'Enable faster deal closures and negotiations',
    'Provide 24/7 legal document assistance'
  ];

  const useCases = [
    'Contract management and automation',
    'Legal document review and analysis',
    'Compliance monitoring and reporting',
    'Risk assessment and mitigation',
    'Legal workflow optimization',
    'Regulatory compliance automation'
  ];

  const tiers = [
    {
      name: 'Starter',
      price: '$299/mo',
      details: [
        'Up to 50 documents/month',
        'Basic AI contract generation',
        'Standard legal templates',
        'Email support',
        'Basic compliance checking'
      ]
    },
    {
      name: 'Professional',
      price: '$799/mo',
      details: [
        'Up to 200 documents/month',
        'Advanced AI legal analysis',
        'Custom legal templates',
        'Priority support',
        'Multi-jurisdiction support',
        'Advanced risk assessment'
      ]
    },
    {
      name: 'Enterprise',
      price: '$1,999/mo',
      details: [
        'Unlimited documents',
        'Full AI legal automation',
        'Custom legal frameworks',
        'Dedicated legal support',
        'API integrations',
        'Advanced analytics & reporting'
      ]
    }
  ];

  const technicalSpecs = {
    technology: ['GPT-4', 'BERT', 'Python', 'React', 'Node.js', 'PostgreSQL'],
    integrations: ['DocuSign', 'Adobe Sign', 'Salesforce', 'HubSpot', 'Microsoft 365'],
    security: ['SOC 2 Type II', 'GDPR', 'HIPAA', 'End-to-end encryption', 'Multi-factor authentication'],
    uptime: '99.9%',
    compliance: ['ISO 27001', 'SOC 2', 'GDPR', 'CCPA', 'HIPAA']
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Scale className="w-4 h-4 mr-2" /> AI-Powered Legal Automation
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            AI Legal Document Automation
          </h1>
          <p className="text-zion-slate-light text-xl">
            Transform your legal operations with AI-powered document automation, compliance checking, and risk assessment.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Key Features</h2>
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="w-5 h-5 text-zion-cyan mr-3 mt-0.5" />
                  <span className="text-zion-slate-dark">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Business Benefits</h2>
            <ul className="space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start">
                  <Zap className="w-5 h-5 text-zion-cyan mr-3 mt-0.5" />
                  <span className="text-zion-slate-dark">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-zion-slate-dark mb-6 text-center">Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <div key={useCase} className="p-6 bg-white border border-zion-slate-light/20 rounded-xl shadow-sm">
                <FileText className="w-6 h-6 text-zion-cyan mb-3" />
                <div className="text-zion-slate-dark font-semibold">{useCase}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-zion-slate-dark mb-6 text-center">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div key={tier.name} className="bg-white border border-zion-slate-light/20 rounded-xl p-6 shadow-md">
                <div className="text-lg font-semibold mb-1">{tier.name}</div>
                <div className="text-2xl font-bold text-zion-cyan mb-2">{tier.price}</div>
                <ul className="text-sm text-zion-slate-dark space-y-1">
                  {tier.details.map((detail) => (<li key={detail}>{detail}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>

            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Packages */}
        <section className="py-20 px-6 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Flexible Service Packages
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your legal practice needs with scalable 
                pricing and comprehensive features
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
              {servicePackages.map((pkg, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">{pkg.name}</h3>
                  <div className="text-3xl font-bold mb-6 text-cyan-400">{pkg.price}</div>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Document Types */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Comprehensive Document Support
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI platform handles a wide range of legal documents with 
                industry-specific compliance requirements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">
              {supportedDocuments.map((doc, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center"
                >
                  <FileText className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <p className="text-white font-medium">{doc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Transform Your Legal Practice
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience significant improvements in efficiency, accuracy, and 
                cost-effectiveness with AI-powered legal automation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white text-lg font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Cutting-Edge Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built with the latest AI and machine learning technologies for 
                maximum performance and reliability
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center"
                >
                  <Zap className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <p className="text-white font-medium">{tech}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Ready to Transform Your Legal Operations?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-cyan-100 mb-8"
            >
              Join leading law firms and legal departments that have already 
              revolutionized their document processes with AI automation
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to discuss how AI Legal Document Automation can transform 
                your legal practice? Contact our experts today.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Website</h3>
                <p className="text-gray-300">https://ziontechgroup.com</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mt-12"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">Address</h3>
              <p className="text-gray-300">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )}