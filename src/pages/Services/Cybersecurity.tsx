import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  Users, 
  Database, 
  Network, 
  Smartphone,
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  Download,
  MessageCircle,
  Zap,
  Globe,
  Server,
  Key,
  Cloud
} from 'lucide-react';

const Cybersecurity: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: 'Threat Detection & Response',
      description: 'Advanced threat hunting and incident response to identify and neutralize cyber threats in real-time.',
      color: 'text-red-400',
      bgColor: 'bg-red-600/20'
    },
    {
      icon: Lock,
      title: 'Identity & Access Management',
      description: 'Comprehensive IAM solutions to secure user identities and control access to critical systems.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/20'
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: '24/7 security operations center with continuous monitoring and threat intelligence.',
      color: 'text-green-400',
      bgColor: 'bg-green-600/20'
    },
    {
      icon: Network,
      title: 'Network Security',
      description: 'Multi-layered network protection with firewalls, intrusion detection, and segmentation.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-600/20'
    }
  ];

  const solutions = [
    {
      title: 'Endpoint Security',
      description: 'Comprehensive protection for all devices with advanced threat prevention and detection.',
      icon: Smartphone,
      features: ['Malware protection', 'Behavioral analysis', 'Device control', 'Data encryption']
    },
    {
      title: 'Cloud Security',
      description: 'Secure cloud environments with identity management, data protection, and compliance.',
      icon: Cloud,
      features: ['Cloud access security', 'Data loss prevention', 'Compliance monitoring', 'Threat detection']
    },
    {
      title: 'Data Protection',
      description: 'Safeguard sensitive data with encryption, backup, and disaster recovery solutions.',
      icon: Database,
      features: ['Data encryption', 'Backup solutions', 'Disaster recovery', 'Compliance tools']
    },
    {
      title: 'Security Consulting',
      description: 'Expert guidance on security strategy, risk assessment, and compliance requirements.',
      icon: Users,
      features: ['Risk assessment', 'Security audits', 'Compliance consulting', 'Training programs']
    }
  ];

  const technologies = [
    'AI-Powered Threat Detection',
    'Machine Learning Analytics',
    'Behavioral Analysis',
    'Zero Trust Architecture',
    'Multi-Factor Authentication',
    'Encryption Standards',
    'Security Information Management',
    'Threat Intelligence Platforms'
  ];

  const compliance = [
    'SOC 2 Type II',
    'ISO 27001',
    'GDPR',
    'HIPAA',
    'PCI DSS',
    'NIST Framework',
    'FedRAMP',
    'SOX Compliance'
  ];

  const testimonials = [
    {
      name: 'David Martinez',
      role: 'CISO, FinTech Solutions',
      content: 'Zion Tech Group\'s cybersecurity team helped us achieve SOC 2 compliance in record time. Their expertise is unmatched.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'Security Director, HealthTech',
      content: 'The threat detection capabilities are incredible. We\'ve prevented multiple attacks before they could cause damage.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      role: 'VP IT, Manufacturing Corp',
      content: 'Comprehensive security solution that covers all our needs. The team is responsive and highly skilled.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-red-600/20 rounded-full">
              <Shield className="h-16 w-16 text-red-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Enterprise
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              {" "}Cybersecurity
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Protect your business with military-grade cybersecurity solutions. Our comprehensive security 
            platform defends against the latest threats while ensuring compliance and business continuity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Get Security Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#demo"
              className="px-8 py-3 border border-red-500 text-red-400 hover:bg-red-500 hover:text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              <Play className="mr-2 h-5 w-5" />
              Security Demo
            </a>
          </div>
        </motion.div>

        {/* Key Services */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Comprehensive Security Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`${service.bgColor} rounded-xl p-6 border border-slate-700`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <service.icon className={`h-8 w-8 ${service.color} mr-3`} />
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Security Solutions */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Advanced Security Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <solution.icon className="h-8 w-8 text-red-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <div className="space-y-2">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technologies & Compliance */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Technologies */}
            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Cutting-Edge Technologies</h3>
                <p className="text-gray-300">
                  Our security platform leverages the latest technologies to provide 
                  comprehensive protection against evolving threats.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    className="bg-slate-700/50 rounded-lg p-4 text-center border border-slate-600"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.05 }}
                  >
                    <span className="text-gray-300 text-sm font-medium">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Compliance */}
            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Compliance & Certifications</h3>
                <p className="text-gray-300">
                  Meet industry standards and regulatory requirements with our 
                  certified security solutions and compliance expertise.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {compliance.map((cert, index) => (
                  <motion.div
                    key={cert}
                    className="bg-slate-700/50 rounded-lg p-4 text-center border border-slate-600"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.05 }}
                  >
                    <span className="text-gray-300 text-sm font-medium">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Security Features */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Security?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-red-600/20 rounded-full">
                  <Zap className="h-12 w-12 text-red-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Real-Time Protection</h3>
              <p className="text-gray-300">
                24/7 threat monitoring and instant response to security incidents, 
                ensuring your business stays protected around the clock.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-blue-600/20 rounded-full">
                  <Globe className="h-12 w-12 text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Global Threat Intelligence</h3>
              <p className="text-gray-300">
                Access to worldwide threat intelligence and security research to 
                stay ahead of emerging cyber threats and attack patterns.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-green-600/20 rounded-full">
                  <Server className="h-12 w-12 text-green-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Scalable Architecture</h3>
              <p className="text-gray-300">
                Enterprise-grade security that scales with your business, from 
                startups to Fortune 500 companies, with flexible deployment options.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Threat Landscape */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-2xl p-8 border border-red-500/30">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <AlertTriangle className="h-12 w-12 text-red-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Current Threat Landscape</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Cyber threats are evolving rapidly. Our security experts continuously monitor the threat landscape 
                to provide proactive protection against the latest attack vectors and vulnerabilities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">+300%</div>
                <p className="text-gray-300">Increase in ransomware attacks</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">$6.9M</div>
                <p className="text-gray-300">Average cost of data breach</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">287 days</div>
                <p className="text-gray-300">Average time to detect breach</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Client Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-2xl p-12 border border-red-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">Secure Your Business Today</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait until it's too late. Get comprehensive cybersecurity protection 
              from Zion Tech Group's expert security team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Free Security Assessment
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-red-500 text-red-400 hover:bg-red-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Schedule Consultation
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                <MessageCircle className="inline mr-2 h-5 w-5" />
                Talk to Security Expert
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Cybersecurity;