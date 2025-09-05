import { useRouter } from 'next/router',
import { useState, useEffect, useCallback, useMemo } from 'react',
import { motion, AnimatePresence } from 'framer-motion',
import { ArrowUp, Filter, SortAsc, Users, TrendingUp, Star, Verified, MapPin } from 'lucide-react'
import { useInfiniteScrollPagination } from '@/hooks/useInfiniteScroll',
import { generateAITalents, getTalentMarketStats, getRecommendedTalents } from '@/utils/talentAutoFeedAlgorithm',
import { TALENT_PROFILES } from '@/data/talentData',
import { TalentProfile } from '@/types/talent',
import { SkeletonCard } from '@/components/ui/skeleton',
import { Button } from '@/components/ui/button',
import { Badge } from '@/components/ui/badge',
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card',
import Spinner from '@/components/ui/spinner',
// Market insights component for talents
const TalentMarketInsights: React.FC<{ stats: any }> = ({ stats }) => (
  <Card className=&quot;bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-700/30 mb-6&quot;>
    <CardContent className=&quot;p-6&quot;>
      <div className=&quot;flex items-center gap-2 mb-4&quot;>
        <TrendingUp className=&quot;h-5 w-5 text-green-400&quot; />
        <h3 className=&quot;text-lg font-semibold&quot;>Talent Market Insights</h3>
      </div>
      <div className=&quot;grid grid-cols-2 md:grid-cols-5 gap-4&quot;>
        <div className=&quot;text-center&quot;>
          <div className=&quot;text-2xl font-bold text-green-400&quot;>${Math.round(stats.averageHourlyRate)}/hr</div>
          <div className=&quot;text-sm text-muted-foreground&quot;>Avg Hourly Rate</div>
        </div>
        <div className=&quot;text-center&quot;>
          <div className=&quot;text-2xl font-bold text-blue-400&quot;>${Math.round(stats.averageMonthlySalary / 1000)}k/mo</div>
          <div className=&quot;text-sm text-muted-foreground&quot;>Avg Monthly</div>
        </div>
        <div className=&quot;text-center&quot;>
          <div className=&quot;text-2xl font-bold text-yellow-400&quot;>{stats.averageRating.toFixed(1)}</div>
          <div className=&quot;text-sm text-muted-foreground&quot;>Avg Rating</div>
        </div>
        <div className=&quot;text-center&quot;>
          <div className=&quot;text-2xl font-bold text-purple-400&quot;>{Math.round(stats.averageExperience)}yr</div>
          <div className=&quot;text-sm text-muted-foreground&quot;>Avg Experience</div>
        </div>
        <div className=&quot;text-center&quot;>
          <div className=&quot;text-2xl font-bold text-orange-400&quot;>{stats.totalTalents}</div>
          <div className=&quot;text-sm text-muted-foreground&quot;>Total Talents</div>
        </div>
      </div>
    </CardContent>
  </Card>
),

