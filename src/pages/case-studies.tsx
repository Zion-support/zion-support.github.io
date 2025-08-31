import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  TrendingUp, 
  Users, 
  Building,
  ArrowRight,
  Search,
  Star,
  Globe
} from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Healthcare Provider Achieves 300% Efficiency Improvement with AI",
      company: "MedTech Solutions Inc.",
      industry: "Healthcare",
      challenge: "Manual patient data processing was taking 8+ hours daily, causing delays in care delivery",
      solution: "Implemented AI-powered data processing platform with automated workflows",
      results: [
        "300% increase in data processing efficiency",
        "Reduced processing time from 8 hours to 2.5 hours",
        "Improved patient satisfaction scores by 45%",
        "Annual cost savings of $2.3M"
      ],
      featured: true
    },
    {
      id: 2,
      title: "Financial Services Firm Enhances Security with Quantum-Resistant Encryption",
      company: "Global Finance Corp.",
      industry: "Financial Services",
      challenge: "Traditional encryption methods vulnerable to quantum computing threats",
      solution: "Deployed quantum-resistant cryptographic solutions and threat monitoring",
      results: [
        "100% quantum-resistant encryption coverage",
        "Zero security breaches in 18 months",
        "Compliance with new regulatory requirements",
        "Enhanced customer trust and retention"
      ],
      featured: false
    },
    {
      id: 3,
      title: "Manufacturing Company Reduces Costs by 40% with IoT Implementation",
      company: "Industrial Manufacturing Ltd.",
      industry: "Manufacturing",
      challenge: "High operational costs due to inefficient equipment monitoring and maintenance",
      solution: "IoT sensors and predictive maintenance platform with real-time analytics",
      results: [
        "40% reduction in operational costs",
        "85% decrease in unplanned downtime",
        "Predictive maintenance accuracy of 92%",
        "ROI achieved in 8 months"
      ],
      featured: false
    },
    {
      id: 4,
      title: "Retail Chain Boosts Sales by 60% with AI-Powered Personalization",
      company: "Smart Retail Group",
      industry: "Retail",
      challenge: "Generic customer experiences leading to low conversion rates and customer churn",
      solution: "AI-driven customer personalization engine with real-time recommendations",
      results: [
        "60% increase in sales conversion rates",
        "45% improvement in customer retention",
        "Personalized recommendations accuracy of 89%",
        "$15M additional annual revenue"
      ],
      featured: false
    }
  ];

  const industries = [
    "All Industries",
    "Healthcare",
    "Financial Services",
    "Manufacturing",
    "Retail",
    "Technology",
    "Government",
    "Education"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                <FileText className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Customer Success
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how organizations across industries are transforming their 
              businesses with Zion Tech Group's innovative solutions.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search case studies..."
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <button
                key={industry}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  industry === "All Industries"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Success Story
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our most impactful transformation story showcasing the power 
              of AI in healthcare.
            </p>
          </div>
          
          {caseStudies.filter(cs => cs.featured).map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/50 rounded-xl p-8 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Content */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                      {caseStudy.industry}
                    </span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {caseStudy.title}
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">The Challenge</h4>
                    <p className="text-gray-400">{caseStudy.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Our Solution</h4>
                    <p className="text-gray-400">{caseStudy.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                    <ul className="space-y-2">
                      {caseStudy.results.map((result, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <Star className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to={`/case-studies/${caseStudy.id}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Read Full Case Study
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
                
                {/* Right Column - Company Info */}
                <div className="bg-slate-700/30 rounded-lg p-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {caseStudy.company}
                    </h4>
                    <p className="text-gray-400 mb-4">{caseStudy.industry}</p>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Company Size:</span>
                        <span className="text-white">Enterprise</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Implementation:</span>
                        <span className="text-white">6 months</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">ROI Timeline:</span>
                        <span className="text-white">8 months</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-20 bg-slate-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              All Case Studies
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore our complete collection of customer success stories 
              across different industries and use cases.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.filter(cs => !cs.featured).map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                    {caseStudy.industry}
                  </span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">
                      {caseStudy.results[0].split('%')[0]}%
                    </div>
                    <div className="text-xs text-gray-400">Improvement</div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {caseStudy.title}
                </h3>

                {/* Company */}
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <Building className="w-4 h-4 mr-2" />
                  {caseStudy.company}
                </div>

                {/* Challenge */}
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Challenge:</h4>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {caseStudy.challenge}
                  </p>
                </div>

                {/* Key Results */}
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {caseStudy.results.slice(0, 2).map((result, index) => (
                      <li key={index} className="text-gray-400 text-sm flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Read More */}
                <Link
                  to={`/case-studies/${caseStudy.id}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the ranks of successful organizations that have transformed 
            their businesses with Zion Tech Group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <button className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 transition-colors">
              <Globe className="mr-2 w-5 h-5" />
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
