import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Network, 
  Code, 
  HardDrive, 
  Shield, 
  AlertTriangle,
  FileText,
  Users,
  Wrench,
  Zap,
  CheckCircle,
  Clock
} from 'lucide-react';

const onsiteSupportSolutions = [
  {
    id: 1,
    title: "Hardware Support & Maintenance",
    description: "Comprehensive hardware support including installation, repair, and preventive maintenance.",
    icon: Cpu,
    features: [
      "Hardware installation",
      "Repair services",
      "Preventive maintenance",
      "Hardware upgrades"
    ],
    price: "From $150/hour",
    timeline: "Same day - 24 hours",
    category: "Hardware",
    technologies: ["Desktop PCs", "Laptops", "Servers", "Network Equipment"]
  },
  {
    id: 2,
    title: "Network Infrastructure Support",
    description: "Onsite network troubleshooting, installation, and optimization services.",
    icon: Network,
    features: [
      "Network troubleshooting",
      "Cable installation",
      "WiFi optimization",
      "Network security"
    ],
    price: "From $200/hour",
    timeline: "Same day - 48 hours",
    category: "Networking",
    technologies: ["Cisco", "Juniper", "WiFi", "Cabling"]
  },
  {
    id: 3,
    title: "Software Installation & Support",
    description: "Software installation, configuration, and troubleshooting services.",
    icon: Code,
    features: [
      "Software installation",
      "Configuration setup",
      "Troubleshooting",
      "User training"
    ],
    price: "From $125/hour",
    timeline: "Same day - 24 hours",
    category: "Software",
    technologies: ["Windows", "Linux", "Business Apps", "Security Software"]
  },
  {
    id: 4,
    title: "Data Recovery & Backup",
    description: "Onsite data recovery services and backup system implementation.",
    icon: HardDrive,
    features: [
      "Data recovery",
      "Backup systems",
      "Data migration",
      "Disaster recovery"
    ],
    price: "From $300/hour",
    timeline: "24-72 hours",
    category: "Data",
    technologies: ["Recovery Tools", "Backup Software", "Storage Systems", "Cloud Backup"]
  },
  {
    id: 5,
    title: "Security Assessment & Implementation",
    description: "Onsite security audits and security system implementation.",
    icon: Shield,
    features: [
      "Security audits",
      "System hardening",
      "Access control",
      "Monitoring setup"
    ],
    price: "From $250/hour",
    timeline: "24-48 hours",
    category: "Security",
    technologies: ["Firewalls", "Antivirus", "Access Control", "Monitoring"]
  },
  {
    id: 6,
    title: "Emergency Response Support",
    description: "24/7 emergency onsite support for critical system failures.",
    icon: AlertTriangle,
    features: [
      "24/7 availability",
      "Emergency response",
      "Critical system repair",
      "Business continuity"
    ],
    price: "From $400/hour",
    timeline: "2-8 hours",
    category: "Emergency",
    technologies: ["Emergency Tools", "Spare Parts", "Mobile Support", "Remote Access"]
  }
];

const successStories = [
  {
    id: 1,
    comp: "Manufacturing Plant",
    industry: "Manufacturing",
    challenge: "Critical production system failure during peak hours",
    solution: "Emergency onsite support team arrived within 2 hours and restored system in 4 hours",
    results: "Minimal production downtime, $50,000 in saved revenue, improved system reliability",
    logo: "MP"
  },
  {
    id: 2,
    comp: "Healthcare Clinic",
    industry: "Healthcare",
    challenge: "Network outage affecting patient management systems",
    solution: "Onsite network support resolved connectivity issues and implemented redundancy",
    results: "Restored patient care operations, improved network reliability, enhanced security",
    logo: "HC"
  },
  {
    id: 3,
    comp: "Financial Services Firm",
    industry: "Finance",
    challenge: "Server hardware failure during trading hours",
    solution: "Emergency hardware support with immediate replacement and data recovery",
    results: "Zero trading downtime, data integrity maintained, improved disaster recovery",
    logo: "FSF"
  }
];

