import React from 'react';
import {
  Brain,
  Shield,
  Cloud,
  Code,
  Database,
  Smartphone,
  Globe,
  Lock,
  Zap,
  BarChart3,
  Users,
  Settings,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  Target,
  Rocket,
  Cpu,
  Network,
  Palette,
  Search,
  MessageSquare,
  TrendingUp,
  Lightbulb,
  Wrench,
  Headphones,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { motion } from 'framer-motion';

const Services = () => {
import ServiceCard from '../components/ServiceCard';
import Card from '../components/Card';
const Services: React.FC = () => {
pr-12325
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
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>

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
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Us Today
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Portfolio
            </button>
          </div>
        </motion.div>
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            title="Micro SaaS Development"
            href="/micro-saas"
            description="Build and scale your micro SaaS business with our comprehensive development services."
            bullets={[
              "Product engineering",
              "Growth & marketing",
              "Operations & reliability"
            ]}
            icon="🚀"
            price="Starting at $8k"
          />
          <ServiceCard
            title="AI Services"
            href="/ai-services"
            description="Leverage artificial intelligence to automate processes and gain competitive advantages."
            bullets={[
              "RAG systems",
              "Conversational AI",
              "Predictive analytics"
            ]}
            icon="🤖"
            price="Starting at $5k"
          />
          <ServiceCard
            title="IT Services"
            href="/it-services"
            description="Complete IT infrastructure and support services for modern businesses."
            bullets={[
              "Cloud migration",
              "DevOps & SRE",
              "Cybersecurity"
            ]}
            icon="⚙️"
            price="Starting at $10k"
          />
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
pr-12243
      </div>
    </div>
  );
};

export default Services;
function ServiceCard({ title, href, description, bullets = [], icon, price }: {
  title: string;
  href: string;
  description: string;
  bullets?: string[];
  icon: string;
  price: string;
}) {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <ul className="space-y-2 mb-6">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <span className="text-green-400 mr-2">✓</span>
            {bullet}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-white mb-4">{price}</div>
      <Link
        to={href}
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Learn More
      </Link>
    </div>
  );
}

export default Services;
pr-12243
      icon: '🤖',']
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
ursor/fix-syntax-push-and-merge-to-main-f9ca

      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence solutions for modern businesses.",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and deployment solutions.",
      features: ["Cloud Migration", "Infrastructure as Code", "DevOps", "Monitoring"]
      title: "Digital Transformation",
      description: "Complete digital transformation strategies and implementation.",
      features: ["Process Automation", "Data Analytics", "Integration", "Change Management"]
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets.",
      features: ["Security Assessment", "Threat Detection", "Compliance", "Incident Response"]
      title: "Blockchain Solutions",
      description: "Blockchain technology solutions for various industries.",
      features: ["Smart Contracts", "DeFi", "NFTs", "Supply Chain"]
      title: "IoT Solutions",
      description: "Internet of Things solutions for connected devices.",
      features: ["Device Management", "Data Collection", "Analytics", "Integration"]
      icon: '🤖',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      icon: '🔒',
      features: ['Threat Detection', 'Security Audits', 'Compliance Management', 'Incident Response']
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern businesses.',
      icon: '☁️',
      features: ['Cloud Migration', 'Infrastructure as Code', 'DevOps Automation', 'Cost Optimization']
      title: 'Digital Transformation',
      description: 'Transform your business processes with digital solutions.',
      icon: '🔄',
      features: ['Process Automation', 'Data Analytics', 'Workflow Optimization', 'Change Management']
      title: 'IT Consulting',
      description: 'Expert guidance for your technology strategy.',
      icon: '💼',
      features: ['Technology Assessment', 'Strategic Planning', 'Vendor Management', 'Implementation Support']
      title: 'Support & Maintenance',
      description: 'Ongoing support to keep your systems running smoothly.',
      icon: '🛠️',
      features: ['24/7 Monitoring', 'Proactive Maintenance', 'Performance Optimization', 'Technical Support']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20">"
</div>"
      <div className="container mx-auto px-4 py-16">"
        <div className="text-center mb-16">"
          <h1 className="text-5xl font-extrabold mb-6">Our Services</h1>""
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
</p>

    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Comprehensive technology solutions designed to meet your business needs
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-foreground/70 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-foreground/60 flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20">
          <h1 className="text-5xl font-extrabold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer a comprehensive range of technology solutions to help your business thrive in the digital age.
"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">"
            <ServiceCard;
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
            />

        <Card className="text-center">"
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>""
          <p className="text-lg text-gray-300 mb-8">"
          </p>"
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
            <a href="/contact" className="inline-block">"
</a>"
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">"
</button>
            <a href="/pricing" className="inline-block">"
              <button className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors">"
            </a>
        
    </div>)"
pr-12325
