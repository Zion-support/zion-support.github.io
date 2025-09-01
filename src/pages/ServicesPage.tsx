import React from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  Shield,
  Cloud,
  Workflow,
  Briefcase,
  Package,
  Target,
  Heart,
  DollarSign,
  Building,
  ShoppingCart,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Globe,
  Lock,
  Database,
  Network,
  Smartphone,
  Code,
  Server,
  Chip,
  Wifi,
  Bot,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  BarChart3,
  Users2,
  Settings,
  Palette,
  Rocket,
  Award,
  TrendingUp,
  Cpu,
  GraduationCap,
  MessageCircle,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  Instagram,
} from 'lucide-react';

export default function ServicesPage() {
  const serviceCategories = [
    {
      id: 'ai-services',
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Cutting-edge artificial intelligence solutions for modern businesses',
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          name: 'AI Business Intelligence',
          description: 'Transform your data into actionable insights with AI-powered analytics',
          price: 'From $5,000',
          features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Machine Learning Models'],
        },
        {
          name: 'AI Automation',
          description: 'Automate repetitive tasks and processes with intelligent AI solutions',
          price: 'From $3,000',
          features: ['Process Automation', 'Document Processing', 'Customer Service Bots', 'Workflow Optimization'],
        },
        {
          name: 'AI Consulting',
          description: 'Strategic guidance for implementing AI in your organization',
          price: 'From $2,000',
          features: ['AI Strategy', 'Technology Assessment', 'Implementation Planning', 'Team Training'],
        },
      ],
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Comprehensive security solutions to protect your digital assets',
      color: 'from-red-500 to-orange-500',
      services: [
        {
          name: 'Security Assessment',
          description: 'Comprehensive security audits and vulnerability assessments',
          price: 'From $4,000',
          features: ['Penetration Testing', 'Security Audits', 'Compliance Reviews', 'Risk Assessment'],
        },
        {
          name: 'Security Implementation',
          description: 'Deploy and configure enterprise-grade security solutions',
          price: 'From $6,000',
          features: ['Firewall Configuration', 'Intrusion Detection', 'Access Control', 'Encryption'],
        },
        {
          name: 'Security Monitoring',
          description: '24/7 security monitoring and incident response services',
          price: 'From $2,500/month',
          features: ['Real-time Monitoring', 'Threat Detection', 'Incident Response', 'Security Reports'],
        },
      ],
    },
    {
      id: 'cloud-services',
      title: 'Cloud Infrastructure',
      icon: Cloud,
      description: 'Scalable cloud solutions for growing businesses',
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          name: 'Cloud Migration',
          description: 'Seamlessly migrate your infrastructure to the cloud',
          price: 'From $8,000',
          features: ['Infrastructure Assessment', 'Migration Planning', 'Data Migration', 'Testing & Validation'],
        },
        {
          name: 'Cloud Architecture',
          description: 'Design and implement scalable cloud architectures',
          price: 'From $10,000',
          features: ['Architecture Design', 'Performance Optimization', 'Cost Optimization', 'Security Integration'],
        },
        {
          name: 'DevOps Services',
          description: 'Implement modern DevOps practices and automation',
          price: 'From $5,000',
          features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', 'Performance Tuning'],
        },
      ],
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      icon: BarChart3,
      description: 'Transform raw data into actionable business intelligence',
      color: 'from-green-500 to-emerald-500',
      services: [
        {
          name: 'Data Strategy',
          description: 'Develop a comprehensive data strategy for your organization',
          price: 'From $3,500',
          features: ['Data Assessment', 'Strategy Development', 'Implementation Roadmap', 'Team Training'],
        },
        {
          name: 'Business Intelligence',
          description: 'Build powerful dashboards and reporting systems',
          price: 'From $4,500',
          features: ['Dashboard Design', 'Report Automation', 'Data Visualization', 'KPI Tracking'],
        },
        {
          name: 'Advanced Analytics',
          description: 'Implement predictive analytics and machine learning models',
          price: 'From $6,000',
          features: ['Predictive Modeling', 'Statistical Analysis', 'Data Mining', 'Model Deployment'],
        },
      ],
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      icon: Rocket,
      description: 'Transform your business for the digital age',
      color: 'from-orange-500 to-red-500',
      services: [
        {
          name: 'Digital Strategy',
          description: 'Develop a comprehensive digital transformation strategy',
          price: 'From $5,000',
          features: ['Current State Assessment', 'Strategy Development', 'Implementation Planning', 'Change Management'],
        },
        {
          name: 'Process Optimization',
          description: 'Streamline and optimize your business processes',
          price: 'From $4,000',
          features: ['Process Mapping', 'Bottleneck Analysis', 'Automation Opportunities', 'Implementation Support'],
        },
        {
          name: 'Technology Integration',
          description: 'Integrate new technologies into your existing systems',
          price: 'From $7,000',
          features: ['System Analysis', 'Integration Planning', 'API Development', 'Testing & Deployment'],
        },
      ],
    },
    {
      id: 'custom-development',
      title: 'Custom Development',
      icon: Code,
      description: 'Tailored software solutions for your unique needs',
      color: 'from-indigo-500 to-purple-500',
      services: [
        {
          name: 'Web Applications',
          description: 'Custom web applications built with modern technologies',
          price: 'From $15,000',
          features: ['Responsive Design', 'User Experience', 'Performance Optimization', 'Security Implementation'],
        },
        {
          name: 'Mobile Applications',
          description: 'Native and cross-platform mobile applications',
          price: 'From $20,000',
          features: ['iOS & Android', 'Cross-platform Development', 'App Store Optimization', 'Maintenance & Updates'],
        },
        {
          name: 'Enterprise Software',
          description: 'Scalable enterprise software solutions',
          price: 'From $25,000',
          features: ['Scalable Architecture', 'Integration Capabilities', 'Security & Compliance', 'Support & Maintenance'],
        },
      ],
    },
  ];

  const industrySolutions = [
    {
      name: 'Healthcare',
      icon: Heart,
      description: 'AI-powered healthcare solutions for improved patient care',
      color: 'from-red-500 to-pink-500',
    },
    {
      name: 'Finance',
      icon: DollarSign,
      description: 'Secure financial technology solutions for modern banking',
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: 'Manufacturing',
      icon: Building,
      description: 'Smart manufacturing solutions for Industry 4.0',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Retail',
      icon: ShoppingCart,
      description: 'Digital retail solutions for enhanced customer experience',
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Education',
      icon: GraduationCap,
      description: 'Technology solutions for modern education',
      color: 'from-orange-500 to-red-500',
    },
    {
      name: 'Government',
      icon: Shield,
      description: 'Secure government technology solutions',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs and current technology landscape',
      icon: Eye,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive strategy and implementation plan',
      icon: Target,
      color: 'from-purple-500 to-pink-500',
    },
    {
      step: '03',
      title: 'Design & Development',
      description: 'Design and develop your custom solution with best practices',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
    },
    {
      step: '04',
      title: 'Testing & Deployment',
      description: 'Thorough testing and seamless deployment to production',
      icon: Rocket,
      color: 'from-orange-500 to-red-500',
    },
    {
      step: '05',
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance to ensure optimal performance',
      icon: Settings,
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our
              </span>
              <br />
              Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              From AI and cybersecurity to cloud infrastructure and digital transformation, 
              we provide end-to-end technology solutions that drive business growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 hover:text-white hover:border-cyan-500 font-semibold rounded-lg transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive technology services designed to meet the evolving needs of modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category) => (
              <div
                key={category.id}
                className="bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                
                <div className="space-y-4">
                  {category.services.map((service) => (
                    <div key={service.name} className="border border-gray-700 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-white">{service.name}</h4>
                        <span className="text-cyan-400 font-medium text-sm">{service.price}</span>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Solutions */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tailored technology solutions for your industry's unique challenges and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrySolutions.map((solution) => (
              <Link
                key={solution.name}
                to={`/services/${solution.name.toLowerCase()}`}
                className="group bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {solution.name}
                </h3>
                <p className="text-gray-300 text-sm">{solution.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Our Process */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and maximum value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-cyan-400 mb-2">{step.step}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology services can transform your business 
            and drive unprecedented growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold rounded-lg transition-all duration-200"
            >
              <DollarSign className="w-5 h-5 mr-2" />
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
