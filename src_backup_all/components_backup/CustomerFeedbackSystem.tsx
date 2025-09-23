import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star,
  MessageCircle,
  ThumbsUp,
  ThumbsDown,
  Send,
  Heart,
  Award,
  TrendingUp,
  Users,
  Clock,
  Flag,
  Share2,
  Download,
  Filter,
  Search
} from 'lucide-react';

interface Feedback {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  category: 'service' | 'product' | 'support' | 'overall';
  sentiment: 'positive' | 'neutral' | 'negative';
  date: string;
  helpful: number;
  unhelpful: number;
  tags: string[];
  verified: boolean;
}

interface FeedbackStats {
  totalFeedback: number;
  averageRating: number;
  positivePercentage: number;
  responseRate: number;
  topCategories: Array<{ category: string; count: number; percentage: number }>;
}

interface CustomerFeedbackSystemProps {
  showStats?: boolean;
  showFilters?: boolean;
  maxFeedback?: number;
}

export const CustomerFeedbackSystem: React.FC<CustomerFeedbackSystemProps> = ({
  showStats = true,
  showFilters = true,
  maxFeedback = 10
}) => {
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [filteredFeedback, setFilteredFeedback] = useState<Feedback[]>([]);
  const [stats, setStats] = useState<FeedbackStats>({
    totalFeedback: 0,
    averageRating: 0,
    positivePercentage: 0,
    responseRate: 0,
    topCategories: []
  });
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [newFeedback, setNewFeedback] = useState({
    rating: 0,
    comment: '',
    category: 'overall' as Feedback['category']
  });

  // Sample feedback data
  useEffect(() => {
    const sampleFeedback: Feedback[] = [
      {
        id: '1',
        customerName: 'Sarah Johnson',
        rating: 5,
        comment: 'Exceptional AI consulting services! The team at Zion Tech Group delivered beyond our expectations. Their expertise in machine learning helped us optimize our processes significantly.',
        category: 'service',
        sentiment: 'positive',
        date: '2024-01-15',
        helpful: 24,
        unhelpful: 1,
        tags: ['AI', 'Consulting', 'Machine Learning'],
        verified: true
      },
      {
        id: '2',
        customerName: 'Michael Chen',
        rating: 4,
        comment: 'Great cloud migration support. The team was professional and helped us transition smoothly to the cloud. Minor delays but overall excellent experience.',
        category: 'support',
        sentiment: 'positive',
        date: '2024-01-12',
        helpful: 18,
        unhelpful: 2,
        tags: ['Cloud', 'Migration', 'Support'],
        verified: true
      },
      {
        id: '3',
        customerName: 'Emily Rodriguez',
        rating: 5,
        comment: 'Outstanding digital transformation project! Zion Tech Group helped us modernize our entire infrastructure. ROI was achieved within 6 months.',
        category: 'product',
        sentiment: 'positive',
        date: '2024-01-10',
        helpful: 31,
        unhelpful: 0,
        tags: ['Digital Transformation', 'Infrastructure', 'ROI'],
        verified: true
      },
      {
        id: '4',
        customerName: 'David Kim',
        rating: 3,
        comment: 'Good security services but communication could be improved. The technical work was solid but project updates were infrequent.',
        category: 'service',
        sentiment: 'neutral',
        date: '2024-01-08',
        helpful: 12,
        unhelpful: 5,
        tags: ['Security', 'Communication', 'Project Management'],
        verified: true
      },
      {
        id: '5',
        customerName: 'Lisa Thompson',
        rating: 5,
        comment: 'Amazing team! They helped us implement AI solutions that increased our efficiency by 40%. Highly recommend their services.',
        category: 'overall',
        sentiment: 'positive',
        date: '2024-01-05',
        helpful: 28,
        unhelpful: 1,
        tags: ['AI', 'Efficiency', 'Implementation'],
        verified: true
      }
    ];

    setFeedback(sampleFeedback);
    setFilteredFeedback(sampleFeedback);
  }, []);

  // Calculate stats
  useEffect(() => {
    if (feedback.length > 0) {
      const totalFeedback = feedback.length;
      const averageRating = feedback.reduce((sum, f) => sum + f.rating, 0) / totalFeedback;
      const positivePercentage = (feedback.filter(f => f.sentiment === 'positive').length / totalFeedback) * 100;
      const responseRate = 95; // Simulated response rate

      const categoryCounts = feedback.reduce((acc, f) => {
        acc[f.category] = (acc[f.category] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      const topCategories = Object.entries(categoryCounts)
        .map(([category, count]) => ({
          category: category.charAt(0).toUpperCase() + category.slice(1),
          count,
          percentage: (count / totalFeedback) * 100
        }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 4);

      setStats({
        totalFeedback,
        averageRating,
        positivePercentage,
        responseRate,
        topCategories
      });
    }
  }, [feedback]);

  // Filter feedback
  useEffect(() => {
    let filtered = feedback;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(f => f.category === selectedCategory);
    }

    if (selectedRating > 0) {
      filtered = filtered.filter(f => f.rating === selectedRating);
    }

    if (searchQuery) {
      filtered = filtered.filter(f =>
        f.comment.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredFeedback(filtered.slice(0, maxFeedback));
  }, [feedback, selectedCategory, selectedRating, searchQuery, maxFeedback]);

  // Handle feedback submission
  const handleSubmitFeedback = () => {
    if (newFeedback.rating === 0 || !newFeedback.comment.trim()) return;

    const feedback: Feedback = {
      id: Date.now().toString(),
      customerName: 'Anonymous Customer',
      rating: newFeedback.rating,
      comment: newFeedback.comment,
      category: newFeedback.category,
      sentiment: newFeedback.rating >= 4 ? 'positive' : newFeedback.rating >= 3 ? 'neutral' : 'negative',
      date: new Date().toISOString().split('T')[0],
      helpful: 0,
      unhelpful: 0,
      tags: [],
      verified: false
    };

    setFeedback(prev => [feedback, ...prev]);
    setNewFeedback({ rating: 0, comment: '', category: 'overall' });
    setShowFeedbackForm(false);
  };

  // Handle helpful/unhelpful votes
  const handleVote = (feedbackId: string, type: 'helpful' | 'unhelpful') => {
    setFeedback(prev => prev.map(f => {
      if (f.id === feedbackId) {
        return {
          ...f,
          helpful: type === 'helpful' ? f.helpful + 1 : f.helpful,
          unhelpful: type === 'unhelpful' ? f.unhelpful + 1 : f.unhelpful
        };
      }
      return f;
    }));
  };

  // Get sentiment color
  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'text-green-400 bg-green-400/20';
      case 'negative': return 'text-red-400 bg-red-400/20';
      default: return 'text-yellow-400 bg-yellow-400/20';
    }
  };

  // Get category color
  const getCategoryColor = (category: string) => {
    const colors = {
      'service': 'text-blue-400 bg-blue-400/20',
      'product': 'text-green-400 bg-green-400/20',
      'support': 'text-purple-400 bg-purple-400/20',
      'overall': 'text-zion-cyan bg-zion-cyan/20'
    };
    return colors[category as keyof typeof colors] || 'text-zinc-400 bg-zinc-400/20';
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Customer Feedback</h1>
        <p className="text-zinc-400 text-lg">See what our customers are saying about Zion Tech Group</p>
      </div>

      {/* Stats Section */}
      {showStats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-3xl font-bold text-white mb-2">{stats.totalFeedback}</div>
            <div className="text-zinc-400">Total Reviews</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="text-3xl font-bold text-white">{stats.averageRating.toFixed(1)}</div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      star <= stats.averageRating ? 'text-yellow-400 fill-current' : 'text-zinc-600'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="text-zinc-400">Average Rating</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-3xl font-bold text-green-400 mb-2">{stats.positivePercentage.toFixed(1)}%</div>
            <div className="text-zinc-400">Positive Feedback</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl text-center"
          >
            <div className="text-3xl font-bold text-zion-cyan mb-2">{stats.responseRate}%</div>
            <div className="text-zinc-400">Response Rate</div>
          </motion.div>
        </div>
      )}

      {/* Top Categories */}
      {showStats && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">Top Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.topCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-zinc-900/30 border border-zinc-700/50 rounded-lg text-center"
              >
                <div className="text-2xl font-bold text-white mb-1">{category.count}</div>
                <div className="text-zinc-400 text-sm">{category.category}</div>
                <div className="text-zion-cyan text-xs">{category.percentage.toFixed(1)}%</div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Filters and Search */}
      {showFilters && (
        <div className="flex flex-wrap items-center gap-4 mb-6">
          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
          >
            <option value="all">All Categories</option>
            <option value="service">Service</option>
            <option value="product">Product</option>
            <option value="support">Support</option>
            <option value="overall">Overall</option>
          </select>

          {/* Rating Filter */}
          <select
            value={selectedRating}
            onChange={(e) => setSelectedRating(Number(e.target.value))}
            className="px-4 py-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
          >
            <option value={0}>All Ratings</option>
            <option value={5}>5 Stars</option>
            <option value={4}>4+ Stars</option>
            <option value={3}>3+ Stars</option>
            <option value={2}>2+ Stars</option>
            <option value={1}>1+ Stars</option>
          </select>

          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search feedback..."
              className="w-full pl-10 pr-4 py-2 bg-zinc-900/50 border border-zinc-700/50 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            />
          </div>

          {/* Add Feedback Button */}
          <button
            onClick={() => setShowFeedbackForm(!showFeedbackForm)}
            className="px-6 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Add Feedback
          </button>
        </div>
      )}

      {/* Feedback Form */}
      <AnimatePresence>
        {showFeedbackForm && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-6 overflow-hidden"
          >
            <div className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-4">Share Your Experience</h3>

              <div className="space-y-4">
                {/* Rating */}
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setNewFeedback(prev => ({ ...prev, rating: star }))}
                        className="p-2 hover:scale-110 transition-transform"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            star <= newFeedback.rating ? 'text-yellow-400 fill-current' : 'text-zinc-600'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">Category</label>
                  <select
                    value={newFeedback.category}
                    onChange={(e) => setNewFeedback(prev => ({ ...prev, category: e.target.value as Feedback['category'] }))}
                    className="w-full px-3 py-2 bg-zinc-800 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  >
                    <option value="overall">Overall Experience</option>
                    <option value="service">Service Quality</option>
                    <option value="product">Product/Technology</option>
                    <option value="support">Customer Support</option>
                  </select>
                </div>

                {/* Comment */}
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">Your Feedback</label>
                  <textarea
                    value={newFeedback.comment}
                    onChange={(e) => setNewFeedback(prev => ({ ...prev, comment: e.target.value }))}
                    placeholder="Share your experience with Zion Tech Group..."
                    rows={4}
                    className="w-full px-3 py-2 bg-zinc-800 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex gap-3">
                  <button
                    onClick={handleSubmitFeedback}
                    disabled={newFeedback.rating === 0 || !newFeedback.comment.trim()}
                    className="px-6 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Feedback
                  </button>
                  <button
                    onClick={() => setShowFeedbackForm(false)}
                    className="px-6 py-2 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Feedback List */}
      <div className="space-y-4">
        {filteredFeedback.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 bg-zinc-900/30 border border-zinc-700/50 rounded-xl hover:bg-zinc-900/50 transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-zion-cyan font-semibold">
                  {item.customerName.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-white">{item.customerName}</h4>
                    {item.verified && (
                      <Award className="w-4 h-4 text-zion-cyan" title="Verified Customer" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zinc-400">
                    <Clock className="w-3 h-3" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                  {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSentimentColor(item.sentiment)}`}>
                  {item.sentiment.charAt(0).toUpperCase() + item.sentiment.slice(1)}
                </span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-5 h-5 ${
                    star <= item.rating ? 'text-yellow-400 fill-current' : 'text-zinc-600'
                  }`}
                />
              ))}
              <span className="text-sm text-zinc-400 ml-2">{item.rating}/5</span>
            </div>

            {/* Comment */}
            <p className="text-zinc-300 mb-4 leading-relaxed">{item.comment}</p>

            {/* Tags */}
            {item.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-zinc-800/50 text-zinc-300 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-zinc-700/50">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleVote(item.id, 'helpful')}
                  className="flex items-center gap-2 text-zinc-400 hover:text-green-400 transition-colors"
                >
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-sm">{item.helpful}</span>
                </button>
                <button
                  onClick={() => handleVote(item.id, 'unhelpful')}
                  className="flex items-center gap-2 text-zinc-400 hover:text-red-400 transition-colors"
                >
                  <ThumbsDown className="w-4 h-4" />
                  <span className="text-sm">{item.unhelpful}</span>
                </button>
                <button className="flex items-center gap-2 text-zinc-400 hover:text-zion-cyan transition-colors">
                  <Share2 className="w-4 h-4" />
                  <span className="text-sm">Share</span>
                </button>
              </div>

              <button className="text-zinc-400 hover:text-red-400 transition-colors">
                <Flag className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* No Results */}
      {filteredFeedback.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <MessageCircle className="w-16 h-16 text-zinc-600 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-zinc-300 mb-2">No feedback found</h3>
          <p className="text-zinc-400 mb-4">
            Try adjusting your filters or be the first to share your experience!
          </p>
          <button
            onClick={() => setShowFeedbackForm(true)}
            className="px-6 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors"
          >
            Add Feedback
          </button>
        </motion.div>
      )}
    </div>
  );
};