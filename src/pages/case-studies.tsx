import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  Target,
  ArrowRight,
  Star,
  Award,
  Zap,
  Shield,
  Cloud,
  Brain,
  Globe
} from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Customer Service Transformation",
    company: "TechCorp Solutions",
    industry: "Technology",
    challenge: "High customer service costs and long response times",
    solution: "Implemented AI chatbot with natural language processing",
    results: [
      "40% reduction in customer service costs",
      "85% faster response times",
      "95% customer satisfaction rate",
      "24/7 automated support"
    ],
    metrics: {
      costReduction: "40%",
      responseTime: "85% faster",
      satisfaction: "95%",
      availability: "24/7"
    },
    technologies: ["AI/ML", "NLP", "Cloud Computing", "API Integration"],
    duration: "6 months",
    roi: "300%",
    image: "/images/case-study-1.jpg"
  },
  {
    id: 2,
    title: "Cloud Migration & DevOps Automation",
    company: "InnovateLab Inc",
    industry: "Healthcare",
    challenge: "Legacy infrastructure causing downtime and security risks",
    solution: "Complete cloud migration with CI/CD pipeline implementation",
    results: [
      "99.9% uptime achieved",
      "60% reduction in deployment time",
      "Enhanced security compliance",
      "Scalable infrastructure"
    ],
    metrics: {
      uptime: "99.9%",
      deploymentTime: "60% faster",
      securityScore: "A+",
      scalability: "10x"
    },
    technologies: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"],
    duration: "8 months",
    roi: "250%",
    image: "/images/case-study-2.jpg"
  },
  {
    id: 3,
    title: "Data Analytics & Business Intelligence Platform",
    company: "DataFlow Analytics",
    industry: "Finance",
    challenge: "Scattered data sources and lack of real-time insights",
    solution: "Centralized data warehouse with real-time analytics dashboard",
    results: [
      "Real-time data insights",
      "30% improvement in decision making",
      "Automated reporting system",
      "Predictive analytics capabilities"
    ],
    metrics: {
      dataProcessing: "Real-time",
      decisionMaking: "30% better",
      reporting: "Automated",
      predictions: "90% accuracy"
    },
    technologies: ["Big Data", "Apache Spark", "Tableau", "Python", "SQL"],
    duration: "10 months",
    roi: "400%",
    image: "/images/case-study-3.jpg"
  },
  {
    id: 4,
    title: "Cybersecurity & Compliance Implementation",
    company: "SecureBank Ltd",
    industry: "Banking",
    challenge: "Increasing cyber threats and regulatory compliance requirements",
    solution: "Comprehensive security framework with SOC2 compliance",
    results: [
      "Zero security breaches",
      "SOC2 Type II compliance achieved",
      "Advanced threat detection",
      "Employee security training"
    ],
    metrics: {
      breaches: "0",
      compliance: "SOC2 Type II",
      threatDetection: "99.9%",
      training: "100% staff"
    },
    technologies: ["SIEM", "EDR", "Firewall", "VPN", "Security Training"],
    duration: "12 months",
    roi: "200%",
    image: "/images/case-study-4.jpg"
  },
  {
    id: 5,
    title: "IoT & Edge Computing Solution",
    company: "SmartManufacturing Co",
    industry: "Manufacturing",
    challenge: "Inefficient production monitoring and quality control",
    solution: "IoT sensors with edge computing for real-time monitoring",
    results: [
      "25% increase in production efficiency",
      "90% reduction in quality issues",
      "Predictive maintenance",
      "Real-time monitoring"
    ],
    metrics: {
      efficiency: "25% increase",
      qualityIssues: "90% reduction",
      maintenance: "Predictive",
      monitoring: "Real-time"
    },
    technologies: ["IoT", "Edge Computing", "Machine Learning", "5G", "Cloud"],
    duration: "9 months",
    roi: "350%",
    image: "/images/case-study-5.jpg"
  },
  {
    id: 6,
    title: "Digital Transformation & Legacy Modernization",
    company: "LegacyCorp Enterprises",
    industry: "Retail",
    challenge: "Outdated systems limiting growth and customer experience",
    solution: "Complete digital transformation with modern tech stack",
    results: [
      "50% increase in online sales",
      "Enhanced customer experience",
      "Streamlined operations",
      "Mobile-first approach"
    ],
    metrics: {
      onlineSales: "50% increase",
      customerExperience: "Enhanced",
      operations: "Streamlined",
      mobile: "First priority"
    },
    technologies: ["React", "Node.js", "Microservices", "API Gateway", "Mobile"],
    duration: "15 months",
    roi: "500%",
    image: "/images/case-study-6.jpg"
  }
];

const industries = ['All', 'Technology', 'Healthcare', 'Finance', 'Banking', 'Manufacturing', 'Retail'];
const technologies = ['All', 'AI/ML', 'Cloud Computing', 'Cybersecurity', 'IoT', 'Data Analytics', 'DevOps'];

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedTechnology, setSelectedTechnology] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'All' || study.industry === selectedIndustry;
    const matchesTechnology = selectedTechnology === 'All' || 
      study.technologies.some(tech => tech.toLowerCase().includes(selectedTechnology.toLowerCase()));
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.challenge.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesIndustry && matchesTechnology && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-zion-cyan/20 text-zion-cyan px-6 py-3 rounded-full border border-zion-cyan/30 mb-6">
              <Award className="w-5 h-5" />
              <span className="font-medium">Success Stories</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Real Results, Real Impact
            </h1>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto">
              Discover how Zion Tech Group has transformed businesses across industries with 
              cutting-edge technology solutions. Our case studies showcase measurable results 
              and proven success stories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="md:col-span-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search case studies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-zion-slate-light rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  />
                </div>
              </div>

              {/* Industry Filter */}
              <div>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>

              {/* Technology Filter */}
              <div>
                <select
                  value={selectedTechnology}
                  onChange={(e) => setSelectedTechnology(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  {technologies.map(tech => (
                    <option key={tech} value={tech}>{tech}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/30 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {study.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <Globe className="w-4 h-4" />
                        {study.industry}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-zion-cyan">{study.roi}</div>
                    <div className="text-sm text-zion-slate-light">ROI</div>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="mb-4">
                  <div className="mb-3">
                    <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-red-400" />
                      Challenge
                    </h4>
                    <p className="text-zion-slate-light text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      Solution
                    </h4>
                    <p className="text-zion-slate-light text-sm">{study.solution}</p>
                  </div>
                </div>

                {/* Key Results */}
                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    Key Results
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {study.results.slice(0, 4).map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies & Metrics */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {study.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-zion-slate-light">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {study.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      {study.metrics.satisfaction}% satisfaction
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <Link
                    href={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300"
                  >
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <div className="text-right">
                    <div className="text-sm text-zion-slate-light">Contact us to learn more</div>
                    <div className="text-zion-cyan font-medium">+1 302 464 0950</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-3xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8">
              Let's discuss how Zion Tech Group can transform your business with 
              cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-zion-cyan px-8 py-4 rounded-xl hover:bg-zion-slate-light transition-all duration-300 font-medium text-lg"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-zion-cyan transition-all duration-300 font-medium text-lg"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}