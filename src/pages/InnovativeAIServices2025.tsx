import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import {
  Brain,
  Shield,
  Zap,
  Cloud,
  BarChart3,
  Code,
  Server,
  Chip,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Building2,
  FileText,
  HelpCircle,
  BarChart,
  Settings,
  Palette,
  Rocket,
  Target,
  Handshake,
  Lightbulb,
  Cpu,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  Search,
  Atom,
  ShoppingCart,
  Globe2,
  Network,
  Smartphone,
  Lock,
  Wifi,
  Database,
  Truck
} from 'lucide-react';

// AI Service Categories
const aiServiceCategories = [
  {
    name: "AI-Powered Analytics & Business Intelligence",
    description: "Transform raw data into actionable insights with advanced AI algorithms",
    icon: BarChart3,
    color: "from-blue-500 to-cyan-500",
    services: [
      {
        name: "AI Business Intelligence Platform",
        description: "Advanced analytics with machine learning insights and predictive modeling",
        features: ["Real-time Data Processing", "Predictive Analytics", "Custom Dashboards", "API Integration"],
        pricing: "From $99/month",
        benefits: ["300% faster decision making", "80% reduction in manual reporting", "40% improvement in forecast accuracy"]
      },
      {
        name: "AI Customer Experience Analytics",
        description: "Deep insights into customer behavior and journey optimization",
        features: ["Behavioral Analysis", "Journey Mapping", "Sentiment Analysis", "Personalization Engine"],
        pricing: "From $149/month",
        benefits: ["25% increase in customer satisfaction", "30% improvement in conversion rates", "50% reduction in churn"]
      }
    ]
  },
  {
    name: "AI Development & Automation",
    description: "Intelligent automation solutions that streamline development workflows",
    icon: Code,
    color: "from-green-500 to-emerald-500",
    services: [
      {
        name: "AI Code Generator & Reviewer",
        description: "Automated code generation, review, and security analysis",
        features: ["Code Generation", "Security Review", "Performance Optimization", "Best Practices"],
        pricing: "From $199/month",
        benefits: ["60% faster development", "90% reduction in security vulnerabilities", "Improved code quality"]
      },
      {
        name: "AI DevOps Automation Platform",
        description: "Intelligent CI/CD pipelines with automated testing and deployment",
        features: ["Automated Testing", "Smart Deployment", "Performance Monitoring", "Incident Response"],
        pricing: "From $299/month",
        benefits: ["70% faster deployments", "80% reduction in deployment failures", "24/7 automated monitoring"]
      }
    ]
  },
  {
    name: "AI Cybersecurity & Compliance",
    description: "Next-generation security solutions powered by artificial intelligence",
    icon: Shield,
    color: "from-red-500 to-orange-500",
    services: [
      {
        name: "AI Threat Detection & Response",
        description: "Advanced threat detection with automated response capabilities",
        features: ["Behavioral Analysis", "Threat Hunting", "Automated Response", "Compliance Reporting"],
        pricing: "From $249/month",
        benefits: ["10x faster threat detection", "70% reduction in false positives", "80% automated response"]
      },
      {
        name: "AI Compliance Automation Suite",
        description: "Automated compliance management for SOC2, GDPR, and industry standards",
        features: ["Compliance Monitoring", "Automated Auditing", "Risk Assessment", "Policy Management"],
        pricing: "From $199/month",
        benefits: ["90% reduction in compliance time", "100% audit trail", "Real-time compliance status"]
      }
    ]
  },
  {
    name: "AI Content & Marketing",
    description: "Intelligent content creation and marketing automation solutions",
    icon: FileText,
    color: "from-purple-500 to-pink-500",
    services: [
      {
        name: "AI Content Generator & Optimizer",
        description: "Create, optimize, and distribute content with AI-powered insights",
        features: ["Content Generation", "SEO Optimization", "Multi-platform Publishing", "Performance Analytics"],
        pricing: "From $79/month",
        benefits: ["10x faster content creation", "50% improvement in SEO rankings", "Increased engagement rates"]
      },
      {
        name: "AI Marketing Automation Platform",
        description: "Intelligent marketing campaigns with personalized customer experiences",
        features: ["Campaign Automation", "Personalization Engine", "A/B Testing", "ROI Analytics"],
        pricing: "From $129/month",
        benefits: ["40% increase in conversion rates", "60% reduction in marketing costs", "Improved customer lifetime value"]
      }
    ]
  },
  {
    name: "AI Healthcare & Life Sciences",
    description: "Revolutionary healthcare solutions powered by artificial intelligence",
    icon: Activity,
    color: "from-emerald-500 to-teal-500",
    services: [
      {
        name: "AI Healthcare Analytics Platform",
        description: "Advanced healthcare analytics with predictive diagnostics and treatment optimization",
        features: ["Patient Analytics", "Predictive Diagnostics", "Treatment Optimization", "Clinical Decision Support"],
        pricing: "From $399/month",
        benefits: ["30% improvement in diagnosis accuracy", "25% reduction in treatment costs", "Better patient outcomes"]
      },
      {
        name: "AI Drug Discovery Platform",
        description: "Accelerate drug discovery with machine learning and computational biology",
        features: ["Molecular Modeling", "Target Identification", "Drug Screening", "Clinical Trial Optimization"],
        pricing: "From $999/month",
        benefits: ["10x faster drug discovery", "Reduced development costs", "Higher success rates"]
      }
    ]
  },
  {
    name: "AI Financial Services",
    description: "Intelligent financial solutions for modern banking and investment",
    icon: Coins,
    color: "from-yellow-500 to-orange-500",
    services: [
      {
        name: "AI Trading & Investment Platform",
        description: "Intelligent trading algorithms with risk management and portfolio optimization",
        features: ["Algorithmic Trading", "Risk Management", "Portfolio Optimization", "Market Analysis"],
        pricing: "From $499/month",
        benefits: ["20% improvement in returns", "Reduced trading risks", "Automated portfolio management"]
      },
      {
        name: "AI Fraud Detection & Prevention",
        description: "Advanced fraud detection with real-time monitoring and prevention",
        features: ["Real-time Monitoring", "Behavioral Analysis", "Risk Scoring", "Automated Alerts"],
        pricing: "From $299/month",
        benefits: ["95% fraud detection accuracy", "60% reduction in false positives", "Real-time protection"]
      }
    ]
  }
];

