import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  RefreshCw, 
  Target, 
  Users, 
  Zap, 
  Globe, 
  CheckCircle,
  ArrowRight,
  Building2,
  Cpu,
  Database,
  Shield,
  Activity,
  Settings,
  BarChart3,
  Lock,
  Wifi,
  Monitor,
  Brain,
  Rocket,
  TrendingUp
} from 'lucide-react';

const DigitalTransformation: React.FC = () => {
  const transformationServices = [
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Process Automation",
      description: "Streamline operations with intelligent automation solutions that reduce manual work and improve accuracy",
      features: ["Workflow Automation", "RPA Implementation", "Business Process Optimization", "Efficiency Metrics", "Integration Solutions", "Performance Monitoring"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Digital Strategy Development",
      description: "Comprehensive digital strategy aligned with your business objectives and market opportunities",
      features: ["Digital Roadmap", "Technology Assessment", "Market Analysis", "Competitive Positioning", "ROI Planning", "Implementation Timeline"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Change Management",
      description: "Guide your organization through digital transformation with expert change management strategies",
      features: ["Stakeholder Engagement", "Training Programs", "Communication Strategy", "Success Metrics", "Cultural Transformation", "Leadership Development"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Business Process Optimization",
      description: "Streamline operations and improve efficiency through digital workflows and process redesign",
      features: ["Process Mapping", "Bottleneck Analysis", "Workflow Redesign", "Performance Metrics", "Continuous Improvement", "Best Practices"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Customer Experience Enhancement",
      description: "Create seamless digital experiences that delight your customers and drive loyalty",
      features: ["User Journey Mapping", "Digital Touchpoints", "Personalization", "Feedback Systems", "Omnichannel Strategy", "Customer Analytics"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data & Analytics Strategy",
      description: "Leverage data insights to drive informed business decisions and predictive capabilities",
      features: ["Data Collection Strategy", "Analytics Platforms", "Business Intelligence", "Predictive Modeling", "Data Governance", "Insight Delivery"]
    }
  ];

  const benefits = [
    "Increased operational efficiency by 40-60%",
    "Enhanced customer experience and satisfaction scores",
    "Reduced operational costs and waste elimination",
    "Improved decision-making with real-time data insights",
    "Competitive advantage in the digital marketplace",
    "Faster time-to-market for new products and services"
  ];

  const transformationApproach = [
    { 
      step: "Assessment & Discovery", 
      icon: <Target className="w-6 h-6" />, 
      description: "Evaluate current state, identify opportunities, and assess digital maturity" 
    },
    { 
      step: "Strategy Development", 
      icon: <Brain className="w-6 h-6" />, 
      description: "Develop comprehensive transformation roadmap with clear objectives" 
    },
    { 
      step: "Implementation & Execution", 
      icon: <Rocket className="w-6 h-6" />, 
      description: "Execute changes with agile methodology and iterative delivery" 
    },
    { 
      step: "Optimization & Scale", 
      icon: <TrendingUp className="w-6 h-6" />, 
      description: "Continuous improvement, performance optimization, and scaling success" 
    }
  ];

  const technologies = [
    "Cloud Computing & Migration",
    "Artificial Intelligence & Machine Learning",
    "Internet of Things (IoT)",
    "Big Data & Analytics",
    "Mobile & Web Applications",
    "API Integration & Microservices",
    "DevOps & CI/CD",
    "Cybersecurity & Compliance"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-3 bg-blue-600/20 rounded-full">
              <RefreshCw className="h-12 w-12 text-blue-400" />
            </div>
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Digital Transformation
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform your business for the digital age with our comprehensive digital transformation services. 
            Drive innovation, efficiency, and growth through strategic technology adoption.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/request-quote"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg inline-flex items-center gap-2"
            >
              Start Transformation Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Transformation Services */}
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
              Comprehensive Transformation Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our holistic approach to digital transformation covers every aspect of your business, 
              from process optimization to technology modernization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformationServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, borderColor: '#3b82f6' }}
              >
                <div className="text-blue-400 mb-4">
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

      {/* Transformation Approach */}
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
              Our Transformation Approach
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful digital transformation with measurable outcomes 
              and sustainable change.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transformationApproach.map((phase, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-blue-400 mb-4 flex justify-center">
                  {phase.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {phase.step}
                </h3>
                <p className="text-gray-300 text-sm">
                  {phase.description}
                </p>
              </motion.div>
            ))}
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
              Transformation Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience measurable improvements across all aspects of your business operations 
              and customer engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-blue-400" />
                </div>
                <p className="text-lg text-gray-200">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Industries */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Cpu className="w-8 h-8 text-blue-400" />
                Technologies We Leverage
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((technology, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                    <p className="text-gray-200 font-medium text-sm">{technology}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Industries */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Building2 className="w-8 h-8 text-blue-400" />
                Industries We Transform
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                    <p className="text-gray-200 font-medium text-sm">{industry}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-cyan-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how digital transformation can drive innovation, efficiency, and growth 
            for your organization in the digital age.
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
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformation;
