import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, 
  Clock, ChevronDown, ChevronUp,
  MessageCircle, Calendar, Star,
  Sparkles,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
  hours: 'Mon-Fri: 9AM-6PM EST',
  rating: '4.9/5 (500+ Reviews)'
};

const quickActions = [
  { name: 'Get Quote', href: '/contact', icon: <MessageCircle className="w-4 h-4" /> },
  { name: 'Book Demo', href: '/contact', icon: <Calendar className="w-4 h-4" /> },
  { name: 'Q4 2025 Services', href: '/q4-2025-innovative-services-showcase', icon: <Star className="w-4 h-4" /> },
  { name: 'Live Chat', href: '/support', icon: <MessageCircle className="w-4 h-4" /> }
];

export default function TopContactBar() {
  const [isExpanded, setIsExpanded] = useState(false);

const TopContactBar: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">TopContactBar</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default TopContactBar;
