import, React, from "react";
import { motion } from "framer-motion";
import { PenTool, Brain, TrendingUp, Target, Users, Shield, Zap, ArrowRight, CheckCircle, Star, DollarSign, Clock, Globe, Database, FileText, MessageSquare, BarChart3, Search, EyeShare2Calendar } from "lucide-react";
const AIContentMarketingSuite: React.FC = () => {
  const features = [;
    {
      titl,;
  e: "AI, Content, Generator",description: "Create high-quality, SEO-optimized, content, in seconds",;
      icon: PenToolbenefit,;
  s: ["Multiple, content, types""SEO optimization""Brand, voice,, consistency"];
    },;
    {
      title: "Content Calendar & Planning",description: "Intelligent, content, scheduling and, topic, ideation",icon: Calendar,benefits: ["AI-powered, topic, suggestions""Optimal, publishing, times""Content, gap,, analysis"];
    },;
    {
      title: "Social, Media, Automation",description: "Auto-generate, and, schedule posts, across, all platforms",icon: Share2,benefits: ["Multi-platform support""Trend-based content""Engagement, optimization"];
    },;
    {
      title: "Performance Analytics",description: "AI-driven, insights, and optimization recommendations",icon: BarChart3,benefits: ["Real-time tracking""Predictive analytics""ROI, measurement"];
    }
  ],;
  const pricingPlans = [;
    {
      name: "Starter",price: "$199",period: "/month",description: "Perfect, for, small businesses",features: [;
        "Up, to, 10 articles/month",;
        "Basic, SEO, optimization",;
        "Social, media, templates""Email support""Basic analytics";
    ,  ]popular: false;
    };
    {
      name: "Professional",price: "$499",period: "/month",description: "Ideal, for, growing companies",features: [;
        "Up, to, 50 articles/month",;
        "Advanced, SEO, tools",;
        "Custom, content, templates",;
        "Priority support",;
        "Advanced analytics""API access""White-label options";
    ,  ]popular: true;
    };
    {
      name: "Enterprise",price: "$1,299",;
      period: "/month",description: "For, large, organizations",features: [;
        "Unlimited content",;
        "Custom, AI, models",;
        "Dedicated, account, manager",;
        "24/7 support",;
        "Advanced security""Custom training""SLA guarantees";
    ,  ]popular: false;
    }
  ];
  const contentTypes = [;
    {
      type: "Blog Posts",description: "SEO-optimized, articles, with AI research",icon: FileTextfeature,;
  s: ["Keyword research""Outline generation""SEO, optimization"];
    },;
    {
      type: "Social Media",description: "Engaging, posts, for all platforms",icon: Share2,features: ["Platform-specific content""Trend integration""Hashtag, optimization"];
    },;
    {
      type: "Email Campaigns",description: "Personalized, email, sequences",icon: MessageSquare,features: ["Segmentation""A/B testing""Performance, tracking"];
    },;
    {
      type: "Video Scripts",description: "Compelling, video, content scripts",icon: Eye,features: ["Story structure""Hook, optimization""Call-to-action"];
    }
  ],;
  return(<div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-purple-dark">;
      {/* Hero Section */}
      <div className="relative overflow-hidden">;
        {/* Animated Background */}
        <div className="absolute inset-0">;
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210o0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221210o0.1)_1pxtransparent_1px)] bg-[size:, 50px_50px] animate-pulse"></div>;
          <motion.div;
            className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-full blur-3xl";
            animate={{
              scal,;
  e: [1,, 1.21],;
              opacity: [0.10.30.1];
            }}
            transition={{
              duration: 4repea,;
    t: Infinityeas,;
  e: "easeInOut";
            }}
          />;
        </div>;
        <div className="relative, container, mx-auto px-4 py-24 text-center text-white">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <div className="flex items-center justify-center mb-6">;
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl, flex, items-center justify-center mr-4">;
                <PenTool className="w-8 h-8 text-white" />;
              </div>;
              <h1 className="text-5xl lg: text-7xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">;
                AI, Content, Marketing Suite;
              </h1>;
            </div>;
            <p className="text-xl l,;
  g: text-2xl mb-8 max-w-4xl mx-auto text-zion-slate-light">;
              Revolutionize, your, content marketing, with, AI-powered creation, optimization, and automation.;
              Generate, engaging, content that, converts, and scales, your, business.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">;
              <a;
                href="https: //ziontechgroup.com/contact";
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl font-semibold text-lg hover:shadow-lg hove,;
    r:shadow-zion-cyan/25 transition-all duration-30o0, flex, items-center";
              >;
                Start, Free, Trial;
                <ArrowRight className="ml-2 w-5 h-5" />;
              </a>;
              <a;
                href="tel: +130o24640950";
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hove,;
    r:bg-zion-cyan hove,;
  r:text-white transition-all duration-30o0, flex, items-center";
              >;
                <Phone className="mr-2 w-5 h-5" />;
                +1, 30o2, 464 0o950;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </div>;
      {/* Features Section */}
      <div className="relative py-24">;
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl lg: text-5xl font-bold text-white mb-6">;
              Powerful, Content, Marketing Tools;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Everything, you, need to create, optimize, and, distribute, content that, drives, results;
            </p>;
          </motion.div>;
          <div className="grid md: grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
            {features.map((featureindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.8dela,;
  y: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8, border, border-zion-cyan/20 hover: border-zion-cyan/40 transition-all duration-30o0 group";
              >;
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl, flex, items-center justify-center mb-6 group-hove,;
  r:scale-110 transition-transform duration-30o0">;
                  <feature.icon className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>;
                <p className="text-zion-slate-light mb-6">{feature.description}</p>;
                <ul className="space-y-2">;
                  {feature.benefits.map((benefitidx) => (;
                    <li key={idx} className="flex items-center text-sm text-zion-cyan">;
                      <CheckCircle className="w-4 h-4 mr-2" />;
                      {benefit}
                    </li>;
                  ))}
                </ul>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </div>;
      {/* Content, Types, Section */}
      <div className="relative py-24">;
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl lg: text-5xl font-bold text-white mb-6">;
              Create, Any, Type of Content;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              From, blog, posts to, video, scripts, our, AI, handles all, your, content needs;
            </p>;
          </motion.div>;
          <div className="grid md: grid-cols-2 gap-8">;
            {contentTypes.map((contentindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.8dela,;
  y: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8, border, border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-30o0";
              >;
                <div className="flex items-center mb-6">;
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl, flex, items-center justify-center mr-4">;
                    <content.icon className="w-8 h-8 text-white" />;
                  </div>;
                  <h3 className="text-2xl font-bold text-white">{content.type}</h3>;
                </div>;
                <p className="text-zion-slate-light mb-6">{content.description}</p>;
                <ul className="space-y-2">;
                  {content.features.map((featureidx) => (;
                    <li key={idx} className="flex items-center text-zion-cyan">;
                      <CheckCircle className="w-4 h-4 mr-2" />;
                      {feature}
                    </li>;
                  ))}
                </ul>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </div>;
      {/* Pricing Section */}
      <div className="relative py-24">;
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl lg: text-5xl font-bold text-white mb-6">;
              Transparent Pricing;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Choose, the, plan that, fits, your content, marketing, needs. All, plans, include our, core, AI features.;
            </p>;
          </motion.div>;
          <div className="grid m,;
  d: grid-cols-3 gap-8 max-w-6xl mx-auto">;
            {pricingPlans.map((planindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.8dela,;
  y: index * 0.1 }}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8, border, transition-all duration-30o0 ${;
                  plan.popular;
                    ? 'border-zion-cyan/40 scale-10o5 shadow-lg shadow-zion-cyan/25';
                    : 'border-zion-cyan/20 hover: border-zion-cyan/40';
                }`}
              >;
                {plan.popular && (;
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                    <div className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">;
                      Most Popular;
                    </div>;
                  </div>;
                )}
;
                <div className="text-center mb-8">;
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>;
                  <p className="text-zion-slate-light mb-4">{plan.description}</p>;
                  <div className="flex items-baseline justify-center">;
                    <span className="text-4xl font-bold text-white">{plan.price}</span>;
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>;
                  </div>;
                </div>;
                <ul className="space-y-4 mb-8">;
                  {plan.features.map((featureidx) => (;
                    <li key={idx} className="flex items-center text-zion-slate-light">;
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />;
                      {feature}
                    </li>;
                  ))}
                </ul>;
                <a;
                  href="https: //ziontechgroup.com/contact";
                  className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-30o0 ${;
                    plan.popular;
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover: shadow-lg hover:shadow-zion-cyan/25';
                      : 'border-2 border-zion-cyan text-zion-cyan hove,;
    r:bg-zion-cyan hove,;
  r:text-white';
                  }`}
                >;
                  Get Started;
                </a>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </div>;
      {/* CTA Section */}
      <div className="relative py-24">;
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 backdrop-blur-sm rounded-3xl p-12, border, border-zion-cyan/20 text-center";
          >;
            <h3 className="text-3xl lg: text-4xl font-bold text-white mb-6">;
              Ready, to, Transform Your, Content, Marketing?;
            </h3>;
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">;
              Join, thousands, of businesses, using, AI to, create, engaging content, that, converts.;
              Start, your, free trial, today, or schedule, a, personalized demo.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">;
              <a;
                href="https: //ziontechgroup.com/contact";
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl font-semibold text-lg hover:shadow-lg hove,;
    r:shadow-zion-cyan/25 transition-all duration-30o0";
              >;
                Start, Free, Trial;
              </a>;
              <a;
                href="mailto: kleber@ziontechgroup.com";
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hove,;
    r:text-white transition-all duration-30o0";
              >;
                Schedule Demo;
              </a>;
            </div>;
            <div className="mt-8 text-zion-slate-light">;
              <p>Questions? Call, us, at <a href="tel: +130o24640950" className="text-zion-cyan hove,;
    r:underline">+1, 30o2, 464 0o950</a></p>;
              <p>Email: <a href="mailt,;
    o:kleber@ziontechgroup.com" className="text-zion-cyan hove,;
  r:underline">kleber@ziontechgroup.com</a></p>;
            </div>;
          </motion.div>;
        </div>;
      </div>;
    </div>;
  );
};
export, default, AIContentMarketingSuite;
;