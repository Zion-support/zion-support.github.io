import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Brain, 
  Cpu, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Globe, 
  Award,
  Database,
  Lock,
  Smartphone,
  Bot,
  TrendingUp,
  Target,
  Lightbulb,
  Shield,
  PenTool
} from 'lucide-react';

const aiServices = [
  {
    title: "Machine Learning Solutions",
    description: "Custom ML models tailored to your business needs and data patterns",
    icon: Brain,
    features: [
      "Predictive Analytics",
      "Pattern Recognition",
      "Automated Decision Making",
      "Real-time Processing",
      "Model Training & Optimization",
      "Continuous Learning"
    ],
    color: "from-purple-500 to-pink-500",
    useCases: [
      "Customer behavior prediction",
      "Sales forecasting",
      "Risk assessment",
      "Quality control automation"
    ]
  },
  {
    title: "Natural Language Processing",
    description: "Advanced text analysis and language understanding capabilities",
    icon: MessageSquare,
    features: [
      "Sentiment Analysis",
      "Text Classification",
      "Language Translation",
      "Chatbot Development",
      "Document Processing",
      "Voice Recognition"
    ],
    color: "from-blue-500 to-cyan-500",
    useCases: [
      "Customer support automation",
      "Content moderation",
      "Document analysis",
      "Multilingual support"
    ]
  },
  {
    title: "Computer Vision",
    description: "Image and video analysis powered by advanced AI algorithms",
    icon: Eye,
    features: [
      "Object Detection",
      "Image Classification",
      "Facial Recognition",
      "Medical Imaging",
      "Quality Inspection",
      "Augmented Reality"
    ],
    color: "from-green-500 to-emerald-500",
    useCases: [
      "Automated quality control",
      "Security monitoring",
      "Medical diagnosis support",
      "Retail analytics"
    ]
  },
  {
    title: "AI Chatbots & Virtual Assistants",
    description: "Intelligent conversational agents for customer engagement",
    icon: Bot,
    features: [
      "24/7 Customer Support",
      "Multi-language Support",
      "Context Awareness",
      "Integration with CRM",
      "Voice & Text Interface",
      "Learning from Interactions"
    ],
    color: "from-orange-500 to-red-500",
    useCases: [
      "Customer service automation",
      "Lead qualification",
      "Internal helpdesk",
      "E-commerce assistance"
    ]
  },
  {
    title: "Predictive Analytics",
    description: "Data-driven insights and forecasting for business intelligence",
    icon: TrendingUp,
    features: [
      "Demand Forecasting",
      "Risk Prediction",
      "Market Analysis",
      "Performance Optimization",
      "Anomaly Detection",
      "Trend Analysis"
    ],
    color: "from-indigo-500 to-purple-500",
    useCases: [
      "Inventory management",
      "Financial risk assessment",
      "Market trend analysis",
      "Operational optimization"
    ]
  },
  {
    title: "Process Automation",
    description: "Intelligent automation of business processes and workflows",
    icon: Zap,
    features: [
      "Workflow Automation",
      "Document Processing",
      "Data Entry Automation",
      "Email Classification",
      "Task Scheduling",
      "Exception Handling"
    ],
    color: "from-yellow-500 to-orange-500",
    useCases: [
      "Invoice processing",
      "HR automation",
      "Supply chain optimization",
      "Compliance monitoring"
    ]
  },
  {
    title: "Quantum AI Computing",
    description: "Next-generation quantum-enhanced AI for complex optimization and machine learning problems",
    icon: Cpu,
    features: [
      "Quantum Machine Learning",
      "Optimization Algorithms",
      "Quantum Neural Networks",
      "Cryptographic Security",
      "Parallel Processing",
      "Advanced Simulations"
    ],
    color: "from-violet-500 to-purple-500",
    useCases: [
      "Financial portfolio optimization",
      "Drug discovery acceleration",
      "Climate modeling",
      "Cryptocurrency mining optimization"
    ],
    pricing: "Starting at $5,000/month for quantum computing access",
    marketRate: "$3,000-10,000/month"
  },
  {
    title: "Autonomous AI Systems",
    description: "Self-managing AI systems that operate independently with minimal human intervention",
    icon: Bot,
    features: [
      "Self-Learning Algorithms",
      "Autonomous Decision Making",
      "Adaptive Behavior",
      "Self-Healing Systems",
      "Continuous Optimization",
      "Predictive Maintenance"
    ],
    color: "from-cyan-500 to-blue-500",
    useCases: [
      "Autonomous vehicles",
      "Smart city management",
      "Industrial automation",
      "Autonomous trading systems"
    ],
    pricing: "Starting at $2,500/month for autonomous system deployment",
    marketRate: "$1,500-5,000/month"
  },
  {
    title: "AI Cybersecurity Intelligence",
    description: "Advanced AI-powered cybersecurity solutions with real-time threat detection and response",
    icon: Shield,
    features: [
      "Real-time Threat Detection",
      "Behavioral Analysis",
      "Automated Response",
      "Zero-day Attack Prevention",
      "Network Anomaly Detection",
      "Incident Response Automation"
    ],
    color: "from-red-500 to-rose-500",
    useCases: [
      "Enterprise security monitoring",
      "Financial fraud prevention",
      "Government cybersecurity",
      "Critical infrastructure protection"
    ],
    pricing: "Starting at $1,200/month for enterprise security",
    marketRate: "$800-3,000/month"
  },
  {
    title: "AI Content Generation Studio",
    description: "Comprehensive AI content creation platform for text, images, video, and multimedia",
    icon: PenTool,
    features: [
      "Multi-modal Content Creation",
      "Brand Voice Consistency",
      "SEO Optimization",
      "Multi-language Support",
      "Content Personalization",
      "Automated Publishing"
    ],
    color: "from-pink-500 to-rose-500",
    useCases: [
      "Marketing content creation",
      "Educational material generation",
      "Social media automation",
      "Multilingual content production"
    ],
    pricing: "Starting at $299/month for unlimited content generation",
    marketRate: "$150-500/month"
  },
  {
    title: "AI Financial Trading Systems",
    description: "Advanced AI-powered trading algorithms with real-time market analysis and execution",
    icon: TrendingUp,
    features: [
      "Real-time Market Analysis",
      "Algorithmic Trading",
      "Risk Management",
      "Portfolio Optimization",
      "Sentiment Analysis",
      "High-frequency Trading"
    ],
    color: "from-emerald-500 to-green-500",
    useCases: [
      "Algorithmic trading",
      "Portfolio management",
      "Risk assessment",
      "Market prediction"
    ],
    pricing: "Starting at $3,500/month for trading system access",
    marketRate: "$2,000-8,000/month"
  },
  {
    title: "AI Supply Chain Optimization",
    description: "Intelligent supply chain management with predictive analytics and autonomous optimization",
    icon: Globe,
    features: [
      "Demand Forecasting",
      "Supplier Optimization",
      "Route Optimization",
      "Inventory Management",
      "Risk Assessment",
      "Sustainability Tracking"
    ],
    color: "from-teal-500 to-cyan-500",
    useCases: [
      "Global supply chain optimization",
      "Logistics management",
      "Supplier relationship management",
      "Sustainability compliance"
    ],
    pricing: "Starting at $1,800/month for supply chain optimization",
    marketRate: "$1,000-4,000/month"
  },
  {
    title: "AI Healthcare Diagnostics",
    description: "Advanced medical AI for diagnostic imaging, patient monitoring, and treatment recommendations",
    icon: Users,
    features: [
      "Medical Image Analysis",
      "Diagnostic Assistance",
      "Patient Risk Assessment",
      "Treatment Recommendations",
      "Drug Interaction Analysis",
      "Clinical Decision Support"
    ],
    color: "from-blue-500 to-indigo-500",
    useCases: [
      "Radiology image analysis",
      "Pathology diagnosis",
      "Patient monitoring",
      "Treatment planning"
    ],
    pricing: "Starting at $2,200/month for healthcare AI platform",
    marketRate: "$1,500-5,000/month"
  }
];

