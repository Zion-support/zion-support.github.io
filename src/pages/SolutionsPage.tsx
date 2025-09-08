import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brain,
  Shield,
  Cpu,
  Rocket,
  Zap,
  ArrowRight,
  Star,
  Users,
  Award,
  CheckCircle,
  Globe,
  Target,
  TrendingUp,
  Heart,
  Eye,
  Atom,
  Activity,
  Code,
  Database,
  Server,
  Network,
  BarChart3,
  Lock,
  Building,
  Briefcase,
  Newspaper,
  TestTube,
  GraduationCap,
  HelpCircle,
  Search,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  Instagram,
  Youtube,
  Calendar,
  Clock,
  DollarSign,
  Users2,
  Lightbulb,
  Handshake,
  BookOpen,
  Video,
  PenTool,
  Palette,
  Settings,
  Cog,
  Wrench,
  Tool,
  Hammer,
  Screwdriver,
  Ruler,
  Compass,
  Navigation,
  Compass2,
  Map,
  Location,
  Home,
  Building2,
  Factory,
  Warehouse,
  Store,
  Bank,
  CreditCard,
  PiggyBank,
  ChartLine,
  PieChart,
  TrendingDown,
  AlertTriangle,
  Info,
  AlertCircle,
  CheckCircle2,
  XCircle,
  MinusCircle,
  PlusCircle,
  Circle,
  Square,
  Triangle,
  Hexagon,
  Octagon,
  Star2,
  Heart2,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Laugh,
  Cry,
  Angry,
  Surprised,
  Wink,
  Tongue,
  Kiss,
  Wink2,
  Grin,
  Joy,
  Sunglasses,
  Confused,
  Neutral,
  Expressionless,
  Unamused,
  RollingEyes,
  Zany,
  Hugging,
  Nerd,
  Cool,
  Party,
  Sleepy,
  Sick,
  Vomiting,
  ExplodingHead,
  CowboyHatFace,
  DisguisedFace,
  PregnantWoman,
  BreastFeeding,
  PersonWithTurban,
  PersonWithSkullcap,
  WomanWithHeadscarf,
  PersonWithVeil,
  PersonWithCrown,
  PersonWithTiara,
  PersonWithGraduationCap,
  PersonWithTuxedo,
  PersonWithDress,
  PersonWithSuit,
  PersonWithTurban2,
  PersonWithSkullcap2,
  WomanWithHeadscarf2,
  PersonWithVeil2,
  PersonWithCrown2,
  PersonWithTiara2,
  PersonWithGraduationCap2,
  PersonWithTuxedo2,
  PersonWithDress2,
  PersonWithSuit2,
  Cloud,
  Wifi,
  Link,
  Truck,
  MessageCircle
} from 'lucide-react';

