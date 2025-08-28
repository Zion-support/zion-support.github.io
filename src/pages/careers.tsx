import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Briefcase, 
  Users, 
  MapPin, 
  Clock, 
  DollarSign, 
  ArrowRight,
  CheckCircle,
  Star,
  Heart,
  Zap,
  Brain,
  Rocket,
  Globe,
  Award,
  Coffee,
  BookOpen,
  Gamepad2
} from 'lucide-react';

export default function Careers() {
  const openPositions = [
    {
      title: 'Senior AI/ML Engineer',
      department: 'Artificial Intelligence',
      location: 'Remote / New York, NY',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120K - $180K',
      description: 'Lead the development of cutting-edge AI solutions for enterprise clients, focusing on machine learning models, natural language processing, and computer vision applications.',
      requirements: [
        'Advanced degree in Computer Science, AI, or related field',
        'Expertise in Python, TensorFlow, PyTorch, and cloud platforms',
        'Experience with large-scale ML systems and MLOps',
        'Strong background in statistics and mathematical modeling'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Flexible remote work policy',
        'Professional development budget',
        'Health, dental, and vision insurance'
      ],
      featured: true,
      icon: Brain,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Quantum Computing Researcher',
      department: 'Quantum Technologies',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$100K - $150K',
      description: 'Research and develop quantum algorithms, quantum error correction methods, and quantum-classical hybrid systems for practical applications.',
      requirements: [
        'PhD in Physics, Computer Science, or Quantum Information',
        'Experience with quantum programming languages (Qiskit, Cirq)',
        'Knowledge of quantum algorithms and quantum error correction',
        'Strong mathematical and theoretical background'
      ],
      benefits: [
        'Cutting-edge quantum computing access',
        'Conference and research publication support',
        'Collaboration with leading quantum researchers',
        'Competitive benefits package'
      ],
      featured: true,
      icon: Zap,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'DevOps Engineer',
      department: 'Cloud & Infrastructure',
      location: 'Remote / Austin, TX',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$90K - $140K',
      description: 'Build and maintain scalable cloud infrastructure, implement CI/CD pipelines, and ensure high availability of our services.',
      requirements: [
        'Experience with AWS, Azure, or GCP',
        'Proficiency in Docker, Kubernetes, and Terraform',
        'Knowledge of monitoring and logging tools',
        'Experience with automation and scripting'
      ],
      benefits: [
        'Remote-first work environment',
        'Cloud certification reimbursement',
        'Flexible working hours',
        'Team building events'
      ],
      featured: false,
      icon: Rocket,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security & Compliance',
      location: 'Washington, DC',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$95K - $145K',
      description: 'Develop and implement security strategies, conduct security assessments, and ensure compliance with industry standards and regulations.',
      requirements: [
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with security frameworks and compliance',
        'Knowledge of threat detection and response',
        'Background in network and application security'
      ],
      benefits: [
        'Security certification support',
        'Professional development opportunities',
        'Competitive salary and benefits',
        'Work with cutting-edge security tools'
      ],
      featured: false,
      icon: Star,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Frontend Developer',
      department: 'Product Development',
      location: 'Remote / Seattle, WA',
      type: 'Full-time',
      experience: '2+ years',
      salary: '$80K - $120K',
      description: 'Build modern, responsive web applications using React, TypeScript, and modern frontend technologies.',
      requirements: [
        'Strong experience with React and TypeScript',
        'Proficiency in CSS, HTML, and JavaScript',
        'Experience with state management (Redux, Zustand)',
        'Knowledge of modern build tools and testing'
      ],
      benefits: [
        'Remote work flexibility',
        'Latest development tools and equipment',
        'Learning and development budget',
        'Collaborative team environment'
      ],
      featured: false,
      icon: Globe,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Data Scientist',
      department: 'Data & Analytics',
      location: 'Remote / Boston, MA',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$85K - $130K',
      description: 'Analyze complex datasets, build predictive models, and provide actionable insights to drive business decisions.',
      requirements: [
        'Advanced degree in Statistics, Mathematics, or related field',
        'Experience with Python, R, SQL, and data visualization',
        'Knowledge of statistical modeling and machine learning',
        'Strong analytical and problem-solving skills'
      ],
      benefits: [
        'Access to cutting-edge data tools',
        'Professional development opportunities',
        'Competitive compensation package',
        'Flexible work arrangements'
      ],
      featured: false,
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const companyValues = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring new technologies and approaches.',
      icon: Zap,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Collaboration',
      description: 'Great ideas come from diverse perspectives working together towards common goals.',
      icon: Users,
      color: 'from-blue-400 to-indigo-500'
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code quality to client relationships.',
      icon: Award,
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Continuous Learning',
      description: 'Technology evolves rapidly, and so do we. We invest in our team\'s growth and development.',
      icon: BookOpen,
      color: 'from-green-400 to-emerald-500'
    }
  ];

  const perks = [
    'Flexible remote work policy',
    'Competitive salary with equity options',
    'Comprehensive health, dental, and vision insurance',
    '401(k) with company match',
    'Professional development budget',
    'Latest technology and equipment',
    'Unlimited PTO and flexible hours',
    'Team building events and activities',
    'Conference and training opportunities',
    'Wellness programs and gym memberships',
    'Free coffee, snacks, and meals',
    'Game rooms and relaxation areas'
  ];

  return (
    <>
      <SEO 
        title="Careers - Zion Tech Group"
        description="Join our team of innovators and technology experts. Explore exciting career opportunities in AI, quantum computing, cybersecurity, and emerging technologies."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-green-400/10 border border-green-400/20 rounded-full text-green-400 text-sm font-medium mb-6">
                <Briefcase className="w-4 h-4 mr-2" />
                Join Our Team
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Build the Future
                <span className="block bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  With Us
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Join our team of innovators, problem-solvers, and technology enthusiasts. 
                Help us shape the future of AI, quantum computing, and emerging technologies 
                while building an amazing career.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-green-500/25">
                  View Open Positions
                </button>
                <button className="px-8 py-4 border border-green-400/30 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-200">
                  Learn About Culture
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                The principles that guide our work, shape our culture, and drive our success.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-slate-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Perks & Benefits */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Perks & Benefits
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                We believe in taking care of our team. Here's what makes working at 
                Zion Tech Group special.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {perks.map((perk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300">{perk}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Ready to join our team? Explore our current openings and find the 
                perfect role for your skills and career goals.
              </p>
            </motion.div>

            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-slate-800/50 border rounded-xl p-8 ${
                    position.featured 
                      ? 'border-green-400/30 bg-gradient-to-br from-green-500/5 to-blue-500/5' 
                      : 'border-slate-700/50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${position.color} rounded-lg flex items-center justify-center`}>
                        <position.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                        <div className="flex items-center space-x-4 text-slate-400">
                          <span className="flex items-center">
                            <Briefcase className="w-4 h-4 mr-2" />
                            {position.department}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {position.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    {position.featured && (
                      <div className="flex items-center text-green-400 text-sm">
                        <Star className="w-4 h-4 mr-1" />
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="flex items-center text-slate-400">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{position.type}</span>
                    </div>
                    <div className="flex items-center text-slate-400">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{position.experience}</span>
                    </div>
                    <div className="flex items-center text-slate-400">
                      <DollarSign className="w-4 h-4 mr-2" />
                      <span>{position.salary}</span>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6">{position.description}</p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start text-sm text-slate-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-sm text-slate-300">
                            <Heart className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-500/10 to-blue-500/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Don't See the Right Role?
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                We're always looking for talented individuals to join our team. 
                Send us your resume and let's discuss how you can contribute to our mission.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-green-500/25">
                  Submit Resume
                </button>
                <button className="px-8 py-4 border border-green-400/30 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-200">
                  Contact Recruiting
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}