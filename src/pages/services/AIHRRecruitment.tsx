<<<<<<< HEAD
import { Users, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, Briefcase, BarChart3 export default function AIHRRecruitment() {; 'Automated interview scheduling and coordination',; 'Predictive analytics for candidate success',; 'Bias-free screening and diversity optimization',; 'Automated reference checking and verification',; 'Integration with major ATS and HR platforms',; 'Custom AI models for industry-specific hiring'; <=; ]},; > { ; name: 'Enterprise', ; price: '$1,299/mo', ; details: ['Unlimited job postings',Custom AI models',Full platform integration',24/7 dedicated support'] },; ]; ; 'High-volume recruitment and hiring',; 'Technical talent acquisition',; 'Executive search and placement',; 'Seasonal hiring optimization',; 'Diversity and inclusion hiring',; 'Remote workforce recruitment'; ]; ; 'Reduce time-to-hire by 40-60%',; 'Improve candidate quality by 30-50%',; 'Cut recruitment costs by 25-40%',; 'Increase diversity in hiring by 35-55%',; 'Enhance candidate experience',; 'Scale recruitment without additional staff'; ]; ; 'Technology & Software',; 'Healthcare & Life Sciences',; 'Financial Services',; 'Manufacturing & Industrial',; 'Retail & E-commerce',; 'Professional Services'; ]; ; return(); <div className="min-h-screen bg-white">";" <section className="bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 py-20 text-center">";" <div className="max-w-5xl mx-auto px-6">";" <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">";" <Users className="w-4 h-4 mr-2" /> AI-Powered HR Intelligence";" </div>";" <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI HR Recruitment Platform</h1>" <p className="text-purple-100 text-xl">Revolutionize your hiring process with AI-powered recruitment that finds the best talent faster, reduces bias, and improves hiring outcomes.</p>; </div>;" </section>";" ";" <section className="py-16 max-w-6xl mx-auto px-6">";" <div className="grid md:grid-cols-2 gap-10">";" <div>";" <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Recruitment Features</h2>";" <ul className="space-y-3">";" {features.map((f) => (";" <li key={f} className="flex items-start">";" <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />" <span className="text-gray-700">{f}</span>; </li>;" ))}";" </ul>";" <div className="mt-6 text-sm text-gray-600">; Built with enterprise-grade security, SOC 2 compliance, and 99.9% uptime SLA.;" </div>";" </div>";" <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">";" <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>";" <div className="grid md:grid-cols-3 gap-4">";" {tiers.map((t) => (";" <div key={t.name} className="rounded-lg p-4 border border-gray-200 hover:border-violet-300 transition-colors">";" <div className="text-lg font-semibold mb-1">{t.name}</div>";" <div className="text-2xl font-bold text-violet-600 mb-2">{t.price}</div>";" <ul className="text-sm text-gray-600 space-y-1">; {t.details.map((d (<li key={d}>{d}</li>))}; </ul>; </div>;" ))}";" </div>";" <div className="mt-6 flex flex-wrap gap-3">";" <a href="/pricing" className="px-5 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors inline-flex items-center">";" View Full Pricing <ArrowRight className="w-4 h-4 ml-2" />";" </a>";" <a href="https:
=======
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
>>>>>>> main
