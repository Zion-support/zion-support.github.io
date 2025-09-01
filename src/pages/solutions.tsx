import React, { useState } from 'react';'
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
  Cpu,
  Network,
  Code,
  Rocket,
  BarChart3,
  FileImage,
  MessageCircle,
  Video,
  FileText,
  Heart,
  PanelLeft,
  ShoppingCart,
  Settings,
  CheckCircle,
  ArrowRight,
  Play,
  Heart as HeartIcon,
  DollarSign,
  Truck,
  BookOpen,
  Atom,
  Sparkles,
  Target,'
  Award} from 'lucide-react';'
import { SEO } from '@/components/SEO';

const solutionCategories = [
  {
'
    id: 'ai-ml','
    name: 'AI & Machine Learning',
    icon: Brain,
    description:'
      'Transform your business with intelligent automation and predictive insights','
    color: 'from-purple-500 to-indigo-600',
    solutions: [
      {
'
        name: 'AI-Powered Analytics',
        description:'
          'Advanced analytics with machine learning algorithms for deeper insights',
        features: ['
          'Predictive modeling','
          'Real-time processing','
          'Custom dashboards',
        ],'
        pricing: '$2,500/month'},
      {
'
        name: 'Intelligent Automation',
        description:'
          'Automate complex workflows with AI decision-making capabilities',
        features: ['
          'Process automation','
          'Smart routing','
          'Performance optimization',
        ],'
        pricing: '$3,200/month'},
    ]},
  {
'
    id: 'cybersecurity','
    name: 'Cybersecurity',
    icon: Shield,
    description:'
      'Protect your digital assets with enterprise-grade security solutions','
    color: 'from-red-500 to-pink-600',
    solutions: [
      {
'
        name: 'Threat Detection & Response',
        description:'
          'Advanced threat detection with automated response capabilities',
        features: ['
          'Real-time monitoring','
          'AI-powered analysis','
          'Incident response',
        ],'
        pricing: '$4,100/month'},
      {
'
        name: 'Identity & Access Management',
        description:'
          'Comprehensive IAM solution for secure user access control',
        features: ['
          'Multi-factor authentication','
          'Role-based access','
          'Audit logging',
        ],'
        pricing: '$2,800/month'},
    ]},
  {
'
    id: 'cloud-infrastructure','
    name: 'Cloud Infrastructure',
    icon: Cloud,'
    description: 'Scalable and reliable cloud solutions for modern businesses','
    color: 'from-blue-500 to-cyan-600',
    solutions: [
      {
'
        name: 'Cloud Migration',
        description:'
          'Seamless migration to cloud platforms with minimal downtime',
        features: ['
          'Assessment planning','
          'Data migration','
          'Performance optimization',
        ],'
        pricing: '$15,000+'},
      {
'
        name: 'DevOps Automation',
        description:'
          'Streamline development and deployment with CI/CD pipelines',
        features: ['
          'Automated testing','
          'Deployment automation','
          'Monitoring tools',
        ],'
        pricing: '$3,500/month'},
    ]},
  {
'
    id: 'data-analytics','
    name: 'Data Analytics',
    icon: BarChart3,
    description:'
      'Turn your data into actionable insights and strategic decisions','
    color: 'from-green-500 to-emerald-600',
    solutions: [
      {
'
        name: 'Business Intelligence',
        description:'
          'Comprehensive BI solutions for data-driven decision making',
        features: ['
          'Interactive dashboards','
          'Data visualization','
          'Report automation',
        ],'
        pricing: '$2,200/month'},
      {
'
        name: 'Data Engineering','
        description: 'Build robust data pipelines and warehousing solutions','
        features: ['ETL processes', 'Data modeling', 'Quality assurance'],'
        pricing: '$4,500/month'},
    ]},
];

