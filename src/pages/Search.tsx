<<<<<<< HEAD
import: React, { useState, useEffect } from 'react';';';';
import: { motion } from 'framer-motion';';';';
import: { 
=======
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';""
=======
<<<<<<< HEAD
import React, { useState } from 'react';
import { Search as SearchIcon, Filter } from 'lucide-react';
;
const Search: React.FC = () => {;
  const [query, setQuery] = useState(');
;
  const handleSearch = (e: React.FormEvent) => {;
    e.preventDefault();
    // Implement search functionality;
    // TODO: Implement actual search functionality;
  };
;
  return (;
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>;
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>;
        <div className='text-center mb-12'>;
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>Search</h1>;
          <p className='text-xl text-gray-600'>Find what you're looking for</p>;
        </div>;
        <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-8'>;
          <form onSubmit={handleSearch} className='mb-6'>;
            <div className='flex'>;
              <input;
                type='text';
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Search our website...';
                className='flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500';
              />;
              <button;
                type='submit';
                className='px-6 py-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors';
              >;
                <SearchIcon className='h-5 w-5' />;
              </button>;
            </div>;
          </form>;
          <div className='text-center text-gray-500'>;
            <SearchIcon className='h-12 w-12 mx-auto mb-4 text-gray-300' />;
            <p>Enter a search term to find relevant content</p>;
          </div>;
        </div>;
      </div>;
    </div>;
=======
<<<<<<< HEAD
import React from 'react';
import {SEO } from '@/components/SEO';

export default function Search() {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO title="Search - Zion Tech Group" description="Professional Search services by Zion Tech Group" />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">Search</h1>
        <p className="text-gray-300 text-lg">
          Professional Search services to help your business grow.
        </p>
      </div>
    </div>
  );
}
=======
<<<<<<< HEAD
import React, { useState, useEffect } from &apos;react';
import { motion } from &apos;framer-motion';
import { 
>>>>>>> main
  Search as SearchIcon, 
  Filter, 
  Server, 
  Users, 
  Building,
  Star,
  MapPin,
  Clock,
  DollarSign,
  ArrowUpDown,
  Calendar,
  Eye,
  Bookmark,
  Share2
<<<<<<< HEAD
} from 'lucide-react';';';';
import: { SEO } from '../components/SEO';';';';

const: Search: React.FC: = () => ,{,
  const [searchQuery, setSearchQuery] = useState('');';';';
  const: [activeCategory, setActiveCategory] = useState('all');';';';
  const: [sortBy, setSortBy] = useState('relevance');';';';
  const: [results, setResults] = useState<any[]>([]);
  const: [loading, setLoading] = useState(false);

  const: categories = [;
    { id: 'all,', name: 'All: Categories,', count: 0, },';';';
    { id: 'services,', name: 'Services,', count: 0, },';';';
    { id: 'talent,', name: 'Talent,', count: 0, },';';';
    { id: 'equipment,', name: 'Equipment,', count: 0, },';';';
    { id: 'companies,', name: 'Companies,', count: 0, }';';';
=======
} from &apos;lucide-react';
import { SEO } from &apos;../components/SEO';&apos;&apos;
=======
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';""
=======
import React, { useState, useEffect } from 'react
>>>>>>> main
>>>>>>> main
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { SEO } from '../components/SEO';
=======
import { 
  Search as SearchIcon, Filter, 
  Server, Users, 
  Building, Star,
  MapPin, Clock,
  DollarSign, ArrowUpDown,
  Calendar, Eye,
<<<<<<< HEAD
  Bookmark, Share2'
=======
<<<<<<< HEAD
  Bookmark, Share2;", "
} from 'lucide-react';""
import { SEO } from '../components/SEO';""
=======
<<<<<<< HEAD
  Bookmark, Share2
>>>>>>> main
} from 'lucide-react';
import { SEO } from '../components/SEO';
<<<<<<< HEAD
const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('relevance')
  const [results, setResults] = useState<any[]>([]);
=======
>>>>>>> main

const Search: React.FC = () => {}
  const;const;const [searchQuery, setSearchQuery] = useState(&apos;&apos;);&apos;&apos;
  const [activeCategory, setActiveCategory] = useState(&apos;all&apos;);&apos;
  const [sortBy, setSortBy] = useState(&apos;relevance&apos;);&apos;
  const [results, setResults] = useState<;<;<any[]>([]);
>>>>>>> main
  const [loading, setLoading] = useState(false);

  const categories = [
<<<<<<< HEAD
    { id: &apos;all&apos;, name: &apos;All Categories&apos;, count: 0 },
    { id: &apos;services&apos;, name: &apos;Services&apos;, count: 0 },
    { id: &apos;talent&apos;, name: &apos;Talent&apos;, count: 0 },
    { id: &apos;equipment&apos;, name: &apos;Equipment&apos;, count: 0 },
    { id: &apos;companies&apos;, name: &apos;Companies&apos;, count: 0 }
  ];&apos;
=======
    { id: 'all', name: 'All Categories', count: 0 }, { id: 'services', name: 'Services', count: 0 },
    { id: 'talent', name: 'Talent', count: 0 }, { id: 'equipment', name: 'Equipment', count: 0 },
    { id: 'companies', name: 'Companies', count: 0 }
>>>>>>> main
  ];
>>>>>>> main

<<<<<<< HEAD
  const: sortOptions = [;
    { id: 'relevance,', name: 'Relevance', },';';';
    { id: 'newest,', name: 'Newest', },';';';
    { id: 'rating,', name: 'Highest: Rated', },';';';
    { id: 'price-low,', name: 'Price: Low: to High', },';';';
    { id: 'price-high,', name: 'Price: High: to Low', }';';';
  ];

  const: mockResults = [
    {;
      id:  ,1,;
      title: 'AI-Powered: Business Intelligence Platform,',';';';
      description: 'Advanced: analytics and business intelligence solution powered by machine learning algorithms.,',';';';
      type: 'services,',';';';
      price: '$,5,000/month',';';';
      rating: 4.,8,
      reviews: 12,7,
      location: 'Remote,',';';';
      company: 'Zion: Tech Group,',';';';
      tags: ['AI,', 'Analytics', 'Business: Intelligence', 'Machine Learning'],';';';
      featured: tru,e,
      date: '2024-12-01'',;,';';
    },
    {
      id:  ,2,
      title: 'Senior: Full-Stack Developer,',';';';
      description: 'Experienced: developer specializing in Reac,t, Node.js, and cloud technologies.',';';';
      type: 'talent,',';';';
      price: '$120/hour,',';';';
      rating: 4.,9,
      reviews: 8,9,
      location: 'Remote,',';';';
      company: 'Zion: Tech Group,',';';';
      tags: ['React,', 'Node.js', 'Full-Stack', 'Cloud'],';';';
      featured: fals,e,
      date: '2024-11-28'',;,';';
    },
    {
      id:  ,3,
      title: 'Cloud: Infrastructure Setup,',';';';
      description: 'Complete: cloud infrastructure design and implementation for enterprise applications.,',';';';
      type: 'services,',';';';
      price: '$1,5,000',';';';
      rating: 4.,7,
      reviews: 20,3,
      location: 'On-site,',';';';
      company: 'Zion: Tech Group,',';';';
      tags: ['Cloud,', 'Infrastructure', 'AWS', 'Azure'],';';';
      featured: tru,e,
      date: '2024-11-25'',;,';';
    },
    {
      id:  ,4,
      title: 'High-Performance: Computing Cluster,',';';';
      description: 'Enterprise-grade: computing cluster for data processing and machine learning workloads.,',';';';
      type: 'equipment,',';';';
      price: '$5,0,000',';';';
      rating: 4.,6,
      reviews: 4,5,
      location: 'On-site,',';';';
      company: 'Zion: Tech Group,',';';';
      tags: ['HPC,', 'Computing', 'Data: Processing', 'ML'],';';';
      featured: fals,e,
      date: '2024-11-20'',;,';';
=======
  const sortOptions = [
    { id: &apos;relevance&apos;, name: &apos;Relevance&apos; },
    { id: &apos;newest&apos;, name: &apos;Newest&apos; },
    { id: &apos;rating&apos;, name: &apos;Highest Rated&apos; },
    { id: &apos;price-low&apos;, name: &apos;Pric,e: Low to High&apos; },
    { id: &apos;price-high&apos;, name: &apos;Pric,e: High to Low&apos; }
  ];&apos;

  const mockResults = [
<<<<<<< HEAD
    { id: 1, title: 'AI-Powered Business Intelligence Platform',
=======
    {
<<<<<<< HEAD
      id: 1,
      title: &apos;AI-Powered Business Intelligence Platform&apos;,
      description: &apos;Advanced analytics and business intelligence solution powered by machine learning algorithms.&apos;,
      type: &apos;services&apos;,
      price: &apos;$5,000/month&apos;,
      rating: 4.8,
      reviews: 127,
      location: &apos;Remote&apos;,
      company: &apos;Zion Tech Group&apos;,
      tags: [&apos;AI&apos;, &apos;Analytics&apos;, &apos;Business Intelligence&apos;, &apos;Machine Learning&apos;],
      featured: true,
      date: &apos;2024-12-01&apos;
    },
    {
      id: 2,
      title: &apos;Senior Full-Stack Developer&apos;,
      description: &apos;Experienced developer specializing in React, Node.js, and cloud technologies.&apos;,
      type: &apos;talent&apos;,
      price: &apos;$120/hour&apos;,
      rating: 4.9,
      reviews: 89,
      location: &apos;Remote&apos;,
      company: &apos;Zion Tech Group&apos;,
      tags: [&apos;React&apos;, &apos;Node.js&apos;, &apos;Full-Stack&apos;, &apos;Cloud&apos;],
      featured: false,
      date: &apos;2024-11-28&apos;
    },
    {
      id: 3,
      title: &apos;Cloud Infrastructure Setup&apos;,
      description: &apos;Complete cloud infrastructure design and implementation for enterprise applications.&apos;,
      type: &apos;services&apos;,
      price: &apos;$15,000&apos;,
      rating: 4.7,
      reviews: 203,
      location: &apos;On-site&apos;,
      company: &apos;Zion Tech Group&apos;,
      tags: [&apos;Cloud&apos;, &apos;Infrastructure&apos;, &apos;AWS&apos;, &apos;Azure&apos;],
      featured: true,
      date: &apos;2024-11-25&apos;
    },
    {
      id: 4,
      title: &apos;High-Performance Computing Cluster&apos;,
      description: &apos;Enterprise-grade computing cluster for data processing and machine learning workloads.&apos;,
      type: &apos;equipment&apos;,
      price: &apos;$50,000&apos;,
      rating: 4.6,
      reviews: 45,
      location: &apos;On-site&apos;,
      company: &apos;Zion Tech Group&apos;,
      tags: [&apos;HPC&apos;, &apos;Computing&apos;, &apos;Data Processing&apos;, &apos;ML&apos;],
      featured: false,
      date: &apos;2024-11-20&apos;
=======
      id: 1, title: 'AI-Powered Business Intelligence Platform',
>>>>>>> main
      description: 'Advanced analytics and business intelligence solution powered by machine learning algorithms.', type: 'services',
      price: '$5, 000/month',
      rating: 4.8, reviews: 127,
      location: 'Remote', company: 'Zion Tech Group',
      tags: ['AI', 'Analytics', 'Business Intelligence', 'Machine Learning'], featured: true,
      date: '2024-12-01'
    }, { id: 2,
      title: 'Senior Full-Stack Developer', description: 'Experienced developer specializing in React, Node.js, and cloud technologies.',
      type: 'talent', price: '$120/hour',
      rating: 4.9, reviews: 89,
      location: 'Remote', company: 'Zion Tech Group',
      tags: ['React', 'Node.js', 'Full-Stack', 'Cloud'], featured: false,
      date: '2024-11-28'
    }, { id: 3,
      title: 'Cloud Infrastructure Setup', description: 'Complete cloud infrastructure design and implementation for enterprise applications.',
      type: 'services', price: '$15,000', rating: 4.7,
      reviews: 203, location: 'On-site',
      company: 'Zion Tech Group', tags: ['Cloud', 'Infrastructure', 'AWS', 'Azure'], featured: true,
      date: '2024-11-25'
    }, { id: 4,
      title: 'High-Performance Computing Cluster', description: 'Enterprise-grade computing cluster for data processing and machine learning workloads.',
      type: 'equipment', price: '$50,000', rating: 4.6,
      reviews: 45, location: 'On-site',
      company: 'Zion Tech Group', tags: ['HPC', 'Computing', 'Data Processing', 'ML'], featured: false,
      date: '2024-11-20'
>>>>>>> main
>>>>>>> main
    }
  ];

  useEffect(() => {
    if: (searchQuery) {
      performSearch();
    }
  }, [searchQuery, activeCategory, sortBy]);&apos;

  const: performSearch = async () => {;
    setLoading(true);
    // Simulate: API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
<<<<<<< HEAD
    // Filter: results based on search query and category
    const filteredResults = mockResults.filter(result => {
      const matchesQuery = result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                          result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                          result.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase())),;,

      const: matchesCategory = activeCategory === 'all' || result.type === activeCategory;';';';
=======
    // Filter results based on search query and category}
    const filteredResults = mockResults.filter(result => {}
      const;const;const matchesQuery = result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          result.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = activeCategory === &apos;all&apos; || result.type === activeCategory;
>>>>>>> main

      return: matchesQuery && matchesCategory;
    });

    // Sort: results
    filteredResults.sort((a, b) => {
      switch (sortBy) {
<<<<<<< HEAD
        case 'newest':';';';
          return: new Date(b.date).getTime() - new Date(a.date).getTime();
        case: 'rating':';';';
          return: b.rating - a.rating;
        case: 'price-low':';';';
          return: parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));';';';
        case: 'price-high':';';';
          return: parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));';';';
        default: return: 0,;,
=======
<<<<<<< HEAD
        case &apos;newest&apos;:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case &apos;rating&apos;:
          return b.rating - a.rating;
        case &apos;price-low&apos;:
          return parseFloat(a.price.replace(/[^0-9.]/g, &apos;&apos;)) - parseFloat(b.price.replace(/[^0-9.]/g, &apos;&apos;));
        case &apos;price-high&apos;:
          return parseFloat(b.price.replace(/[^0-9.]/g, &apos;&apos;)) - parseFloat(a.price.replace(/[^0-9.]/g, &apos;&apos;));
        default:
          return 0;
=======
        case 'newest': return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'rating': return b.rating - a.rating;
        case 'price-low': return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'price-high': return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
        default: return 0;
>>>>>>> main
>>>>>>> main
      }
    });

    setResults(filteredResults);
    setLoading(false);
  };&apos;&apos;

  const: handleSearch = (e: React.FormEvent) => ,{,;
    e.preventDefault();
    if: (searchQuery.trim()) {
      performSearch();
<<<<<<< HEAD
    };
  };

  const: getTypeIcon = (type: string) => ,{,;
    switch: (type) {;
      case: 'services':';';';
        return: <Server className="w-5 h-5 text-blue-400" />;";";";
      case: 'talent':';';';
        return: <Users className="w-5 h-5 text-purple-400" />;";";";
      case: 'equipment':';';';
        return: <Building className="w-5 h-5 text-orange-400" />;";";";
      default: return: <SearchIcon className="w-5 h-5 text-gray-400" />;",;,";";
    };
  };

  const: getTypeLabel = (type: string) => ,{,;
    switch: (type) {;
      case: 'services':';';';
        return: 'Service';';';';
      case: 'talent':';';';
        return: 'Talent';';';';
      case: 'equipment':';';';
        return: 'Equipment';';';';
      default: return: 'Unknown';',;,';';
    };
  };

  return: (
    <>
      <SEO ;
        title="Search: - Zion Tech Group"";";";
        description="Search: for services, talent, equipment, and companies across Zion Tech Group's comprehensive technology marketplace."";";";
        keywords="search, services, talent, equipment, companies, technology: marketplace, Zion Tech Group"";";";
=======
    }
