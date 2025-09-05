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
  Lightbulb
} from 'lucide-react';

const aiServices = [
  {
    title: "AI-Powered Business Intelligence Suite",
    description: "Comprehensive AI analytics platform with real-time insights and predictive modeling",
    icon: Brain,
    features: [
      "Real-time Data Processing",
      "Predictive Analytics",
      "Custom Dashboard Creation",
      "Automated Report Generation",
      "Anomaly Detection",
      "Natural Language Queries"
    ],
    color: "from-purple-500 to-pink-500",
    useCases: [
      "Sales forecasting",
      "Customer behavior analysis",
      "Market trend prediction",
      "Operational efficiency optimization"
    ],
    pricing: "Starting at $299/month",
    contact: "kleber@ziontechgroup.com"
  },
  {
    title: "AI Content Generation & SEO Optimization",
    description: "Automated content creation with AI-powered SEO optimization for maximum visibility",
    icon: MessageSquare,
    features: [
      "AI Content Writing",
      "SEO Optimization",
      "Multi-language Support",
      "Content Strategy Planning",
      "Performance Analytics",
      "Brand Voice Consistency"
    ],
    color: "from-blue-500 to-cyan-500",
    useCases: [
      "Blog content automation",
      "Social media posts",
      "Product descriptions",
      "Marketing copy generation"
    ],
    pricing: "Starting at $199/month",
    contact: "kleber@ziontechgroup.com"
  },
  {
    title: "AI Visual Recognition & Analysis",
    description: "Advanced computer vision solutions for image and video analysis across industries",
    icon: Eye,
    features: [
      "Object Detection & Classification",
      "Facial Recognition",
      "Quality Control Automation",
      "Medical Image Analysis",
      "Security Monitoring",
      "AR/VR Integration"
    ],
    color: "from-green-500 to-emerald-500",
    useCases: [
      "Manufacturing quality control",
      "Security surveillance",
      "Medical diagnosis support",
      "Retail customer analytics"
    ],
    pricing: "Starting at $399/month",
    contact: "kleber@ziontechgroup.com"
  },
  {
    title: "Intelligent Customer Service Automation",
    description: "AI-powered chatbots and virtual assistants with advanced conversational capabilities",
    icon: Bot,
    features: [
      "24/7 Multilingual Support",
      "Context-Aware Conversations",
      "CRM Integration",
      "Voice & Text Interface",
      "Learning & Adaptation",
      "Escalation Management"
    ],
    color: "from-orange-500 to-red-500",
    useCases: [
      "Customer support automation",
      "Lead qualification",
      "Internal helpdesk",
      "E-commerce assistance"
    ],
    pricing: "Starting at $149/month",
    contact: "kleber@ziontechgroup.com"
  },
  {
    title: "AI-Powered Financial Analytics",
    description: "Advanced financial modeling and risk assessment using machine learning algorithms",
    icon: TrendingUp,
    features: [
      "Fraud Detection",
      "Credit Risk Assessment",
      "Algorithmic Trading",
      "Portfolio Optimization",
      "Regulatory Compliance",
      "Real-time Monitoring"
    ],
    color: "from-indigo-500 to-purple-500",
    useCases: [
      "Banking risk management",
      "Investment optimization",
      "Insurance underwriting",
      "Financial forecasting"
    ],
    pricing: "Starting at $499/month",
    contact: "kleber@ziontechgroup.com"
  },
  {
    title: "Smart Process Automation Platform",
    description: "Intelligent automation of complex business processes with AI decision-making",
    icon: Zap,
    features: [
      "Workflow Automation",
      "Document Processing",
      "Email Classification",
      "Task Scheduling",
      "Exception Handling",
      "Process Optimization"
    ],
    color: "from-yellow-500 to-orange-500",
    useCases: [
      "Invoice processing",
      "HR automation",
      "Supply chain optimization",
      "Compliance monitoring"
    ],
    pricing: "Starting at $249/month",
    contact: "kleber@ziontechgroup.com"
  },
  {
    title: "AI-Powered Marketing Intelligence",
    description: "Comprehensive marketing analytics and campaign optimization using AI",
    icon: Target,
    features: [
      "Customer Segmentation",
      "Campaign Optimization",
      "A/B Testing Automation",
      "ROI Prediction",
      "Personalization Engine",
      "Cross-channel Analytics"
    ],
    color: "from-pink-500 to-rose-500",
    useCases: [
      "Marketing campaign optimization",
      "Customer lifetime value prediction",
      "Personalized recommendations",
      "Ad spend optimization"
    ],
    pricing: "Starting at $349/month",
    contact: "kleber@ziontechgroup.com"
  },
  {
    title: "AI Document Processing & Analysis",
    description: "Intelligent document processing with natural language understanding and extraction",
    icon: Database,
    features: [
      "Document Classification",
      "Data Extraction",
      "Contract Analysis",
      "Compliance Checking",
      "Multi-format Support",
      "Batch Processing"
    ],
    color: "from-cyan-500 to-blue-500",
    useCases: [
      "Legal document review",
      "Invoice processing",
      "Contract management",
      "Compliance monitoring"
    ],
    pricing: "Starting at $179/month",
    contact: "kleber@ziontechgroup.com"
  },
  {
    title: "AI-Powered HR & Talent Management",
    description: "Intelligent HR solutions for recruitment, performance management, and employee engagement",
    icon: Users,
    features: [
      "Resume Screening",
      "Candidate Matching",
      "Performance Analytics",
      "Employee Sentiment Analysis",
      "Skills Gap Analysis",
      "Retention Prediction"
    ],
    color: "from-emerald-500 to-teal-500",
    useCases: [
      "Automated recruitment",
      "Performance evaluation",
      "Employee engagement",
      "Talent retention"
    ],
    pricing: "Starting at $229/month",
    contact: "kleber@ziontechgroup.com"
  },
  {
    title: "AI Cybersecurity & Threat Detection",
    description: "Advanced AI-powered security solutions for threat detection and prevention",
    icon: Lock,
    features: [
      "Threat Detection",
      "Anomaly Detection",
      "Behavioral Analysis",
      "Incident Response",
      "Vulnerability Assessment",
      "Security Monitoring"
    ],
    color: "from-red-500 to-pink-500",
    useCases: [
      "Network security monitoring",
      "Malware detection",
      "Insider threat detection",
      "Compliance monitoring"
    ],
    pricing: "Starting at $399/month",
    contact: "kleber@ziontechgroup.com"
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

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
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

                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600">Pricing:</span>
                      <span className="text-lg font-bold text-gray-900">{service.pricing}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">Contact:</span>
                      <a 
                        href={`mailto:${service.contact}`}
                        className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                      >
                        {service.contact}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href="/contact"
                      className={`flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold group-hover:scale-105`}
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a
                      href={`mailto:${service.contact}?subject=Inquiry about ${service.title}`}
                      className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 font-semibold"
                    >
                      Contact
                    </a>
                  </div>
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

      {/* Contact Information Section */}
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
              Get Started Today
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Ready to transform your business with AI? Contact our experts for a personalized consultation and custom solution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our AI experts</p>
              <a 
                href="tel:+13024640950" 
                className="text-blue-600 hover:text-blue-800 font-semibold text-lg"
              >
                +1 (302) 464-0950
              </a>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your requirements</p>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="text-green-600 hover:text-green-800 font-semibold text-lg"
              >
                kleber@ziontechgroup.com
              </a>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">Our headquarters location</p>
              <p className="text-purple-600 font-semibold text-sm">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </p>
            </motion.div>
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