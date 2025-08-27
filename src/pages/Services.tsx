import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Globe, 
  Database, 
  Network, 
  Lock, 
  Cpu, 
  Server, 
  Workflow, 
  BarChart3, 
  Eye, 
  Target, 
  Rocket, 
  Lightbulb,
  Code,
  Settings,
  Monitor,
  BarChart,
  PieChart,
  LineChart,
  Activity,
  Gauge,
  Target,
  Award,
  Clock,
  DollarSign,
  Headphones,
  FileText,
  Video,
  BookOpen
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Brain,
      title: 'AI-Powered Business Intelligence',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      features: [
        'Predictive analytics and forecasting',
        'Natural language query processing',
        'Automated report generation',
        'Real-time data visualization',
        'Machine learning model training'
      ],
      benefits: [
        'Increase decision-making speed by 300%',
        'Reduce manual analysis time by 80%',
        'Improve forecast accuracy by 40%',
        'Real-time insights across all data sources'
      ],
      color: 'from-blue-500 to-cyan-500',
      price: 'Starting at $2,500/month'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & DevOps',
      description: 'Build, deploy, and scale your applications with enterprise-grade cloud solutions.',
      features: [
        'Multi-cloud architecture design',
        'Automated CI/CD pipelines',
        'Container orchestration with Kubernetes',
        'Infrastructure as Code (IaC)',
        '24/7 monitoring and alerting'
      ],
      benefits: [
        'Reduce infrastructure costs by 35%',
        'Deploy 10x faster with automation',
        '99.9% uptime guarantee',
        'Global edge network for low latency'
      ],
      color: 'from-green-500 to-emerald-500',
      price: 'Starting at $1,800/month'
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Compliance',
      description: 'Protect your business with comprehensive security solutions and compliance frameworks.',
      features: [
        'Zero-trust security architecture',
        'SOC 2 Type II compliance',
        'Advanced threat detection',
        'Data encryption at rest and in transit',
        'Security awareness training'
      ],
      benefits: [
        'Prevent 99.9% of cyber threats',
        'Achieve compliance in 90 days',
        'Reduce security incidents by 85%',
        '24/7 security monitoring'
      ],
      color: 'from-purple-500 to-pink-500',
      price: 'Starting at $3,200/month'
    }
  ];

  const specializedServices = [
    {
      icon: Workflow,
      title: 'AI Workflow Orchestrator',
      description: 'Automate complex business processes with intelligent workflow management.',
      features: ['Process automation', 'Decision trees', 'Integration APIs', 'Performance analytics'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Database,
      title: 'Data Engineering & Analytics',
      description: 'Build robust data pipelines and analytics solutions for your business.',
      features: ['ETL/ELT pipelines', 'Data warehousing', 'Real-time streaming', 'Advanced analytics'],
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: Network,
      title: 'Network & Infrastructure',
      description: 'Design and implement scalable network solutions for modern businesses.',
      features: ['Network design', 'Load balancing', 'CDN optimization', 'Performance tuning'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Build tailored software solutions that perfectly fit your business needs.',
      features: ['Web applications', 'Mobile apps', 'API development', 'Legacy modernization'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const serviceFeatures = [
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring for all services.'
    },
    {
      icon: Globe,
      title: 'Global Deployment',
      description: 'Deploy your solutions across multiple regions and cloud providers.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2, ISO 27001, and GDPR compliance.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Grow from startup to enterprise with our scalable architecture.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Work with certified professionals and industry experts.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Trusted by 500+ companies worldwide with proven ROI.'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'HIPAA-compliant AI solutions for patient care and medical research.',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Finance',
      description: 'Secure, compliant solutions for banking, insurance, and fintech.',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Manufacturing',
      description: 'IoT and AI solutions for smart manufacturing and predictive maintenance.',
      icon: Cpu,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Retail',
      description: 'Customer analytics and e-commerce optimization solutions.',
      icon: ShoppingCart,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Education',
      description: 'AI-powered learning platforms and educational technology solutions.',
      icon: BookOpen,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Government',
      description: 'Secure, compliant solutions for federal and state agencies.',
      icon: Building,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your current systems and identify opportunities for improvement.',
      icon: Eye
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our experts design a tailored solution that meets your specific needs.',
      icon: Target
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We implement the solution with minimal disruption to your business.',
      icon: Rocket
    },
    {
      step: '04',
      title: 'Training & Support',
      description: 'We provide comprehensive training and ongoing support for your team.',
      icon: Headphones
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI, Cloud & Cybersecurity Solutions</title>
        <meta name="description" content="Discover Zion Tech Group's comprehensive services including AI-powered business intelligence, cloud infrastructure, cybersecurity, and custom software development." />
        <meta name="keywords" content="services, AI solutions, cloud infrastructure, cybersecurity, business intelligence, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-6">
                Our Services
              </h1>
              
              <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
                Transform your business with cutting-edge AI, cloud infrastructure, and cybersecurity solutions. 
                We deliver results that drive growth and innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle className="w-4 h-4" />
                  <span>500+ Successful Projects</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Star className="w-4 h-4" />
                  <span>99.9% Client Satisfaction</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Core Services
              </h2>
              
              <div className="space-y-12">
                {mainServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      {/* Left side - Content */}
                      <div className="p-8 lg:p-12">
                        <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h3>
                        <p className="text-lg text-slate-600 mb-6">{service.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-slate-900 mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-slate-600">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-slate-900 mb-3">Benefits:</h4>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-slate-600">
                                <TrendingUp className="w-4 h-4 text-blue-500" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-semibold text-slate-900">{service.price}</span>
                          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                            Learn More
                          </button>
                        </div>
                      </div>
                      
                      {/* Right side - Visual */}
                      <div className={`bg-gradient-to-br ${service.color} p-8 lg:p-12 flex items-center justify-center`}>
                        <div className="text-center text-white">
                          <service.icon className="w-24 h-24 mx-auto mb-4 opacity-80" />
                          <h4 className="text-xl font-semibold mb-2">Ready to Get Started?</h4>
                          <p className="text-white/80 mb-4">Transform your business today</p>
                          <button className="px-6 py-3 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors font-medium">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Specialized Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Specialized Solutions
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {specializedServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 text-center">{service.title}</h3>
                    <p className="text-slate-600 text-sm mb-4 text-center">{service.description}</p>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full py-2 px-4 border border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium">
                      Learn More
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Why Choose Zion Tech Group?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200 text-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Industries We Serve
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industries.map((industry, index) => (
                  <motion.div
                    key={industry.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 text-center">{industry.name}</h3>
                    <p className="text-slate-600 text-sm text-center">{industry.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Our Process
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200 text-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-blue-600">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 text-sm">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss how our services can help you achieve your goals and drive innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  Schedule a Consultation
                </button>
                <button className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                  View Case Studies
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;