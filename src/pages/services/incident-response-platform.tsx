import React from 'react';
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { 
  Shield, 
  AlertTriangle, 
  Clock, 
  Users, 
  Target, 
  Star, 
  Zap, 
  Brain, 
  Cloud, 
  BarChart3, 
  Lock,
  Activity,
  Eye,
  Cpu,
  Network,
  FileText,
  MessageCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function IncidentResponsePlatform() {
  const features = [
    {
      icon: AlertTriangle,
      title: 'Real-Time Threat Detection',
      description: 'Advanced monitoring systems that detect and alert on security incidents as they occur.',
      benefits: ['24/7 monitoring', 'Instant alerts', 'Threat intelligence', 'Behavioral analysis']
    },
    {
      icon: Clock,
      title: 'Rapid Response',
      description: 'Automated incident response workflows that minimize response time and impact.',
      benefits: ['Automated containment', 'Quick isolation', 'Response playbooks', 'Time tracking']
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified cybersecurity professionals with extensive incident response experience.',
      benefits: ['Certified analysts', 'Industry expertise', 'Continuous training', 'Team coordination']
    },
    {
      icon: Target,
      title: 'Forensic Analysis',
      description: 'Comprehensive digital forensics to understand attack vectors and prevent future incidents.',
      benefits: ['Evidence preservation', 'Root cause analysis', 'Attack reconstruction', 'Legal compliance']
    }
  ];

  const capabilities = [
    {
      category: 'Detection & Monitoring',
      services: [
        'SIEM integration and correlation',
        'Network traffic analysis',
        'Endpoint detection and response',
        'User behavior analytics',
        'Threat intelligence feeds'
      ]
    },
    {
      category: 'Response & Containment',
      services: [
        'Automated incident triage',
        'Threat containment workflows',
        'System isolation protocols',
        'Communication coordination',
        'Escalation procedures'
      ]
    },
    {
      category: 'Investigation & Analysis',
      services: [
        'Digital forensics collection',
        'Malware analysis',
        'Attack timeline reconstruction',
        'Impact assessment',
        'Evidence documentation'
      ]
    },
    {
      category: 'Recovery & Lessons',
      services: [
        'System restoration',
        'Security hardening',
        'Post-incident review',
        'Process improvement',
        'Training recommendations'
      ]
    }
  ];

  const technologies = [
    {
      name: 'AI-Powered Threat Detection',
      description: 'Machine learning algorithms that identify patterns and anomalies in real-time.',
      icon: Brain
    },
    {
      name: 'Automated Response Orchestration',
      description: 'Intelligent workflows that automatically contain and mitigate threats.',
      icon: Zap
    },
    {
      name: 'Cloud-Native Architecture',
      description: 'Scalable platform that integrates with modern cloud environments.',
      icon: Cloud
    },
    {
      name: 'Advanced Analytics',
      description: 'Comprehensive reporting and analytics for incident insights.',
      icon: BarChart3
    }
  ];

  const responseMetrics = [
    { metric: 'Mean Time to Detection', value: '< 1 minute', improvement: '90% faster' },
    { metric: 'Mean Time to Response', value: '< 5 minutes', improvement: '85% faster' },
    { metric: 'Mean Time to Resolution', value: '< 2 hours', improvement: '75% faster' },
    { metric: 'False Positive Rate', value: '< 2%', improvement: '95% accuracy' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SEO 
        title="Incident Response Platform | Zion Tech Group" 
        description="Advanced cybersecurity incident response platform with AI-powered detection, automated response workflows, and expert incident management." 
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-red-900/20 to-orange-900/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-red-400 via-orange-500 to-yellow-400 rounded-2xl flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent mb-6">
              Incident Response Platform
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Advanced cybersecurity incident response platform with AI-powered detection, 
              automated response workflows, and expert incident management to protect your organization.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-700 transition-all duration-300"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-red-400/30 text-red-400 font-semibold rounded-xl hover:bg-red-400/10 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Incident Response</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our platform provides end-to-end incident response capabilities, from initial detection 
              through resolution and recovery, ensuring your organization stays protected.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-red-400/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-400">
                      <Star className="w-4 h-4 text-red-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Platform Capabilities</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive incident response capabilities that cover the entire incident lifecycle, 
              from initial detection through recovery and lessons learned.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <Target className="w-6 h-6 text-red-400 mr-3" />
                  {capability.category}
                </h3>
                <ul className="space-y-3">
                  {capability.services.map((service, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Advanced Technologies</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our platform leverages cutting-edge technologies including AI, automation, and cloud-native 
              architecture to deliver superior incident response capabilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-red-400/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mr-4">
                    <tech.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{tech.name}</h3>
                </div>
                <p className="text-slate-300">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Performance Metrics</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our platform consistently delivers superior performance metrics, significantly improving 
              incident response times and reducing the impact of security incidents.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {responseMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{metric.metric}</h3>
                <div className="text-3xl font-bold text-red-400 mb-2">{metric.value}</div>
                <div className="text-sm text-green-400">{metric.improvement}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 border border-red-400/30 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Enhance Your Incident Response?</h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Protect your organization with our advanced incident response platform and 
                ensure rapid, effective response to security incidents.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-700 transition-all duration-300"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-red-400/30 text-red-400 font-semibold rounded-xl hover:bg-red-400/10 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-slate-900/50">
        <div className="container-responsive">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Contact Our Incident Response Team</h3>
            <p className="text-slate-300 mb-6">
              Ready to strengthen your incident response capabilities? Get in touch with our cybersecurity experts.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-slate-300">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-red-400 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-red-400 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-red-400 mr-2" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}