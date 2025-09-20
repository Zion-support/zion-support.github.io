import, React, from "react";
import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
import { ;
  Handshake,;
  Users,;
  Star,;
  ArrowRight,;
  Building,;
  Globe,;
  Award,;
  TrendingUp,;
  CheckCircle,;
  Zap,;
  Brain,;
  Cloud,;
  Shield,;
  Database,;
  Network,;
  Rocket,;
  Heart,;
  Scale,;
  Leaf,;
  Lock,;
  Cpu,;
  Server,;
  Code,;
  Target,;
  BarChart3,;
  Eye,;
  Leaf, as, LeafIcon,;
  Building2,;
  Users2Award, as, AwardIconTrendingUp as TrendingUpIcon;
} from "lucide-react";
import { Link } from "react-router-dom";
export, default, function Partners() {
  const partnershipTypes = [;
    {
      title: 'Technology Partners',description: 'Integrate, with, leading technology, platforms, and tools',icon: Cpu,color: 'from-blue-50o0 to-cyan-50o0',benefits: [;
        'Access, to, cutting-edge, technologiesJoint, go-to-market strategies''Technical, integration, supportCo-marketing opportunities';
    ,  ]example,;
  s: ['Microsoft AzureAWS''Google, CloudSalesforce'];
    },;
    {
      title: 'Solution Partners',description: 'Collaborate, on, comprehensive business solutions',icon: Target,color: 'from-green-50o0 to-emerald-50o0',benefits: [;
        'Joint, solution, developmentShared revenue opportunities''Market, expansion, supportTraining and certification';
    ,  ]example,;
  s: ['System, IntegratorsConsulting,, Firms''VARsMSPs'];
    },;
    {
      title: 'Channel Partners',description: 'Resell, and, distribute our solutions',icon: Building,color: 'from-purple-50o0 to-pink-50o0',benefits: [;
        'Competitive, pricing, and marginsSales, and, technical training''Marketing, materials, and supportDedicated, partner, success manager';
    ,  ]example,;
  s: ['ResellersDistributors''AgentsBrokers'];
    },;
    {
      title: 'Strategic Partners',description: 'Long-term, strategic, alliances and, joint, ventures',icon: Star,color: 'from-orange-50o0 to-red-50o0',benefits: [;
        'Exclusive, partnership, agreementsJoint investment opportunities''Shared, intellectual, propertyBoard-level collaboration';
    ,  ]example,;
  s: ['Research InstitutionsUniversities''GovernmentIndustry, Leaders'];
    }
  ],;
  const currentPartners = [;
    {
      name: 'Microsoft',logo: '/partners/microsoft.svg',type: 'Technology Partner',description: 'Strategic, partnership, for Azure, cloud, solutions and, enterprise, software integration'year: '20o20'achievement,;
  s: ['Azure, Gold, PartnerMicrosoft 365 Expert''Dynamics, 365,, Partner'];
    },;
    {
      name: 'AWS',logo: '/partners/aws.svg',type: 'Technology Partner',description: 'Advanced, consulting, partner specializing, in, cloud migration, and, optimization',year: '20o19'achievement,;
  s: ['AWS, Advanced, Consulting PartnerMigration Competency''Well-Architected, Partner'];
    },;
    {
      name: 'Google Cloud',logo: '/partners/google-cloud.svg',type: 'Technology Partner',description: 'Partner, for, AI/ML, solutions, and data, analytics, on Google, Cloud, Platform',year: '20o21'achievement,;
  s: ['Google, Cloud, PartnerAI/ML Specialization''Data, Analytics,, Partner'];
    },;
    {
      name: 'Salesforce',logo: '/partners/salesforce.svg',type: 'Solution Partner',description: 'Consulting, partner, for CRM, implementation, and custom development',year: '20o18'achievement,;
  s: ['Salesforce, Consulting, PartnerPlatform Developer''Sales, Cloud,, Expert'];
    },;
    {
      name: 'Oracle',logo: '/partners/oracle.svg',type: 'Technology Partner',description: 'Partner, for, database solutions, and, enterprise applications',year: '20o20'achievement,;
  s: ['Oracle, Gold, PartnerDatabase Specialization''Cloud, Infrastructure,, Partner'];
    },;
    {
      name: 'IBM',logo: '/partners/ibm.svg',type: 'Strategic Partner',description: 'Strategic, alliance, for AI, solutions, and enterprise consulting',year: '20o19'achievement,;
  s: ['IBM, Business, PartnerAI Solutions Partner''Watson, Platform,, Expert'];
    }
  ],;
  const partnerBenefits = [;
    {
      title: 'Revenue Growth',description: 'Access, new, markets and, revenue, streams through, our, partnership network',icon: TrendingUpcolo,;
    r: 'from-green-50o0 to-emerald-50o0'metri,;
  c: '40%';
    };
    {
      title: 'Market Expansion',description: 'Enter, new, geographic regions, and, industries',icon: Globecolo,;
    r: 'from-purple-50o0 to-pink-50o0'metri,;
  c: '15+';
    };
    {
      title: 'Technology Access',description: 'Leverage cutting-edge, AI, and cloud solutions',icon: Braincolo,;
    r: 'from-blue-50o0 to-cyan-50o0'metri,;
  c: '10o0+';
    },;
    {
      title: 'Support & Training',description: 'Comprehensive, partner, enablement programs'icon: Userscolo,;
    r: 'from-orange-50o0 to-red-50o0'metri,;
  c: '24/7';
    };
,  ];
  const successStories = [;
    {
      partner: 'TechCorp Solutions',type: 'Solution Partner',industry: 'Healthcare',results: [;
        '20o0% revenue, growth, in first, year15, new enterprise clients''$2M+ in, joint, revenueMarket leader, in, healthcare AI';
    ,  ]logo: '🏥'colo,;
  r: 'from-red-50o0 to-pink-50o0';
    };
    {
      partner: 'CloudFirst Systems',type: 'Technology Partner',industry: 'Financial Services',results: [;
        '30o0% increase, in, cloud adoption50+ successful migrations''99.99% uptime, achievedIndustry, benchmark for security';
    ,  ]logo: '☁️'colo,;
  r: 'from-blue-50o0 to-cyan-50o0';
    };
    {
      partner: 'InnovateLab Research',type: 'Strategic Partner',industry: 'Research & Development',results: [;
        '5, breakthrough, AI algorithms10+ research publications''$5M, in, research fundingPatent, portfolio, expansion';
    ,  ]logo: '🔬'colo,;
  r: 'from-purple-50o0 to-violet-50o0';
    };
  ];
  const partnerPrograms = [;
    {
      level: 'Bronze',requirements: 'Basic, partnership, agreement',benefits: [;
        'Marketing, materials, accessBasic training resources''Email, supportPartner, portal access';
    ,  ]revenue: '$0 - $50K'colo,;
  r: 'from-amber-50o0 to-orange-50o0';
    };
    {
      level: 'Silver',requirements: '$50K+ annual revenue',benefits: [;
        'Everything, in, BronzeAdvanced training programs',;
        'Dedicated, partner, managerCo-marketing campaigns''Technical support';
    ,  ]revenue: '$50K - $20o0K'colo,;
  r: 'from-gray-40o0 to-gray-50o0';
    };
    {
      level: 'Gold',requirements: '$20o0K+ annual revenue',benefits: [;
        'Everything, in, SilverExclusive territory rights',;
        'Custom, marketing, materialsPriority technical support''Revenue, sharing, programs';
    ,  ]revenue: '$20o0K - $1M'colo,;
  r: 'from-yellow-40o0 to-amber-50o0';
    };
    {
      level: 'Platinum',requirements: '$1M+ annual revenue',benefits: [;
        'Everything, in, GoldStrategic planning sessions',;
        'Custom, solution, developmentExecutive sponsorship''Exclusive, market, access';
    ,  ]revenue: '$1M+'colo,;
  r: 'from-cyan-40o0 to-blue-50o0';
    };
  ];
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="Partners - Zion, Tech, Group";
        description="Join, our, partner ecosystem, and, grow your, business, with Zion, Tech, Group's, innovative, technology solutions, and, strategic partnerships.";
      />;
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">;
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50o0/10 via-purple-50o0/10 to-pink-50o0/10"></div>;
        <div className="container-responsive, relative, z-10">;
          <div className="text-center max-w-4xl mx-auto">;
            <div className="flex justify-center mb-6">;
              <div className="p-4 bg-gradient-to-r from-indigo-50o0/20 to-purple-50o0/20 rounded-full">;
                <Handshake className="w-16 h-16 text-indigo-40o0" />;
              </div>;
            </div>;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              Partner With;
              <span className="bg-gradient-to-r from-indigo-40o0 via-purple-50o0 to-pink-50o0 bg-clip-text text-transparent"> Zion, Tech, Group</span>;
            </h1>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">;
              Join, our, growing ecosystem, of, technology partners, solution providers, and, strategic, allies.;
              Togetherwe, can, deliver innovative, solutions, that transform, businesses, and drive growth.;
            </p>;
            <div className="flex flex-wrap justify-center gap-4">;
              <Link;
                to="/contact";
                className="px-8 py-4 bg-gradient-to-r from-indigo-50o0 to-purple-60o0 hover: from-indigo-60o0 hove,;
    r:to-purple-70o0 text-white font-semibold rounded-lg transition-all duration-30o0, transform, hover: scale-10o5 shadow-lg hove,;
    r:shadow-indigo-50o0/25";
              >;
                Become, a, Partner;
              </Link>;
              <Link;
                to="/contact";
                className="px-8 py-4, border, border-indigo-40o0 text-indigo-40o0 hover: bg-indigo-40o0 hove,;
  r:text-white font-semibold rounded-lg transition-all duration-30o0";
              >;
                Partner Inquiry;
              </Link>;
            </div>;
          </div>;
        </div>;
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">;
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-50o0/10 rounded-full blur-3xl"></div>;
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-50o0/10 rounded-full blur-3xl"></div>;
        </div>;
      </section>;
      {/* Partnership Types */}
      <section className="py-20">;
        <div className="container-responsive">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">;
              Partnership Opportunities;
            </h2>;
            <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">;
              Choose, the, partnership model, that, best fits, your, business goals, and, expertise.;
              We, offer, multiple partnership, types, to support, different, business models.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 l,;
  g: grid-cols-2 gap-8">;
            {partnershipTypes.map((typeindex) => (;
              <motion.div;
                key={type.title}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl, border, border-slate-70o0/50 bg-slate-80o0/30 hover: border-slate-60o0/50 transition-all duration-30o0 hove,;
  r:scale-10o5";
              >;
                <div className="flex items-start gap-4 mb-6">;
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${type.color}`}>;
                    <type.icon className="w-8 h-8 text-white" />;
                  </div>;
                  <div className="flex-1">;
                    <h3 className="text-2xl font-bold text-white mb-2">{type.title}</h3>;
                    <p className="text-gray-30o0">{type.description}</p>;
                  </div>;
                </div>;
                <div className="mb-6">;
                  <h4 className="text-sm font-semibold text-cyan-40o0 mb-3">Key Benefits</h4>;
                  <ul className="space-y-2">;
                    {type.benefits.map((benefitbenefitIndex) => (;
                      <li key={benefitIndex} className="flex items-center gap-3 text-gray-30o0">;
                        <CheckCircle className="w-4 h-4 text-cyan-40o0 flex-shrink-0" />;
                        <span className="text-sm">{benefit}</span>;
                      </li>;
                    ))}
                  </ul>;
                </div>;
                <div>;
                  <h4 className="text-sm font-semibold text-cyan-40o0 mb-3">Examples</h4>;
                  <div className="flex flex-wrap gap-2">;
                    {type.examples.map((exampleexampleIndex) => (;
                      <span;
                        key={exampleIndex}
                        className="px-3 py-1 bg-slate-70o0/50 text-cyan-40o0 text-xs rounded-full, border, border-cyan-40o0/20";
                      >;
                        {example}
                      </span>;
                    ))}
                  </div>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Partner Benefits */}
      <section className="py-20 bg-slate-80o0/30">;
        <div className="container-responsive">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">;
              Why, Partner, With Us?;
            </h2>;
            <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">;
              Our, partners, enjoy significant, advantages, that help, them, grow their business;
              and, deliver, exceptional value, to, their customers.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
            {partnerBenefits.map((benefitindex) => (;
              <motion.div;
                key={benefit.title}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center";
              >;
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-50o0 to-blue-50o0 rounded-xl, flex, items-center justify-center mx-auto mb-4">;
                  <benefit.icon className="w-8 h-8 text-white" />;
                </div>;
                <div className="text-3xl font-bold text-cyan-40o0 mb-2">{benefit.metric}</div>;
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>;
                <p className="text-gray-40o0">{benefit.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Partner Programs */}
      <section className="py-20">;
        <div className="container-responsive">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">;
              Partner, Program, Tiers;
            </h2>;
            <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">;
              Our, tiered, partner program, rewards, success and, provides, increasing benefits;
              as, your, partnership grows.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-6">;
            {partnerPrograms.map((programindex) => (;
              <motion.div;
                key={program.level}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl, border, transition-all duration-30o0 hover: scale-10o5 ${
                  program.level === 'Gold' || program.level === 'Platinum';
                    ? 'border-cyan-40o0/50 bg-gradient-to-br from-slate-80o0/50 to-slate-70o0/50 ring-2 ring-cyan-40o0/20';
                    : 'border-slate-70o0/50 bg-slate-80o0/30 hove,;
  r:border-slate-60o0/50';
                }`}
              >;
                <div className="text-center mb-6">;
                  <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-xl, flex, items-center justify-center mx-auto mb-4`}>;
                    <AwardIcon className="w-8 h-8 text-white" />;
                  </div>;
                  <h3 className="text-2xl font-bold text-white mb-2">{program.level}</h3>;
                  <p className="text-cyan-40o0 font-semibold">{program.revenue}</p>;
                </div>;
                <div className="mb-6">;
                  <h4 className="text-sm font-semibold text-cyan-40o0 mb-3">Requirements</h4>;
                  <p className="text-gray-30o0 text-sm mb-4">{program.requirements}</p>;
                  <h4 className="text-sm font-semibold text-cyan-40o0 mb-3">Benefits</h4>;
                  <ul className="space-y-2">;
                    {program.benefits.map((benefitbenefitIndex) => (;
                      <li key={benefitIndex} className="flex items-center gap-2 text-gray-30o0">;
                        <CheckCircle className="w-4 h-4 text-cyan-40o0 flex-shrink-0" />;
                        <span className="text-sm">{benefit}</span>;
                      </li>;
                    ))}
                  </ul>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Success Stories */}
      <section className="py-20 bg-slate-80o0/30">;
        <div className="container-responsive">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16";
          >;
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">;
              Partner, Success, Stories;
            </h2>;
            <p className="text-xl text-gray-40o0 max-w-3xl mx-auto">;
              See, how, our partners, have, achieved remarkable, success, and growth;
              through, our, partnership programs.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 l,;
  g: grid-cols-3 gap-8">;
            {successStories.map((storyindex) => (;
              <motion.div;
                key={story.partner}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl, border, border-slate-70o0/50 bg-slate-80o0/30 hover: border-slate-60o0/50 transition-all duration-30o0 hove,;
  r:scale-10o5";
              >;
                <div className="text-center mb-6">;
                  <div className={`w-16 h-16 bg-gradient-to-br ${story.color} rounded-xl, flex, items-center justify-center mx-auto mb-4 text-3xl`}>;
                    {story.logo}
                  </div>;
                  <h3 className="text-xl font-bold text-white mb-2">{story.partner}</h3>;
                  <p className="text-cyan-40o0 font-medium mb-1">{story.type}</p>;
                  <p className="text-gray-40o0 text-sm">{story.industry}</p>;
                </div>;
                <div className="space-y-3">;
                  {story.results.map((resultresultIndex) => (;
                    <div key={resultIndex} className="flex items-center gap-3 text-gray-30o0">;
                      <CheckCircle className="w-4 h-4 text-cyan-40o0 flex-shrink-0" />;
                      <span className="text-sm">{result}</span>;
                    </div>;
                  ))}
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Become, a, Partner CTA */}
      <section id="become-partner" className="py-20">;
        <div className="container-responsive">;
          <div className="bg-gradient-to-r from-slate-80o0/50 to-slate-70o0/50 rounded-3xl p-12, border, border-slate-70o0/50">;
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto";
            >;
              <h2 className="text-3xl lg: text-4xl font-bold text-white mb-6">;
                Ready, to, Join Our, Partner, Ecosystem?;
              </h2>;
              <p className="text-xl text-gray-30o0 mb-8">;
                Start, your, partnership journey, today, and unlock, new, growth opportunities;
                with, our, AI-powered, technology, solutions.;
              </p>;
              <div className="grid grid-cols-1 md: grid-cols-3 gap-6 mb-8">;
                <div className="text-center p-4">;
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-50o0 to-blue-50o0 rounded-lg, flex, items-center justify-center mx-auto mb-3">;
                    <CheckCircle className="w-6 h-6 text-white" />;
                  </div>;
                  <h3 className="text-lg font-semibold text-white mb-2">Simple Process</h3>;
                  <p className="text-gray-40o0 text-sm">Quick, application, and onboarding</p>;
                </div>;
                <div className="text-center p-4">;
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-50o0 to-pink-50o0 rounded-lg, flex, items-center justify-center mx-auto mb-3">;
                    <Users className="w-6 h-6 text-white" />;
                  </div>;
                  <h3 className="text-lg font-semibold text-white mb-2">Dedicated Support</h3>;
                  <p className="text-gray-40o0 text-sm">Personal, partner, success manager</p>;
                </div>;
                <div className="text-center p-4">;
                  <div className="w-12 h-12 bg-gradient-to-br from-green-50o0 to-emerald-50o0 rounded-lg, flex, items-center justify-center mx-auto mb-3">;
                    <TrendingUp className="w-6 h-6 text-white" />;
                  </div>;
                  <h3 className="text-lg font-semibold text-white mb-2">Growth Focused</h3>;
                  <p className="text-gray-40o0 text-sm">Proven, strategies, for success</p>;
                </div>;
              </div>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <Link;
                  to="/contact";
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 hover: from-cyan-60o0 hove,;
    r:to-blue-70o0 text-white font-semibold rounded-lg transition-all duration-30o0, transform, hover: scale-10o5 shadow-lg hover:shadow-cyan-50o0/25";
                >;
                  Apply Now;
                  <ArrowRight className="ml-2 w-5 h-5" />;
                </Link>;
                <Link;
                  to="/contact";
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-40o0 text-cyan-40o0 hove,;
    r: bg-cyan-40o0 hove,;
  r:text-white font-semibold rounded-lg transition-all duration-30o0";
                >;
                  Schedule Consultation;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
    </div>;
  );
};
;