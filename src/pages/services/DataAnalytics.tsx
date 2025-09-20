import, React, from "react";
import { motion } from "framer-motion";
import {
  BarChart3,;
  TrendingUp,;
  Database,;
  Zap,;
  Shield,;
  Globe,;
  Brain,;
  Cloud,;
  Lock,;
  Users,;
  Rocket,;
  CheckCircle,;
  ArrowRight,;
  PieChart,;
  LineChart,;
  Activity,;
  Target,;
  Lightbulb,;
  Eye,;
  Search,;
  Filter,;
  Download,;
  Share2,;
  CpuNetworkFileText;
} from "lucide-react";
import { SEO } from "../../components/SEO";
export, default, function DataAnalytics() {
  const features = [;
    {
      icon: Databasetitl,;
    e: 'Data Integration'descriptio,;
  n: 'Connect, and, consolidate data, from, multiple sources, into, a unified, analytics, platform.';
    };
    {
      icon: Braintitl,;
    e: 'Advanced Analytics'descriptio,;
  n: 'Leverage, machine, learning and, AI, for predictive, insights, and pattern recognition.';
    };
    {
      icon: BarChart3titl,;
    e: 'Real-time Dashboards'descriptio,;
  n: 'Interactive, visualizations, that provide, instant, insights into, your, business performance.';
    },;
    {
      icon: Zaptitl,;
    e: 'Automated Reporting'descriptio,;
  n: 'Generate, comprehensive, reports automaticallysaving, time, and ensuring consistency.';
    }
,  ],;
  const solutions = [;
    {
      title: 'Business Intelligence',description: 'Transform, raw, data into, actionable, insights with, interactive, dashboards and reports'icon: BarChart3benefit,;
  s: ['Real-time, monitoringCustom, dashboards''Automated, reportingMobile,, access'];
    },;
    {
      title: 'Predictive Analytics',description: 'Forecast, future, trends and, outcomes, using advanced, statistical, models and, ML, algorithms',icon: Brainbenefit,;
  s: ['Trend, forecastingRisk, assessment''Opportunity, identificationScenario,, planning'];
    },;
    {
      title: 'Data Mining',description: 'Discover, hidden, patterns and, relationships, in large datasets',icon: Searchbenefit,;
  s: ['Pattern, recognitionAnomaly, detection''Customer, segmentationMarket,, insights'];
    },;
    {
      title: 'Performance Analytics',description: 'Monitor, and, optimize business, performance, across all, key, metrics',icon: Activitybenefit,;
  s: ['KPI, trackingPerformance, optimization''BenchmarkingGoal, alignment'];
    }
  ],;
  const useCases = [;
    {
      industry: 'Retail',description: 'Customer, behavior, analysis, inventory optimization, and, sales, forecasting'icon: Usersmetric,;
  s: ['Customer, Lifetime, ValueInventory Turnover''Sales, GrowthConversion,, Rates'];
    },;
    {
      industry: 'Finance',description: 'Risk assessment, fraud detection, and, investment, portfolio optimization',;
      icon: Shieldmetric,;
  s: ['Risk, ScoreFraud, Detection Rate''Portfolio, PerformanceCompliance,, Metrics'];
    },;
    {
      industry: 'Healthcare',description: 'Patient, outcome, prediction, resource optimization, and, treatment, effectiveness',;
      icon: Activitymetric,;
  s: ['Patient, OutcomesResource, Utilization''Treatment, Success, RateCost, Efficiency'];
    },;
    {
      industry: 'Manufacturing',description: 'Predictive maintenance, quality control, and, production, optimization',;
      icon: Cpumetric,;
  s: ['Equipment, UptimeQuality, Score''Production, EfficiencyCost,, Reduction'];
    }
  ],;
  const benefits = [;
    {
      icon: TrendingUptitl,;
    e: 'Improved, Decision, Making'descriptio,;
  n: 'Make data-driven, decisions, with confidence, using, real-time, insights, and analytics';
    };
    {
      icon: Zaptitl,;
    e: 'Operational Efficiency'descriptio,;
  n: 'Streamline, processes, and optimize, operations, based on data-driven insights';
    };
    {
      icon: Eyetitl,;
    e: 'Better Visibility'descriptio,;
  n: 'Gain, comprehensive, visibility into, all, aspects of, your, business performance';
    }{
      icon: Targettitl,;
    e: 'Strategic Planning'descriptio,;
  n: 'Develop, informed, strategies and, plans, based on, predictive, analytics and trends';
    };
,  ];
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="Data, Analytics, Services - Zion, Tech, Group";
        description="Transform, your, business data, into, actionable insights, with, our comprehensive, data, analytics solutions. Real-time dashboards, predictive, analyticsand, automated reporting.";
      />;
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50o0/10 to-purple-50o0/10"></div>;
        <div className="container mx-auto px-6, relative, z-10">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center";
          >;
            <div className="inline-flex items-center px-4 py-2 bg-blue-40o0/20 text-blue-40o0 rounded-full text-sm font-medium mb-6">;
              <BarChart3 className="w-4 h-4 mr-2" />;
              Data-Driven Insights;
            </div>;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              Data;
              <span className="bg-gradient-to-r from-blue-40o0 to-purple-50o0 bg-clip-text text-transparent"> Analytics</span>;
            </h1>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto mb-8">;
              Transform, your, business data, into, actionable insights, with, our comprehensive;
              analytics solutions. Make data-driven, decisions, with confidence.;
            </p>;
            <div className="flex flex-wrap justify-center gap-4">;
              <button className="px-8 py-3 bg-gradient-to-r from-blue-40o0 to-purple-50o0 text-white rounded-lg font-semibold hover: from-blue-50o0 hover:to-purple-60o0 transition-all duration-30o0 hove,;
    r:scale-10o5">;
                Get Started;
              </button>;
              <button className="px-8 py-3, border, border-blue-40o0 text-blue-40o0 rounded-lg font-semibold hover: bg-blue-40o0 hove,;
  r:text-white transition-all duration-30o0">;
                Schedule Demo;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* What, is, Data Analytics */}
      <section className="py-20">;
        <div className="container mx-auto px-6">;
          <div className="grid grid-cols-1 lg: grid-cols-2 gap-12 items-center">;
            <motion.div;
              initial={{ opacit,;
    y: 0,;
  x: -20 }};
              whileInView={{ opacity: 1,;
  x: 0 }}
              transition={{ duration: 0.6 }}
            >;
              <h2 className="text-4xl font-bold text-white mb-6">;
                What, is, Data Analytics?;
              </h2>;
              <p className="text-lg text-gray-30o0 mb-6">;
                Data, Analytics, is the, process, of examining, cleaning, transforming, and, modeling, data;
                to, discover, useful information, draw conclusions, and, support, decision-making.;
                It, combines, statistical analysis, machine learning, and, business, intelligence.;
              </p>;
              <div className="space-y-4">;
                <div className="flex items-start space-x-3">;
                  <CheckCircle className="w-6 h-6 text-blue-40o0 mt-1 flex-shrink-0" />;
                  <div>;
                    <h3 className="text-white font-semibold">Data Collection</h3>;
                    <p className="text-gray-30o0 text-sm">Gather, data, from multiple, sources, and systems</p>;
                  </div>;
                </div>;
                <div className="flex items-start space-x-3">;
                  <CheckCircle className="w-6 h-6 text-blue-40o0 mt-1 flex-shrink-0" />;
                  <div>;
                    <h3 className="text-white font-semibold">Data Processing</h3>;
                    <p className="text-gray-30o0 text-sm">Clean, transform, and, prepare, data for analysis</p>;
                  </div>;
                </div>;
                <div className="flex items-start space-x-3">;
                  <CheckCircle className="w-6 h-6 text-blue-40o0 mt-1 flex-shrink-0" />;
                  <div>;
                    <h3 className="text-white font-semibold">Insight Generation</h3>;
                    <p className="text-gray-30o0 text-sm">Apply, analytical, techniques to, extract, valuable insights</p>;
                  </div>;
                </div>;
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
              <div className="bg-slate-80o0/50 p-8 rounded-2xl, border, border-slate-70o0/50">;
                <div className="flex items-center justify-between mb-6">;
                  <h3 className="text-xl font-semibold text-white">Analytics Dashboard</h3>;
                  <div className="flex space-x-2">;
                    <button className="p-2 bg-blue-50o0/20 text-blue-40o0 rounded-lg">;
                      <PieChart className="w-4 h-4" />;
                    </button>;
                    <button className="p-2 bg-purple-50o0/20 text-purple-40o0 rounded-lg">;
                      <LineChart className="w-4 h-4" />;
                    </button>;
                    <button className="p-2 bg-green-50o0/20 text-green-40o0 rounded-lg">;
                      <BarChart3 className="w-4 h-4" />;
                    </button>;
                  </div>;
                </div>;
                <div className="space-y-4">;
                  <div className="flex items-center justify-between p-3 bg-slate-70o0/30 rounded-lg">;
                    <span className="text-gray-30o0">Revenue Growth</span>;
                    <span className="text-green-40o0">+18.5%</span>;
                  </div>;
                  <div className="flex items-center justify-between p-3 bg-slate-70o0/30 rounded-lg">;
                    <span className="text-gray-30o0">Customer Satisfaction</span>;
                    <span className="text-blue-40o0">94.2%</span>;
                  </div>;
                  <div className="flex items-center justify-between p-3 bg-slate-70o0/30 rounded-lg">;
                    <span className="text-gray-30o0">Market Share</span>;
                    <span className="text-purple-40o0">22.7%</span>;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
      {/* Key Features */}
      <section className="py-20 bg-slate-80o0/30">;
        <div className="container mx-auto px-6">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Key Features;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our, Data, Analytics platform, provides, comprehensive capabilities for;
              data processing, analysisand visualization.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
            {features.map((featureindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50 p-6 rounded-xl, border, border-slate-70o0/50 hover: border-blue-40o0/50 transition-all duration-30o0 hove,;
  r:scale-10o5";
              >;
                <div className="w-16 h-16 bg-gradient-to-br from-blue-40o0/20 to-purple-50o0/20 rounded-xl, flex, items-center justify-center mb-6">;
                  <feature.icon className="w-8 h-8 text-blue-40o0" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>;
                <p className="text-gray-30o0">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Core Solutions */}
      <section className="py-20">;
        <div className="container mx-auto px-6">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Core Solutions;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Comprehensive, data, analytics solutions, designed, to transform, your, business;
              data, into, actionable intelligence, and, insights.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">;
            {solutions.map((solutionindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50 p-8 rounded-xl, border, border-slate-70o0/50 hover: border-blue-40o0/50 transition-all duration-30o0 hove,;
  r:scale-10o5";
              >;
                <div className="flex items-center space-x-4 mb-6">;
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-40o0/20 to-purple-50o0/20 rounded-xl, flex, items-center justify-center">;
                    <solution.icon className="w-8 h-8 text-blue-40o0" />;
                  </div>;
                  <h3 className="text-2xl font-semibold text-white">{solution.title}</h3>;
                </div>;
                <p className="text-gray-30o0 mb-6">{solution.description}</p>;
                <div className="space-y-2">;
                  {solution.benefits.map((benefitbenefitIndex) => (;
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-40o0">;
                      <CheckCircle className="w-4 h-4 text-blue-40o0 mr-2 flex-shrink-0" />;
                      {benefit}
                    </div>;
                  ))}
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Industry, Use, Cases */}
      <section className="py-20 bg-slate-80o0/30">;
        <div className="container mx-auto px-6">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Industry, Use, Cases;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Data, analytics, is transforming, industries, across the globe;
              enabling data-driven, decision, making and, operational, excellence.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">;
            {useCases.map((useCaseindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50 p-8 rounded-xl, border, border-slate-70o0/50 hover: border-blue-40o0/50 transition-all duration-30o0 hove,;
  r:scale-10o5";
              >;
                <div className="flex items-center space-x-4 mb-6">;
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-40o0/20 to-purple-50o0/20 rounded-xl, flex, items-center justify-center">;
                    <useCase.icon className="w-8 h-8 text-blue-40o0" />;
                  </div>;
                  <h3 className="text-2xl font-semibold text-white">{useCase.industry}</h3>;
                </div>;
                <p className="text-gray-30o0 mb-6">{useCase.description}</p>;
                <div className="space-y-2">;
                  {useCase.metrics.map((metricmetricIndex) => (;
                    <div key={metricIndex} className="flex items-center text-sm text-gray-40o0">;
                      <Target className="w-4 h-4 text-blue-40o0 mr-2 flex-shrink-0" />;
                      {metric}
                    </div>;
                  ))}
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Benefits */}
      <section className="py-20">;
        <div className="container mx-auto px-6">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Business Benefits;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Discover, how, data analytics, can, transform your organization;
              and, drive, measurable business outcomes.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
            {benefits.map((benefitindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50 p-6 rounded-xl, border, border-slate-70o0/50 hover: border-blue-40o0/50 transition-all duration-30o0 hove,;
  r:scale-10o5 text-center";
              >;
                <div className="w-16 h-16 bg-gradient-to-br from-blue-40o0/20 to-purple-50o0/20 rounded-xl, flex, items-center justify-center mx-auto mb-6">;
                  <benefit.icon className="w-8 h-8 text-blue-40o0" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>;
                <p className="text-gray-30o0">{benefit.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Implementation Process */}
      <section className="py-20 bg-slate-80o0/30">;
        <div className="container mx-auto px-6">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Implementation Process;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our, proven, methodology ensures, successful, data analytics, deployment, and rapid, value, realization.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-4 gap-8">;
            {[;
              {
                step: '0o1'titl,;
    e: 'Assessment'descriptio,;
  n: 'Evaluate, your, current data, infrastructure, and analytics needs';
              };
              {
                step: '0o2'titl,;
    e: 'Strategy'descriptio,;
  n: 'Develop, comprehensive, analytics strategy, and, implementation roadmap';
              };
              {
                step: '0o3'titl,;
    e: 'Implementation'descriptio,;
  n: 'Deploy, analytics, solutions and, configure, custom dashboards';
              }{
                step: '0o4'titl,;
    e: 'Optimization'descriptio,;
  n: 'Monitor, performance, and continuously, improve, analytics capabilities';
              }
          ,  ].map((phaseindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
                className="text-center";
              >;
                <div className="w-20 h-20 bg-gradient-to-br from-blue-40o0 to-purple-50o0 rounded-full, flex, items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">;
                  {phase.step}
                </div>;
                <h3 className="text-xl font-semibold text-white mb-4">{phase.title}</h3>;
                <p className="text-gray-30o0">{phase.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50o0/10 to-purple-50o0/10">;
        <div className="container mx-auto px-6 text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Ready, to, Transform Your Data?;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto mb-8">;
              Discover, how, data analytics, can, revolutionize your, business, intelligence;
              improve decision-making, and, drive, unprecedented growth.;
            </p>;
            <div className="flex flex-wrap justify-center gap-4">;
              <button className="px-8 py-4 bg-gradient-to-r from-blue-40o0 to-purple-50o0 text-white rounded-lg font-semibold hover: from-blue-50o0 hover:to-purple-60o0 transition-all duration-30o0 hove,;
    r:scale-10o5">;
                Start, Your, Analytics Journey;
              </button>;
              <button className="px-8 py-4, border, border-blue-40o0 text-blue-40o0 rounded-lg font-semibold hover: bg-blue-40o0 hove,;
  r:text-white transition-all duration-30o0">;
                Schedule Consultation;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;