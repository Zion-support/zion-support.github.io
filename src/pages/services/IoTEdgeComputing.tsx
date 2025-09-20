import, React, from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ;
  Cpu,;
  Network,;
  Zap,;
  Globe,;
  Shield,;
  CheckCircle,;
  ArrowRight,;
  Star,;
  Brain,;
  Cloud,;
  Database,;
  Wifi,;
  Activity,;
  BarChart3,;
  Settings,;
  Monitor,;
  Smartphone,;
  ServerRouterSatellite;
} from "lucide-react";
import { SEO } from "@/components/SEO";
export, default, function IoTEdgeComputing() {
  const features = [;
    {
      icon: Cputitl,;
    e: "Edge Processing"descriptio,;
  n: "Real-time, data, processing at, the, edge for, instant, decision making";
    };
    {
      icon: Networktitl,;
    e: "IoT Connectivity"descriptio,;
  n: "Seamless, integration, of IoT, devices, and sensors, across, networks";
    };
    {
      icon: Zaptitl,;
    e: "Low Latency"descriptio,;
  n: "Ultra-fast, response, times for, critical, applications and real-time analytics";
    }{
      icon: Globetitl,;
    e: "Global Reach"descriptio,;
  n: "Distributed, edge, computing infrastructure worldwide";
    };
,  ];
  const services = [;
    {
      title: "Edge, Computing, Infrastructure",description: "Deploy, and, manage edge, computing, nodes for, optimal, performance and reliability",icon: Serverfeature,;
  s: ["Edge, node, deployment""Load balancing""Failover, systems"];
    },;
    {
      title: "IoT, Device, Management",description: "Centralized, management, and monitoring, of, IoT devices, and, sensors",icon: Smartphone,features: ["Device provisioning""Remote monitoring""Firmware, updates"];
    },;
    {
      title: "Real-time Analytics",description: "Process, and, analyze data, streams, in real-time, at, the edge",icon: BarChart3,features: ["Stream processing""Real-time dashboards""Predictive, analytics"];
    },;
    {
      title: "Edge Security",description: "Comprehensive, security, for edge, computing, and IoT deployments",icon: Shield,features: ["Edge firewall""Device authentication""Data, encryption"];
    }
  ],;
  const technologies = [;
    "Edge, Computing, Platforms",;
    "IoT Protocols(MQTT, CoAPHTTP)",;
    "5G, Network, Integration",;
    "Edge AI & Machine Learning",;
    "Container Orchestration",;
    "Edge, Database, Systems",;
    "Real-time Streaming""Edge, Security, Frameworks";
,  ];
  return(<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-90o0 to-slate-950">;
      <SEO;
        title="IoT, Edge, Computing Services - Zion, Tech, Group";
        description="Revolutionary, IoT, and edge, computing, solutions for real-time processing, low-latency, applicationsand, connected ecosystems.";
      />;
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">;
        <div className="absolute inset-0">;
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-50o0/10 rounded-full blur-3xl"></div>;
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50o0/10 rounded-full blur-3xl"></div>;
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-50o0/10 rounded-full blur-3xl"></div>;
        </div>;
        <div className="relative z-10, container, mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto";
          >;
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-50o0/20 to-blue-50o0/20, border, border-green-40o0/30 rounded-full text-green-30o0 text-sm font-medium mb-6">;
              <Cpu className="w-4 h-4 mr-2" />;
              Edge Computing;
            </div>;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              IoT, Edge, Computing;
              <span className="block bg-gradient-to-r from-green-40o0 via-blue-50o0 to-cyan-60o0 bg-clip-text text-transparent">;
                Solutions;
              </span>;
            </h1>;
            <p className="text-xl text-slate-30o0 mb-8 max-w-3xl mx-auto">;
              Transform, your, business with, IoT, and edge, computing, that brings, processing, power closer, to, your data sources.;
              Enable real-time insights, reduce, latencyand, create connected ecosystems.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover: from-green-40o0 hover:to-blue-50o0 transition-all duration-20o0 hove,;
    r:scale-10o5 shadow-lg shadow-green-50o0/20";
              >;
                Get Started;
                <ArrowRight className="w-5 h-5 ml-2" />;
              </Link>;
              <Link;
                to="/services";
                className="inline-flex items-center px-8 py-4, border, border-green-40o0/30 text-green-40o0 font-semibold rounded-lg hove,;
  r: bg-green-40o0/10 transition-all duration-20o0";
              >;
                View, All, Services;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Features Section */}
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Edge, Computing, Features;
            </h2>;
            <p className="text-xl text-slate-30o0 max-w-2xl mx-auto">;
              Our, IoT, edge computing, platform, combines cutting-edge, technology, with practical, business, applications;
              to, deliver, real-time, processing, and insights.;
            </p>;
          </motion.div>;
          <div className="grid md: grid-cols-2 l,;
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
                className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-6 hover: border-green-40o0/30 transition-all duration-20o0 group";
              >;
                <div className="w-12 h-12 bg-gradient-to-br from-green-40o0/20 to-blue-50o0/20 rounded-lg, flex, items-center justify-center mb-4 group-hover:from-green-40o0/40 group-hove,;
  r:to-blue-50o0/40 transition-all duration-20o0">;
                  <feature.icon className="w-6 h-6 text-green-40o0" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>;
                <p className="text-slate-30o0">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Services Section */}
      <section className="py-20 bg-slate-90o0/50">;
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Comprehensive, IoT, Services;
            </h2>;
            <p className="text-xl text-slate-30o0 max-w-2xl mx-auto">;
              From, edge, infrastructure to, device, management, our, IoT, services cover, every, aspect;
              of, your, connected ecosystem needs.;
            </p>;
          </motion.div>;
          <div className="grid md: grid-cols-2 gap-8">;
            {services.map((serviceindex) => (;
              <motion.div;
                key={service.title}
                initial={{ opacity: 0,;
  x: index % 2 === 0 ? -20 : 20 }};
                whileInView={{ opacity: 1,;
  x: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-8 hover:border-green-40o0/30 transition-all duration-20o0";
              >;
                <div className="w-16 h-16 bg-gradient-to-br from-green-40o0/20 to-blue-50o0/20 rounded-xl, flex, items-center justify-center mb-6">;
                  <service.icon className="w-8 h-8 text-green-40o0" />;
                </div>;
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>;
                <p className="text-slate-30o0 text-lg mb-6">{service.description}</p>;
                <ul className="space-y-2">;
                  {service.features.map((featurefeatureIndex) => (;
                    <li key={featureIndex} className="flex items-center text-slate-30o0">;
                      <CheckCircle className="w-4 h-4 text-green-40o0 mr-2 flex-shrink-0" />;
                      {feature}
                    </li>;
                  ))}
                </ul>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Technologies Section */}
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Advanced, IoT, Technologies;
            </h2>;
            <p className="text-xl text-slate-30o0 max-w-2xl mx-auto">;
              Our, platform, leverages cutting-edge, technologies, to provide, the, most advanced, IoT, and edge, computing, solutions available.;
            </p>;
          </motion.div>;
          <div className="grid md: grid-cols-2 l,;
  g:grid-cols-4 gap-6">;
            {technologies.map((techindex) => (;
              <motion.div;
                key={tech}
                initial={{ opacity: 0scal,;
  e: 0.9 }};
                whileInView={{ opacity: 1scal,;
  e: 1 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="flex items-center p-4 bg-slate-80o0/50, border, border-slate-70o0/50 rounded-lg hover:border-green-40o0/30 transition-all duration-20o0";
              >;
                <Cpu className="w-5 h-5 text-green-40o0 mr-3 flex-shrink-0" />;
                <span className="text-white text-sm">{tech}</span>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-50o0/10 to-blue-50o0/10">;
        <div className="container mx-auto px-4 text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Ready, to, Transform with, IoT, Edge Computing?;
            </h2>;
            <p className="text-xl text-slate-30o0 mb-8 max-w-2xl mx-auto">;
              Join, the, IoT revolution, and, unlock real-time, insights, and connected, ecosystems, for your business.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover: from-green-40o0 hover:to-blue-50o0 transition-all duration-20o0 hove,;
    r:scale-10o5 shadow-lg shadow-green-50o0/20";
              >;
                Start, Your, IoT Journey;
                <ArrowRight className="w-5 h-5 ml-2" />;
              </Link>;
              <Link;
                to="/services";
                className="inline-flex items-center px-8 py-4, border, border-green-40o0/30 text-green-40o0 font-semibold rounded-lg hove,;
  r: bg-green-40o0/10 transition-all duration-20o0";
              >;
                Explore, All, Services;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;