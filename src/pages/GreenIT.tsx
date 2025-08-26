import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Leaf, Server, Cloud, Zap, Recycle, Globe, TrendingUp, Shield, Lightbulb, Users, ArrowRight } from 'lucide-react';

export default function GreenIT() {
  const greenSolutions = [
    {
      icon: <Leaf className="w-8 h-8 text-green-400" />,
      title: "Sustainable Data Centers",
      description: "Energy-efficient data centers powered by renewable energy sources with advanced cooling systems and waste heat recovery.",
      benefits: ["Reduced carbon footprint", "Lower energy costs", "Improved efficiency"]
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Renewable Energy Integration",
      description: "Seamless integration of solar, wind, and hydroelectric power into IT infrastructure.",
      benefits: ["100% renewable energy", "Grid independence", "Cost savings over time"]
    },
    {
      icon: <Recycle className="w-8 h-8 text-blue-400" />,
      title: "Circular IT Economy",
      description: "Hardware recycling, refurbishment, and responsible disposal programs to minimize e-waste.",
      benefits: ["Reduced e-waste", "Extended hardware lifecycle", "Environmental compliance"]
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: "Carbon-Neutral Operations",
      description: "Comprehensive carbon offset programs and sustainable business practices across all operations.",
      benefits: ["Carbon neutrality", "ESG compliance", "Brand reputation"]
    }
  ];

  const services = [
    {
      title: "Green IT Consulting",
      description: "Expert guidance on implementing sustainable technology practices and reducing environmental impact.",
      features: ["Energy audits", "Sustainability roadmaps", "ROI analysis"],
      price: "Starting at $5,000"
    },
    {
      title: "Sustainable Infrastructure",
      description: "Design and implementation of eco-friendly IT infrastructure and data centers.",
      features: ["Energy-efficient hardware", "Smart cooling systems", "Renewable energy integration"],
      price: "Custom pricing"
    },
    {
      title: "E-waste Management",
      description: "Comprehensive electronic waste collection, recycling, and disposal services.",
      features: ["Secure data destruction", "Certified recycling", "Compliance reporting"],
      price: "Starting at $2,000"
    },
    {
      title: "Carbon Footprint Analysis",
      description: "Detailed assessment of your IT operations' environmental impact with actionable recommendations.",
      features: ["Comprehensive analysis", "Reduction strategies", "Progress tracking"],
      price: "Starting at $3,500"
    }
  ];

  const caseStudies = [
    {
      company: "TechCorp Global",
      industry: "Technology",
      challenge: "High energy costs and carbon footprint from data centers",
      solution: "Implemented green data center solutions with renewable energy integration",
      results: "40% reduction in energy costs, 60% decrease in carbon emissions"
    },
    {
      company: "GreenBank Financial",
      industry: "Financial Services",
      challenge: "Need for sustainable IT practices to meet ESG requirements",
      solution: "Comprehensive green IT transformation with carbon-neutral operations",
      results: "Achieved carbon neutrality, improved ESG ratings, enhanced brand reputation"
    },
    {
      company: "EcoManufacturing Inc",
      industry: "Manufacturing",
      challenge: "High e-waste generation and inefficient IT infrastructure",
      solution: "Circular IT economy implementation with sustainable infrastructure",
      results: "70% reduction in e-waste, 50% improvement in IT efficiency"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mb-6">
            <Leaf className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Green IT Solutions
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Sustainable technology solutions that reduce environmental impact while improving efficiency and reducing costs. 
            Join the green technology revolution with Zion Tech Group.
          </p>
        </motion.div>

        {/* Green Solutions Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {greenSolutions.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-lg p-6 text-center hover:border-green-400/40 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
              <p className="text-zion-slate-light mb-4 text-sm leading-relaxed">{solution.description}</p>
              <ul className="space-y-2 text-sm">
                {solution.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="text-green-400 flex items-center justify-center">
                    <Leaf className="w-4 h-4 mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Green IT Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-zinc-800/30 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300"
                whileHover={{ y: -2, scale: 1.01 }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-zion-slate-light flex items-center">
                      <Leaf className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-semibold">{service.price}</span>
                  <Link 
                    to="/contact" 
                    className="text-zion-cyan hover:text-white transition-colors font-medium flex items-center"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Case Studies */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-lg p-6 hover:border-green-400/40 transition-all duration-300"
                whileHover={{ y: -3, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
              >
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-1">{study.company}</h4>
                  <span className="text-sm text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                    {study.industry}
                  </span>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-zion-slate-light">Challenge:</span>
                    <p className="text-white mt-1">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="text-zion-slate-light">Solution:</span>
                    <p className="text-white mt-1">{study.solution}</p>
                  </div>
                  <div>
                    <span className="text-zion-slate-light">Results:</span>
                    <p className="text-green-400 mt-1 font-medium">{study.results}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <div className="bg-gradient-to-r from-green-400/10 to-emerald-500/10 border border-green-400/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Go Green?</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Transform your IT operations with sustainable technology solutions. 
              Reduce costs, improve efficiency, and make a positive environmental impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-lg font-medium hover:scale-105 transition-transform"
              >
                Get Started
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center px-6 py-3 bg-zinc-800/50 text-white rounded-lg font-medium hover:bg-zinc-700/50 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}