import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import { 
  ArrowRightIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  CpuChipIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  RocketLaunchIcon,
  SparklesIcon,
  BoltIcon
} from '@heroicons/react/24/outline"
import FuturisticBackground from '../components/FuturisticBackground"
import NeonButton from '../components/NeonButton"
import AnimatedCard from '../components/AnimatedCard"
import { services } from '../data/servicesData"
export default function HomePage() {
const structuredData = {"
    "@context": "https://schema.org",""
    "@type": "WebSite",""
    "name": "Zion Tech Group",""
    "url": "https://ziontechgroup.com",""
    "description": "Advanced AI and IT solutions provider specializing in cybersecurity, cloud infrastructure, and digital transformation.",""
    "potentialAction": {""
      "@type": "SearchAction",""
      "target": "https://ziontechgroup.com/search?q={search_term_string}",""
      "query-input": "required name=search_term_string""
    }
  const features = [
    {
      icon: CpuChipIcon,
      title: 'AI Solutions','
      description: 'Advanced artificial intelligence and machine learning solutions to transform your business operations.','
      href: '/ai-solutions''
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity','
      description: 'Comprehensive security solutions to protect your digital assets and infrastructure.','
      href: '/cybersecurity''
    },
    {
      icon: CloudIcon,
      title: 'Cloud Infrastructure','
      description: 'Scalable cloud solutions and infrastructure management for modern businesses.','
      href: '/cloud-solutions''
    },
    {
      icon: RocketLaunchIcon,
      title: 'Digital Transformation','
      description: 'Complete digital transformation services to modernize your business processes.','
      href: '/digital-transformation''
    }
  ]
  return (
    <>
      <SEOHead "
        title="Zion Tech Group - Advanced AI and IT Solutions"""
        description="Leading provider of AI solutions, cybersecurity, cloud infrastructure, and digital transformation services. Transform your business with cutting-edge technology."""
        keywords="AI solutions, cybersecurity, cloud infrastructure, digital transformation, IT services, business automation""
        structuredData={structuredData}
      />
      "
      <div className="min-h-screen bg-slate-900 text-white"></div>"
        <FuturisticBackground />
        
        {/* Hero Section */}"
        <div className="relative z-10"></div>""
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"></div>""
            <div className="text-center"></div>""
              <h1 className="text-4xl font-bold text-white mb-8">"
                Transform Your Business with AI
              </h1>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">"
                Leading provider of advanced AI solutions, cybersecurity, and digital transformation services
              </p>"
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>""
                <NeonButton href="/services" className="px-8 py-4">"
                  Explore Services"
                  <ArrowRightIcon className="w-5 h-5 ml-2" />"
                </NeonButton>
                <Link"
                  to="/contact"""
                  className="border border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300""
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}"
        <div className="py-20 relative z-10"></div>""
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>""
            <div className="text-center mb-16"></div>""
              <h2 className="text-3xl md:text-4xl font-bold mb-4">"
                Why Choose Zion Tech Group?
              </h2>"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
                Cutting-edge technology meets enterprise-grade reliability
              </p>
            </div>"
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>")
              {features.map((feature, index) => ("
                <AnimatedCard key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">""
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4"></div>""
                    <feature.icon className="w-6 h-6 text-white" />"
                  </div>"
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>""
                  <p className="text-gray-300 mb-4">{feature.description}</p>"
                  <Link
                    to={feature.href}"
                    className="text-blue-400 hover:text-blue-300 font-semibold flex items-center""
                  >
                    Learn More"
                    <ArrowRightIcon className="w-4 h-4 ml-1" />"
                  </Link>
                </AnimatedCard>)
              ))
            </div>
          </div>
        </div>

        {/* Services Section */}"
        <div className="py-20 bg-slate-800/30 relative z-10"></div>""
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>""
            <div className="text-center mb-16"></div>""
              <h2 className="text-3xl md:text-4xl font-bold mb-4">"
                Our Services
              </h2>"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
                Comprehensive technology solutions for modern businesses
              </p>
            </div>"
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>"
              {services.slice(0, 6).map((service, index) => ("
                <AnimatedCard key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">""
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-4"></div>""
                    <service.icon className="w-6 h-6 text-white" />"
                  </div>"
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>""
                  <p className="text-gray-300 mb-4">{service.description}</p>"
                  <Link
                    to={service.href}"
                    className="text-blue-400 hover:text-blue-300 font-semibold flex items-center""
                  >
                    Learn More"
                    <ArrowRightIcon className="w-4 h-4 ml-1" />"
                  </Link>
                </AnimatedCard>)
              ))
            </div>
          </div>
        </div>

        {/* CTA Section */}"
        <div className="py-20 relative z-10"></div>""
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"></div>""
            <h2 className="text-3xl md:text-4xl font-bold mb-6">"
              Ready to Transform Your Business?
            </h2>"
            <p className="text-xl text-gray-300 mb-8">"
              Let's discuss how we can help you achieve your technology goals'
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>""
              <NeonButton href="/contact" className="px-8 py-4">"
                Get In Touch"
                <ArrowRightIcon className="w-5 h-5 ml-2" />"
              </NeonButton>
              <Link"
                to="/about"""
                className="border border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300""
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )"
}}}}
