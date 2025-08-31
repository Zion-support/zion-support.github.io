import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Users, 
  TrendingUp, 
  Shield, 
  Cloud, 
  Brain, 
  Zap, 
  Target,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Workflow,
  Database,
  Globe,
  Lock,
  Rocket,
  Star,
  Award,
  Headphones,
  Phone,
  Mail,
  MapPin,
  BookOpen,
  Video,
  Monitor,
  Settings,
  Lightbulb,
  Cog,
  Wrench,
  Laptop,
  Smartphone,
  Tablet,
  Wifi,
  MessageCircle,
  Calendar,
  Clock,
  CheckSquare
} from 'lucide-react';

export default function Education() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning Analytics",
      description: "Advanced analytics to track student progress, identify learning gaps, and personalize educational experiences.",
      benefits: ["Student performance tracking", "Personalized learning paths", "Early intervention", "Progress analytics"]
    },
    {
      icon: Workflow,
      title: "Digital Learning Platforms",
      description: "Comprehensive digital learning environments that enhance engagement and improve learning outcomes.",
      benefits: ["Interactive content", "Multi-modal learning", "Real-time collaboration", "Accessibility features"]
    },
    {
      icon: Shield,
      title: "Educational Security & Privacy",
      description: "Robust security solutions to protect student data and ensure compliance with educational privacy regulations.",
      benefits: ["FERPA compliance", "Data encryption", "Access controls", "Privacy protection"]
    },
    {
      icon: Cloud,
      title: "Cloud-Based Education Infrastructure",
      description: "Scalable cloud solutions designed for educational institutions of all sizes.",
      benefits: ["Scalable infrastructure", "Cost optimization", "Remote access", "Disaster recovery"]
    }
  ];

  const solutions = [
    {
      category: "K-12 Education",
      services: [
        "Student Information Systems",
        "Learning Management Platforms",
        "Parent Communication Tools",
        "Assessment & Testing",
        "Special Education Support"
      ]
    },
    {
      category: "Higher Education",
      services: [
        "Campus Management Systems",
        "Online Learning Platforms",
        "Student Lifecycle Management",
        "Research & Analytics",
        "Alumni Engagement"
      ]
    },
    {
      category: "Corporate Training",
      services: [
        "Employee Learning Platforms",
        "Skills Assessment Tools",
        "Compliance Training",
        "Performance Tracking",
        "Certification Management"
      ]
    },
    {
      category: "Educational Technology",
      services: [
        "AI Tutoring Systems",
        "Virtual Reality Learning",
        "Mobile Learning Apps",
        "Data Analytics Platforms",
        "Integration Services"
      ]
    }
  ];

  const caseStudies = [
    {
      institution: "Public School District",
      challenge: "Limited access to technology and personalized learning tools",
      solution: "Comprehensive digital learning platform with AI-powered analytics and mobile access",
      results: "45% improvement in student engagement, 30% increase in test scores"
    },
    {
      institution: "University",
      challenge: "Complex student management and outdated administrative systems",
      solution: "Modern campus management system with integrated learning platforms",
      results: "50% reduction in administrative overhead, 40% improvement in student satisfaction"
    },
    {
      institution: "Corporate Training Center",
      challenge: "Inefficient training delivery and lack of progress tracking",
      solution: "AI-powered learning platform with skills assessment and certification tracking",
      results: "60% faster training completion, 35% improvement in knowledge retention"
    }
  ];

  const technologies = [
    {
      name: "AI & Machine Learning",
      description: "Intelligent tutoring and personalized learning experiences",
      icon: Brain
    },
    {
      name: "Virtual Reality",
      description: "Immersive learning environments and simulations",
      icon: Monitor
    },
    {
      name: "Mobile Learning",
      description: "Accessible learning on any device, anywhere",
      icon: Smartphone
    },
    {
      name: "Cloud Computing",
      description: "Scalable and secure educational infrastructure",
      icon: Cloud
    }
  ];

  const benefits = [
    {
      title: "Improved Learning Outcomes",
      description: "AI-powered personalization leads to better student performance and engagement",
      icon: TrendingUp
    },
    {
      title: "Cost Efficiency",
      description: "Reduce administrative overhead and optimize resource allocation",
      icon: DollarSign
    },
    {
      title: "Accessibility",
      description: "Ensure equal access to quality education for all students",
      icon: Users
    },
    {
      title: "Data-Driven Insights",
      description: "Make informed decisions based on comprehensive analytics",
      icon: BarChart3
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>Education Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform education with Zion Tech Group's AI-powered learning platforms, digital learning solutions, and comprehensive educational technology services." />
        <meta name="keywords" content="education solutions, digital learning, AI education, learning management systems, educational technology, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/solutions/education" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-blue/20 border border-zion-blue/30 text-zion-blue text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4 mr-2" />
              Education Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transforming Education with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-blue to-zion-cyan"> AI-Powered Technology</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Zion Tech Group delivers innovative education solutions that empower institutions to provide personalized, engaging, and effective learning experiences for students of all ages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-blue to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-cyan hover:to-zion-blue transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-zion-blue text-zion-blue font-semibold rounded-lg hover:bg-zion-blue hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Education Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              From K-12 to higher education and corporate training, we provide end-to-end educational technology solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-zion-blue/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-zion-blue/20 rounded-lg mr-4">
                    <feature.icon className="w-8 h-8 text-zion-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-zion-slate-light mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Education Solution Portfolio
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive solutions covering all aspects of modern education and learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-zion-cyan/20 rounded-lg mr-3">
                    <Target className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{solution.category}</h3>
                </div>
                <ul className="space-y-2">
                  {solution.services.map((service, idx) => (
                    <li key={idx} className="text-sm text-zion-slate-light flex items-center">
                      <ArrowRight className="w-4 h-4 text-zion-blue mr-2 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our education solutions deliver measurable improvements in learning outcomes and operational efficiency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-zion-blue/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-zion-blue/20 rounded-lg mr-4">
                    <benefit.icon className="w-8 h-8 text-zion-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{benefit.title}</h3>
                </div>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              We leverage the latest technologies to deliver innovative education solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
                <div className="p-3 bg-zion-purple/20 rounded-lg mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <tech.icon className="w-8 h-8 text-zion-purple" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-sm text-zion-slate-light">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Education Transformation Success Stories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              See how educational institutions are revolutionizing learning with Zion Tech Group solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-zion-blue/20 rounded-lg mr-3">
                    <Star className="w-6 h-6 text-zion-blue" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{study.institution}</div>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                  <p className="text-zion-slate-light text-sm">{study.challenge}</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Solution:</h4>
                  <p className="text-zion-slate-light text-sm">{study.solution}</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Results:</h4>
                  <p className="text-zion-cyan text-sm font-medium">{study.results}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-zion-blue/20 to-zion-cyan/20 border border-zion-blue/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Education?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's discuss how Zion Tech Group can help you create the future of learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-blue to-zion-cyan text-white font-semibold rounded-lg hover:from-zion-cyan hover:to-zion-blue transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-zion-blue text-zion-blue font-semibold rounded-lg hover:bg-zion-blue hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="p-3 bg-zion-cyan/20 rounded-lg mb-4">
                <Phone className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-zion-slate-light">+1 (302) 464-0950</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 bg-zion-blue/20 rounded-lg mb-4">
                <Mail className="w-8 h-8 text-zion-blue" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 bg-zion-purple/20 rounded-lg mb-4">
                <MapPin className="w-8 h-8 text-zion-purple" />
              </div>
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}