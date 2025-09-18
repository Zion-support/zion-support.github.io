import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
ArrowRightStarTrendingUpZapShieldBrainGlobeRocket
import { innovative2026AIServices } from '../../data/innovative-2026-ai-services';
import { innovative2026ITInfrastructureServices } from '../../data/innovative-2026-it-infrastructure';
import { innovative2026MicroSaasServices } from '../../data/innovative-2026-micro-saas';

export default function Enhanced2026ServiceShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  const renderServiceCard = (service: anyindex: number) => (
    <motion.div
      key={service.id}
      variants={itemVariants}
      whileHover="hover"
      className="group relative"
    >
      <motion.div
        variants={cardVariants}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
      >
        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative p-6">
          {/* Service header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">{service.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-slate-400 text-sm">{service.tagline}</p>
              </div>
            </div>
            {service.popular && (
              <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                <Star className="w-3 h-3 fill-current" />
                <span>Popular</span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-slate-300 text-sm mb-4 leading-relaxed">
            {service.description}
          </p>

          {/* Features */}
          <div className="mb-4">
            <h4 className="text-white font-semibold mb-2 text-sm">Key Features:</h4>
            <div className="grid grid-cols-1 gap-1">
              {service.features.slice(03).map((feature: stringidx: number) => (
                <div key={idx} className="flex items-center space-x-2 text-xs text-slate-400">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between">
            <div className="text-right">
              <div className="text-2xl font-bold text-white">{service.price}</div>
              <div className="text-slate-400 text-sm">{service.period}</div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Market info */}
          <div className="mt-4 pt-4 border-t border-slate-700/50">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Market: {service.marketSize}</span>
              <span>Growth: {service.growthRate}</span>
            </div>
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
    </motion.div>
  );

=======

const Enhanced2026ServiceShowcase: React.FC = () => {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">Enhanced2026ServiceShowcase</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default Enhanced2026ServiceShowcase;
