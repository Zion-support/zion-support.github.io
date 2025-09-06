import React from 'react';
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
  Code,
  Database,
  Smartphone,
  Server,
  Settings,
} from 'lucide-react';
<<<<<<< HEAD
=======
import { BackToTopButton } from '../components/BackToTopButton';
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

const Home = () => {
  const { trackPerformance } = usePerformance();

  React.useEffect(() => {
    trackScrollDepth();
    trackPerformance();
  }, [trackPerformance]);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const services = [
    {
      title: 'AI & Machine Learning',
      description: 'Advanced AI solutions to transform your business operations and decision-making processes.',
      icon: Brain,
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Automated Decision Making'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and infrastructure.',
      icon: Shield,
      features: ['Threat Detection', 'Security Audits', 'Compliance Management', 'Incident Response'],
      color: 'from-red-500 to-orange-600'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern businesses with high availability and performance.',
      icon: Cloud,
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Disaster Recovery'],
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with our advanced analytics platform.',
      icon: BarChart3,
      features: ['Real-time Analytics', 'Data Visualization', 'Business Intelligence', 'Predictive Modeling'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: Smartphone,
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
      color: 'from-indigo-500 to-blue-600'
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      icon: Globe,
      features: ['React/Next.js', 'Node.js', 'TypeScript', 'Progressive Web Apps'],
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Expert Team Members' },
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header onMenuClick={() => {}} />
      
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto text-center">
            <GradientHeading text="Welcome to Zion Tech Group" />
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              Leading provider of AI-powered technology solutions and enterprise services. 
              Transform your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
=======
    <div className="relative">
      <ParticleBackground particleCount={30} />
      <motion.div 
        className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <SEO 
          title="Zion Tech Group - Leading AI & Technology Solutions"
          description="Transform your business with cutting-edge AI solutions, cybersecurity, and cloud infrastructure. Leading technology solutions for a smarter future."
          keywords="AI, artificial intelligence, cybersecurity, cloud computing, data analytics, mobile development, web development"
        />
        
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              variants={itemVariants}
              className="max-w-4xl mx-auto"
            >
              <TypingAnimation 
                text="Leading AI & Technology Solutions"
                className="text-4xl md:text-6xl font-bold mb-6"
              />
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge AI solutions, cybersecurity, and cloud infrastructure. 
                We deliver innovative technology solutions that drive growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
                  onClick={() => trackButtonClick('hero-cta')}
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
                  onClick={() => trackButtonClick('hero-learn-more')}
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          </div>
        </section>

        {/* Stats Section */}
        <ScrollAnimation>
          <section className="py-16 bg-gray-900/50">
            <div className="container mx-auto px-4">
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-300">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Services Section */}
        <ScrollAnimation>
          <section className="py-20">
            <div className="container mx-auto px-4">
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <GradientHeading className="text-4xl md:text-5xl font-bold mb-6">
                  Our Services
                </GradientHeading>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive technology solutions designed to accelerate your digital transformation
                </p>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="h-full bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                          <service.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 mb-4">
                          {service.description}
                        </p>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                              <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Parallax Section */}
        <ParallaxSection />

        {/* Testimonials */}
        <ScrollAnimation>
          <Testimonials />
        </ScrollAnimation>

        {/* Blog Section */}
        <ScrollAnimation>
          <BlogSection />
        </ScrollAnimation>

        {/* CTA Section */}
<<<<<<< HEAD
        <div className="py-20 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss your project and discover how our AI-powered solutions can accelerate your growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 flex items-center justify-center"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/pricing"
                  className="group border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  View Pricing
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
=======
        <ScrollAnimation>
          <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="container mx-auto px-4 text-center">
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our technology solutions can accelerate your digital transformation
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
                    onClick={() => trackButtonClick('cta-contact')}
                  >
                    Contact Us Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
                    onClick={() => trackButtonClick('cta-portfolio')}
                  >
                    View Our Work
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </ScrollAnimation>

        <Footer />
        <BackToTopButton />
      </motion.div>
    </div>
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  );
};

export default Home;