import React from 'react';'
import { motion } from 'framer-motion';''
import { SEO } from '../components/SEO';
import { ;'
  Handshake, Globe, Award, Users, Building, Star, CheckCircle, ArrowRight, ExternalLink ;''
} from 'lucide-react';
export default function Partners() {
  const partners = [
    {
      id: 1, name: "Microsoft",""
      category: "Technology Partner", description: "Strategic partnership in cloud computing and AI solutions",""
      logo: "/api/placeholder/200/100", website: "https://microsoft.com",""
      benefits: ["Azure Integration", "AI Services", "Enterprise Solutions"]
    }, {"
      id: 2,""
      name: "Google Cloud", category: "Cloud Partner",""
      description: "Advanced cloud infrastructure and machine learning platforms", logo: "/api/placeholder/200/100",""
      website: "https://cloud.google.com", benefits: ["GCP Services", "ML Platforms", "Data Analytics"]
    }, {"
      id: 3,""
      name: "IBM", category: "Quantum Computing Partner",""
      description: "Quantum computing research and development collaboration", logo: "/api/placeholder/200/100",""
      website: "https://ibm.com", benefits: ["Quantum Systems", "Research Collaboration", "Enterprise AI"]
    }, {"
      id: 4,""
      name: "Amazon Web Services", category: "Cloud Infrastructure Partner",""
      description: "Comprehensive cloud services and infrastructure solutions", logo: "/api/placeholder/200/100",""
      website: "https://aws.amazon.com", benefits: ["AWS Services", "Infrastructure", "Global Reach"]
    }, {"
      id: 5,""
      name: "NVIDIA", category: "AI Hardware Partner",""
      description: "Advanced GPU solutions for AI and machine learning workloads", logo: "/api/placeholder/200/100",""
      website: "https://nvidia.com", benefits: ["GPU Solutions", "AI Acceleration", "Deep Learning"]
    }, {"
      id: 6,""
      name: "Intel", category: "Technology Partner",""
      description: "Advanced processor technologies and AI optimization", logo: "/api/placeholder/200/100",""
      website: "https://intel.com", benefits: ["Processor Tech", "AI Optimization", "Performance"]
    };
  ];
  const partnershipTypes = ["
    {""
      title: "Technology Partners", description: "Leading technology companies providing cutting-edge solutions","
      icon: Building, count: 12,""
      color: "from-blue-500 to-cyan-500""
    }, {""
      title: "Cloud Partners",""
      description: "Global cloud providers enabling scalable infrastructure", icon: Globe,""
      count: 8, color: "from-green-500 to-emerald-500"
    },"
    {""
      title: "Research Partners", description: "Academic institutions and research organizations","
      icon: Award, count: 15,""
      color: "from-purple-500 to-pink-500""
    }, {""
      title: "Channel Partners",""
      description: "Distribution and implementation partners worldwide", icon: Handshake,""
      count: 25, color: "from-orange-500 to-red-500"
    };
  ];"
  const benefits = [""
    "Access to cutting-edge technology and platforms", "Joint research and development opportunities",""
    "Global market reach and distribution channels", "Technical support and training programs",""
    "Co-marketing and go-to-market strategies", "Priority access to new features and updates";
  ];
  return (
    <>"
      <SEO ""
        title="Partners - Zion Tech Group | Strategic Technology Partnerships"""
        description="Discover our strategic partnerships with leading technology companies, cloud providers, and research institutions that enable us to deliver world-class solutions."""
        keywords="partners, partnerships, technology partners, cloud partners, strategic alliances, Zion Tech Group" /></SEO>"
      ""
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>"
        {/* Hero Section */}""
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></section>""
          <div className="container mx-auto px-4"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}"
              transition={{ duration: 0.8 }}""
              className="text-center max-w-4xl mx-auto""
            ></motion>""
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>
                Our Partners"
              </h1>""
              <p className="text-xl text-gray-300 mb-8"></p>
                Strategic partnerships with industry leaders enable us to deliver 
                comprehensive technology solutions and drive innovation across all sectors."
              </p>""
              <div className="flex items-center justify-center"></div>""
                <Handshake className="w-16 h-16 text-blue-400" /></Handshake>
              </div>
            </motion.div>
          </div>
        </section>
"
        {/* Partnership Types */}""
        <section className="py-16"></section>""
          <div className="container mx-auto px-4"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}"
              transition={{ duration: 0.8 }}""
              className="text-center mb-12""
            ></motion>""
              <h2 className="text-4xl font-bold text-white mb-4"></h>Partnership Categories</h2>""
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                We work with diverse partners across technology, research, and distribution to deliver comprehensive solutions
              </p>
            </motion.div>"
