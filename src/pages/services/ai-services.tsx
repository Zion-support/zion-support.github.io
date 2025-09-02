import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Users, 
  Shield, 
  Target, 
  CheckCircle, 
  ArrowRight, 
  TrendingUp, 
  BarChart3, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Award, 
  Lightbulb, 
  Sparkles,
  Code,
  PenTool,
  Workflow,
  Megaphone,
  Database,
  FileText,
  Image,
  Video,
  Terminal,
  Bot,
  Cpu,
  Layers
} from 'lucide-react';

const AIServicesEnhanced: React.FC = () => {
  const aiServices = [
    {
      title: 'AI Content Studio',
      description: 'Generate high-quality content for blogs, social media, and marketing materials with AI',
      icon: PenTool,
      features: ['Blog generation', 'Social media posts', 'Video content', 'SEO optimization'],
      pricing: 'Starting at $29/month',
      link: '/services/ai-content-studio',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Automate business processes with intelligent workflows and AI-powered bots',
      icon: Workflow,
      features: ['Process automation', '500+ integrations', 'AI-powered bots', 'Real-time processing'],
      pricing: 'Starting at $39/month',
      link: '/services/ai-workflow-automation',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'AI Business Intelligence',
      description: 'Transform data into actionable insights with AI-powered analytics and reporting',
      icon: BarChart3,
      features: ['Real-time dashboards', 'Predictive analytics', 'Data integration', 'Automated reporting'],
      pricing: 'Starting at $69/month',
      link: '/services/ai-business-intelligence',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI Code Assistant',
      description: 'Supercharge development with AI-powered code generation, debugging, and testing',
      icon: Code,
      features: ['Code generation', 'Intelligent debugging', 'Auto test generation', 'Multi-language support'],
      pricing: 'Starting at $29/month',
      link: '/services/ai-code-assistant',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'AI Marketing Automation',
      description: 'Automate marketing campaigns with AI-powered targeting and personalization',
      icon: Megaphone,
      features: ['Email automation', 'Social media automation', 'Lead scoring', 'Campaign analytics'],
      pricing: 'Starting at $39/month',
      link: '/services/ai-marketing-automation',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'AI Email Responder',
      description: 'Intelligent email management with AI-powered responses and automation',
      icon: Mail,
      features: ['Smart responses', 'Email classification', 'Auto-replies', 'Sentiment analysis'],
      pricing: 'Starting at $19/month',
      link: '/services/ai-email-responder',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const benefits = [
    'Increase productivity by 300%',
    'Reduce operational costs by 50%',
    '24/7 automated operations',
    'AI-powered insights',
    'Scalable solutions',
    'Enterprise security',
    'Real-time optimization',
    'ROI tracking'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Services - Zion Tech Group"
        description="Comprehensive AI services and solutions. From content creation to business intelligence, automate and optimize your business with cutting-edge artificial intelligence."
        keywords="AI services, artificial intelligence, AI automation, AI content creation, AI analytics, business intelligence, Zion Tech Group"
        ogType="website"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium">
                <Brain className="w-4 h-4" />
                AI Services & Solutions
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                AI Services
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  & Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Transform your business with our comprehensive AI services. From content creation to business intelligence, we provide cutting-edge artificial intelligence solutions that drive growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-futuristic bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  <Brain className="w-5 h-5" />
                  Explore AI Services
                </button>
                <button className="btn-futuristic-outline">
                  <FileText className="w-5 h-5" />
                  Download Guide
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl border border-blue-500/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Brain className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">AI Services</h3>
                    <p className="text-gray-300">Intelligent Solutions</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 bg-slate-800/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to automate, optimize, and transform your business operations.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-700/50"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">{service.description}</p>
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="text-lg font-bold text-blue-400 mb-4">{service.pricing}</div>
                <a
                  href={service.link}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of artificial intelligence that transforms your business operations and drives measurable results.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-700/50 rounded-xl border border-slate-600/50 text-center hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-600/50"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium text-sm leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using our AI services to automate operations, optimize performance, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <MessageCircle className="w-5 h-5" />
                Get Started
              </button>
              <button className="btn-futuristic-outline">
                <Phone className="w-5 h-5" />
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Get Started Today
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Ready to implement AI solutions in your business? Our team of AI experts is here to help you choose and implement the right AI services for your needs.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-300">+1 302 464 0950</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">kleber@ziontechgroup.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Address</p>
                    <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Request AI Consultation</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Tell us about your AI needs..."
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full btn-futuristic bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  <MessageCircle className="w-5 h-5" />
                  Request Consultation
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesEnhanced;