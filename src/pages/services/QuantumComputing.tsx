import, React, from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ;
  Zap,;
  Brain,;
  Shield,;
  Cloud,;
  Cpu,;
  Rocket,;
  Atom,;
  Globe,;
  CheckCircle,;
  ArrowRight,;
  Star,;
  TrendingUp,;
  Users,;
  Lock,;
  Database,;
  Network,;
  CpuIcon,;
  ServerCircuitBoardMicrochip;
} from "lucide-react";
import { SEO } from "@/components/SEO";
const QuantumComputing = () => {
  const features = [;
    {
      icon: Atomtitl,;
    e: "Quantum Processing"descriptio,;
  n: "Advanced, quantum, algorithms for, complex, computational problems";
    };
    {
      icon: Braintitl,;
    e: "AI Integration"descriptio,;
  n: "Seamless, integration, with machine, learning, and AI systems";
    };
    {
      icon: Shieldtitl,;
    e: "Quantum Security"descriptio,;
  n: "Unbreakable, encryption, using quantum, key, distribution";
    }{
      icon: Cloudtitl,;
    e: "Cloud Quantum"descriptio,;
  n: "Access, quantum, computing power, through, our cloud platform";
    };
,  ];
  const useCases = [;
    {
      title: "Financial Modeling"descriptio,;
    n: "Quantum, algorithms, for risk, assessment, and portfolio optimization"ico,;
  n: TrendingUp;
    };
    {
      title: "Drug Discovery"descriptio,;
    n: "Molecular, simulation, and protein, folding, for pharmaceutical research"ico,;
  n: Brain;
    };
    {
      title: "Cryptography"descriptio,;
    n: "Quantum-resistant, encryption, and secure communications"ico,;
  n: Lock;
    }{
      title: "Optimization"descriptio,;
    n: "Solving, complex, logistics and, supply, chain problems"ico,;
  n: Network;
    }
,  ];
  const technologies = [;
    "Quantum Annealing",;
    "Quantum, Machine, Learning",;
    "Quantum Cryptography",;
    "Quantum, Error, Correction",;
    "Quantum-Classical, Hybrid, Systems""Quantum, Cloud, Infrastructure";
,  ],;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-90o0 to-slate-950">;
      <SEO;
        title="Quantum, Computing, Services - Zion, Tech, Group";
        description="Revolutionary, quantum, computing solutions, for, complex computational problems. AI, integrationquantum, securityand cloud, quantum, services.";
      />;
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">;
        <div className="absolute inset-0">;
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-50o0/10 rounded-full blur-3xl"></div>;
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-50o0/10 rounded-full blur-3xl"></div>;
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-50o0/10 rounded-full blur-3xl"></div>;
        </div>;
        <div className="relative z-10, container, mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center";
          >;
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-50o0/20 to-blue-50o0/20, border, border-cyan-40o0/30 rounded-full text-cyan-30o0 text-sm font-medium mb-6">;
              <Star className="w-4 h-4 mr-2" />;
              Revolutionary Technology;
            </div>;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              Quantum Computing;
              <span className="block bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent">;
                Solutions;
              </span>;
            </h1>;
            <p className="text-xl text-slate-30o0 mb-8 max-w-3xl mx-auto">;
              Harness, the, power of, quantum, mechanics to, solve, previously impossible, computational, challenges.;
              Our, quantum, computing services, integrate, cutting-edge, AI, and provide, unprecedented, processing capabilities.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover: from-cyan-40o0 hover:to-blue-50o0 transition-all duration-20o0 hove,;
    r:scale-10o5 shadow-lg shadow-cyan-50o0/20";
              >;
                Get Started;
                <ArrowRight className="w-5 h-5 ml-2" />;
              </Link>;
              <Link;
                to="/services";
                className="inline-flex items-center px-8 py-4, border, border-cyan-40o0/30 text-cyan-40o0 font-semibold rounded-lg hove,;
  r: bg-cyan-40o0/10 transition-all duration-20o0";
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
              Quantum, Computing, Features;
            </h2>;
            <p className="text-xl text-slate-30o0 max-w-2xl mx-auto">;
              Our, quantum, computing platform, combines, the latest, advances, in quantum, mechanics, with practical, business, applications.;
            </p>;
          </motion.div>;
          <div className="grid md: grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
            {features.map((featureindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-6 hover: border-cyan-40o0/30 transition-all duration-20o0 group";
              >;
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-40o0/20 to-blue-50o0/20 rounded-lg, flex, items-center justify-center mb-4 group-hover:from-cyan-40o0/40 group-hove,;
  r:to-blue-50o0/40 transition-all duration-20o0">;
                  <feature.icon className="w-6 h-6 text-cyan-40o0" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>;
                <p className="text-slate-30o0">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Use, Cases, Section */}
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
              Real-World Applications;
            </h2>;
            <p className="text-xl text-slate-30o0 max-w-2xl mx-auto">;
              Discover, how, quantum computing, is, transforming industries, and, solving complex problems.;
            </p>;
          </motion.div>;
          <div className="grid md: grid-cols-2 gap-8">;
            {useCases.map((useCaseindex) => (;
              <motion.div;
                key={useCase.title}
                initial={{ opacity: 0,;
  x: index % 2 === 0 ? -20 : 20 }};
                whileInView={{ opacity: 1,;
  x: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-8 hover:border-cyan-40o0/30 transition-all duration-20o0";
              >;
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-40o0/20 to-blue-50o0/20 rounded-xl, flex, items-center justify-center mb-6">;
                  <useCase.icon className="w-8 h-8 text-cyan-40o0" />;
                </div>;
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>;
                <p className="text-slate-30o0 text-lg">{useCase.description}</p>;
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
              Quantum Technologies;
            </h2>;
            <p className="text-xl text-slate-30o0 max-w-2xl mx-auto">;
              Our, platform, leverages the, latest, quantum computing, technologies, and methodologies.;
            </p>;
          </motion.div>;
          <div className="grid md: grid-cols-2 l,;
  g:grid-cols-3 gap-6">;
            {technologies.map((techindex) => (;
              <motion.div;
                key={tech}
                initial={{ opacity: 0scal,;
  e: 0.9 }};
                whileInView={{ opacity: 1scal,;
  e: 1 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="flex items-center p-4 bg-slate-80o0/50, border, border-slate-70o0/50 rounded-lg hover:border-cyan-40o0/30 transition-all duration-20o0";
              >;
                <CheckCircle className="w-5 h-5 text-cyan-40o0 mr-3 flex-shrink-0" />;
                <span className="text-white">{tech}</span>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-50o0/10 to-blue-50o0/10">;
        <div className="container mx-auto px-4 text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Ready, to, Experience Quantum Computing?;
            </h2>;
            <p className="text-xl text-slate-30o0 mb-8 max-w-2xl mx-auto">;
              Join, the, quantum revolution, and, unlock unprecedented, computational, power for, your, business.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover: from-cyan-40o0 hover:to-blue-50o0 transition-all duration-20o0 hove,;
    r:scale-10o5 shadow-lg shadow-cyan-50o0/20";
              >;
                Start, Your, Quantum Journey;
                <ArrowRight className="w-5 h-5 ml-2" />;
              </Link>;
              <Link;
                to="/services";
                className="inline-flex items-center px-8 py-4, border, border-cyan-40o0/30 text-cyan-40o0 font-semibold rounded-lg hove,;
  r: bg-cyan-40o0/10 transition-all duration-20o0";
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
export, default, QuantumComputing;
;