import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Brain, Target, BarChart3, Users, Database, Globe, Rocket, Eye, Clock, Cloud, Network, Zap, TrendingUp, PieChart, BarChart, LineChart, Gauge, Lightbulb, Check, GraduationCap, Award, Monitor, Code } from 'lucide-react';

const AIAutonomousEducation: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Autonomous Education - Zion Tech Group</title>
        <meta name="description" content="Revolutionize your learning experience with our AI Autonomous Education platform. Personalized learning paths, adaptive content, and intelligent tutoring systems." />
        <meta name="keywords" content="AI autonomous education, personalized learning, adaptive education, intelligent tutoring, autonomous learning platform" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-autonomous-education" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              AI-Powered Learning Automation
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Autonomous
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600"> Education</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your learning journey with intelligent, autonomous education systems that adapt to your needs and provide personalized learning experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
                Start Learning Trial
              </button>
              <button className="px-8 py-4 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-600 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Education Overview */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Intelligent Learning Automation
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our AI Autonomous Education platform combines advanced machine learning, adaptive content, and personalized learning paths to revolutionize education.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">Personalized learning paths and content</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">Adaptive assessment and feedback</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">Intelligent tutoring and support</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <Brain className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Smart Learning</h3>
                        <p className="text-sm text-gray-500">AI-powered content adaptation</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                        <Target className="w-6 h-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Personalized Paths</h3>
                        <p className="text-sm text-gray-500">Custom learning journeys</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Zap className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Instant Feedback</h3>
                        <p className="text-sm text-gray-500">Real-time learning insights</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Learning Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive educational tools that work together to provide autonomous learning experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Adaptive Learning</h3>
                <p className="text-gray-600 mb-6">
                  AI-powered content adaptation that adjusts difficulty and pace based on individual performance.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Dynamic difficulty adjustment</li>
                  <li>• Learning pace optimization</li>
                  <li>• Content personalization</li>
                  <li>• Progress tracking</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 border border-teal-200">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalized Paths</h3>
                <p className="text-gray-600 mb-6">
                  Custom learning journeys tailored to individual goals, preferences, and learning styles.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Goal-based learning</li>
                  <li>• Style adaptation</li>
                  <li>• Interest alignment</li>
                  <li>• Career pathways</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <Rocket className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Intelligent Tutoring</h3>
                <p className="text-gray-600 mb-6">
                  AI tutors that provide personalized guidance, explanations, and support throughout the learning process.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 24/7 availability</li>
                  <li>• Contextual explanations</li>
                  <li>• Problem-solving guidance</li>
                  <li>• Motivation support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Domains */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Learning Domains
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform covers a wide range of subjects and skills with specialized AI models for each domain.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                    <GraduationCap className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Academic Subjects</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Comprehensive coverage of traditional academic subjects from K-12 to higher education.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Mathematics & Sciences</li>
                  <li>• Languages & Literature</li>
                  <li>• History & Social Studies</li>
                  <li>• Arts & Humanities</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                    <Code className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Technical Skills</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Modern technical skills and programming languages for career advancement.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Programming & Development</li>
                  <li>• Data Science & Analytics</li>
                  <li>• Cloud & DevOps</li>
                  <li>• Cybersecurity</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Soft Skills</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Essential interpersonal and professional skills for workplace success.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Leadership & Management</li>
                  <li>• Communication Skills</li>
                  <li>• Problem Solving</li>
                  <li>• Team Collaboration</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Professional Certifications</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Industry-recognized certifications and professional development programs.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Industry certifications</li>
                  <li>• Professional development</li>
                  <li>• Continuing education</li>
                  <li>• Skill validation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Process */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Learning Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our streamlined learning process ensures effective knowledge acquisition and skill development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Assessment</h3>
                <p className="text-gray-600">AI evaluates current knowledge and identifies learning gaps.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Personalization</h3>
                <p className="text-gray-600">Custom learning path created based on assessment results.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Learning</h3>
                <p className="text-gray-600">Adaptive content delivery with continuous progress monitoring.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mastery</h3>
                <p className="text-gray-600">Skill validation and certification upon successful completion.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Learning?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of learners who have already transformed their education with AI automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-600 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAutonomousEducation;