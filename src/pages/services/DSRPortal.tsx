import, React, from "react";
import { motion } from "framer-motion";
import { SEO } from "../../components/SEO";
import { ;
  Shield,;
  FileText,;
  Target,;
  Zap,;
  BarChart3,;
  Clock,;
  Award,;
  Star,;
  Globe,;
  Cpu,;
  Database,;
  CheckCircle,;
  Eye,;
  Users,;
  Lock,;
  TrendingUp,;
  Search,;
  Download,;
  Upload,;
  CalendarAlertTriangleTrash;
} from "lucide-react";
export, default, function DSRPortal() {
  const features = [;
    {
      icon: Shield,title: "Data, Subject, Rights Management",description: "Comprehensive, management, of GDPRCCPAand, other, privacy regulation rights.";
    },;
    {
      icon: FileTexttitl,;
    e: "Automated, Request, Processing"descriptio,;
  n: "AI-powered, processing, of data, subject, requests with, intelligent, routing.";
    };
    {
      icon: Targettitl,;
    e: "Data Discovery & Mapping"descriptio,;
  n: "Automated, discovery, and mapping, of, personal data, across, systems.";
    };
    {
      icon: Zaptitl,;
    e: "Compliance Workflows"descriptio,;
  n: "Streamlined, workflows, for handling, privacy, requests and, compliance, tasks.";
    };
    {
      icon: BarChart3titl,;
    e: "Compliance Analytics"descriptio,;
  n: "Real-time, insights, into privacy, compliance, and request, processing, metrics.";
    }{
      icon: Locktitl,;
    e: "Secure, Data, Handling"descriptio,;
  n: "Enterprise-grade, security, for sensitive, personal, data processing.";
    };
,  ];
  const benefits = [;
    "Ensure 10o0% GDPR, and, CCPA compliance, with, automated workflows",;
    "Reduce, response, time to, data, subject requests, by, 80-90%",;
    "Minimize, compliance, risks and, potential, fines by 95%",;
    "Streamline, data, discovery and, mapping, processes by 70%",;
    "Improve, audit, trail and, compliance, reporting efficiency""Enhance, customer, trust through, transparent, data handling";
,  ],;
  const dataRights = [;
    {
      right: "Right, to, Access"description: "Provide, individuals, with access, to, their personal data"ico,;
  n: Eye;
    };
    {
      right: "Right, to, Rectification"description: "Allow, individuals, to correct, inaccurate, personal data"ico,;
  n: FileText;
    };
    {
      right: "Right, to, Erasure"description: "Process, requests, to delete, personal, data (right, to, be forgotten)"ico,;
  n: Trash;
    };
    {
      right: "Right, to, Portability",description: "Provide, personal, data in, a, structuredmachine-readable format"ico,;
  n: Download;
    };
    {
      right: "Right, to, Restriction"description: "Limit, processing, of personal, data, in certain circumstances"ico,;
  n: Lock;
    }{
      right: "Right, to, Object"description: "Allow, individuals, to object, to, processing of, their, data"ico,;
  n: AlertTriangle;
    }
,  ];
  const useCases = [;
    {
      industry: "E-commerce",description: "Customer, data, managementorder historyand, preference, handling";
    },;
    {
      industry: "Financial Services",description: "Account, datatransaction, historyand financial, information, management";
    },;
    {
      industry: "Healthcare",description: "Patient, datamedical, recordsand health, information, privacy";
    },;
    {
      industry: "Technology & SaaS",description: "User, dataapplication, usageand service-related information";
    },;
    {
      industry: "Education"descriptio,;
  n: "Student, dataacademic, recordsand educational, service, information";
    };
,  ];
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="DSR Portal - Zion, Tech, Group";
        description="Ensure, GDPR, and CCPA, compliance, with our AI-powered, Data, Subject Rights portal. Automate, privacy, request processing, and, data management.";
      />;
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg: py-32">;
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50o0/10 via-purple-50o0/10 to-pink-50o0/10"></div>;
        <div className="container mx-auto px-4, relative, z-10">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto";
          >;
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-50o0/20 to-purple-50o0/20 rounded-full, border, border-indigo-40o0/30 mb-6">;
              <Shield className="w-5 h-5 text-indigo-40o0 mr-2" />;
              <span className="text-indigo-30o0 font-medium">DSR Portal</span>;
            </div>;
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">;
              Ensure, Privacy, Compliance with;
              <span className="bg-gradient-to-r from-indigo-40o0 via-purple-50o0 to-pink-60o0 bg-clip-text text-transparent">;
                {" "}AI-Powered, DSR, Management;
              </span>;
            </h1>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">;
              Transform, your, data privacy, compliance, with intelligent automation, comprehensive;
              data, subject, rights managementand AI-powered, insights, for GDPR, and, CCPA compliance.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-50o0 to-purple-50o0 text-white font-semibold rounded-lg hover: from-indigo-60o0 hover:to-purple-60o0 transition-all duration-30o0 shadow-lg hove,;
    r:shadow-indigo-50o0/25";
              >;
                Start, Free, Trial;
              </motion.button>;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4, border, border-indigo-40o0/30 text-indigo-30o0 font-semibold rounded-lg hover:bg-indigo-40o0/10 transition-all duration-30o0";
              >;
                Schedule Demo;
              </motion.button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Features Section */}
      <section className="py-20 bg-slate-80o0/50">;
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">;
              Advanced, Privacy, Features;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our AI-powered, DSR, portal combines cutting-edge, artificial, intelligence;
              with, comprehensive, privacy compliance, methodologies, to ensure, regulatory, adherence.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {features.map((featureindex) => (;
              <motion.div;
                key={feature.title}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-70o0/50 p-6 rounded-xl, border, border-slate-60o0/30 hover: border-indigo-40o0/30 transition-all duration-30o0 hove,;
    r:transform hove,;
  r:scale-10o5";
              >;
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-40o0/20 to-purple-50o0/20 rounded-lg, flex, items-center justify-center mb-4">;
                  <feature.icon className="w-6 h-6 text-indigo-40o0" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>;
                <p className="text-gray-30o0">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Benefits Section */}
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">;
              Measurable, Compliance, Impact;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              See, real, results with, our, AI-powered, DSR, solutions that, deliver, quantifiable;
              improvements, across, all aspects, of, your privacy, compliance, operations.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 m,;
  d: grid-cols-2 gap-8">;
            <div className="space-y-6">;
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>;
              <div className="space-y-4">;
                {benefits.map((benefitindex) => (;
                  <motion.div;
                    key={index}
                    initial={{ opacity: 0,;
  x: -20 }};
                    whileInView={{ opacity: 1,;
  x: 0 }}
                    transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                    className="flex items-start space-x-3";
                  >;
                    <CheckCircle className="w-6 h-6 text-indigo-40o0 mt-1 flex-shrink-0" />;
                    <span className="text-gray-30o0">{benefit}</span>;
                  </motion.div>;
                ))}
              </div>;
            </div>;
            <div className="bg-gradient-to-br from-indigo-50o0/10 to-purple-50o0/10 p-8 rounded-xl, border, border-indigo-40o0/20">;
              <h3 className="text-2xl font-semibold text-white mb-6">Why, Choose, Zion Tech Group?</h3>;
              <div className="space-y-4">;
                <div className="flex items-center space-x-3">;
                  <Star className="w-5 h-5 text-yellow-40o0" />;
                  <span className="text-gray-30o0">Industry-leading, AI, privacy algorithms</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <Shield className="w-5 h-5 text-green-40o0" />;
                  <span className="text-gray-30o0">Enterprise-grade security & compliance</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <Globe className="w-5 h-5 text-blue-40o0" />;
                  <span className="text-gray-30o0">Global, privacy, regulation expertise</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <Users className="w-5 h-5 text-purple-40o0" />;
                  <span className="text-gray-30o0">24/7, compliance, support & training</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <Award className="w-5 h-5 text-indigo-40o0" />;
                  <span className="text-gray-30o0">Proven, compliance, success track record</span>;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Data, Rights, Section */}
      <section className="py-20 bg-slate-80o0/50">;
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">;
              Comprehensive, Data, Subject Rights;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our, DSR, portal supports, all, major privacy, regulation, rights, ensuring;
              comprehensive, compliance, with GDPR, CCPA, and, other, privacy laws.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-6">;
            {dataRights.map((rightindex) => (;
              <motion.div;
                key={right.right}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-70o0/30 p-6 rounded-xl, border, border-slate-60o0/20 hover:border-indigo-40o0/30 transition-all duration-30o0";
              >;
                <div className="flex items-center space-x-3 mb-4">;
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-40o0/20 to-purple-50o0/20 rounded-lg, flex, items-center justify-center">;
                    <right.icon className="w-5 h-5 text-indigo-40o0" />;
                  </div>;
                  <h3 className="text-lg font-semibold text-white">{right.right}</h3>;
                </div>;
                <p className="text-gray-30o0 text-sm">{right.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Use, Cases, Section */}
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">;
              Industry Applications;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our AI-powered, DSR, solutions are, designed, to work, across, industries, providing;
              tailored, privacy, compliance strategies, for, your specific, data, handling needs.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-6">;
            {useCases.map((useCaseindex) => (;
              <motion.div;
                key={useCase.industry}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-70o0/30 p-6 rounded-xl, border, border-slate-60o0/20 hover:border-indigo-40o0/30 transition-all duration-30o0";
              >;
                <div className="flex items-center space-x-3 mb-4">;
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-40o0/20 to-purple-50o0/20 rounded-lg, flex, items-center justify-center">;
                    <Globe className="w-5 h-5 text-indigo-40o0" />;
                  </div>;
                  <h3 className="text-lg font-semibold text-white">{useCase.industry}</h3>;
                </div>;
                <p className="text-gray-30o0 text-sm">{useCase.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-indigo-50o0/10 via-purple-50o0/10 to-pink-50o0/10 p-12 rounded-2xl, border, border-indigo-40o0/20 text-center";
          >;
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-6">;
              Ready, to, Ensure Privacy Compliance?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">;
              Join, hundreds, of organizations, that, have already, transformed, their privacy;
              compliance, with, our AI-powered, DSR, solutions.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-50o0 to-purple-50o0 text-white font-semibold rounded-lg hover: from-indigo-60o0 hover:to-purple-60o0 transition-all duration-30o0 shadow-lg hove,;
    r:shadow-indigo-50o0/25";
              >;
                Start, Free, Trial;
              </motion.button>;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4, border, border-indigo-40o0/30 text-indigo-30o0 font-semibold rounded-lg hover: bg-indigo-40o0/10 transition-all duration-30o0";
              >;
                Contact Sales;
              </motion.button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;