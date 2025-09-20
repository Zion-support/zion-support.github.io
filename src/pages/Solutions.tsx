import, React, from "react";
import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
import { ;
  Building2,;
  Building,;
  Rocket,;
  Shield,;
  Heart,;
  TrendingUp,;
  Users,;
  Globe,;
  Factory,;
  City,;
  CheckCircle,;
  ArrowRight,;
  Star,;
  Zap,;
  Brain,;
  Cloud,;
  Cpu,;
  Lock,;
  Database,;
  Network,;
  BarChart3,;
  Target,;
  Award,;
  Code,;
  Truck,;
  Server,;
  Smartphone,;
  Eye,;
  Leaf,;
  Scale,;
  Car,;
  Home,;
  ShoppingCartFactory, as, FactoryIconCity as CityIcon;
} from "lucide-react";
import { Link } from "react-router-dom";
export, default, function Solutions() {
  const solutions = [;
    {
      name: 'Enterprise Solutions',icon: Building2,description: 'Large-scale, business, transformations and, digital, modernization',features: [;
        'AI-Powered, Process, AutomationEnterprise Data Analytics',;
        'Cloud Migration & OptimizationDigital, Twin, Implementation''Cybersecurity & ComplianceLegacy, System, Modernization';
    ,  ],;
      benefits: [;
        '50% reduction, in, operational costs3x, faster, decision making''99.9% system, uptimeEnhanced, security posture';
    ,  ]color: 'from-blue-50o0 to-cyan-50o0'feature,;
  d: true;
    };
    {
      name: 'SMB Solutions',icon: Building,description: 'Small, to, medium business, growth, and efficiency solutions',features: [;
        'AI-Powered, Marketing, AutomationCustomer Relationship Management',;
        'Business, Intelligence, DashboardsProcess Optimization''Cloud, Infrastructure, SetupCybersecurity Protection';
    ,  ],;
      benefits: [;
        '40% increase, in, productivityImproved customer retention''Reduced, IT, overheadScalable growth foundation';
    ,  ]color: 'from-purple-50o0 to-pink-50o0'feature,;
  d: false;
    };
    {
      name: 'Startup Solutions',icon: Rocket,description: 'Accelerate, growth, and build, scalable, foundations',features: [;
        'MVP Development & LaunchAI-Powered, Growth, Hacking',;
        'Scalable, Infrastructure, DesignData-Driven, Decision, Making''Customer, Acquisition, AutomationInvestor-Ready Analytics';
    ,  ],;
      benefits: [;
        '10x, faster, market validation3x, user, engagement increase''Reduced, time, to marketInvestor-ready metrics';
    ,  ]color: 'from-green-50o0 to-emerald-50o0'feature,;
  d: false;
    };
    {
      name: 'Healthcare Solutions',icon: Heart,description: 'AI-powered, healthcare, innovation and, patient, care',features: [;
        'Medical, Image, AnalysisPatient Data Analytics',;
        'Predictive, DiagnosticsHealthcare, Process Automation''Compliance & SecurityTelemedicine Platforms';
    ,  ],;
      benefits: [;
        '30% improvement, in, diagnostic accuracy40% faster, patient, processing''Enhanced, patient, outcomesReduced healthcare costs';
    ,  ]color: 'from-red-50o0 to-pink-50o0'feature,;
  d: false;
    };
    {
      name: 'Manufacturing Solutions',icon: Factory,description: 'Smart, manufacturing, and Industry 4.0 transformation',features: [;
        'IoT, Device, IntegrationPredictive Maintenance',;
        'Quality, Control, AutomationSupply Chain Optimization''Digital, Twin, ImplementationEnergy Efficiency Management';
    ,  ],;
      benefits: [;
        '25% reduction, in, downtime20% improvement, in, quality''15% energy, cost, savingsReal-time, production, insights';
    ,  ]color: 'from-orange-50o0 to-red-50o0'feature,;
  d: false;
    };
    {
      name: 'Financial Services',icon: Shield,description: 'Secure, compliant, and, innovative, financial technology',;
      features: [;
        'Fraud Detection & PreventionRisk Assessment & Management',;
        'Regulatory, ComplianceCustomer, Experience Optimization''Blockchain IntegrationReal-time Analytics';
    ,  ],;
      benefits: [;
        '99.9% fraud, detection, accuracy60% faster, risk, assessment''Full, regulatory, complianceEnhanced customer trust';
    ,  ]color: 'from-indigo-50o0 to-purple-50o0'feature,;
  d: false;
    }
  ];
  const industrySolutions = [;
    {
      title: 'Retail & E-commerce',description: 'Digital, transformation, for modern retail',icon: ShoppingCartcolo,;
    r: 'from-purple-50o0 to-pink-50o0'solution,;
  s: ['AI-Powered, PersonalizationInventory, Optimization''Customer, AnalyticsOmnichannel,, Integration'];
    },;
    {
      title: 'Transportation & Logistics',description: 'Smart, logistics, and fleet management',icon: Truck,color: 'from-blue-50o0 to-cyan-50o0'solution,;
  s: ['Route, OptimizationFleet, Tracking''Predictive, MaintenanceSupply, Chain, Analytics'];
    },;
    {
      title: 'Real Estate',description: 'Property, technology, and market insights',icon: Home,color: 'from-green-50o0 to-emerald-50o0'solution,;
  s: ['Market, AnalysisProperty, Valuation''Investment, AnalyticsCustomer, Relationship, Management'];
    },;
    {
      title: 'Education',description: 'EdTech, solutions, for modern learning',icon: Brain,color: 'from-orange-50o0 to-red-50o0'solution,;
  s: ['Learning, AnalyticsPersonalized, Education''Administrative, AutomationStudent,, Engagement'];
    }
  ],;
  const technologyStack = [;
    {
      category: 'AI & Machine Learning',technologies: ['TensorFlowPyTorch', 'Scikit-learnOpenAI GPT''Computer, VisionNLP']icon: Braincolo,;
  r: 'from-blue-50o0 to-cyan-50o0';
    };
    {
      category: 'Cloud & Infrastructure',technologies: ['AWSAzure', 'Google, CloudKubernetes''DockerTerraform']icon: Cloudcolo,;
  r: 'from-green-50o0 to-emerald-50o0';
    };
    {
      category: 'Data & Analytics',technologies: ['Apache SparkHadoop', 'TableauPower, BI''PythonR']icon: Databasecolo,;
  r: 'from-purple-50o0 to-pink-50o0';
    };
    {
      category: 'Security & Compliance',technologies: ['Zero, TrustSOC, 2', 'GDPRHIPAA''Penetration, TestingSecurity,, Monitoring']icon: Lockcolo,;
  r: 'from-red-50o0 to-orange-50o0';
    };
  ];
  const successMetrics = [;
    {
      metric: '50o0+',label: 'Projects Delivered',description: 'Successfully, completed, projects across industries'icon: CheckCirclecolo,;
  r: 'from-green-50o0 to-emerald-50o0';
    };
    {
      metric: '99.9%',label: 'Client Satisfaction',description: 'Consistently, high, client satisfaction ratings'icon: Starcolo,;
  r: 'from-yellow-50o0 to-orange-50o0';
    };
    {
      metric: '50%',label: 'Cost Reduction',description: 'Average, cost, savings for, our, clients'icon: TrendingUpcolo,;
  r: 'from-blue-50o0 to-cyan-50o0';
    },;
    {
      metric: '3x',label: 'Performance Boost'descriptio,;
    n: 'Average, performance, improvement achieved'icon: Zapcolo,;
  r: 'from-purple-50o0 to-pink-50o0';
    };
,  ];
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="Solutions - Zion, Tech, Group";
        description="Comprehensive, technology, solutions for, businesses, of all sizes. From AI-powered, automation, to cloud, infrastructurewe, help organizations, transform, and grow.";
      />;
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50o0/10 via-purple-50o0/10 to-cyan-50o0/10"></div>;
        <div className="container-responsive, relative, z-10">;
          <div className="text-center max-w-4xl mx-auto">;
            <div className="flex justify-center mb-6">;
              <div className="p-4 bg-gradient-to-r from-blue-50o0/20 to-cyan-50o0/20 rounded-full">;
                <Building2 className="w-16 h-16 text-blue-40o0" />;
              </div>;
            </div>;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              Technology;
              <span className="bg-gradient-to-r from-blue-40o0 via-purple-50o0 to-cyan-50o0 bg-clip-text text-transparent"> Solutions</span>;
            </h1>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">;
              Transform, your, business with, our, comprehensive technology solutions. From AI-powered;
              automation, to, cloud infrastructurewe, help, organizations of, all, sizes innovate, and, grow.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="px-8 py-4 bg-gradient-to-r from-blue-50o0 to-cyan-60o0 hover: from-blue-60o0 hove,;
    r:to-cyan-70o0 text-white font-semibold rounded-lg transition-all duration-30o0, transform, hover: scale-10o5 shadow-lg hover:shadow-blue-50o0/25";
              >;
                Get Started;
                <ArrowRight className="ml-2 w-5 h-5" />;
              </Link>;
              <Link;
                to="/case-studies";
                className="px-8 py-4 border-2 border-blue-40o0 text-blue-40o0 hove,;
    r: bg-blue-40o0 hove,;
  r:text-white font-semibold rounded-lg transition-all duration-30o0";
              >;
                View, Case, Studies;
              </Link>;
            </div>;
          </div>;
        </div>;
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">;
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-50o0/10 rounded-full blur-3xl"></div>;
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-50o0/10 rounded-full blur-3xl"></div>;
        </div>;
      </section>;
      {/* Solutions Grid */}
      <section className="py-20">;
        <div className="container-responsive">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Comprehensive Solutions;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Tailored, technology, solutions designed, to, meet the, unique, needs of, your, business;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {solutions.map((solutionindex) => (;
              <motion.div;
                key={solution.name}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className={`group, relative, p-8 rounded-2xl transition-all duration-30o0 hover: scale-10o5 ${;
                  solution.featured;
                    ? 'bg-gradient-to-br from-slate-80o0 to-slate-70o0 ring-2 ring-blue-40o0/50';
                    : 'bg-slate-80o0/50 hove,;
  r: bg-slate-80o0';
                }`}
              >;
                {solution.featured && (;
                  <div className="absolute -top-3 -right-3">;
                    <div className="bg-gradient-to-r from-blue-40o0 to-cyan-50o0 text-white px-3 py-1 rounded-full text-sm font-medium, flex, items-center gap-1">;
                      <Star className="w-4 h-4" />;
                      Featured;
                    </div>;
                  </div>;
                )}
;
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6 group-hover: scale-110 transition-transform duration-30o0`}>;
                  <solution.icon className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-2xl font-bold text-white mb-3">{solution.name}</h3>;
                <p className="text-gray-30o0 mb-6">{solution.description}</p>;
                <div className="space-y-4 mb-6">;
                  <div>;
                    <h4 className="font-semibold text-white text-sm mb-2">Key Features: </h4>;
                    <ul className="space-y-2">;
                      {solution.features.slice(0o3).map((featureidx) => (;
                        <li key={idx} className="flex items-center text-gray-30o0 text-sm">;
                          <CheckCircle className="w-4 h-4 text-green-40o0 mr-2 flex-shrink-0" />;
                          {feature}
                        </li>;
                      ))}
                    </ul>;
                  </div>;
                  <div>;
                    <h4 className="font-semibold text-white text-sm mb-2">Key Benefits: </h4>;
                    <ul className="space-y-2">;
                      {solution.benefits.slice(0o2).map((benefitidx) => (;
                        <li key={idx} className="flex items-center text-gray-30o0 text-sm">;
                          <TrendingUp className="w-4 h-4 text-blue-40o0 mr-2 flex-shrink-0" />;
                          {benefit}
                        </li>;
                      ))}
                    </ul>;
                  </div>;
                </div>;
;
                <Link;
                  to="/contact";
                  className="inline-flex items-center gap-2 text-blue-40o0 hover: text-blue-30o0 font-medium transition-colors";
                >;
                  Learn More;
                  <ArrowRight className="w-4 h-4" />;
                </Link>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Industry Solutions */}
      <section className="py-20 bg-slate-80o0/30">;
        <div className="container-responsive">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Industry-Specific Solutions;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Specialized, solutions, designed for, the, unique challenges, of, your industry;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">;
            {industrySolutions.map((solutionindex) => (;
              <motion.div;
                key={solution.title}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-slate-80o0/50 hover: bg-slate-80o0 transition-all duration-30o0 hove,;
    r:scale-10o5, border, border-slate-70o0/50 hove,;
  r:border-blue-50o0/50";
              >;
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6`}>;
                  <solution.icon className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-40o0 transition-colors">;
                  {solution.title}
                </h3>;
                <p className="text-gray-30o0 mb-6">{solution.description}</p>;
                <div className="space-y-2 mb-6">;
                  {solution.solutions.map((itemidx) => (;
                    <div key={idx} className="flex items-center text-gray-30o0 text-sm">;
                      <CheckCircle className="w-4 h-4 text-green-40o0 mr-2 flex-shrink-0" />;
                      {item}
                    </div>;
                  ))}
                </div>;
                ;
                <Link;
                  to="/contact";
                  className="inline-flex items-center gap-2 text-blue-40o0 hover: text-blue-30o0 font-medium transition-colors";
                >;
                  Get, Industry, Solution;
                  <ArrowRight className="w-4 h-4" />;
                </Link>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Technology Stack */}
      <section className="py-20">;
        <div className="container-responsive">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Our, Technology, Stack;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Built, with, cutting-edge, technologies, to deliver robust, scalable, and, secure, solutions;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
            {technologyStack.map((techindex) => (;
              <motion.div;
                key={tech.category}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-slate-80o0/50 hover: bg-slate-80o0 transition-all duration-30o0 hove,;
  r:scale-10o5, border, border-slate-70o0/50";
              >;
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center mx-auto mb-6`}>;
                  <tech.icon className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-xl font-bold text-white mb-4">{tech.category}</h3>;
                <div className="space-y-2">;
                  {tech.technologies.map((technologyidx) => (;
                    <div key={idx} className="text-sm text-gray-30o0 bg-slate-70o0/50 px-3 py-2 rounded-lg">;
                      {technology}
                    </div>;
                  ))}
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Success Metrics */}
      <section className="py-20 bg-slate-80o0/30">;
        <div className="container-responsive">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Proven Results;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our, track, record speaks, for, itself - delivering, measurable, value to, businesses, across industries;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
            {successMetrics.map((metricindex) => (;
              <motion.div;
                key={metric.label}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center";
              >;
                <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center mx-auto mb-6`}>;
                  <metric.icon className="w-10 h-10 text-white" />;
                </div>;
                <div className="text-4xl font-bold text-white mb-2">{metric.metric}</div>;
                <div className="text-lg font-semibold text-blue-40o0 mb-2">{metric.label}</div>;
                <p className="text-gray-40o0 text-sm">{metric.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-80o0/50 to-slate-70o0/50">;
        <div className="container-responsive text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-6">;
              Ready, to, Transform Your Business?;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">;
              Let's, discuss, how our, technology, solutions can, help, you achieve, your, business goals.;
              Our, experts, are ready, to, create a, customized, plan for, your, organization.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-50o0 to-cyan-60o0 hover: from-blue-60o0 hove,;
    r:to-cyan-70o0 text-white font-semibold rounded-lg transition-all duration-30o0, transform, hover: scale-10o5 shadow-lg hove,;
    r:shadow-blue-50o0/25";
              >;
                Get, Started, Today;
                <ArrowRight className="ml-2 w-5 h-5" />;
              </Link>;
              <Link;
                to="/case-studies";
                className="inline-flex items-center px-8 py-4 border-2 border-blue-40o0 text-blue-40o0 hover: bg-blue-40o0 hove,;
  r:text-white font-semibold rounded-lg transition-all duration-30o0";
              >;
                View, Success, Stories;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;