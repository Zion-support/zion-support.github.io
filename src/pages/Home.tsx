import React from 'react';'
import { motion } from 'framer-motion';''
import { Link } from 'react-router-dom';''
import { SEO } from '../components/SEO';''
import EnhancedHero from '../components/EnhancedHero';
import { 
  Zap, Brain, Rocket, Shield, Globe, Users, ArrowRight, CheckCircle, Star, Cpu, Atom, Cloud, Lock, Target, TrendingUp, Lightbulb, Code, Server, ;'
  Database, Network, Smartphone, Building, Heart, Award, MessageCircle, Phone, Mail, MapPin ;''
} from 'lucide-react';
export default React.memo(function Home() {
  const features = ['
    { ''
      icon: Brain, title: 'AI-Powered Solutions', ''
      description: 'Cutting-edge artificial intelligence that transforms business operations and drives innovation.', color: 'from-purple-500 to-pink-500' 
    },'
    { ''
      icon: Atom, title: 'Quantum Computing', ''
      description: 'Next-generation quantum solutions that solve complex problems beyond classical computing.', color: 'from-orange-500 to-red-500' 
    },'
    { ''
      icon: Rocket, title: 'Micro SAAS Platform', ''
      description: 'Innovative software-as-a-service solutions that scale with your business needs.', color: 'from-blue-500 to-cyan-500' 
    },'
    { ''
      icon: Shield, title: 'Enterprise Security', ''
      description: 'Military-grade cybersecurity and compliance solutions for enterprise protection.', color: 'from-green-500 to-emerald-500' 
    };
  ];'
  const stats = [''
    { number: '500+', label: 'Projects Completed', icon: CheckCircle }, { number: '50+', label: 'Team Members', icon: Users },''
    { number: '25+', label: 'Countries Served', icon: Globe }, { number: '99%', label: 'Client Satisfaction', icon: Star };
  ];
  const services = ['
    { ''
      title: 'AI Services', description: 'Comprehensive AI solutions for business automation and intelligence', ''
      href: '/ai-services', icon: Brain, ''
      color: 'from-purple-500 to-pink-500' '
    }, { ''
      title: 'IT Infrastructure', ''
      description: 'Enterprise-grade IT solutions and cloud architecture', href: '/it-services', ''
      icon: Server, color: 'from-green-500 to-emerald-500' 
    },'
    { ''
      title: 'Quantum Solutions', description: 'Cutting-edge quantum computing and technology services', ''
      href: '/services/quantum-computing', icon: Atom, ''
      color: 'from-orange-500 to-red-500' '
    }, { ''
      title: 'Micro SAAS', ''
      description: 'Innovative software solutions for modern businesses', href: '/micro-saas', ''
      icon: Rocket, color: 'from-blue-500 to-cyan-500' 
    };
  ];
  return (
    <>
      <SEO '
        title="Zion Tech Group - Leading AI & Quantum Technology Solutions"'"'"
        description="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative micro SAAS services. Enterprise-grade technology solutions for the future."'""
        keywords="AI services, quantum computing, micro SAAS, IT infrastructure, cybersecurity, Zion Tech Group, technology solutions" /></SEO>
      <EnhancedHero /></EnhancedHero>"
      ""
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50"></section>""
        <div className="container mx-auto px-4"></div>""
          <div className="grid grid-cols-2 md: grid-cols-4 gap-8"></div>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}"
                transition={{ duration: 0.8, delay: index * 0.1 }}""
                className="text-center""
              ></motion>""
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-6 border border-cyan-400/20"></div>""
                  <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" /></stat>""
                  <div className="text-3xl font-bold text-white mb-2"></di>{stat.number}</div>""
                  <div className="text-gray-300"></di>{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>"
""
      <section className="py-20"></section>""
        <div className="container mx-auto px-4"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}"
            transition={{ duration: 0.8 }}""
            className="text-center mb-16""
          ></motion>""
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4"></h2>
              Why Choose Zion Tech Group?"
            </h2>""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              We combine cutting-edge technology with proven business strategies to deliver 
              solutions that transform industries and drive success.
            </p>
          </motion.div>"
""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}"
                transition={{ duration: 0.8, delay: index * 0.1 }}""
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              ></motion>"
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6`}></div>""
                  <feature.icon className="w-8 h-8 text-white" /></feature>"
                </div>""
                <h3 className="text-xl font-bold text-white mb-3"></h>{feature.title}</h3>""
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>"
""
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50"></section>""
        <div className="container mx-auto px-4"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}"
            transition={{ duration: 0.8 }}""
            className="text-center mb-16""
          ></motion>""
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4"></h2>
              Our Core Services"
            </h2>""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Comprehensive technology solutions designed to meet the evolving needs of modern businesses
            </p>
          </motion.div>"
""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}"
                transition={{ duration: 0.8, delay: index * 0.1 }}""
                className="group""
              ></motion>""
                <Link to={service.href} className="block"></Link>""
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 group-hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-105 h-full"></div>"
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}></div>""
                      <service.icon className="w-8 h-8 text-white" /></service>"
                    </div>""
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors"></h3>
                      {service.title}"
                    </h3>""
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>""
                    <div className="mt-4 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors"></div>""
                      <span className="text-sm font-medium"></spa>Learn More</span>""
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></ArrowRight>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>"
""
      <section className="py-20"></section>""
        <div className="container mx-auto px-4"></div>""
          <div className="max-w-4xl mx-auto text-center"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
            ></motion>""
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
                Ready to Transform Your Business?"
              </h2>""
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p>
                Join hundreds of companies already leveraging our AI-powered solutions 
                to drive growth and innovation."
              </p>""
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>"
                <Link""
                  to="/contact"""
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105""
                ></Link>""
                  <MessageCircle className="w-5 h-5 mr-2" /></MessageCircle>
                  Get Started Today
                </Link>"
                <Link""
                  to="/about"""
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200""
                ></Link>""
                  <Users className="w-5 h-5 mr-2" /></Users>
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>"
""
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50"></section>""
        <div className="container mx-auto px-4"></div>""
          <div className="max-w-4xl mx-auto"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}"
              transition={{ duration: 0.8 }}""
              className="text-center mb-12""
            ></motion>""
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
                Get in Touch"
              </h2>""
              <p className="text-lg text-gray-300"></p>
                Ready to discuss your technology needs? Contact us today.
              </p>
            </motion.div>"
""
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}"
                transition={{ duration: 0.8, delay: 0.1 }}""
                className="text-center""
              ></motion>""
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4"></div>""
                  <Phone className="w-8 h-8 text-white" /></Phone>"
                </div>""
                <h3 className="text-xl font-bold text-white mb-2"></h>Phone</h3>""
                <p className="text-gray-300">+1 302 464 0950</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}"
                transition={{ duration: 0.8, delay: 0.2 }}""
                className="text-center""
              ></motion>""
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4"></div>""
                  <Mail className="w-8 h-8 text-white" /></Mail>"
                </div>""
                <h3 className="text-xl font-bold text-white mb-2"></h>Email</h3>""
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}"
                transition={{ duration: 0.8, delay: 0.3 }}""
                className="text-center""
              ></motion>""
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4"></div>""
                  <MapPin className="w-8 h-8 text-white" /></MapPin>"
                </div>""
                <h3 className="text-xl font-bold text-white mb-2"></h>Address</h3>""
                <p className="text-gray-300">364 E Main St STE 1008<br /></br>Middletown DE 19709</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
</>
  );'"
});'"'"