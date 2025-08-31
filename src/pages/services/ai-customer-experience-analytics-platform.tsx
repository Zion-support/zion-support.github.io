import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Users,
  TrendingUp,
  BarChart3,
  Brain,
  Eye,
  MessageCircle,
  Heart,
  Star,
  Target,
  Zap,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Shield,
  Cloud,
  Database,
  Workflow,
  Globe,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  Search,
  Filter,
  Settings,
  Download,
  Share2,
  AlertCircle,
  Info,
  HelpCircle,
  ExternalLink,
  Calendar,
  Tag,
  Hash,
  AtSign,
  Percent,
  Infinity,
  Sparkles,
  Lightbulb,
  Code,
  Server,
  Lock,
  Unlock,
  EyeOff,
  EyeOn,
  RefreshCw,
  RotateCw,
  Crop,
  Scissors,
  Move,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  Fullscreen,
  FullscreenExit,
  Volume2,
  VolumeX,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  ThumbsUp,
  ThumbsDown,
  Send,
  Paperclip,
  Smile,
  Frown,
  Meh,
  Plus,
  Minus,
  X,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info as InfoIcon,
  HelpCircle as HelpCircleIcon,
  ExternalLink as ExternalLinkIcon,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  Tag as TagIcon,
  Hash as HashIcon,
  AtSign as AtSignIcon,
  Percent as PercentIcon,
  Infinity as InfinityIcon,
  Zap as ZapIcon,
  Battery,
  Wifi,
  Signal,
  Bluetooth,
  WifiOff,
  SignalOff,
  BluetoothOff,
  BatteryOff,
  BatteryCharging,
  BatteryFull,
  BatteryLow,
  BatteryMedium,
  BatteryEmpty,
  BatteryHalf,
  BatteryQuarter,
  BatteryThreeQuarters,
  BatteryOneQuarter,
  BatteryTwoThirds,
  BatteryOneThird,
  BatteryTwoThirds as BatteryTwoThirdsIcon,
  BatteryOneThird as BatteryOneThirdIcon,
  BatteryQuarter as BatteryQuarterIcon,
  BatteryThreeQuarters as BatteryThreeQuartersIcon,
  BatteryHalf as BatteryHalfIcon,
  BatteryEmpty as BatteryEmptyIcon,
  BatteryLow as BatteryLowIcon,
  BatteryMedium as BatteryMediumIcon,
  BatteryFull as BatteryFullIcon,
  BatteryCharging as BatteryChargingIcon,
  BatteryOff as BatteryOffIcon,
  WifiOff as WifiOffIcon,
  SignalOff as SignalOffIcon,
  BluetoothOff as BluetoothOffIcon,
  Wifi as WifiIcon,
  Signal as SignalIcon,
  Bluetooth as BluetoothIcon,
  ShoppingCart
} from 'lucide-react';

