<<<<<<< HEAD
import Link from 'next/link';

export default function SolutionsPage() {
  const caseStudies = [
    {
      title: "AI-Powered Manufacturing Optimization",
      industry: "Manufacturing",
      challenge: "A leading automotive manufacturer faced production inefficiencies and quality control issues, resulting in 15% waste and delayed deliveries.",
      solution: "Implemented our AI Autonomous Manufacturing System with real-time quality monitoring and predictive maintenance capabilities.",
      results: [
        "30% reduction in production waste",
        "25% improvement in quality control accuracy",
        "40% decrease in unplanned downtime",
        "$2.5M annual cost savings"
      ],
      image: "🏭"
    },
    {
      title: "Autonomous Business Operations Platform",
      industry: "Financial Services",
      challenge: "A regional bank struggled with manual processes, compliance monitoring, and customer service efficiency across 50+ branches.",
      solution: "Deployed our AI Autonomous Business Manager with integrated compliance monitoring and customer service automation.",
      results: [
        "60% reduction in manual processing time",
        "99.9% compliance accuracy",
        "45% improvement in customer satisfaction",
        "3x faster decision-making processes"
      ],
      image: "🏦"
    },
    {
      title: "Quantum Computing for Drug Discovery",
      industry: "Healthcare & Biotech",
      challenge: "A pharmaceutical company needed to accelerate drug discovery processes and molecular modeling for complex diseases.",
      solution: "Implemented our Quantum Computing Platform with specialized AI algorithms for molecular simulation and drug discovery.",
      results: [
        "10x faster molecular modeling",
        "85% improvement in drug candidate accuracy",
        "50% reduction in research costs",
        "Accelerated time-to-market by 2 years"
      ],
      image: "💊"
    }
  ];

  const industrySolutions = [
    {
      industry: "Healthcare",
      solutions: [
        "AI Autonomous Healthcare Physician",
        "Medical Imaging Analysis",
        "Patient Care Optimization",
        "Drug Discovery Platform"
      ],
      icon: "🏥"
    },
    {
      industry: "Manufacturing",
      solutions: [
        "AI Autonomous Manufacturing",
        "Quality Control Systems",
        "Supply Chain Optimization",
        "Predictive Maintenance"
      ],
      icon: "🏭"
    },
    {
      industry: "Financial Services",
      solutions: [
        "AI Business Intelligence",
        "Risk Assessment Systems",
        "Fraud Detection",
        "Customer Service Automation"
      ],
      icon: "💰"
    },
    {
      industry: "Logistics & Transportation",
      solutions: [
        "AI Autonomous Logistics",
        "Route Optimization",
        "Fleet Management",
        "Inventory Control"
      ],
      icon: "🚚"
    },
    {
      industry: "Technology",
      solutions: [
        "AI Code Review",
        "DevOps Automation",
        "Security Systems",
        "Performance Monitoring"
      ],
      icon: "💻"
    },
    {
      industry: "Research & Development",
      solutions: [
        "AI Autonomous Research Assistant",
        "Data Analysis Platforms",
        "Simulation Systems",
        "Knowledge Management"
      ],
      icon: "🔬"
    }
  ];

  const technologies = [
    {
      name: "AI Autonomous Systems",
      description: "Self-managing AI systems that operate independently and make intelligent decisions.",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      name: "Quantum Computing",
      description: "Next-generation computing power for complex problem solving and optimization.",
      features: ["Quantum Algorithms", "Quantum Machine Learning", "Optimization", "Simulation"]
    },
    {
      name: "Enterprise AI Platforms",
      description: "Scalable AI solutions designed for enterprise environments and large-scale operations.",
      features: ["Scalability", "Security", "Integration", "Analytics"]
    },
    {
      name: "Autonomous Business Intelligence",
      description: "Intelligent systems that analyze data and provide actionable business insights.",
      features: ["Real-time Analytics", "Predictive Modeling", "Data Visualization", "Automated Reporting"]
    }
  ];
=======
export default function SolutionsPage() {;
  return (;
>>>>>>> main

    <div className="min-h-screen bg-white">;
export default /**
 * SolutionsPage - Function description
 */
function SolutionsPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proven AI solutions that transform businesses across industries. 
            Discover how our autonomous systems and quantum computing capabilities drive real results.
          </p>
        </div>
      </div>

      {/* Case Studies */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Success Stories</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world examples of how our AI solutions have transformed businesses and driven measurable results.
          </p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="text-6xl mb-4">{study.image}</div>
                  <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg px-4 py-2 inline-block">
                    <span className="text-blue-300 text-sm font-medium">{study.industry}</span>
                  </div>
                </div>
                
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{study.title}</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">The Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Our Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              <span className="text-gray-300 text-sm">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industry Solutions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Industry Solutions</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tailored AI solutions designed for specific industry challenges and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industrySolutions.map((industry, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">{industry.industry}</h3>
              <ul className="space-y-2">
                {industry.solutions.map((solution, solutionIndex) => (
                  <li key={solutionIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Stack */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Technology Stack</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technologies that power our AI solutions and drive innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">{tech.name}</h3>
              <p className="text-gray-300 mb-4">{tech.description}</p>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {tech.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded-full text-xs text-blue-300">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Implementation Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Implementation Process</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our proven methodology ensures successful deployment and maximum ROI from your AI investment.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Discovery</h3>
              <p className="text-gray-300 text-sm">
                We analyze your business needs and identify the best AI solutions for your specific challenges.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Design</h3>
              <p className="text-gray-300 text-sm">
                Our team designs a customized solution architecture tailored to your business requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Deploy</h3>
              <p className="text-gray-300 text-sm">
                We implement the solution with minimal disruption to your existing operations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Optimize</h3>
              <p className="text-gray-300 text-sm">
                Continuous monitoring and optimization ensure maximum performance and ROI.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 rounded-xl p-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI solutions can drive innovation and growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105">
              Schedule a Consultation
            </Link>
            <Link href="/services" className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:bg-white/10">
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
=======
    <div className="min - h-screen bg - white">;
export default function SolutionsPage() {return (;
export default function SolutionsPage() {;
  return (;
    <div className="min-h-screen bg-white">;
      {/* Hero Section */}
      <section className="bg - gradient - to - r from - purple - 600 to - indigo - 700 text - white py - 20">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center">;
          <h1 className="text - 4xl md:text - 6xl font - bold mb - 6">;
            Our Solutions;
          </h1>;
          <p className="text - xl md:text - 2xl text - purple - 100 max - w-3xl mx - auto">;
            Comprehensive AI - powered platforms and solutions designed to transform your business operations and drive innovation.;
          </p>;
        </div>;
      </section>;
      {/* Solutions Overview */}
      <section className="py - 20">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <div className="text - center mb - 16">;
            <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 4">;
              Enterprise - Grade AI Solutions;
            </h2>;
            <p className="text - xl text - gray - 600 max - w-2xl mx - auto">;
              From research automation to business operations, our solutions are built to scale and deliver measurable results;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
            {/* AI Research Assistant */}
            <div className="bg - white border border - gray - 200 rounded - xl overflow - hidden shadow - sm hover:shadow - lg transition - shadow">;
              <div className="h - 48 bg - gradient - to - br from - red - 500 to - pink - 500 flex items - center justify - center">;
                <svg className="w - 20 h - 20 text - white" fill="none" stroke="current_color" view_box="0 0 24 24">;
                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M19.428 15.428a2 2 0 00 - 1.022-.547l - 2.387-.477a6 6 0 00 - 3.86.517l-.318.158a6 6 0 01 - 3.86.517L6.05 15.21a2 2 0 00 - 1.806.547M8 4h8l - 1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414 - 1.415 3.414H4.828c - 1.782 0 - 2.674 - 2.154 - 1.414 - 3.414l5 - 5A2 2 0 009 10.172V5L8 4z" />;
                </svg>;
              </div>;
              <div className="p - 6">;
                <h3 className="text - xl font - bold text - gray - 900 mb - 3">AI Autonomous Research Assistant</h3>;
                <p className="text - gray - 600 mb - 4">;
                  Revolutionize research with autonomous AI that works 24 / 7 to accelerate discovery and innovation across all fields.;
                </p>;
                <div className="flex items - center justify - between">;
                  <a href="/ai - autonomous - research - assistant" className="text - red - 600 hover:text - red - 700 font - medium">;
                    Learn More →;
                  </a>;
                  <span className="text - sm text - gray - 500">Research Platform</span>;
                </div>;
              </div>;
            </div>;
            {/* Quantum Neural Networks */}
            <div className="bg - white border border - gray - 200 rounded - xl overflow - hidden shadow - sm hover:shadow - lg transition - shadow">;
              <div className="h - 48 bg - gradient - to - br from - purple - 500 to - indigo - 500 flex items - center justify - center">;
                <svg className="w - 20 h - 20 text - white" fill="none" stroke="current_color" view_box="0 0 24 24">;
                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h - 1M4 12H3m3.343 - 5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11 - 4 0v-.531c0-.895-.356 - 1.754-.988 - 2.386l-.548-.547z" />;
                </svg>;
              </div>;
              <div className="p - 6">;
                <h3 className="text - xl font - bold text - gray - 900 mb - 3">Quantum Neural Network Platform</h3>;
                <p className="text - gray - 600 mb - 4">;
                  Next - generation quantum computing platform for complex problem solving and advanced AI applications.;
                </p>;
                <div className="flex items - center justify - between">;
                  <a href="/quantum - neural - network - platform" className="text - purple - 600 hover:text - purple - 700 font - medium">;
                    Learn More →;
                  </a>;
                  <span className="text - sm text - gray - 500">Quantum Platform</span>;
                </div>;
              </div>;
            </div>;
            {/* Autonomous Business Operations */}
            <div className="bg - white border border - gray - 200 rounded - xl overflow - hidden shadow - sm hover:shadow - lg transition - shadow">;
              <div className="h - 48 bg - gradient - to - br from - indigo - 500 to - blue - 500 flex items - center justify - center">;
                <svg className="w - 20 h - 20 text - white" fill="none" stroke="current_color" view_box="0 0 24 24">;
                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M21 13.255A23.931 23.931 0 0112 15c - 3.183 0 - 6.22-.62 - 9-1.745M16 6V4a2 2 0 00 - 2-2h - 4a2 2 0 00 - 2 2v2m4 6h.01M5 20h14a2 2 0 002 - 2V8a2 2 0 00 - 2-2H5a2 2 0 00 - 2 2v10a2 2 0 002 2z" />;
                </svg>;
              </div>;
              <div className="p - 6">;
                <h3 className="text - xl font - bold text - gray - 900 mb - 3">Autonomous Business Operations Platform</h3>;
                <p className="text - gray - 600 mb - 4">;
                  Streamline workflows and optimize decision - making with intelligent automation and process optimization.;
                </p>;
                <div className="flex items - center justify - between">;
                  <a href="/autonomous - business - operations - platform" className="text - indigo - 600 hover:text - indigo - 700 font - medium">;
                    Learn More →;
                  </a>;
                  <span className="text - sm text - gray - 500">Business Platform</span>;
                </div>;
              </div>;
            </div>;
            {/* IT Asset Management */}
            <div className="bg - white border border - gray - 200 rounded - xl overflow - hidden shadow - sm hover:shadow - lg transition - shadow">;
              <div className="h - 48 bg - gradient - to - br from - orange - 500 to - red - 500 flex items - center justify - center">;
                <svg className="w - 20 h - 20 text - white" fill="none" stroke="current_color" view_box="0 0 24 24">;
                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M5 12h14M5 12a2 2 0 01 - 2-2V6a2 2 0 012 - 2h14a2 2 0 012 2v4a2 2 0 01 - 2 2M5 12a2 2 0 00 - 2 2v4a2 2 0 002 2h14a2 2 0 002 - 2v - 4a2 2 0 00 - 2-2m - 2-4h.01M17 16h.01" />;
                </svg>;
              </div>;
              <div className="p - 6">;
                <h3 className="text - xl font - bold text - gray - 900 mb - 3">AI - Powered IT Asset Management</h3>;
                <p className="text - gray - 600 mb - 4">;
                  Intelligent asset tracking, optimization, and lifecycle management for modern IT infrastructure.;
                </p>;
                <div className="flex items - center justify - between">;
                  <a href="/ai - powered - it - asset - management" className="text - orange - 600 hover:text - orange - 700 font - medium">;
                    Learn More →;
                  </a>;
                  <span className="text - sm text - gray - 500">IT Platform</span>;
                </div>;
              </div>;
            </div>;
            {/* Cybersecurity Suite */}
            <div className="bg - white border border - gray - 200 rounded - xl overflow - hidden shadow - sm hover:shadow - lg transition - shadow">;
              <div className="h - 48 bg - gradient - to - br from - green - 500 to - teal - 500 flex items - center justify - center">;
                <svg className="w - 20 h - 20 text - white" fill="none" stroke="current_color" view_box="0 0 24 24">;
                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M9 12l2 2 4 - 4m5.618 - 4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01 - 8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176 - 1.332 9 - 6.03 9 - 11.622 0 - 1.042-.133 - 2.052-.382 - 3.016z" />;
                </svg>;
              </div>;
              <div className="p - 6">;
                <h3 className="text - xl font - bold text - gray - 900 mb - 3">Advanced Cybersecurity Suite</h3>;
                <p className="text - gray - 600 mb - 4">;
                  Comprehensive security solutions with SOC2 compliance automation and advanced threat detection.;
                </p>;
                <div className="flex items - center justify - between">;
                  <a href="/advanced - cybersecurity - suite" className="text - green - 600 hover:text - green - 700 font - medium">;
                    Learn More →;
                  </a>;
                  <span className="text - sm text - gray - 500">Security Platform</span>;
                </div>;
              </div>;
            </div>;
            {/* AI Automation Services */}
            <div className="bg - white border border - gray - 200 rounded - xl overflow - hidden shadow - sm hover:shadow - lg transition - shadow">;
              <div className="h - 48 bg - gradient - to - br from - blue - 500 to - cyan - 500 flex items - center justify - center">;
                <svg className="w - 20 h - 20 text - white" fill="none" stroke="current_color" view_box="0 0 24 24">;
                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M13 10V3L4 14h7v7l9 - 11h - 7z" />;
                </svg>;
              </div>;
              <div className="p - 6">;
                <h3 className="text - xl font - bold text - gray - 900 mb - 3">Advanced AI Automation Services</h3>;
                <p className="text - gray - 600 mb - 4">;
                  Transform operations with intelligent automation that learns and adapts to your business needs.;
                </p>;
                <div className="flex items - center justify - between">;
                  <a href="/advanced - ai - automation - services" className="text - blue - 600 hover:text - blue - 700 font - medium">;
                    Learn More →;
                  </a>;
                  <span className="text - sm text - gray - 500">Automation Platform</span>;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Solution Categories */}
      <section className="py - 20 bg - gray - 50">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <div className="text - center mb - 16">;
            <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 4">;
              Solution Categories;
            </h2>;
            <p className="text - xl text - gray - 600 max - w-2xl mx - auto">;
              Organized by industry and use case to help you find the perfect solution for your needs;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8">;
            <div className="bg - white p - 6 rounded - xl shadow - sm text - center">;
              <div className="w - 16 h - 16 bg - blue - 100 rounded - full flex items - center justify - center mx - auto mb - 4">;
                <svg className="w - 8 h - 8 text - blue - 600" fill="none" stroke="current_color" view_box="0 0 24 24">;
                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M19.428 15.428a2 2 0 00 - 1.022-.547l - 2.387-.477a6 6 0 00 - 3.86.517l-.318.158a6 6 0 01 - 3.86.517L6.05 15.21a2 2 0 00 - 1.806.547M8 4h8l - 1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414 - 1.415 3.414H4.828c - 1.782 0 - 2.674 - 2.154 - 1.414 - 3.414l5 - 5A2 2 0 009 10.172V5L8 4z" />;
                </svg>;
              </div>;
              <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Research & Development</h3>;
              <p className="text - gray - 600 text - sm">;
                AI - powered research platforms and autonomous discovery systems;
              </p>;
            </div>;
            <div className="bg - white p - 6 rounded - xl shadow - sm text - center">;
              <div className="w - 16 h - 16 bg - green - 100 rounded - full flex items - center justify - center mx - auto mb - 4">;
                <svg className="w - 8 h - 8 text - green - 600" fill="none" stroke="current_color" view_box="0 0 24 24">;
                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M9 12l2 2 4 - 4m5.618 - 4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01 - 8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176 - 1.332 9 - 6.03 9 - 11.622 0 - 1.042-.133 - 2.052-.382 - 3.016z" />;
                </svg>;
              </div>;
              <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Cybersecurity</h3>;
              <p className="text - gray - 600 text - sm">;
                Advanced security solutions and compliance automation;
              </p>;
            </div>;
            <div className="bg - white p - 6 rounded - xl shadow - sm text - center">;
              <div className="w - 16 h - 16 bg - purple - 100 rounded - full flex items - center justify - center mx - auto mb - 4">;
                <svg className="w - 8 h - 8 text - purple - 600" fill="none" stroke="current_color" view_box="0 0 24 24">;
                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M5 12h14M5 12a2 2 0 01 - 2-2V6a2 2 0 012 - 2h14a2 2 0 012 2v4a2 2 0 01 - 2 2M5 12a2 2 0 00 - 2 2v4a2 2 0 002 2h14a2 2 0 002 - 2v - 4a2 2 0 00 - 2-2m - 2-4h.01M17 16h.01" />;
                </svg>;
              </div>;
              <h3 className="text - lg font - semibold text - gray - 900 mb - 2">IT Infrastructure</h3>;
              <p className="text - gray - 600 text - sm">;
                Scalable infrastructure and asset management solutions;
              </p>;
            </div>;
            <div className="bg - white p - 6 rounded - xl shadow - sm text - center">;
              <div className="w - 16 h - 16 bg - orange - 100 rounded - full flex items - center justify - center mx - auto mb - 4">;
                <svg className="w - 8 h - 8 text - orange - 600" fill="none" stroke="current_color" view_box="0 0 24 24">;
                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M21 13.255A23.931 23.931 0 0112 15c - 3.183 0 - 6.22-.62 - 9-1.745M16 6V4a2 2 0 00 - 2-2h - 4a2 2 0 00 - 2 2v2m4 6h.01M5 20h14a2 2 0 002 - 2V8a2 2 0 00 - 2-2H5a2 2 0 00 - 2 2v10a2 2 0 002 2z" />;
                </svg>;
              </div>;
              <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Business Operations</h3>;
              <p className="text - gray - 600 text - sm">;
                Process automation and operational optimization;
              </p>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Industry Applications */}
      <section className="py - 20 bg - white">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <div className="text - center mb - 16">;
            <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 4">;
              Industry Applications;
            </h2>;
            <p className="text - xl text - gray - 600 max - w-2xl mx - auto">;
              Our solutions are designed to work across all industries and business types;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
            <div className="text - center">;
              <div className="w - 20 h - 20 bg - blue - 100 rounded - full flex items - center justify - center mx - auto mb - 6">;
                <svg className="w - 10 h - 10 text - blue - 600" fill="none" stroke="current_color" view_box="0 0 24 24">;
                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682 - 7.682a4.5 4.5 0 00 - 6.364 - 6.364L12 7.636l - 1.318 - 1.318a4.5 4.5 0 00 - 6.364 0z" />;
                </svg>;
              </div>;
              <h3 className="text - xl font - semibold text - gray - 900 mb - 3">Healthcare</h3>;
              <p className="text - gray - 600">;
                Drug discovery, clinical research, patient care optimization, and medical device innovation;
              </p>;
            </div>;
            <div className="text - center">;
              <div className="w - 20 h - 20 bg - green - 100 rounded - full flex items - center justify - center mx - auto mb - 6">;
                <svg className="w - 10 h - 10 text - green - 600" fill="none" stroke="current_color" view_box="0 0 24 24">;
                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M12 8c - 1.657 0 - 3 .895 - 3 2s1.343 2 3 2 3 .895 3 2 - 1.343 2 - 3 2m0 - 8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0 - 1c - 1.11 0 - 2.08-.402 - 2.599 - 1" />;
                </svg>;
              </div>;
              <h3 className="text - xl font - semibold text - gray - 900 mb - 3">Finance</h3>;
              <p className="text - gray - 600">;
                Risk modeling, algorithmic trading, fraud detection, and portfolio optimization;
              </p>;
            </div>;
            <div className="text - center">;
              <div className="w - 20 h - 20 bg - purple - 100 rounded - full flex items - center justify - center mx - auto mb - 6">;
                <svg className="w - 10 h - 10 text - purple - 600" fill="none" stroke="current_color" view_box="0 0 24 24">;
                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M19.428 15.428a2 2 0 00 - 1.022-.547l - 2.387-.477a6 6 0 00 - 3.86.517l-.318.158a6 6 0 01 - 3.86.517L6.05 15.21a2 2 0 00 - 1.806.547M8 4h8l - 1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414 - 1.415 3.414H4.828c - 1.782 0 - 2.674 - 2.154 - 1.414 - 3.414l5 - 5A2 2 0 009 10.172V5L8 4z" />;
                </svg>;
              </div>;
              <h3 className="text - xl font - semibold text - gray - 900 mb - 3">Manufacturing</h3>;
              <p className="text - gray - 600">;
                Process optimization, quality control, predictive maintenance, and supply chain management;
              </p>;
            </div>;
            <div className="text - center">;
              <div className="w - 20 h - 20 bg - orange - 100 rounded - full flex items - center justify - center mx - auto mb - 6">;
                <svg className="w - 10 h - 10 text - orange - 600" fill="none" stroke="current_color" view_box="0 0 24 24">;
                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M16 11V7a4 4 0 00 - 8 0v4M5 9h14l1 12H4L5 9z" />;
                </svg>;
              </div>;
              <h3 className="text - xl font - semibold text - gray - 900 mb - 3">Retail</h3>;
              <p className="text - gray - 600">;
                Customer behavior analysis, inventory optimization, demand forecasting, and personalized marketing;
              </p>;
            </div>;
            <div className="text - center">;
              <div className="w - 20 h - 20 bg - red - 100 rounded - full flex items - center justify - center mx - auto mb - 6">;
                <svg className="w - 10 h - 10 text - red - 600" fill="none" stroke="current_color" view_box="0 0 24 24">;
                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h - 1M4 12H3m3.343 - 5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11 - 4 0v-.531c0-.895-.356 - 1.754-.988 - 2.386l-.548-.547z" />;
                </svg>;
              </div>;
              <h3 className="text - xl font - semibold text - gray - 900 mb - 3">Technology</h3>;
              <p className="text - gray - 600">;
                Software development, system architecture, cloud optimization, and AI model development;
              </p>;
            </div>;
            <div className="text - center">;
              <div className="w - 20 h - 20 bg - indigo - 100 rounded - full flex items - center justify - center mx - auto mb - 6">;
                <svg className="w - 10 h - 10 text - indigo - 600" fill="none" stroke="current_color" view_box="0 0 24 24">;
                  <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012 - 2h1.064M15 20.488V18a2 2 0 012 - 2h3.064M21 12a9 9 0 11 - 18 0 9 9 0 0118 0z" />;
                </svg>;
              </div>;
              <h3 className="text - xl font - semibold text - gray - 900 mb - 3">Energy</h3>;
              <p className="text - gray - 600">;
                Grid optimization, renewable energy forecasting, demand response, and sustainability analysis;
              </p>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py - 20 bg - purple - 600 text - white">;
        <div className="max - w-7xl mx - auto px - 4 sm: px - 6 lg:px - 8 text - center">;
          <h2 className="text - 3xl md:text - 4xl font - bold mb - 6">;
            Ready to Transform Your Business?;
          </h2>;
          <p className="text - xl text - purple - 100 mb - 8 max - w-2xl mx - auto">;
            Discover how our AI - powered solutions can accelerate your growth and drive innovation across your organization.;
          </p>;
          <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
            <a href="/contact" className="bg - white text - purple - 600 px - 8 py - 3 rounded - lg text - lg font - semibold hover:bg - gray - 100 transition - colors">;
              Schedule a Consultation;
            </a>;
            <a href="/services" className="border - 2 border - white text - white px - 8 py - 3 rounded - lg text - lg font - semibold hover:bg - white hover:text - purple - 600 transition - colors">;
              View All Services;
            </a>;
          </div>;
        </div>;
      </section>;
    </div>);
>>>>>>> main
}