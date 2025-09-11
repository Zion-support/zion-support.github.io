import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Mail, BarChart3, Users, CheckCircle, Zap, Sparkles, ArrowRight, Brain, TrendingUp, MessageSquare, Globe } from 'lucide-react';

export default function AIMarketingAutomationPersonalization() {
  const features = [
    'AI-powered customer segmentation with behavioral analysis',
    'Dynamic content personalization across all marketing channels',
    'Predictive lead scoring and conversion optimization',
    'Multi-channel campaign orchestration (email, SMS, social, web)',
    'Real-time A/B testing with AI-driven optimization',
    'Customer journey mapping and automated nurturing sequences',
    'Advanced analytics and ROI tracking with attribution modeling',
    'Integration with major CRM, e-commerce, and advertising platforms',
  ];

  const benefits = [
    'Increase conversion rates by 40-60% with personalization',
    'Reduce customer acquisition costs by 30-50%',
    'Improve email open rates by 25-40% with AI optimization',
    'Generate 35-50% more qualified leads through automation',
    'Boost customer lifetime value by 20-35%',
    'Achieve 99.9% campaign delivery and tracking accuracy',
  ];

  const marketingChannels = [
    'Email Marketing Automation',
    'SMS & Push Notifications',
    'Social Media Advertising',
    'Display & Retargeting Ads',
    'Content Marketing',
    'Search Engine Marketing',
    'Influencer Marketing',
    'Video Marketing',
    'Voice & Chatbot Marketing',
    'Location-Based Marketing',
  ];

  const aiCapabilities = [
    'Customer Behavior Analysis',
    'Predictive Analytics',
    'Dynamic Content Generation',
    'Smart Segmentation',
    'Lead Scoring & Qualification',
    'Campaign Optimization',
    'Personalization Engine',
    'A/B Testing Automation',
    'Performance Prediction',
    'ROI Optimization',
  ];

  const integrations = [
    'Salesforce Marketing Cloud',
    'HubSpot Marketing Hub',
    'Mailchimp',
    'Klaviyo',
    'Shopify',
    'WooCommerce',
    'Facebook Ads',
    'Google Ads',
    'LinkedIn Ads',
    'TikTok Ads',
  ];

  const stack = [
    { name: 'OpenAI GPT-4', url: 'https://openai.com/gpt-4' },
    { name: 'TensorFlow', url: 'https://www.tensorflow.org/' },
    { name: 'Scikit-learn', url: 'https://scikit-learn.org/' },
    { name: 'Apache Spark', url: 'https://spark.apache.org/' },
    { name: 'Kubernetes', url: 'https://kubernetes.io/' },
    { name: 'Redis', url: 'https://redis.io/' },
    { name: 'PostgreSQL', url: 'https://www.postgresql.org/' },
    { name: 'Elasticsearch', url: 'https://www.elastic.co/' },
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Marketing Automation & Personalization</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your marketing with AI-driven automation, intelligent personalization, and predictive analytics. 
              Deliver the right message to the right person at the right time across all channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                Get Marketing Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200">
                Visit Site
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-white">AI Features</h3>
            </div>
            <ul className="space-y-3">
              {features.slice(0, 4).map((item) => (
                <li key={item} className="flex items-center text-slate-300">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-white">Marketing Channels</h3>
            </div>
            <ul className="space-y-3">
              {marketingChannels.slice(0, 5).map((item) => (
                <li key={item} className="flex items-center text-slate-300">
                  <CheckCircle className="h-5 w-5 text-purple-400 mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-white">Pricing</h3>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li>Starter: $299/month (up to 10,000 contacts)</li>
              <li>Professional: $799/month (up to 100,000 contacts)</li>
              <li>Enterprise: $1,999/month (unlimited contacts)</li>
              <li>Custom: Tailored enterprise solutions</li>
            </ul>
            <div className="mt-6 text-sm text-slate-400">
              Avg. market reference: see <a className="text-cyan-400 hover:underline" href="https://www.gartner.com/en/documents/3991477" target="_blank" rel="noreferrer">Gartner Marketing Automation</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-white mb-6">Platform Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-lg p-6 text-center">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mx-auto mb-3 w-12 h-12 flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Customer Segmentation</h4>
              <p className="text-slate-300 text-sm">
                AI-powered behavioral analysis and dynamic segmentation
              </p>
            </div>
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-lg p-6 text-center">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg mx-auto mb-3 w-12 h-12 flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Personalization</h4>
              <p className="text-slate-300 text-sm">
                Dynamic content and offers based on customer behavior
              </p>
            </div>
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-lg p-6 text-center">
              <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg mx-auto mb-3 w-12 h-12 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Automation</h4>
              <p className="text-slate-300 text-sm">
                Intelligent campaign orchestration and nurturing sequences
              </p>
            </div>
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-lg p-6 text-center">
              <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg mx-auto mb-3 w-12 h-12 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Analytics</h4>
              <p className="text-slate-300 text-sm">
                Comprehensive ROI tracking and performance optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-white mb-4">AI Capabilities</h3>
          <div className="flex flex-wrap gap-3">
            {aiCapabilities.map((capability) => (
              <span key={capability} className="px-4 py-2 bg-slate-900/60 border border-slate-700/60 rounded-lg text-slate-300">
                {capability}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-white mb-4">Platform Integrations</h3>
          <div className="flex flex-wrap gap-3">
            {integrations.map((integration) => (
              <span key={integration} className="px-4 py-2 bg-slate-900/60 border border-slate-700/60 rounded-lg text-slate-300">
                {integration}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-white mb-4">Tech Stack & Tools</h3>
          <div className="flex flex-wrap gap-3">
            {stack.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="px-4 py-2 bg-slate-900/60 border border-slate-700/60 rounded-lg text-slate-300 hover:text-white hover:border-cyan-500">
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Transform Your Marketing Today</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a href="tel:+13024640950" className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200">
              Call +1 302 464 0950
            </a>
          </div>
          <p className="text-slate-400 mt-6">
            Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:underline">kleber@ziontechgroup.com</a> for enterprise solutions
          </p>
        </div>
      </section>
    </div>
  );
}