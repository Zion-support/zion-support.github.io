"use client";
'use client';
import React, { useState, useEffect } from 'react';
import {,
  Wrench,
  Zap,
  Brain,
  Code,
  BarChart3,
  Shield,
  Globe,
  Smartphone;
  ArrowRight;
  Star;
  CheckCircle;
  Play;
  Download;
  ExternalLink;
  Settings;
  Cpu;
  Database;
  Cloud;
  Lock;
  Target;
  Lightbulb,
} from 'lucide-react';
const AI2025ToolsUtilitiesShowcase = () => {,
  const [activeCategorysetActiveCategory] = useState(0);
  const [isVisiblesetIsVisible] = useState(false);
  useEffect(() => {,
    setIsVisible(true);
  }[]);
  const categories = [,
    {,
      id: 1;
      name: "Development Tools";
      icon: Code;
      color: "from-blue-500 to-cyan-500";
      description: "AI-powered development tools for fastersmarter coding",};
    {,
      id: 2;
      name: "Analytics & Insights";
      icon: BarChart3;
      color: "from-green-500 to-emerald-500";
      description: "Advanced analytics tools for data-driven decisions",};
    {,
      id: 3;
      name: "Security & Compliance";
      icon: Shield;
      color: "from-red-500 to-pink-500";
      description: "AI-enhanced security tools for robust protection",};
    {,
      id: 4;
      name: "Automation Tools";
      icon: Settings;
      color: "from-purple-500 to-violet-500";
      description: "Intelligent automation tools for streamlined workflows",}
  ];
  const tools = [,
    {,
      id: 1;
      name: "AI Code Assistant";
      category: "Development Tools";
      description: "Intelligent code completiondebuggingand optimization suggestions";
      features: ["Code Completion"Bug Detection"Performance Optimization"Documentation Generation"];
      icon: Code;
      rating: 4.9;
      users: "50K+";
      price: "Free";
      color: "from-blue-500 to-cyan-500",};
    {,
      id: 2;
      name: "Smart Analytics Dashboard";
      category: "Analytics & Insights";
      description: "Real-time data visualization and predictive analytics platform";
      features: ["Real-time Dashboards"Predictive Analytics"Custom Reports"API Integration"];
      icon: BarChart3;
      rating: 4.8;
      users: "25K+";
      price: "$99/mo";
      color: "from-green-500 to-emerald-500",};
    {,
      id: 3;
      name: "AI Security Scanner";
      category: "Security & Compliance";
      description: "Automated vulnerability detection and security compliance monitoring";
      features: ["Vulnerability Scanning"Compliance Checks"Threat Detection"Security Reports"];
      icon: Shield;
      rating: 4.9;
      users: "15K+";
      price: "$199/mo";
      color: "from-red-500 to-pink-500",};
    {,
      id: 4;
      name: "Workflow Automator";
      category: "Automation Tools";
      description: "Intelligent workflow automation with AI-powered decision making";
      features: ["Process Automation"AI Decision Making"Integration Hub"Custom Workflows"];
      icon: Settings;
      rating: 4.7;
      users: "30K+";
      price: "$149/mo";
      color: "from-purple-500 to-violet-500",};
    {,
      id: 5;
      name: "Content Generator Pro";
      category: "Content Tools";
      description: "AI-powered content creation for blogsocial mediand marketing";
      features: ["Content Generation"SEO Optimization"Multi-language"Brand Voice"];
      icon: Lightbulb;
      rating: 4.8;
      users: "40K+";
      price: "$79/mo";
      color: "from-yellow-500 to-orange-500",};
    {,
      id: 6;
      name: "Data Processor AI";
      category: "Data Tools";
      description: "Intelligent data processingcleaningand transformation tools";
      features: ["Data Cleaning"ETL Processing"Data Validation"Schema Detection"];
      icon: Database;
      rating: 4.6;
      users: "20K+";
      price: "$129/mo";
      color: "from-indigo-500 to-blue-500",}
  ];
  const features = [,
    { icon: Zaptext: "Lightning Fast"description: "Optimized for speed and performance" ,};
    { icon: Shieldtext: "Secure & Reliable"description: "Enterprise-grade security" ,};
    { icon: Globetext: "Cloud Native"description: "Scalable cloud infrastructure" ,};
    { icon: Smartphonetext: "Mobile Ready"description: "Works on all devices" ,}
  ];
  const filteredTools = tools.filter(tool =>,
    activeCategory === 0 || tool.category === categories[activeCategory - 1]?.name,
  );
  return (,
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">,
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%253Csvg%20width%253D%252260%2522%20height%253D%252260%2522%20viewBox%253D%25220%25200%252060%252060%2522%20xmlns%253D%2522http%253A%2F%2Fwww.w3.org%2F2000%2Fsvg%2522%253E%253Cg%20fill%253D%2522none%2522%20fill-rule%253D%2522evenodd%2522%253E%253Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.04%22%253E%253Ccircle%20cx%253D%252230%2522%20cy%253D%252230%2522%20r%253D%25222%2522%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-30"></div>,
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 relative">,
        {/* Header */,}
        <div,
          className="text-center mb-16",
        >,
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-blue-500/20 border border-indigo-500/30 mb-6">,
            <Wrench className="w-5 h-5 text-yellow-400 mr-2" />,
            <span className="text-indigo-300 font-medium">AI Tools & Utilities</span>,
          </div>,
          <h2 className="text-4xl md: text-6xl font-bold text-white mb-6">,
            Powerful AI Tools for,
            <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent"> Every Need</span>,
          </h2>,
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">,
            Discover our comprehensive suite of AI-powered tools and utilities designed to streamline your workflow,
            boost productivityand drive innovation across all aspects of your business.,
          </p>,
        </div>,
        {/* Category Navigation */,}
        <div className="mb-12">,
          <div className="flex flex-wrap justify-center gap-4">,
            <button,
              onClick={() => setActiveCategory(0)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${,
                activeCategory === 0,
                  ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white',
                  : 'bg-white/10 text-gray-300 hover: bg-white/20',}`}
            >,
              All Tools,
            </button>,
            {categories.map((categoryindex) => (,
              <button,
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${,
                  activeCategory === category.id,
                    ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white',
                    : 'bg-white/10 text-gray-300 hover: bg-white/20',}`}
              >,
                <category.icon className="w-5 h-5" />,
                <span>{category.name}</span>,
              </button>,
            ))}
          </div>,
        </div>,
        {/* Tools Grid */}
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8 mb-16">,
            {filteredTools.map((toolindex) => (,
              <div,
                key={tool.id,}
                className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/20 hover: border-indigo-500/50 transition-all duration-300 group",
              >,
                {/* Tool Header */,}
                <div className="flex items-start justify-between mb-4">,
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${tool.color}`}>,
                    <tool.icon className="w-8 h-8 text-white" />,
                  </div>,
                  <div className="text-right">,
                    <div className="flex items-center space-x-1 mb-1">,
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />,
                      <span className="text-white font-semibold">{tool.rating}</span>,
                    </div>,
                    <div className="text-sm text-gray-400">{tool.users} users</div>,
                  </div>,
                </div>,
                {/* Tool Info */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover: text-indigo-300 transition-colors">,
                  {tool.name,}
                </h3>,
                <p className="text-gray-300 mb-4 leading-relaxed">,
                  {tool.description}
                </p>,
                {/* Features */}
                <div className="space-y-2 mb-6">,
                  {tool.features.map((featureIndex) => (,
                    <div key={featureIndex} className="flex items-center space-x-2">,
                      <CheckCircle className="w-4 h-4 text-green-400" />,
                      <span className="text-sm text-gray-300">{feature}</span>,
                    </div>,
                  ))}
                </div>,
                {/* Price and Actions */}
                <div className="flex items-center justify-between">,
                  <div className="text-2xl font-bold text-white">{tool.price}</div>,
                  <div className="flex space-x-2">,
                    <button className="p-2 rounded-lg bg-white/10 hover: bg-indigo-500/20 transition-colors">,
                      <Play className="w-4 h-4 text-gray-300" />,
                    </button>,
                    <button className="p-2 rounded-lg bg-white/10 hover:bg-indigo-500/20 transition-colors">,
                      <Download className="w-4 h-4 text-gray-300" />,
                    </button>,
                    <button className="p-2 rounded-lg bg-white/10 hover:bg-indigo-500/20 transition-colors">,
                      <ExternalLink className="w-4 h-4 text-gray-300" />,
                    </button>,
                  </div>,
                </div>,
              </div>,
            )),}
          </div>,
        </div>,
        {/* Key Features */}
        <div className="mb-16">,
          <h3 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our AI Tools?</h3>,
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">,
            {features.map((featureindex) => (,
              <div,
                key={index,}
                className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20",
              >,
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 mb-4">,
                  <feature.icon className="w-8 h-8 text-white" />,
                </div>,
                <h4 className="text-lg font-semibold text-white mb-2">{feature.text}</h4>,
                <p className="text-gray-300 text-sm">{feature.description}</p>,
              </div>,
            ))}
          </div>,
        </div>,
        {/* Call to Action */}
        <div,
          className="text-center",
        >,
          <div className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-2xl p-8 border border-indigo-500/20">,
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Workflow?</h3>,
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">,
              Start using our AI tools today and experience the power of intelligent automation and optimization.,
            </p>,
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">,
                Explore All Tools,
                <ArrowRight className="w-5 h-5 ml-2" />,
              </button>,
              <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">,
                Start Free Trial,
              </button>,
            </div>,
          </div>,
        </div>,
      </div>,
    </section>,
  ),};
export default AI2025ToolsUtilitiesShowcase;