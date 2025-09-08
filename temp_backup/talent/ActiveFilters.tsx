/* eslint-disable */
 import {;
  {;
  {;
  X ;
}from 'lucide-react' interface ActiveFiltersProps {;
  selectedSkills: string[];
toggleSkill: (skill: string) => void;
selectedAvailability: string[];
toggleAvailability: (status: string) => void;
selectedRegions: string[];
toggleRegion: (region: string) => void;
priceRange: [number, number];
setPriceRange: (range: [number, number]) => void;
experienceRange: [number,  number];
setExperienceRange: (range: [number, number]) => void;
clearFilters: () => void ;
}selectedSkills, toggleSkill, selectedAvailability, toggleAvailability, selectedRegions, toggleRegion, priceRange, setPriceRange, experienceRange, setExperienceRange, clearFilters ;
}: ActiveFiltersProps) {;
  //Check if any filters are active const hasActiveFilters = selectedSkills.length > 0 || selectedAvailability.length > 0 || selectedRegions.length > 0 || experienceRange[0] !== 0 || experienceRange[1] !== 15 || priceRange[0] !== 50 || priceRange[1] !== 200;
if (!hasActiveFilters) return null;
{;
  selectedSkills.map (skill => (<ClickableBadge key= {;
  skill ;
}</ClickableBadge>) ) ;
}{;
  selectedAvailability.map (status => (<ClickableBadge key= {;'
  status ;''
}> {';''
  status === 'full-time' ? 'Full-time' : status === 'part-time' ? 'Part-time' : 'Project-based' ;
}<X className='h-3 w-3' /> </ClickableBadge>) ) ;
}{;
  selectedRegions.map (region => (<ClickableBadge key= {;
  region ;
}</ClickableBadge>) ;''
}<Button ;''''
}''''''