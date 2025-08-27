import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { CheckCircle, ArrowRight, RefreshCw, Target, Users, Zap, Globe, Phone, Mail } from 'lucide-react';
=======
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
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-fff8

const DigitalTransformation: React.FC = () => {
  const transformationServices = [
    {
<<<<<<< HEAD
      title: "Process Automation",
      description: "Streamline operations with intelligent automation solutions",
      features: ["Workflow Automation", "RPA Implementation", "Business Process Optimization", "Efficiency Metrics"],
      icon: "🤖"
    },
    {
      title: "Workflow Optimization",
      description: "Redesign and optimize business workflows for maximum efficiency",
      features: ["Process Mapping", "Bottleneck Analysis", "Workflow Redesign", "Performance Monitoring"],
      icon: "📊"
    },
    {
      title: "Change Management",
      description: "Guide your organization through digital transformation with expert change management",
      features: ["Stakeholder Engagement", "Training Programs", "Communication Strategy", "Success Metrics"],
      icon: "🔄"
    },
    {
      title: "Business Process Optimization",
      description: "Streamline operations and improve efficiency through digital workflows",
      features: ["Process Mapping", "Automation", "Performance Metrics", "Continuous Improvement"],
      icon: "⚡"
    },
    {
      title: "Customer Experience Enhancement",
      description: "Create seamless digital experiences that delight your customers",
      features: ["User Journey Mapping", "Digital Touchpoints", "Personalization", "Feedback Systems"],
      icon: "🎯"
    },
    {
      title: "Data & Analytics Strategy",
      description: "Leverage data insights to drive informed business decisions",
      features: ["Data Collection", "Analytics Platforms", "Business Intelligence", "Predictive Modeling"],
      icon: "📊"
=======
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
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-fff8
    }
  ];

  const benefits = [
    "Increased operational efficiency by 40-60%",
<<<<<<< HEAD
    "Reduced costs through automation and optimization",
    "Improved customer satisfaction and retention",
    "Enhanced decision-making with data-driven insights",
    "Faster time-to-market for new products/services",
    "Better employee productivity and satisfaction"
  ];

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Digital Transformation
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your business with cutting-edge digital solutions that drive growth, 
            efficiency, and competitive advantage in the modern marketplace.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href={`tel:${contactInfo.phone}`}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Started Today
            </a>
            <a 
              href={`mailto:${contactInfo.email}`}
              className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Learn More
            </a>
=======
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
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-fff8
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital transformation solutions designed to modernize your business 
              and position you for long-term success in the digital economy.
=======
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
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-fff8
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformationServices.map((service, index) => (
              <motion.div
                key={index}
<<<<<<< HEAD
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
=======
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
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-fff8
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
<<<<<<< HEAD
=======
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
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-fff8
          </div>
        </div>
      </section>

      {/* Benefits Section */}
<<<<<<< HEAD
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
=======
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-fff8
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<<<<<<< HEAD
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Choose Digital Transformation?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Digital transformation is not just about technology—it's about fundamentally 
              changing how your business operates and delivers value to customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{benefit}</h3>
                </div>
              </motion.div>
            ))}
=======
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
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-fff8
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-12 border border-slate-600"
=======
      <section className="py-20 bg-gradient-to-r from-blue-900 to-cyan-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl font-bold mb-6 text-white"
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-fff8
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<<<<<<< HEAD
=======
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
>>>>>>> cursor/analyze-improve-and-deploy-ziontechgroup-app-fff8
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformation;
