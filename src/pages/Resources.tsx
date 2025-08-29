import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  BookOpen, 
  FileText, 
  Play, 
  PenTool, 
  HelpCircle, 
  GraduationCap, 
  Users, 
  LifeBuoy,
  ArrowRight,
  Download,
  ExternalLink,
  Calendar,
  TrendingUp,
  Lightbulb,
  Code,
  Shield,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Resources: React.FC = () => {
  const resourceCategories = [
    {
      title: 'Case Studies',
      description: 'Real-world success stories and implementations',
      icon: FileText,
      color: 'from-blue-500 to-cyan-600',
      link: '/case-studies',
      count: '25+',
      featured: true
    },
    {
      title: 'White Papers',
      description: 'In-depth industry insights and research',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-600',
      link: '/white-papers',
      count: '15+',
      featured: true
    },
    {
      title: 'Webinars',
      description: 'Educational sessions and live demonstrations',
      icon: Play,
      color: 'from-green-500 to-emerald-600',
      link: '/webinars',
      count: '40+',
      featured: true
    },
    {
      title: 'Blog',
      description: 'Latest news, insights, and technology trends',
      icon: PenTool,
      color: 'from-orange-500 to-red-600',
      link: '/blog',
      count: '100+',
      featured: true
    },
    {
      title: 'Documentation',
      description: 'Technical guides, APIs, and implementation details',
      icon: Code,
      color: 'from-indigo-500 to-purple-600',
      link: '/documentation',
      count: '50+',
      featured: false
    },
    {
      title: 'Training',
      description: 'Professional development and certification programs',
      icon: GraduationCap,
      color: 'from-teal-500 to-cyan-600',
      link: '/training',
      count: '20+',
      featured: false
    },
    {
      title: 'Community',
      description: 'Developer community and knowledge sharing',
      icon: Users,
      color: 'from-yellow-500 to-orange-600',
      link: '/community',
      count: '1000+',
      featured: false
    },
    {
      title: 'Support',
      description: 'Technical support and help resources',
      icon: LifeBuoy,
      color: 'from-red-500 to-pink-600',
      link: '/support',
      count: '24/7',
      featured: false
    }
  ];

  const featuredResources = [
    {
      title: 'AI Transformation Success Story',
      description: 'How a Fortune 500 company achieved 300% ROI with AI implementation',
      type: 'Case Study',
      date: '2024',
      readTime: '5 min read',
      link: '/case-studies/ai-transformation-success'
    },
    {
      title: 'The Future of Quantum Computing',
      description: 'Comprehensive guide to quantum computing applications in business',
      type: 'White Paper',
      date: '2024',
      readTime: '15 min read',
      link: '/white-papers/quantum-computing-future'
    },
    {
      title: 'Cybersecurity Best Practices 2024',
      description: 'Essential security strategies for modern enterprises',
      type: 'Webinar',
      date: '2024',
      readTime: '45 min',
      link: '/webinars/cybersecurity-best-practices-2024'
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI Ethics & Governance Workshop',
      date: 'Dec 15, 2024',
      time: '2:00 PM EST',
      type: 'Workshop',
      registration: 'Open'
    },
    {
      title: 'Quantum Computing Demo Day',
      date: 'Dec 20, 2024',
      time: '1:00 PM EST',
      type: 'Demo',
      registration: 'Limited'
    },
    {
      title: '2025 Technology Trends Webinar',
      date: 'Jan 10, 2025',
      time: '3:00 PM EST',
      type: 'Webinar',
      registration: 'Open'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Resources & Knowledge Hub
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Access our comprehensive collection of case studies, white papers, webinars, and technical resources 
            to accelerate your digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                Get Expert Advice
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/newsletter">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Subscribe to Updates
              </Button>
            </Link>
          </div>
        </div>

        {/* Resource Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Explore Our Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceCategories.map((category, index) => (
              <Link key={index} to={category.link}>
                <Card className={`bg-white/5 border-white/10 text-white hover:bg-white/10 transition-all duration-300 cursor-pointer group ${
                  category.featured ? 'ring-2 ring-cyan-500/50' : ''
                }`}>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                      <p className="text-sm text-gray-300 mb-3">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-white/10 text-white">
                          {category.count}
                        </Badge>
                        {category.featured && (
                          <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                            Featured
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Featured Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <Card key={index} className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                      {resource.type}
                    </Badge>
                    <span className="text-sm text-gray-400">{resource.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{resource.readTime}</span>
                    <Link to={resource.link}>
                      <Button variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300">
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="bg-white/5 border-white/10 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`${
                      event.registration === 'Open' ? 'bg-green-500' : 'bg-yellow-500'
                    } text-white`}>
                      {event.registration}
                    </Badge>
                    <span className="text-sm text-gray-400">{event.type}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{event.title}</h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border-cyan-500/20 text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                Stay Updated with Latest Insights
              </h2>
              <p className="text-gray-300 mb-6">
                Get notified about new resources, upcoming events, and industry insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                  Subscribe
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resources;
