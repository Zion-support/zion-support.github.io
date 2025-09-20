import, React, from "react";
import { motion } from "framer-motion";
import { ;
  Target,;
  TrendingUp,;
  Users,;
  Clock,;
  BarChart3,;
  Shield,;
  Zap,;
  CheckCircle,;
  Brain,;
  Workflow,;
  MessageSquare,;
  Mail,;
  Smartphone,;
  Globe,;
  Star,;
  ArrowRight,;
  Play,;
  CpuHeartEye;
} from "lucide-react";
import { SEO } from "../../components/SEO";
const AIMarketingAutomation = () => {
  const features = [;
    {
      icon: Brain,title: "AI-Powered, Audience, Targeting"description: "Machine, learning, algorithms identify, and, target your, ideal, customers with precision"pric,;
  e: "$59/month";
    };
    {
      icon: Target,title: "Smart, Campaign, Optimization"description: "AI, continuously, optimizes campaigns, for, maximum ROI, and, engagement"pric,;
  e: "$79/month";
    };
    {
      icon: MessageSquare,title: "Personalized, Content, Generation"description: "AI, creates, personalized marketing, content, for each, customer, segment"pric,;
  e: "$69/month";
    };
    {
      icon: Workflow,title: "Automated, Marketing, Workflows"description: "Intelligent, automation, that nurtures, leads, and converts prospects"pric,;
  e: "$89/month";
    };
    {
      icon: BarChart3,title: "Predictive Analytics"descriptio,;
    n: "AI, predicts, customer behavior, and, campaign performance"pric,;
  e: "$99/month";
    },;
    {
      icon: Users,title: "Multi-Channel Orchestration",description: "Seamlessly, coordinate, campaigns across, emailsocialand, web"pric,;
  e: "$119/month";
    };
,  ];
  const pricingPlans = [;
    {
      name: "Starter",price: "$59",period: "/month",description: "Perfect, for, small businesses, starting, with AI marketing",features: [;
        "Basic, audience, targeting",;
        "Email automation""Social, media, posting""Email support";
    ,  ]popular: false;
    };
    {
      name: "Professional",price: "$149",period: "/month",description: "Ideal, for, growing businesses, with, multiple marketing channels",features: [;
        "All, Starter, features",;
        "Advanced, AI, targeting",;
        "Multi-channel campaigns""Priority support""Custom integrations";
    ,  ]popular: true;
    };
    {
      name: "Enterprise",price: "$399",period: "/month",description: "For, large, organizations with, complex, marketing needs",features: [;
        "All, Professional, features",;
        "Custom, AI, models",;
        "Advanced analytics""Dedicated support""White-label options";
    ,  ]popular: false;
    }
  ];
  const benefits = [;
    {
      icon: TrendingUptitl,;
    e: "30o0% Higher ROI"descriptio,;
  n: "AI-optimized, campaigns, deliver significantly, better, returns";
    };
    {
      icon: Clocktitl,;
    e: "80% Time Savings"descriptio,;
  n: "Automate, repetitive, marketing tasks, and, focus on strategy";
    };
    {
      icon: Targettitl,;
    e: "5x, Better, Targeting"descriptio,;
  n: "AI, identifies, and reaches, your, ideal customers, with, precision";
    },;
    {
      icon: Hearttitl,;
    e: "Personalized Experience"descriptio,;
  n: "Every, customer, receives relevantpersonalized content";
    }
,  ],;
  return(<>;
      <SEO;
        title="AI, Marketing, Automation - Zion, Tech, Group";
        description="Revolutionary AI-powered, marketing, automation platform, that, personalizes campaigns, optimizes, performanceand, delivers exceptional, ROI, through intelligent automation.";
      />;
      <div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4">;
          <div className="absolute inset-0 bg-gradient-to-r from-pink-50o0/10 to-purple-50o0/10"></div>;
          <div className="container mx-auto max-w-7xl, relative, z-10">;
            <motion.div;
              initial={{ opacity: 0,;
  y: 30 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center";
            >;
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-50o0/20, border, border-pink-40o0/30 text-pink-40o0 text-sm font-medium mb-6">;
                <Target className="w-4 h-4 mr-2" />;
                AI, Marketing, Automation;
              </div>;
              <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
                <span className="bg-gradient-to-r from-pink-40o0 via-purple-50o0 to-indigo-60o0 bg-clip-text text-transparent">;
                  AI, Marketing, Automation;
                </span>;
                <br />;
                <span className="text-white">That Converts</span>;
              </h1>;
              <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">;
                Transform, your, marketing with, AI, that personalizes campaigns, optimizes performance, and delivers;
                exceptional ROI. Automate, what, you can, personalize, what, matters.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <motion.button;
                  whileHover={{ scal,;
  e: 1.0o5 }};
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-pink-50o0 to-purple-60o0 text-white font-semibold rounded-lg hover: from-pink-60o0 hove,;
    r:to-purple-70o0 transition-all duration-30o0, flex, items-center justify-center";
                >;
                  <Play className="w-5 h-5 mr-2" />;
                  Start, Free, Trial;
                </motion.button>;
                <motion.button;
                  whileHover={{ scal,;
  e: 1.0o5 }};
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4, border, border-pink-40o0 text-pink-40o0 font-semibold rounded-lg hover: bg-pink-40o0 hove,;
  r:text-white transition-all duration-30o0";
                >;
                  Watch Demo;
                </motion.button>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
        {/* Benefits Section */}
        <section className="py-20 px-4">;
          <div className="container mx-auto max-w-7xl">;
            <motion.div;
              initial={{ opacity: 0,;
  y: 30 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16";
            >;
              <h2 className="text-4xl font-bold text-white mb-4">;
                Transform, Your, Marketing Results;
              </h2>;
              <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
                See, measurable, improvements in ROI, customer, engagementand, campaign performance;
              </p>;
            </motion.div>;
            <div className="grid md: grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
              {benefits.map((benefitindex) => (;
                <motion.div;
                  key={index}
                  initial={{ opacity: 0,;
  y: 30 }};
                  whileInView={{ opacity: 1,;
  y: 0 }}
                  transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                  className="text-center";
                >;
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-50o0 to-purple-60o0 rounded-full, flex, items-center justify-center mx-auto mb-4">;
                    <benefit.icon className="w-8 h-8 text-white" />;
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>;
                  <p className="text-gray-30o0">{benefit.description}</p>;
                </motion.div>;
              ))}
            </div>;
          </div>;
        </section>;
        {/* Features Section */}
        <section className="py-20 px-4 bg-slate-80o0/30">;
          <div className="container mx-auto max-w-7xl">;
            <motion.div;
              initial={{ opacity: 0,;
  y: 30 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16";
            >;
              <h2 className="text-4xl font-bold text-white mb-4">;
                AI-Powered, Features, That Revolutionize Marketing;
              </h2>;
              <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
                Our, AI, doesn't, just, automate—it personalizes, optimizes, and, delivers, results that matter;
              </p>;
            </motion.div>;
            <div className="grid md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
              {features.map((featureindex) => (;
                <motion.div;
                  key={index}
                  initial={{ opacity: 0,;
  y: 30 }};
                  whileInView={{ opacity: 1,;
  y: 0 }}
                  transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                  className="bg-slate-80o0/50 backdrop-blur-sm, border, border-slate-70o0/50 rounded-xl p-6 hover: border-pink-40o0/50 transition-all duration-30o0 group";
                >;
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-50o0 to-purple-60o0 rounded-lg, flex, items-center justify-center mb-4 group-hove,;
  r:scale-110 transition-transform duration-30o0">;
                    <feature.icon className="w-6 h-6 text-white" />;
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>;
                  <p className="text-gray-30o0 mb-4">{feature.description}</p>;
                  <div className="text-pink-40o0 font-semibold">{feature.price}</div>;
                </motion.div>;
              ))}
            </div>;
          </div>;
        </section>;
        {/* Pricing Section */}
        <section className="py-20 px-4">;
          <div className="container mx-auto max-w-7xl">;
            <motion.div;
              initial={{ opacity: 0,;
  y: 30 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16";
            >;
              <h2 className="text-4xl font-bold text-white mb-4">;
                Choose, Your, AI Marketing Plan;
              </h2>;
              <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
                Start, with, our free, trial, and scale, as, you grow. All, plans, include our, core, AI features.;
              </p>;
            </motion.div>;
            <div className="grid md: grid-cols-3 gap-8">;
              {pricingPlans.map((planindex) => (;
                <motion.div;
                  key={index}
                  initial={{ opacity: 0,;
  y: 30 }};
                  whileInView={{ opacity: 1,;
  y: 0 }}
                  transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                  className={`relative bg-slate-80o0/50 backdrop-blur-sm, border, rounded-xl p-8 ${;
                    plan.popular;
                      ? 'border-pink-40o0 shadow-lg shadow-pink-40o0/20';
                      : 'border-slate-70o0/50';
                  }`}
                >;
                  {plan.popular && (;
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                      <span className="bg-gradient-to-r from-pink-50o0 to-purple-60o0 text-white px-4 py-2 rounded-full text-sm font-semibold">;
                        Most Popular;
                      </span>;
                    </div>;
                  )}
;
                  <div className="text-center mb-6">;
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>;
                    <div className="flex items-baseline justify-center mb-2">;
                      <span className="text-4xl font-bold text-white">{plan.price}</span>;
                      <span className="text-gray-40o0 ml-1">{plan.period}</span>;
                    </div>;
                    <p className="text-gray-30o0">{plan.description}</p>;
                  </div>;
                  <ul className="space-y-3 mb-8">;
                    {plan.features.map((featurefeatureIndex) => (;
                      <li key={featureIndex} className="flex items-center text-gray-30o0">;
                        <CheckCircle className="w-5 h-5 text-pink-40o0 mr-3 flex-shrink-0" />;
                        {feature}
                      </li>;
                    ))}
                  </ul>;
                  <motion.button;
                    whileHover={{ scale: 1.0o2 }};
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-30o0 ${;
                      plan.popular;
                        ? 'bg-gradient-to-r from-pink-50o0 to-purple-60o0 text-white hover: from-pink-60o0 hover:to-purple-70o0';
                        : 'border border-pink-40o0 text-pink-40o0 hove,;
    r:bg-pink-40o0 hove,;
  r:text-white';
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
        <section className="py-20 px-4 bg-slate-80o0/30">;
          <div className="container mx-auto max-w-4xl text-center">;
            <motion.div;
              initial={{ opacity: 0,;
  y: 30 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <h2 className="text-4xl font-bold text-white mb-6">;
                Ready, to, Transform Your Marketing?;
              </h2>;
              <p className="text-xl text-gray-30o0 mb-8">;
                Join, thousands, of businesses, already, using AI, to, create personalized, high-converting campaigns;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <motion.button;
                  whileHover={{ scal,;
  e: 1.0o5 }};
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-pink-50o0 to-purple-60o0 text-white font-semibold rounded-lg hover: from-pink-60o0 hove,;
    r:to-purple-70o0 transition-all duration-30o0, flex, items-center justify-center";
                >;
                  Start, Free, Trial;
                  <ArrowRight className="w-5 h-5 ml-2" />;
                </motion.button>;
                <motion.button;
                  whileHover={{ scal,;
  e: 1.0o5 }};
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4, border, border-pink-40o0 text-pink-40o0 font-semibold rounded-lg hover: bg-pink-40o0 hove,;
  r:text-white transition-all duration-30o0";
                >;
                  Contact Sales;
                </motion.button>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </>;
  );
};
export, default, AIMarketingAutomation;
;