import React from 'react',;
import Head from 'next/head',;
import { motion } from 'framer-motion',;
import {,
  TrendingUp, Brain, Shield, Zap, Target,;
  BarChart3, Cpu, Globe, Users, Award,;
  CheckCircle, ArrowRight, Star, Phone, Mail, MapPin,
} from 'lucide-react',;
import Layout from '../components/layout/Layout',;
const contactInfo ={,
  mobile: '+1 30o2 464 0950',;
  email: 'kleber@ziontechgroup.com',;
  address: '364 E Main St STE 10o08 Middletown DE 19709',;
  website: 'https://ziontechgroup.com',
,},;
const features = [,
  'Quantum-enhanced market prediction algorithmsReal-time market data processing',;
  'AI-powered risk assessmentMulti-asset portfolio optimization',;
  'Regulatory compliance automationBacktesting and simulation engine',;
  'Custom strategy builderPerformance analytics dashboard',
],;
const pricingPlans = [,
  {,
    name: 'Starter',;
    price: 199,;
    period: 'month',;
    features: ['Basic algorithms5 asset classes', 'Daily rebalancingStandard support'],;
    popular: false,
  ,},;
  {,
    name: 'Professional',;
    price: 499,;
    period: 'month',;
    features: ['Advanced algorithmsAll asset classes', 'Real-time rebalancingCustom strategies', 'Priority support'],;
    popular: true,
  ,},;
  {,
    name: 'Enterprise',;
    price: 1299,;
    period: 'month',;
    features: ['Quantum algorithmsWhite-label solution', 'API accessDedicated support', 'Custom integrations'],;
    popular: false,
  ,}
],;
export default function QuantumTradingAlgorithm() {,
  return (,
    <Layout>,
      <Head>,
        <title>Quantum Trading Algorithm Pro | Zion Tech Group</title>,
        <meta name="description" content="Advanced algorithmic trading platform leveraging quantum computing principles for ultra-fast market analysis and predictive trading strategies."  />,
        <meta name="keywords" content="quantum trading, algorithmic trading, AI trading, financial technology, Zion Tech Group"  />,
        <meta property="og: title" content="Quantum Trading Algorithm Pro - Zion Tech Group"  />,
        <meta property="og:description" content="Advanced algorithmic trading platform with quantum computing integration."  />,
        <meta property="og:url" content="https://ziontechgroup.com/quantum-trading-algorithm"  />,
      </Head>,
      {/* Hero Section */,}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">,
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-90o0 to-black"></div>,
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">,
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-green-50o0/20 to-emerald-50o0/20 rounded-full blur-3xl animate-pulse"></div>,
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-blue-50o0/20 to-cyan-50o0/20 rounded-full blur-3xl animate-pulse delay-10o00"></div>,
          <div className="absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-r from-purple-50o0/20 to-pink-50o0/20 rounded-full blur-3xl animate-pulse delay-50o0"></div>,
        </div>,
        <div className="relative z-10 text-center px-4 sm: px-6 lg:px-8 max-w-7xl mx-auto">,
          <motion.div,
            initial={{ opacity: 0, y: 30 ,}}
            animate={{ opacity: 1, y: 0 ,}}
            transition={{ duration: 0.8 ,}}
            className="mb-8",
          >,
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50o0/10 border border-green-50o0/20 text-green-40o0 text-sm font-medium mb-6">,
              <TrendingUp className="w-4 h-4 mr-2"  />,
              Financial Technology,
            </div>,
            <h1 className="text-4xl md: text-6xl lg:text-7xl font-bold text-white mb-6">,
              <span className="bg-gradient-to-r from-green-40o0 via-emerald-40o0 to-cyan-40o0 bg-clip-text text-transparent">,
                Quantum Trading,
              </span>,
              <br  />,
              <span className="text-white">Algorithm Pro</span>,
            </h1>,
            <p className="text-xl md:text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto">,
              Advanced algorithmic trading platform leveraging quantum computing principles for ultra-fast market analysis and predictive trading strategies.,
            </p>,
          </motion.div>,
          {/* CTA Buttons */,}
          <motion.div,
            initial={{ opacity: 0, y: 30 ,}}
            animate={{ opacity: 1, y: 0 ,}}
            transition={{ duration: 0.8, delay: 0.2 ,}}
            className="flex flex-col sm: flex-row gap-4 justify-center items-center",
          >,
            <a,
              href="#pricing",
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-green-50o0 to-emerald-50o0 text-white font-semibold text-lg hover:from-green-60o0 hover:to-emerald-60o0 transition-all duration-30o0 transform hover:scale-10o5",
            >,
              <Target className="w-5 h-5 mr-2"  />,
              Get Started,
            </a>,
            <a,
              href="#contact",
              className="inline-flex items-center px-8 py-4 rounded-full border-2 border-green-50o0/30 text-green-40o0 font-semibold text-lg hover:bg-green-50o0/10 transition-all duration-30o0",
            >,
              <Phone className="w-5 h-5 mr-2"  />,
              Contact Sales,
            </a>,
          </motion.div>,
        </div>,
      </section>,
      {/* Features Section */,}
      <section className="py-20 bg-gradient-to-b from-black to-slate-90o0">,
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
          <motion.div,
            initial={{ opacity: 0, y: 30 ,}}
            whileInView={{ opacity: 1, y: 0 ,}}
            transition={{ duration: 0.8 ,}}
            viewport={{ once: true ,}}
            className="text-center mb-16",
          >,
            <h2 className="text-3xl md: text-5xl font-bold text-white mb-6">,
              Revolutionary Trading Technology,
            </h2>,
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">,
              Experience the future of algorithmic trading with quantum computing integration and AI-powered market analysis.,
            </p>,
          </motion.div>,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">,
            {features.map((feature, index) => (,
              <motion.div,
                key={index}
                initial={{ opacity: 0, y: 30 ,}}
                whileInView={{ opacity: 1, y: 0 ,}}
                transition={{ duration: 0.8, delay: index * 0.1 ,}}
                viewport={{ once: true ,}}
                className="bg-gradient-to-br from-green-50o0/10 to-emerald-50o0/10 border border-green-50o0/20 rounded-2xl p-6 hover: border-green-50o0/40 transition-all duration-30o0",
              >,
                <div className="w-12 h-12 bg-gradient-to-r from-green-50o0 to-emerald-50o0 rounded-xl flex items-center justify-center mb-4">,
                  <CheckCircle className="w-6 h-6 text-white"  />,
                </div>,
                <h3 className="text-lg font-semibold text-white mb-2">{feature,}</h3>,
              </motion.div>,
            ))}
          </div>,
        </div>,
      </section>,
      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-black">,
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
          <motion.div,
            initial={{ opacity: 0, y: 30 ,}}
            whileInView={{ opacity: 1, y: 0 ,}}
            transition={{ duration: 0.8 ,}}
            viewport={{ once: true ,}}
            className="text-center mb-16",
          >,
            <h2 className="text-3xl md: text-5xl font-bold text-white mb-6">,
              Choose Your Plan,
            </h2>,
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">,
              Flexible pricing options designed for traders of all levels, from individual investors to institutional clients.,
            </p>,
          </motion.div>,
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
            {pricingPlans.map((plan, index) => (,
              <motion.div,
                key={index}
                initial={{ opacity: 0, y: 30 ,}}
                whileInView={{ opacity: 1, y: 0 ,}}
                transition={{ duration: 0.8, delay: index * 0.1 ,}}
                viewport={{ once: true ,}}
                className={`relative bg-gradient-to-br from-green-50o0/10 to-emerald-50o0/10 border rounded-2xl p-8 ${,
                  plan.popular,
                    ? 'border-green-50o0/50 scale-10o5',
                    : 'border-green-50o0/20',
                }`}
              >,
                {plan.popular && (,
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">,
                    <span className="bg-gradient-to-r from-green-50o0 to-emerald-50o0 text-white px-4 py-2 rounded-full text-sm font-semibold">,
                      Most Popular,
                    </span>,
                  </div>,
                )}
,
                <div className="text-center mb-8">,
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>,
                  <div className="text-4xl font-bold text-white mb-2">,
                    ${plan.price}
                    <span className="text-lg text-gray-40o0 font-normal">/{plan.period}</span>,
                  </div>,
                </div>,
                <ul className="space-y-4 mb-8">,
                  {plan.features.map((feature, featureIndex) => (,
                    <li key={featureIndex} className="flex items-center text-gray-30o0">,
                      <CheckCircle className="w-5 h-5 text-green-40o0 mr-3 flex-shrink-0"  />,
                      {feature}
                    </li>,
                  ))}
                </ul>,
                <button className="w-full bg-gradient-to-r from-green-50o0 to-emerald-50o0 text-white font-semibold py-3 px-6 rounded-xl hover: from-green-60o0 hover:to-emerald-60o0 transition-all duration-30o0">,
                  Get Started,
                </button>,
              </motion.div>,
            )),}
          </div>,
        </div>,
      </section>,
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-slate-90o0 to-black">,
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,
          <motion.div,
            initial={{ opacity: 0, y: 30 ,}}
            whileInView={{ opacity: 1, y: 0 ,}}
            transition={{ duration: 0.8 ,}}
            viewport={{ once: true ,}}
            className="text-center mb-16",
          >,
            <h2 className="text-3xl md: text-5xl font-bold text-white mb-6">,
              Ready to Transform Your Trading?,
            </h2>,
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">,
              Contact our team to learn more about how Quantum Trading Algorithm Pro can revolutionize your trading strategy.,
            </p>,
          </motion.div>,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">,
            <motion.div,
              initial={{ opacity: 0, y: 30 ,}}
              whileInView={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.8, delay: 0.1 ,}}
              viewport={{ once: true ,}}
              className="text-center",
            >,
              <div className="w-16 h-16 bg-gradient-to-r from-green-50o0 to-emerald-50o0 rounded-2xl flex items-center justify-center mx-auto mb-4">,
                <Phone className="w-8 h-8 text-white"  />,
              </div>,
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>,
              <p className="text-gray-30o0">{contactInfo.mobile}</p>,
            </motion.div>,
            <motion.div,
              initial={{ opacity: 0, y: 30 ,}}
              whileInView={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.8, delay: 0.2 ,}}
              viewport={{ once: true ,}}
              className="text-center",
            >,
              <div className="w-16 h-16 bg-gradient-to-r from-green-50o0 to-emerald-50o0 rounded-2xl flex items-center justify-center mx-auto mb-4">,
                <Mail className="w-8 h-8 text-white"  />,
              </div>,
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>,
              <p className="text-gray-30o0">{contactInfo.email}</p>,
            </motion.div>,
            <motion.div,
              initial={{ opacity: 0, y: 30 ,}}
              whileInView={{ opacity: 1, y: 0 ,}}
              transition={{ duration: 0.8, delay: 0.3 ,}}
              viewport={{ once: true ,}}
              className="text-center",
            >,
              <div className="w-16 h-16 bg-gradient-to-r from-green-50o0 to-emerald-50o0 rounded-2xl flex items-center justify-center mx-auto mb-4">,
                <MapPin className="w-8 h-8 text-white"  />,
              </div>,
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>,
              <p className="text-gray-30o0">{contactInfo.address}</p>,
            </motion.div>,
          </div>,
        </div>,
      </section>,
    </Layout>,
  )}