// Industry-Specific AI Solutions
const industryAISolutions = [
  {
    name: "Manufacturing & Industry 4.0",
    icon: Cpu,
    description: "Smart manufacturing solutions with AI-powered optimization and predictive maintenance",
    solutions: [
      "Predictive Maintenance Systems",
      "Quality Control Automation",
      "Supply Chain Optimization",
      "Energy Efficiency Management"
    ],
    pricing: "From $299/month",
    benefits: ["25% reduction in downtime", "30% improvement in quality", "20% energy savings"]
  },
  {
    name: "Retail & E-commerce",
    icon: ShoppingCart,
    description: "AI-powered retail solutions for customer experience and operational efficiency",
    solutions: [
      "Customer Personalization",
      "Inventory Optimization",
      "Demand Forecasting",
      "Dynamic Pricing"
    ],
    pricing: "From $199/month",
    benefits: ["35% increase in sales", "40% reduction in inventory costs", "Improved customer satisfaction"]
  },
  {
    name: "Transportation & Logistics",
    icon: Truck,
    description: "Intelligent logistics solutions with route optimization and fleet management",
    solutions: [
      "Route Optimization",
      "Fleet Management",
      "Predictive Maintenance",
      "Supply Chain Visibility"
    ],
    pricing: "From $249/month",
    benefits: ["20% reduction in fuel costs", "30% improvement in delivery times", "Better resource utilization"]
  },
  {
    name: "Energy & Utilities",
    icon: Zap,
    description: "Smart energy solutions with AI-powered grid optimization and renewable integration",
    solutions: [
      "Grid Optimization",
      "Renewable Energy Integration",
      "Demand Response",
      "Predictive Maintenance"
    ],
    pricing: "From $399/month",
    benefits: ["15% reduction in energy costs", "25% improvement in grid reliability", "Better renewable integration"]
  }
];

