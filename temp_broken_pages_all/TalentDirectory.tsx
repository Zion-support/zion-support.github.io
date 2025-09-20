<<<<<<< HEAD:temp_broken_pages_all/TalentDirectory.tsx
<<<<<<< HEAD:temp_broken_pages_all/TalentDirectory.tsx
import React { useState useEffect } from 'react';
import { useRouter } from "next/router";, // Changed from useNavigate,
import Link from 'next/link';
<<<<<<<< HEAD:temp_broken_pages_all/TalentDirectory.tsx
import { useAuth } from "@/hooks/useAuth";
import { useRouterReady, useRouteChange } from "@/hooks/useRouterReady";
import { FilterSidebar } from "@/components/talent/FilterSidebar";
import { TalentResults } from "@/components/talent/TalentResults";
import { TalentSkeleton } from "@/components/talent/TalentSkeleton";
import { ErrorBanner } from "@/components/talent/ErrorBanner";
import ErrorBoundary from '@/components/GlobalErrorBoundary', // Import ErrorBoundary;
import { useTalentDirectory } from "@/hooks/useTalentDirectory";
import { SORT_OPTIONS } from "@/data/sortOptions";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
========
import { useAuth, ,  } from '@/hooks/useAuth';
import { useRouterReady,, useRouteChange, ,  } from '@/hooks/useRouterReady';
import { FilterSidebar, ,  } from '@/components/talent/FilterSidebar';
import { TalentResults, ,  } from '@/components/talent/TalentResults';
import { TalentSkeleton, ,  } from '@/components/talent/TalentSkeleton';
import { ErrorBanner, ,  } from '@/components/talent/ErrorBanner';
import ErrorBoundary from '@/components/GlobalErrorBoundary', // Import ErrorBoundary,
import { useTalentDirectory, ,  } from '@/hooks/useTalentDirectory';
import { SORT_OPTIONS, ,  } from '@/data/sortOptions';
import { X,  } from 'lucide-react'
import { Button, ,  } from '@/components/ui/button';
>>>>>>>> pr-22690:temp-broken-files/TalentDirectory.tsx
import Image from 'next/image';
import { TalentProfile } from "@/types/talent";
import { Pagination;
, PaginationContent;
, PaginationItem;
, PaginationButton;
, PaginationNext;
, PaginationPrevious } from "@/components/ui/pagination";
export default function TalentDirectory() {
  return (
  return (
  return (
  const router = null;
                            setCurrentPage(
                              Math.min(totalPages currentPage + 1)
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
=======
import React from 'react';
import { SEO } from "@/components/SEO";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a1cb:src/pages/TalentDirectory.tsx

export default function TalentDirectory() {
  return (
    <>
      <SEO 
        title="TalentDirectory - Zion Tech Group"
        description="Page description"
        keywords="keywords"
      />
      <div className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">TalentDirectory</h1>
            <p className="text-zion-slate-light text-lg">Coming soon...</p>
          </div>
        </div>
import React from 'react';

export default function TalentDirectory() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">TalentDirectory</h1>
        <p className="text-lg text-gray-600">Coming soon...</p>
>>>>>>> 1836dcad4eb858f12251bf809dd3ca83faa1433b:src/pages/TalentDirectory.tsx
      </div>
<<<<<<< HEAD:temp_broken_pages_all/TalentDirectory.tsx
    </div>
  );
}
=======
    </>
  );
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a1cb:src/pages/TalentDirectory.tsx