const industries = [
  {
    name: "Healthcare",
    icon: Users,
    description: "AI-powered diagnostics, patient monitoring, and treatment optimization",
    applications: ["Medical imaging analysis", "Drug discovery", "Patient risk assessment", "Treatment recommendations"]
  },
  {
    name: "Finance",
    icon: BarChart3,
    description: "Fraud detection, algorithmic trading, and risk management",
    applications: ["Credit scoring", "Fraud prevention", "Algorithmic trading", "Regulatory compliance"]
  },
  {
    name: "Retail",
    icon: Globe,
    description: "Personalized recommendations, inventory optimization, and customer analytics",
    applications: ["Recommendation engines", "Price optimization", "Demand forecasting", "Customer segmentation"]
  },
  {
    name: "Manufacturing",
    icon: Cpu,
    description: "Quality control, predictive maintenance, and supply chain optimization",
    applications: ["Quality inspection", "Predictive maintenance", "Supply chain optimization", "Production planning"]
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description: "We analyze your business needs, data sources, and current processes to identify AI opportunities."
  },
  {
    step: "02",
    title: "Data Preparation",
    description: "Our team cleans, processes, and prepares your data for AI model training and deployment."
  },
  {
    step: "03",
    title: "Model Development",
    description: "We develop custom AI models using state-of-the-art algorithms and machine learning techniques."
  },
  {
    step: "04",
    title: "Testing & Validation",
    description: "Rigorous testing ensures our AI solutions meet your accuracy and performance requirements."
  },
  {
    step: "05",
    title: "Deployment & Integration",
    description: "We deploy your AI solution and integrate it seamlessly with your existing systems."
  },
  {
    step: "06",
    title: "Monitoring & Optimization",
    description: "Continuous monitoring and optimization ensure your AI solution performs at its best."
  }
];

