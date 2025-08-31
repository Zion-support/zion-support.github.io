import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Check, 
  ArrowRight, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Cloud, 
  Database, 
  Code, 
  Brain, 
  Network, 
  Lock, 
  BarChart3, 
  Smartphone, 
  Globe, 
  Cpu, 
  HardDrive, 
  Settings,
  Palette,
  TrendingUp,
  Award,
  Heart,
  Clock,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  ChevronLeft,
  Play,
  Pause
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

export default function ServicesPricingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const heroSlides = [
    {
      title: "AI-Powered Innovation",
      subtitle: "Transform your business with cutting-edge artificial intelligence solutions",
      description: "Leverage the power of machine learning, natural language processing, and computer vision to drive innovation and efficiency across your organization.",
      icon: <Brain className="w-16 h-16" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-600/20 to-pink-600/20"
    },
    {
      title: "Quantum Computing",
      subtitle: "Next-generation computational power for complex problem solving",
      description: "Harness the revolutionary potential of quantum computing to solve previously intractable problems in cryptography, optimization, and scientific research.",
      icon: <Cpu className="w-16 h-16" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-600/20 to-cyan-600/20"
    },
    {
      title: "Digital Transformation",
      subtitle: "Modernize your business for the digital age",
      description: "Complete digital transformation solutions including cloud migration, process automation, and modern application development to future-proof your business.",
      icon: <TrendingUp className="w-16 h-16" />,
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-600/20 to-teal-600/20"
    }
  ];

  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions for business automation and insights",
      icon: Brain,
      startingPrice: 299,
      features: [
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "Machine Learning Platforms",
        "AI Consulting & Strategy"
      ]
    },
    {
      name: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      icon: Shield,
      startingPrice: 199,
      features: [
        "Threat Detection & Response",
        "Security Audits & Compliance",
        "Penetration Testing",
        "Security Architecture",
        "Incident Response"
      ]
    },
    {
      name: "Cloud & Infrastructure",
      description: "Scalable cloud solutions and modern infrastructure management",
      icon: Cloud,
      startingPrice: 249,
      features: [
        "Cloud Migration",
        "DevOps & CI/CD",
        "Serverless Architecture",
        "Container Orchestration",
        "Infrastructure as Code"
      ]
    },
    {
      name: "Data & Analytics",
      description: "Transform raw data into actionable business intelligence",
      icon: BarChart3,
      startingPrice: 179,
      features: [
        "Business Intelligence",
        "Big Data Processing",
        "Data Engineering",
        "Real-time Analytics",
        "Data Visualization"
      ]
    },
    {
      name: "Development",
      description: "Custom software development and modern application solutions",
      icon: Code,
      startingPrice: 399,
      features: [
        "Web Applications",
        "Mobile Apps",
        "API Development",
        "Microservices",
        "Legacy Modernization"
      ]
    },
    {
      name: "IoT & Edge Computing",
      description: "Connected devices and edge computing solutions",
      icon: Network,
      startingPrice: 159,
      features: [
        "IoT Platform Development",
        "Edge Computing",
        "Sensor Networks",
        "Device Management",
        "Data Streaming"
      ]
    }
  ];

  const addOns = [
    {
      name: "24/7 Support",
      description: "Round-the-clock technical support and monitoring",
      price: 99,
      icon: <Clock className="w-6 h-6" />
    },
    {
      name: "Custom Integration",
      description: "Tailored integration with your existing systems",
      price: 199,
      icon: <Settings className="w-6 h-6" />
    },
    {
      name: "Training & Workshops",
      description: "Comprehensive training for your team",
      price: 149,
      icon: <Users className="w-6 h-6" />
    },
    {
      name: "Performance Optimization",
      description: "Continuous performance monitoring and optimization",
      price: 129,
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp Inc.",
      content: "Zion Tech Group transformed our entire IT infrastructure. The AI solutions alone increased our efficiency by 40%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "VP of Engineering",
      company: "InnovateTech",
      content: "Their cybersecurity expertise helped us achieve compliance and protect our assets. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Director of Operations",
      company: "DataFlow Solutions",
      content: "The cloud migration was seamless and the ongoing support is exceptional. Great partnership!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "What is included in the basic service packages?",
      answer: "Basic packages include core service delivery, standard support, and basic reporting. Additional features can be added as add-ons."
    },
    {
      question: "Can I customize my service package?",
      answer: "Absolutely! All our service packages are customizable. We work with you to create the perfect solution for your business needs."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide multiple support tiers including email, phone, and 24/7 emergency support. Response times vary by package level."
    },
    {
      question: "Do you offer training for our team?",
      answer: "Yes, we offer comprehensive training programs to ensure your team can effectively use and maintain the solutions we implement."
    },
    {
      question: "What is your implementation timeline?",
      answer: "Implementation timelines vary by project complexity, typically ranging from 2-8 weeks. We'll provide a detailed timeline during planning."
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer: "Yes, all our service packages include ongoing maintenance and updates to ensure optimal performance and security."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="Services & Pricing - Zion Tech Group"
        description="Explore our comprehensive technology services and competitive pricing. From AI solutions to cybersecurity, we offer scalable packages to meet your business needs."
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark to-zion-purple"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-zion-cyan/20 rounded-full">
                <Zap className="w-16 h-16 text-zion-cyan" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Services & Pricing
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose from our comprehensive range of technology services, designed to scale with your business needs. 
              All packages include expert support and ongoing optimization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Service Categories
            </h2>
            <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
              Explore our comprehensive range of technology services. 
              Each category can be customized to meet your specific requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-white/5 backdrop-blur-sm border-white/20 hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-blue rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-white">
                      {category.name}
                    </CardTitle>
                    
                    <CardDescription className="text-zion-cyan-light">
                      {category.description}
                    </CardDescription>
                    
                    <div className="text-2xl font-bold text-zion-cyan">
                      Starting at ${category.startingPrice}/mo
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {category.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <Check className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                          <span className="text-white">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
              Enhance your plan with these additional services. 
              Mix and match to create the perfect solution for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-white/5 backdrop-blur-sm border-white/20 hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {addon.icon}
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-white">
                      {addon.name}
                    </CardTitle>
                    
                    <CardDescription className="text-zion-cyan-light">
                      {addon.description}
                    </CardDescription>
                    
                    <div className="text-2xl font-bold text-zion-cyan">
                      ${addon.price}/mo
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <Button 
                      variant="outline" 
                      className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white"
                    >
                      Add Service
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white/5 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    <p className="text-white mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-blue rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      
                      <div>
                        <div className="text-white font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-zion-cyan-light">{testimonial.role}</div>
                        <div className="text-xs text-zion-cyan-light">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
              Get answers to common questions about our services and pricing.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zion-cyan-light">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss your technology needs and find the perfect solution for your business. 
              Our experts are here to help you succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-zion-cyan text-zion-slate-dark hover:bg-zion-cyan-light">
                Get a Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-slate-dark">
                Schedule Consultation
                <Phone className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
