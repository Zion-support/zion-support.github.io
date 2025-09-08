  Users, 
  Shield, 
  Zap,
  Brain,
  Cloud,
  Database,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICE_CATEGORIES, SERVICE_PRICING_TIERS, SAMPLE_SERVICES } from "@/data/sampleServices";

export default function EnhancedServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const filteredServices = SAMPLE_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory;
    
    let matchesPrice = true;
    if (priceRange === "low" && service.price > 3000) matchesPrice = false;
    if (priceRange === "medium" && (service.price < 3000 || service.price > 8000)) matchesPrice = false;
    if (priceRange === "high" && service.price < 8000) matchesPrice = false;
    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === 'low' && service.price && service.price < 5000) ||
                        (selectedPriceRange === 'medium' && service.price && service.price >= 5000 && service.price < 15000) ||
                        (selectedPriceRange === 'high' && service.price && service.price >= 15000);
  const getPricingModelLabel = (model: string) => {
    switch (model) {
      case 'one-time': return 'One-time';
      case 'monthly': return 'Monthly';
      case 'hourly': return 'Hourly';
      case 'project-based': return 'Project-based';
      default: return model;
    }
  };

  const getSupportLevelColor = (level: string) => {
    switch (level) {
      case 'basic': return 'bg-gray-100 text-gray-800';
      case 'standard': return 'bg-blue-100 text-blue-800';
      case 'premium': return 'bg-purple-100 text-purple-800';
      case 'enterprise': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAvailabilityIcon = (availability: string) => {
    switch (availability) {
      case 'immediate': return <Zap className="w-4 h-4 text-green-500" />;
      case '1-2 weeks': return <Clock className="w-4 h-4 text-yellow-500" />;
      case '1 month': return <Calendar className="w-4 h-4 text-orange-500" />;
      case 'custom': return <Users className="w-4 h-4 text-blue-500" />;
      default: return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Enhanced IT & AI Services - Zion Tech Group" 
        description="Discover our comprehensive range of AI, cybersecurity, cloud, and specialized IT services. Expert solutions for modern businesses."
        keywords="AI services, cybersecurity, cloud solutions, IT consulting, digital transformation, healthcare IT, financial services IT"
      {/* Contact Information */}
      <div className="bg-zion-blue-dark py-8 border-b border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-zion-cyan">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {SERVICE_CATEGORIES.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Pricing Filter */}
            <select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Pricing</option>
              <option value="budget">Budget ($0-$999)</option>
              <option value="mid-range">Mid-Range ($1K-$2.9K)</option>
              <option value="enterprise">Enterprise ($3K+)</option>
            </select>

            {/* Support Level Filter */}
            <select
              value={selectedSupport}
              onChange={(e) => setSelectedSupport(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Support Levels</option>
              <option value="basic">Basic</option>
              <option value="premium">Premium</option>
              <option value="enterprise">Enterprise</option>
            </select>
          </div>

          {/* Sort Options */}
          <div className="mt-4 flex items-center gap-4">
            <span className="text-gray-600">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="category">Category</option>
            </select>
            <span className="text-gray-500 text-sm">
              {sortedServices.length} services found
            </span>
      <div className="bg-zion-blue-dark py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-zion-cyan mb-2" />
              <p className="text-zion-slate-light">Phone</p>
              <p className="text-white font-semibold">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-zion-cyan mb-2" />
              <p className="text-zion-slate-light">Email</p>
              <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-zion-cyan mb-2" />
              <p className="text-zion-slate-light">Address</p>
              <p className="text-white font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</p>
      {/* CTA Section */}
      <div className="bg-zion-blue py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you implement the right technology solutions for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Mail className="w-5 h-5 mr-2" />
              Request Custom Quote
            </Button>
          </div>
}
};

export default EnhancedServicesPage;
