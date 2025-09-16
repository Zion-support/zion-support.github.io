import React from 'react';

const ComprehensiveServices2025: React.FC = () => {
  const services = [
    {
      category: 'AI Solutions',
      icon: '🤖',
      color: 'from-purple-600 to-pink-600',
      borderColor: 'border-purple-400/30',
      bgColor: 'from-purple-600/30 to-pink-600/30',
      services: [
        {
          name: 'Autonomous AI Agents',
          description: 'Self-managing AI agents that handle complex business processes',
          price: '$50,000/month',
          features: ['24/7 Operation', 'Self-Learning', 'Multi-Task Processing']
        },
        {
          name: 'Machine Learning Platforms',
          description: 'Custom ML solutions for data analysis and prediction',
          price: '$30,000/month',
          features: ['Custom Models', 'Real-time Processing', 'Scalable Infrastructure']
        },
        {
          name: 'Natural Language Processing',
          description: 'Advanced NLP for text analysis and understanding',
          price: '$25,000/month',
          features: ['Multi-language Support', 'Sentiment Analysis', 'Text Generation']
        }
      ]
    },
    {
      category: 'Quantum Computing',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      borderColor: 'border-cyan-400/30',
      bgColor: 'from-cyan-600/30 to-blue-600/30',
      services: [
        {
          name: 'Quantum Machine Learning',
          description: 'ML algorithms powered by quantum computing',
          price: '$100,000/month',
          features: ['1000x Speed', 'Quantum Algorithms', 'Advanced Optimization']
        },
        {
          name: 'Quantum Cryptography',
          description: 'Unbreakable encryption using quantum principles',
          price: '$75,000/month',
          features: ['Unbreakable Security', 'Quantum Key Distribution', 'Future-Proof']
        },
        {
          name: 'Molecular Simulation',
          description: 'Quantum simulation for drug discovery and materials',
          price: '$80,000/month',
          features: ['Drug Discovery', 'Materials Science', 'Chemical Analysis']
        }
      ]
    },
    {
      category: 'Neural Interfaces',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      borderColor: 'border-emerald-400/30',
      bgColor: 'from-emerald-600/30 to-teal-600/30',
      services: [
        {
          name: 'Brain-Computer Interface',
          description: 'Direct neural control of computers and devices',
          price: '$75,000/month',
          features: ['Thought Control', 'Real-time Processing', 'Non-invasive']
        },
        {
          name: 'Cognitive Enhancement',
          description: 'AI-powered tools to enhance human cognitive abilities',
          price: '$40,000/month',
          features: ['Memory Augmentation', 'Focus Enhancement', 'Learning Acceleration']
        },
        {
          name: 'Emotional Recognition',
          description: 'AI that understands and responds to human emotions',
          price: '$35,000/month',
          features: ['Emotion Detection', 'Mood Analysis', 'Personalized Responses']
        }
      ]
    },
    {
      category: 'Cloud & Infrastructure',
      icon: '☁️',
      color: 'from-blue-600 to-indigo-600',
      borderColor: 'border-blue-400/30',
      bgColor: 'from-blue-600/30 to-indigo-600/30',
      services: [
        {
          name: 'Cloud Migration',
          description: 'Seamless migration to cloud infrastructure',
          price: '$20,000/month',
          features: ['Zero Downtime', 'Cost Optimization', 'Scalability']
        },
        {
          name: 'DevOps Automation',
          description: 'Automated deployment and monitoring solutions',
          price: '$15,000/month',
          features: ['CI/CD Pipeline', 'Auto-scaling', 'Monitoring']
        },
        {
          name: 'Security Solutions',
          description: 'Comprehensive cybersecurity and compliance',
          price: '$25,000/month',
          features: ['Threat Detection', 'Compliance', '24/7 Monitoring']
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 COMPREHENSIVE SERVICES • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Comprehensive Technology Services
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Complete technology solutions covering AI, quantum computing, neural interfaces, and cloud infrastructure to transform your business
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                View All Services
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
                Get Custom Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services by Category */}
      <div className="container mx-auto px-4 py-16">
        {services.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <span className="text-6xl mr-4">{category.icon}</span>
                <h2 className="text-4xl font-bold">{category.category}</h2>
              </div>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Cutting-edge {category.category.toLowerCase()} solutions for modern businesses
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className={`bg-gradient-to-br ${category.bgColor} backdrop-blur-sm rounded-xl p-8 border ${category.borderColor} hover:scale-105 transition-all duration-300`}>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                    <p className="text-gray-200 mb-4">{service.description}</p>
                    <div className="text-3xl font-bold text-yellow-400 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-400">Enterprise Package</div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                        <span className="text-gray-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <button className={`bg-gradient-to-r ${category.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold w-full`}>
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pricing Tiers */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Pricing Tiers</h2>
          <p className="text-xl opacity-90">Choose the perfect plan for your business needs</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <div className="text-4xl font-bold text-purple-400 mb-2">$25,000</div>
              <div className="text-gray-400">per month</div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <span>Basic AI Solutions</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <span>Cloud Infrastructure</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <span>24/7 Support</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <span>Basic Analytics</span>
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Get Started
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/50 scale-105">
            <div className="text-center mb-6">
              <div className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <div className="text-4xl font-bold text-purple-400 mb-2">$75,000</div>
              <div className="text-gray-400">per month</div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <span>Advanced AI Solutions</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <span>Quantum Computing Access</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <span>Neural Interface Tools</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <span>Priority Support</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <span>Advanced Analytics</span>
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Get Started
            </button>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-purple-400 mb-2">$150,000</div>
              <div className="text-gray-400">per month</div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <span>All AI Solutions</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <span>Full Quantum Computing</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <span>Complete Neural Interface</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <span>Dedicated Support Team</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <span>Custom Solutions</span>
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl opacity-90">Real results from our service implementations</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-green-600/30 to-emerald-600/30 backdrop-blur-sm rounded-xl p-8 border border-green-400/30">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">+500%</div>
              <div className="text-lg font-semibold mb-4">Efficiency Increase</div>
              <p className="text-green-100 text-sm mb-4">
                Fortune 500 company achieved 500% efficiency increase using our comprehensive AI solutions
              </p>
              <div className="text-xs text-green-300">TechCorp Inc. - Manufacturing</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">$100M</div>
              <div className="text-lg font-semibold mb-4">Cost Savings</div>
              <p className="text-blue-100 text-sm mb-4">
                Global financial institution saved $100M annually with our quantum computing solutions
              </p>
              <div className="text-xs text-blue-300">FinanceGlobal - Banking</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-lg font-semibold mb-4">Accuracy Rate</div>
              <p className="text-purple-100 text-sm mb-4">
                Healthcare provider achieved 99.9% accuracy in diagnosis using our neural interface technology
              </p>
              <div className="text-xs text-purple-300">MedTech Solutions - Healthcare</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-12 text-center border border-purple-400/30">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of companies already using our comprehensive technology services to achieve unprecedented growth and efficiency.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Started Today
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServices2025;