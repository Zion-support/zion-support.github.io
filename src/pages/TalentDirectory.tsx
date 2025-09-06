  const isAdmin = user?.userType === 'admin';

  const paginatedTalents = filteredTalents;

  const pageKey = `talent-directory-${routeKey}-${router.asPath}`;

<<<<<<< HEAD
=======
  if (isLoading) {
    return (
      <div key={pageKey} className="container mx-auto px-4 py-8">
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
  ) {
    return (
      <div key={pageKey} className="container mx-auto px-4 py-8">
        <div className="text-center py-16">
          <Image
            src="/images/talent-placeholder.svg"
            alt="No talent"
            width={200}
            height={200}
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

  if (error) {
    return (
      <div key={pageKey} className="container mx-auto px-4 py-8">
        <ErrorBanner msg="Unable to load talent profiles." />
      </div>
    );
  }

  return (
    <div key={pageKey} className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              AI & Tech Talent Directory
            </h1>
            <p className="text-zion-slate-light">
              Connect with expert AI developers, data scientists, ML engineers;
              and tech professionals for your projects.
            </p>
          </div>
          {isAdmin && (
            <Link
              href="/create-talent-profile"
              className="bg-zion-purple text-white px-4 py-2 rounded hover: bg-zion-purple-dark"
            >
              Add Talent
            </Link>
          )}
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar - Desktop */}
          <div className="w-full lg:w-64 shrink-0 hidden lg:block">
            <FilterSidebar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedSkills={selectedSkills}
              toggleSkill={toggleSkill}
              selectedAvailability={selectedAvailability}
              toggleAvailability={toggleAvailability}
              selectedRegions={selectedRegions}
              toggleRegion={toggleRegion}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              experienceRange={experienceRange}
              setExperienceRange={setExperienceRange}
              expandedSections={expandedSections}
              toggleSection={toggleSection}
              sortOption={sortOption}
              setSortOption={setSortOption}
              clearFilters={clearFilters}
            />
          </div>

          {/* Mobile filter button */}
          <div className="lg:hidden mb-4">
            <Button
              onClick={() => setIsMobileFilterOpen(true)}
              variant="outline"
              className="w-full border-zion-blue-light text-zion-purple hover:bg-zion-blue-light"
            >
              Filter & Sort
            </Button>
          </div>

          {/* Results and Pagination Wrapper for ErrorBoundary */}
          <div className="flex-1">
            {' '}
            {/* Added a wrapper div to contain Results and Pagination */}
            <ErrorBoundary>
              <TalentResults
                talents={paginatedTalents}
                totalCount={total}
                isLoading={isLoading}
                viewProfile={viewProfile}
                handleRequestHire={handleRequestHire}
                isAuthenticated={isAuthenticated}
                activeFiltersProps={{
                  selectedSkills;
                  toggleSkill;
                  selectedAvailability;
                  toggleAvailability;
                  selectedRegions;
                  toggleRegion;
                  priceRange;
                  setPriceRange;
                  experienceRange;
                  setExperienceRange;
                  clearFilters}}
              />

              {totalPages > 1 && (
                <div className="mt-6">
                  <Pagination className="justify-center">
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          href={`?page=${currentPage - 1}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(Math.max(1, currentPage - 1))
                          }}
                        />
                      </PaginationItem>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                          <PaginationItem key={page}>
                            <PaginationButton
                              page={page}
                              isActive={page === currentPage}
                              onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage(page)
                              }}
                            />
                          </PaginationItem>
                        )
                      )}
                      <PaginationItem>
                        <PaginationNext
                          href={`?page=${currentPage + 1}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(
                              Math.min(totalPages, currentPage + 1)
                            )
                          }}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </ErrorBoundary>
          </div>

          {/* Mobile filter sidebar */}
          {isMobileFilterOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden flex">
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
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  selectedSkills={selectedSkills}
                  toggleSkill={toggleSkill}
                  selectedAvailability={selectedAvailability}
                  toggleAvailability={toggleAvailability}
                  selectedRegions={selectedRegions}
                  toggleRegion={toggleRegion}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  experienceRange={experienceRange}
                  setExperienceRange={setExperienceRange}
                  expandedSections={expandedSections}
                  toggleSection={toggleSection}
                  sortOption={sortOption}
                  setSortOption={setSortOption}
                  clearFilters={clearFilters}
                  isMobileFilterOpen={isMobileFilterOpen}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );

}/> <PaginationContent> <PaginationItem> <PaginationPrevious href= {;
  `?page=$ {;
  currentPage - 1 ;
}` ;
}/> </PaginationItem> {;
  Array.from ({;
  length: totalPages ;
}, (, i) => i + 1) .map ( (page) => (<PaginationItem key= {;
  page ;
}> <PaginationButton /> </PaginationItem>) ) ;
}<PaginationItem> <PaginationNext /> </PaginationItem> </PaginationContent> </Pagination> </div>) ";
}</ErrorBoundary> </div> <Button variant="ghost" size="sm" onClick={;
  () => setIsMobileFilterOpen (false) ";
}className="text-zion-slate-light h-8 w-8 p-0" > <X className="h-4 w-4" /> <span className="sr-only" >Close</span> </Button> </div> <FilterSidebar searchTerm= {;
  searchTerm ;
}setSearchTerm= {;
  setSearchTerm ;
}selectedSkills= {;
  selectedSkills ;
}toggleSkill= {;
  toggleSkill ;
}selectedAvailability= {;
  selectedAvailability ;
}toggleAvailability= {;
  toggleAvailability ;
}selectedRegions= {;
  selectedRegions ;
}toggleRegion= {;
  toggleRegion ;
}priceRange= {;
  priceRange ;
}setPriceRange= {;
  setPriceRange ;
}experienceRange= {;
  experienceRange ;
}setExperienceRange= {;
  setExperienceRange ;
}expandedSections= {;
  expandedSections ;
}toggleSection= {;
  toggleSection ;
}sortOption= {;
  sortOption ;
}setSortOption= {;
  setSortOption ;
}clearFilters= {;
  clearFilters ;
}isMobileFilterOpen= {;
  isMobileFilterOpen ;
}/> </div> </div>) ;
}</div> </div> </div>) ;
}"
=======

<<<<<<< HEAD
  const isAdmin = user?.userType === 'admin';



<<<<<<< HEAD
  const pageKey = `talent-directory-${routeKey}-${router.asPath}`;


>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
