import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Server, 
  Network, 
  Shield, 
  Users, 
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
  Smartphone,
  Monitor,
  Brain,
  Code,
  Truck,
  FileText
} from 'lucide-react';

const onsiteServices = [
  {
    id: 1,
    title: "Network Infrastructure Setup",
    description: "Complete network design, installation, and configuration for businesses of all sizes.",
    icon: Network,
    features: [
      "Network design & planning",
      "Hardware installation",
      "Configuration & optimization",
      "Security implementation"
    ],
    price: "From $5,000",
    timeline: "3-7 days",
    category: "Infrastructure",
    coverage: ["Local", "Regional", "National"]
  },
  {
    id: 2,
    title: "Server Installation & Configuration",
    description: "Professional server setup, configuration, and optimization for optimal performance.",
    icon: Server,
    features: [
      "Hardware installation",
      "OS configuration",
      "Security hardening",
      "Performance tuning"
    ],
    price: "From $3,000",
    timeline: "2-5 days",
    category: "Servers",
    coverage: ["Local", "Regional", "National"]
  },
  {
    id: 3,
    title: "Cybersecurity Assessment",
    description: "Comprehensive security audit and vulnerability assessment of your IT infrastructure.",
    icon: Shield,
    features: [
      "Security audit",
      "Vulnerability scanning",
      "Penetration testing",
      "Security recommendations"
    ],
    price: "From $4,000",
    timeline: "3-6 days",
    category: "Security",
    coverage: ["Local", "Regional", "National"]
  },
  {
    id: 4,
    title: "Data Center Setup",
    description: "Complete data center design, construction, and equipment installation.",
    icon: Database,
    features: [
      "Facility design",
      "Equipment installation",
      "Power & cooling setup",
      "Monitoring systems"
    ],
    price: "From $25,000",
    timeline: "2-4 weeks",
    category: "Data Centers",
    coverage: ["Regional", "National"]
  },
  {
    id: 5,
    title: "Workstation Deployment",
    description: "Bulk workstation setup, configuration, and deployment for enterprise environments.",
    icon: Monitor,
    features: [
      "Hardware setup",
      "Software installation",
      "User configuration",
      "Network integration"
    ],
    price: "From $150/unit",
    timeline: "1-3 days",
    category: "Workstations",
    coverage: ["Local", "Regional", "National"]
  },
  {
    id: 6,
    title: "Emergency IT Support",
    description: "24/7 emergency on-site IT support for critical system failures and issues.",
    icon: Activity,
    features: [
      "24/7 availability",
      "Rapid response",
      "Critical issue resolution",
      "Preventive maintenance"
    ],
    price: "From $200/hour",
    timeline: "2-8 hours",
    category: "Emergency Support",
    coverage: ["Local", "Regional", "National"]
  }
];

const serviceAreas = [
  {
    region: "Local (0-50 miles)",
    response: "2-4 hours",
    coverage: "Full coverage",
    icon: Clock,
    color: "text-green-400"
  },
  {
    region: "Regional (50-200 miles)",
    response: "4-8 hours",
    coverage: "Standard coverage",
    icon: Truck,
    color: "text-yellow-400"
  },
  {
    region: "National (200+ miles)",
    response: "8-24 hours",
    coverage: "Extended coverage",
    icon: Globe,
    color: "text-blue-400"
  }
];

const successStories = [
  {
    id: 1,
    company: "TechCorp Manufacturing",
    industry: "Manufacturing",
    challenge: "Needed complete network infrastructure for new facility",
    solution: "Designed and installed enterprise network with 500+ devices",
    results: "Zero downtime, 99.9% uptime, 40% faster data transfer",
    logo: "TM"
  },
  {
    id: 2,
    company: "Healthcare Plus Network",
    industry: "Healthcare",
    challenge: "Required secure server infrastructure for HIPAA compliance",
    solution: "Installed and configured secure server cluster with encryption",
    results: "Full HIPAA compliance, 100% data security, improved performance",
    logo: "HP"
  },
  {
    id: 3,
    company: "Financial Services Inc",
    industry: "Finance",
    challenge: "Needed emergency IT support for trading system failure",
    solution: "Provided 24/7 emergency support and system recovery",
    results: "2-hour response time, minimal downtime, $500K saved",
    logo: "FS"
  }
];

const processSteps = [
  {
    step: 1,
    title: "Initial Assessment",
    description: "On-site evaluation of current infrastructure and requirements",
    icon: Target,
    duration: "1-2 days"
  },
  {
    step: 2,
    title: "Solution Design",
    description: "Custom solution design based on assessment findings",
    icon: FileText,
    duration: "2-3 days"
  },
  {
    step: 3,
    title: "Implementation",
    description: "Professional installation and configuration of all systems",
    icon: Wrench,
    duration: "2 days - 4 weeks"
  },
  {
    step: 4,
    title: "Testing & Handover",
    description: "Comprehensive testing and client training",
    icon: CheckCircle,
    duration: "1-2 days"
  }
];

export default function ITOnsiteServices() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedService, setSelectedService] = useState(null);

  const categories = ['All', 'Infrastructure', 'Servers', 'Security', 'Data Centers', 'Workstations', 'Emergency Support'];
  
  const filteredServices = selectedCategory === 'All' 
    ? onsiteServices 
    : onsiteServices.filter(service => service.category === selectedCategory);

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
              <Wrench className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IT On-Site
              <span className="text-gradient block">Services</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Professional on-site IT services delivered by certified technicians. 
              From network setup to emergency support, we bring expertise directly to your location.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-zion-cyan">
                <Wrench className="w-4 h-4" />
                <span>Professional Installation</span>
              </div>
              <div className="flex items-center gap-2 text-zion-purple">
                <Clock className="w-4 h-4" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-zion-blue">
                <Truck className="w-4 h-4" />
                <span>Nationwide Coverage</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Service Coverage Areas</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We provide on-site IT services across multiple coverage areas with guaranteed response times
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={area.region}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <area.icon className={`w-8 h-8 ${area.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{area.region}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">
                  Response Time: <span className="text-zion-cyan font-semibold">{area.response}</span>
                </p>
                <p className="text-zion-slate-light mb-4 leading-relaxed">
                  Coverage: <span className="text-zion-cyan font-semibold">{area.coverage}</span>
                </p>
                
                <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30">
                  Available
                </span>
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
            <h2 className="text-4xl font-bold text-white mb-4">Our Service Process</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful on-site IT service delivery
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

      {/* Services Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">On-Site IT Services</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive on-site IT services delivered by certified professionals
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
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.coverage.map((cov, covIndex) => (
                    <span
                      key={covIndex}
                      className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded border border-zion-purple/30"
                    >
                      {cov}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-zion-cyan font-semibold">{service.price}</span>
                  <span className="text-zion-slate-light text-sm">{service.timeline}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                    {service.category}
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
              Organizations that have benefited from our professional on-site IT services
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
                    <h3 className="text-xl font-bold text-white">{story.company}</h3>
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
            <h2 className="text-4xl font-bold text-white mb-6">Need On-Site IT Services?</h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Let's discuss how our professional on-site IT services can help your organization 
              with infrastructure setup, maintenance, and emergency support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Service
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Get Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}