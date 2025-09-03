import React from 'react';
import { SEO } from '../components/SEO';

const Services: React.FC = () => {
  return(<>
      <SEO title="Services - Zion Tech Group" />
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Services</h1>
          <p className="text-lg text-gray-600">Content coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default Services;
  return (
    <>
      <Head>
        <title>Services - Zion Tech Group | AI, Cloud, Cybersecurity & More</title>
        <meta name="description" content="Comprehensive technology services including AI solutions, cloud infrastructure, cybersecurity, micro SAAS, and emerging technologies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Navigation */}
        <nav className="bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-gray-900">Zion Tech Group</Link>
              </div>
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</Link>
                <Link href="/services" className="text-blue-600 font-medium">Services</Link>
                <Link href="/solutions" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Solutions</Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</Link>
                <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Blog</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive technology solutions designed to drive innovation, efficiency, and growth for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Get Started
              </Link>
              <Link href="/solutions" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                View Solutions
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {services.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-20">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.category}</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Cutting-edge solutions designed to transform your business operations and drive success
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="group p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Key Features</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <Link 
                          href="/contact" 
                          className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group-hover:underline"
                        >
                          Learn More
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getColorClasses(category.color)}`}>
                          {category.category}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how our technology solutions can drive innovation and growth for your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Schedule Free Consultation
              </Link>
              <Link href="/solutions" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">
                Explore Solutions
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
                <p className="text-gray-400 mb-4">
                  Transforming businesses through innovative technology solutions and AI-powered automation.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/services" className="hover:text-white transition-colors">AI Solutions</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Cloud & DevOps</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Cybersecurity</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Micro SAAS</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <div className="space-y-2 text-gray-400">
                  <p>+1 302 464 0950</p>
                  <p>kleber@ziontechgroup.com</p>
                  <p>Middletown, DE 19709</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>

      </div>
    </>
  )};
;
export: default Services;



          <p className='text-lg text-gray-600'>Content coming soon...</p>
        </div>
      </div>
</>


  )}






