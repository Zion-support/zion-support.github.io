import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Bot, 
  Zap, 
  BarChart3, 
  Users, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Shield,
  MessageSquare,
  DollarSign,
  Globe,
  Settings,
  FileText,
  Send,
  Inbox,
  Filter,
  Search,
  Bell,
  Eye,
  Download,
  Upload,
  Share2,
  ExternalLink,
  Cpu,
  Database,
  Network,
  Monitor,
  Lock,
  Code,
  Palette,
  Camera,
  Video,
  Mic,
  Image,
  File,
  Folder,
  Archive,
  Edit,
  Plus,
  AlertCircle,
  Info,
  HelpCircle,
  Activity,
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  Clock,
  Headphones,
  Home,
  Link,
  Maximize,
  Minimize,
  MousePointer,
  Play,
  RefreshCw,
  Save,
  Scissors,
  Sliders,
  Tag,
  ThumbsUp,
  Trash2,
  User,
  UserCheck,
  UserPlus,
  Users2,
  Volume2,
  Wifi,
  X,
  ZoomIn,
  ZoomOut
} from 'lucide-react';

const AdvancedAISolutions = () => {
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const aiServices = [
    {
      icon: Brain,
      title: "AI-Powered Business Intelligence",
      description: "Transform your data into actionable insights with advanced AI analytics and predictive modeling.",
      features: [
        "Predictive analytics",
        "Real-time insights",
        "Automated reporting",
        "Custom dashboards",
        "Machine learning models",
        "Data visualization"
      ],
      pricing: "From $2,999/month",
      marketPrice: "$4,999-19,999/month",
      savings: "Save up to 40%",
      benefits: ["50% faster decisions", "95% accuracy", "Real-time insights", "ROI tracking"]
    },
    {
      icon: Bot,
      title: "Intelligent Automation Platform",
      description: "Automate complex business processes with AI-powered workflow orchestration and decision engines.",
      features: [
        "Process automation",
        "Workflow orchestration",
        "Decision engines",
        "RPA integration",
        "Smart routing",
        "Exception handling"
      ],
      pricing: "From $3,999/month",
      marketPrice: "$6,999-24,999/month",
      savings: "Save up to 43%",
      benefits: ["80% process automation", "60% cost reduction", "24/7 operation", "Error-free execution"]
    },
    {
      icon: MessageSquare,
      title: "AI Customer Experience Suite",
      description: "Revolutionary customer experience platform with AI chatbots, sentiment analysis, and personalization.",
      features: [
        "AI chatbots",
        "Sentiment analysis",
        "Personalization engine",
        "Omnichannel support",
        "Voice recognition",
        "Emotion detection"
      ],
      pricing: "From $2,499/month",
      marketPrice: "$4,499-16,999/month",
      savings: "Save up to 44%",
      benefits: ["95% satisfaction", "24/7 support", "50% faster response", "Personalized experience"]
    },
    {
      icon: Target,
      title: "AI Sales & Marketing Automation",
      description: "Intelligent sales and marketing automation with lead scoring, campaign optimization, and revenue prediction.",
      features: [
        "Lead scoring",
        "Campaign optimization",
        "Revenue prediction",
        "Customer segmentation",
        "A/B testing",
        "Performance analytics"
      ],
      pricing: "From $1,999/month",
      marketPrice: "$3,499-12,999/month",
      savings: "Save up to 43%",
      benefits: ["40% higher conversion", "3x lead quality", "Automated nurturing", "Revenue optimization"]
    },
    {
      icon: Shield,
      title: "AI Cybersecurity & Threat Detection",
      description: "Advanced AI-powered cybersecurity with real-time threat detection, behavioral analysis, and automated response.",
      features: [
        "Threat detection",
        "Behavioral analysis",
        "Automated response",
        "Risk assessment",
        "Compliance monitoring",
        "Incident prediction"
      ],
      pricing: "From $2,799/month",
      marketPrice: "$4,999-18,999/month",
      savings: "Save up to 44%",
      benefits: ["99.9% threat detection", "Real-time protection", "Automated response", "Compliance ready"]
    },
    {
      icon: BarChart3,
      title: "AI Financial Analytics & Forecasting",
      description: "Advanced financial analytics with AI-powered forecasting, risk assessment, and investment optimization.",
      features: [
        "Financial forecasting",
        "Risk assessment",
        "Investment optimization",
        "Fraud detection",
        "Market analysis",
        "Portfolio management"
      ],
      pricing: "From $3,499/month",
      marketPrice: "$5,999-22,999/month",
      savings: "Save up to 42%",
      benefits: ["90% forecast accuracy", "Risk reduction", "ROI optimization", "Real-time analysis"]
    }
  ];

  const aiCapabilities = [
    {
      title: "Natural Language Processing",
      description: "Advanced NLP for text analysis, language understanding, and automated content generation.",
      icon: FileText,
      applications: ["Content generation", "Sentiment analysis", "Language translation", "Text summarization"]
    },
    {
      title: "Computer Vision",
      description: "Image and video analysis with object detection, facial recognition, and visual content understanding.",
      icon: Eye,
      applications: ["Image recognition", "Video analysis", "Quality control", "Security monitoring"]
    },
    {
      title: "Machine Learning",
      description: "Custom ML models for predictive analytics, pattern recognition, and automated decision making.",
      icon: Cpu,
      applications: ["Predictive modeling", "Pattern recognition", "Anomaly detection", "Recommendation engines"]
    },
    {
      title: "Deep Learning",
      description: "Advanced neural networks for complex problem solving and high-accuracy predictions.",
      icon: Network,
      applications: ["Complex predictions", "Image processing", "Speech recognition", "Autonomous systems"]
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      icon: Activity,
      description: "AI solutions for medical diagnosis, drug discovery, and patient care optimization.",
      solutions: ["Medical imaging", "Drug discovery", "Patient monitoring", "Treatment optimization"]
    },
    {
      name: "Financial Services",
      icon: DollarSign,
      description: "AI-powered financial services including fraud detection, algorithmic trading, and risk management.",
      solutions: ["Fraud detection", "Algorithmic trading", "Risk management", "Credit scoring"]
    },
    {
      name: "Manufacturing",
      icon: Settings,
      description: "AI-driven manufacturing with predictive maintenance, quality control, and supply chain optimization.",
      solutions: ["Predictive maintenance", "Quality control", "Supply chain optimization", "Process automation"]
    },
    {
      name: "Retail & E-commerce",
      icon: ShoppingCart,
      description: "AI solutions for personalized shopping, inventory management, and customer experience optimization.",
      solutions: ["Personalization", "Inventory optimization", "Price optimization", "Customer insights"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Helmet>
        <title>Advanced AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Cutting-edge AI solutions including business intelligence, automation, customer experience, and cybersecurity with significant cost savings." />
        <meta name="keywords" content="AI solutions, artificial intelligence, machine learning, automation, business intelligence, AI consulting" />
        <link rel="canonical" href={`${contactInfo.website}/services/advanced-ai-solutions`} />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Advanced AI Solutions
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions including business intelligence, 
              automation, and customer experience. Save up to 44% compared to market rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: {contactInfo.phone}
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center font-semibold"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* AI Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Services</h2>
          <p className="text-xl text-gray-600">Revolutionary AI solutions with significant cost savings</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Our Price:</span> {service.pricing}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Market Price:</span> {service.marketPrice}
                </p>
                <p className="text-sm text-green-600 font-semibold">
                  {service.savings}
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                <div className="space-y-1">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-green-600">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-center flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Get Started
                </a>
                <a
                  href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.title}`}
                  className="w-full py-2 px-4 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Capabilities */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Capabilities</h2>
            <p className="text-xl text-gray-600">Advanced AI technologies for every business need</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600 mb-4">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.applications.map((application, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {application}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Solutions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry-Specific AI Solutions</h2>
          <p className="text-xl text-gray-600">Tailored AI solutions for every industry</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <industry.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.name}</h3>
              <p className="text-gray-600 mb-4">{industry.description}</p>
              <ul className="space-y-2">
                {industry.solutions.map((solution, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses already leveraging our AI solutions to achieve unprecedented growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${contactInfo.phone}`}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: {contactInfo.phone}
            </a>
            <a 
              href={`mailto:${contactInfo.email}`}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center font-semibold"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email: {contactInfo.email}
            </a>
          </div>
          <div className="mt-8 text-sm text-purple-100">
            <p>📍 {contactInfo.address}</p>
            <p>🌐 <a href={contactInfo.website} className="hover:text-white underline">{contactInfo.website}</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAISolutions;