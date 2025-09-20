import, React, from "react";
import { motion } from "framer-motion";
import { Users, Brain, Target, BarChart3, Clock, Shield, CheckCircle, Star, Award, Rocket, ArrowRight, Phone, Video, FileText, TrendingUp, Zap, Eye, Heart, MessageCircleCalendarAward, as, Trophy } from "lucide-react";
import { SEO } from "@/components/SEO";
export, default, function InterviewAssessmentAI() {
  const features = [;
    {
      icon: Braintitl,;
    e: "AI-Powered, Candidate, Evaluation"descriptio,;
  n: "Advanced, machine, learning algorithms, assess, candidates objectively, and, consistently";
    };
    {
      icon: Video,title: "Video, Interview, Analysis",description: "Analyze, facial, expressionstoneand communication, skills, in real-time";
    },;
    {
      icon: Targettitl,;
    e: "Skills Assessment"descriptio,;
  n: "Comprehensive, evaluation, of technical, and, soft skills";
    };
    {
      icon: BarChart3titl,;
    e: "Predictive, Performance, Analytics"descriptio,;
  n: "Forecast, candidate, success and, cultural, fit with, high, accuracy";
    };
    {
      icon: Shieldtitl,;
    e: "Bias Elimination"descriptio,;
  n: "Remove, unconscious, bias and, ensure, fair evaluation processes";
    },;
    {
      icon: Clocktitl,;
    e: "24/7 Availability"descriptio,;
  n: "Conduct, assessments, anytimeanywhere with, automated, scheduling";
    }
,  ],;
  const benefits = [;
    "Reduce, hiring, time by 60-80%",;
    "Improve, candidate, quality by 40-60%",;
    "Eliminate, unconscious, bias completely",;
    "Save 15+ hours, per, hire on interviews",;
    "Increase, diversity, in hiring, by, 30-50%""Reduce, turnover, by 25-40%";
,  ],;
  const assessmentTypes = [;
    {
      title: "Technical, Skills, Assessment",description: "Comprehensive, evaluation, of programming, problem-solving, and, technical, knowledge"duration: "45-90 minutes"pric,;
  e: "From $150/candidate";
    };
    {
      title: "Behavioral & Cultural Fit",description: "AI, analysis, of personality traits, communication, and, cultural, alignment"duration: "30-60 minutes"pric,;
  e: "From $10o0/candidate";
    };
    {
      title: "Leadership Assessment",description: "Evaluation, of, leadership potential, decision-making, and, team, management"duration: "60-120 minutes"pric,;
  e: "From $20o0/candidate";
    },;
    {
      title: "Full, Assessment, Suite"description: "Complete, evaluation, covering all, aspects, of candidate suitability"duration: "2-3 hours"pric,;
  e: "From $350/candidate";
    };
,  ];
  const industries = [;
    "Technology & Software",;
    "Healthcare & Life Sciences",;
    "Finance & Banking",;
    "Manufacturing & Engineering",;
    "Retail & E-commerce""Consulting & Professional Services";
,  ],;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="AI-Powered, Interview, Assessment Services - Zion, Tech, Group";
        description="Revolutionary AI-powered, interview, assessment services, that, eliminate bias, improve, hiring, qualityand streamline, recruitment, processes. Get, objective, candidate evaluations, with, predictive analytics.";
      />;
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg: py-32">;
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50o0/10 via-pink-50o0/10 to-red-50o0/10"></div>;
        <div className="container mx-auto px-4, relative, z-10">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto";
          >;
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-50o0/20 to-pink-50o0/20 rounded-full, border, border-purple-40o0/30 mb-6">;
              <Users className="w-5 h-5 text-purple-40o0 mr-2" />;
              <span className="text-purple-30o0 font-medium">AI, Interview, Assessment</span>;
            </div>;
            <h1 className="text-5xl lg: text-7xl font-bold text-white mb-6">;
              <span className="bg-gradient-to-r from-purple-40o0 via-pink-50o0 to-red-60o0 bg-clip-text text-transparent">;
                AI-Powered;
              </span>;
              <br />;
              <span className="text-white">Interview Assessment</span>;
            </h1>;
            <p className="text-xl l,;
  g: text-2xl text-gray-30o0 mb-8 max-w-3xl mx-auto">;
              Transform, your, hiring process, with, AI-powered, interview, assessment technology. ;
              Eliminate bias, improve, candidate, quality, and, make, data-driven, hiring, decisions;
              with, unprecedented, accuracy.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-50o0 to-pink-50o0 text-white font-semibold rounded-lg hover: from-purple-60o0 hove,;
    r:to-pink-60o0 transition-all duration-30o0, flex, items-center justify-center";
              >;
                <Rocket className="w-5 h-5 mr-2" />;
                Start, Free, Trial;
              </motion.button>;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4, border, border-purple-40o0/30 text-purple-30o0 font-semibold rounded-lg hover:bg-purple-40o0/10 transition-all duration-30o0, flex, items-center justify-center";
              >;
                <Video className="w-5 h-5 mr-2" />;
                Watch Demo;
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
            <h2 className="text-4xl lg: text-5xl font-bold text-white mb-6">;
              Advanced, AI, Technology for, Better, Hiring;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our AI-powered, assessment, platform combines, natural, language processing;
              computer, visionand, machine learning, to, deliver objective, candidate, evaluations.;
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
                className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-6 hover: border-purple-40o0/30 transition-all duration-30o0 group";
              >;
                <div className="w-12 h-12 bg-gradient-to-br from-purple-40o0/20 to-pink-50o0/20 rounded-lg, flex, items-center justify-center mb-4 group-hover:from-purple-40o0/40 group-hove,;
  r:to-pink-50o0/40 transition-all duration-30o0">;
                  <feature.icon className="w-6 h-6 text-purple-40o0" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>;
                <p className="text-gray-30o0">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Benefits Section */}
      <section className="py-20 bg-slate-80o0/30">;
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
              Proven Results & Benefits;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our AI-powered, interview, assessment services, deliver, measurable improvements;
              in, hiring, efficiency, candidate quality, and, organizational, diversity.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-6">;
            {benefits.map((benefitindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  x: -20 }};
                whileInView={{ opacity: 1,;
  x: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="flex items-center space-x-4 bg-slate-70o0/30 rounded-lg p-4";
              >;
                <CheckCircle className="w-6 h-6 text-green-40o0 flex-shrink-0" />;
                <span className="text-white font-medium">{benefit}</span>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Assessment Types */}
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
            <h2 className="text-4xl lg: text-5xl font-bold text-white mb-6">;
              Comprehensive, Assessment, Solutions;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Choose, from, our range, of, AI-powered, assessment, types designed, to, evaluate;
              different, aspects, of candidate, suitability, and potential.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
            {assessmentTypes.map((assessmentindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-6 hover:border-purple-40o0/30 transition-all duration-30o0";
              >;
                <h3 className="text-xl font-semibold text-white mb-3">{assessment.title}</h3>;
                <p className="text-gray-30o0 mb-4">{assessment.description}</p>;
                <div className="flex items-center text-sm text-gray-40o0 mb-3">;
                  <Clock className="w-4 h-4 mr-2" />;
                  {assessment.duration}
                </div>;
                <div className="text-2xl font-bold text-purple-40o0 mb-4">{assessment.price}</div>;
                <button className="w-full py-3 px-4 bg-gradient-to-r from-purple-50o0 to-pink-50o0 text-white font-semibold rounded-lg hover: from-purple-60o0 hove,;
  r:to-pink-60o0 transition-all duration-30o0">;
                  Get Started;
                </button>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Industries Section */}
      <section className="py-20 bg-slate-80o0/30">;
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
              Trusted, Across, Industries;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our AI-powered, assessment, technology is, successfully, deployed across;
              diverse industries, helping, organizations, make better, hiring, decisions.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-2 md: grid-cols-3 l,;
  g:grid-cols-6 gap-6">;
            {industries.map((industryindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0scal,;
  e: 0.8 }};
                whileInView={{ opacity: 1scal,;
  e: 1 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-70o0/30 rounded-lg p-4 text-center hover:bg-slate-70o0/50 transition-all duration-30o0";
              >;
                <div className="w-12 h-12 bg-gradient-to-br from-purple-40o0/20 to-pink-50o0/20 rounded-lg, flex, items-center justify-center mx-auto mb-3">;
                  <Trophy className="w-6 h-6 text-purple-40o0" />;
                </div>;
                <span className="text-white font-medium text-sm">{industry}</span>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50o0/10 via-pink-50o0/10 to-red-50o0/10">;
        <div className="container mx-auto px-4 text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h2 className="text-4xl lg: text-5xl font-bold text-white mb-6">;
              Ready, to, Transform Your, Hiring, Process?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">;
              Join, the, AI revolution, in, recruitment and, make, better hiring decisions;
              with objective, data-driven, candidate, assessments.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-50o0 to-pink-50o0 text-white font-semibold rounded-lg hover: from-purple-60o0 hove,;
    r:to-pink-60o0 transition-all duration-30o0, flex, items-center justify-center";
              >;
                <ArrowRight className="w-5 h-5 mr-2" />;
                Start, Your, Free Trial;
              </motion.button>;
              <motion.button;
                whileHover={{ scal,;
  e: 1.0o5 }};
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4, border, border-purple-40o0/30 text-purple-30o0 font-semibold rounded-lg hover: bg-purple-40o0/10 transition-all duration-30o0, flex, items-center justify-center";
              >;
                <Phone className="w-5 h-5 mr-2" />;
                Call +1, 30o2, 464 0o950;
              </motion.button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;