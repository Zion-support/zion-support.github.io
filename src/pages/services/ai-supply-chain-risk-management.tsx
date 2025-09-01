import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import {

  Shield,
  AlertTriangle,
  TrendingUp,
  Globe,
  CheckCircle,  ArrowRight,
  BarChart3,
  Brain,
  Network,
  Truck,
  Factory,
  Ship,
  Plane,
  Train,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Lock,
  Eye,
  Download,
  Share2,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  Zap,
  Target,
  Gauge,
  AlertCircle,
  FileText,
  Database,
  Cloud,
  Server} from 'lucide-react';

const AISupplyChainRiskManagement = () => {
  const features = [
    {

      icon: Brain,
      title: 'AI-Powered Risk Detection',
      description:'
        'Advanced machine learning algorithms identify potential supply chain disruptions before they occur'},
    {

      icon: Globe,
      title: 'Global Supply Chain Mapping',
      description:'
        'Real-time visualization of your entire supply network with risk hotspots and vulnerability analysis'},
    {

      icon: AlertTriangle,
      title: 'Early Warning System',
      description:'
        'Proactive alerts for potential disruptions, delays, and supply chain vulnerabilities'},
    {

      icon: TrendingUp,
      title: 'Predictive Analytics',
      description:'
        'Forecast supply chain risks using historical data and external factors like weather, politics, and economics'},
    {

      icon: Shield,
      title: 'Compliance Monitoring',
      description:'
        'Automated tracking of regulatory requirements and industry standards across your supply chain'},
    {

      icon: BarChart3,
      title: 'Risk Scoring Dashboard',
      description:'
        'Comprehensive risk assessment with real-time scoring and actionable insights'},
  ];

  const pricingPlans = [
    {

      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small businesses with basic supply chain needs',
      features: ['
        'Up to 50 suppliers',Basic risk monitoring',Email alerts',Standard reporting',Email support',
      ],
      popular: false},
    {

      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing companies with complex supply chains',
      features: ['
        'Up to 500 suppliers',Advanced AI risk detection',Real-time alerts',Custom risk scoring',Priority support',API access',Advanced analytics',Multi-user access',
      ],
      popular: true},
    {

      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large corporations with global supply networks',
      features: ['
        'Unlimited suppliers',Custom AI models',White-label solution',Dedicated support',Advanced analytics',Custom integrations',On-premise deployment',SLA guarantees',Custom training',
      ],
      popular: false},
  ];

  const useCases = [
    {

      title: 'Manufacturing',
      description:'
        'Monitor supplier performance and identify potential disruptions in manufacturing supply chains',
      icon: Factory},
    {

      title: 'Retail & E-commerce',
      description:'
        'Ensure product availability and manage inventory risks across retail networks',
      icon: Truck},
    {

      title: 'Healthcare',
      description:'
        'Maintain critical medical supply chains and ensure patient safety',
      icon: Shield},
    {

      title: 'Logistics',
      description:'
        'Optimize transportation routes and manage carrier risks in global logistics',
      icon: Ship},
  ];

  const riskTypes = [
    {

      title: 'Supplier Risk',
      description:'
        'Financial stability, operational capacity, and geographic location risks',
      icon: Factory,
      color: 'from-red-500 to-orange-500'},
    {

      title: 'Geopolitical Risk',
      description: 'Political instability, trade wars, and regulatory changes',
      icon: Globe,
      color: 'from-blue-500 to-purple-500'},
    {

      title: 'Environmental Risk',
      description:'
        'Natural disasters, climate change, and sustainability issues',
      icon: AlertTriangle,
      color: 'from-green-500 to-emerald-500'},
    {

      title: 'Financial Risk',
      description: 'Currency fluctuations, inflation, and economic instability',
      icon: DollarSign,
      color: 'from-yellow-500 to-orange-500'},
  ];

  return()
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO"
<<<<<<< HEAD
        title="AI Supply Chain Risk Management - Zion Tech Group"
        description="Protect your supply chain with AI-powered risk detection, predictive analytics, and real-time monitoring. Identify and mitigate risks before they impact your business."
        keywords="AI supply chain risk management, supply chain monitoring, risk detection, predictive analytics, supply chain optimization"
        canonical="https://ziontechgroup.com/services/ai-supply-chain-risk-management"
      />
=======
        title="AI Supply Chain Risk Management - Zion Tech Group""
        description="Protect your supply chain with AI-powered risk detection, predictive analytics, and real-time monitoring. Identify and mitigate risks before they impact your business.""
        keywords="AI supply chain risk management, supply chain monitoring, risk detection, predictive analytics, supply chain optimization""        canonical="https://ziontechgroup.com/services/ai-supply-chain-risk-management"
       />
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954

      {/* Hero Section */}"
      <section className="relative py-20 overflow-hidden">"
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20" />"
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div"
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >"
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">"
              <Shield className="w-4 h-4 mr-2" />              AI-Powered Risk Management
            </div>
"
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Supply Chain"
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Risk Management
              </span>
            </h1>
"
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Protect your business with AI-powered supply chain risk detection
              and predictive analytics. Identify vulnerabilities, monitor
              suppliers, and prevent disruptions before they impact your
              operations.
            </p>
"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a"
                href="#pricing"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
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
              Advanced Risk Management Features
            </h2>"
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Leverage cutting-edge AI technology to protect your supply chain
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index (
              <motion.div
                key={index}"
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >"
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">"
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

      {/* Risk Types Section */}"
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
              Comprehensive Risk Coverage
            </h2>"
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Monitor all types of supply chain risks with our AI-powered
              platform
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {riskTypes.map(risk: unknown, index: unknown (
              <motion.div
                key={index}"
                className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${risk.color} rounded-xl flex items-center justify-center mb-6`}
                >"
                  <risk.icon className="w-8 h-8 text-white" />
                </div>"
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {risk.title}
                </h3>"
                <p className="text-slate-300 text-lg">{risk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}"
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
              Industry Applications
            </h2>"
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our platform serves diverse industries with unique supply chain
              challenges
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map(useCase: unknown, index: unknown (
              <motion.div
                key={index}"
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >"
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 mx-auto">"
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>"
                <h3 className="text-xl font-semibold text-white mb-3">
                  {useCase.title}
                </h3>"
                <p className="text-slate-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}"
      <section id="pricing" className="py-20 bg-slate-800/30">"
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
              Choose the plan that fits your supply chain complexity and
              business size
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map(plan: unknown, index: unknown (
              <motion.div
                key={index}`
                className={`relative rounded-xl p-8 ${

                  plan.popular'
                    ? 'bg-gradient-to-br from-green-600 to-blue-600 border-2 border-green-400''
                    : 'bg-slate-800/50 border border-slate-700/50'`
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {plan.popular && ("
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">"
                    <span className="bg-gradient-to-r from-green-400 to-blue-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                  href="mailto:kleber@ziontechgroup.com?subject=AI Supply Chain Risk Management - {plan.name} Plan"`
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${

                    plan.popular'
                      ? 'bg-white text-green-600 hover:bg-slate-100''
                      : 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600'`
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
              Ready to Protect Your Supply Chain?
            </h2>"
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Contact us today to learn how AI risk management can safeguard
              your business
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
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">"
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
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">"
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
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">"
                <MapPinIcon className="w-8 h-8 text-white" />
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
              href="mailto:kleber@ziontechgroup.com?subject=AI Supply Chain Risk Management Demo Request"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Request Demo"
              <ArrowRight className="ml-2 w-5 h-5" />            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )};

export default AISupplyChainRiskManagement;
'"`