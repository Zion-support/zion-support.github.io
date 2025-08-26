import React from 'react';
import Link from 'next/link';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Globe,
  Zap,
  Target,
  Award,
  ArrowRight,
  PieChart,
  DollarSign,
  Link as LinkIcon,
  Share2,
  BarChart3 as Analytics,
  Monitor,
  Smartphone,
  CheckCircle,
  Brain,
  Cpu,
  Building,
  Eye,
  MousePointer,
  AlertTriangle
} from 'lucide-react';

export default function AffiliateAttributionHub() {
  const features = [
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive tracking and attribution across all marketing channels',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'Revenue Attribution',
      description: 'Accurate tracking of customer journey and conversion attribution',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Multi-Touch Attribution',
      description: 'Understand the complete customer journey across all touchpoints',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Machine learning algorithms for predictive attribution modeling',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const attributionModels = [
    {
      title: 'First-Touch Attribution',
      description: 'Credit the first interaction that introduced the customer to your brand',
      icon: Eye,
      pros: ['Simple to implement', 'Clear first interaction', 'Good for brand awareness'],
      cons: ['Ignores later interactions', 'May not reflect actual influence']
    },
    {
      title: 'Last-Touch Attribution',
      description: 'Credit the final interaction before conversion',
      icon: MousePointer,
      pros: ['Direct conversion correlation', 'Easy to understand', 'Good for direct response'],
      cons: ['Overlooks earlier touchpoints', 'May undervalue awareness campaigns']
    },
    {
      title: 'Multi-Touch Attribution',
      description: 'Distribute credit across all interactions in the customer journey',
      icon: Share2,
      pros: ['Complete journey view', 'Balanced credit distribution', 'Better ROI insights'],
      cons: ['Complex implementation', 'Requires advanced analytics']
    },
    {
      title: 'AI-Powered Attribution',
      description: 'Machine learning algorithms determine optimal credit distribution',
      icon: Brain,
      pros: ['Data-driven insights', 'Adaptive to patterns', 'Most accurate attribution'],
      cons: ['Requires large datasets', 'Complex to interpret']
    }
  ];

  const trackingCapabilities = [
    { feature: 'Cross-Device Tracking', coverage: '99.9%', accuracy: '98%' },
    { feature: 'Multi-Channel Attribution', coverage: '100%', accuracy: '95%' },
    { feature: 'Real-Time Analytics', coverage: '100%', accuracy: '99%' },
    { feature: 'Fraud Detection', coverage: '99.5%', accuracy: '97%' },
    { feature: 'Predictive Modeling', coverage: '95%', accuracy: '92%' }
  ];

  const integrations = [
    { platform: 'Google Analytics', status: 'Native', icon: CheckCircle },
    { platform: 'Facebook Ads', status: 'Native', icon: CheckCircle },
    { platform: 'Google Ads', status: 'Native', icon: CheckCircle },
    { platform: 'LinkedIn Ads', status: 'Native', icon: CheckCircle },
    { platform: 'TikTok Ads', status: 'Native', icon: CheckCircle },
    { platform: 'Shopify', status: 'Native', icon: CheckCircle },
    { platform: 'WooCommerce', status: 'Native', icon: CheckCircle },
    { platform: 'Salesforce', status: 'Native', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20"></div>
        <div className="relative container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
              <Analytics className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Affiliate Attribution Hub
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Advanced affiliate tracking and attribution platform powered by AI. 
            Get complete visibility into your marketing performance and optimize ROI across all channels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Powerful Attribution Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our affiliate attribution hub provides comprehensive tracking, analytics, and insights 
              to maximize your marketing ROI and optimize campaign performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-zion-slate-light">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Attribution Models Section */}
      <section className="py-20 px-4 bg-zion-slate-dark/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Advanced Attribution Models
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose from multiple attribution models or let AI determine the optimal approach for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {attributionModels.map((model, index) => {
              const Icon = model.icon;
              return (
                <div key={index} className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{model.title}</h3>
                      <p className="text-zion-slate-light">{model.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-green-500 font-semibold mb-2">Pros</h4>
                      <ul className="space-y-1">
                        {model.pros.map((pro, proIndex) => (
                          <li key={proIndex} className="flex items-center text-zion-slate-light text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-red-500 font-semibold mb-2">Cons</h4>
                      <ul className="space-y-1">
                        {model.cons.map((con, conIndex) => (
                          <li key={conIndex} className="flex items-center text-zion-slate-light text-sm">
                            <AlertTriangle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tracking Capabilities Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Advanced Tracking Capabilities
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Industry-leading tracking accuracy and coverage across all devices and platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {trackingCapabilities.map((capability, index) => (
              <div key={index} className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300">
                <div className="text-3xl font-bold text-zion-cyan mb-2">{capability.coverage}</div>
                <div className="text-lg font-semibold text-white mb-2">{capability.feature}</div>
                <div className="text-sm text-zion-slate-light">Accuracy: {capability.accuracy}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 bg-zion-slate-dark/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Native Platform Integrations
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Seamlessly integrate with your existing marketing stack and platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrations.map((integration, index) => {
              const Icon = integration.icon;
              return (
                <div key={index} className="bg-zion-slate-dark/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 text-center hover:border-green-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <Icon className="w-12 h-12 text-green-500" />
                  </div>
                  <div className="text-xl font-semibold text-white mb-2">{integration.platform}</div>
                  <div className="text-green-500 font-medium">{integration.status}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Marketing Attribution?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Join thousands of marketers who trust Zion Tech Group for accurate attribution 
            and actionable insights to maximize their marketing ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link
              to="/case-studies"
              className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}