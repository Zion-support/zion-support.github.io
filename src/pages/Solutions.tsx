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

export default Solutions;