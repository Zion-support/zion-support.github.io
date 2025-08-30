

export default function AIDigitalTwinPlatform() {
  const features = [
    'AI-powered digital twin creation and management',
    'Real-time IoT sensor data integration',
    'Predictive maintenance and failure prediction',
    '3D visualization and augmented reality support',
    'Multi-physics simulation and modeling',
    'Automated anomaly detection and alerts',
    'Historical data analysis and trend prediction',
    'Cross-platform integration and API access',
    'Custom dashboard and reporting tools',
    'Scalable cloud-based infrastructure'
  ];

  const benefits = [
    'Reduce operational costs by 25-40%',
    'Improve equipment uptime by 30-50%',
    'Cut maintenance costs by 20-35%',
    'Real-time performance monitoring',
    'Predictive maintenance optimization',
    'Enhanced decision-making with data insights'
  ];

  const pricing = [
    { 
      name: 'Starter', 
      price: '$599/mo', 
      features: ['Up to 10 digital twins', 'Basic monitoring', 'Standard dashboards', 'Email support', 'Monthly reports'],
      popular: false
    },
    { 
      name: 'Professional', 
      price: '$1,299/mo', 
      features: ['Up to 50 digital twins', 'Advanced AI analytics', 'Real-time monitoring', 'Priority support', 'Custom dashboards', 'API access'],
      popular: true
    },
    { 
      name: 'Enterprise', 
      price: '$3,999/mo', 
      features: ['Unlimited digital twins', 'Full AI suite', 'Custom models', 'Dedicated support', 'White-label solutions', 'Advanced integrations'],
      popular: false
    }
  ];

  const useCases = [
    'Manufacturing process optimization',
    'Smart city infrastructure monitoring',
    'Healthcare facility management',
    'Energy grid optimization',
    'Transportation system monitoring',
    'Building automation and management'
  ];

  const industries = [
    'Manufacturing & Industry 4.0',
    'Smart Cities & Infrastructure',
    'Healthcare & Medical Devices',
    'Energy & Utilities',
    'Transportation & Logistics',
    'Construction & Real Estate'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-800 py-20 text-center text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Cpu className="w-4 h-4 mr-2" /> AI-Powered Digital Twin Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Digital Twin Platform</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Create intelligent digital replicas of your physical assets with AI-driven monitoring, predictive analytics, 
            and real-time optimization. Transform operations with the power of digital twins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Digital Twin Intelligence</h2>
          <p className="text-xl text-gray-600">Comprehensive digital twin creation and management powered by AI</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Core Capabilities</h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
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
                  <Network className="w-4 h-4 text-blue-500 mr-3" />
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose AI Digital Twin Platform?</h2>
            <p className="text-xl text-gray-600">Transform your operations with intelligent digital twin technology</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
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
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Monitor className="w-5 h-5 text-blue-600" />
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
            <p className="text-xl text-gray-600">Choose the plan that fits your digital twin needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg border-2 ${
                plan.popular ? 'border-blue-500' : 'border-gray-200'
              } p-8`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{plan.price}</div>
                  <p className="text-gray-600">per month</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need a custom plan? Contact us for enterprise pricing</p>
            <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-700 font-semibold">
              Contact Sales Team
            </a>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Proven Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">25-40%</div>
              <p className="text-gray-700">Reduction in operational costs</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">30-50%</div>
              <p className="text-gray-700">Improvement in equipment uptime</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">20-35%</div>
              <p className="text-gray-700">Cut in maintenance costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Your Digital Twins?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of organizations already using AI Digital Twin Platform to optimize operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:kleber@ziontechgroup.com" className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
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
            <Phone className="w-8 h-8 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Speak with our digital twin experts</p>
            <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-700 font-semibold">
              +1 302 464 0950
            </a>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <Mail className="w-8 h-8 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">Get detailed information and pricing</p>
            <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-700 font-semibold">
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
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            Visit ziontechgroup.com <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}