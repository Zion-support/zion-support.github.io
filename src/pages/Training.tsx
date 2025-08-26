import React from 'react';
import { GraduationCap, Users, BookOpen, Video, Globe, Zap, Target, TrendingUp, Shield, Cpu, Database, Award } from 'lucide-react';

const Training: React.FC = () => {
  const trainingPrograms = [
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      description: "Comprehensive training in artificial intelligence and machine learning technologies",
      duration: "8 weeks",
      level: "Intermediate to Advanced",
      topics: ["Deep Learning", "Neural Networks", "Natural Language Processing", "Computer Vision"]
    },
    {
      icon: Database,
      title: "Data Science & Analytics",
      description: "Master data analysis, visualization, and statistical modeling techniques",
      duration: "6 weeks",
      level: "Beginner to Intermediate",
      topics: ["Data Analysis", "Statistical Modeling", "Data Visualization", "Predictive Analytics"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Learn modern cybersecurity practices and threat protection strategies",
      duration: "10 weeks",
      level: "Intermediate to Advanced",
      topics: ["Network Security", "Threat Detection", "Incident Response", "Compliance"]
    },
    {
      icon: Globe,
      title: "Cloud Computing",
      description: "Master cloud platforms and infrastructure management",
      duration: "7 weeks",
      level: "Beginner to Advanced",
      topics: ["AWS/Azure", "Containerization", "DevOps", "Serverless Architecture"]
    },
    {
      icon: Zap,
      title: "Blockchain & Web3",
      description: "Explore blockchain technology and decentralized applications",
      duration: "5 weeks",
      level: "Intermediate",
      topics: ["Smart Contracts", "DeFi", "NFTs", "Web3 Development"]
    },
    {
      icon: Target,
      title: "Quantum Computing",
      description: "Introduction to quantum computing principles and applications",
      duration: "4 weeks",
      level: "Advanced",
      topics: ["Quantum Mechanics", "Quantum Algorithms", "Quantum Programming", "Applications"]
    }
  ];

  const learningFormats = [
    {
      icon: Video,
      title: "Online Courses",
      description: "Self-paced online courses with video lectures and interactive content",
      features: ["24/7 access", "Progress tracking", "Interactive exercises", "Certificate completion"]
    },
    {
      icon: Users,
      title: "Live Workshops",
      description: "Interactive live sessions with expert instructors and real-time Q&A",
      features: ["Real-time interaction", "Expert guidance", "Hands-on practice", "Networking opportunities"]
    },
    {
      icon: BookOpen,
      title: "Hands-on Labs",
      description: "Practical exercises and real-world project implementations",
      features: ["Project-based learning", "Real-world scenarios", "Portfolio building", "Skill validation"]
    },
    {
      icon: Globe,
      title: "Corporate Training",
      description: "Customized training programs for enterprise teams and organizations",
      features: ["Tailored content", "Team collaboration", "On-site delivery", "Custom curriculum"]
    }
  ];

  const certifications = [
    {
      name: "AI & ML Specialist",
      description: "Advanced certification in artificial intelligence and machine learning",
      icon: Cpu
    },
    {
      name: "Cybersecurity Professional",
      description: "Professional certification in cybersecurity and threat protection",
      icon: Shield
    },
    {
      name: "Cloud Architect",
      description: "Expert-level certification in cloud infrastructure and architecture",
      icon: Globe
    },
    {
      name: "Data Scientist",
      description: "Comprehensive certification in data science and analytics",
      icon: Database
    }
  ];

  const benefits = [
    "Industry-recognized certifications and credentials",
    "Hands-on experience with real-world projects",
    "Expert instruction from industry professionals",
    "Flexible learning formats and schedules",
    "Career advancement and skill development",
    "Access to exclusive learning resources"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4 mr-2" />
              Training & Education
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Master the Future of
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Technology</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive training programs designed to equip you with the skills 
              and knowledge needed to excel in the rapidly evolving tech landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#programs"
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Programs
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section id="programs" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Training Programs
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Specialized training programs covering the latest technologies 
              and industry best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{program.title}</h3>
                <p className="text-gray-300 mb-4">{program.description}</p>
                <div className="mb-4">
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <span className="font-medium">Duration:</span>
                    <span className="ml-2 text-green-400">{program.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="font-medium">Level:</span>
                    <span className="ml-2 text-green-400">{program.level}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-green-400 font-semibold text-sm mb-2">Topics Covered:</h4>
                  <ul className="space-y-1">
                    {program.topics.map((topic, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-start">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={`/training/${program.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-green-400 hover:text-green-300 font-medium transition-colors duration-200"
                >
                  Learn More
                  <TrendingUp className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Formats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Learning Formats
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible learning options designed to fit your schedule and learning preferences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningFormats.map((format, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <format.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{format.title}</h3>
                <p className="text-gray-300 mb-4">{format.description}</p>
                <ul className="space-y-1">
                  {format.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-start">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Certifications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Earn recognized certifications that validate your skills and 
              enhance your professional credibility.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-300">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Training?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Our training programs are designed to provide practical, 
                industry-relevant skills that directly translate to career success.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-8 border border-green-500/30">
              <div className="text-center">
                <Award className="w-24 h-24 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Proven Results</h3>
                <p className="text-gray-300 mb-6">
                  Our graduates have successfully advanced their careers and 
                  contributed to innovative projects worldwide.
                </p>
                <div className="text-sm text-gray-400">
                  <p>• 95% career advancement rate</p>
                  <p>• Industry-recognized certifications</p>
                  <p>• Global alumni network</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Advance Your Career?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our training programs and gain the skills needed to succeed 
            in the rapidly evolving technology landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Enroll Now
            </a>
            <a
              href="/training"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              View All Programs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;