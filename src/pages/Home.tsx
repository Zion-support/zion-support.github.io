import React, { Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Globe, 
  Cpu, 
  Lock, 
  Heart, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  HelpCircle, 
  DollarSign, 
  Gauge, 
  BarChart3, 
  Target, 
  Lightbulb, 
  Database, 
  Network, 
  Eye, 
  Globe2, 
  Smartphone, 
  Monitor, 
  Server, 
  Atom, 
  Car, 
  Scale, 
  Leaf, 
  Factory, 
  Building, 
  Clock, 
  Phone, 
  Mail, 
  TrendingUp 
} from 'lucide-react';
import { HomePageSEO } from "@/components/EnhancedSEO";
import { EnhancedHeroSection } from "@/components/EnhancedHeroSection";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

// Lazy load heavy components with better code splitting
const CategoriesSection = React.lazy(() => import("@/components/CategoriesSection"));
const BenefitsSection = React.lazy(() => import("@/components/BenefitsSection"));
const HowItWorksSection = React.lazy(() => import("@/components/HowItWorksSection"));
const NewsletterSection = React.lazy(() => import("@/components/NewsletterSection"));
const FeaturedListingsSection = React.lazy(() => import("@/components/FeaturedListingsSection"));
const QuickAccess = React.lazy(() => import("@/components/home/QuickAccess"));
const FeatureCTAs = React.lazy(() => import("@/components/home/FeatureCTAs"));
const FeatureHighlights = React.lazy(() => import("@/components/home/FeatureHighlights"));
const ITServiceRequestHero = React.lazy(() => import("@/components/home/ITServiceRequestHero"));
const FloatingCTA = React.lazy(() => import("@/components/FloatingCTA"));
const PricingSection = React.lazy(() => import("@/components/PricingSection"));
const TechSolutionsSection = React.lazy(() => import("@/components/TechSolutionsSection"));
const CaseStudiesSection = React.lazy(() => import("@/components/CaseStudiesSection"));
const TeamExpertiseSection = React.lazy(() => import("@/components/TeamExpertiseSection"));
const GlobalPresenceSection = React.lazy(() => import("@/components/GlobalPresenceSection"));
const InnovationResearchSection = React.lazy(() => import("@/components/InnovationResearchSection"));
const ClientSuccessStoriesSection = React.lazy(() => import("@/components/ClientSuccessStoriesSection"));
const TechnologyStackSection = React.lazy(() => import("@/components/TechnologyStackSection"));
const SecurityComplianceSection = React.lazy(() => import("@/components/SecurityComplianceSection"));
const AIServicesShowcase = React.lazy(() => import("@/components/AIServicesShowcase"));
const InteractiveTestimonials = React.lazy(() => import("@/components/InteractiveTestimonials"));
const ServicesShowcase = React.lazy(() => import("@/components/ServicesShowcase"));

interface StatItem {
  value: string;
  label: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
}

interface AIService {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  href: string;
  color: string;
}

interface ServiceCategory {
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  href: string;
  count: number;
  color: string;
  services: string[];
}

interface EmergingTech {
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  impact: string;
  timeline: string;
  color: string;
}

interface ClientStory {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  logo: string;
  testimonial: string;
  author: string;
  role: string;
}

interface Technology {
  name: string;
  category: string;
  icon: React.ComponentType<any>;
  description: string;
  expertise: number;
  color: string;
}

const stats: StatItem[] = [
  {
    value: "500+",
    label: "Happy Clients",
    description: "Trusted by businesses worldwide",
    icon: Users,
    color: "text-zion-cyan"
  },
  {
    value: "99.9%",
    label: "Uptime",
    description: "Reliable service delivery",
    icon: Shield,
    color: "text-zion-green"
  },
  {
    value: "24/7",
    label: "Support",
    description: "Round-the-clock assistance",
    icon: Clock,
    color: "text-zion-purple"
  },
  {
    value: "50%",
    label: "Cost Reduction",
    description: "Average savings for clients",
    icon: DollarSign,
    color: "text-zion-orange"
  }
];

const aiServices: AIService[] = [
  {
    title: "AI-Powered Analytics",
    description: "Transform your data into actionable insights with advanced machine learning algorithms",
    icon: Brain,
    features: ["Predictive Modeling", "Real-time Processing", "Natural Language Processing", "Computer Vision"],
    href: "/services/ai-analytics",
    color: "from-zion-cyan to-zion-blue"
  },
  {
    title: "Intelligent Automation",
    description: "Streamline operations with AI-driven process automation and workflow optimization",
    icon: Zap,
    features: ["Process Mining", "RPA Integration", "Smart Workflows", "Performance Monitoring"],
    href: "/services/automation",
    color: "from-zion-purple to-zion-pink"
  },
  {
    title: "Cognitive Computing",
    description: "Build intelligent systems that learn, reason, and interact naturally with users",
    icon: Cpu,
    features: ["Machine Learning", "Deep Learning", "Neural Networks", "Cognitive APIs"],
    href: "/services/cognitive-computing",
    color: "from-zion-green to-zion-teal"
  }
];

const serviceCategories: ServiceCategory[] = [
  {
    name: "AI & Machine Learning",
    description: "Cutting-edge artificial intelligence solutions",
    icon: Brain,
    href: "/services/ai-ml",
    count: 12,
    color: "text-zion-cyan",
    services: ["Predictive Analytics", "Computer Vision", "NLP", "Deep Learning"]
  },
  {
    name: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automation",
    icon: Cloud,
    href: "/services/cloud-devops",
    count: 8,
    color: "text-zion-blue",
    services: ["AWS", "Azure", "Kubernetes", "CI/CD"]
  },
  {
    name: "Cybersecurity",
    description: "Advanced security and compliance solutions",
    icon: Shield,
    href: "/services/cybersecurity",
    count: 15,
    color: "text-zion-green",
    services: ["Threat Detection", "Penetration Testing", "Compliance", "Incident Response"]
  },
  {
    name: "Data Analytics",
    description: "Comprehensive data insights and visualization",
    icon: BarChart3,
    href: "/services/data-analytics",
    count: 10,
    color: "text-zion-purple",
    services: ["Big Data", "Business Intelligence", "Data Warehousing", "Visualization"]
  }
];

const emergingTechnologies: EmergingTech[] = [
  {
    name: "Quantum Computing",
    description: "Next-generation computing power for complex problem solving",
    icon: Atom,
    impact: "High",
    timeline: "2025-2030",
    color: "text-zion-cyan"
  },
  {
    name: "Edge AI",
    description: "AI processing at the network edge for real-time insights",
    icon: Network,
    impact: "Medium",
    timeline: "2024-2026",
    color: "text-zion-purple"
  },
  {
    name: "Sustainable Tech",
    description: "Green technology solutions for environmental impact",
    icon: Leaf,
    impact: "High",
    timeline: "2024-2028",
    color: "text-zion-green"
  }
];

const clientStories: ClientStory[] = [
  {
    company: "TechCorp Industries",
    industry: "Manufacturing",
    challenge: "Inefficient production processes and high operational costs",
    solution: "Implemented AI-powered predictive maintenance and process optimization",
    results: ["30% reduction in downtime", "25% increase in productivity", "40% cost savings"],
    logo: "/images/clients/techcorp-logo.png",
    testimonial: "Zion Tech Group transformed our manufacturing operations with their AI solutions. The results exceeded our expectations.",
    author: "Sarah Johnson",
    role: "CTO"
  },
  {
    company: "Global Finance Ltd",
    industry: "Financial Services",
    challenge: "Complex regulatory compliance and security threats",
    solution: "Deployed comprehensive cybersecurity framework and compliance automation",
    results: ["100% compliance rate", "Zero security breaches", "60% faster audits"],
    logo: "/images/clients/global-finance-logo.png",
    testimonial: "Their cybersecurity expertise and attention to detail gave us complete peace of mind.",
    author: "Michael Chen",
    role: "CISO"
  }
];

