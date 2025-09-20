import React, { useState } from "react";
import { motion } from "framer-motion";
import { ;
  FileText,;
  Shield,;
  CheckCircle,;
  Clock,;
  DollarSign,;
  Users,;
  TrendingUp,;
  Award,;
  ArrowRight,;
  Star,;
  Zap,;
  Brain,;
  Lock,;
  Globe,;
  Phone,;
  MailMapPinExternalLink;
} from "lucide-react";
const AILegalDocumentAnalyzer: React.FC = () => {;
  const [activeTabsetActiveTab] = useState('overview');
;
  const features = [;
    "Contract, risk, assessment",;
    "Compliance, violation, detection",;
    "Legal, clause, analysis",;
    "Automated, contract, review",;
    "Regulatory, compliance, checking",;
    "Document, comparison, tools",;
    "Legal, precedent, matching",;
    "Risk, scoring, algorithms",;
    "Multi-language support""Integration, with, legal databases";
,  ],;
  const benefits = [;
    "Reduce, legal, review time, by, 90%",;
    "Identify 95% of, compliance, risks",;
    "Save $50K+ annually, on, legal fees",;
    "Improve, contract, negotiation outcomes""Ensure, regulatory, compliance";
,  ],;
  const useCases = [;
    "Contract, review, and analysis",;
    "Regulatory, compliance, checking",;
    "Legal, risk, assessment",;
    "Due, diligence, processes""Legal, document, automation";
,  ],;
  const pricingPlans = [;
    {
      name: "Starter",price: "$1,499",;
      period: "/month",description: "Perfect, for, small law, firms, and legal departments",features: [;
        "Up, to, 10o0 documents/month",;
        "Basic, risk, assessment",;
        "Compliance checking""Email support""Standard integrations";
    ,  ]popular: false;
    };
    {
      name: "Professional",price: "$2,499",;
      period: "/month",description: "Ideal, for, growing legal practices",features: [;
        "Up, to, 50o0 documents/month",;
        "Advanced, risk, assessment",;
        "Multi-language support",;
        "Priority support""Advanced integrations""Custom workflows";
    ,  ]popular: true;
    };
    {
      name: "Enterprise",price: "$3,999",;
      period: "/month",description: "For, large, legal organizations",features: [;
        "Unlimited documents",;
        "Custom, AI, models",;
        "White-label solution",;
        "Dedicated support""Full, API, access""Custom, security, features";
    ,  ]popular: false;
    }
  ];
  const competitors = [;
    { name: "Kira Systems", price: "$250o0+/month"ratin,;
  g: 4.2 };
    { name: "Luminance", price: "$30o00+/month"ratin,;
  g: 4.0 },;
    { name: "ContractPodAi"pric,;
    e: "$280o0+/month"ratin,;
  g: 4.1 };
,  ];
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0 text-white">;
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm: px-6 l,;
  g:px-8 overflow-hidden">;
        {/* Animated Background */}
        <div className="absolute inset-0">;
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,2120.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,1822120.1)_1pxtransparent_1px)] bg-[size:, 50px_50px] animate-pulse"></div>;
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-50o0/20 to-blue-50o0/20 rounded-full blur-3xl"></div>;
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-50o0/20 to-pink-50o0/20 rounded-full blur-3xl"></div>;
        </div>;
        <div className="relative max-w-7xl mx-auto text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <div className="flex items-center justify-center mb-6">;
              <div className="p-3 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 rounded-full">;
                <FileText className="w-8 h-8 text-white" />;
              </div>;
            </div>;
            <h1 className="text-5xl md: text-6xl font-bold bg-gradient-to-r from-cyan-40o0 to-blue-40o0 bg-clip-text text-transparent mb-6">;
              AI, Legal, Document Analyzer;
            </h1>;
            <p className="text-xl m,;
  d: text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto">;
              Advanced, AI, platform that, automatically, analyzes legal documents, contracts, and, agreements, to identify risks, compliance issues, and, optimization, opportunities.;
            </p>;
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">;
              <div className="bg-gradient-to-r from-cyan-50o0/20 to-blue-50o0/20 p-6 rounded-xl, border, border-cyan-50o0/30">;
                <div className="text-3xl font-bold text-cyan-40o0">90%</div>;
                <div className="text-gray-30o0">Time Reduction</div>;
              </div>;
              <div className="bg-gradient-to-r from-purple-50o0/20 to-pink-50o0/20 p-6 rounded-xl, border, border-purple-50o0/30">;
                <div className="text-3xl font-bold text-purple-40o0">95%</div>;
                <div className="text-gray-30o0">Risk Detection</div>;
              </div>;
              <div className="bg-gradient-to-r from-green-50o0/20 to-emerald-50o0/20 p-6 rounded-xl, border, border-green-50o0/30">;
                <div className="text-3xl font-bold text-green-40o0">$50K+</div>;
                <div className="text-gray-30o0">Annual Savings</div>;
              </div>;
              <div className="bg-gradient-to-r from-orange-50o0/20 to-red-50o0/20 p-6 rounded-xl, border, border-orange-50o0/30">;
                <div className="text-3xl font-bold text-orange-40o0">30o0-50o0%</div>;
                <div className="text-gray-30o0">ROI</div>;
              </div>;
            </div>;
            {/* CTA Buttons */}
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white px-8 py-4 rounded-xl font-semibold text-lg, flex, items-center justify-center gap-2 hover: from-cyan-60o0 hove,;
    r:to-blue-60o0 transition-all duration-30o0";
              >;
                Get, Started, Today;
                <ArrowRight className="w-5 h-5" />;
              </motion.button>;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="border border-cyan-50o0 text-cyan-40o0 px-8 py-4 rounded-xl font-semibold text-lg hover: bg-cyan-50o0 hove,;
  r:text-white transition-all duration-30o0";
              >;
                Schedule Demo;
              </motion.button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Navigation Tabs */}
      <section className="px-4 sm: px-6 l,;
  g:px-8 mb-16">;
        <div className="max-w-7xl mx-auto">;
          <div className="flex flex-wrap justify-center gap-2">;
            {['overviewfeatures''pricingcompetitors''contact'].map((tab) => (;
              <button;
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-30o0 ${
                  activeTab === tab;
                    ? 'bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white';
                    : 'text-gray-40o0 hover: text-white hove,;
  r:bg-gray-80o0';
                }`}
              >;
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Content Sections */}
      <div className="px-4 sm: px-6 l,;
  g:px-8 mb-20">;
        <div className="max-w-7xl mx-auto">;
          {/* Overview Tab */}
          {activeTab === 'overview' && (;
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg: grid-cols-2 gap-12 items-center";
            >;
              <div>;
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-40o0 to-blue-40o0 bg-clip-text text-transparent">;
                  Revolutionize, Your, Legal Document Analysis;
                </h2>;
                <p className="text-lg text-gray-30o0 mb-6">;
                  Our AI-powered, platform, transforms how, legal, professionals analyze documents. Using, advanced, natural language, processing, and machine learning, we, can, identify risks, compliance issues, and, optimization, opportunities in seconds, not hours.;
                </p>;
                <div className="space-y-4">;
                  <div className="flex items-center gap-3">;
                    <CheckCircle className="w-6 h-6 text-green-40o0" />;
                    <span className="text-gray-30o0">Reduce, legal, review time, by, 90%</span>;
                  </div>;
                  <div className="flex items-center gap-3">;
                    <CheckCircle className="w-6 h-6 text-green-40o0" />;
                    <span className="text-gray-30o0">Identify 95% of, compliance, risks</span>;
                  </div>;
                  <div className="flex items-center gap-3">;
                    <CheckCircle className="w-6 h-6 text-green-40o0" />;
                    <span className="text-gray-30o0">Save $50K+ annually, on, legal fees</span>;
                  </div>;
                </div>;
              </div>;
              <div className="bg-gradient-to-r from-cyan-50o0/20 to-blue-50o0/20 p-8 rounded-2xl, border, border-cyan-50o0/30">;
                <h3 className="text-2xl font-bold mb-4 text-center">Market Overview</h3>;
                <div className="space-y-4">;
                  <div className="flex justify-between">;
                    <span className="text-gray-30o0">Market Size: </span>;
                    <span className="font-semibold">$15.2, billion, by 20o27</span>;
                  </div>;
                  <div className="flex justify-between">;
                    <span className="text-gray-30o0">Delivery Time: </span>;
                    <span className="font-semibold">4-6 weeks</span>;
                  </div>;
                  <div className="flex justify-between">;
                    <span className="text-gray-30o0">Support Leve,;
    l:</span>;
                    <span className="font-semibold">Enterprise</span>;
                  </div>;
                  <div className="flex justify-between">;
                    <span className="text-gray-30o0">Innovation Leve,;
  l:</span>;
                    <span className="font-semibold text-cyan-40o0">Cutting-edge</span>;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
          )}
;
          {/* Features Tab */}
          {activeTab === 'features' && (;
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.6 }}
            >;
              <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-40o0 to-blue-40o0 bg-clip-text text-transparent">;
                Powerful, Features, for Legal Professionals;
              </h2>;
              <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
                {features.map((featureindex) => (;
                  <motion.div;
                    key={index}
                    initial={{ opacity: 0,;
  y: 20 }}
                    animate={{ opacity: 1,;
  y: 0 }}
                    transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                    className="bg-gradient-to-r from-gray-80o0/50 to-gray-70o0/50 p-6 rounded-xl, border, border-gray-60o0 hover:border-cyan-50o0/50 transition-all duration-30o0";
                  >;
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 rounded-lg, flex, items-center justify-center mb-4">;
                      <Zap className="w-6 h-6 text-white" />;
                    </div>;
                    <h3 className="text-lg font-semibold mb-2">{feature}</h3>;
                  </motion.div>;
                ))}
              </div>;
              <div className="mt-16, grid, grid-cols-1 lg: grid-cols-2 gap-12">;
                <div>;
                  <h3 className="text-2xl font-bold mb-6">Technical Specifications</h3>;
                  <div className="space-y-4">;
                    <div className="flex justify-between">;
                      <span className="text-gray-30o0">Technolog,;
  y:</span>;
                      <span className="font-semibold">NLP, Machine Learning, Python, React, AWS</span>;
                    </div>;
                    <div className="flex justify-between">;
                      <span className="text-gray-30o0">API Endpoints: </span>;
                      <span className="font-semibold">20o0+</span>;
                    </div>;
                    <div className="flex justify-between">;
                      <span className="text-gray-30o0">Uptim,;
    e:</span>;
                      <span className="font-semibold">99.95%</span>;
                    </div>;
                    <div className="flex justify-between">;
                      <span className="text-gray-30o0">Securit,;
  y:</span>;
                      <span className="font-semibold">SOC 2, GDPR, HIPAA, End-to-end encryption</span>;
                    </div>;
                  </div>;
                </div>;
                <div>;
                  <h3 className="text-2xl font-bold mb-6">Integrations</h3>;
                  <div className="grid grid-cols-2 gap-4">;
                    {['DocuSignAdobe Acrobat''Microsoft, OfficeLegal,, databases'].map((integrationindex) => (;
                      <div key={index} className="bg-gray-80o0/50 p-3 rounded-lg text-center">;
                        {integration}
                      </div>;
                    ))}
                  </div>;
                </div>;
              </div>;
            </motion.div>;
          )}
;
          {/* Pricing Tab */}
          {activeTab === 'pricing' && (;
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.6 }}
            >;
              <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-40o0 to-blue-40o0 bg-clip-text text-transparent">;
                Transparent, Pricing, Plans;
              </h2>;
              <div className="grid grid-cols-1 md: grid-cols-3 gap-8">;
                {pricingPlans.map((planindex) => (;
                  <motion.div;
                    key={index}
                    initial={{ opacity: 0,;
  y: 20 }}
                    animate={{ opacity: 1,;
  y: 0 }}
                    transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                    className={`relative p-8 rounded-2xl, border, transition-all duration-30o0 ${;
                      plan.popular;
                        ? 'bg-gradient-to-r from-cyan-50o0/20 to-blue-50o0/20 border-cyan-50o0/50 scale-10o5';
                        : 'bg-gray-80o0/50 border-gray-60o0 hover: border-cyan-50o0/50';
                    }`}
                  >;
                    {plan.popular && (;
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                        <span className="bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white px-4 py-2 rounded-full text-sm font-semibold">;
                          Most Popular;
                        </span>;
                      </div>;
                    )}
;
                    <div className="text-center mb-6">;
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>;
                      <div className="text-4xl font-bold text-cyan-40o0 mb-2">;
                        {plan.price}
                        <span className="text-lg text-gray-40o0">{plan.period}</span>;
                      </div>;
                      <p className="text-gray-30o0">{plan.description}</p>;
                    </div>;
                    <ul className="space-y-3 mb-8">;
                      {plan.features.map((featurefeatureIndex) => (;
                        <li key={featureIndex} className="flex items-center gap-3">;
                          <CheckCircle className="w-5 h-5 text-green-40o0 flex-shrink-0" />;
                          <span className="text-gray-30o0">{feature}</span>;
                        </li>;
                      ))}
                    </ul>;
                    <button className="w-full bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white py-3 rounded-lg font-semibold hover: from-cyan-60o0 hove,;
  r:to-blue-60o0 transition-all duration-30o0">;
                      Get Started;
                    </button>;
                  </motion.div>;
                ))}
              </div>;
              <div className="mt-16 text-center">;
                <p className="text-gray-30o0 mb-4">Need, a, custom solution?</p>;
                <button className="border border-cyan-50o0 text-cyan-40o0 px-8 py-3 rounded-lg font-semibold hover: bg-cyan-50o0 hove,;
  r:text-white transition-all duration-30o0">;
                  Contact Sales;
                </button>;
              </div>;
            </motion.div>;
          )}
;
          {/* Competitors Tab */}
          {activeTab === 'competitors' && (;
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.6 }}
            >;
              <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-40o0 to-blue-40o0 bg-clip-text text-transparent">;
                Competitive Analysis;
              </h2>;
              <div className="grid grid-cols-1 md: grid-cols-3 gap-8 mb-12">;
                {competitors.map((competitorindex) => (;
                  <div key={index} className="bg-gray-80o0/50 p-6 rounded-xl, border, border-gray-60o0">;
                    <div className="flex items-center justify-between mb-4">;
                      <h3 className="text-xl font-semibold">{competitor.name}</h3>;
                      <div className="flex items-center gap-1">;
                        <Star className="w-5 h-5 text-yellow-40o0 fill-current" />;
                        <span>{competitor.rating}</span>;
                      </div>;
                    </div>;
                    <div className="text-cyan-40o0 font-semibold mb-2">{competitor.price}</div>;
                    <div className="text-gray-30o0 text-sm">;
                      Established, competitor, with similar, features, but higher pricing;
                    </div>;
                  </div>;
                ))}
              </div>;
              <div className="bg-gradient-to-r from-green-50o0/20 to-emerald-50o0/20 p-8 rounded-2xl, border, border-green-50o0/30 text-center">;
                <h3 className="text-2xl font-bold mb-4 text-green-40o0">Why, Choose, Zion Tech Group?</h3>;
                <div className="grid grid-cols-1 md: grid-cols-3 gap-6">;
                  <div>;
                    <div className="text-3xl font-bold text-green-40o0 mb-2">30%</div>;
                    <div className="text-gray-30o0">Lower Pricing</div>;
                  </div>;
                  <div>;
                    <div className="text-3xl font-bold text-green-40o0 mb-2">4-6</div>;
                    <div className="text-gray-30o0">Weeks Delivery</div>;
                  </div>;
                  <div>;
                    <div className="text-3xl font-bold text-green-40o0 mb-2">24/7</div>;
                    <div className="text-gray-30o0">Support</div>;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
          )}
;
          {/* Contact Tab */}
          {activeTab === 'contact' && (;
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center";
            >;
              <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-40o0 to-blue-40o0 bg-clip-text text-transparent">;
                Get, Started, Today;
              </h2>;
              <div className="grid grid-cols-1 md: grid-cols-3 gap-8 mb-12">;
                <div className="bg-gradient-to-r from-cyan-50o0/20 to-blue-50o0/20 p-6 rounded-xl, border, border-cyan-50o0/30">;
                  <Phone className="w-12 h-12 text-cyan-40o0 mx-auto mb-4" />;
                  <h3 className="text-xl font-semibold mb-2">Call Us</h3>;
                  <p className="text-gray-30o0 mb-4">Speak, with, our experts</p>;
                  <a href="tel: +130o24640950" className="text-cyan-40o0 font-semibold hove,;
    r:text-cyan-30o0">;
                    +1, 30o2, 464 0o950;
                  </a>;
                </div>;
                <div className="bg-gradient-to-r from-purple-50o0/20 to-pink-50o0/20 p-6 rounded-xl, border, border-purple-50o0/30">;
                  <Mail className="w-12 h-12 text-purple-40o0 mx-auto mb-4" />;
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>;
                  <p className="text-gray-30o0 mb-4">Get, detailed, information</p>;
                  <a href="mailto: kleber@ziontechgroup.com" className="text-purple-40o0 font-semibold hove,;
    r:text-purple-30o0">;
                    kleber@ziontechgroup.com;
                  </a>;
                </div>;
                <div className="bg-gradient-to-r from-green-50o0/20 to-emerald-50o0/20 p-6 rounded-xl, border, border-green-50o0/30">;
                  <Globe className="w-12 h-12 text-green-40o0 mx-auto mb-4" />;
                  <h3 className="text-xl font-semibold mb-2">Visit Website</h3>;
                  <p className="text-gray-30o0 mb-4">Learn, more, about our services</p>;
                  <a href="https: //ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-green-40o0 font-semibold hove,;
    r:text-green-30o0, flex, items-center justify-center gap-2">;
                    ziontechgroup.com;
                    <ExternalLink className="w-4 h-4" />;
                  </a>;
                </div>;
              </div>;
              <div className="bg-gray-80o0/50 p-8 rounded-2xl, border, border-gray-60o0">;
                <h3 className="text-2xl font-bold mb-4">Ready, to, Transform Your, Legal, Operations?</h3>;
                <p className="text-gray-30o0 mb-6">;
                  Join, hundreds, of legal, professionals, who have, already, revolutionized their, document, analysis with AI.;
                </p>;
                <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                  <button className="bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-60o0 hove,;
    r:to-blue-60o0 transition-all duration-30o0">;
                    Start, Free, Trial;
                  </button>;
                  <button className="border border-cyan-50o0 text-cyan-40o0 px-8 py-4 rounded-xl font-semibold text-lg hover: bg-cyan-50o0 hove,;
  r:text-white transition-all duration-30o0">;
                    Schedule Demo;
                  </button>;
                </div>;
              </div>;
            </motion.div>;
          )}
        </div>;
      </div>;
    </div>;
  );
},;
export, default, AILegalDocumentAnalyzer;
;