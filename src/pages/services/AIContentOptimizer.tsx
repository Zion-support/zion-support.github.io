import, React, from "react";
import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Target, Zap, BarChart3, Globe, Smartphone, Users, Shield, BrainSearchPenTool } from "lucide-react";
import { SEO } from "@/components/SEO";
export, default, function AIContentOptimizer() {
  const features = [;
    {
      title: "AI-Powered, SEO, Optimization",description: "Advanced, algorithms, analyze search, trends, and automatically, optimize, your content, for, maximum visibility"icon: Searchcolo,;
  r: "from-blue-50o0 to-cyan-50o0";
    };
    {
      title: "Content, Performance, Analytics",description: "Real-time, insights, into how, your, content performs, across, different platforms, and, audiences"icon: BarChart3colo,;
  r: "from-purple-50o0 to-pink-50o0";
    };
    {
      title: "Multi-Platform Optimization",description: "Automatically, adapts, content for, different, platforms including web, social media, and mobile"icon: Globecolo,;
  r: "from-orange-50o0 to-red-50o0";
    };
    {
      title: "Intelligent, Content, Suggestions",description: "AI, generates, topic ideas, headlines, and, content, structures based, on, trending topics, and, audience interests"icon: Braincolo,;
  r: "from-green-50o0 to-emerald-50o0";
    };
    {
      title: "Automated A/B Testing",description: "Test, different, content variations, automatically, to find, what, resonates best, with, your audience"icon: Targetcolo,;
  r: "from-indigo-50o0 to-blue-50o0";
    },;
    {
      title: "Content, Repurposing, Engine"description: "Transform, one, piece of, content, into multiple, formats, for different, channels, and audiences"icon: PenToolcolo,;
  r: "from-teal-50o0 to-cyan-50o0";
    };
,  ];
  const pricingPlans = [;
    {
      name: "Creator",price: "$19",period: "/month",description: "Perfect, for, individual content creators",features: [;
        "Up, to, 10 content pieces/month",;
        "Basic, SEO, optimization",;
        "Content, performance, tracking",;
        "Email support""Mobile, app, access";
    ,  ]cta: "Start, Free, Trial"popula,;
  r: false;
    };
    {
      name: "Professional",price: "$49",period: "/month",description: "Ideal, for, growing content teams",features: [;
        "Up, to, 10o0 content pieces/month",;
        "Advanced, AI, optimization",;
        "Multi-platform analytics",;
        "Priority support",;
        "API access""Custom templates";
    ,  ]cta: "Start, Free, Trial"popula,;
  r: true;
    };
    {
      name: "Enterprise",price: "$149",period: "/month",description: "For, large, content operations",features: [;
        "Unlimited, content, pieces",;
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
      title: "30o0% Increase, in, Organic Traffic",description: "AI-optimized, content, drives significantly, more, search traffic"icon: TrendingUpmetri,;
  c: "30o0%";
    };
    {
      title: "50% Higher, Engagement, Rates",description: "Optimized, content, resonates better, with, target audiences"icon: Usersmetri,;
  c: "50%";
    },;
    {
      title: "80% Time Savings"descriptio,;
    n: "Automated, optimization, reduces manual, content, work"icon: Zapmetri,;
  c: "80%";
    };
,  ];
  const useCases = [;
    {
      title: "Blog Content",description: "Optimize, blog, posts for, search, engines and, social, sharing"icon: PenToolcolo,;
  r: "from-blue-50o0 to-cyan-50o0";
    };
    {
      title: "Social Media",description: "Create, engaging, social media, content, that drives engagement"icon: Smartphonecolo,;
  r: "from-purple-50o0 to-pink-50o0";
    };
    {
      title: "Email Marketing",description: "Optimize, email, subject lines, and, content for, better, open rates"icon: PenTool// Changed, from, Mail to, PenTool, for consistency, with, other icons;
      colo,;
  r: "from-orange-50o0 to-red-50o0";
    },;
    {
      title: "Landing Pages"descriptio,;
    n: "Create high-converting, landing, pages with, AI, optimization"icon: Targetcolo,;
  r: "from-green-50o0 to-emerald-50o0";
    };
,  ];
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="AI, Content, Optimizer - Intelligent, Content, Optimization Platform | Zion, Tech, Group";
        description="Transform, your, content performance, with, AI-powered, SEO, optimization, analytics, and multi-platform, content, creation. Start, free, trial today.";
        keywords="AI, content, optimization, content SEO, content, analyticscontent, performanceAI content creation";
      />;
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-green-60o0/20 via-blue-60o0/20 to-purple-60o0/20" />;
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
              AI, Content, Optimizer;
            </h1>;
            <p className="text-xl m,;
  d: text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">;
              Supercharge, your, content performance, with, AI-powered optimization, analytics, and, intelligent, content creation.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-green-60o0 to-blue-60o0 text-white font-semibold rounded-lg hover:from-green-70o0 hove,;
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
              Our, AI, engine analyzes, millions, of content, pieces, to optimize, yours, for maximum impact;
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
              Optimize, Any, Content Type;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              From, blog, posts to, social, media, our, AI, optimizes content, for, every platform, and, audience;
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
              Join, thousands, of content, creators, who have, transformed, their content, performance, with AI;
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
                <div className="w-20 h-20 bg-gradient-to-r from-green-60o0 to-blue-60o0 rounded-full, flex, items-center justify-center mx-auto mb-6">;
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
      {/* Pricing Section */}
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
              Simple, Transparent Pricing;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Choose, the, plan that, fits, your content, creation, needs. All, plans, include a 14-day, free, trial.;
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
                    <span className="bg-gradient-to-r from-green-60o0 to-blue-60o0 text-white px-4 py-2 rounded-full text-sm font-semibold">;
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
                    ? 'bg-gradient-to-r from-green-60o0 to-blue-60o0 text-white hover: from-green-70o0 hove,;
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
      <section className="py-20 bg-gradient-to-r from-green-60o0/20 to-blue-60o0/20 relative">;
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
              Ready, to, Optimize Your Content?;
            </h2>;
            <p className="text-xl text-zion-slate-light mb-8">;
              Join, thousands, of content, creators, who have, already, revolutionized their, content, performance with AI;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-green-60o0 to-blue-60o0 text-white font-semibold rounded-lg hover:from-green-70o0 hove,;
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