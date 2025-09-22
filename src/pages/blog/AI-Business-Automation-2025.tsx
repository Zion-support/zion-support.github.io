import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain, 
  Zap, 
  TrendingUp, 
  Users, 
  BarChart3,
  CheckCircle,
  Clock,
  DollarSign,
  Target
} from 'lucide-react';

const AIBusinessAutomation2025: React.FC = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Time Savings",
      description: "Reduce manual tasks by up to 80% with intelligent automation",
      stat: "40 hours/week saved"
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Lower operational costs through efficient process automation",
      stat: "30% cost reduction"
    },
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      description: "Scale operations without proportional increase in resources",
      stat: "25% revenue increase"
    },
    {
      icon: Target,
      title: "Accuracy",
      description: "Eliminate human errors with AI-powered precision",
      stat: "99.5% accuracy"
    }
  ];

  const automationExamples = [
    {
      category: "Customer Service",
      examples: [
        "AI-powered chatbots handling 80% of customer inquiries",
        "Automated ticket routing and prioritization",
        "Sentiment analysis for customer feedback",
        "Predictive customer support scheduling"
      ]
    },
    {
      category: "Sales & Marketing",
      examples: [
        "Lead scoring and qualification automation",
        "Personalized email marketing campaigns",
        "Social media content scheduling and optimization",
        "Sales pipeline management and forecasting"
      ]
    },
    {
      category: "Operations",
      examples: [
        "Inventory management and demand forecasting",
        "Automated invoice processing and payment",
        "Supply chain optimization and monitoring",
        "Quality control and defect detection"
      ]
    },
    {
      category: "Human Resources",
      examples: [
        "Resume screening and candidate matching",
        "Automated interview scheduling",
        "Employee onboarding workflows",
        "Performance analytics and reporting"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Business Automation 2025: Transform Your Operations | Zion Tech Group"
        description="Discover how AI-powered business automation can revolutionize your operations, reduce costs, and drive growth in 2025. Learn about cutting-edge automation solutions."
        keywords="AI automation, business automation, AI solutions, process automation, artificial intelligence, 2025 trends"
        ogType="article"
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            <span>AI Innovation Blog</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            AI Business Automation{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              2025
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover how artificial intelligence is revolutionizing business operations, 
            reducing costs, and driving unprecedented growth across industries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services/ai-business-automation"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span>Explore Our AI Solutions</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-300 font-semibold rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
            >
              Get Free Consultation
            </Link>
          </div>
        </motion.div>

        {/* Article Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-white/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-white mb-2">January 2025</div>
              <div className="text-gray-300">Publication Date</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">8 min read</div>
              <div className="text-gray-300">Reading Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">AI & Automation</div>
              <div className="text-gray-300">Category</div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-6">The Future of Business is Automated</h2>
            <div className="text-lg text-gray-300 leading-relaxed space-y-4">
              <p>
                As we enter 2025, artificial intelligence has evolved from a futuristic concept to an essential 
                business tool. Companies that embrace AI-powered automation are seeing remarkable improvements 
                in efficiency, cost reduction, and customer satisfaction.
              </p>
              <p>
                The landscape of business automation has transformed dramatically. What once required extensive 
                programming knowledge and months of implementation can now be deployed in weeks, thanks to 
                advanced AI platforms and no-code/low-code solutions.
              </p>
            </div>
          </motion.section>

          {/* Benefits Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why AI Automation Matters in 2025</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                      <div className="text-blue-400 font-semibold">{benefit.stat}</div>
                    </div>
                  </div>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Automation Examples */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">AI Automation in Action</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {automationExamples.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Zap className="w-6 h-6 text-yellow-400 mr-3" />
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5 mr-3" />
                        <span className="text-gray-300">{example}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Statistics Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">The Numbers Don't Lie</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">73%</div>
                <div className="text-gray-300">of businesses report ROI within 6 months</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">$2.9T</div>
                <div className="text-gray-300">potential annual value from AI automation</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">85%</div>
                <div className="text-gray-300">reduction in processing time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">92%</div>
                <div className="text-gray-300">customer satisfaction improvement</div>
              </div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already leveraging AI automation to streamline 
              operations and drive growth. Our experts are ready to help you get started.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>Start Your AI Journey</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-blue-400 hover:bg-white/10 transition-all duration-300"
              >
                View Success Stories
              </Link>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default AIBusinessAutomation2025;