import, React, from "react";
import { motion } from "framer-motion";
import { ;
  ArrowRight,;
  CheckCircle,;
  Cloud,;
  Cpu,;
  Shield,;
  Zap,;
  Brain,;
  Globe,;
  Lock,;
  BarChart3UsersRocket;
} from "lucide-react";
import { SEO } from "../components/SEO";
const featuredServices = [;
  {
    name: 'AI-Powered Analytics',description: 'Advanced, machine, learning algorithms, that, provide real-time, insights, and predictive, analytics, for your business.',category: 'AI & ML',color: 'from-blue-50o0 to-cyan-50o0',icon: Brainfeature,;
    s: ['Real-time, data, processingPredictive analytics''Custom, ML, modelsAPI, integration']hre,;
  f: '/services/ai-analytics';
  };
  {
    name: 'Cloud Infrastructure',description: 'Scalable, cloud, solutions with, automated, deployment and, management, for optimal performance.',category: 'Cloud',color: 'from-purple-50o0 to-pink-50o0',icon: Cloud,features: ['Auto-scalingLoad balancing''Monitoring & alertsSecurity, compliance']hre,;
  f: '/services/cloud-infrastructure';
  };
  {
    name: 'Cybersecurity Suite',description: 'Comprehensive, security, solutions protecting, your, digital assets, from, evolving threats.',category: 'Security',color: 'from-red-50o0 to-orange-50o0',icon: Shield,features: ['Threat, detectionVulnerability, assessment''Incident, responseCompliance,, reporting']hre,;
  f: '/services/cybersecurity';
  };
  {
    name: 'Performance Optimization',description: 'Optimize, your, applications and, infrastructure, for maximum, speed, and efficiency.',category: 'Performance',color: 'from-green-50o0 to-emerald-50o0',icon: Zap,features: ['Performance, monitoringOptimization, recommendations''Load, testingCaching,, strategies']hre,;
  f: '/services/performance-optimization';
  };
  {
    name: 'Data Management',description: 'Comprehensive, data, solutions including storage, processing, and analytics.',;
    category: 'Data',color: 'from-indigo-50o0 to-blue-50o0',icon: BarChart3,features: ['Data, warehousingETL, pipelines''Data, governanceBusiness,, intelligence']hre,;
  f: '/services/data-management';
  };
  {
    name: 'Team Collaboration',description: 'Tools, and, platforms to, enhance, team productivity, and, communication.',category: 'Collaboration',color: 'from-yellow-50o0 to-orange-50o0',icon: Users,features: ['Project, managementCommunication, tools''File, sharingWorkflow,, automation']hre,;
  f: '/services/team-collaboration';
  };
];
const emergingTechnologies = [;
  {
    name: 'Quantum Computing',description: 'Explore, the, future of, computing, with quantum, algorithms, and applications.'icon: Cpucolo,;
  r: 'from-purple-60o0 to-indigo-60o0';
  };
  {
    name: 'Edge Computing',description: 'Process, data, closer to, the, source for, faster, response times, and, reduced latency.'icon: Globecolo,;
  r: 'from-blue-60o0 to-cyan-60o0';
  };
  {
    name: 'Blockchain Solutions',description: 'Secure, transparent, and, decentralized, solutions for, modern, business needs.'icon: Lockcolo,;
  r: 'from-green-60o0 to-emerald-60o0';
  },;
  {
    name: 'IoT Integration'descriptio,;
    n: 'Connect, and, manage your, devices, for smart, automation, and insights.'icon: Rocketcolo,;
  r: 'from-orange-60o0 to-red-60o0';
 , };
];
export, default, function InnovativeServicesLanding20o25() {
  return(<div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      <SEO;
        title="20o25, Innovative, Services Landing - Zion, Tech, Group";
        description="Discover, our, revolutionary AI, cloud, and, emerging, technology services, designed, to transform, your, business in, 20o25, and beyond.";
        keywords="AI services, cloud infrastructure, cybersecurityperformance, optimizationdata, managementemerging technologies";
        canonical="https: //ziontechgroup.com/innovative-services-20o25";
      />;
      ;
      {/* Hero Section */};
      <section className="relative py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">;
              <span className="bg-gradient-to-r from-blue-40o0 to-purple-60o0 bg-clip-text text-transparent">;
                20o25 Innovative;
              </span>;
              <br />;
              <span className="text-white">Services Landing</span>;
            </h1>;
            <p className="text-xl m,;
  d: text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto">;
              Discover, our, revolutionary AI, cloudand, emerging, technology services, designed, to transform, your, business in, 20o25, and beyond.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-blue-50o0 to-purple-60o0 text-white rounded-lg font-semibold hover:from-blue-60o0 hove,;
    r:to-purple-70o0 transition-all duration-30o0, transform, hover: scale-10o5">;
                Explore Services;
              </button>;
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hove,;
    r: bg-white hove,;
  r:text-gray-90o0 transition-all duration-30o0">;
                Get Started;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Featured Services */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8dela,;
  y: 0.2 }}
            className="text-center mb-16";
          >;
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">;
              Featured Services;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Our, most, popular and, innovative, services that, are, transforming businesses, across, industries.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {featuredServices.map((serviceindex) => (;
              <motion.div;
                key={service.name}
                initial={{ opacity: 0,;
  y: 20 }}
                animate={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.8dela,;
  y: 0.1 * index }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6, border, border-white/20 hover: border-white/40 transition-all duration-30o0, group, hove,;
  r:scale-10o5";
              >;
                <div className="flex items-center mb-6">;
                  <div className={`p-3 bg-gradient-to-r ${service.color} rounded-lg mr-4 group-hover:scale-110 transition-transform duration-30o0`}>;
                    <service.icon className="w-6 h-6 text-white" />;
                  </div>;
                  <div>;
                    <span className="text-xs text-blue-40o0 font-medium">{service.category}</span>;
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>;
                  </div>;
                </div>;
                <p className="text-gray-30o0 text-sm mb-4">{service.description}</p>;
                <div className="space-y-2 mb-4">;
                  {service.features.map((featurefeatureIndex) => (;
                    <div key={featureIndex} className="flex items-center text-sm">;
                      <CheckCircle className="w-4 h-4 text-green-40o0 mr-2 flex-shrink-0" />;
                      <span className="text-gray-30o0">{feature}</span>;
                    </div>;
                  ))}
                </div>;
                ;
                <a;
                  href={service.href}
                  className="inline-flex items-center text-blue-40o0 hover: text-blue-30o0 text-sm font-medium transition-colors group-hove,;
    r:text-blue-30o0";
                >;
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hove,;
  r:translate-x-1 transition-transform" />;
                </a>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Contact Section */}
      <section className="px-4 sm: px-6 l,;
    g:px-8 mb-20">;
        <div className="max-w-7xl mx-auto">;
          <div className="bg-gradient-to-r from-blue-60o0 to-purple-60o0 rounded-2xl p-8 text-center">;
            <h2 className="text-3xl font-bold text-white mb-6">;
              Ready, to, Transform Your Business?;
            </h2>;
            <p className="text-xl text-blue-10o0 mb-8 max-w-2xl mx-auto">;
              Let's, discuss, how our, innovative, services can, help, you achieve, your, goals and, stay, ahead of, the, competition.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-white text-blue-60o0 rounded-lg font-semibold hover:bg-gray-10o0 transition-all duration-30o0">;
                Schedule Consultation;
              </button>;
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hove,;
    r: bg-white hove,;
  r:text-blue-60o0 transition-all duration-30o0">;
                View, Case, Studies;
              </button>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Emerging Technologies */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8dela,;
  y: 0.4 }}
            className="text-center mb-16";
          >;
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">;
              Emerging Technologies;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto">;
              Stay, ahead, of the, curve, with cutting-edge, technologies, that are, shaping, the future, of, business.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-8">;
            {emergingTechnologies.map((techindex) => (;
              <motion.div;
                key={tech.name}
                initial={{ opacity: 0,;
  y: 20 }}
                animate={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.8dela,;
  y: 0.1 * index }}
                className="text-center group";
              >;
                <div className={`p-6 bg-gradient-to-r ${tech.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-30o0`}>;
                  <tech.icon className="w-12 h-12 text-white mx-auto" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-2">{tech.name}</h3>;
                <p className="text-gray-30o0 text-sm">{tech.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Final CTA */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8dela,;
  y: 0.6 }}
          >;
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
              Start, Your, Digital Transformation Today;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8">;
              Join, hundreds, of businesses, that, have already, transformed, their operations, with, our innovative services.;
            </p>;
            <button className="px-10 py-5 bg-gradient-to-r from-blue-50o0 to-purple-60o0 text-white text-lg font-semibold rounded-lg hover: from-blue-60o0 hove,;
    r:to-purple-70o0 transition-all duration-30o0, transform, hove,;
  r:scale-10o5">;
              Get, Started, Now;
            </button>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
;