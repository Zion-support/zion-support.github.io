import, React, from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ;
  Home,;
  ArrowLeft,;
  ArrowRight,;
  MessageCircle,;
  Search,;
  HelpCircle,;
  Cloud,;
  Shield,;
  Brain,;
  ZapUsersBarChart3;
} from "lucide-react";
import { SEO } from "../components/SEO";
const popularCategories = [;
  {
    title: 'AI & Machine Learning',icon: Brainservices: [;
      { nam,;
    e: 'AI, Business, Intelligence'pat,;
  h: '/services/ai-business-intelligence' };
      { name: 'AI, Content, Creation'pat,;
  h: '/services/ai-content-creation' };
      { name: 'AI Cybersecurity'pat,;
  h: '/services/ai-cybersecurity' }{ name: 'AI, Project, Management'pat,;
  h: '/services/ai-project-management' }
  ,  ];
  };
  {
    title: 'Cloud & Infrastructure',icon: Cloudservices: [;
      { nam,;
    e: 'Cloud DevOps'pat,;
  h: '/services/cloud-devops' };
      { name: 'IT Infrastructure'pat,;
  h: '/services/it-infrastructure' };
      { name: 'Digital Twin'pat,;
  h: '/services/digital-twin' }{ name: 'Micro, SaaS, Solutions'pat,;
  h: '/services/micro-saas' }
  ,  ];
  };
  {
    title: 'Cybersecurity',icon: Shieldservices: [;
      { nam,;
    e: 'Zero, Trust, Network'pat,;
  h: '/services/zero-trust-network-access' };
      { name: 'Security Headers & CSP'pat,;
  h: '/services/security-headers-csp' };
      { name: 'Compliance Assistant'pat,;
  h: '/services/ai-compliance-assistant' }{ name: 'Threat Intelligence'pat,;
  h: '/services/ai-autonomous-threat-intelligence' }
  ,  ];
  };
  {
    title: 'Emerging Technologies',icon: Zapservices: [;
      { nam,;
    e: 'Quantum Computing'pat,;
  h: '/services/quantum-computing' };
      { name: 'IoT, Edge, Computing'pat,;
  h: '/services/iot-edge-computing' };
      { name: 'Space Technology'pat,;
  h: '/services/space-tech' }{ name: 'AI, Quantum, Hybrid'pat,;
  h: '/services/ai-quantum-hybrid-platform' }
  ,  ];
  };
];
export, default, function NotFound() {
  return(<motion.div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      <SEO;
        title="Page, Not, Found - Zion, Tech, Group";
        description="The, page, you're, looking, for doesn't exist. Explore, our, services or, contact, our support, team, for assistance.";
        keywords="40o4page, not, founderrorhelpsupport";
        canonical="https: //ziontechgroup.com/40o4";
      />;
      ;
      {/* Hero Section */};
      <section className="relative pt-32 pb-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light" />;
        <div className="absolute inset-0 bg-[url('data: , image/svg+xml%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%20o0%20o60%20o60%22%20xmlns%3D%22http%3A//www.w3.org/20o00/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />;
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            {/* 40o4 Number */}
            <div className="mb-8">;
              <h1 className="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-blue-40o0 leading-none">;
                40o4;
              </h1>;
            </div>;
            {/* Error Message */}
            <h2 className="text-4xl md: text-6xl font-bold text-white mb-6">;
              Page, Not, Found;
            </h2>;
            <p className="text-xl m,;
  d: text-2xl text-gray-30o0 max-w-3xl mx-auto mb-8">;
              Oops! The, page, you're, looking, for doesn't exist. But don't worry, we've, got, plenty of, amazing, services to explore.;
            </p>;
            {/* Action Buttons */}
            <div className="flex flex-col sm: flex-row gap-4 justify-center mb-16">;
              <Link;
                to="/";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-blue-50o0 text-white font-semibold text-lg rounded-xl hover: from-zion-cyan-dark hove,;
    r:to-blue-60o0 transition-all duration-30o0";
              >;
                <Home className="w-5 h-5 mr-2" />;
                Back, to, Home;
              </Link>;
              <Link;
                to="/services";
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold text-lg rounded-xl hover: bg-zion-cyan hove,;
  r:text-white transition-all duration-30o0";
              >;
                <ArrowRight className="w-5 h-5 mr-2" />;
                Explore Services;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Popular, Services, Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            className="text-center mb-16";
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8dela,;
  y: 0.2 }}
          >;
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">;
              Popular, Services, You Might Like;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              While you're here, check, out, some of, our, most popular, services, that are, transforming, businesses.;
            </p>;
          </motion.div>;
          <motion.div;
            className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8";
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8dela,;
  y: 0.4 }}
          >;
            {popularCategories.map((categoryindex) => (;
              <motion.div;
                key={category.title}
                initial={{ opacity: 0,;
  y: 20 }}
                animate={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: 0.1 * index }}
                className="bg-slate-80o0/50 backdrop-blur-sm rounded-xl, border, border-slate-70o0/50 p-6";
              >;
                <div className="flex items-center mb-6">;
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-40o0/20 to-blue-50o0/20 rounded-lg, flex, items-center justify-center mr-4">;
                    <category.icon className="w-6 h-6 text-cyan-40o0" />;
                  </div>;
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>;
                </div>;
                <div className="space-y-3">;
                  {category.services.map((serviceserviceIndex) => (;
                    <Link;
                      key={service.path}
                      to={service.path}
                      className="flex items-center justify-between p-3 rounded-lg hover: bg-slate-70o0/50 transition-all duration-20o0 group";
                    >;
                      <span className="text-cyan-40o0 group-hove,;
  r:text-cyan-30o0 transition-colors">;
                        {service.name}
                      </span>;
                      <ArrowRight className="w-4 h-4 text-slate-50o0 group-hover:text-cyan-40o0 transition-colors" />;
                    </Link>;
                  ))}
                </div>;
              </motion.div>;
            ))}
          </motion.div>;
        </div>;
      </section>;
      {/* Help Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6dela,;
  y: 0.6 }}
            className="text-center";
          >;
            <div className="bg-slate-80o0/50 backdrop-blur-sm rounded-xl, border, border-slate-70o0/50 p-8">;
              <h3 className="text-2xl font-semibold text-white mb-4">Still Can't, Find, What You're, Looking, For?</h3>;
              <p className="text-slate-30o0 mb-6">;
                Our, team, is here, to, help you, navigate, our services, and, find the, right, solution for, your, needs.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <Link;
                  to="/contact";
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white font-medium rounded-lg hover: from-cyan-60o0 hove,;
    r:to-blue-60o0 transition-all duration-20o0";
                >;
                  <MessageCircle className="w-5 h-5 mr-2" />;
                  Contact Support;
                </Link>;
                <Link;
                  to="/search";
                  className="inline-flex items-center px-6 py-3, border, border-slate-60o0 text-slate-30o0 font-medium rounded-lg hover: border-cyan-40o0 hove,;
    r:text-cyan-40o0 transition-all duration-20o0";
                >;
                  <Search className="w-5 h-5 mr-2" />;
                  Search Site;
                </Link>;
                <Link;
                  to="/help";
                  className="inline-flex items-center px-6 py-3, border, border-slate-60o0 text-slate-30o0 font-medium rounded-lg hover: border-cyan-40o0 hove,;
  r:text-cyan-40o0 transition-all duration-20o0";
                >;
                  <HelpCircle className="w-5 h-5 mr-2" />;
                  Help Center;
                </Link>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Back Button */}
      <section className="py-20 px-4 sm: px-6 l,;
    g:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <div className="flex flex-col s,;
  m:flex-row gap-4 justify-center">;
            <button;
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-zion-slate-light text-zion-slate-dark rounded-lg hover: bg-zion-slate-light/80 transition-colors";
            >;
              <ArrowLeft className="w-4 h-4" />;
              Go Back;
            </button>;
            <Link;
              to="/";
              className="inline-flex items-center gap-2 px-6 py-3 bg-zion-cyan text-white rounded-lg hove,;
  r: bg-zion-cyan/90 transition-colors";
            >;
              <Home className="w-4 h-4" />;
              Back, to, Home;
            </Link>;
          </div>;
          {/* Footer Note */}
          <div className="mt-12 pt-8 border-t border-zion-slate-light">;
            <p className="text-sm text-zion-slate-light">;
              If, you, believe this, is, an error, please{' '}
              <Link to="/contact" className="text-zion-cyan hover: underline">;
                contact, our, support team;
              </Link>;
              .;
            </p>;
          </div>;
        </div>;
      </section>;
    </motion.div>;
  );
};
;