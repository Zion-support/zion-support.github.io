import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Globe, 
  Zap, 
  Users, 
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Lock,
  Cpu,
  Database,
  Network,
  Code,
  Rocket
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence services that transform business operations',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      link: '/services/ai',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable infrastructure and seamless deployment solutions',
      features: ['Cloud Migration', 'Container Orchestration', 'CI/CD Pipelines', 'Infrastructure as Code'],
      link: '/services/cloud',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security measures to protect your digital assets',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Incident Response'],
      link: '/services/cybersecurity',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Digital Transformation',
      description: 'Complete business modernization and digital strategy',
      features: ['Process Automation', 'Legacy System Modernization', 'Change Management', 'Digital Strategy'],
      link: '/services/transformation',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Cpu,
      title: 'Infrastructure',
      description: 'Robust IT infrastructure and network management solutions',
      features: ['Network Design', 'Server Management', 'Data Center Solutions', 'Disaster Recovery'],
      link: '/services/infrastructure',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Users,
      title: 'Consulting',
      description: 'Strategic technology consulting and implementation guidance',
      features: ['Technology Strategy', 'Architecture Design', 'Project Management', 'Training & Support'],
      link: '/services/consulting',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const specializedServices = [
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights',
      benefits: ['Real-time dashboards', 'Predictive modeling', 'Business intelligence', 'Data visualization']
    },
    {
      icon: Network,
      title: 'IoT Solutions',
      description: 'Connect and manage smart devices and sensors',
      benefits: ['Device management', 'Data collection', 'Remote monitoring', 'Automation']
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions for your unique needs',
      benefits: ['Web applications', 'Mobile apps', 'API development', 'System integration']
    },
    {
      icon: Rocket,
      title: 'Innovation Labs',
      description: 'Research and development for emerging technologies',
      benefits: ['Prototype development', 'Technology exploration', 'Proof of concepts', 'Innovation consulting']
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your current systems and understand your business goals'
    },
    {
      number: '02',
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive roadmap for your digital transformation'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Execute the plan with our expert team and proven methodologies'
    },
    {
      number: '04',
      title: 'Optimization',
      description: 'Continuously improve and optimize your solutions for maximum ROI'
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
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed"
          >
            Comprehensive technology solutions designed to accelerate your business growth, 
            enhance security, and drive digital transformation across all industries.
          </motion.p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              Core Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our flagship services that have transformed hundreds of businesses worldwide
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link to={service.link} className="block h-full">
                  <div className="bg-zion-slate-darker p-8 rounded-2xl border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105 h-full flex flex-col">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-zion-cyan transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light mb-6 leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-zion-cyan group-hover:text-zion-cyan-light transition-colors duration-300 font-medium">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="px-4 mb-20 bg-zion-slate-dark py-20">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              Specialized Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Advanced technology services tailored to specific industry needs and challenges
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specializedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-darker p-8 rounded-2xl border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <Star className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              Our Process
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful delivery of every project
            </p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-zion-cyan transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-zion-slate-light leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 mb-20 bg-zion-slate-dark py-20">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The advantages that set us apart from other technology providers
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Proven Results',
                description: '500+ successful projects delivered with measurable ROI'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Certified professionals with 10+ years of experience'
              },
              {
                icon: Lock,
                title: 'Enterprise Security',
                description: 'Bank-level security protocols and compliance standards'
              },
              {
                icon: Zap,
                title: 'Fast Delivery',
                description: 'Agile methodologies for rapid project completion'
              },
              {
                icon: Globe,
                title: 'Global Support',
                description: '24/7 support available across all time zones'
              },
              {
                icon: Star,
                title: 'Quality Guarantee',
                description: '100% satisfaction guarantee on all our services'
              }
            ].map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-zion-cyan transition-colors duration-300">
                  {advantage.title}
                </h3>
                <p className="text-zion-slate-light leading-relaxed">
                  {advantage.description}
                </p>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how our technology solutions can drive your success and accelerate growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-zion-blue-dark hover:bg-zion-slate-light font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