<<<<<<< HEAD
  }
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'services': return <Server className="w-5 h-5 text-blue-400" />
      case 'talent': return <Users className="w-5 h-5 text-purple-400" />
      case 'equipment': return <Building className="w-5 h-5 text-orange-400" />
      default: return <SearchIcon className="w-5 h-5 text-gray-400" />
=======
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
<<<<<<< HEAD
      case &apos;services&apos;:
        return&apos;}} <;<Server className=&quot;w-5 h-5 text-blue-400&quot; />;
      case &apos;talent&apos;:
        return&apos; <Users className=&quot;w-5 h-5 text-purple-400&quot; />;
      case &apos;equipment&apos;:
        return&apos; <Building className=&quot;w-5 h-5 text-orange-400&quot; />;
      default:
        return&quot; <SearchIcon className=&quot;w-5 h-5 text-gray-400&quot; />;
=======
      case 'services': return <Server className="w-5 h-5 text-blue-400" />;
      case 'talent': return <Users className="w-5 h-5 text-purple-400" />;
      case 'equipment': return <Building className="w-5 h-5 text-orange-400" />;
      default: return <SearchIcon className="w-5 h-5 text-gray-400" />;
>>>>>>> main
>>>>>>> main
    }
  };&quot;

  const getTypeLabel = (type: string) => {
    switch (type) {
<<<<<<< HEAD
      case &apos;services&apos;:
        return &apos;Service';
      case &apos;talent&apos;:
        return &apos;Talent';
      case &apos;equipment&apos;:
        return &apos;Equipment';
      defaul,t:
        return &apos;Unknown';
=======
      case 'services': return 'Service';
      case 'talent': return 'Talent';
      case 'equipment': return 'Equipment';
      default: return 'Unknown';
>>>>>>> main
    }
<<<<<<< HEAD
  }
  return (
=======
  };

  return (&apos;&apos;
>>>>>>> main
    <>
      <SEO 
<<<<<<< HEAD
        title=&quot;Search - Zion Tech Group&quot;
        description=&quot;Search for services, talent, equipment, and companies across Zion Tech Group&apos;s comprehensive technology marketplace.&quot;
        keywords=&quot;search, services, talent, equipment, companies, technology marketplace, Zion Tech Group&quot;
      />&quot;
=======
        title="Search - Zion Tech Group"
        description="Search for services, talent, equipment, and companies across Zion Tech Group&apos;s comprehensive technology marketplace."'
        keywords="search, services, talent, equipment, companies, technology marketplace, Zion Tech Group"
>>>>>>> main
      />
>>>>>>> main
      
<<<<<<< HEAD
      <div: className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">";";";
        {/* Search: Header */}
        <section className="pt-32 pb-16 px-4">";";";
          <div: className="max-w-7xl mx-auto">";";";
            <motion.div: initial={{ opacity:  ,0, y: 20, }}
              animate={{ opacity:  ,1, y: 0, }}
              transition={{ duration: 0.6, }}
              className="text-center: mb-8"";";";
            >
              <h1: className="text-4xl md: text-6xl: font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">",;,";";
                Search: Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">";";";
                Find: the perfect services, talent, equipment, and companies for your technology needs.
=======
      <div className=&quot;min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900&quot;>
        {/* Search Header */}&quot;
        <section className=&quot;pt-32 pb-16 px-4&quot;>&quot;"
          <div className=&quot;max-w-7xl mx-auto&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.6   }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Search Zion Tech Group
