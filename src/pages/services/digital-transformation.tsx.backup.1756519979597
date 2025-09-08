import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Rocket,
  Zap,
  Target,
  TrendingUp,
  Users,
  Shield,
  Cpu,
  Brain,
  Eye,
  Activity,
  Code,
  Database,
  Server,
  Network,
  BarChart3,
  Heart,
  Building,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Play,
  ChevronRight,
  RefreshCw,
  Layers,
  Smartphone,
  Monitor,
  Cloud,
  Lock
} from 'lucide-react';

export default function DigitalTransformationPage() {
  const transformationServices = [
    {
      title: 'Process Automation',
      description: 'Automate manual processes to improve efficiency and reduce errors',
      icon: RefreshCw,
      href: '/services/process-automation',
      features: ['Workflow Automation', 'RPA Implementation', 'Business Process Optimization', 'Digital Workflows'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Cloud Migration',
      description: 'Migrate legacy systems to modern cloud infrastructure',
      icon: Cloud,
      href: '/services/cloud-migration',
      features: ['Legacy System Migration', 'Cloud Strategy', 'Data Migration', 'Application Modernization'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Data Analytics',
      description: 'Transform data into actionable insights for better decision-making',
      icon: BarChart3,
      href: '/services/data-analytics',
      features: ['Business Intelligence', 'Predictive Analytics', 'Data Visualization', 'Real-time Dashboards'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Customer Experience',
      description: 'Enhance customer interactions with digital solutions',
      icon: Users,
      href: '/services/customer-experience',
      features: ['Omnichannel Strategy', 'Digital Touchpoints', 'Customer Journey Mapping', 'Personalization'],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Cybersecurity',
      description: 'Implement robust security measures for digital transformation',
      icon: Shield,
      href: '/services/cybersecurity',
      features: ['Zero Trust Security', 'Identity Management', 'Threat Detection', 'Compliance Management'],
      color: 'from-red-500 to-pink-600'
    },
    {
      title: 'Mobile & Web Solutions',
      description: 'Develop modern mobile and web applications',
      icon: Smartphone,
      href: '/services/mobile-web-solutions',
      features: ['Mobile Apps', 'Progressive Web Apps', 'Responsive Design', 'Cross-platform Development'],
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const transformationPhases = [
    {
      title: 'Assessment & Strategy',
      description: 'Evaluate current state and develop transformation roadmap',
      icon: Target,
      features: ['Current State Analysis', 'Gap Assessment', 'Strategy Development', 'ROI Planning']
    },
    {
      title: 'Design & Planning',
      description: 'Design new processes and technology architecture',
      icon: Eye,
      features: ['Process Redesign', 'Technology Architecture', 'Change Management Plan', 'Implementation Timeline']
    },
    {
      title: 'Implementation',
      description: 'Execute transformation initiatives with agile methodology',
      icon: Rocket,
      features: ['Agile Implementation', 'Pilot Programs', 'Staged Rollout', 'Continuous Monitoring']
    },
    {
      title: 'Optimization',
      description: 'Continuously improve and optimize digital solutions',
      icon: TrendingUp,
      features: ['Performance Monitoring', 'User Feedback', 'Continuous Improvement', 'Scalability Planning']
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: Heart, description: 'Digital health records and telemedicine solutions' },
    { name: 'Finance', icon: Building, description: 'Digital banking and fintech innovations' },
    { name: 'Manufacturing', icon: Cpu, description: 'Industry 4.0 and smart manufacturing' },
    { name: 'Retail', icon: Globe, description: 'E-commerce and omnichannel retail' },
    { name: 'Education', icon: Users, description: 'Digital learning and educational technology' },
    { name: 'Government', icon: Shield, description: 'Digital government and citizen services' }
  ];

  const technologies = [
    { name: 'Artificial Intelligence', icon: Brain, description: 'AI-powered automation and insights' },
    { name: 'Internet of Things', icon: Network, description: 'Connected devices and smart systems' },
    { name: 'Blockchain', icon: Lock, description: 'Secure and transparent transactions' },
    { name: 'Cloud Computing', icon: Cloud, description: 'Scalable and flexible infrastructure' },
    { name: 'Big Data', icon: Database, description: 'Data processing and analytics' },
    { name: 'Cybersecurity', icon: Shield, description: 'Advanced security and protection' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-emerald-900/20 to-teal-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Digital Transformation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge digital technologies and processes that drive innovation, 
              efficiency, and competitive advantage in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center group"
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/solutions"
                className="border border-green-500 text-green-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-200 flex items-center justify-center group"
              >
                View Solutions
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transformation Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Digital Transformation Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive digital transformation solutions designed to modernize your business operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformationServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-green-400 hover:text-green-300 font-medium group-hover:translate-x-1 transition-transform"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Phases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Digital Transformation Phases</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our systematic approach ensures successful digital transformation with measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transformationPhases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                    <phase.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">{phase.title}</h3>
                </div>
                <p className="text-gray-400 mb-6">{phase.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {phase.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Industries We Transform</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our digital transformation solutions are tailored to meet the unique challenges of diverse industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                <p className="text-gray-400 text-sm">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Enabling Technologies</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cutting-edge technologies that power digital transformation initiatives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Benefits of Digital Transformation</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transform your business and unlock new opportunities with digital innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {[
                  'Increased operational efficiency and productivity',
                  'Enhanced customer experience and satisfaction',
                  'Improved data-driven decision making',
                  'Reduced operational costs and waste',
                  'Faster time to market for new products',
                  'Better competitive positioning and market share'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm border border-green-500/50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-6">Transformation Metrics</h3>
              <div className="space-y-4">
                {[
                  { metric: '30-50%', label: 'Efficiency Improvement', description: 'Operational efficiency gains' },
                  { metric: '40-60%', label: 'Cost Reduction', description: 'Operational cost savings' },
                  { metric: '50-80%', label: 'Faster Delivery', description: 'Time to market improvement' },
                  { metric: '25-40%', label: 'Revenue Growth', description: 'Revenue increase potential' }
                ].map((item, index) => (
                  <div key={index} className="text-center p-4 bg-gray-700/50 rounded-lg">
                    <div className="text-2xl font-bold text-green-400 mb-1">{item.metric}</div>
                    <div className="text-sm text-gray-300">{item.label}</div>
                    <div className="text-xs text-gray-400">{item.description}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/20 via-emerald-900/20 to-teal-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how digital transformation can drive innovation and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center group"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-green-500 text-green-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-200 flex items-center justify-center group"
              >
                View Case Studies
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}