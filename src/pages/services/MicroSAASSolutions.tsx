import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star, TrendingUp, Users, DollarSign, Zap, Target, BarChart3, MessageCircle, Settings, ShoppingCart, Globe, Cloud, Brain, Shield, Rocket, BookOpen, FileText, PenTool, Mail, Phone, Calendar, CreditCard, Award, Briefcase, Package, Monitor } from 'lucide-react';

interface MicroSaasService {
  name: string;
  description: string;
  features: string[];
  pricing: string;
  category: string;
  icon: React.ComponentType<any>;
  color: string;
  popular?: boolean;
  link: string;
}

const microSaasServices: MicroSaasService[] = [
  {
    name: 'AI Lead Scoring',
    description: 'Prioritize your sales pipeline with intelligent lead scoring powered by machine learning',
    features: [
      'Real-time lead scoring',
      'CRM integration',
      'Predictive analytics',
      'Custom scoring models',
      'Performance tracking'
    ],
    pricing: 'Starting at $99/month',
    category: 'Sales & Marketing',
    icon: TrendingUp,
    color: 'from-blue-500 to-cyan-500',
    popular: true,
    link: '/services/ai-lead-scoring'
  },
  {
    name: 'Website AI Chatbot',
    description: '24/7 intelligent customer support with natural language processing capabilities',
    features: [
      'Natural language processing',
      'Multi-language support',
      'Knowledge base integration',
      'Live handoff to humans',
      'Analytics dashboard'
    ],
    pricing: 'Starting at $49/month',
    category: 'Customer Support',
    icon: MessageCircle,
    color: 'from-green-500 to-emerald-500',
    link: '/services/website-ai-chatbot'
  },
  {
    name: 'RAG Search',
    description: 'Advanced search with retrieval-augmented generation for accurate, citation-backed answers',
    features: [
      'Semantic search',
      'Source citations',
      'Real-time indexing',
      'API integration',
      'Custom data sources'
    ],
    pricing: 'Starting at $149/month',
    category: 'AI & Search',
    icon: BookOpen,
    color: 'from-purple-500 to-pink-500',
    link: '/services/rag-search'
  },
  {
    name: 'MLOps Pipeline',
    description: 'Complete machine learning operations platform for model deployment and monitoring',
    features: [
      'Model deployment',
      'Performance monitoring',
      'Auto-scaling',
      'A/B testing',
      'Data drift detection'
    ],
    pricing: 'Starting at $299/month',
    category: 'AI & ML',
    icon: Settings,
    color: 'from-orange-500 to-red-500',
    link: '/services/mlops-pipeline'
  },
  {
    name: 'E-commerce Personalization',
    description: 'AI-powered product recommendations and personalized shopping experiences',
    features: [
      'Product recommendations',
      'Personalized search',
      'Dynamic pricing',
      'Customer segmentation',
      'Real-time analytics'
    ],
    pricing: 'Starting at $199/month',
    category: 'E-commerce',
    icon: ShoppingCart,
    color: 'from-pink-500 to-rose-500',
    link: '/services/ecommerce-personalization'
  },
  {
    name: 'Returns Management SaaS',
    description: 'Streamline your return process with automated workflows and analytics',
    features: [
      'Automated return processing',
      'Refund management',
      'Inventory tracking',
      'Customer notifications',
      'Analytics dashboard'
    ],
    pricing: 'Starting at $79/month',
    category: 'Operations',
    icon: Briefcase,
    color: 'from-indigo-500 to-blue-500',
    link: '/services/returns-management'
  },
  {
    name: 'Vendor Risk Management',
    description: 'Comprehensive vendor risk assessment and monitoring platform',
    features: [
      'Risk assessment',
      'Compliance monitoring',
      'Automated reporting',
      'Document management',
      'Alert system'
    ],
    pricing: 'Starting at $249/month',
    category: 'Risk & Compliance',
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    link: '/services/vendor-risk-management'
  },
  {
    name: 'AI SEO Optimizer',
    description: 'Intelligent SEO optimization with content analysis and keyword recommendations',
    features: [
      'Keyword analysis',
      'Content optimization',
      'Competitor tracking',
      'Rank monitoring',
      'Technical SEO audit'
    ],
    pricing: 'Starting at $129/month',
    category: 'Marketing',
    icon: TrendingUp,
    color: 'from-cyan-500 to-blue-500',
    link: '/services/ai-seo-optimizer'
  },
  {
    name: 'SaaS Churn Predictor',
    description: 'Predict and prevent customer churn with advanced analytics and ML models',
    features: [
      'Churn prediction',
      'Customer health scoring',
      'Retention recommendations',
      'Automated alerts',
      'Cohort analysis'
    ],
    pricing: 'Starting at $179/month',
    category: 'Analytics',
    icon: BarChart3,
    color: 'from-green-500 to-teal-500',
    link: '/services/saas-churn-predictor'
  },
  {
    name: 'API Monitoring SaaS',
    description: 'Real-time API monitoring and performance analytics for better reliability',
    features: [
      'Real-time monitoring',
      'Performance analytics',
      'Uptime tracking',
      'Alert notifications',
      'Error tracking'
    ],
    pricing: 'Starting at $89/month',
    category: 'DevOps',
    icon: Monitor,
    color: 'from-violet-500 to-purple-500',
    link: '/services/api-monitoring'
  },
  {
    name: 'GDPR Cookie Compliance',
    description: 'Automated GDPR compliance solution for cookie management and consent',
    features: [
      'Cookie scanning',
      'Consent management',
      'Compliance reporting',
      'Policy generation',
      'Multi-language support'
    ],
    pricing: 'Starting at $59/month',
    category: 'Compliance',
    icon: FileText,
    color: 'from-blue-500 to-indigo-500',
    link: '/services/gdpr-cookie-compliance'
  },
  {
    name: 'AI Proofreading Studio',
    description: 'Professional proofreading and editing powered by advanced AI language models',
    features: [
      'Grammar correction',
      'Style suggestions',
      'Tone analysis',
      'Plagiarism detection',
      'Multi-language support'
    ],
    pricing: 'Starting at $39/month',
    category: 'Content',
    icon: PenTool,
    color: 'from-emerald-500 to-green-500',
    link: '/services/ai-proofreading-studio'
  }
];

