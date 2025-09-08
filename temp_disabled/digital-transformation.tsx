import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Rocket,
  Zap,
  Target,
  Users,
  BarChart3,
  Brain,
  Shield,
  Globe,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Star,
  TrendingUp,
  Activity,
  Code,
  Database,
  Server,
  Network,
  Eye,
  Heart,
  Building,
  Briefcase,
  TestTube,
  GraduationCap,
  HelpCircle,
  Lock,
  Cpu,
  Cloud,
  Smartphone,
  Monitor
} from 'lucide-react';

export function DigitalTransformationPage() {
  const transformationServices = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud infrastructure for scalability and cost optimization',
      icon: Cloud,
      href: '/services/cloud-migration',
      features: ['Infrastructure Assessment', 'Migration Planning', 'Data Migration', 'Performance Optimization'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'DevOps Automation',
      description: 'Streamline development and operations with automated CI/CD pipelines',
      icon: Code,
      href: '/services/devops-automation',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Automated Testing', 'Deployment Automation'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'API Development',
      description: 'Build robust and scalable APIs for seamless system integration',
      icon: Network,
      href: '/services/api-development',
      features: ['RESTful APIs', 'GraphQL Services', 'API Gateway', 'Documentation'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics',
      icon: BarChart3,
      href: '/services/data-analytics',
      features: ['Data Warehousing', 'Business Intelligence', 'Predictive Analytics', 'Real-time Dashboards'],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Legacy Modernization',
      description: 'Transform legacy systems into modern, scalable applications',
      icon: Building,
      href: '/services/legacy-modernization',
      features: ['System Assessment', 'Architecture Redesign', 'Data Migration', 'Performance Optimization'],
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Digital Workplace',
      description: 'Create modern, collaborative digital work environments',
      icon: Users,
      href: '/services/digital-workplace',
      features: ['Collaboration Tools', 'Remote Work Solutions', 'Digital Communication', 'Productivity Apps'],
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  const transformationCapabilities = [
    {
      title: 'Strategy & Planning',
      description: 'Comprehensive digital transformation strategy development',
      icon: Target,
      features: ['Current State Assessment', 'Future State Vision', 'Roadmap Development', 'Change Management']
    },
    {
      title: 'Technology Architecture',
      description: 'Modern, scalable technology architecture design',
      icon: Building,
      features: ['Microservices Design', 'Cloud Architecture', 'API-First Approach', 'Security Integration']
    },
    {
      title: 'Process Optimization',
      description: 'Streamline business processes with digital solutions',
      icon: TrendingUp,
      features: ['Process Mapping', 'Automation Opportunities', 'Workflow Design', 'Performance Metrics']
    },
    {
      title: 'Change Management',
      description: 'Guide organizations through digital transformation',
      icon: Users,
      features: ['Stakeholder Engagement', 'Training Programs', 'Communication Plans', 'Success Metrics']
    }
  ];

  const industries = [
    { name: 'Manufacturing', icon: Activity, description: 'Industry 4.0 and smart manufacturing solutions' },
    { name: 'Healthcare', icon: Heart, description: 'Digital health and patient care transformation' },
    { name: 'Finance', icon: Building, description: 'Fintech and digital banking solutions' },
    { name: 'Retail', icon: Network, description: 'E-commerce and omnichannel retail' },
    { name: 'Education', icon: GraduationCap, description: 'Digital learning and educational technology' },
    { name: 'Government', icon: Shield, description: 'Digital government and citizen services' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-orange-900 to-red-900 py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-500/20 rounded-full mb-6">
              <Rocket className="w-5 h-5 text-orange-400" />
              <span className="text-orange-400 font-medium">Digital Transformation</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent">
              Digital Transformation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business for the digital age with our comprehensive 
              digital transformation services. Modernize infrastructure, optimize 
              processes, and unlock new growth opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Start Transformation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-200 font-semibold text-lg border border-white/20 hover:border-white/40"
              >
                <span>View All Services</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transformation Capabilities */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Transformation Capabilities</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our digital transformation approach combines strategic planning, 
              modern technology, and change management to ensure successful outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transformationCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-400 mb-4">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Digital Transformation Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our comprehensive range of digital transformation services 
              designed to modernize your business and drive innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformationServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-orange-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-orange-500/20"
              >
                <div className={`h-32 bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                  <service.icon className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-orange-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.href}
                    className="inline-flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors group-hover:translate-x-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Industries We Transform</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our digital transformation expertise spans across diverse industries, 
              helping organizations adapt to the digital economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-400">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Benefits of Digital Transformation
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Digital transformation delivers measurable benefits that drive business 
            growth and competitive advantage.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Increased Efficiency</h3>
              <p className="text-orange-100">Streamlined processes and automated workflows</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Better Customer Experience</h3>
              <p className="text-orange-100">Enhanced digital interactions and personalized services</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Innovation & Growth</h3>
              <p className="text-orange-100">New business models and revenue opportunities</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Start Your Transformation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/request-quote"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white"
            >
              <span>Request a Quote</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Don't get left behind in the digital economy. Our transformation experts 
            are ready to help you modernize and thrive in the digital age.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Begin Transformation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/training"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white"
            >
              <span>Learn More</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DigitalTransformationPage;