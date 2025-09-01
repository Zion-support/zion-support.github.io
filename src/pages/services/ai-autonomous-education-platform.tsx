import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  GraduationCap, 
  Brain, 
  BookOpen, 
  Users, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  Zap,
  Shield,
  Globe,
  Monitor,
  Smartphone,
  Server,
  Cloud,
  Database,
  Workflow,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  BarChart3,
  Clock,
  DollarSign,
  Star,
  Award,
  Lock,
  Network,
  Cpu,
  Activity,
  Lightbulb,
  Code,
  Palette,
  Video,
  Headphones,
  BookMarked,
  Microscope,
  Flask,
  TestTube,
  Beaker,
  Dna,
  Pill,
  Stethoscope,
  Car,
  Plane,
  Ship,
  Train,
  Building,
  Factory,
  Warehouse,
  Store,
  Bank,
  CreditCard,
  PiggyBank,
  ChartLine,
  PieChart,
  TrendingDown,
  AlertTriangle,
  UserCheck,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserHeart,
  UserStar,
  UserCheckCircle
} from 'lucide-react';

export default function AIAutonomousEducationPlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>AI Autonomous Education Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered education platform that provides personalized learning experiences, adaptive curriculum, and autonomous educational content creation." />
        <meta name="keywords" content="AI education platform, autonomous learning, personalized education, adaptive curriculum, AI tutoring, educational technology, EdTech solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-autonomous-education-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl">
                <GraduationCap className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous Education Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform education with AI-powered personalized learning, adaptive curriculum, and autonomous content creation that adapts to every student's unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#pricing" 
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                View Pricing
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Educational Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform revolutionizes education by providing personalized learning experiences that adapt to each student's unique learning style and pace.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300">
              <div className="p-3 bg-green-500/20 rounded-lg w-fit mb-4">
                <Brain className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Personalized Learning Paths</h3>
              <p className="text-gray-300">
                AI algorithms create customized learning journeys based on individual student performance, preferences, and learning styles.
              </p>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300">
              <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4">
                <BookOpen className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Adaptive Curriculum</h3>
              <p className="text-gray-300">
                Dynamic curriculum that automatically adjusts difficulty, content, and pace based on real-time student performance analysis.
              </p>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300">
              <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-4">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Tutoring System</h3>
              <p className="text-gray-300">
                Intelligent tutoring that provides instant feedback, explanations, and guidance tailored to each student's needs.
              </p>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300">
              <div className="p-3 bg-orange-500/20 rounded-lg w-fit mb-4">
                <Video className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Content Creation</h3>
              <p className="text-gray-300">
                AI autonomously generates educational content, quizzes, and assessments aligned with curriculum standards.
              </p>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300">
              <div className="p-3 bg-red-500/20 rounded-lg w-fit mb-4">
                <BarChart3 className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Progress Analytics</h3>
              <p className="text-gray-300">
                Comprehensive analytics dashboard providing insights into student progress, learning patterns, and areas for improvement.
              </p>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300">
              <div className="p-3 bg-cyan-500/20 rounded-lg w-fit mb-4">
                <Globe className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Multi-Language Support</h3>
              <p className="text-gray-300">
                Global accessibility with support for multiple languages and cultural adaptations for diverse student populations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Education Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your educational institution with cutting-edge AI technology that delivers personalized learning experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">40% Improvement in Learning Outcomes</h3>
                    <p className="text-gray-300">Students using our platform show significant improvement in retention and comprehension.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Personalized Learning Experience</h3>
                    <p className="text-gray-300">Every student receives a customized learning path that adapts to their unique needs.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">24/7 Learning Availability</h3>
                    <p className="text-gray-300">Students can learn anytime, anywhere with our cloud-based platform.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-orange-500/20 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Reduced Administrative Burden</h3>
                    <p className="text-gray-300">Automate grading, content creation, and progress tracking to focus on teaching.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-blue-600/20 p-8 rounded-2xl border border-green-500/30">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Platform Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">1M+</div>
                  <div className="text-gray-300">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                  <div className="text-gray-300">Institutions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
                  <div className="text-gray-300">Learning Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">95%</div>
                  <div className="text-gray-300">Student Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your educational institution's needs and scale as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-green-400 mb-2">$199</div>
                <div className="text-gray-400">per month</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Up to 100 students</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Basic AI tutoring</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Standard curriculum</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Email support</span>
                </li>
              </ul>

              <button className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors">
                Get Started
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-gradient-to-br from-green-500/20 to-blue-600/20 p-8 rounded-xl border-2 border-green-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-green-400 mb-2">$599</div>
                <div className="text-gray-400">per month</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Up to 1,000 students</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Advanced AI tutoring</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Adaptive curriculum</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Content creation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Priority support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">API access</span>
                </li>
              </ul>

              <button className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-green-400 mb-2">Custom</div>
                <div className="text-gray-400">contact us</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Unlimited students</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Full platform access</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Custom integrations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Dedicated support team</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">On-premise deployment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Custom training</span>
                </li>
              </ul>

              <button className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ideal for Various Educational Institutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From K-12 schools to universities and corporate training programs, our platform adapts to your educational needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-green-500/20 rounded-lg w-fit mb-4">
                <GraduationCap className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">K-12 Education</h3>
              <p className="text-gray-300">
                Personalized learning experiences for elementary, middle, and high school students with adaptive curriculum.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4">
                <BookOpen className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Higher Education</h3>
              <p className="text-gray-300">
                Advanced AI tutoring and content creation for universities and colleges across all academic disciplines.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-4">
                <Building className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Corporate Training</h3>
              <p className="text-gray-300">
                Employee skill development and professional training programs with AI-powered learning paths.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-orange-500/20 rounded-lg w-fit mb-4">
                <Users className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Online Learning</h3>
              <p className="text-gray-300">
                Virtual classrooms and distance learning programs with intelligent content delivery and assessment.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-red-500/20 rounded-lg w-fit mb-4">
                <Microscope className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">STEM Education</h3>
              <p className="text-gray-300">
                Specialized AI tutoring for science, technology, engineering, and mathematics subjects.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-cyan-500/20 rounded-lg w-fit mb-4">
                <Globe className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Language Learning</h3>
              <p className="text-gray-300">
                AI-powered language acquisition with cultural context and personalized pronunciation training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Educational Institution?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Schedule a demo today and discover how AI can revolutionize your teaching and learning processes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-gray-300">+1 302 464 0950</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-300">kleber@ziontechgroup.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Address</div>
                    <div className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-6">Request Demo</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Institution</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                    placeholder="Enter your institution name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                    placeholder="Tell us about your educational needs"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300"
                >
                  Request Demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your AI-Powered Education Journey Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of educational institutions that have already transformed their teaching and learning with our AI platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Now
            </a>
            <a 
              href="https://ziontechgroup.com" 
              className="px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}