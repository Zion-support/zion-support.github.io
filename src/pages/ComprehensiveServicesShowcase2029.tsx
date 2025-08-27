import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Zap, 
  BarChart3, 
  MessageCircle, 
  Target, 
  Code, 
  Cloud, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Star,
  Globe,
  Lock,
  Cpu,
  Database,
  Workflow
} from 'lucide-react';

export default function ComprehensiveServicesShowcase2029() {
  const featuredServices = [
    {
      title: 'AI Code Review & Security Scanner',
      description: 'Automate code reviews, detect security vulnerabilities, and ensure code quality with AI-powered analysis.',
      icon: <Shield className="h-8 w-8 text-white" />,
      path: '/services/ai-code-review-security-scanner',
      category: 'Security & Development',
      pricing: 'From $299/month',
      features: ['99.7% accuracy', 'OWASP Top 10 coverage', 'Multi-language support', 'SOC2 compliance']
    },
    {
      title: 'AI DevOps Automation Platform',
      description: 'Revolutionize your DevOps with AI-driven automation, intelligent monitoring, and predictive analytics.',
      icon: <Cloud className="h-8 w-8 text-white" />,
      path: '/services/ai-devops-automation-platform',
      category: 'DevOps & Infrastructure',
      pricing: 'From $499/month',
      features: ['80% faster deployments', '40% cost reduction', '99.9% success rate', 'Multi-cloud support']
    },
    {
      title: 'AI Business Intelligence & Analytics',
      description: 'Transform business data into actionable intelligence with AI-driven analytics and predictive insights.',
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      path: '/services/ai-business-intelligence-analytics',
      category: 'Analytics & BI',
      pricing: 'From $399/month',
      features: ['95% forecast accuracy', 'Real-time insights', '100+ data sources', 'Predictive modeling']
    },
    {
      title: 'AI Customer Experience & Support',
      description: 'Revolutionize customer support with AI-driven automation, intelligent routing, and personalized experiences.',
      icon: <MessageCircle className="h-8 w-8 text-white" />,
      path: '/services/ai-customer-experience-support',
      category: 'Customer Support',
      pricing: 'From $199/month',
      features: ['95% chatbot accuracy', '80% faster response', 'Multi-channel support', 'Sentiment analysis']
    },
    {
      title: 'AI Marketing Automation & Personalization',
      description: 'Revolutionize marketing with AI-driven automation, intelligent personalization, and predictive analytics.',
      icon: <Target className="h-8 w-8 text-white" />,
      path: '/services/ai-marketing-automation-personalization',
      category: 'Marketing & Automation',
      pricing: 'From $299/month',
      features: ['40-60% conversion boost', 'Real-time personalization', 'Multi-channel orchestration', 'ROI optimization']
    },
    {
      title: 'AI Sales Copilot Suite',
      description: 'Automate notes, enrich CRM data, and guide reps with actionable insights.',
      icon: <Users className="h-8 w-8 text-white" />,
      path: '/services/ai-sales-copilot',
      category: 'Sales & CRM',
      pricing: 'From $1,500/month',
      features: ['40-60% admin time reduction', 'CRM auto-updates', 'Lead scoring', 'Industry playbooks']
    }
  ];

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: <Brain className="h-6 w-6" />,
      count: 12,
      description: 'Cutting-edge AI solutions for business automation and intelligence'
    },
    {
      name: 'Security & Compliance',
      icon: <Shield className="h-6 w-6" />,
      count: 8,
      description: 'Advanced security solutions and compliance automation'
    },
    {
      name: 'DevOps & Infrastructure',
      icon: <Cloud className="h-6 w-6" />,
      count: 6,
      description: 'Cloud-native solutions and infrastructure automation'
    },
    {
      name: 'Business Intelligence',
      icon: <BarChart3 className="h-6 w-6" />,
      count: 5,
      description: 'Data analytics and business intelligence platforms'
    },
    {
      name: 'Customer Experience',
      icon: <MessageCircle className="h-6 w-6" />,
      count: 7,
      description: 'Customer support and experience optimization'
    },
    {
      name: 'Marketing & Sales',
      icon: <Target className="h-6 w-6" />,
      count: 9,
      description: 'Marketing automation and sales enablement'
    }
  ];

  const benefits = [
    'Increase operational efficiency by 40-80%',
    'Reduce costs by 30-60% through automation',
    'Improve customer satisfaction by 35-50%',
    'Boost revenue through data-driven insights',
    'Achieve 99.9% accuracy and reliability',
    'Scale operations without proportional cost increase'
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Group <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">2029 Services Showcase</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive suite of AI-powered micro SAAS services, IT solutions, and cutting-edge technology platforms. 
              Transform your business with intelligent automation, advanced analytics, and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200">
                Visit Main Site
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Service Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category) => (
              <div key={category.name} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mr-3">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                    <p className="text-sm text-cyan-400">{category.count} services</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredServices.map((service) => (
              <div key={service.title} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-cyan-500 transition-colors">
                <div className="flex items-start mb-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mr-4">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                      <span className="text-sm text-emerald-400 font-medium">{service.pricing}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-slate-300 text-sm mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature) => (
                        <span key={feature} className="px-2 py-1 bg-slate-900/60 border border-slate-700/60 rounded text-xs text-slate-300">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Link 
                      to={service.path}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center">
                <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <p className="text-slate-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a href="tel:+13024640950" className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200">
              Call +1 302 464 0950
            </a>
          </div>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
            <div className="space-y-2 text-slate-300">
              <p><strong>Email:</strong> <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:underline">kleber@ziontechgroup.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+13024640950" className="text-cyan-400 hover:underline">+1 302 464 0950</a></p>
              <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
              <p><strong>Website:</strong> <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}