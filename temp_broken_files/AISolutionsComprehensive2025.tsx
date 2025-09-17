import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AISolutionsComprehensive2025: React.FC = () => {
  const [activeSolution, setActiveSolution] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const solutions = [
    {
      id: 1,
      title: "AI Sales Copilot",
      description: "Revolutionary AI assistant that transforms your sales process",
      features: [
        "Automated lead qualification",
        "Personalized outreach generation",
        "Real-time conversation analysis",
        "Predictive sales forecasting"
      ],
      benefits: [
        "300% increase in lead conversion",
        "50% reduction in sales cycle time",
        "99% accuracy in lead scoring"
      ],
      icon: "🧭",
      color: "from-blue-600 to-cyan-600",
      price: "Starting at $299/month"
    },
    {
      id: 2,
      title: "Cloud Cost Optimizer",
      description: "Intelligent cloud resource management and cost optimization",
      features: [
        "Automated rightsizing recommendations",
        "Real-time cost monitoring",
        "Anomaly detection and alerts",
        "Multi-cloud cost analysis"
      ],
      benefits: [
        "Average 40% cost reduction",
        "Real-time cost visibility",
        "Automated optimization"
      ],
      icon: "💸",
      color: "from-green-600 to-emerald-600",
      price: "Starting at $199/month"
    },
    {
      id: 3,
      title: "Cyber Threat Intelligence Hub",
      description: "Advanced AI-powered cybersecurity threat detection and response",
      features: [
        "Real-time threat monitoring",
        "AI-powered threat analysis",
        "Automated incident response",
        "Predictive threat modeling"
      ],
      benefits: [
        "99.9% threat detection accuracy",
        "60% faster incident response",
        "Proactive threat prevention"
      ],
      icon: "🛡️",
      color: "from-red-600 to-orange-600",
      price: "Starting at $499/month"
    },
    {
      id: 4,
      title: "AI Content Factory",
      description: "Automated content creation and marketing optimization",
      features: [
        "AI-generated content creation",
        "Multi-platform optimization",
        "Performance analytics",
        "Brand voice consistency"
      ],
      benefits: [
        "10x content production speed",
        "300% engagement increase",
        "Consistent brand messaging"
      ],
      icon: "📝",
      color: "from-purple-600 to-pink-600",
      price: "Starting at $149/month"
    },
    {
      id: 5,
      title: "Predictive Analytics Engine",
      description: "Advanced machine learning for business intelligence and forecasting",
      features: [
        "Predictive modeling",
        "Real-time data analysis",
        "Custom dashboard creation",
        "Automated reporting"
      ],
      benefits: [
        "95% prediction accuracy",
        "Real-time insights",
        "Data-driven decisions"
      ],
      icon: "📊",
      color: "from-indigo-600 to-purple-600",
      price: "Starting at $399/month"
    },
    {
      id: 6,
      title: "AI Customer Success Platform",
      description: "Comprehensive customer success management with AI insights",
      features: [
        "Customer health scoring",
        "Churn prediction",
        "Automated engagement",
        "Success metrics tracking"
      ],
      benefits: [
        "25% reduction in churn",
        "40% increase in customer satisfaction",
        "Automated success workflows"
      ],
      icon: "🎯",
      color: "from-teal-600 to-cyan-600",
      price: "Starting at $249/month"
    }
  ];

  const stats = [
    { number: "500+", label: "Companies Served" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "AI Support" },
    { number: "300%", label: "Average ROI" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isVisible ? 1 : 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              🤖 COMPREHENSIVE AI SOLUTIONS • 2025
            </motion.div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              AI Solutions Comprehensive 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Transform your business with our complete suite of AI-powered solutions designed to drive growth, efficiency, and innovation
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Solutions
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold text-lg">
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive suite of AI-powered solutions designed to address every aspect of your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-gradient-to-b ${solution.color}`}
            >
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-green-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold text-blue-600">{solution.price}</div>
                <button className={`bg-gradient-to-r ${solution.color} text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">See AI in Action</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Experience our AI solutions through interactive demos and real-world case studies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Live AI Dashboard</h3>
              <p className="text-lg mb-6 opacity-90">
                Watch our AI systems process data in real-time, making intelligent decisions 
                and providing actionable insights for your business.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span>AI models processing data...</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span>Generating insights...</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  <span>Optimizing recommendations...</span>
                </div>
              </div>
            </div>
            <div className="bg-black/20 rounded-lg p-8 border border-white/20">
              <div className="text-center">
                <div className="text-6xl mb-4">🤖</div>
                <div className="text-2xl font-bold mb-2">AI Status: Active</div>
                <div className="text-green-400 text-sm mb-4">Processing efficiency: 99.8%</div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/10 rounded p-3">
                    <div className="font-bold">Data Points</div>
                    <div className="text-2xl">1.2M</div>
                  </div>
                  <div className="bg-white/10 rounded p-3">
                    <div className="font-bold">Predictions</div>
                    <div className="text-2xl">847</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our AI solutions have transformed businesses across industries
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Fortune 500 Company</h3>
            <p className="text-gray-600 mb-4">
              "Our AI Sales Copilot increased our lead conversion rate by 300% and reduced our sales cycle by 50%."
            </p>
            <div className="text-2xl font-bold text-green-600">+300% Conversion</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4">☁️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Startup</h3>
            <p className="text-gray-600 mb-4">
              "The Cloud Cost Optimizer helped us reduce our AWS costs by 40% while improving performance."
            </p>
            <div className="text-2xl font-bold text-green-600">-40% Costs</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Services</h3>
            <p className="text-gray-600 mb-4">
              "Our threat detection accuracy improved to 99.9% with the Cyber Threat Intelligence Hub."
            </p>
            <div className="text-2xl font-bold text-green-600">99.9% Accuracy</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of companies already using our AI solutions to drive innovation and growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISolutionsComprehensive2025;