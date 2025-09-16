import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  Users, 
  DollarSign, 
  CheckCircle,
  Star,
  Award,
  Target,
  Zap
} from 'lucide-react';

const RevolutionaryCaseStudies2026 = () => {
  const caseStudies = [
    {
      id: 1,
      company: "TechCorp Global",
      industry: "Technology",
      challenge: "Manual data processing causing 40% efficiency loss",
      solution: "Deployed autonomous AI agents for automated data processing",
      results: {
        efficiency: "300%",
        costReduction: "85%",
        timeSaved: "2,400 hours/month",
        satisfaction: "4.9/5"
      },
      testimonial: "The AI agents transformed our operations completely. We've never been more efficient.",
      author: "Sarah Johnson",
      role: "CTO, TechCorp Global",
      featured: true,
      image: "/images/case-studies/techcorp-ai-agents.jpg"
    },
    {
      id: 2,
      company: "Quantum Finance",
      industry: "Financial Services",
      challenge: "Complex risk analysis taking weeks to complete",
      solution: "Implemented quantum-AI computing for real-time risk assessment",
      results: {
        efficiency: "500%",
        costReduction: "70%",
        timeSaved: "1,800 hours/month",
        satisfaction: "5.0/5"
      },
      testimonial: "Quantum AI gave us a competitive edge we never thought possible.",
      author: "Michael Chen",
      role: "Head of Risk Management, Quantum Finance",
      featured: true,
      image: "/images/case-studies/quantum-finance.jpg"
    },
    {
      id: 3,
      company: "NeuralTech Industries",
      industry: "Manufacturing",
      challenge: "Quality control processes requiring extensive manual oversight",
      solution: "Integrated neural interface systems for enhanced quality monitoring",
      results: {
        efficiency: "250%",
        costReduction: "60%",
        timeSaved: "1,200 hours/month",
        satisfaction: "4.8/5"
      },
      testimonial: "The neural interfaces revolutionized our quality control processes.",
      author: "Dr. Elena Rodriguez",
      role: "VP of Operations, NeuralTech Industries",
      featured: false,
      image: "/images/case-studies/neuraltech-manufacturing.jpg"
    },
    {
      id: 4,
      company: "Edge Solutions Inc",
      industry: "IoT & Smart Cities",
      challenge: "Real-time data processing bottlenecks in smart city infrastructure",
      solution: "Deployed edge AI solutions across 50,000+ devices",
      results: {
        efficiency: "400%",
        costReduction: "75%",
        timeSaved: "3,000 hours/month",
        satisfaction: "4.9/5"
      },
      testimonial: "Edge AI made our smart city vision a reality.",
      author: "Alex Thompson",
      role: "Smart City Director, Edge Solutions Inc",
      featured: false,
      image: "/images/case-studies/edge-solutions-smart-city.jpg"
    },
    {
      id: 5,
      company: "SecureData Corp",
      industry: "Cybersecurity",
      challenge: "Increasing cyber threats overwhelming traditional security systems",
      solution: "Implemented AI-powered cybersecurity with predictive threat detection",
      results: {
        efficiency: "600%",
        costReduction: "90%",
        timeSaved: "1,500 hours/month",
        satisfaction: "5.0/5"
      },
      testimonial: "Our security posture has never been stronger thanks to AI defense systems.",
      author: "James Wilson",
      role: "CISO, SecureData Corp",
      featured: true,
      image: "/images/case-studies/securedata-cybersecurity.jpg"
    },
    {
      id: 6,
      company: "DataFlow Analytics",
      industry: "Data Analytics",
      challenge: "Processing massive datasets taking days to complete",
      solution: "Quantum data analytics platform for instant insights",
      results: {
        efficiency: "800%",
        costReduction: "80%",
        timeSaved: "2,000 hours/month",
        satisfaction: "4.9/5"
      },
      testimonial: "Quantum analytics transformed how we process and analyze data.",
      author: "Maria Garcia",
      role: "Chief Data Officer, DataFlow Analytics",
      featured: false,
      image: "/images/case-studies/dataflow-quantum-analytics.jpg"
    }
  ];

  const overallStats = [
    { label: "Companies Transformed", value: "500+", icon: Users },
    { label: "Average Efficiency Gain", value: "350%", icon: TrendingUp },
    { label: "Total Cost Savings", value: "$2.5B+", icon: DollarSign },
    { label: "Client Satisfaction", value: "4.9/5", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 mb-6">
              <Award className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-sm font-medium">SUCCESS STORIES 2026</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Revolutionary Case Studies
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover how leading companies are transforming their operations with our cutting-edge AI solutions, 
              achieving unprecedented efficiency and competitive advantage.
            </p>

            {/* Overall Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {overallStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                study.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
              }`}
            >
              {study.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    FEATURED CASE STUDY
                  </div>
                </div>
              )}

              {/* Company Info */}
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{study.company}</h3>
                    <p className="text-sm text-gray-600">{study.industry}</p>
                  </div>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="mb-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <Zap className="w-5 h-5 text-red-500 mr-2" />
                    Challenge
                  </h4>
                  <p className="text-gray-600">{study.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Solution
                  </h4>
                  <p className="text-gray-600">{study.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 text-blue-500 mr-2" />
                  Results
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600">{study.results.efficiency}</div>
                    <div className="text-sm text-gray-600">Efficiency Gain</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-xl">
                    <div className="text-2xl font-bold text-green-600">{study.results.costReduction}</div>
                    <div className="text-sm text-gray-600">Cost Reduction</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600">{study.results.timeSaved}</div>
                    <div className="text-sm text-gray-600">Time Saved</div>
                  </div>
                  <div className="text-center p-3 bg-yellow-50 rounded-xl">
                    <div className="text-2xl font-bold text-yellow-600">{study.results.satisfaction}</div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                <blockquote className="text-gray-700 italic mb-3">
                  "{study.testimonial}"
                </blockquote>
                <div className="text-sm text-gray-600">
                  <div className="font-semibold">{study.author}</div>
                  <div>{study.role}</div>
                </div>
              </div>

              {/* CTA */}
              <Link
                to="/contact"
                className="group/btn inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105"
              >
                <span>Start Your Success Story</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Transform your business with our revolutionary AI solutions and become our next success story. 
            Join hundreds of companies already achieving unprecedented results.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/contact"
              className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              to="/services"
              className="group inline-flex items-center px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2026;