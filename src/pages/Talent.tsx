import React from 'react';
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { 
  Users, 
  Briefcase, 
  Star, 
  Zap, 
  Brain, 
  Cloud, 
  BarChart3, 
  Target,
  Building,
  Activity,
  Eye,
  Cpu,
  Network,
  Shield,
  TrendingUp,
  Heart,
  Globe,
  Phone,
  Mail,
  MapPin,
  Award,
  GraduationCap,
  MessageCircle
} from 'lucide-react';

export default function Talent() {
  const talentServices = [
    {
      icon: Users,
      title: 'Expert Teams',
      description: 'Assembled teams of specialized professionals for complex projects.',
      benefits: ['Cross-functional expertise', 'Proven track record', 'Scalable teams', 'Industry experience']
    },
    {
      icon: Brain,
      title: 'AI Specialists',
      description: 'Experts in artificial intelligence, machine learning, and data science.',
      benefits: ['Advanced AI skills', 'ML model development', 'Data engineering', 'Algorithm optimization']
    },
    {
      icon: Cloud,
      title: 'Cloud Engineers',
      description: 'Certified professionals for cloud infrastructure and DevOps.',
      benefits: ['Multi-cloud expertise', 'Infrastructure as code', 'CI/CD pipelines', 'Security best practices']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Experts',
      description: 'Security professionals for threat detection and incident response.',
      benefits: ['Penetration testing', 'Security audits', 'Incident response', 'Compliance expertise']
    }
  ];

  const solutions = [
    {
      category: 'Project Teams',
      services: [
        'Full-stack development teams',
        'DevOps and infrastructure teams',
        'Data science and analytics teams',
        'Cybersecurity and compliance teams',
        'AI and machine learning teams'
      ]
    },
    {
      category: 'Individual Experts',
      services: [
        'Senior developers and architects',
        'Project managers and scrum masters',
        'Business analysts and consultants',
        'UX/UI designers and researchers',
        'Quality assurance engineers'
      ]
    },
    {
      category: 'Specialized Skills',
      services: [
        'Quantum computing specialists',
        'Blockchain developers',
        'IoT and edge computing experts',
        'Space technology engineers',
        'Green technology consultants'
      ]
    },
    {
      category: 'Leadership & Strategy',
      services: [
        'CTO and technology advisors',
        'Digital transformation consultants',
        'Innovation strategists',
        'Technology architects',
        'Program directors'
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Quick access to pre-vetted talent for immediate project needs.'
    },
    {
      icon: Star,
      title: 'Proven Excellence',
      description: 'All talent is thoroughly screened and has proven track records.'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Access to talent from around the world with diverse expertise.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous selection process ensures only top-tier professionals.'
    }
  ];

  const industries = [
    'Healthcare & Life Sciences',
    'Financial Services',
    'Manufacturing & Industry 4.0',
    'Retail & E-commerce',
    'Energy & Sustainability',
    'Transportation & Logistics',
    'Media & Entertainment',
    'Government & Defense'
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SEO 
        title="Talent Solutions | Zion Tech Group" 
        description="Access world-class technology talent including AI specialists, cloud engineers, cybersecurity experts, and specialized project teams." 
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-pink-900/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 via-pink-500 to-red-400 rounded-2xl flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent mb-6">
              Talent Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Access world-class technology talent including AI specialists, cloud engineers, 
              cybersecurity experts, and specialized project teams for your organization.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
              >
                Find Talent
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-400/30 text-purple-400 font-semibold rounded-xl hover:bg-purple-400/10 transition-all duration-300"
              >
                Join Our Network
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Talent Services */}
      <section className="py-20 bg-slate-900/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Talent Services</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive talent solutions designed to meet the diverse needs of modern organizations, 
              from individual experts to complete project teams.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {talentServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-purple-400/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-400">
                      <Star className="w-4 h-4 text-purple-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Talent Solutions</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Flexible talent solutions that can be customized to meet your specific project requirements 
              and organizational needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <Target className="w-6 h-6 text-purple-400 mr-3" />
                  {solution.category}
                </h3>
                <ul className="space-y-3">
                  {solution.services.map((service, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Talent?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our talent solutions provide exceptional value through quality, flexibility, 
              and proven expertise across diverse technology domains.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-purple-400/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mr-4">
                    <benefit.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                </div>
                <p className="text-slate-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Industry Expertise</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our talent network spans across diverse industries, providing specialized expertise 
              for sector-specific challenges and opportunities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center hover:border-purple-400/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Building className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-400/30 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Access Top Talent?</h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Connect with our talent network and find the perfect professionals 
                to drive your projects and initiatives forward.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                >
                  Find Talent
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-purple-400/30 text-purple-400 font-semibold rounded-xl hover:bg-purple-400/10 transition-all duration-300"
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-slate-900/50">
        <div className="container-responsive">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">Contact Our Talent Team</h3>
            <p className="text-slate-300 mb-6">
              Ready to explore our talent solutions? Get in touch with our talent acquisition specialists.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-slate-300">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-purple-400 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-purple-400 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-purple-400 mr-2" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}