import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  MessageCircle, 
  Brain, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Target,
  BarChart3,
  Globe,
  Clock,
  Award,
  Star,
  Rocket,
  Eye,
  Search,
  FileText,
  Calendar,
  MapPin,
  Phone,
  Mail,
  UserCheck,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserSearch,
  UserEdit,
  UserSettings,
  Shield,
  Lock,
  Database,
  Network,
  Server,
  Cloud,
  Cpu,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  Target,
  Goal,
  CheckSquare,
  AlertCircle,
  Info,
  HelpCircle,
  DollarSign,
  ShoppingCart,
  CreditCard,
  Receipt,
  TrendingDown,
  Users,
  PhoneCall,
  MailIcon,
  CalendarDays,
  Clock,
  Target,
  Award,
  Trophy,
  Medal,
  Crown,
  Zap,
  Lightning,
  Flash,
  Sparkles,
  Magic,
  Wand,
  Star,
  Heart,
  ThumbsUp,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  Settings,
  Cog,
  Wrench,
  Tool,
  Hammer,
  Screwdriver,
  Ruler,
  Compass,
  Map,
  Navigation,
  Route,
  Path,
  Way,
  Direction,
  Arrow,
  Pointer,
  Cursor,
  Mouse,
  Touch,
  Hand,
  Finger,
  Thumb,
  Index,
  Middle,
  Ring,
  Pinky
} from 'lucide-react';

export default function AISalesAssistant() {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Lead Scoring',
      description: 'AI-powered lead qualification and prioritization',
      benefits: ['Predictive scoring', 'Behavioral analysis', 'Conversion probability']
    },
    {
      icon: MessageCircle,
      title: 'Automated Outreach',
      description: 'Personalized communication at scale',
      benefits: ['Multi-channel messaging', 'A/B testing', 'Response optimization']
    },
    {
      icon: Zap,
      title: 'Real-time Insights',
      description: 'Live sales performance and analytics',
      benefits: ['Performance tracking', 'Pipeline visibility', 'Forecast accuracy']
    },
    {
      icon: Users,
      title: 'Customer Intelligence',
      description: 'Deep customer insights and behavior analysis',
      benefits: ['Buying patterns', 'Engagement metrics', 'Churn prediction']
    }
  ];

  const solutions = [
    {
      title: 'Lead Generation & Qualification',
      description: 'AI-powered lead discovery and scoring',
      icon: Target,
      features: ['Prospect identification', 'Lead scoring', 'Qualification automation']
    },
    {
      title: 'Sales Process Automation',
      description: 'Streamlined sales workflows and automation',
      icon: Zap,
      features: ['Follow-up automation', 'Meeting scheduling', 'Pipeline management']
    },
    {
      title: 'Customer Relationship Management',
      description: 'Intelligent CRM with AI insights',
      icon: Users,
      features: ['Contact management', 'Interaction tracking', 'Relationship scoring']
    },
    {
      title: 'Sales Analytics & Forecasting',
      description: 'Data-driven sales insights and predictions',
      icon: BarChart3,
      features: ['Performance analytics', 'Revenue forecasting', 'Trend analysis']
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: '3x Sales Productivity',
      description: 'Automate repetitive tasks and focus on high-value activities'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Never miss a sales opportunity with round-the-clock assistance'
    },
    {
      icon: Users,
      title: 'Better Conversion',
      description: 'AI insights lead to higher conversion rates'
    },
    {
      icon: TrendingUp,
      title: 'Increased Revenue',
      description: 'Data-driven decisions result in higher sales performance'
    }
  ];

  const useCases = [
    {
      industry: 'B2B Sales',
      applications: ['Lead qualification', 'Account management', 'Pipeline optimization']
    },
    {
      industry: 'E-commerce',
      applications: ['Customer segmentation', 'Personalized recommendations', 'Abandoned cart recovery']
    },
    {
      industry: 'Real Estate',
      applications: ['Lead nurturing', 'Property matching', 'Client communication']
    },
    {
      industry: 'Financial Services',
      applications: ['Product recommendations', 'Risk assessment', 'Client onboarding']
    }
  ];

  const salesModules = [
    {
      module: 'Lead Management',
      components: ['Lead capture', 'Scoring', 'Nurturing', 'Conversion tracking'],
      icon: Target
    },
    {
      module: 'Communication',
      components: ['Email automation', 'SMS campaigns', 'Social media', 'Chat integration'],
      icon: MessageCircle
    },
    {
      module: 'Analytics',
      components: ['Performance metrics', 'ROI tracking', 'Forecasting', 'Reporting'],
      icon: BarChart3
    },
    {
      module: 'Integration',
      components: ['CRM systems', 'Marketing tools', 'Communication platforms', 'Analytics tools'],
      icon: Network
    }
  ];

  return (
    <>
      <SEO 
        title="AI Sales Assistant - Intelligent Sales Automation | Zion Tech Group"
        description="Transform your sales process with AI-powered assistance. Intelligent lead scoring, automated outreach, and customer insights for higher conversions."
        keywords="AI sales assistant, sales automation, lead scoring, customer intelligence, sales analytics, CRM automation"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20"></div>
          <div className="container-responsive relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
                <MessageCircle className="w-4 h-4" />
                AI Sales Solutions
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                AI Sales Assistant
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your sales process with AI-powered assistance. Intelligent lead scoring, 
                automated outreach, and customer insights for higher conversions and revenue growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Schedule Demo
                </button>
                <button className="px-8 py-4 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-gray-800/50">
                  View Features
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Advanced AI Sales Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI technology with sales expertise to deliver 
                comprehensive solutions that transform your sales performance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sales Modules Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Comprehensive Sales Modules
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From lead generation to customer retention, our platform covers all aspects of sales.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {salesModules.map((module, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{module.module}</h3>
                  <ul className="space-y-2">
                    {module.components.map((component, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <ArrowRight className="w-4 h-4 text-indigo-400" />
                        {component}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Complete Sales Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From lead generation to customer retention, our platform addresses the full spectrum of sales challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                      <p className="text-gray-400 mb-4">{solution.description}</p>
                      <ul className="space-y-2">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Choose AI Sales Assistant?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the transformative power of AI in sales automation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI sales assistant serves diverse industries with tailored solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">{useCase.industry}</h3>
                  <ul className="space-y-2">
                    {useCase.applications.map((app, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <ArrowRight className="w-4 h-4 text-blue-400" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container-responsive">
            <div className="bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Sales?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join leading organizations who are already using our AI platform to increase 
                sales productivity and drive revenue growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border border-gray-600 hover:border-gray-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-gray-800/50">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Let's Discuss Your Sales Needs
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                  Our sales AI experts are ready to help you implement the right solutions 
                  for your organization. Get in touch to learn more.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span>364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Request Information</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Organization"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Tell us about your sales automation needs..."
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}