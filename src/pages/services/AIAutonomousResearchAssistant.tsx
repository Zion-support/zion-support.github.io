import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Search, 
  BookOpen, 
  FileText, 
  TrendingUp, 
  Users, 
  Globe, 
  Cpu,
  Database,
  Lock,
  BarChart3,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Clock,
  Award,
  Target,
  Workflow,
  Lightbulb,
  Zap,
  Shield,
  Eye,
  Code,
  GitFork,
  MessageCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AIAutonomousResearchAssistant() {
  const features = [
    { icon: Brain,
      title: "Autonomous Research Discovery",
      description: "AI that independently discovers, analyzes, and synthesizes research from multiple sources"
    },
    { icon: Search,
      title: "Intelligent Literature Review",
      description: "Automated systematic literature reviews with comprehensive coverage and analysis"
    },
    { icon: FileText,
      title: "Research Paper Generation",
      description: "AI-powered research paper writing with proper citations and academic standards"
    },
    { icon: TrendingUp,
      title: "Trend Analysis & Prediction",
      description: "Identify emerging research trends and predict future research directions"
    },
    { icon: Database,
      title: "Multi-Source Data Integration",
      description: "Seamlessly integrate data from academic databases, journals, and research repositories"
    },
    { icon: Workflow,
      title: "Research Workflow Automation",
      description: "Automate repetitive research tasks and streamline the research process"
    }
  ];

  const pricingTiers = [
    { name: "Research Starter",
      price: "$299",
      period: "monthly",
      description: "Perfect for individual researchers and small research teams",
      features: [
        "Up to 100 research queries per month",
        "Basic literature review generation",
        "Standard citation management",
        "Email support",
        "Basic research analytics",
        "Access to major academic databases"
      ],
      bestFor: "Individual researchers, graduate students, small research teams"
    },
    { name: "Research Professional",
      price: "$799",
      period: "monthly",
      description: "Advanced features for growing research organizations",
      features: [
        "Up to 1,000 research queries per month",
        "Advanced literature review generation",
        "Custom research workflows",
        "Priority support",
        "Advanced analytics and reporting",
        "API access",
        "Custom research templates",
        "Collaborative research tools"
      ],
      bestFor: "Research institutions, universities, corporate R&D teams"
    },
    { name: "Research Enterprise",
      price: "$1,999",
      period: "monthly",
      description: "Full-scale research automation platform for large organizations",
      features: [
        "Unlimited research queries",
        "Custom research algorithm development",
        "Advanced AI model training",
        "24/7 dedicated support",
        "Custom integrations",
        "White-label solutions",
        "On-premise deployment options",
        "Research consulting services"
      ],
      bestFor: "Large research institutions, government agencies, pharmaceutical companies"
    }
  ];

  const useCases = [
    { title: "Academic Research",
      description: "Automated literature reviews, research gap analysis, and academic paper generation",
      icon: BookOpen
    },
    { title: "Market Research",
      description: "Competitive analysis, market trend identification, and industry insights",
      icon: TrendingUp
    },
    { title: "Scientific Discovery",
      description: "Cross-disciplinary research connections and hypothesis generation",
      icon: Lightbulb
    },
    { title: "Patent Research",
      description: "Patent landscape analysis and prior art research automation",
      icon: Shield
    },
    { title: "Clinical Research",
      description: "Medical literature analysis and clinical trial research automation",
      icon: Eye
    },
    { title: "Policy Research",
      description: "Government policy analysis and regulatory research automation",
      icon: Globe
    }
  ];

  const benefits = [
    "10x faster research completion time",
    "Comprehensive coverage of research sources",
    "Automated citation management and formatting",
    "Real-time research trend analysis",
    "Collaborative research workflow optimization",
    "Access to cutting-edge AI research tools"
  ];

  const researchCapabilities = [
    { title: "Natural Language Processing",
      description: "Advanced NLP for understanding complex research documents and generating insights",
      icon: Brain
    },
    { title: "Machine Learning Analysis",
      description: "ML algorithms for pattern recognition and predictive research analytics",
      icon: Cpu
    },
    { title: "Semantic Search",
      description: "Intelligent search that understands context and meaning, not just keywords",
      icon: Search
    },
    { title: "Data Visualization",
      description: "Interactive charts and graphs for research findings presentation",
      icon: BarChart3
    },
    { title: "Citation Network Analysis",
      description: "Map research influence and identify key papers in  field",
      icon: GitFork
    },
    { title: "Research Quality Assessment",
      description: "AI-powered evaluation of research methodology and credibility",
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEO 
        title="AI Autonomous Research Assistant - Zion Tech Group"
        description="Revolutionary AI-powered research automation platform that discovers, analyzes, and synthesizes research autonomously."
        keywords="AI research assistant, research automation, literature review, academic research, research AI, autonomous research"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8     }}
            className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Revolutionary Research AI Technology
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous Research Assistant
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your research process with our revolutionary AI-powered research assistant. 
              Automate literature reviews, discover insights, and accelerate your research breakthroughs.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
              Start Researching
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center px-8 py-4 border border-blue-500 text-blue-300 hover:bg-blue-500/20 font-semibold rounded-lg transition-colors">
              Request Demo
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8     }}
            viewport={{ once: true     }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Revolutionary Research AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI research assistant combines cutting-edge artificial intelligence with 
              comprehensive research capabilities to revolutionize how you discover knowledge.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true     }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8     }}
            viewport={{ once: true     }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced Research Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage state-of-the-art AI technologies to enhance every aspect of your research process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true     }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <capability.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8     }}
            viewport={{ once: true     }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transparent Research AI Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your research needs with our transparent, 
              enterprise-grade pricing structure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true     }}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${
                  index === 1 ? 'border-blue-500/50 bg-blue-500/10' : 'border-white/10'
                } hover:border-blue-500/50 transition-all`}
              >
                {index === 1 && (
                  <div className="inline-flex items-center px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full mb-4">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-400">/{tier.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{tier.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-sm text-gray-400 mb-6">
                  <strong>Best for:</strong> {tier.bestFor}
                </div>
                
                <a
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                    index === 1
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8     }}
            viewport={{ once: true     }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Revolutionary Research Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our AI research assistant is transforming research across 
              industries and accelerating breakthrough discoveries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true     }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8     }}
            viewport={{ once: true     }}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our AI Research Assistant?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented research efficiency and discovery capabilities 
              with our cutting-edge AI research automation technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true     }}
                className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                </div>
                <p className="text-lg text-gray-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8     }}
            viewport={{ once: true     }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Your Research?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the AI research revolution and accelerate your discoveries 
              with our autonomous research assistant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                Start Researching with AI
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-blue-500 text-blue-300 hover:bg-blue-500/20 font-semibold rounded-lg transition-colors">
                <Phone className="mr-2 w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}