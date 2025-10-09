import React from 'react';
import { Building, Handshake, Award, Users, Globe, Star, CheckCircle, Phone, Mail } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PartnersPage: React.FC = () => {
  const _partnerTypes = [
    {
      title: 'Technology Partners',
      description: 'Leading technology companies that provide the foundation for our solutions',
      icon: Building,
      partners: [
        { name: 'Microsoft', logo: '/images/partners/microsoft.png', description: 'Cloud infrastructure and AI services' },
        { name: 'Amazon Web Services', logo: '/images/partners/aws.png', description: 'Cloud computing and machine learning' },
        { name: 'Google Cloud', logo: '/images/partners/google.png', description: 'AI and data analytics platform' }
      ]
    },
    {
      title: 'Integration Partners',
      description: 'Companies that help us integrate with existing business systems',
      icon: Handshake,
      partners: [
        { name: 'Salesforce', logo: '/images/partners/salesforce.png', description: 'CRM integration and automation' },
        { name: 'HubSpot', logo: '/images/partners/hubspot.png', description: 'Marketing automation and analytics' },
        { name: 'Slack', logo: '/images/partners/slack.png', description: 'Team collaboration and communication' }
      ]
    },
    {
      title: 'Solution Partners',
      description: 'Specialized partners that extend our capabilities in specific domains',
      icon: Award,
      partners: [
        { name: 'IBM', logo: '/images/partners/ibm.png', description: 'Enterprise AI and cognitive computing' },
        { name: 'Oracle', logo: '/images/partners/oracle.png', description: 'Database and enterprise applications' },
        { name: 'SAP', logo: '/images/partners/sap.png', description: 'Enterprise resource planning and analytics' }
      ]
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to international markets and customers through our partner network'
    },
    {
      icon: Users,
      title: 'Expert Network',
      description: 'Collaborate with industry experts and thought leaders'
    },
    {
      icon: Star,
      title: 'Quality Assurance',
      description: 'All partners are vetted for quality, security, and compliance standards'
    },
    {
      icon: CheckCircle,
      title: 'Seamless Integration',
      description: 'Easy integration with existing systems and workflows'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Our Partners</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We work with industry leaders to deliver comprehensive AI and IT solutions that drive business success.
          </p>
        </div>

        <div className="space-y-16">
          {_partnerTypes.map((type, typeIndex) => (
            <div key={typeIndex} className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <type.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">{type.title}</h2>
                <p className="text-gray-300 text-lg">{type.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {type.partners.map((partner, partnerIndex) => (
                  <div key={partnerIndex} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Building className="h-8 w-8 text-cyan-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                      <p className="text-gray-300 text-sm">{partner.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Partner With Us?</h2>
            <p className="text-gray-300 text-lg">Discover the benefits of joining our partner ecosystem</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Become a Partner</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our growing network of partners and help us deliver innovative AI solutions to businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-600 transition-colors flex items-center justify-center"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Partner Inquiry
                </a>
                <a 
                  href="tel:+15551234567" 
                  className="bg-transparent text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-cyan-400 hover:bg-cyan-400 hover:text-white transition-colors flex items-center justify-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PartnersPage;