const benefits = [
  {
    icon: Target,
    title: "Increased Efficiency",
    description: "Automate repetitive tasks and processes to boost productivity by up to 40%"
  },
  {
    icon: TrendingUp,
    title: "Better Decision Making",
    description: "Data-driven insights help you make informed decisions faster and more accurately"
  },
  {
    icon: Users,
    title: "Enhanced Customer Experience",
    description: "Personalized interactions and 24/7 support improve customer satisfaction"
  },
  {
    icon: Lightbulb,
    title: "Competitive Advantage",
    description: "Stay ahead of the competition with cutting-edge AI capabilities"
  }
];

export default function AIServicesPage() {
  return (
    <Layout
      title="AI Services - Zion Tech Group"
      description="Transform your business with cutting-edge AI solutions including machine learning, NLP, computer vision, and intelligent automation. Expert AI consulting and implementation."
      keywords="AI services, machine learning, NLP, computer vision, AI consulting, artificial intelligence, automation"
    >

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations, 
              enhance customer experiences, and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Get AI Consultation
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our AI Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive AI services designed to address your specific business challenges 
              and unlock new opportunities for growth and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  {service.pricing && (
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-600">Our Pricing:</span>
                        <span className="text-lg font-bold text-gray-900">{service.pricing}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-600">Market Rate:</span>
                        <span className="text-sm text-gray-500">{service.marketRate}</span>
                      </div>
                    </div>
                  )}

                  <Link
                    href="/contact"
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold group-hover:scale-105`}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Our AI solutions are tailored to meet the unique challenges and opportunities 
              across various industries and sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {industry.description}
                  </p>
                </div>
                
                <ul className="space-y-2">
                  {industry.applications.map((application, appIndex) => (
                    <li key={appIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {application}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Our AI solutions deliver measurable results and provide a competitive edge for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our AI Development Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              A systematic approach to AI development that ensures successful implementation and maximum value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your AI needs and create a custom solution that drives real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              >
                Start Your AI Journey
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}