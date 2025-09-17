import React from 'react';

const AITrendsInsights2025: React.FC = () => {
  const trends = [
    {
      title: "Generative AI 2.0 Revolution",
      description: "The next generation of AI that goes beyond text and images to create interactive, multi-modal experiences.",
      impact: "High",
      timeline: "Q2 2025",
      icon: "🧠",
      details: [
        "Multi-modal AI that understands text, images, audio, and video simultaneously",
        "Real-time content generation with human-level creativity",
        "AI agents that can perform complex tasks autonomously",
        "Integration with AR/VR for immersive experiences"
      ]
    },
    {
      title: "Edge AI Computing",
      description: "AI processing moves to the edge, enabling real-time decision making without cloud dependency.",
      impact: "Very High",
      timeline: "Q1 2025",
      icon: "⚡",
      details: [
        "Ultra-low latency AI inference on mobile and IoT devices",
        "Privacy-preserving AI that processes data locally",
        "Autonomous vehicles with instant decision-making capabilities",
        "Smart cities with distributed AI intelligence"
      ]
    },
    {
      title: "Quantum-Enhanced AI",
      description: "Quantum computing accelerates AI training and enables new algorithms impossible on classical computers.",
      impact: "Revolutionary",
      timeline: "Q3 2025",
      icon: "🔮",
      details: [
        "Quantum machine learning algorithms for optimization problems",
        "Exponential speedup in neural network training",
        "Quantum cryptography for secure AI communications",
        "Breakthrough in drug discovery and materials science"
      ]
    },
    {
      title: "AI-Human Collaboration",
      description: "New interfaces and workflows that seamlessly blend human creativity with AI capabilities.",
      impact: "High",
      timeline: "Q2 2025",
      icon: "🤝",
      details: [
        "Natural language interfaces for complex AI systems",
        "AI-powered creative tools that enhance human capabilities",
        "Collaborative AI that learns from human feedback",
        "Augmented intelligence for decision-making support"
      ]
    },
    {
      title: "Autonomous AI Systems",
      description: "Self-managing AI systems that can adapt, learn, and evolve without human intervention.",
      impact: "Very High",
      timeline: "Q4 2025",
      icon: "🤖",
      details: [
        "Self-healing AI systems that fix their own bugs",
        "Autonomous AI agents for business process automation",
        "AI systems that can design and train other AI systems",
        "Self-evolving neural networks that improve over time"
      ]
    },
    {
      title: "Ethical AI Governance",
      description: "New frameworks and technologies for ensuring AI systems are fair, transparent, and accountable.",
      impact: "Critical",
      timeline: "Q1 2025",
      icon: "⚖️",
      details: [
        "Explainable AI that provides clear reasoning for decisions",
        "Bias detection and mitigation in AI systems",
        "AI auditing tools for compliance and transparency",
        "Ethical AI certification and standards"
      ]
    }
  ];

  const caseStudies = [
    {
      company: "Fortune 500 Manufacturing",
      challenge: "Optimize supply chain with 40% cost reduction target",
      solution: "Implemented autonomous AI agents for demand forecasting and inventory management",
      results: [
        "42% reduction in supply chain costs",
        "99.7% accuracy in demand prediction",
        "60% reduction in stockouts",
        "ROI of 340% within 6 months"
      ],
      timeline: "6 months"
    },
    {
      company: "Global Healthcare Provider",
      challenge: "Improve patient outcomes while reducing operational costs",
      solution: "Deployed AI-powered diagnostic tools and predictive analytics",
      results: [
        "35% improvement in diagnostic accuracy",
        "25% reduction in patient readmission rates",
        "$2.3M annual cost savings",
        "98% physician satisfaction rate"
      ],
      timeline: "8 months"
    },
    {
      company: "Financial Services Leader",
      challenge: "Enhance fraud detection and risk management",
      solution: "Implemented real-time AI fraud detection with quantum-enhanced algorithms",
      results: [
        "99.2% fraud detection accuracy",
        "85% reduction in false positives",
        "$15M prevented in fraudulent transactions",
        "Real-time processing of 1M+ transactions/second"
      ],
      timeline: "4 months"
    }
  ];

  const insights = [
    {
      category: "Market Analysis",
      title: "AI Market to Reach $1.8 Trillion by 2030",
      content: "The global AI market is experiencing unprecedented growth, driven by enterprise adoption and breakthrough technologies. Key sectors leading adoption include healthcare, finance, and manufacturing.",
      metrics: [
        { label: "Current Market Size", value: "$500B" },
        { label: "Projected 2030 Size", value: "$1.8T" },
        { label: "CAGR", value: "28.5%" },
        { label: "Leading Region", value: "North America (45%)" }
      ]
    },
    {
      category: "Technology Trends",
      title: "Edge AI Adoption Surges 300%",
      content: "Edge AI computing is becoming the preferred deployment model for real-time applications, with significant advantages in latency, privacy, and cost efficiency.",
      metrics: [
        { label: "Edge AI Devices", value: "2.5B" },
        { label: "Growth Rate", value: "300%" },
        { label: "Latency Reduction", value: "95%" },
        { label: "Cost Savings", value: "40%" }
      ]
    },
    {
      category: "Industry Impact",
      title: "AI Creates 97 Million New Jobs",
      content: "While AI automates certain tasks, it's creating more jobs than it eliminates, particularly in AI development, data science, and human-AI collaboration roles.",
      metrics: [
        { label: "New Jobs Created", value: "97M" },
        { label: "Jobs Displaced", value: "85M" },
        { label: "Net Job Creation", value: "12M" },
        { label: "Skills Gap", value: "2.3M unfilled positions" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <divdiv
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6">
              🚀 AI TRENDS & INSIGHTS 2025
            </div>
            <h1 className="text-5xl font-bold mb-6">
              The Future of AI is Here
            </h1>
            <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover the groundbreaking AI trends, technologies, and insights that are reshaping industries and creating unprecedented opportunities for innovation.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Download Report
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Watch Demo
              </button>
            </div>
          </divdiv>
        </div>
      </div>

      {/* Key Trends Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <divdiv
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🔮 Top AI Trends 2025
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the most significant AI trends that will define the next decade of technological innovation.
            </p>
          </divdiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trends.map((trend, index) => (
              <divdiv
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{trend.icon}</div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{trend.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    trend.impact === 'Revolutionary' ? 'bg-red-100 text-red-700' :
                    trend.impact === 'Very High' ? 'bg-orange-100 text-orange-700' :
                    trend.impact === 'High' ? 'bg-blue-100 text-blue-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {trend.impact}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{trend.description}</p>
                <div className="text-sm text-purple-600 font-semibold mb-4">
                  Timeline: {trend.timeline}
                </div>
                <ul className="space-y-2">
                  {trend.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </divdiv>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <divdiv
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🏆 Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world implementations of AI technologies delivering measurable business value.
            </p>
          </divdiv>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <divdiv
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{study.company}</h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Challenge:</h4>
                  <p className="text-gray-600 text-sm">{study.challenge}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Solution:</h4>
                  <p className="text-gray-600 text-sm">{study.solution}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-sm text-purple-600 font-semibold">
                  Implementation: {study.timeline}
                </div>
              </divdiv>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <divdiv
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              📊 Market Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Data-driven insights into the AI market, technology adoption, and industry impact.
            </p>
          </divdiv>

          <div className="grid md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <divdiv
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                    {insight.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{insight.title}</h3>
                <p className="text-gray-600 mb-6">{insight.content}</p>
                <div className="grid grid-cols-2 gap-4">
                  {insight.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </divdiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <divdiv
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Join thousands of companies already leveraging AI to drive innovation, efficiency, and growth.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors text-lg">
                Start Your AI Journey
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg">
                Schedule Consultation
              </button>
            </div>
          </divdiv>
        </div>
      </section>
    </div>
  );
};

export default AITrendsInsights2025;