import, React, from "react";
import { motion } from "framer-motion";
import { SEO } from "../../components/SEO";
import { ;
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
  MessageCircle,;
  FileText,;
  Shield,;
  TrendingUp,;
  UserCheckCalendarVideo;
} from "lucide-react";
export, default, function InterviewAssessmentAI() {
  const features = [;
    {
      icon: Brain,title: "AI-Powered Assessment",description: "Intelligent, evaluation, of candidate, skillspersonalityand, cultural fit.";
    },;
    {
      icon: Video,title: "Video, Interview, Analysis",description: "Advanced, video, processing for, facial, expressionstoneand communication skills.";
    },;
    {
      icon: Targettitl,;
    e: "Skill, Gap, Analysis"descriptio,;
  n: "Comprehensive, assessment, of technical, and, soft skills, with, detailed reporting.";
    };
    {
      icon: Zaptitl,;
    e: "Automated Scheduling"descriptio,;
  n: "Intelligent, interview, scheduling and, candidate, communication automation.";
    };
    {
      icon: BarChart3titl,;
    e: "Performance Analytics"descriptio,;
  n: "Data-driven, insights, into hiring, effectiveness, and candidate performance.";
    }{
      icon: Shieldtitl,;
    e: "Bias-Free Evaluation"descriptio,;
  n: "Objective, assessment, algorithms that, eliminate, unconscious bias, in, hiring.";
    };
,  ];
  const benefits = [;
    "Reduce, hiring, time by 50-70% with, automated, assessments",;
    "Improve, hiring, quality by 40-60% through, AI, insights",;
    "Reduce, bias, in hiring, decisions, by 80-90%",;
    "Enhance, candidate, experience with 24/7 availability",;
    "Lower, cost, per hire, by, 30-50%""Improve, retention, rates by 25-40%";
,  ],;
  const assessmentTypes = [;
    {;
      type: "Technical Skills",description: "Programming tests, problem-solvingand, technical, knowledge assessment"icon: Cpu;
    };
    {
      type: "Personality Assessment",description: "Behavioral analysis, cultural, fitand, work style evaluation"icon: Users;
    };
    {
      type: "Communication Skills",description: "Verbal, and, written communication, presentationand, interpersonal, skills"icon: MessageCircle;
    };
    {
      type: "Cognitive Ability",description: "Problem-solving, critical, thinkingand, analytical reasoning tests"icon: Brain;
    };
    {
      type: "Situational Judgment"descriptio,;
    n: "Real-world, scenarios, and decision-making assessment"ico,;
  n: Target;
    },;
    {
      type: "Cultural Fit",description: "Values, alignmentteam, dynamicsand organizational, culture, match"ico,;
  n: Globe;
    }
,  ];
  const useCases = [;
    {
      industry: "Technology",description: "Software, developer, hiringtechnical skills, assessmentand, coding challenges";
    },;
    {
      industry: "Finance",description: "Analyst, recruitmentrisk, assessmentand financial, modeling, evaluation";
    },;
    {
      industry: "Healthcare",description: "Medical, staff, hiringpatient care, assessmentand, clinical skills evaluation";
    },;
    {
      industry: "Sales & Marketing",description: "Sales, representative, hiringcommunication skillsand, performance, potential";
    },;
    {
      industry: "Manufacturing"descriptio,;
  n: "Engineering, recruitmenttechnical, skillsand safety, compliance, assessment";
    };
,  ];
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="Interview, Assessment, AI - Zion, Tech, Group";
        description="Transform, your, hiring process, with, AI-powered, candidate, evaluation, automated, assessmentsand, bias-free, recruitment, solutions.";
      />;
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg: py-32">;
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50o0/10 via-teal-50o0/10 to-cyan-50o0/10"></div>;
        <div className="container mx-auto px-4, relative, z-10">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto";
          >;
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-50o0/20 to-teal-50o0/20 rounded-full, border, border-emerald-40o0/30 mb-6">;
              <Users className="w-5 h-5 text-emerald-40o0 mr-2" />;
              <span className="text-emerald-30o0 font-medium">Interview, Assessment, AI</span>;
            </div>;
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">;
              Revolutionize, Hiring, with;
              <span className="bg-gradient-to-r from-emerald-40o0 via-teal-50o0 to-cyan-60o0 bg-clip-text text-transparent">;
                {" "}AI-Powered Assessment;
              </span>;
            </h1>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">;
              Transform, your, recruitment process, with, intelligent candidate evaluation, automated;
              assessmentsand data-driven, hiring, decisions that, improve, quality and, reduce, bias.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-emerald-50o0 to-teal-50o0 text-white font-semibold rounded-lg hover: from-emerald-60o0 hover:to-teal-60o0 transition-all duration-30o0 shadow-lg hove,;
    r:shadow-emerald-50o0/25";
              >;
                Start, Free, Trial;
              </motion.button>;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4, border, border-emerald-40o0/30 text-emerald-30o0 font-semibold rounded-lg hover:bg-emerald-40o0/10 transition-all duration-30o0";
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
              Advanced, Assessment, Features;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our AI-powered, interview, assessment platform, combines, cutting-edge, artificial, intelligence;
              with, proven, hiring methodologies, to, deliver exceptional, recruitment, results.;
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
                className="bg-slate-70o0/50 p-6 rounded-xl, border, border-slate-60o0/30 hover: border-emerald-40o0/30 transition-all duration-30o0 hove,;
    r:transform hove,;
  r:scale-10o5";
              >;
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-40o0/20 to-teal-50o0/20 rounded-lg, flex, items-center justify-center mb-4">;
                  <feature.icon className="w-6 h-6 text-emerald-40o0" />;
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
              Measurable, Hiring, Impact;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              See, real, results with, our, AI-powered, assessment, solutions that, deliver, quantifiable;
              improvements, across, all aspects, of, your recruitment process.;
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
                    <CheckCircle className="w-6 h-6 text-emerald-40o0 mt-1 flex-shrink-0" />;
                    <span className="text-gray-30o0">{benefit}</span>;
                  </motion.div>;
                ))}
              </div>;
            </div>;
            <div className="bg-gradient-to-br from-emerald-50o0/10 to-teal-50o0/10 p-8 rounded-xl, border, border-emerald-40o0/20">;
              <h3 className="text-2xl font-semibold text-white mb-6">Why, Choose, Zion Tech Group?</h3>;
              <div className="space-y-4">;
                <div className="flex items-center space-x-3">;
                  <Star className="w-5 h-5 text-yellow-40o0" />;
                  <span className="text-gray-30o0">Industry-leading, AI, assessment algorithms</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <Shield className="w-5 h-5 text-green-40o0" />;
                  <span className="text-gray-30o0">Bias-free, evaluation, technology</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <Globe className="w-5 h-5 text-blue-40o0" />;
                  <span className="text-gray-30o0">Global, hiring, expertise and compliance</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <Users className="w-5 h-5 text-purple-40o0" />;
                  <span className="text-gray-30o0">24/7, assessment, and support</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <Award className="w-5 h-5 text-emerald-40o0" />;
                  <span className="text-gray-30o0">Proven, hiring, success track record</span>;
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Assessment, Types, Section */}
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
              Comprehensive, Assessment, Types;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our, AI, platform provides, a, wide range, of, assessment types, to, evaluate every aspect;
              of, candidate, suitability and potential.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-6">;
            {assessmentTypes.map((assessmentindex) => (;
              <motion.div;
                key={assessment.type}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-70o0/30 p-6 rounded-xl, border, border-slate-60o0/20 hover:border-emerald-40o0/30 transition-all duration-30o0";
              >;
                <div className="flex items-center space-x-3 mb-4">;
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-40o0/20 to-teal-50o0/20 rounded-lg, flex, items-center justify-center">;
                    <assessment.icon className="w-5 h-5 text-emerald-40o0" />;
                  </div>;
                  <h3 className="text-lg font-semibold text-white">{assessment.type}</h3>;
                </div>;
                <p className="text-gray-30o0 text-sm">{assessment.description}</p>;
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
              Our AI-powered, assessment, solutions are, designed, to work, across, industries, providing;
              tailored, evaluation, strategies for, your, specific hiring needs.;
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
                className="bg-slate-70o0/30 p-6 rounded-xl, border, border-slate-60o0/20 hover:border-emerald-40o0/30 transition-all duration-30o0";
              >;
                <div className="flex items-center space-x-3 mb-4">;
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-40o0/20 to-teal-50o0/20 rounded-lg, flex, items-center justify-center">;
                    <Globe className="w-5 h-5 text-emerald-40o0" />;
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
            className="bg-gradient-to-r from-emerald-50o0/10 via-teal-50o0/10 to-cyan-50o0/10 p-12 rounded-2xl, border, border-emerald-40o0/20 text-center";
          >;
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-6">;
              Ready, to, Transform Your Hiring?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">;
              Join, hundreds, of companies, that, have already, revolutionized, their recruitment;
              process, with, our AI-powered, assessment, solutions.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-emerald-50o0 to-teal-50o0 text-white font-semibold rounded-lg hover: from-emerald-60o0 hover:to-teal-60o0 transition-all duration-30o0 shadow-lg hove,;
    r:shadow-emerald-50o0/25";
              >;
                Start, Free, Trial;
              </motion.button>;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4, border, border-emerald-40o0/30 text-emerald-30o0 font-semibold rounded-lg hover: bg-emerald-40o0/10 transition-all duration-30o0";
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