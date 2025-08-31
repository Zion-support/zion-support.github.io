import React, { useState } from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { Link              } from 'react-router-dom.ts';
import { CheckCircle,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  Target,
  ArrowRight,
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  Star,
  Brain,
  Shield,
  Cloud,
  Zap,
  Globe
              } from 'lucide-react.ts';
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Customer Service Transformation",
    comp: "TechCorp Solutions",
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
    comp: "InnovateLab Inc",
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
    comp: "DataFlow Analytics",
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
    comp: "SecureBank Ltd",
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
    technologies: ["Cybersecurity", "SOC2", "Threat Detection", "Compliance"],
    duration: "12 months",
    roi: "200%",
    image: "/images/case-study-4.jpg"
  },
  {
    id: 5,
    title: "IoT & Smart Manufacturing Implementation",
    comp: "ManufactureTech Corp",
    industry: "Manufacturing",
    challenge: "Inefficient production processes and lack of real-time monitoring",
    solution: "IoT sensors and smart manufacturing platform",
    results: [
      "25% increase in production efficiency",
      "Real-time production monitoring",
      "Predictive maintenance alerts",
      "Reduced downtime by 40%"
    ],
    metrics: {
      efficiency: "25% increase",
      monitoring: "Real-time",
      maintenance: "Predictive",
      downtime: "40% reduction"
    },
    technologies: ["IoT", "Edge Computing", "Machine Learning", "Cloud Platform"],
    duration: "14 months",
    roi: "350%",
    image: "/images/case-study-5.jpg"
  },
  {
    id: 6,
    title: "Digital Transformation & E-commerce Platform",
    comp: "Retail Solutions Inc",
    industry: "Retail",
    challenge: "Outdated systems and poor online presence",
    solution: "Modern e-commerce platform with mobile-first approach",
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

export default function CaseStudies(...args: any[]): any {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedTechnology, setSelectedTechnology] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'All' || study.industry === selectedIndustry;
    const matchesTechnology = selectedTechnology === 'All' ||
      study.technologies.some(tech => tech.toLowerCase().includes(selectedTechnology.toLowerCase()));
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.comp.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.challenge.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesIndustry && matchesTechnology && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Award className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Real Results,
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Real Impact</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Discover how Zion Tech Group has transformed businesses across industries with
            cutting-edge technology solutions. Our case studies showcase measurable results
            and proven success stories.
          </motion.p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Search */}
              <div className="md:col-span-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search case studies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              {/* Industry Filter */}
              <div>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  {industries.map(industry               => (
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>

              {/* Technology Filter */}
              <div>
                <select
                  value={selectedTechnology}
                  onChange={(e) => setSelectedTechnology(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-zion-cyan"
                >
                  {technologies.map(tech               => (
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                    <option key={tech} value={tech}>{tech}</option>
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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
          <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {filteredCaseStudies.map((study, index)               => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">{study.roi}</div>
                    <div className="text-xs text-gray-400">ROI</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                <p className="text-gray-400 mb-2 text-sm">Client: {study.comp}</p>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-1">Challenge:</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-1">Solution:</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400">Key Results:</h4>
                  <ul className="space-y-1">
                    {study.results.slice(0, 3).map((result, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.technologies.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {study.duration}
                  </span>
                  <span className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-1" />
                    {study.metrics.costReduction || study.metrics.efficiency}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredCaseStudies.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Award className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No case studies found</h3>
              <p className="text-gray-500">Try adjusting your filters or search terms.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Let Zion Tech Group help you achieve similar results. 
              Our team of experts is ready to transform your business with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Start Your Project
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Explore Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
