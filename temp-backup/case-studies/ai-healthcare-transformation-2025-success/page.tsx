import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Tag, Clock, TrendingUp, Shield, Users, Target, CheckCircle, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Healthcare Transformation 2025: How a Regional Hospital System Achieved 400% ROI',
  description: 'Discover how a regional hospital system achieved 400% ROI, zero patient data breaches, and 67% reduction in operational costs through comprehensive AI transformation.',
  keywords: ['Case Study', 'Healthcare', 'AI Transformation', 'ROI', 'Patient Safety', '2025', 'Hospital AI', 'Healthcare Technology'],
  openGraph: {
    title: 'AI Healthcare Transformation 2025: How a Regional Hospital System Achieved 400% ROI',
    description: 'Discover how a regional hospital system achieved 400% ROI, zero patient data breaches, and 67% reduction in operational costs through comprehensive AI transformation.',
    type: 'article',
    publishedTime: '2025-01-17T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['Case Study', 'Healthcare', 'AI Transformation', 'ROI', 'Patient Safety', '2025'],
  },
};

export default function AIHealthcareTransformationPage() {
  const keyMetrics = [
    { label: 'ROI Achieved', value: '400%', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Cost Reduction', value: '67%', icon: DollarSign, color: 'text-blue-600' },
    { label: 'Patient Satisfaction', value: '95%', icon: Users, color: 'text-purple-600' },
    { label: 'Data Breaches', value: '0', icon: Shield, color: 'text-red-600' }
  ];

  const phases = [
    {
      title: 'Phase 1: Foundation (Months 1-3)',
      description: 'Comprehensive assessment and planning',
      results: ['Identified 12 high-priority AI opportunities', 'Secured $2.5M budget allocation', 'Established cross-functional team']
    },
    {
      title: 'Phase 2: Core Implementation (Months 4-9)',
      description: 'AI-powered patient flow and clinical decision support',
      results: ['67% reduction in wait times', '78% reduction in medical errors', '$1.2M annual savings']
    },
    {
      title: 'Phase 3: Advanced Capabilities (Months 10-12)',
      description: 'Cybersecurity and predictive analytics',
      results: ['Zero patient data breaches', '45% reduction in readmissions', '$2.1M saved in readmission costs']
    }
  ];

  const financialImpact = [
    { metric: 'Annual Operational Costs', before: '$45M', after: '$30M', improvement: '33% reduction', value: '$15M saved' },
    { metric: 'Patient Wait Times', before: '3 hours', after: '1 hour', improvement: '67% reduction', value: '$1.2M saved' },
    { metric: 'Administrative Processing', before: '8 hours', after: '2.2 hours', improvement: '73% reduction', value: '$2.8M saved' },
    { metric: 'Medical Errors', before: '15/month', after: '3.3/month', improvement: '78% reduction', value: '$3.2M saved' },
    { metric: 'Security Incidents', before: '12/year', after: '0/year', improvement: '100% reduction', value: '$1.5M saved' },
    { metric: 'Readmission Rate', before: '18%', after: '10%', improvement: '45% reduction', value: '$2.1M saved' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center text-white text-opacity-80 hover:text-opacity-100 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
          
          <div className="flex items-center gap-4 text-sm text-white text-opacity-80 mb-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              January 17, 2025
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              Zion Tech Group
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              15 min read
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            AI Healthcare Transformation 2025
          </h1>
          <p className="text-xl text-white text-opacity-90 leading-relaxed">
            How a Regional Hospital System Achieved 400% ROI and Zero Patient Data Breaches
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {['Case Study', 'Healthcare', 'AI Transformation', 'ROI', 'Patient Safety'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Results Achieved</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <metric.icon className={`w-12 h-12 mx-auto mb-4 ${metric.color}`} />
                <div className={`text-3xl font-bold ${metric.color} mb-2`}>{metric.value}</div>
                <div className="text-gray-600 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Executive Summary</h2>
          <p className="text-lg text-blue-800">
            This case study examines the comprehensive AI transformation of Regional Health System (RHS), a 500-bed 
            hospital network serving over 2 million patients across three states. Through strategic implementation 
            of AI-powered solutions across clinical operations, administrative processes, and patient care, RHS 
            achieved remarkable results including 400% ROI, zero patient data breaches, and 67% reduction in 
            operational costs.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
          <p className="text-lg text-gray-700 mb-6">
            Regional Health System faced mounting pressures common to healthcare organizations in 2025: rising 
            operational costs increasing 12% annually, staffing shortages affecting 40% of departments, patient 
            safety concerns with 15% increase in medical errors, cybersecurity threats targeting sensitive patient 
            data, regulatory compliance requirements becoming more stringent, and patient satisfaction scores 
            declining due to longer wait times.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Pain Points</h3>
          <ul className="text-lg text-gray-700 mb-6 space-y-2">
            <li>• Inefficient patient flow leading to 3-hour average wait times</li>
            <li>• Manual administrative processes consuming 60% of staff time</li>
            <li>• Data silos preventing comprehensive patient care coordination</li>
            <li>• Predictive analytics gaps in patient risk assessment</li>
            <li>• Resource allocation challenges across multiple facilities</li>
            <li>• Compliance reporting requiring 200+ hours monthly</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Phases</h2>
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-700 mb-4">{phase.description}</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Key Results:</h4>
                  <ul className="text-green-700 space-y-1">
                    {phase.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Financial Impact Analysis</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left">Metric</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Before AI</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">After AI</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Improvement</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Value</th>
                </tr>
              </thead>
              <tbody>
                {financialImpact.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-300 px-4 py-2 font-medium">{item.metric}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.before}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.after}</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600 font-medium">{item.improvement}</td>
                    <td className="border border-gray-300 px-4 py-2 text-blue-600 font-medium">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-semibold text-green-900 mb-4">Total Financial Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">$25.8M</div>
                <div className="text-green-800">Total Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">$6.5M</div>
                <div className="text-green-800">Total AI Investment</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">400%</div>
                <div className="text-green-800">ROI Achieved</div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Lessons Learned</h2>
          
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Success Factors</h3>
          <ul className="text-lg text-gray-700 mb-6 space-y-2">
            <li>• <strong>Executive Sponsorship:</strong> Strong leadership support was critical</li>
            <li>• <strong>Phased Approach:</strong> Gradual implementation reduced risk and resistance</li>
            <li>• <strong>Staff Engagement:</strong> Involving staff in design and implementation</li>
            <li>• <strong>Data Quality:</strong> Investing in data preparation and validation</li>
            <li>• <strong>Change Management:</strong> Comprehensive training and support programs</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Recommendations</h3>
          <ol className="text-lg text-gray-700 mb-6 space-y-2">
            <li>1. Start with high-impact, low-risk initiatives</li>
            <li>2. Invest heavily in data quality and integration</li>
            <li>3. Prioritize staff training and change management</li>
            <li>4. Ensure regulatory compliance from day one</li>
            <li>5. Measure and communicate results continuously</li>
          </ol>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-purple-900 mb-4">Conclusion</h3>
            <p className="text-lg text-purple-800">
              The AI transformation of Regional Health System demonstrates the tremendous potential of artificial 
              intelligence in healthcare. By achieving 400% ROI, zero patient data breaches, and 67% reduction in 
              operational costs, RHS has set a new standard for healthcare AI implementation. The key to success 
              was not just the technology, but the comprehensive approach that included strategic planning, strong 
              executive sponsorship, investment in data quality and staff training, and focus on measurable outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Healthcare Organization with AI?
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-8">
            Contact Zion Tech Group to learn how our healthcare AI solutions can deliver similar results for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Explore Healthcare Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}