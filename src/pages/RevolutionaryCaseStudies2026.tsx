import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock,
  Award,
  Target,
  Zap,
  Shield,
  Brain,
  Cpu,
  Globe
} from 'lucide-react';

interface CaseStudy {
  id: number;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    improvement: string;
  }[];
  duration: string;
  teamSize: string;
  technology: string[];
  icon: React.ReactNode;
  gradient: string;
  featured: boolean;
}

const RevolutionaryCaseStudies2026: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "AI-Powered Healthcare Revolution",
      company: "MedTech Global",
      industry: "Healthcare",
      challenge: "Reducing diagnostic time while improving accuracy in medical imaging analysis",
      solution: "Implemented advanced AI algorithms with neural interface technology for real-time medical image analysis and diagnosis support",
      results: [
        { metric: "Diagnostic Accuracy", value: "98.5%", improvement: "+25%" },
        { metric: "Processing Time", value: "2.3 seconds", improvement: "-80%" },
        { metric: "Cost Reduction", value: "$2.3M", improvement: "-60%" },
        { metric: "Patient Satisfaction", value: "94%", improvement: "+40%" }
      ],
      duration: "6 months",
      teamSize: "15 experts",
      technology: ["AI/ML", "Neural Interfaces", "Computer Vision"],
      icon: <Brain className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Financial Optimization",
      company: "Quantum Capital",
      industry: "Finance",
      challenge: "Optimizing complex portfolio management with real-time risk assessment",
      solution: "Deployed quantum computing algorithms for portfolio optimization and risk modeling with AI-powered market prediction",
      results: [
        { metric: "Processing Speed", value: "1000x faster", improvement: "+1000%" },
        { metric: "Risk-Adjusted Returns", value: "23.7%", improvement: "+300%" },
        { metric: "Transaction Costs", value: "$450K", improvement: "-75%" },
        { metric: "Market Prediction Accuracy", value: "95.2%", improvement: "+45%" }
      ],
      duration: "4 months",
      teamSize: "12 experts",
      technology: ["Quantum Computing", "AI/ML", "Blockchain"],
      icon: <Cpu className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500",
      featured: true
    },
    {
      id: 3,
      title: "Cybersecurity Fortress Implementation",
      company: "SecureCorp Industries",
      industry: "Cybersecurity",
      challenge: "Protecting critical infrastructure from advanced persistent threats",
      solution: "Deployed AI-powered threat detection system with real-time response and automated incident management",
      results: [
        { metric: "Threat Detection Rate", value: "99.9%", improvement: "+95%" },
        { metric: "Response Time", value: "2.1 seconds", improvement: "-80%" },
        { metric: "Security Incidents", value: "3", improvement: "-95%" },
        { metric: "Compliance Score", value: "100%", improvement: "+25%" }
      ],
      duration: "8 months",
      teamSize: "20 experts",
      technology: ["AI Security", "Machine Learning", "Blockchain"],
      icon: <Shield className="w-8 h-8" />,
      gradient: "from-red-500 to-orange-500",
      featured: true
    },
    {
      id: 4,
      title: "Metaverse Enterprise Platform",
      company: "Virtual Enterprises",
      industry: "Technology",
      challenge: "Creating immersive virtual workspaces for remote collaboration",
      solution: "Built comprehensive metaverse platform with haptic feedback, spatial audio, and AI-powered virtual assistants",
      results: [
        { metric: "User Engagement", value: "300%", improvement: "+300%" },
        { metric: "Meeting Efficiency", value: "85%", improvement: "+40%" },
        { metric: "Cost Savings", value: "$1.8M", improvement: "-65%" },
        { metric: "Employee Satisfaction", value: "92%", improvement: "+35%" }
      ],
      duration: "10 months",
      teamSize: "25 experts",
      technology: ["Metaverse", "VR/AR", "AI/ML"],
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-indigo-500 to-purple-500",
      featured: true
    },
    {
      id: 5,
      title: "Neural Interface Education System",
      company: "EduTech Innovations",
      industry: "Education",
      challenge: "Accelerating learning through direct brain-computer interfaces",
      solution: "Developed neural interface system for direct knowledge transfer and enhanced cognitive learning",
      results: [
        { metric: "Learning Speed", value: "5x faster", improvement: "+500%" },
        { metric: "Retention Rate", value: "94%", improvement: "+60%" },
        { metric: "Student Performance", value: "87%", improvement: "+45%" },
        { metric: "Accessibility", value: "100%", improvement: "+100%" }
      ],
      duration: "12 months",
      teamSize: "18 experts",
      technology: ["Neural Interfaces", "AI/ML", "Education Tech"],
      icon: <Brain className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      featured: true
    },
    {
      id: 6,
      title: "AI-Driven Manufacturing Optimization",
      company: "SmartManufacturing Co",
      industry: "Manufacturing",
      challenge: "Optimizing production lines with predictive maintenance and quality control",
      solution: "Implemented AI-powered predictive analytics with IoT sensors and automated quality control systems",
      results: [
        { metric: "Production Efficiency", value: "92%", improvement: "+35%" },
        { metric: "Defect Rate", value: "0.2%", improvement: "-85%" },
        { metric: "Maintenance Costs", value: "$320K", improvement: "-70%" },
        { metric: "Energy Consumption", value: "18%", improvement: "-25%" }
      ],
      duration: "7 months",
      teamSize: "14 experts",
      technology: ["AI/ML", "IoT", "Predictive Analytics"],
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-yellow-500 to-orange-500",
      featured: false
    }
  ];

  const industries = ['All', ...Array.from(new Set(caseStudies.map(study => study.industry)))];

  const filteredStudies = selectedIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">
              Revolutionary Case Studies 2026
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Real-world transformations achieved through cutting-edge technology. 
              Discover how leading organizations are revolutionizing their industries 
              with our innovative solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span>50+ Success Stories</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5" />
                <span>99% Success Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5" />
                <span>$2.5B+ Value Created</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Industry Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedIndustry === industry
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {industry}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${study.gradient} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/20 rounded-xl">
                    {study.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-sm opacity-90">{study.industry}</div>
                    <div className="text-xs opacity-75">{study.duration}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                <p className="text-lg opacity-90">{study.company}</p>
                
                <div className="flex items-center space-x-4 mt-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{study.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{study.teamSize}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Challenge */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                  <p className="text-gray-600">{study.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                  <p className="text-gray-600">{study.solution}</p>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Results</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-3">
                        <div className="text-2xl font-bold text-blue-600">{result.value}</div>
                        <div className="text-sm text-gray-600">{result.metric}</div>
                        <div className="text-xs text-green-600 font-medium">{result.improvement}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Tags */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technology.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:shadow-lg transition-all"
                >
                  <span>View Full Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join the ranks of industry leaders who have revolutionized their operations 
              with our cutting-edge technology solutions. Let's create your success story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Start Your Transformation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryCaseStudies2026;