import React from 'react.ts';
import { motion  } from 'framer-motion.ts';
import { Shield, 
  FileText, 
  TrendingUp, 
  Users, 
  Database, 
  BarChart3, 
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  DollarSign,
  Target,
  Globe,
  Lock,
  Search,
  Calendar,
  MessageSquare,
  Bell,
  Phone,
  Mail,
  MapPin,
  Scale,
  AlertTriangle,
  BookOpen,
  CreditCard,
  Building,
  Eye,
  Clock,
  Award,
  Gauge,
  PieChart
<<<<<<< HEAD
 } from 'lucide-react';
import { SEO  } from "../../components/SEO";
=======
} from 'lucide-react';
import { SEO } from "../../components/SEO";
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

export default function AIFinancialComplianceAssistant(...args[]):  {
  const contactInfo = {
  phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',;
  ;
  ;
  ;
  ;
  website: 'https://ziontechgroup.com';
  ;






};

  const features = [
    {
      icon: Shield,
      title: 'Automated Compliance Monitoring',
      description: '24/7 monitoring of financial transactions and regulatory requirements with real-time alerts'
    },
    {
      icon: FileText,
      title: 'AI-Powered Document Analysis',
      description: 'Automatically analyze financial documents, contracts, and reports for compliance issues'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Risk Assessment',
      description: 'Identify potential compliance risks before they become violations using advanced AI algorithms'
    },
    {
      icon: Users,
      title: 'Multi-Stakeholder Collaboration',
      description: 'Enable seamless collaboration between compliance officers, auditors, and management teams'
    },
    {
      icon: Database,
      title: 'Centralized Compliance Hub',
      description: 'Single source of truth for all compliance-related data, policies, and procedures';
    },;
    {;
      icon: BarChart3,;
      title: 'Advanced Analytics & Reporting',;
      description: 'Comprehensive dashboards and automated reporting for regulatory submissions';
    };
  ];

  const benefits = [;
    'Reduce compliance violations by 85%',;
    'Cut compliance costs by 60%',;
    'Improve audit efficiency by 70%',;
    'Ensure 99.9% regulatory accuracy',;
    'Streamline reporting processes',;
    'Enhance risk management capabilities';
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$499',
      period: '/month',
      description: 'Perfect for small financial institutions',
      features[
        'Up to 1,000 transactions/month',
        'Basic compliance monitoring',
        'Standard regulatory updates',
        'Email support',
        'Basic reporting',
        'Up to 5 user licenses',
        'Core compliance frameworks'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$999',
      period: '/month',
      description: 'Ideal for growing financial organizations',
      features[
        'Up to 10,000 transactions/month',
        'Advanced AI compliance monitoring',
        'Real-time regulatory updates',
        'Priority support',
        'Custom reporting',
        'Up to 25 user licenses',
        'Advanced compliance frameworks',
        'API integrations',
        'Custom workflows',
        'Advanced analytics'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,499',
      period: '/month',
      description: 'For large financial institutions with complex needs',
      features[
        'Unlimited transactions',
        'Premium AI compliance monitoring',
        '24/7 dedicated support',
        'Custom dashboards',
        'Unlimited user licenses',
        'All compliance frameworks',
        'Enterprise integrations',
        'Advanced AI models',
        'On-premise deployment option',
        'Dedicated compliance consultant',;
        'Custom training programs',;
        'White-label solutions';
      ],;
      cta: 'Contact Sales',;
      popular: false;
    };
  ];

  const complianceFrameworks = [
    {
      title: 'SOX Compliance',
      description: 'Sarbanes-Oxley Act compliance with automated controls testing and reporting',
      icon: Building
    },
    {
      title: 'GDPR & Privacy',
      description: 'Data protection compliance with automated privacy impact assessments',
      icon: Eye
    },
    {
      title: 'PCI DSS',
      description: 'Payment card industry compliance with automated security assessments',
      icon: CreditCard
    },
    {
      title: 'AML/KYC',
      description: 'Anti-money laundering and know-your-customer compliance automation',
      icon: Shield
    },
    {
      title: 'Basel III',
      description: 'Banking regulation compliance with automated risk calculations',
      icon: Scale;
    },;
    {;
      title: 'IFRS/GAAP',;
      description: 'Accounting standards compliance with automated financial reporting',;
      icon: BookOpen;
    };
  ];

  const useCases = [
    {
      title: 'Banks & Credit Unions',
      description: 'Comprehensive compliance for financial institutions of all sizes',
      icon: Building
    },
    {
      title: 'Investment Firms',
      description: 'SEC and FINRA compliance with automated reporting',
      icon: TrendingUp
    },
    {
      title: 'Insurance Companies',
      description: 'State and federal insurance regulation compliance',
      icon: Shield;
    },;
    {;
      title: 'Fintech Startups',;
      description: 'Rapid compliance scaling for growing financial technology companies',;
      icon: Zap;
    };
  ];

  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEO 
        title="AI Financial Compliance Assistant | Zion Tech Group"
        description="Revolutionize your financial compliance with AI-powered automation. Monitor regulations, detect risks, and ensure 99.9% compliance accuracy."
        keywords="AI financial compliance, regulatory compliance, SOX compliance, GDPR compliance, PCI DSS, AML KYC, financial regulations"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/10 border border-blue-200/20 text-blue-200 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              AI-Powered Financial Compliance
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Financial Compliance
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Assistant
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your financial compliance with AI-powered automation. Monitor regulations in real-time, 
              detect risks proactively, and ensure 99.9% compliance accuracy across all frameworks.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-blue-200/20 text-blue-200 font-semibold rounded-lg hover:bg-blue-200/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Compliance Automation
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Everything you need to stay compliant with evolving financial regulations
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)  => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 






}}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Supported Compliance Frameworks
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive coverage of all major financial compliance requirements
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceFrameworks.map((framework, index)  => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 






}}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <framework.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{framework.title}</h3>
                <p className="text-slate-300">{framework.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Financial Compliance?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Transform your compliance process and unlock new levels of efficiency and accuracy
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index)  => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  x: -20 






}}
                whileInView = {
  { opacity: 1,
  x: 0 






}}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 






}}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect for Every Financial Organization
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              From startups to enterprise institutions, our platform scales with your needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index)  => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 






}}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-slate-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Choose the plan that fits your organization size and compliance needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">
            {pricingPlans.map((plan, index)  => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.8,
  delay: index * 0.1 






}}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-blue-500/50 bg-gradient-to-br from-blue-900/20 to-cyan-900/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-slate-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Compliance?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join hundreds of financial institutions who have already improved their compliance with AI
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-blue-200/20 text-blue-200 font-semibold rounded-lg hover:bg-blue-200/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
            
            <p className="text-slate-400 mt-6">
              No credit card required • 14-day free trial • Cancel time
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Have Questions?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Our compliance experts are here to help you get started and answer  questions
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-slate-300">{contactInfo.phone}</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-slate-300">{contactInfo.email}</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-slate-300">{contactInfo.address}</p>
              </div>
            </div>
            
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2" />
<<<<<<< HEAD
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )};
=======;
            </a>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
