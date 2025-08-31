import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Target, 
  Globe, 
  Zap, 
  Shield, 
  Brain, 
  Rocket,
  CheckCircle,
  Star,
  Building,
  Heart,
  Mail,
  Linkedin,
  ExternalLink,
  Handshake,
  Briefcase,
  TrendingUp,
  Lightbulb
} from 'lucide-react';

export default function Partners() {
  const partnershipTypes = [
    {
      icon: Brain,
      title: 'Technology Partners',
      description: 'Collaborate on cutting-edge AI, quantum computing, and emerging technology solutions.',
      benefits: ['Joint R&D', 'Technology Integration', 'Market Expansion', 'Innovation Sharing'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Building,
      title: 'Enterprise Partners',
      description: 'Strategic partnerships with large organizations for enterprise solutions and digital transformation.',
      benefits: ['Enterprise Sales', 'Joint Solutions', 'Market Access', 'Revenue Sharing'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Rocket,
      title: 'Startup Partners',
      description: 'Support emerging companies with technology infrastructure and growth acceleration.',
      benefits: ['Technology Support', 'Market Access', 'Mentorship', 'Investment Opportunities'],
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Globe,
      title: 'Global Partners',
      description: 'International partnerships for global market expansion and localized solutions.',
      benefits: ['Market Entry', 'Local Expertise', 'Cultural Adaptation', 'Global Reach'],
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const existingPartners = [
    {
      name: 'Microsoft Azure',
      logo: '/partners/microsoft-azure.png',
      category: 'Cloud Infrastructure',
      description: 'Strategic cloud partnership for AI and quantum computing solutions.',
      partnership: 'Technology Integration'
    },
    {
      name: 'AWS',
      logo: '/partners/aws.png',
      category: 'Cloud Services',
      description: 'Cloud infrastructure partnership for scalable AI solutions.',
      partnership: 'Infrastructure Provider'
    },
    {
      name: 'Google Cloud',
      logo: '/partners/google-cloud.png',
      category: 'AI & ML',
      description: 'Partnership for advanced machine learning and AI services.',
      partnership: 'AI Technology'
    },
    {
      name: 'IBM',
      logo: '/partners/ibm.png',
      category: 'Quantum Computing',
      description: 'Quantum computing partnership for next-generation solutions.',
      partnership: 'Quantum Technology'
    }
  ];

  const partnershipBenefits = [
    {
      icon: TrendingUp,
      title: 'Revenue Growth',
      description: 'Access new markets and customer segments through strategic partnerships.',
      metric: '40%+'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Acceleration',
      description: 'Combine expertise to develop breakthrough solutions faster.',
      metric: '3x'
    },
    {
      icon: Globe,
      title: 'Market Expansion',
      description: 'Enter new geographic markets with local partner expertise.',
      metric: '25+'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Share development costs and reduce market entry risks.',
      metric: '60%'
    }
  ];

  const successStories = [
    {
      partner: 'TechCorp Solutions',
      industry: 'Healthcare Technology',
      challenge: 'Needed AI-powered diagnostic tools for rural healthcare',
      solution: 'Developed AI diagnostic platform with 95% accuracy',
      results: 'Deployed in 50+ rural clinics, improved diagnosis by 40%'
    },
    {
      partner: 'Global Manufacturing Inc.',
      industry: 'Manufacturing',
      challenge: 'Required predictive maintenance for industrial equipment',
      solution: 'Built IoT-based predictive maintenance system',
      results: 'Reduced downtime by 35%, saved $2M annually'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Strategic Partnerships
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Join forces with Zion Tech Group to create innovative solutions, 
              expand market reach, and drive mutual growth in the technology landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer various partnership models to meet different business needs and objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center mr-4`}>
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{type.title}</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">{type.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Strategic partnerships with Zion Tech Group deliver measurable value and growth opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                  <benefit.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{benefit.metric}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're proud to work with industry leaders and innovative companies worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {existingPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
                    <Building className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{partner.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-2">{partner.category}</p>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{partner.description}</p>
                
                <div className="text-center">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    {partner.partnership}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Partnership Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how our partnerships have delivered real results and transformed businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.partner}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{story.partner}</h3>
                    <p className="text-blue-600 font-medium">{story.industry}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600 text-sm">{story.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600 text-sm">{story.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                    <p className="text-gray-600 text-sm">{story.results}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Partnership Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our streamlined process makes it easy to establish and grow successful partnerships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Initial Discussion',
                description: 'We explore mutual goals and partnership opportunities.'
              },
              {
                step: '02',
                title: 'Strategy Development',
                description: 'We create a customized partnership strategy and roadmap.'
              },
              {
                step: '03',
                title: 'Agreement & Launch',
                description: 'We formalize the partnership and begin implementation.'
              },
              {
                step: '04',
                title: 'Growth & Optimization',
                description: 'We continuously optimize and expand the partnership.'
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's explore how we can work together to create innovative solutions 
              and drive mutual growth in the technology landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Become a Partner
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Schedule a Meeting
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