// AI Technology Stack
const aiTechnologyStack = [
  {
    category: "Machine Learning",
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "LightGBM"],
    description: "Advanced ML frameworks for model development and training"
  },
  {
    category: "Deep Learning",
    technologies: ["Neural Networks", "CNN", "RNN", "Transformers", "BERT"],
    description: "State-of-the-art deep learning architectures and models"
  },
  {
    category: "Natural Language Processing",
    technologies: ["GPT Models", "BERT", "SpaCy", "NLTK", "Hugging Face"],
    description: "Advanced NLP capabilities for text analysis and generation"
  },
  {
    category: "Computer Vision",
    technologies: ["OpenCV", "TensorFlow Object Detection", "YOLO", "Image Segmentation"],
    description: "Computer vision solutions for image and video analysis"
  },
  {
    category: "Big Data & Analytics",
    technologies: ["Apache Spark", "Hadoop", "Kafka", "Elasticsearch", "Redis"],
    description: "Scalable data processing and analytics infrastructure"
  },
  {
    category: "Cloud AI Services",
    technologies: ["AWS SageMaker", "Azure ML", "Google AI Platform", "IBM Watson"],
    description: "Enterprise-grade cloud AI services and infrastructure"
  }
];

// Animation variants
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

// AI Service Category Component
const AIServiceCategory = ({ category, index }: { category: any; index: number }) => (
  <motion.div
    variants={itemVariants}
    className="group relative"
  >
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/10 hover:-translate-y-2">
      <div className="flex items-center mb-4">
        <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <category.icon className="w-8 h-8 text-white" />
        </div>
        <div className="ml-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
            {category.name}
          </h3>
          <p className="text-slate-300 text-sm">
            {category.description}
          </p>
        </div>
      </div>
      
      <div className="space-y-4">
        {category.services.map((service: any, idx: number) => (
          <div key={idx} className="bg-slate-800/30 rounded-lg p-4 border border-slate-600/20">
            <h4 className="text-lg font-semibold text-white mb-2">{service.name}</h4>
            <p className="text-slate-300 text-sm mb-3">{service.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <div className="text-xs text-slate-400 mb-1">Features:</div>
                <div className="space-y-1">
                  {service.features.slice(0, 2).map((feature: string, fIdx: number) => (
                    <div key={fIdx} className="flex items-center text-xs text-slate-300">
                      <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-1">Benefits:</div>
                <div className="space-y-1">
                  {service.benefits.slice(0, 2).map((benefit: string, bIdx: number) => (
                    <div key={bIdx} className="flex items-center text-xs text-slate-300">
                      <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-cyan-400 text-sm font-medium">{service.pricing}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

// Industry Solution Card Component
const IndustrySolutionCard = ({ solution, index }: { solution: any; index: number }) => (
  <motion.div
    variants={itemVariants}
    className="group"
  >
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/10 hover:-translate-y-2">
      <div className="text-center mb-4">
        <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg">
          <solution.icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
          {solution.name}
        </h3>
        <p className="text-slate-300 text-sm mb-4 leading-relaxed">
          {solution.description}
        </p>
      </div>

      <div className="space-y-2 mb-4">
        {solution.solutions.map((s: string, idx: number) => (
          <div key={idx} className="flex items-center text-xs text-slate-400">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></div>
            {s}
          </div>
        ))}
      </div>

      <div className="space-y-2 mb-4">
        {solution.benefits.map((benefit: string, idx: number) => (
          <div key={idx} className="flex items-center text-xs text-slate-300">
            <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
            {benefit}
          </div>
        ))}
      </div>

      <div className="text-center">
        <div className="text-emerald-400 text-sm font-medium">{solution.pricing}</div>
      </div>
    </div>
  </motion.div>
);

// Technology Stack Component
const TechnologyStack = ({ tech, index }: { tech: any; index: number }) => (
  <motion.div
    variants={itemVariants}
    className="group"
  >
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/10">
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
        {tech.category}
      </h3>
      <p className="text-slate-300 text-sm mb-4">
        {tech.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tech.technologies.map((technology: string, idx: number) => (
          <span
            key={idx}
            className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30"
          >
            {technology}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

// Contact Information Component
const ContactInfo = () => (
  <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8">
    <h3 className="text-2xl font-bold text-white mb-6 text-center">Get in Touch</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="flex items-center space-x-3">
        <Phone className="h-6 w-6 text-cyan-400" />
        <div>
          <div className="text-white font-medium">Phone</div>
          <div className="text-slate-300">+1 302 464 0950</div>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <Mail className="h-6 w-6 text-cyan-400" />
        <div>
          <div className="text-white font-medium">Email</div>
          <div className="text-slate-300">kleber@ziontechgroup.com</div>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <MapPin className="h-6 w-6 text-cyan-400" />
        <div>
          <div className="text-white font-medium">Address</div>
          <div className="text-slate-300">364 E Main St STE 1008<br />Middletown DE 19709</div>
        </div>
      </div>
    </div>
  </div>
);

// Main Component
const InnovativeAIServices2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <>
      <SEO 
        title="Innovative AI Services 2025 - Zion Tech Group"
        description="Discover Zion Tech Group's cutting-edge AI services including machine learning, natural language processing, computer vision, and industry-specific AI solutions. Transform your business with intelligent automation."
        keywords="AI services, machine learning, natural language processing, computer vision, AI automation, AI consulting, Zion Tech Group"
        canonical="https://ziontechgroup.com/innovative-ai-services-2025"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Innovative <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI Services 2025</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                Transform your business with cutting-edge artificial intelligence solutions designed for the future
              </p>
            </motion.div>

            {/* Tab Navigation */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {['all', 'analytics', 'development', 'cybersecurity', 'content', 'healthcare', 'financial'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white'
                  }`}
                >
                  {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* AI Service Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Service Categories
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to address every aspect of modern business challenges
              </p>
            </motion.div>

            <motion.div 
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {aiServiceCategories.map((category, index) => (
                <AIServiceCategory key={category.name} category={category} index={index} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Industry-Specific AI Solutions */}
        <section className="py-20 bg-gradient-to-b from-white/5 to-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry-Specific AI Solutions
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Tailored AI solutions designed for specific industry challenges and requirements
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {industryAISolutions.map((solution, index) => (
                <IndustrySolutionCard key={solution.name} solution={solution} index={index} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* AI Technology Stack */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Technology Stack
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Built on cutting-edge technologies and frameworks for maximum performance and scalability
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {aiTechnologyStack.map((tech, index) => (
                <TechnologyStack key={tech.category} tech={tech} index={index} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Contact our AI experts to discuss how our innovative solutions can drive your success
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactInfo />
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose Our AI Services?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-white font-medium">Expert AI Team</div>
                        <div className="text-slate-300 text-sm">PhD-level AI researchers and engineers with 10+ years of experience</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-white font-medium">Cutting-Edge Technology</div>
                        <div className="text-slate-300 text-sm">Latest AI frameworks and methodologies for optimal performance</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-white font-medium">Custom Solutions</div>
                        <div className="text-slate-300 text-sm">Tailored AI solutions designed for your specific business needs</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-white font-medium">Proven Results</div>
                        <div className="text-slate-300 text-sm">Track record of successful AI implementations with measurable ROI</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 text-lg shadow-lg hover:shadow-xl"
                  >
                    Schedule AI Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InnovativeAIServices2025;