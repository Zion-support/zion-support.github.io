import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Globe, 
  Award, 
  Building2,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PartnersPage() {
  const partners = [
    {
      name: "TechCorp Solutions",
      logo: "TC",
      description: "Leading technology consulting firm specializing in digital transformation",
      category: "Technology Consulting",
      rating: 5,
      partnership: "Strategic Alliance",
      benefits: [
        "Joint product development",
        "Shared technology resources",
        "Cross-selling opportunities",
        "Innovation collaboration"
      ]
    },
    {
      name: "InnovateLab",
      logo: "IL",
      description: "Innovation hub focused on emerging technologies and startup incubation",
      category: "Innovation & R&D",
      rating: 5,
      partnership: "Research Partnership",
      benefits: [
        "Joint research projects",
        "Technology transfer",
        "Startup ecosystem",
        "Patent collaboration"
      ]
    },
    {
      name: "DataFlow Systems",
      logo: "DF",
      description: "Advanced data analytics and business intelligence solutions",
      category: "Data & Analytics",
      rating: 5,
      partnership: "Technology Integration",
      benefits: [
        "Platform integration",
        "Data sharing protocols",
        "Joint customer solutions",
        "Technical expertise exchange"
      ]
    }
  ];

  const partnershipBenefits = [
    {
      icon: Users,
      title: "Expanded Reach",
      description: "Access to new markets and customer segments through partner networks"
    },
    {
      icon: Globe,
      title: "Global Presence",
      description: "International expansion with local expertise and market knowledge"
    },
    {
      icon: Award,
      title: "Enhanced Credibility",
      description: "Strengthened reputation through strategic partnerships with industry leaders"
    },
    {
      icon: Building2,
      title: "Resource Sharing",
      description: "Shared technology, expertise, and infrastructure for mutual benefit"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Strategic <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Partnerships</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Join forces with industry leaders to create innovative solutions and drive mutual success in the technology landscape.
          </p>
        </motion.div>
      </div>

      {/* Partnership Benefits */}
      <div className="max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Partner With Us?
          </h2>
          <p className="text-lg text-zion-slate-light">
            Discover the advantages of strategic partnerships with Zion Tech Group
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partnershipBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-zion-slate-dark/80 to-zion-slate/80 backdrop-blur-sm border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mb-4">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-zion-slate-light">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Current Partners */}
      <div className="max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Strategic Partners
          </h2>
          <p className="text-lg text-zion-slate-light">
            Industry leaders who trust us to deliver innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-zion-slate-dark/80 to-zion-slate/80 backdrop-blur-sm border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">{partner.logo}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{partner.name}</h3>
                <p className="text-zion-slate-light mb-2">{partner.description}</p>
                <div className="text-zion-cyan font-semibold">{partner.category}</div>
              </div>

              <div className="flex items-center justify-center mb-4">
                {[...Array(partner.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="text-center mb-6">
                <div className="inline-block px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-semibold">
                  {partner.partnership}
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {partner.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-zion-slate-light">
                    <CheckCircle className="h-4 w-4 text-zion-cyan mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Become a Partner */}
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Become a Strategic Partner
          </h2>
          <p className="text-lg text-zion-slate-light mb-8">
            Ready to explore partnership opportunities? Let's discuss how we can create value together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-full hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
            >
              Start Partnership Discussion
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-full hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Schedule Meeting
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}