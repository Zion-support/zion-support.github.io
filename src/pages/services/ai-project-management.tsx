import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Kanban, 
  Brain, 
  Target, 
  Shield, 
  BarChart3, 
  Cpu, 
  Database, 
  Network,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  TrendingUp,
  Award,
  Play,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Headphones,
  HelpCircle,
  Bot,
  Globe,
  Calendar,
  Users,
  FileText,
  PieChart,
  Zap,
  Briefcase,
  GanttChart,
  CheckSquare,
  AlertTriangle
} from 'lucide-react';

export default function AIProjectManagement() {
  const features = [
    {
      icon: Kanban,
      title: 'AI Task Management',
      description: 'Intelligent task prioritization, scheduling, and resource allocation based on AI analysis'
    },
    {
      icon: Brain,
      title: 'Predictive Analytics',
      description: 'AI-powered forecasting for project timelines, risks, and resource requirements'
    },
    {
      icon: Target,
      title: 'Smart Resource Planning',
      description: 'Optimized resource allocation and team management using machine learning algorithms'
    },
    {
      icon: GanttChart,
      title: 'Automated Scheduling',
      description: 'AI-driven project scheduling with dependency mapping and critical path analysis'
    },
    {
      icon: AlertTriangle,
      title: 'Risk Management',
      description: 'Proactive risk identification and mitigation strategies powered by AI insights'
    },
    {
      icon: Shield,
      title: 'Performance Monitoring',
      description: 'Real-time project tracking with AI-powered performance metrics and reporting'
    }
  ];

  const benefits = [
    '30% faster project completion times',
    'Improved resource utilization and efficiency',
    'Reduced project risks and delays',
    'Data-driven decision making',
    'Automated project reporting and insights',
    'Scalable project management for growing teams'
  ];

  const useCases = [
    {
      title: 'Enterprise Project Management',
      description: 'AI-powered project management for large organizations managing complex, multi-team projects across multiple locations and departments'
    },
    {
      title: 'Software Development',
      description: 'Intelligent project management for agile development teams with automated sprint planning and progress tracking'
    },
    {
      title: 'Construction & Engineering',
      description: 'AI-enhanced project management for construction projects with resource optimization and timeline management'
    },
    {
      title: 'Marketing Campaigns',
      description: 'Smart project management for marketing teams with automated campaign scheduling and performance tracking'
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Basic AI project management for small teams',
      features: [
        'AI task management',
        'Basic scheduling',
        'Team collaboration',
        'Standard reporting'
      ]
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Advanced AI project management for growing organizations',
      features: [
        'Predictive analytics',
        'Resource optimization',
        'Risk management',
        'Advanced reporting',
        'Custom workflows'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'Full-scale AI project management for large organizations',
      features: [
        'Custom AI models',
        'Multi-project portfolio management',
        '24/7 dedicated support',
        'White-label solutions',
        'Custom integrations'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      <SEO 
        title="AI Project Management Platform - Zion Tech Group"
        description="Revolutionary AI-powered project management platform for intelligent task management, predictive analytics, and automated resource planning. Transform your project delivery with AI insights."
        keywords="AI project management, project automation, task management AI, resource planning, project analytics, project optimization"
        ogType="website"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-gray-800/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-6">
              <Kanban className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Project Management
            </h1>
            <p className="text-xl text-orange-200 max-w-3xl mx-auto leading-relaxed">
              Revolutionizing project management with cutting-edge AI technology. 
              From task automation to predictive analytics, our platform transforms project delivery.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="btn-futuristic text-lg px-8 py-4">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
            <button className="btn-futuristic-outline text-lg px-8 py-4">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Sales
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced AI Project Management Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge machine learning with project management expertise 
              to deliver unprecedented capabilities in task optimization and project delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl border border-gray-600 hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-orange-900 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Project Management?
            </h2>
            <p className="text-xl text-orange-200 max-w-3xl mx-auto">
              Experience the future of project management with our AI-powered platform that delivers 
              unprecedented efficiency, insights, and success rates for your projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <CheckCircle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                <p className="text-lg text-white">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI project management platform is transforming industries and enabling new possibilities 
              in project delivery and team collaboration across diverse sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl border border-gray-600"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-red-900 to-orange-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your AI Project Management Plan
            </h2>
            <p className="text-xl text-red-200 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your project management needs and team size.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-orange-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full btn-futuristic">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
               Join the future of project delivery with our AI-powered platform. 
               Contact us today to learn how we can optimize your project success rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic-outline text-lg px-8 py-4 bg-white text-orange-600 hover:bg-orange-50">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Sales
              </button>
              <button className="btn-futuristic text-lg px-8 py-4">
                <Play className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-300 mb-8">
                Ready to explore the future of project management? Our team of experts 
                is here to help you build AI-powered project systems that drive success.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-orange-400" />
                  <span className="text-white">+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-400" />
                  <span className="text-white">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-orange-400" />
                  <span className="text-white">364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                Request Information
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your project management needs"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                  ></textarea>
                </div>
                <button type="submit" className="w-full btn-futuristic">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}