import, React, from "react";
import { motion } from "framer-motion";
import { SEO } from "../../components/SEO";
import { ;
  Shield,;
  CheckCircle,;
  AlertTriangle,;
  FileText,;
  Users,;
  Zap,;
  Globe,;
  Lock,;
  Eye,;
  BarChart3,;
  TrendingUp,;
  Clock,;
  Award,;
  Star,;
  Cpu,;
  Database,;
  Search,;
  FilterDownloadShare2;
} from "lucide-react";
export, default, function AIComplianceAssistant() {
  const features = [;
    {
      icon: Shieldtitl,;
    e: "Automated, Compliance, Monitoring"descriptio,;
  n: "24/7, monitoring, of regulatory, changes, and automatic, updates, to compliance requirements.";
    };
    {
      icon: CheckCircletitl,;
    e: "Risk Assessment & Scoring"descriptio,;
  n: "AI-powered, risk, analysis with real-time, scoring, and prioritization, of, compliance issues.";
    };
    {
      icon: FileText,title: "Document Management",description: "Intelligent, document, processingclassificationand automated, compliance, verification.";
    },;
    {
      icon: Userstitl,;
    e: "Role-Based, Access, Control"descriptio,;
  n: "Secure, access, management with, granular, permissions and, audit, trails.";
    };
    {
      icon: Zaptitl,;
    e: "Real-Time Alerts"descriptio,;
  n: "Instant, notifications, for compliance, violations, and regulatory changes.";
    },;
    {
      icon: Globe,title: "Multi-Jurisdiction Support",description: "Comprehensive, coverage, of global, regulations, including GDPRCCPASOXand more.";
    }
,  ],;
  const benefits = [;
    "Reduce, compliance, costs by 40-60% through automation",;
    "Improve, compliance, accuracy by 95% with, AI, validation",;
    "Reduce, audit, preparation time, by, 70%",;
    "Minimize, regulatory, fines and, penalties, by 80%",;
    "Enhance, risk, visibility and, management, by 90%""Streamline, compliance, reporting and documentation";
,  ],;
  const regulations = [;
    {
      name: "GDPR (EU)"descriptio,;
    n: "Data, protection, and privacy, regulation, for EU citizens"ico,;
  n: Shield;
    };
    {
      name: "CCPA (California)"descriptio,;
    n: "Consumer, privacy, rights and, data, protection in California"ico,;
  n: Lock;
    };
    {
      name: "SOX (Sarbanes-Oxley)"descriptio,;
    n: "Financial, reporting, and corporate, governance, standards"ico,;
  n: FileText;
    };
    {
      name: "HIPAA (Healthcare)"descriptio,;
    n: "Patient, data, protection and, healthcare, privacy standards"ico,;
  n: Users;
    };
    {
      name: "PCI DSS"descriptio,;
    n: "Payment, card, industry data, security, standards"ico,;
  n: Lock;
    }{
      name: "ISO 270o01"descriptio,;
    n: "Information, security, management systems standard"ico,;
  n: Shield;
    }
,  ];
  const useCases = [;
    {
      industry: "Financial Services",description: "Regulatory, reportingrisk, managementand compliance, monitoring, for banks, and, fintech companies";
    },;
    {
      industry: "Healthcare",description: "HIPAA, compliancepatient, data protectionand, medical, record security";
    },;
    {
      industry: "E-commerce",description: "Data, privacy, compliancepayment securityand, customer, data protection";
    },;
    {
      industry: "Manufacturing",description: "Environmental, compliancesafety, regulationsand quality standards";
    },;
    {
      industry: "Technology"descriptio,;
  n: "Data, privacysecurity, complianceand international, regulatory, adherence";
    }
,  ],;
;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="AI, Compliance, Assistant - Zion, Tech, Group";
        description="Automate, regulatory, compliance with AI-powered monitoring, risk, assessmentand, governance solutions. Stay, compliant, with global regulations.";
      />;
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg: py-32">;
        <div className="absolute inset-0 bg-gradient-to-r from-green-50o0/10 via-emerald-50o0/10 to-teal-50o0/10"></div>;
        <div className="container mx-auto px-4, relative, z-10">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto";
          >;
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-50o0/20 to-emerald-50o0/20 rounded-full, border, border-green-40o0/30 mb-6">;
              <Shield className="w-5 h-5 text-green-40o0 mr-2" />;
              <span className="text-green-30o0 font-medium">AI, Compliance, Assistant</span>;
            </div>;
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">;
              Stay, Compliant, with;
              <span className="bg-gradient-to-r from-green-40o0 via-emerald-50o0 to-teal-60o0 bg-clip-text text-transparent">;
                {" "}AI-Powered Governance;
              </span>;
            </h1>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">;
              Automate, regulatory, compliance, reduce risks, and, ensure, governance excellence, with, our;
              AI-powered, compliance, assistant that monitors, analyzes, and, manages, regulatory requirements.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-50o0 to-emerald-50o0 text-white font-semibold rounded-lg hover: from-green-60o0 hover:to-emerald-60o0 transition-all duration-30o0 shadow-lg hove,;
    r:shadow-green-50o0/25";
              >;
                Start, Compliance, Audit;
              </motion.button>;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4, border, border-green-40o0/30 text-green-30o0 font-semibold rounded-lg hover:bg-green-40o0/10 transition-all duration-30o0";
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
              Comprehensive, Compliance, Features;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our, AI, Compliance Assistant, provides, end-to-end, compliance, management with;
              intelligent automation, real-time, monitoringand, comprehensive reporting.;
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
                className="bg-slate-70o0/50 p-6 rounded-xl, border, border-slate-60o0/30 hover: border-green-40o0/30 transition-all duration-30o0 hove,;
    r:transform hove,;
  r:scale-10o5";
              >;
                <div className="w-12 h-12 bg-gradient-to-br from-green-40o0/20 to-emerald-50o0/20 rounded-lg, flex, items-center justify-center mb-4">;
                  <feature.icon className="w-6 h-6 text-green-40o0" />;
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
              Measurable, Compliance, Benefits;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Transform, your, compliance operations, with, quantifiable improvements, in, efficiency;
              accuracy, and, risk, management.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">;
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
                    <CheckCircle className="w-6 h-6 text-green-40o0 mt-1 flex-shrink-0" />;
                    <span className="text-gray-30o0">{benefit}</span>;
                  </motion.div>;
                ))}
              </div>;
            </div>;
            <div className="bg-gradient-to-br from-green-50o0/10 to-emerald-50o0/10 p-8 rounded-xl, border, border-green-40o0/20">;
              <h3 className="text-2xl font-semibold text-white mb-6">Why, Choose, Zion Tech Group?</h3>;
              <div className="space-y-4">;
                <div className="flex items-center space-x-3">;
                  <Star className="w-5 h-5 text-yellow-40o0" />;
                  <span className="text-gray-30o0">Industry-leading, AI, compliance algorithms</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <Shield className="w-5 h-5 text-green-40o0" />;
                  <span className="text-gray-30o0">Enterprise-grade security & privacy</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <Globe className="w-5 h-5 text-blue-40o0" />;
                  <span className="text-gray-30o0">Global, regulatory, coverage</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <Users className="w-5 h-5 text-purple-40o0" />;
                  <span className="text-gray-30o0">24/7, compliance, monitoring</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <Award className="w-5 h-5 text-green-40o0" />;
                  <span className="text-gray-30o0">Proven, compliance, track record</span>;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Regulations Section */}
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
              Global, Regulatory, Coverage;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our, AI, Compliance Assistant, supports, compliance with, major, global regulations;
              and, industry, standards across, all, sectors.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-6">;
            {regulations.map((regulationindex) => (;
              <motion.div;
                key={regulation.name}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-70o0/30 p-6 rounded-xl, border, border-slate-60o0/20 hover:border-green-40o0/30 transition-all duration-30o0";
              >;
                <div className="flex items-center space-x-3 mb-4">;
                  <div className="w-10 h-10 bg-gradient-to-br from-green-40o0/20 to-emerald-50o0/20 rounded-lg, flex, items-center justify-center">;
                    <regulation.icon className="w-5 h-5 text-green-40o0" />;
                  </div>;
                  <h3 className="text-lg font-semibold text-white">{regulation.name}</h3>;
                </div>;
                <p className="text-gray-30o0 text-sm">{regulation.description}</p>;
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
              Our, AI, Compliance Assistant, is, designed to, work, across industries;
              providing, tailored, compliance solutions, for, your specific, regulatory, needs.;
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
                className="bg-slate-70o0/30 p-6 rounded-xl, border, border-slate-60o0/20 hover:border-green-40o0/30 transition-all duration-30o0";
              >;
                <div className="flex items-center space-x-3 mb-4">;
                  <div className="w-10 h-10 bg-gradient-to-br from-green-40o0/20 to-emerald-50o0/20 rounded-lg, flex, items-center justify-center">;
                    <Globe className="w-5 h-5 text-green-40o0" />;
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
            className="bg-gradient-to-r from-green-50o0/10 via-emerald-50o0/10 to-teal-50o0/10 p-12 rounded-2xl, border, border-green-40o0/20 text-center";
          >;
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-6">;
              Ready, to, Transform Your Compliance?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">;
              Join, hundreds, of organizations, that, have already, revolutionized, their compliance;
              operations, with, our AI-powered solutions.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-50o0 to-emerald-50o0 text-white font-semibold rounded-lg hover: from-green-60o0 hover:to-emerald-60o0 transition-all duration-30o0 shadow-lg hove,;
    r:shadow-green-50o0/25";
              >;
                Start, Free, Trial;
              </motion.button>;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4, border, border-green-40o0/30 text-green-30o0 font-semibold rounded-lg hover: bg-green-40o0/10 transition-all duration-30o0";
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