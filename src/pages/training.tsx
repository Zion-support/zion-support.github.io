import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Users, 
  Clock, 
  Star,
  ArrowRight,
  Search,
  Play,
  BookOpen,
  Award
} from 'lucide-react';

const Training = () => {
  const courses = [
    {
      id: 1,
      title: "AI Fundamentals for Business Leaders",
      description: "Essential AI concepts and strategies for business decision-makers",
      duration: "8 weeks",
      level: "Beginner",
      instructor: "Dr. Sarah Chen",
      rating: 4.8,
      students: "1,200+",
      price: "$1,299",
      category: "AI & Machine Learning"
    },
    {
      id: 2,
      title: "Advanced Machine Learning Engineering",
      description: "Deep dive into ML algorithms, model deployment, and production systems",
      duration: "12 weeks",
      level: "Advanced",
      instructor: "Prof. Michael Rodriguez",
      rating: 4.9,
      students: "850+",
      price: "$2,499",
      category: "AI & Machine Learning"
    },
    {
      id: 3,
      title: "Cloud Architecture & DevOps",
      description: "Design scalable cloud solutions and implement DevOps practices",
      duration: "10 weeks",
      level: "Intermediate",
      instructor: "Alex Thompson",
      rating: 4.7,
      students: "950+",
      price: "$1,899",
      category: "Cloud & DevOps"
    },
    {
      id: 4,
      title: "Cybersecurity for Developers",
      description: "Secure coding practices and threat mitigation strategies",
      duration: "6 weeks",
      level: "Intermediate",
      instructor: "Lisa Wang",
      rating: 4.8,
      students: "1,100+",
      price: "$1,599",
      category: "Cybersecurity"
    }
  ];

  const categories = [
    "All Courses",
    "AI & Machine Learning",
    "Cloud & DevOps",
    "Cybersecurity",
    "Data Analytics",
    "Digital Transformation",
    "Quantum Computing"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-full">
                <GraduationCap className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Professional
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Training Programs
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advance your career with industry-leading training programs designed 
              by Zion Tech Group's technology experts and practitioners.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  category === "All Courses"
                    ? "bg-gradient-to-r from-green-500 to-blue-600 text-white"
                    : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover our most popular and highly-rated training programs 
              designed to accelerate your professional growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-green-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Course Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-green-900/50 to-blue-900/50 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <GraduationCap className="w-12 h-12 mx-auto mb-2" />
                    <span className="text-sm">Course Image</span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  {/* Category and Level */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                      {course.category}
                    </span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                      {course.level}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Course Details */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-4 h-4 mr-2 text-green-400" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Users className="w-4 h-4 mr-2 text-green-400" />
                      {course.students}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Star className="w-4 h-4 mr-2 text-green-400" />
                      {course.rating} Rating
                    </div>
                    <div className="flex items-center text-gray-300">
                      <BookOpen className="w-4 h-4 mr-2 text-green-400" />
                      {course.instructor}
                    </div>
                  </div>

                  {/* Price and Enroll */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-400">
                      {course.price}
                    </span>
                    <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Courses Button */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1">
              View All Courses
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Training Benefits */}
      <section className="py-20 bg-slate-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Training?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover the advantages of learning with Zion Tech Group's 
              professional training programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full w-fit mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Expert Instructors</h3>
              <p className="text-gray-400">
                Learn from industry experts and practitioners with real-world experience 
                in cutting-edge technologies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full w-fit mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Industry Recognition</h3>
              <p className="text-gray-400">
                Earn certificates that are recognized by leading companies 
                and enhance your professional credibility.
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full w-fit mx-auto mb-6">
                <Play className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Hands-on Learning</h3>
              <p className="text-gray-400">
                Apply your knowledge through practical projects and real-world 
                scenarios that build your portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Advance Your Career?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of professionals who have transformed their careers 
            with Zion Tech Group's training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <button className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 transition-colors">
              <BookOpen className="mr-2 w-5 h-5" />
              Course Catalog
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;