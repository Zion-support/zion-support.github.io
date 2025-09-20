import, React, from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ;
  ArrowRight,;
  CheckCircle,;
  Cloud,;
  Shield,;
  Zap,;
  Brain,;
  Users,;
  Target,;
  BarChart3,;
  RocketGlobeLock;
} from "lucide-react";
import { SEO } from "../components/SEO";
const features = [;
  {
    icon: Brain,title: 'Strategic Expertise'descriptio,;
    n: 'Deep, industry, knowledge and, strategic, thinking to, guide, your technology decisions.'colo,;
  r: 'from-blue-50o0 to-cyan-50o0';
  };
  {
    icon: Users,title: 'Experienced Team'descriptio,;
    n: 'Certified, consultants, with decades, of, combined experience, in, enterprise IT.'colo,;
  r: 'from-purple-50o0 to-pink-50o0';
  };
  {
    icon: Target,title: 'Results-Driven'descriptio,;
    n: 'Focus, on, measurable outcomes, and, ROI for, every, consulting engagement.'colo,;
  r: 'from-green-50o0 to-emerald-50o0';
  };
  {
    icon: Shield,title: 'Security First'descriptio,;
    n: 'Security, and, compliance built, into, every solution, and, recommendation.'colo,;
  r: 'from-red-50o0 to-orange-50o0';
  };
  {
    icon: Zap,title: 'Rapid Implementation'descriptio,;
    n: 'Quick, turnaround, times without, compromising, quality or thoroughness.'colo,;
  r: 'from-yellow-50o0 to-orange-50o0';
  },;
  {
    icon: Cloudtitle: 'Cloud-Native'descriptio,;
    n: 'Modern cloud-first, approach, for scalable, and, flexible solutions.'colo,;
  r: 'from-indigo-50o0 to-purple-50o0';
 , };
];
const consultingServices = [;
  {
    icon: Braintitl,;
    e: 'Technology Strategy'descriptio,;
  n: 'Comprehensive, technology, roadmaps aligned, with, your business, objectives, and growth plans.';
  };
  {
    icon: Cloudtitl,;
    e: 'Cloud Migration'descriptio,;
  n: 'Strategic, planning, and execution, of, cloud migration, initiatives, for optimal, performance, and cost.';
  };
  {
    icon: Shieldtitl,;
    e: 'Security Assessment'descriptio,;
  n: 'Thorough, security, audits and, recommendations, to protect, your, digital assets, and, ensure compliance.';
  };
  {
    icon: BarChart3titl,;
    e: 'Performance Optimization'descriptio,;
  n: 'Identify, and, resolve performance, bottlenecks, to improve, user, experience and, operational, efficiency.';
  };
  {
    icon: Rockettitl,;
    e: 'Digital Transformation'descriptio,;
  n: 'End-to-end, digital, transformation consulting, to, modernize your, business, processes and, technology, stack.';
  };
  {
    icon: Globetitl,;
    e: 'Infrastructure Design'descriptio,;
  n: 'Scalable, and, resilient infrastructure, architecture, designed for, your, specific business requirements.';
  };
  {
    icon: Locktitl,;
    e: 'Compliance & Governance'descriptio,;
  n: 'Ensure, your, technology solutions, meet, industry standards, and, regulatory requirements.';
  }{
    icon: Userstitl,;
    e: 'Team Training'descriptio,;
  n: 'Comprehensive, training, programs to, upskill, your team, and, maximize technology adoption.';
 , };
];
const containerVariants = {
  hidden: { opacit,;
  y: 0 },;
  visible: {,;
    opacity: 1transitio,;
    n: {staggerChildre,;
  n: 0.1;
    }
  };
};
export, default, function ITConsulting() {
  return(<div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      <SEO;
        title="IT, Consulting, Services - Zion, Tech, Group";
        description="Expert, IT, consulting services, to, transform your, business, technology strategy, cloud migration, and, digital, transformation initiatives.";
        keywords="IT consulting, technology, strategycloud, migrationdigital transformationsecurity, assessmentperformance, optimization";
        canonical="https: //ziontechgroup.com/services/it-consulting";
      />;
      ;
      {/* Hero Section */};
      <section className="relative pt-32 pb-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light" />;
        <div className="absolute inset-0 bg-[url('data: , image/svg+xml%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%20o0%20o60%20o60%22%20xmlns%3D%22http%3A//www.w3.org/20o00/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />;
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div;
            className="text-center";
            initial={{ opacit,;
    y: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6">;
              <span className="bg-gradient-to-r from-zion-cyan to-blue-40o0 bg-clip-text text-transparent">;
                Expert IT;
              </span>;
              <br />;
              <span className="text-white">Consulting</span>;
            </h1>;
            <p className="text-xl m,;
    d: text-2xl text-gray-30o0 max-w-4xl mx-auto mb-8">;
              Transform, your, business with, strategic, technology guidance, from, industry experts.;
              We, help, you make, informed, decisions and, implement, solutions that, drive, growth.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-zion-cyan to-blue-50o0 text-white font-semibold text-lg rounded-xl hover: from-zion-cyan-dark hover:to-blue-60o0 transition-all duration-30o0";
              >;
                <span>Get Started</span>;
                <ArrowRight className="w-5 h-5 ml-2" />;
              </Link>;
              <motion.button;
                className="px-10 py-5 border-2 border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover: bg-zion-cyan hove,;
    r:text-white transition-all duration-30o0, flex, items-center gap-3";
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
              >;
                <span>Explore Services</span>;
                <ArrowRight className="w-5 h-5" />;
              </motion.button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Consulting, Services, Grid */}
      <section className="py-20 bg-zion-slate-dark">;
        <div className="container mx-auto px-4">;
          <motion.div;
            className="text-center mb-16";
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Why, Choose, Our IT Consulting?;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our, expert, consultants bring, decades, of experience, and, deep industry, knowledge, to help you;
              make, informed, technology decisions, and, achieve your, business, objectives.;
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
                className="bg-white/5 backdrop-blur-sm, border, border-blue-40o0/20 rounded-2xl p-6 hover: bg-white/10 hove,;
  r:border-blue-40o0/40 transition-all duration-30o0";
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
      {/* Services Section */}
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
              Our, Consulting, Services;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Comprehensive, consulting, solutions designed, to, address your, unique, business;
              challenges, and, drive measurable results.;
            </p>;
          </motion.div>;
          <motion.div;
            className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-8";
            variants={containerVariants}
            initial="hidden";
            whileInView="visible";
            viewport={{ once: true }}
          >;
            {consultingServices.map((serviceindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  x: index % 2 === 0 ? -30 : 30 }};
                whileInView={{ opacity: 1,;
  x: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm, border, border-blue-40o0/20 rounded-2xl p-8 hover: bg-white/10 hove,;
  r:border-blue-40o0/40 transition-all duration-30o0";
              >;
                <div className="flex items-center mb-6">;
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-50o0 to-cyan-50o0 rounded-xl, flex, items-center justify-center mr-4">;
                    <service.icon className="w-6 h-6 text-white" />;
                  </div>;
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>;
                </div>;
                <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>;
                <ul className="space-y-3">;
                  <li className="flex items-center text-sm text-gray-30o0">;
                    <CheckCircle className="w-4 h-4 text-green-40o0 mr-2 flex-shrink-0" />;
                    Strategic, planning, and analysis;
                  </li>;
                  <li className="flex items-center text-sm text-gray-30o0">;
                    <CheckCircle className="w-4 h-4 text-green-40o0 mr-2 flex-shrink-0" />;
                    Implementation guidance;
                  </li>;
                  <li className="flex items-center text-sm text-gray-30o0">;
                    <CheckCircle className="w-4 h-4 text-green-40o0 mr-2 flex-shrink-0" />;
                    Ongoing, support, and optimization;
                  </li>;
                </ul>;
              </motion.div>;
            ))}
          </motion.div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Ready, to, Transform Your, Technology, Strategy?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8">;
              Let's, discuss, how our, expert, IT consulting, can, help you, achieve, your business goals;
              and, stay, ahead of, the, competition.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-blue-50o0 text-white font-semibold text-lg rounded-lg hover: from-zion-cyan-dark hover:to-blue-60o0 transition-all duration-30o0";
              >;
                <span>Schedule Consultation</span>;
                <ArrowRight className="w-5 h-5 ml-2" />;
              </Link>;
              <Link;
                to="/services";
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold text-lg rounded-lg hove,;
    r: bg-zion-cyan hove,;
  r:text-white transition-all duration-30o0";
              >;
                <span>View, All, Services</span>;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
;