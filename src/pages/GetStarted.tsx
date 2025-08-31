import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Users, 
  Building2,
  Phone,
  Mail,
  Calendar,
  Clock,
  Award,
  Globe,
  TrendingUp,
  Lightbulb,
  Target,
  BarChart3,
  ShoppingCart,
  Truck,
  GraduationCap,
  Cpu
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const GetStarted = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [timeline, setTimeline] = useState('');

  const services = [
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      description: 'Transform your business with cutting-edge AI solutions',
      icon: Brain,
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      id: 'quantum',
      name: 'Quantum Computing',
      description: 'Next-generation computing power for complex problem solving',
      icon: Zap,
      features: ['Quantum Algorithms', 'Optimization', 'Cryptography', 'Simulation']
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Protect your digital assets with advanced security solutions',
      icon: Shield,
      features: ['Threat Detection', 'Incident Response', 'Compliance', 'Security Audits']
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      description: 'Streamline your operations with cloud-native solutions',
      icon: Cloud,
      features: ['Cloud Migration', 'DevOps Automation', 'Infrastructure as Code', 'Monitoring']
    },
    {
      id: 'digital-transformation',
      name: 'Digital Transformation',
      description: 'Modernize your business processes and technology stack',
      icon: Rocket,
      features: ['Process Automation', 'Legacy Modernization', 'Change Management', 'Training']
    },
    {
      id: 'micro-saas',
      name: 'Micro SAAS Solutions',
      description: 'Custom software solutions tailored to your specific needs',
      icon: Building2,
      features: ['Custom Development', 'API Integration', 'Scalable Architecture', 'Maintenance']
    }
  ];

  const industries = [
    { id: 'healthcare', name: 'Healthcare', icon: Shield },
    { id: 'financial', name: 'Financial Services', icon: BarChart3 },
    { id: 'manufacturing', name: 'Manufacturing', icon: Building2 },
    { id: 'retail', name: 'Retail & E-commerce', icon: ShoppingCart },
    { id: 'transportation', name: 'Transportation & Logistics', icon: Truck },
    { id: 'education', name: 'Education', icon: GraduationCap },
    { id: 'government', name: 'Government', icon: Building2 },
    { id: 'technology', name: 'Technology', icon: Cpu }
  ];

  const companySizes = [
    { id: 'startup', name: 'Startup (1-50 employees)', description: 'Perfect for growing companies' },
    { id: 'small', name: 'Small Business (51-200 employees)', description: 'Ideal for established businesses' },
    { id: 'medium', name: 'Medium Business (201-1000 employees)', description: 'Great for scaling organizations' },
    { id: 'enterprise', name: 'Enterprise (1000+ employees)', description: 'Tailored for large corporations' }
  ];

  const timelines = [
    { id: 'immediate', name: 'Immediate (Within 30 days)', description: 'Urgent implementation needed' },
    { id: 'quarter', name: 'This Quarter (1-3 months)', description: 'Planned implementation' },
    { id: 'year', name: 'This Year (3-12 months)', description: 'Strategic planning phase' },
    { id: 'future', name: 'Future Planning (12+ months)', description: 'Long-term strategy' }
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Proven Expertise',
      description: 'Over 10 years of experience in cutting-edge technology solutions'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Assigned experts who understand your business and industry'
    },
    {
      icon: Clock,
      title: 'Fast Implementation',
      description: 'Quick deployment with minimal disruption to your operations'
    },
    {
      icon: TrendingUp,
      title: 'Measurable Results',
      description: 'Clear metrics and ROI tracking for all implementations'
    },
    {
      icon: Globe,
      title: 'Global Support',
      description: '24/7 support across multiple time zones'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Always ahead of the curve with latest technologies'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'Free 30-minute consultation to understand your needs',
      duration: '30 minutes',
      icon: Phone
    },
    {
      number: '02',
      title: 'Discovery & Assessment',
      description: 'Comprehensive analysis of your current state and goals',
      duration: '1-2 weeks',
      icon: Target
    },
    {
      number: '03',
      title: 'Solution Design',
      description: 'Custom solution architecture and implementation plan',
      duration: '1-2 weeks',
      icon: Lightbulb
    },
    {
      number: '04',
      title: 'Implementation',
      description: 'Professional deployment with minimal disruption',
      duration: '2-8 weeks',
      icon: Rocket
    },
    {
      number: '05',
      title: 'Training & Support',
      description: 'Comprehensive training and ongoing support',
      duration: 'Ongoing',
      icon: Users
    }
  ];

  return (
    <>
      <SEO 
        title="Get Started - Zion Tech Group"
        description="Start your digital transformation journey with Zion Tech Group. Get expert consultation, custom solutions, and dedicated support for your business needs."
        keywords="get started, consultation, digital transformation, AI solutions, IT services, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#3b82f6_1px,_transparent_1px)] bg-[length:50px_50px] opacity-10"></div>
          
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's start your digital transformation journey together. Get expert consultation, 
                custom solutions, and dedicated support tailored to your specific needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Free Consultation
                  <ArrowRight className="inline ml-2 w-5 h-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-700 transition-all duration-300 border border-slate-600"
                >
                  Call Now: +1 (302) 464-0950
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Selection */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                What Can We Help You With?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose from our comprehensive range of technology solutions and services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                    selectedService === service.id
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-slate-600 bg-slate-700/50 hover:border-blue-400 hover:bg-slate-700/70'
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Selection */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                What Industry Are You In?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We have specialized solutions and expertise for various industries
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-4 rounded-lg border-2 text-center transition-all duration-300 cursor-pointer ${
                    selectedIndustry === industry.id
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-slate-600 bg-slate-700/50 hover:border-blue-400 hover:bg-slate-700/70'
                  }`}
                  onClick={() => setSelectedIndustry(industry.id)}
                >
                  <industry.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-white font-medium">{industry.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Size & Timeline */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Company Size */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-white mb-6">Company Size</h3>
                <div className="space-y-4">
                  {companySizes.map((size) => (
                    <div
                      key={size.id}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                        companySize === size.id
                          ? 'border-blue-500 bg-blue-500/10'
                          : 'border-slate-600 bg-slate-700/50 hover:border-blue-400 hover:bg-slate-700/70'
                      }`}
                      onClick={() => setCompanySize(size.id)}
                    >
                      <h4 className="text-lg font-semibold text-white mb-1">{size.name}</h4>
                      <p className="text-gray-300 text-sm">{size.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Timeline */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-white mb-6">Implementation Timeline</h3>
                <div className="space-y-4">
                  {timelines.map((time) => (
                    <div
                      key={time.id}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                        timeline === time.id
                          ? 'border-blue-500 bg-blue-500/10'
                          : 'border-slate-600 bg-slate-700/50 hover:border-blue-400 hover:bg-slate-700/70'
                      }`}
                      onClick={() => setTimeline(time.id)}
                    >
                      <h4 className="text-lg font-semibold text-white mb-1">{time.name}</h4>
                      <p className="text-gray-300 text-sm">{time.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We deliver exceptional results with a proven track record of success
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Simple 5-Step Process
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From initial consultation to successful implementation, we guide you every step of the way
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-500/30 z-0"></div>
                  )}
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                      {step.number}
                    </div>
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300 text-sm mb-2">{step.description}</p>
                    <p className="text-blue-400 text-sm font-medium">{step.duration}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Take the first step towards transforming your business. Our team is ready to help you succeed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Free Consultation
                  <ArrowRight className="inline ml-2 w-5 h-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-700 transition-all duration-300 border border-slate-600"
                >
                  Call Now: +1 (302) 464-0950
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="text-center p-4">
                  <Phone className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold text-white mb-1">Phone Support</h3>
                  <p className="text-gray-300 text-sm">Available 24/7 for urgent matters</p>
                </div>
                <div className="text-center p-4">
                  <Mail className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold text-white mb-1">Email Support</h3>
                  <p className="text-gray-300 text-sm">Response within 2 hours</p>
                </div>
                <div className="text-center p-4">
                  <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold text-white mb-1">Free Consultation</h3>
                  <p className="text-gray-300 text-sm">30-minute session to get started</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GetStarted;