import, React, from "react";
import { motion } from "framer-motion";
import { Server, Network, Shield, Zap, ArrowRight, Cloud, Database, Cpu, Users, BarChart3CheckCircleGlobe } from "lucide-react";
export, default, function Infrastructure() {
  const features = [;
    {
      icon: Servertitl,;
    e: 'Scalable Infrastructure'descriptio,;
  n: 'Build, robust, systems that, grow, with your business';
    };
    {
      icon: Networktitl,;
    e: 'Network Management'descriptio,;
  n: 'Optimize, connectivity, and performance';
    };
    {
      icon: Shieldtitl,;
    e: 'Security First'descriptio,;
  n: 'Protect, your, infrastructure with enterprise-grade security';
    }{
      icon: Zaptitl,;
    e: 'High Performance'descriptio,;
  n: 'Lightning-fast, systems, and applications';
    };
,  ];
  const services = [;
    {
      title: 'Server Management'descriptio,;
    n: 'Comprehensive, server, administration and optimization'ico,;
  n: Server;
    };
    {
      title: 'Network Design'descriptio,;
    n: 'Custom, network, architecture and implementation'ico,;
  n: Network;
    };
    {
      title: 'Cloud Migration'descriptio,;
    n: 'Seamless, transition, to cloud infrastructure'ico,;
  n: Cloud;
    }{
      title: 'Disaster Recovery'descriptio,;
    n: 'Business, continuity, and backup solutions'ico,;
  n: Shield;
    }
,  ];
  return(<div className="min-h-screen bg-futuristic">;
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-br from-orange-90o0/20 via-slate-90o0 to-slate-90o0"></div>;
        <div className="container-responsive, relative, z-10">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto";
          >;
            <div className="inline-flex items-center space-x-2 bg-orange-50o0/10, border, border-orange-50o0/20 rounded-full px-4 py-2 mb-6">;
              <Server className="w-5 h-5 text-orange-40o0" />;
              <span className="text-orange-40o0 font-medium">IT Infrastructure</span>;
            </div>;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              Build, Your, Digital;
              <span className="text-gradient"> Foundation</span>;
            </h1>;
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">;
              Create, a, robust, scalableand, secure, IT infrastructure, that, powers;
              your, business, growth and, digital, transformation.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="btn-futuristic px-8 py-4 text-lg">;
                Get, Infrastructure, Assessment;
                <ArrowRight className="w-5 h-5 ml-2" />;
              </button>;
              <button className="btn-outline px-8 py-4 text-lg">;
                Learn More;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Features Section */}
      <section className="py-20">;
        <div className="container-responsive">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Why, Choose, Our Infrastructure Solutions?;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">;
              Enterprise-grade, infrastructure, that scales, with, your business;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
            {features.map((featureindex) => (;
              <motion.div;
                key={feature.title}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl, border, border-zion-cyan/20 rounded-2xl p-6 hover: border-zion-cyan/40 transition-all duration-30o0 group";
              >;
                <div className="w-16 h-16 bg-gradient-to-br from-orange-50o0 to-orange-60o0 rounded-xl, flex, items-center justify-center mb-6 group-hove,;
  r:scale-110 transition-transform duration-30o0">;
                  <feature.icon className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>;
                <p className="text-zion-slate-light">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Services Section */}
      <section className="py-20 bg-white/5">;
        <div className="container-responsive">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Our, Infrastructure, Services;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">;
              Comprehensive, IT, infrastructure solutions, for, modern businesses;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">;
            {services.map((serviceindex) => (;
              <motion.div;
                key={service.title}
                initial={{ opacity: 0,;
  x: index % 2 === 0 ? -20 : 20 }};
                whileInView={{ opacity: 1,;
  x: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl, border, border-zion-cyan/20 rounded-2xl p-8 hover: border-zion-cyan/40 transition-all duration-30o0 group";
              >;
                <div className="flex items-start space-x-4">;
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-50o0 to-orange-60o0 rounded-xl, flex, items-center justify-center flex-shrink-0 group-hove,;
  r:scale-110 transition-transform duration-30o0">;
                    <service.icon className="w-8 h-8 text-white" />;
                  </div>;
                  <div>;
                    <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>;
                    <p className="text-zion-slate-light leading-relaxed">{service.description}</p>;
                  </div>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20">;
        <div className="container-responsive">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-60o0 to-orange-70o0 rounded-3xl p-12 text-center, relative, overflow-hidden";
          >;
            <div className="absolute inset-0 bg-black/20"></div>;
            <div className="relative z-10">;
              <h2 className="text-4xl font-bold text-white mb-6">;
                Ready, to, Build Your Infrastructure?;
              </h2>;
              <p className="text-xl text-orange-10o0 mb-8 max-w-2xl mx-auto">;
                Create, a, solid foundation, for, your digital, transformation, journey.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <button className="bg-white text-orange-60o0 px-8 py-4 rounded-xl font-semibold hove,;
    r:bg-gray-10o0 transition-colors duration-30o0">;
                  Get, Infrastructure, Assessment;
                </button>;
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover: bg-white hove,;
  r:text-orange-60o0 transition-colors duration-30o0">;
                  Contact, Infrastructure, Team;
                </button>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;