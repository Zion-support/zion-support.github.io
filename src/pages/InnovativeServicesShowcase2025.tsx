import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Rocket, 
  Cloud, 
  Cpu, 
  Globe, 
  Heart, 
  Users, 
  Target,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Lightbulb,
  Code,
  Database,
  Lock,
  BarChart3,
  PenTool,
  MessageCircle,
  Calendar,
  DollarSign,
  Award
} from 'lucide-react';

const InnovativeServicesShowcase2025: React.FC = () => {
  const services = [
    {
      name: 'AI Sales Copilot',
      href: '/services/ai-sales-copilot',
      description: 'AI-powered sales automation and CRM optimization',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      features: ['Lead scoring', 'Sales forecasting', 'Customer insights', 'Pipeline optimization'],
      pricing: 'Starting at $299/month'
    },
    {
      name: 'AI Compliance Assistant',
      href: '/services/ai-compliance-assistant',
      description: 'Automated compliance monitoring and reporting',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      features: ['Regulatory tracking', 'Audit preparation', 'Risk assessment', 'Policy management'],
      pricing: 'Starting at $199/month'
    },
    {
      name: 'AI Customer Sentiment Analyzer',
      href: '/services/ai-customer-sentiment-analyzer',
      description: 'Real-time customer feedback analysis',
      icon: MessageCircle,
      color: 'from-purple-500 to-pink-500',
      features: ['Sentiment tracking', 'Trend analysis', 'Alert system', 'Report generation'],
      pricing: 'Starting at $149/month'
    },
    {
      name: 'AI-Powered CRM Enhancer',
      href: '/services/ai-powered-crm-enhancer',
      description: 'Intelligent CRM optimization and automation',
      icon: Target,
      color: 'from-orange-500 to-red-500',
      features: ['Data enrichment', 'Workflow automation', 'Performance insights', 'Integration support'],
      pricing: 'Starting at $399/month'
    },
    {
      name: 'AI-Powered HR Recruitment',
      href: '/services/ai-powered-hr-recruitment-platform',
      description: 'Streamlined hiring and talent management',
      icon: Users,
      color: 'from-indigo-500 to-purple-500',
      features: ['Candidate screening', 'Skill matching', 'Interview scheduling', 'Onboarding automation'],
      pricing: 'Starting at $249/month'
    },
    {
      name: 'AI Content Creation',
      href: '/services/ai-content-creation',
      description: 'Automated content generation and optimization',
      icon: PenTool,
      color: 'from-yellow-500 to-orange-500',
      features: ['Blog writing', 'Social media content', 'SEO optimization', 'Brand voice consistency'],
      pricing: 'Starting at $179/month'
    }
  ];

  const benefits = [
    {
      title: 'Cost Efficiency',
      description: 'Reduce operational costs by up to 40% with AI automation',
      icon: DollarSign,
      color: 'text-green-500'
    },
    {
      title: 'Time Savings',
      description: 'Automate repetitive tasks and focus on strategic initiatives',
      icon: Clock,
      color: 'text-blue-500'
    },
    {
      title: 'Scalability',
      description: 'Easily scale operations without proportional cost increases',
      icon: TrendingUp,
      color: 'text-purple-500'
    },
    {
      title: 'Data Insights',
      description: 'Gain actionable insights from your business data',
      icon: BarChart3,
      color: 'text-cyan-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Innovative Services 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the future of business technology with our cutting-edge AI-powered solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most popular AI-powered solutions designed to transform your business operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-blue-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <span className="text-lg font-bold text-green-400">{service.pricing}</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the transformative power of AI-driven business solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-20 h-20 rounded-full bg-slate-700/50 flex items-center justify-center mx-auto mb-6`}>
                  <benefit.icon className={`w-10 h-10 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 border border-blue-500/30"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies already leveraging our AI-powered solutions to drive growth and innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeServicesShowcase2025;