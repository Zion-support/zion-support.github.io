import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Shield, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  DollarSign, 
  Clock, 
  Rocket, 
  Award, 
  Globe, 
  Cpu, 
  Database, 
  Network, 
  Activity, 
  Eye, 
  Search, 
  Settings, 
  MessageCircle,
  FileText,
  ShoppingCart,
  Building2,
  Lightbulb,
  Code,
  Monitor,
  Smartphone,
  Wifi,
  Palette,
  Coins,
  Satellite,
  Handshake,
  BookOpen,
  Video,
  GraduationCap,
  HelpCircle,
  ShoppingCart as ShoppingCartIcon,
  Target,
  Workflow,
  Lock,
  Cloud,
  Server,
  Atom,
  Leaf,
  Gamepad2
} from 'lucide-react';

const AIPoweredCustomerChurnPredictor: React.FC = () => {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const features = [
    'Real-time churn risk scoring with 95% accuracy',
    'Advanced behavioral pattern analysis using machine learning',
    'Predictive analytics dashboard with customizable metrics',
    'Automated retention campaigns and intervention triggers',
    'Customer lifetime value prediction and optimization',
    'Integration with major CRM systems (Salesforce, HubSpot, etc.)',
    'Custom alert thresholds and notification system',
    'ROI tracking and comprehensive reporting suite',
    'Multi-channel customer interaction analysis',
    'A/B testing for retention strategies'
  ];

  const benefits = [
    'Reduce customer churn by up to 40%',
    'Increase customer lifetime value by 25-35%',
    'Optimize retention spend with data-driven insights',
    'Improve customer satisfaction scores',
    'Enable proactive customer success strategies',
    'Reduce customer acquisition costs',
    'Enhance brand loyalty and reputation',
    'Data-driven decision making for business growth'
  ];

  const useCases = [
    'SaaS subscription businesses',
    'E-commerce platforms and marketplaces',
    'Financial services and banking',
    'Telecommunications providers',
    'Healthcare and wellness services',
    'Subscription box services',
    'Online education platforms',
    'Digital media and entertainment'
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$299',
      billing: 'month',
      description: 'Perfect for small businesses starting their churn prevention journey',
      features: [
        'Up to 10,000 customer profiles',
        'Basic churn risk scoring',
        'Standard behavioral analysis',
        'Email support',
        'Basic reporting dashboard',
        'CRM integration (1 platform)'
      ],
      benefits: [
        'Early churn detection',
        'Basic retention insights',
        'Customer behavior understanding',
        'Reduced churn rates'
      ],
      bestFor: [
        'Small businesses (1-50 employees)',
        'Startups and early-stage companies',
        'Local service providers'
      ]
    },
    {
      name: 'Professional',
      price: '$599',
      billing: 'month',
      description: 'Advanced features for growing businesses with complex customer bases',
      features: [
        'Up to 100,000 customer profiles',
        'Advanced churn risk scoring',
        'Comprehensive behavioral analysis',
        'Automated retention campaigns',
        'Priority support',
        'Advanced analytics and reporting',
        'Multi-CRM integration',
        'Custom alert thresholds',
        'A/B testing capabilities',
        'API access'
      ],
      benefits: [
        'Comprehensive churn prevention',
        'Automated retention strategies',
        'Advanced customer insights',
        'Scalable customer success operations'
      ],
      bestFor: [
        'Medium businesses (51-200 employees)',
        'Growing SaaS companies',
        'E-commerce businesses'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      billing: 'month',
      description: 'Complete solution for large enterprises with complex customer ecosystems',
      features: [
        'Unlimited customer profiles',
        'Enterprise-grade churn prediction',
        'Custom machine learning models',
        'Advanced retention automation',
        'Dedicated success manager',
        'Custom integrations and APIs',
        'Advanced security and compliance',
        'Multi-tenant architecture',
        'White-label solutions',
        '24/7 priority support'
      ],
      benefits: [
        'Enterprise-grade churn prevention',
        'Custom AI models for your business',
        'Full automation and scalability',
        'Dedicated support and consultation'
      ],
      bestFor: [
        'Large enterprises (200+ employees)',
        'Multi-national corporations',
        'High-growth technology companies'
      ]
    }
  ];

  const technology = [
    'Machine Learning & AI',
    'Python & TensorFlow',
    'React & Node.js',
    'Real-time Data Processing',
    'Advanced Analytics Engine',
    'Cloud-native Architecture'
  ];

  const integrations = [
    'Salesforce CRM',
    'HubSpot CRM',
    'Stripe Payment Processing',
    'Shopify E-commerce',
    'Zapier Automation',
    'Custom API Integrations'
  ];

  const targetAudience = [
    'Growth-stage SaaS companies',
    'E-commerce businesses',
    'Customer success teams',
    'Business intelligence analysts',
    'Product managers',
    'Marketing teams'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Customer Churn Predictor
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Advanced machine learning platform that predicts customer churn with 95% accuracy, 
              enabling proactive retention strategies and revenue protection.
            </p>
            
            {/* Market Comparison */}
            <div className="inline-flex items-center gap-4 bg-slate-800/50 rounded-lg p-4 border border-slate-700">
              <div className="text-center">
                <p className="text-sm text-gray-400">Market Average</p>
                <p className="text-2xl font-bold text-gray-300 line-through">$800</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-400">Our Price</p>
                <p className="text-2xl font-bold text-cyan-400">$299</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-400">You Save</p>
                <p className="text-2xl font-bold text-green-400">63%</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform provides comprehensive churn prediction and prevention 
              capabilities designed for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-slate-800/50 rounded-lg border border-slate-700">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Business Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your customer retention strategy with data-driven insights and 
              automated intervention capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-slate-800/50 rounded-lg border border-slate-700">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 mb-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect For
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform is designed to serve businesses across various industries 
              that value customer retention and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your business needs and scale as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative overflow-hidden rounded-2xl border ${
                  tier.popular 
                    ? 'border-cyan-500 bg-gradient-to-br from-slate-800 to-slate-900' 
                    : 'border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900'
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-6">{tier.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400">/{tier.billing}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Best For</h4>
                    <ul className="space-y-2">
                      {tier.bestFor.map((audience, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <Users className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                          <span>{audience}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                        : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Integration Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Technology Stack
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Built with cutting-edge technologies to ensure scalability, 
                performance, and reliability.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {technology.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                    <Code className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Integrations
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Seamlessly integrate with your existing tools and workflows 
                for maximum efficiency.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {integrations.map((integration, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                    <Network className="w-5 h-5 text-green-400" />
                    <span className="text-white">{integration}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Who Should Use This?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform is designed for businesses and teams that are serious 
              about customer retention and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetAudience.map((audience, index) => (
              <div key={index} className="text-center p-6 bg-slate-800/50 rounded-lg border border-slate-700">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{audience}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI & Implementation Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-slate-800/50 rounded-lg border border-slate-700">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">ROI</h3>
              <p className="text-3xl font-bold text-green-400 mb-2">300%</p>
              <p className="text-gray-300">within 6 months</p>
            </div>

            <div className="text-center p-8 bg-slate-800/50 rounded-lg border border-slate-700">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Implementation</h3>
              <p className="text-3xl font-bold text-cyan-400 mb-2">2-3 weeks</p>
              <p className="text-gray-300">to get started</p>
            </div>

            <div className="text-center p-8 bg-slate-800/50 rounded-lg border border-slate-700">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Support</h3>
              <p className="text-3xl font-bold text-purple-400 mb-2">24/7</p>
              <p className="text-gray-300">technical support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Predict and Prevent Customer Churn?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to learn how our AI-powered churn prediction platform 
            can help you retain more customers and grow your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-cyan-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">{contactInfo.mobile}</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-cyan-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">{contactInfo.email}</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-cyan-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300 text-sm">{contactInfo.address}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Free Trial
            </Link>
            <Link
              to="/innovative-micro-saas-showcase-2026"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <Globe className="w-5 h-5 mr-2" />
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIPoweredCustomerChurnPredictor;