import {

  Truck, 
  Route, 
  Package, 
  Globe, 
  Brain, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle, 
  Star, 
  DollarSign, 
  Clock, 
  Database, 
  Target,
  ArrowRight,
  Building,
  Calculator,
  BarChart3,
  Eye,
  Search,
  Filter,
  AlertTriangle,
  Award,
  Phone,
  Mail,
  MapPin,
  BarChart3,
  TrendingUp,
  Cpu,
  Network,
  Server,
  Cloud,
  Lock,
  Key,
  Settings,
  Monitor,
  Activity,
  Gauge,
  ShoppingCart,
  Snowflake
} from 'lucide-react';

const AILogisticsOptimization: React.FC = () => {
  return()
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">"""
      <SEO title="AI Logistics Optimization Platform | Zion Tech Group""""
        description="Revolutionize your logistics operations with AI-powered route optimization, predictive analytics, and real-time fleet management. Reduce costs by 30% and improve delivery efficiency.""""
        keywords="AI logistics optimization, route optimization, fleet management, supply chain AI, logistics automation, predictive analytics"
       />"
      ""
      {/* Hero Section */}"""
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">"""
        <div className="absolute inset-0 bg-black/20"></div>"""
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}"
            animate={{ opacity: 1, y: 0 }}""
            transition={{ duration: 0.8 }}"""
            className="text-center"""
          >"""
            <h1 className="text-4xl md:text-6xl font-bold mb-6">"
              AI Logistics Optimization Platform""
            </h1>"""
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-blue-100">"
              Transform your logistics operations with AI-powered route optimization, predictive analytics, and real-time fleet management""
            </p>"""
            <div className="flex flex-col sm:flex-row gap-4 justify-center">""
              <Link"""
                to="/request-quote""""
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today"
              </Link>""
              <Link"""
                to="/schedule-demo""""
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>"
""
      {/* Benefits Section */}"""
      <section className="py-20 bg-white">"""
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}"
            whileInView={{ opacity: 1, y: 0 }}""
            transition={{ duration: 0.8 }}"""
            className="text-center mb-16"""
          >"""
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">"
              Transform Your Logistics Operations""
            </h2>"""
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI platform delivers measurable results that directly impact your bottom line
            </p>"
          </motion.div>""
"""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}"
                whileInView={{ opacity: 1, y: 0 }}""
                transition={{ duration: 0.6, delay: index * 0.1 }}"""
                className="text-center""
              >""
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center mx-auto mb-6`}>"""
                  <benefit.icon className="w-10 h-10 text-white" />""
                </div>"""
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>"""
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>"
""
      {/* Features Section */}"""
      <section className="py-20 bg-gray-50">"""
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}"
            whileInView={{ opacity: 1, y: 0 }}""
            transition={{ duration: 0.8 }}"""
            className="text-center mb-16"""
          >"""
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">"
              AI-Powered Logistics Intelligence""
            </h2>"""
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced AI platform provides comprehensive logistics optimization, real-time monitoring, and predictive analytics
            </p>"
          </motion.div>""
"""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}"
                whileInView={{ opacity: 1, y: 0 }}""
                transition={{ duration: 0.6, delay: index * 0.1 }}"""`
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"`"`
              >`"`"`
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}>"""
                  <feature.icon className="w-8 h-8 text-white" />""
                </div>"""
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>"""
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>"
""
      {/* Use Cases Section */}"""
      <section className="py-20 bg-white">"""
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}"
            whileInView={{ opacity: 1, y: 0 }}""
            transition={{ duration: 0.8 }}"""
            className="text-center mb-16"""
          >"""
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">"
              Industry Solutions""
            </h2>"""
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform serves diverse industries with specialized logistics optimization solutions
            </p>"
          </motion.div>""
"""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}"
                whileInView={{ opacity: 1, y: 0 }}""
                transition={{ duration: 0.6, delay: index * 0.1 }}"""`
                className="text-center"`"`
              >`"`"`
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${useCase.color} flex items-center justify-center mx-auto mb-6`}>"""
                  <useCase.icon className="w-10 h-10 text-white" />""
                </div>"""
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{useCase.title}</h3>"""
                <p className="text-gray-600">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>"
""
      {/* Pricing Section */}"""
      <section className="py-20 bg-gray-50">"""
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}"
            whileInView={{ opacity: 1, y: 0 }}""
            transition={{ duration: 0.8 }}"""
            className="text-center mb-16"""
          >"""
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">"
              Transparent Pricing Plans""
            </h2>"""
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your logistics optimization needs with no hidden fees
            </p>"
          </motion.div>""
"""
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}`
                whileInView={{ opacity: 1, y: 0 }}``
                transition={{ duration: 0.6, delay: index * 0.1 }}```
                className={`relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
'
''`
''`'`
                  plan.popular ? 'border-purple-500' : 'border-gray-100'```
                }`}"
              >""
                {plan.popular && ("""
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">"""
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>"
                )}""
                """
                <div className="text-center mb-8">"""
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>"""
                  <div className="mb-4">"""
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>"""
                    <span className="text-gray-600">/{plan.period}</span>""
                  </div>"""
                  <p className="text-gray-600">{plan.description}</p>"
                </div>""
"""
                <ul className="space-y-4 mb-8">""
                  {plan.features.map((feature, featureIndex) => ("""
                    <li key={featureIndex} className="flex items-start">"""
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"  />"""
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>"
""`
                <Link""`"`
                  to="/request-quote"```
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
'
''
                    plan.popular'''`
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'''`'`
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'```
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
      {/* CTA Section */}"""
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">"""
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}"
            transition={{ duration: 0.8 }}""
          >"""
            <h2 className="text-3xl md:text-5xl font-bold mb-6">"
              Ready to Optimize Your Logistics?""
            </h2>"""
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">"
              Join hundreds of companies who trust our AI platform for logistics optimization""
            </p>"""
            <div className="flex flex-col sm:flex-row gap-4 justify-center">""
              <Link"""
                to="/request-quote""""
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Get Started Today"
              </Link>""
              <Link"""
                to="/contact""""
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>"
""
      {/* Contact Information */}"""
      <section className="py-16 bg-gray-50">"""
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"""
          <div className="bg-white rounded-xl p-8 shadow-lg">"""
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">"""
              <div className="text-center">"""
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4"  />"""
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>"""
                <p className="text-gray-600">{contactInfo.phone}</p>""
              </div>"""
              <div className="text-center">"""
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4"  />"""
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>"""
                <p className="text-gray-600">{contactInfo.email}</p>""
              </div>"""
              <div className="text-center">"""
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4"  />"""
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>"""
                <p className="text-gray-600">{contactInfo.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )};'"`
'"`'"`
export default AILogisticsOptimization;'"`'"`'"`