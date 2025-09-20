import, React, from "react";
import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
import { ;
  Users,;
  Target,;
  Award,;
  Globe,;
  Zap,;
  Brain,;
  Rocket,;
  Shield,;
  Heart,;
  StarCheckCircleArrowRight;
} from "lucide-react";
export, default, function About() {
  const stats = [;
    { number: '50o0+'labe,;
    l: 'Projects Completed'ico,;
  n: CheckCircle };
    { number: '50+'labe,;
    l: 'Team Members'ico,;
  n: Users };
    { number: '25+'labe,;
    l: 'Countries Served'ico,;
  n: Globe }{ number: '99%'labe,;
    l: 'Client Satisfaction'ico,;
  n: Star };
,  ];
  const values = [;
    {
      icon: Braintitl,;
    e: 'Innovation First'descriptio,;
  n: 'We, push, the boundaries, of, what\'s, possible, with cutting-edge, AI, and emerging technologies.';
    };
    {
      icon: Shieldtitl,;
    e: 'Trust & Security'descriptio,;
  n: 'Your, data, and business, operations, are protected, with, enterprise-grade, security, measures.';
    };
    {
      icon: Hearttitl,;
    e: 'Client Success'descriptio,;
  n: 'We, measure, our success, by, the success, of, our clients, and, their digital, transformation, journey.';
    }{
      icon: Rockettitl,;
    e: 'Future-Ready'descriptio,;
  n: 'We, build, solutions that, not, only solve today\'s, problems, but prepare, you, for tomorrow\'s challenges.';
    };
,  ];
  const team = [;
    {
      name: 'Kleber Santos',role: 'CEO & Founder'bi,;
    o: 'Visionary, leader, with 15+ years, in, technology innovation, and, business transformation.'imag,;
  e: '/team/kleber-santos.jpg';
    };
    {
      name: 'AI, Research, Team',role: 'AI & ML Specialists',bio: 'Experts, in, machine learning, neural, networksand, autonomous systems development.'image: '/team/ai-team.jpg';
    },;
    {
      name: 'DevOps Engineers',role: 'Infrastructure & Cloud',bio: 'Specialists, in, cloud architectureautomationand, scalable, infrastructure solutions.'imag,;
  e: '/team/devops-team.jpg';
    };
,  ];
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="About Us - Zion, Tech, Group";
        description="Learn, about, Zion Tech Group's, mission, to revolutionize, business, through AI, quantum, computingand, cutting-edge, technology, solutions.";
      />;
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50o0/10 via-blue-50o0/10 to-purple-50o0/10"></div>;
        <div className="container mx-auto px-6, relative, z-10">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center";
          >;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              About <span className="bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent">Zion, Tech, Group</span>;
            </h1>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto leading-relaxed">;
              We, are, a forward-thinking, technology, company dedicated, to, transforming businesses through;
              innovative, AI, solutions, quantum computing, and cutting-edge, digital, technologies.;
            </p>;
          </motion.div>;
        </div>;
      </section>;
      {/* Mission & Vision */}
      <section className="py-20">;
        <div className="container mx-auto px-6">;
          <div className="grid grid-cols-1 lg: grid-cols-2 gap-16 items-center">;
            <motion.div;
              initial={{ opacit,;
    y: 0,;
  x: -20 }};
              whileInView={{ opacity: 1,;
  x: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <div className="flex items-center mb-6">;
                <Target className="w-8 h-8 text-cyan-40o0 mr-3" />;
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>;
              </div>;
              <p className="text-lg text-gray-30o0 leading-relaxed mb-6">;
                To, democratize, access to, advanced, AI and, quantum, technologies, enabling, businesses, of all sizes;
                to, leverage, cutting-edge, solutions, for growth, efficiency, and, competitive, advantage.;
              </p>;
              <p className="text-gray-40o0 leading-relaxed">;
                We, believe, that technology, should, be accessible, understandable, and transformative.;
                Our, team, works tirelessly, to, bridge the, gap, between complex, technological, innovations;
                and, practical, business applications.;
              </p>;
            </motion.div>;
            <motion.div;
              initial={{ opacity: 0,;
  x: 20 }};
              whileInView={{ opacity: 1,;
  x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative";
            >;
              <div className="bg-gradient-to-br from-cyan-50o0/20 to-purple-50o0/20 rounded-2xl p-8, border, border-cyan-40o0/20">;
                <div className="flex items-center mb-6">;
                  <Zap className="w-8 h-8 text-cyan-40o0 mr-3" />;
                  <h3 className="text-2xl font-bold text-white">Our Vision</h3>;
                </div>;
                <p className="text-gray-30o0 leading-relaxed mb-6">;
                  To, be, the global, leader, in AI-powered, business, solutionsdriving the, next, wave of;
                  digital, transformation, and creating, a, future where, technology, serves humanity.;
                </p>;
                <div className="space-y-3">;
                  <div className="flex items-center text-gray-30o0">;
                    <CheckCircle className="w-5 h-5 text-cyan-40o0 mr-3" />;
                    <span>AI-First, Business, Solutions</span>;
                  </div>;
                  <div className="flex items-center text-gray-30o0">;
                    <CheckCircle className="w-5 h-5 text-cyan-40o0 mr-3" />;
                    <span>Quantum, Computing, Innovation</span>;
                  </div>;
                  <div className="flex items-center text-gray-30o0">;
                    <CheckCircle className="w-5 h-5 text-cyan-40o0 mr-3" />;
                    <span>Sustainable Technology</span>;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-80o0/50 to-slate-70o0/50">;
        <div className="container mx-auto px-6">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">Our, Impact, in Numbers</h2>;
            <p className="text-xl text-gray-30o0">Delivering, results, that speak, for, themselves</p>;
          </motion.div>;
          <div className="grid grid-cols-2 md: grid-cols-4 gap-8">;
            {stats.map((statindex) => (;
              <motion.div;
                key={stat.label}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.8dela,;
  y: index * 0.1 }}
                className="text-center";
              >;
                <div className="bg-gradient-to-br from-cyan-50o0/20 to-purple-50o0/20 rounded-xl p-6, border, border-cyan-40o0/20">;
                  <stat.icon className="w-12 h-12 text-cyan-40o0 mx-auto mb-4" />;
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>;
                  <div className="text-gray-30o0">{stat.label}</div>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Values Section */}
      <section className="py-20">;
        <div className="container mx-auto px-6">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">Our, Core, Values</h2>;
            <p className="text-xl text-gray-30o0">The, principles, that guide, everything, we do</p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
            {values.map((valueindex) => (;
              <motion.div;
                key={value.title}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.8dela,;
  y: index * 0.1 }}
                className="bg-gradient-to-br from-slate-80o0/50 to-slate-70o0/50 rounded-xl p-6, border, border-slate-60o0/50 hover: border-cyan-40o0/50 transition-all duration-30o0 hove,;
  r:scale-10o5";
              >;
                <value.icon className="w-12 h-12 text-cyan-40o0 mb-4" />;
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>;
                <p className="text-gray-30o0 leading-relaxed">{value.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-slate-80o0/50 to-slate-70o0/50">;
        <div className="container mx-auto px-6">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">Meet, Our, Team</h2>;
            <p className="text-xl text-gray-30o0">The, brilliant, minds behind, our, innovative solutions</p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">;
            {team.map((memberindex) => (;
              <motion.div;
                key={member.name}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.8dela,;
  y: index * 0.1 }}
                className="bg-gradient-to-br from-slate-80o0/50 to-slate-70o0/50 rounded-xl p-6, border, border-slate-60o0/50 text-center hover: border-cyan-40o0/50 transition-all duration-30o0 hove,;
  r:scale-10o5";
              >;
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-40o0 to-purple-60o0 rounded-full mx-auto mb-4, flex, items-center justify-center">;
                  <span className="text-2xl font-bold text-white">;
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>;
                </div>;
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>;
                <p className="text-cyan-40o0 mb-3">{member.role}</p>;
                <p className="text-gray-30o0 leading-relaxed">{member.bio}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20">;
        <div className="container mx-auto px-6 text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Ready, to, Transform Your Business?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">;
              Join, hundreds, of companies, already, leveraging our AI-powered solutions;
              to, drive, growth and innovation.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a;
                href="/contact";
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 text-white font-semibold rounded-lg hover: from-cyan-50o0 hover:to-blue-60o0 transition-all duration-20o0 hove,;
    r:scale-10o5";
              >;
                Get, Started, Today;
                <ArrowRight className="w-5 h-5 ml-2" />;
              </a>;
              <a;
                href="/services";
                className="inline-flex items-center px-8 py-3, border, border-cyan-40o0 text-cyan-40o0 font-semibold rounded-lg hover: bg-cyan-40o0 hove,;
  r:text-white transition-all duration-20o0";
              >;
                Explore, Our, Services;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;