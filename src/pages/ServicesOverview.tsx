import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Cpu, 
  Lock, 
  Heart, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Lightbulb,
  Database,
  Network,
  Smartphone,
  Server,
  Building,
  Camera,
  Mic,
  Palette,
  Target,
  Truck,
  CreditCard
} from 'lucide-react';

export default function ServicesOverview() {
  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      description: 'Cutting-edge artificial intelligence solutions that transform business operations',
      color: 'from-purple-600 to-pink-600',
      services: [
        {
          name: 'AI Business Intelligence',
          description: 'Transform raw data into actionable insights with advanced AI algorithms and predictive analytics',
          features: ['Predictive Analytics', 'Real-time Dashboards', 'Machine Learning Models', 'Data Visualization'],
          price: 'From $5,000',
          href: '/services/ai-business-intelligence',
          marketPrice: '$8,000 - $15,000',
          benefits: ['30% faster decision making', 'Improved forecasting accuracy', 'Real-time insights', 'Cost reduction']
        },
        {
          name: 'AI Cybersecurity Suite',
          description: 'Comprehensive AI-powered cybersecurity with advanced threat detection and automated response',
          features: ['Threat Intelligence', 'Behavioral Analysis', 'Incident Response', 'Security Automation'],
          price: 'From $8,500',
          href: '/services/ai-cybersecurity-suite',
          marketPrice: '$12,000 - $25,000',
          benefits: ['90% faster threat detection', 'Reduced false positives', '24/7 monitoring', 'Compliance automation']
        },
        {
          name: 'AI Healthcare Analytics',
          description: 'Advanced healthcare data analytics and predictive modeling for improved patient outcomes',
          features: ['Patient Risk Scoring', 'Treatment Optimization', 'Population Health Analytics', 'Clinical Decision Support'],
          price: 'From $12,000',
          href: '/services/ai-healthcare-analytics',
          marketPrice: '$20,000 - $50,000',
          benefits: ['Improved patient outcomes', 'Reduced readmission rates', 'Cost optimization', 'Regulatory compliance']
        }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Scalable cloud infrastructure and automated deployment solutions',
      color: 'from-blue-600 to-cyan-600',
      services: [
        {
          name: 'Multi-Cloud Management',
          description: 'Unified management across AWS, Azure, and Google Cloud with cost optimization',
          features: ['Cross-Platform Monitoring', 'Cost Optimization', 'Security Compliance', 'Unified Dashboard'],
          price: 'From $6,500',
          href: '/services/multi-cloud-management',
          marketPrice: '$10,000 - $20,000',
          benefits: ['25% cost reduction', 'Improved security posture', 'Vendor flexibility', 'Unified operations']
        },
        {
          name: 'Kubernetes Enterprise Platform',
          description: 'Enterprise-grade Kubernetes management with advanced security and monitoring',
          features: ['Multi-Cluster Management', 'Security Policies', 'Auto-scaling', 'Disaster Recovery'],
          price: 'From $9,000',
          href: '/services/kubernetes-enterprise-platform',
          marketPrice: '$15,000 - $35,000',
          benefits: ['Faster deployment cycles', 'Improved resource utilization', 'Enhanced security', 'Scalability']
        }
      ]
    },
    {
      name: 'Micro SaaS Solutions',
      icon: Rocket,
      description: 'Innovative, focused SaaS applications for specific business needs',
      color: 'from-green-600 to-emerald-600',
      services: [
        {
          name: 'AI Document Intelligence Hub',
          description: 'Extract, classify, and analyze documents with AI-powered OCR and intelligent data extraction',
          features: ['AI-Powered OCR', 'Document Classification', 'Data Extraction', 'Workflow Automation'],
          price: 'From $89/mo + $0.10/page',
          href: '/services',
          marketPrice: '$150 - $300/mo',
          benefits: ['80% faster document processing', 'Improved accuracy', 'Cost reduction', 'Compliance automation']
        },
        {
          name: 'Predictive Analytics Engine',
          description: 'Build and deploy ML models for forecasting, anomaly detection, and predictive insights',
          features: ['Model Building', 'Forecasting', 'Anomaly Detection', 'Real-time Predictions'],
          price: 'From $199/mo + $0.50/prediction',
          href: '/services',
          marketPrice: '$500 - $1,000/mo',
          benefits: ['Data-driven decisions', 'Improved forecasting', 'Risk mitigation', 'Competitive advantage']
        },
        {
          name: 'Compliance Automation Suite',
          description: 'Automated compliance monitoring for GDPR, CCPA, SOC2, and industry-specific regulations',
          features: ['Regulatory Monitoring', 'Automated Auditing', 'Risk Assessment', 'Compliance Reporting'],
          price: 'From $149/mo per framework',
          href: '/services',
          marketPrice: '$300 - $800/mo',
          benefits: ['Reduced compliance costs', 'Automated monitoring', 'Risk reduction', 'Audit readiness']
        }
      ]
    },
    {
      name: 'Industry Solutions',
      icon: Building,
      description: 'Specialized solutions for specific industries and verticals',
      color: 'from-amber-600 to-orange-600',
      services: [
        {
          name: 'Manufacturing IoT Platform',
          description: 'Industrial IoT monitoring with predictive maintenance and quality control analytics',
          features: ['Equipment Monitoring', 'Predictive Maintenance', 'Quality Control', 'Production Analytics'],
          price: 'From $149/mo per production line',
          href: '/services',
          marketPrice: '$300 - $800/mo',
          benefits: ['Reduced downtime', 'Improved quality', 'Cost optimization', 'Predictive insights']
        },
        {
          name: 'Financial Risk Analytics',
          description: 'Real-time risk assessment, fraud detection, and regulatory compliance for financial services',
          features: ['Risk Assessment', 'Fraud Detection', 'Compliance Monitoring', 'Regulatory Reporting'],
          price: 'From $399/mo + $0.01/transaction',
          href: '/services',
          marketPrice: '$800 - $2,000/mo',
          benefits: ['Risk reduction', 'Fraud prevention', 'Compliance automation', 'Cost savings']
        }
      ]
    }
  ];

  const whyChooseZion = [
    {
      icon: Award,
      title: 'Proven Expertise',
      description: '15+ years of technology innovation with successful implementations across industries'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with advanced degrees and industry certifications'
    },
    {
      icon: Zap,
      title: 'Rapid Implementation',
      description: 'Quick turnaround times without compromising quality or security'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'ISO 27001 certified with SOC 2 Type II compliance and zero-trust architecture'
    },
    {
      icon: Globe,
      title: 'Global Support',
      description: '24/7 support available across 25+ countries with local expertise'
    },
    {
      icon: Lightbulb,
      title: 'Continuous Innovation',
      description: 'Ongoing R&D investment in emerging technologies and AI advancement'
    }
  ];

  const marketInsights = [
    {
      category: 'AI & ML Services',
      marketSize: '$200B+',
      growthRate: '37% CAGR',
      keyTrends: ['Generative AI adoption', 'MLOps automation', 'AI governance', 'Edge AI deployment']
    },
    {
      category: 'Cloud Services',
      marketSize: '$500B+',
      growthRate: '17% CAGR',
      keyTrends: ['Multi-cloud strategies', 'Serverless adoption', 'Edge computing', 'Cloud security']
    },
    {
      category: 'Micro SaaS',
      marketSize: '$50B+',
      growthRate: '25% CAGR',
      keyTrends: ['Vertical specialization', 'AI integration', 'API-first approach', 'Low-code platforms']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="Comprehensive Services Overview - Zion Tech Group"
        description="Explore Zion Tech Group's complete range of AI solutions, cloud services, micro SaaS, and industry-specific technology solutions. Transform your business with cutting-edge technology."
        keywords="AI services, cloud solutions, micro SaaS, technology consulting, digital transformation, Zion Tech Group services overview"
        canonical="https://ziontechgroup.com/services-overview"
      />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Complete Services Overview
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our comprehensive range of AI-powered solutions, cloud services, and innovative micro SaaS products designed to transform your business
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link 
              to="/pricing" 
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Service Categories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology solutions organized by category with detailed pricing and market analysis
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              >
                <div className="text-center mb-12">
                  <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{category.name}</h3>
                  <p className="text-xl text-slate-300 max-w-2xl mx-auto">{category.description}</p>
                </div>
                
                <div className="grid lg:grid-cols-1 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, x: serviceIndex % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                      className="group"
                    >
                      <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                        <div className="grid lg:grid-cols-3 gap-8">
                          <div className="lg:col-span-2">
                            <h4 className="text-2xl font-bold text-white mb-3">{service.name}</h4>
                            <p className="text-slate-300 mb-4">{service.description}</p>
                            
                            <div className="grid grid-cols-2 gap-3 mb-6">
                              {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center text-sm text-slate-300">
                                  <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                                  {feature}
                                </div>
                              ))}
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                              <div>
                                <div className="text-sm text-slate-400 mb-1">Our Pricing</div>
                                <div className="text-xl font-bold text-cyan-400">{service.price}</div>
                              </div>
                              <div>
                                <div className="text-sm text-slate-400 mb-1">Market Average</div>
                                <div className="text-lg text-slate-300">{service.marketPrice}</div>
                              </div>
                            </div>

                            <div className="mb-6">
                              <div className="text-sm text-slate-400 mb-2">Key Benefits:</div>
                              <div className="flex flex-wrap gap-2">
                                {service.benefits.map((benefit, idx) => (
                                  <span key={idx} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                                    {benefit}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-center">
                            <div className="mb-4">
                              <div className="text-2xl font-bold text-cyan-400 mb-2">Competitive Advantage</div>
                              <div className="text-sm text-slate-300">
                                Our solutions typically provide 20-40% cost savings compared to market alternatives
                              </div>
                            </div>
                            
                            <Link 
                              to={service.href}
                              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:scale-105 transition-all duration-300"
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Market Insights & Trends
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Stay ahead of the curve with our analysis of emerging technology markets and growth opportunities
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {marketInsights.map((insight, index) => (
              <motion.div
                key={insight.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{insight.category}</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-slate-400">Market Size</div>
                    <div className="text-2xl font-bold text-cyan-400">{insight.marketSize}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Growth Rate</div>
                    <div className="text-xl text-green-400">{insight.growthRate}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-2">Key Trends</div>
                    <div className="space-y-1">
                      {insight.keyTrends.map((trend, idx) => (
                        <div key={idx} className="text-sm text-slate-300 flex items-center">
                          <TrendingUp className="w-3 h-3 text-cyan-400 mr-2" />
                          {trend}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseZion.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-slate-300">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's discuss how our comprehensive technology solutions can revolutionize your operations and drive growth
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link 
              to="/pricing" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              View Pricing
            </Link>
          </motion.div>
          
          <motion.div 
            className="mt-8 text-cyan-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-lg mb-2">Contact us for a personalized consultation</p>
            <p className="text-sm">
              Mobile: +1 302 464 0950 | Email: kleber@ziontechgroup.com<br />
              Address: 364 E Main St STE 1008 Middletown DE 19709
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}