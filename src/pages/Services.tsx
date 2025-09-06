import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import { ArrowRight, Code, Database, Smartphone, Shield, Cloud, Globe } from 'lucide-react';
import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: 'AI Services',
      description: 'Custom AI solutions powered by machine learning and deep learning technologies',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Chatbots',
        'Process Automation'
      ],
      href: '/services/ai-services'
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: 'IT Services',
      description: 'Comprehensive IT infrastructure and digital transformation solutions',
      features: [
        'System Architecture',
        'Database Design',
        'API Development',
        'Legacy System Migration',
        'Performance Optimization',
        'Technical Consulting'
      ],
      href: '/services/it-services'
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Micro SaaS',
      description: 'Scalable software-as-a-service solutions for growing businesses',
      features: [
        'SaaS Architecture',
        'Multi-tenancy',
        'Subscription Management',
        'Payment Integration',
        'User Management',
        'Analytics Dashboard'
      ],
      href: '/services/micro-saas'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Compliance Management',
        'Threat Detection',
        'Data Encryption',
        'Security Training'
      ],
      href: '/services/cybersecurity'
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'Container Orchestration',
        'Auto-scaling',
        'Disaster Recovery',
        'Cost Optimization'
      ],
      href: '/services/cloud-solutions'
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Data Analytics',
      description: 'Transform data into actionable insights with advanced analytics',
      features: [
        'Business Intelligence',
        'Real-time Dashboards',
        'Data Visualization',
        'ETL Pipelines',
        'Machine Learning Models',
        'Custom Reports'
      ],
      href: '/services/data-analytics'
    }
  ];
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7

function ServiceCard({ title, href, description, bullets = [], icon, price }: {
  title: string;
  href: string;
  description: string;
  bullets?: string[];
  icon?: string;
  price?: string;
}) {
  return (
<<<<<<< HEAD
    <Link
      to={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300"
    >
      <div className="flex items-center mb-4">
        {icon && <span className="text-2xl mr-3">{icon}</span>}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
      {bullets.length > 0 && (
        <ul className="space-y-1 mb-4">
          {bullets.map((bullet, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
              {bullet}
            </li>
          ))}
        </ul>
      )}
      {price && (
        <div className="text-lg font-semibold text-blue-600 mb-2">{price}</div>
      )}
      <div className="text-sm text-blue-600 font-medium">
        Learn More →
      </div>
    </Link>
  );
}

export default function ServicesPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Comprehensive technology solutions to accelerate your digital transformation. 
          From AI development to micro SaaS products, we deliver enterprise-grade solutions that drive real results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Services Inquiry"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      {/* Featured AI Services */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured AI Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Revolutionary AI-powered solutions that transform how businesses operate and compete.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="AI-Powered CRM Platform"
            href="/services/ai-powered-crm"
            description="Revolutionary CRM with predictive analytics, automated lead scoring, and intelligent customer insights"
            bullets={[
              "Predictive lead scoring (95% accuracy)",
              "Intelligent automation",
              "Advanced analytics dashboard",
              "AI chat assistant",
              "Personalized engagement"
            ]}
            icon="🎯"
            price="From $99/month"
          />
          <ServiceCard
            title="Smart Invoice Generator"
            href="/services/smart-invoice-generator"
            description="AI-powered invoice automation with data extraction, smart categorization, and payment tracking"
            bullets={[
              "AI data extraction (99.2% accuracy)",
              "Smart categorization",
              "Payment tracking & reminders",
              "Financial analytics dashboard",
              "Advanced security & compliance"
            ]}
            icon="💰"
            price="From $29/month"
          />
          <ServiceCard
            title="AI Project Manager"
            href="/services/ai-project-manager"
            description="Intelligent project management with predictive analytics, resource optimization, and risk assessment"
            bullets={[
              "Predictive risk assessment",
              "Smart resource optimization",
              "Intelligent analytics dashboard",
              "Automated task management",
              "AI project assistant"
            ]}
            icon="📊"
            price="From $49/user/month"
          />
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions to accelerate your digital transformation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Micro SaaS Solutions"
            href="/services/micro-saas"
            description="End-to-end product development with billing, auth, analytics and growth optimization"
            icon="🚀"
          />
          <ServiceCard
            title="AI Services"
            href="/services/ai-services"
            description="Cutting-edge AI solutions for automation, analytics, and intelligent decision making"
            icon="🤖"
          />
          <ServiceCard
            title="IT Services"
            href="/services/it-services"
            description="Complete IT infrastructure, cloud migration, and digital transformation solutions"
            icon="💻"
          />
          <ServiceCard
            title="Blockchain Solutions"
            href="/services/blockchain"
            description="Smart contracts, DeFi protocols, NFT platforms and Web3 solutions"
            icon="⛓️"
          />
          <ServiceCard
            title="Cybersecurity"
            href="/services/cybersecurity"
            description="Penetration testing, security audits, compliance and incident response"
            icon="🔒"
          />
          <ServiceCard
            title="Cloud Services"
            href="/services/cloud-services"
            description="Cloud migration, architecture, and optimization across AWS, Azure, and GCP"
            icon="☁️"
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that drives real business value. 
            Our team has delivered 1000+ successful projects across various industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Email Us
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-600">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 kleber@ziontechgroup.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive technology solutions designed to accelerate your business growth 
                and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700/50 hover:border-cyan-400/50"
                >
                  <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={service.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
