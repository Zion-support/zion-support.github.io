import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Target, 
  FileText, 
  Users, 
  Code, 
  HelpCircle, 
  DollarSign,
  ArrowRight,
  Star,
  Sparkles,
  Brain,
  Cloud,
  Shield,
  Database,
  Globe,
  Cpu,
  Zap,
  Rocket,
  Heart,
  Scale,
  PenTool,
  TrendingUp,
  Lock,
  Server,
  Smartphone,
  Atom,
  Leaf,
  Building,
  Car,
  Factory,
  City,
  CheckCircle,
  Play,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Download,
  Calendar,
  Clock,
  User,
  Award,
  Lightbulb,
  BarChart3,
  PieChart,
  LineChart,
  Activity,
  Layers,
  GitBranch,
  GitCommit,
  GitPullRequest,
  GitMerge,
  GitCompare
} from 'lucide-react';

export default function Resources() {
  const resourceCategories = [
    {
      id: 'blog',
      title: 'Blog & Insights',
      icon: BookOpen,
      description: 'Latest industry trends and insights',
      color: 'from-blue-500 to-indigo-500',
      featured: true,
      items: [
        { title: 'AI Trends 2024', type: 'Article', readTime: '5 min', featured: true },
        { title: 'Quantum Computing Breakthroughs', type: 'Research', readTime: '8 min', featured: false },
        { title: 'Digital Transformation Guide', type: 'Guide', readTime: '12 min', featured: true },
        { title: 'Cybersecurity Best Practices', type: 'Tutorial', readTime: '6 min', featured: false }
      ]
    },
    {
      id: 'case-studies',
      title: 'Case Studies',
      icon: Target,
      description: 'Real-world success stories',
      color: 'from-green-500 to-emerald-500',
      featured: true,
      items: [
        { title: 'Healthcare AI Implementation', type: 'Healthcare', readTime: '10 min', featured: true },
        { title: 'Manufacturing Transformation', type: 'Manufacturing', readTime: '8 min', featured: true },
        { title: 'Financial Services Innovation', type: 'Finance', readTime: '7 min', featured: false },
        { title: 'Retail Digital Revolution', type: 'Retail', readTime: '9 min', featured: false }
      ]
    },
    {
      id: 'white-papers',
      title: 'White Papers',
      icon: FileText,
      description: 'In-depth research and analysis',
      color: 'from-purple-500 to-pink-500',
      featured: true,
      items: [
        { title: 'AI Ethics Framework', type: 'Research', readTime: '15 min', featured: true },
        { title: 'Quantum Security Protocols', type: 'Technical', readTime: '20 min', featured: true },
        { title: 'Sustainable Tech Solutions', type: 'Environmental', readTime: '12 min', featured: false },
        { title: 'Digital Twin Applications', type: 'Technology', readTime: '18 min', featured: false }
      ]
    },
    {
      id: 'webinars',
      title: 'Webinars',
      icon: Users,
      description: 'Expert-led learning sessions',
      color: 'from-orange-500 to-red-500',
      featured: true,
      items: [
        { title: 'AI Implementation Strategies', type: 'Strategy', duration: '60 min', featured: true },
        { title: 'Cybersecurity in 2024', type: 'Security', duration: '45 min', featured: true },
        { title: 'Cloud Migration Best Practices', type: 'Technology', duration: '90 min', featured: false },
        { title: 'Data Analytics Masterclass', type: 'Analytics', duration: '75 min', featured: false }
      ]
    },
    {
      id: 'documentation',
      title: 'Documentation',
      icon: Code,
      description: 'Technical guides and APIs',
      color: 'from-cyan-500 to-blue-500',
      featured: true,
      items: [
        { title: 'API Reference Guide', type: 'Technical', readTime: '30 min', featured: true },
        { title: 'Integration Tutorials', type: 'Tutorial', readTime: '25 min', featured: true },
        { title: 'Deployment Guide', type: 'Guide', readTime: '20 min', featured: false },
        { title: 'Troubleshooting Manual', type: 'Reference', readTime: '35 min', featured: false }
      ]
    },
    {
      id: 'faq',
      title: 'FAQ & Support',
      icon: HelpCircle,
      description: 'Get help and answers',
      color: 'from-yellow-500 to-orange-500',
      featured: false,
      items: [
        { title: 'Getting Started FAQ', type: 'FAQ', readTime: '5 min', featured: false },
        { title: 'Common Issues & Solutions', type: 'Troubleshooting', readTime: '8 min', featured: false },
        { title: 'Support Contact Information', type: 'Contact', readTime: '2 min', featured: false },
        { title: 'Training Resources', type: 'Training', readTime: '10 min', featured: false }
      ]
    },
    {
      id: 'pricing-guide-2025',
      title: 'Pricing Guide 2025',
      icon: DollarSign,
      description: 'Complete pricing information',
      color: 'from-emerald-500 to-green-500',
      featured: true,
      items: [
        { title: 'Service Pricing Overview', type: 'Pricing', readTime: '10 min', featured: true },
        { title: 'Custom Quote Calculator', type: 'Tool', readTime: '5 min', featured: true },
        { title: 'Enterprise Pricing', type: 'Pricing', readTime: '8 min', featured: false },
        { title: 'ROI Analysis Guide', type: 'Analysis', readTime: '12 min', featured: false }
      ]
    }
  ];

  const additionalResources = [
    {
      id: 'api-docs',
      title: 'API Reference',
      icon: GitBranch,
      description: 'Comprehensive API documentation',
      color: 'from-purple-500 to-indigo-500',
      href: '/api-docs'
    },
    {
      id: 'developers',
      title: 'Developer Portal',
      icon: GitCommit,
      description: 'Developer tools and resources',
      color: 'from-blue-500 to-cyan-500',
      href: '/developers'
    },
    {
      id: 'training',
      title: 'Training & Certification',
      icon: Award,
      description: 'Professional development programs',
      color: 'from-green-500 to-emerald-500',
      href: '/training'
    },
    {
      id: 'community',
      title: 'Community Forum',
      icon: Users,
      description: 'Connect with peers and experts',
      color: 'from-orange-500 to-red-500',
      href: '/community'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Resources & Knowledge
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Access our comprehensive library of insights, guides, and resources to stay ahead 
              of the latest technology trends and best practices.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 text-center">
              Resources section coming soon. We're building a comprehensive library of valuable content.
            </p>
          </div>
        </div>
      </div>
    </>);
};
export default Resources;
