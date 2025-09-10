import { TalentCard } from "@/components/talent/TalentCard";
<<<<<<< HEAD:temp_backup/components/talent/TalentGrid.tsx
import { TalentProfile } from "@/types/talent";

export interface TalentGridProps {
  talents: TalentProfile[];
  isLoading: boolean;
  onTalentClick: (id: string) => void;
  savedTalentIds: string[];
  onToggleSave: (id: string, isSaved: boolean) => void;
  isAuthenticated: boolean;
  viewProfile?: (id: string) => void;
  clearFilters?: () => void;
  handleRequestHire?: (talent: TalentProfile) => void;
}

export function TalentGrid({ 
  talents, 
  isLoading, 
  onTalentClick, 
  savedTalentIds,
  onToggleSave,
  isAuthenticated,
  viewProfile,
  clearFilters,
  handleRequestHire
}: TalentGridProps) {
  const handleRequestHireInternal = (talent: TalentProfile) => {
    if (handleRequestHire) {
      handleRequestHire(talent);
    } else {
      // Default implementation
      console.log("Request to hire:", talent.id);
    }
  };

  const handleViewProfile = (id: string) => {
    if (viewProfile) {
      viewProfile(id);
    } else {
      onTalentClick(id);
    }
  };
  
  if (isLoading) {
    return <div className="py-8 text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan mx-auto mb-4"></div>
      <p className="text-zion-cyan">Loading talent profiles...</p>
    </div>;
  }

  if (!talents || talents.length === 0) {
    return <div className="py-8 text-center bg-zion-blue-dark rounded-lg border border-zion-blue-light p-6">
=======
import { TalentSkeleton } from "@/components/talent/TalentSkeleton";
export function TalentGrid({ talents, isLoading, onTalentClick, isAuthenticated, viewProfile, clearFilters, handleBook, handleMessage }) {
    const handleBookInternal = (talent) => {
        if (handleBook) {
            handleBook(talent);
        }
        else {
            console.log("Book talent:", talent.id);
        }
    };
    const handleMessageInternal = (talent) => {
        if (handleMessage) {
            handleMessage(talent);
        }
        else {
            onTalentClick(talent.id);
        }
    };
    if (isLoading) {
        return <TalentSkeleton />;
    }
    if (!talents || talents.length === 0) {
        return <div className="py-8 text-center bg-zion-blue-dark rounded-lg border border-zion-blue-light p-6">
>>>>>>> origin/backup-improvements-20250827-015311:src/components/talent/TalentGrid.tsx
      <p className="text-zion-slate-light mb-4">No talents found matching your criteria</p>
      {clearFilters && (<button onClick={clearFilters} className="px-4 py-2 bg-zion-purple text-white rounded hover:bg-zion-purple-dark transition-colors">
          Clear Filters
        </button>)}
    </div>;
<<<<<<< HEAD:temp_backup/components/talent/TalentGrid.tsx
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {talents.map((talent) => (
        <TalentCard
          key={talent.id}
          talent={talent}
          onViewProfile={() => handleViewProfile(talent.id)}
          onRequestHire={() => handleRequestHireInternal(talent)}
          isSaved={savedTalentIds.includes(talent.id)}
          onToggleSave={onToggleSave}
          isAuthenticated={isAuthenticated}
        />
      ))}
    </div>
  );
=======
    }
    return (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {talents.map((talent) => (<TalentCard key={talent.id} talent={talent} onMessage={() => handleMessageInternal(talent)} onBook={() => handleBookInternal(talent)} isAuthenticated={isAuthenticated}/>))}
    </div>);
>>>>>>> origin/backup-improvements-20250827-015311:src/components/talent/TalentGrid.tsx
}
