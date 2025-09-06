import React from 'react';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Smartphone, 
  Database, 
  Lock, 
  Server, 
  Code,
  Zap,
  BarChart3,
  Globe,
  Cpu
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      name: 'AI Services',
      description: 'Transform your business with cutting-edge artificial intelligence solutions.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Strategy Consulting',
        'Custom AI Solutions'
      ],
      price: '$5,000 - $50,000',
      href: '/services/ai'
    },
    {
      name: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions.',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      features: [
        'Security Audits',
        'Threat Detection',
        'Compliance Management',
        'Penetration Testing',
        'Security Training',
        'Incident Response'
      ],
      price: '$3,000 - $30,000',
      href: '/services/cybersecurity'
    },
    {
      name: 'Cloud Migration',
      description: 'Seamlessly migrate to the cloud with our expert guidance.',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'AWS Migration',
        'Azure Migration',
        'GCP Migration',
        'Hybrid Cloud Solutions',
        'Cost Optimization',
        'Security Implementation'
      ],
      price: '$10,000 - $100,000',
      href: '/services/cloud-migration'
    },
    {
      name: 'DevOps & SRE',
      description: 'Streamline your development and operations with modern DevOps practices.',
      icon: Server,
      color: 'from-green-500 to-teal-500',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Monitoring & Alerting',
        'Container Orchestration',
        'Site Reliability Engineering',
        'Performance Optimization'
      ],
      price: '$8,000 - $80,000',
      href: '/services/devops'
    },
    {
      name: 'Mobile Development',
      description: 'Create powerful mobile applications for iOS and Android platforms.',
      icon: Smartphone,
      color: 'from-indigo-500 to-purple-500',
      features: [
        'Native iOS Apps',
        'Native Android Apps',
        'Cross-Platform Solutions',
        'UI/UX Design',
        'App Store Optimization',
        'Maintenance & Support'
      ],
      price: '$15,000 - $150,000',
      href: '/services/mobile-development'
    },
    {
      name: 'Data Analytics',
      description: 'Unlock insights from your data with advanced analytics solutions.',
      icon: BarChart3,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Business Intelligence',
        'Data Warehousing',
        'Real-time Analytics',
        'Machine Learning Models',
        'Data Visualization',
        'Predictive Modeling'
      ],
      price: '$7,000 - $70,000',
      href: '/services/data-analytics'
    },
    {
      name: 'Blockchain',
      description: 'Leverage blockchain technology for secure and transparent solutions.',
      icon: Lock,
      color: 'from-gray-600 to-gray-800',
      features: [
        'Smart Contracts',
        'DeFi Applications',
        'NFT Platforms',
        'Supply Chain Solutions',
        'Digital Identity',
        'Tokenization'
      ],
      price: '$20,000 - $200,000',
      href: '/services/blockchain'
    },
    {
      name: 'IT Support',
      description: 'Comprehensive IT support and maintenance services.',
      icon: Cpu,
      color: 'from-emerald-500 to-green-500',
      features: [
        '24/7 Technical Support',
        'System Maintenance',
        'Network Management',
        'Hardware Support',
        'Software Updates',
        'Troubleshooting'
      ],
      price: '$2,000 - $20,000',
      href: '/services/it-support'
    }
  ];
>>>>>>> origin/main

const ServicesPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Product engineering and AI-first consulting to deliver measurable outcomes for your business.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <ServiceCard
          href="/services/micro-saas"
          title="Micro SaaS"
          description="End-to-end product development with billing, auth, and analytics"
          bullets={[
            "Foundational architecture",
            "Billing + subscriptions",
            "Growth analytics",
            "Multi-tenant systems",
            "API development"
          ]}
          icon="🚀"
        />
        <ServiceCard
          href="/services/ai-services"
          title="AI Services"
          description="LLM applications, RAG systems, and MLOps pipelines"
          bullets={["RAG and agents", "Evals + guardrails", "MLOps pipelines", "Custom AI models", "AI integration"]}
          icon="🤖"
        />
        <ServiceCard
          href="/services/it-services"
          title="IT Services"
          description="Cloud migration, DevOps, and security solutions"
          bullets={["Cloud migration", "DevOps + SRE", "Security", "Infrastructure automation", "Cost optimization"]}
          icon="⚙️"
        />
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Talk to our experts about your project. We'll help you choose the right service and create a custom solution for your business needs.
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
========
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:src/pages/Services.tsx
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-lg font-semibold">Healthcare</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏦</span>
              </div>
              <h3 className="text-lg font-semibold">Finance</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-lg font-semibold">Manufacturing</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-lg font-semibold">Retail</h3>
            </div>
<<<<<<<< HEAD:backup-problematic-files/src/pages/Services.tsx
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-lg font-semibold">Education</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-lg font-semibold">Government</h3>
            </div>

========
<<<<<<< HEAD
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">Let's discuss how our services can help transform your business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/pricing"
              className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              View Pricing
            </Link>
<<<<<<< HEAD
          </div>
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
import ServiceCard from '../components/ServiceCard';
import Card from '../components/Card';

const Services: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Comprehensive technology solutions designed to transform your business
            and drive innovation across all sectors.
          </p>
        </div>
        
        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            title="AI & Machine Learning"
            description="Transform your business with cutting-edge AI solutions including machine learning, natural language processing, and computer vision."
            icon="🤖"
          />
          <ServiceCard
            title="Cybersecurity"
            description="Protect your digital assets with advanced security solutions, threat detection, and compliance management."
            icon="🔒"
          />
          <ServiceCard
            title="Cloud Infrastructure"
            description="Scale your operations with robust cloud solutions, migration services, and infrastructure optimization."
            icon="☁️"
          />
          <ServiceCard
            title="Digital Transformation"
            description="Modernize your business processes with comprehensive digital transformation strategies and implementation."
            icon="🚀"
          />
          <ServiceCard
            title="Data Analytics"
            description="Unlock insights from your data with advanced analytics, business intelligence, and reporting solutions."
            icon="📊"
          />
          <ServiceCard
            title="IoT Solutions"
            description="Connect and manage your devices with Internet of Things solutions for smart operations and monitoring."
            icon="🌐"
          />
        </div>

        {/* Service Categories */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Service Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="Consulting Services"
              description="Strategic technology consulting to help you make informed decisions about your digital future."
            />
            <Card
              title="Implementation"
              description="End-to-end implementation of technology solutions tailored to your specific business needs."
            />
            <Card
              title="Support & Maintenance"
              description="Ongoing support and maintenance to ensure your systems run smoothly and efficiently."
            />
            <Card
              title="Training & Education"
              description="Comprehensive training programs to help your team master new technologies and processes."
            />
            <Card
              title="Custom Development"
              description="Bespoke software development solutions designed specifically for your unique requirements."
            />
            <Card
              title="Integration Services"
              description="Seamless integration of new technologies with your existing systems and workflows."
            />
          </div>
        </div>

        {/* Industry Solutions */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12">Industry Solutions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-lg font-semibold">Healthcare</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏦</span>
              </div>
              <h3 className="text-lg font-semibold">Finance</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-lg font-semibold">Manufacturing</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-lg font-semibold">Retail</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-lg font-semibold">Education</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-lg font-semibold">Government</h3>
            </div>
          </div>
        </div>
<<<<<<< HEAD

        {/* CTA Section */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Contact us today to discuss your project requirements and get a free consultation.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Free Consultation
          </a>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        </div>
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
      </div>
    </div>
  );
};

function ServiceCard({
  href,
  title,
  description,
  bullets,
  icon,
}: {
  href: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
}) {
  return (
    <Link
      to={href}
      className="group border border-gray-200 rounded-xl p-8 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="text-gray-600 space-y-2">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {bullet}
          </li>
        ))}
      </ul>
    </Link>
  );
}

export default ServicesPage;
