

                          }}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </ErrorBoundary>
          </div>
          {isAdmin && (
            <Link
              href="/create-talent-profile"
              className="bg-zion-purple text-white px-4 py-2 rounded hover:bg-zion-purple-dark"
            >
              Add Talent
            </Link>
          )}
        </div>;
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
            />;
          </div>;
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
            <ErrorBoundary>;
              <TalentResults;
                talents={paginatedTalents}
                totalCount={total}
                isLoading={isLoading}
                viewProfile={viewProfile}
                handleRequestHire={handleRequestHire}
                isAuthenticated={isAuthenticated}
                activeFiltersProps={{;
                  selectedSkills,;
                  toggleSkill,;
                  selectedAvailability,;
                  toggleAvailability,;
                  selectedRegions,;
                  toggleRegion,;
                  priceRange,;
                  setPriceRange,;
                  experienceRange,;
                  setExperienceRange,;
                  clearFilters}}
              />

              {totalPages > 1 && (
                <div className="mt-6">
                  <Pagination className="justify-center">
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          href={`?page=${currentPage - 1}`}
                          onClick={(e) => {;
                            e.preventDefault(),;
                            setCurrentPage(Math.max(1, currentPage - 1));

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
