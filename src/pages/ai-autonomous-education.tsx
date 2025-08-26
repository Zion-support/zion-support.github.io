import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, GraduationCap, BookOpen, Users, Target, Database, Globe, Rocket, Eye, Clock, Cloud, Network, Lightbulb, Layers, Book, Shield, TrendingUp, PieChart, BarChart, LineChart, Zap, Cpu, Monitor } from 'lucide-react';

const AIAutonomousEducation: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Autonomous Education - Zion Tech Group</title>
        <meta name="description" content="Transform learning with our AI Autonomous Education platform. Personalized learning experiences, intelligent tutoring, and adaptive curriculum management." />
        <meta name="keywords" content="AI autonomous education, personalized learning, AI tutoring, adaptive learning, education automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-autonomous-education" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-orange-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4 mr-2" />
              AI-Powered Learning Platform
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Autonomous
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600"> Education</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Revolutionize education with intelligent learning systems that adapt to individual needs, provide personalized instruction, and create engaging educational experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                Start Learning Trial
              </button>
              <button className="px-8 py-4 border-2 border-amber-600 text-amber-600 font-semibold rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Education Overview */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Intelligent Learning Ecosystem
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI-powered education platform creates personalized learning experiences that adapt to each student's unique needs and learning style.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Personalized Learning Intelligence
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  AI systems that understand individual learning patterns, adapt curriculum in real-time, and provide targeted support for optimal educational outcomes.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="w-3 h-3 text-amber-600" />
                    </div>
                    <span className="text-gray-700">Adaptive curriculum that evolves with student progress</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="w-3 h-3 text-amber-600" />
                    </div>
                    <span className="text-gray-700">Intelligent tutoring with personalized feedback</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="w-3 h-3 text-amber-600" />
                    </div>
                    <span className="text-gray-700">Real-time assessment and progress tracking</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-4 rounded-lg text-center">
                    <Brain className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900">AI Tutor</h4>
                  </div>
                  <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-4 rounded-lg text-center">
                    <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900">Curriculum</h4>
                  </div>
                  <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-4 rounded-lg text-center">
                    <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900">Assessment</h4>
                  </div>
                  <div className="bg-gradient-to-br from-red-100 to-orange-100 p-4 rounded-lg text-center">
                    <Users className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900">Collaboration</h4>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Educational Capabilities
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive AI-powered tools that transform every aspect of the learning experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl border border-amber-200">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Intelligent Tutoring</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered tutoring systems that provide personalized instruction and support for each student.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Adaptive instruction</li>
                  <li>• Personalized feedback</li>
                  <li>• Learning path optimization</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Adaptive Curriculum</h3>
                <p className="text-gray-600 mb-4">
                  Dynamic curriculum that adjusts content, difficulty, and pace based on individual learning progress.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Content personalization</li>
                  <li>• Difficulty adjustment</li>
                  <li>• Learning pace optimization</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Assessment & Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive assessment tools with real-time analytics and progress tracking.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Real-time assessment</li>
                  <li>• Progress tracking</li>
                  <li>• Performance analytics</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border border-red-200">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Collaborative Learning</h3>
                <p className="text-gray-600 mb-4">
                  AI-enhanced collaboration tools that facilitate group learning and peer interaction.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Group projects</li>
                  <li>• Peer learning</li>
                  <li>• Discussion forums</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-xl border border-yellow-200">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <Monitor className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Content Management</h3>
                <p className="text-gray-600 mb-4">
                  Intelligent content creation, curation, and management systems for educational materials.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Content creation</li>
                  <li>• Material curation</li>
                  <li>• Resource optimization</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Learning Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Advanced analytics that provide insights into learning patterns and educational effectiveness.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Learning patterns</li>
                  <li>• Effectiveness metrics</li>
                  <li>• Predictive insights</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Domains */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Learning Domains & Subjects
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our platform supports a wide range of educational subjects and learning domains.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                  <Book className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">STEM Education</h3>
                <p className="text-gray-600 mb-4">
                  Science, Technology, Engineering, and Mathematics with interactive simulations and experiments.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Mathematics</li>
                  <li>• Physics & Chemistry</li>
                  <li>• Computer Science</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Language Learning</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered language acquisition with natural conversation and cultural context.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Multiple languages</li>
                  <li>• Cultural context</li>
                  <li>• Conversation practice</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Creative Arts</h3>
                <p className="text-gray-600 mb-4">
                  Creative expression and artistic development with AI-enhanced tools and guidance.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Visual arts</li>
                  <li>• Music composition</li>
                  <li>• Creative writing</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Social Sciences</h3>
                <p className="text-gray-600 mb-4">
                  History, geography, and social studies with interactive timelines and virtual experiences.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• History</li>
                  <li>• Geography</li>
                  <li>• Social studies</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Skills</h3>
                <p className="text-gray-600 mb-4">
                  Career development and professional skill building with industry-specific training.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Business skills</li>
                  <li>• Technical training</li>
                  <li>• Leadership development</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Special Education</h3>
                <p className="text-gray-600 mb-4">
                  Inclusive learning support for students with diverse learning needs and abilities.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Learning disabilities</li>
                  <li>• Accessibility features</li>
                  <li>• Personalized support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Process */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Autonomous Learning Process
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our AI systems guide students through personalized learning journeys with continuous adaptation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-amber-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Assess</h3>
                <p className="text-gray-600">
                  AI evaluates current knowledge and learning style
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Plan</h3>
                <p className="text-gray-600">
                  Personalized learning path and curriculum design
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Learn</h3>
                <p className="text-gray-600">
                  Adaptive content delivery and intelligent tutoring
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple-600">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Progress</h3>
                <p className="text-gray-600">
                  Continuous assessment and learning path optimization
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-amber-600 to-orange-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Education?
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Experience the future of learning with AI-powered personalized education and autonomous systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300">
                Start Learning Trial
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-amber-600 transition-all duration-300">
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