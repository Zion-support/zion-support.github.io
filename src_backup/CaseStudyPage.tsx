import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, User, Building, Target, TrendingUp, DollarSign, Clock, CheckCircle } from 'lucide-react';

const CaseStudyPage: React.FC = () => {
  const caseStudy = {
    id: 1,
    title: 'AI-Powered Digital Transformation: How TechCorp Increased Efficiency by 300%',
    company: 'TechCorp Industries',
    industry: 'Manufacturing',
    duration: '6 months',
    team: '12 experts',
    budget: '$2.5M',
    results: {
      efficiency: '300%',
      costSavings: '$2.5M',
      satisfaction: '98%',
      timeReduction: '75%'
    },
    challenge: `TechCorp, a leading manufacturing company with over 10,000 employees, was struggling with outdated systems that were causing significant bottlenecks in their production line. Their manual processes were not only time-consuming but also prone to errors, leading to delays and increased costs. The company needed a comprehensive digital transformation solution that could streamline their operations while maintaining quality standards.`,
    solution: `We implemented a comprehensive AI-powered digital transformation solution that included:

1. **Intelligent Process Automation**: Deployed AI algorithms to automate repetitive tasks and optimize workflow processes.

2. **Predictive Analytics**: Implemented machine learning models to predict maintenance needs and prevent equipment failures.

3. **Smart Inventory Management**: Created an AI-driven inventory system that reduced waste and optimized stock levels.

4. **Real-time Monitoring**: Established a centralized dashboard for real-time monitoring of all operations.

5. **Employee Training Program**: Conducted extensive training sessions to ensure smooth adoption of new technologies.`,
    impact: `The implementation of our AI-powered solution resulted in unprecedented improvements across all key metrics. TechCorp saw a 300% increase in operational efficiency, reducing production time by 75%. The predictive maintenance system prevented over 200 equipment failures, saving the company millions in downtime costs. Employee satisfaction increased to 98% as workers could focus on more strategic tasks rather than manual processes.`,
    technologies: ['Artificial Intelligence', 'Machine Learning', 'IoT Sensors', 'Cloud Computing', 'Data Analytics', 'Automation'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop'
  };

  const relatedCaseStudies = [
    {
      id: 2,
      title: 'Blockchain Revolution: Secure Supply Chain Management',
      company: 'Global Logistics Corp',
      industry: 'Logistics',
      results: '50% faster transactions',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop',
      slug: 'blockchain-supply-chain'
    },
    {
      id: 3,
      title: 'Cloud Migration Success: 99.9% Uptime Achievement',
      company: 'FinanceFlow Inc',
      industry: 'Financial Services',
      results: '99.9% uptime',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      slug: 'cloud-migration-finance'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Link
            to="/case-studies"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Case Studies</span>
          </Link>
          
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>Published: January 15, 2025</span>
            </div>
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>By: Sarah Johnson</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {caseStudy.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-lg text-gray-600">
            <div className="flex items-center space-x-2">
              <Building className="w-5 h-5" />
              <span>{caseStudy.company}</span>
            </div>
            <span>•</span>
            <span>{caseStudy.industry}</span>
            <span>•</span>
            <span>{caseStudy.duration}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="mb-8">
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Project Overview */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Duration</div>
                    <div className="font-semibold text-gray-900">{caseStudy.duration}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <User className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Team Size</div>
                    <div className="font-semibold text-gray-900">{caseStudy.team}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Budget</div>
                    <div className="font-semibold text-gray-900">{caseStudy.budget}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Industry</div>
                    <div className="font-semibold text-gray-900">{caseStudy.industry}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenge */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">The Challenge</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Solution</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                {caseStudy.solution.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {caseStudy.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">The Impact</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {caseStudy.impact}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                    <span className="font-semibold text-gray-900">Efficiency Increase</span>
                  </div>
                  <div className="text-3xl font-bold text-blue-600">{caseStudy.results.efficiency}</div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="font-semibold text-gray-900">Cost Savings</span>
                  </div>
                  <div className="text-3xl font-bold text-green-600">{caseStudy.results.costSavings}</div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                    <span className="font-semibold text-gray-900">Client Satisfaction</span>
                  </div>
                  <div className="text-3xl font-bold text-purple-600">{caseStudy.results.satisfaction}</div>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <CheckCircle className="w-6 h-6 text-orange-600" />
                    <span className="font-semibold text-gray-900">Time Reduction</span>
                  </div>
                  <div className="text-3xl font-bold text-orange-600">{caseStudy.results.timeReduction}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* CTA Card */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white mb-8">
              <h3 className="text-xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="mb-6 text-blue-100">
                Let's discuss how we can help you achieve similar results for your organization.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full justify-center"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Related Case Studies */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Related Case Studies</h3>
              <div className="space-y-6">
                {relatedCaseStudies.map((study) => (
                  <Link
                    key={study.id}
                    to={`/case-studies/${study.slug}`}
                    className="block group"
                  >
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-32 object-cover rounded-lg mb-3 group-hover:opacity-90 transition-opacity"
                    />
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                      {study.title}
                    </h4>
                    <div className="text-sm text-gray-600 mb-2">{study.company}</div>
                    <div className="text-sm font-medium text-green-600">{study.results}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;