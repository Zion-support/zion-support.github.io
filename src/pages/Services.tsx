import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Database, 
  Code, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  Play,
  BarChart3,
  Cpu,
  Network,
  Lock,
  Rocket,
  Target,
  TrendingUp,
  Lightbulb,
  Settings
} from 'lucide-react';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Settings },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'data', name: 'Data & Analytics', icon: Database },
    { id: 'development', name: 'Custom Development', icon: Code }
  ];

  const services = [
    {
      id: 'ai-consulting',
      category: 'ai',
      title: 'AI Strategy & Consulting',
      description: 'Transform your business with strategic AI implementation and expert guidance.',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      features: [
        'AI readiness assessment',
        'Strategy development',
        'Technology selection',
        'Implementation roadmap',
        'ROI analysis',
        'Change management'
      ],
      benefits: [
        'Increased operational efficiency',
        'Better decision making',
        'Competitive advantage',
        'Cost reduction'
      ]
    },
    {
      id: 'machine-learning',
      category: 'ai',
      title: 'Machine Learning Solutions',
      description: 'Custom ML models and algorithms tailored to your specific business needs.',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-600',
      features: [
        'Predictive analytics',
        'Natural language processing',
        'Computer vision',
        'Recommendation systems',
        'Anomaly detection',
        'Model training & optimization'
      ],
      benefits: [
        'Automated insights',
        'Improved accuracy',
        'Scalable solutions',
        'Real-time processing'
      ]
    },
    {
      id: 'cloud-migration',
      category: 'cloud',
      title: 'Cloud Migration & Strategy',
      description: 'Seamless transition to cloud infrastructure with minimal disruption.',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-600',
      features: [
        'Cloud readiness assessment',
        'Migration planning',
        'Infrastructure setup',
        'Data migration',
        'Performance optimization',
        'Cost optimization'
      ],
      benefits: [
        'Reduced infrastructure costs',
        'Improved scalability',
        'Enhanced security',
        'Better performance'
      ]
    },
    {
      id: 'devops-automation',
      category: 'cloud',
      title: 'DevOps & Automation',
      description: 'Streamline development and operations with modern DevOps practices.',
      icon: Zap,
      color: 'from-green-500 to-emerald-600',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as code',
        'Monitoring & alerting',
        'Automated testing',
        'Deployment automation',
        'Performance monitoring'
      ],
      benefits: [
        'Faster deployments',
        'Reduced errors',
        'Better collaboration',
        'Improved reliability'
      ]
    },
    {
      id: 'security-audit',
      category: 'security',
      title: 'Security Audits & Compliance',
      description: 'Comprehensive security assessments and compliance management.',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      features: [
        'Vulnerability assessment',
        'Penetration testing',
        'Compliance review',
        'Security policy development',
        'Incident response planning',
        'Security training'
      ],
      benefits: [
        'Risk mitigation',
        'Compliance assurance',
        'Customer trust',
        'Reduced liability'
      ]
    },
    {
      id: 'data-analytics',
      category: 'data',
      title: 'Data Analytics & BI',
      description: 'Transform raw data into actionable insights and business intelligence.',
      icon: BarChart3,
      color: 'from-indigo-500 to-purple-600',
      features: [
        'Data warehouse design',
        'ETL pipeline development',
        'Dashboard creation',
        'Predictive analytics',
        'Data visualization',
        'Performance reporting'
      ],
      benefits: [
        'Data-driven decisions',
        'Improved efficiency',
        'Better customer insights',
        'Competitive advantage'
      ]
    },
    {
      id: 'custom-software',
      category: 'development',
      title: 'Custom Software Development',
      description: 'Bespoke software solutions designed for your unique business requirements.',
      icon: Code,
      color: 'from-yellow-500 to-orange-600',
      features: [
        'Requirements analysis',
        'UI/UX design',
        'Full-stack development',
        'API development',
        'Testing & QA',
        'Deployment & maintenance'
      ],
      benefits: [
        'Tailored solutions',
        'Competitive advantage',
        'Scalable architecture',
        'Long-term support'
      ]
    },
    {
      id: 'digital-transformation',
      category: 'development',
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation to modernize your business operations.',
      icon: Rocket,
      color: 'from-pink-500 to-rose-600',
      features: [
        'Process optimization',
        'Technology assessment',
        'Change management',
        'Training & adoption',
        'Performance monitoring',
        'Continuous improvement'
      ],
      benefits: [
        'Operational efficiency',
        'Customer satisfaction',
        'Market competitiveness',
        'Future readiness'
      ]
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We start by understanding your business, challenges, and objectives.',
      icon: Target
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive roadmap tailored to your specific needs.',
      icon: Lightbulb
    },
    {
      step: '03',
      title: 'Design & Development',
      description: 'Build and implement solutions using cutting-edge technologies.',
      icon: Code
    },
    {
      step: '04',
      title: 'Testing & Deployment',
      description: 'Rigorous testing and seamless deployment to production.',
      icon: CheckCircle
    },
    {
      step: '05',
      title: 'Support & Optimization',
      description: 'Ongoing support, monitoring, and continuous improvement.',
      icon: TrendingUp
    }
  ];

  const technologies = [
    { name: 'Python', category: 'Programming', icon: '🐍' },
    { name: 'TensorFlow', category: 'AI/ML', icon: '🧠' },
    { name: 'AWS', category: 'Cloud', icon: '☁️' },
    { name: 'Docker', category: 'DevOps', icon: '🐳' },
    { name: 'React', category: 'Frontend', icon: '⚛️' },
    { name: 'Node.js', category: 'Backend', icon: '🟢' },
    { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
    { name: 'Kubernetes', category: 'Orchestration', icon: '⚓' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Our Services - Zion Tech Group"
        description="Comprehensive AI, cloud, cybersecurity, and custom development services. Transform your business with Zion Tech Group's innovative technology solutions."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to transform your business operations, 
              enhance efficiency, and drive innovation across all aspects of your organization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories Filter */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-slate-700/30 text-gray-300 hover:bg-slate-600/50 hover:text-white border border-slate-600/50'
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-700/30 rounded-2xl border border-slate-600/30 p-8 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <span
                        key={benefitIndex}
                        className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-xs text-cyan-400"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and maximum value for your business.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">{step.step}</span>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cutting-edge tools and technologies that power our innovative solutions.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-700/30 rounded-lg border border-slate-600/30 p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{tech.name}</h3>
                  <p className="text-sm text-gray-400">{tech.category}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: 'Expert Team',
                  description: 'Experienced professionals with deep expertise in their respective domains.'
                },
                {
                  icon: Target,
                  title: 'Results-Driven',
                  description: 'We focus on delivering measurable business outcomes, not just technology.'
                },
                {
                  icon: Shield,
                  title: 'Proven Track Record',
                  description: 'Successfully delivered hundreds of projects across various industries.'
                },
                {
                  icon: Zap,
                  title: 'Fast Delivery',
                  description: 'Agile methodologies ensure quick turnaround times without compromising quality.'
                },
                {
                  icon: Globe,
                  title: 'Global Reach',
                  description: 'Serving clients worldwide with localized expertise and global best practices.'
                },
                {
                  icon: Lock,
                  title: 'Security First',
                  description: 'Enterprise-grade security and compliance built into every solution.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can transform your business and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
