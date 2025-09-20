import React from "react"
import { motion } from "framer-motion"
import { SEO } from "../components/SEO"
import { ;
  Handshake,;
  Users, ;
  Star, ;
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
  Leaf as LeafIcon,;
  Building2,;
  Users2,;
  Award as AwardIcon,;
  TrendingUp as TrendingUpIcon;
} from "lucide-react"
import { Link } from "react-router-dom"
export default function Partners() {;
  const partnershipTypes = [;
    {;
      title: 'Technology Partners',description: 'Integrate with leading technology platforms and tools',icon: Cpu,color: 'from-blue-500 to-cyan-500',benefits: [;
        'Access to cutting-edge technologiesJoint go-to-market strategies'
        'Technical integration supportCo-marketing opportunities'
      ],;
      examples: ['Microsoft AzureAWS', 'Google CloudSalesforce']
    },;
    {;
      title: 'Solution Partners',description: 'Collaborate on comprehensive business solutions',icon: Target,color: 'from-green-500 to-emerald-500',benefits: [;
        'Joint solution developmentShared revenue opportunities'
        'Market expansion supportTraining and certification'
      ],;
      examples: ['System IntegratorsConsulting Firms', 'VARsMSPs']
    },;
    {;
      title: 'Channel Partners',description: 'Resell and distribute our solutions',icon: Building,color: 'from-purple-500 to-pink-500',benefits: [;
        'Competitive pricing and marginsSales and technical training'
        'Marketing materials and supportDedicated partner success manager'
      ],;
      examples: ['ResellersDistributors', 'AgentsBrokers']
    },;
    {;
      title: 'Strategic Partners',description: 'Long-term strategic alliances and joint ventures',icon: Star,color: 'from-orange-500 to-red-500',benefits: [;
        'Exclusive partnership agreementsJoint investment opportunities'
        'Shared intellectual propertyBoard-level collaboration'
      ],;
      examples: ['Research InstitutionsUniversities', 'GovernmentIndustry Leaders']
    };
  ],;

  const currentPartners = [;
    {;
      name: 'Microsoft',logo: '/partners/microsoft.svg',type: 'Technology Partner',description: 'Strategic partnership for Azure cloud solutions and enterprise software integration',year: '2020',achievements: ['Azure Gold PartnerMicrosoft 365 Expert', 'Dynamics 365 Partner']
    },;
    {;
      name: 'AWS',logo: '/partners/aws.svg',type: 'Technology Partner',description: 'Advanced consulting partner specializing in cloud migration and optimization',year: '2019',achievements: ['AWS Advanced Consulting PartnerMigration Competency', 'Well-Architected Partner']
    },;
    {;
      name: 'Google Cloud',logo: '/partners/google-cloud.svg',type: 'Technology Partner',description: 'Partner for AI/ML solutions and data analytics on Google Cloud Platform',year: '2021',achievements: ['Google Cloud PartnerAI/ML Specialization', 'Data Analytics Partner']
    },;
    {;
      name: 'Salesforce',logo: '/partners/salesforce.svg',type: 'Solution Partner',description: 'Consulting partner for CRM implementation and custom development',year: '2018',achievements: ['Salesforce Consulting PartnerPlatform Developer', 'Sales Cloud Expert']
    },;
    {;
      name: 'Oracle',logo: '/partners/oracle.svg',type: 'Technology Partner',description: 'Partner for database solutions and enterprise applications',year: '2020',achievements: ['Oracle Gold PartnerDatabase Specialization', 'Cloud Infrastructure Partner']
    },;
    {;
      name: 'IBM',logo: '/partners/ibm.svg',type: 'Strategic Partner',description: 'Strategic alliance for AI solutions and enterprise consulting',year: '2019',achievements: ['IBM Business PartnerAI Solutions Partner', 'Watson Platform Expert']
    };
  ],;

  const partnerBenefits = [;
    {;
      title: 'Revenue Growth',description: 'Access new markets and revenue streams through our partnership network',icon: TrendingUp,color: 'from-green-500 to-emerald-500',metric: '40%'
    };
    {;
      title: 'Market Expansion',description: 'Enter new geographic regions and industries',icon: Globe,color: 'from-purple-500 to-pink-500',metric: '15+'
    };
    {;
      title: 'Technology Access',description: 'Leverage cutting-edge AI and cloud solutions',icon: Brain,color: 'from-blue-500 to-cyan-500',metric: '100+'
    };
    {;
      title: 'Support & Training',description: 'Comprehensive partner enablement programs',icon: Users,color: 'from-orange-500 to-red-500',metric: '24/7'
    };
  ];
  const successStories = [;
    {;
      partner: 'TechCorp Solutions',type: 'Solution Partner',industry: 'Healthcare',results: [;
        '200% revenue growth in first year15 new enterprise clients'
        '$2M+ in joint revenueMarket leader in healthcare AI'
      ],;
      logo: '🏥',color: 'from-red-500 to-pink-500'
    };
    {;
      partner: 'CloudFirst Systems',type: 'Technology Partner',industry: 'Financial Services',results: [;
        '300% increase in cloud adoption50+ successful migrations'
        '99.99% uptime achievedIndustry benchmark for security'
      ],;
      logo: '☁️',color: 'from-blue-500 to-cyan-500'
    };
    {;
      partner: 'InnovateLab Research',type: 'Strategic Partner',industry: 'Research & Development',results: [;
        '5 breakthrough AI algorithms10+ research publications'
        '$5M in research fundingPatent portfolio expansion'
      ],;
      logo: '🔬',color: 'from-purple-500 to-violet-500'
    };
  ];
  const partnerPrograms = [;
    {;
      level: 'Bronze',requirements: 'Basic partnership agreement',benefits: [;
        'Marketing materials accessBasic training resources'
        'Email supportPartner portal access'
      ],;
      revenue: '$0 - $50K',color: 'from-amber-500 to-orange-500'
    };
    {;
      level: 'Silver',requirements: '$50K+ annual revenue',benefits: [;
        'Everything in BronzeAdvanced training programs'
        'Dedicated partner managerCo-marketing campaigns',;
        'Technical support'
      ],;
      revenue: '$50K - $200K',color: 'from-gray-400 to-gray-500'
    };
    {;
      level: 'Gold',requirements: '$200K+ annual revenue',benefits: [;
        'Everything in SilverExclusive territory rights'
        'Custom marketing materialsPriority technical support',;
        'Revenue sharing programs'
      ],;
      revenue: '$200K - $1M',color: 'from-yellow-400 to-amber-500'
    };
    {;
      level: 'Platinum',requirements: '$1M+ annual revenue',benefits: [;
        'Everything in GoldStrategic planning sessions'
        'Custom solution developmentExecutive sponsorship',;
        'Exclusive market access'
      ],;
      revenue: '$1M+',color: 'from-cyan-400 to-blue-500'
    };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="Partners - Zion Tech Group"
        description="Join our partner ecosystem and grow your business with Zion Tech Group's innovative technology solutions and strategic partnerships."
      />;
      ;
      {/* Hero Section */};
      <section className="relative overflow-hidden py-20">;
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10"></[^>]*>
        <div className="container-responsive relative z-10">;
          <div className="text-center max-w-4xl mx-auto">;
            <div className="flex justify-center mb-6">;
              <div className="p-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full">;
                <[^>]*/>
              </[^>]*>
            </[^>]*>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Partner With;
              <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"> Zion Tech Group</[^>]*>
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
              Join our growing ecosystem of technology partners, solution providers, and strategic allies. ;
              Together, we can deliver innovative solutions that transform businesses and drive growth.;
            </[^>]*>
            <div className="flex flex-wrap justify-center gap-4">;
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                Become a Partner;
              </[^>]*>
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                Partner Inquiry;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
        ;
        {/* Background Elements */};
        <div className="absolute inset-0 -z-10">;
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></[^>]*>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Partnership Types */};
      <section className="py-20">;
        <div className="container-responsive">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">;
              Partnership Opportunities;
            </[^>]*>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
              Choose the partnership model that best fits your business goals and expertise. ;
              We offer multiple partnership types to support different business models.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
            {partnershipTypes.map((type, index) => (;
              <motion.div
                key={type.title};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className="flex items-start gap-4 mb-6">;
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${type.color}`}>;
                    <[^>]*/>
                  </[^>]*>
                  <div className="flex-1">;
                    <h3 className="text-2xl font-bold text-white mb-2">{type.title}</[^>]*>
                    <p className="text-gray-300">{type.description}</[^>]*>
                  </[^>]*>
                </[^>]*>
                ;
                <div className="mb-6">;
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Benefits</[^>]*>
                  <ul className="space-y-2">;
                    {type.benefits.map((benefit, benefitIndex) => (;
                      <li key={benefitIndex} className="flex items-center gap-3 text-gray-300">;
                        <[^>]*/>
                        <span className="text-sm">{benefit}</[^>]*>
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>
                ;
                <div>;
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Examples</[^>]*>
                  <div className="flex flex-wrap gap-2">;
                    {type.examples.map((example, exampleIndex) => (;
                      <span;
                        key={exampleIndex};
                        className="[^"]*"
                      >;
                        {example};
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Partner Benefits */};
      <section className="py-20 bg-slate-800/30">;
        <div className="container-responsive">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">;
              Why Partner With Us?;
            </[^>]*>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
              Our partners enjoy significant advantages that help them grow their business ;
              and deliver exceptional value to their customers.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {partnerBenefits.map((benefit, index) => (;
              <motion.div
                key={benefit.title};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">;
                  <[^>]*/>
                </[^>]*>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.metric}</[^>]*>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</[^>]*>
                <p className="text-gray-400">{benefit.description}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Partner Programs */};
      <section className="py-20">;
        <div className="container-responsive">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">;
              Partner Program Tiers;
            </[^>]*>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
              Our tiered partner program rewards success and provides increasing benefits ;
              as your partnership grows.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
            {partnerPrograms.map((program, index) => (;
              <motion.div
                key={program.level};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${;
                  program.level === 'Gold' || program.level === 'Platinum'
                    ? 'border-cyan-400/50 bg-gradient-to-br from-slate-800/50 to-slate-700/50 ring-2 ring-cyan-400/20'
                    : 'border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50'
                }`};
              >;
                <div className="text-center mb-6">;
                  <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>;
                    <[^>]*/>
                  </[^>]*>
                  <h3 className="text-2xl font-bold text-white mb-2">{program.level}</[^>]*>
                  <p className="text-cyan-400 font-semibold">{program.revenue}</[^>]*>
                </[^>]*>
                ;
                <div className="mb-6">;
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Requirements</[^>]*>
                  <p className="text-gray-300 text-sm mb-4">{program.requirements}</[^>]*>
                  ;
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Benefits</[^>]*>
                  <ul className="space-y-2">;
                    {program.benefits.map((benefit, benefitIndex) => (;
                      <li key={benefitIndex} className="flex items-center gap-2 text-gray-300">;
                        <[^>]*/>
                        <span className="text-sm">{benefit}</[^>]*>
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Success Stories */};
      <section className="py-20 bg-slate-800/30">;
        <div className="container-responsive">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            viewport={{ once: true }};
            className="[^"]*"
          >;
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">;
              Partner Success Stories;
            </[^>]*>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
              See how our partners have achieved remarkable success and growth ;
              through our partnership programs.;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
            {successStories.map((story, index) => (;
              <motion.div
                key={story.partner};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className="text-center mb-6">;
                  <div className={`w-16 h-16 bg-gradient-to-br ${story.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-3xl`}>;
                    {story.logo};
                  </[^>]*>
                  <h3 className="text-xl font-bold text-white mb-2">{story.partner}</[^>]*>
                  <p className="text-cyan-400 font-medium mb-1">{story.type}</[^>]*>
                  <p className="text-gray-400 text-sm">{story.industry}</[^>]*>
                </[^>]*>
                ;
                <div className="space-y-3">;
                  {story.results.map((result, resultIndex) => (;
                    <div key={resultIndex} className="flex items-center gap-3 text-gray-300">;
                      <[^>]*/>
                      <span className="text-sm">{result}</[^>]*>
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Become a Partner CTA */};
      <section id="become-partner" className="py-20">;
        <div className="container-responsive">;
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-3xl p-12 border border-slate-700/50">;
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h2 className="text-3xl lg: text-4xl font-bold text-white mb-6">;
                Ready to Join Our Partner Ecosystem?;
              </[^>]*>
              <p className="text-xl text-gray-300 mb-8">;
                Start your partnership journey today and unlock new growth opportunities ;
                with our AI-powered technology solutions.;
              </[^>]*>
              ;
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">;
                <div className="text-center p-4">;
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">;
                    <[^>]*/>
                  </[^>]*>
                  <h3 className="text-lg font-semibold text-white mb-2">Simple Process</[^>]*>
                  <p className="text-gray-400 text-sm">Quick application and onboarding</[^>]*>
                </[^>]*>
                <div className="text-center p-4">;
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">;
                    <[^>]*/>
                  </[^>]*>
                  <h3 className="text-lg font-semibold text-white mb-2">Dedicated Support</[^>]*>
                  <p className="text-gray-400 text-sm">Personal partner success manager</[^>]*>
                </[^>]*>
                <div className="text-center p-4">;
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-3">;
                    <[^>]*/>
                  </[^>]*>
                  <h3 className="text-lg font-semibold text-white mb-2">Growth Focused</[^>]*>
                  <p className="text-gray-400 text-sm">Proven strategies for success</[^>]*>
                </[^>]*>
              </[^>]*>
              ;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <Link;
                  to="/contact"
                  className="[^"]*"
                >;
                  Apply Now;
                  <[^>]*/>
                </[^>]*>
                <Link;
                  to="/contact"
                  className="[^"]*"
                >;
                  Schedule Consultation;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
