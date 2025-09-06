import React from 'react';
<<<<<<< HEAD

  Lock,
  Zap,
  BarChart3,
  Users,

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Smartphone, 
  Shield, 
  Cloud, 
  Globe,
  Zap,
  Users,

  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,

import SEOHead from '../components/SEOHead';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions for your business needs.',
      icon: Brain,
      features: [
        'Machine Learning',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Chatbots',
        'Automated Decision Making',
      ],
      color: 'from-blue-500 to-purple-600',
      price: 'Starting at $299/month',
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your business from evolving threats.',
      icon: Shield,
      features: [
        'Threat Detection & Response',
        'Security Audits',
        'Penetration Testing',
        'Compliance Management',
        'Incident Response',
        'Security Training',
      ],
      color: 'from-red-500 to-pink-600',
      price: 'Starting at $199/month',
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.',
      icon: Cloud,
      features: [
        'AWS/Azure/GCP Migration',
        'DevOps Implementation',
        'Containerization',
        'Auto-scaling Solutions',
        'Cloud Security',
        'Cost Optimization',
      ],
      color: 'from-orange-500 to-red-600',
      price: 'Starting at $399/month',
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT services and infrastructure management.',
      icon: Settings,
      features: [
        'System Administration',
        'Network Management',
        'Hardware Support',
        'Software Installation',
        'Backup & Recovery',
        '24/7 Monitoring',
      ],
      color: 'from-green-500 to-teal-600',
      price: 'Starting at $149/month',
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights.',
      icon: BarChart3,
      features: [
        'Data Visualization',
        'Business Intelligence',
        'Real-time Analytics',
        'Custom Dashboards',
        'Data Warehousing',
        'Predictive Modeling',
      ],
      color: 'from-purple-500 to-indigo-600',
      price: 'Starting at $249/month',
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications.',
      icon: Smartphone,
      features: [
        'iOS Development',
        'Android Development',
        'React Native',
        'Flutter Apps',
        'App Store Optimization',
        'Mobile UI/UX Design',
      ],
      color: 'from-pink-500 to-rose-500',
      price: 'Starting at $199/month',
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications and websites.',
      icon: Globe,
      features: [
        'React/Next.js Development',
        'Node.js Backend',
        'Database Design',
        'API Development',
        'Performance Optimization',
        'SEO Implementation',
      ],
      color: 'from-cyan-500 to-blue-600',
      price: 'Starting at $179/month',
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business.',
      icon: Rocket,
      features: [
        'Process Automation',
        'Workflow Optimization',
        'Digital Strategy',
        'Change Management',
        'Technology Integration',
        'Staff Training',
      ],
      color: 'from-yellow-500 to-orange-600',
      price: 'Starting at $499/month',
    },
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Proven Expertise',
      description: 'Over 500+ successful projects delivered',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support',
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: '100% satisfaction guarantee on all services',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <SEOHead
        title="Our Services - Zion Tech Group"
        description="Comprehensive AI, cybersecurity, cloud, and IT services to transform your business. Expert solutions tailored to your needs."
        keywords="AI services, cybersecurity, cloud solutions, IT services, digital transformation, technology consulting"
      />

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We offer comprehensive technology solutions to help your business thrive in the digital age.
            From AI and cybersecurity to cloud infrastructure and digital transformation.
          </p>
        </motion.div>

        {/* Services Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}

              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >

              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t pt-4">
                <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Zion Tech?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to delivering exceptional results and providing the best possible service to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your project and create a customized solution that meets your specific needs.
=======
import { Link } from 'react-router-dom';

function ServiceCard({ title, href, description, bullets = [], icon, price }: {
  title: string;
  href: string;
  description: string;
  bullets?: string[];
  icon?: string;
  price?: string;
}) {
  return (
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
>>>>>>> origin/main
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
<<<<<<< HEAD
        </motion.div>

      </div>
    </div>

  );
};

=======
          <div className="mt-6 text-sm text-gray-600">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 kleber@ziontechgroup.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> origin/main
