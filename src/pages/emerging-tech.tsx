import React from "react"
import { motion } from "framer-motion"
import { ;
  Atom,;
  Brain, ;
  Network, ;
  Satellite, ;
  TrendingUp, ;
  Leaf,;
  Zap,;
  Shield,;
  Cloud,;
  Globe,;
  Rocket,;
  Star;
} from "lucide-react"
import { Link } from "react-router-dom"
const EmergingTech: React.FC = () => {
  const technologies = [;
    {;
      title: 'Quantum Computing',description: 'Revolutionary quantum computing solutions for complex problem-solving and optimization.',icon: Atom,path: '/services/quantum-computing',features: ['Quantum algorithmsOptimization problems', 'CryptographyMachine learning']
    },;
    {;
      title: 'IoT Edge Computing',description: 'Next-generation IoT solutions with edge computing capabilities for real-time processing.',icon: Network,path: '/services/iot-edge-computing',features: ['Real-time processingLow latency', 'Edge AISmart sensors']
    },;
    {;
      title: 'AI Quantum Hybrid Platform',description: 'Combining AI and quantum computing for unprecedented computational power.',icon: Brain,path: '/services/ai-quantum-hybrid-platform',features: ['Hybrid algorithmsQuantum ML', 'AI optimizationQuantum AI']
    },;
    {;
      title: 'Space Technology',description: 'Cutting-edge space technology solutions for satellite and aerospace applications.',icon: Satellite,path: '/space-tech',features: ['Satellite systemsAerospace solutions', 'Space dataOrbital mechanics']
    },;
    {;
      title: 'Quantum Machine Learning',description: 'Quantum-enhanced machine learning algorithms for superior pattern recognition.',icon: Atom,path: '/services/quantum-machine-learning',features: ['Quantum neural networksPattern recognition', 'OptimizationQuantum algorithms']
    },;
    {;
      title: 'AI Predictive Maintenance',description: 'AI-powered predictive maintenance systems for industrial equipment and machinery.',icon: TrendingUp,path: '/services/ai-predictive-maintenance',features: ['Equipment monitoringPredictive analytics', 'Maintenance schedulingCost optimization']
    },;
    {;
      title: 'Sustainable Technology',description: 'Green technology solutions for environmental sustainability and energy efficiency.',icon: Leaf,path: '/services/sustainable-technology',features: ['Energy efficiencyGreen computing', 'Carbon reductionSustainable AI']
    };
  ],;

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
              Emerging Technologies;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">;
              Discover the future of technology with Zion Tech Group's cutting-edge emerging technology solutions. ;
              From quantum computing to sustainable AI, we're pushing the boundaries of what's possible.;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Technologies Grid */};
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          {technologies.map((tech, index) => (;
            <motion.div
              key={tech.title};
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: index * 0.1 }};
              className="[^"]*"
            >;
              <div className="flex items-center space-x-3 mb-4">;
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white">{tech.title}</[^>]*>
              </[^>]*>
              ;
              <p className="text-gray-300 mb-4 leading-relaxed">;
                {tech.description};
              </[^>]*>
              ;
              <div className="mb-6">;
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</[^>]*>
                <ul className="space-y-1">;
                  {tech.features.map((feature, idx) => (;
                    <li key={idx} className="text-sm text-gray-400 flex items-center space-x-2">;
                      <[^>]*/>
                      <span>{feature}</[^>]*>
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
              ;
              <Link;
                to={tech.path};
                className="[^"]*"
              >;
                <span className="font-medium">Learn More</[^>]*>
                <[^>]*/>
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
          transition={{ duration: 0.8, delay: 0.5 }};
          className="[^"]*"
        >;
          <h2 className="text-3xl font-bold text-white mb-4">;
            Ready to Explore the Future?;
          </[^>]*>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
            Let's discuss how these emerging technologies can transform your business and give you a competitive edge.;
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
export default EmergingTech;