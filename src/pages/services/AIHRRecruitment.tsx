import React from "react"
import Link from "next/link"
import Head from "next/head"
const AIHRRecruitment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              H R Recruitment
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Professional H R Recruitment services powered by artificial intelligence
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Advanced AI Solutions</li>
                  <li>• Custom Implementation</li>
                  <li>• 24/7 Support</li>
                  <li>• Expert Consultation</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Industry Expertise</li>
                  <li>• Proven Results</li>
                  <li>• Scalable Solutions</li>
                  <li>• Competitive Pricing</li>
                </ul>
              </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                View Pricing
              </Link>
              <Link href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                Contact Us
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Recruitment?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join leading organizations that are already leveraging AI-powered recruitment 
            to find and hire the best talent faster.          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered HR Recruitment
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your hiring process with intelligent AI solutions that find the best talent faster and more efficiently.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors"
            >
              <div className="text-blue-400 mb-4">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{feature.description}</p>
              {feature.benefits && (
                <ul className="text-gray-400 text-xs space-y-1">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-3 w-3 mr-2 text-green-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </div>
    </>
  );
}
export default AIHRRecruitment