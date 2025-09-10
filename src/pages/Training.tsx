import React from 'react';
import { BookOpen, Users, Award, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const Training = () => {
  const courses = [
    {
      title: "AI Fundamentals",
      description: "Learn the basics of artificial intelligence and machine learning",
      duration: "4 weeks",
      level: "Beginner",
      students: 150
    },
    {
      title: "Cloud Architecture",
      description: "Master cloud computing concepts and best practices",
      duration: "6 weeks",
      level: "Intermediate",
      students: 120
    },
    {
      title: "Cybersecurity Essentials",
      description: "Comprehensive security training for modern businesses",
      duration: "5 weeks",
      level: "Intermediate",
      students: 180
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Training - Zion Tech Group"
        description="Professional training courses on AI, cloud computing, and technology solutions."
        keywords={["training", "courses", "education", "learning", "certification"]}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Training & Education</h1>
          <p className="text-xl text-gray-300">
            Professional training courses to advance your technology skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-blue-400 mr-3" />
                <div>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {course.level}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>
              <p className="text-gray-300 mb-4">{course.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-400">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{course.students} students</span>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                Enroll Now
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-slate-800/50 rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Custom Training Programs</h2>
            <p className="text-gray-300 mb-6">
              We offer customized training programs tailored to your organization's specific needs.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              Request Custom Training
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;