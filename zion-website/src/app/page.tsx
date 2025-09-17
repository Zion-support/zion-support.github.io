// @ts-nocheck
import React from 'react'
import { getLatestUpdates } from '@/data/updates'
import {
  ChartBarIcon,
  CpuChipIcon,
  GlobeAltIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'AI-Powered Solutions',
    description: 'Cutting-edge artificial intelligence solutions that transform your business operations.',
    icon: CpuChipIcon,
  },
  {
    name: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud infrastructure designed for modern applications.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Micro SaaS Development',
    description: 'Custom micro SaaS solutions that drive revenue and efficiency.',
    icon: LightBulbIcon,
  },
  {
    name: 'Enterprise Security',
    description: 'Comprehensive security solutions to protect your digital assets.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Data Analytics',
    description: 'Advanced analytics and business intelligence to drive informed decisions.',
    icon: ChartBarIcon,
  },
  {
    name: 'Team Collaboration',
    description: 'Tools and platforms that enhance team productivity and collaboration.',
    icon: UserGroupIcon,
  },
]

export default async function HomePage() {
  const updates = await getLatestUpdates()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Transforming businesses with cutting-edge AI, cloud infrastructure, and micro SaaS solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.name} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{feature.name}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Latest Updates Section */}
      {updates && updates.length > 0 && (
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest Updates
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Stay informed with our latest insights and developments
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {updates.slice(0, 6).map((update) => (
                <div key={update.id} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-3">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {update.category}
                    </span>
                    <span className="text-sm text-gray-500 ml-auto">
                      {update.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {update.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {update.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our solutions can accelerate your digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}