import React from 'react'
import { Link } from 'react-router-dom'

const HomePage: React.FC: () => {,
  return (
    <div className="min-h-screen">"
      {/* Hero Section */}
            efficiency, and growth for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
            <Link 
              to: "/contact",
  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">"
            {/* AI Services */}
                natural language processing, and predictive analytics.
              </p>
              <div className="space-y-2">"
                <Link 
                  to: "/services/ai-services",
  className="block text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  AI Services →
                </Link>
                >
                  Advanced AI Solutions →
                </Link>
              </div>
            </div>

                and grow with your business needs.
              </p>
              <div className="space-y-2">"
                <Link 
                  to: "/services/micro-saas",
  className="block text-green-600 font-semibold hover:text-green-800 transition-colors"
                >
                  Micro SaaS →
                </Link>
                >
                  Innovative Micro SaaS →
                </Link>
              </div>
            </div>

                enterprise-grade security services.
              </p>
              <div className="space-y-2">"
                <Link 
                  to: "/services/it-services",
  className="block text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                >
                  IT Services →
                </Link>
                >
                  Comprehensive IT Solutions →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

              </p>
              <Link 
                to: "/solutions/enterprise",
  className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                Enterprise Solutions →
              </Link>
            </div>
              </p>
              <Link 
                to: "/solutions/smb",
  className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                SMB Solutions →
              </Link>
            </div>
              </p>
              <Link 
                to: "/solutions/startup",
  className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                Startup Solutions →
              </Link>
            </div>
          </div>
        </div>
      </section>

            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">"
            <div className="text-center">"
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl">🚀</span>"
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>"
              <p className="text-gray-600">Rapid deployment and implementation of solutions</p>"
            </div>
            
            <div className="text-center">"
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl">🔒</span>"
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Secure & Reliable</h3>"
              <p className="text-gray-600">Enterprise-grade security and 99.9% uptime</p>"
            </div>
            
            <div className="text-center">"
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl">📈</span>"
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable</h3>"
              <p className="text-gray-600">Solutions that grow with your business</p>"
            </div>
            
            <div className="text-center">"
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">"
                <span className="text-2xl">💡</span>"
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>"
              <p className="text-gray-600">Cutting-edge AI and technology solutions</p>"
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
            <Link 
              to: "/contact",
  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </Link>
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
"
export default HomePage;