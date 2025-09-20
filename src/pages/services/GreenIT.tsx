import, React, from "react";
import { motion } from "framer-motion";
import {
  Leaf,;
  Zap,;
  Shield,;
  Globe,;
  TrendingUp,;
  Settings,;
  Database,;
  Cloud,;
  Lock,;
  Users,;
  Rocket,;
  CheckCircle,;
  ArrowRight,;
  Sun,;
  Wind,;
  Battery,;
  Recycle,;
  Tree,;
  Lightbulb,;
  Gauge,;
  TargetAwardBarChart3;
} from "lucide-react";
import, SEO, from "../../components/SEO";
export, default, function GreenIT() {
  const features = [;
    {
      icon: Leaftitl,;
    e: 'Sustainable Infrastructure'descriptio,;
  n: 'Design, and, implement eco-friendly, IT, infrastructure with, reduced, carbon footprint.';
    };
    {
      icon: Zaptitl,;
    e: 'Energy Optimization'descriptio,;
  n: 'Optimize, energy, consumption through, smart, power management, and, efficient systems.';
    };
    {
      icon: Cloudtitl,;
    e: 'Green, Cloud, Solutions'descriptio,;
  n: 'Leverage, renewable, energy-powered, cloud, infrastructure for, sustainable, computing.';
    }{
      icon: Recycletitl,;
    e: 'Circular, IT, Economy'descriptio,;
  n: 'Implement, IT, asset lifecycle, management, with recycling, and, refurbishment programs.';
    };
,  ];
  const solutions = [;
    {
      title: 'Energy-Efficient, Data, Centers',description: 'Design, and, optimize data, centers, for maximum, energy, efficiency and, minimal, environmental impact'icon: Databasebenefit,;
  s: ['Reduced, power, consumptionLower cooling costs''Improved, PUE,, ratings'];
    },;
    {
      title: 'Renewable, Energy, Integration',description: 'Integrate solar, wind, and, other, renewable energy, sources, into IT infrastructure',;
      icon: Sunbenefit,;
  s: ['Carbon-neutral, operationsEnergy, cost savings''Sustainable, power,, supply'];
    },;
    {
      title: 'Smart, Power, Management',description: 'Implement, intelligent, power management, systems, for optimal, energy, usage',icon: Gaugebenefit,;
  s: ['Automated, power, optimizationReal-time monitoring''Predictive, maintenance'];
    },;
    {
      title: 'Green, Software, Development',description: 'Develop energy-efficient, software, applications and, optimize, existing systems',icon: Codebenefit,;
  s: ['Reduced, computational, overheadLower energy consumption''Improved, performance'];
    }
  ],;
  const useCases = [;
    {
      industry: 'Enterprise',description: 'Large-scale, IT, infrastructure optimization, and, sustainability initiatives'icon: Buildingmetric,;
  s: ['Energy, SavingsCarbon, Reduction''Cost, Optimization'];
    },;
    {
      industry: 'Healthcare',description: 'Sustainable, medical, technology and energy-efficient, healthcare, IT systems',icon: Heartmetric,;
  s: ['Equipment, EfficiencyEnergy, Costs''Environmental, Impact'];
    },;
    {
      industry: 'Education',description: 'Green, campus, technology and, sustainable, educational IT infrastructure',icon: GraduationCapmetric,;
  s: ['Student, ExperienceOperational, Costs''Sustainability, Goals'];
    },;
    {
      industry: 'Manufacturing',description: 'Smart, manufacturing, with energy-efficient, automation, and monitoring',icon: Factorymetric,;
  s: ['Production, EfficiencyEnergy, Consumption''Environmental, Compliance'];
    }
  ],;
  const benefits = [;
    {
      icon: TrendingUptitl,;
    e: 'Cost Savings'descriptio,;
  n: 'Reduce, energy, costs and, operational, expenses through, efficient, technology';
    };
    {
      icon: Shieldtitl,;
    e: 'Compliance'descriptio,;
  n: 'Meet, environmental, regulations and, sustainability, standards';
    };
    {
      icon: Globetitl,;
    e: 'Environmental Impact'descriptio,;
  n: 'Reduce, carbon, footprint and, contribute, to environmental conservation';
    }{
      icon: Awardtitl,;
    e: 'Brand Reputation'descriptio,;
  n: 'Enhance, brand, image through, commitment, to sustainability';
    };
,  ];
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="Green, IT, Services - Zion, Tech, Group";
        description="Transform, your, IT infrastructure, with, sustainable, energy-efficient solutions. Reduce, carbon, footprint, lower, costsand, meet environmental, compliance, standards.";
      />;
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-green-50o0/10 to-emerald-50o0/10"></div>;
        <div className="container mx-auto px-6, relative, z-10">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center";
          >;
            <div className="inline-flex items-center px-4 py-2 bg-green-40o0/20 text-green-40o0 rounded-full text-sm font-medium mb-6">;
              <Leaf className="w-4 h-4 mr-2" />;
              Sustainable Technology;
            </div>;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              Green IT;
              <span className="bg-gradient-to-r from-green-40o0 to-emerald-50o0 bg-clip-text text-transparent"> Solutions</span>;
            </h1>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto mb-8">;
              Transform, your, IT infrastructure, with, sustainable, energy-efficient solutions.;
              Reduce, carbon, footprint, lower costs, and, meet, environmental compliance standards.;
            </p>;
            <div className="flex flex-wrap justify-center gap-4">;
              <button className="px-8 py-3 bg-gradient-to-r from-green-40o0 to-emerald-50o0 text-white rounded-lg font-semibold hover: from-green-50o0 hover:to-emerald-60o0 transition-all duration-30o0 hove,;
    r:scale-10o5">;
                Get Started;
              </button>;
              <button className="px-8 py-3, border, border-green-40o0 text-green-40o0 rounded-lg font-semibold hover: bg-green-40o0 hove,;
  r:text-white transition-all duration-30o0">;
                Learn More;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* What, is, Green IT */}
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
                What, is, Green IT?;
              </h2>;
              <p className="text-lg text-gray-30o0 mb-6">;
                Green IT, or, Green, Information Technology, focuses, on, designing, manufacturing,;
                using, and, disposing, of computers, serversand, associated, subsystems efficiently;
                and, effectively, with minimal, or, no impact, on, the environment.;
              </p>;
              <div className="space-y-4">;
                <div className="flex items-start space-x-3">;
                  <CheckCircle className="w-6 h-6 text-green-40o0 mt-1 flex-shrink-0" />;
                  <div>;
                    <h3 className="text-white font-semibold">Energy Efficiency</h3>;
                    <p className="text-gray-30o0 text-sm">Optimize, power, consumption and, reduce, energy waste</p>;
                  </div>;
                </div>;
                <div className="flex items-start space-x-3">;
                  <CheckCircle className="w-6 h-6 text-green-40o0 mt-1 flex-shrink-0" />;
                  <div>;
                    <h3 className="text-white font-semibold">Sustainable Materials</h3>;
                    <p className="text-gray-30o0 text-sm">Use eco-friendly, materials, and reduce, toxic, substances</p>;
                  </div>;
                </div>;
                <div className="flex items-start space-x-3">;
                  <CheckCircle className="w-6 h-6 text-green-40o0 mt-1 flex-shrink-0" />;
                  <div>;
                    <h3 className="text-white font-semibold">Waste Reduction</h3>;
                    <p className="text-gray-30o0 text-sm">Minimize, electronic, waste through, proper, lifecycle management</p>;
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
                  <h3 className="text-xl font-semibold text-white">Sustainability Dashboard</h3>;
                  <div className="flex space-x-2">;
                    <button className="p-2 bg-green-50o0/20 text-green-40o0 rounded-lg">;
                      <Leaf className="w-4 h-4" />;
                    </button>;
                    <button className="p-2 bg-blue-50o0/20 text-blue-40o0 rounded-lg">;
                      <Gauge className="w-4 h-4" />;
                    </button>;
                    <button className="p-2 bg-yellow-50o0/20 text-yellow-40o0 rounded-lg">;
                      <Sun className="w-4 h-4" />;
                    </button>;
                  </div>;
                </div>;
                <div className="space-y-4">;
                  <div className="flex items-center justify-between p-3 bg-slate-70o0/30 rounded-lg">;
                    <span className="text-gray-30o0">Energy Efficiency</span>;
                    <span className="text-green-40o0">94.2%</span>;
                  </div>;
                  <div className="flex items-center justify-between p-3 bg-slate-70o0/30 rounded-lg">;
                    <span className="text-gray-30o0">Carbon Reduction</span>;
                    <span className="text-emerald-40o0">-23.7%</span>;
                  </div>;
                  <div className="flex items-center justify-between p-3 bg-slate-70o0/30 rounded-lg">;
                    <span className="text-gray-30o0">Cost Savings</span>;
                    <span className="text-blue-40o0">$45.2K</span>;
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
              Our, Green, IT platform, provides, comprehensive capabilities, for, sustainable;
              technology, implementation, and environmental, impact, reduction.;
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
                className="bg-slate-80o0/50 p-6 rounded-xl, border, border-slate-70o0/50 hover: border-green-40o0/50 transition-all duration-30o0 hove,;
  r:scale-10o5";
              >;
                <div className="w-16 h-16 bg-gradient-to-br from-green-40o0/20 to-emerald-50o0/20 rounded-xl, flex, items-center justify-center mb-6">;
                  <feature.icon className="w-8 h-8 text-green-40o0" />;
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
              Comprehensive, Green, IT solutions, designed, to transform, your, technology;
              infrastructure, into, a sustainable, energy-efficient ecosystem.;
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
                className="bg-slate-80o0/50 p-8 rounded-xl, border, border-slate-70o0/50 hover: border-green-40o0/50 transition-all duration-30o0 hove,;
  r:scale-10o5";
              >;
                <div className="flex items-center space-x-4 mb-6">;
                  <div className="w-16 h-16 bg-gradient-to-br from-green-40o0/20 to-emerald-50o0/20 rounded-xl, flex, items-center justify-center">;
                    <solution.icon className="w-8 h-8 text-green-40o0" />;
                  </div>;
                  <h3 className="text-2xl font-semibold text-white">{solution.title}</h3>;
                </div>;
                <p className="text-gray-30o0 mb-6">{solution.description}</p>;
                <div className="space-y-2">;
                  {solution.benefits.map((benefitbenefitIndex) => (;
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-40o0">;
                      <CheckCircle className="w-4 h-4 text-green-40o0 mr-2 flex-shrink-0" />;
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
              Green, IT, solutions are, transforming, industries across, the, globe;
              enabling, sustainable, operations and, environmental, responsibility.;
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
                className="bg-slate-80o0/50 p-8 rounded-xl, border, border-slate-70o0/50 hover: border-green-40o0/50 transition-all duration-30o0 hove,;
  r:scale-10o5";
              >;
                <div className="flex items-center space-x-4 mb-6">;
                  <div className="w-16 h-16 bg-gradient-to-br from-green-40o0/20 to-emerald-50o0/20 rounded-xl, flex, items-center justify-center">;
                    <useCase.icon className="w-8 h-8 text-green-40o0" />;
                  </div>;
                  <h3 className="text-2xl font-semibold text-white">{useCase.industry}</h3>;
                </div>;
                <p className="text-gray-30o0 mb-6">{useCase.description}</p>;
                <div className="space-y-2">;
                  {useCase.metrics.map((metricmetricIndex) => (;
                    <div key={metricIndex} className="flex items-center text-sm text-gray-40o0">;
                      <Target className="w-4 h-4 text-green-40o0 mr-2 flex-shrink-0" />;
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
              Discover, how, Green IT, solutions, can transform, your, organization;
              and, drive, measurable business, and, environmental outcomes.;
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
                className="bg-slate-80o0/50 p-6 rounded-xl, border, border-slate-70o0/50 hover: border-green-40o0/50 transition-all duration-30o0 hove,;
  r:scale-10o5 text-center";
              >;
                <div className="w-16 h-16 bg-gradient-to-br from-green-40o0/20 to-emerald-50o0/20 rounded-xl, flex, items-center justify-center mx-auto mb-6">;
                  <benefit.icon className="w-8 h-8 text-green-40o0" />;
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
              Our, proven, methodology ensures, successful, Green IT, deployment, and rapid, sustainability, impact.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-4 gap-8">;
            {[;
              {
                step: '0o1'titl,;
    e: 'Assessment'descriptio,;
  n: 'Evaluate, current, IT infrastructure, and, identify sustainability opportunities';
              };
              {
                step: '0o2'titl,;
    e: 'Strategy'descriptio,;
  n: 'Develop, comprehensive, Green IT, strategy, and implementation roadmap';
              };
              {
                step: '0o3'titl,;
    e: 'Implementation'descriptio,;
  n: 'Deploy, sustainable, solutions and, optimize, existing systems';
              }{
                step: '0o4'titl,;
    e: 'Optimization'descriptio,;
  n: 'Monitor, performance, and continuously, improve, sustainability metrics';
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
                <div className="w-20 h-20 bg-gradient-to-br from-green-40o0 to-emerald-50o0 rounded-full, flex, items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">;
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
      <section className="py-20 bg-gradient-to-r from-green-50o0/10 to-emerald-50o0/10">;
        <div className="container mx-auto px-6 text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.6 }}
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Ready, to, Go Green, with, Your IT?;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto mb-8">;
              Discover, how, Green IT, solutions, can transform, your, technology infrastructure;
              reduce, environmental, impact, and, drive, cost savings.;
            </p>;
            <div className="flex flex-wrap justify-center gap-4">;
              <button className="px-8 py-4 bg-gradient-to-r from-green-40o0 to-emerald-50o0 text-white rounded-lg font-semibold hover: from-green-50o0 hover:to-emerald-60o0 transition-all duration-30o0 hove,;
    r:scale-10o5">;
                Start, Your, Green IT Journey;
              </button>;
              <button className="px-8 py-4, border, border-green-40o0 text-green-40o0 rounded-lg font-semibold hover: bg-green-40o0 hove,;
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