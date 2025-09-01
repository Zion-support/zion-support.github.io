import { Link } from 'react - router - dom';
import React, { useState } from 'react';
export default CaseStudies;
import {

import { motion } from 'framer - motion';

  CheckCircle,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  Target,
  ArrowRight,
  Star,
  Award,
  Zap,
  Shield,
  Cloud,
  Brain,
  Globe} from 'lucide - react';

const caseStudies = [
  {

    id: 1,
    title: 'AI - Powered Customer Service Transformation',
    comp: 'TechCorp Solutions',
    industry: 'Technology',
    challenge: 'High customer service costs and long response times',
    solution: 'Implemented AI chatbot with natural language processing',
    results: [
      '40% reduction in customer service costs',
      '85% faster response times',
      '95% customer satisfaction rate',
      '24 / 7 automated support',
    ],
    metrics: {

      costReduction: '40%',
      responseTime: '85% faster',
      satisfaction: '95%',
      availability: '24 / 7'},
    technologies: ['AI / ML', 'NLP', 'Cloud Computing', 'API Integration'],
    duration: '6 months',
    roi: '300%',
    image: '/images / case - study - 1.jpg'},
  {

    id: 2,
    title: 'Cloud Migration & DevOps Automation',
    comp: 'InnovateLab Inc',
    industry: 'Healthcare',
    challenge: 'Legacy infrastructure causing downtime and security risks',
    solution: 'Complete cloud migration with CI / CD pipeline implementation',
    results: [
      '99.9% uptime achieved',
      '60% reduction in deployment time',
      'Enhanced security compliance',
      'Scalable infrastructure',
    ],
    metrics: {

      uptime: '99.9%',
      deploymentTime: '60% faster',
      securityScore: 'A+',
      scalability: '10x'},
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
    duration: '8 months',
    roi: '250%',
    image: '/images / case - study - 2.jpg'},
  {

    id: 3,
    title: 'Data Analytics & Business Intelligence Platform',
    comp: 'DataFlow Analytics',
    industry: 'Finance',
    challenge: 'Scattered data sources and lack of real - time insights',
    solution: 'Centralized data warehouse with real - time analytics dashboard',
    results: [
      'Real - time data insights',
      '30% improvement in decision making',
      'Automated reporting system',
      'Predictive analytics capabilities',
    ],
    metrics: {

      dataProcessing: 'Real - time',
      decisionMaking: '30% better',
      reporting: 'Automated',
      predictions: '90% accuracy'},
    technologies: ['Big Data', 'Apache Spark', 'Tableau', 'Python', 'SQL'],
    duration: '10 months',
    roi: '400%',
    image: '/images / case - study - 2.jpg'},
  {

    id: 4,
    title: 'Cybersecurity & Compliance Implementation',
    comp: 'SecureBank Ltd',
    industry: 'Banking',
    challenge:
      'Increasing cyber threats and regulatory compliance requirements',
    solution: 'Comprehensive security framework with SOC2 compliance',
    results: [
      'Zero security breaches',
      'SOC2 Type II compliance achieved',
      'Advanced threat detection',
      'Employee security training',
    ],
    metrics: {

      breaches: '0',
      compliance: 'SOC2 Type II',
      threatDetection: '99.9%',
      training: '100% staff'},
    technologies: [
      'Cybersecurity',
      'SOC2',
      'Threat Detection',
      'Compliance',
      'Training',
    ],
    duration: '12 months',
    roi: '200%',
    image: '/images / case - study - 4.jpg'},
];

