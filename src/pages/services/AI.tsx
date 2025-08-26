import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Shield, 
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
  Eye,
  MessageSquare,
  Image,
  Video,
  FileText,
  Target,
  Clock,
  DollarSign,
  Building,
  Factory,
  Car,
  Heart,
  ShoppingCart
} from 'lucide-react';

const AI = () => {
  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models and algorithms tailored to your business needs',
      icon: Brain,
      features: [
        'Predictive Analytics',
        'Pattern Recognition',
        'Anomaly Detection',
        'Recommendation Systems',
        'Forecasting Models'
      ],
      applications: ['Finance', 'Healthcare', 'Retail', 'Manufacturing'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced text and language understanding capabilities',
      icon: MessageSquare,
      features: [
        'Text Classification',
        'Sentiment Analysis',
        'Language Translation',
        'Chatbot Development',
        'Document Processing'
      ],
      applications: ['Customer Service', 'Content Analysis', 'Legal', 'Education'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis for automated decision making',
      icon: Eye,
      features: [
        'Object Detection',
        'Image Classification',
        'Facial Recognition',
        'Quality Control',
        'Autonomous Systems'
      ],
      applications: ['Manufacturing', 'Security', 'Healthcare', 'Automotive'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Deep Learning',
      description: 'Neural network architectures for complex problem solving',
      icon: Network,
      features: [
        'Convolutional Neural Networks',
        'Recurrent Neural Networks',
        'Transformer Models',
        'Generative AI',
        'Transfer Learning'
      ],
      applications: ['Research', 'Product Development', 'Creative Industries', 'Science'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const industrySolutions = [
    {
      industry: 'Healthcare',
      icon: Heart,
      solutions: [
        'Medical Image Analysis',
        'Drug Discovery',
        'Patient Risk Assessment',
        'Diagnostic Support',
        'Treatment Optimization'
      ],
      benefits: [
        'Improved diagnostic accuracy',
        'Faster drug development',
        'Personalized treatment plans',
        'Reduced healthcare costs'
      ]
    },
    {
      industry: 'Finance',
      icon: DollarSign,
      solutions: [
        'Fraud Detection',
        'Credit Scoring',
        'Algorithmic Trading',
        'Risk Management',
        'Customer Segmentation'
      ],
      benefits: [
        'Enhanced security',
        'Better risk assessment',
        'Improved customer experience',
        'Increased operational efficiency'
      ]
    },
    {
      industry: 'Manufacturing',
      icon: Factory,
      solutions: [
        'Predictive Maintenance',
        'Quality Control',
        'Supply Chain Optimization',
        'Process Automation',
        'Demand Forecasting'
      ],
      benefits: [
        'Reduced downtime',
        'Higher product quality',
        'Optimized inventory',
        'Cost savings'
      ]
    },
    {
      industry: 'Retail',
      icon: ShoppingCart,
      solutions: [
        'Customer Behavior Analysis',
        'Inventory Management',
        'Price Optimization',
        'Personalized Marketing',
        'Demand Prediction'
      ],
      benefits: [
        'Increased sales',
        'Better customer retention',
        'Optimized pricing',
        'Improved inventory efficiency'
      ]
    }
  ];

  const aiProcess = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs and identify AI opportunities',
      icon: Target,
      details: [
        'Business process analysis',
        'Data assessment',
        'ROI evaluation',
        'Technology requirements'
      ]
    },
    {
      step: '02',
      title: 'Data Preparation',
      description: 'We clean, structure, and prepare your data for AI processing',
      icon: Database,
      details: [
        'Data cleaning and validation',
        'Feature engineering',
        'Data augmentation',
        'Quality assurance'
      ]
    },
    {
      step: '03',
      title: 'Model Development',
      description: 'We develop and train custom AI models for your specific use case',
      icon: Code,
      details: [
        'Algorithm selection',
        'Model training',
        'Hyperparameter tuning',
        'Performance optimization'
      ]
    },
    {
      step: '04',
      title: 'Testing & Validation',
      description: 'We thoroughly test models to ensure accuracy and reliability',
      icon: CheckCircle,
      details: [
        'Model validation',
        'Performance testing',
        'Bias detection',
        'Security assessment'
      ]
    },
    {
      step: '05',
      title: 'Deployment & Integration',
      description: 'We deploy models and integrate them with your existing systems',
      icon: Rocket,
      details: [
        'Production deployment',
        'System integration',
        'API development',
        'Monitoring setup'
      ]
    },
    {
      step: '06',
      title: 'Maintenance & Optimization',
      description: 'We continuously monitor and improve your AI solutions',
      icon: TrendingUp,
      details: [
        'Performance monitoring',
        'Model updates',
        'Continuous learning',
        'Ongoing support'
      ]
    }
  ];

  const caseStudies = [
    {
      title: 'Healthcare AI Platform',
      company: 'Major Hospital Network',
      challenge: 'Need for faster and more accurate medical image analysis',
      solution: 'Developed custom computer vision models for radiology',
      results: [
        '95% accuracy in disease detection',
        '60% reduction in diagnosis time',
        'Improved patient outcomes',
        'Cost savings of $2M annually'
      ],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Financial Fraud Detection',
      company: 'International Bank',
      challenge: 'Real-time fraud detection across millions of transactions',
      solution: 'Implemented machine learning-based fraud detection system',
      results: [
        '99.9% fraud detection accuracy',
        '90% reduction in false positives',
        'Real-time processing',
        'Annual savings of $15M'
      ],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Manufacturing Optimization',
      company: 'Global Manufacturer',
      challenge: 'Predictive maintenance and quality control automation',
      solution: 'AI-powered IoT system for predictive analytics',
      results: [
        '40% reduction in unplanned downtime',
        '25% improvement in product quality',
        '30% reduction in maintenance costs',
        'Increased production efficiency'
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
            AI Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed"
          >
            Transform your business with cutting-edge artificial intelligence and machine learning solutions. 
            We help organizations harness the power of AI to drive innovation, efficiency, and growth.
          </motion.p>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Our AI Services
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
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
            Industry-Specific AI Solutions
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
                  <h4 className="text-lg font-semibold text-zion-cyan mb-3">AI Solutions</h4>
                  <ul className="space-y-2">
                    {industry.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-zion-slate-light">
                        <Star className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
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

      {/* AI Process */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Our AI Development Process
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiProcess.map((step, index) => (
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
            AI Success Stories
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
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how artificial intelligence can drive innovation, efficiency, and growth 
              for your organization. Our team of AI experts is ready to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-zion-blue-dark hover:bg-zion-slate-light font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your AI Journey
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

export default AI;