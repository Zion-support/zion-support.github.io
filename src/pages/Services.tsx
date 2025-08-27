import React from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, DollarSign, ExternalLink, Workflow, MessageSquare, Globe, Rocket } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '../data/innovativeMicroSaasServices2025';
import { NEW_SERVICES_2025 } from '../data/newServices2025';
import { NEW_INNOVATIVE_SERVICES_2025 } from '../data/newInnovativeServices2025';

const Services: React.FC = () => {
  const [query, setQuery] = useState('');
  const services = [...INNOVATIVE_MICRO_SAAS_SERVICES_2025, ...NEW_SERVICES_2025, ...NEW_INNOVATIVE_SERVICES_2025];
  const featuredCategories = [
    { icon: Workflow, title: 'Process Automation', desc: 'Human + AI workflows across CRMs, ERPs and support.', href: '/ai-services' },
    { icon: MessageSquare, title: 'Helpdesk & Knowledge', desc: 'Tickets, KB, and chatbots trained on your docs.', href: '/micro-saas' },
    { icon: Globe, title: 'Localization & Multilingual', desc: '50+ languages, locale-aware UX, translation QA pipelines.', href: '/micro-saas' }
  ];
  ];

  const itServices = [
    {
      title: "Cloud Infrastructure & DevOps",
      description: "Enterprise-grade cloud infrastructure with automated DevOps pipelines for scalable, reliable, and secure applications.",
      icon: Cloud,
      price: "From $3,000/month",
      features: ["Multi-cloud Management", "CI/CD Pipelines", "Infrastructure as Code", "Auto-scaling", "Monitoring & Alerting", "Disaster Recovery"],
      benefits: ["99.9% uptime guarantee", "Reduce deployment time by 80%", "Scale automatically", "Reduce infrastructure costs by 30%"],
      path: "/services/cloud-devops",
      rating: 4.8,
      reviewCount: 145,
      category: "IT & Infrastructure"
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Comprehensive cybersecurity services including threat detection, vulnerability assessment, and compliance management.",
      icon: ShieldCheck,
      price: "From $2,500/month",
      features: ["Threat Detection", "Vulnerability Assessment", "Compliance Management", "Security Audits", "Incident Response", "Security Training"],
      benefits: ["Meet SOC2, GDPR, HIPAA compliance", "Reduce security incidents by 90%", "24/7 security monitoring", "Expert security team"],
      path: "/services/cybersecurity",
      rating: 4.9,
      reviewCount: 178,
      category: "IT & Security"
    },
    {
      title: "IT Helpdesk & Support",
      description: "Professional IT support services with remote assistance, on-site support, and proactive maintenance for your business.",
      icon: Server,
      price: "From $1,200/month",
      features: ["Remote Support", "On-site Support", "Proactive Maintenance", "Hardware Management", "Software Licensing", "Network Management"],
      benefits: ["Reduce IT downtime by 60%", "Faster issue resolution", "Preventive maintenance", "Expert IT team"],
      path: "/services/it-helpdesk",
      rating: 4.7,
      reviewCount: 234,
      category: "IT & Support"
    },
    {
      title: "Data Management & Backup",
      description: "Comprehensive data management solutions including backup, recovery, archiving, and data governance.",
      icon: Database,
      price: "From $800/month",
      features: ["Automated Backup", "Disaster Recovery", "Data Archiving", "Data Governance", "Compliance Reporting", "Performance Optimization"],
      benefits: ["99.99% data recovery rate", "Meet compliance requirements", "Reduce storage costs by 40%", "Automated data protection"],
      path: "/services/data-management",
      rating: 4.8,
      reviewCount: 156,
      category: "IT & Data"
    },
    {
      title: "Network & Security Infrastructure",
      description: "Enterprise networking solutions with advanced security features, monitoring, and optimization.",
      icon: Network,
      price: "From $2,000/month",
      features: ["Network Design", "Security Implementation", "Performance Monitoring", "Traffic Analysis", "VPN Solutions", "Load Balancing"],
      benefits: ["Improve network performance by 50%", "Enhanced security posture", "Reduce network downtime", "Scalable infrastructure"],
      path: "/services/network-security",
      rating: 4.7,
      reviewCount: 189,
      category: "IT & Networking"
    },
    {
      title: "Digital Transformation Consulting",
      description: "Strategic consulting services to help businesses modernize their technology stack and digital processes.",
      icon: Rocket,
      price: "From $5,000/month",
      features: ["Technology Assessment", "Digital Strategy", "Process Optimization", "Change Management", "Training & Support", "ROI Measurement"],
      benefits: ["Accelerate digital transformation", "Improve operational efficiency", "Reduce technology costs", "Expert guidance"],
      path: "/services/digital-transformation",
      rating: 4.9,
      reviewCount: 98,
      category: "IT & Consulting"
    }
  ];

  const microSaaSServices = [
    {
      title: "Website Analytics & SEO",
      description: "Comprehensive website analytics and SEO optimization platform to improve your online presence and drive traffic.",
      icon: BarChart3,
      price: "From $200/month",
      features: ["Traffic Analytics", "SEO Optimization", "Keyword Tracking", "Performance Monitoring", "Competitor Analysis", "Automated Reports"],
      benefits: ["Increase organic traffic by 60%", "Improve search rankings", "Track performance metrics", "Automated optimization"],
      path: "/services/website-analytics",
      rating: 4.8,
      reviewCount: 456,
      category: "Micro SaaS & Marketing"
    },
    {
      title: "Email Marketing Automation",
      description: "Powerful email marketing platform with automation, segmentation, and analytics to boost customer engagement.",
      icon: Mail,
      price: "From $150/month",
      features: ["Email Automation", "List Segmentation", "A/B Testing", "Analytics Dashboard", "Template Library", "CRM Integration"],
      benefits: ["Increase open rates by 40%", "Automate customer journeys", "Improve conversion rates", "Detailed analytics"],
      path: "/services/email-marketing",
      rating: 4.7,
      reviewCount: 323,
      category: "Micro SaaS & Marketing"
    },
    {
      title: "Customer Feedback Surveys",
      description: "Professional survey platform to collect customer feedback, measure satisfaction, and improve your products.",
      icon: MessageSquare,
      price: "From $100/month",
      features: ["Survey Builder", "Response Collection", "Data Analysis", "Custom Reports", "Integration APIs", "Multi-language Support"],
      benefits: ["Improve customer satisfaction", "Make data-driven decisions", "Increase customer retention", "Professional insights"],
      path: "/services/customer-feedback",
      rating: 4.6,
      reviewCount: 234,
      category: "Micro SaaS & Analytics"
    },
    {
      title: "Affiliate Tracking Platform",
      description: "Complete affiliate marketing solution to manage partnerships, track performance, and optimize revenue.",
      icon: TrendingUp,
      price: "From $300/month",
      features: ["Affiliate Management", "Performance Tracking", "Commission Management", "Marketing Materials", "Analytics Dashboard", "Payment Processing"],
      benefits: ["Increase affiliate revenue by 50%", "Automate commission payments", "Track performance metrics", "Scale partnerships"],
      path: "/services/affiliate-tracking",
      rating: 4.8,
      reviewCount: 167,
      category: "Micro SaaS & Marketing"
    },
    {
      title: "Mobile Survey App",
      description: "Mobile-first survey application for field research, customer feedback, and data collection on the go.",
      icon: Smartphone,
      price: "From $80/month",
      features: ["Mobile App", "Offline Support", "GPS Integration", "Photo/Video Capture", "Real-time Sync", "Custom Forms"],
      benefits: ["Collect data anywhere", "Improve response rates", "Real-time insights", "Professional mobile experience"],
      path: "/services/mobile-survey",
      rating: 4.7,
      reviewCount: 189,
      category: "Micro SaaS & Mobile"
    },
    {
      title: "Micro CRM Platform",
      description: "Lightweight CRM solution designed for small businesses to manage contacts, deals, and customer relationships.",
      icon: Users,
      price: "From $120/month",
      features: ["Contact Management", "Deal Tracking", "Task Management", "Email Integration", "Basic Analytics", "Mobile Access"],
      benefits: ["Organize customer data", "Track sales pipeline", "Improve customer relationships", "Affordable CRM solution"],
      path: "/services/micro-crm",
      rating: 4.6,
      reviewCount: 278,
      category: "Micro SaaS & CRM"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const ServiceCard = ({ service, index }: { service: any; index: number }) => (
    <motion.div
      variants={itemVariants}
      className="group"
    >
      <div className="glass rounded-2xl p-8 border border-white/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm h-full">
        <div className="flex items-center justify-between mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <service.icon className="w-8 h-8 text-white" />
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
              {service.category}
            </div>
            <div className="text-2xl font-bold text-cyan-400 mt-2">
              {service.price}
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
          {service.title}
        </h3>
        
        <p className="text-gray-300 mb-6 leading-relaxed">
          {service.description}
        </p>
        
        {/* Rating */}
        <div className="flex items-center mb-6">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'fill-current text-yellow-400' : 'text-gray-600'}`} />
            ))}
            <span className="text-sm text-gray-400 ml-2">({service.reviewCount})</span>
          </div>
        </div>
        
        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {service.features.slice(0, 4).map((feature: string, idx: number) => (
              <li key={idx} className="text-sm text-gray-300 flex items-center">
                <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Benefits */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Benefits:</h4>
          <ul className="space-y-2">
            {service.benefits.slice(0, 2).map((benefit: string, idx: number) => (
              <li key={idx} className="text-sm text-gray-300 flex items-center">
                <Target className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        
        <Link
          to={service.path}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 text-center block group-hover:shadow-lg group-hover:shadow-cyan-500/25"
        >
          Learn More
          <ArrowRight className="ml-2 w-4 h-4 inline" />
        </Link>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-sm font-medium mb-8 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 mr-2 text-cyan-400" />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Comprehensive Technology Solutions
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Discover our comprehensive range of AI-powered solutions, IT services, and innovative Micro SaaS platforms designed to transform your business operations and drive growth.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link 
              to="/contact"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link 
              to="/request-quote"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-sm"
            >
              Request Free Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                AI-Powered Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage the power of artificial intelligence to automate processes, gain insights, and drive innovation across your organization
            </p>
          </motion.div>
          
          <div className="mt-8 text-center space-y-4">
            <Link to="/innovative-ai-services" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 font-semibold">
              <Sparkles className="w-5 h-5 mr-2" />
              Explore Our Innovative AI Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <div>
              <Link to="/new-innovative-services" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-400 hover:to-blue-400 transition-all duration-300 font-semibold">
                <Rocket className="w-5 h-5 mr-2" />
                Discover New Services 2025
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCategories.map((c) => (
              <Link key={c.title} to={c.href} className="block bg-slate-900/60 border border-cyan-400/15 hover:border-cyan-400/40 rounded-2xl p-6 text-left">
                <div className="text-xs uppercase tracking-wide text-cyan-300/70">Featured</div>
                <div className="mt-2 text-xl font-semibold">{c.title}</div>
                <div className="mt-2 text-sm text-slate-300">{c.desc}</div>
              </Link>
            ))}
          </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                IT & Infrastructure Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional IT services to build, maintain, and optimize your technology infrastructure for maximum performance and security
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {itServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Micro SaaS Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Micro SaaS Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized, affordable software solutions designed to solve specific business problems with fast implementation and immediate value
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {microSaaSServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="glass rounded-3xl p-12 border border-white/20 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Ready to Get Started?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our team to discuss your needs and get a personalized solution that fits your business requirements
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
              >
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link 
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-sm"
              >
                Request Free Quote
              </Link>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">24/7 Support</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <DollarSign className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">Flexible Pricing</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">30-Day Guarantee</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

