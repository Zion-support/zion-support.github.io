import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Mic, 
  FileText, 
  Shield, 
  Cloud, 
  Rocket, 
  Globe, 
  Cpu, 
  Lock, 
  Heart, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  DollarSign, 
  Star, 
  TrendingUp, 
  Award, 
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  BarChart3,
  Workflow,
  Automation,
  Smartphone,
  Monitor,
  Tablet,
  Database,
  Network,
  Settings,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const InnovativeServicesShowcase2025 = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    {
      id: 'all',
      name: 'All Services',
      icon: <Star className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-voice',
      name: 'Voice & Document AI',
      icon: <Mic className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ai-analytics',
      name: 'AI Analytics',
      icon: <Brain className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: <Shield className="w-5 h-5" />,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      icon: <Cloud className="w-5 h-5" />,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'emerging-tech',
      name: 'Emerging Tech',
      icon: <Rocket className="w-5 h-5" />,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const allServices = [
    // Voice & Document AI
    {
      id: 'ai-voice-assistant',
      title: 'AI Voice Assistant Platform',
      description: 'Enterprise-grade voice AI platform with natural language processing, multi-language support, and seamless CRM integration.',
      category: 'ai-voice',
      icon: <Mic className="w-8 h-8 text-blue-500" />,
      price: '$199/month',
      features: ['Advanced Speech Recognition', '100+ Languages', 'CRM Integration', 'Real-time Analytics'],
      benefits: ['70% reduction in call wait times', '3x increase in lead handling', '24/7 multilingual support'],
      href: '/services/ai-voice-assistant',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ai-document-intelligence',
      title: 'AI Document Intelligence Suite',
      description: 'Intelligent document processing platform with 99.9% OCR accuracy and automated workflow automation.',
      category: 'ai-voice',
      icon: <FileText className="w-8 h-8 text-green-500" />,
      price: '$149/month',
      features: ['Advanced OCR Technology', '200+ Document Types', 'Data Extraction', 'Workflow Automation'],
      benefits: ['80% time reduction', '10x processing speed', '$200K+ annual savings'],
      href: '/services/ai-document-intelligence',
      featured: true,
      color: 'from-green-500 to-blue-500'
    },
    // AI Analytics
    {
      id: 'ai-business-intelligence',
      title: 'AI Business Intelligence',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      category: 'ai-analytics',
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      price: '$299/month',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom ML Models', 'Advanced Reporting'],
      benefits: ['45% improvement in decision making', 'Real-time insights', 'Custom AI models'],
      href: '/services/ai-business-intelligence',
      featured: false,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-sales-copilot',
      title: 'AI Sales Copilot',
      description: 'AI-powered sales automation that increases conversion rates and streamlines the sales process.',
      category: 'ai-analytics',
      icon: <Target className="w-8 h-8 text-red-500" />,
      price: '$179/month',
      features: ['Lead Qualification', 'Sales Automation', 'Performance Analytics', 'CRM Integration'],
      benefits: ['40% increase in conversion', 'Automated follow-ups', 'Better lead scoring'],
      href: '/services/ai-sales-copilot',
      featured: false,
      color: 'from-red-500 to-orange-500'
    },
    // Cybersecurity
    {
      id: 'ai-cybersecurity-suite',
      title: 'AI Cybersecurity Suite',
      description: 'Advanced AI-powered security solutions with threat detection and automated response.',
      category: 'cybersecurity',
      icon: <Shield className="w-8 h-8 text-indigo-500" />,
      price: '$399/month',
      features: ['Threat Intelligence', 'Automated Response', 'Zero Trust Architecture', 'Compliance Monitoring'],
      benefits: ['85% reduction in security incidents', 'Real-time threat detection', 'Automated response'],
      href: '/services/ai-cybersecurity-suite',
      featured: false,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'ai-compliance-copilot',
      title: 'AI Compliance Copilot',
      description: 'Automated regulatory compliance monitoring and reporting for financial and healthcare industries.',
      category: 'cybersecurity',
      icon: <Lock className="w-8 h-8 text-green-500" />,
      price: '$249/month',
      features: ['Compliance Monitoring', 'Automated Reporting', 'Risk Assessment', 'Audit Trails'],
      benefits: ['95% compliance rate', 'Automated reporting', 'Risk reduction'],
      href: '/services/ai-compliance-copilot',
      featured: false,
      color: 'from-green-500 to-emerald-500'
    },
    // Cloud & DevOps
    {
      id: 'cloud-devops',
      title: 'Cloud DevOps Platform',
      description: 'Streamline your development pipeline with automated cloud infrastructure and CI/CD.',
      category: 'cloud-devops',
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      price: '$199/month',
      features: ['CI/CD Automation', 'Infrastructure as Code', 'Container Orchestration', 'Security Integration'],
      benefits: ['50% faster deployments', 'Reduced infrastructure costs', 'Improved security'],
      href: '/services/cloud-devops',
      featured: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'cloud-finops-optimizer',
      title: 'Cloud FinOps Optimizer',
      description: 'Optimize cloud costs and financial operations with AI-powered insights and automation.',
      category: 'cloud-devops',
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      price: '$129/month',
      features: ['Cost Optimization', 'Resource Management', 'Budget Tracking', 'ROI Analysis'],
      benefits: ['30% cost reduction', 'Better resource utilization', 'Improved ROI'],
      href: '/services/cloud-finops-optimizer',
      featured: false,
      color: 'from-green-500 to-blue-500'
    },
    // Emerging Tech
    {
      id: 'quantum-ai-platform',
      title: 'Quantum AI Platform',
      description: 'Next-generation quantum computing platform for complex AI and machine learning tasks.',
      category: 'emerging-tech',
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
      price: '$599/month',
      features: ['Quantum Computing', 'AI Integration', 'Advanced Algorithms', 'Research Tools'],
      benefits: ['1000x faster processing', 'Breakthrough AI capabilities', 'Research advancement'],
      href: '/services/quantum-ai-platform',
      featured: false,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-healthcare-analytics',
      title: 'AI Healthcare Analytics',
      description: 'Advanced healthcare analytics platform with AI-powered diagnostics and patient care insights.',
      category: 'emerging-tech',
      icon: <Heart className="w-8 h-8 text-red-500" />,
      price: '$349/month',
      features: ['Patient Analytics', 'Diagnostic AI', 'Care Optimization', 'HIPAA Compliance'],
      benefits: ['Improved patient outcomes', 'Faster diagnostics', 'Better care coordination'],
      href: '/services/ai-healthcare-analytics',
      featured: false,
      color: 'from-red-500 to-orange-500'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeCategory);

  const stats = [
    { value: "25+", label: "AI Services" },
    { value: "99.9%", label: "Accuracy Rate" },
    { value: "500+", label: "Global Clients" },
    { value: "24/7", label: "Support" },
    { value: "60%", label: "Cost Reduction" },
    { value: "3x", label: "Performance Boost" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Innovative Services Showcase 2025 - Zion Tech Group"
        description="Discover our cutting-edge AI, voice, document, and emerging technology services. Transform your business with innovative solutions."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
              <Star className="w-4 h-4 mr-2" />
              Innovation 2025
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Innovative Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Showcase 2025
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our cutting-edge AI, voice recognition, document processing, and emerging technology services. 
              Transform your business with innovative solutions designed for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700">
                <TrendingUp className="w-5 h-5 mr-2" />
                Explore Services
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                <Award className="w-5 h-5 mr-2" />
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Explore Our Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Filter through our comprehensive range of innovative services to find the perfect solution for your business needs.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                  activeCategory === category.id
                    ? `border-transparent bg-gradient-to-r ${category.color} text-white`
                    : 'border-slate-600 text-gray-300 hover:border-slate-500 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.icon}
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${service.featured ? 'scale-105' : ''}`}
              >
                {service.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                      Featured
                    </Badge>
                  </div>
                )}
                <Card className={`bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 h-full ${
                  service.featured ? 'border-purple-500' : ''
                }`}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-slate-700/50 rounded-lg">
                        {service.icon}
                      </div>
                      <Badge className={`bg-gradient-to-r ${service.color} text-white`}>
                        {service.price}
                      </Badge>
                    </div>
                    <CardTitle className="text-white text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col h-full">
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <Zap className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-auto">
                      <Button 
                        className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90`}
                        size="lg"
                        asChild
                      >
                        <Link to={service.href}>
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of businesses already using our innovative services to revolutionize 
              their operations and achieve unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700">
                <TrendingUp className="w-5 h-5 mr-2" />
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                <Award className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="p-3 bg-blue-500/20 rounded-lg mb-4">
                <Phone className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 bg-green-500/20 rounded-lg mb-4">
                <Mail className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 bg-purple-500/20 rounded-lg mb-4">
                <MapPin className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2025;