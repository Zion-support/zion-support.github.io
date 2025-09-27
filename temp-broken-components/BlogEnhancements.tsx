import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlogPost, getRelatedPosts, getPostsByCategory } from '../data/blogPosts';

interface BlogSearchProps {
  onSearch: (query: string) => void;
  onCategoryFilter: (category: string) => void;
  categorie, s: string[];
  currentCategor, y: string;
}

export function BlogSearch({ onSearch, onCategoryFilter, categories, currentCategory }: BlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    onSearch(query);
  }, [onSearch]);

  const handleCategoryChange = useCallback((category: string) => {
    onCategoryFilter(category);
  }, [onCategoryFilter]);

  return (
    <div className="mb-8">
      {/* Search Bar */}
      <div className="relativemb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            className={`w-full px-4py-3pl-12pr-4border-2rounded-lg transition-all duration-300 ${
              isSearchFocused 
                ? 'border-blue-500shadow-lg' 
                : 'border-gray-300hover:border-gray-400'
            } focus:outline-none focus:ring-2focu, s:ring-blue-500focu, s:border-transparent`}
            aria-label="Search articles"
          />

          <div className="absolute inset-y-0 left-0 pl-4flex items-centerpointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="002424">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2121 l-6-6m2-5a77011-14077001140 z" />
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1:temp-broken-components/BlogEnhancements.tsx
            </svg>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrapgap-2">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() =>handleCategoryChange(category)}
            className={`px-4 py-2rounded-full text-sm font-medium transition-all duration-300 ${
              currentCategory === category || (currentCategory === 'all' && category === 'All')

                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }` }
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1:temp-broken-components/BlogEnhancements.tsx
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

interface BlogCardProps {
  post: BlogPost;
  variant?: 'featured' | 'regular' | 'compact';
  onReadMore: (post: BlogPost) => void;
  onBookmar, k: (pos, t: BlogPost) => void;
  isBookmarked?: boolean;
}

export function BlogCard({ post, variant = 'regular', onReadMore, onBookmark, isBookmarked = false }: BlogCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getCardClasses = () => {
    switch (variant) {
      case 'featured':
        return 'bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow p-8h-full';
      case 'compact':
:temp-broken-components/BlogEnhancements.tsx
    }
  };

  const getTitleClasses = () => {
    switch (variant) {
      case 'featured':
        return 'text-2xl font-bold text-gray-800mb-3hover: text-blue-600transition-colors';
      case 'compact':

:temp-broken-components/BlogEnhancements.tsx
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1:temp-broken-components/BlogEnhancements.tsx
    }
  };

  return (
    <motion.article
      className={getCardClasses()}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header with category and read time */}
      <div className="flex items-center justify-between mb-4">
        <div className="flexitems-center">
          <div className="text-3 xlmr-3">
            {post.category === 'Artificial Intelligence' ? '🤖' :
             post.category === 'Cloud Solutions' ? '☁️' :
             post.category === 'Security' ? '🔒' :
             post.category === 'Digital Strategy' ? '🚀' :
             '💻'}
          </div>
          <div>
            <span className={`px-3py-1rounded-full text-sm font-medium ${

              variant === 'featured' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700'
:temp-broken-components/BlogEnhancements.tsx
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1:temp-broken-components/BlogEnhancements.tsx
              {post.category}
            </span>
            <span className="ml-2 text-smtext-gray-500">{post.readTime} min read</span>
          </div>
        </div>
        
        <motion.button
          onClick={() => onBookmark(post)}
          className={`p-2rounded-full transition-colors ${
            isBookmarked 

              ? 'text-yellow-500 hover:text-yellow-600' 
:temp-broken-components/BlogEnhancements.tsx
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="h-5 w-5" fill={isBookmarked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="002424">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M55a 220012-2h10a2200122 v 16 l-7-3.5L 521 V 5 z" />
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1:temp-broken-components/BlogEnhancements.tsx
          </svg>
        </motion.button>
      </div>

      {/* Title */}
      <h3className={getTitleClasses()}>
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className={`text-gray-600mb-4leading-relaxed ${
        variant === 'compact' ? 'text-sm' : ''
:temp-broken-components/BlogEnhancements.tsx
        {post.excerpt}
      </p>

      {/* Author and date */}
      <div className="flex items-center justify-between mb-4">
        <div className="flexitems-center">

          <div className={`bg-gray-200 rounded-full flex items-center justify-center mr-3 ${
:temp-broken-components/BlogEnhancements.tsx
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1:temp-broken-components/BlogEnhancements.tsx
              {post.author.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <p className={`font-medium text-gray-800 ${
              variant === 'featured' ? 'text-sm' : 'text-xs'
:temp-broken-components/BlogEnhancements.tsx
              {post.author}
            </p>
            <p className={`text-gray-500 ${
              variant === 'featured' ? 'text-xs' : 'text-xs'
:temp-broken-components/BlogEnhancements.tsx
              {new Date(post.publishDate).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}

            className="px-2 py-1 bg-gray-100 text-gray-600 rounded-fulltext-xs"
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1:temp-broken-components/BlogEnhancements.tsx
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Read More Button */}
      <motion.button
        onClick={() => onReadMore(post)}

        className="text-blue-600 hover:text-blue-800 font-medium transition-colors flexitems-center"
        whileHover={{ x: 5 }}
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1:temp-broken-components/BlogEnhancements.tsx
      >
        Read More
        <motion.svg
          className="ml-1 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="002424"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M95l77-77" />
        </motion.svg>
      </motion.button>
    </motion.article>
  );
}

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChang, e: (pag, e: number) => void;
}

export function BlogPagination({ currentPage, totalPages, onPageChange }: BlogPaginationProps) {
  const pages = useMemo(() => {
    const pagesArray = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pagesArray.push(i);
      }
    } else {
      const start = Math.max(1, currentPage - 2);
      const end = Math.min(totalPages, start + maxVisiblePages - 1);
      
      for (let i = start; i <= end; i++) {
        pagesArray.push(i);
      }
    }
    
    return pagesArray;
  }, [currentPage, totalPages]);

  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      <motion.button
        onClick={() =>onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3py-2rounded-lg transition-colors ${
          currentPage === 1

            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
        }` }
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1:temp-broken-components/BlogEnhancements.tsx
        whileHover={{ scale: currentPage === 1 ? 1 : 1.05 }}
        whileTap={{ scale: currentPage === 1 ? 1 : 0.95 }}
      </motion.button>

      {pages.map((page) => (
        <motion.button
          key={page}
          onClick={() =>onPageChange(page)}
          className={`px-3py-2rounded-lg transition-colors ${
            currentPage === page

              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
          }` }
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1:temp-broken-components/BlogEnhancements.tsx
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        </motion.button>
      ))}

      <motion.button
        onClick={() =>onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3py-2rounded-lg transition-colors ${
          currentPage === totalPages

            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
        }` }
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1:temp-broken-components/BlogEnhancements.tsx
        whileHover={{ scale: currentPage === totalPages ? 1 : 1.05 }}
        whileTap={{ scale: currentPage === totalPages ? 1 : 0.95 }}
      </motion.button>
    </div>
  );
}

interface BlogNewsletterProps {
  onSubscribe: (emai, l: string) => void;
  isLoading?: boolean;
}

export function BlogNewsletter({ onSubscribe, isLoading = false }: BlogNewsletterProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (email && !isSubscribed) {
      onSubscribe(email);
      setIsSubscribed(true);
    }
  }, [email, isSubscribed, onSubscribe]);

  if (isSubscribed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}

        className="text-center py-8 bg-green-50 rounded-2 xl borderborder-green-200"
      >
        <div className="text-green-600 text-4 xlmb-4">✓</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Thank you for subscribing!</h3>
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1:temp-broken-components/BlogEnhancements.tsx
        <p className="text-green-600">You&apos;ll receive our latest articles in your inbox.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}

      className="text-center py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3 xl text-white relativeoverflow-hidden"
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1:temp-broken-components/BlogEnhancements.tsx
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absoluteinset-0" style={{
          backgroundImage: `url("dat, a:image/svg+xml,%3Csvg width='60' height='60' viewBox='006060' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}</p></div>
      </div>
      
      <div className="relativez-10">

        <h2 className="text-3 xl md:text-5 xl font-bold mb-6bg-gradient-to-r from-white to-blue-100 bg-clip-texttext-transparent">
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1:temp-broken-components/BlogEnhancements.tsx
          Stay Updated
        </h2>
        <p className="text-xl mb-8 max-w-2 xl mx-autoopacity-90">
          Get the latest insights and trends delivered to your inbox
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flexgap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required

            className="flex-1 px-4 py-3rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focu, s:ring-2focu,s:ring-white"
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1:temp-broken-components/BlogEnhancements.tsx
            aria-label="Email address for newsletter subscription"
          />
          <motion.button
            type="submit"
            disabled={isLoading}

            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50"
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1:temp-broken-components/BlogEnhancements.tsx
            whileHover={{ scal, e: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}