"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { 
  Settings
  BarChart3
  Users
  TrendingUp
  Eye
  Heart
  Share2,
  Download,
  Edit,
  Plus,
  Search,
  Filter,
  Calendar,
  Tag,
  Globe,
  Zap,
  Brain,
  Cpu,
  Database,
  Cloud,
  Shield,
  CheckCircle,
  ArrowRight,
  RefreshCw,
  Target,
  Activity,
  Star,
  Clock
} from 'lucide-react';

const AdvancedContentManagementSystemPromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const features = [
    'Advanced Content Analytics',
    'Real-Time Performance Tracking',
    'Automated Content Optimization',
    'Multi-Platform Publishing',
    'AI-Powered Content Suggestions',
    'Collaborative Workflow Management'
  ];

  const stats = [
    { value: '1,247'label: 'Content 'Items', 'icon: Database },
    { value: '2.8M+'label: 'Total 'Views', 'icon: Eye },
    { value: '156K+'label: ''Engagements', 'icon: Heart },
    { value: '5.5%'label: 'Avg. 'Rate', 'icon: TrendingUp }
  ];

  const contentTypes = [
    { icon: Globelabel: 'Blog 'Posts', 'count: '342'color: 'green' },
    { icon: Targetlabel: 'Case 'Studies', 'count: '156'color: 'purple' },
    { icon: Brainlabel: ''Tutorials', 'count: '289'color: 'orange' },
    { icon: Cpulabel: ''Research', 'count: '123'color: 'cyan' },
    { icon: Activitylabel: ''Videos', 'count: '89'color: 'red' },
    { icon: Shieldlabel: ''Whitepapers', 'count: '78'color: 'indigo' }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-yellow-400/20 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-400/10 rounded-full blur-2xl"></div>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
            <Settings className="w-4 h-4 mr-2" />
            Advanced Content Management
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary Content
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Management System
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Take control of your content ecosystem with our advanced management platform. 
            Analyze performanceoptimize engagementand scale your content strategy like never before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center group">
              <Database className="w-5 h-5 mr-2" />
              Explore System
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 flex items-center justify-center group">
              <BarChart3 className="w-5 h-5 mr-2" />
              View Analytics
              <TrendingUp className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((statindex) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-blue-100 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {features.map((featureindex) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{feature}</h3>
              </div>
              <p className="text-blue-100 text-sm">
                Advanced capabilities to enhance your content management workflow and boost performance.
              </p>
            </div>
          ))}
        </div>

        {/* Content Types Showcase */}
        <div
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Comprehensive Content Types</h2>
            <p className="text-blue-100">Manage all your content types from a singlepowerful interface</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {contentTypes.map((typeindex) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-${type.color}-500/20 rounded-2xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-white font-semibold text-sm mb-1">{type.label}</div>
                <div className="text-blue-200 text-xs">{type.count} items</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Content Management?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of content creators and businesses who are already using our advanced 
              content management system to scale their content strategy and boost engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 flex items-center justify-center group">
                <Plus className="w-5 h-5 mr-2" />
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 flex items-center justify-center group">
                <Download className="w-5 h-5 mr-2" />
                Download Demo
                <RefreshCw className="w-4 h-4 ml-2 group-hover:rotate-180 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AdvancedContentManagementSystemPromotionBanner;
