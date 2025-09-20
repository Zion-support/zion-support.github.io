import React from "react"
import { motion } from "framer-motion"
import { ;
  Factory,;
  Cog, ;
  Bot, ;
  TrendingUp, ;
  Shield, ;
  Zap,;
  BarChart3,;
  Network,;
  Eye,;
  Brain,;
  Cloud,;
  Star;
} from "lucide-react"
import { Link } from "react-router-dom"
const ManufacturingSolutions: React.FC = () => {
  const solutions = [;
    {;
      title: 'Smart Factory Automation',description: 'Intelligent automation systems that optimize production processes and increase efficiency.',icon: Bot,features: ['Process optimizationReal-time monitoring', 'Predictive maintenanceQuality control']
    },;
    {;
      title: 'Industrial IoT Integration',description: 'Seamless integration of IoT devices for comprehensive manufacturing intelligence.',icon: Network,features: ['Sensor networksData collection', 'Remote monitoringPredictive analytics']
    },;
    {;
      title: 'AI-Powered Quality Control',description: 'Advanced AI systems for automated quality inspection and defect detection.',icon: Eye,features: ['Visual inspectionDefect detection', 'Quality assuranceCompliance monitoring']
    },;
    {;
      title: 'Predictive Maintenance',description: 'AI-driven maintenance systems that prevent equipment failures and reduce downtime.',icon: TrendingUp,features: ['Equipment monitoringFailure prediction', 'Maintenance schedulingCost optimization']
    },;
    {;
      title: 'Supply Chain Optimization',description: 'Intelligent supply chain management with AI-powered forecasting and optimization.',icon: Cog,features: ['Demand forecastingInventory optimization', 'Route planningSupplier management']
    },;
    {;
      title: 'Digital Twin Technology',description: 'Virtual replicas of physical manufacturing systems for simulation and optimization.',icon: Cloud,features: ['System simulationPerformance optimization', 'Scenario testingReal-time monitoring']
    };
  ],;

  const benefits = [;
    {;
      title: 'Increased Efficiency',description: 'Optimize production processes and reduce waste',icon: TrendingUp;
    };
    {;
      title: 'Cost Reduction',description: 'Lower operational costs through intelligent automation',icon: BarChart3;
    };
    {;
      title: 'Quality Improvement',description: 'Enhanced product quality and consistency',icon: Star;
    };
    {;
      title: 'Predictive Capabilities',description: 'Anticipate and prevent issues before they occur',icon: Brain;
    };
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      {/* Header */};
      <div className="relative overflow-hidden">;
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></[^>]*>
        ;
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <div className="flex justify-center mb-6">;
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">;
                <[^>]*/>
              </[^>]*>
            </[^>]*>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              Manufacturing Solutions;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">;
              Transform your manufacturing operations with Zion Tech Group's cutting-edge technology solutions. ;
              From smart automation to AI-powered quality control, we help manufacturers achieve operational excellence.;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Benefits Section */};
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
        <motion.div
          initial={{ opacity: 0, y: 20 }};
          animate={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.8, delay: 0.2 }};
          className="[^"]*"
        >;
          <h2 className="text-3xl font-bold text-white mb-4">;
            Why Choose Our Manufacturing Solutions?;
          </[^>]*>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
            Our comprehensive approach combines cutting-edge technology with industry expertise to deliver measurable results.;
          </[^>]*>
        </[^>]*>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
          {benefits.map((benefit, index) => (;
            <motion.div
              key={benefit.title};
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }};
              className="[^"]*"
            >;
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">;
                {React.createElement(benefit.icon, { className: "w-8 h-8 text-white" })};
              </[^>]*>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</[^>]*>
              <p className="text-gray-300 text-sm">{benefit.description}</[^>]*>
            </[^>]*>
          ))};
        </[^>]*>
      </[^>]*>

      {/* Solutions Grid */};
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
        <motion.div
          initial={{ opacity: 0, y: 20 }};
          animate={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.8, delay: 0.4 }};
          className="[^"]*"
        >;
          <h2 className="text-3xl font-bold text-white mb-4">;
            Our Manufacturing Solutions;
          </[^>]*>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
            Comprehensive technology solutions designed specifically for modern manufacturing challenges.;
          </[^>]*>
        </[^>]*>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          {solutions.map((solution, index) => (;
            <motion.div
              key={solution.title};
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }};
              className="[^"]*"
            >;
              <div className="flex items-center space-x-3 mb-4">;
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">;
                  {React.createElement(solution.icon, { className: "w-6 h-6 text-white" })};
                </[^>]*>
                <h3 className="text-xl font-semibold text-white">{solution.title}</[^>]*>
              </[^>]*>
              ;
              <p className="text-gray-300 mb-4 leading-relaxed">;
                {solution.description};
              </[^>]*>
              ;
              <div className="mb-6">;
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</[^>]*>
                <ul className="space-y-1">;
                  {solution.features.map((feature, idx) => (;
                    <li key={idx} className="text-sm text-gray-400 flex items-center space-x-2">;
                      <[^>]*/>
                      <span>{feature}</[^>]*>
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            </[^>]*>
          ))};
        </[^>]*>
      </[^>]*>

      {/* Call to Action */};
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
        <motion.div
          initial={{ opacity: 0, y: 20 }};
          animate={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.8, delay: 0.6 }};
          className="[^"]*"
        >;
          <h2 className="text-3xl font-bold text-white mb-4">;
            Ready to Transform Your Manufacturing?;
          </[^>]*>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
            Let's discuss how our manufacturing solutions can optimize your operations and drive growth.;
          </[^>]*>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">;
            <Link;
              to="/contact"
              className="[^"]*"
            >;
              Get Started;
            </[^>]*>
            <Link;
              to="/services"
              className="[^"]*"
            >;
              View All Services;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default ManufacturingSolutions;