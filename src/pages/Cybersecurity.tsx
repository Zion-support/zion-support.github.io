import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  Zap, 
  Users, 
  Database,
  Network,
  Cpu,
  Globe,
  Code,
  BarChart3,
  Target,
  Clock,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Threat Detection & Response',
    description: 'Advanced AI-powered systems that identify and neutralize cyber threats in real-time.',
    features: ['24/7 monitoring', 'AI threat analysis', 'Automated response', 'Incident management']
  },
  {
    icon: Lock,
    title: 'Identity & Access Management',
    description: 'Comprehensive solutions to secure user identities and control access to critical systems.',
    features: ['Multi-factor authentication', 'Single sign-on', 'Role-based access', 'Privilege management']
  },
  {
    icon: Database,
    title: 'Data Protection & Encryption',
    description: 'End-to-end encryption and data security solutions to protect sensitive information.',
    features: ['Data encryption', 'Backup security', 'Compliance tools', 'Privacy protection']
  },
  {
    icon: Network,
    title: 'Network Security',
    description: 'Advanced network protection with firewalls, intrusion detection, and traffic analysis.',
    features: ['Next-gen firewalls', 'Intrusion prevention', 'Traffic monitoring', 'Vulnerability scanning']
  }
];

const solutions = [
  {
    category: 'Enterprise Security',
    title: 'Zero Trust Architecture',
    description: 'Implement a comprehensive zero-trust security model that verifies every user and device.',
    benefits: ['Enhanced security posture', 'Reduced attack surface', 'Compliance readiness', 'Cost optimization'],
    icon: Shield
  },
  {
    category: 'Cloud Security',
    title: 'Multi-Cloud Protection',
    description: 'Secure your cloud infrastructure across AWS, Azure, Google Cloud, and hybrid environments.',
    benefits: ['Unified security', 'Cloud compliance', 'Threat prevention', 'Scalable protection'],
    icon: Cloud
  },
  {
    category: 'AI Security',
    title: 'AI-Powered Threat Intelligence',
    description: 'Leverage artificial intelligence to detect and respond to sophisticated cyber threats.',
    benefits: ['Real-time detection', 'Predictive analytics', 'Automated response', 'Reduced false positives'],
    icon: Brain
  },
  {
    category: 'Compliance',
    title: 'Regulatory Compliance',
    description: 'Meet industry standards and regulatory requirements with comprehensive security frameworks.',
    benefits: ['SOC 2 compliance', 'GDPR readiness', 'HIPAA security', 'PCI DSS compliance'],
    icon: CheckCircle
  }
];

const industries = [
  {
    name: 'Healthcare',
    icon: Heart,
    challenges: ['HIPAA compliance', 'Patient data protection', 'Medical device security', 'Ransomware protection'],
    solutions: ['Healthcare security framework', 'Medical device security', 'Compliance automation', 'Incident response']
  },
  {
    name: 'Finance',
    icon: DollarSign,
    challenges: ['PCI DSS compliance', 'Fraud detection', 'Transaction security', 'Regulatory requirements'],
    solutions: ['Financial security platform', 'Fraud prevention', 'Compliance tools', 'Risk management']
  },
  {
    name: 'Manufacturing',
    icon: Factory,
    challenges: ['OT security', 'Supply chain protection', 'Intellectual property', 'Operational continuity'],
    solutions: ['OT security framework', 'Supply chain security', 'IP protection', 'Business continuity']
  },
  {
    name: 'Government',
    icon: Building,
    challenges: ['National security', 'Classified information', 'Cyber warfare', 'Public trust'],
    solutions: ['Government security', 'Classified systems', 'Cyber defense', 'Public safety']
  }
];

const technologies = [
  { name: 'CrowdStrike', description: 'Endpoint detection and response', icon: Shield },
  { name: 'Palo Alto Networks', description: 'Next-generation firewalls', icon: Lock },
  { name: 'Splunk', description: 'Security information management', icon: BarChart3 },
  { name: 'Okta', description: 'Identity and access management', icon: Users },
  { name: 'Darktrace', description: 'AI-powered threat detection', icon: Brain },
  { name: 'Qualys', description: 'Vulnerability management', icon: Target }
];

export default function Cybersecurity() {
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-32 h-32 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-zion-blue rounded-full animate-pulse delay-2000"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gradient">
                Cybersecurity
              </h1>
            </div>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Protect your business with enterprise-grade cybersecurity solutions powered by AI and 
              advanced threat intelligence. Stay ahead of evolving cyber threats with proactive defense.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-futuristic px-8 py-3 text-lg"
              >
                Get Security Assessment
              </a>
              <a
                href="#solutions"
                className="btn-neon px-8 py-3 text-lg"
              >
                View Solutions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Security Services</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our cybersecurity portfolio covers every aspect of digital security, from threat detection 
              to compliance management, ensuring your business is protected 24/7.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-xl bg-zion-slate-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3 text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Advanced Security Solutions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Tailored cybersecurity solutions designed to address your specific security challenges 
              and protect your critical assets from evolving threats.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-xl bg-zion-slate-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-zion-cyan uppercase tracking-wide">{solution.category}</span>
                    <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                  </div>
                </div>
                <p className="text-zion-slate-light mb-6">{solution.description}</p>
                <div className="space-y-3">
                  {solution.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center space-x-3 text-zion-slate-light">
                      <Zap className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Industry-Specific Security</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Specialized cybersecurity solutions designed for the unique challenges and compliance 
              requirements of different industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-xl bg-zion-slate-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{industry.name}</h3>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Key Challenges</h4>
                  <ul className="space-y-2">
                    {industry.challenges.map((challenge) => (
                      <li key={challenge} className="flex items-center space-x-3 text-zion-slate-light">
                        <AlertTriangle className="w-4 h-4 text-zion-orange flex-shrink-0" />
                        <span className="text-sm">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Our Solutions</h4>
                  <ul className="space-y-2">
                    {industry.solutions.map((solution) => (
                      <li key={solution} className="flex items-center space-x-3 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-green flex-shrink-0" />
                        <span className="text-sm">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Leading Security Technologies</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We partner with industry-leading cybersecurity vendors to deliver the most effective 
              and up-to-date security solutions for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-zion-slate-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-xs text-zion-slate-light">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Secure Your Business Today</h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Don't wait until it's too late. Get a comprehensive security assessment and 
              protect your business from evolving cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-futuristic px-8 py-3 text-lg"
              >
                Get Security Assessment
              </a>
              <a
                href="/request-quote"
                className="btn-neon px-8 py-3 text-lg"
              >
                Request Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Missing icon components
const Heart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const DollarSign = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
  </svg>
);

const Factory = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const Building = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const Cloud = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.004 5.004 0 00-5.1 4.999z" />
  </svg>
);

const Brain = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);