import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Handshake, 
  Users, 
  Globe, 
  Award, 
  Star, 
  ArrowRight,
  Building,
  Shield,
  Zap,
  Target
} from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      name: "Microsoft",
      logo: "🏢",
      category: "Cloud & AI",
      description: "Strategic partner for Azure cloud solutions and AI services",
      benefits: ["Azure Credits", "Technical Support", "Co-marketing", "Training"]
    },
    {
      name: "Amazon Web Services",
      logo: "☁️",
      category: "Cloud Infrastructure",
      description: "Premier consulting partner for AWS solutions and migration",
      benefits: ["AWS Credits", "Architecture Support", "Security Solutions", "DevOps Tools"]
    },
    {
      name: "Google Cloud",
      logo: "🔍",
      category: "AI & Analytics",
      description: "Partner for Google Cloud AI and machine learning solutions",
      benefits: ["GCP Credits", "AI/ML Expertise", "Data Analytics", "Security"]
    },
    {
      name: "IBM",
      logo: "💼",
      category: "Enterprise Solutions",
      description: "Strategic partner for enterprise AI and quantum computing",
      benefits: ["Watson AI", "Quantum Computing", "Enterprise Security", "Consulting"]
    },
    {
      name: "Oracle",
      logo: "🗄️",
      category: "Database & Cloud",
      description: "Partner for Oracle cloud and database solutions",
      benefits: ["Oracle Cloud", "Database Solutions", "Enterprise Apps", "Support"]
    },
    {
      name: "Salesforce",
      logo: "☁️",
      category: "CRM & Business Apps",
      description: "Consulting partner for Salesforce implementation and customization",
      benefits: ["Salesforce Credits", "Implementation", "Customization", "Training"]
    }
  ];

  const partnershipLevels = [
    {
      level: "Strategic Partner",
      icon: <Star className="w-8 h-8" />,
      description: "Deep integration and joint go-to-market strategies",
      benefits: [
        "Joint product development",
        "Co-marketing campaigns",
        "Dedicated support team",
        "Revenue sharing"
      ]
    },
    {
      level: "Premier Partner",
      icon: <Award className="w-8 h-8" />,
      description: "Certified expertise and preferred status",
      benefits: [
        "Certified expertise",
        "Preferred pricing",
        "Technical support",
        "Training programs"
      ]
    },
    {
      level: "Technology Partner",
      icon: <Zap className="w-8 h-8" />,
      description: "Integration and technical collaboration",
      benefits: [
        "API access",
        "Technical documentation",
        "Integration support",
        "Development resources"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 mb-6">
              <Handshake className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-cyan-400 font-medium">Partnership Program</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Strategic <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Partnerships</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join forces with industry leaders to deliver cutting-edge technology solutions 
              and drive innovation across the digital landscape
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Become a Partner
              </Link>
              
              <Link
                to="/about"
                className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Levels */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Partnership Levels
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the partnership level that best fits your business goals and objectives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-6 flex justify-center">
                  {level.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {level.level}
                </h3>
                
                <p className="text-gray-400 mb-6">
                  {level.description}
                </p>
                
                <ul className="space-y-3">
                  {level.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Strategic Partners
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Working with industry leaders to deliver exceptional technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{partner.logo}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{partner.name}</h3>
                    <p className="text-cyan-400 text-sm">{partner.category}</p>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6">
                  {partner.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-white font-semibold mb-3">Key Benefits:</h4>
                  {partner.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-gray-300 text-sm">
                      <Target className="w-4 h-4 text-cyan-400 mr-2" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our network of strategic partners and unlock new opportunities for growth and innovation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <span>Start Partnership Discussion</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                to="/about"
                className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Learn About Zion Tech Group
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
