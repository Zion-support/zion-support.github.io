import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const InnovativeServicesShowcase2027 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-20"
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Innovative Services 2027
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Cutting-edge solutions for the future of business
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default InnovativeServicesShowcase2027;