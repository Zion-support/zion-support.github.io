<<<<<<< HEAD
import React, { useState, useEffect } from 'react',
import { useRouter } from 'next/router', // Changed from useNavigate
import Link from 'next/link',
import { useAuth } from '@/hooks/useAuth',
import { useRouterReady, useRouteChange } from '@/hooks/useRouterReady',
import { FilterSidebar } from '@/components/talent/FilterSidebar',
import { TalentResults } from '@/components/talent/TalentResults',
import { TalentSkeleton } from '@/components/talent/TalentSkeleton',
import { ErrorBanner } from '@/components/talent/ErrorBanner',
import ErrorBoundary from '@/components/GlobalErrorBoundary', // Import ErrorBoundary
import { useTalentDirectory } from '@/hooks/useTalentDirectory',
import { SORT_OPTIONS } from '@/data/sortOptions',
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button',
import Image from 'next/image',
import { TalentProfile } from '@/types/talent',
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationButton,
  PaginationNext,
  PaginationPrevious} from '@/components/ui/pagination',

export default function TalentDirectory() {
  const router = useRouterReady(), // Use our custom hook
  const [currentPage, setCurrentPage] = useState(1),
  const itemsPerPage = 10,
  const [initialized, setInitialized] = useState(false),

  // Force re-render and reset state when route changes
  const routeKey = useRouteChange(() => {
    setInitialized(false),
    setCurrentPage(1)
  }),

  // Use our custom hook to manage state
  const {
    filteredTalents,
    total,
    isLoading,
    searchTerm,
    setSearchTerm,
    selectedSkills,
    selectedAvailability,
    selectedRegions,
    priceRange,
    setPriceRange,
    experienceRange,
    setExperienceRange,
    sortOption,
    setSortOption,
    isMobileFilterOpen,
    setIsMobileFilterOpen,
    isHireModalOpen,
    setIsHireModalOpen,
    selectedTalent,
    setSelectedTalent,
    expandedSections,
    error,
    isAuthenticated,
    toggleSkill,
    toggleAvailability,
    toggleRegion,
    clearFilters,
    toggleSection} = useTalentDirectory(currentPage, itemsPerPage),

  const { user } = useAuth(),
  const isAdmin = user?.userType === 'admin',

  useEffect(() => {
    setCurrentPage(1)
  }, [filteredTalents, total]),

  const totalPages = Math.ceil(total / itemsPerPage),
  const paginatedTalents = filteredTalents,

  // Load filters from query parameters on first load
  useEffect(() => {
    if (!router.isReady || initialized) return,
    
    const {
      search,
      skills,
      availability,
      regions,
      priceMin,
      priceMax,
      expMin,
      expMax,
      sort,
      page} = router.query as Record<string string>,

    if (page) setCurrentPage(parseInt(page, 10) || 1),
    if (search) setSearchTerm(search),
    if (skills) skills.split().forEach((s) => toggleSkill(s)),
    if (availability)
      availability.split().forEach((a) => toggleAvailability(a)),
    if (regions) regions.split().forEach((r) => toggleRegion(r)),
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    if (priceMin && priceMax)
      setPriceRange([Number(priceMin), Number(priceMax)]),
    if (expMin && expMax)
<<<<<<< HEAD
      setExperienceRange([Number(expMin), Number(expMax)]),
    if (sort && SORT_OPTIONS.some((o) => o.value === sort))
      setSortOption(sort),
    setInitialized(true)
  }, [router.isReady, router.query, initialized]), // Fixed dependencies

  // Persist filters to query parameters
  useEffect(() => {
    if (!initialized || !router.isReady) return,
    
    const query: Record<string string> = {},
    if (searchTerm) query.search = searchTerm,
    if (selectedSkills.length) query.skills = selectedSkills.join(),
    if (selectedAvailability.length)
      query.availability = selectedAvailability.join(),
    if (selectedRegions.length) query.regions = selectedRegions.join(),
    if (priceRange[0] !== 50 || priceRange[1] !== 200) {
      query.priceMin = String(priceRange[0]),
      query.priceMax = String(priceRange[1])
    }
    if (experienceRange[0] !== 0 || experienceRange[1] !== 15) {
      query.expMin = String(experienceRange[0]),
      query.expMax = String(experienceRange[1])
    }
    if (sortOption !== 'relevance') query.sort = sortOption,
    if (currentPage > 1) query.page = String(currentPage),
    
    router.replace({ pathname: router.pathname, query }, undefined, {
      shallow: true})
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
    initialized]), // Fixed dependencies

<<<<<<< HEAD
  const handleRequestHire = (talent: TalentProfile) => {
    setSelectedTalent(talent),
    setIsHireModalOpen(true)
  },

  const viewProfile = (id: string) => {
    // Navigate to the talent profile page
    router.push(`/talent/${id}`), // Changed to router.push
  },

  // Add key prop to force re-render when route changes
  const pageKey = `talent-directory-${routeKey}-${router.asPath}`,

  if (isLoading) {
    return (
      <div key={pageKey} className=&quot;container mx-auto px-4 py-8&quot;>
=======
  const _handleRequestHire = (_talent: TalentProfile) => {_setSelectedTalent(talent);
    setIsHireModalOpen(true);};

  const _viewProfile = (_id: string) => {_// Navigate to the talent profile page
    router.push(`/talent/${id}`); // Changed to router.push
  };

  // Add key prop to force re-render when route changes
  const _pageKey = `talent-directory-${_routeKey}-${_router.asPath}`;

  if (isLoading) {_return (
      <div key={pageKey} className="container mx-auto px-4 py-8">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <TalentSkeleton />
      </div>
    )
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
<<<<<<< HEAD
  ) {
    return (
      <div key={pageKey} className=&quot;container mx-auto px-4 py-8&quot;>
        <div className=&quot;text-center py-16&quot;>
          <Image
            src=&quot;/images/talent-placeholder.svg&quot;
            alt=&quot;No talent&quot;
            width={200}
            height={200}
            className=&quot;mx-auto mb-6&quot;
=======
  ) {_return (
      <div key={pageKey} className="container mx-auto px-4 py-8">
        <div className="text-center py-16">
          <Image
            src="/images/talent-placeholder.svg"
            alt="No talent"
            width={_200}
            height={_200}
            className="mx-auto mb-6"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          />
          <h2 className=&quot;text-2xl font-bold text-white mb-4&quot;>
            Talent Directory Currently Empty
          </h2>
          <p className=&quot;text-zion-slate-light max-w-md mx-auto mb-6&quot;>
            No talent profiles are currently available.
          </p>
          <Link href=&quot;/create-talent-profile&quot;>
            <Button className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white&quot;>
              Be the first to list a talent
            </Button>
          </Link>
        </div>
      </div>
    )
  }

<<<<<<< HEAD
  if (error) {
    return (
      <div key={pageKey} className=&quot;container mx-auto px-4 py-8&quot;>
        <ErrorBanner msg=&quot;Unable to load talent profiles.&quot; />
=======
  if (error) {_return (
      <div key={pageKey} className="container mx-auto px-4 py-8">
        <ErrorBanner msg="Unable to load talent profiles." />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </div>
    )
  }

  return (
<<<<<<< HEAD
    <div key={pageKey} className=&quot;container mx-auto px-4 py-8&quot;>
      <div className=&quot;flex flex-col space-y-8&quot;>
        <div className=&quot;flex items-start justify-between&quot;>
=======
    <div key={_pageKey} className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-8">
        <div className="flex items-start justify-between">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <div>
            <h1 className=&quot;text-3xl font-bold text-white mb-2&quot;>
              AI & Tech Talent Directory
            </h1>
            <p className=&quot;text-zion-slate-light&quot;>
              Connect with expert AI developers, data scientists, ML engineers,
              and tech professionals for your projects.
            </p>
          </div>
          {_isAdmin && (
            <Link
              href=&quot;/create-talent-profile&quot;
              className=&quot;bg-zion-purple text-white px-4 py-2 rounded hover:bg-zion-purple-dark&quot;
            >
              Add Talent
            </Link>
          )}
        </div>

<<<<<<< HEAD
        {/* Main content */}
        <div className=&quot;flex flex-col lg:flex-row gap-6&quot;>
          {/* Sidebar - Desktop */}
          <div className=&quot;w-full lg:w-64 shrink-0 hidden lg:block&quot;>
=======
        {_/* Main content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {_/* Sidebar - Desktop */}
          <div className="w-full lg:w-64 shrink-0 hidden lg:block">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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

<<<<<<< HEAD
          {/* Mobile filter button */}
          <div className=&quot;lg:hidden mb-4&quot;>
            <Button
              onClick={() => setIsMobileFilterOpen(true)}
              variant=&quot;outline&quot;
              className=&quot;w-full border-zion-blue-light text-zion-purple hover:bg-zion-blue-light&quot;
=======
          {_/* Mobile filter button */}
          <div className="lg:hidden mb-4">
            <Button
              onClick={_() => setIsMobileFilterOpen(true)}
              variant="outline"
              className="w-full border-zion-blue-light text-zion-purple hover:bg-zion-blue-light"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              Filter & Sort
            </Button>
          </div>

<<<<<<< HEAD
          {/* Results and Pagination Wrapper for ErrorBoundary */}
          <div className=&quot;flex-1&quot;>
            {' '}
            {/* Added a wrapper div to contain Results and Pagination */}
=======
          {_/* Results and Pagination Wrapper for ErrorBoundary */}
          <div className="flex-1">
            {_' '}
            {_/* Added a wrapper div to contain Results and Pagination */}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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

<<<<<<< HEAD
              {totalPages > 1 && (
                <div className=&quot;mt-6&quot;>
                  <Pagination className=&quot;justify-center&quot;>
=======
              {_totalPages > 1 && (_<div className="mt-6">
                  <Pagination className="justify-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          href={`?page=${currentPage - 1}`}
<<<<<<< HEAD
                          onClick={(e) => {
                            e.preventDefault(),
                            setCurrentPage(Math.max(1, currentPage - 1))
                          }}
=======
                          onClick={_(e) => {
                            e.preventDefault();
                            setCurrentPage(Math.max(1, _currentPage - 1));}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        />
                      </PaginationItem>
                      {_Array.from(_{ length: totalPages}, _(_, _i) => i + 1).map(_(page) => (_<PaginationItem key={_page}>
                            <PaginationButton
<<<<<<< HEAD
                              page={page}
                              isActive={page === currentPage}
                              onClick={(e) => {
                                e.preventDefault(),
                                setCurrentPage(page)
                              }}
=======
                              page={_page}
                              isActive={_page === currentPage}
                              onClick={_(e) => {
                                e.preventDefault();
                                setCurrentPage(page);}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            />
                          </PaginationItem>
                        )
                      )}
                      <PaginationItem>
                        <PaginationNext
<<<<<<< HEAD
                          href={`?page=${currentPage + 1}`}
                          onClick={(e) => {
                            e.preventDefault(),
                            setCurrentPage(
                              Math.min(totalPages, currentPage + 1)
                            )
                          }}
=======
                          href={_`?page=${currentPage + 1}`}
                          onClick={_(_e) => {
                            e.preventDefault();
                            setCurrentPage(
                              Math.min(totalPages, _currentPage + 1)
                            );}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </ErrorBoundary>
          </div>

<<<<<<< HEAD
          {/* Mobile filter sidebar */}
          {isMobileFilterOpen && (
            <div className=&quot;fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden flex&quot;>
              <div className=&quot;w-80 h-full bg-zion-blue-dark overflow-y-auto p-4 ml-auto&quot;>
                <div className=&quot;flex justify-between items-center mb-4&quot;>
                  <h3 className=&quot;font-bold text-white&quot;>Filter & Sort</h3>
=======
          {_/* Mobile filter sidebar */}
          {_isMobileFilterOpen && (_<div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden flex">
              <div className="w-80 h-full bg-zion-blue-dark overflow-y-auto p-4 ml-auto">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-white">Filter & Sort</h3>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <Button
                    variant=&quot;ghost&quot;
                    size=&quot;sm&quot;
                    onClick={() => setIsMobileFilterOpen(false)}
                    className=&quot;text-zion-slate-light h-8 w-8 p-0&quot;
                  >
                    <X className=&quot;h-4 w-4&quot; />
                    <span className=&quot;sr-only&quot;>Close</span>
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
  )
}
