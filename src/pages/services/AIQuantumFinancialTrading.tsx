import, React, from "react";
import { motion } from "framer-motion";
import { ;
  Brain,;
  TrendingUp,;
  Shield,;
  Zap,;
  Atom,;
  BarChart3,;
  DollarSign,;
  Target,;
  CheckCircle,;
  Star,;
  ArrowRight,;
  Cpu,;
  Lock,;
  Globe,;
  Users,;
  Clock,;
  PhoneMailMapPin;
} from "lucide-react";
const AIQuantumFinancialTrading = () => {
  const features = [;
    {
      title: "Quantum-AI, Algorithm, Trading",description: "Advanced, quantum, computing algorithms, combined, with AI, for, ultra-fast, market, analysis and execution"icon: Braincolo,;
  r: "from-purple-50o0 to-pink-50o0";
    };
    {
      title: "Real-time, Market, Prediction",description: "Machine, learning, models that, predict, market movements, with, 85%+ accuracy, using, quantum-enhanced analytics"icon: TrendingUpcolo,;
  r: "from-green-50o0 to-emerald-50o0";
    };
    {
      title: "Risk, Management, System",description: "AI-powered, risk, assessment and, portfolio, optimization with, quantum, computing speed"icon: Shieldcolo,;
  r: "from-red-50o0 to-orange-50o0";
    };
    {
      title: "Multi-Asset Trading",description: "Support, for, stocks, forex, crypto, commodities, and, derivatives, with unified interface"icon: BarChart3colo,;
  r: "from-blue-50o0 to-indigo-50o0";
    };
    {
      title: "Regulatory Compliance",description: "Automated, compliance, monitoring for SEC, FINRA, and, international, regulations"icon: Lockcolo,;
  r: "from-yellow-50o0 to-orange-50o0";
    },;
    {
      title: "Portfolio Analytics"descriptio,;
    n: "Advanced, portfolio, performance tracking, with, quantum-enhanced optimization"icon: Targetcolo,;
  r: "from-cyan-50o0 to-blue-50o0";
    };
,  ];
  const pricingPlans = [;
    {
      name: "Starter",price: "$2,999",;
      period: "/month",description: "Perfect, for, individual traders, and, small funds",features: [;
        "Quantum-AI, trading, algorithms",;
        "Real-time, market, data",;
        "Basic, risk, management",;
        "5, trading, strategies""Email support""Mobile, app, access";
    ,  ]popular: false;
    };
    {
      name: "Professional",price: "$7,999",;
      period: "/month",description: "Ideal, for, professional traders, and, medium funds",features: [;
        "Advanced, quantum, algorithms",;
        "Custom, strategy, development",;
        "Advanced, risk, management",;
        "Unlimited, trading, strategies",;
        "Priority support""API access""White-label options";
    ,  ]popular: true;
    };
    {
      name: "Enterprise",price: "$19,999",;
      period: "/month",description: "For, large, institutions and, hedge, funds",features: [;
        "Custom, quantum, computing integration",;
        "Dedicated, support, team",;
        "Custom, compliance, modules",;
        "Multi-tenant architecture",;
        "Advanced, analytics, dashboard""SLA guarantees""On-premise deployment";
    ,  ]popular: false;
    }
  ];
  const benefits = [;
    {
      title: "Increased, Trading, Speed"description: "Quantum, computing, reduces execution, time, from milliseconds, to, microseconds"metri,;
  c: "10o00x faster";
    };
    {
      title: "Higher Accuracy"descriptio,;
    n: "AI, algorithms, combined with, quantum, processing improve, prediction, accuracy"metri,;
  c: "85%+ accuracy";
    };
    {
      title: "Risk Reduction"descriptio,;
    n: "Advanced, risk, management reduces, portfolio, volatility and losses"metri,;
  c: "40% less risk";
    }{
      title: "Cost Savings"descriptio,;
    n: "Automated, trading, reduces manual, intervention, and operational costs"metri,;
  c: "60% cost reduction";
    };
,  ];
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-purple-90o0/20 to-cyan-90o0/20"></div>;
        <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <div className="flex items-center justify-center mb-6">;
              <Atom className="w-12 h-12 text-purple-40o0 mr-3" />;
              <h1 className="text-5xl lg: text-7xl font-bold bg-gradient-to-r from-purple-40o0 via-cyan-40o0 to-purple-40o0 bg-clip-text text-transparent">;
                AI, Quantum, Financial Trading;
              </h1>;
            </div>;
            <p className="text-xl l,;
  g: text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto">;
              Revolutionize, your, trading with, the, world's, first, AI-powered, quantum, computing platform.;
              Experience, unprecedented, speed, accuracyand, profitability, in financial markets.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a;
                href="/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-50o0 to-cyan-50o0 text-white font-semibold rounded-lg hover: from-purple-60o0 hove,;
    r:to-cyan-60o0 transition-all duration-30o0, transform, hover:scale-10o5";
              >;
                Start, Trading, Now;
                <ArrowRight className="ml-2 w-5 h-5" />;
              </a>;
              <a;
                href="#demo";
                className="inline-flex items-center px-8 py-4, border, border-purple-40o0 text-purple-40o0 font-semibold rounded-lg hover: bg-purple-40o0 hove,;
  r:text-white transition-all duration-30o0";
              >;
                Watch Demo;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Features Section */}
      <section className="py-20">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl lg: text-5xl font-bold text-white mb-6">;
              Revolutionary, Trading, Technology;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our, platform, combines cutting-edge, quantum, computing with, advanced, AI algorithms;
              to, deliver, unprecedented trading, performance, and profitability.;
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
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-80o0 to-slate-70o0 p-8 rounded-2xl, border, border-slate-60o0 hover: border-purple-40o0 transition-all duration-30o0 hove,;
    r:transform hove,;
  r:scale-10o5";
              >;
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl, flex, items-center justify-center mb-6`}>;
                  <feature.icon className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>;
                <p className="text-gray-30o0">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-80o0/50 to-slate-70o0/50">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl lg: text-5xl font-bold text-white mb-6">;
              Proven Results & Benefits;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our, platform, has delivered, exceptional, results for, traders, and institutions worldwide.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
            {benefits.map((benefitindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center";
              >;
                <div className="text-4xl font-bold text-purple-40o0 mb-4">{benefit.metric}</div>;
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>;
                <p className="text-gray-30o0">{benefit.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Pricing Section */}
      <section className="py-20">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl lg: text-5xl font-bold text-white mb-6">;
              Competitive, Pricing, Plans;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Choose, the, plan that, best, fits your, trading, needs and budget.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 l,;
  g: grid-cols-3 gap-8">;
            {pricingPlans.map((planindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-slate-80o0 to-slate-70o0 p-8 rounded-2xl border-2 ${;
                  plan.popular;
                    ? 'border-purple-40o0 shadow-2xl shadow-purple-50o0/20';
                    : 'border-slate-60o0';
                }`}
              >;
                {plan.popular && (;
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                    <span className="bg-gradient-to-r from-purple-50o0 to-cyan-50o0 text-white px-6 py-2 rounded-full text-sm font-semibold">;
                      Most Popular;
                    </span>;
                  </div>;
                )}
