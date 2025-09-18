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
import SEO from '../components/SEO';
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

        {/* CTA Section */}
import React from 'react';
import { SEO } from "../components/SEO";

import { GradientHeading } from "../components/GradientHeading";


export default function Services() {
    const contact = {
        mobile: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        address: '364 E Main St STE 1008 Middletown DE 19709',
        website: 'https://ziontechgroup.com'
    };
    return (<>
			<SEO title="Services - Micro SaaS, IT and AI Solutions | Zion Tech Group" description="Explore our micro SaaS products, enterprise IT services, and AI solutions with transparent pricing, clear features, and easy ways to get started." canonical="/services" url="https://ziontechgroup.com/services"/>

			<main className="min-h-screen bg-zion-blue pt-24 pb-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-bold text-white">Services & Solutions</h1>
						<p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
							Real, ready-to-deploy offerings across Micro SaaS, AI, Cybersecurity, Data, and Cloud.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-12">
						{servicesCatalog.map(category => (<section key={category.slug}>
								<h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">{category.name}</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
									{category.items.map(item => (<div key={item.id} className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 hover:border-zion-cyan transition-all">
											<div className="flex items-start justify-between gap-4">
												<div>
													<h3 className="text-xl font-semibold text-white">{item.title}</h3>
													<p className="text-zion-slate-light mt-2">{item.description}</p>
												</div>
												<div className="text-right min-w-[120px]">
													<div className="text-zion-cyan font-semibold">{item.price}</div>
													<div className="text-zion-slate-light text-sm">{item.billing === 'month' ? 'Monthly' : item.billing === 'hour' ? 'Hourly' : 'Project-based'}</div>
												</div>
											</div>

											<ul className="mt-4 space-y-2 text-zion-slate-light text-sm list-disc list-inside">
												{item.features.map((f, idx) => (<li key={idx}>{f}</li>))}
											</ul>

											<div className="mt-6 flex items-center justify-between">
												<Link to={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noopener noreferrer' : undefined} className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium py-2 px-4 rounded-lg border border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/20">
													<span>{item.ctaLabel}</span>
													{item.external && <ExternalLink className="w-4 h-4"/>}
												</Link>
												<span className="text-zion-slate-light text-sm">Category: {item.category}</span>
											</div>
										</div>))}
								</div>
							</section>))}
					</div>

					<section className="mt-16">
						<h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Contact Us</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6">
								<div className="flex items-center gap-3 text-white"><Phone className="w-5 h-5"/><span>{contact.mobile}</span></div>
							</div>
							<div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6">
								<div className="flex items-center gap-3 text-white"><Mail className="w-5 h-5"/><span>{contact.email}</span></div>
							</div>
							<div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6">
								<div className="flex items-center gap-3 text-white"><MapPin className="w-5 h-5"/><span>{contact.address}</span></div>
							</div>
						</div>
						<div className="mt-6">
							<Link to="/contact" className="inline-flex items-center gap-2 text-white underline">Go to contact page</Link>
						</div>
					</section>

				</div>
			</main>
		</>);
}
