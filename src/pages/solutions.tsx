import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Search,
  Filter,
  Building,
  Globe,
  Shield,
  Cloud,
  Brain,
  Zap,
  Rocket,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Clock,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Eye,
  BarChart3,
  Cpu,
  Smartphone,
  Database,
  Network,
  Lock,
  Server,
  Code,
  Wifi,
  Atom,
  Dna,
  Handshake,
  GraduationCap,
  Briefcase,
  Heart,
  Ear
} from 'lucide-react';

export default function Solutions() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedTechnology, setSelectedTechnology] = useState('all');

  const industries = [
    'all',
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Retail',
    'Education',
    'Government',
    'Technology',
    'Energy',
    'Transportation',
    'Real Estate'
  ];

  const technologies = [
    'all',
    'AI & Machine Learning',
    'Cloud Computing',
    'Cybersecurity',
    'IoT',
    'Blockchain',
    'Quantum Computing',
    'AR/VR',
    'Robotics',
    'Data Analytics',
    'Mobile Development'
  ];

  const solutions = [
    {
      id: 1,
      title: "AI-Powered Healthcare Analytics",
      description: "Transform patient care with intelligent data analysis and predictive healthcare solutions.",
      industry: "Healthcare",
      technology: "AI & Machine Learning",
      features: [
        "Predictive Analytics",
        "Patient Risk Assessment",
        "Treatment Optimization",
        "Real-time Monitoring"
      ],
      benefits: [
        "Improved Patient Outcomes",
        "Reduced Healthcare Costs",
        "Enhanced Diagnostic Accuracy",
        "Streamlined Operations"
      ],
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      href: "/solutions/ai-healthcare"
    },
    {
      id: 2,
      title: "Financial Services Security Platform",
      description: "Comprehensive cybersecurity solution designed specifically for financial institutions.",
      industry: "Finance",
      technology: "Cybersecurity",
      features: [
        "Real-time Threat Detection",
        "Compliance Management",
        "Fraud Prevention",
        "Secure Transactions"
      ],
      benefits: [
        "Enhanced Security",
        "Regulatory Compliance",
        "Reduced Fraud Losses",
        "Customer Trust"
      ],
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      href: "/solutions/financial-security"
    },
    {
      id: 3,
      title: "Smart Manufacturing IoT Suite",
      description: "Revolutionize manufacturing with IoT sensors, real-time monitoring, and predictive maintenance.",
      industry: "Manufacturing",
      technology: "IoT",
      features: [
        "Equipment Monitoring",
        "Predictive Maintenance",
        "Quality Control",
        "Supply Chain Optimization"
      ],
      benefits: [
        "Increased Efficiency",
        "Reduced Downtime",
        "Cost Savings",
        "Quality Improvement"
      ],
      icon: Cpu,
      color: "from-orange-500 to-red-500",
      href: "/solutions/smart-manufacturing"
    },
    {
      id: 4,
      title: "Cloud-Native Retail Platform",
      description: "Scalable e-commerce solution with AI-driven personalization and omnichannel capabilities.",
      industry: "Retail",
      technology: "Cloud Computing",
      features: [
        "Omnichannel Experience",
        "AI Personalization",
        "Inventory Management",
        "Customer Analytics"
      ],
      benefits: [
        "Increased Sales",
        "Better Customer Experience",
        "Operational Efficiency",
        "Data-Driven Insights"
      ],
      icon: Cloud,
      color: "from-purple-500 to-pink-500",
      href: "/solutions/retail-platform"
    },
    {
      id: 5,
      title: "Educational Technology Suite",
      description: "Comprehensive learning management system with AI tutoring and virtual classroom capabilities.",
      industry: "Education",
      technology: "AI & Machine Learning",
      features: [
        "AI Tutoring",
        "Virtual Classrooms",
        "Learning Analytics",
        "Content Management"
      ],
      benefits: [
        "Improved Learning Outcomes",
        "Personalized Education",
        "Remote Learning Support",
        "Teacher Efficiency"
      ],
      icon: GraduationCap,
      color: "from-indigo-500 to-blue-500",
      href: "/solutions/edtech-suite"
    },
    {
      id: 6,
      title: "Government Digital Services",
      description: "Secure, citizen-centric digital platform for government services and civic engagement.",
      industry: "Government",
      technology: "Cybersecurity",
      features: [
        "Digital Identity",
        "Service Automation",
        "Data Security",
        "Citizen Portal"
      ],
      benefits: [
        "Improved Service Delivery",
        "Enhanced Security",
        "Cost Reduction",
        "Citizen Satisfaction"
      ],
      icon: Building,
      color: "from-slate-500 to-gray-500",
      href: "/solutions/government-digital"
    }
  ];

  const filteredSolutions = solutions.filter(solution => {
    const matchesSearch = solution.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === 'all' || solution.industry === selectedIndustry;
    const matchesTechnology = selectedTechnology === 'all' || solution.technology === selectedTechnology;
    return matchesSearch && matchesIndustry && matchesTechnology;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Industry Solutions
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Tailored technology solutions designed to address the unique challenges and opportunities 
              across different industries and sectors.
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search solutions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Industry Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {industries.map(industry => (
                  <option key={industry} value={industry}>
                    {industry === 'all' ? 'All Industries' : industry}
                  </option>
                ))}
              </select>
            </div>

            {/* Technology Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedTechnology}
                onChange={(e) => setSelectedTechnology(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {technologies.map(technology => (
                  <option key={technology} value={technology}>
                    {technology === 'all' ? 'All Technologies' : technology}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredSolutions.map((solution) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`h-48 bg-gradient-to-br ${solution.color} flex items-center justify-center`}>
                <solution.icon className="w-16 h-16 text-white" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                    {solution.industry}
                  </span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                    {solution.technology}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {solution.title}
                </h2>
                
                <p className="text-gray-600 mb-6">
                  {solution.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {solution.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
                    <ul className="space-y-1">
                      {solution.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <Star className="h-4 w-4 text-yellow-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <Link
                  to={solution.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredSolutions.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">No solutions found matching your criteria.</div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedIndustry('all');
                setSelectedTechnology('all');
              }}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}