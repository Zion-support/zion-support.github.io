import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  MessageSquare, 
  Bot, 
  Users, 
  Zap, 
  Shield, 
  Globe, 
  Lock,
  CheckCircle,
  ArrowRight,
  Play,
  Clock,
  Star,
  Headphones,
  Database,
  Eye,
  Search,
  Target,
  Activity,
  Settings,
  Cpu,
  Lightbulb,
  Rocket,
  Phone,
  Mail,
  FileText,
  BarChart3,
  TrendingUp,
  Globe as GlobeIcon,
  Languages,
  Smartphone,
  Monitor,
  Tablet,
  MessageCircle,
  PhoneCall,
  Video,
  Calendar,
  Clock as ClockIcon,
  UserCheck,
  Heart,
  ThumbsUp,
  Star as StarIcon,
  ShoppingCart
} from 'lucide-react';

export default function AICustomerSupportAutomation() {
  return (
    <>
      <Helmet>
        <title>AI Customer Support Automation - Intelligent Support & Chatbot Platform | Zion Tech Group</title>
        <meta name="description" content="Transform customer support with AI-powered automation. 24/7 intelligent chatbots, automated ticket routing, and personalized customer experiences that boost satisfaction." />
        <meta name="keywords" content="AI customer support, chatbot automation, customer service AI, support automation, intelligent support, customer experience automation" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-customer-support-automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-darker">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-8">
                <Bot className="w-4 h-4 mr-2" />
                AI-Powered Customer Support
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Customer Support Automation
                <span className="block text-zion-cyan">24/7 Intelligent Support That Never Sleeps</span>
              </h1>
              
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Revolutionize your customer support with AI-powered automation. Provide instant, intelligent 
                responses, reduce support costs by 60%, and deliver exceptional customer experiences around the clock.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://ziontechgroup.com/contact" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="#demo" 
                  className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose AI Customer Support Automation?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Transform your customer support from reactive to proactive with intelligent automation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">24/7 Availability</h3>
                <p className="text-zion-slate-light">
                  Provide instant support to customers anytime, anywhere, without human limitations.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">60% Cost Reduction</h3>
                <p className="text-zion-slate-light">
                  Automate routine inquiries and reduce support costs while improving efficiency.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Instant Responses</h3>
                <p className="text-zion-slate-light">
                  Customers get immediate answers to common questions without waiting in queues.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <UserCheck className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Personalized Experience</h3>
                <p className="text-zion-slate-light">
                  AI learns customer preferences and provides tailored support experiences.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Multi-Language Support</h3>
                <p className="text-zion-slate-light">
                  Support customers in their preferred language with automatic translation.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Scalable Solution</h3>
                <p className="text-zion-slate-light">
                  Handle unlimited customer inquiries without adding more support staff.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Support Automation Features
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Everything you need to automate and enhance your customer support operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Intelligent Chatbots</h3>
                      <p className="text-zion-slate-light">
                        AI-powered chatbots that understand context and provide accurate, helpful responses.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Automated Ticket Routing</h3>
                      <p className="text-zion-slate-light">
                        Smart routing of complex issues to the right human agents based on expertise and availability.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Sentiment Analysis</h3>
                      <p className="text-zion-slate-light">
                        Monitor customer emotions and escalate urgent issues to human agents automatically.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Knowledge Base Integration</h3>
                      <p className="text-zion-slate-light">
                        Seamlessly connect with your existing knowledge base for accurate, up-to-date information.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageSquare className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Support Dashboard</h3>
                  <p className="text-zion-slate-light mb-6">
                    Real-time monitoring of support metrics and customer satisfaction scores.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-zion-cyan">95%</div>
                      <div className="text-sm text-zion-slate-light">Resolution Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-zion-cyan">2min</div>
                      <div className="text-sm text-zion-slate-light">Avg Response Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Multi-Channel Support
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Meet your customers wherever they are with seamless omnichannel support
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-sm text-zion-slate-light">Website & mobile app chat support</p>
              </div>
              
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Voice Support</h3>
                <p className="text-sm text-zion-slate-light">AI-powered phone support & IVR</p>
              </div>
              
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
                <p className="text-sm text-zion-slate-light">Automated email responses & routing</p>
              </div>
              
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Social Media</h3>
                <p className="text-sm text-zion-slate-light">Facebook, Twitter, Instagram support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Discover how AI Customer Support Automation transforms different industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-6">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingCart className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">E-commerce & Retail</h3>
                <p className="text-zion-slate-light mb-4">
                  Order tracking, product inquiries, and return processing automation.
                </p>
                <ul className="text-sm text-zion-slate-light space-y-1">
                  <li>• Order status updates</li>
                  <li>• Product recommendations</li>
                  <li>• Return & refund processing</li>
                </ul>
              </div>
              
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-6">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Healthcare</h3>
                <p className="text-zion-slate-light mb-4">
                  Appointment scheduling, prescription refills, and general health inquiries.
                </p>
                <ul className="text-sm text-zion-slate-light space-y-1">
                  <li>• Appointment booking</li>
                  <li>• Prescription refills</li>
                  <li>• Health information</li>
                </ul>
              </div>
              
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-6">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Technology & SaaS</h3>
                <p className="text-zion-slate-light mb-4">
                  Technical support, account management, and feature explanations.
                </p>
                <ul className="text-sm text-zion-slate-light space-y-1">
                  <li>• Technical troubleshooting</li>
                  <li>• Account management</li>
                  <li>• Feature guidance</li>
                </ul>
              </div>
              
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-6">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Financial Services</h3>
                <p className="text-zion-slate-light mb-4">
                  Account inquiries, transaction support, and general banking assistance.
                </p>
                <ul className="text-sm text-zion-slate-light space-y-1">
                  <li>• Account information</li>
                  <li>• Transaction support</li>
                  <li>• Banking guidance</li>
                </ul>
              </div>
              
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-6">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Travel & Hospitality</h3>
                <p className="text-zion-slate-light mb-4">
                  Booking assistance, itinerary changes, and travel information.
                </p>
                <ul className="text-sm text-zion-slate-light space-y-1">
                  <li>• Booking support</li>
                  <li>• Itinerary changes</li>
                  <li>• Travel information</li>
                </ul>
              </div>
              
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-6">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Education</h3>
                <p className="text-zion-slate-light mb-4">
                  Course information, enrollment support, and academic guidance.
                </p>
                <ul className="text-sm text-zion-slate-light space-y-1">
                  <li>• Course information</li>
                  <li>• Enrollment support</li>
                  <li>• Academic guidance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Choose the plan that fits your support needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                  <div className="text-4xl font-bold text-zion-cyan mb-2">$99</div>
                  <div className="text-zion-slate-light">per month</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Up to 1,000 conversations/month
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Basic chatbot
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    2 support channels
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Standard integrations
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Email support
                  </li>
                </ul>
                
                <a 
                  href="https://ziontechgroup.com/contact" 
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
                >
                  Start Free Trial
                </a>
              </div>
              
              {/* Professional Plan */}
              <div className="bg-zion-blue-dark/50 border-2 border-zion-cyan rounded-xl p-8 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                  <div className="text-4xl font-bold text-zion-cyan mb-2">$299</div>
                  <div className="text-zion-slate-light">per month</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Up to 10,000 conversations/month
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Advanced AI chatbot
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    All support channels
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Advanced integrations
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Priority support
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Sentiment analysis
                  </li>
                </ul>
                
                <a 
                  href="https://ziontechgroup.com/contact" 
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
                >
                  Start Free Trial
                </a>
              </div>
              
              {/* Enterprise Plan */}
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                  <div className="text-4xl font-bold text-zion-cyan mb-2">Custom</div>
                  <div className="text-zion-slate-light">contact us</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Unlimited conversations
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Custom AI models
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    White-label solutions
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Custom integrations
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Dedicated account manager
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    24/7 phone support
                  </li>
                </ul>
                
                <a 
                  href="https://ziontechgroup.com/contact" 
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join thousands of organizations who have already automated their customer support with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://ziontechgroup.com/contact" 
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
              >
                <Headphones className="w-5 h-5 mr-2" />
                Call +1 (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// Missing icon components
const DollarSign = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
  </svg>
);

const Target = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);