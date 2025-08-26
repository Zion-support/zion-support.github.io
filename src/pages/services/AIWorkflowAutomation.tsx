import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Workflow, 
  Brain, 
  Clock, 
  TrendingUp, 
  Users, 
  Database, 
  Shield,
  Globe,
  Target,
  CheckCircle,
  BarChart3
} from 'lucide-react';

const AIWorkflowAutomation: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Process Analysis",
      description: "Intelligent analysis of existing workflows to identify optimization opportunities and automation potential",
      benefits: ["Process mapping", "Bottleneck identification", "Efficiency scoring", "Automation recommendations"]
    },
    {
      icon: Workflow,
      title: "Intelligent Workflow Design",
      description: "AI-driven workflow design that adapts to business needs and automatically optimizes for performance",
      benefits: ["Dynamic workflows", "Conditional logic", "Exception handling", "Performance optimization"]
    },
    {
      icon: Zap,
      title: "Automated Decision Making",
      description: "AI algorithms that make intelligent decisions based on data, rules, and historical patterns",
      benefits: ["Rule-based decisions", "Machine learning", "Risk assessment", "Compliance checking"]
    },
    {
      icon: Clock,
      title: "Real-time Monitoring",
      description: "Continuous monitoring of workflow performance with instant alerts and proactive optimization",
      benefits: ["Performance tracking", "Real-time alerts", "Predictive maintenance", "KPI monitoring"]
    }
  ];

  const solutions = [
    {
      category: "Document Processing",
      icon: Database,
      solutions: [
        "Automated document classification",
        "Intelligent data extraction",
        "Form processing automation",
        "Document routing and approval",
        "Compliance checking"
      ]
    },
    {
      category: "Customer Service",
      icon: Users,
      solutions: [
        "Ticket routing and prioritization",
        "Automated responses",
        "Customer inquiry handling",
        "Service level monitoring",
        "Customer satisfaction tracking"
      ]
    },
    {
      category: "Financial Operations",
      icon: TrendingUp,
      solutions: [
        "Invoice processing automation",
        "Payment approval workflows",
        "Expense report processing",
        "Budget monitoring",
        "Financial reporting"
      ]
    },
    {
      category: "HR & Recruitment",
      icon: Users,
      solutions: [
        "Resume screening automation",
        "Interview scheduling",
        "Onboarding workflows",
        "Performance review automation",
        "Employee self-service"
      ]
    }
  ];

  const technologies = [
    {
      name: "Machine Learning",
      description: "Advanced ML algorithms for process optimization and decision making",
      icon: Brain
    },
    {
      name: "Robotic Process Automation",
      description: "RPA tools for repetitive task automation",
      icon: Workflow
    },
    {
      name: "Natural Language Processing",
      description: "AI-powered text analysis and document processing",
      icon: Database
    },
    {
      name: "Workflow Engine",
      description: "Scalable workflow orchestration platform",
      icon: Zap
    },
    {
      name: "Real-time Analytics",
      description: "Instant performance monitoring and optimization",
      icon: BarChart3
    },
    {
      name: "API Integration",
      description: "Seamless integration with existing systems",
      icon: Globe
    }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and improve process efficiency by 40-60%",
      icon: TrendingUp
    },
    {
      title: "Cost Reduction",
      description: "Reduce operational costs by 25-35% through automation",
      icon: Target
    },
    {
      title: "Error Reduction",
      description: "Minimize human errors and improve accuracy by 90%+",
      icon: CheckCircle
    },
    {
      title: "Scalability",
      description: "Scale operations without proportional increase in resources",
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mb-6">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-600 bg-clip-text text-transparent">
                AI Workflow Automation
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business processes with intelligent automation that learns, adapts, and optimizes 
              workflows for maximum efficiency and productivity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link
                to="/services-showcase"
                className="border border-orange-400 text-orange-400 px-8 py-3 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300"
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
            Our AI Workflow Automation platform combines artificial intelligence with advanced workflow 
            management to create intelligent, adaptive business processes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
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
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Solutions by Department */}
      <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border-t border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Solutions by Department</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored workflow automation solutions designed to address the unique challenges 
              and processes in different business departments.
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
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                </div>
                
                <ul className="space-y-3">
                  {category.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
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
            AI Workflow Automation delivers measurable results that directly impact your operational 
            efficiency, cost structure, and competitive position.
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
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 text-center hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technology Stack */}
      <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border-t border-orange-500/20">
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
              Built on cutting-edge AI and workflow technologies to ensure scalability, 
              performance, and reliability for enterprise automation.
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
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 text-center hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
            Ready to Automate Your Workflows?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our AI workflow experts help you implement intelligent automation that will 
            transform your business processes and drive operational excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/case-studies"
              className="border border-orange-400 text-orange-400 px-8 py-3 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIWorkflowAutomation;