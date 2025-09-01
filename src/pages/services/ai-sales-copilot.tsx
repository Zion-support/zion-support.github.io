import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Target, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Zap, 
  Shield, 
  Globe, 
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  MessageSquare,
  Calendar,
  DollarSign,
  Headphones
} from 'lucide-react';

export default function AISalesCopilot() {
  return (
    <>
      <Helmet>
        <title>AI Sales Copilot - Intelligent Sales Automation | Zion Tech Group</title>
        <meta name="description" content="Transform your sales process with our AI Sales Copilot. Automate lead qualification, personalize outreach, and boost conversion rates with intelligent sales automation." />
        <meta name="keywords" content="AI sales automation, sales copilot, lead qualification, sales intelligence, CRM automation, sales optimization" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-sales-copilot" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-darker">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-8">
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Sales Automation
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Sales Copilot
                <span className="block text-zion-cyan">Your Intelligent Sales Partner</span>
              </h1>
              
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Transform your sales process with AI-powered automation. Qualify leads, personalize outreach, 
                and close more deals with intelligent sales assistance that works 24/7.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://ziontechgroup.com/contact" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="#demo" 
                  className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose AI Sales Copilot?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Boost your sales performance with intelligent automation and data-driven insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Smart Lead Qualification</h3>
                <p className="text-zion-slate-light">
                  AI automatically scores and qualifies leads based on behavior, demographics, and engagement patterns.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Personalized Outreach</h3>
                <p className="text-zion-slate-light">
                  Generate personalized messages and follow-ups that resonate with each prospect's unique needs.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Predictive Analytics</h3>
                <p className="text-zion-slate-light">
                  Forecast sales outcomes and identify the best opportunities with AI-powered predictions.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">24/7 Availability</h3>
                <p className="text-zion-slate-light">
                  Your AI copilot never sleeps, engaging prospects at optimal times across all time zones.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Performance Optimization</h3>
                <p className="text-zion-slate-light">
                  Continuously learn and improve from every interaction to maximize conversion rates.
                </p>
              </div>
              
              <div className="bg-zion-blue-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Compliance & Security</h3>
                <p className="text-zion-slate-light">
                  Built-in compliance features ensure all communications meet regulatory requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Everything you need to automate and optimize your sales process
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Intelligent Lead Scoring</h3>
                      <p className="text-zion-slate-light">
                        AI algorithms analyze prospect behavior, company data, and engagement patterns to automatically score and prioritize leads.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Multi-Channel Communication</h3>
                      <p className="text-zion-slate-light">
                        Seamlessly manage outreach across email, LinkedIn, phone, and SMS with unified conversation tracking.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Smart Follow-up Sequences</h3>
                      <p className="text-zion-slate-light">
                        Automatically schedule and send personalized follow-ups based on prospect engagement and response patterns.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">CRM Integration</h3>
                      <p className="text-zion-slate-light">
                        Native integration with Salesforce, HubSpot, Pipedrive, and other popular CRM platforms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BarChart3 className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Real-time Analytics Dashboard</h3>
                  <p className="text-zion-slate-light mb-6">
                    Monitor your sales performance with comprehensive analytics and actionable insights.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-zion-cyan">87%</div>
                      <div className="text-sm text-zion-slate-light">Response Rate Increase</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-zion-cyan">3.2x</div>
                      <div className="text-sm text-zion-slate-light">Faster Lead Qualification</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
                Choose the plan that fits your business needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                  <div className="text-4xl font-bold text-zion-cyan mb-2">$99</div>
                  <div className="text-zion-slate-light">per month</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Up to 1,000 leads/month
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Basic AI lead scoring
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Email automation
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Basic analytics
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Email support
                  </li>
                </ul>
                
                <a 
                  href="https://ziontechgroup.com/contact" 
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
                >
                  Start Free Trial
                </a>
              </div>
              
              {/* Professional Plan */}
              <div className="bg-zion-blue-dark/50 border-2 border-zion-cyan rounded-xl p-8 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                  <div className="text-4xl font-bold text-zion-cyan mb-2">$299</div>
                  <div className="text-zion-slate-light">per month</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Up to 10,000 leads/month
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Advanced AI lead scoring
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Multi-channel automation
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Advanced analytics & reporting
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    CRM integrations
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Priority support
                  </li>
                </ul>
                
                <a 
                  href="https://ziontechgroup.com/contact" 
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
                >
                  Start Free Trial
                </a>
              </div>
              
              {/* Enterprise Plan */}
              <div className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                  <div className="text-4xl font-bold text-zion-cyan mb-2">Custom</div>
                  <div className="text-zion-slate-light">contact us</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Unlimited leads
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Custom AI models
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    White-label solutions
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Custom integrations
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    Dedicated account manager
                  </li>
                  <li className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    24/7 phone support
                  </li>
                </ul>
                
                <a 
                  href="https://ziontechgroup.com/contact" 
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Sales Process?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join thousands of sales teams who have already increased their conversion rates with AI Sales Copilot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://ziontechgroup.com/contact" 
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
              >
                <Headphones className="w-5 h-5 mr-2" />
                Call +1 (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}