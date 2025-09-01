import {

  BarChart3, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  Brain, 
  Target, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  MessageSquare,
  Activity,
  PieChart,
  LineChart,
  UserCheck,
  Heart,
  Star,
  Award,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Server,
  Lock,
  Eye,
  Settings,
  Bell,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export default function AICustomerSuccessAnalytics() {
  return()
    <>
      <SEO title="AI Customer Success Analytics Platform - Zion Tech Group""""
        description="Advanced AI-powered customer success analytics platform for predicting churn, tracking success metrics, and optimizing customer relationships with real-time insights.""""
        canonical="/services/ai-customer-success-analytics""
       />""
      """
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">""
        {/* Hero Section */}"""
        <section className="relative py-20 overflow-hidden">"""
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>"""
          <div className="relative max-w-7xl mx-auto px-6">"""
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}"
                transition={{ duration: 0.6 }}""
              >"""
                <h1 className="text-5xl md:text-6xl font-bold mb-6">"""
                  <span className="bg-gradient-to-r from-green-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    AI Customer Success Analytics"
                  </span>""
                </h1>"""
                <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto">
                  Transform your customer success operations with AI-powered analytics that predict churn, "
                  track success metrics, and optimize customer relationships in real-time.""
                </p>"""
                <div className="flex flex-col sm:flex-row gap-4 justify-center">""
                  <Link"""
                    to="/request-quote""""
                    className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                  >
                    Get Started"
                  </Link>""
                  <Link"""
                    to="/demo""""
                    className="border border-slate-600 text-slate-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:border-green-500"
                  >
                    Request Demo
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>"
""
        {/* Features Section */}"""
        <section className="py-20">"""
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}"
              whileInView={{ opacity: 1, y: 0 }}""
              transition={{ duration: 0.6 }}"""
              className="text-center mb-16"""
            >"""
              <h2 className="text-4xl font-bold text-white mb-6">"
                Powerful Features for Customer Success""
              </h2>"""
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our AI-powered platform provides comprehensive insights and automation to drive customer success.
              </p>"
            </motion.div>""
"""
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}"
                  whileInView={{ opacity: 1, y: 0 }}""
                  transition={{ duration: 0.6, delay: index * 0.1 }}"""
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"""
                >"""
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">"""
                    <feature.icon className="w-6 h-6 text-white" />""
                  </div>"""
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>"""
                  <p className="text-slate-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>"
""
        {/* Analytics Modules Section */}"""
        <section className="py-20 bg-slate-800/30">"""
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}"
              whileInView={{ opacity: 1, y: 0 }}""
              transition={{ duration: 0.6 }}"""
              className="text-center mb-16"""
            >"""
              <h2 className="text-4xl font-bold text-white mb-6">"
                Comprehensive Analytics Modules""
              </h2>"""
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Get deep insights into every aspect of your customer success operations with our specialized analytics modules.
              </p>"
            </motion.div>""
"""
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {analyticsModules.map((module, index) => (
                <motion.div
                  key={module.title}
                  initial={{ opacity: 0, y: 20 }}"
                  whileInView={{ opacity: 1, y: 0 }}""
                  transition={{ duration: 0.6, delay: index * 0.1 }}"""
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"""
                >"""
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">"""
                    <module.icon className="w-6 h-6 text-white" />""
                  </div>"""
                  <h3 className="text-xl font-semibold text-white mb-3">{module.title}</h3>"""
                  <p className="text-slate-300">{module.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>"
""
        {/* Pricing Section */}"""
        <section className="py-20">"""
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}"
              whileInView={{ opacity: 1, y: 0 }}""
              transition={{ duration: 0.6 }}"""
              className="text-center mb-16"""
            >"""
              <h2 className="text-4xl font-bold text-white mb-6">"
                Transparent Pricing Plans""
              </h2>"""
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs and scale as you grow.
              </p>"
            </motion.div>""
"""
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
'
''
                    plan.popular '''`
                      ? 'border-green-500/50 bg-green-500/5' ''`'`
                      : 'border-slate-700/50'```
                  }`}"
                >""
                  {plan.popular && ("""
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">"""
                      <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>"
                  )}""
                  """
                  <div className="text-center mb-8">"""
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>"""
                    <div className="flex items-baseline justify-center mb-2">"""
                      <span className="text-4xl font-bold text-white">{plan.price}</span>"""
                      <span className="text-slate-400 ml-1">{plan.period}</span>""
                    </div>"""
                    <p className="text-slate-300">{plan.description}</p>"
                  </div>""
