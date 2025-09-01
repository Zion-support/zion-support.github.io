import React from 'react';
import { motion } from 'framer-motion';
import {

  Shield, 
  FileText, 
  Globe, 
  AlertTriangle, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  Users,
  Zap,
  TrendingUp,
  Award,
  Star,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ArrowRight,
  Scale,
  Gavel,
  Database,
  Lock,
  Eye,
  Bell,
  FileCheck,
  BarChart,
  Target,
  Rocket
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AILegalComplianceAutomation() {

  const contactInfo = {

    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const features = [
    {

      icon: Globe,
      title: 'Multi-Jurisdiction Compliance',
      description: 'Monitor regulatory requirements across multiple jurisdictions simultaneously with AI-powered analysis'
    },
    {

      icon: FileText,
      title: 'AI Document Analysis',
      description: 'Automated analysis of legal documents, contracts, and regulatory filings with 95% accuracy'
    },
    {

      icon: AlertTriangle,
      title: 'Regulatory Change Alerts',
      description: 'Real-time notifications of regulatory changes that impact your business operations'
    },
    {

      icon: BarChart3,
      title: 'Risk Assessment Scoring',
      description: 'AI-powered risk scoring and prioritization to focus on high-impact compliance issues'
    },
    {

      icon: Clock,
      title: 'Automated Reporting',
      description: 'Generate comprehensive compliance reports automatically, saving 40+ hours per month'
    },
    {

      icon: Lock,
      title: 'Audit Trail Management',
      description: 'Complete audit trails and documentation for regulatory examinations and internal reviews'
    }
  ];

  const benefits = [
    {

      icon: TrendingUp,
      title: 'Reduce Compliance Costs by 60%',
      description: 'Automate routine compliance tasks and reduce manual review requirements'
    },
    {

      icon: CheckCircle,
      title: 'Improve Accuracy by 95%',
      description: 'AI algorithms eliminate human error and ensure consistent compliance monitoring'
    },
    {

      icon: Clock,
      title: 'Save 40+ Hours Per Month',
      description: 'Automate document review, reporting, and regulatory monitoring tasks'
    },
    {

      icon: Shield,
      title: 'Minimize Regulatory Risks',
      description: 'Proactive identification and mitigation of compliance risks before they become issues'
    }
  ];

  const pricing = [
    {

      name: 'Starter',
      price: '$799',
      period: '/month',
      description: 'Perfect for small law firms and legal departments',
      features: [
        'Up to 5 jurisdictions',
        'Basic document analysis',
        'Monthly compliance reports',
        'Email support',
        'Standard integrations'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {

      name: 'Professional',
      price: '$1,299',
      period: '/month',
      description: 'Ideal for mid-size organizations with complex compliance needs',
      features: [
        'Up to 15 jurisdictions',
        'Advanced AI analysis',
        'Real-time alerts',
        'Priority support',
        'Custom integrations',
        'Risk assessment tools'
      ],
      cta: 'Schedule Demo',
      popular: true
    },
    {

      name: 'Enterprise',
      price: '$2,499',
      period: '/month',
      description: 'For large organizations requiring comprehensive compliance management',
      features: [
        'Unlimited jurisdictions',
        'Full AI suite',
        '24/7 monitoring',
        'Dedicated support',
        'Custom development',
        'Advanced analytics',
        'API access'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const testimonials = [
    {

      name: 'Sarah Johnson',
      role: 'General Counsel',
      company: 'TechCorp Inc.',
      content: 'This platform has revolutionized our compliance management. We\'ve reduced our compliance costs by 65% and improved our accuracy significantly.',
      rating: 5
    },
    {

      name: 'Michael Chen',
      role: 'Compliance Officer',
      company: 'Global Financial Services',
      content: 'The AI-powered regulatory monitoring is game-changing. We catch compliance issues before they become problems.',
      rating: 5
    },
    {

      name: 'Emily Rodriguez',
      role: 'Legal Director',
      company: 'Healthcare Solutions',
      content: 'Automated reporting saves us hours every month. The platform is intuitive and powerful.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEO 
        title="AI Legal Compliance Automation | Zion Tech Group"
        description="Intelligent legal compliance platform that automates regulatory monitoring, document analysis, and compliance reporting across multiple jurisdictions."
        keywords="AI legal compliance, regulatory monitoring, document analysis, compliance automation, legal tech, risk management"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-blue-600/20 rounded-full">
                <Scale className="h-8 w-8 text-blue-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Legal Compliance Automation
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Intelligent legal compliance platform that automates regulatory monitoring, document analysis, and compliance reporting across multiple jurisdictions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${contactInfo.email}?subject=AI Legal Compliance Automation Demo Request`}
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Market Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The legal compliance market is experiencing rapid digital transformation, with AI-powered solutions becoming essential for organizations to manage complex regulatory requirements efficiently.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center p-6 bg-blue-50 rounded-xl"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">$12.8B</div>
              <div className="text-lg font-semibold text-gray-900">Market Size</div>
              <div className="text-gray-600">Legal Tech Industry</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center p-6 bg-purple-50 rounded-xl"
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">40%</div>
              <div className="text-lg font-semibold text-gray-900">Annual Growth</div>
              <div className="text-gray-600">AI Compliance Solutions</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center p-6 bg-green-50 rounded-xl"
            >
              <div className="text-4xl font-bold text-green-600 mb-2">60%</div>
              <div className="text-lg font-semibold text-gray-900">Cost Reduction</div>
              <div className="text-gray-600">Average for Users</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform provides comprehensive compliance management capabilities designed for modern legal departments.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your compliance operations with AI-powered automation and intelligent insights.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="p-3 bg-green-100 rounded-lg">
                  <benefit.icon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that best fits your organization's compliance needs and scale as you grow.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-lg p-8 ${

                  plan.popular ? 'ring-2 ring-blue-500 relative' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-1">
                    {plan.price}
                    <span className="text-lg font-normal text-gray-500">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href={`mailto:${contactInfo.email}?subject=${plan.name} Plan Inquiry`}
                  className="w-full inline-flex justify-center items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of organizations that have transformed their compliance operations with our platform.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role}, {testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Compliance Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join the future of legal compliance with AI-powered automation. Schedule a demo today and see how we can help your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${contactInfo.email}?subject=AI Legal Compliance Automation Demo Request`}
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to revolutionize your compliance operations? Contact our team to learn more about our AI-powered platform.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center p-6 bg-blue-50 rounded-xl"
            >
              <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
              <a href={`tel:${contactInfo.phone}`} className="text-blue-600 hover:text-blue-700">
                {contactInfo.phone}
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center p-6 bg-purple-50 rounded-xl"
            >
              <Mail className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-purple-600 hover:text-purple-700">
                {contactInfo.email}
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center p-6 bg-green-50 rounded-xl"
            >
              <MapPin className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-green-600">{contactInfo.address}</p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <a
              href={contactInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              Visit Our Website
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}