import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Shield, 
  Users, 
  FileText, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Target,
  TrendingUp,
  Award,
  Globe,
  Lock,
  Activity,
  Clock,
  Eye,
  Database,
  Server,
  Brain,
  Code,
  Globe2
} from 'lucide-react';

const governmentSolutions = [
  {
    id: 1,
    title: "Citizen Portal Platform",
    description: "Comprehensive digital platform for citizen services and government interactions.",
    icon: Users,
    features: [
      "Service request management",
      "Document submission",
      "Payment processing",
      "Status tracking"
    ],
    price: "From $80,000",
    timeline: "20-32 weeks",
    category: "Citizen Services",
    compliance: ["FISMA", "FedRAMP", "Section 508", "WCAG 2.1"]
  },
  {
    id: 2,
    title: "Cybersecurity Framework",
    description: "Enterprise-grade security solutions meeting federal cybersecurity requirements.",
    icon: Shield,
    features: [
      "Threat detection",
      "Incident response",
      "Compliance monitoring",
      "Security audits"
    ],
    price: "From $60,000",
    timeline: "16-24 weeks",
    category: "Security",
    compliance: ["NIST", "FISMA", "FedRAMP", "CIS Controls"]
  },
  {
    id: 3,
    title: "Data Analytics Platform",
    description: "Advanced analytics and reporting tools for government decision-making.",
    icon: BarChart3,
    features: [
      "Real-time dashboards",
      "Predictive analytics",
      "Data visualization",
      "Custom reporting"
    ],
    price: "From $50,000",
    timeline: "12-20 weeks",
    category: "Analytics",
    compliance: ["FISMA", "FedRAMP", "Data Privacy", "Open Data"]
  },
  {
    id: 4,
    title: "Legacy System Modernization",
    description: "Modernization of outdated government systems to improve efficiency and security.",
    icon: Server,
    features: [
      "System migration",
      "API development",
      "Cloud integration",
      "Performance optimization"
    ],
    price: "From $100,000",
    timeline: "24-40 weeks",
    category: "System Modernization",
    compliance: ["FISMA", "FedRAMP", "Section 508", "Cloud Security"]
  },
  {
    id: 5,
    title: "Emergency Response System",
    description: "Integrated emergency management and response coordination platform.",
    icon: Activity,
    features: [
      "Real-time monitoring",
      "Alert systems",
      "Resource coordination",
      "Communication tools"
    ],
    price: "From $70,000",
    timeline: "16-28 weeks",
    category: "Emergency Management",
    compliance: ["FISMA", "FedRAMP", "Emergency Protocols", "Interoperability"]
  },
  {
    id: 6,
    title: "Regulatory Compliance Platform",
    description: "Automated compliance monitoring and reporting for government regulations.",
    icon: FileText,
    features: [
      "Compliance tracking",
      "Automated reporting",
      "Audit trails",
      "Policy management"
    ],
    price: "From $45,000",
    timeline: "12-20 weeks",
    category: "Compliance",
    compliance: ["FISMA", "FedRAMP", "Regulatory Standards", "Audit Requirements"]
  }
];

const complianceStandards = [
  {
    name: "FISMA",
    description: "Federal Information Security Management Act",
    icon: Shield,
    requirements: ["Risk Assessment", "Security Controls", "Continuous Monitoring", "Incident Response"]
  },
  {
    name: "FedRAMP",
    description: "Federal Risk and Authorization Management Program",
    icon: Lock,
    requirements: ["Cloud Security", "Authorization Process", "Continuous Monitoring", "Security Assessment"]
  },
  {
    name: "Section 508",
    description: "Accessibility requirements for federal electronic and information technology",
    icon: Users,
    requirements: ["Web Accessibility", "Document Accessibility", "Software Accessibility", "Testing & Validation"]
  },
  {
    name: "NIST",
    description: "National Institute of Standards and Technology Cybersecurity Framework",
    icon: Brain,
    requirements: ["Identify", "Protect", "Detect", "Respond", "Recover"]
  }
];

