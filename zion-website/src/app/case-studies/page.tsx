import React from 'react'
import Link from 'next/link'
import { 
  ChartBarIcon, 
  BuildingOfficeIcon, 
  CpuChipIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  UserGroupIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const caseStudies = [
  {
    id: 1,
    title: 'Global Financial Services Transformation',
    client: 'Fortune 500 Investment Bank',
    industry: 'Financial Services',
    challenge: 'Reduce operational costs while improving risk assessment accuracy',
    solution: 'Implemented autonomous AI trading systems and quantum-enhanced risk modeling',
    results: [
      '40% reduction in operational costs',
      '85% improvement in risk prediction accuracy',
      '$2.3B in additional revenue generated',
      '99.9% system uptime achieved'
    ],
    duration: '18 months',
    team: '25 AI engineers and data scientists',
    icon: BuildingOfficeIcon,
    image: '/case-studies/financial-services.jpg',
    featured: true
  },
  {
    id: 2,
    title: 'Manufacturing Excellence with Autonomous Systems',
    client: 'Leading Automotive Manufacturer',
    industry: 'Manufacturing',
    challenge: 'Optimize production efficiency and reduce waste in smart factories',
    solution: 'Deployed autonomous production management and predictive maintenance systems',
    results: [
      '60% increase in production efficiency',
      '45% reduction in manufacturing waste',
      '30% decrease in maintenance costs',
      'Zero unplanned downtime achieved'
    ],
    duration: '12 months',
    team: '18 automation specialists and engineers',
    icon: CpuChipIcon,
    image: '/case-studies/manufacturing.jpg',
    featured: true
  },
  {
    id: 3,
    title: 'Healthcare AI Revolution',
    client: 'Major Healthcare Network',
    industry: 'Healthcare',
    challenge: 'Improve patient outcomes and streamline diagnostic processes',
    solution: 'Integrated quantum neural networks for medical imaging and autonomous patient monitoring',
    results: [
      '50% faster diagnostic accuracy',
      '35% reduction in patient readmission rates',
      '90% improvement in treatment recommendation precision',
      '24/7 autonomous patient monitoring capability'
    ],
    duration: '15 months',
    team: '30 AI researchers and medical professionals',
    icon: ShieldCheckIcon,
    image: '/case-studies/healthcare.jpg',
    featured: true
  },
  {
    id: 4,
    title: 'Cybersecurity Fortress',
    client: 'Global Technology Corporation',
    industry: 'Technology',
    challenge: 'Protect against sophisticated cyber threats and ensure data security',
    solution: 'Deployed advanced AI-powered threat detection and autonomous security response systems',
    results: [
      '95% reduction in security incidents',
      'Real-time threat detection and response',
      '99.99% data protection uptime',
      'Automated incident response in under 30 seconds'
    ],
    duration: '10 months',
    team: '20 cybersecurity experts and AI engineers',
    icon: ShieldCheckIcon,
    image: '/case-studies/cybersecurity.jpg',
    featured: false
  },
  {
    id: 5,
    title: 'Global Supply Chain Optimization',
    client: 'International Retail Chain',
    industry: 'Retail',
    challenge: 'Optimize global supply chain operations and reduce logistics costs',
    solution: 'Implemented autonomous supply chain management with quantum optimization algorithms',
    results: [
      '55% reduction in logistics costs',
      '40% improvement in delivery times',
      'Real-time inventory optimization',
      'Predictive demand forecasting with 92% accuracy'
    ],
    duration: '14 months',
    team: '22 supply chain specialists and data scientists',
    icon: GlobeAltIcon,
    image: '/case-studies/supply-chain.jpg',
    featured: false
  },
  {
    id: 6,
    title: 'Research Acceleration Platform',
    client: 'Leading Pharmaceutical Company',
    industry: 'Pharmaceutical',
    challenge: 'Accelerate drug discovery and research processes',
    solution: 'Deployed quantum computing research platform with AI-powered molecular analysis',
    results: [
      '70% faster drug discovery timeline',
      '80% improvement in molecular analysis accuracy',
      'Automated research data processing',
      'Reduced R&D costs by $500M annually'
    ],
    duration: '20 months',
    team: '35 research scientists and quantum engineers',
    icon: ChartBarIcon,
    image: '/case-studies/pharmaceutical.jpg',
    featured: false
  }
]

const industries = ['All', 'Financial Services', 'Manufacturing', 'Healthcare', 'Technology', 'Retail', 'Pharmaceutical']

export default function CaseStudiesPage() {
  const featuredStudies = caseStudies.filter(study => study.featured)
  const regularStudies = caseStudies.filter(study => !study.featured)

  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Success Stories
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Discover how leading organizations are transforming their operations with our cutting-edge AI and technology solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Projects Completed', value: '500+' },
              { label: 'Client Satisfaction', value: '98%' },
              { label: 'Average ROI', value: '340%' },
              { label: 'Global Reach', value: '50+ Countries' }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
                <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Filter */}
        <div className="mx-auto mt-16 max-w-2xl">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <button
                key={industry}
                className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition-colors duration-200"
              >
                {industry}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Case Studies */}
        <div className="mx-auto mt-16 max-w-7xl">
          <h2 className="text-2xl font-bold text-white mb-8">Featured Success Stories</h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {featuredStudies.map((study) => (
              <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <study.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{study.industry}</div>
                    <div className="font-semibold text-white">{study.client}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                  {study.title}
                </h3>
                
                <p className="text-gray-300 mb-4">{study.challenge}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="text-sm">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white ml-2">{study.duration}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-400">Team:</span>
                    <span className="text-white ml-2">{study.team}</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {study.results.slice(0, 2).map((result, index) => (
                    <div key={index} className="text-sm text-green-400 flex items-center gap-2">
                      <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                      {result}
                    </div>
                  ))}
                </div>
                
                <Link 
                  href={`/case-studies/${study.id}`}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors duration-200"
                >
                  View Case Study
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Regular Case Studies */}
        <div className="mx-auto mt-16 max-w-7xl">
          <h2 className="text-2xl font-bold text-white mb-8">More Success Stories</h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {regularStudies.map((study) => (
              <div key={study.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <study.icon className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{study.industry}</div>
                    <div className="font-semibold text-white">{study.client}</div>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">
                  {study.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm">{study.challenge}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    {study.duration} • {study.team}
                  </div>
                  <Link 
                    href={`/case-studies/${study.id}`}
                    className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors duration-200"
                  >
                    Read More
                    <ArrowRightIcon className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mx-auto mt-24 max-w-2xl">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how our AI and technology solutions can transform your organization.
            </p>
            <div className="flex gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Start Your Project
              </Link>
              <Link 
                href="/solutions"
                className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors duration-200 font-medium"
              >
                View Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}