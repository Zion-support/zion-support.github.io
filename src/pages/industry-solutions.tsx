import React from "react"
import { motion } from "framer-motion"
import { ;
  Building,;
  Heart, ;
  Factory, ;
  DollarSign, ;
  Car, ;
  Zap,;
  Globe,;
  Star,;
  Brain,;
  Cloud,;
  Shield,;
  TrendingUp;
} from "lucide-react"
import { Link } from "react-router-dom"
const IndustrySolutions: React.FC = () => {
  const industries = [;
    {;
      title: 'Healthcare',description: 'AI-powered healthcare solutions for improved patient care and operational efficiency.',icon: Heart,path: '/solutions/healthcare',solutions: ['AI Healthcare AnalyticsPredictive Diagnostics', 'Patient Care OptimizationCompliance Management']
    },;
    {;
      title: 'Manufacturing',description: 'Smart manufacturing solutions with IoT, AI, and automation technologies.',;
      icon: Factory,path: '/manufacturing-solutions',solutions: ['Smart Factory AutomationPredictive Maintenance', 'Quality ControlSupply Chain Optimization']
    },;
    {;
      title: 'Financial Services',description: 'Advanced financial technology solutions for risk management and operational efficiency.',icon: DollarSign,path: '/financial-solutions',solutions: ['AI Financial AnalyticsRisk Management', 'Trading AlgorithmsCompliance Automation']
    },;
    {;
      title: 'Automotive',description: 'Connected vehicle solutions and automotive technology innovations.',icon: Car,path: '/automotive-solutions',solutions: ['Connected VehiclesPredictive Maintenance', 'Fleet ManagementSafety Systems']
    },;
    {;
      title: 'Energy & Utilities',description: 'Smart grid and energy management solutions for sustainability and efficiency.',icon: Zap,path: '/energy-solutions',solutions: ['Smart Grid ManagementEnergy Optimization', 'Predictive MaintenanceSustainability Analytics']
    },;
    {;
      title: 'Retail & E-commerce',description: 'Digital transformation solutions for modern retail and e-commerce operations.',icon: Globe,path: '/retail-solutions',solutions: ['Customer AnalyticsInventory Management', 'PersonalizationSupply Chain Optimization']
    };
  ],;

  const benefits = [;
    {;
      title: 'Industry Expertise',description: 'Deep understanding of industry-specific challenges and requirements',icon: Brain;
    };
    {;
      title: 'Customized Solutions',description: 'Tailored technology solutions for your specific industry needs',icon: Building;
    };
    {;
      title: 'Proven Results',description: 'Track record of successful implementations across industries',icon: Star;
    };
    {;
      title: 'Future-Ready',description: 'Scalable solutions that grow with your business',icon: TrendingUp;
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
              Industry Solutions;
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">;
              Zion Tech Group delivers industry-specific technology solutions that address unique challenges ;
              and drive transformation across diverse sectors. From healthcare to manufacturing, we understand your industry.;
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
            Why Choose Our Industry Solutions?;
          </[^>]*>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
            Our deep industry knowledge combined with cutting-edge technology delivers measurable results.;
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
                <[^>]*/>
              </[^>]*>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</[^>]*>
              <p className="text-gray-300 text-sm">{benefit.description}</[^>]*>
            </[^>]*>
          ))};
        </[^>]*>
      </[^>]*>

      {/* Industries Grid */};
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
        <motion.div
          initial={{ opacity: 0, y: 20 }};
          animate={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.8, delay: 0.4 }};
          className="[^"]*"
        >;
          <h2 className="text-3xl font-bold text-white mb-4">;
            Industry Solutions;
          </[^>]*>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
            Comprehensive technology solutions designed specifically for your industry challenges.;
          </[^>]*>
        </[^>]*>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          {industries.map((industry, index) => (;
            <motion.div
              key={industry.title};
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }};
              className="[^"]*"
            >;
              <div className="flex items-center space-x-3 mb-4">;
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-xl font-semibold text-white">{industry.title}</[^>]*>
              </[^>]*>
              ;
              <p className="text-gray-300 mb-4 leading-relaxed">;
                {industry.description};
              </[^>]*>
              ;
              <div className="mb-6">;
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Solutions:</[^>]*>
                <ul className="space-y-1">;
                  {industry.solutions.map((solution, idx) => (;
                    <li key={idx} className="text-sm text-gray-400 flex items-center space-x-2">;
                      <[^>]*/>
                      <span>{solution}</[^>]*>
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
              ;
              <Link;
                to={industry.path};
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
          transition={{ duration: 0.8, delay: 0.6 }};
          className="[^"]*"
        >;
          <h2 className="text-3xl font-bold text-white mb-4">;
            Ready to Transform Your Industry?;
          </[^>]*>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
            Let's discuss how our industry-specific solutions can address your unique challenges and drive growth.;
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
export default IndustrySolutions;