;
                <div className="text-center mb-8">;
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>;
                  <div className="flex items-baseline justify-center">;
                    <span className="text-5xl font-bold text-purple-40o0">{plan.price}</span>;
                    <span className="text-gray-40o0 ml-1">{plan.period}</span>;
                  </div>;
                  <p className="text-gray-30o0 mt-2">{plan.description}</p>;
                </div>;
                <ul className="space-y-4 mb-8">;
                  {plan.features.map((featurefeatureIndex) => (;
                    <li key={featureIndex} className="flex items-center">;
                      <CheckCircle className="w-5 h-5 text-green-40o0 mr-3 flex-shrink-0" />;
                      <span className="text-gray-30o0">{feature}</span>;
                    </li>;
                  ))}
                </ul>;
                <a;
                  href="/contact";
                  className={`w-full, block, text-center py-3 px-6 rounded-lg font-semibold transition-all duration-30o0 ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-purple-50o0 to-cyan-50o0 text-white hover: from-purple-60o0 hove,;
    r:to-cyan-60o0';
                      : 'bg-slate-60o0 text-white hove,;
  r:bg-slate-50o0';
                  }`}
                >;
                  Get Started;
                </a>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-90o0/20 to-cyan-90o0/20">;
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className="text-4xl lg: text-5xl font-bold text-white mb-6">;
              Ready, to, Transform Your Trading?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8">;
              Join, thousands, of successful, traders, who have, already, revolutionized their, trading, with our platform.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a;
                href="/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-50o0 to-cyan-50o0 text-white font-semibold rounded-lg hover: from-purple-60o0 hove,;
    r:to-cyan-60o0 transition-all duration-30o0, transform, hover:scale-10o5";
              >;
                Start, Free, Trial;
                <ArrowRight className="ml-2 w-5 h-5" />;
              </a>;
              <a;
                href="tel: +130o24640950";
                className="inline-flex items-center px-8 py-4, border, border-purple-40o0 text-purple-40o0 font-semibold rounded-lg hover:bg-purple-40o0 hove,;
  r:text-white transition-all duration-30o0";
              >;
                <Phone className="mr-2 w-5 h-5" />;
                Call Now;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Contact Information */}
      <section className="py-16 bg-slate-80o0">;
        <div className="max-w-4xl mx-auto px-4 sm: px-6 l,;
    g:px-8 text-center">;
          <h3 className="text-2xl font-bold text-white mb-8">Contact, Zion, Tech Group</h3>;
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">;
            <div className="flex flex-col items-center">;
              <Phone className="w-8 h-8 text-purple-40o0 mb-4" />;
              <p className="text-gray-30o0">Phone</p>;
              <a href="tel:+130o24640950" className="text-white hove,;
    r:text-purple-40o0 transition-colors">;
                +1, 30o2, 464 0o950;
              </a>;
            </div>;
            <div className="flex flex-col items-center">;
              <Mail className="w-8 h-8 text-purple-40o0 mb-4" />;
              <p className="text-gray-30o0">Email</p>;
              <a href="mailto: kleber@ziontechgroup.com" className="text-white hove,;
  r:text-purple-40o0 transition-colors">;
                kleber@ziontechgroup.com;
              </a>;
            </div>;
            <div className="flex flex-col items-center">;
              <MapPin className="w-8 h-8 text-purple-40o0 mb-4" />;
              <p className="text-gray-30o0">Address</p>;
              <p className="text-white">364, E, Main St, STE, 10o08<br />Middletown, DE, 1970o9</p>;
            </div>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
};
export, default, AIQuantumFinancialTrading;
;