// Filter and sort controls for talents
const TalentFilterControls: React.FC<{
  sortBy: string,
  setSortBy: (sort: string) => void,
  filterSpecialization: string,
  setFilterSpecialization: (spec: string) => void,
  filterAvailability: string,
  setFilterAvailability: (avail: string) => void,
  specializations: string[],
  showRecommended: boolean,
  setShowRecommended: (show: boolean) => void,
  loading: boolean
}> = ({
  sortBy,
  setSortBy,
  filterSpecialization,
  setFilterSpecialization,
  filterAvailability,
  setFilterAvailability,
  specializations,
  showRecommended,
  setShowRecommended,
  loading
}) => (
  <div className=&quot;flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg relative&quot;>
    {loading && <Spinner className=&quot;absolute right-4 top-4 h-4 w-4 text-primary&quot; />}
    <div className=&quot;flex items-center gap-2&quot;>
      <Filter className=&quot;h-4 w-4 text-muted-foreground&quot; />
      <select
        value={filterSpecialization}
        onChange={(e) => setFilterSpecialization(e.target.value)}
        className=&quot;bg-background border border-border px-3 py-2 rounded&quot;
      >
        <option value="">All Specializations</option>
        {specializations.map(spec => (
          <option key={spec} value={spec}>{spec}</option>
        ))}
      </select>
    </div>

    <div className="flex items-center gap-2">
      <Users className="h-4 w-4 text-muted-foreground" />
      <select
        value={filterAvailability}
        onChange={(e) => setFilterAvailability(e.target.value)}
        className="bg-background border border-border px-3 py-2 rounded&quot;
      >
        <option value="&quot;>All Availability</option>
        <option value=&quot;full_time&quot;>Full Time</option>
        <option value=&quot;part_time&quot;>Part Time</option>
        <option value=&quot;project&quot;>Project Based</option>
        <option value=&quot;consulting&quot;>Consulting</option>
      </select>
    </div>
    
    <div className=&quot;flex items-center gap-2&quot;>
      <SortAsc className=&quot;h-4 w-4 text-muted-foreground&quot; />
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className=&quot;bg-background border border-border px-3 py-2 rounded&quot;
      >
        <option value=&quot;newest&quot;>Newest First</option>
        <option value=&quot;hourly-rate-low&quot;>Rate: Low to High</option>
        <option value=&quot;hourly-rate-high&quot;>Rate: High to Low</option>
        <option value=&quot;rating&quot;>Highest Rated</option>
        <option value=&quot;experience&quot;>Most Experienced</option>
        <option value=&quot;verified&quot;>Verified First</option>
      </select>
    </div>

    <Button
      variant={showRecommended ? &quot;default&quot; : &quot;outline&quot;}
      size=&quot;sm&quot;
      onClick={() => setShowRecommended(!showRecommended)}
      className=&quot;flex items-center gap-2&quot;
    >
      <Star className=&quot;h-4 w-4&quot; />
      {showRecommended ? &quot;All Talents&quot; : &quot;Recommended&quot;}
    </Button>
  </div>
),

// Talent card component
<<<<<<< HEAD
const TalentCard: React.FC<{ talent: TalentProfile, onHire: () => void }> = ({ talent, onHire }) => (
  <Card className="h-full hover:shadow-lg transition-shadow">
    <CardHeader className="pb-3">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
=======
const TalentCard: React.FC<{ talent: TalentProfile; onHire: () => void }> = ({ talent, onHire }) => (
  <Card className=&quot;h-full hover:shadow-lg transition-shadow&quot;>
    <CardHeader className=&quot;pb-3&quot;>
      <div className=&quot;flex items-start justify-between&quot;>
        <div className=&quot;flex items-start gap-3&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          <img
            src={talent.profile_picture_url || `https://api.dicebear.com/6.x/initials/svg?seed=${talent.full_name}`}
            alt={talent.full_name}
            className=&quot;w-12 h-12 rounded-full object-cover&quot;
            loading=&quot;lazy&quot;
          />
          <div className=&quot;flex-1 min-w-0&quot;>
            <div className=&quot;flex items-center gap-2&quot;>
              <h3 className=&quot;font-semibold text-lg truncate&quot;>{talent.full_name}</h3>
              {talent.is_verified && (
                <Verified className=&quot;h-4 w-4 text-blue-500 flex-shrink-0&quot; />
              )}
            </div>
            <p className=&quot;text-sm text-muted-foreground truncate&quot;>{talent.professional_title}</p>
            <div className=&quot;flex items-center gap-1 mt-1&quot;>
              <MapPin className=&quot;h-3 w-3 text-muted-foreground&quot; />
              <span className=&quot;text-xs text-muted-foreground&quot;>{talent.location}</span>
            </div>
          </div>
        </div>
        <div className=&quot;text-right flex-shrink-0&quot;>
          <div className=&quot;text-lg font-bold text-green-600&quot;>${talent.hourly_rate}/hr</div>
          <div className=&quot;text-xs text-muted-foreground&quot;>
            ~${talent.hourly_rate ? Math.round(talent.hourly_rate * 160 / 1000) : 0}k/month
          </div>
        </div>
      </div>
    </CardHeader>
    
    <CardContent className=&quot;pt-0&quot;>
      <div className=&quot;flex items-center gap-4 mb-3&quot;>
        <div className=&quot;flex items-center gap-1&quot;>
          <Star className=&quot;h-4 w-4 text-yellow-500 fill-current&quot; />
          <span className=&quot;text-sm font-medium&quot;>{talent.average_rating?.toFixed(1)}</span>
          <span className=&quot;text-xs text-muted-foreground&quot;>({talent.rating_count} reviews)</span>
        </div>
        <div className=&quot;text-sm text-muted-foreground&quot;>
          {talent.years_experience} years experience
        </div>
      </div>

      <p className=&quot;text-sm text-muted-foreground mb-3 line-clamp-2&quot;>
        {talent.bio}
      </p>

      <div className=&quot;flex flex-wrap gap-1 mb-4&quot;>
        {talent.skills?.slice(0, 4).map((skill, index) => (
          <Badge key={index} variant=&quot;secondary&quot; className=&quot;text-xs&quot;>
            {skill}
          </Badge>
        ))}
        {talent.skills && talent.skills.length > 4 && (
          <Badge variant=&quot;outline&quot; className=&quot;text-xs&quot;>
            +{talent.skills.length - 4} more
          </Badge>
        )}
      </div>

<<<<<<< HEAD
      <div className="flex items-center justify-between">
        <Badge variant={talent.availability_type === 'full_time' ? 'default' : 'outline'} className="text-xs">
          {talent.availability_type?.replace('_ ').toUpperCase()}
=======
      <div className=&quot;flex items-center justify-between&quot;>
        <Badge variant={talent.availability_type === 'full_time' ? 'default' : 'outline'} className=&quot;text-xs&quot;>
          {talent.availability_type?.replace('_', ' ').toUpperCase()}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        </Badge>
        <Button size=&quot;sm&quot; onClick={onHire}>
          Hire Talent
        </Button>
      </div>
    </CardContent>
  </Card>
),

// Loading skeleton for talent grid
const TalentLoadingGrid: React.FC<{ count?: number }> = ({ count = 8 }) => (
  <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6&quot;>
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
),

// Main enhanced talents page with infinite scroll
export default function TalentsPage() {
  const router = useRouter(),
  const [sortBy, setSortBy] = useState('newest'),
  const [filterSpecialization, setFilterSpecialization] = useState(''),
  const [filterAvailability, setFilterAvailability] = useState(''),
  const [showRecommended, setShowRecommended] = useState(false),
  const [totalGenerated, setTotalGenerated] = useState(0),

  // Fetch function for infinite scroll with AI talent generation
  const fetchTalents = useCallback(async (page: number, limit: number) => {
    // Add realistic loading delay
    await new Promise(resolve => setTimeout(resolve, 300)),

    let allTalents: TalentProfile[] = [],
    
    // Start with existing talent profiles
    if (page === 1) {
      allTalents = [...TALENT_PROFILES]
    }
    
    // Generate new AI/IT talents using the auto-feed algorithm
    const startId = TALENT_PROFILES.length + (page - 1) * limit + totalGenerated,
    const newTalents = generateAITalents(limit, startId),
    setTotalGenerated(prev => prev + newTalents.length),
    
    allTalents = [...allTalents, ...newTalents],
    
    // Apply filters
    let filteredTalents = allTalents,
    
    if (filterSpecialization) {
      filteredTalents = filteredTalents.filter(t => 
        t.professional_title?.toLowerCase().includes(filterSpecialization.toLowerCase())
      )
    }

    if (filterAvailability) {
      filteredTalents = filteredTalents.filter(t => t.availability_type === filterAvailability)
    }
    
    if (showRecommended) {
      filteredTalents = getRecommendedTalents(filteredTalents)
    }
    
    // Apply sorting
    filteredTalents.sort((a, b) => {
      switch (sortBy) {
        case 'hourly-rate-low':
          return (a.hourly_rate || 0) - (b.hourly_rate || 0),
        case 'hourly-rate-high':
          return (b.hourly_rate || 0) - (a.hourly_rate || 0),
        case 'rating':
          return (b.average_rating || 0) - (a.average_rating || 0),
        case 'experience':
          return (b.years_experience || 0) - (a.years_experience || 0),
        case 'verified':
          return (b.is_verified ? 1 : 0) - (a.is_verified ? 1 : 0),
        case 'newest':
        default: return new Date(b.id || '').getTime() - new Date(a.id || '').getTime()
      }
    }),
    
    // Paginate results
    const startIndex = (page - 1) * limit,
    const endIndex = startIndex + limit,
    const items = filteredTalents.slice(startIndex, endIndex),
    
    return {
      items,
      hasMore: endIndex < filteredTalents.length || page < 12, // Allow up to 12 pages
      total: filteredTalents.length
    }
  }, [sortBy, filterSpecialization, filterAvailability, showRecommended, totalGenerated]),

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
  } = useInfiniteScrollPagination(fetchTalents, 16),

  // Refresh when filters change
  useEffect(() => {
    refresh(),
    setTotalGenerated(0)
  }, [sortBy, filterSpecialization, filterAvailability, showRecommended]),

  // Calculate market stats
  const marketStats = useMemo(() => {
    if (talents.length === 0) return null,
    return getTalentMarketStats(talents)
  }, [talents]),

  // Get unique specializations
  const specializations = useMemo(() => {
    return Array.from(new Set(talents.map(t => t.professional_title?.split(' ')[0] || '').filter(Boolean)))
  }, [talents]),

  // Show scroll to top button
  const [showScrollTop, setShowScrollTop] = useState(false),
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 800)
    },
    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener('scroll', handleScroll)
  }, []),

  // Loading state
  if (loading && talents.length === 0) {
    return (
      <div className=&quot;container py-8&quot; data-testid=&quot;talents-loading&quot;>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className=&quot;text-center mb-8&quot;
        >
          <h1 className=&quot;text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent&quot;>
            AI & IT Talent Directory
          </h1>
          <p className=&quot;text-muted-foreground text-lg&quot;>
            Connect with world-class AI and technology professionals
          </p>
        </motion.div>
        <TalentLoadingGrid />
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className=&quot;container py-8&quot;>
        <div className=&quot;text-center space-y-4&quot;>
          <h2 className=&quot;text-2xl font-bold&quot;>Unable to load talents</h2>
          <p className=&quot;text-muted-foreground&quot;>{error}</p>
          <Button onClick={refresh}>Try Again</Button>
        </div>
      </div>
    )
  }

  // Main render
  return (
    <div className=&quot;container py-8&quot;>
      {/* Header */}
      <motion.div 
        className=&quot;text-center mb-8&quot;
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className=&quot;text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent&quot;>
          AI & IT Talent Directory
        </h1>
        <p className=&quot;text-muted-foreground text-lg&quot;>
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
        className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6&quot;
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <AnimatePresence mode=&quot;popLayout&quot;>
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
          className=&quot;mt-8&quot;
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <TalentLoadingGrid count={4} />
        </motion.div>
      )}

      {hasMore && (
        <div className=&quot;text-center mt-8&quot;>
          {isFetching ? (
            <Spinner className=&quot;mx-auto h-6 w-6&quot; />
          ) : (
            <Button onClick={loadMore}>Load More</Button>
          )}
          {total !== undefined && (
            <p className=&quot;mt-2 text-sm text-muted-foreground&quot;>
              Showing {talents.length} of {total} professionals
            </p>
          )}
        </div>
      )}

      {/* End of Results */}
      {!hasMore && talents.length > 0 && (
        <motion.div
          className=&quot;text-center mt-12 py-8 border-t&quot;
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className=&quot;text-muted-foreground text-lg mb-2&quot;>
            🎉 You've explored all available talents!
          </div>
          <div className=&quot;text-sm text-muted-foreground&quot;>
            Showing {talents.length} {total && `of ${total}`} AI and technology professionals
          </div>
        </motion.div>
      )}

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className=&quot;fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50&quot;
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className=&quot;h-5 w-5 text-primary-foreground&quot; />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
