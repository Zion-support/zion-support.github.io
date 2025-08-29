import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Play, 
  Clock, 
  Users, 
  Star, 
  ArrowRight,
  Search,
  Filter,
  BookOpen,
  Video,
  FileText,
  Code,
  Database,
  Shield,
  Cloud,
  Brain,
  Network,
  Zap,
  TrendingUp,
  CheckCircle,
  Eye,
  Bookmark,
  Share2,
  Download,
  ExternalLink,
  Filter as FilterIcon,
  CalendarDays,
  Clock2,
  MapPin2,
  User,
  Users2,
  Award,
  Trophy,
  Gift,
  Coffee,
  Wifi,
  Car,
  Plane,
  Train,
  Bus,
  Bike,
  Walk,
  Home,
  Building,
  Factory,
  City,
  Mountain,
  Tree,
  Leaf,
  Flower,
  Sun,
  Moon,
  Cloud as CloudIcon,
  Rain,
  Snow,
  Wind,
  Thermometer,
  Droplets,
  Umbrella,
  Sunglasses,
  Snowflake,
  CloudRain,
  CloudLightning,
  CloudSnow,
  CloudFog,
  CloudDrizzle,
  CloudHail,
  CloudSleet,
  CloudRainWind,
  CloudLightningRain,
  CloudSnowRain,
  CloudFogRain,
  CloudDrizzleRain,
  CloudHailRain,
  CloudSleetRain,
  CloudRainWindRain,
  CloudLightningRainWind,
  CloudSnowRainWind,
  CloudFogRainWind,
  CloudDrizzleRainWind,
  CloudHailRainWind,
  CloudSleetRainWind
} from 'lucide-react';

