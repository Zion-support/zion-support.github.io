import { useRouter } from 'next/router';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Filter, SortAsc, Users, TrendingUp, Star, Verified, MapPin } from 'lucide-react'
import { useInfiniteScrollPagination } from '@/hooks/useInfiniteScroll';
import { generateAITalents, getTalentMarketStats, getRecommendedTalents } from '@/utils/talentAutoFeedAlgorithm';
import { TALENT_PROFILES } from '@/data/talentData';
import { TalentProfile } from '@/types/talent';
import { SkeletonCard } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Spinner from '@/components/ui/spinner';

const TalentsPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Talents - Zion Tech Group" 
        description="Browse our curated selection of top tech talent and AI experts."
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Talents
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Browse our curated selection of top tech talent and AI experts.
              Find the perfect professional for your next project.
            </p>
          </div>
          
          <div className="bg-zion-blue-dark/50 backdrop-blur-sm rounded-xl p-8 border border-zion-blue-light/30">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Coming Soon
              </h2>
              <p className="text-zion-slate-light mb-6">
                Our talents page is currently under development.
              </p>
            </div>
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="text-lg font-bold text-green-600">${talent.hourly_rate}/hr</div>
          <div className="text-xs text-muted-foreground">
            ~${talent.hourly_rate ? Math.round(talent.hourly_rate * 160 / 1000) : 0}k/month
          </div>
        </div>
      </div>
    </CardHeader>
    
    <CardContent className="pt-0">
      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 text-yellow-500 fill-current" />
          <span className="text-sm font-medium">{talent.average_rating?.toFixed(1)}</span>
          <span className="text-xs text-muted-foreground">({talent.rating_count} reviews)</span>
        </div>
        <div className="text-sm text-muted-foreground">
          {talent.years_experience} years experience
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
        {talent.bio}
      </p>

      <div className="flex flex-wrap gap-1 mb-4">
        {talent.skills?.slice(0, 4).map((skill, index) => (
          <Badge key={index} variant="secondary" className="text-xs">
            {skill}
          </Badge>
        ))}
        {talent.skills && talent.skills.length > 4 && (
          <Badge variant="outline" className="text-xs">
            +{talent.skills.length - 4} more
          </Badge>
        )}
      </div>

      <div className="flex items-center justify-between">
        <Badge variant={talent.availability_type === 'full_time' ? 'default' : 'outline'} className="text-xs">
          {talent.availability_type?.replace('_', ' ').toUpperCase()}
        </Badge>
        <Button size="sm" onClick={onHire}>
          Hire Talent
        </Button>
      </div>
    </CardContent>
  </Card>
);

