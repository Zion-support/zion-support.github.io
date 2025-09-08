<<<<<<< HEAD
import React, { useState } from 'react';
import SEOHead from "@/components/SEOHead";
import Link from 'next/link';
import { Search, Filter, MapPin, Briefcase, Star, Users, Zap, Building } from 'lucide-react';

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FilterSidebar } from "@/components/talent/FilterSidebar";
import { TalentResults } from "@/components/talent/TalentResults";
import { TalentSkeleton } from "@/components/talent/TalentSkeleton";
import { ErrorBanner } from "@/components/talent/ErrorBanner";
import { useTalentDirectory } from "@/hooks/useTalentDirectory";
import { SORT_OPTIONS } from "@/data/sortOptions";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TalentProfile } from "@/types/talent";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function TalentDirectory() {
  const navigate = useNavigate();

  // Use our custom hook to manage state
  const {
    filteredTalents,
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
  } = useTalentDirectory();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredTalents]);

  const totalPages = Math.ceil(filteredTalents.length / itemsPerPage);
  const paginatedTalents = filteredTalents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  const handleRequestHire = (talent: TalentProfile) => {
    setSelectedTalent(talent);
    setIsHireModalOpen(true);
  };
  
  const viewProfile = (id: string) => {
    // Navigate to the talent profile page
    navigate(`/talent/${id}`);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <TalentSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <ErrorBanner msg="Unable to load talent profiles." />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">AI & Tech Talent Directory</h1>
            <p className="text-zion-slate-light">
              Connect with expert AI developers, data scientists, ML engineers, and tech professionals for your projects.
            </p>
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
            
            {/* Results */}
            <TalentResults
              talents={paginatedTalents}
              totalCount={filteredTalents.length}
              isLoading={isLoading}
              viewProfile={viewProfile}
              handleRequestHire={handleRequestHire}
              isAuthenticated={isAuthenticated}
              activeFiltersProps={{
                selectedSkills,
                toggleSkill,
                selectedAvailability,
                toggleAvailability,
                selectedRegions,
                toggleRegion,
                priceRange,
                setPriceRange,
                experienceRange,
                setExperienceRange,
                clearFilters,
              }}
            />

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <TalentSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <ErrorBanner msg="Unable to load talent profiles." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Talent Directory - Zion Tech Group"
        description="Browse our directory of talented professionals and experts"
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Talent Directory
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              Browse our directory of talented professionals and experts
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-white">
                Our talent directory is coming soon. You'll be able to browse and connect with skilled professionals across various industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TalentDirectory;
<<<<<<< HEAD
