
import React from 'react';
import ServiceCard from '../components/ServiceCard';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Smartphone, Shield, Cloud, Globe } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ScrollAnimation from '../components/ScrollAnimation';
ursor/integrate-build-improve-and-re-verify-9d47


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
    <>
      <SEO
        title="Our Services - Zion Tech Group"
        description="Discover our comprehensive range of technology services including AI solutions, IT services, cybersecurity, cloud solutions, and more."
        keywords="AI services, IT services, cybersecurity, cloud solutions, data analytics, micro SaaS, technology consulting"
        url="/services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
ursor/automate-test-improve-and-merge-code-646c
        
        <main>
          {/* Hero Section */}
          <section className="pt-20 pb-16 px-4">
            <div className="max-w-7xl mx-auto">
              <ScrollAnimation animation="slideUp" delay={0.2}>
                <div className="text-center mb-16">
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Comprehensive technology solutions designed to accelerate your business growth 
                    and digital transformation.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <ScrollAnimation
                    key={index}
                    animation="scale"
                    delay={index * 0.1}
                    className="group"
                  >
                    <Card className="h-full p-8 bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:bg-gray-800/70 transition-all duration-300 hover:border-cyan-400/50">
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

                      <Button variant="outline" className="w-full group-hover:bg-cyan-400 group-hover:text-black group-hover:border-cyan-400 transition-all duration-300" asChild>
                        <Link to={service.href}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </Card>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <ScrollAnimation animation="fadeIn" delay={0.2}>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss your project and find the perfect solution for your business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link to="/contact">
                      Get Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900" asChild>
                    <Link to="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </ScrollAnimation>
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
  Headphones
} from 'lucide-react';
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
        'Automated Decision Making'
      ],
      color: 'from-blue-500 to-purple-600',
      price: 'Starting at $299/month'
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
        'Security Training'
      ],
      color: 'from-red-500 to-pink-600',
      price: 'Starting at $199/month'
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
        'Cost Optimization'
      ],
      color: 'from-orange-500 to-red-600',
      price: 'Starting at $399/month'
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
        '24/7 Monitoring'
      ],
      color: 'from-green-500 to-teal-600',
      price: 'Starting at $149/month'
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
        'Predictive Modeling'
      ],
      color: 'from-purple-500 to-indigo-600',
      price: 'Starting at $249/month'
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
        'Mobile UI/UX Design'
      ],
      color: 'from-pink-500 to-rose-500',
      price: 'Starting at $199/month'
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
        'SEO Implementation'
      ],
      color: 'from-cyan-500 to-blue-600',
      price: 'Starting at $179/month'
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
        'Staff Training'
      ],
      color: 'from-yellow-500 to-orange-600',
      price: 'Starting at $499/month'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Proven Expertise',
      description: 'Over 500+ successful projects delivered'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support'
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: '100% satisfaction guarantee on all services'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience'
    }
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
>>>>>>> main
          </section>
        </main>

        <Footer />
ursor/integrate-build-improve-and-re-verify-9d47
      </div>
    </>
  );
};


export default Services;

export default Services;
export default Services;
>>>>>>> main
ursor/automate-test-improve-and-merge-code-646c
