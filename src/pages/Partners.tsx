import React from 'react';
import { SEO } from '@/components/SEO';

export default function Partners() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
			<SEO title="Partners - Zion Tech Group" description="Our strategic partners and alliances." />
			<div className="container-responsive text-white">
				<h1 className="text-4xl font-bold mb-4">Partners</h1>
				<p className="text-zion-slate-light max-w-2xl">We collaborate with industry leaders to deliver end-to-end solutions.</p>
			</div>
		</div>
	);
}

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Users, 
  Globe, 
  Award, 
  ArrowRight,
  Building,
  CheckCircle,
  Star,
  Zap,
  Shield
} from "lucide-react";
export default function Partners() {
  const partnershipTypes = [
    {
      title: "Technology Partners",
      description: "Collaborate with leading technology providers to deliver cutting-edge solutions",
      icon: <Zap className="h-8 w-8 text-zion-cyan" />,
      benefits: [
        "Access to latest technologies",
        "Joint product development",
        "Shared innovation labs",
        "Technical expertise exchange"
      ]
    },
    {
      title: "Channel Partners",
      description: "Expand your reach through our global network of trusted partners",
      icon: <Globe className="h-8 w-8 text-zion-purple" />,
      benefits: [
        "Market expansion support",
        "Joint marketing initiatives",
        "Revenue sharing programs",
        "Training and certification"
      ]
    },
    {
      title: "Strategic Alliances",
      description: "Form long-term partnerships to tackle complex business challenges",
      icon: <Handshake className="h-8 w-8 text-zion-cyan" />,
      benefits: [
        "Joint venture opportunities",
        "Shared R&D initiatives",
        "Industry expertise collaboration",
        "Global market access"
      ]
    }
  ];
  const currentPartners = [
    {
      name: "Microsoft",
      logo: "MS",
      category: "Technology Partner",
      description: "Leading cloud and AI solutions provider",
      partnership: "Azure AI Services & Cloud Solutions"
    },
    {
      name: "Amazon Web Services",
      logo: "AWS",
      category: "Technology Partner",
      description: "World's most comprehensive cloud platform",
      partnership: "AI/ML Services & Infrastructure"
    },
    {
      name: "Google Cloud",
      logo: "GC",
      category: "Technology Partner",
      description: "Advanced AI and machine learning platform",
      partnership: "AI Platform & Analytics Services"
    },
    {
      name: "IBM",
      logo: "IBM",
      category: "Strategic Partner",
      description: "Enterprise AI and quantum computing leader",
      partnership: "Watson AI & Quantum Solutions"
    },
    {
      name: "Oracle",
      logo: "OR",
      category: "Technology Partner",
      description: "Enterprise software and cloud solutions",
      partnership: "Cloud Infrastructure & AI Services"
    },
    {
      name: "Salesforce",
      logo: "SF",
      category: "Strategic Partner",
      description: "Customer relationship management platform",
      partnership: "AI-Powered CRM Solutions"
    }
  ];
  const partnershipBenefits = [
    {
      icon: <Users className="h-6 w-6 text-zion-cyan" />,
      title: "Access to Global Network",
      description: "Connect with industry leaders and expand your business reach worldwide"
    },
    {
      icon: <Award className="h-6 w-6 text-zion-purple" />,
      title: "Joint Innovation",
      description: "Collaborate on cutting-edge projects and share in breakthrough discoveries"
    },
    {
      icon: <Shield className="h-6 w-6 text-zion-cyan" />,
      title: "Risk Mitigation",
      description: "Share resources and expertise to reduce project risks and costs"
    },
    {
      icon: <Star className="h-6 w-6 text-zion-purple" />,
      title: "Enhanced Credibility",
      description: "Build trust and credibility through association with recognized brands"
    }
  };
  const industries = [
    "Healthcare & Life Sciences",
    "Financial Services",
    "Manufacturing",
    "Retail & E-commerce",
    "Energy & Utilities",
    "Transportation & Logistics",
    "Education",
    "Government & Public Sector"
  ];
  return (
    <div className="min-h-screen bg-zion-blue text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Partner With Us
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Join forces with Zion Tech Group to deliver innovative solutions, expand your market reach, and create lasting value for your customers.
            </motion.p>
          </div>
        </div>
      </section>
      {/* Partnership Types Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Partnership Opportunities</h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Choose the partnership model that best fits your business goals and objectives
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                className="bg-zion-blue-light/10 border border-zion-purple/20 rounded-lg p-8 hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-zion-purple/20 rounded-lg flex items-center justify-center mb-6">
                  {type.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{type.title}</h3>
                <p className="text-zion-slate-light mb-6">{type.description}</p>
                <ul className="space-y-3">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-3 text-zion-slate-light">
                      <CheckCircle className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Current Partners Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Trusted Partners</h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              We're proud to collaborate with industry leaders to deliver exceptional solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-zion-purple/20 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    {partner.logo}
                  </div>
                  <span className="text-xs text-zion-cyan bg-zion-purple/20 px-2 py-1 rounded">
                    {partner.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                <p className="text-zion-slate-light text-sm mb-4">{partner.description}</p>
                <p className="text-zion-cyan text-sm font-medium">{partner.partnership}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Partnership Benefits Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Partner With Us?</h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Discover the advantages of joining our global partnership network
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-zion-blue-light/10 border border-zion-purple/20 rounded-lg p-8 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-12 h-12 bg-zion-purple/20 rounded-lg flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Industries We Serve Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Our expertise spans across multiple industries, enabling us to deliver tailored solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg p-6 text-center hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Building className="h-8 w-8 text-zion-cyan mx-auto mb-3" />
                <p className="text-white font-medium text-sm">{industry}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Partnership Process Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How to Become a Partner</h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Simple steps to start your partnership journey with Zion Tech Group
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Initial Contact",
                  description: "Reach out to discuss partnership opportunities and alignment"
                },
                {
                  step: "02",
                  title: "Assessment",
                  description: "We evaluate mutual fit and potential collaboration areas"
                },
                {
                  step: "03",
                  title: "Agreement",
                  description: "Define partnership terms, goals, and success metrics"
                },
                {
                  step: "04",
                  title: "Launch",
                  description: "Begin collaboration and start delivering value together"
                }
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-zion-purple/20 border border-zion-purple/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-zion-cyan">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-zion-slate-light text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-purple to-zion-purple-light">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-zion-slate-light text-xl mb-8 max-w-2xl mx-auto">
              Let's explore how we can work together to create innovative solutions and drive mutual success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-zion-purple px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Handshake className="h-5 w-5" />
                Start Partnership Discussion
              </Link>
              <a
                href="mailto:partnerships@ziontechgroup.com"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <ArrowRight className="h-5 w-5" />
                Contact Partnerships Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
