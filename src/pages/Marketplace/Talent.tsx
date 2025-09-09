import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Zap, 
  Target, 
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Globe,
  Shield,
  Cloud,
  BarChart3,
  Cpu,
  UserCheck,
  Rocket,
  Brain,
  TrendingUp,
  Briefcase
} from 'lucide-react';

const Talent = () => {
  const categories = [
    {
      title: 'Technology Experts',
      description: 'Skilled professionals in software development, IT, and emerging technologies.',
      icon: Cpu,
      roles: ['Software Developers', 'DevOps Engineers', 'Data Scientists', 'AI Specialists']
    },
    {
      title: 'Business Consultants',
      description: 'Experienced consultants for business strategy and digital transformation.',
      icon: Brain,
      roles: ['Strategy Consultants', 'Digital Transformation', 'Process Optimization', 'Change Management']
    },
    {
      title: 'Project Managers',
      description: 'Certified project managers for complex technology implementations.',
      icon: UserCheck,
      roles: ['Agile Coaches', 'Scrum Masters', 'Program Managers', 'Technical PMs']
    },
    {
      title: 'Specialized Skills',
      description: 'Experts in cybersecurity, cloud computing, and emerging technologies.',
      icon: Shield,
      roles: ['Cybersecurity Experts', 'Cloud Architects', 'Blockchain Developers', 'IoT Specialists']
    }
  ];

  const benefits = [
    {
      title: 'Verified Experts',
      description: 'All talent is thoroughly vetted and verified for quality.',
      icon: Shield
    },
    {
      title: 'Flexible Engagement',
      description: 'Choose from various engagement models to suit your needs.',
      icon: Target
    },
    {
      title: 'Quick Access',
      description: 'Access to pre-vetted talent within 24-48 hours.',
      icon: Zap
    },
    {
      title: 'Cost Effective',
      description: 'Competitive rates and flexible pricing options.',
      icon: Star
    }
  ];

  const services = [
    'Talent Sourcing',
    'Skills Assessment',
    'Background Verification',
    'Contract Management',
    'Performance Monitoring',
    'Payment Processing',
    'Dispute Resolution',
    'Ongoing Support'
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full px-6 py-3 mb-8">
              <Users className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-cyan font-medium">Talent Marketplace</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Talent
              <span className="text-gradient"> Marketplace</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Connect with top technology talent and business experts through our 
              comprehensive marketplace. Find the skills you need to drive success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Find Talent
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Join as Talent
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Talent Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our diverse talent categories, each offering specialized expertise 
              to meet your business and technology needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                <p className="text-zion-slate-light mb-6 text-lg">
                  {category.description}
                </p>
                
                <ul className="space-y-2">
                  {category.roles.map((role, roleIndex) => (
                    <li key={roleIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {role}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Talent Marketplace?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our talent marketplace delivers exceptional value through quality assurance, 
              flexible engagement, and comprehensive support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive talent marketplace services designed to streamline the 
              process of finding and engaging top talent.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium">{service}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Find Top Talent?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Start your search today and connect with verified experts who can 
              drive your business success and technology innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Find Talent
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Talent;