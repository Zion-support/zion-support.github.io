
import EnhancedHero from '../components/EnhancedHero';


export default React.memo(function Home() {}
  const features = [

      description: 'Cutting-edge artificial intelligence that transforms business operations and drives innovation.', color: 'from-purple-500 to-pink-500' 
    }, { icon: Atom, title: 'Quantum Computing', 
      description: 'Next-generation quantum solutions that solve complex problems beyond classical computing.', color: 'from-orange-500 to-red-500' 
    }, { icon: Rocket, title: 'Micro SAAS Platform', 
      description: 'Innovative software-as-a-service solutions that scale with your business needs.', color: 'from-blue-500 to-cyan-500' 
    }, { icon: Shield, title: 'Enterprise Security', 
      description: 'Military-grade cybersecurity and compliance solutions for enterprise protection.', color: 'from-green-500 to-emerald-500' 

    }
  ];&apos;

  const stats = [

    }
  ];

  return (&apos;
    <>
      <SEO 

              <motion.div

                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}

            ))}
          </div>;
        </div>;
      </section>;


            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get started with our most popular solutions in just a few clicks
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-4 gap-8&quot;>
            {features.map((feature, index) => (&quot}
              <motion.div

                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}

            ))}
          </div>;
        </div>;
      </section>;


            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Comprehensive technology solutions designed to meet the evolving needs of modern businesses&quot;
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-4 gap-8&quot;>
            {services.map((service, index) => (&quot}
              <motion.div

                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}

            ))}
          </div>;
        </div>;
      </section>;


              </h2>
              <p className=&quot;text-lg text-gray-300&quot;>
                Ready to discuss your technology needs? Contact us today.&quot;
              </p>
            </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.href}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-pink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Our track record speaks for itself. See why hundreds of companies choose Zion Tech Group 
              for their digital transformation needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  
                  <div className="text-lg font-semibold text-purple-100 mb-2">
                    {stat.label}
                  </div>
                  
                  <div className="text-sm text-purple-200 text-center">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emerging Technology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Emerging Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the curve with our cutting-edge technology solutions that are shaping 
              the future of business and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emergingTech.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {tech.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {tech.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-purple-600 font-medium bg-purple-50 px-3 py-1 rounded-full">
                      {tech.category}
                    </span>
                    <span className="text-lg font-bold text-gray-900">
                      {tech.price}
                    </span>
                  </div>
                  
                  <Link
                    to={tech.href}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                  >
                    Explore Technology
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>
</>

  );


"`



