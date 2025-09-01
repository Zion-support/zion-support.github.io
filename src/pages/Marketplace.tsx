import React from 'react';
import { Button } from '@/components / ui / button';
import { SEO } from '@/components / SEO';
export default Marketplace;
import {
import {


  Store,
  Search,
  Filter,
  Grid,
  List,
  Star,
  Heart,
  Eye,
  Zap,
  Shield,
  Cloud,
  Brain,
  Globe,
  TrendingUp,
  Award,
  Users,
  ArrowRight,
} from 'lucide - react';
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components / ui / card';

const Marketplace: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState ('') ;
  const [selectedCategory, setSelectedCategory] = useState ('all') ;
  const [selectedType, setSelectedType] = useState ('all') ;
  const [viewMode, setViewMode] = useState<'grid' | 'list'> ('grid') ;
  const [expandedItem, setExpandedItem] = useState < string | null> (null) ;

  const categories = [
    { id: 'all', name: 'All Solutions', count: 45, icon: Globe },
    { id: 'ai', name: 'AI & Machine Learning', count: 18, icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', count: 8, icon: Zap },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 12, icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', count: 15, icon: Cloud },
    { id: 'iot', name: 'IoT & Edge Computing', count: 10, icon: Zap },
    { id: 'blockchain', name: 'Blockchain', count: 6, icon: Globe },
    { id: 'healthcare', name: 'Healthcare Tech', count: 9, icon: Brain },
  ];

  const types = [
    { id: 'all', name: 'All Types', count: 48 },
    { id: 'software', name: 'Software', count: 25 },
    { id: 'service', name: 'Services', count: 15 },
    { id: 'hardware', name: 'Hardware', count: 8 },
  ];

  const marketplaceItems = [
    // AI & Machine Learning
    {
      id: 1,
      name: 'Quantum AI Optimization Platform',
      category: 'quantum',
      description:
        'Revolutionary quantum - classical hybrid algorithms for real - time optimization solving. 1000x faster than classical computers.',
      price: '$15,000 / month',
      rating: 4.9,
      reviews: 127,
      users: 45,
      features: [
        'Quantum algorithms',
        'Real - time optimization',
        'Hybrid computing',
        'Enterprise scaling',
      ],
      image: '🔮',
      badge: 'Most Popular',
      vendor: 'QuantumTech Solutions',
      deployment: 'Cloud & On - Premise',
      support: '24 / 7 Enterprise Support',
    },
    {
      id: 2,
      name: 'AI Cybersecurity Suite',
      category: 'cybersecurity',
      description:
        'Advanced AI - powered threat detection and response system with 99.9% accuracy and real - time protection.',
      price: '$8,500 / month',
      rating: 4.8,
      reviews: 89,
      users: 67,
      features: [
        'AI threat detection',
        'Real - time response',
        'Zero - day protection',
        'Compliance ready',
      ],
      image: '🛡️',
      badge: 'Best Seller',
      vendor: 'SecureAI Systems',
      deployment: 'Cloud & Hybrid',
      support: '24 / 7 Security Support',
    },
    {
      id: 3,
      name: 'Edge Computing Platform',
      category: 'iot',
      description:
        'Ultra - low latency edge computing solution with 90% latency reduction and real - time data processing.',
      price: '$9,500 / month',
      rating: 4.7,
      reviews: 156,
      users: 89,
      features: [
        'Edge processing',
        'Low latency',
        'Real - time analytics',
        'Scalable infrastructure',
      ],
      image: '⚡',
      badge: 'Trending',
      vendor: 'EdgeFlow Technologies',
      deployment: 'Edge & Cloud',
      support: 'Business Hours Support',
    },
    {
      id: 'ml - pipeline',
      name: 'ML Pipeline Automation',
      category: 'ai - ml',
      type: 'software',
      icon: BarChart3,
      description: 'Automated machine learning pipeline for data scientists',
      features: [
        'AutoML capabilities',
        'Model versioning',
        'A / B testing',
        'Performance monitoring',
        'Scalable infrastructure',
        'Cloud deployment',
      ],
      pricing: '$499 / month',
      rating: 4.9,
      reviews: 89,
      downloads: 567,
      status: 'popular',
      tags: ['Machine Learning', 'Automation', 'Data Science', 'MLOps'],
      image: '/api / placeholder / 400 / 300',
      demo: 'https://demo.ziontechgroup.com / ml - pipeline',
      documentation: 'https://docs.ziontechgroup.com / ml - pipeline',
    },
    {
      id: 'computer - vision',
      name: 'Computer Vision API',
      category: 'ai - ml',
      type: 'service',
      icon: Eye,
      description:
        'Advanced computer vision services for image and video analysis',
      features: [
        'Object detection',
        'Face recognition',
        'Image classification',
        'Video analysis',
        'Real - time processing',
        'Custom model training',
      ],
      pricing: '$0.01 per image',
      rating: 4.7,
      reviews: 203,
      users: 34,
      image: '🏥',
      badge: 'New',
      vendor: 'HealthAI Innovations',
      deployment: 'Cloud & On - Premise',
      support: '24 / 7 Healthcare Support',
    },
    {
      id: 'kubernetes - manager',
      name: 'Kubernetes Management Platform',
      category: 'cloud',
      type: 'software',
      icon: Server,
      description: 'Enterprise - grade Kubernetes cluster management solution',
      features: [
        'Multi - cluster management',
        'Auto - scaling',
        'Monitoring & alerting',
        'Security policies',
        'Backup & recovery',
        'Cost optimization',
      ],
      pricing: '$199 / month',
      rating: 4.8,
      reviews: 134,
      downloads: 456,
      status: 'popular',
      tags: ['Kubernetes', 'Container Orchestration', 'DevOps', 'Cloud Native'],
      image: '/api / placeholder / 400 / 300',
      demo: 'https://demo.ziontechgroup.com / kubernetes - manager',
      documentation: 'https://docs.ziontechgroup.com / kubernetes - manager',
    },
    // Security & Compliance
    {
      id: 'threat - detection',
      name: 'Advanced Threat Detection',
      category: 'security',
      type: 'software',
      icon: Shield,
      description: 'AI - powered threat detection and response system',
      features: [
        'Real - time monitoring',
        'Behavioral analysis',
        'Threat intelligence',
        'Automated response',
        'Compliance reporting',
        '24 / 7 SOC support',
      ],
      pricing: '$399 / month',
      rating: 4.9,
      reviews: 178,
      downloads: 678,
      status: 'featured',
      tags: ['Cybersecurity', 'Threat Detection', 'AI Security', 'SOC'],
      image: '/api / placeholder / 400 / 300',
      demo: 'https://demo.ziontechgroup.com / threat - detection',
      documentation: 'https://docs.ziontechgroup.com / threat - detection',
    },
    {
      id: 'compliance - audit',
      name: 'Compliance Audit Service',
      category: 'security',
      type: 'service',
      icon: CheckCircle,
      description:
        'Comprehensive compliance auditing and certification services',
      features: [
        'SOC 2 Type II',
        'ISO 27001',
        'GDPR compliance',
        'HIPAA assessment',
        'PCI DSS validation',
        'Ongoing monitoring',
      ],
      pricing: 'Starting from $25,000',
      rating: 4.8,
      reviews: 45,
      downloads: 123,
      status: 'popular',
      tags: ['Compliance', 'Security', 'Audit', 'Certification'],
      image: '/api / placeholder / 400 / 300',
      demo: 'https://demo.ziontechgroup.com / compliance - audit',
      documentation: 'https://docs.ziontechgroup.com / compliance - audit',
    },
    // Data & Analytics
    {
      id: 'data - warehouse',
      name: 'Data Warehouse Solution',
      category: 'data',
      type: 'software',
      icon: Database,
      description: 'Scalable data warehouse with advanced analytics',
      features: [
        'Multi - cloud support',
        'Real - time processing',
        'Advanced analytics',
        'Data governance',
        'Security & encryption',
        'Auto - scaling',
      ],
      pricing: '$599 / month',
      rating: 4.7,
      reviews: 92,
      downloads: 345,
      status: 'trending',
      tags: [
        'Data Warehouse',
        'Big Data',
        'Analytics',
        'Business Intelligence',
      ],
      image: '/api / placeholder / 400 / 300',
      demo: 'https://demo.ziontechgroup.com / data - warehouse',
      documentation: 'https://docs.ziontechgroup.com / data - warehouse',
    },
    {
      id: 'bi - dashboard',
      name: 'Business Intelligence Dashboard',
      category: 'data',
      type: 'software',
      icon: BarChart3,
      description: 'Interactive BI dashboard for data visualization',
      features: [
        'Drag & drop interface',
        'Real - time data',
        'Custom widgets',
        'Mobile responsive',
        'Export capabilities',
        'Collaboration tools',
      ],
      pricing: '$149 / month',
      rating: 4.6,
      reviews: 78,
      users: 23,
      image: '🔗',
      badge: 'Innovative',
      vendor: 'ChainAI Solutions',
      deployment: 'Cloud & Hybrid',
      support: 'Business Hours Support',
    },
    // Development Tools
    {
      id: 'code - generator',
      name: 'AI Code Generator',
      category: 'development',
      type: 'software',
      icon: Code,
      description: 'AI - powered code generation and assistance tool',
      features: [
        'Multi - language support',
        'Code completion',
        'Bug detection',
        'Documentation generation',
        'Code review',
        'Integration with IDEs',
      ],
      pricing: '$99 / month',
      rating: 4.8,
      reviews: 234,
      users: 156,
      image: '☁️',
      badge: 'Cost Effective',
      vendor: 'CloudOpt Solutions',
      deployment: 'Multi - Cloud',
      support: '24 / 7 Cloud Support',
    },
  ];

  const filteredSolutions = solutions.filter (solution => {
    const matchesCategory = selectedCategory === 'all' || solution.category === selectedCategory;
    const matchesSearch = solution.name.toLowerCase () .includes (searchTerm.toLowerCase () ) ||
      solution.description.toLowerCase () .includes (searchTerm.toLowerCase () ) ||
      solution.vendor.toLowerCase () .includes (searchTerm.toLowerCase () ) ;
    return matchesCategory && matchesSearch;
  }) ;

  const sortedSolutions = [...filteredSolutions].sort ( (a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return (parseFloat (a.price.replace (/[^0 - 9.]/g, '') ) -
          parseFloat (b.price.replace (/[^0 - 9.]/g, '') ) ) ;
      case 'reviews':
        return b.reviews - a.reviews;
      case 'users':
        return b.users - a.users;
      default:
        return b.reviews - a.reviews; // popularity
    }
  }) ;

  const getTypeColor = (...args: unknown[]): unknown => {
    switch (type) {
      case 'software':
        return 'bg - blue - 500 / 20 text - blue - 400';
      case 'service':
        return 'bg - green - 500 / 20 text - green - 400';
      case 'hardware':
        return 'bg - orange - 500 / 20 text - orange - 400';
      default:
        return 'bg - slate - 500 / 20 text - slate - 400';
    }
  };

  const getStatusColor = (...args: unknown[]): unknown => {
    switch (status) {
      case 'featured':
        return 'bg - yellow - 500 / 20 text - yellow - 400';
      case 'popular':
        return 'bg - blue - 500 / 20 text - blue - 400';
      case 'trending':
        return 'bg - green - 500 / 20 text - green - 400';
      default:
        return 'bg - slate - 500 / 20 text - slate - 400';
    }
  };

  const renderStars = (...args: unknown[]): unknown => {
    const stars = [];
    const fullStars = Math.floor (rating) ;
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push (<Star key={i} className="w - 4 h - 4 text - yellow - 400 fill - current" />) ;
    }

    if (hasHalfStar) {
      stars.push (<Star key="half" className="w - 4 h - 4 text - yellow - 400 fill - current" />) ;
    }

    const emptyStars = 5 - Math.ceil (rating) ;
    for (let i = 0; i < emptyStars; i++) {
      stars.push (<Star key={`empty-${i}`} className="w - 4 h - 4 text - gray - 400" />) ;
    }

    return stars;
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find (cat => cat.id === categoryId) ;
    return category ? category.icon : Globe;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find (cat => cat.id === categoryId) ;
    return category ? category.name : 'General';
  };

  const getBadgeColor = (...args: unknown[]): unknown => {
    switch (badge) {
      case 'Most Popular':
        return 'bg - gradient - to - r from - yellow - 500 to - orange - 500';
      case 'Best Seller':
        return 'bg - gradient - to - r from - green - 500 to - emerald - 500';
      case 'Trending':
        return 'bg - gradient - to - r from - purple - 500 to - pink - 500';
      case 'New':
        return 'bg - gradient - to - r from - blue - 500 to - cyan - 500';
      case 'Innovative':
        return 'bg - gradient - to - r from - indigo - 500 to - purple - 500';
      case 'Cost Effective':
        return 'bg - gradient - to - r from - teal - 500 to - green - 500';
      default:
        return 'bg - gradient - to - r from - gray - 500 to - slate - 500';
    }
  };

  return (<>
      <SEO
        title="Technology Marketplace - Zion Tech Group"
        description="Discover cutting - edge AI, quantum computing, cybersecurity, and cloud solutions from leading technology vendors in our curated marketplace."
        keywords="technology marketplace, AI solutions, quantum computing, cybersecurity, cloud platforms, enterprise software, Zion Tech Group"
      />

      <div role="button" className="min - h-screen bg - gradient - to - br from - zion - slate - dark via - zion - slate to - zion - slate - light">
        {/* Hero Section */}
        <section className="relative py - 20 px - 4 sm:px - 6 lg:px - 8 overflow - hidden">
          <div role="button" className="absolute inset - 0 bg - gradient - to - r from - zion - purple / 20 to - zion - blue / 20"></div>
          <div role="button" className="relative z - 10 max - w-7xl mx - auto text - center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div role="button" className="inline - flex items - center px - 4 py - 2 rounded - full bg - zion - purple / 20 border border - zion - purple / 30 mb - 6">
                <Globe className="w - 5 h - 5 text - zion - purple mr - 2" />
                <span className="text - zion - purple font - medium">
                  Technology Marketplace
                </span>
              </div>

              <h1 className="text - 4xl md:text - 6xl font - bold text - white mb - 6">
                Technology Solutions Marketplace
              </h1>

              <p className="text - xl md:text - 2xl text - zion - cyan - light max - w-4xl mx - auto leading - relaxed mb - 8">
                Discover cutting - edge AI, quantum computing, cybersecurity, and
                cloud solutions from leading technology vendors. All solutions
                are vetted and enterprise - ready.
              </p>

              {/* Search Bar */}
              <div role="button" className="max - w-2xl mx - auto mb - 8">
                <div role="button" className="relative">
                  <Search className="absolute left - 4 top - 1/2 transform - translate - y-1 / 2 w - 5 h - 5 text - zion - cyan - light" />
                  <input
                    type="text"
                    placeholder="Search solutions, vendors, or technologies..."
                    value={searchTerm}
                    onChange={e => setSearchTerm (e.target.value) }
                    className="w - full pl - 12 pr - 4 py - 4 bg - white / 10 backdrop - blur - sm border border - white / 20 rounded - xl text - white placeholder - zion - cyan - light focus:outline - none focus:ring - 2 focus:ring - zion - purple focus:border - transparent"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py - 12 px - 4 sm:px - 6 lg:px - 8">
          <div role="button" className="max - w-7xl mx - auto">
            <div role="button" className="flex flex - wrap justify - center gap - 4">
              {categories.map (category => (<button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" key={category.id}
                  onClick={ () => setSelectedCategory (category.id) }
                  className={`flex items - center space - x-2 px - 6 py - 3 rounded - xl font - medium transition - all duration - 300 ${
                    selectedCategory === category.id
                      ? 'bg - zion - purple text - white shadow - lg'
                      : 'bg - white / 10 text - zion - cyan - light hover:bg - white / 20 border border - white / 20'
                  }`}
                >
                  <category.icon className="w - 5 h - 5" />
                  <span>{category.name}</span>
                  <span className="text - sm opacity - 75"> ({category.count}) </span>
                </button>) ) }
            </div>
          </div>
        </section>

        {/* Sort Options */}
        <section className="py - 8 px - 4 sm:px - 6 lg:px - 8">
          <div role="button" className="max - w-7xl mx - auto">
            <div role="button" className="flex flex - wrap items - center justify - between gap - 4">
              <div role="button" className="flex items - center space - x-4">
                <span className="text - white font - medium">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={e => setSortBy (e.target.value) }
                  className="px - 4 py - 2 bg - white / 10 backdrop - blur - sm border border - white / 20 rounded - lg text - white focus:outline - none focus:ring - 2 focus:ring - zion - purple focus:border - transparent"
                >
                  <option value="popularity">Popularity</option>
                  <option value="rating">Rating</option>
                  <option value="price">Price</option>
                  <option value="reviews">Reviews</option>
                  <option value="users">Users</option>
                </select>
              </div>

              <div role="button" className="text - zion - cyan - light">
                {filteredSolutions.length} solutions found
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">
          <div role="button" className="max - w-7xl mx - auto">
            {filteredSolutions.length === 0 ? (<motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text - center py - 20"
              >
                <Globe className="w - 16 h - 16 text - zion - cyan - light mx - auto mb - 4" />
                <h3 className="text - xl font - semibold text - white mb - 2">
                  No solutions found
                </h3>
                <p className="text - zion - cyan - light">
                  Try adjusting your search terms or category filter.
                </p>
              </motion.div>) : (<div role="button" className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">
                {sortedSolutions.map ( (solution, index) => (<motion.div
                    key={solution.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className="h - full bg - white / 5 backdrop - blur - sm border - white / 20 hover:border - zion - purple / 50 transition - all duration - 300 hover:scale - 105">
                      <CardHeader>
                        <div role="button" className="flex items - start justify - between mb - 4">
                          <div role="button" className="text - 4xl">{solution.image}</div>
                          <div role="button" className={`px - 3 py - 1 rounded - full text - xs font - semibold text - white ${getBadgeColor (solution.badge) }`}
                          >
                            {solution.badge}
                          </div>
                        </div>

                        <div role="button" className="flex items - center space - x-2 mb - 3">
                          <div role="button" className="inline - flex items - center px - 3 py - 1 rounded - full bg - zion - purple / 20 border border - zion - purple / 30">
                            <span className="text - zion - purple text - sm font - medium">
                              {getCategoryName (solution.category) }
                            </span>
                          </div>
                        </div>

                        <CardTitle className="text - xl font - bold text - white group - hover:text - zion - purple transition - colors duration - 300">
                          {solution.name}
                        </CardTitle>

                        <CardDescription className="text - zion - cyan - light leading - relaxed">
                          {solution.description}
                        </CardDescription>

                        <div role="button" className="flex items - center justify - between">
                          <div role="button" className="text - 2xl font - bold text - zion - cyan">
                            {solution.price}
                          </div>
                          <div role="button" className="flex items - center space - x-1">
                            <Star className="w - 5 h - 5 text - yellow - 400 fill - current" />
                            <span className="text - white font - medium">
                              {solution.rating}
                            </span>
                            <span className="text - zion - cyan - light text - sm"> ({solution.reviews}) </span>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <div role="button" className="mb - 6">
                          <h4 className="text - white font - semibold mb - 3">
                            Key Features:
                          </h4>
                          <div role="button" className="grid grid - cols - 2 gap - 2">
                            {solution.features.map ( (feature, featureIndex) => (<div role="button" key={featureIndex}
                                className="flex items - center space - x-2 text - sm"
                              >
                                <div role="button" className="w - 2 h - 2 bg - zion - cyan rounded - full"></div>
                                <span className="text - gray - 300">{feature}</span>
                              </div>) ) }
                          </div>
                        </div>

                        <div role="button" className="space - y-3 mb - 6 text - sm">
                          <div role="button" className="flex items - center justify - between">
                            <span className="text - zion - cyan - light">
                              Vendor:
                            </span>
                            <span className="text - white">
                              {solution.vendor}
                            </span>
                          </div>
                          <div role="button" className="flex items - center justify - between">
                            <span className="text - zion - cyan - light">
                              Deployment:
                            </span>
                            <span className="text - white">
                              {solution.deployment}
                            </span>
                          </div>
                          <div role="button" className="flex items - center justify - between">
                            <span className="text - zion - cyan - light">
                              Support:
                            </span>
                            <span className="text - white">
                              {solution.support}
                            </span>
                          </div>
                        </div>

                        <div role="button" className="flex items - center justify - between mb - 4">
                          <div role="button" className="flex items - center space - x-4 text - sm text - zion - cyan - light">
                            <div role="button" className="flex items - center space - x-1">
                              <Users className="w - 4 h - 4" />
                              <span>{solution.users} users</span>
                            </div>
                          </div>
                        </div>

                        <div role="button" className="flex space - x-2">
                          <Button className="flex - 1 bg - gradient - to - r from - zion - purple to - zion - blue hover:from - zion - purple / 80 hover:to - zion - blue / 80 text - white">
                            Learn More < ArrowRight className="w - 4 h - 4 ml - 2" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border - zion - cyan text - zion - cyan hover:bg - zion - cyan hover:text - zion - slate - dark"
                          >
                            <Heart className="w - 4 h - 4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>) ) }
              </div>) }
          </div>
        </section>

        {/* CTA Section */}
        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">
          <div role="button" className="max - w-4xl mx - auto text - center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text - 4xl font - bold text - white mb - 6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text - xl text - zion - cyan - light mb - 8 max - w-3xl mx - auto">
                Our technology experts can help you find the perfect solution or
                even develop a custom solution tailored to your specific needs.
              </p>

              <div role="button" className="flex flex - col sm:flex - row gap - 4 justify - center">
                <Button className="bg - gradient - to - r from - zion - purple to - zion - blue hover:from - zion - purple / 80 hover:to - zion - blue / 80 text - white">
                  <Search className="w - 5 h - 5 mr - 2" />
                  Get Custom Recommendation
                </Button>

                <Button
                  variant="outline"
                  className="border - zion - cyan text - zion - cyan hover:bg - zion - cyan hover:text - zion - slate - dark"
                >
                  <Users className="w - 5 h - 5 mr - 2" />
                  Talk to Our Experts
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>) ;
};

