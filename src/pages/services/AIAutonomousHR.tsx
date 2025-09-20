import, React, from "react";
import { motion } from "framer-motion";
import { ;
  Users,;
  Brain,;
  Target,;
  BarChart3,;
  CheckCircle,;
  ArrowRight,;
  Star,;
  Globe,;
  Cpu,;
  Database,;
  ChartBar,;
  PieChart,;
  Activity,;
  Eye,;
  Clock,;
  Award,;
  MessageSquare,;
  Share2,;
  TrendingUp,;
  ZapShieldBriefcase;
} from "lucide-react";
const AIAutonomousHR: React.FC = () => {
  const features = [;
    {
      icon: Braintitl,;
    e: 'AI-Powered, HR, Management'descriptio,;
  n: 'Advanced, machine, learning for, autonomous, HR operations, and, optimization';
    };
    {
      icon: Users,title: 'Recruitment Automation',description: 'Intelligent, candidate, sourcingscreeningand hiring, with, AI-driven insights';
    },;
    {
      icon: Targettitl,;
    e: 'Performance Management'descriptio,;
  n: 'AI-powered, performance, tracking and, employee, development strategies';
    };
    {
      icon: BarChart3titl,;
    e: 'HR Analytics'descriptio,;
  n: 'Real-time, analytics, and insights, into, HR performance, and, trends';
    };
    {
      icon: Briefcasetitl,;
    e: 'Employee Engagement'descriptio,;
  n: 'AI-driven, employee, engagement and, retention, strategies';
    }{
      icon: TrendingUptitl,;
    e: 'Workforce Optimization'descriptio,;
  n: 'Continuous, optimization, of HR, processes, and workforce management';
    };
,  ];
  const benefits = [;
    'Improve, recruitment, efficiency by 80%Reduce, hiring, time by 70%',;
    'Enhance, employee, retention by 60%Automate, HR, processes''24/7, autonomous, operationReal-time, HR, insights';
,  ],;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-50o0/20 to-purple-50o0/20, border, border-violet-50o0/30 text-violet-40o0 text-sm font-medium mb-6">;
              <Users className="w-4 h-4 mr-2" />;
              AI-Powered, Autonomous, HR;
            </div>;
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">;
              Transform, Your, HR with;
              <span className="bg-gradient-to-r from-violet-40o0 to-purple-50o0 bg-clip-text text-transparent"> AI Intelligence</span>;
            </h1>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">;
              Revolutionize, your, HR operations, with, our AI-powered, autonomous, platform.;
              Optimize recruitment, enhance, employee, engagementand maximize, workforce, performance.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-violet-50o0 to-purple-50o0 text-white rounded-lg font-semibold hover:from-violet-60o0 hove,;
    r:to-purple-60o0 transition-all duration-30o0, transform, hover:scale-10o5">;
                Start, Free, Trial;
              </button>;
              <button className="px-8 py-4, border, border-violet-50o0/30 text-violet-40o0 rounded-lg font-semibold hove,;
  r: bg-violet-50o0/10 transition-all duration-30o0">;
                Schedule Demo;
              </button>;
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
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">;
              Advanced, HR, Features;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              Our, AI, platform provides, comprehensive, HR capabilities, for, modern businesses;
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
                className="bg-slate-80o0/50 backdrop-blur-sm, border, border-slate-70o0/50 rounded-xl p-6 hover:border-violet-50o0/30 transition-all duration-30o0";
              >;
                <div className="w-12 h-12 bg-gradient-to-r from-violet-50o0 to-purple-50o0 rounded-lg, flex, items-center justify-center mb-4">;
                  <feature.icon className="w-6 h-6 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>;
                <p className="text-gray-30o0">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Benefits Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-slate-80o0/30">;
        <div className="max-w-7xl mx-auto">;
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
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">;
              Why, Choose, AI Autonomous HR?;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              Experience, measurable, improvements in, HR, performance and, employee, satisfaction;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">;
            <motion.div;
              initial={{ opacit,;
    y: 0,;
  x: -20 }};
              whileInView={{ opacity: 1,;
  x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>;
              <div className="space-y-4">;
                {benefits.map((benefitindex) => (;
                  <div key={index} className="flex items-center space-x-3">;
                    <CheckCircle className="w-5 h-5 text-violet-40o0 flex-shrink-0" />;
                    <span className="text-gray-30o0">{benefit}</span>;
                  </div>;
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
              viewport={{ once: true }}
              className="bg-gradient-to-br from-violet-50o0/10 to-purple-50o0/10, border, border-violet-50o0/20 rounded-xl p-8";
            >;
              <h3 className="text-2xl font-semibold text-white mb-6">Ready, to, Transform HR?</h3>;
              <p className="text-gray-30o0 mb-6">;
                Join, thousands, of businesses, already, using AI, to, enhance their, HR, operations.;
              </p>;
              <button className="w-full px-6 py-3 bg-gradient-to-r from-violet-50o0 to-purple-50o0 text-white rounded-lg font-semibold hover: from-violet-60o0 hove,;
  r:to-purple-60o0 transition-all duration-30o0">;
                Get, Started, Today;
              </button>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">;
              Ready, to, Revolutionize HR?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8">;
              Start, your, journey to AI-powered, HR, with our, comprehensive, platform.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-violet-50o0 to-purple-50o0 text-white rounded-lg font-semibold hover:from-violet-60o0 hove,;
    r:to-purple-60o0 transition-all duration-30o0">;
                Start, Free, Trial;
              </button>;
              <button className="px-8 py-4, border, border-violet-50o0/30 text-violet-40o0 rounded-lg font-semibold hove,;
  r: bg-violet-50o0/10 transition-all duration-30o0">;
                Contact Sales;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
export, default, AIAutonomousHR;
;