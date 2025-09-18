import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap, 
  Users, 
  Globe, 
  Cpu,
  Lock,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Code,
  Database,
  Network,
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  ShoppingCart,
  Headphones,
  Mail,
  Search,
  HelpCircle,
  ShieldCheck,
  Globe2,
  Leaf,
  Sparkles,
  Target,
  DollarSign,
  Clock,
  Award,
  Phone,
  Mail as MailIcon,
  MapPin,
  Infinity,
  Building2,
  Car,
  Factory,
  GraduationCap,
  Scale,
  Truck,
  Wheat,
  Zap2,
  Brain2,
  Cloud2,
  Lock2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_INNOVATIVE_SERVICES_2030 } from '../data/comprehensiveInnovativeServices2030';
import { COMPREHENSIVE_PRICING_GUIDE_2030 } from '../data/comprehensivePricingGuide2030';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  const filteredServices = COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return a.price - b.price;
      case 'reviews':
        return b.reviewCount - a.reviewCount;
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedServices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentServices = sortedServices.slice(startIndex, endIndex);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const getCategoryIcon = (categoryName: string) => {
    const category = categories.find(cat => cat.id === categoryName);
    return category ? category.icon : '🚀';
  };

  const getCategoryColor = (categoryName: string) => {
    const category = categories.find(cat => cat.id === categoryName);
    return category ? category.color : 'from-cyan-500 to-blue-500';
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  return (
    <>
      <SEO 
        title="AI & Technology Services | Zion Tech Group"
        description="Discover our comprehensive suite of AI-powered micro SAAS services, cutting-edge technology solutions, and innovative platforms that transform businesses across industries."
        keywords="AI services, micro SAAS, technology solutions, business intelligence, cybersecurity, cloud computing, blockchain, IoT, quantum computing"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                      {service.tags.length > 3 && (
                        <span className="px-2 py-1 bg-white/10 text-gray-400 text-xs rounded-full border border-white/20">
                          +{service.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Service Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-white/5 rounded-lg">
                        <div className="text-lg font-bold text-cyan-400">{service.aiScore}%</div>
                        <div className="text-xs text-gray-400">AI Score</div>
                      </div>
                      <div className="text-center p-3 bg-white/5 rounded-lg">
                        <div className="text-lg font-bold text-emerald-400">{service.setupTime}</div>
                        <div className="text-xs text-gray-400">Setup Time</div>
                      </div>
                    </div>

          </div>
        </motion.div>
        </div>
      </div>
    </section>
</>
  );
}
