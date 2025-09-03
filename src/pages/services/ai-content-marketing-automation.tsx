<<<<<<< HEAD
import React from 'react'; import { motion  } from 'framer-motion'; import { Link  } from 'react-router-dom'; import { ; Brain,; PenTool,; TrendingUp,; Target,; Zap,; Shield,; Cloud,; Users,; CheckCircle,; ArrowRight,; Lightbulb,; Cpu,; Database,; Network,; Eye,; Sparkles,; Rocket,; Globe,; Clock,; Award,; Star,; MessageCircle,; Phone,; Mail,; ShoppingCart,; DollarSign,; Heart,; Factory,; BarChart3,; Calendar,; Mail as MailIcon,; Share2,; Monitor,; PieChart;  } from 'lucide-react'; import { SEO } from '../../components/SEO'; ; export default function AIContentMarketingAutomation() {; const features = [; {; icon: Brain,; title: 'AI Content Generation',; description: 'Generate high-quality, SEO-optimized content using advanced language models'; },; {; icon: PenTool,; title: 'Multi-Format Content',; description: 'Create blogs, social media posts, emails, and landing pages from single prompts'; },; {; icon: TrendingUp,; title: 'Performance Analytics',; description: 'Track content performance with AI-powered insights and optimization recommendations'; },; {; icon: Target,; title: 'Audience Segmentation',; description: 'Automatically segment audiences and personalize content for maximum engagement'; },; {; icon: Calendar,; title: 'Smart Scheduling',; description: 'AI-optimized posting schedules based on audience behavior and engagement patterns'; },; {; icon: Share2,; title: 'Cross-Platform Distribution',; description: 'Automatically distribute content across multiple channels with platform-specific optimization'; }; ]; ; const benefits = [; '10x faster content creation with AI assistance',; 'Improved SEO rankings through intelligent optimization',; 'Increased engagement with personalized content',; 'Cost reduction through automation',; 'Better ROI tracking and analytics',; 'Consistent brand voice across all channels'; ]; ; const useCases = [; {; industry: 'E-commerce',; applications: ['Product descriptions', 'Email campaigns', 'Social media content', 'Blog posts'],; icon: ShoppingCart; },; {; industry: 'B2B Marketing',; applications: ['Thought leadership content', 'Case studies', 'White papers', 'LinkedIn posts'],; icon: Users; },; {; industry: 'Agency Services',; applications: ['Client content creation', 'Campaign management', 'Performance reporting', 'A/B testing'],; icon: Globe; },; {; industry: 'SaaS Companies',; applications: ['Feature announcements', 'User onboarding', 'Support documentation', 'Community content'],; icon: Cpu; }; ]; ; const technologies = [; 'OpenAI GPT-4 & Claude',; 'Natural Language Processing',; 'Machine Learning Algorithms',; 'SEO Optimization Tools',; 'Social Media APIs',; 'Analytics & Reporting'; ]; ; const pricing = [; {; plan: 'Starter',; price: '$299',; period: '/month',; description: 'Perfect for small businesses and startups',; features: [; 'AI content generation(50 pieces/month)',; 'Basic SEO optimization',; 'Social media scheduling',; 'Email marketing automation',; 'Basic analytics dashboard',; 'Email support'; ],; cta: 'Get Started',; popular: false; },; {; plan: 'Professional',; price: '$599',; period: '/month',; description: 'Ideal for growing businesses and marketing teams',; features: [; 'AI content generation(200 pieces/month)',; 'Advanced SEO optimization',; 'Multi-platform distribution',; 'Advanced audience segmentation',; 'Performance analytics',; 'Priority support',; 'Custom templates'; ],; cta: 'Start Free Trial',; popular: true; },; {; plan: 'Enterprise',; price: '$1,299',; period: '/month',; description: 'For large organizations with complex needs',; features: [; 'Unlimited AI content generation',; 'Custom AI model training',; 'Advanced analytics & reporting',; 'API access',; 'Dedicated account manager',; 'Custom integrations',; 'White-label options'; ],; cta: 'Contact Sales',; popular: false; }; ]; ; const containerVariants = {; hidden: { opacity: 0   },; visible: { opacity: 1,; transition: { staggerChildren: 0.1;   }; }; }; ; const itemVariants = {; hidden: { y: 20, opacity: 0 },; visible: { y: 0,; opacity: 1,; transition: { duration: 0.5;   }; }; }; ; return (; <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">;"";" <SEO ";"";" title="AI Content Marketing Automation Platform - Zion Tech Group";"";" description="Transform your content marketing with AI-powered automation.Generate, optimize, and distribute content across all channels with intelligent automation.";"";" keywords="AI content marketing, content automation, AI writing, marketing automation, content generation, SEO optimization";"";" canonical="https:
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function AiContentMarketingAutomation() {
  const features = [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ]
  const benefits = [
    "Benefit 1",
    "Benefit 2",
    "Benefit 3"
  ]
  const useCases = [
    "Use Case 1",
    "Use Case 2",
    "Use Case 3"
  ]
  const pricing = [
      }
];
    {
      name: "Professional",
      price: "$799/mo",
      details: ["Up to 50 users", "Advanced features", "Priority support", "99.9% SLA"]
    }
  ];
    {
      name: "Enterprise",
      price: "$1,999/mo",
    }
  ];

  ]
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Database className="w-4 h-4 mr-2"  />
            AI-Powered Ai Content Marketing Automation Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Ai Content Marketing Automation Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your ai content marketing automation operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Ai Content Marketing Automation Features</h2>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"  />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}

            </ul>
            <div className="mt-6 text-sm text-gray-600">
              Built with enterprise-grade security, SOC 2 compliance, and 99.9% uptime SLA.
            </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {pricing.map((tier, index) => (
                <div key={index} className="rounded-lg p-4 border border-gray-200 hover:border-indigo-300 transition-colors">
                  <div className="text-lg font-semibold mb-1">{tier.name}</div>
                  <div className="text-2xl font-bold text-indigo-600 mb-2">{tier.price}</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tier.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}

                  </ul>
                </div>
              ))}

            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/pricing" className="px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center">
                View Full Pricing <ArrowRight className="w-4 h-4 ml-2"  />
              </Link>
              <Link href="/contact" className="px-5 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors inline-flex items-center">
                Contact Sales <Phone className="w-4 h-4 ml-2"  />
              </Link>
            </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <Zap className="w-6 h-6 text-indigo-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">Performance</h3>
                </div>
                <p className="text-gray-600">{benefit}</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((industry, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Target className="w-5 h-5 text-indigo-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
                </div>
                <p className="text-gray-600">Comprehensive ai content marketing automation solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Ai Content Marketing Automation?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered ai content marketing automation platform today.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center">
              Get Started <ArrowRight className="w-4 h-4 ml-2"  />
            </Link>
            <Link href="/demo" className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center">
              Schedule Demo <Mail className="w-4 h-4 ml-2"  />
            </Link>
          </div>
      </section>
    </div>
  ),
>>>>>>> main
