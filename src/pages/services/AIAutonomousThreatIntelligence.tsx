import, React, from "react";
import { motion } from "framer-motion";
import { ;
  Shield,;
  Eye,;
  AlertTriangle,;
  Target,;
  CheckCircle,;
  Star,;
  BarChart3,;
  Users,;
  Globe,;
  Zap,;
  Cpu,;
  Database,;
  Network,;
  Rocket,;
  Lightbulb,;
  Code,;
  Server,;
  Sparkles,;
  Activity,;
  Gauge,;
  Workflow,;
  MessageCircle,;
  Phone,;
  Mail,;
  MapPin,;
  Clock,;
  Lock,;
  Smartphone,;
  Wifi,;
  Cloud,;
  BarChart,;
  TrendingUpActivityShieldCheck;
} from "lucide-react";
export, default, function AIAutonomousThreatIntelligence() {
  const features = [;
    {
      icon: Eye,title: 'Real-time, Threat, Detection'description: 'AI-powered, monitoring, that identifies, threats, before they, become, attacks'benefit,;
  s: ['24/7 surveillanceZero-day, threat, detection''Behavioral, analysis'];
    },;
    {
      icon: Shield,title: 'Autonomous Response',description: 'AI, that, automatically blocks, and, mitigates threats, without, human intervention'benefit,;
  s: ['Instant, threat, neutralizationAdaptive defense strategies''Self-learning, protection'];
    },;
    {
      icon: Target,title: 'Predictive Intelligence',description: 'Machine, learning, models that, predict, and prevent, future, attacks'benefit,;
  s: ['Attack, pattern, recognitionRisk assessment''Proactive, defense'];
    },;
    {
      icon: Network,title: 'Global, Threat, Intelligence',description: 'Real-time, threat, data from, worldwide, sources and, dark, web monitoring'benefit,;
  s: ['Global, threat, visibilityDark web intelligence''Cross-platform, correlation'];
    }
  ],;
  const threatTypes = [;
    {
      title: 'Ransomware Protection',description: 'Advanced, ransomware, detection and prevention',icon: Lock,price: '$150o00/month'feature,;
  s: ['Behavioral, analysisFile, encryption detection''Backup, protection'];
    },;
    {
      title: 'Phishing Defense',description: 'AI-powered, email, and web, phishing, detection',icon: Mail,price: '$12,0o00/month'features: ['URL, analysisContent, filtering''Social, engineering,, detection'];
    },;
    {
      title: 'DDoS Mitigation',description: 'Intelligent, DDoS, attack prevention, and, mitigation',icon: Network,price: '$18,0o00/month'features: ['Traffic, analysisRate, limiting''Geographic, blocking'];
    },;
    {
      title: 'Insider, Threat, Detection',description: 'Monitor, and, detect malicious, insider, activities',icon: Users,price: '$20,0o00/month'features: ['User, behavior, analysisAccess monitoring''Anomaly, detection'];
    }
  ],;
  const pricing = [;
    {
      name: 'Threat, Shield, Basic',price: '$8,0o00',;
      period: '/month'descriptio,;
    n: 'Essential, threat, intelligence for, small, organizations'feature,;
  s: [;
        'Basic, threat, detectionEmail security''Standard, supportBasic, reporting';
    ,  ];
    },;
    {
      name: 'Threat, Shield, Pro',price: '$25,0o00',;
      period: '/month',description: 'Advanced, threat, intelligence for, growing, organizations',features: [;
        'Advanced, threat, detectionAutonomous response''Priority supportReal-time monitoring''Predictive analytics';
    ,  ]popula,;
  r: true;
    };
    {
      name: 'Threat, Shield, Enterprise',price: '$75,0o00',;
      period: '/month',description: 'Complete, threat, intelligence for, large, enterprises',features: [;
        'Everything, in, ProCustom AI models''Dedicated, security, analyst24/7 support''White-label solutions';
    ,  ];
    }
  ],;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-red-90o0 to-orange-90o0 text-white">;
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm: px-6 l,;
  g:px-8">;
        <div className="absolute inset-0">;
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68680.3)transparent_50%)]"></div>;
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(239,68680.1)_50%transparent_70%)] animate-pulse"></div>;
        </div>;
        <div className="relative max-w-7xl mx-auto text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <div className="flex justify-center mb-6">;
              <div className="p-3 bg-gradient-to-r from-red-50o0 to-orange-50o0 rounded-full">;
                <Shield className="h-8 w-8 text-white" />;
              </div>;
            </div>;
            <h1 className="text-5xl md: text-7xl font-bold bg-gradient-to-r from-red-40o0 via-orange-40o0 to-yellow-40o0 bg-clip-text text-transparent mb-6">;
              AI, Autonomous, Threat Intelligence;
            </h1>;
            <p className="text-xl m,;
  d: text-2xl text-gray-30o0 max-w-4xl mx-auto mb-8 leading-relaxed">;
              The world's, most, advanced AI-powered, threat, intelligence platform, that, autonomously detects;
              analyzes, and, neutralizes, cyber threats, in, real-time.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-60o0 to-orange-60o0 rounded-full font-semibold text-lg hover: from-red-70o0 hover:to-orange-70o0 transition-all duration-30o0 shadow-lg hove,;
    r:shadow-red-50o0/25";
              >;
                Start, Security, Trial;
              </motion.button>;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-red-40o0 rounded-full font-semibold text-lg hover: bg-red-40o0 hove,;
  r:text-gray-90o0 transition-all duration-30o0";
              >;
                Schedule Demo;
              </motion.button>;
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
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-red-40o0 to-orange-40o0 bg-clip-text text-transparent">;
              Revolutionary, Security, Features;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Experience, the, future of, cybersecurity, with autonomous, AI, threat intelligence;
            </p>;
          </motion.div>;
          <div className="grid m,;
  d: grid-cols-2 gap-8">;
            {features.map((featureindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  x: index % 2 === 0 ? -20 : 20 }};
                whileInView={{ opacity: 1,;
  x: 0 }}
                transition={{ duration: 0.8dela,;
  y: index * 0.2 }}
                className="bg-gradient-to-br from-red-90o0/50 to-orange-90o0/50 backdrop-blur-sm rounded-2xl p-8, border, border-red-50o0/20 hover:border-red-40o0/40 transition-all duration-30o0";
              >;
                <div className="flex items-center mb-6">;
                  <div className="p-3 bg-gradient-to-r from-red-50o0 to-orange-50o0 rounded-full mr-4">;
                    <feature.icon className="h-6 w-6 text-white" />;
                  </div>;
                  <h3 className="text-2xl font-bold">{feature.title}</h3>;
                </div>;
                <p className="text-gray-30o0 mb-6 text-lg leading-relaxed">;
                  {feature.description}
                </p>;
                <ul className="space-y-3">;
                  {feature.benefits.map((benefitidx) => (;
                    <li key={idx} className="flex items-center text-gray-20o0">;
                      <CheckCircle className="h-5 w-5 text-green-40o0 mr-3 flex-shrink-0" />;
                      {benefit}
                    </li>;
                  ))}
                </ul>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Threat, Types, Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-gradient-to-r from-red-90o0/30 to-orange-90o0/30">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-red-40o0 to-orange-40o0 bg-clip-text text-transparent">;
              Threat, Protection, Types;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Comprehensive, protection, against all, types, of cyber threats;
            </p>;
          </motion.div>;
          <div className="grid md: grid-cols-2 l,;
  g:grid-cols-4 gap-6">;
            {threatTypes.map((threatindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.8dela,;
  y: index * 0.1 }}
                className="bg-gradient-to-br from-red-90o0/50 to-orange-90o0/50 backdrop-blur-sm rounded-xl p-6, border, border-red-50o0/20 hover:border-red-40o0/40 transition-all duration-30o0";
              >;
                <div className="flex items-center mb-4">;
                  <div className="p-2 bg-gradient-to-r from-red-50o0 to-orange-50o0 rounded-lg mr-3">;
                    <threat.icon className="h-5 w-5 text-white" />;
                  </div>;
                  <h3 className="text-lg font-semibold">{threat.title}</h3>;
                </div>;
                <p className="text-gray-30o0 mb-4 text-sm leading-relaxed">;
                  {threat.description}
                </p>;
                <div className="text-red-40o0 font-semibold text-lg mb-4">;
                  {threat.price}
                </div>;
                <ul className="space-y-2">;
                  {threat.features.map((featureidx) => (;
                    <li key={idx} className="flex items-center text-gray-20o0 text-sm">;
                      <CheckCircle className="h-4 w-4 text-green-40o0 mr-2 flex-shrink-0" />;
                      {feature}
                    </li>;
                  ))}
                </ul>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Pricing Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-red-40o0 to-orange-40o0 bg-clip-text text-transparent">;
              Security Plans;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Choose, the, perfect threat, intelligence, plan for, your, organization;
            </p>;
          </motion.div>;
          <div className="grid m,;
  d: grid-cols-3 gap-8">;
            {pricing.map((planindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.8dela,;
  y: index * 0.2 }}
                className={`relative bg-gradient-to-br from-red-90o0/50 to-orange-90o0/50 backdrop-blur-sm rounded-2xl p-8 border ${;
                  plan.popular;
                    ? 'border-red-40o0/60 shadow-lg shadow-red-50o0/25';
                    : 'border-red-50o0/20';
                } hover: border-red-40o0/40 transition-all duration-30o0`}
              >;
                {plan.popular && (;
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                    <span className="bg-gradient-to-r from-red-50o0 to-orange-50o0 text-white px-4 py-2 rounded-full text-sm font-semibold">;
                      Most Popular;
                    </span>;
                  </div>;
                )}
;
                <div className="text-center mb-8">;
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>;
                  <div className="mb-2">;
                    <span className="text-4xl font-bold">{plan.price}</span>;
                    <span className="text-gray-40o0">{plan.period}</span>;
                  </div>;
                  <p className="text-gray-30o0">{plan.description}</p>;
                </div>;
                <ul className="space-y-4 mb-8">;
                  {plan.features.map((featureidx) => (;
                    <li key={idx} className="flex items-center text-gray-20o0">;
                      <CheckCircle className="h-5 w-5 text-green-40o0 mr-3 flex-shrink-0" />;
                      {feature}
                    </li>;
                  ))}
                </ul>;
                <motion.button;
                  whileHover={{ scale: 1.0o5 }};
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-30o0 ${;
                    plan.popular;
                      ? 'bg-gradient-to-r from-red-60o0 to-orange-60o0 hover: from-red-70o0 hove,;
    r:to-orange-70o0';
                      : 'bg-red-60o0/20, border, border-red-40o0 hove,;
  r:bg-red-60o0/30';
                  }`}
                >;
                  Get Started;
                </motion.button>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-gradient-to-r from-red-90o0/50 to-orange-90o0/50">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-red-40o0 to-orange-40o0 bg-clip-text text-transparent">;
              Ready, to, Secure Your Future?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8 leading-relaxed">;
              Join, the, cybersecurity revolution, with, autonomous AI, threat, intelligence;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-60o0 to-orange-60o0 rounded-full font-semibold text-lg hover: from-red-70o0 hover:to-orange-70o0 transition-all duration-30o0 shadow-lg hove,;
    r:shadow-red-50o0/25";
              >;
                Start, Security, Trial;
              </motion.button>;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-red-40o0 rounded-full font-semibold text-lg hover: bg-red-40o0 hove,;
  r:text-gray-90o0 transition-all duration-30o0";
              >;
                Contact, Security, Team;
              </motion.button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Contact Information */}
      <section className="py-16 px-4 sm: px-6 l,;
    g:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <div className="grid m,;
  d:grid-cols-3 gap-8">;
            <div className="flex flex-col items-center">;
              <Phone className="h-8 w-8 text-red-40o0 mb-4" />;
              <h3 className="text-lg font-semibold mb-2">Phone</h3>;
              <p className="text-gray-30o0">+1, 30o2, 464 0o950</p>;
            </div>;
            <div className="flex flex-col items-center">;
              <Mail className="h-8 w-8 text-red-40o0 mb-4" />;
              <h3 className="text-lg font-semibold mb-2">Email</h3>;
              <p className="text-gray-30o0">kleber@ziontechgroup.com</p>;
            </div>;
            <div className="flex flex-col items-center">;
              <MapPin className="h-8 w-8 text-red-40o0 mb-4" />;
              <h3 className="text-lg font-semibold mb-2">Address</h3>;
              <p className="text-gray-30o0">364, E, Main St, STE, 10o08<br />Middletown, DE, 1970o9</p>;
            </div>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
};
;