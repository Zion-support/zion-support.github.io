import { Users, Search, CheckCircle, ArrowRight, ExternalLink, Phone, Mail, Sparkles, Target, TrendingUp, Shield, Briefcase, Award } from 'lucide-react';

export default function AIHRTalentPlatform() {
  const features = [
    'AI-powered candidate screening and matching',
    'Automated resume parsing and skill assessment',
    'Intelligent interview scheduling and feedback',
    'Employee performance analytics and insights',
    'Predictive turnover analysis and retention strategies',
    'Automated onboarding and training workflows',
    'Diversity and inclusion analytics',
    'Compliance monitoring and reporting'
  ];

  const benefits = [
    'Reduce time-to-hire by 60%',
    'Improve candidate quality by 40%',
    'Reduce hiring costs by 30%',
    'Increase employee retention by 25%',
    'Automate routine HR tasks',
    'Data-driven decision making'
  ];

  const pricing = [
    { 
      name: 'Starter', 
      price: '$149/mo', 
      features: ['Up to 50 employees', 'Basic AI screening', 'Standard reporting', 'Email support'],
      popular: false
    },
    { 
      name: 'Professional', 
      price: '$399/mo', 
      features: ['Up to 200 employees', 'Advanced AI analytics', 'Custom workflows', 'Priority support', 'Integration APIs'],
      popular: true
    },
    { 
      name: 'Enterprise', 
      price: '$999/mo', 
      features: ['Unlimited employees', 'Full AI suite', 'Custom AI training', 'Dedicated support', 'White-label solutions', 'Advanced compliance'],
      popular: false
    }
  ];

  const useCases = [
    'Recruitment and talent acquisition',
    'Employee performance management',
    'Learning and development',
    'Workforce planning and analytics',
    'Compliance and HR operations',
    'Employee engagement and retention'
  ];

  const platformModules = [
    'Talent Acquisition',
    'Performance Management',
    'Learning & Development',
    'Workforce Analytics',
    'Employee Engagement',
    'Compliance & Reporting',
    'Onboarding & Offboarding',
    'Succession Planning'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 via-orange-700 to-red-800 py-20 text-center text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Sparkles className="w-4 h-4 mr-2" /> AI-Powered HR & Talent Management
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">AI HR & Talent Platform</h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Transform your HR operations with AI-driven insights, automated workflows, and intelligent talent management. 
            Build better teams and drive organizational success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
              View Pricing
            </a>
            <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive HR Intelligence</h2>
          <p className="text-xl text-gray-600">Everything you need to manage talent intelligently</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Core Capabilities</h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Benefits</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Platform Modules Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Platform Modules</h2>
            <p className="text-xl text-gray-600">From recruitment to retention, we cover all your HR needs</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {platformModules.map((module, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
                <Briefcase className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 text-sm">{module}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect For</h2>
          <p className="text-xl text-gray-600">Ideal for HR teams and organizations seeking to optimize their talent management</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <Target className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Capabilities</h2>
            <p className="text-xl text-gray-600">Leverage artificial intelligence to make smarter HR decisions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <Search className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Candidate Matching</h3>
              <p className="text-gray-600">AI algorithms match candidates to job requirements with 90% accuracy</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <TrendingUp className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Predictive Analytics</h3>
              <p className="text-gray-600">Forecast employee turnover and identify retention risks early</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <Award className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Insights</h3>
              <p className="text-gray-600">AI-driven performance analysis and development recommendations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your organization size and needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-xl p-8 shadow-lg border-2 ${
                plan.popular ? 'border-orange-500 ring-2 ring-orange-500/20' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-orange-600 mb-2">{plan.price}</div>
                  <p className="text-gray-600">per month</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-orange-600 text-white hover:bg-orange-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need a custom plan? Contact us for enterprise pricing</p>
            <a href="mailto:kleber@ziontechgroup.com" className="text-orange-600 hover:text-orange-700 font-semibold">
              Contact Sales Team
            </a>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Proven Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">60%</div>
              <p className="text-gray-700">Faster time-to-hire</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">40%</div>
              <p className="text-gray-700">Better candidate quality</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">30%</div>
              <p className="text-gray-700">Reduced hiring costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your HR Operations?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of organizations already using AI HR & Talent Platform to build better teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:kleber@ziontechgroup.com" className="px-8 py-4 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors">
              Start Free Trial
            </a>
            <a href="tel:+13024640950" className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors">
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Questions? We're Here to Help</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <Phone className="w-8 h-8 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Speak with our HR technology experts</p>
            <a href="tel:+13024640950" className="text-orange-600 hover:text-orange-700 font-semibold">
              +1 302 464 0950
            </a>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <Mail className="w-8 h-8 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">Get detailed information and pricing</p>
            <a href="mailto:kleber@ziontechgroup.com" className="text-orange-600 hover:text-orange-700 font-semibold">
              kleber@ziontechgroup.com
            </a>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-gray-50 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Our Website</h3>
          <p className="text-gray-600 mb-4">
            Learn more about our complete suite of AI-powered business solutions
          </p>
          <a 
            href="https://ziontechgroup.com" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold"
          >
            Visit ziontechgroup.com <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}