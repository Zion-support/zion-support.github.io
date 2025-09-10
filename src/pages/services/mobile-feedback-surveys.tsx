import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  MessageSquare, 
  BarChart3, 
  Zap, 
  Users, 
  Globe,
  Target,
  Settings,
  TrendingUp,
  CheckCircle
} from 'lucide-react';
import SEO from '../../../components/SEO';

const MobileFeedbackSurveys: React.FC = () => {
  const features = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile-First Design",
      description: "Optimized surveys for mobile devices with responsive design and touch-friendly interfaces."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Multi-Channel Surveys",
      description: "Deploy surveys across SMS, in-app, email, and web with unified response collection."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Instant feedback analysis with sentiment analysis, trend identification, and actionable insights."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Smart Targeting",
      description: "AI-powered survey targeting based on user behavior, demographics, and engagement patterns."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Segmentation",
      description: "Advanced customer segmentation for personalized survey experiences and targeted feedback collection."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Language Support",
      description: "Global survey deployment with automatic language detection and localization features."
    }
  ];

  const benefits = [
    {
      metric: "5x",
      description: "Higher response rates"
    },
    {
      metric: "80%",
      description: "Faster feedback collection"
    },
    {
      metric: "90%",
      description: "Mobile completion rate"
    },
    {
      metric: "24/7",
      description: "Continuous feedback"
    }
  ];

  const useCases = [
    {
      title: "Customer Satisfaction",
      description: "Measure customer satisfaction with post-purchase and service experience surveys."
    },
    {
      title: "Product Research",
      description: "Gather user feedback on product features, usability, and improvement opportunities."
    },
    {
      title: "Market Research",
      description: "Conduct market research and competitive analysis with targeted mobile surveys."
    },
    {
      title: "Employee Engagement",
      description: "Monitor employee satisfaction and gather feedback on workplace improvements."
    }
  ];

  const surveyTypes = [
    "NPS Surveys",
    "Customer Satisfaction",
    "Product Feedback",
    "Market Research",
    "Employee Surveys",
    "Event Feedback"
  ];

  return (
    <>
      <SEO 
        title="Mobile Feedback Surveys - Zion Tech Group"
        description="Transform customer feedback collection with mobile-first surveys. Achieve 5x higher response rates and 80% faster feedback collection."
        keywords="mobile feedback surveys, customer feedback, mobile surveys, survey tools, feedback collection, customer satisfaction"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-pink-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Mobile Feedback Surveys
              </h1>
              <p className="text-xl md:text-2xl text-cyan-200 mb-8 max-w-4xl mx-auto">
                Revolutionize customer feedback collection with mobile-first surveys that achieve 5x higher response rates and provide real-time insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Survey Features
              </h2>
              <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
                Our Mobile Feedback Surveys combine cutting-edge mobile technology with advanced analytics to deliver exceptional feedback collection experiences.
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
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="text-cyan-400 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-cyan-200">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Measurable Results
              </h2>
              <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
                Organizations using our Mobile Feedback Surveys see dramatic improvements in response rates and feedback quality.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                    {benefit.metric}
                  </div>
                  <p className="text-cyan-200">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perfect For Every Business Need
              </h2>
              <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
                From customer satisfaction to market research, our Mobile Feedback Surveys adapt to your feedback collection requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-cyan-200">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Survey Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Survey Types & Templates
              </h2>
              <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
                Pre-built templates and customizable survey types for every feedback collection need.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {surveyTypes.map((surveyType, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20 text-center"
                >
                  <p className="text-cyan-200 font-medium">{surveyType}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Feedback Collection?
              </h2>
              <p className="text-xl text-cyan-200 mb-8">
                Join businesses already using mobile-first surveys to collect better feedback and improve customer satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MobileFeedbackSurveys;