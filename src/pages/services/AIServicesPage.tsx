import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  BarChart3, 
  MessageSquare, 
  Eye, 
  Zap, 
  TrendingUp, 
  Shield, 
  Globe,
  ArrowRight,
  CheckCircle,
  Play,
  Download,
  Users,
  Clock,
  Star
} from 'lucide-react';

const AIServicesPage = () => {
  const aiServices = [
    {
      id: 'machine-learning',
      title: 'Machine Learning Models',
      description: 'Custom ML models tailored to your business needs',
      icon: <Brain className="w-8 h-8" />,
      features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Decision Making', 'Continuous Learning'],
      useCases: ['Customer Segmentation', 'Demand Forecasting', 'Fraud Detection', 'Process Optimization'],
      pricing: 'Starting from $2,500/month'
    },
    {
      id: 'nlp',
      title: 'Natural Language Processing',
      description: 'Advanced text and speech processing solutions',
      icon: <MessageSquare className="w-8 h-8" />,
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'],
      useCases: ['Customer Support', 'Content Moderation', 'Market Research', 'Document Processing'],
      pricing: 'Starting from $1,800/month'
    },
    {
      id: 'computer-vision',
      title: 'Computer Vision',
      description: 'Image and video analysis powered by AI',
      icon: <Eye className="w-8 h-8" />,
      features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Video Analytics'],
      useCases: ['Quality Control', 'Security Systems', 'Retail Analytics', 'Medical Imaging'],
      pricing: 'Starting from $3,200/month'
    },
    {
      id: 'predictive-analytics',
      title: 'Predictive Analytics',
      description: 'Data-driven insights for strategic decision making',
      icon: <TrendingUp className="w-8 h-8" />,
      features: ['Risk Assessment', 'Trend Analysis', 'Performance Forecasting', 'Scenario Planning'],
      useCases: ['Financial Planning', 'Supply Chain Optimization', 'Marketing Campaigns', 'Resource Planning'],
      pricing: 'Starting from $2,000/month'
    }
  ];

  const industries = [
    'Healthcare', 'Finance', 'Retail', 'Manufacturing', 'Transportation', 'Energy', 'Education', 'Government'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mb-6">
            <Brain className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            AI & <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Analytics
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed mb-8">
            Transform your business with cutting-edge artificial intelligence and advanced analytics solutions. 
            From machine learning models to predictive insights, we help you harness the power of AI.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">99.9%</div>
              <div className="text-zion-slate-light">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-purple mb-2">24/7</div>
              <div className="text-zion-slate-light">AI Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-blue mb-2">50%+</div>
              <div className="text-zion-slate-light">Efficiency Gain</div>
            </div>
          </div>
        </motion.div>

        {/* AI Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {aiServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/10"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <div className="text-right">
                  <div className="text-sm text-zion-cyan font-medium">{service.pricing}</div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Use Cases */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Use Cases:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.useCases.map((useCase, useCaseIndex) => (
                    <span
                      key={useCaseIndex}
                      className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/20"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to={`/services/ai/${service.id}`}
                className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Industries Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              Our AI solutions are tailored for various industries, helping businesses across sectors 
              leverage the power of artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-blue-dark/20 border border-zion-cyan/20 rounded-lg p-4 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="text-zion-cyan font-medium">{industry}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Our AI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Our AI Solutions?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-zion-slate-light">
                Built with enterprise-grade security and compliance standards
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Scalable Architecture</h3>
              <p className="text-zion-slate-light">
                Designed to grow with your business needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-blue to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Support</h3>
              <p className="text-zion-slate-light">
                24/7 technical support and consultation
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can transform your business operations 
            and drive innovation in your industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-105"
            >
              Get AI Consultation
            </Link>
            <Link
              to="/services/pricing"
              className="px-8 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              View AI Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIServicesPage;