import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import {

  FileText,
  Search,
  Shield,
  Zap,
  CheckCircle,  ArrowRight,
  Clock,
  DollarSign,
  Users,
  Globe,
  Lock,
  BarChart3,
  Brain,
  FileCheck,
  AlertTriangle,
  BookOpen,
  Scale,
  Gavel,
  Eye,
  Download,
  Share2,
  Phone,
  Mail,
  MapPin} from 'lucide-react';

const AILegalDocumentAnalyzer = () => {
  const features = [
    {

      icon: Brain,
      title: 'AI-Powered Analysis',
      description:'
        'Advanced machine learning algorithms analyze legal documents for key insights, risks, and opportunities'},
    {

      icon: Search,
      title: 'Smart Search & Discovery',
      description:'
        'Find relevant clauses, precedents, and legal references across your entire document library'},
    {

      icon: Shield,
      title: 'Risk Assessment',
      description:'
        'Automated identification of potential legal risks, compliance issues, and contract vulnerabilities'},
    {

      icon: FileCheck,
      title: 'Document Comparison',
      description:'
        'Compare multiple versions of documents to track changes and identify discrepancies'},
    {

      icon: AlertTriangle,
      title: 'Compliance Monitoring',
      description:'
        'Real-time monitoring of regulatory changes and their impact on your legal documents'},
    {

      icon: BarChart3,
      title: 'Analytics Dashboard',
      description:'
        'Comprehensive insights into document performance, risk trends, and compliance metrics'},
  ];

  const pricingPlans = [
    {

      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small law firms and solo practitioners',
      features: ['
        'Up to 100 documents/month',Basic AI analysis',Risk assessment',Email support',Standard compliance checks',
      ],
      popular: false},
    {

      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing legal practices',
      features: ['
        'Up to 1,000 documents/month',Advanced AI analysis',Custom risk scoring',Priority support',Advanced compliance monitoring',Document comparison tools',API access',
      ],
      popular: true},
    {

      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large law firms and corporate legal departments',
      features: ['
        'Unlimited documents',Custom AI models',White-label solution',Dedicated support',Advanced analytics',Custom integrations',On-premise deployment',SLA guarantees',
      ],
      popular: false},
  ];

  const useCases = [
    {

      title: 'Contract Review',
      description:'
        'Automate contract analysis for faster deal closure and risk mitigation',
      icon: FileText},
    {

      title: 'Compliance Audits',
      description:'
        'Streamline regulatory compliance with automated document monitoring',
      icon: Shield},
    {

      title: 'Due Diligence',
      description:'
        'Accelerate M&A due diligence with AI-powered document analysis',
      icon: Search},
    {

      title: 'Litigation Support',
      description:'
        'Quick discovery and analysis of relevant documents for legal cases',
      icon: Gavel},
  ];

  return()
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO"
<<<<<<< HEAD
        title="AI Legal Document Analyzer - Zion Tech Group"
        description="Transform legal document analysis with AI-powered insights, risk assessment, and compliance monitoring. Streamline your legal practice with cutting-edge technology."
        keywords="AI legal document analysis, legal tech, contract review, compliance monitoring, risk assessment, legal automation"
        canonical="https://ziontechgroup.com/services/ai-legal-document-analyzer"
      />
=======
        title="AI Legal Document Analyzer - Zion Tech Group""
        description="Transform legal document analysis with AI-powered insights, risk assessment, and compliance monitoring. Streamline your legal practice with cutting-edge technology.""
        keywords="AI legal document analysis, legal tech, contract review, compliance monitoring, risk assessment, legal automation""        canonical="https://ziontechgroup.com/services/ai-legal-document-analyzer"
       />
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954

      {/* Hero Section */}"
      <section className="relative py-20 overflow-hidden">"
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />"
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div"
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >"
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">"
              <Brain className="w-4 h-4 mr-2" />              AI-Powered Legal Technology
            </div>
"
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Legal Document"
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Analyzer
              </span>
            </h1>
"
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your legal practice with AI-powered document analysis.
              Automate contract review, risk assessment, and compliance
              monitoring to save time and reduce legal risks.
            </p>
"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a"
                href="#pricing"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                View Pricing"
                <ArrowRight className="ml-2 w-5 h-5" />              </a>
              <a"
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border border-slate-600 text-white font-semibold rounded-xl hover:border-slate-500 transition-all duration-200"
              >
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}"
      <section className="py-20">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div"
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >"
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features for Legal Professionals
            </h2>"
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Leverage cutting-edge AI technology to streamline your legal
              document workflow
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index (
              <motion.div
                key={index}"
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >"
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">"
                  <feature.icon className="w-6 h-6 text-white" />
                </div>"
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>"
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}"
      <section className="py-20 bg-slate-800/30">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div"
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >"
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real-World Applications
            </h2>"
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how AI document analysis transforms various legal workflows
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map(useCase: unknown, index: unknown (
              <motion.div
                key={index}"
                className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >"
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">"
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>"
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {useCase.title}
                </h3>"
                <p className="text-slate-300 text-lg">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}"
      <section id="pricing" className="py-20">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div"
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >"
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>"
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the plan that fits your practice size and needs
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map(plan: unknown, index: unknown (
              <motion.div
                key={index}
                className={`relative rounded-xl p-8 ${

                  plan.popular'
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 border-2 border-blue-400''
                    : 'bg-slate-800/50 border border-slate-700/50'`
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {plan.popular && ("
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">"
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
"
                <div className="text-center mb-8">"
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>"
                  <div className="flex items-baseline justify-center">"
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>"
                    <span className="text-slate-300 ml-1">{plan.period}</span>
                  </div>"
                  <p className="text-slate-300 mt-2">{plan.description}</p>
                </div>
"
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => ("
                    <li key={featureIndex} className="flex items-center">"
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />"                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a"
                  href="mailto:kleber@ziontechgroup.com?subject=AI Legal Document Analyzer - {plan.name} Plan"`
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${

                    plan.popular'
                      ? 'bg-white text-blue-600 hover:bg-slate-100''
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'`
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}"
      <section className="py-20 bg-slate-800/30">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div"
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >"
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Legal Practice?
            </h2>"
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Contact us today to learn how AI document analysis can streamline
              your workflow
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div"
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >"
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">"
                <Phone className="w-8 h-8 text-white" />
              </div>"
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>"              <p className="text-slate-300">+1 302 464 0950</p>
            </motion.div>

            <motion.div"
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >"
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">"
                <Mail className="w-8 h-8 text-white" />
              </div>"
              <h3 className="text-xl font-semibold text-white mb-2">
                Email Us
              </h3>"              <p className="text-slate-300">kleber@ziontechgroup.com</p>
            </motion.div>

            <motion.div"
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >"
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">"
                <MapPin className="w-8 h-8 text-white" />
              </div>"
              <h3 className="text-xl font-semibold text-white mb-2">
                Visit Us
              </h3>"
              <p className="text-slate-300">
                364 E Main St STE 1008
                <br />
                Middletown DE 19709
              </p>            </motion.div>
          </div>

          <motion.div"
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a"
              href="mailto:kleber@ziontechgroup.com?subject=AI Legal Document Analyzer Demo Request"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Request Demo"
              <ArrowRight className="ml-2 w-5 h-5" />            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )};

export default AILegalDocumentAnalyzer;
'"`