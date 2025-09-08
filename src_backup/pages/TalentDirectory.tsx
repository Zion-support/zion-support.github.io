import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Changed from useNavigate
import Link from 'next/link';
import { useAuth  } from '@/hooks/useAuth';
import { useRouterReady, useRouteChange  } from '@/hooks/useRouterReady';
import { FilterSidebar  } from '@/components/talent/FilterSidebar';
import { TalentResults  } from '@/components/talent/TalentResults';
import { TalentSkeleton  } from '@/components/talent/TalentSkeleton';
import { ErrorBanner  } from '@/components/talent/ErrorBanner';
import ErrorBoundary from '@/components/GlobalErrorBoundary', // Import ErrorBoundary
import { useTalentDirectory  } from '@/hooks/useTalentDirectory';
import { SORT_OPTIONS  } from '@/data/sortOptions';
import { X } from 'lucide-react'
import { Button  } from '@/components/ui/button';
import Image from 'next/image';
import { TalentProfile } from '@/types/talent';
import { Pagination;
  PaginationContent;
  PaginationItem;
  PaginationButton;
  PaginationNext;
  PaginationPrevious } from '@/components/ui/pagination';
export default function TalentDirectory() {
  const router = null;
                            setCurrentPage(
                              Math.min(totalPages, currentPage + 1)
                            )
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
                          }
=======
                          }}
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
            <div className='fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden flex'>
              <div className='w-80 h-full bg-zion-blue-dark overflow-y-auto p-4 ml-auto'>
                <div className='flex justify-between items-center mb-4'>
                  <h3 className='font-bold text-white'>Filter & Sort</h3>
                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={() => setIsMobileFilterOpen(false)}
                    className='text-zion-slate-light h-8 w-8 p-0'
                  >
                    <X className='h-4 w-4' />
                    <span className='sr-only'>Close</span>
=======
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden flex">
              <div className="w-80 h-full bg-zion-blue-dark overflow-y-auto p-4 ml-auto">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-white">Filter & Sort</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="text-zion-slate-light h-8 w-8 p-0"><X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
}<PaginationItem> <PaginationNext /> </PaginationItem> </PaginationContent> </Pagination> </div>) ';
}</ErrorBoundary> </div> <Button variant='ghost' size='sm' onClick={;
  () => setIsMobileFilterOpen (false) ';
}className='text-zion-slate-light h-8 w-8 p-0' > <X className='h-4 w-4' /> <span className='sr-only' >Close</span> </Button> </div> <FilterSidebar searchTerm= {;
=======
}<PaginationItem> <PaginationNext /> </PaginationItem> </PaginationContent> </Pagination> </div>) ";
}</ErrorBoundary> </div> <Button variant="ghost" size="sm" onClick={;
  () => setIsMobileFilterOpen (false) ";
}className="text-zion-slate-light h-8 w-8 p-0" > <X className="h-4 w-4" /> <span className="sr-only" >Close</span> </Button> </div> <FilterSidebar searchTerm= {;
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
}'
=======
}"
>>>>>>> origin/resolved-merge-conflicts
origin/cursor/automate-test-improve-and-merge-code-2533