""
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}"
                  transition={{ duration: 0.8, delay: index * 0.1 }}""
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                ></motion>"
                  <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center mb-4`}></div>""
                    <type.icon className="w-8 h-8 text-white" /></type>"
                  </div>""
                  <h3 className="text-xl font-bold text-white mb-2"></h>{type.title}</h3>""
                  <p className="text-gray-300 text-sm mb-3">{type.description}</p>""
                  <div className="text-2xl font-bold text-blue-400"></di>{type.count}+</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
"
        {/* Partners Grid */}""
        <section className="py-16"></section>""
          <div className="container mx-auto px-4"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}"
              transition={{ duration: 0.8 }}""
              className="text-center mb-12""
            ></motion>""
              <h2 className="text-4xl font-bold text-white mb-4"></h>Our Strategic Partners</h2>""
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Leading technology companies and organizations that share our vision of innovation
              </p>
            </motion.div>"
""
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}"
                  transition={{ duration: 0.8, delay: index * 0.1 }}""
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105""
                ></motion>""
                  <div className="h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4"></div>""
                    <div className="text-4xl opacity-20 font-bold text-white"></di>{partner.name.charAt(0)}</div>
                  </div>"
                  ""
                  <div className="mb-3"></div>""
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-xs"></span>
                      {partner.category}
                    </span>
                  </div>"
                  ""
                  <h3 className="text-xl font-bold text-white mb-2"></h>{partner.name}</h3>""
                  <p className="text-gray-300 text-sm mb-4">{partner.description}</p>"
                  ""
                  <div className="mb-4"></div>""
                    <h4 className="text-sm font-semibold text-white mb-2"></h>Key Benefits</h4>""
                    <div className="space-y-1"></div>"
                      {partner.benefits.map((benefit, benefitIndex) => (""
                        <div key={benefitIndex} className="flex items-center text-xs text-gray-400"></div>""
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2" /></CheckCircle>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  <a"
                    href={partner.website}""
                    target="_blank"""
                    rel="noopener noreferrer"""
                    className="inline-flex items-center text-blue-400 hover: text-blue-300 transition-colors""
                  ></a>""
                    <span className="text-sm"></spa>Visit Website</span>""
                    <ExternalLink className="w-4 h-4 ml-1" /></ExternalLink>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
"
        {/* Partnership Benefits */}""
        <section className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50"></section>""
          <div className="container mx-auto px-4"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}"
              transition={{ duration: 0.8 }}""
              className="text-center mb-12""
            ></motion>""
              <h2 className="text-4xl font-bold text-white mb-4"></h>Partnership Benefits</h2>""
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Our strategic partnerships provide mutual value and enable us to deliver superior solutions
              </p>
            </motion.div>"
""
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}"
                  transition={{ duration: 0.8, delay: index * 0.1 }}""
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50""
                ></motion>""
                  <div className="flex items-start"></div>""
                    <Star className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" /></Star>""
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
"
        {/* Become a Partner */}""
        <section className="py-20"></section>""
          <div className="container mx-auto px-4"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}"
              transition={{ duration: 0.8 }}""
              className="text-center max-w-4xl mx-auto""
            ></motion>""
              <h2 className="text-4xl font-bold text-white mb-6"></h2>
                Become a Partner"
              </h2>""
              <p className="text-xl text-gray-300 mb-8"></p>'
                Join our network of strategic partners and help shape the future of technology. ''
                We're always looking for innovative companies to collaborate with.'"
              </p>""
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>"
                <a""
                  href="/contact"""
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105""
                ></a>""
                  <Handshake className="w-5 h-5 mr-2" /></Handshake>
                  Partner with Us
                </a>"
                <a""
                  href="/about"""
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200""
                ></a>""
                  <ArrowRight className="w-5 h-5 mr-2" /></ArrowRight>
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
</>
  );'"
}'"'"