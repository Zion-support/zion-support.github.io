import React from 'react.ts';
import { Helmet               } from 'react-helmet-async.ts';
import { Lock, Shield, Zap, Settings, Users, Globe, ArrowRight, CheckCircle, Play, Download, Mail, Target, Activity, BarChart3, Database, Link as LinkIcon               } from 'lucide-react.ts';
import { Link               } from 'react-router-dom.ts';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
              <Network className="w-4 h-4 mr-2" />
              Hot New Service
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise Blockchain Capabilities
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our blockchain platform provides comprehensive enterprise solutions with security,
                scalability, and compliance built-in.
              </p>
            </div>

            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Lock,
                  title: "Smart Contracts",
                  description: "Automated, self-executing contracts with predefined conditions and outcomes."
                },
                {
                  icon: Shield,
                  title: "Security & Privacy",
                  description: "Enterprise-grade security with advanced encryption and privacy controls."
                },
                {
                  icon: Zap,
                  title: "DeFi Solutions",
                  description: "Decentralized finance applications for modern financial operations."
                },
                {
                  icon: Settings,
                  title: "Enterprise Integration",
                  description: "Seamless integration with existing enterprise systems and workflows."
                },
                {
                  icon: Users,
                  title: "Consortium Networks",
                  description: "Private blockchain networks for trusted business partnerships."
                },
                {
                  icon: Globe,
                  title: "Cross-border Solutions",
                  description: "Global blockchain networks for international business operations."
                }
              ].map((feature, index)  => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Blockchain Use Cases
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Discover how blockchain technology can revolutionize different aspects of your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Supply Chain",
                  description: "Track products from origin to destination with immutable records.",
                  icon: LinkIcon,
                  benefits: ["Product tracking", "Quality assurance", "Compliance verification"]
                },
                {
                  title: "Financial Services",
                  description: "Secure transactions, cross-border payments, and asset tokenization.",
                  icon: Zap,
                  benefits: ["Secure payments", "Asset tokenization", "Cross-border transfers"]
                },
                {
                  title: "Healthcare",
                  description: "Secure patient records, drug traceability, and medical supply chains.",
                  icon: Users,
                  benefits: ["Patient records", "Drug traceability", "Supply chain"]
                },
                {
                  title: "Real Estate",
                  description: "Property tokenization, smart contracts, and automated transactions.",
                  icon: Target,
                  benefits: ["Property tokenization", "Smart contracts", "Automated transactions"]
                },
                {
                  title: "Government",
                  description: "Voting systems, identity management, and public records.",
                  icon: Globe,
                  benefits: ["Voting systems", "Identity management", "Public records"]
                },
                {
                  title: "Energy Trading",
                  description: "Peer-to-peer energy trading and renewable energy certificates.",
                  icon: Activity,
                  benefits: ["P2P trading", "Renewable certificates", "Grid management"]
                }
              ].map((useCase, index)  => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-slate-300 mb-4">{useCase.description}</p>
                  <ul className="space-y-1">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-yellow-400 flex items-center">
                        <CheckCircle className="w-3 h-3 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Blockchain Technology
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Built on cutting-edge blockchain technologies for maximum security, performance, and scalability.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    "Multi-chain architecture supporting multiple blockchain networks",
                    "Advanced consensus mechanisms for security and performance",
                    "Smart contract development and deployment platform",
                    "Enterprise-grade security with encryption and access controls",
                    "Scalable infrastructure for high-volume transactions",
                    "Integration APIs for existing enterprise systems"
                  ].map((technology, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{technology}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Blockchain Types</h3>
                <div className="space-y-4">
                  {[
                    { type: anyanyanyanyanyanyanyanyanyanyanyanyany"Public", icon: Globe, color: "from-blue-500 to-cyan-500", description: "Open, permissionless networks" },
                    { type: "Private", icon: Lock, color: "from-purple-500 to-pink-500", description: "Controlled, permissioned networks" },
                    { type: "Consortium", icon: Users, color: "from-green-500 to-emerald-500", description: "Multi-organization networks" },
                    { type: "Hybrid", icon: LinkIcon, color: "from-orange-500 to-red-500", description: "Combination of public and private" }
                  ].map((item, index)               => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-8 h-8 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center`}>
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <span className="text-slate-300 font-medium">{item.type}</span>
                        <p className="text-xs text-slate-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DeFi Solutions Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                DeFi Enterprise Solutions
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Decentralized finance solutions designed for enterprise use cases and compliance requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">DeFi Applications</h3>
                <div className="space-y-4">
                  {[
                    "Decentralized exchanges (DEX) for enterprise trading",
                    "Lending and borrowing platforms with smart contracts",
                    "Yield farming and liquidity provision strategies",
                    "Asset tokenization and fractional ownership",
                    "Automated market makers (AMM) for liquidity",
                    "Cross-chain bridges for multi-network operations"
                  ].map((application, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{application}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Enterprise Benefits</h3>
                <div className="space-y-4">
                  {[
                    "Reduce transaction costs and eliminate intermediaries",
                    "Improve transparency and auditability of financial operations",
                    "Enable 24/7 global financial services and trading",
                    "Automate complex financial processes with smart contracts",
                    "Access to new financial instruments and investment opportunities",
                    "Enhanced security and reduced fraud through blockchain technology"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Implementation Process
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our systematic approach ensures successful blockchain implementation for your enterprise.
              </p>
            </div>

            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Assessment",
                  description: "Evaluate business needs and identify blockchain opportunities."
                },
                {
                  step: "02",
                  title: "Architecture",
                  description: "Design blockchain solution architecture and network topology."
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Build smart contracts and blockchain applications."
                },
                {
                  step: "04",
                  title: "Deployment",
                  description: "Deploy and integrate with existing enterprise systems."
                }
              ].map((step, index)  => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-yellow-500/10 to-orange-600/10">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business with Blockchain?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Leverage the power of blockchain technology to secure, automate, and optimize your operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold"
              >
                Start Your Project
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Enterprise Blockchain Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our blockchain solutions combine cutting-edge technology with enterprise-grade security and scalability to deliver transformative business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-slate-600 hover:bg-slate-800 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how blockchain technology can revolutionize your industry and create new business opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 hover:bg-slate-900 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-400 mb-6">{useCase.description}</p>
                <ul className="space-y-2 text-left">
                  {useCase.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="text-sm text-gray-300 flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                      {example}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Choose Your Blockchain Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to meet the needs of enterprises of all sizes, from startups to Fortune 500 companies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-cyan-500 bg-slate-800/70' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Build on Blockchain?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get in touch with our team to learn how blockchain technology can transform your business and create new opportunities for growth and innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.text}
                  href={contact.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center p-6 bg-slate-900/50 border border-slate-700 rounded-xl hover:border-slate-600 hover:bg-slate-900 transition-all duration-300 group"
                >
                  <contact.icon className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                  <span className="text-white font-semibold mb-2">{contact.text}</span>
                  <span className="text-gray-400 text-sm">{contact.description}</span>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold"
              >
                Start Your Blockchain Project
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold"
              >
                Schedule Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}