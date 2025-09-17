import { useState } from 'react';
import { Header } from '@/components/Header';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { logInfo, logWarn, logErrorToProduction } from '@/utils/productionLogger';
// Tooltip components temporarily removed due to missing module path
import z from 'zod';
import { ChatAssistant } from '@/components/ChatAssistant';
import { Mail, MessageSquare, MapPin, Phone } from 'lucide-react'
import Link from 'next/link';

export default function Contact() {
  const { showToast: toast } = useToast();
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-white mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Contact Us
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
              <motion.div
          <motion.div
            className="bg-gradient-to-r from-red-900/30 to-orange-900/30 backdrop-blur-sm rounded-2xl p-8 border border-red-700/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Emergency Support
            </a>
          </motion.div>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• AI-powered automation</li>
              <li>• Quantum computing breakthroughs</li>
              <li>• Neural interface technology</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 rounded-xl p-6 backdrop-blur-sm border border-purple-400/20">
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Innovation Hub</h3>
            <p className="text-gray-300 mb-4">
              Discover the latest developments in technology and innovation
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Research and development</li>
              <li>• Industry partnerships</li>
              <li>• Future technology trends</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-green-800/50 to-teal-800/50 rounded-xl p-6 backdrop-blur-sm border border-green-400/20">
            <h3 className="text-2xl font-bold mb-4 text-green-300">Solutions</h3>
            <p className="text-gray-300 mb-4">
              Comprehensive technology solutions for modern challenges
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Enterprise solutions</li>
              <li>• Custom development</li>
              <li>• Technology consulting</li>
            </ul>
          </motion.div>
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
