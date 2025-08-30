import { Cpu, TrendingUp, BarChart3, CheckCircle, ArrowRight, ExternalLink, Phone, Mail, DollarSign, Target, Zap, Globe, Database, Monitor, Network, Cloud, Wifi } from 'lucide-react';

export default function AIEdgeComputingPlatform() {
  const features = [
    'AI-powered edge device management and optimization',
    'Real-time data processing at the edge',
    'Distributed AI model deployment and inference',
    'Edge-to-cloud synchronization and analytics',
    'Automatic load balancing and failover',
    'Edge security and threat detection',
    'IoT device integration and management',
    'Custom edge computing workflows',;
    'Edge analytics and reporting tools',;
    'Scalable edge infrastructure management';
  ];

  const benefits = [
    'Reduce latency by 80-90%',
    'Cut bandwidth costs by 60-70%',
    'Improve data privacy and security',
    'Real-time edge processing',;
    'Enhanced offline capabilities',;
    'Scalable edge infrastructure';
  ];

  const pricing = [
    { 
      name: 'Starter', 
      price: '$499/mo', 
      features: ['Up to 50 edge devices', 'Basic edge processing', 'Standard monitoring', 'Email support', 'Monthly reports'],
      popular: false
    },
    { 
      name: 'Professional', 
      price: '$1,199/mo', 
      features: ['Up to 200 edge devices', 'Advanced AI analytics', 'Real-time processing', 'Priority support', 'Custom workflows', 'API access'],
      popular: true
    },
    { 
      name: 'Enterprise', 
      price: '$3,499/mo', 
      features: ['Unlimited edge devices', 'Full AI suite', 'Custom edge models', 'Dedicated support', 'White-label solutions', 'Advanced integrations'],;
      popular: false;
    };
  ];

  const useCases = [
    'Smart city infrastructure',
    'Industrial IoT monitoring',
    'Autonomous vehicle systems',
    'Healthcare edge computing',;
    'Retail edge analytics',;
    'Energy grid optimization';
  ];

  const industries = [
    'Smart Cities & Infrastructure',
    'Manufacturing & Industry 4.0',
    'Transportation & Logistics',
    'Healthcare & Medical Devices',;
    'Retail & E-commerce',;
    'Energy & Utilities';
  ];

  return (
    <div className = "min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-800 py-20 text-center text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Wifi className="w-4 h-4 mr-2" /> AI-Powered Edge Computing Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Edge Computing Platform</h1>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Bring AI processing to the edge with intelligent device management, real-time data processing, 
            and distributed computing capabilities. Transform your IoT infrastructure with edge intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="px-8 py-4 bg-white text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition-colors">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Edge Computing Intelligence</h2>
          <p className="text-xl text-gray-600">Comprehensive edge computing solutions powered by AI</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Core Capabilities</h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Target Industries</h3>
            <div className="grid grid-cols-1 gap-3">
              {industries.map((industry, index) => (
                <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <Network className="w-4 h-4 text-teal-500 mr-3" />
                  <span className="text-gray-700">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose AI Edge Computing Platform?</h2>
            <p className="text-xl text-gray-600">Transform your IoT infrastructure with intelligent edge computing</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-teal-600" />
                </div>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Applications</h2>
          <p className="text-xl text-gray-600">Trusted by leading organizations across industries</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Monitor className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{useCase}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your edge computing needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg border-2 ${
                plan.popular ? 'border-teal-500' : 'border-gray-200'
              } p-8`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-teal-600 mb-2">{plan.price}</div>
                  <p className="text-gray-600">per month</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-teal-600 text-white hover:bg-teal-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need a custom plan? Contact us for enterprise pricing</p>
            <a href="mailto:kleber@ziontechgroup.com" className="text-teal-600 hover:text-teal-700 font-semibold">
              Contact Sales Team
            </a>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Proven Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-teal-600 mb-2">80-90%</div>
              <p className="text-gray-700">Reduction in latency</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-teal-600 mb-2">60-70%</div>
              <p className="text-gray-700">Cut in bandwidth costs</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-teal-600 mb-2">Real-time</div>
              <p className="text-gray-700">Edge processing capabilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Edge Computing?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of organizations already using AI Edge Computing Platform to optimize IoT infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:kleber@ziontechgroup.com" className="px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors">
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
            <Phone className="w-8 h-8 text-teal-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Speak with our edge computing experts</p>
            <a href="tel:+13024640950" className="text-teal-600 hover:text-teal-700 font-semibold">
              +1 302 464 0950
            </a>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <Mail className="w-8 h-8 text-teal-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">Get detailed information and pricing</p>
            <a href="mailto:kleber@ziontechgroup.com" className="text-teal-600 hover:text-teal-700 font-semibold">
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
            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold"
          >
            Visit ziontechgroup.com <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>;
      </section>;
    </div>;
  );
}