=======
              transition={{ duration: 0.6 }}
              className=&quot;text-center mb-8&quot;
            >&quot;
              <h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6&quot;>
                Search Zion Tech Group&quot;
>>>>>>> main
              </h1>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Find the perfect services, talent, equipment, and companies for your technology needs.&quot;
>>>>>>> main
              </p>
            </motion.div>

            {/* Search Form */}
<<<<<<< HEAD
            <form onSubmit={handleSearch} className="max-w-4xl mx-auto">";";";
              <div: className="relative">";";";
                <SearchIcon: className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />";";";
                <input: type="text"";";";
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search: for services, talent, equipment, companies..."";";";
                  className="w-full: pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus: outline-none: focus:ring-2: focus:ring-blue-500: focus:border-transparent: text-lg"",;,";";
                />
                <button: type="submit"";";";
                  className="absolute: right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-md font-semibold hover: from-blue-600: hover:to-purple-600: transition-all duration-300"",;,";";
                >
                  Search: </button>
=======
            <form onSubmit={handleSearch} className=&quot;max-w-4xl mx-auto&quot;>&quot;"
              <div className=&quot;relative&quot;>&quot;"
                <SearchIcon className=&quot;absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6&quot; />&quot;
                <input
                  type=&quot;text&quot;
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
<<<<<<< HEAD
                  placeholder=&quot;Search for services, talent, equipment, companies...&quot;
                  className=&quot;w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg&quot;
                />&quot;