const successStories = [
  {
    id: 1,
    agency: "Department of Transportation",
    industry: "Federal Government",
    challenge: "Needed modern citizen portal for driver services",
    solution: "Built secure, accessible citizen portal with real-time services",
    results: "50% reduction in wait times, 90% citizen satisfaction, full compliance",
    logo: "DOT"
  },
  {
    id: 2,
    agency: "State Health Department",
    industry: "State Government",
    challenge: "Required emergency response system for public health crises",
    solution: "Implemented integrated emergency management platform",
    results: "60% faster response times, improved coordination, real-time monitoring",
    logo: "SHD"
  },
  {
    id: 3,
    agency: "City Municipal Services",
    industry: "Local Government",
    challenge: "Needed legacy system modernization for permit processing",
    solution: "Modernized permit system with cloud integration and APIs",
    results: "40% faster processing, 70% cost reduction, improved user experience",
    logo: "CMS"
  }
];

const processSteps = [
  {
    step: 1,
    title: "Requirements Analysis",
    description: "Analyze government requirements and compliance standards",
    icon: Target,
    duration: "2-3 weeks"
  },
  {
    step: 2,
    title: "Security Architecture",
    description: "Design secure, compliant system architecture",
    icon: Shield,
    duration: "3-4 weeks"
  },
  {
    step: 3,
    title: "Development & Testing",
    description: "Build solution with continuous security testing",
    icon: Code,
    duration: "16-40 weeks"
  },
  {
    step: 4,
    title: "Compliance Validation",
    description: "Validate compliance and obtain necessary certifications",
    icon: CheckCircle,
    duration: "2-4 weeks"
  }
];

export default function GovernmentSolutions() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState(null);

  const categories = ['All', 'Citizen Services', 'Security', 'Analytics', 'System Modernization', 'Emergency Management', 'Compliance'];
  
  const filteredSolutions = selectedCategory === 'All' 
    ? governmentSolutions 
    : governmentSolutions.filter(solution => solution.category === selectedCategory);

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-8"
            >
              <Building2 className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Government
              <span className="text-gradient block">Solutions</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Secure, compliant, and innovative technology solutions designed specifically for government agencies. 
              From citizen services to cybersecurity, we help government organizations deliver better public services.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-zion-cyan">
                <Shield className="w-4 h-4" />
                <span>FISMA Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-zion-purple">
                <Users className="w-4 h-4" />
                <span>Citizen Focused</span>
              </div>
              <div className="flex items-center gap-2 text-zion-blue">
                <Lock className="w-4 h-4" />
                <span>Secure & Private</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Compliance & Standards</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our solutions meet the highest government compliance standards and regulatory requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={standard.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <standard.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{standard.name}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{standard.description}</p>
                
                <div className="space-y-2">
                  {standard.requirements.map((req, reqIndex) => (
                    <div key={reqIndex} className="flex items-center gap-2 text-zion-slate-light text-sm">
                      <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Implementation Process</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A comprehensive approach that ensures security, compliance, and quality at every step
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-zion-blue rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{step.description}</p>
                <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30">
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Government Technology Solutions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive solutions designed specifically for government agencies and public sector organizations
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-blue-dark/30 text-zion-slate-light border border-zion-cyan/20 hover:border-zion-cyan/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedSolution(solution)}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{solution.description}</p>
                
                <div className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {solution.compliance.slice(0, 2).map((comp, compIndex) => (
                    <span
                      key={compIndex}
                      className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded border border-zion-purple/30"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-zion-cyan font-semibold">{solution.price}</span>
                  <span className="text-zion-slate-light text-sm">{solution.timeline}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                    {solution.category}
                  </span>
                  <button className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Government agencies that have transformed public services with our technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {story.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{story.agency}</h3>
                    <p className="text-zion-slate-light text-sm">{story.industry}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Challenge</h4>
                    <p className="text-zion-slate-light text-sm">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Solution</h4>
                    <p className="text-zion-slate-light text-sm">{story.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Results</h4>
                    <p className="text-zion-slate-light text-sm">{story.results}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-zion-slate-light text-sm ml-2">5.0 Rating</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Government Services?</h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Let's discuss how our government technology solutions can improve public services, 
              enhance security, and ensure compliance for your agency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}