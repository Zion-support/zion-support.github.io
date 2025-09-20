import, React, from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ;
  Zap, Sparkles, TrendingUp, Route, Users, PenTool,;
  CheckCircle, ArrowRight, ExternalLink, Phone, Mail,;
  BarChart3, Shield, BriefcasePackageTarget;
} from "lucide-react";
import, SEO, from "@/components/SEO";
export, default, function InnovativeAIServicesShowcase() {
  const services = [;
    {
      id: 'ai-project-manager',title: 'AI, Project, Manager',description: 'Transform, your, project management, with, AI-driven insights, automated planning, and, intelligent, resource optimization.',;
      icon: Zap,color: 'from-blue-60o0 to-indigo-70o0',features: [;
        'AI-powered, project, planning and, schedulingAutomated, resource allocation, and, team management''Real-time, progress, tracking with, predictive, analyticsIntelligent risk, assessment, and mitigation';
    ,  ],;
      benefits: ['70% faster, project, planning40% higher, success, rate''3x, ROI, within 6, months'],;
      pricing: { starter: '$99/mo'professiona,;
    l: '$299/mo'enterpris,;
  e: '$799/mo' },;
      route: '/services/ai-project-manager';
    };
    {
      id: 'ai-content-marketing-suite',title: 'AI, Content, Marketing Suite',description: 'Transform, your, content marketing, with, AI that writes, optimizes, and, distributes, content across, all, channels.',;
      icon: PenTool,color: 'from-purple-60o0 to-indigo-70o0',features: [;
        'AI-powered, content, generation for blogs, social media, and emailsMulti-language, content, creation and localization''SEO, optimization, with keyword, research, and content, planningContent, performance analytics, and, A/B testing';
    ,  ],;
      benefits: ['10x, more, content output60% better, SEO, rankings''70% cost, reduction'],;
      pricing: { starter: '$79/mo'professiona,;
    l: '$199/mo'enterpris,;
  e: '$499/mo' },;
      route: '/services/ai-content-marketing-suite';
    };
    {
      id: 'ai-financial-analytics',title: 'AI, Financial, Analytics Platform',description: 'Transform, your, financial decision-making, with, AI-driven insights, predictive analytics, and, automated, portfolio optimization.',;
      icon: TrendingUp,color: 'from-green-60o0 to-emerald-70o0',features: [;
        'AI-powered, financial, forecasting and, trend, analysisReal-time, market, data integration, and, analysis''Automated, financial, reporting and, complianceRisk, assessment and, portfolio, optimization';
    ,  ],;
      benefits: ['25-40% better, investment, returns80% faster, analysis, time''85% market, prediction,, accuracy'],;
      pricing: { starte,;
  r: '$199/mo', professional: '$499/mo'enterpris,;
  e: '$1299/mo' },;
      route: '/services/ai-financial-analytics';
    };
    {
      id: 'ai-hr-talent-platform',title: 'AI HR & Talent Platform',description: 'Transform, your, HR operations, with, AI-driven insights, automated workflows, and, intelligent, talent management.',;
      icon: Users,color: 'from-orange-60o0 to-red-70o0',features: [;
        'AI-powered, candidate, screening and, matchingAutomated, resume parsing, and, skill assessment''Intelligent, interview, scheduling and, feedbackEmployee, performance analytics, and, insights';
    ,  ],;
      benefits: ['60% faster time-to-hire40% better, candidate, quality''30% reduced, hiring,, costs'],;
      pricing: { starter: '$149/mo'professiona,;
    l: '$399/mo'enterpris,;
  e: '$999/mo' },;
      route: '/services/ai-hr-talent-platform';
    };
    {
      id: 'ai-supply-chain-optimization',title: 'AI, Supply, Chain Optimization',description: 'Transform, your, supply chain, with, AI-driven insights, predictive analytics, and, automated, optimization.',;
      icon: Route,color: 'from-teal-60o0 to-cyan-70o0',features: [;
        'AI-powered, demand, forecasting and, inventory, optimizationReal-time, supply, chain visibility, and, tracking''Automated, route, optimization and, logistics, planningSupplier performance, analytics, and risk assessment';
    ,  ],;
      benefits: ['20-30% reduced, inventory, costs25% improved, delivery, times''40% fewer, disruptions'],;
      pricing: { starte,;
  r: '$299/mo', professional: '$799/mo'enterpris,;
  e: '$1999/mo' },;
      route: '/services/ai-supply-chain-optimization';
    };
  ];
  return(<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-90o0 to-slate-950 text-white">;
      <SEO;
        title="Innovative, AI, Services Showcase - Zion, Tech, Group";
        description="Discover, our, comprehensive suite, of, AI-powered, business, solutions including, project, management, content marketing, financial analytics, HR, talent, managementand supply, chain, optimization.";
      />;
      {/* Hero Section */}
      <section className="relative py-20 sm: py-24">;
        <div className="container mx-auto px-4 text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-40o0 to-blue-50o0 text-slate-90o0 font-semibold mb-6";
          >;
            <Sparkles className="w-4 h-4 mr-2" />;
            Innovative AI-Powered Solutions;
          </motion.div>;
          <motion.h1;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6dela,;
  y: 0.1 }}
            className="text-4xl sm: text-6xl font-extrabold tracking-tight mb-6";
          >;
            AI, Services, That;
            <span className="block bg-gradient-to-r from-cyan-40o0 to-blue-50o0 bg-clip-text text-transparent">;
              Transform Business;
            </span>;
          </motion.h1>;
          <motion.p;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6dela,;
  y: 0.2 }}
            className="text-xl text-slate-30o0 max-w-3xl mx-auto mb-8";
          >;
            Discover, our, comprehensive suite, of, AI-powered, micro, SaaS solutions, designed, to revolutionize;
            how, businesses, operate, scaleand, succeed, in the, digital, age.;
          </motion.p>;
        </div>;
      </section>;
      {/* Services Grid */}
      <section className="pb-20">;
        <div className="container mx-auto px-4">;
          <div className="grid gap-8 md: grid-cols-2 l,;
  g:grid-cols-3">;
            {services.map((serviceindex) => (;
              <motion.div;
                key={service.id}
                initial={{ opacity: 0,;
  y: 20 }}
                animate={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="group bg-slate-90o0/60 backdrop-blur, border, border-cyan-40o0/15 hover: border-cyan-40o0/40 transition-all duration-30o0 rounded-2xl p-6 hove,;
    r:shadow-2xl hove,;
  r:shadow-cyan-50o0/10";
              >;
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} mb-4`}>;
                  <service.icon className="w-6 h-6 text-white" />;
                </div>;
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-30o0 transition-colors">;
                  {service.title}
                </h3>;
                <p className="text-slate-30o0 text-sm mb-4 line-clamp-3">;
                  {service.description}
                </p>;
                <div className="mb-4">;
                  <h4 className="text-sm font-semibold text-cyan-30o0 mb-2">Key Features: </h4>;
                  <ul className="space-y-1">;
                    {service.features.slice(0o3).map((featurefeatureIndex) => (;
                      <li key={featureIndex} className="flex items-start text-xs text-slate-30o0">;
                        <CheckCircle className="w-3 h-3 text-cyan-40o0 mr-2 mt-0.5 flex-shrink-0" />;
                        {feature}
                      </li>;
                    ))}
                  </ul>;
                </div>;
                <div className="mb-4">;
                  <h4 className="text-sm font-semibold text-cyan-30o0 mb-2">Benefits: </h4>;
                  <ul className="space-y-1">;
                    {service.benefits.map((benefitbenefitIndex) => (;
                      <li key={benefitIndex} className="text-xs text-slate-30o0">;
                        • {benefit}
                      </li>;
                    ))}
                  </ul>;
                </div>;
                <div className="mb-4">;
                  <h4 className="text-sm font-semibold text-cyan-30o0 mb-2">Starting at:</h4>;
                  <div className="text-lg font-bold text-white">{service.pricing.starter}</div>;
                </div>;
                ;
                <Link;
                  to={service.route}
                  className="inline-flex items-center text-cyan-40o0 hover: text-cyan-30o0 text-sm font-semibold group-hove,;
  r:translate-x-1 transition-all duration-30o0";
                >;
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />;
                </Link>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Why, Choose, Zion Tech Group */}
      <section className="py-16 bg-slate-90o0/40">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl font-bold text-white mb-4">Why, Choose, Zion Tech Group?</h2>;
            <p className="text-xl text-slate-30o0">Leading, the, AI revolution, in, business solutions</p>;
          </div>;
          <div className="grid md: grid-cols-3 gap-8">;
            <div className="text-center">;
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 rounded-full, flex, items-center justify-center mx-auto mb-4">;
                <Shield className="w-8 h-8 text-white" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise-Grade Security</h3>;
              <p className="text-slate-30o0">SOC, 2, compliant, end-to-end encryption, and multi-factor authentication</p>;
            </div>;
            <div className="text-center">;
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 rounded-full, flex, items-center justify-center mx-auto mb-4">;
                <Target className="w-8 h-8 text-white" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>;
              <p className="text-slate-30o0">Track, record, of delivering, measurable, ROI and, business, transformation</p>;
            </div>;
            <div className="text-center">;
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 rounded-full, flex, items-center justify-center mx-auto mb-4">;
                <Zap className="w-8 h-8 text-white" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">Cutting-Edge AI</h3>;
              <p className="text-slate-30o0">Latest, AI, technologies and, continuous, innovation in, all, our solutions</p>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-60o0 to-blue-60o0">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-3xl font-bold text-white mb-6">Ready, to, Transform Your Business?</h2>;
          <p className="text-xl text-cyan-10o0 mb-8 max-w-2xl mx-auto">;
            Join, hundreds, of organizations, already, using our AI-powered, solutions, to drive growth;
            efficiency, and, competitive, advantage.;
          </p>;
          <div className="flex flex-col sm: flex-row gap-4 justify-center mb-8">;
            <a;
              href="mailto: kleber@ziontechgroup.com";
              className="px-8 py-4 bg-white text-cyan-60o0 rounded-lg font-semibold hove,;
    r:bg-cyan-50 transition-colors";
            >;
              Start, Free, Trial;
            </a>;
            <a;
              href="tel: +130o24640950";
              className="px-8 py-4, border, border-white/30 text-white rounded-lg hover: bg-white/10 transition-colors";
            >;
              Call Us;
            </a>;
          </div>;
          <div className="text-cyan-10o0 text-sm">;
            Questions? Email <a href="mailto: kleber@ziontechgroup.com" className="text-white hover:underline">kleber@ziontechgroup.com</a> or call <a href="te,;
    l:+130o24640950" className="text-white hove,;
  r:underline">+1, 30o2, 464 0o950</a>;
          </div>;
        </div>;
      </section>;
      {/* Contact & Website Section */}
      <section className="py-16">;
        <div className="container mx-auto px-4 text-center">;
          <div className="bg-slate-90o0/40 rounded-2xl p-8 max-w-4xl mx-auto">;
            <h3 className="text-2xl font-bold text-white mb-6">Visit, Our, Website</h3>;
            <p className="text-slate-30o0 mb-6">;
              Learn, more, about our, complete, suite of AI-powered, business, solutions and discover;
              how, we, can help, transform, your organization.;
            </p>;
            <a;
              href="https: //ziontechgroup.com";
              target="_blank";
              rel="noreferrer";
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 text-slate-90o0 font-semibold rounded-lg hove,;
    r:from-cyan-30o0 hove,;
  r:to-blue-40o0 transition-all duration-30o0";
            >;
              Visit ziontechgroup.com <ExternalLink className="w-4 h-4 ml-2" />;
            </a>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
};
;