import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AIROICalculator from "../components/AIROICalculator";
import { 
  Calculator, 
  TrendingUp, 
  Shield, 
  Zap,
  Users,
  Clock,
  Target,
  BarChart3,
  FileText,
  Download,
  Star,
  ArrowRight,
  CheckCircle,
  Lightbulb
} from "lucide-react";

const Tools = () => {
  const tools = [
    {
      id: 1,
      title: "AI ROI Calculator",
      icon: Calculator,
      description: "Calculate the potential return on investment for AI automation in your organization.",
      category: "Business Analytics",
      rating: 4.9,
      usageCount: "2.3k",
      featured: true,
      component: "AIROICalculator"
    },
    {
      id: 2,
      title: "Cloud Cost Optimizer",
      icon: TrendingUp,
      description: "Analyze and optimize your cloud infrastructure costs with actionable recommendations.",
      category: "Cloud Management",
      rating: 4.8,
      usageCount: "1.8k",
      featured: true,
      comingSoon: true
    },
    {
      id: 3,
      title: "Security Assessment Tool",
      icon: Shield,
      description: "Evaluate your organization's cybersecurity posture with our comprehensive assessment.",
      category: "Cybersecurity",
      rating: 4.7,
      usageCount: "1.5k",
      featured: false,
      comingSoon: true
    },
    {
      id: 4,
      title: "Digital Transformation Readiness",
      icon: Target,
      description: "Assess your organization's readiness for digital transformation initiatives.",
      category: "Strategy Planning",
      rating: 4.8,
      usageCount: "2.1k",
      featured: true,
      comingSoon: true
    },
    {
      id: 5,
      title: "AI Ethics Assessment",
      icon: CheckCircle,
      description: "Evaluate AI systems for bias, fairness, and ethical considerations.",
      category: "AI Governance",
      rating: 4.6,
      usageCount: "1.2k",
      featured: false,
      comingSoon: true
    },
    {
      id: 6,
      title: "Performance Benchmarking",
      icon: BarChart3,
      description: "Compare your technology performance against industry benchmarks.",
      category: "Performance Analysis",
      rating: 4.9,
      usageCount: "1.7k",
      featured: false,
      comingSoon: true
    }
  ];

  const categories = [
    { name: "Business Analytics", icon: TrendingUp, count: 2 },
    { name: "Cloud Management", icon: Zap, count: 1 },
    { name: "Cybersecurity", icon: Shield, count: 1 },
    { name: "Strategy Planning", icon: Target, count: 1 },
    { name: "AI Governance", icon: CheckCircle, count: 1 },
    { name: "Performance Analysis", icon: BarChart3, count: 1 }
  ];

  const featuredTools = tools.filter(tool => tool.featured);
  const otherTools = tools.filter(tool => !tool.featured);

  return (
    <>
      <Helmet>
        <title>Interactive Tools & Calculators | Zion Tech Group</title>
        <meta name="description" content="Access our collection of interactive tools and calculators to analyze AI ROI, cloud costs, security posture, and more. Free tools for business decision making." />
        <meta name="keywords" content="AI ROI calculator, cloud cost optimizer, security assessment, digital transformation tools, business calculators" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        <Header />
        
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
              Interactive Tools & Calculators
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Make data-driven decisions with our collection of free, interactive tools and calculators. 
              Analyze AI ROI, optimize costs, assess security, and plan your digital transformation.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan">6+</div>
                <div className="text-sm text-zion-slate-light">Interactive Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan">10k+</div>
                <div className="text-sm text-zion-slate-light">Calculations Made</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan">4.8★</div>
                <div className="text-sm text-zion-slate-light">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan">100%</div>
                <div className="text-sm text-zion-slate-light">Free to Use</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Tools */}
        <section className="container mx-auto px-6 py-16">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Featured Tools</h2>
            <p className="text-zion-slate-light text-center">Our most popular and powerful interactive calculators</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredTools.map((tool) => (
              <div key={tool.id} className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-zion-cyan/20 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-zion-cyan/30 transition-colors border border-zion-cyan/30">
                    <tool.icon className="w-6 h-6 text-zion-cyan group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-zion-cyan text-zion-blue-dark px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                    {tool.comingSoon && (
                      <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-4">{tool.description}</p>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-zion-slate-light mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {tool.usageCount} uses
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    {tool.rating}
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="bg-zion-blue/20 backdrop-blur-sm border border-zion-blue/30 text-zion-cyan px-3 py-1 rounded-full text-xs font-semibold">
                    {tool.category}
                  </span>
                </div>
                
                <button 
                  className="inline-flex items-center bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded-lg font-semibold hover:bg-zion-blue-light transition-colors w-full justify-center gap-2 group/btn"
                  disabled={tool.comingSoon}
                >
                  {tool.comingSoon ? (
                    <>
                      <Clock className="w-4 h-4" />
                      Coming Soon
                    </>
                  ) : (
                    <>
                      <Calculator className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      Use Tool
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* AI ROI Calculator Demo */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Try Our AI ROI Calculator</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get instant insights into the potential return on investment for AI automation in your organization.
              </p>
            </div>
            
            <AIROICalculator />
            
            <div className="text-center mt-12">
              <Link
                to="/resources"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 gap-2"
              >
                <Download className="w-5 h-5" />
                Download Excel Version
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Other Tools */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 text-center">More Tools</h2>
              <p className="text-zion-slate-light text-center">Additional calculators and assessment tools</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherTools.map((tool) => (
                <div key={tool.id} className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                  <div className="flex items-start justify-between mb-3">
                    <div className="bg-zion-blue/20 w-10 h-10 rounded-lg flex items-center justify-center group-hover:bg-zion-blue/30 transition-colors border border-zion-blue/30">
                      <tool.icon className="w-5 h-5 text-zion-blue-light group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span className="text-xs text-zion-slate-light">{tool.rating}</span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-zion-slate-light text-sm mb-3">{tool.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-zion-slate-light mb-3">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {tool.usageCount}
                    </div>
                    <span className="bg-zion-slate-dark text-zion-slate-light px-2 py-1 rounded text-xs">
                      {tool.category}
                    </span>
                  </div>
                  
                  <button 
                    className="inline-flex items-center text-zion-cyan hover:text-zion-blue-light transition-colors font-semibold text-sm group/btn w-full justify-center"
                    disabled={tool.comingSoon}
                  >
                    {tool.comingSoon ? (
                      <>
                        <Clock className="w-3 h-3 mr-1" />
                        Coming Soon
                      </>
                    ) : (
                      <>
                        Use Tool
                        <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-zion-slate-dark py-16">
          <div className="container mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 text-center">Tool Categories</h2>
              <p className="text-zion-slate-light text-center">Find tools organized by business function</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {categories.map((category, index) => (
                <div key={index} className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl text-center">
                  <div className="bg-zion-blue/20 w-12 h-12 rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:bg-zion-blue/30 transition-colors border border-zion-blue/30">
                    <category.icon className="w-6 h-6 text-zion-blue-light group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">{category.name}</h3>
                  <p className="text-zion-slate-light text-xs">{category.count} tools</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-zion-blue to-zion-purple py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Tool?</h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              We can build custom calculators and assessment tools tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-zion-blue hover:bg-zion-slate-light px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                <Lightbulb className="w-5 h-5" />
                Request Custom Tool
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-zion-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Tools;