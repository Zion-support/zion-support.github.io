import, React, from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ;
  Brain,;
  BarChart3,;
  TrendingUp,;
  Target,;
  Zap,;
  Shield,;
  Cloud,;
  Users,;
  CheckCircle,;
  ArrowRight,;
  Lightbulb,;
  Cpu,;
  Database,;
  Network,;
  Eye,;
  Sparkles,;
  Rocket,;
  Globe,;
  Clock,;
  Award,;
  Star,;
  MessageCircle,;
  Phone,;
  Mail,;
  ShoppingCart,;
  DollarSignHeartFactory;
} from "lucide-react";
import { SEO } from "../../components/SEO";
export, default, function AIBusinessIntelligence() {
  const features = [;
    {
      icon: Braintitl,;
    e: 'Advanced, Machine, Learning'descriptio,;
  n: 'State-of-the-art, ML, algorithms that, continuously, learn and, improve, from your data';
    };
    {
      icon: BarChart3titl,;
    e: 'Real-time Analytics'descriptio,;
  n: 'Instant, insights, and dashboards, updated, in real-time, for, immediate decision-making';
    },;
    {
      icon: TrendingUp,title: 'Predictive Analytics',description: 'Forecast, trendsidentify, opportunitiesand predict, potential, risks before, they, occur';
    }{
      icon: Targettitl,;
    e: 'Intelligent Automation'descriptio,;
  n: 'Automate, routine, analysis tasks, and, focus on, strategic, decision-making';
    };
,  ];
  const benefits = [;
    'Faster decision-making, with, real-time, insightsImproved, accuracy through, machine, learning',;
    'Cost, reduction, through process, automationCompetitive, advantage with, predictive, capabilities''Enhanced, customer, understanding and, personalizationStreamlined, operations and, resource, optimization';
,  ],;
  const useCases = [;
    {
      industry: 'Retail & E-commerce'application,;
    s: ['Customer, segmentationDemand, forecasting''Inventory, optimizationPersonalized,, marketing']ico,;
  n: ShoppingCart;
    };
    {
      industry: 'Financial Services',applications: ['Risk, assessmentFraud, detection''Portfolio, optimizationCustomer, churn, prediction']ico,;
  n: DollarSign;
    };
    {
      industry: 'Healthcare',applications: ['Patient, outcome, predictionResource allocation''Treatment, optimizationDisease,, prevention']ico,;
  n: Heart;
    };
    {
      industry: 'Manufacturing',applications: ['Predictive, maintenanceQuality, control''Supply, chain, optimizationProduction, planning']ico,;
  n: Factory;
    }
  ];
  const technologies = [;
    'TensorFlow & PyTorchApache Spark',;
    'AWS, SageMakerAzure, Machine Learning',;
    'Google, Cloud, AISnowflake Data Platform''Tableau & Power, BICustom, ML Models';
,  ],;
  const process = [;
    {
      step: 1titl,;
    e: 'Data Assessment'descriptio,;
  n: 'Evaluate, your, current data, infrastructure, and identify, opportunities, for improvement';
    };
    {
      step: 2titl,;
    e: 'Strategy Development'descriptio,;
  n: 'Create, a, comprehensive AI, BI, roadmap aligned, with, your business objectives';
    };
    {
      step: 3titl,;
    e: 'Implementation'descriptio,;
  n: 'Deploy AI-powered, BI, solutions with, minimal, disruption to, existing, operations';
    }{
      step: 4titl,;
    e: 'Training & Optimization'descriptio,;
  n: 'Train, your, team and, continuously, optimize the, system, for maximum performance';
    };
,  ];
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="AI, Business, Intelligence - Zion, Tech, Group";
        description="Transform, your, business with AI-powered, business, intelligence solutions. Get real-time, insightspredictive, analyticsand intelligent automation.";
      />;
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">;
        <div className="absolute inset-0 bg-[url('data: , image/svg+xmlbase64PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"/>;
        <div className="container mx-auto px-4, relative, z-10">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto";
          >;
            <div className="flex items-center justify-center space-x-3 mb-6">;
              <div className="w-16 h-16 bg-gradient-to-r from-purple-50o0 to-pink-50o0 rounded-2xl, flex, items-center justify-center">;
                <Brain className="w-8 h-8 text-white" />;
              </div>;
              <span className="text-cyan-40o0 font-medium">AI-Powered Solutions</span>;
            </div>;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              AI Business <span className="bg-gradient-to-r from-purple-40o0 to-pink-50o0 bg-clip-text text-transparent">Intelligence</span>;
            </h1>;
            <p className="text-xl text-gray-30o0 mb-8 leading-relaxed">;
              Transform, your, business data, into, actionable intelligence, with, cutting-edge, AI, and machine learning.;
              Get real-time insights, predictive analytics, and, intelligent, automation that, drive, growth and innovation.;
            </p>;
            <div className="flex flex-wrap justify-center gap-4">;
              <motion.button;
                whileHover={{ scale: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-purple-50o0 to-pink-50o0 text-white font-semibold rounded-lg hover: from-purple-60o0 hove,;
    r:to-pink-60o0 transition-all duration-30o0";
              >;
                Get Started;
              </motion.button>;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3, border, border-purple-40o0 text-purple-40o0 font-semibold rounded-lg hover: bg-purple-40o0 hove,;
  r:text-white transition-all duration-30o0";
              >;
                Schedule Demo;
              </motion.button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Features Section */}
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
            <h2 className="text-4xl font-bold text-white mb-4">Powerful, AI, BI Features</h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our AI-powered, business, intelligence platform, combines, cutting-edge, technology, with intuitive design;
              to, deliver, insights that, transform, your business.;
            </p>;
          </motion.div>;
          <div className="grid md: grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
            {features.map((featureindex) => (;
              <motion.div;
                key={feature.title}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className="text-center p-6 bg-slate-80o0/50 rounded-xl, border, border-slate-70o0/50 hover: border-purple-40o0/50 transition-all duration-30o0 group";
              >;
                <div className="w-16 h-16 bg-gradient-to-r from-purple-50o0 to-pink-50o0 rounded-2xl, flex, items-center justify-center mx-auto mb-4 group-hove,;
  r:scale-110 transition-transform duration-20o0">;
                  <feature.icon className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>;
                <p className="text-gray-30o0">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Benefits Section */}
      <section className="py-20 bg-slate-80o0/50">;
        <div className="container mx-auto px-4">;
          <div className="grid lg: grid-cols-2 gap-12 items-center">;
            <motion.div;
              initial={{ opacit,;
    y: 0,;
  x: -20 }};
              whileInView={{ opacity: 1,;
  x: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <h2 className="text-4xl font-bold text-white mb-6">Why, Choose, AI-Powered BI?</h2>;
              <p className="text-lg text-gray-30o0 mb-8 leading-relaxed">;
                Traditional, business, intelligence tools, are, limited by, manual, processes and, static, reports.;
                Our AI-powered, solutions, provide dynamic, intelligent, insights, that adapt, to, your business needs.;
              </p>;
              <div className="space-y-4">;
                {benefits.map((benefitindex) => (;
                  <motion.div;
                    key={benefit}
                    initial={{ opacity: 0,;
  x: -20 }};
                    whileInView={{ opacity: 1,;
  x: 0 }}
                    transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                    className="flex items-center space-x-3";
                  >;
                    <CheckCircle className="w-5 h-5 text-purple-40o0" />;
                    <span className="text-gray-30o0">{benefit}</span>;
                  </motion.div>;
                ))}
              </div>;
            </motion.div>;
            ;
            <motion.div;
              initial={{ opacity: 0,;
  x: 20 }};
              whileInView={{ opacity: 1,;
  x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative";
            >;
              <div className="w-full h-80 bg-gradient-to-br from-purple-50o0/20 to-pink-50o0/20 rounded-2xl, border, border-purple-40o0/30, flex, items-center justify-center">;
                <div className="text-center">;
                  <BarChart3 className="w-20 h-20 text-purple-40o0 mx-auto mb-4" />;
                  <h3 className="text-2xl font-bold text-white mb-2">AI, Analytics, Dashboard</h3>;
                  <p className="text-gray-30o0">Real-time, insights, at your fingertips</p>;
                </div>;
              </div>;
            </motion.div>;
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
            <h2 className="text-4xl font-bold text-white mb-4">Industry Applications</h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our, AI, business intelligence, solutions, are transforming, industries, across the globe;
              delivering, measurable, results and, competitive, advantages.;
            </p>;
          </motion.div>;
          <div className="grid md: grid-cols-2 gap-8">;
            {useCases.map((useCaseindex) => (;
              <motion.div;
                key={useCase.industry}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className="p-6 bg-slate-80o0/50 rounded-xl, border, border-slate-70o0/50 hover:border-purple-40o0/50 transition-all duration-30o0";
              >;
                <div className="flex items-center mb-4">;
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-50o0 to-pink-50o0 rounded-lg, flex, items-center justify-center mr-4">;
                    <useCase.icon className="w-6 h-6 text-white" />;
                  </div>;
                  <h3 className="text-2xl font-semibold text-white">{useCase.industry}</h3>;
                </div>;
                <div className="space-y-2">;
                  {useCase.applications.map((application) => (;
                    <div key={application} className="flex items-center space-x-2">;
                      <CheckCircle className="w-4 h-4 text-purple-40o0" />;
                      <span className="text-gray-30o0 text-sm">{application}</span>;
                    </div>;
                  ))}
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Technologies Section */}
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
            <h2 className="text-4xl font-bold text-white mb-4">Cutting-Edge Technologies</h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              We, leverage, the latest, AI, and machine, learning, technologies to, deliver, powerful;
              scalable, business, intelligence solutions.;
            </p>;
          </motion.div>;
          <div className="grid md: grid-cols-4 gap-6">;
            {technologies.map((techindex) => (;
              <motion.div;
                key={tech}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className="text-center p-4 bg-slate-70o0/50 rounded-lg, border, border-slate-60o0/50 hover:border-purple-40o0/50 transition-all duration-30o0";
              >;
                <div className="w-12 h-12 bg-gradient-to-r from-purple-50o0 to-pink-50o0 rounded-lg, flex, items-center justify-center mx-auto mb-3">;
                  <Cpu className="w-6 h-6 text-white" />;
                </div>;
                <span className="text-white text-sm font-medium">{tech}</span>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Process Section */}
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
            <h2 className="text-4xl font-bold text-white mb-4">Implementation Process</h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our, proven, implementation methodology, ensures, successful deployment, of, AI business intelligence;
              solutions, with, minimal disruption, to, your operations.;
            </p>;
          </motion.div>;
          <div className="grid md: grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
            {process.map((stepindex) => (;
              <motion.div;
                key={step.step}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className="text-center relative";
              >;
                <div className="w-20 h-20 bg-gradient-to-r from-purple-50o0 to-pink-50o0 rounded-full, flex, items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">;
                  {step.step}
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>;
                <p className="text-gray-30o0">{step.description}</p>;
                {index < process.length - 1 && (;
                  <div className="hidden lg:block, absolute, top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-50o0 to-pink-50o0, transform, translate-x-1/2"></div>;
                )}
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 bg-slate-80o0/50">;
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto";
          >;
            <h2 className="text-4xl font-bold text-white mb-6">Ready, to, Transform Your, Business, Intelligence?</h2>;
            <p className="text-xl text-gray-30o0 mb-8">;
              Join, the, AI revolution, and, unlock the, full, potential of, your, business data.;
              Let's, discuss, how our AI-powered, BI, solutions can, drive, growth and, innovation, for your organization.;
            </p>;
            <div className="flex flex-wrap justify-center gap-4">;
              <Link;
                to="/contact";
                className="px-8 py-3 bg-gradient-to-r from-purple-50o0 to-pink-50o0 text-white font-semibold rounded-lg hover: from-purple-60o0 hove,;
    r:to-pink-60o0 transition-all duration-30o0";
              >;
                Get, Started, Today;
              </Link>;
              <Link;
                to="/services";
                className="px-8 py-3, border, border-purple-40o0 text-purple-40o0 font-semibold rounded-lg hover: bg-purple-40o0 hove,;
  r:text-white transition-all duration-30o0";
              >;
                Explore, All, Services;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;