const processSteps = [
  {
    step: 1,
    title: "Issue Assessment",
    description: "Evaluate the problem and determine onsite support requirements",
    icon: FileText,
    duration: "1-4 hours"
  },
  {
    step: 2,
    title: "Technician Dispatch",
    description: "Dispatch qualified technician with appropriate tools and parts",
    icon: Users,
    duration: "2-8 hours"
  },
  {
    step: 3,
    title: "Onsite Resolution",
    description: "Resolve the issue and implement preventive measures",
    icon: Wrench,
    duration: "2-8 hours"
  },
  {
    step: 4,
    title: "Documentation & Follow-up",
    description: "Document resolution and schedule follow-up maintenance",
    icon: FileText,
    duration: "1-2 hours"
  }
];

const supportBenefits = [
  {
    title: "Rapid Response",
    description: "Quick onsite response minimizes downtime and business impact",
    icon: Zap,
    examples: ["Same-day service", "Emergency response", "Minimal downtime", "Business continuity"]
  },
  {
    title: "Expert Technicians",
    description: "Certified technicians with specialized knowledge and tools",
    icon: Users,
    examples: ["Certified professionals", "Specialized tools", "Experience", "Training"]
  },
  {
    title: "Comprehensive Support",
    description: "Full-spectrum support from hardware to software and networking",
    icon: Wrench,
    examples: ["Hardware support", "Software support", "Network support", "Security support"]
  },
  {
    title: "Preventive Maintenance",
    description: "Proactive maintenance prevents future issues and improves reliability",
    icon: Shield,
    examples: ["Regular maintenance", "System monitoring", "Preventive measures", "Performance optimization"]
  }
];

export default function OnsiteSupport() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState(null);
  const categories = ['All', 'Hardware', 'Networking', 'Software', 'Data', 'Security', 'Emergency'];
  
  const filteredSolutions = selectedCategory === 'All'
    ? onsiteSupportSolutions
    : onsiteSupportSolutions.filter(solution => solution.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-blue-500/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
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
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl mb-8"
            >
              <Wrench className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Onsite IT Support &
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent block">Technical Services</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Professional onsite IT support when you need it most. From emergency repairs to
              preventive maintenance, our certified technicians bring expertise to your location.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-cyan-400">
                <Wrench className="w-4 h-4" />
                <span>Expert Technicians</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Clock className="w-4 h-4" />
                <span>Rapid Response</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400">
                <Shield className="w-4 h-4" />
                <span>Comprehensive Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Onsite Support Benefits */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Onsite Support Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Understanding the fundamental advantages that make onsite support essential
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/30 border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{benefit.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-center">{benefit.description}</p>
                <div className="space-y-2">
                  <h4 className="text-cyan-400 font-semibold mb-3">Examples:</h4>
                  {benefit.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Onsite Support Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful onsite support delivery
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/30 border border-cyan-500/20 rounded-2xl p-6 text-center hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{step.description}</p>
                <div className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold">
                  {step.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Onsite Support Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive onsite support services tailored to your specific needs
            </p>
          </motion.div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/30 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedSolution(solution)}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{solution.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-center">{solution.description}</p>
                <div className="space-y-3">
                  <div className="text-center">
                    <span className="text-cyan-400 font-semibold">{solution.price}</span>
                  </div>
                  <div className="text-center">
                    <span className="text-purple-400 text-sm">{solution.timeline}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world examples of how our onsite support has made a difference
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/30 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{story.logo}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{story.comp}</h3>
                  <span className="text-cyan-400 text-sm">{story.industry}</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-2">Challenge:</h4>
                    <p className="text-gray-300 text-sm">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-purple-400 font-semibold mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm">{story.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-green-400 font-semibold mb-2">Results:</h4>
                    <p className="text-gray-300 text-sm">{story.results}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready for Onsite Support?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Don't let IT issues disrupt your business. Our expert technicians are ready to provide
              professional onsite support when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                Schedule Onsite Support
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300">
                Get Emergency Support
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
