import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap, Shield, Brain, Rocket } from 'lucide-react';

const RevolutionaryCaseStudies2026: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Metaverse AI Integration: Transforming Virtual Reality",
      company: "VirtualCorp Industries",
      industry: "Metaverse Technology",
      challenge: "Creating hyper-realistic AI-powered virtual environments that could seamlessly blend with physical reality",
      solution: "Developed advanced AI systems that generate photorealistic environments and intelligent NPCs with genuine personalities",
      results: [
        "300% increase in user engagement",
        "95% user satisfaction rate",
        "50% reduction in development time",
        "10M+ active users in 6 months"
      ],
      icon: <Brain className="w-8 h-8" />,
      featured: true,
      imageUrl: "/images/case-studies/metaverse-ai-integration.jpg"
    },
    {
      id: 2,
      title: "Autonomous Business Operations: AI-Powered Management",
      company: "GlobalTech Solutions",
      industry: "Business Automation",
      challenge: "Managing complex business operations across multiple time zones and markets without human intervention",
      solution: "Implemented autonomous AI systems capable of strategic planning, team management, and real-time adaptation",
      results: [
        "400% increase in operational efficiency",
        "60% reduction in operational costs",
        "99.9% uptime achievement",
        "24/7 autonomous decision making"
      ],
      icon: <Zap className="w-8 h-8" />,
      featured: true,
      imageUrl: "/images/case-studies/autonomous-business.jpg"
    },
    {
      id: 3,
      title: "AI-Powered Cybersecurity: Ultimate Digital Defense",
      company: "SecureNet Corp",
      industry: "Cybersecurity",
      challenge: "Protecting against sophisticated cyber threats that traditional security systems couldn't detect",
      solution: "Deployed AI-powered defense systems with predictive threat detection and automated countermeasures",
      results: [
        "99.8% threat detection accuracy",
        "90% reduction in security incidents",
        "Real-time threat response",
        "Zero successful breaches in 12 months"
      ],
      icon: <Shield className="w-8 h-8" />,
      featured: true,
      imageUrl: "/images/case-studies/ai-cybersecurity.jpg"
    },
    {
      id: 4,
      title: "Edge AI Revolution: Intelligence at the Source",
      company: "SmartManufacturing Inc",
      industry: "Manufacturing",
      challenge: "Implementing real-time AI decision making in manufacturing without cloud dependency",
      solution: "Deployed edge AI systems directly on manufacturing equipment for instant processing and decision making",
      results: [
        "200% improvement in production efficiency",
        "80% reduction in downtime",
        "Real-time quality control",
        "50% energy savings"
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      featured: false,
      imageUrl: "/images/case-studies/edge-ai-manufacturing.jpg"
    },
    {
      id: 5,
      title: "AI-Driven Space Exploration: Mission to Mars",
      company: "SpaceTech Ventures",
      industry: "Space Technology",
      challenge: "Enabling autonomous spacecraft navigation and research in the harsh environment of space",
      solution: "Developed AI systems for autonomous spacecraft operation, mission planning, and real-time adaptation",
      results: [
        "100% mission success rate",
        "Autonomous problem solving",
        "Real-time mission adaptation",
        "Successful Mars landing and exploration"
      ],
      icon: <Rocket className="w-8 h-8" />,
      featured: true,
      imageUrl: "/images/case-studies/ai-space-exploration.jpg"
    },
    {
      id: 6,
      title: "Sustainable AI: Green Technology Implementation",
      company: "EcoTech Solutions",
      industry: "Environmental Technology",
      challenge: "Creating AI systems that are both powerful and environmentally sustainable",
      solution: "Developed energy-efficient AI algorithms and carbon-neutral data centers",
      results: [
        "70% reduction in energy consumption",
        "Carbon-neutral operations",
        "Environmental impact monitoring",
        "Green technology leadership"
      ],
      icon: <CheckCircle className="w-8 h-8" />,
      featured: false,
      imageUrl: "/images/case-studies/sustainable-ai.jpg"
    }
  ];

  const featuredStudies = caseStudies.filter(study => study.featured);
  const allStudies = caseStudies;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 mb-6">
            <Users className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-sm font-medium text-white">REVOLUTIONARY CASE STUDIES</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Real-World
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> AI Success</span>
            <br />
            Stories
          </h1>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover how leading companies are transforming their operations with our revolutionary AI solutions. 
            From autonomous business management to space exploration, see the incredible results achieved by our clients.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Success Story
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            
            <Link
              to="/comprehensive-services-2026"
              className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Case Studies */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Success Stories</h2>
            <p className="text-xl text-gray-300">Real results from real companies using our revolutionary AI technology</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredStudies.map((study) => (
              <div
                key={study.id}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl">
                    {study.icon}
                  </div>
                  <div className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold rounded-full">
                    FEATURED
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {study.title}
                </h3>

                <div className="mb-4">
                  <div className="text-sm text-purple-300 font-semibold mb-2">{study.company}</div>
                  <div className="text-sm text-gray-400">{study.industry}</div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                  <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                  
                  <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                  <p className="text-gray-300 text-sm">{study.solution}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Results:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {study.results.map((result, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/case-study/${study.id}`}
                  className="inline-flex items-center text-purple-400 font-semibold hover:text-purple-300 transition-colors"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All Case Studies Grid */}
      <div className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">All Case Studies</h2>
            <p className="text-xl text-gray-300">Comprehensive collection of AI transformation success stories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allStudies.map((study) => (
              <div
                key={study.id}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg">
                    {study.icon}
                  </div>
                  {study.featured && (
                    <div className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold rounded-full">
                      FEATURED
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {study.title}
                </h3>

                <div className="text-sm text-purple-300 font-semibold mb-2">{study.company}</div>
                <div className="text-sm text-gray-400 mb-4">{study.industry}</div>

                <div className="mb-4">
                  <div className="text-sm text-gray-300 line-clamp-3">
                    {study.challenge}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-semibold text-white mb-1">Key Results:</div>
                  <div className="text-sm text-gray-300">
                    {study.results[0]} • {study.results[1]}
                  </div>
                </div>

                <Link
                  to={`/case-study/${study.id}`}
                  className="inline-flex items-center text-purple-400 font-semibold hover:text-purple-300 transition-colors text-sm"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join these industry leaders and transform your business with our revolutionary AI solutions. 
              Let's build something extraordinary together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                to="/comprehensive-services-2026"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2026;