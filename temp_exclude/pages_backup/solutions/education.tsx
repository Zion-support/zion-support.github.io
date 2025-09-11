
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Laptop, 
  Globe, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';

const features = [
  {
    icon: GraduationCap,
    title: 'Learning Management System',
    description: 'Comprehensive LMS with course management and student tracking',
    benefits: ['Course creation', 'Student management', 'Progress tracking', 'Assessments']
  },

  {}
    icon: Users,
    title: 'Student Information Systems,',
    description: 'Integrated SIS solutions for managing student data, enrollment, and academic records.',
  },
  {}
    icon: BookOpen,
    title: 'Digital Content Management,',
    description: 'Platforms for creating, managing, and delivering educational content and resources.',
  },
  {}

    icon: Laptop,
    title: 'Virtual Classrooms',
    description: 'Online learning platform with video conferencing and collaboration',
    benefits: ['Video conferencing', 'Screen sharing', 'Breakout rooms', 'Recording']
  }
];

export default function EducationSolutionsPage() {

  return (
    <Layout
      title="Education Solutions - Zion Tech Group"
      description="Comprehensive education technology solutions for schools, universities, and educational institutions. LMS, SIS, and digital learning platforms."
      keywords="education solutions, learning management system, student information system, educational technology, digital learning"
    >
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Education Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Transform education with innovative technology solutions designed
                for schools, universities, and educational institutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Education Technology Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions designed to enhance learning experiences
                and streamline educational operations.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />

                        {benefit}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Education?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact our education solutions team to discuss your specific requirements
              and discover how we can help enhance your educational institution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                Contact Education Team
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Download Education Brochure
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
    </>

  );
}