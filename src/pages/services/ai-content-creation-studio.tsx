import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  PenTool,
  Image,
  Video,
  Music,
  FileText,
  Brain,
  Zap,
  CheckCircle,
  ArrowRight,
  Play,
  Pause,
  Download,
  Share2,
  Settings,
  Palette,
  Type,
  Layers,
  Sparkles,
  Users,
  TrendingUp,
  Award,
  Clock,
  DollarSign,
  Star,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Globe,
  Target,
  Lightbulb,
  Code,
  Database,
  Cloud,
  Shield,
  BarChart3,
  Workflow,
  MessageCircle,
  Eye,
  Search,
  Filter,
  Grid,
  List,
  BookOpen,
  Camera,
  Mic,
  Edit3,
  Copy,
  Trash2,
  Save,
  Upload,
  Download as DownloadIcon,
  Share,
  Lock,
  Unlock,
  EyeOff,
  EyeOn,
  RefreshCw,
  RotateCcw,
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
  Heart,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Send,
  Paperclip,
  Smile,
  Frown,
  Meh,
  Plus,
  Minus,
  X,
  AlertCircle,
  Info,
  HelpCircle,
  ExternalLink,
  Calendar,
  Clock as ClockIcon,
  Tag,
  Hash,
  AtSign,
  Hash as HashIcon,
  DollarSign as DollarSignIcon,
  Percent,
  PieChart,
  BarChart,
  LineChart,
  Activity,
  TrendingUp as TrendingUpIcon,
  TrendingDown,
  Minus as MinusIcon,
  Plus as PlusIcon,
  Divide,
  Equal,
  Infinity,
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

const AIContentCreationStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<string>('');

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI-Powered Content Generation',
      description: 'Advanced language models create high-quality, engaging content tailored to your brand voice and audience.',
      benefits: ['10x faster content creation', 'Consistent brand messaging', 'SEO-optimized content']
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: 'Visual Content Creation',
      description: 'Generate stunning images, graphics, and visual assets using state-of-the-art AI image generation.',
      benefits: ['Custom brand visuals', 'Multiple style options', 'High-resolution output']
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Video & Animation',
      description: 'Create professional videos, animations, and motion graphics with AI-powered tools.',
      benefits: ['Professional quality', 'Multiple formats', 'Custom branding']
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: 'Audio & Voice Generation',
      description: 'Generate natural-sounding voiceovers, music, and audio content for your projects.',
      benefits: ['Natural voice synthesis', 'Multiple languages', 'Custom music creation']
    }
  ];

  const templates = [
    {
      id: 'blog-post',
      name: 'Blog Post Generator',
      description: 'Create engaging blog posts with SEO optimization',
      icon: <FileText className="w-6 h-6" />,
      category: 'Writing'
    },
    {
      id: 'social-media',
      name: 'Social Media Content',
      description: 'Generate posts for all major social platforms',
      icon: <Share2 className="w-6 h-6" />,
      category: 'Social'
    },
    {
      id: 'email-marketing',
      name: 'Email Marketing',
      description: 'Create compelling email campaigns',
      icon: <Mail className="w-6 h-6" />,
      category: 'Marketing'
    },
    {
      id: 'product-description',
      name: 'Product Descriptions',
      description: 'Write compelling product copy',
      icon: <Tag className="w-6 h-6" />,
      category: 'E-commerce'
    },
    {
      id: 'ad-copy',
      name: 'Advertising Copy',
      description: 'Generate high-converting ad content',
      icon: <Target className="w-6 h-6" />,
      category: 'Advertising'
    },
    {
      id: 'video-script',
      name: 'Video Scripts',
      description: 'Create engaging video content scripts',
      icon: <Video className="w-6 h-6" />,
      category: 'Video'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 99,
      period: 'month',
      features: [
        'Up to 100 content pieces/month',
        'Basic AI models',
        'Standard templates',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 299,
      period: 'month',
      features: [
        'Up to 500 content pieces/month',
        'Advanced AI models',
        'Premium templates',
        'Priority support',
        'Advanced analytics',
        'Custom branding',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 799,
      period: 'month',
      features: [
        'Unlimited content creation',
        'Custom AI models',
        'White-label solutions',
        'Dedicated support',
        'Custom integrations',
        'Advanced security',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Marketing Teams',
      description: 'Create consistent, engaging content across all channels',
      icon: <Target className="w-6 h-6" />
    },
    {
      title: 'Content Creators',
      description: 'Scale your content production without sacrificing quality',
      icon: <PenTool className="w-6 h-6" />
    },
    {
      title: 'E-commerce Businesses',
      description: 'Generate product descriptions and marketing copy at scale',
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      title: 'Agencies',
      description: 'Deliver high-quality content for multiple clients efficiently',
      icon: <Users className="w-6 h-6" />
    }
  ];

  const handleGenerateContent = () => {
    if (!selectedTemplate) return;
    
    setIsGenerating(true);
    // Simulate content generation
    setTimeout(() => {
      setGeneratedContent('This is a sample generated content that demonstrates the AI Content Creation Studio capabilities. The content is tailored to your specific requirements and optimized for your target audience.');
      setIsGenerating(false);
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
              New AI-Powered Service
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              AI Content Creation Studio
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
            >
              Revolutionize your content creation with AI-powered tools that generate high-quality text, 
              images, videos, and audio content in seconds. Scale your content production without 
              compromising on quality or creativity.
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
                Start Creating Today
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
              Powerful AI Content Creation Tools
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our AI Content Creation Studio combines cutting-edge artificial intelligence with 
              intuitive design to deliver professional-quality content at scale.
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

      {/* Interactive Demo Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Try Our AI Content Generator
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience the power of AI content creation with our interactive demo. 
              Select a template and watch as AI generates professional content in seconds.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-zion-blue-darker border border-zion-purple/30 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Template Selection */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Choose Template</h3>
                  <div className="space-y-3">
                    {templates.map((template) => (
                      <button
                        key={template.id}
                        onClick={() => setSelectedTemplate(template.id)}
                        className={`w-full p-4 text-left rounded-lg border transition-all ${
                          selectedTemplate === template.id
                            ? 'border-zion-cyan bg-zion-cyan/10'
                            : 'border-zion-purple/20 hover:border-zion-purple/40'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="text-zion-cyan">{template.icon}</div>
                          <div>
                            <h4 className="font-semibold text-white">{template.name}</h4>
                            <p className="text-sm text-zion-slate-light">{template.description}</p>
                            <span className="inline-block px-2 py-1 bg-zion-purple/20 text-zion-cyan text-xs rounded mt-1">
                              {template.category}
                            </span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Content Generation */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Generated Content</h3>
                  <div className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg p-4 min-h-[200px]">
                    {isGenerating ? (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-cyan mx-auto mb-4"></div>
                          <p className="text-zion-cyan">Generating content...</p>
                        </div>
                      </div>
                    ) : generatedContent ? (
                      <div>
                        <p className="text-zion-slate-light mb-4">{generatedContent}</p>
                        <div className="flex space-x-2">
                          <button className="bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded text-sm font-semibold hover:bg-zion-cyan-light transition-colors">
                            Copy
                          </button>
                          <button className="bg-zion-purple/20 text-zion-cyan px-4 py-2 rounded text-sm font-semibold hover:bg-zion-purple/30 transition-colors">
                            Edit
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center text-zion-slate-light h-full flex items-center justify-center">
                        <p>Select a template and click generate to create content</p>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={handleGenerateContent}
                    disabled={!selectedTemplate || isGenerating}
                    className={`w-full mt-4 px-6 py-3 rounded-lg font-semibold transition-colors ${
                      selectedTemplate && !isGenerating
                        ? 'bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light'
                        : 'bg-zion-purple/20 text-zion-slate-light cursor-not-allowed'
                    }`}
                  >
                    {isGenerating ? 'Generating...' : 'Generate Content'}
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
              Choose Your Plan
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Flexible pricing plans designed to scale with your content creation needs. 
              Start small and grow as your business expands.
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
              Perfect For Every Business
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Whether you're a startup, enterprise, or agency, our AI Content Creation Studio 
              helps you create professional content that drives results.
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
                Ready to Transform Your Content Creation?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
                Join thousands of businesses that are already using AI to create better content faster. 
                Get started today with a free consultation and demo.
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
                  <div className="text-2xl font-bold text-zion-cyan mb-2">24/7</div>
                  <div className="text-zion-slate-light">Support Available</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-zion-cyan mb-2">99.9%</div>
                  <div className="text-zion-slate-light">Uptime Guarantee</div>
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

export default AIContentCreationStudio;