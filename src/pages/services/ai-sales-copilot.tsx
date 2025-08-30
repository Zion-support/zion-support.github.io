import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Target, 
  BarChart3, 
  MessageSquare, 
  Zap,
  Shield,
  Globe,
  Smartphone,
  Headphones
} from 'lucide-react';
import SEO from '../../components/SEO';

const AISalesCopilot: React.FC = () => {
  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Intelligent Lead Scoring",
      description: "AI-powered lead qualification with 95% accuracy using behavioral analysis and predictive modeling."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Smart Communication",
      description: "Automated personalized messaging that adapts to customer preferences and engagement patterns."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "Forecast sales outcomes and identify high-value opportunities with machine learning algorithms."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Insights",
      description: "Real-time dashboards showing conversion rates, pipeline velocity, and revenue forecasting."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Conversation Intelligence",
      description: "Analyze call transcripts and emails to identify winning strategies and improvement areas."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Follow-ups",
      description: "Smart scheduling and personalized follow-up sequences that increase response rates."
    }
  ];

  const benefits = [
    {
      metric: "40%",
      description: "Increase in conversion rates"
    },
    {
      metric: "30%",
      description: "Reduction in sales cycle time"
    },
    {
      metric: "25%",
      description: "Improvement in lead quality"
    },
    {
      metric: "50%",
      description: "Time saved on administrative tasks"
    }
  ];

  const useCases = [
    {
      title: "Enterprise Sales Teams",
      description: "Scale sales operations with AI-powered lead management and predictive analytics."
    },
    {
      title: "B2B Companies",
      description: "Optimize complex sales cycles with intelligent automation and insights."
    },
    {
      title: "Startups",
      description: "Build efficient sales processes from day one with AI-driven optimization."
    },
    {
      title: "Remote Sales Teams",
      description: "Maintain productivity and collaboration with AI-powered tools and analytics."
    }
  ];

  return (
    <>
      <SEO 
        title="AI Sales Copilot - Zion Tech Group"
        description="Transform your sales process with AI-powered lead scoring, predictive analytics, and intelligent automation. Increase conversions by 40% and reduce sales cycle time by 30%."
        keywords="AI sales copilot, sales automation, lead scoring, predictive analytics, sales intelligence, CRM optimization"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Sales Copilot
              </h1>
              <p className="text-xl md:text-2xl text-cyan-200 mb-8 max-w-4xl mx-auto">
                Transform your sales process with intelligent automation, predictive analytics, and AI-powered insights that drive revenue growth.
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
                Powerful AI Features
              </h2>
              <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
                Our AI Sales Copilot combines cutting-edge machine learning with proven sales methodologies to deliver exceptional results.
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
                Proven Results
              </h2>
              <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
                Companies using our AI Sales Copilot see measurable improvements across all key sales metrics.
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
                Perfect For Every Business
              </h2>
              <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
                Whether you're a startup or enterprise, our AI Sales Copilot adapts to your needs and scales with your growth.
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
                Ready to Transform Your Sales?
              </h2>
              <p className="text-xl text-cyan-200 mb-8">
                Join hundreds of companies already using AI to revolutionize their sales process.
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

export default AISalesCopilot;