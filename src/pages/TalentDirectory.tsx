import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Changed from useNavigate
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { useRouterReady, useRouteChange } from '@/hooks/useRouterReady';
import { FilterSidebar } from '@/components/talent/FilterSidebar';
import { TalentResults } from '@/components/talent/TalentResults';
import { TalentSkeleton } from '@/components/talent/TalentSkeleton';
import { ErrorBanner } from '@/components/talent/ErrorBanner';
import ErrorBoundary from '@/components/GlobalErrorBoundary'; // Import ErrorBoundary
import { useTalentDirectory } from '@/hooks/useTalentDirectory';
import { SORT_OPTIONS } from '@/data/sortOptions';
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { TalentProfile } from '@/types/talent';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationButton,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

export default function TalentDirectory() {
  const router = useRouterReady(); // Use our custom hook
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [initialized, setInitialized] = useState(false);

  // Force re-render and reset state when route changes
  const routeKey = useRouteChange(() => {
    setInitialized(false);
    setCurrentPage(1);
  });

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
    toggleSection,
  } = useTalentDirectory(currentPage, itemsPerPage);

  const { user } = useAuth();
  const isAdmin = user?.userType === 'admin';

  const categories = [
    "All",
    "AI & Machine Learning",
    "Cloud & DevOps",
    "Cybersecurity",
    "Data Science",
    "Full Stack Development",
    "Mobile Development",
    "UI/UX Design"
  ];

  return (
    <div key={pageKey} className="container mx-auto px-4 py-8">
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
          {isAdmin && (
            <Link
              href="/create-talent-profile"
              className="bg-zion-purple text-white px-4 py-2 rounded hover:bg-zion-purple-dark"
            >
              Add Talent
            </Link>
          )}
        </div>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-gray-600 font-medium">Filter by:</span>
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  index === 0 
                    ? 'bg-violet-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
