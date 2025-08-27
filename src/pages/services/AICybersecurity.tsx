import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  CheckCircle, 
  BarChart3, 
  Sparkles, 
  ArrowRight, 
  Brain,
  Eye,
  Lock,
  Users,
  Cpu,
  Database,
  AlertTriangle,
  Globe,
  Server
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AICybersecurity() {
  const features = [
    'AI-powered threat detection and prevention',
    'Real-time network monitoring and analysis',
    'Behavioral analytics for user and entity monitoring',
    'Automated incident response and remediation',
    'Advanced malware detection with machine learning',
    'Zero-day vulnerability identification',
    'Compliance monitoring and reporting automation',
    '24/7 security operations center (SOC)'
  ];

  const benefits = [
    'Detect threats 10x faster than traditional methods',
    'Reduce false positives by 85%',
    'Prevent 99.9% of known and unknown attacks',
    'Cut security incident response time by 70%',
    'Achieve SOC 2, ISO 27001, and GDPR compliance',
    'Reduce security operations costs by 40-60%'
  ];

  const securityLayers = [
    {
      name: 'Network Security',
      description: 'AI-powered firewall, intrusion detection, and traffic analysis',
      icon: Server,
      features: ['Deep packet inspection', 'DDoS protection', 'VPN management']
    },
    {
      name: 'Endpoint Protection',
      description: 'Advanced malware detection and device security management',
      icon: Cpu,
      features: ['Behavioral analysis', 'File integrity monitoring', 'Device control']
    },
    {
      name: 'Identity & Access',
      description: 'Multi-factor authentication and privileged access management',
      icon: Users,
      features: ['Biometric authentication', 'Role-based access', 'Session monitoring']
    },
    {
      name: 'Data Protection',
      description: 'Encryption, data loss prevention, and privacy compliance',
      icon: Lock,
      features: ['End-to-end encryption', 'Data classification', 'Privacy controls']
    }
  ];

  const pricing = [
    {
      plan: 'Essential',
      price: '$499',
      period: '/month',
      features: ['Up to 100 users', 'Basic threat detection', 'Email support', 'Standard compliance'],
      recommended: false
    },
    {
      plan: 'Professional',
      price: '$1,299',
      period: '/month',
      features: ['Up to 500 users', 'Advanced AI detection', 'Priority support', 'SOC 2 compliance', 'Custom rules'],
      recommended: true
    },
    {
      plan: 'Enterprise',
      price: '$3,999',
      period: '/month',
      features: ['Unlimited users', 'Custom AI models', 'Dedicated SOC team', 'Full compliance suite', 'White-label options'],
      recommended: false
    }
  ];

  const complianceStandards = [
    { name: 'SOC 2 Type II', description: 'Security, availability, and confidentiality controls' },
    { name: 'ISO 27001', description: 'Information security management system' },
    { name: 'GDPR', description: 'General Data Protection Regulation compliance' },
    { name: 'HIPAA', description: 'Healthcare data protection standards' },
    { name: 'PCI DSS', description: 'Payment card industry security standards' },
    { name: 'NIST', description: 'National Institute of Standards and Technology framework' }
  ];

  const techStack = [
    { name: 'TensorFlow', url: 'https://tensorflow.org/', category: 'AI/ML' },
    { name: 'PyTorch', url: 'https://pytorch.org/', category: 'AI/ML' },
    { name: 'Elasticsearch', url: 'https://www.elastic.co/', category: 'Search & Analytics' },
    { name: 'Kafka', url: 'https://kafka.apache.org/', category: 'Stream Processing' },
    { name: 'Kubernetes', url: 'https://kubernetes.io/', category: 'Container Orchestration' },
    { name: 'Prometheus', url: 'https://prometheus.io/', category: 'Monitoring' },
    { name: 'Grafana', url: 'https://grafana.com/', category: 'Visualization' },
    { name: 'Ansible', url: 'https://www.ansible.com/', category: 'Automation' }
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      <SEO 
        title="AI-Powered Cybersecurity - Zion Tech Group"
        description="Protect your business with next-generation AI cybersecurity. Detect threats 10x faster and prevent 99.9% of attacks with our intelligent security platform."
        canonical="/services/ai-cybersecurity"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Cybersecurity</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Protect your business with intelligent security that learns, adapts, and evolves to counter emerging threats in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Security Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                Visit Our Site
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
          <motion.div 
            className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          />
        </div>
      </section>

      {/* Security Layers Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Multi-Layer <span className="text-cyan-400">Security Architecture</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Comprehensive protection across all attack vectors with AI-powered intelligence
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityLayers.map((layer, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                    <layer.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{layer.name}</h3>
                    <p className="text-cyan-400 text-sm font-medium">Security Layer</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">{layer.description}</p>
                <ul className="space-y-2">
                  {layer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <CheckCircle className="h-4 w-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced <span className="text-cyan-400">Security Features</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Cutting-edge technology for comprehensive threat protection
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <p className="text-slate-300 text-sm">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Measurable <span className="text-cyan-400">Security Impact</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Real results that protect your business and bottom line
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="ml-3 text-lg font-semibold text-white">Benefit {index + 1}</h3>
                </div>
                <p className="text-slate-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry <span className="text-cyan-400">Compliance</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Meet and exceed regulatory requirements with automated compliance monitoring
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">{standard.name}</h3>
                </div>
                <p className="text-slate-300 text-sm">{standard.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent <span className="text-cyan-400">Pricing</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Choose the security plan that fits your business needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative bg-slate-800/50 border rounded-xl p-8 ${
                  plan.recommended 
                    ? 'border-cyan-500/50 bg-slate-800/70' 
                    : 'border-slate-700/50'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-slate-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-all duration-300 ${
                    plan.recommended
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built with <span className="text-cyan-400">Enterprise Technology</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Our security platform leverages industry-leading technologies for maximum protection
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <motion.a
                key={index}
                href={tech.url}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800/60 border border-slate-700/60 rounded-lg p-4 text-center hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-sm text-cyan-400 mb-1">{tech.category}</div>
                <div className="text-white font-semibold">{tech.name}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to <span className="text-cyan-400">Secure</span> Your Business?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust our AI-powered cybersecurity platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Security Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-400">
              Questions? Email <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:underline">kleber@ziontechgroup.com</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}