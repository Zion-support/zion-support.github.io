<<<<<<< HEAD
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Zion Tech Group Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive technology solutions for modern businesses. From AI-powered automation to enterprise IT infrastructure.
          </p>
          <div className="mt-8">
            <a href="tel:+13024640950" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors mr-4">
              Call Now: +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Get Quote
            </a>
          </div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className="bg-zinc-800 py-4">
        <div className="container mx-auto px-6 text-center text-sm">
          <span className="mr-8">📱 +1 302 464 0950</span>
          <span className="mr-8">✉️ kleber@ziontechgroup.com</span>
          <span>📍 364 E Main St STE 1008, Middletown DE 19709</span>
        </div>
      </div>

      {/* AI Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">🤖 AI Services & Solutions</h2>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
              Cutting-edge artificial intelligence solutions to transform your business operations
            {/* ZionGPT Core */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-blue-500 transition-all">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-3">ZionGPT Core</h3>
              <p className="text-zinc-300 mb-4">Enterprise-grade AI assistant with custom knowledge base integration and workflow automation.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Starting Price:</span>
                  <span className="text-green-400">$299/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Setup Fee:</span>
                  <span className="text-yellow-400">$1,500</span>
                </div>
              </div>
              <a href="/services/ai" className="block mt-4 text-blue-400 hover:text-blue-300 text-sm">
                Learn More →
              </a>
            </div>

            {/* AI Content Generation */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-blue-500 transition-all">
              <div className="text-3xl mb-4">✍️</div>
              <h3 className="text-xl font-semibold mb-3">AI Content Generation</h3>
              <p className="text-zinc-300 mb-4">Automated content creation for blogs, social media, marketing materials, and technical documentation.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Starting Price:</span>
                  <span className="text-green-400">$199/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Setup Fee:</span>
                  <span className="text-yellow-400">$800</span>
                </div>
              </div>
              <a href="/services/ai" className="block mt-4 text-blue-400 hover:text-blue-300 text-sm">
                Learn More →
              </a>
            </div>

            {/* AI-Powered Analytics */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-blue-500 transition-all">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Analytics</h3>
              <p className="text-zinc-300 mb-4">Predictive analytics, trend forecasting, and intelligent business insights powered by machine learning.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Starting Price:</span>
                  <span className="text-green-400">$399/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Setup Fee:</span>
                  <span className="text-yellow-400">$2,000</span>
                </div>
              </div>
              <a href="/services/ai" className="block mt-4 text-blue-400 hover:text-blue-300 text-sm">
                Learn More →
              </a>
            </div>

            {/* AI Customer Support */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-blue-500 transition-all">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-3">AI Customer Support</h3>
              <p className="text-zinc-300 mb-4">24/7 intelligent chatbots and virtual assistants for customer service automation.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Starting Price:</span>
                  <span className="text-green-400">$249/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Setup Fee:</span>
                  <span className="text-yellow-400">$1,200</span>
                </div>
              </div>
              <a href="/services/ai" className="block mt-4 text-blue-400 hover:text-blue-300 text-sm">
                Learn More →
              </a>
            </div>

            {/* AI Process Automation */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-blue-500 transition-all">
              <div className="text-3xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-3">AI Process Automation</h3>
              <p className="text-zinc-300 mb-4">Intelligent workflow automation, document processing, and business process optimization.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Starting Price:</span>
                  <span className="text-green-400">$349/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Setup Fee:</span>
                  <span className="text-yellow-400">$1,800</span>
                </div>
              </div>
              <a href="/services/ai" className="block mt-4 text-blue-400 hover:text-blue-300 text-sm">
                Learn More →
              </a>
            </div>

            {/* AI Security & Compliance */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-blue-500 transition-all">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3">AI Security & Compliance</h3>
              <p className="text-zinc-300 mb-4">AI-powered threat detection, compliance monitoring, and security automation for enterprise environments.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Starting Price:</span>
                  <span className="text-green-400">$499/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Setup Fee:</span>
                  <span className="text-yellow-400">$2,500</span>
                </div>
              </div>
              <a href="/services/ai" className="block mt-4 text-blue-400 hover:text-blue-300 text-sm">
                Learn More →
              </a>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/services/ai" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View All AI Services
            </a>
      {/* IT Services Section */}
      <section className="py-20 bg-zinc-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">💻 IT Services & Solutions</h2>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
              Comprehensive IT infrastructure, cloud solutions, and digital transformation services
=======
import Link from 'next/link';

export const metadata = {
  title: 'Services - Zion Tech Group',
  description: 'Comprehensive AI-powered technology services including automation, autonomous business operations, cybersecurity, quantum computing, and space technology solutions.',
};

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: 'AI & Automation',
      description: 'Transform your business with intelligent automation and AI-powered solutions.',
      services: [
        {
          name: 'AI Automation Services',
          description: 'Intelligent process automation and workflow optimization.',
          href: '/ai-automation-services',
          icon: '🤖',
          features: ['Process Automation', 'Intelligent Workflows', 'Predictive Analytics', 'Machine Learning Models']
        },
        {
          name: 'AI Autonomous Business Operations',
          description: 'Self-managing business systems that optimize performance continuously.',
          href: '/ai-autonomous-business-operations',
          icon: '🚀',
          features: ['Self-Optimizing Systems', 'Real-time Decision Making', 'Scalable Operations', 'Performance Analytics']
        },
        {
          name: 'AI Content Generation',
          description: 'Automated content creation and marketing automation.',
          href: '/ai-content-generator',
          icon: '✍️',
          features: ['Content Creation', 'Marketing Automation', 'Personalization Engine', 'Creative Studio']
        }
      ]
    },
    {
      title: 'Cybersecurity & Compliance',
      description: 'Protect your digital assets with next-generation security solutions.',
      services: [
        {
          name: 'Advanced Cybersecurity Suite',
          description: 'Comprehensive security solutions for modern enterprises.',
          href: '/advanced-cybersecurity-suite',
          icon: '🛡️',
          features: ['Threat Detection', 'Zero Trust Security', 'Incident Response', 'Security Analytics']
        },
        {
          name: 'SOC2 Compliance Automation',
          description: 'Automated compliance management and reporting.',
          href: '/soc2-compliance-automation',
          icon: '📋',
          features: ['Compliance Monitoring', 'Automated Reporting', 'Risk Assessment', 'Audit Preparation']
        }
      ]
    },
    {
      title: 'Infrastructure & Development',
      description: 'Build robust, scalable, and secure IT infrastructure.',
      services: [
        {
          name: 'Advanced IT Infrastructure Services',
          description: 'Modern infrastructure solutions for enterprise needs.',
          href: '/advanced-it-infrastructure-services',
          icon: '🏗️',
          features: ['Cloud Architecture', 'DevOps Automation', 'Performance Optimization', 'Scalability Solutions']
        },
        {
          name: 'AI-Powered IT Asset Management',
          description: 'Intelligent management of IT resources and assets.',
          href: '/ai-powered-it-asset-management',
          icon: '💻',
          features: ['Asset Tracking', 'Lifecycle Management', 'Cost Optimization', 'Performance Monitoring']
        }
      ]
    },
    {
      title: 'Quantum & Advanced Technologies',
      description: 'Harness cutting-edge technologies for complex problem-solving.',
      services: [
        {
          name: 'Quantum Computing Services',
          description: 'Quantum solutions for optimization and research.',
          href: '/quantum-services',
          icon: '⚛️',
          features: ['Quantum Algorithms', 'Optimization Problems', 'Research & Development', 'Quantum Consulting']
        },
        {
          name: 'Space Technology Solutions',
          description: 'Innovative space technology and infrastructure.',
          href: '/space-tech',
          icon: '🚀',
          features: ['Satellite Technology', 'Space Infrastructure', 'Innovation Research', 'Technology Partnerships']
        }
      ]
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and optimize workflows for maximum productivity.',
      icon: '📈'
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs through intelligent automation and optimization.',
      icon: '💰'
    },
    {
      title: 'Scalability',
      description: 'Scale your operations seamlessly as your business grows.',
      icon: '📊'
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with cutting-edge AI technology.',
      icon: '🏆'
    },
    {
      title: 'Risk Mitigation',
      description: 'Minimize risks through intelligent monitoring and predictive analytics.',
      icon: '🛡️'
    },
    {
      title: 'Innovation Leadership',
      description: 'Lead your industry with pioneering technology solutions.',
      icon: '🌟'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive AI-powered technology solutions designed to transform your business operations and drive unprecedented growth.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{category.title}</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600">
              Discover the benefits of partnering with us for your technology transformation.
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-0cd1
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
            {/* Cloud Infrastructure */}
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-600 hover:border-green-500 transition-all">
              <div className="text-3xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold mb-3">Cloud Infrastructure</h3>
              <p className="text-zinc-300 mb-4">AWS, Azure, and Google Cloud setup, migration, and optimization services.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Starting Price:</span>
                  <span className="text-green-400">$150/hour</span>
                </div>
                <div className="flex justify-between">
                  <span>Project Range:</span>
                  <span className="text-yellow-400">$5K - $50K</span>
                </div>
              </div>
              <a href="/services/it" className="block mt-4 text-green-400 hover:text-green-300 text-sm">
                Learn More →
              </a>
            </div>

            {/* DevOps & CI/CD */}
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-600 hover:border-green-500 transition-all">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3">DevOps & CI/CD</h3>
              <p className="text-zinc-300 mb-4">Automated deployment pipelines, infrastructure as code, and DevOps culture implementation.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Starting Price:</span>
                  <span className="text-green-400">$175/hour</span>
                </div>
                <div className="flex justify-between">
                  <span>Project Range:</span>
                  <span className="text-yellow-400">$8K - $75K</span>
                </div>
              </div>
              <a href="/services/it" className="block mt-4 text-green-400 hover:text-green-300 text-sm">
                Learn More →
              </a>
            </div>

            {/* Cybersecurity */}
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-600 hover:border-green-500 transition-all">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3">Cybersecurity</h3>
              <p className="text-zinc-300 mb-4">Security audits, penetration testing, compliance frameworks, and incident response planning.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Starting Price:</span>
                  <span className="text-green-400">$200/hour</span>
                </div>
                <div className="flex justify-between">
                  <span>Project Range:</span>
                  <span className="text-yellow-400">$10K - $100K</span>
                </div>
              </div>
              <a href="/services/it" className="block mt-4 text-green-400 hover:text-green-300 text-sm">
                Learn More →
              </a>
            </div>

            {/* Data Engineering */}
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-600 hover:border-green-500 transition-all">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-3">Data Engineering</h3>
              <p className="text-zinc-300 mb-4">Data pipelines, warehousing, ETL processes, and business intelligence solutions.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Starting Price:</span>
                  <span className="text-green-400">$160/hour</span>
                </div>
                <div className="flex justify-between">
                  <span>Project Range:</span>
                  <span className="text-yellow-400">$15K - $150K</span>
                </div>
              </div>
              <a href="/services/it" className="block mt-4 text-green-400 hover:text-green-300 text-sm">
                Learn More →
              </a>
            </div>

            {/* API Development */}
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-600 hover:border-green-500 transition-all">
              <div className="text-3xl mb-4">🔌</div>
              <h3 className="text-xl font-semibold mb-3">API Development</h3>
              <p className="text-zinc-300 mb-4">RESTful APIs, GraphQL, microservices architecture, and API gateway solutions.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Starting Price:</span>
                  <span className="text-green-400">$140/hour</span>
                </div>
                <div className="flex justify-between">
                  <span>Project Range:</span>
                  <span className="text-yellow-400">$8K - $80K</span>
                </div>
              </div>
              <a href="/services/it" className="block mt-4 text-green-400 hover:text-green-300 text-sm">
                Learn More →
              </a>
            </div>

            {/* Digital Transformation */}
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-600 hover:border-green-500 transition-all">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-3">Digital Transformation</h3>
              <p className="text-zinc-300 mb-4">End-to-end digital transformation consulting, legacy system modernization, and change management.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Starting Price:</span>
                  <span className="text-green-400">$250/hour</span>
                </div>
                <div className="flex justify-between">
                  <span>Project Range:</span>
                  <span className="text-yellow-400">$25K - $500K</span>
                </div>
              </div>
              <a href="/services/it" className="block mt-4 text-green-400 hover:text-green-300 text-sm">
                Learn More →
              </a>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/services/it" className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View All IT Services
            </a>
      {/* Blockchain & Web3 Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">⛓️ Blockchain & Web3 Services</h2>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
              Next-generation blockchain solutions, DeFi platforms, NFT marketplaces, and Web3 infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* DeFi Platform Development */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-500 transition-all">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3">DeFi Platform Development</h3>
              <p className="text-zinc-300 mb-4">Build next-generation decentralized finance platforms with lending, borrowing, and yield farming.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Starting Price:</span>
                  <span className="text-green-400">$25K</span>
                </div>
                <div className="flex justify-between">
                  <span>Project Range:</span>
                  <span className="text-yellow-400">$25K - $200K+</span>
                </div>
              </div>
              <a href="/services/blockchain" className="block mt-4 text-orange-400 hover:text-orange-300 text-sm">
                Learn More →
              </a>
            </div>

            {/* NFT Marketplace */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-500 transition-all">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-3">NFT Marketplace Development</h3>
              <p className="text-zinc-300 mb-4">Create cutting-edge NFT marketplaces with multi-chain support and advanced features.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Starting Price:</span>
                  <span className="text-green-400">$15K</span>
                </div>
                <div className="flex justify-between">
                  <span>Project Range:</span>
                  <span className="text-yellow-400">$15K - $100K+</span>
                </div>
              </div>
              <a href="/services/blockchain" className="block mt-4 text-orange-400 hover:text-orange-300 text-sm">
                Learn More →
              </a>
            </div>

            {/* Smart Contract Development */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-500 transition-all">
              <div className="text-3xl mb-4">📜</div>
              <h3 className="text-xl font-semibold mb-3">Smart Contract Development</h3>
              <p className="text-zinc-300 mb-4">Secure, audited smart contracts for any blockchain use case with comprehensive testing.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Starting Price:</span>
                  <span className="text-green-400">$5K</span>
                </div>
                <div className="flex justify-between">
                  <span>Project Range:</span>
                  <span className="text-yellow-400">$5K - $50K+</span>
                </div>
              </div>
              <a href="/services/blockchain" className="block mt-4 text-orange-400 hover:text-orange-300 text-sm">
                Learn More →
              </a>
            </div>

            {/* Web3 Infrastructure */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-500 transition-all">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-3">Web3 Infrastructure</h3>
              <p className="text-zinc-300 mb-4">Build robust Web3 infrastructure with node management, API gateways, and decentralized storage.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Starting Price:</span>
                  <span className="text-green-400">$10K</span>
                </div>
                <div className="flex justify-between">
                  <span>Project Range:</span>
                  <span className="text-yellow-400">$10K - $100K+</span>
                </div>
              </div>
              <a href="/services/blockchain" className="block mt-4 text-orange-400 hover:text-orange-300 text-sm">
                Learn More →
              </a>
            </div>

            {/* DAO Development */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-500 transition-all">
              <div className="text-3xl mb-4">🏛️</div>
              <h3 className="text-xl font-semibold mb-3">DAO Development</h3>
              <p className="text-zinc-300 mb-4">Create sophisticated decentralized autonomous organizations with advanced governance tools.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Starting Price:</span>
                  <span className="text-green-400">$20K</span>
                </div>
                <div className="flex justify-between">
                  <span>Project Range:</span>
                  <span className="text-yellow-400">$20K - $150K+</span>
                </div>
              </div>
              <a href="/services/blockchain" className="block mt-4 text-orange-400 hover:text-orange-300 text-sm">
                Learn More →
              </a>
            </div>

            {/* Blockchain Consulting */}
            <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-500 transition-all">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-3">Blockchain Consulting</h3>
              <p className="text-zinc-300 mb-4">Strategic blockchain consulting including technology selection, architecture design, and compliance.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Consulting Rate:</span>
                  <span className="text-green-400">$250/hour</span>
                </div>
                <div className="flex justify-between">
                  <span>Strategy Package:</span>
                  <span className="text-yellow-400">$25K - $75K</span>
                </div>
              </div>
              <a href="/services/blockchain" className="block mt-4 text-orange-400 hover:text-orange-300 text-sm">
                Learn More →
              </a>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/services/blockchain" className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Blockchain Services
            </a>
=======
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-0cd1
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Micro SAAS Services Section */}
      <section className="py-20 bg-zinc-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">🚀 Micro SAAS Services</h2>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
              Ready-to-deploy software solutions for specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Zion Marketplace */}
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-600 hover:border-purple-500 transition-all">
              <div className="text-3xl mb-4">🛒</div>
              <h3 className="text-xl font-semibold mb-3">Zion Marketplace</h3>
              <p className="text-zinc-300 mb-4">Complete marketplace solution with job boards, talent matching, and project management.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Starting Price:</span>
                  <span className="text-green-400">$399/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Setup Fee:</span>
                  <span className="text-yellow-400">$2,500</span>
                </div>
              </div>
              <a href="/services/saas" className="block mt-4 text-purple-400 hover:text-purple-300 text-sm">
                Learn More →
              </a>
            </div>

            {/* Resume AI Builder */}
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-600 hover:border-purple-500 transition-all">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-3">Resume AI Builder</h3>
              <p className="text-zinc-300 mb-4">AI-powered resume creation, optimization, and ATS-friendly formatting with industry insights.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Starting Price:</span>
                  <span className="text-green-400">$99/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Setup Fee:</span>
                  <span className="text-yellow-400">$500</span>
                </div>
              </div>
              <a href="/services/saas" className="block mt-4 text-purple-400 hover:text-purple-300 text-sm">
                Learn More →
              </a>
            </div>

            {/* Token Rewards System */}
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-600 hover:border-purple-500 transition-all">
              <div className="text-3xl mb-4">🪙</div>
              <h3 className="text-xl font-semibold mb-3">Token Rewards System</h3>
              <p className="text-zinc-300 mb-4">Blockchain-based loyalty and rewards platform with gamification and community engagement.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Starting Price:</span>
                  <span className="text-green-400">$299/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Setup Fee:</span>
                  <span className="text-yellow-400">$3,000</span>
                </div>
              </div>
              <a href="/services/saas" className="block mt-4 text-purple-400 hover:text-purple-300 text-sm">
                Learn More →
              </a>
            </div>

            {/* KYC/AML Verification */}
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-600 hover:border-purple-500 transition-all">
              <div className="text-3xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-3">KYC/AML Verification</h3>
              <p className="text-zinc-300 mb-4">Compliance-ready identity verification and anti-money laundering screening system.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Starting Price:</span>
                  <span className="text-green-400">$199/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Setup Fee:</span>
                  <span className="text-yellow-400">$1,500</span>
                </div>
              </div>
              <a href="/services/saas" className="block mt-4 text-purple-400 hover:text-purple-300 text-sm">
                Learn More →
              </a>
            </div>

            {/* DAO Governance Platform */}
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-600 hover:border-purple-500 transition-all">
              <div className="text-3xl mb-4">🗳️</div>
              <h3 className="text-xl font-semibold mb-3">DAO Governance Platform</h3>
              <p className="text-zinc-300 mb-4">Decentralized governance tools with proposal creation, voting mechanisms, and treasury management.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Starting Price:</span>
                  <span className="text-green-400">$449/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Setup Fee:</span>
                  <span className="text-yellow-400">$4,000</span>
                </div>
              </div>
              <a href="/services/saas" className="block mt-4 text-purple-400 hover:text-purple-300 text-sm">
                Learn More →
              </a>
            </div>

            {/* Zion Academy */}
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-600 hover:border-purple-500 transition-all">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-3">Zion Academy</h3>
              <p className="text-zinc-300 mb-4">Learning management system with AI-powered course creation, assessments, and skill tracking.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Starting Price:</span>
                  <span className="text-green-400">$179/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Setup Fee:</span>
                  <span className="text-yellow-400">$1,200</span>
                </div>
              </div>
              <a href="/services/saas" className="block mt-4 text-purple-400 hover:text-purple-300 text-sm">
                Learn More →
              </a>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/services/saas" className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View All SAAS Services
            </a>
=======
      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">
              A proven methodology for successful technology implementation and transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Analysis',
                description: 'We analyze your current systems and identify opportunities for improvement.'
              },
              {
                step: '02',
                title: 'Solution Design',
                description: 'Our experts design a customized solution tailored to your specific needs.'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'We implement the solution with minimal disruption to your operations.'
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Continuous monitoring and optimization to ensure maximum performance.'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-0cd1
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI, IT, blockchain, and SAAS solutions can drive your digital transformation and business growth.
          </p>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+13024640950" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg">
                📞 Call +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg">
                ✉️ Schedule Consultation
              </a>
            </div>
            <p className="text-blue-100 text-sm">
              📍 364 E Main St STE 1008, Middletown DE 19709 | 🌐 https://ziontechgroup.com
            </p>
=======
      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can transform your business and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-0cd1
