import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  GraduationCap,
  Users,
  Video,
  FileText,
  Award,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
  Brain,
  Shield,
  Cloud,
  Workflow,
  Rocket,
  Target,
  Heart,
  TrendingUp,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  Code,
  Server,
  Wifi,
  Bot,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  BarChart3,
  Users2,
  Settings,
  Palette,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  Instagram,
} from 'lucide-react';

export default function Training() {
  const trainingPrograms = [
    {
      id: 'ai-fundamentals',
      title: 'AI & Machine Learning Fundamentals',
      level: 'Beginner to Intermediate',
      duration: '8 weeks',
      price: '$2,999',
      description: 'Master the basics of artificial intelligence and machine learning with hands-on projects.',
      topics: [
        'Introduction to AI and ML',
        'Python for Data Science',
        'Supervised Learning Algorithms',
        'Neural Networks Basics',
        'Model Evaluation & Deployment',
        'Real-world AI Applications'
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      featured: true,
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Essentials',
      level: 'Intermediate',
      duration: '6 weeks',
      price: '$2,499',
      description: 'Learn essential cybersecurity concepts and practical defense strategies.',
      topics: [
        'Threat Landscape Analysis',
        'Network Security Fundamentals',
        'Identity & Access Management',
        'Incident Response',
        'Security Tools & Technologies',
        'Compliance & Best Practices'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      featured: false,
    },
    {
      id: 'cloud-architecture',
      title: 'Cloud Architecture & DevOps',
      level: 'Intermediate to Advanced',
      duration: '10 weeks',
      price: '$3,499',
      description: 'Design and implement scalable cloud solutions with modern DevOps practices.',
      topics: [
        'Cloud Service Models (IaaS, PaaS, SaaS)',
        'AWS/Azure/GCP Fundamentals',
        'Containerization with Docker',
        'Kubernetes Orchestration',
        'CI/CD Pipeline Design',
        'Infrastructure as Code'
      ],
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      featured: false,
    },
    {
      id: 'data-analytics',
      title: 'Advanced Data Analytics',
      level: 'Intermediate to Advanced',
      duration: '8 weeks',
      price: '$2,999',
      description: 'Transform raw data into actionable insights with advanced analytics techniques.',
      topics: [
        'Data Wrangling & Cleaning',
        'Statistical Analysis',
        'Data Visualization',
        'Predictive Modeling',
        'Big Data Technologies',
        'Business Intelligence Tools'
      ],
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      featured: false,
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Basics',
      level: 'Advanced',
      duration: '12 weeks',
      price: '$4,999',
      description: 'Explore the fascinating world of quantum computing and quantum algorithms.',
      topics: [
        'Quantum Mechanics Fundamentals',
        'Qubits & Quantum Gates',
        'Quantum Algorithms',
        'Quantum Error Correction',
        'Quantum Machine Learning',
        'Future of Quantum Computing'
      ],
      icon: Atom,
      color: 'from-indigo-500 to-purple-500',
      featured: true,
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation Strategy',
      level: 'Management',
      duration: '6 weeks',
      price: '$3,999',
      description: 'Lead your organization through successful digital transformation initiatives.',
      topics: [
        'Digital Strategy Development',
        'Change Management',
        'Technology Assessment',
        'ROI Measurement',
        'Risk Management',
        'Implementation Planning'
      ],
      icon: Rocket,
      color: 'from-orange-500 to-red-500',
      featured: false,
    },
  ];

  const trainingFeatures = [
    {
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with real-world experience',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Hands-on Projects',
      description: 'Apply your knowledge through practical, real-world projects',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Flexible Learning',
      description: 'Study at your own pace with 24/7 access to course materials',
      icon: Clock,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Certification',
              description: 'Earn industry-recognized certificates upon completion',
        icon: Award,
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Community Support',
      description: 'Connect with peers and instructors in our learning community',
      icon: MessageSquare,
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Career Guidance',
      description: 'Get personalized career advice and job placement support',
      icon: Target,
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Data Scientist',
      company: 'TechCorp Inc.',
      content: 'The AI Fundamentals course completely transformed my understanding of machine learning. The hands-on projects were invaluable.',
      rating: 5,
      avatar: '/images/testimonials/sarah-johnson.jpg',
    },
    {
      name: 'Michael Chen',
      role: 'Security Engineer',
      company: 'SecureNet Solutions',
      content: 'The cybersecurity training was comprehensive and practical. I immediately applied what I learned to improve our security posture.',
      rating: 5,
      avatar: '/images/testimonials/michael-chen.jpg',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Cloud Architect',
      company: 'CloudScale Systems',
      content: 'Excellent cloud architecture course with real-world scenarios. The instructors were knowledgeable and supportive.',
      rating: 5,
      avatar: '/images/testimonials/emily-rodriguez.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Training
            </span>
            <br />
            Programs
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Enhance your team's skills with our comprehensive training programs designed by industry experts. 
            From AI fundamentals to advanced quantum computing, we have the courses you need to succeed.
>>>>>>> 555b9ffae2e68b00750b91675d62a559987674d9
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 hover:text-white hover:border-cyan-500 font-semibold rounded-lg transition-all duration-200"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      {/* Training Features */}
      <div className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Training?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive, practical, and industry-relevant training programs designed for success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Training Programs */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Available Training Programs</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose from our comprehensive range of technology training programs
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trainingPrograms.map((program) => (
              <div
                key={program.id}
                className={`bg-gray-800 rounded-xl p-8 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  program.featured ? 'border-cyan-500 bg-cyan-500/5' : 'border-gray-700 hover:border-cyan-500/50'
                }`}
              >
                {program.featured && (
                  <div className="inline-flex items-center px-3 py-1 bg-cyan-500 text-white text-xs font-medium rounded-full mb-4">
                    <Star className="w-3 h-3 mr-1" />
                    Featured Program
                  </div>
                )}
                
                <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-xl flex items-center justify-center mb-6`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                <p className="text-gray-300 mb-6">{program.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <span className="text-gray-400">Level:</span>
                    <span className="text-white ml-2">{program.level}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white ml-2">{program.duration}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Price:</span>
                    <span className="text-cyan-400 font-semibold ml-2">{program.price}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-300 mb-3">What You'll Learn:</h4>
                  <div className="space-y-2">
                    {program.topics.map((topic, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link
                  to={`/contact?training=${program.id}`}
                  className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200"
                >
                  Enroll Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Hear from professionals who have transformed their careers with our training programs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-xs">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Advance Your Career?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with our 
            comprehensive training programs. Start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold rounded-lg transition-all duration-200"
            >
              <Users className="w-5 h-5 mr-2" />
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