const categories = [
  { name: 'Sales & Marketing', icon: TrendingUp, count: 3 },
  { name: 'Customer Support', icon: MessageCircle, count: 1 },
  { name: 'AI & Search', icon: Brain, count: 2 },
  { name: 'E-commerce', icon: ShoppingCart, count: 1 },
  { name: 'Operations', icon: Settings, count: 1 },
  { name: 'Risk & Compliance', icon: Shield, count: 2 },
  { name: 'Analytics', icon: BarChart3, count: 1 },
  { name: 'DevOps', icon: Monitor, count: 1 },
  { name: 'Content', icon: PenTool, count: 1 }
];

export default function MicroSAASSolutions() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-3">
                <Rocket className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ready-to-deploy micro SaaS applications that solve specific business challenges. 
              Each solution is designed for rapid implementation with transparent pricing and immediate ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Get Started
              </Link>
              <Link
                to="/schedule-demo"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              selectedCategory === 'All'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            All Solutions ({microSaasServices.length})
          </button>
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                selectedCategory === category.name
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.name} ({category.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.name}
              className={`bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 ${
                service.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {service.popular && (
                <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                {/* Service Header */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-lg font-semibold text-blue-600">{service.pricing}</div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="space-y-3">
                  <Link
                    to={service.link}
                    className="block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/request-quote"
                    className="block w-full text-center border border-gray-300 text-gray-700 px-4 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Micro SaaS Solutions?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built for rapid deployment and immediate impact on your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapid Deployment</h3>
              <p className="text-gray-600">Get up and running in hours, not months. Our solutions are designed for immediate implementation.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">No hidden fees or surprise costs. Clear, predictable pricing that scales with your business.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Focused Solutions</h3>
              <p className="text-gray-600">Each solution addresses specific business challenges with laser-focused functionality.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Grade</h3>
              <p className="text-gray-600">Built with enterprise-level security, scalability, and reliability standards.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Solutions CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 opacity-90">
            Don't see exactly what you need? We can build custom micro SaaS solutions tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Request Custom Solution
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Talk to Expert
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Get answers to common questions about our Micro SaaS solutions</p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What makes these "micro" SaaS solutions?
              </h3>
              <p className="text-gray-600">
                Our micro SaaS solutions are focused, single-purpose applications that solve specific business problems. 
                They're designed for rapid deployment, easy integration, and immediate value without the complexity of larger platforms.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How quickly can I get started?
              </h3>
              <p className="text-gray-600">
                Most of our micro SaaS solutions can be deployed within 24-48 hours. Setup time varies depending on the complexity 
                of your requirements and integrations needed.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you offer integrations with existing systems?
              </h3>
              <p className="text-gray-600">
                Yes! All our solutions come with API access and can integrate with popular business tools like CRMs, 
                email platforms, analytics tools, and more. Custom integrations are also available.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What kind of support do you provide?
              </h3>
              <p className="text-gray-600">
                We provide comprehensive support including setup assistance, training, ongoing technical support, 
                and regular updates. Support levels vary by plan, with enterprise customers receiving priority support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}