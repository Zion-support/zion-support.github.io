import React from 'react';
import { 
  Mail, 
  Bot, 
  Zap, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle, 
  Star,
  ArrowRight,
  Phone,
  Globe,
  Shield,
  BarChart3,
  Target,
  Lightbulb
} from 'lucide-react';

export default function AIEmailAutomationPlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full">
              <Mail className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">AI Email Automation Platform</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Transform your email marketing with intelligent automation that reads, responds, and optimizes your campaigns in real-time
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="inline h-5 w-5 mr-2" />
              Call +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              <Mail className="inline h-5 w-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Revolutionary Email Intelligence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform doesn't just send emails—it understands, learns, and optimizes every interaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <Bot className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Email Responder</h3>
              <p className="text-gray-600 mb-4">
                Intelligent email responses that understand context, tone, and intent. Handles 80% of customer inquiries automatically.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Natural language processing</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Context-aware responses</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Multi-language support</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Follow-up Automation</h3>
              <p className="text-gray-600 mb-4">
                Automated follow-up sequences that adapt based on recipient behavior and engagement patterns.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Behavioral triggers</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Dynamic timing</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Personalized content</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                <BarChart3 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance Analytics</h3>
              <p className="text-gray-600 mb-4">
                Real-time insights into email performance with AI-powered recommendations for optimization.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Real-time metrics</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />AI recommendations</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Predictive analytics</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 p-3 rounded-lg w-fit mb-4">
                <Target className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Segmentation</h3>
              <p className="text-gray-600 mb-4">
                AI-driven audience segmentation that automatically categorizes contacts based on behavior and preferences.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Behavioral analysis</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Dynamic segments</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Predictive modeling</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-red-100 p-3 rounded-lg w-fit mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Spam Prevention</h3>
              <p className="text-gray-600 mb-4">
                Advanced AI algorithms ensure your emails reach the inbox and maintain high deliverability rates.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Content optimization</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Deliverability monitoring</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Reputation management</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-lg w-fit mb-4">
                <Lightbulb className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Content Generation</h3>
              <p className="text-gray-600 mb-4">
                AI-powered email content creation that generates personalized, engaging messages for every recipient.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Personalized content</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />A/B testing</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Brand consistency</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Transform Your Email Marketing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of businesses that have revolutionized their email marketing with our AI platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 p-4 rounded-full w-fit mx-auto mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">300%</h3>
              <p className="text-gray-300">Increase in Email Open Rates</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 p-4 rounded-full w-fit mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">85%</h3>
              <p className="text-gray-300">Reduction in Manual Work</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 p-4 rounded-full w-fit mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">24/7</h3>
              <p className="text-gray-300">Automated Customer Support</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 p-4 rounded-full w-fit mx-auto mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">95%</h3>
              <p className="text-gray-300">Customer Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <div className="text-4xl font-bold mb-6">$299<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />Up to 10,000 emails/month</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />Basic AI responses</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />Email templates</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />Basic analytics</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />Email support</li>
              </ul>
              <a 
                href="/contact" 
                className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold text-center block hover:bg-gray-800 transition-colors"
              >
                Get Started
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <div className="text-4xl font-bold mb-6">$799<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />Up to 50,000 emails/month</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />Advanced AI responses</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />Custom templates</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />Advanced analytics</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />Priority support</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />A/B testing</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />CRM integration</li>
              </ul>
              <a 
                href="/contact" 
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-blue-700 transition-colors"
              >
                Get Started
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <div className="text-4xl font-bold mb-6">$1,999<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />Unlimited emails</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />Custom AI models</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />White-label solution</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />Custom analytics</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />24/7 phone support</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />Advanced integrations</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-3" />Dedicated account manager</li>
              </ul>
              <a 
                href="/contact" 
                className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold text-center block hover:bg-gray-800 transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Email Marketing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using AI to revolutionize their email marketing. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="inline h-5 w-5 mr-2" />
              Call +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              <Mail className="inline h-5 w-5 mr-2" />
              Email kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm">
            <p>📍 364 E Main St STE 1008 Middletown DE 19709</p>
            <p>🌐 <a href="https://ziontechgroup.com" className="underline hover:no-underline">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}