export default function VideoTutorials() {
  const tutorialCategories = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Learn AI fundamentals, ML models, and neural networks',
      tutorialCount: 24,
      totalDuration: '18h 32m',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Security best practices, threat detection, and protection',
      tutorialCount: 18,
      totalDuration: '14h 15m',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Cloud architecture, deployment, and management',
      tutorialCount: 22,
      totalDuration: '16h 48m',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Data processing, visualization, and business intelligence',
      tutorialCount: 16,
      totalDuration: '12h 20m',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Network,
      title: 'IoT & Edge Computing',
      description: 'Connected devices, edge processing, and IoT architecture',
      tutorialCount: 14,
      totalDuration: '10h 45m',
      color: 'from-teal-500 to-blue-500'
    },
    {
      icon: Zap,
      title: 'Quantum Computing',
      description: 'Quantum algorithms, cryptography, and applications',
      tutorialCount: 8,
      totalDuration: '6h 30m',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const featuredTutorials = [
    {
      id: 1,
      title: 'Getting Started with AI Development',
      description: 'Learn the fundamentals of artificial intelligence and machine learning development',
      category: 'AI & Machine Learning',
      duration: '45 min',
      instructor: 'Dr. Sarah Chen',
      rating: 4.8,
      views: '2.4k',
      thumbnail: '/api/placeholder/400/225',
      level: 'Beginner',
      featured: true
    },
    {
      id: 2,
      title: 'Cybersecurity Fundamentals for Developers',
      description: 'Essential security practices every developer should know',
      category: 'Cybersecurity',
      duration: '1h 12m',
      instructor: 'Mike Rodriguez',
      rating: 4.7,
      views: '1.9k',
      thumbnail: '/api/placeholder/400/225',
      level: 'Intermediate',
      featured: true
    },
    {
      id: 3,
      title: 'Cloud Migration Best Practices',
      description: 'Step-by-step guide to migrating your infrastructure to the cloud',
      category: 'Cloud Computing',
      duration: '1h 35m',
      instructor: 'Lisa Thompson',
      rating: 4.6,
      views: '1.6k',
      thumbnail: '/api/placeholder/400/225',
      level: 'Advanced',
      featured: true
    },
    {
      id: 4,
      title: 'Data Visualization with Python',
      description: 'Create compelling charts and graphs to communicate insights',
      category: 'Data Analytics',
      duration: '58 min',
      instructor: 'Dr. Emily Watson',
      rating: 4.5,
      views: '1.3k',
      thumbnail: '/api/placeholder/400/225',
      level: 'Intermediate',
      featured: false
    }
  ];

  const recentTutorials = [
    {
      id: 5,
      title: 'IoT Security Implementation',
      category: 'IoT & Edge Computing',
      duration: '42 min',
      instructor: 'David Chen',
      rating: 4.4,
      views: '856',
      level: 'Intermediate'
    },
    {
      id: 6,
      title: 'Quantum Cryptography Basics',
      category: 'Quantum Computing',
      duration: '35 min',
      instructor: 'Dr. James Wilson',
      rating: 4.3,
      views: '623',
      level: 'Advanced'
    },
    {
      id: 7,
      title: 'Machine Learning Model Deployment',
      category: 'AI & Machine Learning',
      duration: '1h 8m',
      instructor: 'Dr. Sarah Chen',
      rating: 4.7,
      views: '1.1k',
      level: 'Advanced'
    },
    {
      id: 8,
      title: 'DevOps Pipeline Automation',
      category: 'Cloud Computing',
      duration: '52 min',
      instructor: 'Alex Johnson',
      rating: 4.5,
      views: '945',
      level: 'Intermediate'
    }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All Categories');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredTutorials = [...featuredTutorials, ...recentTutorials].filter(tutorial => {
    const matchesCategory = selectedCategory === 'All Categories' || tutorial.category === selectedCategory;
    const matchesSearch = tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tutorial.description?.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-orange-900/20 to-yellow-900/20"></div>
        <div className="container-responsive relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-sm font-medium mb-6">
              <Video className="w-4 h-4" />
              Video Tutorials
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Learn from
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                {' '}Video Experts
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Master new skills with our comprehensive video tutorials covering 
              AI, cybersecurity, cloud computing, and emerging technologies.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search tutorials, topics, or instructors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
              />
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our video tutorials organized by technology areas and skill levels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorialCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 hover:bg-slate-800/70 cursor-pointer"
                onClick={() => setSelectedCategory(category.title)}
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} w-fit mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {category.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{category.tutorialCount} tutorials</span>
                  <span>{category.totalDuration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tutorials Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Featured Tutorials
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Start with our most popular and highly-rated video tutorials.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredTutorials.map((tutorial, index) => (
              <motion.div
                key={tutorial.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-300 hover:bg-slate-800/70"
              >
                {/* Thumbnail */}
                <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                  <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                  {tutorial.featured && (
                    <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
                      <Star className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block px-3 py-1 bg-red-500/20 text-red-400 text-xs font-medium rounded-full">
                      {tutorial.category}
                    </span>
                    <span className="inline-block px-2 py-1 bg-slate-700/50 text-gray-400 text-xs rounded-full">
                      {tutorial.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {tutorial.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {tutorial.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{tutorial.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{tutorial.views}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{tutorial.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {tutorial.instructor}</span>
                    <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                      Watch Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Tutorials Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Recent Tutorials
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Stay updated with our latest video content and new releases.
            </p>
          </motion.div>

          <div className="space-y-6">
            {recentTutorials.map((tutorial, index) => (
              <motion.div
                key={tutorial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 hover:bg-slate-800/70"
              >
                <div className="flex items-center gap-6">
                  {/* Thumbnail */}
                  <div className="relative w-32 h-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Play className="w-8 h-8 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block px-3 py-1 bg-red-500/20 text-red-400 text-xs font-medium rounded-full">
                        {tutorial.category}
                      </span>
                      <span className="inline-block px-2 py-1 bg-slate-700/50 text-gray-400 text-xs rounded-full">
                        {tutorial.level}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">
                      {tutorial.title}
                    </h3>

                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                      <span>By {tutorial.instructor}</span>
                      <span>{tutorial.duration}</span>
                      <span>{tutorial.views} views</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-gray-400">{tutorial.rating} rating</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-400 hover:text-red-400 transition-colors">
                      <Bookmark className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-400 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="px-4 py-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white text-sm font-medium rounded-lg transition-all duration-300">
                      Watch
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Access our complete library of video tutorials and accelerate 
              your technology skills today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/training"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
              >
                Browse All Tutorials
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-red-500/30 text-red-300 hover:bg-red-500/10 font-semibold rounded-xl transition-all duration-300"
              >
                Request Custom Content
                <Video className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}