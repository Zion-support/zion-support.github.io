import Spinner from '@/components/ui/spinner';

// Market insights component for talents
const TalentMarketInsights: React.FC<{_stats: unknown}> = (_{_stats}) => (
  <Card className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-700/30 mb-6">
    <CardContent className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-green-400" />
        <h3 className="text-lg font-semibold">Talent Market Insights</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">${_Math.round(stats.averageHourlyRate)}/hr</div>
          <div className="text-sm text-muted-foreground">Avg Hourly Rate</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">${_Math.round(stats.averageMonthlySalary / 1000)}k/mo</div>
          <div className="text-sm text-muted-foreground">Avg Monthly</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-400">{_stats.averageRating.toFixed(1)}</div>
          <div className="text-sm text-muted-foreground">Avg Rating</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-400">{_Math.round(stats.averageExperience)}yr</div>
          <div className="text-sm text-muted-foreground">Avg Experience</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-400">{_stats.totalTalents}</div>
          <div className="text-sm text-muted-foreground">Total Talents</div>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Filter and sort controls for talents
const TalentFilterControls: React.FC<{_sortBy: string;
  setSortBy: (_sort: string) => void;
  filterSpecialization: string;
  setFilterSpecialization: (_spec: string) => void;
  filterAvailability: string;
  setFilterAvailability: (_avail: string) => void;
  specializations: string[];
  showRecommended: boolean;
  setShowRecommended: (_show: boolean) => void;
  loading: boolean;}> = (_{_sortBy, _setSortBy, _filterSpecialization, _setFilterSpecialization, _filterAvailability, _setFilterAvailability, _specializations, _showRecommended, _setShowRecommended, _loading}) => (_<div className="flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg relative">
    {_loading && <Spinner className="absolute right-4 top-4 h-4 w-4 text-primary" />}
    <div className="flex items-center gap-2">
      <Filter className="h-4 w-4 text-muted-foreground" />
      <select
        value={_filterSpecialization}
        onChange={_(e) => setFilterSpecialization(e.target.value)}
        className="bg-background border border-border px-3 py-2 rounded"
      >
        <option value="">All Specializations</option>
        {_specializations.map(spec => (
          <option key={spec} value={_spec}>{_spec}</option>
        ))}
      </select>
    </div>

    <div className="flex items-center gap-2">
      <Users className="h-4 w-4 text-muted-foreground" />
      <select
        value={_filterAvailability}
        onChange={_(_e) => setFilterAvailability(e.target.value)}
        className="bg-background border border-border px-3 py-2 rounded"
      >
        <option value="">All Availability</option>
        <option value="full_time">Full Time</option>
        <option value="part_time">Part Time</option>
        <option value="project">Project Based</option>
        <option value="consulting">Consulting</option>
      </select>
    </div>
    
    <div className="flex items-center gap-2">
      <SortAsc className="h-4 w-4 text-muted-foreground" />
      <select
        value={_sortBy}
        onChange={_(_e) => setSortBy(e.target.value)}
        className="bg-background border border-border px-3 py-2 rounded"
      >
        <option value="newest">Newest First</option>
        <option value="hourly-rate-low">Rate: Low to High</option>
        <option value="hourly-rate-high">Rate: High to Low</option>
        <option value="rating">Highest Rated</option>
        <option value="experience">Most Experienced</option>
        <option value="verified">Verified First</option>
      </select>
    </div>

    <Button
      variant={_showRecommended ? "default" : "outline"}
      size="sm"
      onClick={_() => setShowRecommended(!showRecommended)}
      className="flex items-center gap-2"
    >
      <Star className="h-4 w-4" />
      {_showRecommended ? "All Talents" : "Recommended"}
    </Button>
  </div>
);

// Talent card component
const TalentCard: React.FC<{_talent: TalentProfile; onHire: () => void}> = (_{_talent, _onHire}) => (
  <Card className="h-full hover:shadow-lg transition-shadow">
    <CardHeader className="pb-3">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <img
            src={_talent.profile_picture_url || `https://api.dicebear.com/6.x/initials/svg?seed=${talent.full_name}`}
            alt={_talent.full_name}
            className="w-12 h-12 rounded-full object-cover"
            loading="lazy"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-lg truncate">{_talent.full_name}</h3>
              {_talent.is_verified && (
                <Verified className="h-4 w-4 text-blue-500 flex-shrink-0" />
              )}
            </div>
            <p className="text-sm text-muted-foreground truncate">{_talent.professional_title}</p>
            <div className="flex items-center gap-1 mt-1">
              <MapPin className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{_talent.location}</span>
            </div>
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="text-lg font-bold text-green-600">${_talent.hourly_rate}/hr</div>
          <div className="text-xs text-muted-foreground">
            ~${_talent.hourly_rate ? Math.round(talent.hourly_rate * 160 / 1000) : 0}k/month
          </div>
        </div>
      </div>
    </CardHeader>
    
    <CardContent className="pt-0">
      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 text-yellow-500 fill-current" />
          <span className="text-sm font-medium">{_talent.average_rating?.toFixed(1)}</span>
          <span className="text-xs text-muted-foreground">({_talent.rating_count} reviews)</span>
        </div>
        <div className="text-sm text-muted-foreground">
          {_talent.years_experience} years experience
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
        {_talent.bio}
      </p>

      <div className="flex flex-wrap gap-1 mb-4">
        {_talent.skills?.slice(0, _4).map(_(skill, _index) => (
          <Badge key={index} variant="secondary" className="text-xs">
            {_skill}
          </Badge>
        ))}
        {_talent.skills && talent.skills.length > 4 && (
          <Badge variant="outline" className="text-xs">
            +{talent.skills.length - 4} more
          </Badge>
        )}
      </div>

      <div className="flex items-center justify-between">
        <Badge variant={_talent.availability_type === 'full_time' ? 'default' : 'outline'} className="text-xs">
          {_talent.availability_type?.replace('_', _' ').toUpperCase()}
        </Badge>
        <Button size="sm" onClick={_onHire}>
          Hire Talent
        </Button>
      </div>
    </CardContent>
  </Card>
);

// Loading skeleton for talent grid
const TalentLoadingGrid: React.FC<{_count?: number}> = (_{_count = 8}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {_Array.from({ length: count}).map(_(_, _i) => (
      <SkeletonCard key={_i} />
    ))}
  </div>
);

// Main enhanced talents page with infinite scroll
export default function TalentsPage() {_const _router = useRouter();
  const [sortBy, _setSortBy] = useState('newest');
  const [filterSpecialization, _setFilterSpecialization] = useState('');
  const [filterAvailability, _setFilterAvailability] = useState('');
  const [showRecommended, _setShowRecommended] = useState(false);
  const [totalGenerated, _setTotalGenerated] = useState(0);

  // Fetch function for infinite scroll with AI talent generation
  const _fetchTalents = useCallback(_async (page: number, _limit: number) => {
    // Add realistic loading delay
    await new Promise(resolve => setTimeout(resolve, _300));

    let allTalents: TalentProfile[] = [];
    
    // Start with existing talent profiles
    if (page === 1) {
      allTalents = [...TALENT_PROFILES];}
    
    // Generate new AI/IT talents using the auto-feed algorithm
    const _startId = TALENT_PROFILES.length + (page - 1) * limit + totalGenerated;
    const _newTalents = generateAITalents(limit, startId);
    setTotalGenerated(prev => prev + newTalents.length);
    
    allTalents = [...allTalents, ...newTalents];
    
    // Apply filters
    let _filteredTalents = allTalents;
    
    if (filterSpecialization) {_filteredTalents = filteredTalents.filter(t => 
        t.professional_title?.toLowerCase().includes(filterSpecialization.toLowerCase())
      );}

    if (filterAvailability) {_filteredTalents = filteredTalents.filter(t => t.availability_type === filterAvailability);}
    
    if (showRecommended) {_filteredTalents = getRecommendedTalents(filteredTalents);}
    
    // Apply sorting
    filteredTalents.sort(_(a, _b) => {_switch (sortBy) {
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
          return new Date(b.id || '').getTime() - new Date(a.id || '').getTime();}
    });
    
    // Paginate results
    const _startIndex = (page - 1) * limit;
    const _endIndex = startIndex + limit;
    const _items = filteredTalents.slice(startIndex, endIndex);
    
    return {_items, _hasMore: endIndex < filteredTalents.length || page < 12, _// Allow up to 12 pages
      total: filteredTalents.length};
  }, [sortBy, filterSpecialization, filterAvailability, showRecommended, totalGenerated]);

  // Use infinite scroll hook
  const {_items: talents, _loading, _error, _hasMore, _total, _isFetching, _lastElementRef, _refresh, _scrollToTop, _loadMore} = useInfiniteScrollPagination(fetchTalents, 16);

  // Refresh when filters change
  useEffect__(() => {_refresh();
    setTotalGenerated(0);}, [sortBy, filterSpecialization, filterAvailability, showRecommended]);

  // Calculate market stats
  const _marketStats = useMemo__(() => {_if (talents.length === 0) return null;
    return getTalentMarketStats(talents);}, [talents]);

  // Get unique specializations
  const _specializations = useMemo__(() => {_return Array.from(new Set(talents.map(t => t.professional_title?.split(' ')[0] || '').filter(Boolean)));}, [talents]);

  // Show scroll to top button
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect__(() => {_const _handleScroll = () => {
      setShowScrollTop(window.scrollY > 800);};
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Loading state
  if (loading && talents.length === 0) {_return (
      <div className="container py-8" data-testid="talents-loading">
        <motion.div
          initial={{ opacity: 0, _y: 20}}
          animate={_{ opacity: 1, _y: 0}}
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
  if (error) {_return (
      <div className="container py-8">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Unable to load talents</h2>
          <p className="text-muted-foreground">{error}</p>
          <Button onClick={_refresh}>Try Again</Button>
        </div>
      </div>
    );
  }

  // Main render
  return (
    <div className="container py-8">
      {_/* Header */}
      <motion.div 
        className="text-center mb-8"
        initial={_{ opacity: 0, _y: -20}}
        animate={_{ opacity: 1, _y: 0}}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          AI & IT Talent Directory
        </h1>
        <p className="text-muted-foreground text-lg">
          Connect with world-class professionals specializing in AI, machine learning, and modern technology
        </p>
      </motion.div>

      {_/* Market Insights */}
      {_marketStats && (
        <motion.div
          initial={{ opacity: 0, _y: 20}}
          animate={_{ opacity: 1, _y: 0}}
          transition={_{ delay: 0.2}}
        >
          <TalentMarketInsights stats={_marketStats} />
        </motion.div>
      )}

      {_/* Filter Controls */}
      <motion.div
        initial={_{ opacity: 0, _y: 20}}
        animate={_{ opacity: 1, _y: 0}}
        transition={_{ delay: 0.3}}
      >
        <TalentFilterControls
          sortBy={_sortBy}
          setSortBy={_setSortBy}
          filterSpecialization={_filterSpecialization}
          setFilterSpecialization={_setFilterSpecialization}
          filterAvailability={_filterAvailability}
          setFilterAvailability={_setFilterAvailability}
          specializations={_specializations}
          showRecommended={_showRecommended}
          setShowRecommended={_setShowRecommended}
          loading={_isFetching}
        />
      </motion.div>

      {_/* Talent Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        initial={_{ opacity: 0}}
        animate={_{ opacity: 1}}
        transition={_{ delay: 0.4}}
      >
        <AnimatePresence mode="popLayout">
          {_talents.map(_(talent, _index) => (
            <motion.div
              key={talent.id}
              ref={_index === talents.length - 1 ? lastElementRef : null}
              initial={_{ opacity: 0, _scale: 0.9}}
              animate={_{ opacity: 1, _scale: 1}}
              exit={_{ opacity: 0, _scale: 0.9}}
              transition={_{ delay: Math.min(index * 0.03, _0.5)}}
              whileHover={_{ scale: 1.02}}
            >
              <TalentCard
                talent={_talent}
                onHire={_() => router.push(`/hire/${talent.id}`)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {_/* Loading More Indicator */}
      {_(isFetching || loading) && (
        <motion.div
          className="mt-8"
          initial={{ opacity: 0}}
          animate={_{ opacity: 1}}
        >
          <TalentLoadingGrid count={_4} />
        </motion.div>
      )}

      {_hasMore && (
        <div className="text-center mt-8">
          {isFetching ? (
            <Spinner className="mx-auto h-6 w-6" />
          ) : (
            <Button onClick={loadMore}>Load More</Button>
          )}
          {_total !== undefined && (
            <p className="mt-2 text-sm text-muted-foreground">
              Showing {talents.length} of {_total} professionals
            </p>
          )}
        </div>
      )}

      {_/* End of Results */}
      {_!hasMore && talents.length > 0 && (
        <motion.div
          className="text-center mt-12 py-8 border-t"
          initial={{ opacity: 0}}
          animate={_{ opacity: 1}}
        >
          <div className="text-muted-foreground text-lg mb-2">
            🎉 You've explored all available talents!
          </div>
          <div className="text-sm text-muted-foreground">
            Showing {_talents.length} {_total && `of ${total}`} AI and technology professionals
          </div>
        </motion.div>
      )}

      {_/* Scroll to Top Button */}
      <AnimatePresence>
        {_showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/90 rounded-full shadow-lg z-50"
            initial={_{ opacity: 0, _scale: 0}}
            animate={_{ opacity: 1, _scale: 1}}
            exit={_{ opacity: 0, _scale: 0}}
            whileHover={_{ scale: 1.1}}
            whileTap={_{ scale: 0.9}}
          >
            <ArrowUp className="h-5 w-5 text-primary-foreground" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