const CaseStudies = () => {

  const [selectedIndustry, setSelectedIndustry] = useState ('All') ;
  const [selectedCaseStudy, setSelectedCaseStudy] = useState (null) ;

  const industries = ['All', 'Technology', 'Healthcare', 'Finance', 'Banking'];

  const filteredCaseStudies = selectedIndustry === 'All'
      ? caseStudies
      : caseStudies.filter (study => study.industry === selectedIndustry) ;

  return (<div role="button" className="min - h-screen bg - gradient - to - br from - slate - 900 via - blue - 900 to - slate - 900 text - white">
      {/* Hero Section */}
      <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">
        <div role="button" className="max - w-7xl mx - auto text - center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text - 4xl md:text - 6xl font - bold mb - 6">
              Case < span className="text - transparent bg - clip - text bg - gradient - to - r from - blue - 400 to - cyan - 400">
                {' '}
                Studies
              </span>
            </h1>
            <p className="text - xl text - gray - 300 max - w-3xl mx - auto mb - 8">
              Real - world examples of how our technology solutions have
              transformed businesses across different industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py - 12 px - 4 sm:px - 6 lg:px - 8">
        <div role="button" className="max - w-7xl mx - auto">
          <div role="button" className="flex flex - wrap justify - center gap - 4">
            {industries.map (industry => (<button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" key={industry}
                onClick={ () => setSelectedIndustry (industry) }
                className={`px - 6 py - 3 rounded - xl font - semibold transition - all duration - 300 ${

                  selectedIndustry === industry
                    ? 'bg - gradient - to - r from - blue - 600 to - cyan - 600 text - white shadow - lg shadow - blue - 500 / 25'
                    : 'bg - white / 10 text - gray - 300 border border - white / 20 hover:border - blue - 400 / 40'
                }`}
              >
                {industry}
              </button>) ) }
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">
        <div role="button" className="max - w-7xl mx - auto">
          <div role="button" className="grid grid - cols - 1 lg:grid - cols - 2 gap - 8">
            {filteredCaseStudies.map ( (study, index) => (<motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg - white / 10 backdrop - blur - lg rounded - xl p - 8 border border - white / 20 hover:border - blue - 400 / 40 transition - all duration - 300 cursor - pointer"
                onClick={ () => setSelectedCaseStudy (study) }
              >
                <div role="button" className="flex items - center gap - 4 mb - 6">
                  <div role="button" className="w - 16 h - 16 bg - gradient - to - br from - blue - 500 to - cyan - 500 rounded - xl flex items - center justify - center text - white">
                    <Award className="w - 8 h - 8" />
                  </div>
                  <div>
                    <h3 className="text - 2xl font - bold text - white">
                      {study.title}
                    </h3>
                    <p className="text - blue - 400 font - semibold">{study.comp}</p>
                    <p className="text - gray - 400 text - sm">{study.industry}</p>
                  </div>
                </div>

                <div role="button" className="space - y-4 mb - 6">
                  <div>
                    <h4 className="text - blue - 400 font - semibold mb - 2">
                      Challenge
                    </h4>
                    <p className="text - gray - 300">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text - blue - 400 font - semibold mb - 2">
                      Solution
                    </h4>
                    <p className="text - gray - 300">{study.solution}</p>
                  </div>
                </div>

                <div role="button" className="grid grid - cols - 2 gap - 4 mb - 6">
                  <div role="button" className="text - center">
                    <div role="button" className="text - 2xl font - bold text - blue - 400">
                      {study.metrics.costReduction ||
                        study.metrics.uptime ||
                        study.metrics.dataProcessing ||
                        study.metrics.breaches}
                    </div>
                    <div role="button" className="text - sm text - gray - 400">Key Metric</div>
                  </div>
                  <div role="button" className="text - center">
                    <div role="button" className="text - 2xl font - bold text - cyan - 400">
                      {study.roi}
                    </div>
                    <div role="button" className="text - sm text - gray - 400">ROI</div>
                  </div>
                </div>

                <div role="button" className="flex items - center justify - between">
                  <span className="text - sm text - gray - 400">
                    {study.duration}
                  </span>
                  <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" className="inline - flex items - center gap - 2 text - blue - 400 hover:text - white transition - colors duration - 300">
                    <span className="text - sm font - medium">View Details</span>
                    <ArrowRight className="w - 4 h - 4" />
                  </button>
                </div>
              </motion.div>) ) }
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py - 20 bg - gradient - to - r from - blue - 500 / 10 via - cyan - 500 / 10 to - blue - 500 / 10">
        <div role="button" className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text - center max - w-4xl mx - auto"
          >
            <h2 className="text - 4xl font - bold text - white mb - 6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text - xl text - gray - 300 mb - 8 leading - relaxed">
              Let's discuss how our technology solutions can transform your
              business and create measurable results like these case studies.
            </p>

            <div role="button" className="flex flex - col sm:flex - row gap - 4 justify - center">
              <Link
                to="/contact"
                className="px - 8 py - 4 bg - gradient - to - r from - blue - 600 to - cyan - 600 text - white font - semibold rounded - xl hover:shadow - lg hover:shadow - blue - 500 / 25 transition - all duration - 300 transform hover:scale - 105"
              >
                Start Your Project
              </Link>
              <Link
                to="/contact"
                className="px - 8 py - 4 border border - blue - 500 text - blue - 400 font - semibold rounded - xl hover:bg - blue - 500 hover:text - white transition - all duration - 300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>) ;
};