const AICustomerExperienceAnalyticsPlatform: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<any>(null);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI-Powered Customer Insights',
      description: 'Advanced machine learning algorithms analyze customer behavior patterns and predict future actions with 95% accuracy.',
      benefits: ['Predictive customer behavior', 'Real-time sentiment analysis', 'Automated insight generation']
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: '360° Customer View',
      description: 'Comprehensive customer profiles combining data from all touchpoints for complete visibility into the customer journey.',
      benefits: ['Unified customer data', 'Cross-channel tracking', 'Historical behavior analysis']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Advanced Analytics Dashboard',
      description: 'Interactive dashboards with real-time metrics, customizable reports, and automated alerts for proactive decision-making.',
      benefits: ['Real-time monitoring', 'Custom reporting', 'Automated alerts']
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: 'Automated Customer Journey Mapping',
      description: 'AI automatically maps and optimizes customer journeys, identifying friction points and opportunities for improvement.',
      benefits: ['Journey optimization', 'Friction point detection', 'Conversion improvement']
    }
  ];

  const metrics = [
    {
      id: 'customer-satisfaction',
      name: 'Customer Satisfaction Score',
      description: 'Measure and track customer satisfaction across all touchpoints',
      icon: <Heart className="w-6 h-6" />,
      category: 'Satisfaction'
    },
    {
      id: 'net-promoter-score',
      name: 'Net Promoter Score',
      description: 'Track customer loyalty and likelihood to recommend',
      icon: <Star className="w-6 h-6" />,
      category: 'Loyalty'
    },
    {
      id: 'customer-effort-score',
      name: 'Customer Effort Score',
      description: 'Measure how easy it is for customers to interact with your brand',
      icon: <Target className="w-6 h-6" />,
      category: 'Ease of Use'
    },
    {
      id: 'customer-lifetime-value',
      name: 'Customer Lifetime Value',
      description: 'Predict and optimize customer value over time',
      icon: <TrendingUp className="w-6 h-6" />,
      category: 'Value'
    },
    {
      id: 'churn-prediction',
      name: 'Churn Prediction',
      description: 'Identify customers at risk of leaving before they churn',
      icon: <AlertTriangle className="w-6 h-6" />,
      category: 'Retention'
    },
    {
      id: 'sentiment-analysis',
      name: 'Sentiment Analysis',
      description: 'Real-time analysis of customer emotions and opinions',
      icon: <MessageCircle className="w-6 h-6" />,
      category: 'Emotion'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 199,
      period: 'month',
      features: [
        'Up to 10,000 customer profiles',
        'Basic AI analytics',
        'Standard dashboards',
        'Email support',
        'Basic reporting',
        '5 user seats'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 499,
      period: 'month',
      features: [
        'Up to 100,000 customer profiles',
        'Advanced AI analytics',
        'Custom dashboards',
        'Priority support',
        'Advanced reporting',
        'Unlimited user seats',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 1299,
      period: 'month',
      features: [
        'Unlimited customer profiles',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Custom analytics',
        'Advanced security',
        'SLA guarantee',
        'On-premise option'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Optimization',
      description: 'Improve conversion rates and customer retention through data-driven insights',
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      title: 'Customer Service Enhancement',
      description: 'Provide personalized support and proactive issue resolution',
      icon: <MessageCircle className="w-6 h-6" />
    },
    {
      title: 'Marketing Personalization',
      description: 'Deliver targeted campaigns based on customer behavior and preferences',
      icon: <Target className="w-6 h-6" />
    },
    {
      title: 'Product Development',
      description: 'Use customer feedback to guide product improvements and innovation',
      icon: <Lightbulb className="w-6 h-6" />
    }
  ];

  const handleAnalyzeMetric = () => {
    if (!selectedMetric) return;
    
    setIsAnalyzing(true);
    // Simulate analysis
    setTimeout(() => {
      setAnalysisResults({
        metric: selectedMetric,
        currentValue: '85.2',
        trend: '+5.3%',
        insights: [
          'Customer satisfaction has improved by 5.3% this month',
          'Positive feedback increased in mobile app interactions',
          'Response time improvements contributed to higher scores'
        ],
        recommendations: [
          'Continue mobile app optimization efforts',
          'Maintain current response time standards',
          'Expand positive feedback collection channels'
        ]
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Advanced AI Analytics Platform
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              AI Customer Experience Analytics Platform
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
            >
              Transform customer insights into actionable intelligence with our AI-powered analytics platform. 
              Understand your customers better, predict their needs, and deliver exceptional experiences that drive growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="bg-zion-cyan text-zion-blue-dark px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors text-lg"
              >
                Start Analyzing Today
              </Link>
              <a
                href="tel:+13024640950"
                className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-zion-blue-dark transition-colors text-lg"
              >
                Call: +1 302 464 0950
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI-Powered Analytics Tools
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our platform combines cutting-edge artificial intelligence with comprehensive analytics 
              to deliver insights that transform customer experiences and drive business growth.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-zion-blue-dark border border-zion-purple/30 rounded-lg p-8 hover:border-zion-cyan/50 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-zion-cyan/20 rounded-lg flex items-center justify-center text-zion-cyan flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-zion-slate-light mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-zion-cyan flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Analytics Demo */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Experience Our Analytics Platform
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Try our interactive analytics demo. Select a metric and watch as AI analyzes 
              your customer data to provide actionable insights and recommendations.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-zion-blue-darker border border-zion-purple/30 rounded-lg p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Metric Selection */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Choose Analytics Metric</h3>
                  <div className="space-y-3">
                    {metrics.map((metric) => (
                      <button
                        key={metric.id}
                        onClick={() => setSelectedMetric(metric.id)}
                        className={`w-full p-4 text-left rounded-lg border transition-all ${
                          selectedMetric === metric.id
                            ? 'border-zion-cyan bg-zion-cyan/10'
                            : 'border-zion-purple/20 hover:border-zion-purple/40'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="text-zion-cyan">{metric.icon}</div>
                          <div>
                            <h4 className="font-semibold text-white">{metric.name}</h4>
                            <p className="text-sm text-zion-slate-light">{metric.description}</p>
                            <span className="inline-block px-2 py-1 bg-zion-purple/20 text-zion-cyan text-xs rounded mt-1">
                              {metric.category}
                            </span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Analysis Results */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">AI Analysis Results</h3>
                  <div className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg p-6 min-h-[400px]">
                    {isAnalyzing ? (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-cyan mx-auto mb-4"></div>
                          <p className="text-zion-cyan">Analyzing customer data...</p>
                        </div>
                      </div>
                    ) : analysisResults ? (
                      <div className="space-y-6">
                        <div className="text-center">
                          <h4 className="text-2xl font-bold text-white mb-2">
                            {analysisResults.metric.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                          </h4>
                          <div className="text-4xl font-bold text-zion-cyan mb-2">
                            {analysisResults.currentValue}
                          </div>
                          <div className="text-zion-slate-light">
                            Trend: <span className="text-green-400">{analysisResults.trend}</span>
                          </div>
                        </div>

                        <div>
                          <h5 className="text-lg font-semibold text-zion-cyan mb-3">Key Insights</h5>
                          <ul className="space-y-2">
                            {analysisResults.insights.map((insight: string, idx: number) => (
                              <li key={idx} className="text-zion-slate-light flex items-start">
                                <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                                {insight}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h5 className="text-lg font-semibold text-zion-cyan mb-3">Recommendations</h5>
                          <ul className="space-y-2">
                            {analysisResults.recommendations.map((rec: string, idx: number) => (
                              <li key={idx} className="text-zion-slate-light flex items-start">
                                <ArrowRight className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                                {rec}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center text-zion-slate-light h-full flex items-center justify-center">
                        <p>Select a metric and click analyze to get AI-powered insights</p>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={handleAnalyzeMetric}
                    disabled={!selectedMetric || isAnalyzing}
                    className={`w-full mt-4 px-6 py-3 rounded-lg font-semibold transition-colors ${
                      selectedMetric && !isAnalyzing
                        ? 'bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light'
                        : 'bg-zion-purple/20 text-zion-slate-light cursor-not-allowed'
                    }`}
                  >
                    {isAnalyzing ? 'Analyzing...' : 'Analyze with AI'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Analytics Plan
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Flexible pricing plans designed to scale with your customer analytics needs. 
              Start with essential insights and grow to enterprise-level analytics.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-zion-blue-dark border rounded-lg p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan ring-2 ring-zion-cyan/20' 
                    : 'border-zion-purple/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-zion-cyan mb-2">
                    ${plan.price}
                    <span className="text-lg text-zion-slate-light">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                    plan.popular
                      ? 'bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light'
                      : 'bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect For Every Industry
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our AI Customer Experience Analytics Platform helps businesses across all industries 
              understand their customers better and deliver exceptional experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-lg flex items-center justify-center text-zion-cyan mx-auto mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-zion-slate-light">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-zion-blue-dark border border-zion-cyan/30 rounded-lg p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Customer Experience?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
                Join leading businesses that are already using AI analytics to understand their customers 
                better and deliver exceptional experiences. Get started today with a free consultation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  to="/contact"
                  className="bg-zion-cyan text-zion-blue-dark px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors text-lg"
                >
                  Start Free Trial
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-zion-blue-dark transition-colors text-lg"
                >
                  Call: +1 302 464 0950
                </a>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-zion-cyan mb-2">95%</div>
                  <div className="text-zion-slate-light">Prediction Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-zion-cyan mb-2">24/7</div>
                  <div className="text-zion-slate-light">Real-time Monitoring</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-zion-cyan mb-2">30-Day</div>
                  <div className="text-zion-slate-light">Money Back Guarantee</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-zion-cyan mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-zion-slate-light">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-zion-cyan mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-zion-cyan mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICustomerExperienceAnalyticsPlatform;