import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Atom, 
  Rocket, 
  Code, 
  Target, 
  Users, 
  BookOpen, 
  HelpCircle, 
  DollarSign, 
  MessageCircle,
  Home,
  Star,
  CheckCircle,
  Globe,
  Award,
  TrendingUp,
  Lightbulb,
  FileText,
  Video,
  GraduationCap,
  Lock,
  Eye,
  Heart
} from 'lucide-react';

export default function Sitemap() {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "text-blue-500",
      services: [
        { name: "AI Business Intelligence", href: "/services/ai-business-intelligence" },
        { name: "AI Compliance Assistant", href: "/services/ai-compliance-assistant" },
        { name: "AI Sales Copilot", href: "/services/ai-sales-copilot" },
        { name: "AI Content Marketing", href: "/services/ai-content-marketing-suite" },
        { name: "AI Customer Support", href: "/services/ai-customer-support-automation" },
        { name: "AI Project Management", href: "/services/ai-project-management" },
        { name: "AI Research Assistant", href: "/services/ai-autonomous-research-assistant" },
        { name: "AI Financial Trading", href: "/services/ai-financial-trading-platform" },
        { name: "AI Healthcare Platform", href: "/services/ai-healthcare-platform" },
        { name: "AI Quantum Hybrid", href: "/services/ai-quantum-hybrid-platform" },
        { name: "AI Data Analytics", href: "/services/ai-data-analytics-platform" },
        { name: "AI Enterprise Intelligence", href: "/services/ai-enterprise-intelligence-platform" },
        { name: "AI Customer Experience", href: "/services/ai-customer-experience-analytics" },
        { name: "AI Financial Risk Management", href: "/services/ai-financial-risk-management" },
        { name: "AI Content Intelligence", href: "/services/ai-content-intelligence-platform" },
        { name: "AI Autonomous Business", href: "/services/ai-autonomous-business-operations" }
      ]
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      color: "text-red-500",
      services: [
        { name: "AI Cybersecurity Platform", href: "/services/ai-cybersecurity-platform" },
        { name: "Security Headers & CSP", href: "/services/security-headers-csp" },
        { name: "DSR Privacy Portal", href: "/services/dsr-portal" },
        { name: "Zero Trust Network", href: "/services/zero-trust-network-access" },
        { name: "SOC2 Compliance", href: "/services/soc2-compliance-automation" },
        { name: "Threat Intelligence", href: "/services/ai-cyber-threat-intelligence" },
        { name: "Privacy Management", href: "/services/privacy-management" },
        { name: "Security Auditing", href: "/services/security-auditing" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "text-cyan-500",
      services: [
        { name: "Cloud DevOps", href: "/services/cloud-devops" },
        { name: "IT Infrastructure", href: "/services/it-infrastructure" },
        { name: "FinOps Advisor", href: "/services/finops-advisor" },
        { name: "Cloud Migration", href: "/services/cloud-migration-services" },
        { name: "Edge Computing", href: "/services/iot-edge-computing" },
        { name: "Container Orchestration", href: "/services/kubernetes-services" },
        { name: "Serverless Architecture", href: "/services/serverless-architecture" },
        { name: "Multi-Cloud Strategy", href: "/services/multi-cloud-strategy" }
      ]
    },
    {
      title: "Quantum Computing",
      icon: Atom,
      color: "text-purple-500",
      services: [
        { name: "Quantum Edge Computing", href: "/services/quantum-edge-computing" },
        { name: "Quantum Neural Networks", href: "/services/quantum-neural-networks" },
        { name: "Quantum Financial Trading", href: "/services/quantum-financial-trading" },
        { name: "AI Quantum Hybrid", href: "/services/ai-quantum-hybrid-platform" },
        { name: "Quantum Cryptography", href: "/services/quantum-cryptography" },
        { name: "Quantum Machine Learning", href: "/services/quantum-machine-learning" }
      ]
    },
    {
      title: "Digital Transformation",
      icon: Rocket,
      color: "text-green-500",
      services: [
        { name: "Digital Twin Solutions", href: "/services/digital-twin" },
        { name: "IoT Edge Computing", href: "/services/iot-edge-computing" },
        { name: "Blockchain Solutions", href: "/services/blockchain-enterprise-solutions" },
        { name: "5G Enterprise Solutions", href: "/services/5g-enterprise-solutions" },
        { name: "IT Consulting", href: "/services/it-consulting" },
        { name: "Change Management", href: "/services/change-management" },
        { name: "Process Automation", href: "/services/process-automation" }
      ]
    },
    {
      title: "Micro SaaS",
      icon: Code,
      color: "text-yellow-500",
      services: [
        { name: "Custom SaaS Development", href: "/services/micro-saas-solutions" },
        { name: "API Development", href: "/services/api-development" },
        { name: "Mobile App Development", href: "/services/mobile-development" },
        { name: "Web Application Development", href: "/services/web-development" },
        { name: "E-commerce Solutions", href: "/services/ecommerce-personalization" },
        { name: "Platform Integration", href: "/services/platform-integration" }
      ]
    }
  ];

  const solutionCategories = [
    {
      title: "Industry Solutions",
      icon: Target,
      color: "text-green-500",
      solutions: [
        { name: "Healthcare Solutions", href: "/solutions/healthcare" },
        { name: "Financial Solutions", href: "/solutions/financial" },
        { name: "Manufacturing Solutions", href: "/solutions/manufacturing" },
        { name: "Government Solutions", href: "/solutions/government" },
        { name: "Retail Solutions", href: "/solutions/retail" },
        { name: "Education Solutions", href: "/solutions/education" },
        { name: "Startup Solutions", href: "/solutions/startup" },
        { name: "Enterprise Solutions", href: "/enterprise" }
      ]
    },
    {
      title: "Technology Solutions",
      icon: Zap,
      color: "text-blue-500",
      solutions: [
        { name: "Quantum Edge Computing", href: "/solutions/quantum-edge-computing" },
        { name: "AI Autonomous Business", href: "/solutions/ai-autonomous-business" },
        { name: "Blockchain & Web3", href: "/solutions/blockchain-web3" },
        { name: "IoT Edge Computing", href: "/solutions/iot-edge-computing" },
        { name: "Space Technology", href: "/solutions/space-tech" },
        { name: "Digital Twin Solutions", href: "/solutions/digital-twin" }
      ]
    }
  ];

  const resourceCategories = [
    {
      title: "Content & Learning",
      icon: BookOpen,
      color: "text-purple-500",
      resources: [
        { name: "Blog", href: "/blog" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "White Papers", href: "/white-papers" },
        { name: "Webinars", href: "/webinars" },
        { name: "Training", href: "/training" },
        { name: "Tutorials", href: "/tutorials" },
        { name: "Video Library", href: "/videos" },
        { name: "Knowledge Base", href: "/knowledge-base" }
      ]
    },
    {
      title: "Technical Resources",
      icon: FileText,
      color: "text-cyan-500",
      resources: [
        { name: "Documentation", href: "/documentation" },
        { name: "API Reference", href: "/api" },
        { name: "Developer Portal", href: "/developer" },
        { name: "Code Examples", href: "/code-examples" },
        { name: "SDK Downloads", href: "/sdk" },
        { name: "Integration Guides", href: "/integration-guides" }
      ]
    },
    {
      title: "Research & Innovation",
      icon: Lightbulb,
      color: "text-yellow-500",
      resources: [
        { name: "Research & Development", href: "/research-development" },
        { name: "Innovation Lab", href: "/innovation-lab" },
        { name: "Technology Trends", href: "/tech-trends" },
        { name: "Future Insights", href: "/future-insights" },
        { name: "Academic Partnerships", href: "/academic-partnerships" },
        { name: "Patent Portfolio", href: "/patents" }
      ]
    }
  ];

  const companyPages = [
    { name: "About Us", href: "/about", icon: Users },
    { name: "Leadership", href: "/leadership", icon: Star },
    { name: "Careers", href: "/careers", icon: TrendingUp },
    { name: "Partners", href: "/partners", icon: Globe },
    { name: "News", href: "/news", icon: FileText },
    { name: "Events", href: "/events", icon: Video },
    { name: "Contact", href: "/contact", icon: MessageCircle },
    { name: "Request Quote", href: "/request-quote", icon: DollarSign },
    { name: "Schedule Demo", href: "/schedule-demo", icon: Users }
  ];

  const supportPages = [
    { name: "Help Center", href: "/help", icon: HelpCircle },
    { name: "FAQ", href: "/faq", icon: HelpCircle },
    { name: "Contact Support", href: "/contact", icon: MessageCircle },
    { name: "Training", href: "/training", icon: GraduationCap },
    { name: "Tutorials", href: "/tutorials", icon: BookOpen },
    { name: "Community Forum", href: "/community", icon: Users },
    { name: "Support Tickets", href: "/support-tickets", icon: MessageCircle }
  ];

  const legalPages = [
    { name: "Privacy Policy", href: "/privacy", icon: Lock },
    { name: "Terms of Service", href: "/terms", icon: FileText },
    { name: "Cookie Policy", href: "/cookies", icon: Eye },
    { name: "Accessibility", href: "/accessibility", icon: Eye },
    { name: "Security", href: "/security", icon: Shield },
    { name: "Compliance", href: "/compliance", icon: CheckCircle }
  ];

  const achievements = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle, color: "text-green-500" },
    { number: "50+", label: "Team Members", icon: Users, color: "text-blue-500" },
    { number: "25+", label: "Countries Served", icon: Globe, color: "text-purple-500" },
    { number: "99%", label: "Client Satisfaction", icon: Star, color: "text-yellow-500" },
    { number: "15+", label: "Years Experience", icon: Award, color: "text-red-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Zion Tech Group Sitemap
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete navigation guide to all our services, solutions, and resources
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16">
          
          {/* Quick Navigation */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
              <Home className="w-6 h-6 text-blue-400" />
              <span>Quick Navigation</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {companyPages.slice(0, 8).map((page) => (
                <Link
                  key={page.name}
                  to={page.href}
                  className="flex items-center space-x-3 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-all duration-200 group"
                >
                  <page.icon className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                  <span className="text-white group-hover:text-blue-300">{page.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
              <Zap className="w-6 h-6 text-blue-400" />
              <span>Our Services</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {serviceCategories.map((category) => (
                <div key={category.title} className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {category.services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-600/50 transition-all duration-200 group"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:bg-blue-300"></div>
                        <span className="text-gray-300 group-hover:text-white">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions Section */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
              <Target className="w-6 h-6 text-green-400" />
              <span>Industry & Technology Solutions</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutionCategories.map((category) => (
                <div key={category.title} className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {category.solutions.map((solution) => (
                      <Link
                        key={solution.name}
                        to={solution.href}
                        className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-600/50 transition-all duration-200 group"
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full group-hover:bg-green-300"></div>
                        <span className="text-gray-300 group-hover:text-white">{solution.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
              <BookOpen className="w-6 h-6 text-purple-400" />
              <span>Resources & Learning</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {resourceCategories.map((category) => (
                <div key={category.title} className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {category.resources.map((resource) => (
                      <Link
                        key={resource.name}
                        to={resource.href}
                        className="block p-3 bg-slate-700/30 rounded-lg hover:bg-slate-600/50 transition-all duration-200 group"
                      >
                        <span className="text-gray-300 group-hover:text-white">{resource.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support & Legal Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Support */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <HelpCircle className="w-6 h-6 text-cyan-400" />
                <span>Support & Help</span>
              </h2>
              <div className="space-y-3">
                {supportPages.map((page) => (
                  <Link
                    key={page.name}
                    to={page.href}
                    className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-600/50 transition-all duration-200 group"
                  >
                    <page.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                    <span className="text-gray-300 group-hover:text-white">{page.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <Shield className="w-6 h-6 text-red-400" />
                <span>Legal & Compliance</span>
              </h2>
              <div className="space-y-3">
                {legalPages.map((page) => (
                  <Link
                    key={page.name}
                    to={page.href}
                    className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-600/50 transition-all duration-200 group"
                  >
                    <page.icon className="w-5 h-5 text-red-400 group-hover:text-red-300" />
                    <span className="text-gray-300 group-hover:text-white">{page.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Our Achievements</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {achievements.map((achievement) => (
                <div key={achievement.label} className="text-center">
                  <div className="flex justify-center mb-3">
                    <achievement.icon className={`w-10 h-10 ${achievement.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{achievement.number}</div>
                  <div className="text-sm text-gray-400">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Explore our comprehensive services and solutions. Contact us today to discuss how we can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Contact Us
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}