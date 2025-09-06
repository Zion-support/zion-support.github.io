import Link from 'next/link';

export default function AIAutomationServicesPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">AI Automation Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your business operations with intelligent automation that learns, adapts, and scales with your needs.
          </p>
        </div>

        {/* Overview Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Intelligent Automation for the Modern Enterprise</h2>
              <p className="text-lg text-gray-300 mb-6">
                Our AI automation services combine machine learning, natural language processing, and robotic process automation to create intelligent systems that handle complex business processes with human-like understanding.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                From customer service to supply chain management, our solutions adapt to your business needs and continuously improve performance through advanced analytics and feedback loops.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Started
                </Link>
                <Link href="/case-studies" className="btn-secondary">
                  View Case Studies
                </Link>
              </div>
            </div>
            <div className="card bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 p-8">
              <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  24/7 operational efficiency
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Reduced operational costs by 40-60%
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Improved accuracy and consistency
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Scalable and adaptable solutions
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our AI Automation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Process Automation</h3>
              <p className="text-gray-300 mb-4">
                Automate repetitive tasks and workflows with intelligent bots that learn from your processes.
              </p>
              <Link href="/contact" className="text-blue-400 hover:text-blue-300">
                Learn More →
              </Link>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Service AI</h3>
              <p className="text-gray-300 mb-4">
                Deploy intelligent chatbots and virtual assistants for 24/7 customer support.
              </p>
              <Link href="/contact" className="text-blue-400 hover:text-blue-300">
                Learn More →
              </Link>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Intelligence</h3>
              <p className="text-gray-300 mb-4">
                Transform raw data into actionable insights with AI-powered analytics and reporting.
              </p>
              <Link href="/contact" className="text-blue-400 hover:text-blue-300">
                Learn More →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Automate Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how AI automation can transform your operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Start Your Automation Journey
            </Link>
            <Link href="/case-studies" className="btn-secondary text-lg px-8 py-4">
              View Success Stories
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}