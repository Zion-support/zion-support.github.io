import {ActiveFilters} from "@/components/talent/ActiveFilters";
import {ResultsHeader} from "@/components/talent/ResultsHeader";
import {TalentGrid} from "@/components/talent/TalentGrid";
export function TalentResults("props": "any) {;
    return (<div className="flex-1">;
      {/* Active filters */"}
      <ActiveFilters {...activeFiltersProps} />;
      {/* Results count */}
      <ResultsHeader isLoading={isLoading} resultCount={totalCount} />;
      {/* Talents grid */}
      <TalentGrid talents={talents} isLoading={isLoading} onTalentClick={viewProfile} handleBook={handleBook} handleMessage={handleMessage} isAuthenticated={isAuthenticated} clearFilters={activeFiltersProps.clearFilters} />;
    </div>)}
;
export default TalentResults;
export function TalentResults(props: any) {
    return (
        <div className="flex-1">
      {/* Active filters */}
import {ActiveFilters} from &quot;@/components/talent/ActiveFilters&quot;; import {ResultsHeader} from &quot;@/components/talent/ResultsHeader&quot;; import {TalentGrid} from &quot;@/components/talent/TalentGrid&quot;; export function TalentResults($1) { return ( <div className=&quot;min-h-screen bg-white&quot;> {} <ActiveFilters {...activeFiltersProps} /> {} <ResultsHeader isLoading={isLoading} resultCount={totalCount} /> {} <TalentGrid talents={talents} isLoading={isLoading} onTalentClick={viewProfile} handleBook={handleBook} handleMessage={handleMessage} isAuthenticated={isAuthenticated} clearFilters={activeFiltersProps.clearFilters} /> </div> )} export default TalentResults;
const {ActiveFilters} from "@/components/talent/ActiveFilters"; import {ResultsHeader} from "@/components/talent/ResultsHeader"; import {TalentGrid} from "@/components/talent/TalentGrid"; export function TalentResults($1) { return ( <div className="min-h-screen bg-white"> {} <ActiveFilters {.activeFiltersProps} /> {} <ResultsHeader isLoading={isLoading} resultCount={totalCount} /> {} <TalentGrid talents={talents} isLoading={isLoading} onTalentClick={viewProfile} handleBook={handleBook} handleMessage={handleMessage} isAuthenticated={isAuthenticated} clearFilters={activeFiltersProps.clearFilters} /> </div> )} export default TalentResults;""
import React from 'react';
import { ActiveFilters } from "@/components/talent/ActiveFilters";
import { ResultsHeader } from "@/components/talent/ResultsHeader";
import { TalentGrid } from "@/components/talent/TalentGrid";
export function TalentResults({
  activeFiltersProps,
  isLoading,
  totalCount,
  talents,
  viewProfile,
  handleBook,
  handleMessage,
  isAuthenticated
}) {
  return (
    <div className="min-h-screen bg-white">
      <ActiveFilters {...activeFiltersProps} />
      <ResultsHeader isLoading={isLoading} resultCount={totalCount} />
      <TalentGrid 
        talents={talents} 
        isLoading={isLoading} 
        onTalentClick={viewProfile} 
        handleBook={handleBook} 
        handleMessage={handleMessage} 
        isAuthenticated={isAuthenticated} 
        clearFilters={activeFiltersProps.clearFilters} 
      />
    </div>
  );
}
export default TalentResults;