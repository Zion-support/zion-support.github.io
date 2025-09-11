import React, { memo, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Code,
  Database,
  Network,
  Smartphone,
  Globe,
  Zap,
  Cpu,
  Lock,
  BarChart3,
  Users,
  Rocket,
  Target,
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  Search,
  Filter,
  Grid,
  List
} from 'lucide-react';
import { SEO, useSEO } from '@/components/SEO';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const ServiceCard = memo(({ service, index }: { service: any; index: number }) => {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
        <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <service.icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          {service.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {service.description}
        </p>
        <div className="space-y-2 mb-6">
          {service.features.map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
              {feature}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {service.price}
          </div>
          <Link
            to={service.link}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
          >
            Learn More
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
});

ServiceCard.displayName = 'ServiceCard';

const FilterButton = memo(({ 
  active, 
  onClick, 
  children 
}: { 
  active: boolean; 
  onClick: () => void; 
  children: React.ReactNode; 
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
      active
        ? 'bg-cyan-500 text-white'
        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
    }`}
  >
    {children}
  </button>
));

FilterButton.displayName = 'FilterButton';

export default function EnhancedServices() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const seoData = useSEO({
    title: 'AI & Technology Services - Zion Tech Group',
    description: 'Comprehensive AI, cloud, cybersecurity, and development services. Transform your business with cutting-edge technology solutions.',
    keywords: 'AI services, cloud solutions, cybersecurity, mobile development, DevOps, micro-SaaS',
    canonical: '/services'
  });

  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      services: [
        {
          title: "AI Business Intelligence Elite",
          description: "Advanced AI-powered analytics with real-time insights and predictive analytics",
          price: "From $5,000/mo",
          features: [
            "Real-time data processing",
            "Predictive analytics",
            "Custom ML models",
            "24/7 monitoring"
          ],
          link: "/services/ai-business-intelligence"
        },
        {
          title: "AI Content Creation Suite",
          description: "Automated content generation and optimization",
          price: "From $2,500/mo",
          features: [
            "Automated content generation",
            "SEO optimization",
            "Multi-platform publishing",
            "Content analytics"
          ],
          link: "/services/ai-content-creation"
        },
        {
          title: "AI Customer Service Automation",
          description: "Intelligent chatbots and customer support automation",
          price: "From $3,000/mo",
          features: [
            "Natural language processing",
            "Multi-channel support",
            "Sentiment analysis",
            "Human handoff"
          ],
          link: "/services/ai-customer-service"
        }
      ]
    },
    {
      title: "Cybersecurity",
      description: "Advanced security and compliance solutions",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      services: [
        {
          title: "AI Cybersecurity Elite",
          description: "Military-grade AI-powered cybersecurity with zero-day protection",
          price: "From $4,000/mo",
          features: [
            "Zero-day threat detection",
            "AI-powered monitoring",
            "Compliance automation",
            "Incident response"
          ],
          link: "/services/ai-cybersecurity"
        },
        {
          title: "Security Audit & Compliance",
          description: "Comprehensive security assessments and compliance management",
          price: "From $2,000/mo",
          features: [
            "Penetration testing",
            "Vulnerability assessment",
            "Compliance reporting",
            "Security training"
          ],
          link: "/services/security-audit"
        }
      ]
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      services: [
        {
          title: "Cloud Migration Services",
          description: "Seamless migration to cloud platforms with optimization",
          price: "From $3,500/mo",
          features: [
            "Zero-downtime migration",
            "Cost optimization",
            "Performance monitoring",
            "Disaster recovery"
          ],
          link: "/services/cloud-migration"
        },
        {
          title: "DevOps & Infrastructure",
          description: "CI/CD pipelines, monitoring, and infrastructure automation",
          price: "From $2,500/mo",
          features: [
            "Automated deployments",
            "Infrastructure as code",
            "Monitoring & alerting",
            "Scalability management"
          ],
          link: "/services/devops"
        }
      ]
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      icon: Smartphone,
      color: "from-green-500 to-emerald-500",
      services: [
        {
          title: "Mobile App Development",
          description: "Native and cross-platform mobile applications",
          price: "From $4,000/mo",
          features: [
            "iOS & Android development",
            "Cross-platform solutions",
            "App store optimization",
            "Performance optimization"
          ],
          link: "/services/mobile-development"
        }
      ]
    },
    {
      title: "Micro-SaaS Platform",
      description: "Complete platform to launch and scale your micro-SaaS business",
      icon: Rocket,
      color: "from-indigo-500 to-purple-500",
      services: [
        {
          title: "Micro-SaaS Development",
          description: "End-to-end product development with billing, auth, and analytics",
          price: "From $5,000/mo",
          features: [
            "Full-stack development",
            "Payment integration",
            "User management",
            "Analytics dashboard"
          ],
          link: "/services/micro-saas"
        }
      ]
    }
  ];

  const allServices = serviceCategories.flatMap(category => 
    category.services.map(service => ({
      ...service,
      category: category.title,
      categoryIcon: category.icon,
      categoryColor: category.color
    }))
  );

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryFilter = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO {...seoData} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technology Services
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Comprehensive AI, cloud, cybersecurity, and development solutions designed to transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <OptimizedButton
                variant="primary"
                size="lg"
                onClick={() => window.location.href = '/contact'}
              >
                Get Started
              </OptimizedButton>
              <OptimizedButton
                variant="outline"
                size="lg"
                onClick={() => window.location.href = '/pricing'}
              >
                View Pricing
              </OptimizedButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-cyan-500 focus:outline-none"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              <FilterButton
                active={selectedCategory === 'all'}
                onClick={() => handleCategoryFilter('all')}
              >
                All Services
              </FilterButton>
              {serviceCategories.map((category) => (
                <FilterButton
                  key={category.title}
                  active={selectedCategory === category.title}
                  onClick={() => handleCategoryFilter(category.title)}
                >
                  {category.title}
                </FilterButton>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-slate-400 text-lg mb-4">No services found</div>
              <p className="text-slate-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss your project and find the perfect solution for your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <OptimizedButton
                variant="primary"
                size="lg"
                onClick={() => window.location.href = '/contact'}
              >
                Schedule Consultation
              </OptimizedButton>
              <OptimizedButton
                variant="outline"
                size="lg"
                onClick={() => window.location.href = '/pricing'}
              >
                View Pricing
              </OptimizedButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}