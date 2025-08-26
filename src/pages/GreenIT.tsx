import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { 
  Leaf, 
  Zap, 
  Recycle, 
  Globe, 
  TrendingUp, 
  Shield, 
  Lightbulb, 
  Users,
  CheckCircle,
  ArrowRight,
  Award,
  Clock
} from 'lucide-react';
=======
import { motion } from 'framer-motion';
import { Leaf, Server, Cloud, Zap, Recycle, Globe, TrendingUp, Shield, Lightbulb, Users, ArrowRight } from 'lucide-react';
>>>>>>> cursor/website-audit-and-enhancement-1eed

export default function GreenIT() {
  const greenSolutions = [
    {
      icon: Leaf,
      title: "Sustainable Data Centers",
      description: "Energy-efficient data centers powered by renewable energy sources with advanced cooling systems and waste heat recovery.",
      benefits: ["Reduced carbon footprint", "Lower energy costs", "Improved efficiency"]
    },
    {
      icon: Zap,
      title: "Renewable Energy Integration",
      description: "Seamless integration of solar, wind, and hydroelectric power into IT infrastructure.",
      benefits: ["100% renewable energy", "Grid independence", "Cost savings over time"]
    },
    {
      icon: Recycle,
      title: "Circular IT Economy",
      description: "Hardware recycling, refurbishment, and responsible disposal programs to minimize e-waste.",
      benefits: ["Reduced e-waste", "Extended hardware lifecycle", "Environmental compliance"]
    },
    {
      icon: Globe,
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
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Green <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">IT Solutions</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed mb-8">
              Sustainable technology solutions that reduce environmental impact while maintaining 
              performance and driving business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 font-medium"
              >
                Get Green IT Assessment
              </Link>
              <button className="border border-green-400 text-green-400 px-8 py-3 rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300 font-medium">
                Download Sustainability Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Green Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Sustainable Technology Solutions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our comprehensive green IT solutions help organizations reduce their environmental 
              footprint while improving operational efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {greenSolutions.map((solution, index) => (
              <div key={index} className="bg-zion-blue-light/10 rounded-lg p-8 border border-zion-blue-light/20 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-zion-slate-light mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Green IT Services</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive services to help your organization implement sustainable 
              technology practices and achieve environmental goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <span className="text-green-400 font-medium">{service.price}</span>
                </div>
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-zion-slate-light text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              See how organizations have successfully implemented green IT solutions 
              and achieved significant environmental and business benefits.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-zion-blue-light/10 rounded-lg p-6 border border-zion-blue-light/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{study.company}</h3>
                  <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                    {study.industry}
                  </span>
                </div>
                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="text-sm font-medium text-zion-cyan mb-1">Challenge</h4>
                    <p className="text-zion-slate-light text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-zion-cyan mb-1">Solution</h4>
                    <p className="text-zion-slate-light text-sm">{study.solution}</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-green-400 mb-2">Results</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center space-x-2 text-zion-slate-light text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Environmental Impact</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our green IT solutions have helped organizations make significant 
              progress toward sustainability goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">40%</h3>
              <p className="text-zion-slate-light">Average energy cost reduction</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">60%</h3>
              <p className="text-zion-slate-light">Carbon emissions decrease</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">80%</h3>
              <p className="text-zion-slate-light">E-waste reduction</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">25%</h3>
              <p className="text-zion-slate-light">Operational efficiency improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Go Green?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Start your journey toward sustainable technology today. Our experts will 
            help you implement green IT solutions that benefit both your business and the environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 font-medium flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <button className="border border-green-400 text-green-400 px-8 py-3 rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300 font-medium">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
=======
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
>>>>>>> cursor/website-audit-and-enhancement-1eed
    </div>
  );
}