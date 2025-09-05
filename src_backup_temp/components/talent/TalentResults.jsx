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
import React from 'react';

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
