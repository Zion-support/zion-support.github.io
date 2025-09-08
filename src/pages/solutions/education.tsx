import React from 'react';
import { SEO } from '../../components/SEO';
import { ArrowRight, GraduationCap, Shield, Users, Database, Globe, Lock, BarChart3, Cpu, Target, TrendingUp, Code, Zap, Activity, Brain, BookOpen } from 'lucide-react';

export default function EducationSolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Education Solutions - Zion Tech Group"
        description="Transform education with AI-powered learning solutions. Enhance student engagement, improve outcomes, and modernize educational institutions."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4 mr-2" />
              Educational Technology Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Education
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform education with AI-powered learning solutions. Enhance student engagement, 
              improve outcomes, and modernize educational institutions with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200">
                Education Inquiry
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Education-Focused Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Designed for learning effectiveness, student engagement, and institutional success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Adaptive Learning</h3>
              <p className="text-gray-400">
                AI-powered personalized learning paths for each student.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Content Creation</h3>
              <p className="text-gray-400">
                AI-generated educational content and materials.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Student Engagement</h3>
              <p className="text-gray-400">
                Interactive learning experiences and gamification.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-green-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Learning Analytics</h3>
              <p className="text-gray-400">
                Comprehensive student progress tracking and insights.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-orange-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Assessment Tools</h3>
              <p className="text-gray-400">
                AI-powered testing and evaluation systems.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-pink-500/50 transition-all duration-200">
              <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Virtual Classrooms</h3>
              <p className="text-gray-400">
                Immersive online learning environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Educational Service Areas
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions for modern educational institutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">K-12 Education</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Personalized Learning</h4>
                    <p className="text-gray-400">AI-driven adaptive curriculum and instruction</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Student Support</h4>
                    <p className="text-gray-400">Early intervention and learning assistance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Parent Engagement</h4>
                    <p className="text-gray-400">Family communication and involvement tools</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Higher Education</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Course Management</h4>
                    <p className="text-gray-400">Intelligent LMS and content delivery</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Research Support</h4>
                    <p className="text-gray-400">AI-powered research tools and analytics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Student Success</h4>
                    <p className="text-gray-400">Retention and graduation rate optimization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Educational Technology Stack
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built with the latest technologies for maximum learning impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI/ML</h3>
              <p className="text-gray-400 text-sm">
                Machine learning and natural language processing
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Cloud</h3>
              <p className="text-gray-400 text-sm">
                Scalable cloud infrastructure and storage
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Web3</h3>
              <p className="text-gray-400 text-sm">
                Blockchain and decentralized learning
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Analytics</h3>
              <p className="text-gray-400 text-sm">
                Learning analytics and insights
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Educational Transformation Benefits
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Measurable improvements in learning outcomes and institutional efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Improved Outcomes</h3>
              <p className="text-gray-400">
                40% increase in student achievement scores
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Engagement</h3>
              <p className="text-gray-400">
                75% improvement in student engagement
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Efficiency</h3>
              <p className="text-gray-400">
                50% reduction in administrative workload
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Education?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join leading educational institutions using AI to enhance learning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200">
              Education Inquiry
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white transition-all duration-200 text-lg">
              Schedule Education Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}