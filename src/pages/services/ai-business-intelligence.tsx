import React from 'react';
import { Helmet  } from 'react-helmet-async.ts';
import { Brain, BarChart3, TrendingUp, Database, Users, Shield, Globe, ArrowRight, CheckCircle, Play, Download, Mail, Zap, Target, PieChart  } from 'lucide-react';
import { Link  } from 'react-router-dom.ts';

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/20 rounded-full mb-6">
              <Brain className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">AI Business Intelligence</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              AI Business Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with AI-powered intelligence. Our advanced analytics and 
              machine learning solutions provide deep insights to drive strategic decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-200 font-semibold text-lg border border-white/20 hover:border-white/40"
              >
                <span>View All Services</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">BI Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive business intelligence solutions powered by artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {biServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI business intelligence solutions are transforming industries worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-400">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Unlock the power of AI-driven business intelligence and make data-driven decisions.
          </p>
          
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Contact Section */}""
      <section className="py-20">""
        <div className="container-responsive">""
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion .div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}" >"
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Get Started Today
              </h2>""
              <p className="text-gray-300 mb-8 leading-relaxed">
                Ready to unlock the power of your data? Our AI Business Intelligence team is here to help you implement advanced analytics that drive results.
              </p>""
              <div className="space-y-6">""
                <div className="flex items-center gap-4">""
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">""
                    <Phone className="w-6 h-6 text-white" /" >"
                  </div>
                  <div>""
                    <p className="text-white font-semibold">Phone</p>""
                    <p className="text-gray-300">+1 302 464 0950</p>
                  </div>
                </div>""
                <div className="flex items-center gap-4">""
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">""
                    <Mail className="w-6 h-6 text-white" /" >"
                  </div>
                  <div>""
                    <p className="text-white font-semibold">Email</p>""
                    <p className="text-gray-300">kleber@ziontechgroup.com</p>
                  </div>
                </div>""
                <div className="flex items-center gap-4">""
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">""
                    <MapPin className="w-6 h-6 text-white" /" >"
                  </div>
                  <div>""
                    <p className="text-white font-semibold">Address</p>""
                    <p className="text-gray-300">364 E Main St STE 1008<br /" >Middletown DE 19709</p>"
                  </div>
                </div>
              </div>
            </motion.div>
            <motion .div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}""
              className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50"" >"
              <h3 className="text-2xl font-semibold text-white mb-6">Request Analytics Demo</h3>""
              <form className="space-y-6">""
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input ""
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  /" >"
                  <input ""
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  /" >"
                </div>
                <input ""
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                /" >"
                <input ""
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                /" >"
                <textarea ""
                  placeholder="Tell us about your analytics needs..."
                  rows={4}""
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"" ></textarea>"
                <button ""
                  type="submit"
                  className="w-full btn-futuristic bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"" >"
                  <MessageCircle className="w-5 h-5" /" >"
                  Request Demo
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AIBusinessIntelligencePage;