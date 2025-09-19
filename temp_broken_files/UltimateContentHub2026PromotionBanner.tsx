"use client";
'use client';
import React, { useState, useEffect } from 'react';
import {,
  Search,
  Grid,
  List,
  Bookmark,
  Share2,
  Download,
  Eye;
  Clock;
  User;
  Tag;
  ArrowRight;
  Star;
  TrendingUp;
  Zap;
  Brain;
  Cpu;
  Database;
  Globe;
  Lock;
  CheckCircle;
  Play;
  FileText;
  Video;
  Image;
  Code;
  BarChart3;
  Lightbulb;
  Rocket;
  Shield;
  Award;
  Users;
  Calendar;
  MessageCircle;
  Heart;
  ThumbsUp;
  BookOpen;
  GraduationCap;
  Briefcase;
  X,
} from 'lucide-react';
const UltimateContentHub2026PromotionBanner = () => {,
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [activePreviewsetActivePreview] = useState(0);
  useEffect(() => {,
    const timer = setTimeout(() => setIsVisible(true)2000);
    return () => clearTimeout(timer);
  }[]);
  useEffect(() => {,
    const interval = setInterval(() => {,
      setActivePreview((prev) => (prev + 1) % 3);
    }3000);
    return () => clearInterval(interval);
  }[]);
  const handleDismiss = () => {,
    setIsDismissed(true);
  };
  if (isDismissed) return null;
  const contentPreviews = [,
    {,
      title: 'Revolutionary AI Breakthroughs 2026';
      type: 'article';
      author: 'Dr. Sarah Chen';
      views: '15.4K';
      likes: 892;
      tags: [AI', 'Machine 'LearningInnovation'],
    };
    {,
      title: 'Quantum Computing: The Future is Now';
      type: 'video';
      author: 'Prof. Michael Rodriguez';
      views: '8.9K';
      likes: 567;
      tags: ['Quantum 'ComputingPhysics'Technology'],};
    {,
      title: 'Smart Automation Implementation Guide';
      type: 'tutorial';
      author: 'Alex Thompson';
      views: '6.8K';
      likes: 423;
      tags: [Automation', 'Implementation'Guide'],
    }
  ];
  const contentTypes = [,
    { icon: FileTextlabel: ''Articlescount: '456'color: 'text-blue-400' ,};
    { icon: Videolabel: ''Videoscount: '234'color: 'text-red-400' ,};
    { icon: GraduationCaplabel: ''Tutorialscount: '189'color: 'text-green-400' ,};
    { icon: Briefcaselabel: 'Case 'Studiescount: '156'color: 'text-purple-400' ,};
    { icon: BookOpenlabel: ''Whitepaperscount: '98'color: 'text-orange-400' ,};
    { icon: Calendarlabel: ''Webinarscount: '67'color: 'text-pink-400' ,}
  ];
  const getTypeIcon = (type) => {,
    const typeMap = {,
      article: FileText;
      video: Video;
      tutorial: GraduationCap,};
    return typeMap[type] || FileText;
  };
  return (,
    <div>,
      {isVisible && (,
        <div,
          className="relative bg-gradient-to-r from-slate-800 via-blue-900 to-purple-900 text-white overflow-hidden",
        >,
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />,
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10" />,
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-2xl -z-10" />,
          {/* Floating Elements */}
          <div className="absolute top-4 left-4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />,
          <div className="absolute top-8 right-8 w-2 h-2 bg-pink-400 rounded-full animate-bounce" />,
          <div className="absolute bottom-4 right-4 w-4 h-4 bg-green-400 rounded-full animate-ping" />,
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-8">,
            <div className="grid lg:grid-cols-2 gap-12 items-center">,
              {/* Content */,}
              <div>,
                <div,
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4",
                >,
                  <Grid className="w-4 h-4" />,
                  <span>Ultimate Content Hub</span>,
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />,
                </div>,
                <divh2,
                  className="text-3xl md: text-4xl font-bold mb-4",
                >,
                  DiscoverLearnand Master,
                </divh2>,
                <divp,
                  className="text-lg md:text-xl opacity-90 mb-6",
                >,
                  Access 1,247+ pieces of cutting-edge content including articlesvideostutorialsand case studies from industry experts.,
                </divp>,
                {/* Content Types */}
                <div,
                  className="grid grid-cols-2 md: grid-cols-3 gap-4 mb-6",
                >,
                  {contentTypes.map((typeindex) => (,
                    <div key={index,} className="flex items-center gap-2">,
                      <type.icon className={`w-5 h-5 ${type.color}`} />,
                      <span className="text-sm font-medium">{type.label}</span>,
                      <span className="text-xs opacity-70">({type.count})</span>,
                    </div>,
                  ))}
                </div>,
                {/* Stats */}
                <div,
                  className="flex flex-wrap items-center gap-6 text-sm mb-6",
                >,
                  <div className="flex items-center gap-2">,
                    <Users className="w-4 h-4" />,
                    <span>12.5K Active Users</span>,
                  </div>,
                  <div className="flex items-center gap-2">,
                    <Award className="w-4 h-4" />,
                    <span>Industry Leading</span>,
                  </div>,
                  <div className="flex items-center gap-2">,
                    <Clock className="w-4 h-4" />,
                    <span>Updated Daily</span>,
                  </div>,
                </div>,
                {/* CTA Buttons */}
                <div,
                  className="flex flex-col sm: flex-row gap-4",
                >,
                  <button className="bg-white text-slate-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">,
                    Explore Content Hub,
                    <ArrowRight className="w-5 h-5" />,
                  </button>,
                  <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-slate-800 transition-all duration-300">,
                    Start Free Trial,
                  </button>,
                </div>,
              </div>,
              {/* Preview Section */,}
              <div,
                className="relative",
              >,
                {/* Content Preview Card */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">,
                  <div className="flex items-center justify-between mb-4">,
                    <h3 className="text-lg font-semibold">Featured Content</h3>,
                    <div className="flex items-center gap-2">,
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />,
                      <span className="text-sm opacity-70">Live</span>,
                    </div>,
                  </div>,
                  {/* Content Preview */}
                    <div,
                      key={activePreview}
                      className="space-y-4",
                    >,
                      <div className="flex items-center gap-2">,
                        {React.createElement(getTypeIcon(contentPreviews[activePreview].type){,
                          className: "w-4 h-4 text-blue-400",})}
                        <span className="text-sm text-blue-300 capitalize">,
                          {contentPreviews[activePreview].type}
                        </span>,
                      </div>,
                      <h4 className="text-lg font-semibold line-clamp-2">,
                        {contentPreviews[activePreview].title}
                      </h4>,
                      <div className="flex flex-wrap gap-2">,
                        {contentPreviews[activePreview].tags.map((tagindex) => (,
                          <span,
                            key={index}
                            className="px-2 py-1 bg-white/10 text-white text-xs rounded-full",
                          >,
                            {tag}
                          </span>,
                        ))}
                      </div>,
                      <div className="flex items-center justify-between text-sm opacity-70">,
                        <div className="flex items-center gap-4">,
                          <div className="flex items-center gap-1">,
                            <Eye className="w-4 h-4" />,
                            {contentPreviews[activePreview].views}
                          </div>,
                          <div className="flex items-center gap-1">,
                            <Heart className="w-4 h-4" />,
                            {contentPreviews[activePreview].likes}
                          </div>,
                        </div>,
                        <div className="flex items-center gap-2">,
                          <button className="p-1 hover: bg-white/10 rounded">,
                            <Bookmark className="w-4 h-4" />,
                          </button>,
                          <button className="p-1 hover:bg-white/10 rounded">,
                            <Share2 className="w-4 h-4" />,
                          </button>,
                        </div>,
                      </div>,
                    </div>,
                  </div>,
                  {/* Preview Indicators */,}
                  <div className="flex justify-center gap-2 mt-4">,
                    {contentPreviews.map((_index) => (,
                      <button,
                        key={index}
                        onClick={() => setActivePreview(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${,
                          index === activePreview ? 'bg-white' : 'bg-white/30',
                        }`}
                      />,
                    ))}
                  </div>,
                </div>,
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse" />,
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce" />,
              </div>,
            </div>,
            {/* Bottom Features */}
            <div,
              className="mt-12 pt-6 border-t border-white/20",
            >,
              <div className="grid grid-cols-1 md: grid-cols-4 gap-6 text-center">,
                <div className="flex items-center justify-center gap-3">,
                  <CheckCircle className="w-5 h-5 text-green-400" />,
                  <span className="text-sm">Free Access</span>,
                </div>,
                <div className="flex items-center justify-center gap-3">,
                  <CheckCircle className="w-5 h-5 text-green-400" />,
                  <span className="text-sm">Mobile Friendly</span>,
                </div>,
                <div className="flex items-center justify-center gap-3">,
                  <CheckCircle className="w-5 h-5 text-green-400" />,
                  <span className="text-sm">Regular Updates</span>,
                </div>,
                <div className="flex items-center justify-center gap-3">,
                  <CheckCircle className="w-5 h-5 text-green-400" />,
                  <span className="text-sm">Expert Content</span>,
                </div>,
              </div>,
            </div>,
          </div>,
          {/* Dismiss Button */,}
          <button,
            onClick={handleDismiss}
            className="absolute top-4 right-4 p-2 hover: bg-white/20 rounded-full transition-colors duration-200",
            aria-label="Dismiss banner",
          >,
            <X className="w-5 h-5" />,
          </button>,
        </div>,
      ),}
    </div>,
  );
};
export default UltimateContentHub2026PromotionBanner;
</div></div></div></div></div></div></div></div></div></div></div>,