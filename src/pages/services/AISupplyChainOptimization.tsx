import React from 'react';
import { SEO   } from '../../components/SEO';
import { motion   } from 'framer-motion';
import { Truck, 
  Brain, 
  BarChart3, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Mail, 
  Phone, 
  Globe, 
  ExternalLink,
  Zap,
  Target,
  Cpu,
  Package,
  Warehouse,
  Route,
  Clock,
  DollarSign,
  Globe2,
  MapPin,
  Activity,
  Gauge,
  Shield,
  RefreshCw
  } from 'lucide-react';

export default function AISupplyChainOptimization(...args: any[]): any {
  const features = [
    'AI-powered demand forecasting and inventory optimization',
    'Real-time supply chain monitoring and analytics',
    'Intelligent route optimization and logistics planning',
    'Automated supplier management and risk assessment',
    'Predictive maintenance and equipment optimization',
    'Multi-warehouse inventory synchronization',
    'Advanced cost optimization and budget management',
    'Intelligent exception handling and alerting',
    'Comprehensive compliance and audit trails',
    'Scalable platform for enterprise supply chains'
  ];

  const benefits = [
    'Reduce inventory costs by 30%',
    'Improve delivery times by 40%',
    'Increase supply chain efficiency by 50%',
    'Reduce operational costs by 25%',
    'Enable real-time visibility and control',
    'Minimize supply chain disruptions'
  ];

  const useCases = [
    'Manufacturing supply chain optimization',
    'Retail inventory management',
    'Healthcare supply chain management',
    'E-commerce logistics optimization',
    'Food and beverage supply chains',
    'Automotive parts management'
  ];

  const tiers = [
    { 
      name: 'Supply Chain Starter', 
      price: '$599/mo', 
      details: ['Up to 100 SKUs', 'Basic AI optimization', 'Standard reporting', 'Email support'] 
    },
    { 
      name: 'Supply Chain Professional', 
      price: '$1,599/mo', 
      details: ['Up to 1,000 SKUs', 'Advanced AI features', 'Custom dashboards', 'Priority support'] 
    },
    { 
      name: 'Supply Chain Enterprise', 
      price: '$4,999/mo', 
      details: ['Unlimited SKUs', 'Full AI suite', 'White-label options', '24/7 support'] 
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Truck className="w-4 h-4 mr-2" /> AI-powered supply chain optimization
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI Supply Chain Optimization</h1>
          <p className="text-zion-slate-light text-xl">Transform your supply chain with AI-powered optimization that reduces costs, improves efficiency, and ensures seamless operations.</p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Intelligent Supply Chain Features</h2>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start">
                  <Check className="w-5 h-5 text-zion-cyan mr-3 mt-0.5" />
                  <span className="text-zion-slate-dark">{f}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-zion-slate-dark mb-3">Key Benefits</h3>
              <ul className="space-y-2">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start">
                    <Zap className="w-4 h-4 text-zion-cyan mr-2 mt-0.5" />
                    <span className="text-zion-slate-dark text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-white border border-zion-slate-light/20 rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-semibold text-zion-slate-dark mb-4">Pricing Plans</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {tiers.map((t) => (
                <div key={t.name} className="rounded-lg p-4 border border-zion-slate-light/30">
                  <div className="text-lg font-semibold mb-1">{t.name}</div>
                  <div className="text-2xl font-bold text-zion-cyan mb-2">{t.price}</div>
                  <ul className="text-sm text-zion-slate-dark space-y-1">
                    {t.details.map((d) => (<li key={d}>{d}</li>))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-zion-slate-light/10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-zion-slate-dark text-center mb-12">Use Cases & Industries</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <div key={useCase} className="bg-white rounded-xl p-6 shadow-md border border-zion-slate-light/20">
                <Target className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-semibold text-zion-slate-dark mb-3">{useCase}</h3>
                <p className="text-zion-slate-dark/70">Optimize your supply chain operations with AI-powered insights and intelligent automation.</p>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Supply Chain Optimization
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Revolutionize your supply chain with AI-powered optimization, demand forecasting, and intelligent logistics that drive efficiency and cost savings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://ziontechgroup.com/contact" 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Optimize Supply Chain
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="border border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Supply Chain Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Supply Chain Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform delivers intelligent optimization across every aspect of your supply chain
            </p>
          </motion.div>

          <div className="grid md: anygrid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)   => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600 hover:border-blue-500 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Supply Chain Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From initial assessment to ongoing optimization, we provide end-to-end supply chain transformation
            </p>
          </motion.div>

          <div className="grid md: anygrid-cols-2 gap-8">
            {services.map((service, index)   => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="text-3xl font-bold text-blue-400 mb-6">{service.price}</div>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI-powered supply chain optimization transforms different industries
            </p>
          </motion.div>

          <div className="grid md: anygrid-cols-2 gap-8">
            {useCases.map((useCase, index)   => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <div className="space-y-3">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-3 text-green-400">
                      <TrendingUp className="w-5 h-5 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI-Powered Optimization?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the advantages of intelligent supply chain management
            </p>
          </motion.div>

          <div className="grid md: anygrid-cols-2 gap-8">
            {benefits.map((benefit, index)   => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on cutting-edge AI and optimization technologies for maximum efficiency
            </p>
          </motion.div>

          <div className="grid md: anygrid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index)   => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-slate-600 text-center"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{tech.name}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of businesses that have transformed their supply chain operations with AI-powered optimization and intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://ziontechgroup.com/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Optimization
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="h-6 w-6 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Globe className="h-6 w-6 text-zion-cyan" />
              <span>https://ziontechgroup.com</span>
            </div>
          </div>
          <p className="text-zion-slate-light">
            Ready to revolutionize your supply chain? Contact us today to learn how AI-powered optimization can transform your operations.
          </p>
        </div>
      </section>
    </div>
  );
}