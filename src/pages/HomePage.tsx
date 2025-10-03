import React from 'react';
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {/* content */}
  return (
  <div></div>
    <div className="min-h-screen"></div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20"></section>
        <div className="container mx-auto px-4 text-center"></div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Business with AI-Powered Solutions
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto"></p>
            Zion Tech Group delivers cutting-edge AI and IT solutions that drive innovation, 
            efficiency, and growth for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50"></section>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto"></p>
              Comprehensive technology solutions designed to accelerate your digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            {/* AI Services */}
            <div className="bg-white rounded-lg shadow-lg p-8"></div>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6"></div>
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Services</h3>
              <p className="text-gray-600 mb-6"></p>
                Advanced artificial intelligence solutions including machine learning, 
                natural language processing, and predictive analytics.
              </p>
              <div className="space-y-2"></div>
                <Link 
                  to="/services/ai-services"
                  className="block text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  AI Services →
                </Link>
                <Link 
                  to="/solutions/ai"
                  className="block text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  Advanced AI Solutions →
                </Link>
              </div>
            </div>

            {/* Micro SaaS */}
            <div className="bg-white rounded-lg shadow-lg p-8"></div>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6"></div>
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Micro SaaS</h3>
              <p className="text-gray-600 mb-6"></p>
                Scalable software-as-a-service solutions that adapt 
                and grow with your business needs.
              </p>
              <div className="space-y-2"></div>
                <Link 
                  to="/services/micro-saas"
                  className="block text-green-600 font-semibold hover:text-green-800 transition-colors"
                >
                  Micro SaaS →
                </Link>
                <Link 
                  to="/solutions/saas"
                  className="block text-green-600 font-semibold hover:text-green-800 transition-colors"
                >
                  Innovative Micro SaaS →
                </Link>
              </div>
            </div>

            {/* IT Services */}
            <div className="bg-white rounded-lg shadow-lg p-8"></div>
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6"></div>
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Services</h3>
              <p className="text-gray-600 mb-6"></p>
                Comprehensive IT infrastructure, cloud solutions, and 
                enterprise-grade security services.
              </p>
              <div className="space-y-2"></div>
                <Link 
                  to="/services/it-services"
                  className="block text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                >
                  IT Services →
                </Link>
                <Link 
                  to="/solutions/it"
                  className="block text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                >
                  Comprehensive IT Solutions →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20"></section>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tailored Solutions for Every Business
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto"></p>
              From startups to enterprises, we provide customized technology solutions that fit your unique needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 text-center"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <p className="text-gray-600 mb-6"></p>
                Large-scale solutions for established organizations requiring robust, scalable infrastructure.
              </p>
              <Link 
                to="/solutions/enterprise"
                className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                Enterprise Solutions →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 text-center"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SMB</h3>
              <p className="text-gray-600 mb-6"></p>
                Cost-effective solutions designed for small and medium businesses looking to scale efficiently.
              </p>
              <Link 
                to="/solutions/smb"
                className="text-green-600 font-semibold hover:text-green-800 transition-colors"
              >
                SMB Solutions →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-8 text-center"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Startup</h3>
              <p className="text-gray-600 mb-6"></p>
                Agile, innovative solutions perfect for startups ready to disrupt their industries.
              </p>
              <Link 
                to="/solutions/startup"
                className="text-purple-600 font-semibold hover:text-purple-800 transition-colors"
              >
                Startup Solutions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50"></section>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto"></p>
              We combine cutting-edge technology with proven expertise to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            <div className="text-center"></div>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Rapid deployment and implementation of solutions</p>
            </div>
            
            <div className="text-center"></div>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Enterprise-grade security and 99.9% uptime</p>
            </div>
            
            <div className="text-center"></div>
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable</h3>
              <p className="text-gray-600">Solutions that grow with your business</p>
            </div>
            
            <div className="text-center"></div>
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">Cutting-edge AI and technology solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white"></section>
        <div className="container mx-auto px-4 text-center"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto"></p>
            Let's discuss how our technology solutions can accelerate your growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </Link>
            <Link 
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;