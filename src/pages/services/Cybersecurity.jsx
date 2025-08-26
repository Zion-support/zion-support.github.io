import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  Zap, 
  Globe, 
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Award,
  Lightbulb,
  Rocket,
  Code,
  BarChart3,
  Network,
  Database,
  Server,
  Key,
  Fingerprint,
  Building,
  Factory,
  Heart,
  DollarSign,
  ShoppingCart,
  Target
} from 'lucide-react';

const Cybersecurity = () => {
  const securityServices = [
    {
      title: 'Threat Detection & Response',
      description: 'Advanced security monitoring and incident response capabilities',
      icon: Eye,
      features: [
        '24/7 Security Monitoring',
        'Real-time Threat Detection',
        'Automated Incident Response',
        'Security Analytics',
        'Threat Intelligence'
      ],
      applications: ['Enterprise', 'Healthcare', 'Finance', 'Government'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Zero Trust Architecture',
      description: 'Implement comprehensive zero trust security frameworks',
      icon: Lock,
      features: [
        'Identity Verification',
        'Access Control',
        'Network Segmentation',
        'Continuous Monitoring',
        'Least Privilege Access'
      ],
      applications: ['Cloud Security', 'Remote Work', 'Enterprise', 'Critical Infrastructure'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Penetration Testing',
      description: 'Comprehensive security assessments and vulnerability testing',
      icon: AlertTriangle,
      features: [
        'Network Penetration Testing',
        'Web Application Testing',
        'Social Engineering',
        'Physical Security Testing',
        'Red Team Operations'
      ],
      applications: ['Compliance', 'Risk Assessment', 'Security Audits', 'Incident Response'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Security Compliance',
      description: 'Achieve and maintain regulatory compliance standards',
      icon: CheckCircle,
      features: [
        'SOC 2 Type II',
        'ISO 27001',
        'GDPR Compliance',
        'HIPAA Security',
        'PCI DSS'
      ],
      applications: ['Healthcare', 'Finance', 'E-commerce', 'Government'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const industrySolutions = [
    {
      industry: 'Healthcare',
      icon: Heart,
      solutions: [
        'HIPAA Compliance',
        'Medical Device Security',
        'Patient Data Protection',
        'Ransomware Protection',
        'Secure Telemedicine'
      ],
      benefits: [
        'Patient privacy protection',
        'Regulatory compliance',
        'Reduced security risks',
        'Trust and reputation'
      ]
    },
    {
      industry: 'Finance',
      icon: DollarSign,
      solutions: [
        'PCI DSS Compliance',
        'Fraud Detection',
        'Secure Banking Systems',
        'Cryptocurrency Security',
        'Regulatory Compliance'
      ],
      benefits: [
        'Enhanced customer trust',
        'Regulatory compliance',
        'Fraud prevention',
        'Operational security'
      ]
    },
    {
      industry: 'Manufacturing',
      icon: Factory,
      solutions: [
        'OT Security',
        'Supply Chain Security',
        'Industrial IoT Protection',
        'Intellectual Property Protection',
        'Operational Continuity'
      ],
      benefits: [
        'Production continuity',
        'IP protection',
        'Supply chain security',
        'Competitive advantage'
      ]
    },
    {
      industry: 'Retail',
      icon: ShoppingCart,
      solutions: [
        'E-commerce Security',
        'Payment Security',
        'Customer Data Protection',
        'Point of Sale Security',
        'Supply Chain Security'
      ],
      benefits: [
        'Customer trust',
        'Payment security',
        'Regulatory compliance',
        'Brand protection'
      ]
    }
  ];

  const securityProcess = [
    {
      step: '01',
      title: 'Security Assessment',
      description: 'Comprehensive evaluation of your current security posture',
      icon: Eye,
      details: [
        'Vulnerability assessment',
        'Risk analysis',
        'Compliance review',
        'Security audit'
      ]
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a customized security roadmap and implementation plan',
      icon: Target,
      details: [
        'Security framework design',
        'Technology selection',
        'Implementation timeline',
        'Resource planning'
      ]
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Deploy security solutions and establish security controls',
      icon: Rocket,
      details: [
        'Security tool deployment',
        'Policy implementation',
        'Training and awareness',
        'Process establishment'
      ]
    },
    {
      step: '04',
      title: 'Testing & Validation',
      description: 'Verify security measures and conduct penetration testing',
      icon: CheckCircle,
      details: [
        'Security testing',
        'Vulnerability scanning',
        'Penetration testing',
        'Compliance validation'
      ]
    },
    {
      step: '05',
      title: 'Monitoring & Maintenance',
      description: 'Ongoing security monitoring and continuous improvement',
      icon: TrendingUp,
      details: [
        '24/7 monitoring',
        'Incident response',
        'Regular updates',
        'Continuous improvement'
      ]
    },
    {
      step: '06',
      title: 'Compliance & Reporting',
      description: 'Maintain compliance and provide regular security reports',
      icon: Award,
      details: [
        'Compliance monitoring',
        'Security reporting',
        'Audit support',
        'Risk management'
      ]
    }
  ];

  const caseStudies = [
    {
      title: 'Healthcare Security Transformation',
      company: 'Regional Hospital Network',
      challenge: 'Need for comprehensive HIPAA compliance and patient data protection',
      solution: 'Implemented zero trust architecture with advanced threat detection',
      results: [
        '100% HIPAA compliance',
        'Zero data breaches in 2 years',
        '99.9% uptime for critical systems',
        'Reduced security incidents by 80%'
      ],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Financial Services Security',
      company: 'Digital Banking Platform',
      challenge: 'Secure online banking operations and PCI DSS compliance',
      solution: 'Multi-layered security with advanced fraud detection',
      results: [
        'PCI DSS Level 1 compliance',
        '99.99% fraud detection accuracy',
        'Zero successful attacks',
        'Customer trust score increased by 40%'
      ],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Manufacturing OT Security',
      company: 'Global Manufacturing Corp',
      challenge: 'Protect operational technology from cyber threats',
      solution: 'Industrial cybersecurity framework with OT-specific protections',
      results: [
        'Zero OT security incidents',
        '99.9% production uptime',
        'Reduced security costs by 30%',
        'Enhanced competitive position'
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent"
          >
            Cybersecurity Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed"
          >
            Protect your organization with enterprise-grade cybersecurity solutions. 
            We provide comprehensive security services to safeguard your digital assets, 
            ensure compliance, and maintain business continuity.
          </motion.p>
        </div>
      </section>

      {/* Security Services Grid */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Our Security Services
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {securityServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-darker rounded-2xl border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300 overflow-hidden group"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-zion-cyan" />
                    </div>
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Applications */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Applications</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.applications.map((app, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors duration-300 group-hover:translate-x-1"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Industry-Specific Security Solutions
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industrySolutions.map((industry, index) => (
              <motion.div
                key={industry.industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-r from-zion-slate-darker to-zion-slate-dark rounded-2xl border border-zion-slate-light/20 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center">
                    <industry.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{industry.industry}</h3>
                </div>
                
                {/* Solutions */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Security Solutions</h4>
                  <ul className="space-y-2">
                    {industry.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-zion-slate-light">
                        <Shield className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Benefits */}
                <div>
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {industry.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Process */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Our Security Implementation Process
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-darker rounded-2xl border border-zion-slate-light/20 p-6 text-center group hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                
                <div className="text-4xl font-bold text-zion-cyan mb-4">{step.step}</div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-zion-slate-light mb-4 leading-relaxed">
                  {step.description}
                </p>
                
                <ul className="space-y-2 text-sm text-zion-slate-light">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Security Success Stories
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-darker rounded-2xl border border-zion-slate-light/20 overflow-hidden group hover:border-zion-cyan/50 transition-all duration-300"
              >
                {/* Case Study Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm font-medium rounded-full border border-zion-cyan/30">
                      Case Study
                    </span>
                  </div>
                </div>
                
                {/* Case Study Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                    {study.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-4">
                    <strong>Client:</strong> {study.company}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Challenge</h4>
                    <p className="text-zion-slate-light text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Solution</h4>
                    <p className="text-zion-slate-light text-sm">{study.solution}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-zion-slate-light text-sm">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4">
        <div className="container mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan-dark to-zion-blue-dark p-12 rounded-2xl"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Secure Your Digital Future
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Don't wait for a security breach to protect your organization. Our cybersecurity experts 
              are ready to help you build a robust security foundation that protects your business today and tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-zion-blue-dark hover:bg-zion-slate-light font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Security Assessment
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;