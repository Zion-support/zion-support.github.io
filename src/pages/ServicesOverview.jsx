import { Brain, Cloud, Shield, Database, Wifi, Link as LinkIcon, Zap, Server, Users, Target, Check, ArrowRight } from "lucide - react";"""
import { Link } from "react - router - dom";"""
import React from "react";""
import { SEO } from "@/components/SEO";"""
import { Link } from "react-router-dom";"""
import { motion } from "framer-motion";"""
import { Brain, Cloud, Shield, Database, Wifi, Link as LinkIcon, Zap, Server, Users, Target, Check, ArrowRight } from "lucide-react';
export default function ServicesOverview() {}
"""
    const stats = [""""
        { label: "Services Offered", value: "50+", icon: Target },""""
        { label: "Industries Served", value: "15+", icon: Users },""""
        { label: "Technologies", value: "100+", icon: Server },""""
        { label: "Client Satisfaction", value: "98%", icon: Check }
    ];
    const containerVariants = {}
        hidden: { opacity: 0 },
        visible: {}
            opacity: 1,
            transition: {}
                staggerChildren: 0.1;
    };
    const itemVariants = {}
  hidden: { y: 20,
  opacity: 0;
},
        visible: {}
            y: 0,
            opacity: 1,
            transition: {}
"""
                duration: 0.5,""""
                ease: "easeOut"""
"""
    };""""
    return (<div className="min-h-screen bg-background">""""
      <SEO title="All Services - Zion Tech Group Comprehensive Technology Solutions" description="Explore our complete range of technology services including AI, data analytics, IoT, blockchain, DevOps, and cybersecurity solutions." keywords="technology services, AI services, data analytics, IoT solutions, blockchain development, DevOps consulting, cybersecurity services" canonical="https://ziontechgroup.com/services"   />
"""
      {/* comment */}""""
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-20">""""
        <div className="absolute inset-0 bg-black/20"></div>""""
        <div className="relative container mx-auto px-4 text-center">""""
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Our Complete Service Portfolio"""
          </h1>""""
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive range of technology solutions designed to transform your business.
            From AI and data analytics to IoT and blockchain, we have the expertise to drive your success.
          </p>
        </div>
      </section>
"""
      {/* comment */}""""
      <section className="py-16 bg-white">""""
        <div className="container mx-auto px-4">""""
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>""""
            {stats.map((stat, index) => (<motion.div key={stat.label} variants={itemVariants} className="text-center">""""
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">""""
                  <stat.icon className="w-8 h-8 text-white" />"""
                </div>""""
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>""""
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>))}
          </motion.div>
        </div>
      </section>
"""
      {/* comment */}""""
      <section className="py-20 bg-gray-50">""""
        <div className="container mx-auto px-4">""""
          <motion.div className="text-center mb-16" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>""""
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Categories</h2>""""
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of technology solutions organized by category;
            </p>
          </motion.div>"""
""""
          <motion.div className="space-y-12" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>""""
            {serviceCategories.map((category, index) => (<motion.div key={category.name} variants={itemVariants} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">"""
                <div className={"bg-gradient-to-r ${category.color} p-8 text-white"}>""""
                  <div className="flex items-center mb-4">""""
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mr-6">""""
                      <category.icon className="w-8 h-8" />
                    </div>"""
                    <div>""""
                      <h3 className="text-3xl font-bold mb-2">{category.name}</h3>""""
                      <p className="text-xl opacity-90">{category.description}</p>
                    </div>
                  </div>
                </div>"""
""""
                <div className="p-8">""""
                  <div className="grid md:grid-cols-3 gap-6">""""
                    {category.services.map((service, serviceIndex) => (<div key={serviceIndex} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors">""""
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h4>""""
                        <p className="text-gray-600 mb-4">{service.description}</p>""""
                        <div className="flex items-center justify-between">""""
                          <span className="text-lg font-semibold text-blue-600">{service.price}</span>""""
                          <Link to={service.href} className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">"""
                            Learn More""""
                            <ArrowRight className="w-4 h-4 ml-1"   />
                          </Link>
                        </div>
                      </div>) ) }
                  </div>"""
"""
                  <div className="mt-8 text-center">""
                    <Link to={category.services[0].href} className={"inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${category.color} hover:opacity-90 transition-opacity`}>"""
                      Explore All {category.name} Services""""
                      <ArrowRight className="w-5 h-5 ml-2"   />
                    </Link>
                  </div>
                </div>
              </motion.div>) ) }
          </motion.div>
        </div>
      </section>
"""
      {/* comment */}""""
      <section className="py-20 bg-white">""""
        <div className="container mx-auto px-4">""""
          <motion.div className="text-center mb-16" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>""""
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>""""
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep technical expertise with business acumen to deliver solutions that drive real value;
            </p>
          </motion.div>"""
""""
          <motion.div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>""""
            <motion.div variants={itemVariants} className="text-center">""""
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">""""
                <Users className="w-8 h-8 text-blue-600"   />"""
              </div>""""
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>""""
              <p className="text-gray-600">
                Certified professionals with deep expertise across multiple technology domains;
              </p>
            </motion.div>"""
""""
            <motion.div variants={itemVariants} className="text-center">""""
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">""""
                <Target className="w-8 h-8 text-green-600"   />"""
              </div>""""
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Results</h3>""""
              <p className="text-gray-600">
                Track record of successful implementations and measurable business outcomes;
              </p>
            </motion.div>"""
""""
            <motion.div variants={itemVariants} className="text-center">""""
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">""""
                <Zap className="w-8 h-8 text-purple-600"   />"""
              </div>""""
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation Focus</h3>""""
              <p className="text-gray-600">
                Stay ahead with cutting-edge technologies and emerging industry trends;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
"""
      {/* comment */}""""
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">""""
        <div className="container mx-auto px-4 text-center">""""
          <motion.h2 className="text-4xl font-bold mb-6" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Ready to Transform Your Business?"""
          </motion.h2>""""
          <motion.p className="text-xl mb-8 max-w-3xl mx-auto" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Let our technology experts help you choose the right solutions and implement them successfully"""
          </motion.p>""""
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>""""
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started Today"""
            </Link>""""
            <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Consultation;
            </Link>
          </motion.div>
        </div>
      </section>
    </div>)}


export { ServicesOverview };
export { ServicesOverview };
export { ServicesOverview };
export { ServicesOverview };
export { ServicesOverview };