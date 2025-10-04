import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

const HomePage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech Group",
    "url": "https://zion.app",
    "description": "Revolutionary AI solutions for enterprise transformation",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://zion.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <SEOHead
        title="Revolutionary AI Solutions for Enterprise | Zion Tech Group"
        description="Transform your business with Meta-Cognitive AI, Quantum-Neural Networks, and Autonomous Operations. Advanced AI solutions for enterprise digital transformation."
        keywords="AI solutions, enterprise AI, machine learning, artificial intelligence, digital transformation, quantum computing, autonomous operations, meta-cognitive AI, business automation"
        canonical="https://zion.app"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionary AI solutions for enterprise. Transform your business with Meta-Cognitive AI, 
              Quantum-Neural Networks, and Autonomous Operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label="Get started with our AI solutions"
              >
                Get Started Today
              </Link>
              <Link 
                to="/services"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label="Explore our comprehensive services"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50" aria-labelledby="services-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI and technology solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Services */}
            <article className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Services</h3>
              <p className="text-gray-600 mb-4">
                Advanced artificial intelligence solutions including machine learning, 
                natural language processing, and predictive analytics.
              </p>
              <div className="space-y-2">
                <Link 
                  to="/services/ai-services"
                  className="block text-blue-600 font-semibold hover:text-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                  aria-label="Learn more about our AI services"
                >
                  AI Services →
                </Link>
                <Link 
                  to="/services/advanced-ai"
                  className="block text-blue-600 font-semibold hover:text-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                  aria-label="Discover our advanced AI solutions"
                >
                  Advanced AI Solutions →
                </Link>
              </div>
            </article>

            {/* Micro SaaS */}
            <article className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Micro SaaS</h3>
              <p className="text-gray-600 mb-4">
                Scalable software solutions designed to solve specific business problems 
                and grow with your business needs.
              </p>
              <div className="space-y-2">
                <Link 
                  to="/services/micro-saas"
                  className="block text-green-600 font-semibold hover:text-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded"
                  aria-label="Learn more about our Micro SaaS solutions"
                >
                  Micro SaaS →
                </Link>
                <Link 
                  to="/services/custom-solutions"
                  className="block text-green-600 font-semibold hover:text-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded"
                  aria-label="Explore our custom solutions"
                >
                  Custom Solutions →
                </Link>
              </div>
            </article>

            {/* Enterprise Solutions */}
            <article className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise Solutions</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive technology solutions for large organizations, including 
                cloud migration, digital transformation, and enterprise AI.
              </p>
              <div className="space-y-2">
                <Link 
                  to="/services/enterprise"
                  className="block text-purple-600 font-semibold hover:text-purple-800 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded"
                  aria-label="Discover our enterprise solutions"
                >
                  Enterprise Solutions →
                </Link>
                <Link 
                  to="/services/consulting"
                  className="block text-purple-600 font-semibold hover:text-purple-800 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded"
                  aria-label="Learn about our consulting services"
                >
                  Consulting Services →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver measurable results through innovative technology solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">99%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI and technology solutions can drive your business forward.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Start Your Project Today
          </Link>
        </div>
      </section>
      </div>
    </>
  )
}

export default HomePage