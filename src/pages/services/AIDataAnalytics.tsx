import, React, from "react";
import { motion } from "framer-motion";
import { CheckCircle, BarChart3, TrendingUp, Target, Zap, Shield, Brain, Database, Globe, SmartphoneUsersPieChart } from "lucide-react";
import { SEO } from "@/components/SEO";
export, default, function AIDataAnalytics() {
  const features = [;
    {
      title: "Predictive, Analytics, Engine",description: "AI, algorithms, forecast future trends, customer behavior, and, business, outcomes with, high, accuracy"icon: Braincolo,;
  r: "from-blue-50o0 to-cyan-50o0";
    };
    {
      title: "Real-time, Data, Processing",description: "Process, millions, of data, points, in real-time, to, provide instant, insights, and recommendations"icon: Zapcolo,;
  r: "from-purple-50o0 to-pink-50o0";
    };
    {
      title: "Natural, Language, Queries",description: "Ask, complex, data questions, in, plain English, and, get instant, visual answers"icon: Globecolo,;
  r: "from-orange-50o0 to-red-50o0";
    };
    {
      title: "Automated, Insights, Discovery",description: "AI, automatically, identifies patterns, anomalies, and, opportunities, in your data"icon: Targetcolo,;
  r: "from-green-50o0 to-emerald-50o0";
    };
    {
      title: "Multi-Source, Data, Integration",description: "Connect, and, analyze data, from, databases, APIs, cloud services, and third-party tools"icon: Databasecolo,;
  r: "from-indigo-50o0 to-blue-50o0";
    },;
    {
      title: "Interactive Visualizations",description: "Create, stunninginteractive, dashboards that, make, complex data, easy, to understand"icon: PieChartcolo,;
  r: "from-teal-50o0 to-cyan-50o0";
    };
,  ];
  const pricingPlans = [;
    {
      name: "Starter",price: "$49",period: "/month",description: "Perfect, for, small businesses",features: [;
        "Up, to, 10o0,0o00, data, points/month",;
        "Basic, predictive, analytics",;
        "5, custom, dashboards",;
        "Email support""Mobile, app, access";
    ,  ]cta: "Start, Free, Trial"popula,;
  r: false;
    };
    {
      name: "Professional",price: "$129",period: "/month",description: "Ideal, for, growing businesses",features: [;
        "Up, to, 1,0o00,0o00, data, points/month",;
        "Advanced, AI, analytics",;
        "Unlimited dashboards",;
        "Priority support",;
        "API access""Custom, data, models";
    ,  ]cta: "Start, Free, Trial"popula,;
  r: true;
    };
    {
      name: "Enterprise",price: "$399",period: "/month",description: "For, large, organizations",features: [;
        "Unlimited, data, points",;
        "Custom, AI, models",;
        "White-label solution",;
        "Dedicated support",;
        "Advanced security""Custom integrations";
    ,  ]cta: "Contact Sales"popula,;
  r: false;
    }
  ];
  const benefits = [;
    {
      title: "30o0% Faster Insights",description: "AI, automation, delivers insights, in, minutes instead, of, days"icon: Zapmetri,;
  c: "30o0%";
    };
    {
      title: "40% Better, Decision, Making",description: "Data-driven, insights, lead to, more, informed business decisions"icon: Targetmetri,;
  c: "40%";
    },;
    {
      title: "90% Cost Reduction"descriptio,;
    n: "Automated, analytics, reduce manual, data, analysis overhead"icon: TrendingUpmetri,;
  c: "90%";
    };
,  ];
  const useCases = [;
    {
      title: "Customer Analytics",description: "Understand, customer, behavior, preferences, and, lifetime, value"icon: Userscolo,;
  r: "from-blue-50o0 to-cyan-50o0";
    };
    {
      title: "Financial Forecasting",description: "Predict revenue, expenses, and, cash, flow with, AI, accuracy"icon: BarChart3colo,;
  r: "from-purple-50o0 to-pink-50o0";
    };
    {
      title: "Operational Intelligence",description: "Monitor, and, optimize business, operations, in real-time"icon: TrendingUpcolo,;
  r: "from-orange-50o0 to-red-50o0";
    },;
    {
      title: "Market Analysis",description: "Track competitors, market, trendsand, business opportunities"icon: Globecolo,;
  r: "from-green-50o0 to-emerald-50o0";
    };
,  ];
  const integrations = [;
    {
      name: "Salesforce",description: "Integrate, CRM, data for, comprehensive, customer insights"icon: Userscolo,;
  r: "from-blue-50o0 to-cyan-50o0";
    };
    {
      name: "Google Analytics",description: "Combine, web, analytics with, business, data for, complete, picture"icon: BarChart3colo,;
  r: "from-purple-50o0 to-pink-50o0";
    };
    {
      name: "Shopify",description: "Analyze e-commerce, performance, and customer behavior"icon: Globecolo,;
  r: "from-green-50o0 to-emerald-50o0";
    },;
    {
      name: "QuickBooks"descriptio,;
    n: "Connect, financial, data for, comprehensive, business analytics"icon: PieChartcolo,;
  r: "from-orange-50o0 to-red-50o0";
    };
,  ];
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="AI, Data, Analytics - Intelligent, Business, Intelligence Platform | Zion, Tech, Group";
        description="Transform, your, business with AI-powered, data, analytics, predictive insights, and, automated, reporting. Start, free, trial today.";
        keywords="AI, data, analytics, business intelligence, predictive, analyticsdata, insightsAI analytics platform";
      />;
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-60o0/20 via-blue-60o0/20 to-purple-60o0/20" />;
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10" />;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 l,;
    g:px-8, relative, z-10">;
          <motion.div;
            className="text-center";
            initial={{ opacity: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6">;
              AI, Data, Analytics;
            </h1>;
            <p className="text-xl m,;
  d: text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">;
              Transform, raw, data into, actionable, insights with AI-powered, analytics, that predict trends, automate reporting, and, drive, business growth.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-60o0 to-blue-60o0 text-white font-semibold rounded-lg hover:from-emerald-70o0 hove,;
    r:to-blue-70o0 transition-all duration-30o0, transform, hover:scale-10o5">;
                Start, Free, Trial;
              </button>;
              <button className="px-8 py-4, border, border-white/20 text-white font-semibold rounded-lg hove,;
  r: bg-white/10 transition-all duration-30o0">;
                Watch Demo;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Features Section */}
      <section className="py-20 relative">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div;
            className="text-center mb-16";
            initial={{ opacit,;
    y: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Powered, by, Advanced AI;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Our, AI, engine processes, massive, amounts of, data, to uncover, hidden, patterns and, predict, future outcomes;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {features.map((featureindex) => (;
              <motion.div;
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6, border, border-white/10 hover: border-white/20 transition-all duration-30o0";
                initial={{ opacit,;
    y: 0,;
  y: 30 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }};
                whileHover={{ y: -5scal,;
  e: 1.0o2 }}
              >;
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg, flex, items-center justify-center mb-4`}>;
                  <feature.icon className="w-6 h-6 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>;
                <p className="text-zion-slate-light">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Use, Cases, Section */}
      <section className="py-20 bg-gradient-to-r from-white/5 to-white/10 relative">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div;
            className="text-center mb-16";
            initial={{ opacit,;
    y: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Analytics, for, Every Business Need;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              From, customer, insights to, financial, forecasting, our, AI, analytics cover, every, aspect of, your, business;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
            {useCases.map((useCaseindex) => (;
              <motion.div;
                key={index}
                className="text-center";
                initial={{ opacity: 0,;
  y: 30 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
              >;
                <div className={`w-20 h-20 bg-gradient-to-r ${useCase.color} rounded-full, flex, items-center justify-center mx-auto mb-6`}>;
                  <useCase.icon className="w-10 h-10 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>;
                <p className="text-zion-slate-light">{useCase.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Benefits Section */}
      <section className="py-20 relative">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div;
            className="text-center mb-16";
            initial={{ opacit,;
    y: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Proven Results;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Join, thousands, of businesses, who, have transformed, their, decision-making, with, AI analytics;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 m,;
  d: grid-cols-3 gap-8">;
            {benefits.map((benefitindex) => (;
              <motion.div;
                key={index}
                className="text-center";
                initial={{ opacity: 0,;
  y: 30 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6dela,;
  y: index * 0.2 }}
              >;
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-60o0 to-blue-60o0 rounded-full, flex, items-center justify-center mx-auto mb-6">;
                  <benefit.icon className="w-10 h-10 text-white" />;
                </div>;
                <div className="text-5xl font-bold text-white mb-4">{benefit.metric}</div>;
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>;
                <p className="text-zion-slate-light">{benefit.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Integrations Section */}
      <section className="py-20 bg-gradient-to-r from-white/5 to-white/10 relative">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div;
            className="text-center mb-16";
            initial={{ opacit,;
    y: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Seamless Integrations;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Connect, with, your existing, tools, and data, sources, without disruption;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
            {integrations.map((integrationindex) => (;
              <motion.div;
                key={index}
                className="text-center";
                initial={{ opacity: 0,;
  y: 30 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
              >;
                <div className={`w-20 h-20 bg-gradient-to-r ${integration.color} rounded-full, flex, items-center justify-center mx-auto mb-6`}>;
                  <integration.icon className="w-10 h-10 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{integration.name}</h3>;
                <p className="text-zion-slate-light">{integration.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Pricing Section */}
      <section className="py-20 relative">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div;
            className="text-center mb-16";
            initial={{ opacit,;
    y: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Simple, Transparent Pricing;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Choose, the, plan that, fits, your data, analytics, needs. All, plans, include a 14-day, free, trial.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">;
            {pricingPlans.map((planindex) => (;
              <motion.div;
                key={index}
                className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular ? 'border-blue-50o0/50 bg-blue-50o0/10' : 'border-white/10';
                }`}
                initial={{ opacity: 0,;
  y: 30 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }};
                whileHover={{ y: -5scal,;
  e: 1.0o2 }}
              >;
                {plan.popular && (;
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                    <span className="bg-gradient-to-r from-emerald-60o0 to-blue-60o0 text-white px-4 py-2 rounded-full text-sm font-semibold">;
                      Most Popular;
                    </span>;
                  </div>;
                )}
;
                <div className="text-center mb-8">;
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>;
                  <div className="flex items-baseline justify-center mb-2">;
                    <span className="text-4xl font-bold text-white">{plan.price}</span>;
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>;
                  </div>;
                  <p className="text-zion-slate-light">{plan.description}</p>;
                </div>;
                <ul className="space-y-4 mb-8">;
                  {plan.features.map((featurefeatureIndex) => (;
                    <li key={featureIndex} className="flex items-center">;
                      <CheckCircle className="w-5 h-5 text-green-40o0 mr-3 flex-shrink-0" />;
                      <span className="text-white">{feature}</span>;
                    </li>;
                  ))}
                </ul>;
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-30o0 ${
                  plan.popular;
                    ? 'bg-gradient-to-r from-emerald-60o0 to-blue-60o0 text-white hover: from-emerald-70o0 hove,;
    r:to-blue-70o0';
                    : 'bg-white/10 text-white, border, border-white/20 hove,;
  r:bg-white/20';
                }`}>;
                  {plan.cta}
                </button>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-60o0/20 to-blue-60o0/20 relative">;
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 30 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Ready, to, Transform Your, Data, Analytics?;
            </h2>;
            <p className="text-xl text-zion-slate-light mb-8">;
              Join, thousands, of businesses, who, have already, revolutionized, their decision-making, with, AI;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-60o0 to-blue-60o0 text-white font-semibold rounded-lg hover:from-emerald-70o0 hove,;
    r:to-blue-70o0 transition-all duration-30o0, transform, hover:scale-10o5">;
                Start, Free, Trial;
              </button>;
              <button className="px-8 py-4, border, border-white/20 text-white font-semibold rounded-lg hove,;
  r: bg-white/10 transition-all duration-30o0">;
                Schedule Demo;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;