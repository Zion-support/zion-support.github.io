import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';

export default function Solutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO title="Solutions - Zion Tech Group" description="Industry solutions for enterprise and healthcare with AI-first capabilities." />
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Solutions</h1>
        <p className="text-lg text-gray-300 max-w-3xl mb-8">
          Explore tailored solutions and architectures for key industries and functions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/solutions/enterprise" className="p-6 rounded-xl bg-slate-800/60 hover:bg-slate-700/60 transition">
            <h2 className="text-2xl font-semibold mb-2">Enterprise</h2>
            <p className="text-gray-300">Cloud foundations, data platforms, AI automation, and security at scale.</p>
          </Link>
          <Link to="/solutions/healthcare" className="p-6 rounded-xl bg-slate-800/60 hover:bg-slate-700/60 transition">
            <h2 className="text-2xl font-semibold mb-2">Healthcare</h2>
            <p className="text-gray-300">Clinical AI, interoperability, and analytics with strict compliance.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Shield, 
  Cloud, 
  Brain, 
  Zap, 
  Globe,
  Users,
  Database,
  Lock,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Solutions: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Building },
    { id: 'healthcare', name: 'Healthcare', icon: Shield },
    { id: 'finance', name: 'Financial Services', icon: Lock },
    { id: 'manufacturing', name: 'Manufacturing', icon: Building },
    { id: 'retail', name: 'Retail & E-commerce', icon: Users },
    { id: 'technology', name: 'Technology', icon: Brain }
  ];

  const solutions = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Analytics',
      industry: 'healthcare',
      description: 'Transform patient care with predictive analytics and intelligent diagnosis support.',
      features: [
        'Predictive disease modeling',
        'Medical image analysis',
        'Patient risk assessment',
        'Drug discovery optimization'
      ],
      benefits: [
        'Improved diagnostic accuracy',
        'Reduced healthcare costs',
        'Enhanced patient outcomes',
        'Streamlined clinical workflows'
      ],
      icon: Brain
    },
    {
      id: 2,
      title: 'Cybersecurity for Financial Services',
      industry: 'finance',
      description: 'Protect financial institutions with advanced threat detection and compliance solutions.',
      features: [
        'Real-time threat monitoring',
        'Compliance automation',
        'Fraud detection systems',
        'Secure transaction processing'
      ],
      benefits: [
        'Enhanced security posture',
        'Regulatory compliance',
        'Reduced fraud losses',
        'Customer trust protection'
      ],
      icon: Shield
    },
    {
      id: 3,
      title: 'Smart Manufacturing Platform',
      industry: 'manufacturing',
      description: 'Optimize production with IoT sensors, predictive maintenance, and quality control.',
      features: [
        'Predictive maintenance',
        'Quality control automation',
        'Supply chain optimization',
        'Energy efficiency monitoring'
      ],
      benefits: [
        'Reduced downtime',
        'Improved product quality',
        'Lower operational costs',
        'Increased productivity'
      ],
      icon: Building
    },
    {
      id: 4,
      title: 'E-commerce Personalization Engine',
      industry: 'retail',
      description: 'Boost sales with AI-driven product recommendations and customer insights.',
      features: [
        'Personalized recommendations',
        'Customer behavior analysis',
        'Dynamic pricing optimization',
        'Inventory management'
      ],
      benefits: [
        'Increased conversion rates',
        'Higher customer satisfaction',
        'Optimized inventory levels',
        'Improved marketing ROI'
      ],
      icon: Users
    },
    {
      id: 5,
      title: 'Cloud-Native Development Platform',
      industry: 'technology',
      description: 'Accelerate software development with modern cloud infrastructure and DevOps tools.',
      features: [
        'Microservices architecture',
        'Automated CI/CD pipelines',
        'Scalable infrastructure',
        'Monitoring and logging'
      ],
      benefits: [
        'Faster time to market',
        'Reduced development costs',
        'Improved scalability',
        'Enhanced reliability'
      ],
      icon: Cloud
    },
    {
      id: 6,
      title: 'Data Analytics & Business Intelligence',
      industry: 'all',
      description: 'Transform raw data into actionable insights for strategic decision-making.',
      features: [
        'Real-time data processing',
        'Advanced analytics dashboards',
        'Predictive modeling',
        'Data visualization tools'
      ],
      benefits: [
        'Data-driven decisions',
        'Improved operational efficiency',
        'Competitive advantage',
        'Revenue optimization'
      ],
      icon: TrendingUp
    }
  ];

  const filteredSolutions = solutions.filter(solution => 
    selectedIndustry === 'all' || solution.industry === selectedIndustry
  );

  const successStories = [
    {
      company: 'MedTech Solutions',
      industry: 'Healthcare',
      challenge: 'Reduced diagnostic accuracy and high operational costs',
      solution: 'AI-powered diagnostic support system',
      results: '30% improvement in diagnostic accuracy, 25% reduction in costs'
    },
    {
      company: 'Global Bank Corp',
      industry: 'Finance',
      challenge: 'Increasing cybersecurity threats and compliance requirements',
      solution: 'Comprehensive security and compliance platform',
      results: '99.9% threat detection rate, 100% compliance achievement'
    },
    {
      company: 'Smart Factory Inc',
      industry: 'Manufacturing',
      challenge: 'Unplanned downtime and quality control issues',
      solution: 'IoT-based predictive maintenance system',
      results: '40% reduction in downtime, 35% improvement in quality'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Industry <span className="text-zion-cyan">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Tailored technology solutions that address the unique challenges of your industry and drive measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedIndustry === industry.id
                    ? 'bg-zion-cyan text-zion-slate-dark'
                    : 'bg-zion-slate/30 text-zion-slate-light hover:bg-zion-slate/50 border border-zion-cyan/20'
                }`}
              >
                <industry.icon className="w-5 h-5" />
                {industry.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Solutions</h2>
            <p className="text-lg text-zion-slate-light">Comprehensive technology solutions designed for your success</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {filteredSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate/30 rounded-lg p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-zion-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{solution.title}</h3>
                    <p className="text-zion-slate-light leading-relaxed">{solution.description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-zion-cyan" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-zion-cyan" />
                      Business Benefits
                    </h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-2 text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-zion-cyan/20">
                  <button className="bg-zion-cyan text-zion-slate-dark px-6 py-3 rounded-lg font-semibold hover:bg-zion-cyan/80 transition-all duration-300 flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-lg text-zion-slate-light">Real results from real clients across industries</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate/30 rounded-lg p-8 border border-zion-cyan/20"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{story.company}</h3>
                  <span className="inline-block bg-zion-cyan/20 text-zion-cyan px-3 py-1 rounded-full text-sm font-medium">
                    {story.industry}
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Challenge</h4>
                    <p className="text-zion-slate-light text-sm">{story.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Solution</h4>
                    <p className="text-zion-slate-light text-sm">{story.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Results</h4>
                    <p className="text-white font-medium">{story.results}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Technology Stack</h2>
            <p className="text-lg text-zion-slate-light">Built with cutting-edge technologies for maximum performance and reliability</p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'Artificial Intelligence', icon: Brain, description: 'Machine learning, NLP, computer vision' },
              { name: 'Cloud Computing', icon: Cloud, description: 'AWS, Azure, GCP, Kubernetes' },
              { name: 'Cybersecurity', icon: Shield, description: 'Zero-trust, encryption, threat detection' },
              { name: 'Data Analytics', icon: Database, description: 'Big data, real-time processing, BI tools' }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-10 h-10 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-zion-slate-light text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-zion-slate-light mb-8">
              Let's discuss how our industry-specific solutions can address your unique challenges and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-zion-cyan text-zion-slate-dark px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan/80 transition-all duration-300">
                Schedule a Consultation
              </button>
              <button className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-zion-slate-dark transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

      {/* Industry Solutions */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Tailored technology solutions designed specifically for the unique challenges 
              and opportunities of different industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-zion-slate-dark/50 border border-zion-slate-light/20 rounded-2xl p-6 hover:border-zion-cyan/30 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {industry.description}
                </p>

                {/* Solutions */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-3">Solutions</h4>
                  <ul className="space-y-2">
                    {industry.solutions.slice(0, 4).map((solution, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-zion-slate-light text-sm">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zion-slate-light/20">
                  <div className="text-center">
                    <div className="text-lg font-bold text-zion-cyan">{industry.caseStudies}</div>
                    <div className="text-xs text-zion-slate-light">Case Studies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-zion-purple">{industry.clients}</div>
                    <div className="text-xs text-zion-slate-light">Clients</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our flagship technology solutions that deliver exceptional value and transformative results 
              for organizations worldwide.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-zion-slate-dark border border-zion-slate-light/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan/50"
            >
              <option value="all">All Categories</option>
              {solutionCategories.map((category) => (
                <option key={category.id} value={category.title}>{category.title}</option>
              ))}
            </select>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="px-4 py-2 bg-zion-slate-dark border border-zion-slate-light/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan/50"
            >
              <option value="all">All Industries</option>
              {industrySolutions.map((industry) => (
                <option key={industry.id} value={industry.title}>{industry.title}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 border border-zion-slate-light/20 rounded-2xl p-6 hover:border-zion-cyan/30 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-flex items-center px-3 py-1 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-2">
                      {solution.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-zion-cyan">{solution.pricing}</div>
                    <div className="text-xs text-zion-slate-light">Starting Price</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {solution.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-zion-slate-light text-sm">
                        <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-zion-purple mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-zion-slate-light text-sm">
                        <div className="w-1.5 h-1.5 bg-zion-purple rounded-full mt-2 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-zion-slate-light/20">
                  <div className="flex space-x-2">
                    {solution.demo && (
                      <button className="px-4 py-2 bg-zion-cyan text-white text-sm font-medium rounded-lg hover:bg-zion-cyan-light transition-colors duration-300">
                        <Play className="w-4 h-4 mr-1 inline" />
                        Demo
                      </button>
                    )}
                    {solution.trial && (
                      <button className="px-4 py-2 border border-zion-cyan text-zion-cyan text-sm font-medium rounded-lg hover:bg-zion-cyan hover:text-white transition-colors duration-300">
                        Start Trial
                      </button>
                    )}
                  </div>
                  <Link
                    to={`/solutions/${solution.id}`}
                    className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-slate">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let our technology solutions drive your digital transformation and unlock new possibilities 
              for growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center justify-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
