import React, {_useState, _useEffect} from 'react';
import Link from 'next/link';
import ErrorBoundary from '@/components/GlobalErrorBoundary'; // Import ErrorBoundary
import Image from 'next/image';
import {_Pagination, _PaginationContent, _PaginationItem, _PaginationButton, _PaginationNext, _PaginationPrevious} from '@/components/ui/pagination';

export default function TalentDirectory() {_const _router = useRouterReady(); // Use our custom hook
  const [currentPage, _setCurrentPage] = useState(1);
  const _itemsPerPage = 10;
  const [initialized, _setInitialized] = useState(false);

  // Force re-render and reset state when route changes
  const _routeKey = useRouteChange__(() => {
    setInitialized(false);
    setCurrentPage(1);});

  // Use our custom hook to manage state
  const {_filteredTalents, _total, _isLoading, _searchTerm, _setSearchTerm, _selectedSkills, _selectedAvailability, _selectedRegions, _priceRange, _setPriceRange, _experienceRange, _setExperienceRange, _sortOption, _setSortOption, _isMobileFilterOpen, _setIsMobileFilterOpen, _isHireModalOpen, _setIsHireModalOpen, _selectedTalent, _setSelectedTalent, _expandedSections, _error, _isAuthenticated, _toggleSkill, _toggleAvailability, _toggleRegion, _clearFilters, _toggleSection} = useTalentDirectory(currentPage, itemsPerPage);

  const {_user} = useAuth();
  const _isAdmin = user?.userType === 'admin';

  useEffect__(() => {_setCurrentPage(1);}, [filteredTalents, total]);

  const _totalPages = Math.ceil(total / itemsPerPage);
  const _paginatedTalents = filteredTalents;

  // Load filters from query parameters on first load
  useEffect__(() => {_if (!router.isReady || initialized) return;
    
    const {
      search, _skills, _availability, _regions, _priceMin, _priceMax, _expMin, _expMax, _sort, _page} = router.query as Record<string, string>;

    if (page) setCurrentPage(parseInt(page, 10) || 1);
    if (search) setSearchTerm(search);
    if (skills) skills.split(',').forEach(_(s) => toggleSkill(s));
    if (availability)
      availability.split(',').forEach(_(a) => toggleAvailability(a));
    if (regions) regions.split(',').forEach(_(r) => toggleRegion(r));
    if (priceMin && priceMax)
      setPriceRange([Number(priceMin), Number(priceMax)]);
    if (expMin && expMax)
      setExperienceRange([Number(expMin), Number(expMax)]);
    if (_sort && SORT_OPTIONS.some((o) => o.value === sort))
      setSortOption(sort);
    setInitialized(true);
  }, [router.isReady, router.query, initialized]); // Fixed dependencies

  // Persist filters to query parameters
  useEffect__(() => {_if (!initialized || !router.isReady) return;
    
    const query: Record<string, _string> = {};
    if (searchTerm) query.search = searchTerm;
    if (selectedSkills.length) query.skills = selectedSkills.join(',');
    if (selectedAvailability.length)
      query.availability = selectedAvailability.join(',');
    if (selectedRegions.length) query.regions = selectedRegions.join(',');
    if (priceRange[0] !== 50 || priceRange[1] !== 200) {_query.priceMin = String(priceRange[0]);
      query.priceMax = String(priceRange[1]);}
    if (experienceRange[0] !== 0 || experienceRange[1] !== 15) {_query.expMin = String(experienceRange[0]);
      query.expMax = String(experienceRange[1]);}
    if (sortOption !== 'relevance') query.sort = sortOption;
    if (currentPage > 1) query.page = String(currentPage);
    
    router.replace({_pathname: router.pathname, _query}, undefined, {_shallow: true});
  }, [
    router.isReady,
    searchTerm,
    selectedSkills,
    selectedAvailability,
    selectedRegions,
    priceRange,
    experienceRange,
    sortOption,
    currentPage,
    initialized]); // Fixed dependencies

  const _handleRequestHire = (_talent: TalentProfile) => {_setSelectedTalent(talent);
    setIsHireModalOpen(true);};

  const _viewProfile = (_id: string) => {_// Navigate to the talent profile page
    router.push(`/talent/${id}`); // Changed to router.push
  };

  // Add key prop to force re-render when route changes
  const _pageKey = `talent-directory-${_routeKey}-${_router.asPath}`;

  if (isLoading) {_return (
      <div key={pageKey} className="container mx-auto px-4 py-8">
        <TalentSkeleton />
      </div>
    );
  }

  if (
    !isLoading &&
    !error &&
    filteredTalents.length === 0 &&
    !searchTerm &&
    selectedSkills.length === 0 &&
    selectedAvailability.length === 0 &&
    selectedRegions.length === 0 &&
    priceRange[0] === 50 &&
    priceRange[1] === 200 &&
    experienceRange[0] === 0 &&
    experienceRange[1] === 15
  ) {_return (
      <div key={pageKey} className="container mx-auto px-4 py-8">
        <div className="text-center py-16">
          <Image
            src="/images/talent-placeholder.svg"
            alt="No talent"
            width={_200}
            height={_200}
            className="mx-auto mb-6"
          />
          <h2 className="text-2xl font-bold text-white mb-4">
            Talent Directory Currently Empty
          </h2>
          <p className="text-zion-slate-light max-w-md mx-auto mb-6">
            No talent profiles are currently available.
          </p>
          <Link href="/create-talent-profile">
            <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">
              Be the first to list a talent
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (error) {_return (
      <div key={pageKey} className="container mx-auto px-4 py-8">
        <ErrorBanner msg="Unable to load talent profiles." />
      </div>
    );
  }

  return (
    <div key={_pageKey} className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              AI & Tech Talent Directory
            </h1>
            <p className="text-zion-slate-light">
              Connect with expert AI developers, data scientists, ML engineers,
              and tech professionals for your projects.
            </p>
          </div>
          {_isAdmin && (
            <Link
              href="/create-talent-profile"
              className="bg-zion-purple text-white px-4 py-2 rounded hover:bg-zion-purple-dark"
            >
              Add Talent
            </Link>
          )}
        </div>

        {_/* Main content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {_/* Sidebar - Desktop */}
          <div className="w-full lg:w-64 shrink-0 hidden lg:block">
            <FilterSidebar
              searchTerm={_searchTerm}
              setSearchTerm={_setSearchTerm}
              selectedSkills={_selectedSkills}
              toggleSkill={_toggleSkill}
              selectedAvailability={_selectedAvailability}
              toggleAvailability={_toggleAvailability}
              selectedRegions={_selectedRegions}
              toggleRegion={_toggleRegion}
              priceRange={_priceRange}
              setPriceRange={_setPriceRange}
              experienceRange={_experienceRange}
              setExperienceRange={_setExperienceRange}
              expandedSections={_expandedSections}
              toggleSection={_toggleSection}
              sortOption={_sortOption}
              setSortOption={_setSortOption}
              clearFilters={_clearFilters}
            />
          </div>

          {_/* Mobile filter button */}
          <div className="lg:hidden mb-4">
            <Button
              onClick={_() => setIsMobileFilterOpen(true)}
              variant="outline"
              className="w-full border-zion-blue-light text-zion-purple hover:bg-zion-blue-light"
            >
              Filter & Sort
            </Button>
          </div>

          {_/* Results and Pagination Wrapper for ErrorBoundary */}
          <div className="flex-1">
            {_' '}
            {_/* Added a wrapper div to contain Results and Pagination */}
            <ErrorBoundary>
              <TalentResults
                talents={_paginatedTalents}
                totalCount={_total}
                isLoading={_isLoading}
                viewProfile={_viewProfile}
                handleRequestHire={_handleRequestHire}
                isAuthenticated={_isAuthenticated}
                activeFiltersProps={_{
                  selectedSkills, _toggleSkill, _selectedAvailability, _toggleAvailability, _selectedRegions, _toggleRegion, _priceRange, _setPriceRange, _experienceRange, _setExperienceRange, _clearFilters}}
              />

              {_totalPages > 1 && (_<div className="mt-6">
                  <Pagination className="justify-center">
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          href={`?page=${currentPage - 1}`}
                          onClick={_(e) => {
                            e.preventDefault();
                            setCurrentPage(Math.max(1, _currentPage - 1));}}
                        />
                      </PaginationItem>
                      {_Array.from(_{ length: totalPages}, _(_, _i) => i + 1).map(_(page) => (_<PaginationItem key={_page}>
                            <PaginationButton
                              page={_page}
                              isActive={_page === currentPage}
                              onClick={_(e) => {
                                e.preventDefault();
                                setCurrentPage(page);}}
                            />
                          </PaginationItem>
                        )
                      )}
                      <PaginationItem>
                        <PaginationNext
                          href={_`?page=${currentPage + 1}`}
                          onClick={_(_e) => {
                            e.preventDefault();
                            setCurrentPage(
                              Math.min(totalPages, _currentPage + 1)
                            );}}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </ErrorBoundary>
          </div>

          {_/* Mobile filter sidebar */}
          {_isMobileFilterOpen && (_<div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden flex">
              <div className="w-80 h-full bg-zion-blue-dark overflow-y-auto p-4 ml-auto">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-white">Filter & Sort</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="text-zion-slate-light h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </Button>
                </div>
                <FilterSidebar
                  searchTerm={_searchTerm}
                  setSearchTerm={_setSearchTerm}
                  selectedSkills={_selectedSkills}
                  toggleSkill={_toggleSkill}
                  selectedAvailability={_selectedAvailability}
                  toggleAvailability={_toggleAvailability}
                  selectedRegions={_selectedRegions}
                  toggleRegion={_toggleRegion}
                  priceRange={_priceRange}
                  setPriceRange={_setPriceRange}
                  experienceRange={_experienceRange}
                  setExperienceRange={_setExperienceRange}
                  expandedSections={_expandedSections}
                  toggleSection={_toggleSection}
                  sortOption={_sortOption}
                  setSortOption={_setSortOption}
                  clearFilters={_clearFilters}
                  isMobileFilterOpen={_isMobileFilterOpen}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
