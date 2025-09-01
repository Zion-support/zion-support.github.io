
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { ; ChevronDown,; ArrowRight,; CheckCircle,; Star,; Users,; Globe,; Award,; Zap,; Shield,; Cloud,; Brain,; Lock,; BarChart3,; Code,; Database,; Server,; Smartphone,; Wifi,; Eye,; Target,; TrendingUp,; Clock,; Phone,; Mail,; MapPin,; Play,; Pause,; Volume2,; VolumeX; } from 'lucide-react';
;
export default function Home() {;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
;
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
;
  useEffect(() => {;
    setIsVisible(true);
;
    const interval = setInterval(() => {;
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
;
    return () => clearInterval(interval);
  }, []);
;
  const heroSlides = [;
    {;
      title: "AI-Powered Business Intelligence",";""
      subtitle: "Transform your data into actionable insights with cutting-edge AI technology",";""
      description: "Our AI Business Intelligence platform helps you make data-driven decisions, identify trends, and optimize operations for maximum efficiency and growth.",";""
      image: "/images/hero-ai-bi.jpg",";""
      cta: "Explore AI BI",";""
      href: "/ai-services";"
    },;""
    {";""
      title: "Cloud & DevOps Excellence",";""
      subtitle: "Streamline your development and deployment processes",";""
      description: "From cloud migration to CI/CD pipelines, we help you build scalable, secure, and efficient infrastructure that accelerates your development cycle.",";""
      image: "/images/hero-cloud-devops.jpg",";""
      cta: "Discover Cloud Solutions",";""
      href: "/cloud-devops";"
    },;""
    {";""
      title: "Cybersecurity & Compliance",";""
      subtitle: "Protect your business with enterprise-grade security",";""
      description: "Comprehensive cybersecurity solutions including threat detection, compliance management, and security audits to keep your business safe and compliant.",";""
      image: "/images/hero-cybersecurity.jpg",";""
      cta: "Secure Your Business",";""
      href: "/cybersecurity";
    };
  ];
;"
  const serviceCategories = [;""
    {";""
      name: "AI & Machine Learning",";""
      description: "Intelligent solutions that learn, adapt, and optimize your business processes",";""
      icon: "🤖",;""
      count: 8,";""
      href: "/ai-services",";""
      color: "from-purple-500 to-pink-500";"
    },;""
    {";""
      name: "Cloud & DevOps",";""
      description: "Scalable infrastructure and streamlined development workflows",";""
      icon: "☁️",;""
      count: 6,";""
      href: "/cloud-devops",";""
      color: "from-blue-500 to-cyan-500";"
    },;""
    {";""
      name: "Cybersecurity",";""
      description: "Comprehensive protection for your digital assets and compliance needs",";""
      icon: "🔒",;""
      count: 5,";""
      href: "/cybersecurity",";""
      color: "from-red-500 to-orange-500";"
    },;""
    {";""
      name: "Digital Transformation",";""
      description: "Modernize your business with cutting-edge technology solutions",";""
      icon: "🚀",;""
      count: 7,";""
      href: "/digital-transformation",";""
      color: "from-green-500 to-emerald-500";"
    },;""
    {";""
      name: "Data Analytics",";""
      description: "Turn your data into actionable insights and strategic advantages",";""
      icon: "📊",;""
      count: 4,";""
      href: "/data-analytics",";""
      color: "from-indigo-500 to-purple-500";"
    },;""
    {";""
      name: "Custom Development",";""
      description: "Tailored software solutions designed for your specific business needs",";""
      icon: "💻",;""
      count: 9,";""
      href: "/custom-development",";""
      color: "from-yellow-500 to-orange-500";
    };
  ];"
;""
  const stats = [";""
    { number: "500+", label: "Projects Completed", icon: CheckCircle },";""
    { number: "100+", label: "Enterprise Clients", icon: Users },";""
    { number: "25+", label: "Countries Served", icon: Globe },";""
    { number: "99.9%", label: "Uptime SLA", icon: Award };
  ];
;"
  const testimonials = [;""
    {";""
      name: "Sarah Johnson",";""
      role: "CTO, TechCorp Inc.",";""
      content: "Zion Tech Group transformed our entire data infrastructure. Their AI solutions helped us increase efficiency by 40% and reduce costs significantly.",;""
      rating: 5,";""
      company: "TechCorp Inc.";"
    },;""
    {";""
      name: "Michael Chen",";""
      role: "VP Engineering, InnovateTech",";""
      content: "The cloud migration project was executed flawlessly. Our development team can now deploy updates in minutes instead of hours.",;""
      rating: 5,";""
      company: "InnovateTech";"
    },;""
    {";""
      name: "Emily Rodriguez",";""
      role: "Director of IT, HealthFirst",";""
      content: "Their cybersecurity expertise helped us achieve HIPAA compliance and secure our patient data. Highly recommended for healthcare organizations.",;""
      rating: 5,";""
      company: "HealthFirst";
    };
  ];
;
  const features = [;"
    {;""
      icon: Zap,";""
      title: "Lightning Fast",";""
      description: "Optimized performance with sub-second response times";
    },;"
    {;""
      icon: Shield,";""
      title: "Enterprise Secure",";""
      description: "Bank-level security with SOC 2 Type II compliance";
    },;"
    {;""
      icon: Scale,";""
      title: "Infinitely Scalable",";""
      description: "Grows with your business from startup to enterprise";
    },;"
    {;""
      icon: Clock,";""
      title: "24/7 Support",";""
      description: "Round-the-clock technical support and monitoring";
    };
  ];"
;""
  return (";""
    <div className="min-h-screen bg-slate-900">;""
      <SEO";""
        title="Zion Tech Group - AI-Powered Technology Solutions";""
        description="Leading technology company specializing in AI solutions, cloud services, cybersecurity, and digital transformation. Transform your business with cutting-edge technology.";""
        keywords="AI solutions, cloud services, cybersecurity, digital transformation, technology consulting";"
      />;""
      {/* Hero Section */}";""
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">;""
        {/* Background Video/Image */}";""
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">";""
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>;"
        </div>;""
        {/* Content */}";""
        <div className="relative z-10 container mx-auto px-4 text-center">;
          <motion.div;
            initial={{ opacity: 0, y: 30 }};
            animate={{ opacity: 1, y: 0 }};"
            transition={{ duration: 0.8 }};""
          >";""
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">;"
              Transform Your Business with AI-Powered Technology;""
            </h1>";""
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">;
              Zion Tech Group delivers cutting-edge AI solutions, cloud services, and cybersecurity expertise to help your business thrive in the digital age;"
            </p>;";""
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">;""
              <Link ";""
                to="/contact";""
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105";"
              >;""
                Get Started Today";""
                <ArrowRight className="ml-2 inline w-5 h-5" />;"
              </Link>;""
              <Link ";""
                to="/services";""
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300";
              >;
                Explore Services;
              </Link>;
            </div>;
          </motion.div>;
        </div>;"
        {/* Scroll Indicator */};""
        <motion.div ";""
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2";
          animate={{ y: [0, 10, 0] }};"
          transition={{ duration: 2, repeat: Infinity }};""
        >";""
          <ChevronDown className="w-6 h-6 text-cyan-400" />;
        </motion.div>;
      </section>;"
      {/* Service Categories Section */};""
      <motion.section ";""
        className="py-24 bg-slate-800/50";"
        initial={{ opacity: 0 }};""
        whileInView={{ opacity: 1 }}";""
        viewport={{ once: true, margin: "-100px" }};"
        transition={{ duration: 0.8 }};""
      >";""
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;""
          <motion.div ";""
            className="text-center mb-20";
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            viewport={{ once: true }};"
            transition={{ duration: 0.8 }};""
          >";""
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">";""
              Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Service Categories</span>;""
            </h2>";""
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">;
              Explore our comprehensive range of technology solutions designed to transform your business and drive innovation;
            </p>;"
          </motion.div>;";""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">;
            {serviceCategories.map((category, index) => (;
              <motion.div;
                key={category.name};
                initial={{ y: 30, opacity: 0 }};
                whileInView={{ y: 0, opacity: 1 }};"
                viewport={{ once: true }};""
                transition={{ duration: 0.8, delay: index * 0.1 }}";""
                className="group";"
                whileHover={{ y: -8, scale: 1.02 }};""
              >";""
                <Link to={category.href} className="block h-full">";""
                  <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-3xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/25 h-full flex flex-col justify-between">;"
                    <div>;""
                      <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg`}>";""
                        <span className="text-3xl">{category.icon}</span>;""
                      </div>";""
                      <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors duration-300">;"
                        {category.name};""
                      </h3>";""
                      <p className="text-slate-300 text-center mb-6 leading-relaxed">;
                        {category.description};"
                      </p>;""
                    </div>";""
                    <div className="text-center">";""
                      <span className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-semibold border border-cyan-500/30">;
                        {category.count} Services;
                      </span>;
                    </div>;
                  </div>;
                </Link>;
              </motion.div>;
            ))};
          </div>;
        </div>;
      </motion.section>;"
      {/* Featured Services Section */};""
      <motion.section ";""
        className="py-24 bg-gradient-to-b from-slate-900 to-slate-800";"
        initial={{ opacity: 0 }};""
        whileInView={{ opacity: 1 }}";""
        viewport={{ once: true, margin: "-100px" }};"
        transition={{ duration: 0.8 }};""
      >";""
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;""
          <motion.div ";""
            className="text-center mb-20";
            initial={{ y: 30, opacity: 0 }};
            whileInView={{ y: 0, opacity: 1 }};
            viewport={{ once: true }};"
            transition={{ duration: 0.8 }};""
          >";""
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">";""
              Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>;""
            </h2>";""
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">;
              Discover our most popular and innovative technology solutions;
            </p>;"
          </motion.div>;";""
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">;
            {/* AI-Powered Solutions */};
            <motion.div;
              initial={{ x: -30, opacity: 0 }};
              whileInView={{ x: 0, opacity: 1 }};"
              viewport={{ once: true }};""
              transition={{ duration: 0.8 }}";""
              className="group";""
            >";""
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-md p-8 rounded-3xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/25">";""
                <div className="flex items-center mb-6">";""
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">";""
                    <span className="text-2xl">🤖</span>;"
                  </div>;""
                  <div>";""
                    <h3 className="text-2xl font-bold text-white">AI-Powered Solutions</h3>";""
                    <p className="text-cyan-400 text-sm font-medium">Most Popular</p>;"
                  </div>;""
                </div>";""
                <p className="text-slate-300 mb-6 leading-relaxed">;
                  Leverage cutting-edge artificial intelligence to automate processes, gain insights, and transform your business operations with our comprehensive AI solutions.;"
                </p>;""
                <Link ";""
                  to="/ai-services";""
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group-hover:scale-105";"
                >;""
                  Explore AI Solutions";""
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">";""
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />;
                  </svg>;
                </Link>;
              </div>;
            </motion.div>;
            {/* Cloud & DevOps */};
            <motion.div;
              initial={{ x: 30, opacity: 0 }};
              whileInView={{ x: 0, opacity: 1 }};"
              viewport={{ once: true }};""
              transition={{ duration: 0.8 }}";""
              className="group";""
            >";""
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md p-8 rounded-3xl border border-blue-500/30 hover:border-blue-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25">";""
                <div className="flex items-center mb-6">";""
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">";""
                    <span className="text-2xl">☁️</span>;"
                  </div>;""
                  <div>";""
                    <h3 className="text-2xl font-bold text-white">Cloud & DevOps</h3>";""
                    <p className="text-blue-400 text-sm font-medium">High Demand</p>;"
                  </div>;""
                </div>";""
                <p className="text-slate-300 mb-6 leading-relaxed">;
                  Accelerate your development with modern cloud infrastructure, automated CI/CD pipelines, and scalable DevOps practices that reduce time-to-market.;"
                </p>;""
                <Link ";""
                  to="/cloud-devops";""
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-105";"
                >;""
                  Explore Cloud Solutions";""
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">";""
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />;
                  </svg>;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </motion.section>;"
      {/* Stats Section */};""
      <motion.section ";""
        className="py-24 bg-slate-800/30";
        initial={{ opacity: 0 }};
        whileInView={{ opacity: 1 }};
        viewport={{ once: true }};"
        transition={{ duration: 0.8 }};""
      >";""
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";""
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">;
            {stats.map((stat, index) => (;
              <motion.div;
                key={stat.label};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};"
                viewport={{ once: true }};""
                transition={{ duration: 0.6, delay: index * 0.1 }}";""
                className="text-center";""
              >";""
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">";""
                  <stat.icon className="w-8 h-8 text-white" />;""
                </div>";""
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>";""
                <div className="text-slate-300">{stat.label}</div>;
              </motion.div>;
            ))};
          </div>;
        </div>;
      </motion.section>;"
      {/* Testimonials Section */};""
      <motion.section ";""
        className="py-24 bg-gradient-to-b from-slate-800 to-slate-900";
        initial={{ opacity: 0 }};
        whileInView={{ opacity: 1 }};
        viewport={{ once: true }};"
        transition={{ duration: 0.8 }};""
      >";""
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;""
          <motion.div ";""
            className="text-center mb-20";
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            viewport={{ once: true }};"
            transition={{ duration: 0.8 }};""
          >";""
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">";""
              What Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Clients Say</span>;""
            </h2>";""
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">;
              Don't just take our word for it - hear from the businesses we've helped transform;
            </p>;"
          </motion.div>;";""
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {testimonials.map((testimonial, index) => (;
              <motion.div;
                key={testimonial.name};
                initial={{ opacity: 0, y: 30 }};
                whileInView={{ opacity: 1, y: 0 }};"
                viewport={{ once: true }};""
                transition={{ duration: 0.6, delay: index * 0.1 }}";""
                className="bg-slate-800/50 backdrop-blur-md p-8 rounded-3xl border border-slate-700/50";""
              >";""
                <div className="flex items-center mb-4">;""
                  {[...Array(testimonial.rating)].map((_, i) => (";""
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />;"
                  ))};""
                </div>";""
                <p className="text-slate-300 mb-6 leading-relaxed">";"{testimonial.content}";"
                </p>;""
                <div>";""
                  <div className="font-semibold text-white">{testimonial.name}</div>";""
                  <div className="text-slate-400 text-sm">{testimonial.role}</div>";""
                  <div className="text-cyan-400 text-sm">{testimonial.company}</div>;
                </div>;
              </motion.div>;
            ))};
          </div>;
        </div>;
      </motion.section>;"
      {/* CTA Section */};""
      <motion.section ";""
        className="py-24 bg-gradient-to-r from-cyan-600 to-blue-700";
        initial={{ opacity: 0 }};
        whileInView={{ opacity: 1 }};
        viewport={{ once: true }};"
        transition={{ duration: 0.8 }};""
      >";""
        <div className="max-w-4xl mx-auto text-center px-4">;""
          <motion.h2 ";""
            className="text-5xl md:text-6xl font-bold mb-8 text-white";
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            viewport={{ once: true }};
            transition={{ duration: 0.8 }};
          >;
            Ready to Transform Your Business?;"
          </motion.h2>;""
          <motion.p ";""
            className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto";
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            viewport={{ once: true }};
            transition={{ duration: 0.8, delay: 0.2 }};
          >;
            Let's discuss how our AI-powered solutions can revolutionize your operations and drive unprecedented growth;"
          </motion.p>;""
          <motion.div ";""
            className="flex flex-col sm:flex-row gap-4 justify-center";
            initial={{ opacity: 0, y: 30 }};
            whileInView={{ opacity: 1, y: 0 }};
            viewport={{ once: true }};
            transition={{ duration: 0.8, delay: 0.4 }};"
          >;""
            <Link ";""
              to="/contact";""
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105";
            >;
              Get Started Today;"
            </Link>;""
            <Link ";""
              to="/services";""
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300";
            >;
              Explore Services;
            </Link>;
          </motion.div>;
        </div>;
      </motion.section>;
    </div>;"
  );""
}";""