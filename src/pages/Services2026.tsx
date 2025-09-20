import React, { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {;
  Search,;
  ArrowRight,;
  DollarSign,;
  ExternalLink,;
  Workflow,;
  MessageSquare,;
  Globe,;
  Brain,;
  Shield,;
  Cloud,;
  Cpu,;
  Zap,;
  Rocket,;
  Heart,;
  Lock,;
  Users,;
  BarChart3,;
  Target,;
  TrendingUp,;
  Award,;
  Star,;
  CheckCircle,;
  Clock,;
  Phone,;
  Mail,;
  MapPin;
} from "lucide-react"
import SEO from "@/components/SEO"
import { INNOVATIVE_MICRO_SAAS_SERVICES_2026, SPECIALIZED_SERVICES_2026 } from "../data/innovativeMicroSaasServices2026"
const Services2026: React.FC = () => {
  const [query, setQuery] = useState(''),;
  const [selectedCategory, setSelectedCategory] = useState('all'),;
  const [sortBy, setSortBy] = useState('innovation'),;

  const allServices = [...INNOVATIVE_MICRO_SAAS_SERVICES_2026, ...SPECIALIZED_SERVICES_2026]

  const categories = [;
    { id: 'all', name: 'All Services', icon: GitFork, count: allServices.length };
    { id: 'AI & Analytics', name: 'AI & Analytics', icon: Brain, count: allServices.filter(s => s.category === 'AI & Analytics').length };
    { id: 'Quantum Computing', name: 'Quantum Computing', icon: Zap, count: allServices.filter(s => s.category === 'Quantum Computing').length };
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: Shield, count: allServices.filter(s => s.category === 'Cybersecurity').length };
    { id: 'IoT & Edge Computing', name: 'IoT & Edge', icon: Cpu, count: allServices.filter(s => s.category === 'IoT & Edge Computing').length };
    { id: 'AI & Content', name: 'AI & Content', icon: MessageSquare, count: allServices.filter(s => s.category === 'AI & Content').length };
    { id: 'Digital Twin', name: 'Digital Twin', icon: Rocket, count: allServices.filter(s => s.category === 'Digital Twin').length };
    { id: 'AI & HR', name: 'AI & HR', icon: Users, count: allServices.filter(s => s.category === 'AI & HR').length };
    { id: 'Sustainability', name: 'Sustainability', icon: Heart, count: allServices.filter(s => s.category === 'Sustainability').length };
    { id: 'AI & IoT', name: 'AI & IoT', icon: BarChart3, count: allServices.filter(s => s.category === 'AI & IoT').length };
  ];
  const filteredAndSorted = useMemo(() => {;
    let filtered = allServices;

    //[^;]*
    if (query.trim()) {;
      const q = query.trim().toLowerCase()
      filtered = filtered.filter(s =>;
        s.title.toLowerCase().includes(q) ||;
        s.description.toLowerCase().includes(q) ||;
        s.category.toLowerCase().includes(q) ||;
        s.tags?.some(t => t.toLowerCase().includes(q));
      ),;
    };

    //[^;]*
    if (selectedCategory !== 'all') {;
      filtered = filtered.filter(s => s.category === selectedCategory),;
    };

    //[^;]*
    switch (sortBy) {;
      case 'price':;
        return filtered.sort((a, b) => a.price - b.price),;
      case 'innovation':;
        return filtered.sort((a, b) => {;
          const innovationLevels = { 'Revolutionary': 3, 'Cutting-Edge': 2, 'Advanced': 1 };
          return (innovationLevels[b.innovationLevel as keyof typeof innovationLevels] || 0) - (innovationLevels[a.innovationLevel as keyof typeof innovationLevels] || 0),
        }),;
      case 'roi':;
        return filtered.sort((a, b) => {;
          const aROI = parseInt(a.roi.split('-')[0]);
          const bROI = parseInt(b.roi.split('-')[0]);
          return bROI - aROI,;
        }),;
      default: return filtered;
    };
  }, [query, selectedCategory, sortBy, allServices]),;

  const featuredServices = allServices.filter(s => s.innovationLevel === 'Revolutionary').slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">;
      <SEO;
        title="2026 Services - Zion Tech Group"
        description="Cutting-edge AI, Quantum Computing, Cybersecurity, IoT, and Micro SaaS solutions for 2026. Transform your business with revolutionary technology."
      />;

      {/* Hero Section */};
      <section className="relative py-20 sm:py-32 overflow-hidden">;
        {/* Animated Background */};
        <div className="absolute inset-0">;
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-pulse"></[^>]*>
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-bounce"></[^>]*>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></[^>]*>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-bounce"></[^>]*>
        </[^>]*>

        <div className="container mx-auto px-4 relative z-10">;
          <div className="text-center max-w-4xl mx-auto">;
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
            >;
              <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">;
                2026 Services;
              </[^>]*>
              <p className="mt-6 text-xl sm:text-2xl text-slate-300 leading-relaxed">;
                Revolutionary AI, Quantum Computing, and Micro SaaS solutions that will transform your business in 2026 and beyond;
              </[^>]*>
              <div className="mt-8 flex flex-wrap justify-center gap-4">;
                <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-cyan-400/30">;
                  <[^>]*/>
                  <span className="text-sm font-medium">AI-Powered</[^>]*>
                </[^>]*>
                <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-blue-400/30">;
                  <[^>]*/>
                  <span className="text-sm font-medium">Quantum-Ready</[^>]*>
                </[^>]*>
                <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-purple-400/30">;
                  <[^>]*/>
                  <span className="text-sm font-medium">Enterprise-Grade</[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Search and Filters */};
      <section className="py-12">;
        <div className="container mx-auto px-4">;
          <div className="max-w-4xl mx-auto">;
            {/* Search Bar */};
            <div className="relative mb-8">;
              <[^>]*/>
              <input;
                value={query};
                onChange={(e) => setQuery(e.target.value)};
                placeholder="Search revolutionary services, e.g. quantum, AI, cybersecurity, IoT..."
                className="[^"]*"
              />;
            </[^>]*>

            {/* Category Filters */};
            <div className="flex flex-wrap gap-3 mb-8">;
              {categories.map((category) => (;
                <button;
                  key={category.id};
                  onClick={() => setSelectedCategory(category.id)};
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-200 ${;
                    selectedCategory === category.id
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                      : 'bg-slate-800/50 border-slate-600/50 text-slate-300 hover:border-cyan-400/50 hover:text-cyan-300'
                  }`};
                >;
                  <[^>]*/>
                  <span className="font-medium">{category.name}</[^>]*>
                  <span className="text-xs bg-slate-700/50 px-2 py-1 rounded-full">{category.count}</[^>]*>
                </[^>]*>
              ))};
            </[^>]*>

            {/* Sort Options */};
            <div className="flex items-center gap-4 mb-8">;
              <span className="text-slate-400 font-medium">Sort by:</[^>]*>
              <select;
                value={sortBy};
                onChange={(e) => setSortBy(e.target.value)};
                className="[^"]*"
              >;
                <option value="innovation">Innovation Level</[^>]*>
                <option value="price">Price</[^>]*>
                <option value="roi">ROI</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Featured Services */};
      {featuredServices.length > 0 && (;&& (; (
        <section className="py-16">;
          <div className="container mx-auto px-4">;
            <div className="text-center mb-12">;
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">;
                Revolutionary Services;
              </[^>]*>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">;
                Our most innovative and cutting-edge solutions that are reshaping industries;
              </[^>]*>
            </[^>]*>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">;
              {featuredServices.map((service) => (;
                <motion.div
                  key={service.id};
                  initial={{ opacity: 0, y: 20 }};
                  whileInView={{ opacity: 1, y: 0 }};
                  transition={{ duration: 0.6 }};
                  className="[^"]*"
                >;
                  <div className="flex items-center justify-between mb-4">;
                    <div className="text-xs uppercase tracking-wide text-cyan-300/80 font-semibold">;
                      {service.category};
                    </[^>]*>
                    <div className="flex items-center gap-1 text-yellow-400">;
                      <[^>]*/>
                      <span className="text-xs font-medium">Revolutionary</[^>]*>
                    </[^>]*>
                  </[^>]*>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">;
                    {service.title};
                  </[^>]*>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">;
                    {service.description};
                  </[^>]*>

                  <div className="space-y-3 mb-6">;
                    <div className="flex items-center justify-between text-sm">;
                      <span className="text-slate-400">Market Price:</[^>]*>
                      <span className="text-cyan-300 font-semibold">{service.marketPrice}</[^>]*>
                    </[^>]*>
                    <div className="flex items-center justify-between text-sm">;
                      <span className="text-slate-400">ROI:</[^>]*>
                      <span className="text-green-400 font-semibold">{service.roi}</[^>]*>
                    </[^>]*>
                    <div className="flex items-center justify-between text-sm">;
                      <span className="text-slate-400">Delivery:</[^>]*>
                      <span className="text-blue-300 font-semibold">{service.estimatedDelivery}</[^>]*>
                    </[^>]*>
                  </[^>]*>

                  <div className="flex items-center justify-between">;
                    <Link;
                      to={`/services/${service.id}`};
                      className="[^"]*"
                    >;
                      Learn More;
                      <[^>]*/>
                    </[^>]*>

                    <div className="text-xs text-slate-500">;
                      ID: {service.id};
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>
      )};

      {/* All Services Grid */};
      <section className="py-16">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">;
              All Services ({filteredAndSorted.length});
            </[^>]*>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">;
              Explore our comprehensive portfolio of innovative solutions;
            </[^>]*>
          </[^>]*>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">;
            {filteredAndSorted.map((service) => (;
              <motion.div
                key={service.id};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.6 }};
                className="[^"]*"
              >;
                <div className="flex items-center justify-between mb-3">;
                  <div className="text-xs uppercase tracking-wide text-cyan-300/70 font-semibold">;
                    {service.category};
                  </[^>]*>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${;
                    service.innovationLevel === 'Revolutionary'
                      ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                      : service.innovationLevel === 'Cutting-Edge'
                      ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                      : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                  }`}>;
                    {service.innovationLevel};
                  </[^>]*>
                </[^>]*>

                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors mb-2 line-clamp-2">;
                  {service.title};
                </[^>]*>

                <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">;
                  {service.description};
                </[^>]*>

                <div className="space-y-2 mb-4">;
                  <div className="flex items-center justify-between text-sm">;
                    <span className="text-slate-400">Price:</[^>]*>
                    <span className="text-cyan-300 font-semibold">{service.marketPrice}</[^>]*>
                  </[^>]*>
                  <div className="flex items-center justify-between text-sm">;
                    <span className="text-slate-400">ROI:</[^>]*>
                    <span className="text-green-400 font-semibold">{service.roi}</[^>]*>
                  </[^>]*>
                </[^>]*>

                <div className="flex items-center justify-between">;
                  <Link;
                    to={`/services/${service.id}`};
                    className="[^"]*"
                  >;
                    View Details;
                    <[^>]*/>
                  </[^>]*>

                  <div className="text-xs text-slate-500">;
                    {service.id};
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Contact and Pricing Section */};
      <section className="py-20 bg-gradient-to-r from-slate-900/50 to-slate-800/50">;
        <div className="container mx-auto px-4">;
          <div className="max-w-4xl mx-auto text-center">;
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">;
              Ready to Transform Your Business?;
            </[^>]*>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">;
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">;
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</[^>]*>
                <p className="text-slate-300 text-sm mb-3">Speak directly with our experts</[^>]*>
                <a;
                  href="tel:+13024640950"
                  className="[^"]*"
                >;
                  +1 302 464 0950;
                </[^>]*>
              </[^>]*>

              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">;
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</[^>]*>
                <p className="text-slate-300 text-sm mb-3">Get detailed information and quotes</[^>]*>
                <a;
                  href="mailto:kleber@ziontechgroup.com"
                  className="[^"]*"
                >;
                  kleber@ziontechgroup.com
                </[^>]*>
              </[^>]*>

              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">;
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 mx-auto">;
                  <[^>]*/>
                </[^>]*>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</[^>]*>
                <p className="text-slate-300 text-sm mb-3">Our headquarters location</[^>]*>
                <p className="text-purple-400 font-medium text-sm">;
                  364 E Main St STE 1008<[^>]*/>
                  Middletown DE 19709;
                </[^>]*>
              </[^>]*>
            </[^>]*>

            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">;
              <h3 className="text-2xl font-bold text-white mb-6">Pricing Overview</[^>]*>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-left">;
                <div>;
                  <h4 className="font-semibold text-cyan-300 mb-3">AI & Analytics Services</[^>]*>
                  <ul className="text-sm text-slate-300 space-y-2">;
                    <li>• AI Business Intelligence: $3,999 - $12,999/month</[^>]*>
                    <li>• AI Content Creation: $2,999 - $9,999/month</[^>]*>
                    <li>• AI HR Platform: $4,999 - $15,000/month</[^>]*>
                  </[^>]*>
                </[^>]*>

                <div>;
                  <h4 className="font-semibold text-blue-300 mb-3">Quantum & Advanced Tech</[^>]*>
                  <ul className="text-sm text-slate-300 space-y-2">;
                    <li>• Quantum Computing: $15,000 - $50,000/month</[^>]*>
                    <li>• Quantum ML: $20,000 - $75,000/month</[^>]*>
                    <li>• Digital Twin: $12,999 - $45,000/month</[^>]*>
                  </[^>]*>
                </[^>]*>

                <div>;
                  <h4 className="font-semibold text-purple-300 mb-3">Cybersecurity & IoT</[^>]*>
                  <ul className="text-sm text-slate-300 space-y-2">;
                    <li>• AI Cybersecurity: $5,999 - $19,999/month</[^>]*>
                    <li>• IoT Edge Platform: $7,999 - $25,000/month</[^>]*>
                    <li>• Predictive Maintenance: $8,999 - $28,000/month</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>

              <div className="mt-8 pt-6 border-t border-slate-700/50">;
                <p className="text-slate-300 text-sm mb-4">;
                  All services include enterprise support, custom integrations, and dedicated implementation teams.;
                </[^>]*>
                <div className="flex flex-wrap gap-4 justify-center">;
                  <Link;
                    to="/contact"
                    className="[^"]*"
                  >;
                    Get Started;
                    <[^>]*/>
                  </[^>]*>

                  <Link;
                    to="/request-quote"
                    className="[^"]*"
                  >;
                    Request Quote;
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Footer Links */};
      <section className="py-12">;
        <div className="container mx-auto px-4 text-center">;
          <div className="text-sm text-slate-400 mb-4">;
            Questions? Call <a className="text-cyan-300 hover: text-cyan-200" href="tel:+13024640950">+1 302 464 0950</a> or email <a className="text-cyan-300 hover:text-cyan-200" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</[^>]*>
          </[^>]*>
          <div className="text-sm text-slate-500">;
            Visit our main site: <a className="text-cyan-300 hover:text-cyan-200" href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer">ziontechgroup.com</[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default Services2026;