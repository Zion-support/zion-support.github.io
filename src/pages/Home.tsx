import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Card from '../components/Card';
import ServiceCard from '../components/ServiceCard';
import ParticleBackground from '../components/ParticleBackground';
  Zap,
  Shield,
  Globe,
  Code,
  Database,
  Smartphone,
  Cloud
} from 'lucide-react';
import { BackToTopButton } from '../components/BackToTopButton';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative">
      <ParticleBackground particleCount={30} />
      <motion.div 
        className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
      <div className="container mx-auto px-4 py-16">
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h1 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            Leading AI & Technology Solutions for a Smarter Future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="large" onClick={() => window.location.href = '/services'}>
              Explore Our Services
            </Button>
            <Button variant="secondary" size="large" onClick={() => window.location.href = '/contact'}>
              Get Started
            </Button>
          </div>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" variants={itemVariants}>
          <ServiceCard
            title="AI Services"
            description="Transform your business with cutting-edge AI solutions."
            icon="✨"
            features={["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]}
          />
          <ServiceCard
            title="Cybersecurity"
            description="Protect your digital assets with advanced security solutions."
            icon="🔒"
            features={["Threat Detection", "Data Encryption", "Security Audits", "Incident Response"]}
          />
          <ServiceCard
            title="Cloud Infrastructure"
            description="Scale your operations with robust cloud solutions."
            icon="☁️"
            features={["Cloud Migration", "Auto Scaling", "Load Balancing", "Disaster Recovery"]}
          />
        </motion.div>

        {/* Statistics Section */}
        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <h2 className="text-4xl font-bold mb-12 text-white">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-gray-300">Expert Team</div>
            </div>
          </div>
        </motion.div>

        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <h2 className="text-4xl font-bold mb-8 text-white">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card title="Innovation" description="Pioneering the next generation of technology." />
            <Card title="Expertise" description="Team of industry-leading professionals." />
            <Card title="Reliability" description="Trusted solutions for critical operations." />
            <Card title="Scalability" description="Solutions designed to grow with you." />
            <Card title="Security" description="Robust protection for all your data." />
            <Card title="Support" description="24/7 dedicated customer assistance." />
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div className="mt-20 text-center" variants={itemVariants}>
          <h2 className="text-4xl font-bold mb-12 text-white">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 mb-4 italic">
                "Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations."
              </p>
              <div className="text-white font-semibold">Sarah Johnson</div>
              <div className="text-gray-400 text-sm">CEO, TechCorp</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 mb-4 italic">
                "Outstanding cybersecurity implementation. Our data has never been safer."
              </p>
              <div className="text-white font-semibold">Michael Chen</div>
              <div className="text-gray-400 text-sm">CTO, SecureData</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 mb-4 italic">
                "The cloud migration was seamless. Highly recommend their expertise."
              </p>
              <div className="text-white font-semibold">Emily Rodriguez</div>
              <div className="text-gray-400 text-sm">VP Operations, CloudFirst</div>
            </div>
          </div>
        </motion.div>

        <motion.div className="mt-20 text-center" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-8 text-white">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of companies that trust Zion Tech Group for their technology needs. 
            Let's build the future together.
          </p>
          <Button variant="primary" size="large" onClick={() => window.location.href = '/contact'}>
            Start Your Journey
          </Button>
        </motion.div>
      </div>
      </motion.div>
      <BackToTopButton />
=======
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import Footer from '../components/Footer';
import { GradientHeading } from '../components/GradientHeading';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { usePerformance } from '../hooks/usePerformance';
import Testimonials from '../components/Testimonials';
import BlogSection from '../components/BlogSection';
import { trackScrollDepth, trackButtonClick } from '../utils/analytics';
import ScrollAnimation from '../components/ScrollAnimation';
import ParallaxSection from '../components/ParallaxSection';
import TypingAnimation from '../components/TypingAnimation';
import ParticleBackground from '../components/ParticleBackground';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  BarChart3,
  Rocket,
  Award,
  Globe,
  Smartphone,
  Server,
  Settings,
} from 'lucide-react';

const Home = () => {
  const { trackPerformance } = usePerformance();

  React.useEffect(() => {
    trackPerformance('home-page-load');
    trackScrollDepth();
  }, [trackPerformance]);

  const handleButtonClick = buttonName => {
    trackButtonClick(buttonName);
  };

  const services = [
    {
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions for your business needs.',
      icon: Brain,
      features: ['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics'],
      color: 'from-blue-500 to-purple-600',
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT services and infrastructure management.',
      icon: Server,
      features: ['System Administration', 'Network Security', 'Cloud Migration', '24/7 Support'],
      color: 'from-green-500 to-teal-600',
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.',
      icon: Cloud,
      features: ['AWS/Azure/GCP', 'DevOps', 'Containerization', 'Auto-scaling'],
      color: 'from-orange-500 to-red-600',
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your business.',
      icon: Shield,
      features: ['Threat Detection', 'Compliance', 'Penetration Testing', 'Security Audits'],
      color: 'from-red-500 to-pink-600',
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights.',
      icon: BarChart3,
      features: ['Data Visualization', 'Business Intelligence', 'Real-time Analytics', 'Custom Dashboards'],
      color: 'from-purple-500 to-indigo-600',
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business.',
      icon: Rocket,
      features: ['Process Automation', 'Workflow Optimization', 'Digital Strategy', 'Change Management'],
      color: 'from-yellow-500 to-orange-600',
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Expert Team Members' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <SEO
        title="Zion Tech Group - Leading AI & Technology Solutions"
        description="Transform your business with cutting-edge AI solutions, cybersecurity, and cloud infrastructure. Leading technology solutions for a smarter future."
        keywords="AI solutions, cybersecurity, cloud infrastructure, digital transformation, technology consulting"
      />

      <ParticleBackground />
      <Header />

      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <GradientHeading className="text-5xl md:text-7xl font-bold mb-6">
                Welcome to Zion Tech
              </GradientHeading>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Your trusted partner for AI and IT solutions. We help businesses transform through cutting-edge technology and innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
                  onClick={() => handleButtonClick('get-started')}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
                  onClick={() => handleButtonClick('learn-more')}
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <ScrollAnimation>
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Services Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive technology solutions to help your business thrive in the digital age.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <ScrollAnimation>
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Don't just take our word for it. Here's what our clients have to say about our services.
                </p>
              </motion.div>
              <Testimonials />
            </div>
          </section>
        </ScrollAnimation>

        {/* Blog Section */}
        <ScrollAnimation>
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold mb-4">Latest Insights</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Stay updated with the latest trends and insights in technology and AI.
                </p>
              </motion.div>
              <BlogSection />
            </div>
          </section>
        </ScrollAnimation>

        {/* CTA Section */}
        <ParallaxSection>
          <section className="py-20 px-4 text-center">
            <div className="container mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our AI and technology solutions can help your business grow and succeed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
                    onClick={() => handleButtonClick('contact-us')}
                  >
                    Contact Us Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
                    onClick={() => handleButtonClick('learn-more-cta')}
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </ParallaxSection>
      </main>

      <Footer />
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
    </div>
  );
};

<<<<<<< HEAD

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
          Welcome to Zion Tech Group
        </h1>
        <p className="text-xl text-gray-300 mb-8 text-center max-w-3xl mx-auto">
          Leading provider of innovative technology solutions, AI services, and IT solutions
          for businesses worldwide.
        </p>
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
=======
export default Home;
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
