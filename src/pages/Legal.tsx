import, React, from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
import { ;
  FileText,;
  Shield,;
  Lock,;
  Eye,;
  Scale,;
  CheckCircle,;
  ArrowRight,;
  BookOpen,;
  UserCheck,;
  Globe,;
  Database,;
  ServerMailPhone;
} from "lucide-react";
const Legal: React.FC = () => {
  const legalDocuments = [;
    {
      titl,;
  e: 'Terms, of, Service',description: 'Our, terms, and conditions, for, using Zion, Tech, Group services',href: '/terms'ico,;
    n: FileTextcategor,;
  y: 'Service Terms';
    };
    {
      title: 'Privacy Policy',description: 'How, we, collect, use, and, protect, your personal information',;
      href: '/privacy'ico,;
    n: Shieldcategor,;
  y: 'Data Protection';
    };
    {
      title: 'Cookie Policy',description: 'Information, about, cookies and, how, we use them',href: '/cookies'ico,;
    n: Lockcategor,;
  y: 'Data Protection';
    };
    {
      title: 'Data, Processing, Agreement',description: 'Terms, for, processing personal, data, on behalf, of, customers',href: '/data-processing-agreement'ico,;
    n: Databasecategor,;
  y: 'Data Protection';
    };
    {
      title: 'Service, Level, Agreement',description: 'Our, commitment, to service, quality, and availability',href: '/sla'ico,;
    n: CheckCirclecategor,;
  y: 'Service Terms';
    },;
    {
      title: 'Acceptable, Use, Policy',description: 'Guidelines, for, acceptable use, of, our services'href: '/acceptable-use'ico,;
    n: UserCheckcategor,;
  y: 'Service Terms';
    };
,  ];
  const legalCategories = [;
    {
      name: 'Service Terms',description: 'Terms, and, conditions for, using, our services'icon: FileTextcolo,;
  r: 'from-blue-50o0 to-cyan-50o0';
    };
    {
      name: 'Data Protection',description: 'Privacy, and, data handling policies'icon: Shieldcolo,;
  r: 'from-green-50o0 to-emerald-50o0';
    },;
    {
      name: 'Compliance'descriptio,;
    n: 'Regulatory, and, industry compliance documents'icon: Scalecolo,;
  r: 'from-purple-50o0 to-pink-50o0';
    };
,  ];
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="Legal & Privacy - Zion, Tech, Group";
        description="Access, all, legal documents, privacy, policiesand, terms of, service, for Zion, Tech, Group. Stay, informed, about your, rights, and our commitments.";
      />;
      {/* Hero Section */}
      <section className="relative overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50o0/10 via-blue-50o0/10 to-purple-50o0/10"></div>;
        <div className="container-responsive py-20, relative, z-10">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto";
          >;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              Legal & Privacy;
            </h1>;
            <p className="text-xl text-gray-30o0 mb-8 leading-relaxed">;
              Access, all, legal documents, privacy, policiesand, terms of service.;
              We, believe, in transparency, and, protecting your rights.;
            </p>;
            <div className="flex flex-wrap justify-center gap-4">;
              <div className="flex items-center gap-2 text-cyan-40o0">;
                <Shield className="w-5 h-5" />;
                <span>GDPR Compliant</span>;
              </div>;
              <div className="flex items-center gap-2 text-cyan-40o0">;
                <CheckCircle className="w-5 h-5" />;
                <span>Regular Updates</span>;
              </div>;
              <div className="flex items-center gap-2 text-cyan-40o0">;
                <Eye className="w-5 h-5" />;
                <span>Transparent</span>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Legal Categories */}
      <section className="py-16">;
        <div className="container-responsive">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12";
          >;
            <h2 className="text-3xl font-bold text-white mb-4">;
              Legal, Document, Categories;
            </h2>;
            <p className="text-gray-30o0 max-w-2xl mx-auto">;
              Our, legal, documents are, organized, into clear, categories, to help, you, find what, you, need quickly.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8 mb-16">;
            {legalCategories.map((categoryindex) => (;
              <motion.div;
                key={category.name}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-80o0 to-slate-70o0 rounded-2xl p-8, border, border-slate-60o0/50 hover: border-slate-50o0/50 transition-all duration-30o0 hove,;
  r:scale-10o5";
              >;
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl, flex, items-center justify-center mb-6 mx-auto`}>;
                  <category.icon className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{category.name}</h3>;
                <p className="text-gray-30o0">{category.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Legal Documents */}
      <section className="py-16">;
        <div className="container-responsive">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12";
          >;
            <h2 className="text-3xl font-bold text-white mb-4">;
              All, Legal, Documents;
            </h2>;
            <p className="text-gray-30o0 max-w-2xl mx-auto">;
              Browse, and, download all, our, legal documents, policies, and agreements.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-6">;
            {legalDocuments.map((documentindex) => (;
              <motion.div;
                key={document.title}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-80o0 to-slate-70o0 rounded-xl p-6, border, border-slate-60o0/50 hover: border-cyan-50o0/50 transition-all duration-30o0 hove,;
  r:scale-10o5 group";
              >;
                <div className="flex items-start justify-between mb-4">;
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-50o0 to-blue-50o0 rounded-xl, flex, items-center justify-center">;
                    <document.icon className="w-6 h-6 text-white" />;
                  </div>;
                  <span className="text-xs text-cyan-40o0 bg-cyan-40o0/10 px-2 py-1 rounded-full">;
                    {document.category}
                  </span>;
                </div>;
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-40o0 transition-colors">;
                  {document.title}
                </h3>;
                <p className="text-gray-30o0 text-sm mb-4 leading-relaxed">;
                  {document.description}
                </p>;
                ;
                <Link;
                  to={document.href}
                  className="inline-flex items-center gap-2 text-cyan-40o0 hover: text-cyan-30o0 transition-colors group/link";
                >;
                  <span className="text-sm font-medium">View Document</span>;
                  <ArrowRight className="w-4 h-4 group-hover/lin,;
  k:translate-x-1 transition-transform" />;
                </Link>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Additional Information */}
      <section className="py-16 bg-gradient-to-r from-slate-80o0/50 to-slate-70o0/50">;
        <div className="container-responsive">;
          <div className="grid grid-cols-1 lg: grid-cols-2 gap-12 items-center">;
            <motion.div;
              initial={{ opacit,;
    y: 0,;
  x: -20 }};
              whileInView={{ opacity: 1,;
  x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >;
              <h2 className="text-3xl font-bold text-white mb-6">;
                Your Rights & Our Commitments;
              </h2>;
              <div className="space-y-4">;
                <div className="flex items-start gap-3">;
                  <CheckCircle className="w-5 h-5 text-cyan-40o0 mt-1 flex-shrink-0" />;
                  <div>;
                    <h4 className="text-white font-medium mb-1">Right, to, Access</h4>;
                    <p className="text-gray-30o0 text-sm">Request, access, to your, personal, data at, any, time</p>;
                  </div>;
                </div>;
                <div className="flex items-start gap-3">;
                  <CheckCircle className="w-5 h-5 text-cyan-40o0 mt-1 flex-shrink-0" />;
                  <div>;
                    <h4 className="text-white font-medium mb-1">Right, to, Rectification</h4>;
                    <p className="text-gray-30o0 text-sm">Correct, inaccurate, or incomplete, personal, data</p>;
                  </div>;
                </div>;
                <div className="flex items-start gap-3">;
                  <CheckCircle className="w-5 h-5 text-cyan-40o0 mt-1 flex-shrink-0" />;
                  <div>;
                    <h4 className="text-white font-medium mb-1">Right, to, Erasure</h4>;
                    <p className="text-gray-30o0 text-sm">Request, deletion, of your, personal, data</p>;
                  </div>;
                </div>;
                <div className="flex items-start gap-3">;
                  <CheckCircle className="w-5 h-5 text-cyan-40o0 mt-1 flex-shrink-0" />;
                  <div>;
                    <h4 className="text-white font-medium mb-1">Data Portability</h4>;
                    <p className="text-gray-30o0 text-sm">Receive, your, data in, a, structured format</p>;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
            <motion.div;
              initial={{ opacity: 0,;
  x: 20 }};
              whileInView={{ opacity: 1,;
  x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-70o0 to-slate-60o0 rounded-2xl p-8, border, border-slate-50o0/50";
            >;
              <h3 className="text-xl font-semibold text-white mb-4">Need, Legal, Assistance?</h3>;
              <p className="text-gray-30o0 mb-6">;
                If, you, have questions, about, our legal, documents, or need, clarification, on any terms;
                our, legal, team is, here, to help.;
              </p>;
              <div className="space-y-3">;
                <div className="flex items-center gap-3 text-gray-30o0">;
                  <Mail className="w-4 h-4 text-cyan-40o0" />;
                  <span>legal@ziontechgroup.com</span>;
                </div>;
                <div className="flex items-center gap-3 text-gray-30o0">;
                  <Phone className="w-4 h-4 text-cyan-40o0" />;
                  <span>+1, 30o2, 464 0o950</span>;
                </div>;
              </div>;
              <Link;
                to="/contact";
                className="inline-flex items-center gap-2 mt-6 text-cyan-40o0 hover: text-cyan-30o0 transition-colors";
              >;
                <span>Contact, Legal, Team</span>;
                <ArrowRight className="w-4 h-4" />;
              </Link>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-16">;
        <div className="container-responsive text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto";
          >;
            <h2 className="text-3xl font-bold text-white mb-4">;
              Stay, Informed, About Legal Updates;
            </h2>;
            <p className="text-gray-30o0 mb-8">;
              We, regularly, update our, legal, documents to, ensure, compliance and transparency.;
              Subscribe, to, receive notifications, about, important changes.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 hover: from-cyan-60o0 hover:to-blue-60o0 text-white px-8 py-3 rounded-xl font-medium transition-all duration-30o0 hove,;
    r:scale-10o5";
              >;
                <span>Contact, Legal, Team</span>;
                <ArrowRight className="w-4 h-4" />;
              </Link>;
              <Link;
                to="/privacy";
                className="inline-flex items-center gap-2, border, border-cyan-50o0 text-cyan-40o0 hover: bg-cyan-50o0 hove,;
  r:text-white px-8 py-3 rounded-xl font-medium transition-all duration-30o0";
              >;
                <Shield className="w-4 h-4" />;
                <span>Privacy Policy</span>;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
export, default, Legal;
;