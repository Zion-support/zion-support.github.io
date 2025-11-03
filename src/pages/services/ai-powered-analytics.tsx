import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Sparkles, 
  Rocket,
  BarChart3 
} from 'lucide-react';

export default function ServicePage() {
  const features = [
  "Predictive analytics",
  "Real-time dashboards",
  "Anomaly detection",
  "Natural language queries",
  "Automated reporting"
];
  const benefits = [
  "Make data-driven decisions",
  "Identify trends before competitors",
  "Reduce analysis time by 90%",
  "Uncover hidden opportunities",
  "Improve forecast accuracy"
];

  return (
    <>
      <Head>
        <title>AI-Powered Analytics | Zion Tech Group Services</title>
        <meta name="description" content="Gain actionable insights from your data with AI analytics. Discover how Zion Tech Group can help transform your business." />
        <meta property="og:title" content="AI-Powered Analytics | Zion Tech Group" />
        <meta property="og:description" content="Gain actionable insights from your data with AI analytics" />
        <meta property="og:url" content="https://ziontechgroup.com/services/ai-powered-analytics" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
                <Sparkles className="w-5 h-5" />
                <span className="font-semibold">Premium Service</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                AI-Powered Analytics
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Gain actionable insights from your data with AI analytics
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all"
                >
                  Get Started Today
                </a>
                <a
                  href="#features"
                  className="px-8 py-4 bg-white text-gray-700 rounded-lg font-semibold border-2 border-gray-300 hover:border-blue-600 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Key Features
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to succeed with AI automation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200"
                >
                  <CheckCircle2 className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature}
                  </h3>
                  <p className="text-gray-600">
                    Leverage cutting-edge AI technology to optimize your operations and achieve better results.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Benefits & Results
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Measurable outcomes that drive business growth
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border border-gray-200"
                >
                  <Rocket className="w-8 h-8 text-purple-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {benefit}
                    </h3>
                    <p className="text-gray-600">
                      Achieve transformative results with our proven AI solutions and expert guidance.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">
                Flexible Pricing Options
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your needs and budget
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {['Starter', 'Professional', 'Enterprise'].map((tier, index) => (
                <motion.div
                  key={tier}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`p-8 rounded-2xl border-2 ${
                    index === 1 
                      ? 'bg-gradient-to-br from-blue-600 to-purple-600 border-blue-400 scale-105' 
                      : 'bg-gray-800 border-gray-700'
                  }`}
                >
                  {index === 1 && (
                    <div className="text-center mb-4">
                      <span className="px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{tier}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">Custom</span>
                  </div>
                  <a
                    href="/contact"
                    className={`block w-full py-3 rounded-lg font-semibold text-center transition-all ${
                      index === 1
                        ? 'bg-white text-blue-600 hover:bg-blue-50'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    Contact Sales
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white"
            >
              <BarChart3 className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Let's discuss how AI-Powered Analytics can help you achieve your goals.
              </p>
              <a
                href="/contact"
                className="inline-block px-10 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                Schedule Your Free Consultation
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
