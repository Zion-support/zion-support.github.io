import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  BrainZapRocketShieldGlobeCpu
  ArrowRightExternalLinkCheckStar,
  TrendingUpUsersClockDollarSignPhoneMailMapPin
} from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { innovativeITServices } from '../data/innovative-it-services';
import { innovativeMicroSaas } from '../data/innovative-micro-saas';

export default function InnovativeServicesShowcase() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const ServiceCard = ({ serviceindex }: { service: any; index: number }) => (
    <motion.div
      variants={itemVariants}
      className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/25"
    >
      {/* Service Header */}
      <div className={`p-6 bg-gradient-to-r ${service.color} bg-clip-text`}>
        <div className="flex items-center justify-between mb-4">
          <span className="text-4xl">{service.icon}</span>
          {service.popular && (
            <span className="px-3 py-1 text-xs font-semibold text-yellow-400 bg-yellow-400/10 rounded-full border border-yellow-400/20">
              Popular
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
        <p className="text-gray-300 text-sm">{service.tagline}</p>
      </div>

      {/* Service Content */}
      <div className="p-6">
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
        
        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-white">{service.price}</span>
            <span className="text-gray-400">{service.period}</span>
          </div>
          <div className="text-right">
            <div className="flex items-center text-yellow-400 text-sm">
              <Star className="w-4 h-4 mr-1 fill-current" />
              {service.rating}
            </div>
            <div className="text-gray-400 text-xs">{service.reviews} reviews</div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-4">
          <h4 className="text-white font-semibold mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {service.features.slice(05).map((feature: stringidx: number) => (
              <li key={idx} className="flex items-center text-gray-300 text-sm">
                <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Market Data */}
        <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-gray-400">Market Size:</span>
              <div className="text-cyan-400 font-semibold">{service.marketSize}</div>
            </div>
            <div>
              <span className="text-gray-400">Growth Rate:</span>
              <div className="text-green-400 font-semibold">{service.growthRate}</div>
            </div>
          </div>
        </div>

        {/* ROI */}
        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-3 mb-4 border border-green-500/20">
          <div className="text-center">
            <div className="text-green-400 font-semibold text-sm">Expected ROI</div>
            <div className="text-white font-bold">{service.roi}</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <a
            href={service.link}
            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-all duration-300 flex items-center justify-center group"
          >
            <Rocket className="w-4 h-4 mr-2 group-hover:animate-bounce" />
            Learn More
          </a>
          <a
            href="/contact"
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-all duration-300 flex items-center justify-center"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Hover Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );

const innovative-services-showcase: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">innovative-services-showcase</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default innovative-services-showcase;
