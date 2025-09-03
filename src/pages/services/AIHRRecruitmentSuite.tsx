<<<<<<< HEAD
import React from 'react'; import { SEO } from '../../components/SEO'; import { motion  } from 'framer-motion'; import { ; Users,; Brain,; Search,; Target,; TrendingUp,; Clock,; DollarSign,; CheckCircle,; Star,; Zap,; Filter,; MessageSquare,; Calendar,; BarChart3,; Shield,; Globe,; Phone,; Mail,; MapPin,;  } from 'lucide-react'; ; export default function AIHRRecruitmentSuite() {; const features = [; {; icon: Brain,; title: 'AI Candidate Matching',; description:; 'Advanced AI algorithms that match candidates to job requirements with 95% accuracy',; },; {; icon: Search,; title: 'Intelligent Sourcing',; description:; 'AI-powered candidate discovery across multiple platforms and databases',; },; {; icon: Filter,; title: 'Smart Screening',; description:; 'Automated resume screening and candidate ranking based on skills and experience',; },; {; icon: MessageSquare,; title: 'AI Interview Assistant',; description:; 'Automated interview scheduling and AI-powered initial screening questions',; },; {; icon: BarChart3,; title: 'Predictive Analytics',; description:; 'Data-driven insights on candidate success probability and retention rates',; },; ]; ; const benefits = [; 'Reduce time-to-hire by 60%',; 'Improve candidate quality by 40%',; 'Cut recruitment costs by 35%',; 'Increase diversity in hiring',; 'Automate repetitive tasks',; 'Better candidate experience',; ]; ; const services = [; {; title: 'AI Recruitment Platform',; description: 'Complete AI-powered recruitment management system',; price: 'From $2,999/month',; features: [; 'AI candidate matching',; 'Automated screening',; 'Interview scheduling',; 'Analytics dashboard',; 'Integration with ATS systems',; ],; },; {; title: 'Smart Sourcing Suite',; description: 'AI-powered candidate discovery and outreach automation',; price: 'From $1,499/month',; features: [; 'Multi-platform sourcing',; 'Automated outreach',; 'Candidate engagement tracking',; 'Talent pool management',; ],; },; {; title: 'AI Interview Platform',; description: 'Automated interview scheduling and initial screening',; price: 'From $999/month',; features: [; 'Automated scheduling',; 'AI screening questions',; 'Video interview support',; 'Candidate feedback system',; ],; },; {; title: 'Recruitment Analytics',; description:; 'Data-driven insights and reporting for recruitment optimization',; price: 'From $799/month',; features: [; 'Performance metrics',; 'Predictive analytics',; 'Custom reports',; 'ROI tracking',; ],; },; ]; ; const technologies = [; {; name: 'Machine Learning',; description: 'Advanced ML algorithms for candidate matching',; },; {; name: 'Natural Language Processing',; description: 'AI-powered resume and job description analysis',; },; {; name: 'Predictive Analytics',; description: 'Data-driven hiring success predictions',; },; {; name: 'API Integration',; description: 'Seamless integration with existing HR systems',; },; {; name: 'Cloud Security',; description: 'Enterprise-grade security and compliance',; },; ]; ; return (; <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;" {}";" <section className="relative pt-32 pb-20 overflow-hidden">";" <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>";" <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">; <motion.div; initial={{ opacity: 0, y: 20 }}; animate={{ opacity: 1, y: 0 }};" transition={{ duration: 0.8   }}";" className="text-center";" >";" <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">";" <Brain className="w-4 h-4 mr-2" />; AI-Powered HR Solutions; </div>;" ";" <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;" AI HR Recruitment";" <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">; {' '}; Suite; </span>; </h1>;" ";" <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">; Transform your recruitment process with AI-powered candidate; matching, intelligent sourcing, and automated screening.Reduce; time-to-hire by 60% while improving candidate quality.; </p>;" ";" <div className="flex flex-col sm:flex-row gap-4 justify-center">;" <a";" href="https:
=======
import React from "react"
import Link from "next/link"
import Head from "next/head"
const AIHRRecruitmentSuite = () => {
  return (
    <>
      <Head>
        <title>H R Recruitment Suite - AI Services</title>
        <meta name="description" content="Professional H R Recruitment Suite services powered by AI"  />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              H R Recruitment Suite
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Professional H R Recruitment Suite services powered by artificial intelligence
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
export default AIHRRecruitmentSuite
>>>>>>> main
