import React from &apos;
import Link from &apos;next/link';react';
import { motion } from &apos;framer-motion';
import { Link } from &apos;react-router-dom';
import { SEO } from &apos;../components/SEO';
import EnhancedHero from &apos;../components/EnhancedHero';
import { 
  Zap, Brain, Rocket, Shield, Globe, Users, ArrowRight, CheckCircle, Star, 
  Cpu, Atom, Cloud, Lock, Target, TrendingUp, Lightbulb, Code, Server, 
  Database, Network, Smartphone, Building, Heart, Award, MessageCircle, 
  Phone, Mail, MapPin 
} from &apos;lucide-react';&apos;&apos;

export default React.memo(function Home() {}
  const features = [
    { 
      icon: Brain, 
      title: &apos;AI-Powered Solutions&apos;, 
      description: &apos;Cutting-edge artificial intelligence that transforms business operations and drives innovation.&apos;, 
      color: &apos;from-purple-500 to-pink-500&apos; 
    },
    { 
      icon: Atom, 
      title: &apos;Quantum Computing&apos;, 
      description: &apos;Next-generation quantum solutions that solve complex problems beyond classical computing.&apos;, 
      color: &apos;from-orange-500 to-red-500&apos; 
    },
    { 
      icon: Rocket, 
      title: &apos;Micro SAAS Platform&apos;, 
      description: &apos;Innovative software-as-a-service solutions that scale with your business needs.&apos;, 
      color: &apos;from-blue-500 to-cyan-500&apos; 
    },
    { 
      icon: Shield, 
      title: &apos;Enterprise Security&apos;, 
      description: &apos;Military-grade cybersecurity and compliance solutions for enterprise protection.&apos;, 
      color: &apos;from-green-500 to-emerald-500&apos; 
    }
  ];&apos;

  const stats = [
    { number: &apos;500+&apos;, label: &apos;Projects Completed&apos;, icon: CheckCircle },
    { number: &apos;50+&apos;, label: &apos;Team Members&apos;, icon: Users },
    { number: &apos;25+&apos;, label: &apos;Countries Served&apos;, icon: Globe },
    { number: &apos;99%&apos;, label: &apos;Client Satisfaction&apos;, icon: Star }
  ];&apos;

  const services = [
    { 
      title: &apos;AI Services&apos;, 
      description: &apos;Comprehensive AI solutions for business automation and intelligence&apos;, 
      href: &apos;/ai-services&apos;, 
      icon: Brain, 
      color: &apos;from-purple-500 to-pink-500&apos; 
    },
    { 
      title: &apos;IT Infrastructure&apos;, 
      description: &apos;Enterprise-grade IT solutions and cloud architecture&apos;, 
      href: &apos;/it-services&apos;, 
      icon: Server, 
      color: &apos;from-green-500 to-emerald-500&apos; 
    },
    { 
      title: &apos;Quantum Solutions&apos;, 
      description: &apos;Cutting-edge quantum computing and technology services&apos;, 
      href: &apos;/services/quantum-computing&apos;, 
      icon: Atom, 
      color: &apos;from-orange-500 to-red-500&apos; 
    },
    { 
      title: &apos;Micro SAAS&apos;, 
      description: &apos;Innovative software solutions for modern businesses&apos;, 
      href: &apos;/micro-saas&apos;, 
      icon: Rocket, 
      color: &apos;from-blue-500 to-cyan-500&apos; 
    }
  ];

  return (&apos;
    <>
      <SEO 
        title=&quot;Zion Tech Group - Leading AI & Quantum Technology Solutions&quot;
        description=&quot;Transform your business with Zion Tech Group&apos;s cutting-edge AI solutions, quantum computing, and innovative micro SAAS services. Enterprise-grade technology solutions for the future.&quot;
        keywords=&quot;AI services, quantum computing, micro SAAS, IT infrastructure, cybersecurity, Zion Tech Group, technology solutions&quot;
      />&quot;
      <EnhancedHero />
      
      <section className=&quot;py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50&quot;>&quot;"
        <div className=&quot;container mx-auto px-4&quot;>&quot;"
          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8&quot;>
            {stats.map((stat, index) => (&quot;}
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className=&quot;text-center&quot;
              >&quot;
                <div className=&quot;bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-6 border border-cyan-400/20&quot;>&quot;"
                  <stat.icon className=&quot;w-12 h-12 text-cyan-400 mx-auto mb-4&quot; />&quot;
                  <div className=&quot;text-3xl font-bold text-white mb-2&quot;>{stat.number}&quot;</div>
                  <div className=&quot;text-gray-300&quot;>{stat.label}&quot;</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className=&quot;py-20&quot;>&quot;"
        <div className=&quot;container mx-auto px-4&quot;>&quot;"
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;text-center mb-16&quot;
          >&quot;
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-4&quot;>
              Why Choose Zion Tech Group?&quot;
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              We combine cutting-edge technology with proven business strategies to deliver 
              solutions that transform industries and drive success.&quot;
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-4 gap-8&quot;>
            {features.map((feature, index) => (&quot;}
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hove,r:scale-105&quot;
              >&quot;
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className=&quot;w-8 h-8 text-white&quot; />&quot;
                </div>
                <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{feature.title}&quot;</h3>
                <p className=&quot;text-gray-300 leading-relaxed&quot;>{feature.description}&quot;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className=&quot;py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50&quot;>&quot;"
        <div className=&quot;container mx-auto px-4&quot;>&quot;"
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;text-center mb-16&quot;
          >&quot;
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-4&quot;>
              Our Core Services&quot;
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Comprehensive technology solutions designed to meet the evolving needs of modern businesses&quot;
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-4 gap-8&quot;>
            {services.map((service, index) => (&quot;}
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className=&quot;group&quot;
              >&quot;
                <Link to={service.href} className=&quot;block&quot;>&quot;"
                  <div className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 group-hover:border-cyan-400/50 transition-all duration-300 group-hove,r:scale-105 h-full&quot;>&quot;"
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                      <service.icon className=&quot;w-8 h-8 text-white&quot; />&quot;
                    </div>
                    <h3 className=&quot;text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors&quot;>
                      {service.title}&quot;
                    </h3>
                    <p className=&quot;text-gray-300 leading-relaxed&quot;>{service.description}&quot;</p>
                    <div className=&quot;mt-4 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors&quot;>&quot;"
                      <span className=&quot;text-sm font-medium&quot;>Learn More&quot;</span>
                      <ArrowRight className=&quot;w-4 h-4 ml-2 group-hove,r:translate-x-1 transition-transform&quot; />&quot;
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className=&quot;py-20&quot;>&quot;"
        <div className=&quot;container mx-auto px-4&quot;>&quot;"
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Ready to Transform Your Business?&quot;
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
                Join hundreds of companies already leveraging our AI-powered solutions 
                to drive growth and innovation.&quot;
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>&quot;"
                <Link
                  to=&quot;/contact&quot;
                  className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105&quot;
                >&quot;
                  <MessageCircle className=&quot;w-5 h-5 mr-2&quot; />
                  Get Started Today&quot;
                </Link>
                <Link
                  to=&quot;/about&quot;
                  className=&quot;inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200&quot;
                >&quot;
                  <Users className=&quot;w-5 h-5 mr-2&quot; />
                  Learn About Us&quot;
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className=&quot;py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50&quot;>&quot;"
        <div className=&quot;container mx-auto px-4&quot;>&quot;"
          <div className=&quot;max-w-4xl mx-auto&quot;>&quot;"
            <motion.div
              initial={{ opacit,y: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-12&quot;
            >&quot;
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
                Get in Touch&quot;
              </h2>
              <p className=&quot;text-lg text-gray-300&quot;>
                Ready to discuss your technology needs? Contact us today.&quot;
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>&quot;"
              <motion.div
                initial={{ opacit,y: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className=&quot;text-center&quot;
              >&quot;
                <div className=&quot;w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4&quot;>&quot;"
                  <Phone className=&quot;w-8 h-8 text-white&quot; />&quot;
                </div>
                <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>Phone&quot;</h3>
                <p className=&quot;text-gray-300&quot;>+1 302 464 0950&quot;</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className=&quot;text-center&quot;
              >&quot;
                <div className=&quot;w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4&quot;>&quot;"
                  <Mail className=&quot;w-8 h-8 text-white&quot; />&quot;
                </div>
                <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>Email&quot;</h3>
                <p className=&quot;text-gray-300&quot;>kleber@ziontechgroup.com&quot;</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className=&quot;text-center&quot;
              >&quot;
                <div className=&quot;w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4&quot;>&quot;"
                  <MapPin className=&quot;w-8 h-8 text-white&quot; />&quot;
                </div>
                <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>Address&quot;</h3>
                <p className=&quot;text-gray-300&quot;>364 E Main St STE 1008&quot;<br />Middletown DE 19709</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});