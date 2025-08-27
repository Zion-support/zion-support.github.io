import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cpu, 
  Database, 
  Shield, 
  Users, 
  TrendingUp, 
  Globe,
  CheckCircle,
  ArrowRight,
  Building2,
  Zap,
  Activity,
  Settings,
  BarChart3,
  Lock,
  Wifi,
  Monitor,
  Rocket,
  Target
} from 'lucide-react';

const AIServices: React.FC = () => {
  const aiServices = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Strategy & Consulting",
      description: "Comprehensive AI strategy development and implementation roadmap aligned with business objectives",
      features: ["AI Readiness Assessment", "Strategy Development", "Implementation Roadmap", "ROI Analysis", "Change Management", "Success Metrics"]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Machine Learning Solutions",
      description: "Custom ML models and algorithms designed to solve specific business problems and drive insights",
      features: ["Custom Model Development", "Algorithm Selection", "Training & Validation", "Model Deployment", "Performance Monitoring", "Continuous Learning"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Analytics & AI",
      description: "Advanced analytics powered by artificial intelligence for deeper business insights and predictions",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Anomaly Detection", "Pattern Recognition", "Real-time Analytics"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI Ethics & Governance",
      description: "Responsible AI development with ethical frameworks and governance structures",
      features: ["Ethical AI Guidelines", "Bias Detection", "Transparency", "Accountability", "Compliance", "Risk Assessment"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "AI-Powered Automation",
      description: "Intelligent automation solutions that streamline operations and improve efficiency",
      features: ["Process Automation", "Intelligent Workflows", "Decision Automation", "Predictive Maintenance", "Quality Control", "Resource Optimization"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "AI Integration Services",
      description: "Seamless integration of AI capabilities into existing systems and workflows",
      features: ["API Integration", "System Integration", "Data Pipeline Setup", "Legacy System Modernization", "Scalability Planning", "Performance Optimization"]
    }
  ];

  const benefits = [
    "Increased operational efficiency by 40-70%",
    "Enhanced customer insights and personalization",
    "Automated decision-making processes",
    "Competitive advantage through AI innovation",
    "Scalable AI solutions that grow with your business",
    "Improved accuracy and reduced human error"
  ];

  const useCases = [
    {
      title: "Customer Experience",
      description: "AI-powered chatbots, recommendation engines, and personalized experiences",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Operations & Supply Chain",
      description: "Predictive maintenance, demand forecasting, and optimization",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Financial Services",
      description: "Fraud detection, risk assessment, and algorithmic trading",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Healthcare & Life Sciences",
      description: "Medical imaging analysis, drug discovery, and patient care",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Manufacturing",
      description: "Quality control, predictive maintenance, and process optimization",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      title: "Marketing & Sales",
      description: "Lead scoring, campaign optimization, and customer segmentation",
      icon: <Target className="w-6 h-6" />
    }
  ];

  const technologies = [
    "Machine Learning (ML)",
    "Deep Learning & Neural Networks",
    "Natural Language Processing (NLP)",
    "Computer Vision",
    "Robotic Process Automation (RPA)",
    "Predictive Analytics",
    "Big Data Processing",
    "Cloud AI Platforms"
  ];

  const industries = [
    "Financial Services & Banking",
    "Healthcare & Life Sciences",
    "Manufacturing & Industry 4.0",
    "Retail & E-commerce",
    "Energy & Utilities",
    "Transportation & Logistics"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-3 bg-purple-600/20 rounded-full">
              <Brain className="h-12 w-12 text-purple-400" />
            </div>
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AI Services for Innovation
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Harness the power of artificial intelligence to transform your business operations, 
            enhance customer experiences, and drive innovation across all departments.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/request-quote"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-lg inline-flex items-center gap-2"
            >
>>>>>>> a4a522bebff354a39d8989949882ddf2ed4fa924
              Start Your AI Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From strategy development to implementation, we provide end-to-end AI services 
              that drive measurable business outcomes and competitive advantage.
            </p>
          </motion.div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, borderColor: '#a855f7' }}
              >
                <div className="text-purple-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              AI Applications Across Industries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI is transforming industries and creating new possibilities 
              for businesses worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, borderColor: '#a855f7' }}
              >
                <div className="text-purple-400 mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
>>>>>>> a4a522bebff354a39d8989949882ddf2ed4fa924
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI technology delivers measurable benefits that can transform your business operations 
              and create sustainable competitive advantages.
            </p>
          </motion.div>


          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Embrace AI?
          </motion.h2>
          <motion.p 
            className="text-xl text-purple-100 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how artificial intelligence can transform your business operations, 
            enhance customer experiences, and drive innovation for sustainable growth.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/request-quote"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Start AI Implementation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>);
};
export default AIServices;
