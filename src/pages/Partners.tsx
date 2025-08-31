import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Handshake, 
  Award, 
  Globe, 
  Zap,
  Shield,
  TrendingUp,
  Lightbulb,
  Building,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Send
} from 'lucide-react';

export default function Partners() {
  const [selectedPartnershipType, setSelectedPartnershipType] = useState('technology');
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    partnershipType: 'technology',
    description: '',
    website: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        partnershipType: 'technology',
        description: '',
        website: ''
      });
    }, 5000);
  };

  const partnershipTypes = [
    {
      id: 'technology',
      name: 'Technology Partners',
      description: 'Software, hardware, and technology service providers',
      icon: Zap,
      benefits: ['Joint product development', 'Technical integration', 'Market expansion']
    },
    {
      id: 'consulting',
      name: 'Consulting Partners',
      description: 'Business and technology consulting firms',
      icon: Lightbulb,
      benefits: ['Referral programs', 'Joint client projects', 'Knowledge sharing']
    },
    {
      id: 'reseller',
      name: 'Reseller Partners',
      description: 'Companies that resell our solutions',
      icon: TrendingUp,
      benefits: ['Competitive pricing', 'Marketing support', 'Training programs']
    },
    {
      id: 'strategic',
      name: 'Strategic Partners',
      description: 'Long-term strategic alliances',
      icon: Handshake,
      benefits: ['Joint ventures', 'Shared resources', 'Market leadership']
    }
  ];

  const currentPartners = [
    {
      name: 'Microsoft',
      logo: '/partners/microsoft.png',
      type: 'Technology Partner',
      description: 'Leading cloud and AI solutions provider'
    },
    {
      name: 'AWS',
      logo: '/partners/aws.png',
      type: 'Technology Partner',
      description: 'Cloud infrastructure and services leader'
    },
    {
      name: 'Deloitte',
      logo: '/partners/deloitte.png',
      type: 'Consulting Partner',
      description: 'Global consulting and advisory services'
    },
    {
      name: 'Accenture',
      logo: '/partners/accenture.png',
      type: 'Strategic Partner',
      description: 'Digital transformation and technology consulting'
    }
  ];

  const partnershipBenefits = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to our worldwide network of clients and markets'
    },
    {
      icon: Shield,
      title: 'Trusted Brand',
      description: 'Leverage our reputation for quality and innovation'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated partner success team and resources'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Partner awards and public recognition programs'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Partner With Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Join our global network of technology partners and together, 
              let's shape the future of AI and digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer various partnership models to fit different business needs 
              and collaboration goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                  selectedPartnershipType === type.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 bg-gray-50 hover:border-blue-300 hover:bg-blue-50'
                }`}
                onClick={() => setSelectedPartnershipType(type.id)}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-4">
                  <type.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Partner With Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of joining our partner ecosystem and 
              growing your business alongside industry leaders.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Trusted Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to work with industry leaders and innovative companies 
              across the technology landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-colors duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Building className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{partner.type}</p>
                <p className="text-gray-600 text-sm">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Application */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Fill out the form below and our partnership team will get back to you 
              within 24 hours to discuss collaboration opportunities.
            </p>
          </motion.div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Application Submitted!
                </h3>
                <p className="text-blue-100">
                  Thank you for your interest in partnering with us. We'll review your 
                  application and contact you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-white mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-colors"
                      placeholder="Enter company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-white mb-2">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      required
                      value={formData.contactName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-colors"
                      placeholder="Enter contact name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-colors"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-colors"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="partnershipType" className="block text-sm font-medium text-white mb-2">
                      Partnership Type *
                    </label>
                    <select
                      id="partnershipType"
                      name="partnershipType"
                      required
                      value={formData.partnershipType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-colors"
                    >
                      {partnershipTypes.map(type => (
                        <option key={type.id} value={type.id} className="bg-blue-600 text-white">
                          {type.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-white mb-2">
                      Company Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-colors"
                      placeholder="https://example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-white mb-2">
                    Partnership Proposal *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-colors resize-none"
                    placeholder="Describe your partnership proposal and how we can collaborate..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:-translate-y-0.5 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 mr-2"></div>
                      Submitting Application...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2" />
                      Submit Partnership Application
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Have Questions About Partnerships?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our partnership team is here to help you understand the opportunities 
              and answer any questions you may have.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">partnerships@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">Middletown, DE</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
