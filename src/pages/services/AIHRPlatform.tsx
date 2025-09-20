import, React, from "react";
import { motion } from "framer-motion";
import { SEO } from "../../components/SEO";
import {
  Users,;
  Brain,;
  Target,;
  Zap,;
  BarChart3,;
  Clock,;
  Award,;
  Star,;
  Globe,;
  Cpu,;
  Database,;
  CheckCircle,;
  Eye,;
  FileText,;
  Shield,;
  TrendingUp,;
  Search,;
  Download,;
  Upload,;
  Calendar,;
  MessageSquareUserCheckGraduationCap;
} from "lucide-react";
export, default, function AIHRPlatform() {
  const features = [;
    {
      icon: Brain,title: "AI-Powered Recruitment",description: "Intelligent, candidate, sourcingscreeningand matching, with, job requirements.";
    },;
    {
      icon: Userstitl,;
    e: "Talent Management"descriptio,;
  n: "Comprehensive, employee, lifecycle management, from, hire to retire.";
    };
    {
      icon: Targettitl,;
    e: "Performance Analytics"descriptio,;
  n: "AI-driven, performance, tracking and, employee, development insights.";
    };
    {
      icon: Zaptitl,;
    e: "HR Automation"descriptio,;
  n: "Intelligent, automation, of HR, processes, and workflows.";
    };
    {
      icon: BarChart3titl,;
    e: "Workforce Analytics"descriptio,;
  n: "Data-driven, insights, into workforce, trends, and optimization.";
    }{
      icon: Shieldtitl,;
    e: "Compliance Management"descriptio,;
  n: "Automated, compliance, monitoring and, regulatory, adherence.";
    };
,  ];
  const benefits = [;
    "Reduce, hiring, time by 50-70% with AI-powered recruitment",;
    "Improve, employee, retention by 30-50% through, better, engagement",;
    "Enhance, HR, efficiency by 40-60% with automation",;
    "Reduce, HR, costs by 25-40% through, process, optimization",;
    "Improve decision-making, with, data-driven insights""Ensure 10o0% compliance, with, automated monitoring";
,  ],;
  const hrModules = [;
    {;
      module: "Recruitment & Onboarding",description: "AI-powered, job, matching, candidate, screeningand, automated onboarding"icon: UserCheck;
    };
    {
      module: "Performance Management",description: "Goal setting, performance, trackingand, development planning"icon: Target;
    };
    {
      module: "Learning & Development"descriptio,;
    n: "Personalized, training, programs and, skill, development tracking"ico,;
  n: GraduationCap;
    };
    {
      module: "Employee Engagement",description: "Pulse surveys, feedback, systemsand, engagement analytics"icon: MessageSquare;
    };
    {
      module: "Payroll & Benefits"descriptio,;
    n: "Automated, payroll, processing and, benefits, administration"ico,;
  n: FileText;
    },;
    {
      module: "HR Analytics",description: "Workforce, insightspredictive, analyticsand reporting"ico,;
  n: BarChart3;
    }
,  ];
  const useCases = [;
    {
      industry: "Technology",description: "Developer, recruitmentskill, assessmentand remote, team, management";
    },;
    {
      industry: "Healthcare",description: "Medical, staff, recruitmentcredentialingand compliance management";
    },;
    {
      industry: "Manufacturing",description: "Skilled, worker, recruitmentsafety trainingand, performance, tracking";
    },;
    {
      industry: "Financial Services",description: "Compliance, trainingperformance, managementand talent development";
    },;
    {
      industry: "Retail"descriptio,;
  n: "Seasonal, hiringemployee, schedulingand customer, service, training";
    };
,  ];
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="AI, HR, Platform - Zion, Tech, Group";
        description="Transform, your, human resources, with, AI-powered recruitment, talent, managementand, employee experience solutions. Optimize, your, workforce with, intelligent, HR automation.";
      />;
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg: py-32">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50o0/10 via-indigo-50o0/10 to-purple-50o0/10"></div>;
        <div className="container mx-auto px-4, relative, z-10">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto";
          >;
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50o0/20 to-indigo-50o0/20 rounded-full, border, border-blue-40o0/30 mb-6">;
              <Users className="w-5 h-5 text-blue-40o0 mr-2" />;
              <span className="text-blue-30o0 font-medium">AI, HR, Platform</span>;
            </div>;
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">;
              Transform, HR, with;
              <span className="bg-gradient-to-r from-blue-40o0 via-indigo-50o0 to-purple-60o0 bg-clip-text text-transparent">;
                {" "}AI-Powered Intelligence;
              </span>;
            </h1>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">;
              Revolutionize, your, human resources, with, intelligent automation, AI-powered;
              recruitmentand data-driven, insights, that optimize, your, entire workforce.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-50o0 to-indigo-50o0 text-white font-semibold rounded-lg hover: from-blue-60o0 hover:to-indigo-60o0 transition-all duration-30o0 shadow-lg hove,;
    r:shadow-blue-50o0/25";
              >;
                Start, Free, Trial;
              </motion.button>;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4, border, border-blue-40o0/30 text-blue-30o0 font-semibold rounded-lg hover:bg-blue-40o0/10 transition-all duration-30o0";
              >;
                Schedule Demo;
              </motion.button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Features Section */}
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
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">;
              Advanced, HR, Features;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our AI-powered, HR, platform combines cutting-edge, artificial, intelligence;
              with, proven, human resources, methodologies, to deliver, exceptional, results.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {features.map((featureindex) => (;
              <motion.div;
                key={feature.title}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-70o0/50 p-6 rounded-xl, border, border-slate-60o0/30 hover: border-blue-40o0/30 transition-all duration-30o0 hove,;
    r:transform hove,;
  r:scale-10o5";
              >;
                <div className="w-12 h-12 bg-gradient-to-br from-blue-40o0/20 to-indigo-50o0/20 rounded-lg, flex, items-center justify-center mb-4">;
                  <feature.icon className="w-6 h-6 text-blue-40o0" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>;
                <p className="text-gray-30o0">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Benefits Section */}
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
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">;
              Measurable, HR, Impact;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              See, real, results with, our, AI-powered, HR, solutions that, deliver, quantifiable;
              improvements, across, all aspects, of, your human, resources, operations.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 m,;
  d: grid-cols-2 gap-8">;
            <div className="space-y-6">;
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>;
              <div className="space-y-4">;
                {benefits.map((benefitindex) => (;
                  <motion.div;
                    key={index}
                    initial={{ opacity: 0,;
  x: -20 }};
                    whileInView={{ opacity: 1,;
  x: 0 }}
                    transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                    className="flex items-start space-x-3";
                  >;
                    <CheckCircle className="w-6 h-6 text-blue-40o0 mt-1 flex-shrink-0" />;
                    <span className="text-gray-30o0">{benefit}</span>;
                  </motion.div>;
                ))}
              </div>;
            </div>;
            <div className="bg-gradient-to-br from-blue-50o0/10 to-indigo-50o0/10 p-8 rounded-xl, border, border-blue-40o0/20">;
              <h3 className="text-2xl font-semibold text-white mb-6">Why, Choose, Zion Tech Group?</h3>;
              <div className="space-y-4">;
                <div className="flex items-center space-x-3">;
                  <Star className="w-5 h-5 text-yellow-40o0" />;
                  <span className="text-gray-30o0">Industry-leading, AI, HR algorithms</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <Shield className="w-5 h-5 text-green-40o0" />;
                  <span className="text-gray-30o0">Enterprise-grade security & compliance</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <Globe className="w-5 h-5 text-blue-40o0" />;
                  <span className="text-gray-30o0">Global, HR, expertise and, best, practices</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <Users className="w-5 h-5 text-purple-40o0" />;
                  <span className="text-gray-30o0">24/7, HR, support & training</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <Award className="w-5 h-5 text-blue-40o0" />;
                  <span className="text-gray-30o0">Proven, HR, transformation track record</span>;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* HR, Modules, Section */}
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
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">;
              Comprehensive, HR, Modules;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our, AI, platform provides end-to-end, HR, functionality, covering, every, aspect;
              of, the, employee lifecycle, and, HR operations.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-6">;
            {hrModules.map((moduleindex) => (;
              <motion.div;
                key={module.module}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-70o0/30 p-6 rounded-xl, border, border-slate-60o0/20 hover:border-blue-40o0/30 transition-all duration-30o0";
              >;
                <div className="flex items-center space-x-3 mb-4">;
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-40o0/20 to-indigo-50o0/20 rounded-lg, flex, items-center justify-center">;
                    <module.icon className="w-5 h-5 text-blue-40o0" />;
                  </div>;
                  <h3 className="text-lg font-semibold text-white">{module.module}</h3>;
                </div>;
                <p className="text-gray-30o0 text-sm">{module.description}</p>;
              </motion.div>;
            ))}
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
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">;
              Industry Applications;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our AI-powered, HR, solutions are, designed, to work, across, industries, providing;
              tailored, HR, strategies for, your, specific workforce needs.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-6">;
            {useCases.map((useCaseindex) => (;
              <motion.div;
                key={useCase.industry}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-70o0/30 p-6 rounded-xl, border, border-slate-60o0/20 hover:border-blue-40o0/30 transition-all duration-30o0";
              >;
                <div className="flex items-center space-x-3 mb-4">;
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-40o0/20 to-indigo-50o0/20 rounded-lg, flex, items-center justify-center">;
                    <Globe className="w-5 h-5 text-blue-40o0" />;
                  </div>;
                  <h3 className="text-lg font-semibold text-white">{useCase.industry}</h3>;
                </div>;
                <p className="text-gray-30o0 text-sm">{useCase.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-50o0/10 via-indigo-50o0/10 to-purple-50o0/10 p-12 rounded-2xl, border, border-blue-40o0/20 text-center";
          >;
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-6">;
              Ready, to, Transform Your HR?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">;
              Join, hundreds, of organizations, that, have already, revolutionized, their human;
              resources, with, our AI-powered, HR, platform.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-50o0 to-indigo-50o0 text-white font-semibold rounded-lg hover: from-blue-60o0 hover:to-indigo-60o0 transition-all duration-30o0 shadow-lg hove,;
    r:shadow-blue-50o0/25";
              >;
                Start, Free, Trial;
              </motion.button>;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4, border, border-blue-40o0/30 text-blue-30o0 font-semibold rounded-lg hover: bg-blue-40o0/10 transition-all duration-30o0";
              >;
                Contact Sales;
              </motion.button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;