import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Target, 
  BarChart3, 
  Users, 
  Mail, 
  MessageSquare, 
  TrendingUp, 
  Zap, 
  Brain,
  Globe,
  Shield,
  Clock,
  Analytics
} from 'lucide-react';

const AIMarketingAutomation: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Campaign Optimization",
      description: "Machine learning algorithms that automatically optimize marketing campaigns for maximum performance and ROI",
      benefits: ["Real-time optimization", "A/B testing automation", "Performance prediction", "Budget allocation"]
    },
    {
      icon: Users,
      title: "Intelligent Customer Segmentation",
      description: "Advanced AI algorithms that automatically segment customers based on behavior, preferences, and engagement patterns",
      benefits: ["Dynamic segmentation", "Behavioral analysis", "Predictive modeling", "Personalization"]
    },
    {
      icon: Analytics,
      title: "Predictive Analytics",
      description: "Forecast customer behavior, campaign performance, and market trends using historical data and AI models",
      benefits: ["Customer lifetime value", "Churn prediction", "Demand forecasting", "Market trends"]
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Intelligent automation of marketing processes, from lead generation to customer retention",
      benefits: ["Lead nurturing", "Email automation", "Social media management", "Content scheduling"]
    }
  ];

  const solutions = [
    {
      category: "Email Marketing",
      icon: Mail,
      solutions: [
        "AI-powered email personalization",
        "Send time optimization",
        "Subject line optimization",
        "Content recommendations",
        "Automated drip campaigns"
      ]
    },
    {
      category: "Social Media Marketing",
      icon: MessageSquare,
      solutions: [
        "Content performance prediction",
        "Optimal posting times",
        "Audience engagement analysis",
        "Trend identification",
        "Automated content scheduling"
      ]
    },
    {
      category: "Search & Display Advertising",
      icon: Target,
      solutions: [
        "Bid optimization",
        "Audience targeting",
        "Ad creative optimization",
        "Performance forecasting",
        "Cross-channel attribution"
      ]
    },
    {
      category: "Content Marketing",
      icon: TrendingUp,
      solutions: [
        "Content performance analysis",
        "Topic recommendations",
        "SEO optimization",
        "Content scheduling",
        "ROI measurement"
      ]
    }
  ];

  const technologies = [
    {
      name: "Machine Learning",
      description: "Advanced ML algorithms for pattern recognition and prediction",
      icon: Brain
    },
    {
      name: "Natural Language Processing",
      description: "AI-powered content analysis and generation",
      icon: MessageSquare
    },
    {
      name: "Predictive Analytics",
      description: "Data-driven forecasting and optimization",
      icon: Analytics
    },
    {
      name: "Marketing Automation",
      description: "Intelligent workflow automation",
      icon: Zap
    },
    {
      name: "Real-time Analytics",
      description: "Instant performance monitoring and optimization",
      icon: Clock
    },
    {
      name: "Multi-channel Integration",
      description: "Seamless integration across all marketing channels",
      icon: Globe
    }
  ];

  const benefits = [
    {
      title: "Increased ROI",
      description: "AI optimization typically delivers 20-40% improvement in marketing ROI",
      icon: TrendingUp
    },
    {
      title: "Time Savings",
      description: "Automate repetitive tasks and save 15-20 hours per week",
      icon: Clock
    },
    {
      title: "Better Targeting",
      description: "Improve conversion rates by 25-35% with AI-powered segmentation",
      icon: Target
    },
    {
      title: "Scalable Growth",
      description: "Scale marketing efforts without proportional increase in resources",
      icon: Users
    }
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mb-6">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-600 bg-clip-text text-transparent">
                AI Marketing Automation
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your marketing with AI-powered automation that delivers personalized experiences, 
              optimizes campaigns, and maximizes ROI through intelligent decision-making.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link
                to="/services-showcase"
                className="border border-green-400 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Key Features</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI Marketing Automation platform combines cutting-edge artificial intelligence with 
            proven marketing strategies to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
              
              <div className="ml-16">
                <h4 className="text-sm font-medium text-gray-300 mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Solutions by Channel */}
      <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border-t border-green-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Solutions by Marketing Channel</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI automation solutions across all major marketing channels 
              to create cohesive, data-driven marketing strategies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                </div>
                
                <ul className="space-y-3">
                  {category.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {solution}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Business Benefits</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AI Marketing Automation delivers measurable results that directly impact your bottom line 
            and competitive position in the market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 text-center hover:border-green-500/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technology Stack */}
      <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border-t border-green-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Technology Stack</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on cutting-edge AI and marketing technologies to ensure scalability, 
              performance, and reliability for enterprise marketing automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 text-center hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your Marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our AI marketing experts help you implement intelligent automation that will 
            transform your marketing performance and drive sustainable growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/case-studies"
              className="border border-green-400 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIMarketingAutomation;