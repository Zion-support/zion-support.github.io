import Link from 'next / link';
export default /**
 * ServicesPage - Function description
 */
function ServicesPage() {
  return (
    <div className="min - h-screen bg - gradient - to - br from - zinc - 900 via - zinc - 800 to - zinc - 900 text - white">;
import Link from 'next/link';
export default function ServicesPage() {
  const services = [
    {
      category: "AI Autonomous Systems",
      services: [
        {
          title: "AI Autonomous Business Manager",
          description: "Self-operating business management systems that handle operations, decision-making, and growth autonomously.",
          href: "/services/ai-autonomous-business-manager",
          icon: "🏢"
        },
        {
          title: "AI Autonomous Decision Engine",
          description: "Advanced decision-making systems that analyze data and execute strategic decisions without human intervention.",
          href: "/services/ai-autonomous-decision-engine",
          icon: "🧠"
        },
        {
          title: "AI Autonomous Ecosystem Manager",
          description: "Comprehensive ecosystem management platforms that coordinate multiple AI systems and business processes.",
          href: "/services/ai-autonomous-ecosystem-manager",
          icon: "🌐"
        },
        {
          title: "AI Autonomous Systems Platform",
          description: "Integrated platform for deploying and managing autonomous AI systems across your organization.",
          href: "/services/ai-autonomous-systems-platform",
          icon: "🚀"
        }
      ]
    },
    {
      category: "Enterprise AI Solutions",
      services: [
        {
          title: "AI Business Intelligence Suite",
          description: "Comprehensive business intelligence platform powered by advanced AI analytics and machine learning.",
          href: "/services/ai-business-intelligence-suite",
          icon: "📊"
        },
        {
          title: "AI Analytics Copilot",
          description: "AI-powered analytics assistant that helps teams discover insights and make data-driven decisions.",
          href: "/services/ai-analytics-copilot",
          icon: "🔍"
        },
        {
          title: "AI Content Generation",
          description: "Automated content creation systems that generate high-quality marketing materials and business content.",
          href: "/services/ai-content-generator",
          icon: "✍️"
        },
        {
          title: "AI Code Review",
          description: "Automated code review systems that identify issues, suggest improvements, and ensure code quality.",
          href: "/services/ai-code-review",
          icon: "💻"
        }
      ]
    },
    {
      category: "Specialized AI Platforms",
      services: [
        {
          title: "AI Consciousness Evolution Platform",
          description: "Advanced platforms for developing and understanding AI consciousness and cognitive systems.",
          href: "/services/ai-consciousness-evolution-platform",
          icon: "🌟"
        },
        {
          title: "AI Autonomous Research Assistant",
          description: "Intelligent research systems that autonomously conduct research, analyze findings, and generate insights.",
          href: "/services/ai-autonomous-research-assistant",
          icon: "🔬"
        },
        {
          title: "AI Autonomous Creative Director",
          description: "Creative AI systems that manage and execute creative campaigns and content strategies.",
          href: "/services/ai-autonomous-creative-director",
          icon: "🎨"
        },
        {
          title: "AI Autonomous Healthcare Physician",
          description: "AI-powered healthcare systems that assist in diagnosis, treatment planning, and patient care.",
          href: "/services/ai-autonomous-healthcare-physician",
          icon: "🏥"
        }
      ]
    },
    {
      category: "Industry-Specific Solutions",
      services: [
        {
          title: "AI Autonomous Manufacturing",
          description: "Smart manufacturing systems that optimize production, quality control, and supply chain management.",
          href: "/services/ai-autonomous-manufacturing",
          icon: "🏭"
        },
        {
          title: "AI Autonomous Logistics",
          description: "Intelligent logistics systems that optimize routes, inventory, and delivery operations.",
          href: "/services/ai-autonomous-logistics",
          icon: "📦"
        },
        {
          title: "AI Autonomous Security",
          description: "Advanced security systems that detect threats, respond to incidents, and protect digital assets.",
          href: "/services/ai-autonomous-security",
          icon: "🔒"
        },
        {
          title: "AI Autonomous Testing",
          description: "Automated testing systems that ensure software quality and reliability across all platforms.",
          href: "/services/ai-autonomous-testing",
          icon: "🧪"
        }
      ]
    }
  ];
  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our AI Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to revolutionize your business operations. 
            From autonomous systems to specialized industry solutions, we deliver cutting-edge technology that drives growth.
          </p>
        </div>
      </div>
      {/* Services by Category */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {services.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              {category.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{service.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {service.description}
                      </p>
                      <Link 
                        href={service.href} 
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                      >
                        Learn More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Additional Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Additional AI Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">AI Automation Services</h3>
            <p className="text-gray-300 text-sm mb-4">
              Streamline operations with intelligent automation solutions
            </p>
            <Link href="/services/ai-automation-services" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
              Learn More →
            </Link>
          </div>
          <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-white/10 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Quantum Computing</h3>
            <p className="text-gray-300 text-sm mb-4">
              Next-generation computing power for complex problem solving
            </p>
            <Link href="/services/quantum-computing" className="text-green-400 hover:text-green-300 text-sm font-medium">
              Learn More →
            </Link>
          </div>
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-white/10 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Research & Development</h3>
            <p className="text-gray-300 text-sm mb-4">
              Cutting-edge research in AI consciousness and quantum systems
            </p>
            <Link href="/research" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
              Learn More →
            </Link>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 rounded-xl p-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI solutions can transform your business operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105">
              Schedule a Consultation
            </Link>
            <Link href="/solutions" className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:bg-white/10">
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
export default function ServicesPage() {return (;
export default function ServicesPage() {;
  return (;
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">;
      {/* Hero Section */}
      <div className="bg - gradient - to - r from - blue - 600 to - purple - 600 py - 20">;
        <div className="container mx - auto px - 6 text - center">;
          <h1 className="text - 5xl font - bold mb - 6">Zion Tech Group Services</h1>;
          <p className="text - xl text - blue - 100 max - w-3xl mx - auto">;
            Comprehensive technology solutions for modern businesses. From AI - powered automation to enterprise IT infrastructure.;
          </p>;
          <div className="mt - 8">;
            <a href="tel:+13024640950" className="bg - white text - blue - 600 px - 8 py - 3 rounded - lg font - semibold hover:bg - blue - 50 transition - colors mr - 4">;
              Call Now: +1 302 464 0950;
            </a>;
            <a href="mailto:kleber@ziontechgroup.com" className="border - 2 border - white text - white px - 8 py - 3 rounded - lg font - semibold hover:bg - white hover:text - blue - 600 transition - colors">;
              Get Quote;
            </a>;
          </div>;
        </div>;
      </div>;
      {/* Contact Info Banner */}
      <div className="bg - zinc - 800 py - 4">;
        <div className="container mx - auto px - 6 text - center text - sm">;
          <span className="mr - 8">📱 +1 302 464 0950</span>;
          <span className="mr - 8">✉️ kleber@ziontechgroup.com</span>;
          <span>📍 364 E Main St STE 1008, Middletown DE 19709</span>;
        </div>;
      </div>;
      {/* AI Services Section */}
      <section className="py - 20">;
        <div className="container mx - auto px - 6">;
          <div className="text - center mb - 16">;
            <h2 className="text - 4xl font - bold mb - 4">🤖 AI Services & Solutions</h2>;
            <p className="text - xl text - zinc - 300 max - w-2xl mx - auto">;
              Cutting - edge artificial intelligence solutions to transform your business operations;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
            {/* ZionGPT Core */}
            <div className="bg - zinc - 800 rounded - xl p - 6 border border - zinc - 700 hover:border - blue - 500 transition - all">;
              <div className="text - 3xl mb - 4">🧠</div>;
              <h3 className="text - xl font - semibold mb - 3">ZionGPT Core</h3>;
              <p className="text - zinc - 300 mb - 4">Enterprise - grade AI assistant with custom knowledge base integration and workflow automation.</p>;
              <div className="space - y-2 text - sm">;
                <div className="flex justify - between">;
                  <span > Starting Price:</span>;
                  <span className="text - green - 400">$299 / month</span>;
                </div>;
                <div className="flex justify - between">;
                  <span > Setup Fee:</span>;
                  <span className="text - yellow - 400">$1, 500</span>;
                </div>;
              </div>;
              <a href="/services / ai" className="block mt - 4 text - blue - 400 hover:text - blue - 300 text - sm">;
                Learn More →;
              </a>;
            </div>;
            {/* AI Content Generation */}
            <div className="bg - zinc - 800 rounded - xl p - 6 border border - zinc - 700 hover:border - blue - 500 transition - all">;
              <div className="text - 3xl mb - 4">✍️</div>;
              <h3 className="text - xl font - semibold mb - 3">AI Content Generation</h3>;
              <p className="text - zinc - 300 mb - 4">Automated content creation for blogs, social media, marketing materials, and technical documentation.</p>;
              <div className="space - y-2 text - sm">;
                <div className="flex justify - between">;
                  <span > Starting Price:</span>;
                  <span className="text - green - 400">$199 / month</span>;
                </div>;
                <div className="flex justify - between">;
                  <span > Setup Fee:</span>;
                  <span className="text - yellow - 400">$800</span>;
                </div>;
              </div>;
              <a href="/services / ai" className="block mt - 4 text - blue - 400 hover:text - blue - 300 text - sm">;
                Learn More →;
              </a>;
            </div>;
            {/* AI - Powered Analytics */}
            <div className="bg - zinc - 800 rounded - xl p - 6 border border - zinc - 700 hover:border - blue - 500 transition - all">;
              <div className="text - 3xl mb - 4">📊</div>;
              <h3 className="text - xl font - semibold mb - 3">AI - Powered Analytics</h3>;
              <p className="text - zinc - 300 mb - 4">Predictive analytics, trend forecasting, and intelligent business insights powered by machine learning.</p>;
              <div className="space - y-2 text - sm">;
                <div className="flex justify - between">;
                  <span > Starting Price:</span>;
                  <span className="text - green - 400">$399 / month</span>;
                </div>;
                <div className="flex justify - between">;
                  <span > Setup Fee:</span>;
                  <span className="text - yellow - 400">$2, 000</span>;
                </div>;
              </div>;
              <a href="/services / ai" className="block mt - 4 text - blue - 400 hover:text - blue - 300 text - sm">;
                Learn More →;
              </a>;
            </div>;
            {/* AI Customer Support */}
            <div className="bg - zinc - 800 rounded - xl p - 6 border border - zinc - 700 hover:border - blue - 500 transition - all">;
              <div className="text - 3xl mb - 4">💬</div>;
              <h3 className="text - xl font - semibold mb - 3">AI Customer Support</h3>;
              <p className="text - zinc - 300 mb - 4">24 / 7 intelligent chatbots and virtual assistants for customer service automation.</p>;
              <div className="space - y-2 text - sm">;
                <div className="flex justify - between">;
                  <span > Starting Price:</span>;
                  <span className="text - green - 400">$249 / month</span>;
                </div>;
                <div className="flex justify - between">;
                  <span > Setup Fee:</span>;
                  <span className="text - yellow - 400">$1, 200</span>;
                </div>;
              </div>;
              <a href="/services / ai" className="block mt - 4 text - blue - 400 hover:text - blue - 300 text - sm">;
                Learn More →;
              </a>;
            </div>;
            {/* AI Process Automation */}
            <div className="bg - zinc - 800 rounded - xl p - 6 border border - zinc - 700 hover:border - blue - 500 transition - all">;
              <div className="text - 3xl mb - 4">⚙️</div>;
              <h3 className="text - xl font - semibold mb - 3">AI Process Automation</h3>;
              <p className="text - zinc - 300 mb - 4">Intelligent workflow automation, document processing, and business process optimization.</p>;
              <div className="space - y-2 text - sm">;
                <div className="flex justify - between">;
                  <span > Starting Price:</span>;
                  <span className="text - green - 400">$349 / month</span>;
                </div>;
                <div className="flex justify - between">;
                  <span > Setup Fee:</span>;
                  <span className="text - yellow - 400">$1, 800</span>;
                </div>;
              </div>;
              <a href="/services / ai" className="block mt - 4 text - blue - 400 hover:text - blue - 300 text - sm">;
                Learn More →;
              </a>;
            </div>;
            {/* AI Security & Compliance */}
            <div className="bg - zinc - 800 rounded - xl p - 6 border border - zinc - 700 hover:border - blue - 500 transition - all">;
              <div className="text - 3xl mb - 4">🔒</div>;
              <h3 className="text - xl font - semibold mb - 3">AI Security & Compliance</h3>;
              <p className="text - zinc - 300 mb - 4">AI - powered threat detection, compliance monitoring, and security automation for enterprise environments.</p>;
              <div className="space - y-2 text - sm">;
                <div className="flex justify - between">;
                  <span > Starting Price:</span>;
                  <span className="text - green - 400">$499 / month</span>;
                </div>;
                <div className="flex justify - between">;
                  <span > Setup Fee:</span>;
                  <span className="text - yellow - 400">$2, 500</span>;
                </div>;
              </div>;
              <a href="/services / ai" className="block mt - 4 text - blue - 400 hover:text - blue - 300 text - sm">;
                Learn More →;
              </a>;
            </div>;
          </div>;
          <div className="text - center mt - 12">;
            <a href="/services / ai" className="inline - block bg - blue - 600 hover:bg - blue - 700 text - white px - 8 py - 3 rounded - lg font - semibold transition - colors">;
              View All AI Services;
            </a>;
          </div>;
        </div>;
      </section>;
      {/* IT Services Section */}
      <section className="py - 20 bg - zinc - 800">;
        <div className="container mx - auto px - 6">;
          <div className="text - center mb - 16">;
            <h2 className="text - 4xl font - bold mb - 4">💻 IT Services & Solutions</h2>;
            <p className="text - xl text - zinc - 300 max - w-2xl mx - auto">;
              Comprehensive IT infrastructure, cloud solutions, and digital transformation services;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
            {/* Cloud Infrastructure */}
            <div className="bg - zinc - 900 rounded - xl p - 6 border border - zinc - 600 hover:border - green - 500 transition - all">;
              <div className="text - 3xl mb - 4">☁️</div>;
              <h3 className="text - xl font - semibold mb - 3">Cloud Infrastructure</h3>;
              <p className="text - zinc - 300 mb - 4">AWS, Azure, and Google Cloud setup, migration, and optimization services.</p>;
              <div className="space - y-2 text - sm">;
                <div className="flex justify - between">;
                  <span > Starting Price:</span>;
                  <span className="text - green - 400">$150 / hour</span>;
                </div>;
                <div className="flex justify - between">;
                  <span > Project Range:</span>;
                  <span className="text - yellow - 400">$5K - $50K</span>;
                </div>;
              </div>;
              <a href="/services / it" className="block mt - 4 text - green - 400 hover:text - green - 300 text - sm">;
                Learn More →;
              </a>;
            </div>;
            {/* DevOps & CI / CD */}
            <div className="bg - zinc - 900 rounded - xl p - 6 border border - zinc - 600 hover:border - green - 500 transition - all">;
              <div className="text - 3xl mb - 4">🚀</div>;
              <h3 className="text - xl font - semibold mb - 3">DevOps & CI / CD</h3>;
              <p className="text - zinc - 300 mb - 4">Automated deployment pipelines, infrastructure as code, and DevOps culture implementation.</p>;
              <div className="space - y-2 text - sm">;
                <div className="flex justify - between">;
                  <span > Starting Price:</span>;
                  <span className="text - green - 400">$175 / hour</span>;
                </div>;
                <div className="flex justify - between">;
                  <span > Project Range:</span>;
                  <span className="text - yellow - 400">$8K - $75K</span>;
                </div>;
              </div>;
              <a href="/services / it" className="block mt - 4 text - green - 400 hover:text - green - 300 text - sm">;
                Learn More →;
              </a>;
            </div>;
            {/* Cybersecurity */}
            <div className="bg - zinc - 900 rounded - xl p - 6 border border - zinc - 600 hover:border - green - 500 transition - all">;
              <div className="text - 3xl mb - 4">🛡️</div>;
              <h3 className="text - xl font - semibold mb - 3">Cybersecurity</h3>;
              <p className="text - zinc - 300 mb - 4">Security audits, penetration testing, compliance frameworks, and incident response planning.</p>;
              <div className="space - y-2 text - sm">;
                <div className="flex justify - between">;
                  <span > Starting Price:</span>;
                  <span className="text - green - 400">$200 / hour</span>;
                </div>;
                <div className="flex justify - between">;
                  <span > Project Range:</span>;
                  <span className="text - yellow - 400">$10K - $100K</span>;
                </div>;
              </div>;
              <a href="/services / it" className="block mt - 4 text - green - 400 hover:text - green - 300 text - sm">;
                Learn More →;
              </a>;
            </div>;
            {/* Data Engineering */}
            <div className="bg - zinc - 900 rounded - xl p - 6 border border - zinc - 600 hover:border - green - 500 transition - all">;
              <div className="text - 3xl mb - 4">📈</div>;
              <h3 className="text - xl font - semibold mb - 3">Data Engineering</h3>;
              <p className="text - zinc - 300 mb - 4">Data pipelines, warehousing, ETL processes, and business intelligence solutions.</p>;
              <div className="space - y-2 text - sm">;
                <div className="flex justify - between">;
                  <span > Starting Price:</span>;
                  <span className="text - green - 400">$160 / hour</span>;
                </div>;
                <div className="flex justify - between">;
                  <span > Project Range:</span>;
                  <span className="text - yellow - 400">$15K - $150K</span>;
                </div>;
              </div>;
              <a href="/services / it" className="block mt - 4 text - green - 400 hover:text - green - 300 text - sm">;
                Learn More →;
              </a>;
            </div>;
            {/* API Development */}
            <div className="bg - zinc - 900 rounded - xl p - 6 border border - zinc - 600 hover:border - green - 500 transition - all">;
              <div className="text - 3xl mb - 4">🔌</div>;
              <h3 className="text - xl font - semibold mb - 3">API Development</h3>;
              <p className="text - zinc - 300 mb - 4">RESTful APIs, GraphQL, microservices architecture, and API gateway solutions.</p>;
              <div className="space - y-2 text - sm">;
                <div className="flex justify - between">;
                  <span > Starting Price:</span>;
                  <span className="text - green - 400">$140 / hour</span>;
                </div>;
                <div className="flex justify - between">;
                  <span > Project Range:</span>;
                  <span className="text - yellow - 400">$8K - $80K</span>;
                </div>;
              </div>;
              <a href="/services / it" className="block mt - 4 text - green - 400 hover:text - green - 300 text - sm">;
                Learn More →;
              </a>;
            </div>;
            {/* Digital Transformation */}
            <div className="bg - zinc - 900 rounded - xl p - 6 border border - zinc - 600 hover:border - green - 500 transition - all">;
              <div className="text - 3xl mb - 4">🔄</div>;
              <h3 className="text - xl font - semibold mb - 3">Digital Transformation</h3>;
              <p className="text - zinc - 300 mb - 4">End - to - end digital transformation consulting, legacy system modernization, and change management.</p>;
              <div className="space - y-2 text - sm">;
                <div className="flex justify - between">;
                  <span > Starting Price:</span>;
                  <span className="text - green - 400">$250 / hour</span>;
                </div>;
                <div className="flex justify - between">;
                  <span > Project Range:</span>;
                  <span className="text - yellow - 400">$25K - $500K</span>;
                </div>;
              </div>;
              <a href="/services / it" className="block mt - 4 text - green - 400 hover:text - green - 300 text - sm">;
                Learn More →;
              </a>;
            </div>;
          </div>;
          <div className="text - center mt - 12">;
            <a href="/services / it" className="inline - block bg - green - 600 hover:bg - green - 700 text - white px - 8 py - 3 rounded - lg font - semibold transition - colors">;
              View All IT Services;
            </a>;
          </div>;
        </div>;
      </section>;
      {/* Blockchain & Web3 Services Section */}
      <section className="py - 20">;
        <div className="container mx - auto px - 6">;
          <div className="text - center mb - 16">;
            <h2 className="text - 4xl font - bold mb - 4">⛓️ Blockchain & Web3 Services</h2>;
            <p className="text - xl text - zinc - 300 max - w-2xl mx - auto">;
              Next - generation blockchain solutions, DeFi platforms, NFT marketplaces, and Web3 infrastructure;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
            {/* DeFi Platform Development */}
            <div className="bg - zinc - 800 rounded - xl p - 6 border border - zinc - 700 hover:border - orange - 500 transition - all">;
              <div className="text - 3xl mb - 4">💰</div>;
              <h3 className="text - xl font - semibold mb - 3">DeFi Platform Development</h3>;
              <p className="text - zinc - 300 mb - 4">Build next - generation decentralized finance platforms with lending, borrowing, and yield farming.</p>;
              <div className="space - y-2 text - sm">;
                <div className="flex justify - between">;
                  <span > Starting Price:</span>;
                  <span className="text - green - 400">$25K</span>;
                </div>;
                <div className="flex justify - between">;
                  <span > Project Range:</span>;
                  <span className="text - yellow - 400">$25K - $200K+</span>;
                </div>;
              </div>;
              <a href="/services / blockchain" className="block mt - 4 text - orange - 400 hover:text - orange - 300 text - sm">;
                Learn More →;
              </a>;
            </div>;
            {/* NFT Marketplace */}
            <div className="bg - zinc - 800 rounded - xl p - 6 border border - zinc - 700 hover:border - orange - 500 transition - all">;
              <div className="text - 3xl mb - 4">🎨</div>;
              <h3 className="text - xl font - semibold mb - 3">NFT Marketplace Development</h3>;
              <p className="text - zinc - 300 mb - 4">Create cutting - edge NFT marketplaces with multi - chain support and advanced features.</p>;
              <div className="space - y-2 text - sm">;
                <div className="flex justify - between">;
                  <span > Starting Price:</span>;
                  <span className="text - green - 400">$15K</span>;
                </div>;
                <div className="flex justify - between">;
                  <span > Project Range:</span>;
                  <span className="text - yellow - 400">$15K - $100K+</span>;
                </div>;
              </div>;
              <a href="/services / blockchain" className="block mt - 4 text - orange - 400 hover:text - orange - 300 text - sm">;
                Learn More →;
              </a>;
            </div>;
            {/* Smart Contract Development */}
            <div className="bg - zinc - 800 rounded - xl p - 6 border border - zinc - 700 hover:border - orange - 500 transition - all">;
              <div className="text - 3xl mb - 4">📜</div>;
              <h3 className="text - xl font - semibold mb - 3">Smart Contract Development</h3>;
              <p className="text - zinc - 300 mb - 4">Secure, audited smart contracts for any blockchain use case with comprehensive testing.</p>;
              <div className="space - y-2 text - sm">;
                <div className="flex justify - between">;
                  <span > Starting Price:</span>;
                  <span className="text - green - 400">$5K</span>;
                </div>;
                <div className="flex justify - between">;
                  <span > Project Range:</span>;
                  <span className="text - yellow - 400">$5K - $50K+</span>;
                </div>;
              </div>;
              <a href="/services / blockchain" className="block mt - 4 text - orange - 400 hover:text - orange - 300 text - sm">;
                Learn More →;
              </a>;
            </div>;
            {/* Web3 Infrastructure */}
            <div className="bg - zinc - 800 rounded - xl p - 6 border border - zinc - 700 hover:border - orange - 500 transition - all">;
              <div className="text - 3xl mb - 4">🌐</div>;
              <h3 className="text - xl font - semibold mb - 3">Web3 Infrastructure</h3>;
              <p className="text - zinc - 300 mb - 4">Build robust Web3 infrastructure with node management, API gateways, and decentralized storage.</p>;
              <div className="space - y-2 text - sm">;
                <div className="flex justify - between">;
                  <span > Starting Price:</span>;
                  <span className="text - green - 400">$10K</span>;
                </div>;
                <div className="flex justify - between">;
                  <span > Project Range:</span>;
                  <span className="text - yellow - 400">$10K - $100K+</span>;
                </div>;
              </div>;
              <a href="/services / blockchain" className="block mt - 4 text - orange - 400 hover:text - orange - 300 text - sm">;
                Learn More →;
              </a>;
            </div>;
            {/* DAO Development */}
            <div className="bg - zinc - 800 rounded - xl p - 6 border border - zinc - 700 hover:border - orange - 500 transition - all">;
              <div className="text - 3xl mb - 4">🏛️</div>;
              <h3 className="text - xl font - semibold mb - 3">DAO Development</h3>;
              <p className="text - zinc - 300 mb - 4">Create sophisticated decentralized autonomous organizations with advanced governance tools.</p>;
              <div className="space - y-2 text - sm">;
                <div className="flex justify - between">;
                  <span > Starting Price:</span>;
                  <span className="text - green - 400">$20K</span>;
                </div>;
                <div className="flex justify - between">;
                  <span > Project Range:</span>;
                  <span className="text - yellow - 400">$20K - $150K+</span>;
                </div>;
              </div>;
              <a href="/services / blockchain" className="block mt - 4 text - orange - 400 hover:text - orange - 300 text - sm">;
                Learn More →;
              </a>;
            </div>;
            {/* Blockchain Consulting */}
            <div className="bg - zinc - 800 rounded - xl p - 6 border border - zinc - 700 hover:border - orange - 500 transition - all">;
              <div className="text - 3xl mb - 4">💡</div>;
              <h3 className="text - xl font - semibold mb - 3">Blockchain Consulting</h3>;
              <p className="text - zinc - 300 mb - 4">Strategic blockchain consulting including technology selection, architecture design, and compliance.</p>;
              <div className="space - y-2 text - sm">;
                <div className="flex justify - between">;
                  <span > Consulting Rate:</span>;
                  <span className="text - green - 400">$250 / hour</span>;
                </div>;
                <div className="flex justify - between">;
                  <span > Strategy Package:</span>;
                  <span className="text - yellow - 400">$25K - $75K</span>;
                </div>;
              </div>;
              <a href="/services / blockchain" className="block mt - 4 text - orange - 400 hover:text - orange - 300 text - sm">;
                Learn More →;
              </a>;
            </div>;
          </div>;
          <div className="text - center mt - 12">;
            <a href="/services / blockchain" className="inline - block bg - orange - 600 hover:bg - orange - 700 text - white px - 8 py - 3 rounded - lg font - semibold transition - colors">;
              View All Blockchain Services;
            </a>;
          </div>;
        </div>;
      </section>;
      {/* Micro SAAS Services Section */}
      <section className="py - 20 bg - zinc - 800">;
        <div className="container mx - auto px - 6">;
          <div className="text - center mb - 16">;
            <h2 className="text - 4xl font - bold mb - 4">🚀 Micro SAAS Services</h2>;
            <p className="text - xl text - zinc - 300 max - w-2xl mx - auto">;
              Ready - to - deploy software solutions for specific business needs;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
            {/* Zion Marketplace */}
            <div className="bg - zinc - 900 rounded - xl p - 6 border border - zinc - 600 hover:border - purple - 500 transition - all">;
              <div className="text - 3xl mb - 4">🛒</div>;
              <h3 className="text - xl font - semibold mb - 3">Zion Marketplace</h3>;
              <p className="text - zinc - 300 mb - 4">Complete marketplace solution with job boards, talent matching, and project management.</p>;
              <div className="space - y-2 text - sm">;
                <div className="flex justify - between">;
                  <span > Starting Price:</span>;
                  <span className="text - green - 400">$399 / month</span>;
                </div>;
                <div className="flex justify - between">;
                  <span > Setup Fee:</span>;
                  <span className="text - yellow - 400">$2, 500</span>;
                </div>;
              </div>;
              <a href="/services / saas" className="block mt - 4 text - purple - 400 hover:text - purple - 300 text - sm">;
                Learn More →;
              </a>;
            </div>;
            {/* Resume AI Builder */}
            <div className="bg - zinc - 900 rounded - xl p - 6 border border - zinc - 600 hover:border - purple - 500 transition - all">;
              <div className="text - 3xl mb - 4">📝</div>;
              <h3 className="text - xl font - semibold mb - 3">Resume AI Builder</h3>;
              <p className="text - zinc - 300 mb - 4">AI - powered resume creation, optimization, and ATS - friendly formatting with industry insights.</p>;
              <div className="space - y-2 text - sm">;
                <div className="flex justify - between">;
                  <span > Starting Price:</span>;
                  <span className="text - green - 400">$99 / month</span>;
                </div>;
                <div className="flex justify - between">;
                  <span > Setup Fee:</span>;
                  <span className="text - yellow - 400">$500</span>;
                </div>;
              </div>;
              <a href="/services / saas" className="block mt - 4 text - purple - 400 hover:text - purple - 300 text - sm">;
                Learn More →;
              </a>;
            </div>;
            {/* Token Rewards System */}
            <div className="bg - zinc - 900 rounded - xl p - 6 border border - zinc - 600 hover:border - purple - 500 transition - all">;
              <div className="text - 3xl mb - 4">🪙</div>;
              <h3 className="text - xl font - semibold mb - 3">Token Rewards System</h3>;
              <p className="text - zinc - 300 mb - 4">Blockchain - based loyalty and rewards platform with gamification and community engagement.</p>;
              <div className="space - y-2 text - sm">;
                <div className="flex justify - between">;
                  <span > Starting Price:</span>;
                  <span className="text - green - 400">$299 / month</span>;
                </div>;
                <div className="flex justify - between">;
                  <span > Setup Fee:</span>;
                  <span className="text - yellow - 400">$3, 000</span>;
                </div>;
              </div>;
              <a href="/services / saas" className="block mt - 4 text - purple - 400 hover:text - purple - 300 text - sm">;
                Learn More →;
              </a>;
            </div>;
            {/* KYC / AML Verification */}
            <div className="bg - zinc - 900 rounded - xl p - 6 border border - zinc - 600 hover:border - purple - 500 transition - all">;
              <div className="text - 3xl mb - 4">✅</div>;
              <h3 className="text - xl font - semibold mb - 3">KYC / AML Verification</h3>;
              <p className="text - zinc - 300 mb - 4">Compliance - ready identity verification and anti - money laundering screening system.</p>;
              <div className="space - y-2 text - sm">;
                <div className="flex justify - between">;
                  <span > Starting Price:</span>;
                  <span className="text - green - 400">$199 / month</span>;
                </div>;
                <div className="flex justify - between">;
                  <span > Setup Fee:</span>;
                  <span className="text - yellow - 400">$1, 500</span>;
                </div>;
              </div>;
              <a href="/services / saas" className="block mt - 4 text - purple - 400 hover:text - purple - 300 text - sm">;
                Learn More →;
              </a>;
            </div>;
            {/* DAO Governance Platform */}
            <div className="bg - zinc - 900 rounded - xl p - 6 border border - zinc - 600 hover:border - purple - 500 transition - all">;
              <div className="text - 3xl mb - 4">🗳️</div>;
              <h3 className="text - xl font - semibold mb - 3">DAO Governance Platform</h3>;
              <p className="text - zinc - 300 mb - 4">Decentralized governance tools with proposal creation, voting mechanisms, and treasury management.</p>;
              <div className="space - y-2 text - sm">;
                <div className="flex justify - between">;
                  <span > Starting Price:</span>;
                  <span className="text - green - 400">$449 / month</span>;
                </div>;
                <div className="flex justify - between">;
                  <span > Setup Fee:</span>;
                  <span className="text - yellow - 400">$4, 000</span>;
                </div>;
              </div>;
              <a href="/services / saas" className="block mt - 4 text - purple - 400 hover:text - purple - 300 text - sm">;
                Learn More →;
              </a>;
            </div>;
            {/* Zion Academy */}
            <div className="bg - zinc - 900 rounded - xl p - 6 border border - zinc - 600 hover:border - purple - 500 transition - all">;
              <div className="text - 3xl mb - 4">🎓</div>;
              <h3 className="text - xl font - semibold mb - 3">Zion Academy</h3>;
              <p className="text - zinc - 300 mb - 4">Learning management system with AI - powered course creation, assessments, and skill tracking.</p>;
              <div className="space - y-2 text - sm">;
                <div className="flex justify - between">;
                  <span > Starting Price:</span>;
                  <span className="text - green - 400">$179 / month</span>;
                </div>;
                <div className="flex justify - between">;
                  <span > Setup Fee:</span>;
                  <span className="text - yellow - 400">$1, 200</span>;
                </div>;
              </div>;
              <a href="/services / saas" className="block mt - 4 text - purple - 400 hover:text - purple - 300 text - sm">;
                Learn More →;
              </a>;
            </div>;
          </div>;
          <div className="text - center mt - 12">;
            <a href="/services / saas" className="inline - block bg - purple - 600 hover:bg - purple - 700 text - white px - 8 py - 3 rounded - lg font - semibold transition - colors">;
              View All SAAS Services;
            </a>;
          </div>;
        </div>;
      </section>;
      {/* Call to Action */}
      <section className="py - 20 bg - gradient - to - r from - blue - 600 to - purple - 600">;
        <div className="container mx - auto px - 6 text - center">;
          <h2 className="text - 4xl font - bold mb - 6">Ready to Transform Your Business?</h2>;
          <p className="text - xl text - blue - 100 mb - 8 max - w-2xl mx - auto">;
            Let's discuss how our AI, IT, blockchain, and SAAS solutions can drive your digital transformation and business growth.;
          </p>;
          <div className="space - y-4">;
            <div className="flex flex - col sm:flex - row gap - 4 justify - center items - center">;
              <a href="tel:+13024640950" className="bg - white text - blue - 600 px - 8 py - 4 rounded - lg font - semibold hover:bg - blue - 50 transition - colors text - lg">;
                📞 Call +1 302 464 0950;
              </a>;
              <a href="mailto:kleber@ziontechgroup.com" className="border - 2 border - white text - white px - 8 py - 4 rounded - lg font - semibold hover:bg - white hover:text - blue - 600 transition - colors text - lg">;
                ✉️ Schedule Consultation;
              </a>;
            </div>;
            <p className="text - blue - 100 text - sm">;
              📍 364 E Main St STE 1008, Middletown DE 19709 | 🌐 https: //ziontechgroup.com;
            </p>;
          </div>;
        </div>;
      </section>;
    </div>);
}