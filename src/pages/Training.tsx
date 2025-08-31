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
  CheckSquare,
  DollarSign,
  PieChart,
  LineChart,
  BarChart,
  Target as TargetIcon,
  Eye,
  FileText,
  Image,
  Camera,
  Navigation,
  Compass,
  Globe as GlobeIcon,
  Lock as LockIcon,
  Shield as ShieldIcon,
  CheckCircle as CheckCircleIcon,
  XCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  Settings as SettingsIcon,
  Cog as CogIcon,
  Wrench as WrenchIcon,
  Tool,
  Hammer,
  Paintbrush,
  Ruler,
  Calculator,
  Percent,
  Plus,
  Minus,
  Divide,
  Equal,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Mic,
  Headphones as HeadphonesIcon,
  Speaker,
  Monitor as MonitorIcon,
  Smartphone as SmartphoneIcon,
  Tablet as TabletIcon,
  Laptop as LaptopIcon,
  Wifi as WifiIcon,
  MessageCircle as MessageCircleIcon,
  PhoneCall,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  Navigation as NavigationIcon,
  Compass as CompassIcon,
  Globe as GlobeIcon2,
  Lock as LockIcon2,
  Shield as ShieldIcon2,
  CheckCircle as CheckCircleIcon2,
  XCircle as XCircleIcon,
  AlertTriangle as AlertTriangleIcon,
  Info as InfoIcon,
  HelpCircle as HelpCircleIcon,
  Settings as SettingsIcon2,
  Cog as CogIcon2,
  Wrench as WrenchIcon2,
  Tool as ToolIcon,
  Hammer as HammerIcon,
  Paintbrush as PaintbrushIcon,
  Ruler as RulerIcon,
  Calculator as CalculatorIcon,
  Percent as PercentIcon,
  Plus as PlusIcon,
  Minus as MinusIcon,
  Divide as DivideIcon,
  Equal as EqualIcon
} from 'lucide-react';

