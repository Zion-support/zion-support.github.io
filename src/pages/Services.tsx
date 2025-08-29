import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Database, 
  Globe, 
  Cpu, 
  Rocket, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Lock, 
  Target, 
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Star, color: 'from-purple-500 to-pink-500' },
    { id: 'micro-saas', name: 'Micro SaaS', icon: ShoppingCart, color: 'from-orange-500 to-red-500' },
    { id: 'ai-solutions', name: 'AI Solutions', icon: Brain, color: 'from-blue-500 to-cyan-500' },
    { id: 'it-services', name: 'IT Services', icon: Cpu, color: 'from-green-500 to-emerald-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-pink-500' },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud, color: 'from-blue-500 to-indigo-500' }
  ];

  const allServices = [
    // Micro SaaS Services
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator Pro',
      description: 'Generate high-quality, SEO-optimized content for blogs, social media, and marketing campaigns using advanced AI.',
      category: 'micro-saas',
      price: '$99/month',
      features: ['AI-powered content creation', 'SEO optimization', 'Multi-language support', 'Brand voice consistency', 'Content calendar management'],
      benefits: ['Save 20+ hours per week', 'Improve SEO rankings', 'Increase engagement rates', 'Maintain brand consistency'],
      marketPrice: '$150-300/month',
      href: '/services/ai-content-generator',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ai-lead-scoring',
      title: 'AI Lead Scoring Platform',
      description: 'Intelligent lead qualification and scoring system that automatically ranks prospects based on behavior and engagement.',
      category: 'micro-saas',
      price: '$149/month',
      features: ['Behavioral analysis', 'Predictive scoring', 'CRM integration', 'Real-time updates', 'Custom scoring models'],
      benefits: ['Increase conversion rates by 35%', 'Reduce sales cycle time', 'Focus on high-value prospects', 'Automated lead nurturing'],
      marketPrice: '$200-500/month',
      href: '/services/ai-lead-scoring',
      icon: Target,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'uptime-sla-monitor',
      title: 'Uptime SLA Monitor',
      description: 'Comprehensive website and API monitoring with SLA tracking, alerting, and performance analytics.',
      category: 'micro-saas',
      price: '$79/month',
      features: ['99.9% uptime monitoring', 'SLA compliance tracking', 'Instant alerting', 'Performance analytics', 'Multi-location monitoring'],
      benefits: ['Ensure SLA compliance', 'Reduce downtime costs', 'Improve customer satisfaction', 'Proactive issue detection'],
      marketPrice: '$100-250/month',
      href: '/services/uptime-sla-monitor',
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'soc2-compliance-tracker',
      title: 'SOC2 Compliance Tracker',
      description: 'Automated SOC2 compliance monitoring and reporting for security-conscious organizations.',
      category: 'micro-saas',
      price: '$199/month',
      features: ['Automated compliance checks', 'Real-time monitoring', 'Audit trail management', 'Risk assessment', 'Compliance reporting'],
      benefits: ['Maintain SOC2 compliance', 'Reduce audit preparation time', 'Identify security gaps', 'Streamline compliance processes'],
      marketPrice: '$300-800/month',
      href: '/services/soc2-compliance-tracker',
      icon: Lock,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'ai-support-helpdesk',
      title: 'AI Support Helpdesk',
      description: 'Intelligent customer support system with AI-powered ticket routing, automated responses, and sentiment analysis.',
      category: 'micro-saas',
      price: '$129/month',
      features: ['AI ticket routing', 'Automated responses', 'Sentiment analysis', 'Knowledge base integration', 'Multi-channel support'],
      benefits: ['Reduce response time by 60%', 'Improve customer satisfaction', 'Lower support costs', '24/7 automated support'],
      marketPrice: '$200-600/month',
      href: '/services/ai-support-helpdesk',
      icon: Users,
      color: 'from-orange-500 to-yellow-500'
    },
    {
      id: 'ai-seo-optimizer',
      title: 'AI SEO Optimizer',
      description: 'Advanced SEO optimization platform using AI to analyze competitors, suggest improvements, and track rankings.',
      category: 'micro-saas',
      price: '$179/month',
      features: ['Competitor analysis', 'Keyword research', 'On-page optimization', 'Ranking tracking', 'Performance analytics'],
      benefits: ['Improve search rankings', 'Outrank competitors', 'Increase organic traffic', 'Data-driven optimization'],
      marketPrice: '$250-700/month',
      href: '/services/ai-seo-optimizer',
      icon: TrendingUp,
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 'ai-customer-churn-prediction',
      title: 'AI Customer Churn Predictor',
      description: 'Predict and prevent customer churn using machine learning and behavioral analysis.',
      category: 'micro-saas',
      price: '$199/month',
      features: ['Churn prediction models', 'Behavioral analysis', 'Risk scoring', 'Automated alerts', 'Retention strategies'],
      benefits: ['Reduce churn by 25%', 'Increase customer lifetime value', 'Proactive retention', 'Data-driven insights'],
      marketPrice: '$300-800/month',
      href: '/services/ai-customer-churn-prediction',
      icon: BarChart3,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'ai-financial-fraud-detection',
      title: 'AI Financial Fraud Detection',
      description: 'Real-time fraud detection system using AI to identify suspicious transactions and prevent financial losses.',
      category: 'micro-saas',
      price: '$299/month',
      features: ['Real-time monitoring', 'Machine learning models', 'Risk scoring', 'Alert system', 'Compliance reporting'],
      benefits: ['Prevent financial losses', 'Reduce false positives', 'Compliance with regulations', 'Real-time protection'],
      marketPrice: '$500-1500/month',
      href: '/services/ai-financial-fraud-detection',
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },

    // AI Solutions
    {
      id: 'ai-business-intelligence',
      title: 'AI Business Intelligence Platform',
      description: 'Comprehensive BI platform with AI-powered insights, predictive analytics, and automated reporting.',
      category: 'ai-solutions',
      price: '$399/month',
      features: ['AI-powered insights', 'Predictive analytics', 'Automated reporting', 'Data visualization', 'Real-time dashboards'],
      benefits: ['Make data-driven decisions', 'Identify business opportunities', 'Reduce reporting time', 'Improve forecasting accuracy'],
      marketPrice: '$600-2000/month',
      href: '/services/ai-business-intelligence-platform',
      icon: Brain,
      color: 'from-purple-500 to-cyan-500'
    },
    {
      id: 'ai-healthcare-analytics',
      title: 'AI Healthcare Analytics Platform',
      description: 'Advanced healthcare analytics using AI to improve patient outcomes and operational efficiency.',
      category: 'ai-solutions',
      price: '$599/month',
      features: ['Patient outcome prediction', 'Operational analytics', 'Clinical decision support', 'HIPAA compliance', 'Real-time monitoring'],
      benefits: ['Improve patient outcomes', 'Reduce healthcare costs', 'Enhance operational efficiency', 'Compliance with regulations'],
      marketPrice: '$800-3000/month',
      href: '/services/ai-healthcare-analytics-platform',
      icon: Brain,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'ai-workflow-orchestrator',
      title: 'AI Workflow Orchestrator',
      description: 'Intelligent workflow automation platform that learns and optimizes business processes.',
      category: 'ai-solutions',
      price: '$299/month',
      features: ['Process learning', 'Automated optimization', 'Integration capabilities', 'Performance analytics', 'Custom workflows'],
      benefits: ['Increase productivity by 40%', 'Reduce manual errors', 'Streamline operations', 'Continuous improvement'],
      marketPrice: '$400-1200/month',
      href: '/services/ai-workflow-orchestrator',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'quantum-ai-platform',
      title: 'Quantum AI Platform',
      description: 'Next-generation AI platform leveraging quantum computing principles for complex problem solving.',
      category: 'ai-solutions',
      price: '$999/month',
      features: ['Quantum-inspired algorithms', 'Complex optimization', 'High-performance computing', 'Advanced analytics', 'Enterprise security'],
      benefits: ['Solve complex problems', 'Faster computation', 'Competitive advantage', 'Future-proof technology'],
      marketPrice: '$1500-5000/month',
      href: '/services/quantum-ai-platform',
      icon: Brain, // Changed from Atom to Brain as Atom is not imported
      color: 'from-purple-500 to-pink-500'
    },

    // IT Services
    {
      id: 'cloud-devops',
      title: 'Cloud DevOps Services',
      description: 'Comprehensive cloud infrastructure and DevOps automation for scalable, reliable applications.',
      category: 'it-services',
      price: '$150/hour',
      features: ['Cloud architecture design', 'CI/CD pipeline setup', 'Infrastructure as code', 'Monitoring & alerting', 'Security best practices'],
      benefits: ['Faster deployment cycles', 'Improved reliability', 'Cost optimization', 'Scalable infrastructure'],
      marketPrice: '$120-200/hour',
      href: '/services/cloud-devops',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation Consulting',
      description: 'Strategic consulting to help organizations navigate digital transformation and technology adoption.',
      category: 'it-services',
      price: '$200/hour',
      features: ['Strategy development', 'Technology assessment', 'Change management', 'Implementation planning', 'ROI analysis'],
      benefits: ['Clear transformation roadmap', 'Reduced implementation risks', 'Improved ROI', 'Competitive advantage'],
      marketPrice: '$150-300/hour',
      href: '/services/digital-transformation',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure Management',
      description: 'Comprehensive IT infrastructure design, implementation, and ongoing management services.',
      category: 'it-services',
      price: '$175/hour',
      features: ['Infrastructure design', 'Implementation', 'Ongoing management', 'Performance optimization', 'Security hardening'],
      benefits: ['Reliable infrastructure', 'Reduced downtime', 'Improved performance', 'Cost optimization'],
      marketPrice: '$140-250/hour',
      href: '/services/it-infrastructure',
      icon: Cpu, // Changed from Server to Cpu as Server is not imported
      color: 'from-gray-500 to-blue-500'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics & Business Intelligence',
      description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
      category: 'it-services',
      price: '$160/hour',
      features: ['Data modeling', 'ETL development', 'Dashboard creation', 'Advanced analytics', 'Data governance'],
      benefits: ['Data-driven decisions', 'Improved business insights', 'Operational efficiency', 'Competitive intelligence'],
      marketPrice: '$130-220/hour',
      href: '/services/data-analytics',
      icon: BarChart3,
      color: 'from-green-500 to-blue-500'
    },

    // Cybersecurity Services
    {
      id: 'ai-cybersecurity-suite',
      title: 'AI Cybersecurity Suite',
      description: 'Advanced cybersecurity platform using AI to detect and prevent threats in real-time.',
      category: 'cybersecurity',
      price: '$499/month',
      features: ['Threat detection', 'Behavioral analysis', 'Automated response', 'Compliance monitoring', 'Security analytics'],
      benefits: ['Proactive threat prevention', 'Reduced security incidents', 'Compliance assurance', '24/7 protection'],
      marketPrice: '$700-2000/month',
      href: '/services/ai-cybersecurity-threat-detection',
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'zero-trust-architecture',
      title: 'Zero Trust Network Architecture',
      description: 'Implement zero trust security model with continuous verification and least privilege access.',
      category: 'cybersecurity',
      price: '$300/hour',
      features: ['Identity verification', 'Access control', 'Network segmentation', 'Continuous monitoring', 'Security policies'],
      benefits: ['Enhanced security posture', 'Reduced attack surface', 'Compliance with regulations', 'Improved visibility'],
      marketPrice: '$250-400/hour',
      href: '/services/zero-trust-network-architecture',
      icon: Lock,
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Comprehensive <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Transform your business with our cutting-edge AI solutions, innovative micro SaaS products, 
            and strategic IT services. From startups to enterprises, we have the expertise to drive your success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center text-cyan-400">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>50+ Services Available</span>
            </div>
            <div className="flex items-center text-cyan-400">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center text-cyan-400">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Enterprise-Grade Security</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-6 mb-12 max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-cyan-400 mb-2" />
              <span className="text-white font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-cyan-400 mb-2" />
              <span className="text-white font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-cyan-400 mb-2" />
              <span className="text-white font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</span>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <category.icon className="w-5 h-5 mr-2" />
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-600"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-300 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                <span className="text-slate-400 text-sm ml-2">Market: {service.marketPrice}</span>
              </div>

              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="text-slate-300 text-sm flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <li key={idx} className="text-slate-300 text-sm flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={service.href}
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-slate-300 mb-6">
              Let's discuss how our services can drive your success. Get a free consultation and custom quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Get Free Consultation
              </a>
              <a
                href="/request-quote"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Request Custom Quote
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}