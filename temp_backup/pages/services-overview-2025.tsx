<<<<<<< HEAD
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Mail, MapPin, 
  Rocket, Brain, Atom, Shield, Award, Zap, Cloud, Target, Search,
  Filter, Grid, List, DollarSign, Users, Clock, Eye, Heart,
  Globe, BarChart3, Cpu, Database, Network, Lock, Sparkles
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { comprehensiveRealServices2025 } from '../data/2025-comprehensive-real-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

const services-overview-2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>services-overview-2025 | Zion Tech Group</title>
        <meta name="description" content="services-overview-2025 - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">services-overview-2025</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
};

export default services-overview-2025;