"""
                  <ul className="space-y-3 mb-8">""
                    {plan.features.map((feature) => ("""
                      <li key={feature} className="flex items-center text-slate-300">"""
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"  />
                        {feature}
                      </li>
                    ))}
                  </ul>"
""`
                  <Link""`"`
                    to="/request-quote"```
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
'
''
                      plan.popular'''`
                        ? 'bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white transform hover:scale-105'''`'`
                        : 'bg-slate-700 hover:bg-slate-600 text-white'```
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>"
""
        {/* Benefits Section */}"""
        <section className="py-20 bg-slate-800/30">"""
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}"
              whileInView={{ opacity: 1, y: 0 }}""
              transition={{ duration: 0.6 }}"""
              className="text-center mb-16"""
            >"""
              <h2 className="text-4xl font-bold text-white mb-6">"
                Why Choose AI Customer Success Analytics?""
              </h2>"""
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Transform your customer success operations with data-driven insights and AI-powered automation.
              </p>"
            </motion.div>""
"""
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}"
                  whileInView={{ opacity: 1, x: 0 }}""
                  transition={{ duration: 0.6, delay: index * 0.1 }}"""
                  className="flex items-start space-x-4"""
                >"""
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">"""
                    <benefit.icon className="w-6 h-6 text-white" />"
                  </div>""
                  <div>"""
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>"""
                    <p className="text-slate-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>"
""
        {/* Use Cases Section */}"""
        <section className="py-20">"""
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}"
              whileInView={{ opacity: 1, y: 0 }}""
              transition={{ duration: 0.6 }}"""
              className="text-center mb-16"""
            >"""
              <h2 className="text-4xl font-bold text-white mb-6">"
                Perfect for Every Industry""
              </h2>"""
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our platform is designed to meet the unique needs of businesses across all industries.
              </p>"
            </motion.div>""
"""
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}"
                  whileInView={{ opacity: 1, y: 0 }}""
                  transition={{ duration: 0.6, delay: index * 0.1 }}"""
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"""
                >"""
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">"""
                    <useCase.icon className="w-6 h-6 text-white" />""
                  </div>"""
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>"""
                  <p className="text-slate-300">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>"
""
        {/* CTA Section */}"""
        <section className="py-20 bg-gradient-to-r from-green-600/20 to-blue-600/20">"""
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}"
              transition={{ duration: 0.6 }}""
            >"""
              <h2 className="text-4xl font-bold text-white mb-6">"
                Ready to Transform Your Customer Success?""
              </h2>"""
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">"
                Join hundreds of companies that have revolutionized their customer success operations with AI-powered analytics.""
              </p>"""
              <div className="flex flex-col sm:flex-row gap-4 justify-center">""
                <Link"""
                  to="/request-quote""""
                  className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  Start Free Trial"
                </Link>""
                <Link"""
                  to="/contact""""
                  className="border border-slate-600 text-slate-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:border-green-500"
                >
                  Contact Sales
                </Link>
              </div>
            </motion.div>
          </div>
        </section>"
""
        {/* Contact Information */}"""
        <section className="py-20">"""
          <div className="max-w-7xl mx-auto px-6">"""
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">"""
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">"""
                <div className="text-center">"""
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">"""
                    <Phone className="w-6 h-6 text-white"  />""
                  </div>"""
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>"""
                  <a href="tel:+13024640950" className="text-slate-300 hover:text-green-400 transition-colors">
                    +1 302 464 0950
                  </a>"
                </div>""
                """
                <div className="text-center">"""
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">"""
                    <Mail className="w-6 h-6 text-white"  />""
                  </div>"""
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>"""
                  <a href="mailto:kleber@ziontechgroup.com" className="text-slate-300 hover:text-green-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>"
                </div>""
                """
                <div className="text-center">"""
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">"""
                    <MapPin className="w-6 h-6 text-white"  />""
                  </div>"""
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>"""
                  <p className="text-slate-300">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>'"`
    </>'"`'"`
  )}'"`'"`'"`