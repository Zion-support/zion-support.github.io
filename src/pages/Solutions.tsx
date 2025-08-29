import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Building2, 
  Rocket, 
  Shield, 
  Heart, 
  TrendingUp, 
  Factory, 
  ShoppingCart, 
  GraduationCap, 
  Scale, 
  Users, 
  Globe, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Brain,
  Cloud,
  Cpu,
  Database,
  Lock,
  Zap,
  Target,
  BarChart3
} from 'lucide-react';

export default function Solutions() {
  const [activeIndustry, setActiveIndustry] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Globe, color: 'from-purple-500 to-pink-500' },
    { id: 'enterprise', name: 'Enterprise', icon: Building2, color: 'from-blue-500 to-cyan-500' },
    { id: 'healthcare', name: 'Healthcare', icon: Heart, color: 'from-red-500 to-pink-500' },
    { id: 'financial', name: 'Financial Services', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
    { id: 'manufacturing', name: 'Manufacturing', icon: Factory, color: 'from-orange-500 to-red-500' },
    { id: 'retail', name: 'Retail & E-commerce', icon: ShoppingCart, color: 'from-purple-500 to-indigo-500' },
    { id: 'education', name: 'Education', icon: GraduationCap, color: 'from-blue-500 to-indigo-500' },
    { id: 'legal', name: 'Legal Services', icon: Scale, color: 'from-gray-500 to-blue-500' },
    { id: 'startup', name: 'Startups', icon: Rocket, color: 'from-yellow-500 to-orange-500' },
    { id: 'government', name: 'Government', icon: Shield, color: 'from-indigo-500 to-purple-500' }
  ];

  const solutions = [
    // Enterprise Solutions
    {
      id: 'enterprise-digital-transformation',
      title: 'Enterprise Digital Transformation',
      description: 'Comprehensive digital transformation strategy and implementation for large organizations.',
      industry: 'enterprise',
      challenges: ['Legacy system modernization', 'Process automation', 'Data silo integration', 'Change management'],
      solutions: ['AI-powered workflow automation', 'Cloud migration strategy', 'Data governance framework', 'Employee training programs'],
      benefits: ['30% operational efficiency improvement', 'Reduced IT costs by 25%', 'Improved customer experience', 'Faster time to market'],
      technologies: ['AI/ML', 'Cloud Computing', 'Data Analytics', 'IoT', 'Blockchain'],
      icon: Building2,
      color: 'from-blue-500 to-cyan-500',
      href: '/solutions/enterprise-digital-transformation'
    },
    {
      id: 'enterprise-ai-platform',
      title: 'Enterprise AI Platform',
      description: 'Scalable AI infrastructure for enterprise-wide machine learning and automation.',
      industry: 'enterprise',
      challenges: ['AI talent shortage', 'Data quality issues', 'Model deployment complexity', 'Scalability concerns'],
      solutions: ['AI model management platform', 'Automated data pipeline', 'MLOps infrastructure', 'AI governance framework'],
      benefits: ['10x faster AI model deployment', 'Reduced AI project costs', 'Improved model accuracy', 'Centralized AI operations'],
      technologies: ['Machine Learning', 'MLOps', 'Data Engineering', 'Model Serving', 'AutoML'],
      icon: Brain,
      color: 'from-purple-500 to-cyan-500',
      href: '/solutions/enterprise-ai-platform'
    },

    // Healthcare Solutions
    {
      id: 'healthcare-ai-analytics',
      title: 'Healthcare AI Analytics Platform',
      description: 'AI-powered healthcare analytics for improved patient outcomes and operational efficiency.',
      industry: 'healthcare',
      challenges: ['Patient data privacy', 'Clinical decision support', 'Operational inefficiency', 'Cost management'],
      solutions: ['HIPAA-compliant AI platform', 'Predictive analytics', 'Process optimization', 'Resource allocation'],
      benefits: ['20% improvement in patient outcomes', '15% reduction in operational costs', 'Faster diagnosis', 'Better resource utilization'],
      technologies: ['AI/ML', 'Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'IoT'],
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      href: '/solutions/healthcare-ai-analytics'
    },
    {
      id: 'healthcare-telemedicine',
      title: 'Telemedicine & Remote Care',
      description: 'Comprehensive telemedicine platform with AI-powered diagnostics and remote monitoring.',
      industry: 'healthcare',
      challenges: ['Remote patient monitoring', 'Diagnostic accuracy', 'Healthcare accessibility', 'Regulatory compliance'],
      solutions: ['AI diagnostic tools', 'Remote monitoring devices', 'Secure video conferencing', 'Compliance management'],
      benefits: ['Improved healthcare access', 'Reduced hospital visits', 'Better patient engagement', 'Cost savings'],
      technologies: ['AI Diagnostics', 'IoT Devices', 'Video Conferencing', 'Mobile Apps', 'Cloud Security'],
      icon: Heart,
      color: 'from-red-500 to-orange-500',
      href: '/solutions/healthcare-telemedicine'
    },

    // Financial Services Solutions
    {
      id: 'fintech-ai-platform',
      title: 'FinTech AI Platform',
      description: 'AI-powered financial services platform for fraud detection, risk assessment, and customer insights.',
      industry: 'financial',
      challenges: ['Fraud detection', 'Risk management', 'Customer experience', 'Regulatory compliance'],
      solutions: ['Real-time fraud detection', 'AI risk scoring', 'Personalized services', 'Compliance automation'],
      benefits: ['99.9% fraud detection accuracy', '30% reduction in false positives', 'Improved customer satisfaction', 'Regulatory compliance'],
      technologies: ['Machine Learning', 'Real-time Analytics', 'Blockchain', 'API Integration', 'Cloud Security'],
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      href: '/solutions/fintech-ai-platform'
    },
    {
      id: 'financial-risk-management',
      title: 'AI-Powered Risk Management',
      description: 'Advanced risk management system using AI for real-time monitoring and predictive analytics.',
      industry: 'financial',
      challenges: ['Real-time risk monitoring', 'Predictive risk modeling', 'Regulatory reporting', 'Portfolio optimization'],
      solutions: ['Real-time risk dashboard', 'AI risk prediction', 'Automated reporting', 'Portfolio analytics'],
      benefits: ['Real-time risk visibility', 'Improved risk prediction', 'Automated compliance', 'Better investment decisions'],
      technologies: ['AI/ML', 'Real-time Analytics', 'Big Data', 'Cloud Computing', 'API Integration'],
      icon: Shield,
      color: 'from-blue-500 to-indigo-500',
      href: '/solutions/financial-risk-management'
    },

    // Manufacturing Solutions
    {
      id: 'industry-4-0-platform',
      title: 'Industry 4.0 & Smart Manufacturing',
      description: 'Comprehensive Industry 4.0 solution for smart factories and connected manufacturing.',
      industry: 'manufacturing',
      challenges: ['Equipment monitoring', 'Predictive maintenance', 'Quality control', 'Supply chain optimization'],
      solutions: ['IoT sensor network', 'AI predictive maintenance', 'Computer vision QC', 'Supply chain analytics'],
      benefits: ['25% reduction in downtime', '15% improvement in quality', '20% cost savings', 'Real-time visibility'],
      technologies: ['IoT', 'AI/ML', 'Computer Vision', 'Edge Computing', 'Cloud Analytics'],
      icon: Factory,
      color: 'from-orange-500 to-red-500',
      href: '/solutions/industry-4-0-platform'
    },
    {
      id: 'manufacturing-automation',
      title: 'Manufacturing Process Automation',
      description: 'AI-powered automation for manufacturing processes and quality control.',
      industry: 'manufacturing',
      challenges: ['Process optimization', 'Quality control', 'Resource allocation', 'Production planning'],
      solutions: ['Process automation', 'AI quality inspection', 'Resource optimization', 'Production scheduling'],
      benefits: ['30% productivity improvement', 'Reduced defects by 40%', 'Better resource utilization', 'Faster production'],
      technologies: ['Robotic Process Automation', 'AI/ML', 'Computer Vision', 'IoT', 'Cloud Computing'],
      icon: Cpu,
      color: 'from-gray-500 to-blue-500',
      href: '/solutions/manufacturing-automation'
    },

    // Retail & E-commerce Solutions
    {
      id: 'retail-ai-platform',
      title: 'Retail AI Platform',
      description: 'AI-powered retail platform for personalized shopping, inventory management, and customer insights.',
      industry: 'retail',
      challenges: ['Customer personalization', 'Inventory optimization', 'Customer retention', 'Omnichannel experience'],
      solutions: ['AI recommendation engine', 'Predictive inventory', 'Customer analytics', 'Unified commerce platform'],
      benefits: ['25% increase in sales', '20% reduction in inventory costs', 'Improved customer loyalty', 'Better omnichannel experience'],
      technologies: ['AI/ML', 'Recommendation Systems', 'Predictive Analytics', 'Mobile Apps', 'Cloud Computing'],
      icon: ShoppingCart,
      color: 'from-purple-500 to-indigo-500',
      href: '/solutions/retail-ai-platform'
    },
    {
      id: 'ecommerce-optimization',
      title: 'E-commerce Optimization',
      description: 'AI-powered e-commerce optimization for conversion rate improvement and customer experience.',
      industry: 'retail',
      challenges: ['Conversion rate optimization', 'Customer experience', 'Search optimization', 'Personalization'],
      solutions: ['AI-powered CRO', 'Personalized UX', 'Smart search', 'Customer journey optimization'],
      benefits: ['35% improvement in conversion', 'Better customer experience', 'Increased average order value', 'Reduced cart abandonment'],
      technologies: ['AI/ML', 'A/B Testing', 'Personalization', 'Search Optimization', 'Analytics'],
      icon: ShoppingCart,
      color: 'from-pink-500 to-purple-500',
      href: '/solutions/ecommerce-optimization'
    },

    // Education Solutions
    {
      id: 'edtech-ai-platform',
      title: 'EdTech AI Platform',
      description: 'AI-powered educational platform for personalized learning and student success.',
      industry: 'education',
      challenges: ['Personalized learning', 'Student engagement', 'Performance tracking', 'Administrative efficiency'],
      solutions: ['Adaptive learning paths', 'AI tutoring systems', 'Performance analytics', 'Administrative automation'],
      benefits: ['Improved learning outcomes', 'Higher student engagement', 'Better resource allocation', 'Reduced administrative burden'],
      technologies: ['AI/ML', 'Natural Language Processing', 'Learning Analytics', 'Mobile Apps', 'Cloud Computing'],
      icon: GraduationCap,
      color: 'from-blue-500 to-indigo-500',
      href: '/solutions/edtech-ai-platform'
    },

    // Legal Services Solutions
    {
      id: 'legal-ai-platform',
      title: 'Legal AI Platform',
      description: 'AI-powered legal research and document automation platform.',
      industry: 'legal',
      challenges: ['Legal research efficiency', 'Document automation', 'Compliance management', 'Case analysis'],
      solutions: ['AI legal research', 'Document generation', 'Compliance tracking', 'Case analytics'],
      benefits: ['80% faster legal research', 'Reduced document preparation time', 'Better compliance', 'Improved case outcomes'],
      technologies: ['AI/ML', 'Natural Language Processing', 'Document Processing', 'Analytics', 'Cloud Security'],
      icon: Scale,
      color: 'from-gray-500 to-blue-500',
      href: '/solutions/legal-ai-platform'
    },

    // Startup Solutions
    {
      id: 'startup-acceleration',
      title: 'Startup Technology Acceleration',
      description: 'Rapid technology development and deployment for startups and scale-ups.',
      industry: 'startup',
      challenges: ['Rapid development', 'Scalable architecture', 'Cost optimization', 'Time to market'],
      solutions: ['MVP development', 'Scalable cloud architecture', 'Cost-effective solutions', 'Agile development'],
      benefits: ['Faster time to market', 'Scalable technology foundation', 'Cost optimization', 'Competitive advantage'],
      technologies: ['Cloud Computing', 'Microservices', 'DevOps', 'AI/ML', 'Mobile Development'],
      icon: Rocket,
      color: 'from-yellow-500 to-orange-500',
      href: '/solutions/startup-acceleration'
    },

    // Government Solutions
    {
      id: 'government-digital-transformation',
      title: 'Government Digital Transformation',
      description: 'Digital transformation solutions for government agencies and public services.',
      industry: 'government',
      challenges: ['Legacy system modernization', 'Citizen experience', 'Security compliance', 'Operational efficiency'],
      solutions: ['Modern government platforms', 'Citizen portals', 'Security frameworks', 'Process automation'],
      benefits: ['Improved citizen services', 'Enhanced security', 'Operational efficiency', 'Cost savings'],
      technologies: ['Cloud Computing', 'AI/ML', 'Cybersecurity', 'API Integration', 'Mobile Apps'],
      icon: Shield,
      color: 'from-indigo-500 to-purple-500',
      href: '/solutions/government-digital-transformation'
    }
  ];

  const filteredSolutions = activeIndustry === 'all' 
    ? solutions 
    : solutions.filter(solution => solution.industry === activeIndustry);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Industry <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Solutions</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Tailored technology solutions designed for your specific industry challenges. 
            From healthcare to finance, manufacturing to retail, we deliver results that drive business transformation.
          </p>
          
          {/* Contact Information */}
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-6 mb-8 max-w-4xl mx-auto backdrop-blur-sm">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-6 h-6 text-cyan-400 mb-2" />
                <span className="text-white font-semibold">+1 302 464 0950</span>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-6 h-6 text-cyan-400 mb-2" />
                <span className="text-white font-semibold">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-6 h-6 text-cyan-400 mb-2" />
                <span className="text-white font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Industry Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveIndustry(industry.id)}
              className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                activeIndustry === industry.id
                  ? `bg-gradient-to-r ${industry.color} text-white shadow-lg`
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <industry.icon className="w-5 h-5 mr-2" />
              {industry.name}
            </button>
          ))}
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {filteredSolutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-600"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${solution.color} flex items-center justify-center mb-6`}>
                <solution.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">{solution.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Target className="w-4 h-4 text-cyan-400 mr-2" />
                    Key Challenges
                  </h4>
                  <ul className="space-y-2">
                    {solution.challenges.map((challenge, idx) => (
                      <li key={idx} className="text-slate-300 text-sm flex items-start">
                        <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Zap className="w-4 h-4 text-yellow-400 mr-2" />
                    Our Solutions
                  </h4>
                  <ul className="space-y-2">
                    {solution.solutions.map((sol, idx) => (
                      <li key={idx} className="text-slate-300 text-sm flex items-start">
                        <Star className="w-3 h-3 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                        {sol}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <BarChart3 className="w-4 h-4 text-green-400 mr-2" />
                  Expected Benefits
                </h4>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-slate-300 text-sm flex items-start">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {solution.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-700 text-cyan-400 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to={solution.href}
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-slate-300 mb-6">
              Let's discuss how our industry-specific solutions can address your unique challenges 
              and drive measurable business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Schedule Industry Consultation
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Get Custom Quote
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