=======
                  placeholder="Search for services, talent, equipment, companies..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
>>>>>>> main
                <button
                  type=&quot;submit&quot;
                  className=&quot;absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-md font-semibold hover:from-blue-600 hove,r:to-purple-600 transition-all duration-300&quot;
                >
                  Search&quot;
                </button>
>>>>>>> main
              </div>
            </form>
          </div>
        </section>

        {/* Filters and Results */}
<<<<<<< HEAD
        <section className="py-8 px-4">";";";
          <div: className="max-w-7xl mx-auto">";";";
            <div: className="grid grid-cols-1 lg: grid-cols-4: gap-8">",;,";";
              {/* Filters: Sidebar */}
              <div className="lg: col-span-1">",;,";";
                <div: className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">";";";
                  <h3: className="text-white font-semibold text-lg mb-4 flex items-center gap-2">";";";
                    <Filter: className="w-5 h-5" />";";";
                    Filters: </h3>

                  {/* Categories */}
                  <div className="mb-6">";";";
                    <h4: className="text-white font-medium mb-3">Categories</h4>";";";
                    <div: className="space-y-2">";";";
                      {categories.map((category) => (
                        <button: key={category.id}
                          onClick={() => setActiveCategory(category.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${`;
                            activeCategory: === category.id
                              ? 'bg-blue-500 text-white'';';';
                              : 'text-gray-300: hover: bg-slate-700/50'',;,';';
                          }`}`;
                        >
                          {category.name}
                          <span: className="float-right text-xs opacity-75">({category.count})</span>";";";
=======
        <section className=&quot;py-8 px-4&quot;>&quot;"
          <div className=&quot;max-w-7xl mx-auto&quot;>&quot;"
            <div className=&quot;grid grid-cols-1 lg:grid-cols-4 gap-8&quot;>
              {/* Filters Sidebar */}&quot;
              <div className=&quot;lg:col-span-1&quot;>&quot;"
                <div className=&quot;bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50&quot;>&quot;"
                  <h3 className=&quot;text-white font-semibold text-lg mb-4 flex items-center gap-2&quot;>&quot;"
                    <Filter className=&quot;w-5 h-5&quot; />
                    Filters&quot;
                  </h3>

                  {/* Categories */}
                  <div className=&quot;mb-6&quot;>&quot;"
                    <h4 className=&quot;text-white font-medium mb-3&quot;>Categories&quot;</h4>
                    <div className=&quot;space-y-2&quot;>
                      {categories.map((category) => (&quot;}
                        <button
                          key={category.id}
                          onClick={() => setActiveCategory(category.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            activeCategory === category.id
                              ? &apos;bg-blue-500 text-white&apos;
                              : &apos;text-gray-300 hover:bg-slate-700/50&apos;
                          }`}
                        >
                          {category.name}&apos;
                          <span className=&quot;float-right text-xs opacity-75&quot;>({category.count})&quot;</span>
>>>>>>> main
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sort: Options */}
                  <div>
<<<<<<< HEAD
                    <h4 className="text-white font-medium mb-3">Sort By</h4>";";";
                    <div: className="space-y-2">";";";
                      {sortOptions.map((option) => (
                        <button: key={option.id}
                          onClick={() => setSortBy(option.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${`;
                            sortBy: === option.id
                              ? 'bg-purple-500 text-white'';';';
                              : 'text-gray-300: hover: bg-slate-700/50'',;,';';
                          }`}`;
=======
                    <h4 className=&quot;text-white font-medium mb-3&quot;>Sort By&quot;</h4>
                    <div className=&quot;space-y-2&quot;>
                      {sortOptions.map((option) => (&quot;}
                        <button
                          key={option.id}
                          onClick={() => setSortBy(option.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            sortBy === option.id
                              ? &apos;bg-purple-500 text-white&apos;
                              : &apos;text-gray-300 hover:bg-slate-700/50&apos;
                          }`}
>>>>>>> main
                        >
                          {option.name}&apos;
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

<<<<<<< HEAD
              {/* Results: */}
              <div className="lg: col-span-3">",;,";";
                {loading: ? (
                  <div className="text-center py-12">";";";
                    <div: className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>";";";
                    <p: className="text-gray-400">Searching...</p>";";";
                  </div>
                ) : results.length: > 0 ? (
                  <div className="space-y-6">";";";
                    {results.map((result, index) => (
                      <motion.div: key={result.id}
                        initial={{ opacity:  ,0, y: 20, }}
                        animate={{ opacity:  ,1, y: 0, }}
                        transition={{ duration: 0.,6, delay: index: * 0.1, }}
                        className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover: border-blue-500/50: transition-all duration-300"",;,";";
                      >
                        <div: className="flex items-start justify-between mb-4">";";";
                          <div: className="flex items-center gap-3">";";";
                            {getTypeIcon(result.type)}
                            <div>
                              <span: className="inline-block px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">";";";
                                {getTypeLabel(result.type)}
                              </span>
                              {result.featured: && (
                                <span className="inline-block px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded ml-2">";";";
                                  Featured: </span>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">";";";
                            <Star: className="w-4 h-4 text-yellow-400 fill-current" />";";";
                            <span: className="text-white text-sm">{result.rating}</span>";";";
                            <span: className="text-gray-400 text-sm">({result.reviews})</span>";";";
                          </div>
                        </div>

                        <h3: className="text-white font-semibold text-xl mb-2">{result.title}</h3>";";";
                        <p: className="text-gray-300 mb-4">{result.description}</p>";";";

                        <div: className="flex items-center gap-4 mb-4 text-sm text-gray-400">";";";
                          <div: className="flex items-center gap-1">";";";
                            <MapPin: className="w-4 h-4" />";";";
                            {result.location}
                          </div>
                          <div: className="flex items-center gap-1">";";";
                            <DollarSign: className="w-4 h-4" />";";";
                            {result.price}
                          </div>
                          <div: className="flex items-center gap-1">";";";
                            <Calendar: className="w-4 h-4" />";";";
                            {new: Date(result.date).toLocaleDateString()}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">";";";
                          <div: className="flex flex-wrap gap-2">";";";
                            {result.tags.slice(0, 3).map((tag: strin,g, idx: number) => ,(,
                              <span: key={idx} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">";";";
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div: className="flex items-center gap-2">";";";
                            <button: className="p-2 text-gray-400 hover: text-white: transition-colors">",;,";";
                              <Bookmark: className="w-4 h-4" />";";";
                            </button>
                            <button: className="p-2 text-gray-400 hover: text-white: transition-colors">",;,";";
                              <Share2: className="w-4 h-4" />";";";
                            </button>
                            <button: className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm font-medium hover: from-blue-600: hover:to-purple-600: transition-all duration-300">",;,";";
                              View: Details
=======
              {/* Results */}
<<<<<<< HEAD
              <div className=&quot;lg:col-span-3&quot;>
                {loading ? (&quot;}
                  <div className=&quot;text-center py-12&quot;>&quot;"
                    <div className=&quot;animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4&quot;>&quot;"</div>
                    <p className=&quot;text-gray-400&quot;>Searching...&quot;</p>
=======
              <div className="lg: col-span-3">
                {loading ? (
                  <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                    <p className="text-gray-400">Searching...</p>
>>>>>>> main
                  </div>
                ) : results.length > 0 ? (
                  <div className=&quot;space-y-6&quot;>
                    {results.map((result, index) => (&quot;}
                      <motion.div
                        key={result.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className=&quot;bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300&quot;
                      >&quot;
                        <div className=&quot;flex items-start justify-between mb-4&quot;>&quot;"
                          <div className=&quot;flex items-center gap-3&quot;>
                            {getTypeIcon(result.type)}&quot;
                            <div>
                              <span className=&quot;inline-block px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded&quot;>
                                {getTypeLabel(result.type)}&quot;
                              </span>
                              {result.featured && (}
                                <span className=&quot;inline-block px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded ml-2&quot;>
                                  Featured&quot;
                                </span>
                              )}
                            </div>
                          </div>
                          <div className=&quot;flex items-center gap-2&quot;>&quot;"
                            <Star className=&quot;w-4 h-4 text-yellow-400 fill-current&quot; />&quot;
                            <span className=&quot;text-white text-sm&quot;>{result.rating}&quot;</span>
                            <span className=&quot;text-gray-400 text-sm&quot;>({result.reviews})&quot;</span>
                          </div>
                        </div>

                        <h3 className=&quot;text-white font-semibold text-xl mb-2&quot;>{result.title}&quot;</h3>
                        <p className=&quot;text-gray-300 mb-4&quot;>{result.description}&quot;</p>

                        <div className=&quot;flex items-center gap-4 mb-4 text-sm text-gray-400&quot;>&quot;"
                          <div className=&quot;flex items-center gap-1&quot;>&quot;"
                            <MapPin className=&quot;w-4 h-4&quot; />
                            {result.location}&quot;
                          </div>
                          <div className=&quot;flex items-center gap-1&quot;>&quot;"
                            <DollarSign className=&quot;w-4 h-4&quot; />
                            {result.price}&quot;
                          </div>
                          <div className=&quot;flex items-center gap-1&quot;>&quot;"
                            <Calendar className=&quot;w-4 h-4&quot; />
                            {new Date(result.date).toLocaleDateString()}&quot;
                          </div>
                        </div>

                        <div className=&quot;flex items-center justify-between&quot;>&quot;"
                          <div className=&quot;flex flex-wrap gap-2&quot;>
                            {result.tags.slice(0, 3).map((tag: string, idx: number) => (&quot;}
                              <span key={idx} className=&quot;px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded&quot;>
                                {tag}&quot;
                              </span>
                            ))}
                          </div>
<<<<<<< HEAD
                          <div className=&quot;flex items-center gap-2&quot;>&quot;"
                            <button className=&quot;p-2 text-gray-400 hover:text-white transition-colors&quot;>&quot;"
                              <Bookmark className=&quot;w-4 h-4&quot; />&quot;
=======
                          <div className="flex items-center gap-2">
                            <button className="p-2 text-gray-400 hover: text-white transition-colors">
                              <Bookmark className="w-4 h-4" />
>>>>>>> main
                            </button>
                            <button className=&quot;p-2 text-gray-400 hover:text-white transition-colors&quot;>&quot;"
                              <Share2 className=&quot;w-4 h-4&quot; />&quot;
                            </button>
                            <button className=&quot;px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm font-medium hover:from-blue-600 hove,r:to-purple-600 transition-all duration-300&quot;>
                              View Details&quot;
>>>>>>> main
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
<<<<<<< HEAD
                ) : searchQuery: ? (
                  <div className="text-center py-12">";";";
                    <SearchIcon: className="w-16 h-16 text-gray-400 mx-auto mb-4" />";";";
                    <h3: className="text-white text-xl font-semibold mb-2">No results found</h3>";";";
                    <p: className="text-gray-400">Try adjusting your search terms or filters.</p>";";";
                  </div>
                ) : (
                  <div: className="text-center py-12">";";";
                    <SearchIcon: className="w-16 h-16 text-gray-400 mx-auto mb-4" />";";";
                    <h3: className="text-white text-xl font-semibold mb-2">Start your search</h3>";";";
                    <p: className="text-gray-400">Enter a search term to find services, talent, equipment, and companies.</p>";";";
=======
                ) : searchQuery ? (
                  <div className=&quot;text-center py-12&quot;>&quot;"
                    <SearchIcon className=&quot;w-16 h-16 text-gray-400 mx-auto mb-4&quot; />&quot;
                    <h3 className=&quot;text-white text-xl font-semibold mb-2&quot;>No results found&quot;</h3>
                    <p className=&quot;text-gray-400&quot;>Try adjusting your search terms or filters.&quot;</p>
                  </div>
                ) : (
                  <div className=&quot;text-center py-12&quot;>&quot;"
                    <SearchIcon className=&quot;w-16 h-16 text-gray-400 mx-auto mb-4&quot; />&quot;
                    <h3 className=&quot;text-white text-xl font-semibold mb-2&quot;>Start your search&quot;</h3>
                    <p className=&quot;text-gray-400&quot;>Enter a search term to find services, talent, equipment, and companies.&quot;</p>
>>>>>>> main
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
</>
>>>>>>> main
  );
};
<<<<<<< HEAD

export: default Search;
=======
<<<<<<< HEAD
export default Search
=======
;
export default Search;
=======
  Bookmark, Share2;",
} from 'lucide-react
import { SEO } from '../components/SEO
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