export default function Training() {
  const trainingPrograms = [
    {
      category: "AI & Machine Learning",
      programs: [
        {
          title: "AI Fundamentals",
          duration: "8 weeks",
          level: "Beginner",
          description: "Learn the basics of artificial intelligence and machine learning",
          topics: ["Machine Learning Basics", "Neural Networks", "Data Preprocessing", "Model Training"]
        },
        {
          title: "Advanced AI Development",
          duration: "12 weeks",
          level: "Advanced",
          description: "Master advanced AI techniques and implementation",
          topics: ["Deep Learning", "Natural Language Processing", "Computer Vision", "AI Ethics"]
        }
      ]
    },
    {
      category: "Cybersecurity",
      programs: [
        {
          title: "Cybersecurity Fundamentals",
          duration: "6 weeks",
          level: "Beginner",
          description: "Essential cybersecurity concepts and best practices",
          topics: ["Security Principles", "Threat Detection", "Incident Response", "Security Tools"]
        },
        {
          title: "Advanced Security Operations",
          duration: "10 weeks",
          level: "Intermediate",
          description: "Advanced security operations and threat hunting",
          topics: ["Penetration Testing", "Security Architecture", "Compliance", "Risk Management"]
        }
      ]
    },
    {
      category: "Cloud & DevOps",
      programs: [
        {
          title: "Cloud Computing Basics",
          duration: "6 weeks",
          level: "Beginner",
          description: "Introduction to cloud computing and services",
          topics: ["Cloud Models", "AWS/Azure Basics", "Containerization", "Microservices"]
        },
        {
          title: "DevOps Engineering",
          duration: "10 weeks",
          level: "Intermediate",
          description: "Master DevOps practices and tools",
          topics: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring", "Automation"]
        }
      ]
    },
    {
      category: "Data & Analytics",
      programs: [
        {
          title: "Data Science Fundamentals",
          duration: "8 weeks",
          level: "Beginner",
          description: "Learn data science and analytics fundamentals",
          topics: ["Data Analysis", "Statistical Methods", "Data Visualization", "SQL Basics"]
        },
        {
          title: "Advanced Analytics",
          duration: "12 weeks",
          level: "Advanced",
          description: "Advanced analytics and business intelligence",
          topics: ["Predictive Analytics", "Big Data", "Data Engineering", "MLOps"]
        }
      ]
    }
  ];

  const deliveryMethods = [
    {
      icon: Video,
      title: "Online Learning",
      description: "Flexible online courses with interactive content and real-time support",
      features: ["24/7 access", "Interactive modules", "Progress tracking", "Expert support"]
    },
    {
      icon: Users,
      title: "Instructor-Led Training",
      description: "Live training sessions with industry experts and hands-on practice",
      features: ["Live sessions", "Hands-on labs", "Q&A sessions", "Networking opportunities"]
    },
    {
      icon: Laptop,
      title: "Hybrid Learning",
      description: "Combination of online and in-person training for optimal learning experience",
      features: ["Flexible scheduling", "Mixed delivery", "Practical application", "Continuous support"]
    },
    {
      icon: BookOpen,
      title: "Self-Paced Learning",
      description: "Learn at your own pace with comprehensive study materials",
      features: ["Self-directed", "Rich resources", "Practice exercises", "Assessment tools"]
    }
  ];

  const certifications = [
    {
      name: "AI & ML Professional",
      description: "Comprehensive certification in artificial intelligence and machine learning",
      duration: "6 months",
      level: "Professional",
      benefits: ["Industry recognition", "Career advancement", "Skill validation", "Networking"]
    },
    {
      name: "Cybersecurity Specialist",
      description: "Advanced cybersecurity certification with practical hands-on experience",
      duration: "4 months",
      level: "Specialist",
      benefits: ["Security expertise", "Compliance knowledge", "Threat mitigation", "Risk assessment"]
    },
    {
      name: "Cloud Architect",
      description: "Expert-level cloud architecture and design certification",
      duration: "8 months",
      level: "Expert",
      benefits: ["Architecture skills", "Multi-cloud expertise", "Cost optimization", "Security design"]
    },
    {
      name: "Data Scientist",
      description: "Comprehensive data science and analytics certification",
      duration: "7 months",
      level: "Professional",
      benefits: ["Analytics skills", "ML expertise", "Business insights", "Data storytelling"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Data Scientist",
      company: "Tech Corp",
      testimonial: "The AI training program completely transformed my career. The hands-on projects and expert guidance were invaluable.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Security Engineer",
      company: "SecureNet",
      testimonial: "The cybersecurity certification provided practical skills that I use daily. Highly recommend for security professionals.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Cloud Engineer",
      company: "CloudTech",
      testimonial: "Excellent cloud training with real-world scenarios. The instructors are industry experts who know their stuff.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>Training Programs - Zion Tech Group</title>
        <meta name="description" content="Transform your career with Zion Tech Group's comprehensive training programs in AI, cybersecurity, cloud computing, and data science." />
        <meta name="keywords" content="training programs, AI training, cybersecurity training, cloud training, data science training, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/training" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-blue/20 border border-zion-blue/30 text-zion-blue text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4 mr-2" />
              Training Programs
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Career with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-blue to-zion-cyan"> Expert Training</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Zion Tech Group offers comprehensive training programs designed to equip you with the skills needed for the future of technology.
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

      {/* Training Programs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Training Programs
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              From AI and machine learning to cybersecurity and cloud computing, we offer programs for every skill level.
            </p>
          </div>
          
          <div className="space-y-12">
            {trainingPrograms.map((category, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-zion-blue/20 rounded-lg mr-4">
                    <Target className="w-8 h-8 text-zion-blue" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">{category.category}</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {category.programs.map((program, idx) => (
                    <div key={idx} className="bg-slate-700/50 border border-slate-600 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-semibold text-white">{program.title}</h4>
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                            {program.level}
                          </span>
                          <span className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full">
                            {program.duration}
                          </span>
                        </div>
                      </div>
                      <p className="text-zion-slate-light mb-4">{program.description}</p>
                      <div>
                        <h5 className="text-white font-semibold mb-2">Key Topics:</h5>
                        <ul className="space-y-1">
                          {program.topics.map((topic, topicIdx) => (
                            <li key={topicIdx} className="text-sm text-zion-slate-light flex items-center">
                              <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Methods Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Learning Options
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the learning method that best fits your schedule and learning style.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryMethods.map((method, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
                <div className="p-3 bg-zion-blue/20 rounded-lg mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <method.icon className="w-8 h-8 text-zion-blue" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-zion-slate-light mb-4">{method.description}</p>
                <ul className="space-y-1 text-left">
                  {method.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-zion-slate-light flex items-center">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Recognized Certifications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Earn certifications that validate your skills and advance your career.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{cert.name}</h3>
                    <p className="text-zion-slate-light">{cert.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-sm rounded-full">
                      {cert.level}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center mb-6">
                  <Clock className="w-5 h-5 text-zion-cyan mr-2" />
                  <span className="text-zion-slate-light">{cert.duration}</span>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {cert.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-zion-slate-light flex items-center">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Hear from professionals who have transformed their careers with our training programs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-zion-blue/20 rounded-lg mr-3">
                    <Star className="w-6 h-6 text-zion-blue" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-zion-cyan text-sm">{testimonial.role}</div>
                    <div className="text-zion-slate-light text-sm">{testimonial.company}</div>
                  </div>
                </div>
                <p className="text-zion-slate-light mb-4 italic">"{testimonial.testimonial}"</p>
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-zion-blue/20 to-zion-cyan/20 border border-zion-blue/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's discuss how Zion Tech Group's training programs can help you achieve your career goals.
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
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
