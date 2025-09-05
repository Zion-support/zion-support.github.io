import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white&quot;>
      {/* Hero Section */}
      <div className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 py-20&quot;>
        <div className=&quot;container mx-auto px-6 text-center&quot;>
          <h1 className=&quot;text-5xl font-bold mb-6&quot;>Zion Tech Group Services</h1>
          <p className=&quot;text-xl text-blue-100 max-w-3xl mx-auto&quot;>
            Comprehensive technology solutions for modern businesses. From AI-powered automation to enterprise IT infrastructure.
          </p>
          <div className=&quot;mt-8&quot;>
            <a href=&quot;tel:+13024640950&quot; className=&quot;bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors mr-4&quot;>
              Call Now: +1 302 464 0950
            </Link>
            <a href=&quot;mailto:kleber@ziontechgroup.com&quot; className=&quot;border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors&quot;>
              Get Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className=&quot;bg-zinc-800 py-4&quot;>
        <div className=&quot;container mx-auto px-6 text-center text-sm&quot;>
          <span className=&quot;mr-8&quot;>📱 +1 302 464 0950</span>
          <span className=&quot;mr-8&quot;>✉️ kleber@ziontechgroup.com</span>
          <span>📍 364 E Main St STE 1008, Middletown DE 19709</span>
        </div>
      </div>

      {/* AI Services Section */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto px-6&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-4xl font-bold mb-4&quot;>🤖 AI Services & Solutions</h2>
            <p className=&quot;text-xl text-zinc-300 max-w-2xl mx-auto&quot;>
              Cutting-edge artificial intelligence solutions to transform your business operations
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {/* ZionGPT Core */}
            <div className=&quot;bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-blue-500 transition-all&quot;>
              <div className=&quot;text-3xl mb-4&quot;>🧠</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>ZionGPT Core</h3>
              <p className=&quot;text-zinc-300 mb-4&quot;>Enterprise-grade AI assistant with custom knowledge base integration and workflow automation.</p>
              <div className=&quot;space-y-2 text-sm&quot;>
                <div className=&quot;flex justify-between&quot;>
                  <span>Starting Price:</span>
                  <span className=&quot;text-green-400&quot;>$299/month</span>
                </div>
                <div className=&quot;flex justify-between&quot;>
                  <span>Setup Fee:</span>
                  <span className=&quot;text-yellow-400&quot;>$1,500</span>
                </div>
              </div>
              <a href=&quot;/services/ai&quot; className=&quot;block mt-4 text-blue-400 hover:text-blue-300 text-sm&quot;>
                Learn More →
              </Link>
            </div>

            {/* AI Content Generation */}
            <div className=&quot;bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-blue-500 transition-all&quot;>
              <div className=&quot;text-3xl mb-4&quot;>✍️</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>AI Content Generation</h3>
              <p className=&quot;text-zinc-300 mb-4&quot;>Automated content creation for blogs, social media, marketing materials, and technical documentation.</p>
              <div className=&quot;space-y-2 text-sm&quot;>
                <div className=&quot;flex justify-between&quot;>
                  <span>Starting Price:</span>
                  <span className=&quot;text-green-400&quot;>$199/month</span>
                </div>
                <div className=&quot;flex justify-between&quot;>
                  <span>Setup Fee:</span>
                  <span className=&quot;text-yellow-400&quot;>$800</span>
                </div>
              </div>
              <a href=&quot;/services/ai&quot; className=&quot;block mt-4 text-blue-400 hover:text-blue-300 text-sm&quot;>
                Learn More →
              </Link>
            </div>

            {/* AI-Powered Analytics */}
            <div className=&quot;bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-blue-500 transition-all&quot;>
              <div className=&quot;text-3xl mb-4&quot;>📊</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>AI-Powered Analytics</h3>
              <p className=&quot;text-zinc-300 mb-4&quot;>Predictive analytics, trend forecasting, and intelligent business insights powered by machine learning.</p>
              <div className=&quot;space-y-2 text-sm&quot;>
                <div className=&quot;flex justify-between&quot;>
                  <span>Starting Price:</span>
                  <span className=&quot;text-green-400&quot;>$399/month</span>
                </div>
                <div className=&quot;flex justify-between&quot;>
                  <span>Setup Fee:</span>
                  <span className=&quot;text-yellow-400&quot;>$2,000</span>
                </div>
              </div>
              <a href=&quot;/services/ai&quot; className=&quot;block mt-4 text-blue-400 hover:text-blue-300 text-sm&quot;>
                Learn More →
              </Link>
            </div>

            {/* AI Customer Support */}
            <div className=&quot;bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-blue-500 transition-all&quot;>
              <div className=&quot;text-3xl mb-4&quot;>💬</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>AI Customer Support</h3>
              <p className=&quot;text-zinc-300 mb-4&quot;>24/7 intelligent chatbots and virtual assistants for customer service automation.</p>
              <div className=&quot;space-y-2 text-sm&quot;>
                <div className=&quot;flex justify-between&quot;>
                  <span>Starting Price:</span>
                  <span className=&quot;text-green-400&quot;>$249/month</span>
                </div>
                <div className=&quot;flex justify-between&quot;>
                  <span>Setup Fee:</span>
                  <span className=&quot;text-yellow-400&quot;>$1,200</span>
                </div>
              </div>
              <a href=&quot;/services/ai&quot; className=&quot;block mt-4 text-blue-400 hover:text-blue-300 text-sm&quot;>
                Learn More →
              </Link>
            </div>

            {/* AI Process Automation */}
            <div className=&quot;bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-blue-500 transition-all&quot;>
              <div className=&quot;text-3xl mb-4&quot;>⚙️</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>AI Process Automation</h3>
              <p className=&quot;text-zinc-300 mb-4&quot;>Intelligent workflow automation, document processing, and business process optimization.</p>
              <div className=&quot;space-y-2 text-sm&quot;>
                <div className=&quot;flex justify-between&quot;>
                  <span>Starting Price:</span>
                  <span className=&quot;text-green-400&quot;>$349/month</span>
                </div>
                <div className=&quot;flex justify-between&quot;>
                  <span>Setup Fee:</span>
                  <span className=&quot;text-yellow-400&quot;>$1,800</span>
                </div>
              </div>
              <a href=&quot;/services/ai&quot; className=&quot;block mt-4 text-blue-400 hover:text-blue-300 text-sm&quot;>
                Learn More →
              </Link>
            </div>

            {/* AI Security & Compliance */}
            <div className=&quot;bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-blue-500 transition-all&quot;>
              <div className=&quot;text-3xl mb-4&quot;>🔒</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>AI Security & Compliance</h3>
              <p className=&quot;text-zinc-300 mb-4&quot;>AI-powered threat detection, compliance monitoring, and security automation for enterprise environments.</p>
              <div className=&quot;space-y-2 text-sm&quot;>
                <div className=&quot;flex justify-between&quot;>
                  <span>Starting Price:</span>
                  <span className=&quot;text-green-400&quot;>$499/month</span>
                </div>
                <div className=&quot;flex justify-between&quot;>
                  <span>Setup Fee:</span>
                  <span className=&quot;text-yellow-400&quot;>$2,500</span>
                </div>
              </div>
              <a href=&quot;/services/ai&quot; className=&quot;block mt-4 text-blue-400 hover:text-blue-300 text-sm&quot;>
                Learn More →
              </Link>
            </div>
          </div>
          
          <div className=&quot;text-center mt-12&quot;>
            <a href=&quot;/services/ai&quot; className=&quot;inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors&quot;>
              View All AI Services
            </Link>
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className=&quot;py-20 bg-zinc-800&quot;>
        <div className=&quot;container mx-auto px-6&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-4xl font-bold mb-4&quot;>💻 IT Services & Solutions</h2>
            <p className=&quot;text-xl text-zinc-300 max-w-2xl mx-auto&quot;>
              Comprehensive IT infrastructure, cloud solutions, and digital transformation services
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {/* Cloud Infrastructure */}
            <div className=&quot;bg-zinc-900 rounded-xl p-6 border border-zinc-600 hover:border-green-500 transition-all&quot;>
              <div className=&quot;text-3xl mb-4&quot;>☁️</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Cloud Infrastructure</h3>
              <p className=&quot;text-zinc-300 mb-4&quot;>AWS, Azure, and Google Cloud setup, migration, and optimization services.</p>
              <div className=&quot;space-y-2 text-sm&quot;>
                <div className=&quot;flex justify-between&quot;>
                  <span>Starting Price:</span>
                  <span className=&quot;text-green-400&quot;>$150/hour</span>
                </div>
                <div className=&quot;flex justify-between&quot;>
                  <span>Project Range:</span>
                  <span className=&quot;text-yellow-400&quot;>$5K - $50K</span>
                </div>
              </div>
              <a href=&quot;/services/it&quot; className=&quot;block mt-4 text-green-400 hover:text-green-300 text-sm&quot;>
                Learn More →
              </Link>
            </div>

            {/* DevOps & CI/CD */}
            <div className=&quot;bg-zinc-900 rounded-xl p-6 border border-zinc-600 hover:border-green-500 transition-all&quot;>
              <div className=&quot;text-3xl mb-4&quot;>🚀</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>DevOps & CI/CD</h3>
              <p className=&quot;text-zinc-300 mb-4&quot;>Automated deployment pipelines, infrastructure as code, and DevOps culture implementation.</p>
              <div className=&quot;space-y-2 text-sm&quot;>
                <div className=&quot;flex justify-between&quot;>
                  <span>Starting Price:</span>
                  <span className=&quot;text-green-400&quot;>$175/hour</span>
                </div>
                <div className=&quot;flex justify-between&quot;>
                  <span>Project Range:</span>
                  <span className=&quot;text-yellow-400&quot;>$8K - $75K</span>
                </div>
              </div>
              <a href=&quot;/services/it&quot; className=&quot;block mt-4 text-green-400 hover:text-green-300 text-sm&quot;>
                Learn More →
              </Link>
            </div>

            {/* Cybersecurity */}
            <div className=&quot;bg-zinc-900 rounded-xl p-6 border border-zinc-600 hover:border-green-500 transition-all&quot;>
              <div className=&quot;text-3xl mb-4&quot;>🛡️</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Cybersecurity</h3>
              <p className=&quot;text-zinc-300 mb-4&quot;>Security audits, penetration testing, compliance frameworks, and incident response planning.</p>
              <div className=&quot;space-y-2 text-sm&quot;>
                <div className=&quot;flex justify-between&quot;>
                  <span>Starting Price:</span>
                  <span className=&quot;text-green-400&quot;>$200/hour</span>
                </div>
                <div className=&quot;flex justify-between&quot;>
                  <span>Project Range:</span>
                  <span className=&quot;text-yellow-400&quot;>$10K - $100K</span>
                </div>
              </div>
              <a href=&quot;/services/it&quot; className=&quot;block mt-4 text-green-400 hover:text-green-300 text-sm&quot;>
                Learn More →
              </Link>
            </div>

            {/* Data Engineering */}
            <div className=&quot;bg-zinc-900 rounded-xl p-6 border border-zinc-600 hover:border-green-500 transition-all&quot;>
              <div className=&quot;text-3xl mb-4&quot;>📈</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Data Engineering</h3>
              <p className=&quot;text-zinc-300 mb-4&quot;>Data pipelines, warehousing, ETL processes, and business intelligence solutions.</p>
              <div className=&quot;space-y-2 text-sm&quot;>
                <div className=&quot;flex justify-between&quot;>
                  <span>Starting Price:</span>
                  <span className=&quot;text-green-400&quot;>$160/hour</span>
                </div>
                <div className=&quot;flex justify-between&quot;>
                  <span>Project Range:</span>
                  <span className=&quot;text-yellow-400&quot;>$15K - $150K</span>
                </div>
              </div>
              <a href=&quot;/services/it&quot; className=&quot;block mt-4 text-green-400 hover:text-green-300 text-sm&quot;>
                Learn More →
              </Link>
            </div>

            {/* API Development */}
            <div className=&quot;bg-zinc-900 rounded-xl p-6 border border-zinc-600 hover:border-green-500 transition-all&quot;>
              <div className=&quot;text-3xl mb-4&quot;>🔌</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>API Development</h3>
              <p className=&quot;text-zinc-300 mb-4&quot;>RESTful APIs, GraphQL, microservices architecture, and API gateway solutions.</p>
              <div className=&quot;space-y-2 text-sm&quot;>
                <div className=&quot;flex justify-between&quot;>
                  <span>Starting Price:</span>
                  <span className=&quot;text-green-400&quot;>$140/hour</span>
                </div>
                <div className=&quot;flex justify-between&quot;>
                  <span>Project Range:</span>
                  <span className=&quot;text-yellow-400&quot;>$8K - $80K</span>
                </div>
              </div>
              <a href=&quot;/services/it&quot; className=&quot;block mt-4 text-green-400 hover:text-green-300 text-sm&quot;>
                Learn More →
              </Link>
            </div>

            {/* Digital Transformation */}
            <div className=&quot;bg-zinc-900 rounded-xl p-6 border border-zinc-600 hover:border-green-500 transition-all&quot;>
              <div className=&quot;text-3xl mb-4&quot;>🔄</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Digital Transformation</h3>
              <p className=&quot;text-zinc-300 mb-4&quot;>End-to-end digital transformation consulting, legacy system modernization, and change management.</p>
              <div className=&quot;space-y-2 text-sm&quot;>
                <div className=&quot;flex justify-between&quot;>
                  <span>Starting Price:</span>
                  <span className=&quot;text-green-400&quot;>$250/hour</span>
                </div>
                <div className=&quot;flex justify-between&quot;>
                  <span>Project Range:</span>
                  <span className=&quot;text-yellow-400&quot;>$25K - $500K</span>
                </div>
              </div>
              <a href=&quot;/services/it&quot; className=&quot;block mt-4 text-green-400 hover:text-green-300 text-sm&quot;>
                Learn More →
              </Link>
            </div>
          </div>
          
          <div className=&quot;text-center mt-12&quot;>
            <a href=&quot;/services/it&quot; className=&quot;inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors&quot;>
              View All IT Services
            </Link>
          </div>
        </div>
      </section>

      {/* Blockchain & Web3 Services Section */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;container mx-auto px-6&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-4xl font-bold mb-4&quot;>⛓️ Blockchain & Web3 Services</h2>
            <p className=&quot;text-xl text-zinc-300 max-w-2xl mx-auto&quot;>
              Next-generation blockchain solutions, DeFi platforms, NFT marketplaces, and Web3 infrastructure
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {/* DeFi Platform Development */}
            <div className=&quot;bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-500 transition-all&quot;>
              <div className=&quot;text-3xl mb-4&quot;>💰</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>DeFi Platform Development</h3>
              <p className=&quot;text-zinc-300 mb-4&quot;>Build next-generation decentralized finance platforms with lending, borrowing, and yield farming.</p>
              <div className=&quot;space-y-2 text-sm&quot;>
                <div className=&quot;flex justify-between&quot;>
                  <span>Starting Price:</span>
                  <span className=&quot;text-green-400&quot;>$25K</span>
                </div>
                <div className=&quot;flex justify-between&quot;>
                  <span>Project Range:</span>
                  <span className=&quot;text-yellow-400&quot;>$25K - $200K+</span>
                </div>
              </div>
              <a href=&quot;/services/blockchain&quot; className=&quot;block mt-4 text-orange-400 hover:text-orange-300 text-sm&quot;>
                Learn More →
              </Link>
            </div>

            {/* NFT Marketplace */}
            <div className=&quot;bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-500 transition-all&quot;>
              <div className=&quot;text-3xl mb-4&quot;>🎨</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>NFT Marketplace Development</h3>
              <p className=&quot;text-zinc-300 mb-4&quot;>Create cutting-edge NFT marketplaces with multi-chain support and advanced features.</p>
              <div className=&quot;space-y-2 text-sm&quot;>
                <div className=&quot;flex justify-between&quot;>
                  <span>Starting Price:</span>
                  <span className=&quot;text-green-400&quot;>$15K</span>
                </div>
                <div className=&quot;flex justify-between&quot;>
                  <span>Project Range:</span>
                  <span className=&quot;text-yellow-400&quot;>$15K - $100K+</span>
                </div>
              </div>
              <a href=&quot;/services/blockchain&quot; className=&quot;block mt-4 text-orange-400 hover:text-orange-300 text-sm&quot;>
                Learn More →
              </Link>
            </div>

            {/* Smart Contract Development */}
            <div className=&quot;bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-500 transition-all&quot;>
              <div className=&quot;text-3xl mb-4&quot;>📜</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Smart Contract Development</h3>
              <p className=&quot;text-zinc-300 mb-4&quot;>Secure, audited smart contracts for any blockchain use case with comprehensive testing.</p>
              <div className=&quot;space-y-2 text-sm&quot;>
                <div className=&quot;flex justify-between&quot;>
                  <span>Starting Price:</span>
                  <span className=&quot;text-green-400&quot;>$5K</span>
                </div>
                <div className=&quot;flex justify-between&quot;>
                  <span>Project Range:</span>
                  <span className=&quot;text-yellow-400&quot;>$5K - $50K+</span>
                </div>
              </div>
              <a href=&quot;/services/blockchain&quot; className=&quot;block mt-4 text-orange-400 hover:text-orange-300 text-sm&quot;>
                Learn More →
              </Link>
            </div>

            {/* Web3 Infrastructure */}
            <div className=&quot;bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-500 transition-all&quot;>
              <div className=&quot;text-3xl mb-4&quot;>🌐</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Web3 Infrastructure</h3>
              <p className=&quot;text-zinc-300 mb-4&quot;>Build robust Web3 infrastructure with node management, API gateways, and decentralized storage.</p>
              <div className=&quot;space-y-2 text-sm&quot;>
                <div className=&quot;flex justify-between&quot;>
                  <span>Starting Price:</span>
                  <span className=&quot;text-green-400&quot;>$10K</span>
                </div>
                <div className=&quot;flex justify-between&quot;>
                  <span>Project Range:</span>
                  <span className=&quot;text-yellow-400&quot;>$10K - $100K+</span>
                </div>
              </div>
              <a href=&quot;/services/blockchain&quot; className=&quot;block mt-4 text-orange-400 hover:text-orange-300 text-sm&quot;>
                Learn More →
              </Link>
            </div>

            {/* DAO Development */}
            <div className=&quot;bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-500 transition-all&quot;>
              <div className=&quot;text-3xl mb-4&quot;>🏛️</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>DAO Development</h3>
              <p className=&quot;text-zinc-300 mb-4&quot;>Create sophisticated decentralized autonomous organizations with advanced governance tools.</p>
              <div className=&quot;space-y-2 text-sm&quot;>
                <div className=&quot;flex justify-between&quot;>
                  <span>Starting Price:</span>
                  <span className=&quot;text-green-400&quot;>$20K</span>
                </div>
                <div className=&quot;flex justify-between&quot;>
                  <span>Project Range:</span>
                  <span className=&quot;text-yellow-400&quot;>$20K - $150K+</span>
                </div>
              </div>
              <a href=&quot;/services/blockchain&quot; className=&quot;block mt-4 text-orange-400 hover:text-orange-300 text-sm&quot;>
                Learn More →
              </Link>
            </div>

            {/* Blockchain Consulting */}
            <div className=&quot;bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-orange-500 transition-all&quot;>
              <div className=&quot;text-3xl mb-4&quot;>💡</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Blockchain Consulting</h3>
              <p className=&quot;text-zinc-300 mb-4&quot;>Strategic blockchain consulting including technology selection, architecture design, and compliance.</p>
              <div className=&quot;space-y-2 text-sm&quot;>
                <div className=&quot;flex justify-between&quot;>
                  <span>Consulting Rate:</span>
                  <span className=&quot;text-green-400&quot;>$250/hour</span>
                </div>
                <div className=&quot;flex justify-between&quot;>
                  <span>Strategy Package:</span>
                  <span className=&quot;text-yellow-400&quot;>$25K - $75K</span>
                </div>
              </div>
              <a href=&quot;/services/blockchain&quot; className=&quot;block mt-4 text-orange-400 hover:text-orange-300 text-sm&quot;>
                Learn More →
              </Link>
            </div>
          </div>
          
          <div className=&quot;text-center mt-12&quot;>
            <a href=&quot;/services/blockchain&quot; className=&quot;inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors&quot;>
              View All Blockchain Services
            </Link>
          </div>
        </div>
      </section>

      {/* Micro SAAS Services Section */}
      <section className=&quot;py-20 bg-zinc-800&quot;>
        <div className=&quot;container mx-auto px-6&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-4xl font-bold mb-4&quot;>🚀 Micro SAAS Services</h2>
            <p className=&quot;text-xl text-zinc-300 max-w-2xl mx-auto&quot;>
              Ready-to-deploy software solutions for specific business needs
            </p>
          </div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {/* Zion Marketplace */}
            <div className=&quot;bg-zinc-900 rounded-xl p-6 border border-zinc-600 hover:border-purple-500 transition-all&quot;>
              <div className=&quot;text-3xl mb-4&quot;>🛒</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Zion Marketplace</h3>
              <p className=&quot;text-zinc-300 mb-4&quot;>Complete marketplace solution with job boards, talent matching, and project management.</p>
              <div className=&quot;space-y-2 text-sm&quot;>
                <div className=&quot;flex justify-between&quot;>
                  <span>Starting Price:</span>
                  <span className=&quot;text-green-400&quot;>$399/month</span>
                </div>
                <div className=&quot;flex justify-between&quot;>
                  <span>Setup Fee:</span>
                  <span className=&quot;text-yellow-400&quot;>$2,500</span>
                </div>
              </div>
              <a href=&quot;/services/saas&quot; className=&quot;block mt-4 text-purple-400 hover:text-purple-300 text-sm&quot;>
                Learn More →
              </Link>
            </div>

            {/* Resume AI Builder */}
            <div className=&quot;bg-zinc-900 rounded-xl p-6 border border-zinc-600 hover:border-purple-500 transition-all&quot;>
              <div className=&quot;text-3xl mb-4&quot;>📝</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Resume AI Builder</h3>
              <p className=&quot;text-zinc-300 mb-4&quot;>AI-powered resume creation, optimization, and ATS-friendly formatting with industry insights.</p>
              <div className=&quot;space-y-2 text-sm&quot;>
                <div className=&quot;flex justify-between&quot;>
                  <span>Starting Price:</span>
                  <span className=&quot;text-green-400&quot;>$99/month</span>
                </div>
                <div className=&quot;flex justify-between&quot;>
                  <span>Setup Fee:</span>
                  <span className=&quot;text-yellow-400&quot;>$500</span>
                </div>
              </div>
              <a href=&quot;/services/saas&quot; className=&quot;block mt-4 text-purple-400 hover:text-purple-300 text-sm&quot;>
                Learn More →
              </Link>
            </div>

            {/* Token Rewards System */}
            <div className=&quot;bg-zinc-900 rounded-xl p-6 border border-zinc-600 hover:border-purple-500 transition-all&quot;>
              <div className=&quot;text-3xl mb-4&quot;>🪙</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Token Rewards System</h3>
              <p className=&quot;text-zinc-300 mb-4&quot;>Blockchain-based loyalty and rewards platform with gamification and community engagement.</p>
              <div className=&quot;space-y-2 text-sm&quot;>
                <div className=&quot;flex justify-between&quot;>
                  <span>Starting Price:</span>
                  <span className=&quot;text-green-400&quot;>$299/month</span>
                </div>
                <div className=&quot;flex justify-between&quot;>
                  <span>Setup Fee:</span>
                  <span className=&quot;text-yellow-400&quot;>$3,000</span>
                </div>
              </div>
              <a href=&quot;/services/saas&quot; className=&quot;block mt-4 text-purple-400 hover:text-purple-300 text-sm&quot;>
                Learn More →
              </Link>
            </div>

            {/* KYC/AML Verification */}
            <div className=&quot;bg-zinc-900 rounded-xl p-6 border border-zinc-600 hover:border-purple-500 transition-all&quot;>
              <div className=&quot;text-3xl mb-4&quot;>✅</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>KYC/AML Verification</h3>
              <p className=&quot;text-zinc-300 mb-4&quot;>Compliance-ready identity verification and anti-money laundering screening system.</p>
              <div className=&quot;space-y-2 text-sm&quot;>
                <div className=&quot;flex justify-between&quot;>
                  <span>Starting Price:</span>
                  <span className=&quot;text-green-400&quot;>$199/month</span>
                </div>
                <div className=&quot;flex justify-between&quot;>
                  <span>Setup Fee:</span>
                  <span className=&quot;text-yellow-400&quot;>$1,500</span>
                </div>
              </div>
              <a href=&quot;/services/saas&quot; className=&quot;block mt-4 text-purple-400 hover:text-purple-300 text-sm&quot;>
                Learn More →
              </Link>
            </div>

            {/* DAO Governance Platform */}
            <div className=&quot;bg-zinc-900 rounded-xl p-6 border border-zinc-600 hover:border-purple-500 transition-all&quot;>
              <div className=&quot;text-3xl mb-4&quot;>🗳️</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>DAO Governance Platform</h3>
              <p className=&quot;text-zinc-300 mb-4&quot;>Decentralized governance tools with proposal creation, voting mechanisms, and treasury management.</p>
              <div className=&quot;space-y-2 text-sm&quot;>
                <div className=&quot;flex justify-between&quot;>
                  <span>Starting Price:</span>
                  <span className=&quot;text-green-400&quot;>$449/month</span>
                </div>
                <div className=&quot;flex justify-between&quot;>
                  <span>Setup Fee:</span>
                  <span className=&quot;text-yellow-400&quot;>$4,000</span>
                </div>
              </div>
              <a href=&quot;/services/saas&quot; className=&quot;block mt-4 text-purple-400 hover:text-purple-300 text-sm&quot;>
                Learn More →
              </Link>
            </div>

            {/* Zion Academy */}
            <div className=&quot;bg-zinc-900 rounded-xl p-6 border border-zinc-600 hover:border-purple-500 transition-all&quot;>
              <div className=&quot;text-3xl mb-4&quot;>🎓</div>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Zion Academy</h3>
              <p className=&quot;text-zinc-300 mb-4&quot;>Learning management system with AI-powered course creation, assessments, and skill tracking.</p>
              <div className=&quot;space-y-2 text-sm&quot;>
                <div className=&quot;flex justify-between&quot;>
                  <span>Starting Price:</span>
                  <span className=&quot;text-green-400&quot;>$179/month</span>
                </div>
                <div className=&quot;flex justify-between&quot;>
                  <span>Setup Fee:</span>
                  <span className=&quot;text-yellow-400&quot;>$1,200</span>
                </div>
              </div>
              <a href=&quot;/services/saas&quot; className=&quot;block mt-4 text-purple-400 hover:text-purple-300 text-sm&quot;>
                Learn More →
              </Link>
            </div>
          </div>
          
          <div className=&quot;text-center mt-12&quot;>
            <a href=&quot;/services/saas&quot; className=&quot;inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors&quot;>
              View All SAAS Services
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className=&quot;py-20 bg-gradient-to-r from-blue-600 to-purple-600&quot;>
        <div className=&quot;container mx-auto px-6 text-center&quot;>
          <h2 className=&quot;text-4xl font-bold mb-6&quot;>Ready to Transform Your Business?</h2>
          <p className=&quot;text-xl text-blue-100 mb-8 max-w-2xl mx-auto&quot;>
            Let's discuss how our AI, IT, blockchain, and SAAS solutions can drive your digital transformation and business growth.
          </p>
          <div className=&quot;space-y-4&quot;>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;>
              <a href=&quot;tel:+13024640950&quot; className=&quot;bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg&quot;>
                📞 Call +1 302 464 0950
              </Link>
              <a href=&quot;mailto:kleber@ziontechgroup.com&quot; className=&quot;border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg&quot;>
                ✉️ Schedule Consultation
              </Link>
            </div>
            <p className=&quot;text-blue-100 text-sm&quot;>
              📍 364 E Main St STE 1008, Middletown DE 19709 | 🌐 https://ziontechgroup.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}