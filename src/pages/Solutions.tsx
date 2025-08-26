import React from 'react';
import Link from 'next/link';

const Solutions: React.FC = () => {
  const solutions = [
    {
      category: "AI Autonomous Systems",
      items: [
        { name: "AI Autonomous Analytics", path: "/solutions/ai-autonomous-analytics", description: "Advanced analytics powered by autonomous AI systems" },
        { name: "AI Autonomous Security", path: "/solutions/ai-autonomous-security", description: "Self-learning security systems for threat detection" },
        { name: "AI Autonomous DevOps", path: "/solutions/ai-autonomous-devops", description: "Automated development and operations workflows" },
        { name: "AI Autonomous Testing", path: "/solutions/ai-autonomous-testing", description: "Intelligent testing automation and quality assurance" },
        { name: "AI Autonomous Monitoring", path: "/solutions/ai-autonomous-monitoring", description: "Proactive system monitoring and alerting" },
        { name: "AI Autonomous Compliance", path: "/solutions/ai-autonomous-compliance", description: "Automated regulatory compliance management" }
      ]
    },
    {
      category: "AI Autonomous Applications",
      items: [
        { name: "AI Autonomous Research", path: "/solutions/ai-autonomous-research", description: "Automated research and data analysis" },
        { name: "AI Autonomous Marketing", path: "/solutions/ai-autonomous-marketing", description: "Intelligent marketing automation and optimization" },
        { name: "AI Autonomous Customer Service", path: "/solutions/ai-autonomous-customer-service", description: "24/7 automated customer support systems" },
        { name: "AI Autonomous Content Creation", path: "/solutions/ai-autonomous-content-creation", description: "Automated content generation and management" },
        { name: "AI Autonomous Translation", path: "/solutions/ai-autonomous-translation", description: "Real-time multilingual communication" },
        { name: "AI Autonomous Speech", path: "/solutions/ai-autonomous-speech", description: "Advanced speech recognition and synthesis" }
      ]
    },
    {
      category: "AI Autonomous Infrastructure",
      items: [
        { name: "AI Autonomous Cloud Security", path: "/solutions/ai-autonomous-cloud-security", description: "Intelligent cloud security and compliance" },
        { name: "AI Autonomous Network Security", path: "/solutions/ai-autonomous-network-security", description: "Self-healing network security systems" },
        { name: "AI Autonomous Data Security", path: "/solutions/ai-autonomous-data-security", description: "Advanced data protection and privacy" },
        { name: "AI Autonomous Container Security", path: "/solutions/ai-autonomous-container-security", description: "Containerized application security" },
        { name: "AI Autonomous API Security", path: "/solutions/ai-autonomous-api-security", description: "API threat detection and protection" },
        { name: "AI Autonomous Mobile Security", path: "/solutions/ai-autonomous-mobile-security", description: "Mobile device and application security" }
      ]
    },
    {
      category: "AI Autonomous Business",
      items: [
        { name: "AI Autonomous Decision Engine", path: "/solutions/ai-autonomous-decision-engine", description: "Intelligent business decision automation" },
        { name: "AI Autonomous Risk Management", path: "/solutions/ai-autonomous-risk-management", description: "Automated risk assessment and mitigation" },
        { name: "AI Autonomous Finance", path: "/solutions/ai-autonomous-finance", description: "Intelligent financial analysis and forecasting" },
        { name: "AI Autonomous Trading", path: "/solutions/ai-autonomous-trading", description: "Algorithmic trading and market analysis" },
        { name: "AI Autonomous Logistics", path: "/solutions/ai-autonomous-logistics", description: "Supply chain optimization and automation" },
        { name: "AI Autonomous Manufacturing", path: "/solutions/ai-autonomous-manufacturing", description: "Smart manufacturing and quality control" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive suite of AI-powered autonomous solutions that transform businesses 
              and drive innovation across every industry.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {solutions.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((solution, solutionIndex) => (
                  <div 
                    key={solutionIndex}
                    className="bg-slate-700/50 p-6 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {solution.name}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm">
                      {solution.description}
                    </p>
                    <Link
                      to={solution.path}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 text-sm"
                    >
                      Learn More
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our AI autonomous solutions revolutionize your operations and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/services"
              className="border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;