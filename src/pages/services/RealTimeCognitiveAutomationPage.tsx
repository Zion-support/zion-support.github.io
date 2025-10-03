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
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Real-Time Cognitive Automation
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Transform your business operations with intelligent automation that thinks, learns, and adapts in real-time.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {automationFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
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

        {/* Key Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our cognitive automation solutions deliver unprecedented efficiency and intelligence
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Real-Time Processing</h3>
                <p className="text-gray-600">
                  Process and respond to data in real-time, enabling instant decision-making and immediate action.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl mb-4">🧠</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cognitive Intelligence</h3>
                <p className="text-gray-600">
                  AI-powered decision engines that learn from patterns and make optimal choices automatically.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-5xl mb-4">🔄</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Adaptive Learning</h3>
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
                Discover how real-time cognitive automation can transform your specific business challenges
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Service</h3>
                <p className="text-gray-600 mb-4">Automate customer inquiries with intelligent chatbots and real-time response optimization.</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Instant response to common queries</li>
                  <li>• Intelligent ticket routing</li>
                  <li>• Predictive issue resolution</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Supply Chain</h3>
                <p className="text-gray-600 mb-4">Optimize inventory and logistics with predictive analytics and automated decision-making.</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Demand forecasting</li>
                  <li>• Automated reordering</li>
                  <li>• Route optimization</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Services</h3>
                <p className="text-gray-600 mb-4">Streamline financial processes with real-time fraud detection and automated compliance.</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Real-time fraud detection</li>
                  <li>• Automated compliance reporting</li>
                  <li>• Risk assessment</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Manufacturing</h3>
                <p className="text-gray-600 mb-4">Enhance production efficiency with predictive maintenance and quality control automation.</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Predictive maintenance</li>
                  <li>• Quality control automation</li>
                  <li>• Production optimization</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare</h3>
                <p className="text-gray-600 mb-4">Improve patient care with intelligent diagnostics and automated workflow management.</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Automated diagnostics</li>
                  <li>• Patient flow optimization</li>
                  <li>• Treatment recommendations</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">E-commerce</h3>
                <p className="text-gray-600 mb-4">Personalize customer experiences with real-time recommendation engines and dynamic pricing.</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Real-time recommendations</li>
                  <li>• Dynamic pricing optimization</li>
                  <li>• Inventory management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-indigo-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join leading enterprises that have already transformed their operations with our real-time cognitive automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link 
                to="/demo"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RealTimeCognitiveAutomationPage;