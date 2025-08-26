import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, Play, BookOpen, Certificate, TrendingUp, Target } from 'lucide-react';

export default function Training() {
  const trainingPrograms = [
    {
      id: 1,
      title: "AI Fundamentals & Machine Learning",
      description: "Comprehensive introduction to artificial intelligence and machine learning concepts, algorithms, and practical applications.",
      duration: "8 weeks",
      level: "Beginner to Intermediate",
      instructor: "Dr. Sarah Chen",
      rating: 4.8,
      students: 1247,
      price: "$1,299",
      category: "AI & Machine Learning",
      features: [
        "Hands-on projects with real datasets",
        "Industry case studies",
        "Certificate of completion",
        "Lifetime access to materials",
        "Community forum access"
      ],
      curriculum: [
        "Introduction to AI and ML",
        "Python for Data Science",
        "Supervised Learning Algorithms",
        "Unsupervised Learning",
        "Neural Networks & Deep Learning",
        "Model Deployment & MLOps",
        "AI Ethics & Responsible AI",
        "Capstone Project"
      ]
    },
    {
      id: 2,
      title: "Cybersecurity Professional Certification",
      description: "Advanced cybersecurity training covering threat detection, incident response, and security architecture.",
      duration: "12 weeks",
      level: "Intermediate to Advanced",
      instructor: "Michael Rodriguez",
      rating: 4.9,
      students: 892,
      price: "$1,599",
      category: "Cybersecurity",
      features: [
        "Hands-on labs and simulations",
        "Industry-recognized certification",
        "Real-world threat scenarios",
        "Career guidance and support",
        "Networking opportunities"
      ],
      curriculum: [
        "Network Security Fundamentals",
        "Threat Intelligence & Analysis",
        "Incident Response & Forensics",
        "Security Architecture Design",
        "Cloud Security",
        "Compliance & Governance",
        "Penetration Testing",
        "Security Operations Center"
      ]
    },
    {
      id: 3,
      title: "Green IT & Sustainable Technology",
      description: "Learn to implement environmentally conscious IT practices and reduce carbon footprint in enterprise environments.",
      duration: "6 weeks",
      level: "All Levels",
      instructor: "Alex Thompson",
      rating: 4.7,
      students: 567,
      price: "$899",
      category: "Green IT",
      features: [
        "Sustainability assessment tools",
        "Energy efficiency strategies",
        "Green certification prep",
        "Industry best practices",
        "Environmental impact metrics"
      ],
      curriculum: [
        "Green IT Principles",
        "Energy-Efficient Computing",
        "Sustainable Data Centers",
        "E-Waste Management",
        "Green Software Development",
        "Sustainability Reporting",
        "Regulatory Compliance",
        "Implementation Strategies"
      ]
    },
    {
      id: 4,
      title: "Micro SaaS Development Masterclass",
      description: "Complete guide to building, launching, and scaling micro SaaS applications with modern technologies.",
      duration: "10 weeks",
      level: "Intermediate",
      instructor: "Lisa Park",
      rating: 4.8,
      students: 734,
      price: "$1,199",
      category: "Micro SaaS",
      features: [
        "Full-stack development skills",
        "Business model development",
        "Launch strategy planning",
        "Growth hacking techniques",
        "Monetization strategies"
      ],
      curriculum: [
        "SaaS Business Models",
        "Modern Tech Stack Selection",
        "User Experience Design",
        "Backend Development",
        "Frontend Development",
        "Database Design",
        "Payment Integration",
        "Marketing & Growth"
      ]
    }
  ];

  const categories = ["All", "AI & Machine Learning", "Cybersecurity", "Green IT", "Micro SaaS", "Cloud Computing", "Data Science"];

  return (
    <>
      <SEO 
        title="Training Programs - Zion Tech Group Professional Development" 
        description="Professional training programs and certifications in AI, cybersecurity, green IT, and emerging technologies. Advance your career with expert-led courses." 
        canonical="/training" 
        url="https://ziontechgroup.com/training"
      />

      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional Training Programs
            </h1>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Advance your career with our comprehensive training programs led by industry experts. 
              Gain practical skills and earn recognized certifications in cutting-edge technologies.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">4.8</div>
              <div className="text-zion-slate-light text-sm">Average Rating</div>
            </div>
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">3,440+</div>
              <div className="text-zion-slate-light text-sm">Students Trained</div>
            </div>
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">15+</div>
              <div className="text-zion-slate-light text-sm">Expert Instructors</div>
            </div>
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">95%</div>
              <div className="text-zion-slate-light text-sm">Success Rate</div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white hover:border-zion-cyan transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Training Programs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {trainingPrograms.map((program) => (
              <div key={program.id} className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-8 hover:border-zion-cyan transition-all duration-300">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full mb-4">
                    {program.category}
                  </span>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {program.title}
                  </h3>
                  <p className="text-zion-slate-light mb-6">
                    {program.description}
                  </p>
                </div>

                {/* Program Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                    <Target className="w-4 h-4" />
                    <span>{program.level}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                    <Users className="w-4 h-4" />
                    <span>{program.instructor}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>{program.rating} ({program.students})</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">What You'll Get:</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-zion-slate-light text-sm">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Curriculum Preview */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Curriculum:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {program.curriculum.slice(0, 6).map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-zion-slate-light text-sm">
                        <BookOpen className="w-3 h-3 text-zion-cyan" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                  {program.curriculum.length > 6 && (
                    <p className="text-zion-slate-light text-sm mt-2">
                      +{program.curriculum.length - 6} more modules
                    </p>
                  )}
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-zion-cyan">
                    {program.price}
                  </div>
                  <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-6 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Ready to Advance Your Career?
              </h2>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                Join thousands of professionals who have transformed their careers with our training programs. 
                Get personalized guidance and support throughout your learning journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium">
                  Schedule Consultation
                </Link>
                <button className="px-8 py-3 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
