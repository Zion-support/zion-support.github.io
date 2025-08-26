import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Handshake, 
  Users, 
  Globe, 
  Award, 
  TrendingUp, 
  Building,
  CheckCircle,
  Star
} from 'lucide-react';

const Partners: React.FC = () => {
  const partnershipTypes = [
    {
      icon: Building,
      title: 'Technology Partners',
      description: 'Strategic partnerships with leading technology companies to deliver comprehensive solutions.',
      benefits: [
        'Access to cutting-edge technologies',
        'Joint solution development',
        'Shared go-to-market strategies',
        'Technical collaboration and support'
      ]
    },
    {
      icon: Users,
      title: 'Channel Partners',
      description: 'Reseller and distribution partnerships to expand our market reach and service delivery.',
      benefits: [
        'Revenue sharing opportunities',
        'Marketing and sales support',
        'Training and certification programs',
        'Dedicated partner success managers'
      ]
    },
    {
      icon: Globe,
      title: 'Global Partners',
      description: 'International partnerships to serve clients across different regions and markets.',
      benefits: [
        'Local market expertise',
        'Regional compliance knowledge',
        'Cultural and language support',
        'Expanded service coverage'
      ]
    },
    {
      icon: Award,
      title: 'Strategic Alliances',
      description: 'Long-term strategic partnerships focused on innovation and market leadership.',
      benefits: [
        'Joint research and development',
        'Innovation labs and centers',
        'Thought leadership collaboration',
        'Industry influence and recognition'
      ]
    }
  ];

  const currentPartners = [
    {
      name: 'Microsoft',
      logo: 'M',
      category: 'Technology Partner',
      description: 'Strategic partnership for Azure cloud solutions and Microsoft 365 integration.'
    },
    {
      name: 'AWS',
      logo: 'A',
      category: 'Cloud Partner',
      description: 'Advanced consulting partner for AWS cloud infrastructure and services.'
    },
    {
      name: 'Google Cloud',
      logo: 'G',
      category: 'Cloud Partner',
      description: 'Partnership for Google Cloud Platform solutions and AI services.'
    },
    {
      name: 'Cisco',
      logo: 'C',
      category: 'Network Partner',
      description: 'Strategic partnership for networking and cybersecurity solutions.'
    }
  ];

  const partnerBenefits = [
    {
      icon: TrendingUp,
      title: 'Revenue Growth',
      description: 'Access new markets and revenue streams through our partnership network.'
    },
    {
      icon: Star,
      title: 'Brand Recognition',
      description: 'Leverage our established brand and market presence in the technology sector.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Benefit from our proven methodologies and quality standards.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Access to our team of technology experts and consultants.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group's partner network. Strategic partnerships for technology solutions, growth opportunities, and market expansion." />
        <meta name="keywords" content="partners, partnerships, technology partners, channel partners, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Partnership Opportunities</h1>
              <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
                Join our network of strategic partners and unlock new opportunities for growth, 
                innovation, and market expansion in the technology sector.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="#partnerships" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Explore Partnerships
                </a>
                <a 
                  href="#contact" 
                  className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Become a Partner
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership Types */}
        <section id="partnerships" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Types</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer various partnership models to suit different business needs and objectives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnershipTypes.map((type, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <type.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're proud to work with leading technology companies and organizations worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentPartners.map((partner, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">{partner.logo}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h3>
                  <p className="text-sm text-blue-600 mb-3">{partner.category}</p>
                  <p className="text-gray-600 text-sm">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Partner With Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the advantages of joining our partner ecosystem and growing your business with Zion Tech Group.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnerBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Partnership Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Contact</h3>
                <p className="text-gray-600">Reach out to discuss partnership opportunities</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
                <p className="text-gray-600">Evaluate fit and alignment of objectives</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Agreement</h3>
                <p className="text-gray-600">Finalize partnership terms and conditions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Launch</h3>
                <p className="text-gray-600">Begin partnership activities and collaboration</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Partner With Us?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can work together to create value for both our organizations and our clients.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Contact Us
              </a>
              <a 
                href="mailto:partnerships@ziontechgroup.com" 
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Email Partnerships
              </a>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600 mb-4">
                <strong>Partnership Inquiries:</strong>
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-gray-600">
                <div>
                  <strong>Email:</strong> <a href="mailto:partnerships@ziontechgroup.com" className="text-blue-600 hover:text-blue-800">partnerships@ziontechgroup.com</a>
                </div>
                <div>
                  <strong>Phone:</strong> <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-800">+1 (302) 464-0950</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Partners;