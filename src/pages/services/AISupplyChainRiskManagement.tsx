import {

  Shield, 
  AlertTriangle, 
  TrendingUp, 
  BarChart3, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Star,
  Users,
  Database,
  Cpu,
  Cloud,
  Lock,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Truck,
  Factory,
  Warehouse,
  Ship
} from 'lucide-react';

export default function AISupplyChainRiskManagement() {
  return()
    <>
      <SEO title="AI Supply Chain Risk Management - Zion Tech Group""
        description="Protect your supply chain with AI-powered risk management. Monitor suppliers, predict disruptions, and mitigate risks in real-time with our intelligent platform.""
        canonical="/services/ai-supply-chain-risk-management"
       />
      "
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}"
        <section className="relative py-20 overflow-hidden">"
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>"
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              className="text-center"
            >"
              <div className="flex justify-center mb-6">"
                <div className="p-3 bg-blue-500/20 rounded-full">"
                  <Shield className="h-12 w-12 text-blue-400"  />
                </div>
              </div>"
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Supply Chain Risk Management
              </h1>"
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Protect your supply chain with intelligent risk management. Monitor suppliers, predict disruptions, 
                and mitigate risks in real-time with our AI-powered platform.
              </p>"
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2"
                >
                  Start Free Trial"
                  <ArrowRight className="h-5 w-5"  />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}"
                  className="border border-slate-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-800 transition-colors"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}"
        <section className="py-20">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              className="text-center mb-16"
            >"
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive Risk Management Features
              </h2>"
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our AI platform provides end-to-end supply chain risk management capabilities designed to 
                protect your business from disruptions and ensure operational continuity.
              </p>
            </motion.div>
"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}"
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors"
                >"
                  <div className="flex items-center gap-3 mb-4">"
                    <div className="p-2 bg-blue-500/20 rounded-lg">"
                      <CheckCircle className="h-5 w-5 text-blue-400"  />
                    </div>"
                    <h3 className="text-lg font-semibold text-white">{feature}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}"
        <section className="py-20 bg-slate-800/30">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              className="text-center mb-16"
            >"
              <h2 className="text-4xl font-bold text-white mb-4">
                Transform Your Supply Chain Security
              </h2>"
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Experience significant improvements in risk mitigation, operational efficiency, and 
                supply chain resilience with our AI-powered platform.
              </p>
            </motion.div>
"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}"
                  className="text-center"
                >"
                  <div className="p-4 bg-blue-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">"
                    <TrendingUp className="h-8 w-8 text-blue-400"  />
                  </div>"
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}"
        <section className="py-20">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              className="text-center mb-16"
            >"
              <h2 className="text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>"
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Choose the plan that best fits your supply chain risk management needs and scale as you grow.
              </p>
            </motion.div>
"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`bg-slate-800/50 p-8 rounded-xl border ${
'
                    index === 1 ? 'border-blue-500/50 bg-blue-500/10' : 'border-slate-700'`
                  }`}
                >"
                  <div className="text-center mb-6">"
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>"
                    <p className="text-slate-400 mb-4">{plan.description}</p>"
                    <div className="mb-4">"
                      <span className="text-4xl font-bold text-white">{plan.price}</span>"
                      <span className="text-slate-400">/{plan.period}</span>
                    </div>
                  </div>
                  "
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => ("
                      <li key={featureIndex} className="flex items-center gap-3">"
                        <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0"  />"
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}`
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${

                      index === 1'
                        ? 'bg-blue-600 hover:bg-blue-700 text-white''
                        : 'bg-slate-700 hover:bg-slate-600 text-white'`
                    }`}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}"
        <section className="py-20 bg-slate-800/30">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              className="text-center mb-16"
            >"
              <h2 className="text-4xl font-bold text-white mb-4">
                Perfect for Every Industry
              </h2>"
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our AI supply chain risk management platform is designed to meet the unique needs of various 
                industries and business types.
              </p>
            </motion.div>
"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}"
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center hover:border-blue-500/50 transition-colors"
                >"
                  <div className="p-3 bg-blue-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">"
                    {index === 0 && <Factory className="h-8 w-8 text-blue-400"  />}"
                    {index === 1 && <Truck className="h-8 w-8 text-blue-400"  />}"
                    {index === 2 && <Warehouse className="h-8 w-8 text-blue-400"  />}"
                    {index === 3 && <Ship className="h-8 w-8 text-blue-400"  />}"
                    {index > 3 && <Globe className="h-8 w-8 text-blue-400"  />}
                  </div>"
                  <h3 className="text-lg font-semibold text-white">{useCase}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}"
        <section className="py-20">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              className="text-center mb-16"
            >"
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Protect Your Supply Chain?
              </h2>"
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Contact our team to learn how AI can transform your supply chain risk management and help you 
                achieve operational resilience and cost savings.
              </p>
            </motion.div>
"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}"
                className="text-center"
              >"
                <div className="p-4 bg-blue-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">"
                  <Phone className="h-8 w-8 text-blue-400"  />
                </div>"
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>"
                <p className="text-slate-300">{contactInfo.phone}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}"
                className="text-center"
              >"
                <div className="p-4 bg-blue-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">"
                  <Mail className="h-8 w-8 text-blue-400"  />
                </div>"
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>"
                <p className="text-slate-300">{contactInfo.email}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}"
                className="text-center"
              >"
                <div className="p-4 bg-blue-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">"
                  <MapPin className="h-8 w-8 text-blue-400"  />
                </div>"
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>"
                <p className="text-slate-300">{contactInfo.address}</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}"
              className="text-center mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 mx-auto"
              >
                Schedule a Consultation"
                <ArrowRight className="h-5 w-5"  />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )}'"`