export function SolutionsPage() {
  const businessSolutions = [
    {
      title: 'Digital Transformation',
      description: 'Modernize your business infrastructure and processes for the digital age',
      icon: Rocket,
      features: ['Cloud Migration', 'Process Automation', 'Legacy System Modernization', 'Digital Workflows'],
      benefits: ['Increased Efficiency', 'Cost Reduction', 'Better Customer Experience', 'Competitive Advantage'],
      href: '/solutions/digital-transformation',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable, secure, and cost-effective cloud infrastructure and services',
      icon: Cloud,
      features: ['Multi-cloud Strategy', 'Serverless Architecture', 'DevOps Automation', 'Cost Optimization'],
      benefits: ['Scalability', 'Cost Savings', 'Improved Performance', 'Enhanced Security'],
      href: '/solutions/cloud-solutions',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets',
      icon: Shield,
      features: ['Zero Trust Security', 'Threat Detection', 'Compliance Management', 'Security Training'],
      benefits: ['Risk Mitigation', 'Regulatory Compliance', 'Business Continuity', 'Customer Trust'],
      href: '/solutions/cybersecurity',
      color: 'from-red-500 to-orange-600'
    },
    {
      title: 'Data Analytics',
      description: 'Transform data into actionable insights for better decision making',
      icon: BarChart3,
      features: ['Business Intelligence', 'Predictive Analytics', 'Data Visualization', 'Real-time Dashboards'],
      benefits: ['Data-Driven Decisions', 'Improved Performance', 'Customer Insights', 'Operational Efficiency'],
      href: '/solutions/data-analytics',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Enterprise Software',
      description: 'Custom software solutions tailored to your business needs',
      icon: Code,
      features: ['Custom Development', 'System Integration', 'API Development', 'Mobile Applications'],
      benefits: ['Tailored Solutions', 'Competitive Advantage', 'Process Optimization', 'Scalability'],
      href: '/solutions/enterprise-software',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Managed Services',
      description: 'Comprehensive IT management and support services',
      icon: Cog,
      features: ['24/7 Monitoring', 'Proactive Maintenance', 'Help Desk Support', 'Performance Optimization'],
      benefits: ['Reduced Downtime', 'Cost Predictability', 'Expert Support', 'Focus on Core Business'],
      href: '/solutions/managed-services',
      color: 'from-teal-500 to-blue-600'
    }
  ];

  const industrySolutions = [
    {
      name: 'Healthcare',
      icon: Heart,
      description: 'Digital health solutions for modern healthcare delivery',
      solutions: ['Electronic Health Records', 'Telemedicine Platforms', 'Patient Management Systems', 'Healthcare Analytics'],
      challenges: ['Data Security', 'Compliance Requirements', 'Interoperability', 'Patient Privacy']
    },
    {
      name: 'Finance',
      icon: DollarSign,
      description: 'Financial technology solutions for modern banking and fintech',
      solutions: ['Digital Banking Platforms', 'Risk Management Systems', 'Compliance Automation', 'Financial Analytics'],
      challenges: ['Regulatory Compliance', 'Security Threats', 'Legacy Systems', 'Customer Expectations']
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      description: 'Smart manufacturing and Industry 4.0 solutions',
      solutions: ['IoT Integration', 'Predictive Maintenance', 'Quality Control Systems', 'Supply Chain Optimization'],
      challenges: ['Legacy Equipment', 'Data Integration', 'Skill Gaps', 'Cybersecurity']
    },
    {
      name: 'Retail',
      icon: Store,
      description: 'Digital commerce and customer experience solutions',
      solutions: ['E-commerce Platforms', 'Customer Analytics', 'Inventory Management', 'Omnichannel Experience'],
      challenges: ['Digital Competition', 'Customer Expectations', 'Inventory Optimization', 'Data Security']
    },
    {
      name: 'Education',
      icon: GraduationCap,
      description: 'Educational technology for modern learning environments',
      solutions: ['Learning Management Systems', 'Virtual Classrooms', 'Student Analytics', 'Content Management'],
      challenges: ['Digital Divide', 'Engagement', 'Assessment', 'Accessibility']
    },
    {
      name: 'Transportation',
      icon: Truck,
      description: 'Logistics and transportation optimization solutions',
      solutions: ['Fleet Management', 'Route Optimization', 'Real-time Tracking', 'Supply Chain Analytics'],
      challenges: ['Fuel Costs', 'Regulations', 'Driver Shortages', 'Sustainability']
    }
  ];

  const solutionProcess = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs, challenges, and objectives to understand your requirements',
      icon: Search,
      activities: ['Business Process Review', 'Technology Assessment', 'Stakeholder Interviews', 'Requirements Gathering']
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our experts design a comprehensive solution architecture tailored to your specific needs',
      icon: PenTool,
      activities: ['Architecture Design', 'Technology Selection', 'Integration Planning', 'Security Planning']
    },
    {
      step: '03',
      title: 'Development & Implementation',
      description: 'We develop and implement your solution using industry best practices and agile methodologies',
      icon: Code,
      activities: ['Agile Development', 'Quality Assurance', 'Testing & Validation', 'Documentation']
    },
    {
      step: '04',
      title: 'Deployment & Training',
      description: 'We deploy your solution and provide comprehensive training to ensure successful adoption',
      icon: Rocket,
      activities: ['Production Deployment', 'User Training', 'Change Management', 'Go-live Support']
    },
    {
      step: '05',
      title: 'Support & Optimization',
      description: 'Ongoing support and continuous optimization to ensure your solution evolves with your business',
      icon: Settings,
      activities: ['24/7 Support', 'Performance Monitoring', 'Continuous Improvement', 'Technology Updates']
    }
  ];

  const successStories = [
    {
      company: 'Healthcare Provider',
      industry: 'Healthcare',
      challenge: 'Legacy systems causing inefficiencies and compliance risks',
      solution: 'Modernized EHR system with AI-powered analytics',
      results: ['40% reduction in administrative time', '99.9% compliance rate', 'Improved patient satisfaction'],
      icon: Heart
    },
    {
      company: 'Financial Services Firm',
      industry: 'Finance',
      challenge: 'Manual processes slowing down operations and increasing errors',
      solution: 'Automated workflow system with real-time monitoring',
      results: ['60% faster processing', '95% error reduction', 'Enhanced security compliance'],
      icon: DollarSign
    },
    {
      company: 'Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Unplanned downtime affecting production and profitability',
      solution: 'IoT-based predictive maintenance system',
      results: ['30% reduction in downtime', '25% cost savings', 'Improved equipment lifespan'],
      icon: Factory
    }
  ];

  return (
    <div className="min-h-screen bg-zion-slate-dark text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/20 via-zion-slate-darker to-zion-slate-dark"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Business <span className="text-zion-cyan">Solutions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8"
          >
            Comprehensive technology solutions designed to solve your business challenges and drive sustainable growth.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark font-semibold rounded-lg transition-all duration-300 group"
            >
              Get Solution Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/case-studies" 
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark font-semibold rounded-lg transition-all duration-300"
            >
              View Case Studies
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Business Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Business Solutions</h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              End-to-end technology solutions that address your core business challenges and unlock new opportunities.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-lg bg-zion-slate-darker border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/10"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${solution.color} mr-4`}>
                    <solution.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-zion-cyan transition-colors">{solution.title}</h3>
                </div>
                <p className="text-zion-slate-light mb-6">{solution.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-zion-cyan mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="h-4 w-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-zion-cyan mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                        <Star className="h-4 w-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  to={solution.href}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan/80 font-semibold group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Industry-Specific Solutions</h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Tailored solutions that address the unique challenges and opportunities in your industry.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-zion-slate-dark border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <industry.icon className="h-12 w-12 text-zion-cyan mr-4" />
                  <h3 className="text-xl font-semibold">{industry.name}</h3>
                </div>
                <p className="text-zion-slate-light mb-4">{industry.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-zion-cyan mb-2">Solutions:</h4>
                  <ul className="space-y-1">
                    {industry.solutions.map((solution, idx) => (
                      <li key={idx} className="text-sm text-zion-slate-light flex items-center">
                        <CheckCircle className="h-3 w-3 text-zion-cyan mr-2 flex-shrink-0" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-zion-cyan mb-2">Challenges We Address:</h4>
                  <ul className="space-y-1">
                    {industry.challenges.map((challenge, idx) => (
                      <li key={idx} className="text-sm text-zion-slate-light flex items-center">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full mr-2"></div>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Solution Process</h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful delivery and long-term value for your business.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-5 gap-8">
            {solutionProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {/* Connection line */}
                {index < solutionProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-zion-cyan/30 transform -translate-y-1/2 z-0"></div>
                )}
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-zion-slate-dark font-bold text-xl">
                    {step.step}
                  </div>
                  <div className="flex justify-center mb-4">
                    <step.icon className="h-8 w-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm text-zion-slate-light mb-4">{step.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-zion-cyan mb-2 text-sm">Activities:</h4>
                    <ul className="space-y-1">
                      {step.activities.map((activity, idx) => (
                        <li key={idx} className="text-xs text-zion-slate-light flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-1"></div>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Real results from real businesses that have transformed their operations with our solutions.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-zion-slate-dark border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <story.icon className="h-10 w-10 text-zion-cyan mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold">{story.company}</h3>
                    <p className="text-sm text-zion-cyan">{story.industry}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-zion-cyan mb-2">Challenge:</h4>
                  <p className="text-sm text-zion-slate-light">{story.challenge}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-zion-cyan mb-2">Solution:</h4>
                  <p className="text-sm text-zion-slate-light">{story.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-zion-cyan mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {story.results.map((result, idx) => (
                      <li key={idx} className="text-sm text-zion-slate-light flex items-center">
                        <CheckCircle className="h-3 w-3 text-zion-cyan mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-zion-slate-light mb-8"
          >
            Let's discuss how our solutions can address your specific challenges and drive measurable business outcomes.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark font-semibold rounded-lg transition-all duration-300 group"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark font-semibold rounded-lg transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}