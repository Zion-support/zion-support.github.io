<<<<<<< HEAD
import { Play, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, Video, BarChart3 export default function AIEntertainment() {; 'Automated content moderation and filtering',; 'Predictive analytics for audience engagement',; 'Real-time content performance optimization',; 'Smart content scheduling and distribution',; 'Integration with major entertainment platforms',; 'Custom AI models for entertainment-specific insights'; <=; ]},; > { ; name: 'Large Creator', ; price: '$1,499/mo', ; details: ['Unlimited views',Custom AI models',Full platform integration',24/7 dedicated support'] },; ]; ; 'Video content optimization and recommendation',; 'Music and audio content personalization',; 'Gaming content and player engagement',; 'Social media content optimization',; 'Streaming platform content curation',; 'Content monetization and advertising'; ]; ; 'Increase audience engagement by 30-50%',; 'Improve content discovery by 40-60%',; 'Cut content creation costs by 25-40%',; 'Optimize content for maximum reach',; 'Enhance user experience and satisfaction',; 'Scale entertainment operations efficiently'; ]; ; 'Video Streaming & YouTube',; 'Music & Audio Platforms',; 'Gaming & Esports',; 'Social Media & Influencers',; 'Podcasting & Audio Content',; 'Live Streaming & Events'; ]; ; return(); <div className="min-h-screen bg-white">";" <section className="bg-gradient-to-br from-pink-600 via-rose-600 to-red-600 py-20 text-center">";" <div className="max-w-5xl mx-auto px-6">";" <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">";" <Play className="w-4 h-4 mr-2" /> AI-Powered Entertainment Intelligence";" </div>";" <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI Entertainment Platform</h1>" <p className="text-rose-100 text-xl">Transform your entertainment business with AI-powered tools that enhance content creation, optimize audience engagement, and maximize reach.</p>; </div>;" </section>";" ";" <section className="py-16 max-w-6xl mx-auto px-6">";" <div className="grid md:grid-cols-2 gap-10">";" <div>";" <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Entertainment Features</h2>";" <ul className="space-y-3">";" {features.map((f) => (";" <li key={f} className="flex items-start">";" <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />" <span className="text-gray-700">{f}</span>; </li>;" ))}";" </ul>";" <div className="mt-6 text-sm text-gray-600">; Built with enterprise-grade security, SOC 2 compliance, and 99.9% uptime SLA.;" </div>";" </div>";" <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">";" <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>";" <div className="grid md:grid-cols-3 gap-4">";" {tiers.map((t) => (";" <div key={t.name} className="rounded-lg p-4 border border-gray-200 hover:border-pink-300 transition-colors">";" <div className="text-lg font-semibold mb-1">{t.name}</div>";" <div className="text-2xl font-bold text-pink-600 mb-2">{t.price}</div>";" <ul className="text-sm text-gray-600 space-y-1">; {t.details.map((d (<li key={d}>{d}</li>))}; </ul>; </div>;" ))}";" </div>";" <div className="mt-6 flex flex-wrap gap-3">";" <a href="/pricing" className="px-5 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors inline-flex items-center">";" View Full Pricing <ArrowRight className="w-4 h-4 ml-2" />";" </a>";" <a href="https:
=======
import React from "react"
import Link from "next/link"
import Head from "next/head"
const AIEntertainment = () => {
  return (
    <>
      <Head>
        <title>Entertainment - AI Services</title>
        <meta name="description" content="Professional Entertainment services powered by AI"  />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Entertainment
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Professional Entertainment services powered by artificial intelligence
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
    </>
  );
}
export default AIEntertainment
>>>>>>> main
