import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const RealTimeCognitiveAutomationPage: React.FC = () => {
  const automationFeatures = [
    {
      title: "Intelligent Process Automation",
      description: "Automate complex business processes using AI-powered decision-making and real-time data analysis.",
      icon: "🧠",
      features: ["Process Discovery", "Automated Decision Making", "Real-time Monitoring", "Exception Handling"]
    },
    {
      title: "Cognitive Document Processing",
      description: "Extract insights and automate document workflows using advanced AI and machine learning.",
      icon: "📄",
      features: ["Document Classification", "Data Extraction", "Content Analysis", "Workflow Automation"]
    },
    {
      title: "Predictive Analytics",
      description: "Leverage real-time data to predict outcomes and automate proactive responses.",
      icon: "📊",
      features: ["Real-time Predictions", "Trend Analysis", "Anomaly Detection", "Automated Alerts"]
    },
    {
      title: "Intelligent Workflows",
      description: "Create self-optimizing workflows that adapt and improve based on performance data.",
      icon: "🔄",
      features: ["Adaptive Workflows", "Performance Optimization", "Self-healing Processes", "Continuous Learning"]
    },
    {
      title: "Cognitive Integration",
      description: "Seamlessly integrate cognitive automation across your existing systems and applications.",
      icon: "🔗",
      features: ["System Integration", "API Automation", "Data Synchronization", "Legacy System Support"]
    },
    {
      title: "Real-time Monitoring",
      description: "Monitor and manage automated processes with real-time dashboards and analytics.",
      icon: "📈",
      features: ["Live Dashboards", "Performance Metrics", "Alert Management", "Process Analytics"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Real-Time Cognitive Automation - Zion Tech Group</title>
        <meta name="description" content="Advanced real-time cognitive automation solutions that combine AI, machine learning, and intelligent workflows for maximum business efficiency." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-6">Real-Time Cognitive Automation</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Transform your business operations with intelligent automation that thinks, learns, and adapts in real-time.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Automation Features</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our cognitive automation solutions deliver unprecedented efficiency and intelligence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {automationFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-500">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Benefits</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Why choose our cognitive automation solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Real-time Processing</h3>
                <p className="text-gray-600">
                  Process and respond to data in real-time, enabling instant decision-making and immediate action.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Intelligent Decision Making</h3>
                <p className="text-gray-600">
                  AI-powered decision engines that learn from patterns and make optimal choices automatically.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
                <p className="text-gray-600">
                  Systems that continuously improve and adapt based on new data and changing conditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Use Cases</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Real-world applications of cognitive automation across industries
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Financial Services</h3>
                <p className="text-gray-600 text-sm">
                  Automated fraud detection, risk assessment, and compliance monitoring with real-time decision making.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Healthcare</h3>
                <p className="text-gray-600 text-sm">
                  Patient data analysis, treatment recommendations, and automated administrative processes.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Manufacturing</h3>
                <p className="text-gray-600 text-sm">
                  Predictive maintenance, quality control, and supply chain optimization with intelligent automation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Retail</h3>
                <p className="text-gray-600 text-sm">
                  Inventory management, customer service automation, and personalized recommendation engines.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Telecommunications</h3>
                <p className="text-gray-600 text-sm">
                  Network optimization, customer support automation, and predictive analytics for service quality.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Energy</h3>
                <p className="text-gray-600 text-sm">
                  Smart grid management, demand forecasting, and automated energy trading systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-indigo-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Discover how real-time cognitive automation can revolutionize your operations and drive unprecedented efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RealTimeCognitiveAutomationPage;