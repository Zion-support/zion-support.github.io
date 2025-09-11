import React from 'react';
:src/pages/About.tsx
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Heart, 
  Lightbulb,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
export function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a leading technology company dedicated to transforming businesses 
              through innovative AI solutions, quantum computing, and cutting-edge 
              digital transformation services.
            </p>
          </div>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6">
                To democratize access to cutting-edge technology and empower businesses 
                of all sizes to achieve their full potential through innovative AI solutions, 
                quantum computing, and digital transformation.
              </p>
              <p className="text-lg text-gray-300">
                We believe technology should be accessible, understandable, and transformative, 
                enabling our clients to stay ahead in an ever-evolving digital landscape.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-gray-300 mb-6">
                To be the global leader in AI and quantum computing solutions, creating 
                a world where technology seamlessly integrates with human potential to 
                solve the world's most complex challenges.
              </p>
              <p className="text-lg text-gray-300">
                We envision a future where every business can leverage the power of 
                artificial intelligence and quantum computing to drive innovation, 
                efficiency, and growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Values */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-300">
                We constantly push the boundaries of what's possible, 
                exploring new technologies and methodologies to deliver 
                cutting-edge solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p className="text-gray-300">
                We conduct business with the highest ethical standards, 
                ensuring transparency, honesty, and accountability in 
                all our interactions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
              <p className="text-gray-300">
                We believe in the power of teamwork and partnership, 
                working closely with our clients to achieve shared 
                success and mutual growth.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-300">
                We strive for excellence in everything we do, 
                delivering high-quality solutions that exceed 
                expectations and drive measurable results.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p className="text-gray-300">
                We are committed to sustainable practices and 
                responsible technology development that benefits 
                both businesses and the environment.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Reliability</h3>
              <p className="text-gray-300">
                We provide dependable, scalable solutions that 
                our clients can trust to support their critical 
                business operations.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the brilliant minds behind our innovative solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">AI Engineers</h3>
              <p className="text-gray-300 text-center">
                Expert machine learning engineers and data scientists 
                with deep expertise in AI technologies.
              </p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Quantum Scientists</h3>
              <p className="text-gray-300 text-center">
                Leading researchers in quantum computing and quantum 
                algorithms development.
              </p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Solution Architects</h3>
              <p className="text-gray-300 text-center">
                Strategic thinkers who design comprehensive technology 
                solutions for complex business challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our team can help transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              Get In Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="/careers"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Join Our Team
            </a>
          </div>
        </div>
      </section>
export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Zion Tech Group</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          Zion Tech Group is a leading technology solutions provider specializing in AI, 
          cybersecurity, cloud infrastructure, and digital transformation services.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          To empower businesses with cutting-edge technology solutions that drive innovation, 
          efficiency, and growth. We combine technical expertise with business acumen to deliver 
          solutions that create real value.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
        <p className="text-gray-600 mb-6">
          To be the premier technology partner for organizations seeking to transform their 
          digital infrastructure and leverage the power of artificial intelligence and cloud computing.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
          <li>Innovation and continuous learning</li>
          <li>Client success and satisfaction</li>
          <li>Integrity and transparency</li>
          <li>Collaboration and teamwork</li>
          <li>Excellence in delivery</li>
        </ul>
      </div>
    </div>
  );
}