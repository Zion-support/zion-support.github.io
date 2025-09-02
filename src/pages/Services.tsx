import React from 'react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_SERVICES_2025, SERVICE_CATEGORIES, CONTACT_INFO } from '../data/comprehensiveServices2025';
import { 
  Brain, 
  Cloud, 
  Shield, 
  BarChart3, 
  Globe, 
  Link, 
  RefreshCw, 
  Heart, 
  DollarSign,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';

const Services: React.FC = () => {
  const featuredServices = COMPREHENSIVE_SERVICES_2025.filter(service => service.featured);
  const popularServices = COMPREHENSIVE_SERVICES_2025.filter(service => service.isPopular);
  const newServices = COMPREHENSIVE_SERVICES_2025.filter(service => service.isNew);

  const categoryIcons = {
    'AI Solutions': Brain,
    'Cloud Solutions': Cloud,
    'Cybersecurity': Shield,
    'Data Analytics': BarChart3,
    'IoT Solutions': Globe,
    'Blockchain Solutions': Link,
    'Digital Transformation': RefreshCw,
    'Healthcare Technology': Heart,
    'Financial Technology': DollarSign
  };

  return (
    <>
      <SEO 
        title="Comprehensive Technology Services - Zion Tech Group"
        description="Leading technology solutions provider offering AI, cloud, cybersecurity, data analytics, IoT, blockchain, and digital transformation services with competitive pricing and 24/7 support."
      />
      
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Comprehensive Technology Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Transform your business with our cutting-edge AI, cloud, cybersecurity, and digital transformation solutions. 
              Enterprise-grade services at startup-friendly prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#services" 
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Explore Services
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Get Consultation
              </a>
            </div>
          </div>

          {/* Service Categories */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
            {SERVICE_CATEGORIES.map(category => {
              const IconComponent = categoryIcons[category.name as keyof typeof categoryIcons];
              return (
                <div key={category.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-white font-semibold mb-2">{category.name}</h3>
                  <p className="text-blue-200 text-sm">{category.count} services</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and innovative solutions that are transforming businesses across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map(service => (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                    {service.isPopular && (
                      <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                    {service.isNew && (
                      <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                        New
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Starting Price</span>
                      <span className="text-2xl font-bold text-blue-600">
                        ${service.price.toLocaleString()}/month
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Market Price</span>
                      <span className="text-lg text-gray-400 line-through">{service.marketPrice}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">ROI</span>
                      <span className="text-lg font-semibold text-green-600">{service.roi}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href={`/services/${service.id}`}
                      className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                    >
                      Learn More
                    </a>
                    <a 
                      href="/contact"
                      className="flex-1 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver enterprise-grade solutions with startup-friendly pricing and unmatched support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Guaranteed</h3>
              <p className="text-gray-600">
                30-day money-back guarantee with free migration support and 99.9% uptime SLA
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven ROI</h3>
              <p className="text-gray-600">
                Average 300% ROI within 6 months of implementation with measurable results
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Security</h3>
              <p className="text-gray-600">
                Bank-level security with SOC 2 compliance, GDPR ready, and 24/7 monitoring
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowRight className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Immediate Deployment</h3>
              <p className="text-gray-600">
                All services are ready for immediate deployment with no setup delays
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with our team to discuss your needs and discover how our solutions can drive your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-400 mr-3" />
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <a href={`tel:${CONTACT_INFO.mobile}`} className="text-blue-200 hover:text-white">
                      {CONTACT_INFO.mobile}
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-400 mr-3" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-blue-200 hover:text-white">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                  <div>
                    <p className="font-medium text-white">Address</p>
                    <p className="text-blue-200">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <ExternalLink className="h-5 w-5 text-blue-400 mr-3" />
                  <div>
                    <p className="font-medium text-white">Website</p>
                    <a href={CONTACT_INFO.website} className="text-blue-200 hover:text-white">
                      {CONTACT_INFO.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <a 
                  href="/request-quote"
                  className="block w-full bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                >
                  Request Custom Quote
                </a>
                <a 
                  href="/contact"
                  className="block w-full border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-center"
                >
                  Schedule Consultation
                </a>
                <a 
                  href="#services"
                  className="block w-full border border-blue-400 text-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-colors text-center"
                >
                  View All Services
                </a>
              </div>

              <div className="mt-8 p-6 bg-blue-800/50 rounded-lg border border-blue-700">
                <h4 className="font-medium text-white mb-2">What's Included:</h4>
                <ul className="text-sm text-blue-200 space-y-1">
                  <li>• 24/7 Technical Support</li>
                  <li>• 99.9% Uptime Guarantee</li>
                  <li>• SOC 2 Type II Compliant</li>
                  <li>• 30-Day Money Back Guarantee</li>
                  <li>• Free Migration Support</li>
                  <li>• Custom Integration Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
