<<<<<<< HEAD
Shield, Zap, Eye, Phone, Mail, MapPin, Globe, DollarSign, Clock, Users, Search, Building} from "lucide - react" COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, PRICING_TIERS} from "@/data / comprehensiveServices" const [searchTerm, setSearchTerm] = useState(") const [selectedCategory, setSelectedCategory] = useState("all") const [selectedPricingTier, setSelectedPricingTier] = useState("all") const filteredServices = useMemo(() => { return COMPREHENSIVE_SERVICES.filter(service => { const matchesSearch = service.title.toLowerCase () .includes(searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes(searchTerm.toLowerCase () )  const matchesCategory = selectedCategory === "all" || service.category === selectedCategory const matchesPricing = selectedPricingTier === "all" || service.pricingTier === selectedPricingTier return matchesSearch && matchesCategory && matchesPricing })}, [searchTerm, selectedCategory, selectedPricingTier])  return (<div className="min - h-screen bg-zion - blue -dark"> {} <div className="bg-gradient - to - br from - zion - blue to - zion - blue - dark py-20 px-4"> <div className="container mx - auto text-center"> <h1 className="text-4xl md: text-6xl font - bold text-white mb-6"> Comprehensive Micro SAAS Solutions </h1> <p className="text-xl text-zion - slate - light mb-8 max - w-3xl mx -auto"> Discover our extensive portfolio of innovative micro SAAS, IT, and AI services designed to transform your business operations and drive growth </p> <div className="flex flex - wrap justify - center gap-4"> <Link to="/contact"> <Button size="lg" className="bg-zion - cyan text-zion - blue - dark hover:bg-zion - cyan -light" > <Phone className="w-5 h-5 mr-2" /> Get Started Today </Button> </Link> <Link to="/services - pricing"> <Button size="lg" variant="outline" className="border-white text-white hover:bg-white / 10" > <DollarSign className="w-5 h-5 mr-2" /> View Pricing </Button> </Link> </div> </div> </div> {} <div className="bg-zion - blue py-8 px-4"> <div className="container mx -auto"> <div className="flex flex - wrap justify - center items - center gap-8 text-white"> <div className="flex items - center gap-2"> <Phone className="w-5 h-5 text-zion -cyan" /> <span>+1 302 464 0950</span> </div> <div className="flex items - center gap-2"> <Mail className="w-5 h-5 text-zion -cyan" /> <span > kleber@ziontechgroup.com</span> </div> <div className="flex items - center gap-2"> <MapPin className="w-5 h-5 text-zion -cyan" /> <span > 364 E Main St STE 1008 Middletown DE 19709</span> </div> <div className="flex items - center gap-2"> <Globe className="w-5 h-5 text-zion -cyan" /> <a href="https:
=======
import React from 'react';
import { SEO } from '@/components/SEO';

const ComprehensiveServices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="ComprehensiveServices - Zion Tech Group"
        description="Professional ComprehensiveServices services by Zion Tech Group"
        keywords="comprehensiveservices, technology, services"
      />
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">ComprehensiveServices</h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional ComprehensiveServices services to help your business grow.
          </p>
          <div className="flex justify-center">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServices;
>>>>>>> main
