import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Network, 
  Zap, 
  Users,
  Target,
  Database,
  Globe,
  Cpu,
  BarChart3,
  Lightbulb,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

const ZeroTrustSecurity = () => {
  const principles = [
    {
      icon: Shield,
      title: 'Never Trust, Always Verify',
      description: 'Continuous verification of identity and access across all systems',
      features: ['Identity verification', 'Access validation', 'Continuous monitoring']
    },
    {
      icon: Lock,
      title: 'Least Privilege Access',
      description: 'Grant minimal access required for specific tasks and time periods',
      features: ['Role-based access', 'Time-limited permissions', 'Just-in-time access']
    },
    {
      icon: Eye,
      title: 'Continuous Monitoring',
      description: 'Real-time monitoring and analysis of all network and user activities',
      features: ['Behavioral analytics', 'Threat detection', 'Anomaly identification']
    },
    {
      icon: Network,
      title: 'Micro-segmentation',
      description: 'Divide networks into smaller, isolated segments for better security',
      features: ['Network isolation', 'Traffic control', 'Attack containment']
    },
    {
      icon: Zap,
      title: 'Automated Response',
      description: 'Instant automated responses to security threats and violations',
      features: ['Threat response', 'Policy enforcement', 'Incident automation']
    },
    {
      icon: Users,
      title: 'Identity Management',
      description: 'Comprehensive identity and access management with multi-factor authentication',
      features: ['Multi-factor auth', 'Single sign-on', 'Identity governance']
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Enhanced Security',
      description: 'Dramatically reduce attack surface and improve threat detection'
    },
    {
      icon: Shield,
      title: 'Compliance Ready',
      description: 'Meet regulatory requirements with comprehensive security controls'
    },
    {
      icon: Zap,
      title: 'Operational Efficiency',
      description: 'Streamline security operations with automated monitoring and response'
    },
    {
      icon: Target,
      title: 'Risk Reduction',
      description: 'Minimize security risks through proactive threat prevention'
    }
  ];

  const industries = [
    {
      industry: 'Financial Services',
      challenges: ['Regulatory Compliance', 'Fraud Prevention', 'Data Protection']
    },
    {
      industry: 'Healthcare',
      challenges: ['Patient Data Security', 'HIPAA Compliance', 'Medical Device Security']
    },
    {
      industry: 'Government',
      challenges: ['National Security', 'Classified Information', 'Critical Infrastructure']
    },
    {
      industry: 'Manufacturing',
      challenges: ['Industrial Control Systems', 'Supply Chain Security', 'Intellectual Property']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zero Trust Security
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Implement comprehensive zero trust security architecture to protect your organization from modern cyber threats.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300">
                Security Assessment
              </button>
              <button className="px-8 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Zero Trust Security Principles
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Build a robust security foundation based on proven zero trust principles and best practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <principle.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{principle.title}</h3>
                <p className="text-gray-300 mb-4">{principle.description}</p>
                <ul className="space-y-2">
                  {principle.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience comprehensive protection and operational advantages with zero trust security.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 border border-gray-700 rounded-xl p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Challenges Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific Challenges
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Address unique security challenges across different industry verticals with tailored solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.industry}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 border border-gray-700 rounded-xl p-6"
              >
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <Target className="w-6 h-6 text-red-400 mr-3" />
                  {industry.industry}
                </h3>
                <div className="space-y-3">
                  {industry.challenges.map((challenge) => (
                    <div key={challenge} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      {challenge}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Security Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Leverage cutting-edge security technologies for comprehensive protection.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Identity Management', 'Network Security', 'Threat Detection', 'Compliance Tools'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 text-center hover:border-gray-600 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white">{tech}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Implement zero trust security architecture and protect your organization from evolving cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300">
                Security Assessment
              </button>
              <button className="px-8 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ZeroTrustSecurity;