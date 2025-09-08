import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  GraduationCap, 
  Users, 
  BookOpen, 
  Target, 
  Zap, 
  Shield, 
  BarChart3,
  Clock,
  Globe,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Lightbulb,
  Code,
  Database,
  Cloud,
  Lock,
  MessageCircle,
  Video,
  FileText,
  Search,
  Settings,
  Palette,
  Monitor,
  Smartphone,
  Network,
  Activity,
  Eye,
  Cog,
  Rocket,
  DollarSign,
  Handshake,
  Calendar,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

export default function AIAutonomousEducationPlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>AI Autonomous Education Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered autonomous education platform that personalizes learning experiences, automates curriculum creation, and provides intelligent tutoring for students of all ages." />
        <meta name="keywords" content="AI education, autonomous learning, personalized education, AI tutoring, curriculum automation, educational technology, Zion Tech Group" />
        <meta property="og:title" content="AI Autonomous Education Platform - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI-powered autonomous education platform for personalized learning experiences." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services/ai-autonomous-education-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Education
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Education Platform</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Revolutionizing education with autonomous AI that personalizes learning, automates curriculum creation, 
              and provides intelligent tutoring for students of all ages and skill levels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">95%</div>
              <div className="text-zion-slate-light">Student Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">3x</div>
              <div className="text-zion-slate-light">Learning Speed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-zion-slate-light">Availability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">50+</div>
              <div className="text-zion-slate-light">Subjects Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Revolutionary Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our AI platform combines cutting-edge technology with proven educational methodologies 
              to create the most advanced learning experience available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Autonomous Learning Paths</h3>
              <p className="text-zion-slate-light">
                AI automatically creates personalized learning paths based on individual student performance, 
                learning style, and goals.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-12 h-12 bg-zion-purple/20 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Dynamic Curriculum Generation</h3>
              <p className="text-zion-slate-light">
                Real-time curriculum adaptation based on student progress, current events, and emerging topics.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Intelligent Tutoring</h3>
              <p className="text-zion-slate-light">
                AI tutors that adapt their teaching style, pace, and methodology to each student's needs.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-12 h-12 bg-zion-purple/20 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Advanced Analytics</h3>
              <p className="text-zion-slate-light">
                Comprehensive insights into learning patterns, progress tracking, and performance optimization.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Multi-Language Support</h3>
              <p className="text-zion-slate-light">
                Support for 50+ languages with real-time translation and cultural adaptation.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-12 h-12 bg-zion-purple/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Privacy & Security</h3>
              <p className="text-zion-slate-light">
                Enterprise-grade security with FERPA compliance and advanced data protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience unprecedented improvements in learning outcomes, engagement, and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-zion-cyan/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-zion-cyan" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Personalized Learning Experience</h3>
                    <p className="text-zion-slate-light">
                      Every student gets a unique learning path tailored to their strengths, weaknesses, and learning style.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-zion-cyan/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-zion-cyan" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">24/7 Availability</h3>
                    <p className="text-zion-slate-light">
                      Students can learn anytime, anywhere with round-the-clock access to AI tutors and resources.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-zion-cyan/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-zion-cyan" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Real-time Progress Tracking</h3>
                    <p className="text-zion-slate-light">
                      Instant feedback and progress monitoring help students and educators track improvement areas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-zion-cyan/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-zion-cyan" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Cost-Effective Education</h3>
                    <p className="text-zion-slate-light">
                      Reduce educational costs while improving outcomes through AI-powered automation and optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl p-8 border border-zion-cyan/30">
                <div className="text-center">
                  <div className="w-16 h-16 bg-zion-cyan/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Performance Metrics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-zion-slate-light">Learning Speed</span>
                      <span className="text-zion-cyan font-semibold">+300%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zion-slate-light">Retention Rate</span>
                      <span className="text-zion-cyan font-semibold">+85%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zion-slate-light">Engagement</span>
                      <span className="text-zion-cyan font-semibold">+200%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zion-slate-light">Cost Reduction</span>
                      <span className="text-zion-cyan font-semibold">-60%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the plan that best fits your educational institution's needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-8 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-zion-cyan mb-2">$99</div>
                <div className="text-zion-slate-light">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                  Up to 100 students
                </li>
                <li className="flex items-center text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                  Basic AI tutoring
                </li>
                <li className="flex items-center text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                  20 subjects
                </li>
                <li className="flex items-center text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                  Basic analytics
                </li>
              </ul>
              <button className="w-full py-3 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-cyan/90 transition-colors">
                Get Started
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-zion-blue-dark border-2 border-zion-cyan rounded-xl p-8 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-zion-cyan mb-2">$299</div>
                <div className="text-zion-slate-light">per month</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                  Up to 1,000 students
                </li>
                <li className="flex items-center text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                  Advanced AI tutoring
                </li>
                <li className="flex items-center text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                  All 50+ subjects
                </li>
                <li className="flex items-center text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                  Advanced analytics
                </li>
                <li className="flex items-center text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                  Custom curriculum
                </li>
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-8 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-zion-cyan mb-2">Custom</div>
                <div className="text-zion-slate-light">contact us</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                  Unlimited students
                </li>
                <li className="flex items-center text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                  Custom AI models
                </li>
                <li className="flex items-center text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                  White-label solution
                </li>
                <li className="flex items-center text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                  Dedicated support
                </li>
                <li className="flex items-center text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                  API access
                </li>
              </ul>
              <button className="w-full py-3 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-colors">
                Contact Sales
              </button>
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
          <p className="text-xl text-zion-slate-light mb-8">
            Join thousands of educational institutions already using our AI platform to revolutionize learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Have questions about our AI Education Platform? Our team is here to help.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-zion-cyan mb-4" />
              <div className="text-white font-semibold">Phone</div>
              <div className="text-zion-slate-light">+1 302 464 0950</div>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-zion-cyan mb-4" />
              <div className="text-white font-semibold">Email</div>
              <div className="text-zion-slate-light">kleber@ziontechgroup.com</div>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-zion-cyan mb-4" />
              <div className="text-white font-semibold">Address</div>
              <div className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</div>
            </div>
          </div>
          <button className="px-8 py-4 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-cyan/90 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}