import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Training: React.FC = () => {
  const trainingCategories = [
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      description: "Master artificial intelligence and machine learning technologies",
      courses: [
        { title: "AI Fundamentals", duration: "4 weeks", level: "Beginner", price: "$299" },
        { title: "Machine Learning with Python", duration: "6 weeks", level: "Intermediate", price: "$499" },
        { title: "Deep Learning & Neural Networks", duration: "8 weeks", level: "Advanced", price: "$799" },
        { title: "Natural Language Processing", duration: "6 weeks", level: "Intermediate", price: "$599" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      description: "Learn cloud computing and DevOps practices",
      courses: [
        { title: "AWS Fundamentals", duration: "4 weeks", level: "Beginner", price: "$399" },
        { title: "Docker & Kubernetes", duration: "5 weeks", level: "Intermediate", price: "$549" },
        { title: "CI/CD Pipeline Design", duration: "6 weeks", level: "Intermediate", price: "$649" },
        { title: "Multi-Cloud Strategy", duration: "8 weeks", level: "Advanced", price: "$899" }
      ]
    },
    {
      title: "Cybersecurity",
      icon: "🔒",
      description: "Develop expertise in cybersecurity and information protection",
      courses: [
        { title: "Cybersecurity Fundamentals", duration: "4 weeks", level: "Beginner", price: "$349" },
        { title: "Penetration Testing", duration: "6 weeks", level: "Intermediate", price: "$699" },
        { title: "Security Architecture", duration: "8 weeks", level: "Advanced", price: "$899" },
        { title: "Incident Response", duration: "5 weeks", level: "Intermediate", price: "$599" }
      ]
    },
    {
      title: "Digital Transformation",
      icon: "🔄",
      description: "Navigate organizational change and digital innovation",
      courses: [
        { title: "Digital Strategy", duration: "4 weeks", level: "Beginner", price: "$299" },
        { title: "Change Management", duration: "5 weeks", level: "Intermediate", price: "$449" },
        { title: "Innovation Leadership", duration: "6 weeks", level: "Advanced", price: "$699" },
        { title: "Agile Transformation", duration: "5 weeks", level: "Intermediate", price: "$549" }
      ]
    }
  ];

  const upcomingWorkshops = [
    {
      title: "AI in Business: Practical Applications",
      date: "December 15, 2024",
      time: "10:00 AM - 2:00 PM EST",
      instructor: "Dr. Sarah Chen",
      price: "$149",
      spots: "15 remaining"
    },
    {
      title: "Cloud Migration Workshop",
      date: "December 20, 2024",
      time: "1:00 PM - 5:00 PM EST",
      instructor: "Mike Rodriguez",
      price: "$199",
      spots: "8 remaining"
    },
    {
      title: "Cybersecurity Best Practices",
      date: "January 10, 2025",
      time: "9:00 AM - 1:00 PM EST",
      instructor: "Lisa Thompson",
      price: "$179",
      spots: "20 remaining"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "CTO, TechFlow Solutions",
      content: "The AI Fundamentals course completely transformed how we approach machine learning projects. The instructors are industry experts who provide practical, real-world insights.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "DevOps Engineer, CloudCorp",
      content: "The Docker & Kubernetes course gave me the skills I needed to modernize our deployment pipeline. Highly recommend for anyone looking to advance their DevOps career.",
      rating: 5
    },
    {
      name: "Amanda Foster",
      role: "Security Analyst, SecureNet",
      content: "The cybersecurity training was comprehensive and up-to-date with the latest threats and defense strategies. The hands-on labs were invaluable.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Training & Education - Zion Tech Group</title>
        <meta name="description" content="Professional training and certification programs in AI, cloud computing, cybersecurity, and digital transformation. Advance your career with expert-led courses." />
        <meta name="keywords" content="training, education, certification, AI, machine learning, cloud computing, cybersecurity, digital transformation, professional development" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advance Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Skills</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Professional training and certification programs designed by industry experts. 
              Master the latest technologies and accelerate your career growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#courses"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Browse Courses
              </Link>
              <Link
                to="#workshops"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View Workshops
              </Link>
            </div>
          </div>
        </section>

        {/* Training Categories */}
        <section id="courses" className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Training Programs
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {trainingCategories.map((category) => (
                <div key={category.title} className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{category.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                      <p className="text-gray-400 text-sm">{category.description}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {category.courses.map((course) => (
                      <div key={course.title} className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-semibold text-white">{course.title}</h4>
                          <span className="text-blue-400 font-bold">{course.price}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {course.duration}
                          </span>
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {course.level}
                          </span>
                        </div>
                        <button className="mt-3 w-full bg-blue-600/20 text-blue-400 py-2 rounded-lg hover:bg-blue-600/30 transition-colors text-sm">
                          Enroll Now
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Workshops */}
        <section id="workshops" className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Upcoming Workshops
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingWorkshops.map((workshop) => (
                <div key={workshop.title} className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="mb-4">
                    <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                      {workshop.spots}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{workshop.title}</h3>
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {workshop.date}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {workshop.time}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {workshop.instructor}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-400">{workshop.price}</span>
                    <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                      Register
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Training */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Choose Our Training?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Expert Instructors</h3>
                <p className="text-gray-400 text-sm">Learn from industry professionals with years of hands-on experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Hands-on Labs</h3>
                <p className="text-gray-400 text-sm">Practice with real-world scenarios and practical exercises</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Certification</h3>
                <p className="text-gray-400 text-sm">Earn industry-recognized certificates upon completion</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Lifetime Access</h3>
                <p className="text-gray-400 text-sm">Access course materials and updates indefinitely</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              What Our Students Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-2xl border border-white/10 p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Career?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of professionals who have advanced their careers with our training programs. 
                Start your journey today and unlock new opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Link>
                <a
                  href="mailto:training@ziontechgroup.com"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Contact Training Team
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Training;