// Loading skeleton for talent grid
const TalentLoadingGrid: React.FC<{ count?: number }> = ({ count = 8 }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

// Main enhanced talents page with infinite scroll
export default function TalentsPage() {
  const router = useRouter();
  const [sortBy, setSortBy] = useState('newest');
  const [filterSpecialization, setFilterSpecialization] = useState('');
  const [filterAvailability, setFilterAvailability] = useState('');
  const [showRecommended, setShowRecommended] = useState(false);
  const [totalGenerated, setTotalGenerated] = useState(0);

  // Fetch function for infinite scroll with AI talent generation
  const fetchTalents = useCallback(async (page: number, limit: number) => {
    // Add realistic loading delay
    await new Promise(resolve => setTimeout(resolve, 300));

    let allTalents: TalentProfile[] = [];
    
    // Start with existing talent profiles
    if (page === 1) {
      allTalents = [...TALENT_PROFILES];
    }
    
    // Generate new AI/IT talents using the auto-feed algorithm
    const startId = TALENT_PROFILES.length + (page - 1) * limit + totalGenerated;
    const newTalents = generateAITalents(limit, startId);
    setTotalGenerated(prev => prev + newTalents.length);
    
    allTalents = [...allTalents, ...newTalents];
    
    // Apply filters
    let filteredTalents = allTalents;
    
    if (filterSpecialization) {
      filteredTalents = filteredTalents.filter(t => 
        t.professional_title?.toLowerCase().includes(filterSpecialization.toLowerCase())
      );
    }

    if (filterAvailability) {
      filteredTalents = filteredTalents.filter(t => t.availability_type === filterAvailability);
    }
    
    if (showRecommended) {
      filteredTalents = getRecommendedTalents(filteredTalents);
    }
    
    // Apply sorting
    filteredTalents.sort((a, b) => {
      switch (sortBy) {
        case 'hourly-rate-low':
          return (a.hourly_rate || 0) - (b.hourly_rate || 0);
        case 'hourly-rate-high':
          return (b.hourly_rate || 0) - (a.hourly_rate || 0);
        case 'rating':
          return (b.average_rating || 0) - (a.average_rating || 0);
        case 'experience':
          return (b.years_experience || 0) - (a.years_experience || 0);
        case 'verified':
          return (b.is_verified ? 1 : 0) - (a.is_verified ? 1 : 0);
        case 'newest':
        default:
          return new Date(b.id || '').getTime() - new Date(a.id || '').getTime();
      }
    });
    
    // Paginate results
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const items = filteredTalents.slice(startIndex, endIndex);
    
    return {
      items,
      hasMore: endIndex < filteredTalents.length || page < 12, // Allow up to 12 pages
      total: filteredTalents.length
    };
  }, [sortBy, filterSpecialization, filterAvailability, showRecommended, totalGenerated]);

  // Use infinite scroll hook
  const {
    items: talents,
    loading,
    error,
    hasMore,
    total,
    isFetching,
    lastElementRef,
    refresh,
    scrollToTop,
    loadMore
  } = useInfiniteScrollPagination(fetchTalents, 16);

  // Refresh when filters change
  useEffect(() => {
    refresh();
    setTotalGenerated(0);
  }, [sortBy, filterSpecialization, filterAvailability, showRecommended]);

  // Calculate market stats
  const marketStats = useMemo(() => {
    if (talents.length === 0) return null;
    return getTalentMarketStats(talents);
  }, [talents]);

  // Get unique specializations
  const specializations = useMemo(() => {
    return Array.from(new Set(talents.map(t => t.professional_title?.split(' ')[0] || '').filter(Boolean)));
  }, [talents]);

  // Show scroll to top button
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Loading state
  if (loading && talents.length === 0) {
    return (
      <div className="container py-8" data-testid="talents-loading">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            AI & IT Talent Directory
          </h1>
          <p className="text-muted-foreground text-lg">
            Connect with world-class AI and technology professionals
          </p>
        </motion.div>
        <TalentLoadingGrid />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="container py-8">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Unable to load talents</h2>
          <p className="text-muted-foreground">{error}</p>
          <Button onClick={refresh}>Try Again</Button>
        </div>
      </div>
    );
  }

  // Main render
  return (
    <div className="container py-8">
      {/* Header */}
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          AI & IT Talent Directory
        </h1>
        <p className="text-muted-foreground text-lg">
          Connect with world-class professionals specializing in AI, machine learning, and modern technology
        </p>
      </motion.div>

      {/* Market Insights */}
      {marketStats && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <TalentMarketInsights stats={marketStats} />
        </motion.div>
      )}

      {/* Filter Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <TalentFilterControls
          sortBy={sortBy}
          setSortBy={setSortBy}
          filterSpecialization={filterSpecialization}
          setFilterSpecialization={setFilterSpecialization}
          filterAvailability={filterAvailability}
          setFilterAvailability={setFilterAvailability}
          specializations={specializations}
          showRecommended={showRecommended}
          setShowRecommended={setShowRecommended}
          loading={isFetching}
        />
      </motion.div>

      {/* Talent Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <AnimatePresence mode="popLayout">
          {talents.map((talent, index) => (
            <motion.div
              key={talent.id}
              ref={index === talents.length - 1 ? lastElementRef : null}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: Math.min(index * 0.03, 0.5) }}
              whileHover={{ scale: 1.02 }}
            >
              <TalentCard
                talent={talent}
                onHire={() => router.push(`/hire/${talent.id}`)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Loading More Indicator */}
      {(isFetching || loading) && (
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <TalentLoadingGrid count={4} />
        </motion.div>
      )}

      {hasMore && (
        <div className="text-center mt-8">
          {isFetching ? (
            <Spinner className="mx-auto h-6 w-6" />
          ) : (
            <Button onClick={loadMore}>Load More</Button>
          )}
          {total !== undefined && (
            <p className="mt-2 text-sm text-muted-foreground">
              Showing {talents.length} of {total} professionals
            </p>
          )}
        </div>
      )}

      {/* End of Results */}
      {!hasMore && talents.length > 0 && (
        <motion.div
          className="text-center mt-12 py-8 border-t"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="text-muted-foreground text-lg mb-2">
            🎉 You've explored all available talents!
          </div>
          <div className="text-sm text-muted-foreground">
            Showing {talents.length} {total && `of ${total}`} AI and technology professionals
          </div>
        </motion.div>
      )}

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="h-5 w-5 text-primary-foreground" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
