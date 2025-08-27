import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  Brain, 
  TrendingUp, 
  BarChart3, 
  Target, 
  Zap, 
  Shield, 
  Users, 
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Lightbulb
} from 'lucide-react';

const AIBusinessIntelligence: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Predictive Analytics",
      description: "Advanced machine learning algorithms that forecast trends and identify opportunities before they emerge."
    },
    {
      icon: BarChart3,
      title: "Real-time Dashboards",
      description: "Interactive visualizations that provide instant insights into your business performance and KPIs."
    },
    {
      icon: Target,
      title: "Intelligent Forecasting",
      description: "AI-powered forecasting models that help you make data-driven decisions with confidence."
    },
    {
      icon: Zap,
      title: "Automated Insights",
      description: "Automatically discover patterns, anomalies, and actionable insights from your data."
    }
  ];

  const benefits = [
    "Increase revenue by 15-25% through predictive insights",
    "Reduce operational costs by 20-30% with automated analytics",
    "Improve decision-making speed by 60%",
    "Enhance customer satisfaction through personalized insights",
    "Identify new market opportunities faster than competitors"
  ];

  const useCases = [
    {
      industry: "Retail",
      description: "Customer behavior analysis, inventory optimization, and demand forecasting"
    },
    {
      industry: "Finance",
      description: "Risk assessment, fraud detection, and investment portfolio optimization"
    },
    {
      industry: "Healthcare",
      description: "Patient outcome prediction, resource allocation, and treatment optimization"
    },
    {
      industry: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/20 via-zion-purple/20 to-zion-cyan/20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/10 border border-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Intelligence
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Business Intelligence
            </h1>
            
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Transform your business data into actionable intelligence with our advanced AI-powered analytics platform. 
              Discover hidden patterns, predict future trends, and make data-driven decisions with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300"
              >
                Watch Demo
              </motion.button>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our AI Business Intelligence platform combines cutting-edge technology with intuitive design
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Proven Benefits
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Join thousands of businesses that have transformed their operations with AI-powered insights
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                <p className="text-zion-slate-light text-lg">{benefit}</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our AI Business Intelligence solutions are designed for diverse industries and use cases
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-zion-cyan mb-3">{useCase.industry}</h3>
                <p className="text-zion-slate-light">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-blue/20 to-zion-purple/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Start your AI Business Intelligence journey today and unlock the full potential of your data
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Request Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIBusinessIntelligence;
=======
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Activity, Target, Users, Database, Zap, Brain, Globe, Shield, Clock } from 'lucide-react';
const AIBusinessIntelligence = () => {
    const features = [
        {
            icon: Brain,
            title: "AI-Powered Analytics",
            description: "Advanced machine learning algorithms that automatically identify patterns, trends, and insights from your data",
            benefits: ["Predictive modeling", "Anomaly detection", "Pattern recognition", "Automated insights"]
        },
        {
            icon: BarChart3,
            title: "Real-time Dashboards",
            description: "Interactive, customizable dashboards that provide instant visibility into key business metrics",
            benefits: ["Live data updates", "Customizable views", "Role-based access", "Mobile responsive"]
        },
        {
            icon: TrendingUp,
            title: "Predictive Analytics",
            description: "Forecast future trends and outcomes using historical data and advanced statistical models",
            benefits: ["Sales forecasting", "Demand planning", "Risk assessment", "Trend prediction"]
        },
        {
            icon: Target,
            title: "Performance Tracking",
            description: "Monitor and measure business performance against goals and benchmarks in real-time",
            benefits: ["KPI monitoring", "Goal tracking", "Benchmarking", "Performance alerts"]
        }
    ];
    const solutions = [
        {
            category: "Sales & Marketing",
            icon: Users,
            solutions: [
                "Customer behavior analysis",
                "Lead scoring and qualification",
                "Campaign performance optimization",
                "Market trend analysis",
                "Customer lifetime value prediction"
            ]
        },
        {
            category: "Operations & Supply Chain",
            icon: Activity,
            solutions: [
                "Inventory optimization",
                "Supply chain risk assessment",
                "Operational efficiency analysis",
                "Quality control monitoring",
                "Resource allocation optimization"
            ]
        },
        {
            category: "Financial Analytics",
            icon: TrendingUp,
            solutions: [
                "Revenue forecasting",
                "Cost analysis and optimization",
                "Profitability analysis",
                "Cash flow prediction",
                "Investment decision support"
            ]
        },
        {
            category: "Human Resources",
            icon: Users,
            solutions: [
                "Employee performance analytics",
                "Talent acquisition insights",
                "Workforce planning",
                "Employee retention prediction",
                "Training effectiveness analysis"
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
            name: "Big Data Processing",
            description: "Scalable data processing for large datasets",
            icon: Database
        },
        {
            name: "Real-time Analytics",
            description: "Instant data processing and insights delivery",
            icon: Zap
        },
        {
            name: "Cloud Infrastructure",
            description: "Scalable cloud-based BI platform",
            icon: Globe
        },
        {
            name: "Data Security",
            description: "Enterprise-grade security and compliance",
            icon: Shield
        },
        {
            name: "24/7 Monitoring",
            description: "Continuous monitoring and alerting",
            icon: Clock
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
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"/>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-6">
              <TrendingUp className="w-10 h-10 text-white"/>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                AI Business Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business data into actionable insights with our AI-powered business intelligence platform. 
              Make data-driven decisions with confidence using advanced analytics and predictive modeling.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                Get Started
              </Link>
              <Link to="/services-showcase" className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Key Features</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI Business Intelligence platform combines cutting-edge technology with intuitive design 
            to deliver powerful insights that drive business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (<motion.div key={feature.title} variants={itemVariants} className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white"/>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
              
              <div className="ml-16">
                <h4 className="text-sm font-medium text-gray-300 mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (<li key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {benefit}
                    </li>))}
                </ul>
              </div>
            </motion.div>))}
        </div>
      </div>

      {/* Solutions by Industry */}
      <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Solutions by Industry</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored AI Business Intelligence solutions designed to address the unique challenges 
              and opportunities in your industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((category, index) => (<motion.div key={category.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-white"/>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                </div>
                
                <ul className="space-y-3">
                  {category.solutions.map((solution, idx) => (<li key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {solution}
                    </li>))}
                </ul>
              </motion.div>))}
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Technology Stack</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built on cutting-edge technologies to ensure scalability, performance, and reliability 
            for enterprise-grade business intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (<motion.div key={tech.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 text-center hover:border-blue-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <tech.icon className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
              <p className="text-gray-400 text-sm">{tech.description}</p>
            </motion.div>))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business Intelligence?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our AI experts help you implement a comprehensive business intelligence solution 
              that will drive growth and competitive advantage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                Schedule Consultation
              </Link>
              <Link to="/case-studies" className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>);
};
export default AIBusinessIntelligence;
>>>>>>> b8c9a46dfc3f9de0b3a990cc62e9bddf78309e52
