import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain, 
  Zap, 
  TrendingUp, 
  Users, 
  BarChart3,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
  Play,
  Shield,
  Cloud,
  Bot,
  Mail,
  Phone,
  Calendar,
  FileText,
  Settings
} from 'lucide-react';

const AIBusinessAutomation: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  const automationFeatures = [
    {
      icon: Bot,
      title: "Intelligent Chatbots",
      description: "AI-powered customer service bots that handle 80% of inquiries automatically",
      benefits: ["24/7 availability", "Instant responses", "Multi-language support", "Seamless handoff to humans"]
    },
    {
      icon: Mail,
      title: "Email Automation",
      description: "Smart email campaigns that adapt based on customer behavior and preferences",
      benefits: ["Personalized content", "Optimal send times", "A/B testing", "Performance analytics"]
    },
    {
      icon: Phone,
      title: "Call Center Automation",
      description: "AI-driven call routing and voice assistants for improved customer experience",
      benefits: ["Smart routing", "Call transcription", "Sentiment analysis", "Quality monitoring"]
    },
    {
      icon: Calendar,
      title: "Scheduling Automation",
      description: "Intelligent scheduling systems that optimize appointments and resource allocation",
      benefits: ["Conflict prevention", "Timezone handling", "Reminder automation", "Integration with calendars"]
    },
    {
      icon: FileText,
      title: "Document Processing",
      description: "Automated document analysis, extraction, and processing workflows",
      benefits: ["OCR technology", "Data extraction", "Classification", "Workflow automation"]
    },
    {
      icon: Settings,
      title: "Workflow Automation",
      description: "End-to-end process automation that connects systems and eliminates manual tasks",
      benefits: ["API integrations", "Conditional logic", "Error handling", "Audit trails"]
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$2,500",
      period: "/month",
      description: "Perfect for small businesses getting started with automation",
      features: [
        "Up to 5 automated workflows",
        "Basic chatbot integration",
        "Email automation (up to 10,000 emails)",
        "Standard support",
        "Basic analytics dashboard"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$5,000",
      period: "/month",
      description: "Comprehensive automation for growing businesses",
      features: [
        "Unlimited automated workflows",
        "Advanced AI chatbot with custom training",
        "Multi-channel automation (email, SMS, calls)",
        "Advanced analytics and reporting",
        "Priority support",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Custom AI model development",
        "White-label solutions",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom SLA agreements",
        "Advanced security features",
        "Multi-tenant architecture",
        "Training and onboarding"
      ],
      popular: false
    }
  ];

  const caseStudies = [
    {
      company: "TechCorp Solutions",
      industry: "Technology Services",
      challenge: "Manual customer onboarding taking 2-3 days",
      solution: "AI-powered onboarding automation",
      results: [
        "90% reduction in onboarding time",
        "95% customer satisfaction rate",
        "40% increase in conversion rate"
      ]
    },
    {
      company: "FinanceFirst",
      industry: "Financial Services",
      challenge: "High volume of repetitive loan processing tasks",
      solution: "Document automation and AI decision making",
      results: [
        "75% faster loan processing",
        "99.2% accuracy in document review",
        "60% reduction in processing costs"
      ]
    },
    {
      company: "RetailMax",
      industry: "E-commerce",
      challenge: "Overwhelming customer support volume",
      solution: "Intelligent chatbot and ticket routing system",
      results: [
        "80% of inquiries resolved automatically",
        "50% reduction in support costs",
        "24/7 customer support availability"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Business Automation Services | Zion Tech Group"
        description="Transform your business operations with our AI-powered automation solutions. Reduce costs, improve efficiency, and scale your business with intelligent automation."
        keywords="AI automation, business automation, AI solutions, process automation, intelligent workflows, chatbot, email automation"
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            <span>AI-Powered Solutions</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            AI Business{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Automation
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Transform your business operations with intelligent automation. Reduce manual work, 
            eliminate errors, and scale your business with AI-powered workflows that work 24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-300 font-semibold rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center mb-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'features', label: 'Features' },
              { id: 'pricing', label: 'Pricing' },
              { id: 'casestudies', label: 'Case Studies' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Sections */}
        {selectedTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            {/* Stats Section */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">80%</div>
                <div className="text-gray-300">Task Automation</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">50%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">99.5%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300">Availability</div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose AI Business Automation?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Reduce Operational Costs</h3>
                      <p className="text-gray-300">Eliminate repetitive tasks and reduce the need for manual labor, saving up to 50% on operational expenses.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Improve Accuracy</h3>
                      <p className="text-gray-300">AI-powered automation eliminates human errors, ensuring 99.5% accuracy in all automated processes.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Scale Operations</h3>
                      <p className="text-gray-300">Handle increasing workloads without proportional increases in staff, enabling unlimited scalability.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Enhance Customer Experience</h3>
                      <p className="text-gray-300">Provide instant, accurate responses to customer inquiries 24/7, improving satisfaction rates.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Accelerate Growth</h3>
                      <p className="text-gray-300">Free up your team to focus on strategic initiatives while automation handles routine tasks.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Real-time Analytics</h3>
                      <p className="text-gray-300">Gain insights into your operations with comprehensive analytics and performance monitoring.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {selectedTab === 'features' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Automation Features</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {automationFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {selectedTab === 'pricing' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Pricing Plans</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 ${
                    tier.popular ? 'border-blue-500' : 'border-white/20'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-300 ml-1">{tier.period}</span>
                    </div>
                    <p className="text-gray-300 mt-4">{tier.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-105'
                        : 'border-2 border-gray-300 text-gray-300 hover:border-blue-400 hover:text-blue-400'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {selectedTab === 'casestudies' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Success Stories</h2>
            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{study.company}</h3>
                      <p className="text-blue-400 font-semibold mb-4">{study.industry}</p>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Challenge:</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Solution:</h4>
                      <p className="text-gray-300 mb-4">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-gray-300">
                            <TrendingUp className="w-4 h-4 text-green-400 flex-shrink-0 mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using AI automation to streamline operations, 
            reduce costs, and accelerate growth. Get started with a free consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span>Start Free Consultation</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/blog/AI-Business-Automation-2025"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-blue-400 hover:bg-white/10 transition-all duration-300"
            >
              Read Our Blog Post
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIBusinessAutomation;