import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Star, Award, TrendingUp, Users } from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const companyStats = [
  { icon: Star, value: '500+', label: 'Services Delivered' },
  { icon: Users, value: '1000+', label: 'Happy Clients' },
  { icon: TrendingUp, value: '99.9%', label: 'Uptime Guarantee' },
  { icon: Award, value: '25+', label: 'Industry Awards' }
];

export default function TopContactBar() {
=======

const TopContactBar: React.FC = () => {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">TopContactBar</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default TopContactBar;
