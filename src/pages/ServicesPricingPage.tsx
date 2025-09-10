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