const industrySolutions = [
  {
'
    id: 'healthcare','
    name: 'Healthcare',
    icon: HeartIcon,'
    description: 'Innovative solutions for modern healthcare challenges','
    color: 'from-pink-500 to-rose-600',
    solutions: [
      {
'
        name: 'Electronic Health Records',
        description:'
          'Secure and compliant EHR systems with AI-powered insights','
        features: ['HIPAA compliance', 'AI diagnostics', 'Patient portal'],'
        pricing: '$5,200/month'},
      {
'
        name: 'Telemedicine Platform','
        description: 'Complete telehealth solution for remote patient care',
        features: ['
          'Video consultations','
          'Appointment scheduling','
          'Prescription management',
        ],'
        pricing: '$3,800/month'},
    ]},
  {
'
    id: 'finance','
    name: 'Financial Services',
    icon: DollarSign,'
    description: 'Secure and compliant financial technology solutions','
    color: 'from-yellow-500 to-orange-600',
    solutions: [
      {
'
        name: 'Fraud Detection','
        description: 'AI-powered fraud detection and prevention systems','
        features: ['Real-time monitoring', 'Machine learning', 'Risk scoring'],'
        pricing: '$6,500/month'},
      {
'
        name: 'Regulatory Compliance','
        description: 'Automated compliance monitoring and reporting',
        features: ['
          'Regulation tracking','
          'Automated reporting','
          'Audit trails',
        ],'
        pricing: '$4,200/month'},
    ]},
  {
'
    id: 'manufacturing','
    name: 'Manufacturing',
    icon: Building,'
    description: 'Smart manufacturing solutions for Industry 4.0','
    color: 'from-gray-500 to-slate-600',
    solutions: [
      {
'
        name: 'Predictive Maintenance',
        description:'
          'IoT-based predictive maintenance for manufacturing equipment',
        features: ['
          'Sensor integration','
          'ML predictions','
          'Maintenance scheduling',
        ],'
        pricing: '$3,900/month'},
      {
'
        name: 'Quality Control','
        description: 'AI-powered quality control and defect detection',
        features: ['
          'Computer vision','
          'Real-time monitoring','
          'Quality metrics',
        ],'
        pricing: '$4,800/month'},
    ]},
  {
'
    id: 'retail','
    name: 'Retail & E-commerce',
    icon: ShoppingCart,'
    description: 'Digital transformation solutions for modern retail','
    color: 'from-indigo-500 to-purple-600',
    solutions: [
      {
'
        name: 'Customer Analytics','
        description: 'Comprehensive customer behavior analysis and insights','
        features: ['Behavior tracking', 'Personalization', 'ROI optimization'],'
        pricing: '$2,900/month'},
      {
'
        name: 'Inventory Management','
        description: 'Smart inventory management with demand forecasting',
        features: ['
          'Demand prediction','
          'Stock optimization','
          'Automated reordering',
        ],'
        pricing: '$2,100/month'},
    ]},
];

const Solutions: React.FC = (): JSX.Element => {
'
  const [selectedIndustry, setSelectedIndustry] = useState('all');'
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories ='
    selectedIndustry === 'all'
      ? solutionCategories
      : solutionCategories.filter(cat =>
          industrySolutions
            .find(ind => ind.id === selectedIndustry)
            ?.solutions.some(sol =>
              sol.name.toLowerCase().includes(cat.name.toLowerCase())
            )
        );

  const filteredIndustries ='
    selectedCategory === 'all'
      ? industrySolutions
      : industrySolutions.filter(ind =>
          ind.solutions.some(sol =>
            sol.name.toLowerCase().includes(selectedCategory.toLowerCase())
          )
        );

  return()
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <SEO"
        title="Solutions - Zion Tech Group""
        description="Comprehensive technology solutions for modern businesses. AI, cybersecurity, cloud infrastructure, and industry-specific solutions."
      />

      {/* Hero Section */}"
      <div className="bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">"
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}"
              className="text-5xl font-bold text-slate-900 dark:text-white mb-6"
            >
              Technology Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}"
              className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8"
            >
              Transform your business with cutting-edge technology solutions
              designed for the modern digital landscape.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}"
              className="flex flex-wrap justify-center gap-4"
            >"
              <button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-colors">
                Get Started
              </button>"
              <button className="px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </div>
"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Solution Categories */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}"
          className="mb-20"
        >"
          <div className="text-center mb-12">"
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Solution Categories
            </h2>"
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Explore our comprehensive range of technology solutions designed
              to address your specific business needs.
            </p>
          </div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}"
                className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4`}
                >"
                  <category.icon className="w-6 h-6 text-white" />
                </div>"
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {category.name}
                </h3>"
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  {category.description}
                </p>"
                <div className="space-y-2">
                  {category.solutions.map((solution, solIndex) => ("
                    <div key={solIndex} className="text-sm">"
                      <div className="font-medium text-slate-900 dark:text-white">
                        {solution.name}
                      </div>"
                      <div className="text-slate-500 dark:text-slate-400">
                        {solution.pricing}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Industry Solutions */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}"
          className="mb-20"
        >"
          <div className="text-center mb-12">"
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Industry Solutions
            </h2>"
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Specialized solutions tailored to the unique challenges and
              requirements of your industry.
            </p>
          </div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredIndustries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}"
                className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-8 hover:shadow-lg transition-all duration-300"
              >"
                <div className="flex items-center mb-6">
                  <div`
                    className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-lg flex items-center justify-center mr-4`}
                  >"
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>"
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {industry.name}
                    </h3>"
                    <p className="text-slate-600 dark:text-slate-400">
                      {industry.description}
                    </p>
                  </div>
                </div>
"
                <div className="space-y-4">
                  {industry.solutions.map((solution, solIndex) => (
                    <div
                      key={solIndex}"
                      className="border-l-4 border-cyan-500 pl-4"
                    >"
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        {solution.name}
                      </h4>"
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                        {solution.description}
                      </p>"
                      <div className="flex items-center justify-between">"
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          {solution.pricing}
                        </div>"
                        <button className="text-cyan-600 hover:text-cyan-700 text-sm font-medium flex items-center gap-1">
                          Learn More"
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}"
          className="text-center"
        >"
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-white">"
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>"
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">'
              Let's discuss how our technology solutions can help you achieve
              your business goals and stay ahead of the competition.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-cyan-50 transition-colors">
                Schedule Consultation
              </button>"
              <button className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Solutions;
'"`