import { SEO } from "@/components/SEO"
import { motion } from "framer-motion"
import {;
    ArrowRight, Cloud as CloudIcon,;
    Cpu, ExternalLink, Globe as GlobeIcon, Mail, MapPin, MessageSquare, Phone, Search, Sparkles, Star;
} from "lucide-react"
import React, { useState, useMemo } from "react"
import { Link } from "react-router-dom"
import { zionCuttingEdgeServices2029 } from "../../data/zion-2029-cutting-edge-services"
import { zionEmergingTechServices2029 } from "../../data/zion-2029-emerging-tech-services"
//[^;]*
const Section: React.FC<{;
  icon: React.ReactNode,title: string,description: string,items: any[],gradient: string;
}> = ({ icon, title, description, items, gradient }) => (;
  <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r ${gradient}`}>;
    <div className="max-w-7xl mx-auto">;
      <div className="text-center mb-16">;
        <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-6">;
          {icon};
        </[^>]*>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</[^>]*>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">{description}</[^>]*>
      </[^>]*>
      ;
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
        {items.slice(0, 6).map((item, index) => (;
          <[^>]*/>
        ))};
      </[^>]*>
      ;
      {items.length > 6 && (;&& (; (
        <div className="text-center mt-12">;
          <Link;
            to="/services"
            className="[^"]*"
          >;
            View All {title};
            <[^>]*/>
          </[^>]*>
        </[^>]*>
      )};
    </[^>]*>
  </[^>]*>
);
//[^;]*
const ServiceCard: React.FC<{ service: any, index: number }> = ({ service, index }) => (;
  <motion.div
    initial={{ opacity: 0, y: 20 }};
    whileInView={{ opacity: 1, y: 0 }};
    transition={{ duration: 0.5, delay: index * 0.1 }};
    viewport={{ once: true }};
    className="[^"]*"
  >;
    <div className="flex items-center justify-between mb-4">;
      <h3 className="text-xl font-semibold text-white">{service.name || service.title}</[^>]*>
      {service.isPopular && (;&& (; (
        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">Popular</[^>]*>
      )};
    </[^>]*>
    <p className="text-gray-300 mb-4">{service.description || service.desc}</[^>]*>
    <div className="mb-4">;
      <span className="text-2xl font-bold text-cyan-400">{service.price}</[^>]*>
    </[^>]*>
    <div className="mb-4">;
      <div className="flex items-center mb-2">;
        <div className="flex text-yellow-400">;
          {[...Array(5)].map((_, i) => (;
            <[^>]*/>
          ))};
        </[^>]*>
        <span className="text-sm text-gray-400 ml-2">({service.reviews || 25} reviews)</[^>]*>
      </[^>]*>
    </[^>]*>
    <div className="mb-4">;
      <h4 className="text-sm font-semibold text-white mb-2">Key Features:</[^>]*>
      <div className="grid grid-cols-1 gap-1">;
        {(service.features || []).slice(0, 3).map((feature: string, idx: number) => (
          <div key={idx} className="flex items-center text-sm text-gray-300">;
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></[^>]*>
            {feature};
          </[^>]*>
        ))};
      </[^>]*>
    </[^>]*>
    <Link;
      to={service.cta || '#'}
      className="[^"]*"
    >;
      Learn More;
      <[^>]*/>
    </[^>]*>
  </[^>]*>
);
export default function ComprehensiveServices() {;
  const [searchTerm, setSearchTerm] = useState(''),;
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),;
  const [sortBy, setSortBy] = useState<string>('popular'),;

  //[^;]*
  const allServices = [...zionCuttingEdgeServices2029, ...zionEmergingTechServices2029]

  //[^;]*
  const filteredServices = allServices.filter(service => {;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase()),;
    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase() === selectedCategory.toLowerCase()
    return matchesSearch && matchesCategory,;&& matchesCategory,; matchesCategory,
  }),;

  //[^;]*
  const sortedServices = [...filteredServices].sort((a, b) => {;
    switch (sortBy) {;
      case 'price-low':;
        return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, '')),;
      case 'price-high':;
        return parseFloat(b.price.replace('$', '').replace(, '')) - parseFloat(a.price.replace('$', '').replace(, ''));
      case 'rating':;
        return b.rating - a.rating
      case 'newest':;
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime()
      default: return b.isPopular ? 1 : -1
    };
  });
  //[^;]*
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))]

  //[^;]*
  const microSaaS = allServices.filter(service => service.category === 'Micro SaaS').slice(0, 6)
  const itServices = allServices.filter(service => service.category === 'IT Services').slice(0, 6)
  const aiSolutions = allServices.filter(service => service.category === 'AI Solutions').slice(0, 6)
  return (
    <>;
      <SEO;
        title="Comprehensive Services - Zion Tech Group"
        description="Micro SaaS, IT services, and AI solutions with clear pricing, links, and rapid delivery."
        keywords="micro saas, it services, ai solutions, soc2 automation, kubernetes, rag platform"
        canonical="https://ziontechgroup.com/comprehensive-services"
      />;
      ;
      {/* Hero Section */};
      <section className="relative pt-32 pb-20 overflow-hidden">;
        <[^>]*/>
        <[^>]*/>
        ;
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion.div ;
            className="[^"]*"
            initial={{ opacity: 0, y: 30 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">;
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">;
                Comprehensive;
              </[^>]*>
              <[^>]*/>
              <span className="text-white">Services</[^>]*>
            </[^>]*>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">;
              Discover our complete portfolio of cutting-edge technology solutions designed to transform industries and drive innovation;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link;
                to="/contact"
                className="[^"]*"
              >;
                <[^>]*/>
                Get Started Today;
              </[^>]*>
              <a;
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="[^"]*"
              >;
                <[^>]*/>
                Visit Our Website;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Sections */};
      <Section;
        icon={<Sparkles className="h-6 w-6" />};
        title="Micro SaaS Products"
        description="Subscription software for security, legal, revenue, and operations with fast time-to-value."
        items={microSaaS};
        gradient="from-violet-900/60 to-indigo-900/40"
      />;

      <Section;
        icon={<CloudIcon className="h-6 w-6" />};
        title="IT Services"
        description="Cloud, platform, and security engagements by seasoned architects and SREs."
        items={itServices};
        gradient="from-sky-900/60 to-teal-900/40"
      />;

      <Section;
        icon={<Cpu className="h-6 w-6" />};
        title="AI Solutions"
        description="Applied AI with governance, privacy, and business outcomes at the core."
        items={aiSolutions};
        gradient="from-fuchsia-900/60 to-rose-900/40"
      />;

      {/* Contact CTA */};
      <section className="py-16">;
        <motion.div className="max-w-5xl mx-auto px-6">;
          <div className="rounded-2xl border border-white/10 p-8 bg-white/5">;
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Talk to an expert</[^>]*>
            <p className="text-white/80 mb-6">We will scope your needs and share a clear proposal with milestones and pricing.</[^>]*>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
              <a href="tel:+13024640950" className="flex items-center p-4 rounded-lg bg-black/40 border border-white/10">;
                <[^>]*/>
                <span className="text-white">+1 (302) 464-0950</[^>]*>
              </[^>]*>
              <a href="mailto:kleber@ziontechgroup.com" className="flex items-center p-4 rounded-lg bg-black/40 border border-white/10">;
                <[^>]*/>
                <span className="text-white">kleber@ziontechgroup.com</[^>]*>
              </[^>]*>
              <div className="flex items-center p-4 rounded-lg bg-black/40 border border-white/10">;
                <[^>]*/>
                <span className="text-white">Delaware, USA</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>

          <div className="flex flex-col sm: flex-row gap-4 justify-center mt-8">;
            <Link;
              to="/contact"
              className="[^"]*"
            >;
              <[^>]*/>
              Get Started Today;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};