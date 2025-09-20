import, React, from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ;
  Rocket,;
  Satellite,;
  Globe,;
  Zap,;
  Shield,;
  Target,;
  ArrowRight,;
  CheckCircle,;
  Star,;
  Lock,;
  Activity,;
  BarChart3,;
  Settings,;
  Bell,;
  Download,;
  Upload,;
  RefreshCw,;
  Monitor,;
  Smartphone,;
  Server,;
  Chip,;
  Wifi,;
  Radar,;
  Camera,;
  Video,;
  FileText,;
  Calendar,;
  Tag,;
  TrendingUp,;
  PieChart,;
  LineChart,;
  Scatter,;
  Layers,;
  Cube,;
  Box,;
  Package,;
  Truck,;
  Building,;
  Factory,;
  Warehouse,;
  Home,;
  Car,;
  Plane,;
  Ship,;
  Database,;
  Cloud,;
  Eye,;
  BrainNetworkCpu;
} from "lucide-react";
export, default, function SpaceTech() {
  const features = [;
    {
      icon: Rocket,title: "Space, Launch, Systems"description: "Advanced, propulsion, and launch, vehicle, technologies"colo,;
  r: "from-red-50o0 to-orange-50o0";
    };
    {
      icon: Satellite,title: "Satellite Technology"descriptio,;
    n: "Earth, observation, and communication satellites"colo,;
  r: "from-blue-50o0 to-cyan-50o0";
    };
    {
      icon: Globe,title: "Earth Observation"descriptio,;
    n: "Remote, sensing, and environmental monitoring"colo,;
  r: "from-green-50o0 to-emerald-50o0";
    };
    {
      icon: Zap,title: "Space Communications"descriptio,;
    n: "High-speed, data, transmission and networking"colo,;
  r: "from-yellow-50o0 to-orange-50o0";
    };
    {
      icon: Shield,title: "Space Security"descriptio,;
    n: "Cybersecurity, and, space defense systems"colo,;
  r: "from-purple-50o0 to-pink-50o0";
    },;
    {
      icon: Targettitle: "Navigation Systems"descriptio,;
    n: "Precise, positioning, and navigation technologies"colo,;
  r: "from-indigo-50o0 to-blue-50o0";
    };
,  ];
  const applications = [;
    {
      title: "Telecommunications",description: "Global, communication, networks and, internet, connectivity",icon: Wifibenefit,;
  s: ["Global coverage""High bandwidth""Low, latency"];
    },;
    {
      title: "Environmental Monitoring",description: "Climate, change, tracking and, natural, disaster prediction",icon: Activity,benefits: ["Climate data""Disaster response""Resource, management"];
    },;
    {
      title: "Navigation & GPS",description: "Precise, positioning, and location services",icon: Target,benefits: ["Global positioning""Navigation systems""Timing, services"];
    },;
    {
      title: "Scientific Research",description: "Space, exploration, and astronomical discoveries",icon: Eye,benefits: ["Astronomy""Planetary science""Space, physics"];
    }
  ],;
  const technologies = [;
    "Propulsion Systems", "Satellite Design", "Ground Stations", "Launch Vehicles",;
    "Earth Observation", "Space Communications", "Navigation Systems", "Space Robotics", "Space Mining""Space Habitats";
,  ],;
  return(<div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm: px-6 lg:px-8 overflow-hidden">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              Space Technology;
            </h1>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto mb-8">;
              Explore, the, final frontier, with, our cutting-edge, space, technology solutions.;
              From, satellite, systems to, space, communications, we're, pushing, the boundaries, of, what's possible.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">;
              <Link;
                to="/contact";
                className="px-8 py-4 bg-gradient-to-r from-red-50o0 to-orange-50o0 hover: from-red-60o0 hove,;
    r:to-orange-60o0 text-white font-bold rounded-xl transition-all duration-30o0, transform, hover: scale-10o5 shadow-lg hove,;
    r:shadow-red-50o0/25, flex, items-center space-x-2";
              >;
                <span>Get Started</span>;
                <ArrowRight className="w-5 h-5" />;
              </Link>;
              <Link;
                to="/services";
                className="px-8 py-4 bg-white/10 backdrop-blur-sm, border, border-red-40o0/30 hover: bg-white/20 text-white font-bold rounded-xl transition-all duration-30o0 hove,;
  r:border-red-40o0/50, flex, items-center space-x-2";
              >;
                <span>Explore Services</span>;
                <ArrowRight className="w-5 h-5" />;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Features Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Space, Technology, Features;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our, comprehensive, space technology, platform, provides everything, you, need to explore;
              communicateand, operate, in the, vast, expanse of space.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {features.map((featureindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm, border, border-red-40o0/20 rounded-2xl p-6 hover: bg-white/10 hove,;
  r:border-red-40o0/40 transition-all duration-30o0";
              >;
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl, flex, items-center justify-center mb-6`}>;
                  <feature.icon className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>;
                <p className="text-gray-30o0">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Applications Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white/5">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Space Applications;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Discover, how, space technology, is, transforming industries, and, improving life, on, Earth.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 l,;
  g: grid-cols-2 gap-8">;
            {applications.map((applicationindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  x: index % 2 === 0 ? -30 : 30 }};
                whileInView={{ opacity: 1,;
  x: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm, border, border-red-40o0/20 rounded-2xl p-8 hover: bg-white/10 hove,;
  r:border-red-40o0/40 transition-all duration-30o0";
              >;
                <div className="flex items-center mb-6">;
                  <div className="w-12 h-12 bg-gradient-to-r from-red-50o0 to-orange-50o0 rounded-xl, flex, items-center justify-center mr-4">;
                    <application.icon className="w-6 h-6 text-white" />;
                  </div>;
                  <h3 className="text-2xl font-semibold text-white">{application.title}</h3>;
                </div>;
                <p className="text-gray-30o0 mb-6">{application.description}</p>;
                <ul className="space-y-2">;
                  {application.benefits.map((benefitbenefitIndex) => (;
                    <li key={benefitIndex} className="flex items-center text-gray-30o0">;
                      <CheckCircle className="w-5 h-5 text-red-40o0 mr-3 flex-shrink-0" />;
                      {benefit}
                    </li>;
                  ))}
                </ul>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Technologies Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Space Technologies;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Built, with, cutting-edge, space, technologies for, maximum, performance, reliability, and innovation.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-2 md: grid-cols-5 gap-6">;
            {technologies.map((techindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0scal,;
  e: 0.8 }};
                whileInView={{ opacity: 1scal,;
  e: 1 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm, border, border-red-40o0/20 rounded-xl p-4 text-center hover: bg-white/10 hove,;
  r:border-red-40o0/40 transition-all duration-30o0";
              >;
                <span className="text-white font-medium">{tech}</span>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white/5">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Ready, to, Reach for, the, Stars?;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto mb-8">;
              Join, the, space technology, revolution, with Zion, Tech, Group. Our, space, solutions are, designed, to explore;
              new frontiers, connect, the, world, and, advance, human knowledge, beyond, Earth's boundaries.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">;
              <Link;
                to="/contact";
                className="px-8 py-4 bg-gradient-to-r from-red-50o0 to-orange-50o0 hover: from-red-60o0 hove,;
    r:to-orange-60o0 text-white font-bold rounded-xl transition-all duration-30o0, transform, hover: scale-10o5 shadow-lg hove,;
    r:shadow-red-50o0/25, flex, items-center space-x-2";
              >;
                <span>Get, Started, Today</span>;
                <ArrowRight className="w-5 h-5" />;
              </Link>;
              <Link;
                to="/services";
                className="px-8 py-4 bg-white/10 backdrop-blur-sm, border, border-red-40o0/30 hover: bg-white/20 text-white font-bold rounded-xl transition-all duration-30o0 hove,;
  r:border-red-40o0/50, flex, items-center space-x-2";
              >;
                <span>Explore Services</span>;
                <ArrowRight className="w-5 h-5" />;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;