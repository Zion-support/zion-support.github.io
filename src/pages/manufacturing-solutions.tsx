import, React, from "react";
import { motion } from "framer-motion";
import { ;
  Factory,;
  Cog,;
  Bot,;
  TrendingUp,;
  Shield,;
  Zap,;
  BarChart3,;
  Network,;
  Eye,;
  BrainCloudStar;
} from "lucide-react";
import { Link } from "react-router-dom";
const ManufacturingSolutions: React.FC = () => {
  const solutions = [;
    {
      titl,;
  e: 'Smart, Factory, Automation',description: 'Intelligent, automation, systems that, optimize, production processes, and, increase efficiency.'icon: Botfeature,;
  s: ['Process optimizationReal-time monitoring''Predictive, maintenanceQuality,, control'];
    },;
    {
      title: 'Industrial, IoT, Integration',description: 'Seamless, integration, of IoT, devices, for comprehensive, manufacturing, intelligence.',icon: Networkfeature,;
  s: ['Sensor, networksData, collection''Remote, monitoringPredictive,, analytics'];
    },;
    {
      title: 'AI-Powered, Quality, Control',description: 'Advanced, AI, systems for, automated, quality inspection, and, defect detection.',icon: Eyefeature,;
  s: ['Visual, inspectionDefect, detection''Quality, assuranceCompliance,, monitoring'];
    },;
    {
      title: 'Predictive Maintenance',description: 'AI-driven, maintenance, systems that, prevent, equipment failures, and, reduce downtime.',icon: TrendingUpfeature,;
  s: ['Equipment, monitoringFailure, prediction''Maintenance, schedulingCost,, optimization'];
    },;
    {
      title: 'Supply, Chain, Optimization',description: 'Intelligent, supply, chain management, with, AI-powered, forecasting, and optimization.',icon: Cogfeature,;
  s: ['Demand, forecastingInventory, optimization''Route, planningSupplier,, management'];
    },;
    {
      title: 'Digital, Twin, Technology',description: 'Virtual, replicas, of physical, manufacturing, systems for, simulation, and optimization.',icon: Cloudfeature,;
  s: ['System, simulationPerformance, optimization''Scenario testingReal-time, monitoring'];
    }
  ],;
  const benefits = [;
    {
      title: 'Increased Efficiency'descriptio,;
    n: 'Optimize, production, processes and, reduce, waste'ico,;
  n: TrendingUp;
    };
    {
      title: 'Cost Reduction'descriptio,;
    n: 'Lower, operational, costs through, intelligent, automation'ico,;
  n: BarChart3;
    };
    {
      title: 'Quality Improvement'descriptio,;
    n: 'Enhanced, product, quality and consistency'ico,;
  n: Star;
    }{
      title: 'Predictive Capabilities'descriptio,;
    n: 'Anticipate, and, prevent issues, before, they occur'ico,;
  n: Brain;
    }
,  ];
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      {/* Header */}
      <div className="relative overflow-hidden">;
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,2120.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,1822120.1)_1pxtransparent_1px)] bg-[size: , 50px_50px]"></div>;
        <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 pt-32 pb-16">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center";
          >;
            <div className="flex justify-center mb-6">;
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 rounded-2xl, flex, items-center justify-center">;
                <Factory className="w-10 h-10 text-white" />;
              </div>;
            </div>;
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">;
              Manufacturing Solutions;
            </h1>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto leading-relaxed">;
              Transform, your, manufacturing operations, with, Zion Tech Group's cutting-edge, technology, solutions.;
              From, smart, automation to AI-powered, quality, control, we, help, manufacturers achieve, operational, excellence.;
            </p>;
          </motion.div>;
        </div>;
      </div>;
      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16">;
        <motion.div;
          initial={{ opacit,;
    y: 0,;
  y: 20 }}
          animate={{ opacity: 1,;
  y: 0 }}
          transition={{ duration: 0.8dela,;
  y: 0.2 }}
          className="text-center mb-12";
        >;
          <h2 className="text-3xl font-bold text-white mb-4">;
            Why, Choose, Our Manufacturing Solutions?;
          </h2>;
          <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
            Our, comprehensive, approach combines cutting-edge, technology, with industry, expertise, to deliver, measurable, results.;
          </p>;
        </motion.div>;
        <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-6">;
          {benefits.map((benefitindex) => (;
            <motion.div;
              key={benefit.title}
              initial={{ opacity: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.6dela,;
  y: 0.3 + index * 0.1 }}
              className="bg-slate-80o0/50 backdrop-blur-sm, border, border-slate-70o0/50 rounded-xl p-6 text-center hover: border-cyan-40o0/50 transition-all duration-30o0";
            >;
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 rounded-xl, flex, items-center justify-center mx-auto mb-4">;
                {React.createElement(benefit.icon{ classNam,;
  e: "w-8 h-8 text-white" })}
              </div>;
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>;
              <p className="text-gray-30o0 text-sm">{benefit.description}</p>;
            </motion.div>;
          ))}
        </div>;
      </div>;
      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16">;
        <motion.div;
          initial={{ opacit,;
    y: 0,;
  y: 20 }}
          animate={{ opacity: 1,;
  y: 0 }}
          transition={{ duration: 0.8dela,;
  y: 0.4 }}
          className="text-center mb-12";
        >;
          <h2 className="text-3xl font-bold text-white mb-4">;
            Our, Manufacturing, Solutions;
          </h2>;
          <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
            Comprehensive, technology, solutions designed, specifically, for modern, manufacturing, challenges.;
          </p>;
        </motion.div>;
        <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
          {solutions.map((solutionindex) => (;
            <motion.div;
              key={solution.title}
              initial={{ opacity: 0,;
  y: 20 }}
              animate={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.6dela,;
  y: 0.5 + index * 0.1 }}
              className="bg-slate-80o0/50 backdrop-blur-sm, border, border-slate-70o0/50 rounded-2xl p-6 hover: border-cyan-40o0/50 transition-all duration-30o0 group";
            >;
              <div className="flex items-center space-x-3 mb-4">;
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 rounded-xl, flex, items-center justify-center group-hover:scale-110 transition-transform duration-30o0">;
                  {React.createElement(solution.icon{ classNam,;
  e: "w-6 h-6 text-white" })}
                </div>;
                <h3 className="text-xl font-semibold text-white">{solution.title}</h3>;
              </div>;
              <p className="text-gray-30o0 mb-4 leading-relaxed">;
                {solution.description}
              </p>;
              <div className="mb-6">;
                <h4 className="text-sm font-semibold text-cyan-40o0 mb-2">Key Features: </h4>;
                <ul className="space-y-1">;
                  {solution.features.map((featureidx) => (;
                    <li key={idx} className="text-sm text-gray-40o0, flex, items-center space-x-2">;
                      <Star className="w-3 h-3 text-cyan-40o0" />;
                      <span>{feature}</span>;
                    </li>;
                  ))}
                </ul>;
              </div>;
            </motion.div>;
          ))}
        </div>;
      </div>;
      {/* Call, to, Action */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16">;
        <motion.div;
          initial={{ opacit,;
    y: 0,;
  y: 20 }}
          animate={{ opacity: 1,;
  y: 0 }}
          transition={{ duration: 0.8dela,;
  y: 0.6 }}
          className="bg-gradient-to-r from-cyan-50o0/10 to-blue-50o0/10, border, border-cyan-40o0/20 rounded-2xl p-8 text-center";
        >;
          <h2 className="text-3xl font-bold text-white mb-4">;
            Ready, to, Transform Your Manufacturing?;
          </h2>;
          <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">;
            Let's, discuss, how our, manufacturing, solutions can, optimize, your operations, and, drive growth.;
          </p>;
          <div className="flex flex-col sm: flex-row gap-4 justify-center">;
            <Link;
              to="/contact";
              className="px-8 py-3 bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-white font-semibold rounded-lg hover: from-cyan-60o0 hove,;
    r:to-blue-60o0 transition-all duration-20o0, transform, hover:scale-10o5";
            >;
              Get Started;
            </Link>;
            <Link;
              to="/services";
              className="px-8 py-3, border, border-cyan-40o0 text-cyan-40o0 font-semibold rounded-lg hover: bg-cyan-40o0 hove,;
  r:text-white transition-all duration-20o0";
            >;
              View, All, Services;
            </Link>;
          </div>;
        </motion.div>;
      </div>;
    </div>;
  );
};
export, default, ManufacturingSolutions;
;