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

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Real-Time Cognitive Automation
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your business with intelligent automation that learns, adapts, and optimizes in real-time.
                Our cognitive automation solutions combine AI, machine learning, and intelligent workflows for maximum efficiency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {automationFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Use Cases</h2>
              <p className="text-lg text-gray-600">
                See how real-time cognitive automation can transform your business processes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Services</h3>
                <p className="text-gray-600 mb-4">
                  Automated fraud detection, risk assessment, and compliance monitoring with real-time decision making.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Real-time transaction monitoring</li>
                  <li>• Automated compliance reporting</li>
                  <li>• Dynamic risk scoring</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare</h3>
                <p className="text-gray-600 mb-4">
                  Patient data analysis, treatment recommendations, and operational optimization.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Predictive patient outcomes</li>
                  <li>• Automated diagnosis support</li>
                  <li>• Resource optimization</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Manufacturing</h3>
                <p className="text-gray-600 mb-4">
                  Quality control, predictive maintenance, and supply chain optimization.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Real-time quality monitoring</li>
                  <li>• Predictive maintenance alerts</li>
                  <li>• Supply chain optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-indigo-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Automate Intelligently?</h2>
            <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
              Let's discuss how cognitive automation can transform your business processes and drive efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RealTimeCognitiveAutomationPage;