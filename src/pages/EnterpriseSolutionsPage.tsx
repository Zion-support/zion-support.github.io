import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Building, 
  Users, 
  Target, 
  TrendingUp, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Cpu,
  Database
} from 'lucide-react';
=======
import { Building, Shield, Users, Zap, Target, Globe, Rocket, Award, Cpu, Cloud, Brain, Database } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-876b

const EnterpriseSolutionsPage = () => {
  const enterpriseServices = [
    {
<<<<<<< HEAD
      icon: Building,
      title: 'Digital Transformation',
      description: 'End-to-end business modernization and digital strategy implementation',
      features: [
        'Digital strategy consulting',
        'Process optimization',
        'Technology roadmapping',
        'Change management',
        'Performance monitoring',
        'Continuous improvement'
      ],
      pricing: 'Starting from $25,000',
      link: '/digital-transformation'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Comprehensive security solutions for enterprise environments',
      features: [
        'Security assessment & auditing',
        'Compliance management',
        'Identity & access management',
        'Threat detection & response',
        'Data protection',
        'Security monitoring'
      ],
      pricing: 'Starting from $15,000/month',
      link: '/enterprise-security'
    },
    {
      icon: Users,
      title: 'Business Process Automation',
      description: 'Streamline operations with intelligent automation solutions',
      features: [
        'Process analysis & mapping',
        'Workflow automation',
        'Integration services',
        'Performance analytics',
        'Change management',
        'Training & support'
      ],
      pricing: 'Starting from $20,000',
      link: '/business-process-automation'
    },
    {
      icon: Database,
      title: 'Data Analytics & BI',
      description: 'Transform data into actionable business intelligence',
      features: [
        'Data strategy & architecture',
        'Analytics platform setup',
        'Custom dashboard development',
        'Predictive analytics',
        'Data governance',
        'Performance optimization'
      ],
      pricing: 'Starting from $18,000/month',
      link: '/data-analytics'
    },
    {
      icon: Cpu,
      title: 'Legacy System Modernization',
      description: 'Transform legacy systems into modern, scalable solutions',
      features: [
        'System assessment',
        'Modernization strategy',
        'Migration planning',
        'Data migration',
        'Testing & validation',
        'Training & support'
      ],
      pricing: 'Starting from $30,000',
      link: '/legacy-modernization'
    },
    {
      icon: Globe,
      title: 'Enterprise Integration',
      description: 'Seamlessly connect all your business systems and applications',
      features: [
        'Integration architecture',
        'API development',
        'Data synchronization',
        'Real-time connectivity',
        'Monitoring & alerting',
        'Performance optimization'
      ],
      pricing: 'Starting from $22,000/month',
      link: '/enterprise-integration'
    }
  ];

  const enterpriseCapabilities = [
    {
      icon: Target,
      title: 'Scalable Solutions',
      description: 'Enterprise-grade solutions that grow with your business'
    },
    {
      icon: Star,
      title: 'Industry Expertise',
      description: 'Deep knowledge across multiple industries and sectors'
    },
    {
      icon: TrendingUp,
      title: 'ROI Focused',
      description: 'Solutions designed to deliver measurable business value'
    },
    {
      icon: Zap,
      title: 'Rapid Implementation',
      description: 'Fast deployment with minimal business disruption'
=======
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation solutions for enterprise organizations.',
      features: [
        'Legacy system modernization',
        'Process automation and optimization',
        'Change management and training',
        'ROI measurement and tracking'
      ],
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Enterprise Security',
      description: 'Comprehensive security solutions for enterprise environments.',
      features: [
        'Zero-trust architecture',
        'Advanced threat detection',
        'Compliance automation',
        'Security awareness training'
      ],
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Data & Analytics',
      description: 'Enterprise-grade data management and analytics solutions.',
      features: [
        'Data governance and quality',
        'Advanced analytics and BI',
        'Machine learning integration',
        'Real-time data processing'
      ],
      icon: Database,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Cloud Migration',
      description: 'Strategic cloud migration and optimization services.',
      features: [
        'Migration strategy and planning',
        'Multi-cloud architecture',
        'Cost optimization',
        'Performance monitoring'
      ],
      icon: Cloud,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const benefits = [
    {
      title: 'Scalability',
      description: 'Scale your operations efficiently as your business grows.',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security with compliance and governance.',
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Efficiency',
      description: 'Streamline operations and reduce costs through automation.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Innovation',
      description: 'Stay ahead with cutting-edge technology and solutions.',
      icon: Brain,
      color: 'from-purple-500 to-indigo-500'
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
    }
  ];

  const industries = [
    {
      name: 'Financial Services',
<<<<<<< HEAD
      solutions: ['Compliance automation', 'Risk management', 'Customer analytics', 'Security enhancement']
    },
    {
      name: 'Healthcare',
      solutions: ['Patient data management', 'Compliance automation', 'Operational efficiency', 'Security & privacy']
    },
    {
      name: 'Manufacturing',
      solutions: ['Supply chain optimization', 'Quality control', 'Predictive maintenance', 'Process automation']
    },
    {
      name: 'Retail',
      solutions: ['Customer experience', 'Inventory management', 'Omnichannel integration', 'Analytics & insights']
=======
      challenges: ['Regulatory compliance', 'Data security', 'Real-time processing'],
      solutions: ['SOC2 compliance', 'Advanced encryption', 'High-performance computing'],
      icon: Building
    },
    {
      name: 'Healthcare',
      challenges: ['HIPAA compliance', 'Data privacy', 'System integration'],
      solutions: ['HIPAA automation', 'Secure data sharing', 'Interoperability solutions'],
      icon: Shield
    },
    {
      name: 'Manufacturing',
      challenges: ['Supply chain optimization', 'Quality control', 'Predictive maintenance'],
      solutions: ['IoT integration', 'AI-powered analytics', 'Predictive modeling'],
      icon: Cpu
    },
    {
      name: 'Retail',
      challenges: ['Customer experience', 'Inventory management', 'Omnichannel integration'],
      solutions: ['Personalization engines', 'Smart inventory', 'Unified commerce'],
      icon: Users
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'Understand your current state and identify transformation opportunities.',
      icon: Target
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop comprehensive transformation roadmap aligned with business goals.',
      icon: Globe
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute transformation with proven methodologies and best practices.',
      icon: Rocket
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuously improve and optimize your transformed operations.',
      icon: Award
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
<<<<<<< HEAD
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-zion-cyan/20"></div>
=======
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue-light/20"></div>
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
<<<<<<< HEAD
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-zion-cyan bg-clip-text text-transparent">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your enterprise with comprehensive technology solutions designed for scale, 
              security, and business growth. From digital transformation to legacy modernization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                Enterprise Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-6 py-3 border border-green-500/30 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                View Enterprise Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Enterprise Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed for enterprise-scale challenges and opportunities
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <Link
                    to={service.link}
                    className="block p-8 bg-zion-blue-dark/50 border border-green-500/20 rounded-2xl hover:border-green-500/50 hover:bg-zion-blue-light/10 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-green-500/20"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-green-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-green-400 font-semibold mb-4">
                      {service.pricing}
                    </div>
                    <div className="flex items-center text-green-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Capabilities */}
=======
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Enterprise{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light leading-relaxed mb-8">
              Transform your enterprise with comprehensive technology solutions designed 
              for scale, security, and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                Get Started
              </button>
              <button className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-2xl hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Schedule a Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Enterprise Solutions
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Enterprise-grade solutions designed to meet the complex needs of large organizations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enterprise Services */}
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Enterprise Capabilities
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We provide enterprise-grade solutions with proven methodologies and expertise
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enterpriseCapabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl hover:bg-zion-blue-light/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{capability.title}</h3>
                  <p className="text-zion-slate-light leading-relaxed">{capability.description}</p>
=======
            <h2 className="text-4xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive enterprise solutions designed for modern organizations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {enterpriseServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-zion-slate-light mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Industry Solutions */}
=======
      {/* Industries */}
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Industry Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Tailored solutions for specific industries and business challenges
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-6 bg-zion-blue-dark/50 border border-green-500/20 rounded-2xl hover:border-green-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-green-400">{industry.name}</h3>
                <ul className="space-y-2">
                  {industry.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
=======
            <h2 className="text-4xl font-bold mb-6">
              Industry{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Specialized solutions for various industries and their unique challenges.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-zion-cyan">{industry.name}</h3>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-3 text-white">Challenges:</h4>
                    <ul className="space-y-2">
                      {industry.challenges.map((challenge, challengeIndex) => (
                        <li key={challengeIndex} className="flex items-center gap-2 text-zion-slate-light">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-white">Solutions:</h4>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="flex items-center gap-2 text-zion-slate-light">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
=======
      {/* Process Section */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how our enterprise solutions can drive your digital transformation 
              and accelerate business growth
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                Start Enterprise Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border border-green-500/30 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                Get Enterprise Quote
              </Link>
=======
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Methodology
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              A proven approach to enterprise transformation and digital innovation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {step.step}
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-zion-slate-light">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-lg text-zion-slate-light mb-8">
              Let us help you build a future-ready enterprise with cutting-edge 
              technology solutions and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                Start Your Transformation
              </button>
              <button className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-2xl hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Get a Free Assessment
              </button>
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseSolutionsPage;