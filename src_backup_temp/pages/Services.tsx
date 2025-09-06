import React from 'react';
import { Link } from 'react-router-dom';
:src/pages/Services.tsx
import { 
  Brain, 
  Shield, 
  Cloud, 
  TrendingUp, 
  HardDrive,
  Zap,
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  DollarSign,
  Clock,
  Award
} from 'lucide-react';
export function Services() {
  const services = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      description: 'Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation.',
      icon: Brain,
      color: 'from-blue-600 to-purple-600',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      href: '/services/ai-solutions'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      description: 'Explore the next frontier of computing with quantum solutions that solve complex problems exponentially faster.',
      icon: Shield,
      color: 'from-purple-600 to-pink-600',
      features: ['Quantum Algorithms', 'Quantum Simulation', 'Quantum Optimization', 'Quantum Security'],
      href: '/services/quantum-computing'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions and advanced threat detection.',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      features: ['Threat Detection', 'Security Auditing', 'Compliance Management', 'Incident Response'],
      href: '/services/cybersecurity'
    },
    {
      id: 'cloud-devops',
      title: 'Cloud DevOps',
      description: 'Streamline your development and deployment processes with modern cloud infrastructure and automation.',
      icon: Cloud,
      color: 'from-green-600 to-blue-600',
      features: ['Cloud Migration', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging'],
      href: '/services/cloud-devops'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics and visualization tools.',
      icon: TrendingUp,
      color: 'from-yellow-600 to-orange-600',
      features: ['Data Visualization', 'Business Intelligence', 'Real-time Analytics', 'Data Mining'],
      href: '/services/data-analytics'
    },
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure',
      description: 'Build robust, scalable IT infrastructure that supports your business growth and digital transformation.',
      icon: HardDrive,
      color: 'from-indigo-600 to-purple-600',
      features: ['Network Design', 'Server Management', 'Storage Solutions', 'Backup & Recovery'],
      href: '/services/it-infrastructure'
    }
  ];
  const microSaasServices = [
    {
      title: 'AI Sales Copilot',
      description: 'Intelligent sales assistant that helps your team close more deals',
      href: '/services/ai-sales-copilot'
    },
    {
      title: 'Cloud FinOps Optimizer',
      description: 'Optimize your cloud spending with AI-powered cost management',
      href: '/services/cloud-finops-optimizer'
    },
    {
      title: 'AI Compliance Assistant',
      description: 'Automate compliance monitoring and reporting',
      href: '/services/ai-compliance-assistant'
    },
    {
      title: 'AI Business Intelligence',
      description: 'Get insights from your data with AI-powered analytics',
      href: '/services/ai-business-intelligence'
export default function Services() {
  const services = [
    {
      title: "AI Solutions",
      description: "Custom AI applications, machine learning models, and intelligent automation systems.",
      icon: "🤖",
      href: "/services/ai-services"
    },
    {
      title: "Micro SaaS Development",
      description: "End-to-end SaaS product development with modern tech stacks and scalable architecture.",
      icon: "🚀",
      href: "/services/micro-saas"
    },
    {
      title: "IT Services",
      description: "Cloud migration, DevOps, infrastructure management, and technical support.",
      icon: "⚙️",
      href: "/services/it-services"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions including threat assessment and compliance.",
      icon: "🔒",
      href: "/services/cybersecurity"
    },
    {
      title: "Cloud Infrastructure",
      description: "AWS, Azure, and GCP cloud solutions with optimization and cost management.",
      icon: "☁️",
      href: "/services/cloud-infrastructure"
    },
    {
      title: "Data Analytics",
      description: "Business intelligence, data visualization, and advanced analytics solutions.",
      icon: "📊",
      href: "/services/data-analytics"
    }
  ];
  return (
:src/pages/Services.tsx
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business 
              and drive innovation across all industries.
            </p>
          </div>
        </div>
      </section>
      {/* Core Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Enterprise-grade solutions built with cutting-edge technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="text-blue-400 hover:text-blue-300 font-semibold flex items-center group-hover:translate-x-2 transition-transform duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Micro SAAS Services */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Micro SAAS Solutions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Specialized tools designed to solve specific business challenges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <Link
                      to={service.href}
                      className="text-purple-400 hover:text-purple-300 font-semibold flex items-center"
                    >
                      Explore Service
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center ml-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose Our Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We deliver results that matter to your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-300">
                World-class engineers and technology experts with proven track records
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-300">
                Rapid development and deployment with agile methodologies
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cost Effective</h3>
              <p className="text-gray-300">
                Competitive pricing with transparent, value-based billing
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-300">
                Round-the-clock support and maintenance for your peace of mind
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/request-quote"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      {/* Additional Services Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Specialized Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Solutions</h3>
            <p className="text-gray-600 mb-4">
              Large-scale digital transformation projects for enterprise clients with complex requirements.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Legacy system modernization</li>
              <li>• Enterprise architecture design</li>
              <li>• Integration and API development</li>
              <li>• Change management and training</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Startup Solutions</h3>
            <p className="text-gray-600 mb-4">
              Rapid prototyping and MVP development for startups and growing businesses.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• MVP development and validation</li>
              <li>• Scalable architecture planning</li>
              <li>• Technical co-founder services</li>
              <li>• Growth and scaling support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
function ServiceCard({ title, description, icon, href }: { 
  title: string; 
  description: string; 
  icon: string; 
  href: string; 
}) {
  return (
    <Link 
      to={href}
      className="group border border-gray-200 rounded-xl p-6 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </Link>
  );
}