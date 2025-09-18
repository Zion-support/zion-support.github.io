import React from 'react';
import { Link } from 'react-router-dom';
const AffiliateAttributionHub = () => {
    const features = [
        {
            title: "Multi-Touch Attribution",
            description: "Track customer journey across all touchpoints and channels",
            icon: "🔄"
        },
        {
            title: "Real-time Analytics",
            description: "Live insights into affiliate performance and conversions",
            icon: "📊"
        },
        {
            title: "Fraud Detection",
            description: "Advanced algorithms to detect and prevent affiliate fraud",
            icon: "🛡️"
        },
        {
            title: "Commission Management",
            description: "Automated commission calculation and payment processing",
            icon: "💰"
        }
    ];
    const attributionModels = [
        {
            name: "First-Touch Attribution",
            description: "Credit goes to the first affiliate that introduced the customer",
            useCase: "Brand awareness campaigns"
        },
        {
            name: "Last-Touch Attribution",
            description: "Credit goes to the last affiliate before conversion",
            useCase: "Direct response campaigns"
        },
        {
            name: "Linear Attribution",
            description: "Equal credit distribution across all touchpoints",
            useCase: "Multi-channel marketing"
        },
        {
            name: "Time-Decay Attribution",
            description: "More recent touchpoints receive higher credit",
            useCase: "Long sales cycles"
        }
    ];
    const platformFeatures = [
        {
            category: "Affiliate Management",
            features: ["Affiliate onboarding", "Performance tracking", "Commission rules", "Payment processing"]
        },
        {
            category: "Analytics & Reporting",
            features: ["Real-time dashboards", "Custom reports", "ROI analysis", "Conversion tracking"]
        },
        {
            category: "Fraud Prevention",
            features: ["Click fraud detection", "Conversion validation", "IP monitoring", "Behavioral analysis"]
        },
        {
            category: "Integration & APIs",
            features: ["CRM integration", "E-commerce platforms", "Marketing tools", "Custom webhooks"]
        }
    ];
    const benefits = [
        {
            title: "Increased Revenue",
            description: "Optimize affiliate performance and maximize conversions"
        },
        {
            title: "Better ROI",
            description: "Accurate attribution leads to better marketing decisions"
        },
        {
            title: "Fraud Prevention",
            description: "Protect your budget from fraudulent affiliate activities"
        },
        {
            title: "Data Insights",
            description: "Deep understanding of customer journey and attribution patterns"
        }
    ];
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Affiliate
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Attribution Hub
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced affiliate tracking and attribution platform that provides accurate 
              insights into customer journeys, prevents fraud, and maximizes your 
              affiliate marketing ROI.
            </p>
          </div>
          
          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Powerful Attribution Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (<div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>))}
            </div>
          </div>
          
          {/* Attribution Models */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Flexible Attribution Models</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {attributionModels.map((model, index) => (<div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">{model.name}</h3>
                  <p className="text-gray-300 mb-4">{model.description}</p>
                  <div className="bg-white/5 rounded-lg p-3">
                    <span className="text-sm text-blue-400 font-medium">Best for:</span>
                    <span className="text-sm text-gray-300 ml-2">{model.useCase}</span>
                  </div>
                </div>))}
            </div>
          </div>
          
          {/* Platform Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Platform Features</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {platformFeatures.map((category, index) => (<div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.features.map((feature, idx) => (<li key={idx} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        {feature}
                      </li>))}
                  </ul>
                </div>))}
            </div>
          </div>
          
          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Attribution Hub?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (<div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>))}
            </div>
          </div>
          
          {/* Dashboard Preview */}
          <div className="mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-center mb-8">Powerful Analytics Dashboard</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Performance Metrics</h3>
                  <p className="text-gray-300 text-sm">Track clicks, conversions, and revenue in real-time</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Attribution Insights</h3>
                  <p className="text-gray-300 text-sm">Understand customer journey and touchpoint impact</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Fraud Protection</h3>
                  <p className="text-gray-300 text-sm">Advanced algorithms to detect and prevent fraud</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">E-commerce Businesses</h3>
                <p className="text-gray-300 text-sm">Track affiliate performance and optimize marketing spend</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">SaaS Companies</h3>
                <p className="text-gray-300 text-sm">Monitor customer acquisition and attribution across channels</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Marketing Agencies</h3>
                <p className="text-gray-300 text-sm">Provide clients with accurate attribution and ROI data</p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Optimize Your Affiliate Marketing?</h3>
              <p className="text-gray-300 mb-6">
                Get accurate attribution insights, prevent fraud, and maximize your 
                affiliate marketing ROI. Contact us today to get started.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                  Get Started Today
                </Link>
                <Link to="/services" className="inline-flex items-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);
};
export default AffiliateAttributionHub;
