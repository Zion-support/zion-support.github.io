<<<<<<< HEAD
import React, { useState } from 'react'; import { motion  } from 'framer-motion'; ; const AIContentMarketingSuite: React.FC = (): JSX.Element => {; const features = [; {; title: "AI Content Generator",";" description: "Create high-quality, SEO-optimized content in seconds",;" icon: PenTool,";" benefits: ["Multiple content types", "SEO optimization", "Brand voice consistency"]; },; {;" ";" title: "Content Calendar & Planning",";" description: "Intelligent content scheduling and topic ideation",;" icon: Calendar,";" benefits: ["AI-powered topic suggestions", "Optimal publishing times", "Content gap analysis"]; },; {;" ";" title: "Social Media Automation",";" description: "Auto-generate and schedule posts across all platforms",;" icon: Share2,";" benefits: ["Multi-platform support", "Trend-based content", "Engagement optimization"]; },; {;" ";" title: "Performance Analytics",";" description: "AI-driven insights and optimization recommendations",;" icon: BarChart3,";" benefits: ["Real-time tracking", "Predictive analytics", "ROI measurement"]; }; ]; ; const capabilities = [; {;" ";" name: "Starter",";" price: "$199",";" period: "/month",";" description: "Perfect for small businesses",;" features: [";" "Up to 10 articles/month",";" "Basic SEO optimization",";" "Social media templates",";" "Email support",";" "Basic analytics"; ],; popular: false; },; {;" ";" name: "Professional",";" price: "$499",";" period: "/month",";" description: "Ideal for growing companies",;" features: [";" "Up to 50 articles/month",";" "Advanced SEO tools",";" "Custom content templates",";" "Priority support",";" "Advanced analytics",";" "API access",";" "White-label options"; ],; popular: true; },; {;" ";" name: "Enterprise",";" price: "$1,299",";" period: "/month",";" description: "For large organizations",;" features: [";" "Unlimited content",";" "Custom AI models",";" "Dedicated account manager",";" "24/7 support",";" "Advanced security",";" "Custom training",";" "SLA guarantees"; ],; popular: false; }; ]; ; const useCases = [; {;" ";" type: "Blog Posts",";" description: "SEO-optimized articles with AI research",;" icon: FileText,";" features: ["Keyword research", "Outline generation", "SEO optimization"]; },; {;" ";" type: "Social Media",";" description: "Engaging posts for all platforms",;" icon: Share2,";" features: ["Platform-specific content", "Trend integration", "Hashtag optimization"]; },; {;" ";" type: "Email Campaigns",";" description: "Personalized email sequences",;" icon: MessageSquare,";" features: ["Segmentation", "A/B testing", "Performance tracking"]; },; {;" ";" type: "Video Scripts",";" description: "Compelling video content scripts",;" icon: Eye,";" features: ["Story structure", "Hook optimization", "Call-to-action"]; }; ]; ;" return(";" <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-purple-dark">;" {}";" <div className="relative overflow-hidden">;" {}";" <div className="absolute inset-0">";" <div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>;" <motion.div ";" className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-full blur-3xl"; animate={{; scale: [1, 1.2, 1],; opacity: [0.1, 0.3, 0.1]}}; transition={{; duration: 4,;" repeat: Infinity,";" ease: "easeInOut"; }}; />; </div>;" ";" <div className="relative container mx-auto px-4 py-24 text-center text-white">; <motion.div; initial = {; { opacity: 0,; y: 20; }}; animate = {; { opacity: 1,; y: 0; }}; transition={{ duration: 0.8   }};" >";" <div className="flex items-center justify-center mb-6">";" <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mr-4">";" <PenTool className="w-8 h-8 text-white" />;" </div>";" <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">; AI Content Marketing Suite; </h1>;" </div>";" <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto text-zion-slate-light">; Revolutionize your content marketing with AI-powered creation, optimization, and automation.; Generate engaging content that converts and scales your business.;" </p>";" <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">;" <a ";" href="https:
=======
import React from "react"
import Link from "next/link"
import Head from "next/head"
const AIContentMarketingSuite = () => {
  return (
    <>
      <Head>
        <title>Content Marketing Suite - AI Services</title>
        <meta name="description" content="Professional Content Marketing Suite services powered by AI"  />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Content Marketing Suite
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Professional Content Marketing Suite services powered by artificial intelligence
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
export default AIContentMarketingSuite
>>>>>>> main
