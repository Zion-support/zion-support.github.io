
ursor/automate-test-improve-and-merge-code-646c;
import React from 'react';
import { Link  } from 'react-router-dom';
import { Header  } from '../components/Header';
import Footer from '../components/Footer';
import { GradientHeading  } from '../components/GradientHeading';
import { Card, CardContent  } from '../components/ui/card';
import { Button  } from '../components/ui/button';
import { Badge  } from '../components/ui/badge';
import { motion  } from 'framer-motion';
import { SEO  } from '../components/SEO';
import { usePerformance  } from '../hooks/usePerformance';
import Testimonials from '../components/Testimonials';
import BlogSection from '../components/BlogSection';
import { trackScrollDepth, trackButtonClick  } from '../utils/analytics';
import ScrollAnimation from '../components/ScrollAnimation';
import ParallaxSection from '../components/ParallaxSection';
import TypingAnimation from '../components/TypingAnimation';
import ParticleBackground from '../components/ParticleBackground';
import { ArrowRight,CheckCircle,Star,Users,Zap,Shield,Brain,Cloud,BarChart3,Rocket,Award,Globe,Code,Database,Smartphone,Server,Settings;
 } from 'lucide-react';
import { BackToTopButton  } from '../components/BackToTopButton';
const Home: React.FC = () => {const Home = () => {const { trackPerformance }  = usePerformance()React.useEffect(() => {trackScrollDepth()trackPerformance()}, [trackPerformance])ursor/automate-test-improve-and-merge-code-646c;
  const containerVariants = {hidden: { opacity: 0 },visible: {opacity: 1,transition: {staggerChildren: 0.1;
      }
    }
  }const itemVariants = {hidden: { opacity: 0, y: 20 },visible: {opacity: 1,y: 0,transition: { duration: 0.6 }
    }
  }const services = [;
    {title: 'AI & Machine Learning',description: 'Advanced AI solutions to transform your business operations and decision-making processes.',icon: Brain,features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Automated Decision Making'],color: 'from-blue-500 to-purple-600';
    },{title: 'Cybersecurity',description: 'Comprehensive security solutions to protect your digital assets and infrastructure.',icon: Shield,features: ['Threat Detection', 'Security Audits', 'Compliance Management', 'Incident Response'],color: 'from-red-500 to-orange-600';
    },{title: 'Cloud Infrastructure',description: 'Scalable cloud solutions for modern businesses with high availability and performance.',icon: Cloud,features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Disaster Recovery'],color: 'from-green-500 to-teal-600';
    },{title: 'Data Analytics',description: 'Transform raw data into actionable insights with our advanced analytics platform.',icon: BarChart3,features: ['Real-time Analytics', 'Data Visualization', 'Business Intelligence', 'Predictive Modeling'],color: 'from-purple-500 to-pink-600';
    },{title: 'Mobile Development',description: 'Native and cross-platform mobile applications for iOS and Android.',icon: Smartphone,features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],color: 'from-indigo-500 to-blue-600';
    },{title: 'Web Development',description: 'Modern, responsive web applications built with cutting-edge technologies.',icon: Globe,features: ['React/Next.js', 'Node.js', 'TypeScript', 'Progressive Web Apps'],color: 'from-cyan-500 to-blue-600';
  ArrowRight,Code,Database,Smartphone,Shield,Cloud,Globe,Zap,Users,Award,Star,CheckCircle;
} from "lucide-react";
import { Card  } from '../components/ui/Card';
import { Button  } from '../components/ui/Button';
import Header from '../components/Header';
import SEO from '../components/SEO';
// Track scroll depth function;
const trackScrollDepth = (depth: number) => {console.log(`Scroll depth: ${depth}%`)// Add analytics tracking here;
}// Track button click function;
const trackButtonClick = (action: string, section: string) => {console.log(`Button clicked: ${action} in ${section}`)// Add analytics tracking here;
}const Home: React.FC = () => {const services = [;
    {icon: <Code className="w-8 h-8" />,title: "AI Services",description: "Custom AI solutions powered by machine learning and deep learning technologies",href: "/services/ai-services";
    },{icon: <Database className="w-8 h-8" />,title: "IT Services",description: "Comprehensive IT infrastructure and digital transformation solutions",href: "/services/it-services";
    },{icon: <Smartphone className="w-8 h-8" />,title: "Micro SaaS",description: "Scalable software-as-a-service solutions for growing businesses",href: "/services/micro-saas";
    },{icon: <Shield className="w-8 h-8" />,title: "Cybersecurity",description: "Advanced security solutions to protect your digital assets",href: "/services/cybersecurity";
    },{icon: <Cloud className="w-8 h-8" />,title: "Cloud Solutions",description: "Scalable cloud infrastructure and migration services",href: "/services/cloud-solutions";
    },{icon: <Globe className="w-8 h-8" />,title: "Data Analytics",description: "Transform data into actionable insights with advanced analytics",href: "/services/data-analytics";
ursor/integrate-build-improve-and-re-verify-9d47;
    }
  ];const stats = [;
    { number: '500+', label: 'Projects Completed' },{ number: '99.9%', label: 'Uptime Guarantee' },{ number: '24/7', label: 'Support Available' },{ number: '50+', label: 'Expert Team Members' }
  ];function Card() {return (ursor/automate-test-improve-and-merge-code-646c;
    <div className="relative">;
      <ParticleBackground particleCount={30} />;
      <motion.div;
        className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative z-10";
        variants={containerVariants}
        initial="hidden";
        animate="visible";
      >;
      <div className="container mx-auto px-4 py-16">;
        <motion.div className="text-center mb-12" variants={itemVariants}>;
          <h1 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">;
            Zion Tech Group;
          </h1>;
          <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">;
            Leading AI & Technology Solutions for a Smarter Future;
          </p>;
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">;
            Empowering businesses with cutting-edge artificial intelligence, cybersecurity, and cloud infrastructure solutions.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <Button variant="primary" size="large" onClick={() => window.location.href = '/services'}>;
              Explore Our Services;
            </Button>;
            <Button variant="secondary" size="large" onClick={() => window.location.href = '/contact'}>;
              Get Started;
            </Button>;
          </div>;
        </motion.div>;
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" variants={itemVariants}>;
          <ServiceCard;
            title="AI Services";
            description="Transform your business with cutting-edge AI solutions.";
            icon="✨";
            features={["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]}
          />;
          <ServiceCard;
            title="Cybersecurity";
            description="Protect your digital assets with advanced security solutions.";
            icon="🔒";
            features={["Threat Detection", "Data Encryption", "Security Audits", "Incident Response"]}
          />;
          <ServiceCard;
            title="Cloud Infrastructure";
            description="Scale your operations with robust cloud solutions.";
            icon="☁️";
            features={["Cloud Migration", "Auto Scaling", "Load Balancing", "Disaster Recovery"]}
          />;
        </motion.div>;
        {/* Statistics Section */}
        <motion.div className="mt-16 text-center" variants={itemVariants}>;
          <h2 className="text-4xl font-bold mb-12 text-white">Our Impact</h2>;
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">;
            <div className="text-center">;
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>;
              <div className="text-gray-300">Projects Completed</div>;
            </div>;
            <div className="text-center">;
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>;
              <div className="text-gray-300">Uptime Guarantee</div>;
            </div>;
            <div className="text-center">;
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>;
              <div className="text-gray-300">Support Available</div>;
            </div>;
            <div className="text-center">;
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>;
              <div className="text-gray-300">Expert Team</div>;
            </div>;
        <SEO;
          title="Zion Tech Group - Leading AI & Technology Solutions";
          description="Transform your business with cutting-edge AI solutions, cybersecurity, and cloud infrastructure. Leading technology solutions for a smarter future.";
          keywords="AI, artificial intelligence, cybersecurity, cloud computing, data analytics, mobile development, web development";
        />;
        <Header />;
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">;
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20"></div>;
          <div className="container mx-auto px-4 text-center relative z-10">;
            <motion.div;
              variants={itemVariants}
              className="max-w-4xl mx-auto";
            >;
              <TypingAnimation;
                text="Leading AI & Technology Solutions";
                className="text-4xl md:text-6xl font-bold mb-6";
              />;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">;
                Transform your business with cutting-edge AI solutions, cybersecurity, and cloud infrastructure.;
                We deliver innovative technology solutions that drive growth and efficiency.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <Button;
                  size="lg";
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg";
                  onClick={() => trackButtonClick('hero-cta')}
                >;
                  Get Started Today;
                  <ArrowRight className="ml-2 h-5 w-5" />;
                </Button>;
                <Button;
                  variant="outline";
                  size="lg";
                  className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg";
                  onClick={() => trackButtonClick('hero-learn-more')}
                >;
                  Learn More;
                </Button>;
              </div>;
            </motion.div>;
ursor/automate-test-improve-and-merge-code-646c;
          </div>;
        </section>;
        <motion.div className="mt-16 text-center" variants={itemVariants}>;
          <h2 className="text-4xl font-bold mb-8 text-white">Why Choose Us?</h2>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">;
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">;
                <span className="text-2xl">🚀</span>;
              </div>;
              <h3 className="text-2xl font-bold mb-4">Innovation First</h3>;
              <p className="text-gray-600">Pioneering the next generation of technology with cutting-edge AI, blockchain, and quantum computing solutions.</p>;
        {/* Stats Section */}
        <ScrollAnimation>;
          <section className="py-16 bg-gray-900/50">;
            <div className="container mx-auto px-4">;
              <motion.div;
                className="grid grid-cols-2 md:grid-cols-4 gap-8";
                variants={containerVariants}
                initial="hidden";
                whileInView="visible";
                viewport={{ once: true }}
              >;
                {stats.map((stat, index) => (<motion.div;
                    key={index}
                    variants={itemVariants}
                    className="text-center";
                  >;
                    <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">;
                      {stat.number}
                    </div>;
                    <div className="text-gray-300">;
                      {stat.label}
                    </div>;
                  </motion.div>;
                ))}
              </motion.div>;
ursor/automate-test-improve-and-merge-code-646c;
            </div>;
          </section>;
        </ScrollAnimation>;
        {/* Services Section */}
        <ScrollAnimation>;
          <section className="py-20">;
            <div className="container mx-auto px-4">;
              <motion.div;
                variants={itemVariants}
                initial="hidden";
                whileInView="visible";
                viewport={{ once: true }}
                className="text-center mb-16";
              >;
                <GradientHeading className="text-4xl md:text-5xl font-bold mb-6">;
                  Our Services;
                </GradientHeading>;
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                  Comprehensive technology solutions designed to accelerate your digital transformation;
                </p>;
              </motion.div>;
        {/* Testimonials Section */}
        <motion.div className="mt-20 text-center" variants={itemVariants}>;
          <h2 className="text-4xl font-bold mb-12 text-white">What Our Clients Say</h2>;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">;
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>;
              <p className="text-gray-300 mb-4 italic">;
                "Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations.";
              </p>;
              <div className="text-white font-semibold">Sarah Johnson</div>;
              <div className="text-gray-400 text-sm">CEO, TechCorp</div>;
            </div>;
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">;
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>;
              <p className="text-gray-300 mb-4 italic">;
                "Outstanding cybersecurity implementation. Our data has never been safer.";
              </p>;
              <div className="text-white font-semibold">Michael Chen</div>;
              <div className="text-gray-400 text-sm">CTO, SecureData</div>;
            </div>;
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">;
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>;
              <p className="text-gray-300 mb-4 italic">;
                "The cloud migration was seamless. Highly recommend their expertise.";
              </p>;
              <div className="text-white font-semibold">Emily Rodriguez</div>;
              <div className="text-gray-400 text-sm">VP Operations, CloudFirst</div>;
            </div>;
          </div>;
        </motion.div>;
              <motion.div;
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";
                variants={containerVariants}
                initial="hidden";
                whileInView="visible";
                viewport={{ once: true }}
              >;
                {services.map((service, index) => (<motion.div;
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >;
                    <Card className="h-full bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300">;
                      <CardContent className="p-6">;
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>;
                          <service.icon className="h-6 w-6 text-white" />;
                        </div>;
                        <h3 className="text-xl font-semibold text-white mb-3">;
                          {service.title}
                        </h3>;
                        <p className="text-gray-300 mb-4">;
                          {service.description}
                        </p>;
                        <ul className="space-y-2">;
                          {service.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center text-sm text-gray-400">;
                              <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />;
                              {feature}
                            </li>;
                          ))}
                        </ul>;
                      </CardContent>;
                    </Card>;
                  </motion.div>;
                ))}
              </motion.div>;
            </div>;
          </section>;
        </ScrollAnimation>;
ursor/automate-test-improve-and-merge-code-646c;
        {/* Parallax Section */}
        <ParallaxSection />;
        {/* Testimonials */}
        <ScrollAnimation>;
          <Testimonials />;
        </ScrollAnimation>;
        {/* Blog Section */}
        <ScrollAnimation>;
          <BlogSection />;
        </ScrollAnimation>;
        {/* CTA Section */}
        <ScrollAnimation>;
          <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">;
            <div className="container mx-auto px-4 text-center">;
              <motion.div;
                variants={itemVariants}
                initial="hidden";
                whileInView="visible";
                viewport={{ once: true }}
              >;
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
                  Ready to Transform Your Business?;
                </h2>;
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">;
                  Let's discuss how our technology solutions can accelerate your digital transformation;
                </p>;
                <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                  <Button;
                    size="lg";
                    className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg";
                    onClick={() => trackButtonClick('cta-contact')}
                  >;
                    Contact Us Today;
                    <ArrowRight className="ml-2 h-5 w-5" />;
                  </Button>;
                  <Button;
                    variant="outline";
                    size="lg";
                    className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg";
                    onClick={() => trackButtonClick('cta-portfolio')}
                  >;
                    View Our Work;
                  </Button>;
                </div>;
              </motion.div>;
            </div>;
          </section>;
        </ScrollAnimation>;
        <Footer />;
        <BackToTopButton />;
      </motion.div>;
    </div>;
    { number: "500+", label: "Projects Completed" },{ number: "100+", label: "Happy Clients" },{ number: "5+", label: "Years Experience" },{ number: "24/7", label: "Support Available" }
  ];const features = [;
    {icon: <Zap className="w-6 h-6" />,title: "Lightning Fast",description: "Optimized solutions that deliver exceptional performance";
    },{icon: <Shield className="w-6 h-6" />,title: "Secure & Reliable",description: "Enterprise-grade security with 99.9% uptime guarantee";
    },{icon: <Users className="w-6 h-6" />,title: "Expert Team",description: "Experienced professionals with deep technical expertise";
    },{icon: <Award className="w-6 h-6" />,title: "Proven Results",description: "Track record of successful projects and satisfied clients";
    }
  ];const testimonials = [;
    {name: 'Sarah Johnson',role: 'CEO, TechCorp',content: 'Zion Tech Group transformed our business with their AI solutions. We\'ve seen a 300% increase in efficiency.',rating: 5;
    },{name: 'Mike Chen',role: 'CTO, InnovateLab',content: 'Their cloud migration service was flawless. We were up and running in record time with zero downtime.',rating: 5;
    },{name: 'Emily Davis',role: 'VP Engineering, DataFlow',content: 'The data analytics platform they built for us has revolutionized how we make business decisions.',rating: 5;
    }
  ];// Track scroll depth;
  React.useEffect(() => {const handleScroll = () => {const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent  = (scrollTop / docHeight) * 100;if (scrollPercent > 25 && scrollPercent <= 50) {trackScrollDepth(25)} else if (scrollPercent > 50 && scrollPercent <= 75) {trackScrollDepth(50)} else if (scrollPercent > 75 && scrollPercent <= 90) {trackScrollDepth(75)} else if (scrollPercent > 90) {trackScrollDepth(100)}
    }window.addEventListener('scroll', handleScroll)return () => window.removeEventListener('scroll', handleScroll)}, [])return (<>;
      <SEO;
        title="Zion Tech Group - AI & Technology Solutions";
        description="Leading AI-powered technology solutions for modern businesses. Transform your digital future with cutting-edge innovation and enterprise-grade reliability.";
        keywords="AI, artificial intelligence, technology solutions, digital transformation, enterprise software, cloud computing, cybersecurity, automation";
        url="/";
      />;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">;
        {/* Particle Background */}
        <ParticleBackground particleCount={30} />;
        {/* Hero Section */}
        <div className="relative overflow-hidden">;
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">;
            <motion.div;
              className="text-center";
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <motion.h1;
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight";
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >;
                Transform Your Business with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">;
                  <TypingAnimation;
                    text="AI-Powered Solutions";
                    speed={100}
                    delay={1000}
                    className="inline-block";
                  />;
                </span>;
              </motion.h1>;
              <motion.p;
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed";
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >;
                Leading provider of cutting-edge AI, IT, and digital transformation solutions.;
                We help businesses scale, innovate, and succeed in the digital age.;
              </motion.p>;
              <motion.div;
                className="flex flex-col sm:flex-row gap-4 justify-center mb-16";
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >;
              <Link;
                to="/services";
                onClick={() => trackButtonClick('explore_services', 'hero')}
                className="group bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 flex items-center justify-center";
              >;
                Explore Our Services;
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />;
              </Link>;
              <Link;
                to="/contact";
                onClick={() => trackButtonClick('get_consultation', 'hero')}
                className="group border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center";
              >;
                Get Free Consultation;
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />;
              </Link>;
              </motion.div>;
              {/* Stats */}
              <motion.div;
                className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto";
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >;
                {stats.map((stat, index) => (<div key={index} className="text-center">;
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">;
                      {stat.number}
                    </div>;
                    <div className="text-gray-400 text-sm md:text-base">;
                      {stat.label}
                    </div>;
                  </div>;
                ))}
              </motion.div>;
            </motion.div>;
          </div>;
        </div>;
        {/* Services Section */}
        <div className="py-20 bg-gray-900/50">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <ScrollAnimation animation="slideUp" delay={0.2}>;
              <div className="text-center mb-16">;
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>;
                </h2>;
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                  Comprehensive technology solutions designed to accelerate your business growth and digital transformation.;
                </p>;
              </div>;
            </ScrollAnimation>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {services.map((service, index) => (<ScrollAnimation;
                  key={index}
                  animation="scale";
                  delay={index * 0.1}
                  className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700/50 hover:border-cyan-400/50";
                >;
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">;
                    {service.icon}
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">;
                    {service.title}
                  </h3>;
                  <p className="text-gray-300 mb-6 leading-relaxed">;
                    {service.description}
                  </p>;
                  <Link;
                    to={service.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300";
                  >;
                    Learn More;
                    <ArrowRight className="ml-2 w-4 h-4" />;
                  </Link>;
                </ScrollAnimation>;
              ))}
            </div>;
          </div>;
        </div>;
        {/* Features Section */}
        <div className="py-20">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <ParallaxSection speed={0.3} direction="up">;
              <ScrollAnimation animation="slideUp" delay={0.2}>;
                <div className="text-center mb-16">;
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
                    Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Zion Tech</span>?;
                  </h2>;
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                    We combine cutting-edge technology with proven expertise to deliver exceptional results.;
                  </p>;
                </div>;
              </ScrollAnimation>;
            </ParallaxSection>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {features.map((feature, index) => (<ScrollAnimation;
                  key={index}
                  animation="scale";
                  delay={index * 0.1}
                  className="text-center group";
                >;
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">;
                    <div className="text-black">;
                      {feature.icon}
                    </div>;
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-3">;
                    {feature.title}
                  </h3>;
                  <p className="text-gray-300 leading-relaxed">;
                    {feature.description}
                  </p>;
                </ScrollAnimation>;
              ))}
            </div>;
          </div>;
        </div>;
        {/* Testimonials Section */}
        <Testimonials />;
        {/* Blog Section */}
        <BlogSection />;
        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">;
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">;
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
                Ready to Transform Your Business?;
              </h2>;
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
                Let&apos;s discuss your project and discover how our AI-powered solutions can accelerate your growth.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <Link;
                  to="/contact";
                  className="group bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 flex items-center justify-center";
                >;
                  Start Your Project;
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />;
                </Link>;
                <Link;
                  to="/pricing";
                  className="group border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center";
                >;
                  View Pricing;
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </div>;
    </div>;
      </div>;
    </>;
ursor/integrate-build-improve-and-re-verify-9d47;
ursor/automate-test-improve-and-merge-code-646c;
    <Link;
      to={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300";
    >;
      <div className="flex items-center mb-4">;
        {icon && <span className="text-2xl mr-3">{icon}</span>}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>;
      </div>;
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>;
      {bullets.length > 0 && (<ul className="space-y-1">;
          {bullets.map((bullet, index) => (<li key={index} className="text-sm text-gray-600 flex items-center">;
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>;
              {bullet}
            </li>;
          ))}
        </ul>;
      )}
    </Link>;
  ArrowRight,Code,Database,Smartphone,Shield,Cloud,Globe,Zap,Users,Award,Star,CheckCircle;
} from "lucide-react";
import Card from '../components/Card';
// Track scroll depth function;
const trackScrollDepth = (depth: number) => {console.log(`Scroll depth: ${depth}%`)// Add analytics tracking here;
}// Track button click function;
const trackButtonClick = (action: string, section: string) => {console.log(`Button clicked: ${action} in ${section}`)// Add analytics tracking here;
}const Home: React.FC = () => {const services = [;
    {icon: <Code className="w-8 h-8" />,title: "AI Services",description: "Custom AI solutions powered by machine learning and deep learning technologies",href: "/services/ai-services";
    },{icon: <Database className="w-8 h-8" />,title: "IT Services",description: "Comprehensive IT infrastructure and digital transformation solutions",href: "/services/it-services";
    },{icon: <Smartphone className="w-8 h-8" />,title: "Micro SaaS",description: "Scalable software-as-a-service solutions for growing businesses",href: "/services/micro-saas";
    },{icon: <Shield className="w-8 h-8" />,title: "Cybersecurity",description: "Advanced security solutions to protect your digital assets",href: "/services/cybersecurity";
    },{icon: <Cloud className="w-8 h-8" />,title: "Cloud Solutions",description: "Scalable cloud infrastructure and migration services",href: "/services/cloud-solutions";
    },{icon: <Globe className="w-8 h-8" />,title: "Data Analytics",description: "Transform data into actionable insights with advanced analytics",href: "/services/data-analytics";
    }
  ];const stats = [;
    { number: "500+", label: "Projects Completed" },{ number: "100+", label: "Happy Clients" },{ number: "5+", label: "Years Experience" },{ number: "24/7", label: "Support Available" }
  ];const features = [;
    {icon: <Zap className="w-6 h-6" />,title: "Lightning Fast",description: "Optimized solutions that deliver exceptional performance";
    },{icon: <Shield className="w-6 h-6" />,title: "Secure & Reliable",description: "Enterprise-grade security with 99.9% uptime guarantee";
    },{icon: <Users className="w-6 h-6" />,title: "Expert Team",description: "Experienced professionals with deep technical expertise";
    },{icon: <Award className="w-6 h-6" />,title: "Proven Results",description: "Track record of successful projects and satisfied clients";
    }
  ];const testimonials = [;
    {name: 'Sarah Johnson',role: 'CEO, TechCorp',content: 'Zion Tech Group transformed our business with their AI solutions. We\'ve seen a 300% increase in efficiency.',rating: 5;
    },{name: 'Mike Chen',role: 'CTO, InnovateLab',content: 'Their cloud migration service was flawless. We were up and running in record time with zero downtime.',rating: 5;
    },{name: 'Emily Davis',role: 'VP Engineering, DataFlow',content: 'The data analytics platform they built for us has revolutionized how we make business decisions.',rating: 5;
    }
  ];// Track scroll depth;
  React.useEffect(() => {const handleScroll = () => {const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent  = (scrollTop / docHeight) * 100;if (scrollPercent > 25 && scrollPercent <= 50) {trackScrollDepth(25)} else if (scrollPercent > 50 && scrollPercent <= 75) {trackScrollDepth(50)} else if (scrollPercent > 75 && scrollPercent <= 90) {trackScrollDepth(75)} else if (scrollPercent > 90) {trackScrollDepth(100)}
    }window.addEventListener('scroll', handleScroll)return () => window.removeEventListener('scroll', handleScroll)}, [])return (<>;
      <SEO;
        title="Zion Tech Group - AI & Technology Solutions";
        description="Leading AI-powered technology solutions for modern businesses. Transform your digital future with cutting-edge innovation and enterprise-grade reliability.";
        keywords="AI, artificial intelligence, technology solutions, digital transformation, enterprise software, cloud computing, cybersecurity, automation";
        url="/";
      />;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">;
        {/* Particle Background */}
        <ParticleBackground particleCount={30} />;
        {/* Hero Section */}
        <div className="relative overflow-hidden">;
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">;
            <motion.div;
              className="text-center";
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <motion.h1;
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight";
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >;
                Transform Your Business with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">;
                  <TypingAnimation;
                    text="AI-Powered Solutions";
                    speed={100}
                    delay={1000}
                    className="inline-block";
                  />;
                </span>;
              </motion.h1>;
              <motion.p;
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed";
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >;
                Leading provider of cutting-edge AI, IT, and digital transformation solutions.;
                We help businesses scale, innovate, and succeed in the digital age.;
              </motion.p>;
              <motion.div;
                className="flex flex-col sm:flex-row gap-4 justify-center mb-16";
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >;
              <Link;
                to="/services";
                onClick={() => trackButtonClick('explore_services', 'hero')}
                className="group bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 flex items-center justify-center";
              >;
                Explore Our Services;
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />;
              </Link>;
              <Link;
                to="/contact";
                onClick={() => trackButtonClick('get_consultation', 'hero')}
                className="group border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center";
              >;
                Get Free Consultation;
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />;
              </Link>;
              </motion.div>;
              {/* Stats */}
              <motion.div;
                className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto";
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >;
                {stats.map((stat, index) => (<div key={index} className="text-center">;
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">;
                      {stat.number}
                    </div>;
                    <div className="text-gray-400 text-sm md:text-base">;
                      {stat.label}
                    </div>;
                  </div>;
                ))}
              </motion.div>;
            </motion.div>;
          </div>;
        </div>;
        {/* Services Section */}
        <div className="py-20 bg-gray-900/50">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <ScrollAnimation animation="slideUp" delay={0.2}>;
              <div className="text-center mb-16">;
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>;
                </h2>;
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                  Comprehensive technology solutions designed to accelerate your business growth and digital transformation.;
                </p>;
              </div>;
            </ScrollAnimation>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {services.map((service, index) => (<ScrollAnimation;
                  key={index}
                  animation="scale";
                  delay={index * 0.1}
                  className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700/50 hover:border-cyan-400/50";
                >;
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">;
                    {service.icon}
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">;
                    {service.title}
                  </h3>;
                  <p className="text-gray-300 mb-6 leading-relaxed">;
                    {service.description}
                  </p>;
                  <Link;
                    to={service.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300";
                  >;
                    Learn More;
                    <ArrowRight className="ml-2 w-4 h-4" />;
                  </Link>;
                </ScrollAnimation>;
              ))}
            </div>;
          </div>;
        </div>;
        {/* Features Section */}
        <div className="py-20">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <ParallaxSection speed={0.3} direction="up">;
              <ScrollAnimation animation="slideUp" delay={0.2}>;
                <div className="text-center mb-16">;
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
                    Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Zion Tech</span>?;
                  </h2>;
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                    We combine cutting-edge technology with proven expertise to deliver exceptional results.;
                  </p>;
                </div>;
              </ScrollAnimation>;
            </ParallaxSection>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {features.map((feature, index) => (<ScrollAnimation;
                  key={index}
                  animation="scale";
                  delay={index * 0.1}
                  className="text-center group";
                >;
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">;
                    <div className="text-black">;
                      {feature.icon}
                    </div>;
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-3">;
                    {feature.title}
                  </h3>;
                  <p className="text-gray-300 leading-relaxed">;
                    {feature.description}
                  </p>;
                </ScrollAnimation>;
              ))}
            </div>;
          </div>;
        </div>;
        {/* Testimonials Section */}
        <Testimonials />;
        {/* Blog Section */}
        <BlogSection />;
        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">;
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">;
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
                Ready to Transform Your Business?;
              </h2>;
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
                Let&apos;s discuss your project and discover how our AI-powered solutions can accelerate your growth.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <Link;
                  to="/contact";
                  className="group bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 flex items-center justify-center";
                >;
                  Start Your Project;
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />;
                </Link>;
                <Link;
                  to="/pricing";
                  className="group border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center";
                >;
                  View Pricing;
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </div>;
    </>;
  )}export default Home;function ServiceCard() {return (<Link;
      to={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300";
    >;
      <div className="flex items-center mb-4">;
        {icon && <span className="text-2xl mr-3">{icon}</span>}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>;
      </div>;
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>;
      {bullets.length > 0 && (<ul className="space-y-1">;
          {bullets.map((bullet, index) => (<li key={index} className="text-sm text-gray-600 flex items-center">;
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>;
              {bullet}
            </li>;
          ))}
        </ul>;
      )}
    </Link>;
  )}export default function HomePage() {return (<div className="space-y-16">;
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">;
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">;
          Zion Tech Group;
        </h1>;
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">;
          Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with our comprehensive suite of intelligent services.;
        </p>;
        <div className="flex flex-col sm:flex-row gap-4 justify-center">;
          <Link;
            to="/services";
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus-visible:focus";
          >;
            Explore Services;
          </Link>;
          <a;
            href="https://ziontechgroup.com";
            target="_blank";
            rel="noopener noreferrer";
            className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors focus-visible:focus";
          >;
            Visit Main Site;
          </a>;
        </div>;
      </section>;
      {/* Featured Services */}
      <section className="py-12">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>;
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">;
            Comprehensive solutions for modern businesses, from AI-powered tools to complete IT infrastructure.;
          </p>;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          <ServiceCard;
            title="Micro SaaS Solutions";
            href="/services/micro-saas";
            description="End-to-end product development with billing, auth, analytics and growth optimization";
            bullets={[;
              "Custom SaaS development","Payment integration","User authentication","Analytics dashboard","API development";
            ]}
            icon="🚀";
          />;
          <ServiceCard;
            title="AI Services";
            href="/services/ai-services";
            description="Cutting-edge AI solutions for automation, analytics, and intelligent decision making";
            bullets={[;
              "AI chatbots & assistants","Machine learning models","Natural language processing","Computer vision","Predictive analytics";
            ]}
            icon="🤖";
          />;
          <ServiceCard;
            title="IT Services";
            href="/services/it-services";
            description="Complete IT infrastructure, cloud migration, and digital transformation solutions";
            bullets={[;
              "Cloud migration","DevOps & CI/CD","Infrastructure management","Security solutions","24/7 support";
            ]}
            icon="💻";
          />;
          <Card;
            title="Blockchain";
            href="/services/blockchain";
            description="Smart contracts, DeFi protocols, NFT platforms and Web3 solutions.";
            icon="⛓️";
          />;
          <Card;
            title="Cybersecurity";
            href="/services/cybersecurity";
            description="Penetration testing, security audits, compliance and incident response.";
            icon="🔒";
          />;
          <Card;
            title="Cloud Services";
            href="/services/cloud-services";
            description="Cloud migration, architecture, and optimization across AWS, Azure, and GCP.";
            icon="☁️";
          />;
        </div>;
      </section>;
      {/* Why Choose Us */}
      <section className="py-12 bg-gray-50 rounded-lg">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>;
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">;
            We combine technical expertise with business acumen to deliver solutions that drive real results.;
          </p>;
        </div>;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
          <div className="text-center p-6">;
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">;
              <span className="text-2xl">⚡</span>;
            </div>;
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>;
            <p className="text-gray-600">Rapid development and deployment with agile methodologies</p>;
          </div>;
          <div className="text-center p-6">;
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">;
              <span className="text-2xl">🔒</span>;
            </div>;
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Reliable</h3>;
            <p className="text-gray-600">Enterprise-grade security and 99.9% uptime guarantee</p>;
          </div>;
          <div className="text-center p-6">;
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">;
              <span className="text-2xl">🎯</span>;
            </div>;
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Solutions</h3>;
            <p className="text-gray-600">Tailored solutions that fit your specific business needs</p>;
          </div>;
          <div className="text-center p-6">;
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">;
              <span className="text-2xl">📞</span>;
            </div>;
            <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>;
            <p className="text-gray-600">Round-the-clock technical support and maintenance</p>;
          </div>;
        </div>;
      </section>;
      {/* Contact CTA */}
      <section className="py-12">;
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">;
          <h2 className="text-3xl font-bold text-gray-900 mb-4">;
            Ready to Transform Your Business?;
          </h2>;
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">;
            Let's discuss your project and create a custom solution that drives real business value.;
            Our team has delivered 1000+ successful projects across various industries.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <a;
              href="tel:+13024640950";
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors";
            >;
              Call +1 302 464 0950;
            </a>;
            <a;
              href="mailto:kleber@ziontechgroup.com";
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors";
            >;
              Email Us;
            </a>;
          </div>;
          <div className="mt-6 text-sm text-gray-600">;
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>;
          </div>;
        </div>;
      </section>;
    </div>;
  )}