import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Globe, 
  Building2, 
  Users2, 
  TrendingUp, 
  Award,
  Star,
  Zap,
  Shield,
  Lightbulb
} from 'lucide-react';

export default function Partners() {
  const partnershipTypes = [
    {
      title: "Strategic Alliance",
      description: "Long-term partnerships focused on joint innovation and market expansion",
      icon: Users2,
      benefits: [
        "Joint product development",
        "Shared marketing initiatives",
        "Revenue sharing opportunities",
        "Exclusive market access"
      ]
    },
    {
      title: "Technology Partnership",
      description: "Collaborative development of cutting-edge technology solutions",
      icon: Zap,
      benefits: [
        "Co-innovation programs",
        "Technology licensing",
        "Joint IP development",
        "Technical expertise sharing"
      ]
    },
    {
      title: "Channel Partnership",
      description: "Distribution and sales partnerships for mutual market growth",
      icon: Globe,
      benefits: [
        "Expanded market reach",
        "Local market expertise",
        "Joint sales initiatives",
        "Training and certification"
      ]
    },
    {
      title: "Solution Partnership",
      description: "Integration partnerships for comprehensive customer solutions",
      icon: Building2,
      benefits: [
        "Integrated service offerings",
        "Seamless customer experience",
        "Joint go-to-market strategies",
        "Shared customer success"
      ]
    }
  ];

  const currentPartners = [
    {
      name: "Microsoft",
      logo: "Microsoft",
      category: "Technology",
      description: "Strategic cloud and AI partnership for enterprise solutions",
      partnership: "Strategic Alliance",
      year: "2023"
    },
    {
      name: "Amazon Web Services",
      logo: "AWS",
      category: "Cloud Services",
      description: "Cloud infrastructure and AI services collaboration",
      partnership: "Technology Partnership",
      year: "2023"
    },
    {
      name: "Google Cloud",
      logo: "Google Cloud",
      category: "Cloud & AI",
      description: "AI and machine learning platform partnership",
      partnership: "Technology Partnership",
      year: "2023"
    },
    {
      name: "IBM",
      logo: "IBM",
      category: "Enterprise",
      description: "Enterprise AI and consulting services collaboration",
      partnership: "Strategic Alliance",
      year: "2023"
    }
  ];

  const partnerBenefits = [
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      description: "Access new markets and customer segments through our global network"
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Share risks and resources while expanding your business capabilities"
    },
    {
      icon: Lightbulb,
      title: "Innovation Access",
      description: "Leverage cutting-edge AI and technology solutions for your customers"
    },
    {
      icon: Award,
      title: "Brand Enhancement",
      description: "Strengthen your market position through association with industry leaders"
    }
  ];

  const partnershipProcess = [
    {
      step: "01",
      title: "Initial Discussion",
      description: "Schedule a call to discuss partnership opportunities and alignment",
      icon: Users
    },
    {
      step: "02",
      title: "Strategic Assessment",
      description: "Evaluate mutual benefits and partnership fit for both organizations",
      icon: CheckCircle
    },
    {
      step: "03",
      title: "Partnership Agreement",
      description: "Define terms, responsibilities, and success metrics for the partnership",
      icon: Building2
    },
    {
      step: "04",
      title: "Launch & Growth",
      description: "Execute partnership initiatives and scale successful programs",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="futuristic-heading mb-6">
              Strategic <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Partnerships</span>
            </h1>
            <p className="futuristic-text text-xl mb-8 max-w-3xl mx-auto">
              Join forces with Zion Tech Group to create innovative solutions, expand your market reach, 
              and drive mutual growth through strategic collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="futuristic-button inline-flex items-center"
              >
                Become a Partner
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="futuristic-button-outline inline-flex items-center"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="futuristic-heading text-3xl lg:text-4xl mb-4">
              Partnership Models
            </h2>
            <p className="futuristic-text text-lg max-w-2xl mx-auto">
              Choose the partnership model that best fits your business goals and capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="futuristic-card group hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <type.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                    <p className="text-zion-slate-light mb-4">{type.description}</p>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-zion-slate-light flex items-center">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark/20 to-zion-purple/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="futuristic-heading text-3xl lg:text-4xl mb-4">
              Our Current Partners
            </h2>
            <p className="futuristic-text text-lg max-w-2xl mx-auto">
              Trusted by industry leaders and innovators worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="futuristic-card text-center group hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{partner.logo.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{partner.name}</h3>
                <p className="text-zion-cyan text-sm font-medium mb-2">{partner.category}</p>
                <p className="text-zion-slate-light text-sm mb-3">{partner.description}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zion-purple">{partner.partnership}</span>
                  <span className="text-zion-slate-light">{partner.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="futuristic-heading text-3xl lg:text-4xl mb-4">
              Partnership Process
            </h2>
            <p className="futuristic-text text-lg max-w-2xl mx-auto">
              Simple steps to establish a successful partnership with Zion Tech Group
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="futuristic-card text-center group hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-zion-cyan mb-2">{step.step}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-zion-slate-light text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark/20 to-zion-purple/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="futuristic-heading text-3xl lg:text-4xl mb-4">
              Why Partner With Us?
            </h2>
            <p className="futuristic-text text-lg max-w-2xl mx-auto">
              Discover the advantages of joining our partner ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="futuristic-card text-center group hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-zion-slate-lighter mb-8 max-w-2xl mx-auto">
              Join our partner ecosystem and start growing your business with Zion Tech Group today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="futuristic-button inline-flex items-center"
              >
                Apply for Partnership
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="futuristic-button-outline inline-flex items-center"
              >
                Schedule a Call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
