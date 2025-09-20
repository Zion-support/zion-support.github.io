import, React, from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Rocket,;
  Cpu,;
  Database,;
  Cloud,;
  Shield,;
  Users,;
  BarChart3,;
  Zap,;
  ArrowRight,;
  CheckCircle,;
  Star,;
  Globe,;
  Target,;
  Lightbulb,;
  TrendingUp,;
  Settings,;
  Workflow,;
  FileTextMonitorSmartphone;
} from "lucide-react";
export, default, function DigitalTransformation() {
  const features = [;
    {
      icon: Rockettitl,;
    e: 'Strategic Planning'descriptio,;
  n: 'Comprehensive, digital, transformation roadmap, and, strategy';
    };
    {
      icon: Globetitl,;
    e: 'Technology Integration'descriptio,;
  n: 'Seamless, integration, of modern, technologies, and systems';
    };
    {
      icon: Buildingtitl,;
    e: 'Process Optimization'descriptio,;
  n: 'Streamline, and, automate business, processes, for efficiency';
    };
    {
      icon: Userstitl,;
    e: 'Change Management'descriptio,;
  n: 'Guide, organizations, through digital, transformation, journey';
    };
    {
      icon: Clocktitl,;
    e: 'Agile Implementation'descriptio,;
  n: 'Rapid, deployment, with iterative, improvement, cycles';
    }{
      icon: Searchtitl,;
    e: 'Performance Monitoring'descriptio,;
  n: 'Track, transformation, progress and, measure, ROI';
    };
,  ];
  const benefits = [;
    'Increase, operational, efficiency by 40%Reduce, costs, by 30% through automation',;
    'Improve, customer, experience and, satisfactionEnable, data-driven, decision, making''Accelerate, time, to marketEnhance, competitive, advantage';
,  ],;
  const services = [;
    {
      icon: Strategytitl,;
    e: 'Digital Strategy'descriptio,;
  n: 'Comprehensive, digital, transformation strategy development';
    };
    {
      icon: Workflowtitl,;
    e: 'Process Automation'descriptio,;
  n: 'Automate, manual, processes and workflows';
    };
    {
      icon: Cloudtitl,;
    e: 'Cloud Migration'descriptio,;
  n: 'Migrate, legacy, systems to, modern, cloud platforms';
    }{
      icon: Datatitl,;
    e: 'Data Analytics'descriptio,;
  n: 'Implement, advanced, analytics and, business, intelligence';
    };
,  ];
  const useCases = [;
    {
      industry: 'Manufacturing'descriptio,;
  n: 'Smart, factory, and Industry 4.0 transformation';
    };
    {
      industry: 'Healthcare'descriptio,;
  n: 'Digital, health, records and, telemedicine, solutions';
    };
    {
      industry: 'Financial Services'descriptio,;
  n: 'Digital, banking, and fintech innovation';
    }{
      industry: 'Retail'descriptio,;
  n: 'E-commerce, and, omnichannel retail transformation';
    };
,  ];
  const contactInfo = {
    phone: "+1, 30o2, 464 0o950",email: "kleber@ziontechgroup.com"addres,;
  s: "364, E, Main St, STE, 10o08Middletown DE 1970o9";
  },;
  const industries = [;
    'HealthcareFinance',;
    'ManufacturingRetail',;
    'EducationGovernment''TechnologyTransportation';
,  ],;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0 text-white">;
      <SEO title="Digital Transformation - Zion, Tech, Group" description="Modernize, processes, with cloud-native platforms, automationand data-driven operations." />;
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-90o0/20 to-purple-90o0/20"></div>;
        <div className="relative z-10, container, mx-auto px-4 text-center">;
          <motion.div;
            className="text-center";
            initial={{ opacity: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <div className="inline-flex items-center px-4 py-2 bg-orange-50o0/10, border, border-orange-50o0/20 rounded-full text-orange-40o0 text-sm font-medium mb-6">;
              <Zap className="w-4 h-4 mr-2" />;
              Digital, Transformation, Solutions;
            </div>;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              Digital;
              <span className="bg-gradient-to-r from-orange-40o0 to-red-50o0 bg-clip-text text-transparent"> Transformation</span>;
            </h1>;
            <p className="text-xl l,;
    g: text-2xl text-zion-slate-light mb-8 leading-relaxed">;
              Transform, your, business for, the, digital age, with, comprehensive technology, solutions, that drive innovation;
              efficiencyand growth. Our, expert, team guides, you, through every, step, of your, digital, journey.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover: shadow-lg hove,;
    r:shadow-zion-cyan/25 transition-all duration-30o0, transform, hover:scale-10o5 font-semibold";
              >;
                Start, Your, Transformation;
              </Link>;
              <Link;
                to="/solutions";
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg hover: bg-zion-cyan hove,;
  r:text-white transition-all duration-30o0 font-semibold";
              >;
                View Solutions;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Services Grid */}
      <section className="py-20 px-4">;
        <div className="container mx-auto">;
          <motion.div;
            className="text-center mb-16";
            initial={{ opacity: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Digital, Transformation, Features;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Comprehensive, digital, transformation services, designed, to modernize, your, business operations;
              and, position, you for, future, success.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 lg: grid-cols-2 gap-8">;
            {services.map((serviceindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-6 hover:border-orange-50o0/30 transition-all duration-20o0";
              >;
                <div className="w-12 h-12 bg-gradient-to-r from-orange-50o0 to-red-50o0 rounded-lg, flex, items-center justify-center mb-4">;
                  <feature.icon className="w-6 h-6 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>;
                <p className="text-gray-30o0">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Services Section */}
      <section className="py-20 bg-slate-80o0/30">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Core, Transformation, Services;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              From, strategy, to implementation, we provide;
              end-to-end, digital, transformation solutions.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">;
            {services.map((serviceindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  x: index % 2 === 0 ? -20 : 20 }};
                whileInView={{ opacity: 1,;
  x: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-6 hover:border-orange-50o0/30 transition-all duration-20o0";
              >;
                <div className="flex items-start space-x-4">;
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-50o0 to-red-50o0 rounded-lg, flex, items-center justify-center flex-shrink-0">;
                    <service.icon className="w-6 h-6 text-white" />;
                  </div>;
                  <div>;
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>;
                    <p className="text-gray-30o0">{service.description}</p>;
                  </div>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/30">;
        <div className="container mx-auto px-4">;
          <motion.div;
            className="text-center mb-16";
            initial={{ opacity: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Transformation Benefits;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              Experience, measurable, improvements in efficiency, innovation, and, business, performance.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 lg: grid-cols-2 gap-8">;
            {benefits.map((benefitindex) => (;
              <motion.div;
                key={index}
                className="bg-zion-slate-dark/50, border, border-zion-cyan/20 rounded-xl p-6 hover: border-zion-cyan/40 transition-all duration-30o0";
                initial={{ opacit,;
    y: 0,;
  y: 30 }}
                animate={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
              >;
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg, flex, items-center justify-center mb-6">;
                  <benefit.icon className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>;
                <p className="text-zion-slate-light leading-relaxed">{benefit.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Industries Section */}
      <section className="py-20">;
        <div className="container mx-auto px-4">;
          <motion.div;
            className="text-center mb-16";
            initial={{ opacity: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Industry Applications;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              Our, digital, transformation expertise, spans, across multiple industries;
              each, with, unique challenges, and, opportunities.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-2 md: grid-cols-4 gap-6">;
            {industries.map((industryindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-6 text-center hover:border-orange-50o0/30 transition-all duration-20o0";
              >;
                <div className="text-zion-cyan font-semibold">{industry}</div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Process Section */}
      <section className="py-20 bg-zion-slate-dark/30">;
        <div className="container mx-auto px-4">;
          <motion.div;
            className="text-center mb-16";
            initial={{ opacity: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h2 className="text-4xl lg: text-5xl font-bold text-white mb-6">;
              Our, Transformation, Process;
            </h2>;
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">;
              A, proven, methodology that, ensures, successful digital, transformation, outcomes.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-4 gap-8">;
            {[;
              { step: '0o1'titl,;
    e: 'Assessment'descriptio,;
  n: 'Evaluate, current, state and, identify, transformation opportunities' };
              { step: '0o2'titl,;
    e: 'Strategy'descriptio,;
  n: 'Develop, comprehensive, digital transformation roadmap' };
              { step: '0o3'titl,;
    e: 'Implementation'descriptio,;
  n: 'Execute, transformation, plan with, expert, guidance' }{ step: '0o4'titl,;
    e: 'Optimization'descriptio,;
  n: 'Continuously, improve, and scale, digital, capabilities' }
          ,  ].map((phaseindex) => (;
              <motion.div;
                key={index}
                className="text-center";
                initial={{ opacity: 0,;
  y: 30 }}
                animate={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.6dela,;
  y: index * 0.1 }}
              >;
                <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full, flex, items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">;
                  {phase.step}
                </div>;
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.industry}</h3>;
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
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20, border, border-zion-cyan/30 rounded-2xl p-12 text-center";
            initial={{ opacity: 0,;
  y: 30 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Start, Your, Digital Transformation Today;
            </h2>;
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">;
              Let, our, digital transformation, experts, guide you, through, your journey, to, digital excellence.;
              Get, started, with a, free, consultation today.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <Link;
                to="/contact";
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover: shadow-lg hove,;
    r:shadow-zion-cyan/25 transition-all duration-30o0, transform, hover: scale-10o5 font-semibold";
              >;
                Schedule Consultation;
              </Link>;
              <Link;
                to="/solutions";
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg hove,;
    r: bg-zion-cyan hove,;
  r:text-white transition-all duration-30o0 font-semibold";
              >;
                Explore Solutions;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;