import, React, from "react";
import { SEO } from "../../components/SEO";
import { motion } from "framer-motion";
import { Workflow, Zap, Brain, Target, TrendingUp, Shield, Users, ClockBarChart3CheckCircle } from "lucide-react";
export, default, function AIWorkflowAutomation() {
  const features = [;
    {
      icon: Workflowtitl,;
    e: 'Intelligent, Process, Automation'descriptio,;
  n: 'AI-powered, workflow, automation that, learns, and optimizes, your, business processes automatically.';
    };
    {
      icon: Braintitl,;
    e: 'Machine, Learning, Integration'descriptio,;
  n: 'Seamless, integration, with ML, models, for predictive, workflow, optimization and decision-making.';
    };
    {
      icon: Targettitl,;
    e: 'Goal-Oriented Automation'descriptio,;
  n: 'Workflows, that, adapt and, optimize, based on, your, business objectives, and, KPIs.';
    };
    {
      icon: TrendingUptitl,;
    e: 'Performance Analytics'descriptio,;
  n: 'Real-time, insights, into workflow, efficiency, and optimization opportunities.';
    };
    {
      icon: Shieldtitl,;
    e: 'Secure & Compliant'descriptio,;
  n: 'Enterprise-grade, security, with built-in, compliance, monitoring and, audit, trails.';
    }{
      icon: Userstitl,;
    e: 'Team Collaboration'descriptio,;
  n: 'Enhanced, team, productivity with, intelligent, task routing, and, workload balancing.';
    };
,  ];
  const benefits = [;
    'Reduce, manual, tasks by, up, to 80%Improve, process, efficiency by 60%',;
    'Cut, operational, costs by 40%Enhance, customer, satisfaction''Ensure, regulatory, complianceScale operations seamlessly';
,  ];
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="AI, Workflow, Automation - Zion, Tech, Group";
        description="Transform, your, business with, intelligent, AI-powered, workflow, automation. Reduce, manual, tasks, improve, efficiencyand, scale operations seamlessly.";
      />;
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50o0/10 via-blue-50o0/10 to-purple-50o0/10"></div>;
        <div className="container mx-auto px-4, relative, z-10">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto";
          >;
            <div className="inline-flex items-center px-4 py-2 bg-cyan-50o0/20, border, border-cyan-40o0/30 rounded-full text-cyan-30o0 text-sm font-medium mb-6">;
              <Workflow className="w-4 h-4 mr-2" />;
              AI-Powered Automation;
            </div>;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              AI, Workflow, Automation;
            </h1>;
            <p className="text-xl text-slate-30o0 mb-8 leading-relaxed">;
              Transform, your, business operations, with, intelligent, AI-powered, workflow, automation.;
              Reduce, manual, tasks, improve, efficiencyand, scale your, operations, seamlessly.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover:from-cyan-40o0 hover:to-blue-50o0 transition-all duration-20o0 hove,;
    r:scale-10o5 shadow-lg shadow-cyan-50o0/20">;
                Get Started;
              </button>;
              <button className="px-8 py-4, border, border-cyan-40o0/30 text-cyan-40o0 font-semibold rounded-lg hove,;
  r: bg-cyan-40o0/10 transition-all duration-20o0">;
                Watch Demo;
              </button>;
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
            transition={{ duration: 0.6 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Intelligent, Automation, Features;
            </h2>;
            <p className="text-xl text-slate-30o0 max-w-3xl mx-auto">;
              Our, AI, workflow automation, platform, combines cutting-edge, technology, with intuitive design;
              to, deliver, powerful automation capabilities.;
            </p>;
          </motion.div>;
          <div className="grid md: grid-cols-2 l,;
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
                className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-6 hover: border-cyan-40o0/30 transition-all duration-20o0 hove,;
  r:scale-10o5";
              >;
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-40o0/20 to-blue-50o0/20 rounded-lg, flex, items-center justify-center mb-4">;
                  <feature.icon className="w-6 h-6 text-cyan-40o0" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>;
                <p className="text-slate-30o0 leading-relaxed">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Benefits Section */}
      <section className="py-20 bg-slate-80o0/30">;
        <div className="container mx-auto px-4">;
          <div className="grid lg: grid-cols-2 gap-12 items-center">;
            <motion.div;
              initial={{ opacit,;
    y: 0,;
  x: -20 }};
              whileInView={{ opacity: 1,;
  x: 0 }}
              transition={{ duration: 0.6 }}
            >;
              <h2 className="text-4xl font-bold text-white mb-6">;
                Transform, Your, Business Operations;
              </h2>;
              <p className="text-lg text-slate-30o0 mb-8 leading-relaxed">;
                Our, AI, workflow automation, delivers, measurable results, that, directly impact, your, bottom line.;
                From, cost, reduction to, improved, customer satisfaction, the, benefits, are clear, and, quantifiable.;
              </p>;
              <div className="grid grid-cols-1 gap-4">;
                {benefits.map((benefitindex) => (;
                  <div key={index} className="flex items-center space-x-3">;
                    <CheckCircle className="w-5 h-5 text-cyan-40o0 flex-shrink-0" />;
                    <span className="text-slate-30o0">{benefit}</span>;
                  </div>;
                ))}
              </div>;
            </motion.div>;
            <motion.div;
              initial={{ opacity: 0,;
  x: 20 }};
              whileInView={{ opacity: 1,;
  x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative";
            >;
              <div className="bg-gradient-to-br from-cyan-50o0/20 to-blue-50o0/20 rounded-2xl p-8, border, border-cyan-40o0/30">;
                <div className="text-center">;
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-40o0 to-blue-50o0 rounded-full, flex, items-center justify-center mx-auto mb-6">;
                    <Zap className="w-10 h-10 text-white" />;
                  </div>;
                  <h3 className="text-2xl font-bold text-white mb-4">Ready, to, Automate?</h3>;
                  <p className="text-slate-30o0 mb-6">;
                    Start, your, AI workflow, automation, journey today, and, see the, transformation, in action.;
                  </p>;
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover: from-cyan-40o0 hove,;
  r:to-blue-50o0 transition-all duration-20o0">;
                    Schedule Demo;
                  </button>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20">;
        <div className="container mx-auto px-4 text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto";
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Ready, to, Automate Your Workflows?;
            </h2>;
            <p className="text-xl text-slate-30o0 mb-8">;
              Join, hundreds, of businesses, that, have already, transformed, their operations, with, AI workflow automation.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white font-semibold rounded-lg hover:from-cyan-40o0 hover:to-blue-50o0 transition-all duration-20o0 hove,;
    r:scale-10o5 shadow-lg shadow-cyan-50o0/20">;
                Get, Started, Now;
              </button>;
              <button className="px-8 py-4, border, border-cyan-40o0/30 text-cyan-40o0 font-semibold rounded-lg hove,;
  r: bg-cyan-40o0/10 transition-all duration-20o0">;
                Contact Sales;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;