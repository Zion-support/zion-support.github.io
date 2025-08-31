import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Zap, Shield, Users, Cloud, Rocket, ArrowRight, 
  CheckCircle, Star, TrendingUp, Target, Globe, Lock,
  BarChart3, Workflow, Eye, Server, Database, Network,
  Cpu, Atom, Heart, DollarSign, Building2, ShoppingCart
} from 'lucide-react';

export default function AIServicesPage() {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI Business Intelligence',
      description: 'Advanced analytics and insights powered by machine learning algorithms.',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom ML Models', 'Data Visualization'],
      href: '/services/ai-business-intelligence-dashboard',
      badge: 'Popular'
    },
    {
      icon: Users,
      title: 'AI Customer Experience Platform',
      description: 'Personalized customer interactions and automated support systems.',
      features: ['Customer Segmentation', 'Behavioral Analysis', 'Automated Support', 'Personalization Engine'],
      href: '/services/ai-customer-experience-analytics-platform',
      badge: 'New'
    },
    {
      icon: Workflow,
      title: 'AI Workflow Orchestrator',
      description: 'Intelligent process automation and optimization across your organization.',
      features: ['Process Mining', 'Automation Rules', 'Performance Analytics', 'Integration Hub'],
      href: '/services/ai-workflow-orchestrator',
      badge: 'Trending'
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity Platform',
      description: 'Next-generation threat detection and security automation.',
      features: ['Threat Intelligence', 'Behavioral Analysis', 'Automated Response', 'Compliance Monitoring'],
      href: '/services/ai-cybersecurity-platform',
      badge: 'Hot'
    },
    {
      icon: Atom,
      title: 'Quantum AI Solutions',
      description: 'Cutting-edge quantum computing applications for complex problem solving.',
      features: ['Quantum ML', 'Optimization Algorithms', 'Financial Modeling', 'Research Tools'],
      href: '/services/quantum-edge-computing-solutions',
      badge: 'Advanced'
    },
    {
      icon: Rocket,
      title: 'AI Autonomous Operations',
      description: 'Self-managing systems that optimize business operations automatically.',
      features: ['Self-healing Systems', 'Predictive Maintenance', 'Resource Optimization', 'Performance Tuning'],
      href: '/services/ai-autonomous-business-operations-platform',
      badge: 'Enterprise'
    }
  ];

  const industrySolutions = [
    {
      icon: Heart,
      title: 'Healthcare AI',
      description: 'AI-powered diagnostics, patient care, and medical research solutions.',
      href: '/solutions/healthcare'
    },
    {
      icon: DollarSign,
      title: 'Financial AI',
      description: 'Risk assessment, fraud detection, and algorithmic trading systems.',
      href: '/solutions/financial'
    },
    {
      icon: Building2,
      title: 'Manufacturing AI',
      description: 'Predictive maintenance, quality control, and supply chain optimization.',
      href: '/solutions/manufacturing'
    },
    {
      icon: ShoppingCart,
      title: 'Retail AI',
      description: 'Customer insights, inventory management, and personalized marketing.',
      href: '/solutions/retail'
    }
  ];

  const aiCapabilities = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Supervised, unsupervised, and reinforcement learning algorithms for various use cases.',
      examples: ['Predictive Modeling', 'Pattern Recognition', 'Anomaly Detection', 'Recommendation Systems']
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Image and video analysis for automation, quality control, and security applications.',
      examples: ['Object Detection', 'Facial Recognition', 'Quality Inspection', 'Surveillance Systems']
    },
    {
      icon: MessageCircle,
      title: 'Natural Language Processing',
      description: 'Text analysis, language understanding, and automated communication systems.',
      examples: ['Chatbots', 'Sentiment Analysis', 'Document Processing', 'Language Translation']
    },
    {
      icon: Workflow,
      title: 'Process Automation',
      description: 'Intelligent automation of repetitive tasks and complex business processes.',
      examples: ['RPA Integration', 'Workflow Optimization', 'Decision Automation', 'Resource Management']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and optimize processes for 40-60% productivity gains.'
    },
    {
      icon: Target,
      title: 'Better Decision Making',
      description: 'Data-driven insights and predictive analytics for informed strategic decisions.'
    },
    {
      icon: Users,
      title: 'Enhanced Customer Experience',
      description: 'Personalized interactions and proactive support for improved satisfaction.'
    },
    {
      icon: Shield,
      title: 'Improved Security',
      description: 'Advanced threat detection and automated security responses.'
    },
    {
      icon: Globe,
      title: 'Scalable Solutions',
      description: 'AI systems that grow with your business and adapt to changing needs.'
    },
    {
      icon: Star,
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with cutting-edge AI capabilities.'
    }
  ];

  const caseStudies = [
    {
      title: 'Fortune 500 Manufacturing',
      description: 'Implemented AI-powered predictive maintenance, reducing downtime by 35% and saving $2M annually.',
      metrics: ['35% Downtime Reduction', '$2M Annual Savings', '99.5% Accuracy']
    },
    {
      title: 'Healthcare Provider Network',
      description: 'AI-driven patient care optimization improved outcomes by 25% and reduced costs by 20%.',
      metrics: ['25% Outcome Improvement', '20% Cost Reduction', '90% Patient Satisfaction']
    },
    {
      title: 'Financial Services Firm',
      description: 'AI fraud detection system prevented $5M in losses with 99.9% detection accuracy.',
      metrics: ['$5M Loss Prevention', '99.9% Detection Rate', 'Real-time Processing']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge artificial intelligence. From predictive analytics 
              to autonomous operations, we deliver AI solutions that drive real results.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/contact"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI solutions designed to solve real business challenges and drive measurable results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    {service.badge && (
                      <span className={`
                        px-3 py-1 text-xs font-medium rounded-full
                        ${service.badge === 'Popular' ? 'bg-green-100 text-green-800' : ''}
                        ${service.badge === 'New' ? 'bg-blue-100 text-blue-800' : ''}
                        ${service.badge === 'Trending' ? 'bg-purple-100 text-purple-800' : ''}
                        ${service.badge === 'Hot' ? 'bg-red-100 text-red-800' : ''}
                        ${service.badge === 'Advanced' ? 'bg-indigo-100 text-indigo-800' : ''}
                        ${service.badge === 'Enterprise' ? 'bg-gray-100 text-gray-800' : ''}
                      `}>
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Leverage the full spectrum of artificial intelligence technologies to solve complex business problems.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <capability.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{capability.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{capability.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {capability.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="text-sm text-gray-500 bg-gray-50 px-3 py-2 rounded">
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry-Specific AI Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored AI solutions designed for the unique challenges and opportunities in your industry.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industrySolutions.map((solution, index) => (
              <Link
                key={index}
                to={solution.href}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-200 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-200">
                  <solution.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {solution.title}
                </h3>
                <p className="text-gray-600 text-sm">{solution.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose AI?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the transformative benefits that AI can bring to your organization.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow duration-200">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from real clients. See how AI is transforming businesses across industries.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <div className="space-y-2">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center text-sm text-blue-700">
                      <Star className="w-4 h-4 mr-2" />
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Harness the Power of AI?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI can transform your business operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Schedule AI Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Common questions about our AI services and implementation process.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does it take to implement AI solutions?</h3>
              <p className="text-gray-600">
                Implementation timelines vary based on complexity, typically ranging from 4-12 weeks for standard solutions 
                to 6-18 months for enterprise-wide AI transformations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you provide ongoing support and maintenance?</h3>
              <p className="text-gray-600">
                Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, 
                and continuous optimization of your AI systems.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What data security measures do you implement?</h3>
              <p className="text-gray-600">
                We implement enterprise-grade security including encryption, access controls, compliance monitoring, 
                and regular security audits to protect your sensitive data.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can AI solutions integrate with existing systems?</h3>
              <p className="text-gray-600">
                Absolutely! Our AI solutions are designed to integrate seamlessly with your existing infrastructure, 
                databases, and business applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}