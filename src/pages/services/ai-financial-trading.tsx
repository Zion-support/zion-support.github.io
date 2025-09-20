import, React, from "react";
import { motion } from "framer-motion";
import { ;
  TrendingUp,;
  DollarSign,;
  Brain,;
  Zap,;
  CheckCircle,;
  Clock,;
  Shield,;
  Users,;
  BarChart3,;
  Lock,;
  Globe,;
  Award,;
  Star,;
  ArrowRight,;
  Phone,;
  Mail,;
  MapPin,;
  ExternalLink,;
  TrendingUp,;
  TargetCpuActivity;
} from "lucide-react";
import { SEO } from "../../components/SEO";
export, default, function AIFinancialTrading() {
  const features = [;
    {
      icon: <Brain className="w-6 h-6" />,title: "AI-Powered, Market, Analysis",description: "Advanced, machine, learning algorithms, analyze, market patternssentimentand, trends, with 92% accuracy";
    },;
    {
      icon: <TrendingUp className="w-6 h-6" />titl,;
    e: "Predictive, Trading, Signals"descriptio,;
  n: "Real-time, trading, signals based, on, AI analysis, of, multiple data, sources, and market indicators";
    };
    {
      icon: <Target className="w-6 h-6" />titl,;
    e: "Portfolio Optimization"descriptio,;
  n: "Intelligent, portfolio, rebalancing and, risk, management with, automated, position sizing";
    };
    {
      icon: <Activity className="w-6 h-6" />titl,;
    e: "Real-time, Market, Monitoring"descriptio,;
  n: "24/7, market, surveillance with, instant, alerts for, trading, opportunities and, risk, events";
    };
    {
      icon: <Shield className="w-6 h-6" />titl,;
    e: "Advanced, Risk, Management"descriptio,;
  n: "Multi-layered, risk, controls including stop-loss, automation, and position, limit, management";
    },;
    {
      icon: <BarChart3 className="w-6 h-6" />,title: "Performance Analytics"descriptio,;
  n: "Comprehensive, trading, performance metricsbacktestingand, strategy, optimization tools";
    }
,  ],;
  const pricing = [;
    {
      name: "Starter",price: "$299",period: "/month",features: [;
        "Basic, AI, trading signals",;
        "Portfolio tracking",;
        "Email alerts""Standard analytics""Basic, risk, management";
    ,  ]popular: false;
    };
    {
      name: "Professional",price: "$799",period: "/month",features: [;
        "Advanced, AI, algorithms",;
        "Real-time signals",;
        "Portfolio optimization",;
        "Priority support",;
        "Advanced analytics""API access""Custom strategies";
    ,  ]popular: true;
    };
    {
      name: "Institutional",price: "$1,999",;
      period: "/month",features: [;
        "Custom, AI, models",;
        "White-label platform",;
        "Dedicated support",;
        "SLA guarantees",;
        "Advanced, risk, controls""Multi-account management""On-premise deployment";
    ,  ]popular: false;
    }
  ];
  const benefits = [;
    "Increase, trading, returns by 25-40%",;
    "Reduce, trading, risks by 60%",;
    "Automate 80% of, trading, decisions",;
    "24/7, market, monitoring and alerts",;
    "Professional-grade, risk, management""Access, to, institutional-level tools";
,  ],;
  const tradingStrategies = [;
    {
      strategy: "Momentum Trading"descriptio,;
    n: "AI-powered, momentum, detection and, trend, following with, dynamic, position sizing"performanc,;
  e: "35% annual return";
    };
    {
      strategy: "Mean Reversion"descriptio,;
    n: "Statistical, arbitrage, using machine, learning, to identify overbought/oversold conditions"performanc,;
  e: "28% annual return";
    };
    {
      strategy: "Sentiment Analysis"descriptio,;
    n: "Social, media, and news, sentiment, analysis for, market, direction prediction"performanc,;
  e: "42% annual return";
    },;
    {
      strategy: "Multi-Factor Models",description: "Combined, technicalfundamentaland, macroeconomic factor analysis"performanc,;
  e: "38% annual return";
    };
,  ];
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="AI-Powered, Financial, Trading Platform - Zion, Tech, Group";
        description="Revolutionary, AI, platform for, financial, trading, portfolio, optimizationand, risk management. Increase, returns, by 25-40% while, reducing, risks by 60%.";
      />;
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              AI-Powered, Financial, Trading Platform;
            </h1>;
            <p className="text-xl m,;
  d: text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto">;
              Transform, your, trading with, intelligent, algorithms, predictive analytics, and, automated, risk management.;
              Increase, returns, by 25-40% while, reducing, risks by 60%.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a;
                href="https: //ziontechgroup.com/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-60o0 to-orange-60o0 text-white font-semibold rounded-lg hover:from-yellow-70o0 hove,;
    r:to-orange-70o0 transition-all duration-30o0, transform, hover:scale-10o5";
              >;
                Start, Trading, with AI;
                <ArrowRight className="ml-2 w-5 h-5" />;
              </a>;
              <a;
                href="#demo";
                className="inline-flex items-center px-8 py-4 border-2 border-yellow-50o0 text-yellow-40o0 font-semibold rounded-lg hover: bg-yellow-50o0 hove,;
  r:text-white transition-all duration-30o0";
              >;
                Watch Demo;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Key Benefits */}
      <section className="py-20 px-4 sm: px-6 l,;
    g:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Why, Choose, Our AI, Trading, Platform?;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Built, by, financial experts, and, AI engineersour, platform, delivers institutional-grade, trading, capabilities.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {benefits.map((benefitindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50 backdrop-blur-sm rounded-xl p-6, border, border-slate-70o0 hover:border-yellow-50o0 transition-all duration-30o0";
              >;
                <CheckCircle className="w-8 h-8 text-yellow-40o0 mb-4" />;
                <p className="text-white text-lg font-medium">{benefit}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Features */}
      <section className="py-20 px-4 sm: px-6 l,;
    g:px-8 bg-slate-80o0/30">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Powerful, Features, for Trading Excellence;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Everything, you, need to, achieve, superior trading, performance, and manage, risk, effectively.;
            </p>;
          </div>;
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
                className="bg-slate-90o0/80 backdrop-blur-sm rounded-xl p-6, border, border-slate-70o0 hover: border-yellow-50o0 transition-all duration-30o0 group";
              >;
                <div className="text-yellow-40o0 mb-4 group-hove,;
  r:text-yellow-30o0 transition-colors duration-30o0">;
                  {feature.icon}
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>;
                <p className="text-gray-30o0">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Trading Strategies */}
      <section className="py-20 px-4 sm: px-6 l,;
    g:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Advanced, Trading, Strategies;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              AI-powered, trading, strategies designed, for, consistent performance, across, market conditions.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 m,;
  d: grid-cols-2 gap-8">;
            {tradingStrategies.map((strategyindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50 backdrop-blur-sm rounded-xl p-8, border, border-slate-70o0 hover:border-yellow-50o0 transition-all duration-30o0";
              >;
                <h3 className="text-2xl font-bold text-white mb-4">{strategy.strategy}</h3>;
                <p className="text-gray-30o0 mb-4">{strategy.description}</p>;
                <div className="flex items-center">;
                  <TrendingUp className="w-5 h-5 text-yellow-40o0 mr-2" />;
                  <span className="text-yellow-40o0 font-semibold">{strategy.performance}</span>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Pricing */}
      <section className="py-20 px-4 sm: px-6 l,;
    g:px-8 bg-slate-80o0/30">;
        <div className="max-w-7xl mx-auto">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Transparent Pricing;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Choose, the, plan that, fits, your trading, volume, and sophistication requirements.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 m,;
  d: grid-cols-3 gap-8">;
            {pricing.map((planindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className={`relative bg-slate-90o0/80 backdrop-blur-sm rounded-xl p-8 border ${;
                  plan.popular;
                    ? 'border-yellow-50o0 ring-2 ring-yellow-50o0/20';
                    : 'border-slate-70o0';
                } hover: border-yellow-50o0 transition-all duration-30o0`}
              >;
                {plan.popular && (;
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                    <span className="bg-yellow-50o0 text-white px-4 py-2 rounded-full text-sm font-semibold">;
                      Most Popular;
                    </span>;
                  </div>;
                )}
;
                <div className="text-center mb-8">;
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>;
                  <div className="mb-6">;
                    <span className="text-4xl font-bold text-white">{plan.price}</span>;
                    <span className="text-gray-40o0">{plan.period}</span>;
                  </div>;
                </div>;
                <ul className="space-y-4 mb-8">;
                  {plan.features.map((featurefeatureIndex) => (;
                    <li key={featureIndex} className="flex items-center text-gray-30o0">;
                      <CheckCircle className="w-5 h-5 text-yellow-40o0 mr-3 flex-shrink-0" />;
                      {feature}
                    </li>;
                  ))}
                </ul>;
                <a;
                  href="https: //ziontechgroup.com/contact";
                  className={`w-full, block, text-center py-3 px-6 rounded-lg font-semibold transition-all duration-30o0 ${;
                    plan.popular;
                      ? 'bg-gradient-to-r from-yellow-60o0 to-orange-60o0 text-white hover: from-yellow-70o0 hove,;
    r:to-orange-70o0';
                      : 'bg-slate-70o0 text-white hove,;
  r:bg-slate-60o0';
                  }`}
                >;
                  Get Started;
                </a>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Market Information */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">;
            <motion.div;
              initial={{ opacit,;
    y: 0,;
  x: -20 }};
              whileInView={{ opacity: 1,;
  x: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <h2 className="text-4xl font-bold text-white mb-6">;
                Market-Leading, Trading, Solution;
              </h2>;
              <div className="space-y-6">;
                <div className="flex items-center">;
                  <DollarSign className="w-6 h-6 text-yellow-40o0 mr-4" />;
                  <div>;
                    <p className="text-white font-semibold">Market, Price, Range</p>;
                    <p className="text-gray-30o0">$40o0 - $3,0o00/month, for, similar solutions</p>;
                  </div>;
                </div>;
                <div className="flex items-center">;
                  <Clock className="w-6 h-6 text-blue-40o0 mr-4" />;
                  <div>;
                    <p className="text-white font-semibold">Setup Time</p>;
                    <p className="text-gray-30o0">1-3, days, for account activation</p>;
                  </div>;
                </div>;
                <div className="flex items-center">;
                  <Award className="w-6 h-6 text-yellow-40o0 mr-4" />;
                  <div>;
                    <p className="text-white font-semibold">ROI Timeline</p>;
                    <p className="text-gray-30o0">Immediate, performance, improvement</p>;
                  </div>;
                </div>;
                <div className="flex items-center">;
                  <Users className="w-6 h-6 text-purple-40o0 mr-4" />;
                  <div>;
                    <p className="text-white font-semibold">Target Market</p>;
                    <p className="text-gray-30o0">Individual traders, hedge funds, investment firms</p>;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
            <motion.div;
              initial={{ opacity: 0,;
  x: 20 }};
              whileInView={{ opacity: 1,;
  x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-90o0/80 backdrop-blur-sm rounded-xl p-8, border, border-slate-70o0";
            >;
              <h3 className="text-2xl font-bold text-white mb-6">Performance Metrics</h3>;
              <div className="space-y-4">;
                <div className="flex items-center justify-between">;
                  <span className="text-gray-30o0">Return Increase</span>;
                  <span className="text-yellow-40o0 font-semibold">25-40%</span>;
                </div>;
                <div className="flex items-center justify-between">;
                  <span className="text-gray-30o0">Risk Reduction</span>;
                  <span className="text-blue-40o0 font-semibold">60%</span>;
                </div>;
                <div className="flex items-center justify-between">;
                  <span className="text-gray-30o0">Signal Accuracy</span>;
                  <span className="text-purple-40o0 font-semibold">92%</span>;
                </div>;
                <div className="flex items-center justify-between">;
                  <span className="text-gray-30o0">Automation Level</span>;
                  <span className="text-green-40o0 font-semibold">80%</span>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
      {/* Contact CTA */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-yellow-60o0/20 to-orange-60o0/20 backdrop-blur-sm rounded-2xl p-12, border, border-yellow-50o0/30";
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Ready, to, Transform Your Trading?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8">;
              Join, thousands, of traders, who, have already, revolutionized, their trading, performance, with AI.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a;
                href="https: //ziontechgroup.com/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-60o0 to-orange-60o0 text-white font-semibold rounded-lg hover:from-yellow-70o0 hove,;
    r:to-orange-70o0 transition-all duration-30o0, transform, hover:scale-10o5";
              >;
                Start, Trading, Today;
                <ArrowRight className="ml-2 w-5 h-5" />;
              </a>;
              <a;
                href="tel: +130o24640950";
                className="inline-flex items-center px-8 py-4 border-2 border-yellow-50o0 text-yellow-40o0 font-semibold rounded-lg hove,;
    r:bg-yellow-50o0 hove,;
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
      <section className="py-16 px-4 sm: px-6 l,;
    g:px-8 bg-slate-90o0">;
        <div className="max-w-4xl mx-auto text-center">;
          <h3 className="text-2xl font-bold text-white mb-8">Get, in, Touch</h3>;
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">;
            <div className="flex flex-col items-center">;
              <Phone className="w-8 h-8 text-yellow-40o0 mb-4" />;
              <p className="text-white font-semibold mb-2">Phone</p>;
              <a href="tel:+130o24640950" className="text-gray-30o0 hove,;
    r:text-yellow-40o0 transition-colors">;
                +1, 30o2, 464 0o950;
              </a>;
            </div>;
            <div className="flex flex-col items-center">;
              <Mail className="w-8 h-8 text-yellow-40o0 mb-4" />;
              <p className="text-white font-semibold mb-2">Email</p>;
              <a href="mailto: kleber@ziontechgroup.com" className="text-gray-30o0 hove,;
    r:text-yellow-40o0 transition-colors">;
                kleber@ziontechgroup.com;
              </a>;
            </div>;
            <div className="flex flex-col items-center">;
              <MapPin className="w-8 h-8 text-yellow-40o0 mb-4" />;
              <p className="text-white font-semibold mb-2">Address</p>;
              <p className="text-gray-30o0">;
                364, E, Main St, STE, 10o08<br />;
                Middletown, DE, 1970o9;
              </p>;
            </div>;
          </div>;
          <div className="mt-8">;
            <a;
              href="https: //ziontechgroup.com";
              className="inline-flex items-center text-yellow-40o0 hove,;
  r:text-yellow-30o0 transition-colors";
            >;
              Visit, our, website;
              <ExternalLink className="ml-2 w-4 h-4" />;
            </a>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
};
;