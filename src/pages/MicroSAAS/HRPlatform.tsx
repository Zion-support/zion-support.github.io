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
  UserCheck,
  Lightbulb,
  Rocket,
  Brain,
  FileText,
  Calendar
} from 'lucide-react';

const HRPlatform = () => {
  const features = [
    {
      title: 'Recruitment & Hiring',
      description: 'Streamline your hiring process with AI-powered candidate screening.',
      icon: UserCheck,
      benefits: ['Job Posting', 'Candidate Screening', 'Interview Scheduling', 'Applicant Tracking']
    },
    {
      title: 'Employee Management',
      description: 'Comprehensive employee lifecycle management and HR operations.',
      icon: Users,
      benefits: ['Employee Onboarding', 'Performance Reviews', 'Time Tracking', 'Leave Management']
    },
    {
      title: 'Payroll & Benefits',
      description: 'Automated payroll processing and benefits administration.',
      icon: FileText,
      benefits: ['Payroll Processing', 'Tax Management', 'Benefits Administration', 'Compliance Reporting']
    },
    {
      title: 'HR Analytics',
      description: 'Data-driven insights for better HR decision making.',
      icon: BarChart3,
      benefits: ['Employee Analytics', 'Turnover Analysis', 'Performance Metrics', 'Predictive Insights']
    }
  ];

  const benefits = [
    {
      title: 'Improved Efficiency',
      description: 'Automate HR processes and reduce administrative overhead.',
      icon: Zap
    },
    {
      title: 'Better Employee Experience',
      description: 'Provide self-service tools and streamlined processes for employees.',
      icon: Users
    },
    {
      title: 'Compliance Ready',
      description: 'Stay compliant with labor laws and regulations automatically.',
      icon: Shield
    },
    {
      title: 'Data-Driven Decisions',
      description: 'Make informed HR decisions based on real-time analytics and insights.',
      icon: BarChart3
    }
  ];

  const modules = [
    'Recruitment',
    'Onboarding',
    'Performance Management',
    'Time & Attendance',
    'Payroll',
    'Benefits',
    'Learning & Development',
    'Employee Self-Service'
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
              <span className="text-zion-cyan font-medium">HR Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              HR
              <span className="text-gradient"> Platform</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Transform your HR operations with our comprehensive platform. Streamline 
              processes, improve employee experience, and make data-driven decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-neon px-8 py-4 text-lg">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              HR Platform Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our comprehensive HR platform provides everything you need to manage your 
              workforce efficiently and effectively.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                
                <p className="text-zion-slate-light mb-6 text-lg">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {benefit}
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
              Why Choose HR Platform?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our platform delivers measurable business value through improved HR efficiency, 
              better employee experience, and compliance automation.
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

      {/* Modules Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Platform Modules
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our modular HR platform allows you to choose the features you need and 
              scale as your business grows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <motion.div
                key={module}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium">{module}</p>
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
              Ready to Transform Your HR?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Start your free trial today and discover how our HR platform can streamline 
              your operations and improve employee experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Start Free Trial
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

export default HRPlatform;