const technologies: Technology[] = [
  {
    name: "React",
    category: "Frontend",
    icon: Monitor,
    description: "Modern UI development framework",
    expertise: 95,
    color: "text-blue-500"
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: Server,
    description: "Scalable server-side JavaScript",
    expertise: 90,
    color: "text-green-500"
  },
  {
    name: "Python",
    category: "AI/ML",
    icon: Brain,
    description: "Machine learning and data science",
    expertise: 92,
    color: "text-yellow-500"
  },
  {
    name: "AWS",
    category: "Cloud",
    icon: Cloud,
    description: "Cloud infrastructure and services",
    expertise: 88,
    color: "text-orange-500"
  }
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <HomePageSEO />
      
      {/* Enhanced Hero Section */}
      <EnhancedHeroSection />

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-zion-slate to-zion-slate-dark">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-cyan/10 rounded-full mb-4 group-hover:bg-zion-cyan/20 transition-colors duration-300">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-lg font-medium text-zion-cyan mb-2">{stat.label}</p>
                <p className="text-sm text-gray-400">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Services Showcase */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI-Powered Solutions for the Future
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to transform your business operations, 
              gain competitive advantages, and unlock new opportunities for growth and innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-zion-slate to-zion-slate-dark border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors duration-300 group-hover:translate-x-1"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-zion-slate">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI and machine learning to cloud infrastructure and cybersecurity, 
              we provide end-to-end technology solutions tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="group"
              >
                <Link
                  to={category.href}
                  className="block bg-gradient-to-br from-zion-slate-dark to-zion-slate border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-zion-cyan/10 rounded-xl mb-4 group-hover:bg-zion-cyan/20 transition-colors duration-300`}>
                    <category.icon className={`w-7 h-7 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{category.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-zion-cyan text-sm font-medium">{category.count} Services</span>
                    <ArrowRight className="w-5 h-5 text-zion-cyan group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emerging Technologies */}
      <section className="py-20 bg-gradient-to-b from-zion-slate to-zion-slate-dark">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Emerging Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead of the curve with our research and development in cutting-edge technologies 
              that will shape the future of business and innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {emergingTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-gradient-to-br from-zion-slate to-zion-slate-dark border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-zion-cyan/10 rounded-2xl mb-6`}>
                  <tech.icon className={`w-8 h-8 ${tech.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{tech.name}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{tech.description}</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Impact:</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      tech.impact === 'High' ? 'bg-green-500/20 text-green-400' :
                      tech.impact === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {tech.impact}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Timeline:</span>
                    <span className="text-zion-cyan font-medium">{tech.timeline}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses across industries achieve remarkable results 
              through innovative technology solutions and strategic consulting.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {clientStories.map((story, index) => (
              <motion.div
                key={story.company}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="bg-gradient-to-br from-zion-slate to-zion-slate-dark border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-zion-cyan/10 rounded-xl flex items-center justify-center mr-4">
                    <Building className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{story.company}</h3>
                    <p className="text-zion-cyan">{story.industry}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                  <p className="text-gray-300">{story.challenge}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                  <p className="text-gray-300">{story.solution}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Results:</h4>
                  <ul className="space-y-2">
                    {story.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <blockquote className="border-l-4 border-zion-cyan pl-4 mb-4">
                  <p className="text-gray-300 italic">"{story.testimonial}"</p>
                </blockquote>
                
                <div className="text-right">
                  <p className="text-white font-semibold">{story.author}</p>
                  <p className="text-zion-cyan text-sm">{story.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-zion-slate">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Technology Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest technologies and frameworks to deliver robust, 
              scalable, and innovative solutions that drive business success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.6, delay: 2.0 + index * 0.1 }}
                className="bg-gradient-to-br from-zion-slate-dark to-zion-slate border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-cyan/10 rounded-2xl mb-4">
                    <tech.icon className={`w-8 h-8 ${tech.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{tech.description}</p>
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-1">
                      <span>Expertise</span>
                      <span>{tech.expertise}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${tech.expertise}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-xs text-zion-cyan font-medium">{tech.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 2.4 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Let's discuss how our AI-powered solutions and technology expertise 
              can help you achieve your business goals and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-slate font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-slate transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lazy Loaded Components */}
      <Suspense fallback={<LoadingSpinner />}>
        <CategoriesSection />
        <BenefitsSection />
        <HowItWorksSection />
        <NewsletterSection />
        <FeaturedListingsSection />
        <QuickAccess />
        <FeatureCTAs />
        <FeatureHighlights />
        <ITServiceRequestHero />
        <FloatingCTA />
        <PricingSection />
        <TechSolutionsSection />
        <CaseStudiesSection />
        <TeamExpertiseSection />
        <GlobalPresenceSection />
        <InnovationResearchSection />
        <ClientSuccessStoriesSection />
        <TechnologyStackSection />
        <SecurityComplianceSection />
        <AIServicesShowcase />
        <InteractiveTestimonials />
        <ServicesShowcase />
      </Suspense>
    </>
  );
}
