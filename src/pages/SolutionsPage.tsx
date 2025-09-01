import { Link } from 'react - router - dom.ts';
import React from 'react.ts';
export function SolutionsPage (...args: any[]) : any {
import {
import { motion } from 'framer - motion.ts';


  Building,
  Target,
  Brain,
  Atom,
  Eye,
  Shield,
  Rocket,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Heart,
  Briefcase,
  ShoppingCart,
  Cpu,
  Database,
  Network,
  Cloud,
  Zap,
  TrendingUp,
  BarChart3,
  Lock,
  Globe,
  Phone,
  Mail,
  MapPin,
} from 'lucide - react.ts';

  const solutions = [
    {
      title: 'Enterprise Solutions',
      description: 'Comprehensive technology solutions for large enterprises',
      icon: Building,
      color: 'from - blue - 500 to - indigo - 600',
      features: [
        'Scalable Infrastructure',
        'Enterprise Security',
        'Compliance Management',
        '24 / 7 Support',
        'Custom Development',
        'Integration Services',
      ],
      industries: [
        'Finance',
        'Healthcare',
        'Manufacturing',
        'Retail',
        'Technology',
      ],
    },
    {
      title: 'AI Business Intelligence',
      description:
        'Transform data into actionable insights with AI - powered analytics',
      icon: Brain,
      color: 'from - purple - 500 to - pink - 600',
      features: [
        'Predictive Analytics',
        'Real - time Dashboards',
        'Machine Learning Models',
        'Data Visualization',
        'Automated Reporting',
        'Natural Language Querying',
      ],
      industries: [
        'Finance',
        'Healthcare',
        'E - commerce',
        'Marketing',
        'Operations',
      ],
    },
    {
      title: 'Quantum AI Platform',
      description:
        'Revolutionary computing power combining quantum and AI technologies',
      icon: Atom,
      color: 'from - cyan - 500 to - blue - 600',
      features: [
        'Quantum Algorithms',
        'AI Optimization',
        'Hybrid Computing',
        'Quantum Security',
        'Performance Analytics',
        'Scalable Architecture',
      ],
      industries: [
        'Research',
        'Finance',
        'Pharmaceuticals',
        'Logistics',
        'Energy',
      ],
    },
    {
      title: 'Digital Twin Solutions',
      description:
        'Create virtual replicas of physical systems for optimization',
      icon: Eye,
      color: 'from - green - 500 to - teal - 600',
      features: [
        'Real - time Monitoring',
        'Predictive Maintenance',
        'Simulation & Testing',
        'Performance Optimization',
        'Remote Management',
        'Data Integration',
      ],
      industries: [
        'Manufacturing',
        'Healthcare',
        'Smart Cities',
        'Transportation',
        'Energy',
      ],
    },
    {
      title: 'Zero Trust Security',
      description:
        'Advanced security framework for modern digital environments',
      icon: Shield,
      color: 'from - red - 500 to - orange - 600',
      features: [
        'Identity Verification',
        'Continuous Monitoring',
        'Threat Detection',
        'Access Control',
        'Compliance Tools',
        'Incident Response',
      ],
      industries: [
        'Finance',
        'Healthcare',
        'Government',
        'Technology',
        'Education',
      ],
    },
    {
      title: 'Cloud Transformation',
      description: 'Modernize your infrastructure with cloud - native solutions',
      icon: Cloud,
      color: 'from - indigo - 500 to - purple - 600',
      features: [
        'Cloud Migration',
        'DevOps Automation',
        'Microservices',
        'Container Orchestration',
        'Cost Optimization',
        'Security & Compliance',
      ],
      industries: [
        'Technology',
        'Finance',
        'Healthcare',
        'Retail',
        'Manufacturing',
      ],
    },
  ];

  const industries = [
    {
      name: 'Healthcare',
      icon: Heart,
      description:
        'AI - powered diagnostics, patient care, and operational efficiency',
      solutions: [
        'AI Healthcare Platform',
        'Digital Twin',
        'Cybersecurity',
        'Data Analytics',
      ],
    },
    {
      name: 'Finance',
      icon: TrendingUp,
      description: 'Risk management, fraud detection, and algorithmic trading',
      solutions: [
        'AI Business Intelligence',
        'Quantum AI Platform',
        'Zero Trust Security',
        'Cloud Solutions',
      ],
    },
    {
      name: 'Manufacturing',
      icon: Cpu,
      description:
        'Smart factories, predictive maintenance, and quality control',
      solutions: [
        'Digital Twin',
        'IoT Solutions',
        'AI Analytics',
        'Robotics Integration',
      ],
    },
    {
      name: 'Retail',
      icon: ShoppingCart,
      description:
        'Customer experience, inventory management, and personalization',
      solutions: [
        'AI Marketing',
        'Data Analytics',
        'E - commerce Platform',
        'Customer Insights',
      ],
    },
    {
      name: 'Technology',
      icon: Zap,
      description:
        'Software development, infrastructure, and digital transformation',
      solutions: [
        'Cloud & DevOps',
        'API Development',
        'Cybersecurity',
        'AI Solutions',
      ],
    },
    {
      name: 'Government',
      icon: Building,
      description: 'Digital services, security, and citizen engagement',
      solutions: [
        'Cybersecurity',
        'Data Analytics',
        'Cloud Infrastructure',
        'AI Services',
      ],
    },
  ];

  const stats = [
    { number: '500+', label: 'Solutions Deployed', icon: Target },
    { number: '50+', label: 'Industries Served', icon: Building },
    { number: '99.9%', label: 'Success Rate', icon: Star },
    { number: '24 / 7', label: 'Support Available', icon: Users },
  ];

  return (<div className="min - h-screen py - 8">
      <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">
        {/* Page Header */}
        <div className="text - center mb - 16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text - 5xl font - bold text - white mb - 6">
              Industry Solutions
            </h1>
            <p className="text - xl text - gray - 400 max - w-3xl mx - auto leading - relaxed">
              Tailored technology solutions designed to address the unique
              challenges and opportunities in your industry.
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid grid - cols - 2 md: anygrid - cols - 4 gap - 8 mb - 16">
          {stats.map ( (stat, index) => (<motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text - center"
            >
              <div className="flex justify - center mb - 4">
                <div className="w - 16 h - 16 bg - gradient - to - r from - cyan - 500 to - blue - 600 rounded - full flex items - center justify - center">
                  <stat.icon className="w - 8 h - 8 text - white" />
                </div>
              </div>
              <div className="text - 3xl font - bold text - white mb - 2">
                {stat.number}
              </div>
              <div className="text - gray - 400">{stat.label}</div>
            </motion.div>) ) }
        </div>

        {/* Solutions Grid */}
        <div className="mb - 20">
          <h2 className="text - 3xl font - bold text - white mb - 12 text - center">
            Our Solutions
          </h2>
          <div className="grid grid - cols - 1 md: anygrid - cols - 2 lg:grid - cols - 3 gap - 8">
            {solutions.map ( (solution, index) => (<motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg - gray - 800 rounded - xl p - 8 hover:bg - gray - 700 transition - all duration - 300 border border - gray - 700 hover:border - cyan - 500 / 30 group"
              >
                <div className="flex items - center space - x-4 mb - 6">
                  <div
                    className={`w - 16 h - 16 bg - gradient - to - r ${solution.color} rounded - xl flex items - center justify - center group - hover:scale - 110 transition - transform duration - 300`}
                  >
                    <solution.icon className="w - 8 h - 8 text - white" />
                  </div>
                  <div>
                    <h3 className="text - 2xl font - bold text - white">
                      {solution.title}
                    </h3>
                  </div>
                </div>

                <p className="text - gray - 400 mb - 6 leading - relaxed">
                  {solution.description}
                </p>

                <div className="space - y-3 mb - 6">
                  {solution.features
                    .slice (0, 4) .map ( (feature, featureIndex) => (<div
                        key={featureIndex}
                        className="flex items - center space - x-2 text - sm text - gray - 300"
                      >
                        <CheckCircle className="w - 4 h - 4 text - cyan - 400" />
                        <span>{feature}</span>
                      </div>) ) }
                </div>

                <div className="mb - 6">
                  <h4 className="text - sm font - semibold text - gray - 400 mb - 2">
                    Industries:
                  </h4>
                  <div className="flex flex - wrap gap - 2">
                    {solution.industries
                      .slice (0, 3) .map ( (industry, industryIndex) => (<span
                          key={industryIndex}
                          className="px - 2 py - 1 bg - gray - 700 text - gray - 300 text - xs rounded"
                        >
                          {industry}
                        </span>) ) }
                  </div>
                </div>

                <Link
                  to="/services"
                  className="inline - flex items - center space - x-2 text - cyan - 400 hover:text - cyan - 300 transition - colors font - medium group - hover:translate - x-1 transition - transform"
                >
                  <span > Learn More</span>
                  <ArrowRight className="w - 4 h - 4" />
                </Link>
              </motion.div>) ) }
          </div>
        </div>

        {/* Industries Section */}
        <div className="mb - 20">
          <h2 className="text - 3xl font - bold text - white mb - 12 text - center">
            Industries We Serve
          </h2>
          <div className="grid grid - cols - 1 md: anygrid - cols - 2 lg:grid - cols - 3 gap - 8">
            {industries.map ( (industry, index) => (<motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg - gray - 800 rounded - xl p - 8 border border - gray - 700 hover:border - cyan - 500 / 30 transition - all duration - 300"
              >
                <div className="flex items - center space - x-4 mb - 6">
                  <div className="w - 16 h - 16 bg - gradient - to - r from - cyan - 500 to - blue - 600 rounded - xl flex items - center justify - center">
                    <industry.icon className="w - 8 h - 8 text - white" />
                  </div>
                  <h3 className="text - 2xl font - bold text - white">
                    {industry.name}
                  </h3>
                </div>

                <p className="text - gray - 400 mb - 6 leading - relaxed">
                  {industry.description}
                </p>

                <div className="space - y-2">
                  <h4 className="text - sm font - semibold text - gray - 400 mb - 2">
                    Key Solutions: any
                  </h4>
                  {industry.solutions.map ( (solution, solutionIndex) => (<div
                      key={solutionIndex}
                      className="flex items - center space - x-2 text - sm text - gray - 300"
                    >
                      <div className="w - 2 h - 2 bg - cyan - 400 rounded - full"></div>
                      <span>{solution}</span>
                    </div>) ) }
                </div>
              </motion.div>) ) }
          </div>
        </div>

        {/* New Services Showcase CTA */}
        <div className="text - center mb - 16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg - gradient - to - r from - purple - 600 to - pink - 600 rounded - 2xl p - 12"
          >
            <h2 className="text - 3xl font - bold text - white mb - 4">
              Explore Our Revolutionary New Services 2025
            </h2>
            <p className="text - xl text - purple - 100 mb - 8 max - w-3xl mx - auto">
              Discover our latest cutting - edge micro SAAS services, AI - powered
              platforms, and emerging technology solutions. Each service is
              designed with proven ROI and market - leading capabilities.
            </p>

            <div className="flex flex - col sm:flex - row gap - 4 justify - center">
              <Link
                to="/new - services - 2025"
                className="inline - flex items - center space - x-2 px - 8 py - 4 bg - white text - purple - 600 rounded - lg hover:bg - gray - 100 transition - all duration - 200 font - semibold text - lg shadow - lg hover:shadow - xl transform hover:scale - 105"
              >
                <span > Explore New Services</span>
                <ArrowRight className="w - 5 h - 5" />
              </Link>
              <Link
                to="/contact"
                className="inline - flex items - center space - x-2 px - 8 py - 4 bg - transparent text - white rounded - lg hover:bg - white / 10 transition - all duration - 200 font - semibold text - lg border - 2 border - white"
              >
                <span > Contact Sales</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <div className="text - center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg - gradient - to - r from - cyan - 600 to - blue - 700 rounded - 2xl p - 12"
          >
            <h2 className="text - 3xl font - bold text - white mb - 4">
              Ready to Transform Your Industry?
            </h2>
            <p className="text - xl text - cyan - 100 mb - 8 max - w-2xl mx - auto">
              Let's discuss how our industry - specific solutions can address your
              unique challenges
            </p>

            <div className="flex flex - col sm:flex - row gap - 4 justify - center">
              <Link
                to="/contact"
                className="inline - flex items - center space - x-2 px - 8 py - 4 bg - white text - cyan - 600 rounded - lg hover:bg - gray - 100 transition - all duration - 200 font - semibold text - lg shadow - lg hover:shadow - xl transform hover:scale - 105"
              >
                <span > Get Started Today</span>
                <ArrowRight className="w - 5 h - 5" />
              </Link>
              <Link
                to="/request - quote"
                className="inline - flex items - center space - x-2 px - 8 py - 4 bg - transparent text - white rounded - lg hover:bg - white / 10 transition - all duration - 200 font - semibold text - lg border - 2 border - white"
              >
                <span > Request a Quote</span>
              </Link>
            </div>

            <div className="mt - 8 text - cyan - 100">
              <div className="flex items - center justify - center space - x-6 text - sm">
                <div className="flex items - center space - x-2">
                  <Phone className="w - 4 h - 4" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items - center space - x-2">
                  <Mail className="w - 4 h - 4" />
                  <span > kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items - center space - x-2">
                  <MapPin className="w - 4 h - 4" />
                  <span > 364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>) ;
}
