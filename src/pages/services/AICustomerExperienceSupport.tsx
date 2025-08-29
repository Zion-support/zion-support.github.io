import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Heart, Headphones, CheckCircle, Zap, Sparkles, ArrowRight, Bot, Users, Star, Clock, TrendingUp } from 'lucide-react';

export default function AICustomerExperienceSupport() {
  const features = [
    'AI-powered chatbot with 95% accuracy and natural language processing',
    'Intelligent ticket routing and priority classification',
    'Automated customer sentiment analysis and satisfaction tracking',
    'Multi-channel support integration (email, chat, phone, social media)',
    'Predictive customer behavior analysis and proactive support',
    'Personalized customer journey mapping and optimization',
    'Real-time analytics and performance monitoring dashboard',
    'Integration with CRM, helpdesk, and e-commerce platforms',
  ];

  const benefits = [
    'Increase customer satisfaction scores by 35-50%',
    'Reduce support response time by 80% with AI automation',
    'Cut support costs by 40-60% through intelligent automation',
    'Improve customer retention rates by 25-40%',
    'Generate 20-30% more upsell opportunities',
    'Achieve 99.9% support ticket resolution rate',
  ];

  const supportChannels = [
    'Live Chat & Messaging',
    'Email Support Automation',
    'Phone Support Integration',
    'Social Media Monitoring',
    'Self-Service Knowledge Base',
    'Video Call Support',
    'Mobile App Support',
    'Voice Assistant Integration',
    'WhatsApp Business API',
    'SMS Support Automation',
  ];

  const aiCapabilities = [
    'Natural Language Processing',
    'Sentiment Analysis',
    'Intent Recognition',
    'Automated Responses',
    'Smart Escalation',
    'Predictive Analytics',
    'Customer Segmentation',
    'Behavioral Analysis',
    'Proactive Support',
    'Performance Optimization',
  ];

  const integrations = [
    'Salesforce Service Cloud',
    'Zendesk Support',
    'HubSpot Service Hub',
    'Intercom',
    'Freshdesk',
    'Shopify',
    'WooCommerce',
    'Magento',
    'Slack',
    'Microsoft Teams',
  ];

  const stack = [
    { name: 'OpenAI GPT-4', url: 'https://openai.com/gpt-4' },
    { name: 'Dialogflow', url: 'https://cloud.google.com/dialogflow' },
    { name: 'Twilio', url: 'https://www.twilio.com/' },
    { name: 'Intercom', url: 'https://www.intercom.com/' },
    { name: 'Zendesk', url: 'https://www.zendesk.com/' },
    { name: 'HubSpot', url: 'https://www.hubspot.com/' },
    { name: 'Salesforce', url: 'https://www.salesforce.com/' },
    { name: 'Analytics', url: 'https://analytics.google.com/' },
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Customer Experience & Support</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your customer support with AI-driven automation, intelligent routing, and personalized experiences. 
              Deliver exceptional customer service 24/7 while reducing costs and improving satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                Get Support Demo
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
                <Bot className="h-8 w-8 text-white" />
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
                <Headphones className="h-8 w-8 text-white" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-white">Support Channels</h3>
            </div>
            <ul className="space-y-3">
              {supportChannels.slice(0, 5).map((item) => (
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
              <li>Starter: $199/month (up to 1,000 interactions)</li>
              <li>Professional: $599/month (up to 10,000 interactions)</li>
              <li>Enterprise: $1,499/month (unlimited interactions)</li>
              <li>Custom: Tailored enterprise solutions</li>
            </ul>
            <div className="mt-6 text-sm text-slate-400">
              Avg. market reference: see <a className="text-cyan-400 hover:underline" href="https://www.gartner.com/en/documents/3991477" target="_blank" rel="noreferrer">Gartner Customer Service</a>
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
                <Bot className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">AI Chatbot</h4>
              <p className="text-slate-300 text-sm">
                24/7 intelligent support with natural language processing
              </p>
            </div>
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-lg p-6 text-center">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg mx-auto mb-3 w-12 h-12 flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Sentiment Analysis</h4>
              <p className="text-slate-300 text-sm">
                Real-time customer mood detection and response optimization
              </p>
            </div>
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-lg p-6 text-center">
              <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg mx-auto mb-3 w-12 h-12 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Analytics</h4>
              <p className="text-slate-300 text-sm">
                Comprehensive performance metrics and customer insights
              </p>
            </div>
            <div className="bg-slate-900/60 border border-slate-700/60 rounded-lg p-6 text-center">
              <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg mx-auto mb-3 w-12 h-12 flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Multi-Channel</h4>
              <p className="text-slate-300 text-sm">
                Unified support across all customer touchpoints
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
          <h2 className="text-3xl font-bold text-white mb-8">Transform Your Customer Experience</h2>
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