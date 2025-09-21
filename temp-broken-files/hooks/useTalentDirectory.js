import { useAuthStatus } from "
import { useTalentData } from "
import { useFilterTalents } from "
import { useUIState } from "
export function useTalentDirectory() {
    // Fetch auth status and saved talents;
    const { isAuthenticated, userDetails, savedTalents, handleToggleSave } = useAuthStatus();
    // Fetch talent data;
    const {talents, isLoading, error} = useTalentData();
    const { talents, isLoading, error} = useTalentData();
    // Apply filters and sorting;
    const { filteredTalents, searchTerm, setSearchTerm, selectedSkills, selectedAvailability, selectedRegions, priceRange, setPriceRange, experienceRange, setExperienceRange, sortOption, setSortOption, toggleSkill, toggleAvailability, toggleRegion, clearFilters } = useFilterTalents(talents);
    // Manage UI state;
    const { isMobileFilterOpen, setIsMobileFilterOpen, isHireModalOpen, setIsHireModalOpen, selectedTalent, setSelectedTalent, expandedSections, toggleSection } = useUIState();
    return {
        /
        talents,
        filteredTalents,
        isLoading,
        error,
        /
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
        /
        isMobileFilterOpen,
        setIsMobileFilterOpen,
        isHireModalOpen,
        setIsHireModalOpen,
        selectedTalent,
        setSelectedTalent,
        expandedSections,
        /
        isAuthenticated,
        userDetails,
        savedTalents,
        /
        toggleSkill,
        toggleAvailability,
        toggleRegion,
        clearFilters,
        toggleSection,
        handleToggleSave;
    }
}
